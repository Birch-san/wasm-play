// em++ -s ERROR_ON_UNDEFINED_SYMBOLS=0 -g -gsource-map --source-map-base="http://localhost:8080/cpp_out/" -nostdlib -Wl,--no-entry -o cpp_out/vector.wasm cpp/vector.cpp
#include <new>
struct Vec2 {
  float x, y;
  Vec2(float x, float y) : x(x), y(y) {};
  Vec2 operator+(const Vec2& v) {
    return { this->x + v.x, this->y + v.y };
  }
  void operator+=(const Vec2& v) {
    this->x += v.x;
    this->y += v.y;
  }
  void Set(float x, float y) {
    this->x = x;
    this->y = y;
  }
};

extern "C" {
  void __attribute__((used)) Vec2_Vec2_2(Vec2* ptr, float x, float y) {
    new(ptr) Vec2(x, y);
  }
  Vec2* __attribute__((used)) Vec2_p_1(Vec2* out, Vec2* self, Vec2* b) {
    return new(out) Vec2(*self + *b);
  }
  void __attribute__((used)) Vec2_peq_1(Vec2* self, Vec2* b) {
    *self += *b;
  }
  void __attribute__((used)) Vec2_Set(Vec2* self, float x, float y) {
    self->Set(x, y);
  }
}