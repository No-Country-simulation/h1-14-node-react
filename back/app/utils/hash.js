import bcrypt from "bcrypt";
import crypto from "crypto";

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

export const generateEmailToken = () => {
  const randomBytes = crypto.randomBytes(32).toString("hex");

  const saltRounds = 10;
  const hashedToken = bcrypt.hashSync(randomBytes, saltRounds);

  return hashedToken;
};
