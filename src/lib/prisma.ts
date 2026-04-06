import { PrismaClient } from "@/generated";
import { PrismaPg } from "@prisma/adapter-pg";

// Extend the global type to include prisma
declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = globalThis as typeof globalThis;

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
