import db from "../models/index.js";
import { NotFoundError } from "../utils/errorHandler.js";

const Users = db.users;

export const findAll = async () => {
  const data = await Users.findAll();
  return data;
};

export const findOne = async (id) => {
  const data = await Users.findByPk(id);
  if (!data)
    throw new NotFoundError("User not found");
  return data;
};