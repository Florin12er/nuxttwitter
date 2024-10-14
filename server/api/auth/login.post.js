import { getUserByUsername } from "~/server/db/users";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import bcrypt from "bcryptjs";
import { sendError } from "h3";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      }),
    );
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid username or password",
      }),
    );
  }

  // this decrypts the password and compares it to the hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid username or password",
      }),
    );
  }

  const { accessToken, refreshToken } = generateTokens(user);

  // save the token inside the dabase
  await createRefreshToken({
    userId: user.id,
    token: refreshToken,
  });

  // Add httpOnly cookie
  sendRefreshToken(event, refreshToken);

  // check if the user has already logged in

  return {
    acceess_token: accessToken,
    user: userTransformer(user),
  };
});
