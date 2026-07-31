import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
