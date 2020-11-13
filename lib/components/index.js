"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Workspace = require("./Workspace");

Object.keys(_Workspace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Workspace[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Workspace[key];
    }
  });
});