/**
 * ASJCLKeypair.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 *
 * Basisimplementierung für SJCL basierte Schlüsselpaare
 */

module rkl.crypt.ecc
{
	/** global für lokalen Scope */
	var ECC_KEYLEN: number = 384;

	export class ASJCLKeypair {
		/** private Daten */
		private mSJCLKeypair: Object = null; // Platzhalter für SJCL Schlüsselpaar
		private mSJCLPubkey: Object = null; // Öffentlicher Schlüssel (SJCL)
		private mSJCLSeckey: Object = null; // Privater Schlüssel (SJCL)

		/**
		 * Konstruktor um ein Schlüsselpaar anzulegen
		 */
		constructor() {
		}

		/**
		 * Ein Schlüsselpaar generieren
		 *
		 * @param _type Typ
		 */
		public generate(_type: string) {
			this.mSJCLKeypair = sjcl.ecc[_type].generateKeys(ECC_KEYLEN, 10);
			this.mSJCLPubkey = this.mSJCLKeypair['pub'];
			this.mSJCLSeckey = this.mSJCLKeypair['sec'];
		}

		/**
		 * Öffentlichen Schlüssel erhalten
		 *
		 * @return Object
		 */
		public getPubkey() {
			return this.mSJCLPubkey;
		}

		/**
		 * Geheimen Schlüssel erhalten
		 *
		 * @return Object
		 */
		public getSeckey() {
			return this.mSJCLSeckey;
		}
	}
}

