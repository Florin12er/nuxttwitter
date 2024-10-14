import { sendError } from "h3";
import { createUser, getUserByUsername } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password, email, repeatPassword, name } = body;

  if (!username || !password || !email || !repeatPassword || !name) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      }),
    );
  }

  if (password.length < 8) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Password must be at least 8 characters",
      }),
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Passwords do not match",
      }),
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
