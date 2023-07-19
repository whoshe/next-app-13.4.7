/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "next-app";

const nextConfig = {
    trailingSlash: true,
    output: 'export',
}

module.exports = nextConfig
