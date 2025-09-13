/**
 * AssertEqual is a utility type that checks if two types A and B are equal.
 * It uses a conditional type to compare the two types and returns true if they are equal,
 * or never if they are not.
 */
export type AssertEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
        ? true
        : never;

/**
 * ExtractByDiscriminator is a utility type that extracts types from a union T
 * based on a discriminator key K and a value V.
 * It returns the subset of T where the property K matches the value V.
 */
export type ExtractByDiscriminator<T, K extends keyof T, V extends T[K]> =
    T extends Record<K, V> ? T : never;
