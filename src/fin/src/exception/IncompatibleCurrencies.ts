/**
 * IncompatibleCurrencies.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 * 
 * Nicht kompatible Währungen
 */

module rkl.fin.exception {
	export class IncompatibleCurrencies extends Generic {
		constructor(xmsg:string) {
			super('incompatibleCurrencies', xmsg, -7);
		}
	}
}