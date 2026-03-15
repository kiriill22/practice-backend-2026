const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.log("База ответила, пользователей:", users);
  } catch (e) {
    console.error("Ошибка при подключении:", e);
  } finally {
    await prisma.$disconnect();
  }
}
main();