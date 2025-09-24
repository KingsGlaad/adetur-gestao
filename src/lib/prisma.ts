import { PrismaClient } from "../generated/client";
import prismaRandom from "prisma-extension-random";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const prismaRandomInstance = new PrismaClient().$extends(prismaRandom());
