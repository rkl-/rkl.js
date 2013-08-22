/**
 * CMissingDependency.ts -	(C) 2013 by Romano Kleinwächter
 *				E-Mail: romano.kleinwaechter@gmail.com
 * *******************************************************************
 * 
 * Fehler der geworfen wird, wenn eine benötige externe
 * Bibliothek fehlt.
 */

/** Benötigte Referenzen */
///<reference path='AException.ts'/>

module rkl.$$$SKELETON$$$.eca
{
        export class CMissingDependency extends AException {
                constructor(_message: string=null) {
                        super(ERROR.DEP, 'missingDependency', _message);
                }
        }
}

