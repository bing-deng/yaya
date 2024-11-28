// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 静态导出
  images: {
    unoptimized: true
  },
  basePath: '/yaya', // 替换为你的仓库名
  assetPrefix: '/yaya/', // 替换为你的仓库名
}

module.exports = nextConfig