/**
 * Generic.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Allgemeines Konto
 */

module rkl.fin.account {
	/** Benötigte Module */
	var error = rkl.fin.exception;
	var utils = rkl.fin.generic.utils;
	var currency = rkl.fin.currency;

	export class Generic {
		/** Private Daten */
		private mID: number; // Kontonummer
		private mName: string;
		private mBalance: number; // Kontostand
		private mCurrency: currency.Generic; // Währung des Kontos
		private mHistory: History; // Kontogeschichte

		/**
		 * Konstruktor für ein allgemeines Konto
		 * 
		 * @param id Kontonummer
		 * @param name Name des Kontos
		 * @param bal Startguthaben
		 * @param cur Währung des Kontos
		 */
		constructor(id: number, name: string, bal: number, cur: currency.Generic) {
			this.mID = id;
			this.mName = name;
			this.mBalance = bal;
			this.mCurrency = cur;
			this.mHistory = new History();
		}

		/**
		 * Kontonummer erhalten
		 *
		 * @return number
		 */
		public getID(): number {
			return this.mID;
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
		 * Kontostand erhalten
		 *
		 * @return number
		 */
		public getBalance(): number {
			return this.mBalance;
		}

		/**
		 * Währung erhalten
		 *
		 * @return currency.Generic
		 */
		public getCurrency(): currency.Generic {
			return this.mCurrency;
		}

		/**
		 * Geschichte erhalten
		 *
		 * @return History
		 */
		public getHistory(): History {
			return this.mHistory;
		}

		/**
		 * Betrag zum Kontostand addieren
		 *
		 * @param amount Betrag
		 */
		public addAmount(amount:number) {
			// Sinnvoller Betrag?
			if(amount <= 0) {
				throw new error.InvalidAmount("Amount to add must be greater than zero");
			}
			this.mBalance += amount;
		}

		/**
		 * Betrag vom Kontostand abziehen
		 *
		 * @param amount Betrag
		 */
		public subAmount(amount:number) {
			// Reicht das Guthaben?
			if(this.mBalance < amount) {
				throw new error.BalanceToLow("Can't substract amount");
			}
			this.mBalance -= amount;
		}

		/**
		 * Eine Transaktion vermerken
		 *
		 * @param ts Zeitstempel in Millesekunden
		 * @param trans Transaktion
		 *
		 * @return boolean
		 */
		public addTransaction(ts: number, trans: Transaction) {
			// Buchung in History speichern
			this.mHistory.addTransaction(ts, trans);

			// Alles gut
			return true;
		}

		/**
		 * Einen Betrag auf ein anderes Konto buchen
		 *
		 * @param dstacc Zielkonto
		 * @param amount Betrag der überwiesen werden soll
		 * @param note Der Überweisungsbetreff
		 *
		 * @return boolean
		 */
		public transfer(dstacc: Generic, amount: number, note: string) {
			// Prüfen ob der Kontostand ausreicht
			if(this.mBalance < amount) {
				throw new error.BalanceToLow("Accountbalance isn't enough to transfer "+amount+" "+this.mCurrency.getISO());
			}

			// Eine Überweisung ist nur möglich, wenn beide Konten die gleiche Währung haben.
			if(this.mCurrency.getISO() != dstacc.getCurrency().getISO()) {
				throw new error.IncompatibleCurrencies('Both accounts needs to have the same currency to transfer an amount');
			}

			// Betrag auf die richtigen Nachkommstellen runden
			amount = utils.round(amount, this.mCurrency.getDp());

			// Lokale- und Zielbuchung erzeugen
			var ltrans: Transaction = new Transaction(TT.OUT, dstacc.getID(), amount, note);
			var rtrans: Transaction = new Transaction(TT.IN, this.mID, amount, note);

			// Timestamp für Buchung erzeugen und beide Buchungen am jeweiligen Konto speichern.
			var ts: number = new Date().getTime();
			this.addTransaction(ts, ltrans);
			dstacc.addTransaction(ts, rtrans);

			// Beträge anpassen
			this.subAmount(amount); // Überweisungsbetrag vom Sender abziehen
			dstacc.addAmount(amount); // Überweisungsbetrag den Empfänger gutschreiben

			// Alles gut
			return true;
		}
	}
}
