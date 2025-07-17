import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    CAPTCHA_LEGACY_SECRET_KEY: process.env.CAPTCHA_LEGACY_SECRET_KEY,
    CAPTCHA_SERVER_KEY: process.env.CAPTCHA_SERVER_KEY,
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    NETLIFY_EMAILS_DIRECTORY: process.env.NETLIFY_EMAILS_DIRECTORY,
    NETLIFY_EMAILS_SECRET: process.env.NETLIFY_EMAILS_SECRET
  }
};

export default nextConfig;
