// arquivo que vai falar com o database dentro do nosso server components
// se eu nao estiver em producao, a logica vai fazer com que nunca instancia mais de um prisma Client ao mesmo tempo
// trabalhando com o prisma em dev corretamente
/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
