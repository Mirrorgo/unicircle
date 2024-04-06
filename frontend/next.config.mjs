/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://server.unimelb.top:8081/:path*", // 将请求代理到后端
        // destination: "http://localhost:3001/api/:path*", // 将请求代理到后端
        // http://67.219.111.154:8090/api/user/login
      },
    ];
  },
};

export default nextConfig;
