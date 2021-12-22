const STR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const genRandomInt = (
  seed: number = Math.random(),
  max = 100000
): number => {
  return Math.floor(seed * max);
};

export const genRandomFloat = (
  seed: number = Math.random(),
  max = 100000
): number => {
  return seed * max;
};

export const genRandomString = (seed: number = Math.random()): string => {
  return Array(Math.floor(seed * 30))
    .join()
    .split(',')
    .map(() => STR.charAt(Math.floor(Math.random() * STR.length)))
    .join('');
};

export const genRandomDate = (seed: number = Math.random()): string => {
  return getDate(seed).toISOString().slice(0, 10);
};

export const genRandomDateTime = (seed: number = Math.random()): string => {
  return getDate(seed).toISOString().slice(0, 19).replace('T', ' ');
};

const getDate = (seed = 0): Date => {
  return new Date(+new Date() - Math.floor(seed * 10000000000));
};
