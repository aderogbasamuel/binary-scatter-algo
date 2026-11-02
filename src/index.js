import { createPermutation } from "./permutation.js";
import {scatter} from "./scatter.js"
import { unscatter } from "./unscatter.js";
import {textToBytes, bytesToText} from "./bytes.js"
import { transform } from "./transform.js";
const message= "Hello World";
const bytes=textToBytes(message);
console.log("Bytes: ", bytes);


// console.log("Recovered: ", recovered);
const data =["A", "B", "C", "D", "E", "F", "G", "H"];
// const permutation= [7, 5, 3, 0, 2, 4, 1, 6];
const key="hello123"
const permutation = createPermutation(key, bytes.length);

const scattered=scatter(bytes, permutation);

const encrypted= transform(scattered, key);
console.log("Encrypted: ", encrypted);

const transformedBack=transform(encrypted, key);
const recoveredBytes=unscatter(transformedBack, permutation);
const recovered=bytesToText(recoveredBytes);


console.log("Permutation:",permutation);
console.log("Original: ", bytes);
console.log("Scattered: ", scattered)
console.log("Recovered: ", recovered)