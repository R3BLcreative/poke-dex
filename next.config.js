/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['raw.githubusercontent.com'],
		minimumCacheTTL: 5,
	},
};

module.exports = nextConfig;
