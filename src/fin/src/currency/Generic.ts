/**
 * Generic.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 *
 * Eine Allgemeine Währung
 */

module rkl.fin.currency {
	export class Generic {
		/** Private Daten */
		private mName:string;
		private mISO:string;
		private mDp:number;

		/**
		 * Konstruktor
		 * 
		 * @param name Name für die Währung
		 * @param isoSign IOS Zeichen (auch für nicht offizielle Währungen)
		 * @param decimalPlace Anzahl der Nachkommastellen
		 */
		constructor(name:string, isoSign:string, decimalPlace:number) {		
			// Daten an eigene Instanz übernehmen
			this.mName = name;
			this.mISO = isoSign.toUpperCase(); // ISO Zeichen in Großbuchstaben
			this.mDp = decimalPlace;
		}

		/**
		 * Name erhalten
		 *
		 * @return string
		 */
		public getName(): string {
			return this.mName;
		}

		/**
		 * ISO Code erhalten
		 *
		 * @return string
		 */
		public getISO(): string {
			return this.mISO;
		}

		/**
		 * Nachkommastellen erhalten
		 *
		 * @return number
		 */
		public getDp(): number {
			return this.mDp;
		}
	}
}
