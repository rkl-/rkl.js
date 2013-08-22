/**
 * BalanceToLow.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Kontostand ist zu gering
 */

module rkl.fin.exception {
	export class BalanceToLow extends Generic {
		constructor(xmsg:string) {
			super('balanceToLow', xmsg, -6);
		}
	}
}