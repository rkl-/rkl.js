/**
 * AException.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 * 
 * Fehlerbehandlung
 */

module rkl.$$$SKELETON$$$.eca
{
        /**
         * Javascript Hack um einen richtigen Fehler zu werfen
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
	export class AException extends ErrorClass {
		/** private Daten */
		private mCode: number;
		private mTitle: string;
		private mMessage: string;

		/** öffentliche Daten */
		public message: string; // Für Error

		/**
		 * Konstruktor
		 */
		constructor(_code: number, _title: string, _message: string) {
			super(_message);
			this.mCode = _code;
			this.mTitle = _title;
			this.mMessage = _message;
			this.message = _title + ': '+ _message;
		}

		/**
		 * Fehlercode erhalten
		 *
		 * @return number
		 */
		public getCode() {
			return this.mCode;
		}

		/**
		 * Fehlerbezeichnung erhalten
		 *
		 * @return string
		 */
		public getTitle() {
			return this.mTitle;
		}

		/**
		 * Fehlermeldung erhalten
		 *
		 * @return string
		 */
		public getMessage() {
			return this.mMessage;
		}
	}
}

