import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    // 尝试从KV存储获取静态资源
    return await getAssetFromKV(event)
  } catch (e) {
    // 如果资源不存在，返回404
    return new Response('Not Found', { status: 404 })
  }
} 