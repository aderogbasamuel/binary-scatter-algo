import crypto from "node:crypto";

export function createPermutation(key, size) {
  const hash = crypto.createHash("sha256").update(key).digest();

  const permutation = Array.from({ length: size }, (_, i) => i);
    console.log(permutation)
  //Fisher-Yates shuffle
  for (let i = size - 1; i > 0; i--) {
    const j = hash[i % hash.length] % (i + 1);
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }
  return permutation;
}

