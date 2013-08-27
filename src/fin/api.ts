/**
 * api.ts - (C) 2013 Romano Kleinwächter <romano.kleinwaechter@gmail.com>
 */

/** Exceptions */
///<reference path='src/exception/Generic.ts'/>
///<reference path='src/exception/InvalidAmount.ts'/>
///<reference path='src/exception/Unknown.ts'/>
///<reference path='src/exception/DuplicateTransaction.ts'/>
///<reference path='src/exception/InvalidValue.ts'/>
///<reference path='src/exception/BalanceToLow.ts'/>
///<reference path='src/exception/InvalidAccount.ts'/>
///<reference path='src/exception/DuplicateAccount.ts'/>
///<reference path='src/exception/IncompatibleCurrencies.ts'/>

/** Allgemein */
///<reference path='src/generic/utils.ts'/>

/** Währung */
///<reference path='src/currency/Generic.ts'/>

/** Konto */
///<reference path='src/account/types.ts'/>
///<reference path='src/account/History.ts'/>
///<reference path='src/account/Transaction.ts'/>
///<reference path='src/account/Generic.ts'/>

module rkl.fin {
	/** Benötigte Module */
	var error = rkl.fin.exception;
	var account = rkl.fin.account;
	var currency = rkl.fin.currency;

	/** Daten */
	var accounts = {}; // Platzhalter für alle Konten

	/**
	 * Ein allgemeines Konto anlegen
	 *
	 * @param accname Kontoname
	 * @param curname Währungsname
	 * @param curiso Währungszeichen (ISO Konform)
	 * @param curdp Dezimalstellen für Währung
	 * @param accbal Startguthaben
	 * @param id Kontonummer
	 *
	 * @return Account ID
	 */
	export function createGenericAccount(accname: string, curname: string, curiso: string, curdp: number, accbal: number, id: number) {		
		// Eingabe prüfen
		if(accbal < 0)		throw new error.InvalidAmount('Balance for new account must be greater or equal to zero');
		if(curdp < 2)		throw new error.InvalidValue('Decimal place for currency must at least be 2');
		if(accname.length < 3)	throw new error.InvalidValue('Accountname must be at least three letters');
		if(curname.length < 3)	throw new error.InvalidValue('Currencyname must be at least three letters');
		if(curiso.length != 3)	throw new error.InvalidValue('Currency ISO-Sign must have three letters');
		if(accounts[id])	throw new error.DuplicateAccount('An account with id '+id+' allready exists');

		// Konto anlegen und am Model referenzieren
		var cur: currency.Generic = new currency.Generic(curname, curiso, curdp);
		var acc: account.Generic = new account.Generic(id, accname, accbal, cur);
		accounts[acc.getID()] = acc;

		// Kontonummer zurückgeben
		return acc.getID();
	}

	/**
	 * Konto anhand seiner Kontonummer löschen
	 * 
	 * @param accid Kontonummer
	 */
	export function deleteAccount(accid: number) {
		if(!accounts[accid]) throw new error.InvalidAccount("Account "+accid+" doesn't exists");
		delete accounts[accid]
	}

	/**
	 * Kontenübersicht abrufen
	 * 
	 * @return {...}
	 */
	export function accountsOverview() {
		var list = {};

		for(var id in accounts) {
			var acc = accounts[id];
			var a = {
				'name':		acc.getName(),
				'balance':	acc.getBalance(),
				'currency':	acc.getCurrency().getISO(),
			};
			list[id] = a;
		}
		
		// Liste zurück geben
		return list;
	}

	/**
	 * Kontodaten anhand der Kontonummer erhalten
	 * 
	 * @param accid Kontonummer
	 * @param rw Readonly oder echte Referenz
	 *
	 * @return account oder false
	 */
	export function getAccount(accid: number, rw: boolean=true) {
		// Referenz zurückgeben
		if(rw) {
			if(isAccount(accid)) return accounts[accid];
			return false;
		}

		if(!accounts[accid]) throw new error.InvalidAccount("Account "+accid+" doesn't exists");
		var acc = accounts[accid]; // Konto referenzieren

		// Übersicht erzeugen
		function account() {
				this.details = {
					'id':		acc.getID(),
					'name':		acc.getName(),
					'balance':	acc.getBalance(),
					'currency':	acc.getCurrency(),
					'history':	JSON.parse(JSON.stringify(acc.getHistory()))
				};
		};
		// Als JSON anzeigen
		account.prototype.toJSON = function() {
			return JSON.stringify(this.details);
		};

		// Übersicht zurückgeben
		return new account();
	}

	/**
	 * Testen ob ein Konto existiert
	 * 
	 * @param accid Kontonummer
	 * @return boolean
	 */
	export function isAccount(accid: number) {
		return (!accounts[accid] ? false : true);
	}

	/**
	 * Alle Konten als JSON exportieren
	 * 
	 * @return string
	 */
	export function exportAccounts() {
		var ph = []; // Platzhalter für Export 
		for(var id in accounts) {
			var acc = getAccount(parseInt(id), false);
			ph.push(acc.details);
		}
		return JSON.stringify(ph);
	}

	/**
	 * Konten über einen JSON String importieren
	 * 
	 * @param json JSON String für Import
	 */
	export function importAccounts(json: string) {
		var parsed = JSON.parse(json);

		// Los gehts..
		for(var i in parsed) {
			var obj = parsed[i];
			var cur = obj.currency;

			// Konto erzeugen
			var accid = createGenericAccount(obj.name, cur.mName, cur.mISO, cur.mDp, obj.balance, obj.id);
			var acc = accounts[accid];
			
			// Transaktionen übernehmen
			for(var ts in obj.history.mTransactions) {
				var ref = obj.history.mTransactions[ts];
				var trans = new account.Transaction(ref.mType, ref.mAccID, ref.mAmount, ref.mNote);
				acc.addTransaction(ts, trans);
			}
		}
	}
}
