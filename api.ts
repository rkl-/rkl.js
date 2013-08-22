/**
 * api.ts -	(C) 2013 by Romano Kleinwächter
 *		E-Mail: romano.kleinwaechter@gmail.com
 * ***************************************************
 *
 * Schnittstelle zu den Bibliotheksfunktionen
 */

/** MVC referenzieren */
///<reference path='src/mvc/CModel.ts'/>
///<reference path='src/mvc/CView.ts'/>
///<reference path='src/mvc/CController.ts'/>

/** Exceptions referenzieren */
///<reference path='src/eca/codes.ts'/>
///<reference path='src/eca/AException.ts'/>
///<reference path='src/eca/CMissingDependency.ts'/>
///<reference path='src/eca/CAbstractMethod.ts'/>
///<reference path='src/eca/CInvalidPassphrase.ts'/>
///<reference path='src/eca/CInvalidHash.ts'/>
///<reference path='src/eca/CNotMySignature.ts'/>

/** Eigene Hashfunktionen referenzieren */
///<reference path='src/hash/sha256.ts'/>
///<reference path='src/hash/utf8CRC32.ts'/>

/** ECC Referenzen */
///<reference path='src/ecc/ISignedData.ts'/>
///<reference path='src/ecc/CSignedData.ts'/>
///<reference path='src/ecc/ASJCLKeypair.ts'/>
///<reference path='src/ecc/CElgamalPair.ts'/>
///<reference path='src/ecc/CEcdsaPair.ts'/>
///<reference path='src/ecc/CKeypair.ts'/>

module rkl
{
	/** ************************************************************ */
	/** ********************* VORBEREITUNGEN *********************** */
	/** ************************************************************ */
	/** MVC Modell */
	export var $m: mvc.CModel = null; // Datenmodell
	export var $v: mvc.CView = null; // View
	export var $c: mvc.CController = null; // Controller

	/** Externe Bibliotheken */
	export declare var sjcl; // Stanford Javascript Crypto Library
	/** ************************************************************ */
	/** ************************************************************ */
	/** ************************************************************ */


	/** ************************************************************ */
	/** ************************** INIT **************************** */
	/** ************************************************************ */
	try {
		// Stanford Javascript Crypto Library wird benötigt
		if(typeof(sjcl)==='undefined') {
			throw new eca.CMissingDependency(
				'missing required stanford javascript crypto library'
			);
		}

		// MVC instanzieren
		$m = new mvc.CModel();
		$v = new mvc.CView();
		$c = new mvc.CController();
	}

	/** Fehler abfangen */
	catch(e) {
		if($v===null) $v = new mvc.CView();
		$v.printError(e);
	}
	/** ************************************************************ */
	/** ************************************************************ */
	/** ************************************************************ */


	/** ************************************************************ */
	/** ********************* SCHLÜSSELPAARE *********************** */
	/** ************************************************************ */
	/**
	 * Ein ECC basiertes Schlüsselpaar erzeugen
	 *
	 * @param _pph Passphrase
	 */
	export function genECCKeys(_pph: string) {
		try {
			$m.keys = new ecc.CKeypair(_pph);
			$m.keys.genkeys();
		}
		catch(e) { $v.printError(e); }
	}

	/**
	 * Passphrase zum entsperren der privaten Schlüssel ändern.
	 * Um nichts auszulassen gehen wir die Umwege über exportieren und
	 * importieren.
	 *
	 * @param _old Alte Passphrase
	 * @param _new Neue Passphrase
	 * @throws CInvalidPassphrase Bei falscher Passphrase
	 */
	export function changePassphrase(_old: string, _new: string) {
		// Lassen sich die Schlüssel mit der alten Passphrase
		// importieren so ist diese korrekt. Andernfalls wird eine
		// Exception geworfen.
		// TODO CKeypair->import(_old, CKeypair->export())

		// Nun kann die neue Passphrase übernommen werden. Beim nächsten
		// Export der privaten Schlüssel sollte nur noch diese funktionieren.
		$m.keys.setPassphrase(_new);		

		// Wir resetten die privaten gesperrten Schlüssel indem wir sie mit der
		// neuen Passphrase exportieren und wieder importieren. Wird keine Exception
		// geworfen, so sollten unsere Privatekeys nun mit der neuen Passphrase gesperrt sein.
		// TODO CKeypair->import(_new, CKeypair->export())
	}
	/** ************************************************************ */
	/** ************************************************************ */
	/** ************************************************************ */


	/** ************************************************************ */
	/** ************** VERSCHLÜSSELN / ENTSCHLÜSSELN *************** */
	/** ************************************************************ */
	/**
	 * Einen UTF-8 String verschlüsseln
	 *
	 * @param _str Eingabetext
	 * @return string (Base64)
	 */
	export function utf8Encrypt(_str) {
		var enc: string = $m.keys.getElgamal().encrypt(_str);
		return $m.base64.fromBits($m.utf8str.toBits(enc));
	}

	/**
	 * Einen UTF-8 String entschlüsseln
	 *
	 * @param _str Eingabetext (Base64)
	 * @return string (UTF-8)
	 */
	export function utf8Decrypt(_str) {
		return $m.keys.getElgamal().decrypt(_str);
	}

	/**
	 * Ein Javascript Objekt verschlüsseln
	 *
	 * @param _obj Objekt
	 * @return string (Base64)
	 */
	export function objEncrypt(_obj: Object) {
		return utf8Encrypt(JSON.stringify(_obj));
	}

	/**
	 * Ein Objekt entschlüsseln
	 *
	 * @param _str Verschlüsselter String
	 * @return Javascript Objekt
	 */
	export function objDecrypt(_str: string) {
		return JSON.parse(utf8Decrypt(_str));
	}
	/** ************************************************************ */
	/** ************************************************************ */
	/** ************************************************************ */


	/** ************************************************************ */
	/** ******************* SIGNIEREN UND PRÜFEN ******************* */
	/** ************************************************************ */
	/**
	 * Einen UTF-8 String unterschreiben
	 *
	 * @param _str Eingabestring
	 * @return ISignedData
	 */
	export function utf8Sign(_str) {
		return $m.keys.getEcdsa().sign(_str).toObject();
	}

	/**
	 * Ein Javascript Objekt signieren
	 *
	 * @param _obj Javascript Objekt
	 * @return CSignedData
	 */
	export function objSign(_obj) {
		return utf8Sign(JSON.stringify(_obj));
	}

	/**
	 * Die eigene Signatur auf ein Signed-Objekt prüfen
	 *
	 * @param _sign ISignedData
	 * @return true Bei Erfolg
	 */
	export function isMySignature(_sign: ecc.ISignedData) {
		try { return $m.keys.getEcdsa().verify(_sign); }
		catch(e) { $v.printError(e); }
	}
	/** ************************************************************ */
	/** ************************************************************ */
	/** ************************************************************ */
}

