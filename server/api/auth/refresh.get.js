import { getCookie, sendError } from "h3";
import { getRefreshTokenByToken } from "~/server/db/refreshTokens";
import { getUserById } from "~/server/db/users";
import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
    // To get a specific cookie
    const refreshToken = getCookie(event, "refresh_token");

    if (!refreshToken) {
        return sendError(
            event,
            createError({
                statusCode: 401,
                statusMessage: "Refresh token not found",
            }),
        );
    }

    const rToken = await getRefreshTokenByToken(refreshToken);

    if (!rToken) {
        return sendError(
            event,
            createError({
                statusCode: 401,
                statusMessage: "Refresh token not found",
            }),
        );
    }

    const token = decodeRefreshToken(refreshToken);

    try {
        const user = await getUserById(token.userId);

        const { accessToken } = generateTokens(user);
        return {
            access_token: accessToken,
        };
    } catch (error) {
        return sendError(
            event,
            createError({
                statusCode: 500,
                statusMessage: "Refresh token not found",
            }),
        );
    }
});
