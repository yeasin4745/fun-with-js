# Fun with JS - Documentation 🚀

Welcome to the official guide for **Fun with JS**. This library extends standard JavaScript objects with powerful and creative utility methods.

---

## 📦 Getting Started

### Using CDN (Recommended)
You can easily include this library in your web project using a CDN like JSDelivr. Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/yeasin4745/fun-with-js@main/index.js"></script>
```

---

## 🛠️ Available Methods

### 📊 Array Extensions
| Method | Description | Example |
| :--- | :--- | :--- |
| `squareSum()` | Returns the sum of squares of all elements. | `[1, 2].squareSum() // 5` |
| `cubeSum()` | Returns the sum of cubes of all elements. | `[1, 2].cubeSum() // 9` |
| `evenOnly()` | Returns an array containing only even numbers. | `[1, 2, 3].evenOnly() // [2]` |
| `max()` | Returns the maximum value in the array. | `[1, 5, 2].max() // 5` |
| `shuffle()` | Randomly shuffles the array elements. | `[1, 2, 3].shuffle()` |
| `unique()` | Returns an array with unique elements only. | `[1, 2, 2, 3].unique() // [1, 2, 3]` |
| `average()` | Returns the average value of the array. | `[10, 20].average() // 15` |
| `chunk(size)` | Splits array into chunks of specified size. | `[1, 2, 3, 4].chunk(2) // [[1, 2], [3, 4]]` |

### 🔤 String Extensions
| Method | Description | Example |
| :--- | :--- | :--- |
| `capitalize()` | Capitalizes the first letter of each word. | `"hello world".capitalize() // "Hello World"` |
| `reverseComplex()` | Reverses words and letters. | `"abc def".reverseComplex() // "fed cba"` |
| `toSarcasm()` | Randomly alternates character casing. | `"hello".toSarcasm() // "hElLo"` |
| `letterCount()` | Counts total letters (excluding spaces/symbols). | `"Hi!".letterCount() // 2` |
| `wordCount()` | Counts total words in the string. | `"Hello world".wordCount() // 2` |
| `slugify()` | Converts string to a URL-friendly slug. | `"Hello World!".slugify() // "hello-world"` |
| `truncate(len)` | Truncates string to a specific length. | `"Long text".truncate(4) // "Long..."` |

### 🧩 Object Extensions
| Method | Description | Example |
| :--- | :--- | :--- |
| `isEmpty()` | Checks if the object has no properties. | `({}).isEmpty() // true` |
| `invert()` | Swaps keys and values. | `({a: 1}).invert() // {1: "a"}` |
| `deepClone()` | Creates a deep copy of the object. | `obj.deepClone()` |
| `cleanFalsy()` | Removes keys with falsy values. | `({a: 1, b: null}).cleanFalsy() // {a: 1}` |
| `toQueryString()`| Converts object to URL query string. | `({a: 1, b: 2}).toQueryString() // "a=1&b=2"` |

### 🔧 Global Utilities
- `window.log(...args)`: A shorthand for `console.log()`.

---

## 📝 Contribution
Feel free to fork this repository and add your own creative JS methods!

Handcrafted by [Yeasin](https://github.com/yeasin4745).
