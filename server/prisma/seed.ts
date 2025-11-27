import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding ...');

    // Seed Positions
    const positions = [
        { name: 'Guild President', seats: 1, opens_at: new Date(), closes_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
        { name: 'General Secretary', seats: 1, opens_at: new Date(), closes_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
        { name: 'MP School of Computing', seats: 2, opens_at: new Date(), closes_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    ];

    for (const p of positions) {
        const position = await prisma.position.create({
            data: p,
        });
        console.log(`Created position with id: ${position.id}`);
    }

    // Seed Eligible Voters
    const voters = Array.from({ length: 10 }).map((_, i) => ({
        reg_no: `S21B13/00${i + 1}`,
        name: `Voter ${i + 1}`,
        email: `voter${i + 1}@ucu.ac.ug`,
        program: 'BSIT',
    }));

    for (const v of voters) {
        const voter = await prisma.eligibleVoter.create({
            data: v,
        });
        console.log(`Created voter with id: ${voter.id}`);
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
