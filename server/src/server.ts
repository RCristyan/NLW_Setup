import Fasfity from 'fastify'

const app = Fasfity()

app.get('/', () => {
    return 'Hello World'
})

app.listen({
    port: 3333
})
