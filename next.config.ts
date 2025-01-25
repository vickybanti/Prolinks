import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["assets.aceternity.com","cdn.pixabay.com"]
},
productionBrowserSourceMaps: true,

};

export default nextConfig;
