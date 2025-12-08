/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',             // static export
    images: {
        unoptimized: true,        // GitHub Pages me image optimization off
    },
    trailingSlash: true,          // ensures URLs end with slash
    basePath: '/Devops_portfolio',        // repo name (case sensitive)
    assetPrefix: '/Devops_portfolio/',    // static assets path
    experimental: {
        metadataBase: new URL('https://Yash-Tembhare.github.io/Devops_portfolio/'), // metadata warning fix
    },
}

module.exports = nextConfig;
