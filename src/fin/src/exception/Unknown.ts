/**
 * Unknown.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Unbekannter Fehler
 */

module rkl.fin.exception {
	export class Unknown extends Generic {
		constructor(xmsg:string) {
			super('unknown', xmsg, -1);
		}
	}
}