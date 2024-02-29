import * as usersAPI from "../../api/users";

export async function getUser(token) {
  const res = await usersAPI.getUser(token);
  return res;
}


