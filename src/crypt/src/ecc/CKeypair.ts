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
	var AES_KEYLEN: number = 256;
	var ITERATIONS: number = 2500;

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
			this.mPassphrase = _pph;
		}

		/**
		 * Passphrase ändern/setzen
		 *
		 * @param _npph Neue Passphrase
		 */
		public setPassphrase(_npph: string): void {
			this.mPassphrase = _npph;
		}

		/**
		 * Schlüsselpaare erzeugen
		 */
		public genkeys(): void {
			this.mElgamal.generate();
			this.mEcdsa.generate();
		}

		/**
		 * Elgamal Schlüsselpaar erhalten
		 *
		 * @return CElgamalPair
		 */
		public getElgamal(): CElgamalPair {
			return this.mElgamal;
		}

		/**
		 * Ecdsa Schlüsselpaar erhalten
		 *
		 * @return CEcdsaPair
		 */
		public getEcdsa(): CEcdsaPair {
			return this.mEcdsa;
		}

		/**
		 * Schlüsselpaar exportieren
		 *
		 * @return Object
		 */
		public exportKeys(): Object {
			// Hilfsfunktion um den öffentlichen Schlüssel zu exportieren
			function expPub(_pair: ASJCLKeypair): string {
				var key: Object = _pair.getPubkey();

				return JSON.stringify ({
					'len':		key['_curveBitLength'],
					'point':	key['_point']['toBits']()
				});
			}

			// Hilfsfunktion um den privaten Schlüssel zu exportieren
			function expSec(_pair: ASJCLKeypair): string {
				var key: Object = _pair.getSeckey();

				return JSON.stringify ({
					'exp':	key['_exponent']['toBits'](),
					'len':	key['_curveBitLength']
				});
			}

			// Salt erzeugen um die Passphrase zu versalzen
			var salt: Array = sjcl['random']['randomWords'](13, 10);

			// Hier werden die privaten Schlüssel verschlüsselt (gesperrt).
			// Glücklicherweise arbeit die SJCL intern mit PBKDF2, sodass
			// uns diese Arbeit hier abgenommen wird.
			var elgamalSec = sjcl['encrypt'](
				this.mPassphrase,
				expSec(this.mElgamal),
				{'ks': AES_KEYLEN, 'iter': ITERATIONS, 'salt': salt}
			);

			var ecdsaSec = sjcl['encrypt'](
				this.mPassphrase,
				expSec(this.mEcdsa),
				{'ks': AES_KEYLEN, 'iter': ITERATIONS, 'salt': salt}
			);

			// Die öffentlichen Schlüssel werden einfach serialisiert.
			var elgamalPub	= expPub(this.mElgamal);
			var ecdsaPub	= expPub(this.mEcdsa);

			// Exportobjekt anlegen
			var exp: Object = {
				'pubs':	{'enc': elgamalPub, 'sign': ecdsaPub},
				'secs':	{'enc': elgamalSec, 'sign': ecdsaSec}
			};

			// Rückgabe
			return exp;
		}
	}
}
