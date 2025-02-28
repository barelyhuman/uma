import { uneval } from 'devalue'
import { h } from 'preact'
import { renderToStringAsync } from 'preact-render-to-string'

export default { createRenderFunction, createRoute }

function createRoute({ handler, errorHandler, route }, scope, config) {
  scope.route({
    url: route.path,
    method: 'GET',
    handler,
    errorHandler,
  })
}

function createRenderFunction({ createApp, routes }) {
  return async function ({ req, reply, app: server }) {
    const url = new URL(`${req.protocol}://${req.host}`)
    global.location = url
    const element = await renderToStringAsync(
      h(createApp, { routes, url: req.url })
    )
    return {
      element,
      hydration: `<script>window.hydration = ${uneval({})}</script>`,
    }
  }
}
