export const resSuccess = (res, status, message, payload = {}) => {
  return res.status(status).json({ success: true, message, payload });
};

export const resFail = (res, status, message, payload = {}) => {
  return res.status(status).json({ success: false, message, payload });
};
