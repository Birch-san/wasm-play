interface Exports extends WebAssembly.Exports {
  memory: WebAssembly.Memory;
  Vec2_Set: (ptr: number, x: number, y: number) => void;
}
interface Instance extends WebAssembly.Instance {
  exports: Exports;
}
interface Source extends WebAssembly.WebAssemblyInstantiatedSource {
  instance: Instance;
}
const response = await fetch('/cpp_out/vector.wasm');
const source = await WebAssembly.instantiateStreaming(response);
const {
  instance: {
    exports: {
      Vec2_Set,
      memory: {
        buffer
      }
    }
  }
} = source as Source;

Vec2_Set(0, 1, 1);

const [x, y] = new Float32Array(buffer);
// prints: 1, 1
console.log(x, y);

export {};