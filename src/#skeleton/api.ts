/**
 * api.ts -	(C) 2013 by Romano Kleinwächter
 *		E-Mail: romano.kleinwaechter@gmail.com
 * ***************************************************
 *
 * Schnittstelle zu den Bibliotheksfunktionen
 */

/** MVC referenzieren */
///<reference path='src/mvc/CModel.ts'/>
///<reference path='src/mvc/CView.ts'/>
///<reference path='src/mvc/CController.ts'/>

/** Exceptions referenzieren */
///<reference path='src/eca/codes.ts'/>
///<reference path='src/eca/CMissingDependency.ts'/>

module rkl.$$$SKELETON$$$
{
	/** ************************************************************ */
	/** ********************* VORBEREITUNGEN *********************** */
	/** ************************************************************ */
	/** MVC Modell */
	export var $m: mvc.CModel = null; // Datenmodell
	export var $v: mvc.CView = null; // View
	export var $c: mvc.CController = null; // Controller

	/** Externe Bibliotheken */
	// TODO
	/** ************************************************************ */
	/** ************************************************************ */
	/** ************************************************************ */


	/** ************************************************************ */
	/** ************************** INIT **************************** */
	/** ************************************************************ */
	try {
		// MVC instanzieren
		$m = new mvc.CModel();
		$v = new mvc.CView();
		$c = new mvc.CController();

		// TODO Auf abhängige Bibliotheken prüfen
		/*if(typeof($$$XXX$$$)==='undefined') {
			throw new $m.eca.CMissingDependency(
				'missing required $$$XXX$$$ library'
			);
		}*/
	}

	/** Fehler abfangen */
	catch(e) {
		$v.printError(e);
	}
	/** ************************************************************ */
	/** ************************************************************ */
	/** ************************************************************ */
}

