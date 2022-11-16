export default class MyPromise {
  constructor(executor) {
    let onResolve, onReject;
    let fulfilled = false, rejected = false, called = false, value;

    function resolve(v) {
      fulfilled = true;
      value = v;
      if (typeof onResolve === "function") {
        onResolve(value);
        called = true;
      }
    }

    function reject(reason) {
      rejected = true;
      value = reason;
      if (typeof onReject === "function") {
        onReject(value);
        called = true;
      }
    }

    this.then = function (callback) {
      onResolve = callback;
      if (fulfilled && !called) {
        called = true;
        onResolve(value);
      }
      return this;
    };

    this.catch = function (callback) {
      onReject = callback;
      if (rejected && !called) {
        called = true;
        onReject(value);
      }
      return this;
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  static resolve(val) {
    return new MyPromise(function executor(resolve, _reject) {
      resolve(val);
    });
  }
  static reject(reason) {
    return new MyPromise(function executor(resolve, reject) {
      reject(reason);
    });
  }
  static all(promises) {
    let fulfilledPromises = [], result = [];

    function executor(resolve, reject) {
      promises.forEach((promise, index) => promise
        .then((val) => {
          fulfilledPromises.push(true);
          result[index] = val;

          if (fulfilledPromises.length === promises.length) {
            return resolve(result);
          }
        })
        .catch((error) => {
          return reject(error);
        })
      );
    }
    return new MyPromise(executor);
  }

}
