/**
 * utils.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 */

module rkl.fin.generic.utils {
	/**
	 * Einen Wert auf n-Nachkommastellen runden
	 * 
	 * @param val Der zu rundende Wert
	 * @param n Die Anzahl der Nachkomastellen
	 *
	 * @return number
	 */
	export function round(val:number, n:number): number {
		// Runden und zurück geben
		var factor: number = Math.pow(10, n);
		return (Math.floor(val * factor) / factor);
	}
}

