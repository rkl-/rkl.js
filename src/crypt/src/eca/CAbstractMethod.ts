/**
 * CAbstractMethod.ts -	(C) 2013 by Romano Kleinwächter
 *			E-Mail: romano.kleinwaechter@gmail.com
 * ***********************************************************
 * 
 * Fehler der geworfen wird, wenn eine abstrakte Methode aufgerufen wird.
 */

module rkl.crypt.eca
{
        export class CAbstractMethod extends AException {
                constructor(_message: string=null) {
                        super(ERROR.ABSMETH, 'abstractMethod', _message);
                }
        }
}
