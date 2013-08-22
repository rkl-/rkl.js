/**
 * CView.ts -	(C) 2013 by Romano Kleinwächter
 *		E-Mail: romano.kleinwaechter@gmail.com
 * ***************************************************
 *
 * View gemäß MVC
 */

module rkl.crypt.mvc
{
	/**
	 * Basisklasse für View
	 */
	export class CView {
		/**
		 * Einen generischen Fehler ausgeben
		 *
		 * @param _e Fehler
		 */
		public printError(_e: eca.AException) {
			console.error('RKL::CRYPT::ERROR: ' + _e.getMessage());
		}
	}
}
