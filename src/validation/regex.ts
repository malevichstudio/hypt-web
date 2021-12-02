/* eslint-disable no-useless-escape */

export const USERNAME_REGEX =
  /^[a-zA-Z]{3,20}(|_[a-zA-Z]{1,10}| [a-zA-Z]{1,10})(|_[a-zA-Z]{1,10}| [a-zA-Z]{1,10})$/im;
export const PHONE_REGEX = /^(\+|00)[0-9 \(\)][0-9 \-\(\)]{7,32}$/;
export const PASSWORD_REGEX =
  /[0-9a-zA-Z\- !"#$%&'()*+,./:;<=>?@\]\[\\^_`{|}~]/;
