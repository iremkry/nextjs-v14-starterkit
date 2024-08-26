const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,  // Minification'ı devre dışı bırak
};

module.exports = withNextIntl(nextConfig);
