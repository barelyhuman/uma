import FastifyVite from '@fastify/vite'
import { createRequest, sendResponse } from '@mjackson/node-fetch-server'
import { handleFetch$, hasHandler, fetch$ } from '@tanstack/bling/server'
import fastify from 'fastify'
import renderer from 'uma/renderer'

const app = fastify({
  logger: true,
})

await app.register(FastifyVite, {
  root: import.meta.url,
  renderer: renderer as any,
})

app.addHook('onRequest', async (req, res) => {
  if (!req.url.startsWith('/_m')) return
  const request = createRequest(req.raw, res.raw, { host: req.host })
  if (hasHandler(new URL(request.url).pathname)) {
    const response = await handleFetch$({
      request: request,
    })
    await sendResponse(res.raw, response)
    res.end()
  }
})

await app.vite.ready()
await app.listen({ port: 3000 })
