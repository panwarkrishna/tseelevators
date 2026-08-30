/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tseelevators.com',
  generateRobotsTxt: true,
  trailingSlash: true,

  exclude: ['*'],

  changefreq: 'weekly',
  priority: 0.7,

  additionalPaths: async (config) => [
    /* ── Main Pages ─────────────────────────────────── */
    {
      loc: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/about/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/gallery/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/blog/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/contact/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },

    /* ── Blog Detail Pages ───────────────────────────── */
    {
      loc: '/blog/why-do-customers-prioritize-us-for-their-elevator-needs/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/blog/luxury-lift-manufacturers-in-gurgaon/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/blog/lift-manufacturers-in-delhi/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/blog/the-best-lift-manufacturers-in-mohali/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/blog/understanding-domestic-home-lifts/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/blog/capsule-elevators-blending-architecture-performance/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },
};