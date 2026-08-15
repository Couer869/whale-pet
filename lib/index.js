/**
 * dsh-whale-pet — host half.
 *
 * DeepSeek-style pixel orca desktop pet with hold-to-talk voice input.
 * Everything lives in the browser (Web Speech API); the host half only places
 * the plugin in the host cordis tree so the client-modules scanner discovers
 * the `dsh.client` bundle. Preferences persist via localStorage client-side.
 */
export const name = 'dsh-whale-pet';
export function apply(ctx) {
  // 只用 console（避免 ctx.logger 服务不可用时抛错导致 fiber 失败、客户端 bundle 不被发现）
  try {
    const log = ctx.logger?.info?.bind(ctx.logger);
    if (typeof log === 'function') log('[dsh-whale-pet] loaded');
    else console.log('[dsh-whale-pet] loaded');
  }
  catch {
    console.log('[dsh-whale-pet] loaded');
  }
}
