import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export

  // NOTE: If your GitHub repo is named something like "my-portfolio"
  // (and your URL will be username.github.io/my-portfolio), 
  // uncomment and change the basePath below:
  // basePath: "/my-portfolio",

  // Disable image optimization because it requires a Node server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
