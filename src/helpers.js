const generateInteger = (max = 100) => Math.round(Math.random() * max);
const isEven = (n) => n % 2 === 0;

export { generateInteger, isEven };
