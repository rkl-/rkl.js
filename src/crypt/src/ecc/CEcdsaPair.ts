/**
 * CEcdsaPair.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 *
 * Ein ECDSA Schlüsselpaar dient zum signieren von Daten.
 * Siehe: http://de.wikipedia.org/wiki/Elliptic_Curve_DSA
 */

module rkl.crypt.ecc
{
	export class CEcdsaPair extends ASJCLKeypair {
		/**
		 * Konstruktor um ein Schlüsselpaar anzulegen
		 */
		constructor() {
			super();
		}

		/**
		 * Ein Schlüsselpaar generieren
		 */
		public generate() {
			super.generate('ecdsa');
		}

		/**
		 * Einen String unterschreiben
		 *
		 * @param _str Eingabestring
		 * @return CSignedData
		 */
		public sign(_str: string) {
			var key = this.getSeckey();
			var shash: string = hash.sha256(_str);
			var signature: Object = key['sign'](shash, 0);

			return new ecc.CSignedData(
				_str,
				$m.base64.fromBits(signature),
				$m.base64.fromBits(shash)
			);
		}

		/**
		 * Auf gültige Signatur prüfen
		 *
		 * @param _sign ISignedData
		 * @throws CInvalidHash Bei falschem Hash
		 * @throws CNotMySignature Bei falscher Signatur
		 * @return true bei Erfolg
		 */
		public verify(_sign: ISignedData) {
			var shash = hash.sha256(_sign.payload);
			var key = this.getPubkey();

			// Bei falschem Hash Fehler werfen
			if($m.base64.fromBits(shash) !== _sign.hash) {
				throw new eca.CInvalidHash('at verifing own signature');
			}

			// Signatur prüfen
			try { key['verify'](shash, $m.base64.toBits(_sign.signature)); }
			catch(e) { throw new eca.CNotMySignature(e); }

			// Signatur ist gültig
			return true;
		}
	}
}

