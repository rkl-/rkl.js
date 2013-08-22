/**
 * Transaction.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Kontobuchung
 */

module rkl.fin.account {
	/** Benötigte Module */
	var error = rkl.fin.exception;
	
	export class Transaction {
		/** Private Daten */
		private mType: TT;
		private mAccID: number;
		private mAmount: number;
		private mNote: string;

		/**
		 * Konstruktor
		 * 
		 * @param type Typ der Buchung (Eingang oder Ausgang => 'in' oder 'out')
		 * @param accid Kontonummer von der eine Buchung kam oder zu der sie geht
		 * @param amount Betrag der gebucht wird
		 * @param note Buchungsbezeichnung
		 */
		constructor(type: TT, accid: number, amount: number, note: string) {
			// Eingaben prüfen
			if(amount <=0 ) throw new error.InvalidAmount('Transactionamount must be greater then zero');
			if(note.length < 3) throw new error.InvalidValue('Transactionnote with less three characters is required');

			// Daten übernehmen
			this.mType = type;
			this.mAccID = accid;
			this.mAmount = amount;
			this.mNote = note;
		}

		/**
		 * Typ erhalten
		 *
		 * @return TT
		 */
		public getType(): TT {
			return this.mType;
		}

		/**
		 * Betreffende Kontonumme erhalten
		 *
		 * @return number
		 */
		public getAccID() {
			return this.mAccID;
		}

		/**
		 * Betrag erhalten
		 *
		 * return number
		 */
		public getAmount() {
			return this.mAmount;
		}

		/**
		 * Bemerkung erhalten
		 *
		 * return string
		 */
		public getNote() {
			return this.mNote;
		}
	}
}