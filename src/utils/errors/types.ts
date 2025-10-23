type Success<T> = [T, null];

type Failure<E> = [null, E];

export type Result<T, E = Error> = Success<T> | Failure<E>;
