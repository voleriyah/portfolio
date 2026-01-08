export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E1E1E" />
      <stop offset="20%" stop-color="#2A2A2A" />
      <stop offset="40%" stop-color="#1E1E1E" />
      <stop offset="60%" stop-color="#2A2A2A" />
      <stop offset="80%" stop-color="#1E1E1E" />
      <stop offset="100%" stop-color="#2A2A2A" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1E1E1E" />
  <rect width="${w}" height="${h}" fill="url(#shimmer-gradient)" />
</svg>`

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
