export default defineEventHandler(async (event) => {
  // Protected route
  await requireUserSession(event);
  await clearUserSession(event);
  return { success: true };
});
