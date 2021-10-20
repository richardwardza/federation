import { PrismaClient } from '@prisma/client'
// import rules from './rules.json'
// const prisma = new PrismaClient()

// async function seed () {
//   // Create rules

//   const ruleSet = await prisma.ruleSet.create({
//     data: {
//       product: 1,
//       title: 'contents flex',
//       slug: 'contents-flex-01-2022',
//     },
//   })
//   // Create questions and link the question set created above
//   await Promise.all(
//     rules.map(
//       async (r) => {
//         await prisma.rule.create({
//           data: {
//             ...r,
//             ruleSet: {
//               connect: {
//                 id: ruleSet.id,
//               },
//             },
//           },
//         })
//       },
//     ),
//   )
//   process.exit(0)
// }

// seed()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     console.log('We\'re all done!')
//     await prisma.$disconnect()
//   })
