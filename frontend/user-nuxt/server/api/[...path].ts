export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const backendBase = String(config.public.apiBaseUrl || 'http://localhost:8080').replace(/\/$/, '')
  const req = event.node.req
  const url = req.url || '/'

  const target = new URL(`${backendBase}${url}`)
  const method = req.method || 'GET'

  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue
    const nextValue = Array.isArray(value) ? value.join(',') : value
    if (key === 'host' || key === 'content-length') continue
    headers.set(key, nextValue)
  }

  let body: BodyInit | undefined
  if (method !== 'GET' && method !== 'HEAD') {
    const raw = await readBody(event).catch(() => undefined)
    if (raw !== undefined) {
      body = typeof raw === 'string' ? raw : JSON.stringify(raw)
    }
  }

  const res = await fetch(target.toString(), {
    method,
    headers,
    body,
  })

  const text = await res.text()
  const contentType = res.headers.get('content-type') || ''
  const payload = contentType.includes('application/json') && text ? JSON.parse(text) : text

  setResponseStatus(event, res.status)
  if (!contentType) {
    setResponseHeader(event, 'content-type', 'application/json')
  }

  return payload
})
