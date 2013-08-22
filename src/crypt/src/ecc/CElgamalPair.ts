/**
 * CElgamalPair.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 *
 * Ein Elgamal Schlüsselpaar dient zum ver- und entschlüsseln von Daten.
 * Siehe: http://de.wikipedia.org/wiki/Elgamal-Verschl%C3%BCsselungsverfahren
 */

module rkl.crypt.ecc
{
	/** global für diesen Scope */
	var ITERATIONS:	number = 2999;
	var AESKEYLEN:	number = 256;

	export class CElgamalPair extends ASJCLKeypair {
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
			super.generate('elGamal');
		}

		/**
		 * Einen UTF-8 String verschlüsseln
		 *
		 * @param _str Eingabestring
		 * @return string
		 */
		public encrypt(_str: string) {
			var key: Object = this.getPubkey();
			return sjcl.encrypt(key, _str, {
				iter:	ITERATIONS,
				ks:	AESKEYLEN
			});
		}

		/**
		 * Einen Base64 String entschlüssel
		 *
		 * @param _str Eingabestring
		 * @return string
		 */
		public decrypt(_str: string) {
			var key: Object = this.getSeckey();
			var dec: string = sjcl.decrypt(key,
				$m.utf8str.fromBits($m.base64.toBits(_str)), {
				iter:	ITERATIONS,
				ks:	AESKEYLEN
			});
			return dec;
		}
	}
}
