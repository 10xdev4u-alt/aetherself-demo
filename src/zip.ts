export function zip<A, B>(a: A[], b: B[]): [A, B][] { return a.map((v, i) => [v, b[i]!]); }
export function unzip<A, B>(pairs: [A, B][]): [A[], B[]] { return [pairs.map(p => p[0]), pairs.map(p => p[1])]; }
