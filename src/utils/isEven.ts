export const isEven = (number: number): boolean => {
  const even = number % 2 === 0;
  if (even) {
    return true;
  }
  return false;
};
