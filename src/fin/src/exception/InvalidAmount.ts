/**
 * InvalidAmount.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Ungültiger Betrag
 */

module rkl.fin.exception {
	export class InvalidAmount extends Generic {
		constructor(xmsg:string) {
			super('invalidAmount', xmsg, -3);
		}
	}
}