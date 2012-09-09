(function(exports) {

  var Spine;
  if (typeof exports !== "undefined") {
    Spine = exports;
  } else {
    Spine = this.Spine = {};
  }
  Spine.version = "0.0.4";

  var $ = Spine.$ = this.jQuery || this.Zepto ||
  function() {
    return arguments[0];
  };

  var makeArray = Spine.makeArray = function(args) {
      return Array.prototype.slice.call(args, 0);
      };

  var isArray = Spine.isArray = function(value) {
      return Object.prototype.toString.call(value) === "[object Array]";
      };

  // Shim Array, as these functions aren't in IE
  if (typeof Array.prototype.indexOf === "undefined") Array.prototype.indexOf = function(value) {
    for (var i = 0; i < this.length; i++)
    if (this[i] === value) return i;
    return -1;
  };


  var Events = Spine.Events = {
    bind: function(ev, callback) {
      var evs = ev.split(" ");
      var calls = (this.hasOwnProperty("_callbacks") && this._callbacks) || (this._callbacks = {});

      for (var i = 0; i < evs.length; i++)(calls[evs[i]] || (calls[evs[i]] = [])).push(callback);

      return this;
    },

    trigger: function() {
      var args = makeArray(arguments);
      var ev = args.shift();

      var list, calls, i, l;
      if (!(calls = this.hasOwnProperty("_callbacks") && this._callbacks)) return false;
      if (!(list = this._callbacks[ev])) return false;

      for (i = 0, l = list.length; i < l; i++)
      if (list[i].apply(this, args) === false) return false;

      return true;
    },

    unbind: function(ev, callback) {
      if (!ev) {
        this._callbacks = {};
        return this;
      }

      var list, calls, i, l;
      if (!(calls = this._callbacks)) return this;
      if (!(list = calls[ev])) return this;

      if (!callback) {
        delete this._callbacks[ev];
        return this;
      }

      for (i = 0, l = list.length; i < l; i++)
      if (callback === list[i]) {
        list = list.slice();
        list.splice(i, 1);
        calls[ev] = list;
        break;
      }

      return this;
    }
  };

  // Classes (or prototypial inheritors)
  if (typeof Object.create !== "function") Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };

  var moduleKeywords = ["included", "extended"];

  var Class = Spine.Class = {
    inherited: function() {},
    created: function() {},

    prototype: {
      initialize: function() {},
      init: function() {}
    },

    create: function(include, extend) {
      var object = Object.create(this);
      object.parent = this;
      object.prototype = object.fn = Object.create(this.prototype);

      if (include) object.include(include);
      if (extend) object.extend(extend);

      object.created();
      this.inherited(object);
      return object;
    },

    init: function() {
      var instance = Object.create(this.prototype);
      instance.parent = this;

      instance.initialize.apply(instance, arguments);
      instance.init.apply(instance, arguments);
      return instance;
    },

    proxy: function(func) {
      var thisObject = this;
      return (function() {
        return func.apply(thisObject, arguments);
      });
    },

    proxyAll: function() {
      var functions = makeArray(arguments);
      for (var i = 0; i < functions.length; i++)
      this[functions[i]] = this.proxy(this[functions[i]]);
    },

    include: function(obj) {
      for (var key in obj)
      if (moduleKeywords.indexOf(key) === -1) this.fn[key] = obj[key];

      var included = obj.included;
      if (included) included.apply(this);
      return this;
    },

    extend: function(obj) {
      for (var key in obj)
      if (moduleKeywords.indexOf(key) === -1) this[key] = obj[key];

      var extended = obj.extended;
      if (extended) extended.apply(this);
      return this;
    }
  };

  Class.prototype.proxy = Class.proxy;
  Class.prototype.proxyAll = Class.proxyAll;
  Class.inst = Class.init;
  Class.sub = Class.create;

})(window.Spine = {});
