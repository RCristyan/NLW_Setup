import Fasfity from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fasfity()
const prisma = new PrismaClient()

app.register(cors)

app.get('/habit', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running on port 3333')
})
