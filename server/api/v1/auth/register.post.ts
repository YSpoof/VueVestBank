import { db } from "~~/server/db";
import { clientsTable } from "~~/server/db/schema";
import { messages } from "~~/shared/messages";
import { registerValidator } from "~~/shared/validators";
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, registerValidator.safeParse);
  if (!body.success) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        data: body.error.errors.map((error) => error.message),
      })
    );
  }
  const { name, email, password } = body.data;
  const existingUser = await db.query.clientsTable.findFirst({
    where: (table, { eq }) => eq(table.email, email),
  });
  if (existingUser) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        data: messages.emailAlreadyExists,
      })
    );
  }

  const hashedPassword = await hashPassword(password);

  const [newUser] = await db
    .insert(clientsTable)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning();

  await setUserSession(event, {
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
  });

  return { success: true };
});
