#ifndef RCSWITCHNODE_H
#define RCSWITCHNODE_H

#include <nan.h>

#include "../externals/rcswitch-pi/RCSwitch.h"

class RCSwitchNode : public Nan::ObjectWrap {
 public:
  static void Init(v8::Local<v8::Object> exports);

 private:
  RCSwitch rcswitch;
  static Nan::Persistent<v8::Function> constructor;
  explicit RCSwitchNode();
  ~RCSwitchNode();
  
  static void New(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void Send(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void EnableTransmit(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void DisableTransmit(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void SetRepeatTransmit(const Nan::FunctionCallbackInfo<v8::Value>& info);
};

#endif
