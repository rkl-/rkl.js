/**
 * ISignedData.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 *
 * Schnittstelle für ECDSA Signaturen
 */

module rkl.crypt.ecc
{
	export interface ISignedData {
		payload:	string;
		signature:	string;
		hash:		string;
	}
}
