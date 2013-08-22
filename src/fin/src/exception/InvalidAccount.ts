/**
 * InvalidAccount.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Konto existiert nicht
 */

module rkl.fin.exception {
	export class InvalidAccount extends Generic {
		constructor(xmsg:string) {
			super('invalidAccount', xmsg, -5);
		}
	}
}