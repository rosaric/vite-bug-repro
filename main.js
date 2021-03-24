const code = 'export const val = 123'

// create a blob
const blob = new Blob([code], { type: 'application/ecmascript;charset=UTF-8' })

// create URL based on the blob above
const url = URL.createObjectURL(blob)
console.info(url)

;(async () => {
  await import(/* @vite-ignore */url) // <== Vite modify this URL, check browser console for detail
})()
