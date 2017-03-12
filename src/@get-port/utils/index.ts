//
// Inspired by https://github.com/sindresorhus/pify

export function promisify <T> (fn: Function) {
  return function promisifiedFn (this: any, ...args: any[]): Promise<T> {
    const that = this;

    return new Promise((resolve, reject) => {
      const callback = (err: Error, result: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      };

      args.push(callback);
      fn.apply(that, args);
    });
  };
}
