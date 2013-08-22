/**
 * DuplicateTransaction.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Eine Buchung zu dieser Zeit existiert schon
 */

module rkl.fin.exception {
	export class DuplicateTransaction extends Generic {
		constructor(xmsg:string) {
			super('duplicateTransaction', xmsg, -2);
		}
	}
}