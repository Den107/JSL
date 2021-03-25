import JSL from '../core';

JSL.prototype.addAttr = function (attribute, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    this[i].setAttribute(attribute, value);
  }
  return this;
};

JSL.prototype.getAttr = function (attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    return this[i].getAttribute(attribute);
  }
};

JSL.prototype.delAttr = function (attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    this[i].removeAttribute(attribute);
  }
  return this;
};

JSL.prototype.hasAttr = function (attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    return this[i].hasAttribute(attribute);
  }
};

JSL.prototype.attr = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    return this[i].attributes;
  }
};

