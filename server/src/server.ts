import Fasfity from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fasfity()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running on port 3333')
})
