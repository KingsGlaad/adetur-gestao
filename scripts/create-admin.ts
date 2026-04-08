import { PrismaClient } from "@/generated";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@adetur.com.br";
  const password = "admin123"; // Altere esta senha!
  const name = "Administrador";

  // Verifica se já existe
  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    const hashedPassword = await bcrypt.hash(password, 12);
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword, name },
    });
    console.log(
      `✅ Usuário já existe. Senha e nome atualizados para: ${email}`,
    );
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  console.log("✅ Usuário admin criado com sucesso!");
  console.log(`   ID:    ${user.id}`);
  console.log(`   Email: ${user.email}`);
  console.log(`   Nome:  ${user.name}`);
  console.log("");
  console.log("⚠️  IMPORTANTE: Altere a senha padrão após o primeiro login!");
}

main()
  .catch((e) => {
    console.error("❌ Erro ao criar admin:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
