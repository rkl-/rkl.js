rkl.js
===

Javascript Bibliothek

### Spenden
Sie können diese Arbeit durch Spenden unterstützen und für zukünftige
Weiterentwicklungen fördern.

    * Bitcoin		1HtGPhKPrqJijS6ofUQ3r6zTuVrbVcbXKC
    * Litecoin		LKP9wa9JmDDh37XzAq31KyZR3HYBEGF589
    * Primecoin		AZbJUUbSkWuV8fvTNieQbAmPGBNEhAjSsm

### Copyright & Lizenz
Copyright 2013 Romano Kleinwächter - Alle Rechte vorbehalten

Das Projekt unterliegt der MIT Lzenz, siehe dazu:
[MIT-Lizenz](http://de.wikipedia.org/wiki/MIT-Lizenz).
Verwendete Bibliotheken unterliegen deren jeweiligen Lizenzen.

### Abhängigkeiten
Bibliotheken

    * SJCL mit ECC Komponente https://github.com/bitwiseshiftleft/sjcl

Node.js

    * node
    * npm
    * typescript

Sonstiges

    * sed
    * tree
    * GNU make
    * Java
    * Closure Compiler https://developers.google.com/closure/compiler

### Hinweise
Da das Projekt in Typescript entwickelt ist wird der tsc-Compiler
benötigt, welcher im Paket typescript mit enthalten ist. Da zudem der
Closure Compiler verwendet wird, ist Java nötig, denn der Compiler
liegt in einer jar-File vor.

### Komponenten
**rkl.fin**: API für einfache Finanzverwaltungen. Aktuell lassen sich
Konten erstellen und Gelder transferieren.

**rkl.crypt**: Das aktuelle Herzstück ist das kryptografische API. Es
basiert auf der [SJCL](https://github.com/bitwiseshiftleft/sjcl), daher
ist diese zwingend erforderlich.

### Kompilieren
Dieser Schritt ist im Grunde unnötig, da bereits im Verzeichnis *build*
die aktuelleste Version geliefert wird. Die *rkl.js* ist das Resultat
des tsc-Compilers und die *rkl.min.js* das Resultat des tsc-Compilers
mit nachträglichem Durchgang des Closure Compilers.

Möchte man die Library jedoch selbst bauen, sollten zunächst die oben
genannten Abhängigkeiten erfüllt sein. **Wichtig**: Danach muss die
*Makefile* angepasst werden damit die Pfade zu den verwendeten Tools
korrekt sind. Der Pfad für Java und tsc wird via *whereis* über
die Shell ermittelt. Der Pfad vom Closure Compiler muss defintiv von
Hand angepasst werden. Die relevante Variabel lautet **CLOSURE_HOME**
und muss auf das jar-File des Compilers verweisen. Über die Variabel
**COMPONENTS** kann bestimmt werden, welche Komponenten in Javascript
kompiliert werden sollen, falls nicht alle benötigt werden.

Wenn die Makefile konfiguriert ist genügt in der Regel nur ein *make*
und die Library wird gebaut. Das fertigte Javascript liegt dann im
*build* Verzeichnis. Noch mal zusammengefasst:

**Bibliothek kompilieren**

    * Abhängige Tools sicherstellen
    * Makefile anpassen
    * make ausführen
    * Kompilat liegt im build Verzeichnis

### Eigene Komponenten
Möchte man eigene Komponenten entwickeln, so kann man das Verzeichnis
*#skeleton* unter *src* als Vorlage verwenden. Das Verezichnis
muss einfach zu dem gewünschten Komponentennamen kopiert werden und
anschließend das *init.sh* Skript mit dem Namen als Argument aufgerufen
werden. Nun ist eine MVC basierte Vorlage für die neue Komponente
vorhanden. Abschließnd muss die Komponente noch in der Makefile
hinterlegt werden. Hier noch mal als Zusammenfassung:

**Komponente initialisieren**

    * cd src
    * cp -ad \\#skeleton <MEINE_KOMPONENTE>
    * cd <MEINE_KOMPONENTE>
    * ./init.sh <MEINE_KOMPONENTE>
    * cd ../..
    * vim Makefile (anpassen)

