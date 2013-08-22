/**
 * codes.ts -	(C) 2013 by Romano Kleinwächter
 *		E-Mail: romano.kleinwaechter@gmail.com
 * ***************************************************
 * 
 * Auflistung aller Fehlercodes
 */

module rkl.crypt.eca {
export enum ERROR {

DEP	= -1, // Fehlende Abhängigkeit
INVPPH	= -2, // Üngültige Passphrase
INVHASH	= -3, // Falscher Hash
NMYSIGN	= -4, // Nicht meine Unterschrift
ABSMETH = -5  // Diese Methode ist abstrakt

}}

