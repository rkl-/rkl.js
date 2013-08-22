/**
 * CInvalidHash.ts -	(C) 2013 by Romano Kleinwächter
 *				E-Mail: romano.kleinwaechter@gmail.com
 * *******************************************************************
 * 
 * Fehler der geworfen wird, wenn ein Hashwert falsch ist.
 */

module rkl.crypt.eca
{
        export class CInvalidHash extends AException {
                constructor(_message: string=null) {
                        super(ERROR.INVHASH, 'invalidHash', _message);
                }
        }
}

