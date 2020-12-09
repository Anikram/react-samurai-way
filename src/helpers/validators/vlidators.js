export const required = (value) => {
  if (value) return undefined;
  return 'This filed must not be empty!';
}

export const maxLengthValidatorCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {return `This filed must be no more than ${maxLength} symbols!`}
  return undefined;
}

export const minLengthValidatorCreator = (minLength) => (value) => {
  if (value.length < minLength) {return `This filed must be no more than ${minLength} symbols!`}
  return undefined;
}

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined