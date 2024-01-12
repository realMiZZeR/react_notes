/**
 * Функция для ожидания выполнения переданной функции.
 * @param callback Функция, которая выполнится после заданного количества времени.
 * @param duration Время в миллисекундах.
 */
export const delay = (callback: Function, duration: number) => {
  return new Promise(resolve =>
    setTimeout(() => {
      callback();
      resolve(true);
    }, duration),
  );
};
