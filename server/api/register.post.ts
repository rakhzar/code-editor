import { useDrizzle } from '../utils/drizzle';
import { users } from '../database/schema';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const hashedPassword = await hashPassword(password);

  const db = useDrizzle();

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .get();

  if (existingUser) {
    throw createError({
      status: 409,
      statusText: 'Email already registered',
    });
  }

  return db
    .insert(users)
    .values({
      email,
      password: hashedPassword,
    })
    .returning({
      id: users.id,
      email: users.email,
    })
    .get();
});
