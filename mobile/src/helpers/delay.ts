export const delay = (callback: Function, delay: number) => {
  return new Promise(resolve =>
    setTimeout(() => {
      callback();
      resolve(true);
    }, delay),
  );
};
