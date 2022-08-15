/**
 * A function that takes no parameters and return a Promise containing a T.
 */
export type AsyncJSONProducerFunction<T> = () => Promise<T>;
