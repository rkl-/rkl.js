/**
 * CNotMySignature.ts -	(C) 2013 by Romano Kleinwächter
 *				E-Mail: romano.kleinwaechter@gmail.com
 * *******************************************************************
 * 
 * Fehler der geworfen wird, wenn die eigene Signatur nicht stimmt.
 */

module rkl.crypt.eca
{
        export class CNotMySignature extends AException {
                constructor(_message: string=null) {
                        super(ERROR.NMYSIGN, 'notMySignature', _message);
                }
        }
}

