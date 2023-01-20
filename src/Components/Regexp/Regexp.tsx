export const validName = new RegExp("^[a-zA-Z\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']+$");
export const validLogin = new RegExp("^[a-zA-Z\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']+([a-z0-9]+){0,2}$");
export const validPassword = new RegExp("^[a-zA-Z\0-9\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']+$");

export const validNumber = new RegExp('[0-9]');
export const validPhone = new RegExp('[+][0-9]{12}');
export const validMessage = new RegExp('[a-zA-Z]');