/**
 * InvalidValue.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Allgemein ein falscher Wert
 */

module rkl.fin.exception {
	export class InvalidValue extends Generic {
		constructor(xmsg:string) {
			super('invalidVlaue', xmsg, -8);
		}
	}
}