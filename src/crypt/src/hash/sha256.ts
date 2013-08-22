/**
 * utf8CRC32.ts -	(C) 2013 by Romano Kleinwächter
 *		E-Mail: romano.kleinwaechter@gmail.com
 * ***************************************************
 *
 * Berechnung einen CRC32 Hashwertes. Siehe dazu:
 * http://phpjs.org/functions/crc32/
 */

module rkl.crypt.hash
{
	/**
	 * SHA256 Hash erzeugen
	 *
	 * Diese Funktion ist lediglich ein Wrapper um sjcl.hash.sha256.hash.
	 *
	 * @param _str String der gehast werden soll
	 * @return sjcl.bitArray
	 */
	export function sha256(_str: string) {
		return sjcl.hash['sha256'].hash(_str);
	}
}

