import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const schoolInfo = {
    name: "Alashbal International School",
    email: "info@aisdoha.net",
    phone: "+974 4450 7882",
    address: "Old Airport Area, E-ring Road, Doha, Qatar",
  };

  await prisma.setting.upsert({
    where: { key: "school_info" },
    update: { value: schoolInfo },
    create: { key: "school_info", value: schoolInfo },
  });

  await prisma.setting.upsert({
    where: { key: "feature_flags" },
    update: {
      value: {
        darkMode: true,
        aiChat: false,
        parentPortal: false,
      },
    },
    create: {
      key: "feature_flags",
      value: {
        darkMode: true,
        aiChat: false,
        parentPortal: false,
      },
    },
  });

  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@aisdoha.net";

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "AIS Administrator",
      role: Role.ADMIN,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
