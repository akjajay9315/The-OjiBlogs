import { PrismaClient } from '@prisma/client'
let prisma
// console.log("Prisma Client Path:", require.resolve("@prisma/client"));
// console.log("Prisma Engine Path:", require.resolve("@prisma/engines"));
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma

// IF GOD IS TO LIVE IN, PRIDE MUST DIE IN US
// IF MEN WILL HAVE NO CARE FOR THE FUTURE THEY WILL SOON HAVE SORROW FOR THE PRESENT .