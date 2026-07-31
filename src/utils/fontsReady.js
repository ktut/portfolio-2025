// Resolves once the webfonts used above the fold are actually rendering, so the
// intro animations can wait and never start mid-swap.
//
// Two steps, because neither alone is enough with the Typekit JS embed:
//   1. Wait for Typekit to settle. It injects its @font-face rules from script,
//      so at mount time document.fonts is often still empty — asking it to load
//      a face resolves instantly with no match and the gate does nothing.
//      Typekit signals completion with wf-active / wf-inactive on <html>.
//   2. Then wait on the faces themselves, so we hold until glyphs are available
//      and not merely until the CSS landed.
//
// A timeout backs the whole thing so a slow or blocked font CDN can't leave the
// page stuck at opacity 0.

const FALLBACK_MS = 2000

// The variants the first paint actually uses. Adobe serves meursault-variable
// at weight 100 and comma-sans at 400/700; asking for a variant that isn't in
// the kit just resolves with no match, so this list is safe to over-specify.
const FACES = [
  '100 1em meursault-variable',
  'italic 100 1em meursault-variable',
  '400 1em comma-sans',
  '700 1em comma-sans'
]

let pending = null

// wf-active = fonts loaded, wf-inactive = Typekit gave up (its own 3s timeout).
// Either way there is nothing left to wait on.
function typekitSettled() {
  const html = document.documentElement
  const isSettled = () =>
    html.classList.contains('wf-active') || html.classList.contains('wf-inactive')

  if (isSettled()) return Promise.resolve()

  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      if (!isSettled()) return
      observer.disconnect()
      resolve()
    })
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
  })
}

export default function fontsReady() {
  if (pending) return pending

  if (typeof document === 'undefined' || !document.fonts) {
    pending = Promise.resolve()
    return pending
  }

  const loaded = typekitSettled()
    .then(() =>
      Promise.all(FACES.map((face) => document.fonts.load(face).catch(() => {})))
    )
    .then(() => document.fonts.ready)

  const timeout = new Promise((resolve) => setTimeout(resolve, FALLBACK_MS))

  pending = Promise.race([loaded, timeout])
  return pending
}
