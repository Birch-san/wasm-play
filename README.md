```bash
# install & activate emsdk:
# https://github.com/emscripten-core/emsdk
# source emsdk env from wherever you installed it
source ~/git/emsdk/emsdk_env.sh
em++ -s ERROR_ON_UNDEFINED_SYMBOLS=0 -g -gsource-map --source-map-base="http://localhost:8080/cpp_out/" -nostdlib -Wl,--no-entry -o cpp_out/vector.wasm cpp/vector.cpp
npm i
npm start
# visit http://localhost:8080
```