/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "randomuser.me",
          port: "",
          pathname: "/api/portraits/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.pexels.com",
          port: "",
          pathname: "/photos/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  