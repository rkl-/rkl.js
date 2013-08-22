#!/bin/bash

#
# init.sh: Komponente für Entwicklung vorberieten
#

## Name der Komponente
COMPNAME=$1

## Name ist relevant
if [ ! "${COMPNAME}" ]
then
	echo "init.sh needs component name as arg1"
	exit -1;
fi

## Regex für sed zum ersetzen
REPLACE="s/\\\$\\\$\\\$SKELETON\\\$\\\$\\\$/${COMPNAME}/g"

## Infoausgabe
echo -n "initializing component ${COMPNAME}... "

## Iteration über alle Sourcefiles
find ./ -type f -name "Makefile" -o -name "*.ts" |while read f
do
	## $$$SKELETON$$$ durch Namen ersetzen
	sed ${REPLACE} ${f} > ${f}.sed
	mv ${f}.sed ${f}
done

## Aufräumen
unlink init.sh
unlink README

## Fertig
echo "done"

# EOF

