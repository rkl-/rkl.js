/**
 * History.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Geschichte eines Kontos
 */

module rkl.fin.account {
	/** Benötigte Module */
	var error = rkl.fin.exception;
	
	export class History {
		/** Private Daten */
		private mTransactions = {}; // Buchungen

		/**
		 * Transaktionen erhalten
		 *
		 * @return {...}
		 */
		public getTransactions() {
			return this.mTransactions;
		}

		/**
		 * Transaktion hinzufügen
		 *
		 * @param ts Zeitstempel
		 * @param t Transaktion
		 */
		public addTransaction(ts: number, t: Transaction) {

			// Doppelte Buchungszeitpunkte sind verboten
			if(this.mTransactions[ts]) {
				throw new error.DuplicateTransaction(null);
			}
			// Transaktion speichern
			this.mTransactions[ts] = t;
		}
	}
}