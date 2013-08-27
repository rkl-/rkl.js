#!/bin/sh

## Google Closurecompiler und Java
CLOSURE_HOME=/var/local/google/jsc.jar
JAVA=$(which java)

## Javascript compiler
JSC_FLAGS="--charset=UTF-8 --language_in=ECMASCRIPT5 --compilation_level=SIMPLE_OPTIMIZATIONS --use_types_for_optimization"
JSC="${JAVA} -jar ${CLOSURE_HOME} ${JSC_FLAGS}"


rm -f *.min.js
find ./ -type f -name "*.js" |while read f
do
	${JSC} --js=${f} --js_output_file=${f}.min
	mv ${f}.min $(basename ${f} .js).min.js
done

# EOF
