#
# Makefile -	(C) 2013 by Romano Kleinwächter
#		E-Mail: romano.kleinwaechter@gmail.com
# ###########################################################################
#
#
# [DONATION]
#
# Bitcoin:	1HtGPhKPrqJijS6ofUQ3r6zTuVrbVcbXKC
# Litecoin:	LKP9wa9JmDDh37XzAq31KyZR3HYBEGF589
# Primecoin:	AZbJUUbSkWuV8fvTNieQbAmPGBNEhAjSsm
#


#
# Konfiguration
#

## Aktuelles Datum und Uhrzeit
DATE		= $(shell date +'%Y-%m-%e %H:%M:%S')

## Regex für Builddate
BUILDREGEX	= 's/XXXBUILDDATEXXX/${DATE}/g'

## Namenspräfix der Libdatei
LIBNAME		= rkl

## Google Closurecompiler und Java
CLOSURE_HOME	= /var/local/google/jsc.jar
JAVA		= $(shell which java)

## Javascript compiler
JSC_FLAGS	= --charset=UTF-8 \
		--language_in=ECMASCRIPT5 \
		--compilation_level=ADVANCED_OPTIMIZATIONS \
		--use_types_for_optimization \
		--create_name_map_files=true
JSC		= ${JAVA} -jar ${CLOSURE_HOME} ${JSC_FLAGS}

## Typescriptcompiler
TSC_HOME	= $(shell which tsc)
TSC_FLAGS	= --target ES5 \
		--removeComments
export TSC	= ${TSC_HOME} ${TSC_FLAGS}

## Verzeichnisse
COMPONENTS	= crypt

## Phony targes
.PHONY:		all clean


#
# Bibliothek erzeugen
#
all:
	## Komponenten kompilieren
	for i in $(COMPONENTS); do make -C src/$$i; done
	make -C $(CURDIR) finally


#
# Finales zusammenführen der Komponenten
#
finally:
	if [ -e build/${LIBNAME}.js ]; then unlink build/${LIBNAME}.js; fi
	if [ -e build/${LIBNAME}.min.js ]; then unlink build/${LIBNAME}.min.js; fi
	find src/ -type f -name "rkl*.js" -exec cat {} >> build/${LIBNAME}.js \;

	## Mit dem Google Closurecompiler den Code optimieren und komprimieren
	$(JSC) --js=build/${LIBNAME}.js --js_output_file=build/${LIBNAME}.min.js

	## Copyright hinzufügen
	cat ./copyright >> .tmp && cat build/${LIBNAME}.js >> .tmp && mv .tmp build/${LIBNAME}.js
	cat ./copyright >> .tmp && cat build/${LIBNAME}.min.js >> .tmp && mv .tmp build/${LIBNAME}.min.js

	## Builddatum setzen
	sed ${BUILDREGEX} build/${LIBNAME}.js > build/${LIBNAME}.js.sed
	sed ${BUILDREGEX} build/${LIBNAME}.min.js > build/${LIBNAME}.min.js.sed
	mv build/${LIBNAME}.js.sed build/${LIBNAME}.js
	mv build/${LIBNAME}.min.js.sed build/${LIBNAME}.min.js

	## Immer Tree der aktuellen Struktur erzeugen
	tree > tree.txt

#
# Aufräumen
#
clean:
	if [ -f "tree.txt" ]; then unlink "tree.txt"; fi
	for i in $(COMPONENTS); do make clean -C src/$$i; done
	rm -f build/*

