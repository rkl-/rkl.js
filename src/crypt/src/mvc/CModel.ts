/**
 * CModel.ts -	(C) 2013 by Romano Kleinwächter
 *		E-Mail: romano.kleinwaechter@gmail.com
 * ***************************************************
 *
 * Datenmodell gemäß MVC
 */

module rkl.crypt.mvc
{
	/**
	 * Basisklasse für Datenmodell
	 */
	export class CModel {
		/** SJCL Referenzen */
		public utf8str	= sjcl['codec']['utf8String'];
		public base64	= sjcl['codec']['base64'];
		public hex	= sjcl['codec']['hex'];
		public bArray	= sjcl['bitArray'];

		/** Instanzen */
		public keys: ecc.CKeypair = null;
	}
}
