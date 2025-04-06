import { db } from "~~/server/db";
import { messages } from "~~/shared/messages";
import { loginValidator } from "~~/shared/validators";
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, loginValidator.safeParse);

  if (!body.success) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        data: body.error.errors.map((error) => error.message),
      })
    );
  }

  const { email, password } = body.data;

  const dbUser = await db.query.clientsTable.findFirst({
    where: (table, { eq }) => eq(table.email, email),
  });

  if (!dbUser) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        data: messages.invalidCredentials,
      })
    );
  }

  const isPasswordValid = await verifyPassword(dbUser.password, password);

  if (!isPasswordValid) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        data: messages.invalidCredentials,
      })
    );
  }

  await setUserSession(event, {
    user: {
      id: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
    },
  });

  return { success: true };
});
