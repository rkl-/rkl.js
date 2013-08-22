/**
 * CSignedData.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 *
 * Signatur für ECDSA signierte Daten
 */

module rkl.crypt.ecc
{
	export class CSignedData {
		/** private Daten */
		private mPayload:	string = null;
		private mSignature:	string = null;
		private mHash:		string = null;

		/**
		 * Konstruktor
		 *
		 * @param _payload Payload
		 * @param _signature Signatur
		 * @param _hash SHA256 Hash
		 */
		constructor(_payload: string, _signature: string, _hash: string) {
			this.mPayload	= _payload;
			this.mSignature	= _signature;
			this.mHash	= _hash;
		}

		/**
		 * Payload erhalten
		 *
		 * @return string (Base64)
		 */
		public getPayload() {
			return this.mPayload;
		}

		/**
		 * Signatur erhalten
		 *
		 * @return string (Base64)
		 */
		public getSignature() {
			return this.mSignature;
		}

		/**
		 * Hash erhalten
		 *
		 * @return string (Base64)
		 */
		public getHash() {
			return this.mHash;
		}

		/**
		 * Signatur exportieren
		 *
		 * @return ISignedData
		 */
		public toObject() {
			var obj: ISignedData = {
				'payload':	this.getPayload(),
				'signature':	this.getSignature(),
				'hash':		this.getHash()
			};
			return obj;
		}

		/**
		 * Eigenschaften als JSON erhalten
		 *
		 * @return string
		 */
		public toJSON() {
			return JSON.stringify(this.toObject());
		}
	}
}
