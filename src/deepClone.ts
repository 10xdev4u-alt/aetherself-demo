export function deepClone<T>(obj: T): T { return structuredClone(obj); }
export function shallowClone<T>(obj: T): T { return { ...obj as object } as T; }
