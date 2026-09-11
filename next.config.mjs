/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Every route is static (no route handlers, server actions, or middleware),
  // so this ships as plain HTML/CSS/JS — deployable to any static host
  // (Vercel, Netlify, Cloudflare Pages, S3, GitHub Pages...), not just Vercel.
  // Drop this line the day a route needs real server-side logic (e.g. the
  // quote/contact forms actually sending email server-side).
  output: "export",
};

export default nextConfig;
