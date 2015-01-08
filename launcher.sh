#!/bin/bash

GJS_CONSOLE=/usr/bin/gjs-console
JS_DIR=$PWD

exec $GJS_CONSOLE -I $JS_DIR -c "const Main = imports.main; Main.start();" "$@"


