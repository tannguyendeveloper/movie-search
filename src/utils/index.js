export function debounce(func, delay) {
  let timer;
  return (...args) => {
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, delay);
  };
};