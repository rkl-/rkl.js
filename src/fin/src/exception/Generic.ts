/**
 * Generic.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Allgemeiner Fehler
 */

module rkl.fin.exception {
	/**
	 * Hack um Error mit rein zu bekommen
	 */
	export declare class ErrorClass implements Error {
		public name: string;
		public message: string;
		constructor(message?: string);
	}
	var ErrorClass = Error;

	/**
	 * Basisklasse für Fehler
	 */
	export class Generic extends ErrorClass {
		/** Private Daten */
		private mExcept: string;
		private mXmsg: string;
		private mCode: number;

		/** Öffentliche Daten */
		public message: string;

		/**
		 * Konstruktor
		 *
		 * @param except Der Fehler an sich
		 * @param xmsg Optionale ergänzende Nachricht
		 * @param code Fehlercode
		 */
		constructor(except:string, xmsg:string, code:number) {
			super(xmsg);
			this.mExcept = except;
			this.mXmsg = xmsg;
			this.mCode = code;

			// Direkte Ausgabe in der Konsole
			this.message = this.mExcept +': '+ this.mXmsg;
		}

		/**
		 * Art des Fehlers erhalten
		 *
		 * @return string
		 */
		public getExcept(): string {
			return this.mExcept;
		}

		/**
		 * Zusatzmeldung erhalten
		 *
		 * @return string
		 */
		public getXmsg(): string {
			return this.mXmsg;
		}

		/**
		 * Fehlercode erhalten
		 *
		 * @return number
		 */
		public getCode(): number {
			return this.mCode;
		}
	}
}
