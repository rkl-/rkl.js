/**
 * CInvalidPassphrase.ts -	(C) 2013 by Romano Kleinwächter
 *				E-Mail: romano.kleinwaechter@gmail.com
 * *******************************************************************
 * 
 * Fehler der geworfen wird, wenn eine falsche Passphrase eingegeben wurde.
 */

module rkl.crypt.eca
{
        export class CInvalidPassphrase extends AException {
                constructor(_message: string=null) {
                        super(ERROR.INVPPH, 'invalidPassphrase', _message);
                }
        }
}

