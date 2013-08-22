/**
 * CKeypair.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 *
 * Verwaltung eines ECC basierten Schlüsselpaares
 */

module rkl.crypt.ecc
{
	/** globale Scopedaten */
	var ECC_KEYLEN: number = 384;

	/**
	 * Ein Schlüsselpaar welches ais zwei Paaren besteht
	 */
	export class CKeypair {
		/** private Daten */
		private mElgamal: CElgamalPair = null; // Zum ver- und entschlüsseln
		private mEcdsa: CEcdsaPair = null; // Zum signieren
		private mPassphrase: string = null; // Zum sperren und entsperren der privaten Schlüssel

		/**
		 * Konstruktor um ein Schlüsselpaar anzulegen
		 *
		 * @param _pph Passphrase für privaten Schlüssel
		 */
		constructor(_pph: string) {
			// Schlüsselpaare instanzieren
			this.mElgamal = new CElgamalPair();
			this.mEcdsa = new CEcdsaPair();
		}

		/**
		 * Passphrase ändern/setzen
		 *
		 * @param _npph Neue Passphrase
		 */
		public setPassphrase(_npph: string) {
			this.mPassphrase = _npph;
		}

		/**
		 * Schlüsselpaare erzeugen
		 */
		public genkeys() {
			this.mElgamal.generate();
			this.mEcdsa.generate();
		}

		/**
		 * Elgamal Schlüsselpaar erhalten
		 *
		 * @return CElgamalPair
		 */
		public getElgamal() {
			return this.mElgamal;
		}

		/**
		 * Ecdsa Schlüsselpaar erhalten
		 *
		 * @return CEcdsaPair
		 */
		public getEcdsa() {
			return this.mEcdsa;
		}
	}
}
