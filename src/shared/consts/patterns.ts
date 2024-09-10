export const phonePattern = {
  value: /^\+7 \(\d{3}\) \d{3}-\d{4}$/,
  message: 'введите корректный номер телефона',
};
export const namePattern = {
  value: /[А-Яа-я]{1,32}/,
  message: 'используйте кириллицу',
};
export const birthdayPattern = {
  value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
  message: 'введите полную дату',
};
