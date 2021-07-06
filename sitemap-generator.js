'use strict';

const fs = require('fs');
const { siteMapStatic } = require('./helpers/sitemap-static');
const thisUrl = process.env.THIS_URL;

const staticJsArr = Array.isArray(siteMapStatic) ? siteMapStatic : [];

const staticXmlArr = staticJsArr.map(p=>{
  return `
    <url>
      <loc>${thisUrl}/${p.path}</loc>
      <lastmod>${p.lastmod || '2019-01-01'}</lastmod>
      <changefreq>${p.changefreq || 'yearly'}</changefreq>
      <priority>${p.priority || 0.5}</priority>
    </url>
  `;
});

const xmlString = staticXmlArr.join(' ');

fs.writeFile('static/sitemap.xml', xmlString, function (err) {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log('Generated dynamic sitemap.xml');
});
