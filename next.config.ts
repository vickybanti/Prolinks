import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["assets.aceternity.com","cdn.pixabay.com","img.icons8.com"]
},
productionBrowserSourceMaps: true,

};

export default nextConfig;
