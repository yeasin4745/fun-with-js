Array.prototype.squareSum = function () {
  return this.reduce((acc, val) => acc + val ** 2, 0);
};

Array.prototype.evenOnly = function () {
  return this.filter((item) => item % 2 === 0);
};

Array.prototype.cubeSum = function () {
  return this.reduce((acc, val) => acc + val ** 3, 0);
};

Array.prototype.reverseSort = function () {
  return [...this].sort((a, b) => b - a);
};

Array.prototype.max = function () {
  return this.reduce((acc, val) => (acc > val ? acc : val));
};

Array.prototype.shuffle = function () {
  return this.sort(() => Math.random() - 0.5);
};

Array.prototype.unique = function () {
  return [...new Set(this)];
};

Array.prototype.average = function () {
  return this.length === 0 ? 0 : this.reduce((acc, val) => acc + val, 0) / this.length;
};

Array.prototype.chunk = function (size) {
  const result = [];
  for (let i = 0; i < this.length; i += size) {
    result.push(this.slice(i, i + size));
  }
  return result;
};

String.prototype.capitalize = function () {
  let split = this.split(" ");
  return split.map((c, i) => c.slice(0, 1).toUpperCase() + split[i].slice(1)).join(" ");
};

String.prototype.reverseLettersOnly = function () {
  return this.split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
};

String.prototype.reverseWordsOnly = function () {
  return this.split(" ").reverse().join(" ");
};

String.prototype.reverseComplex = function () {
  return this.split(" ")
    .map((w) => w.split("").reverse().join(""))
    .reverse()
    .join(" ");
};

String.prototype.toSarcasm = function () {
  return this.split("")
    .map((s) => (Math.random() > 0.5 ? s.toUpperCase() : s.toLowerCase()))
    .join("");
};

String.prototype.letterCount = function () {
  return this.replace(/[^a-zA-Z]/g, "").length;
};

String.prototype.wordCount = function (type = "all") {
  if (type === "lettersOnly") {
    return this.replace(/[^A-Za-z]/g, " ")
      .split(" ")
      .filter((w) => w !== "")
      .length;
  }
  return this.trim().split(/\s+/).filter((w) => w !== "").length;
};

String.prototype.slugify = function () {
  return this.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

String.prototype.truncate = function (length, suffix = "...") {
  return this.length > length ? this.substring(0, length) + suffix : this;
};

window.log = function (...value) {
  console.log(...value);
};

Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
};

Object.prototype.invert = function () {
  let result = {};
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      result[this[key]] = key;
    }
  }
  return result;
};

Object.prototype.deepClone = function () {
  return JSON.parse(JSON.stringify(this));
};

Object.prototype.countValues = function (type) {
  return Object.values(this).filter((val) => typeof val === type).length;
};

Object.prototype.cleanFalsy = function () {
  let result = {};
  for (let k in this) {
    if (this.hasOwnProperty(k) && this[k]) {
      result[k] = this[k];
    }
  }
  return result;
};

Object.prototype.findByType = function (...t) {
  let result = {};
  for (var k in this) {
    if (this.hasOwnProperty(k) && t.includes(typeof this[k])) {
      result[k] = this[k];
    }
  }
  return result;
};

Object.prototype.toQueryString = function () {
  return Object.keys(this)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(this[key]))
    .join("&");
};
