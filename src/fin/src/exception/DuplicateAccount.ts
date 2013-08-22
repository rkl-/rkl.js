/**
 * DuplicateAccount.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Doppelte Kontonummer
 */

module rkl.fin.exception {
	export class DuplicateAccount extends Generic {
		constructor(xmsg:string) {
			super('duplicateAccount', xmsg, -4);
		}
	}
}