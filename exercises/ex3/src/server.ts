import fastify from 'fastify'
import { api } from './lib/api'

interface Caracter {
  id: number
  name: string
  gender: 'Male' | 'Female'
  image: string
  species: string
}

const app = fastify()

app.get('/list-caracter-info', async (_, reply) => {
  const { data } = await api.get<Caracter[]>('/character/1,2,3,4,5')

  const formatData = data.map((caracter) => ({
    nome: caracter.name,
    genero: caracter.gender === 'Male' ? 'Homen' : 'Mulher',
    avatar: caracter.image,
    especie: caracter.species === 'Human' ? 'Humano' : 'Alienigena',
  }))

  reply.status(200).send({
    formatData,
  })
})

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
