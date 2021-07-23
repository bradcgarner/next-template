'use strict';

const fs = require('fs');
const fetch = require('isomorphic-unfetch');
require('dotenv').config();
const content = require('../../helpers/content');

const BUTTER = process.env.REACT_APP_BUTTERCMS;
const thisUrl = 'https://www.living-building-group.com';//process.env.THIS_URL;

const today = new Date();
const yr = today.getFullYear();
const mo = today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
const da = today.getDate() < 10 ? `0${today.getDate()+1}` : today.getDate()+1 ;

const possibleLevel2PageKeys = Object.keys(content).filter(k=>k!=='home');
possibleLevel2PageKeys.sort();
possibleLevel2PageKeys.unshift('home');

const sitemapJsonArr = [];
const sitemapHash = {};

const languageCodes = {
  german: 'de',
  english: 'en',
};

possibleLevel2PageKeys.forEach(pageKey=>{
  const level2Page = content[pageKey] || {};
  const pageMeta = level2Page.meta || {};
  if(pageMeta.path || pageKey === 'home'){
    const lastmod = 
      pageMeta.lastmod === 'yearly' ?
        `${yr}-01-01` :
        `${yr}-${mo}-01` ;
    const thisMeta = Object.assign({},
      pageMeta,
      {
        lastmod,
        changefreq: pageMeta.changefreq || 'monthly',
        priority:   pageMeta.priority || '0.5',
      }
    );
    sitemapJsonArr.push(thisMeta);
    sitemapHash[pageKey] = thisMeta;

    for(let level3Key in level2Page){
      const possibleLevel3Page = level2Page[level3Key];
      if(possibleLevel3Page.meta && possibleLevel3Page.pageType){
        const level3Meta = possibleLevel3Page.meta
        const thisLevel3Meta = Object.assign({},
          level3Meta,
          {
            lastmod,
            changefreq: pageMeta.changefreq || 'monthly',
            priority:   pageMeta.priority || '0.5',
          }
        );
        sitemapJsonArr.push(thisLevel3Meta);
        sitemapHash[level3Key] = thisLevel3Meta;
      }
    }
  }
});

const url = `https://api.buttercms.com/v2/posts/?page=1&page_size=100&auth_token=${BUTTER}`;
fetch(url)
  .then(res=>{
    return res.json();
  })
  .then(p=>{
    const posts = Array.isArray(p.data) ? p.data : [] ;
    return posts;
  })
  .then(posts=>{

    posts.forEach(p=>{
      const lastmod = 
        typeof p.updated === 'string' ? 
          p.updated.slice(0,10) : 
          typeof p.published === 'string' ? 
            p.published.slice(0,10) : 
            `${yr}-${mo}-${da}`;
      const h1Tag = typeof p.title === 'string' ? p.title.split('\'').join('') : 'blog post';
      const description = typeof p.meta_description === 'string' ? p.meta_description.split('\'').join('') : 'no description yet';
      let hrefLang = 'en';
      if(Array.isArray(p.tags)){
        p.tags.forEach(t=>{
          if(languageCodes[t.name]){
            hrefLang = languageCodes[t.name];
          }
        });
      }

      const meta = {
        seoTitle: `${p.seo_title}`,
        description,
        image: p.featured_image,
        alt: h1Tag,
        h1Tag,
        path: `post/${p.slug}`,
        url: `${thisUrl}/post/${p.slug}`,
        categories: p.categories,
        tags: p.tags,
        lastmod,
        slug: p.slug,
        hrefLang,
        changefreq: 'yearly',
        priority: '1.0',
      };
      sitemapJsonArr.push(meta);
      sitemapHash[p.slug] = {meta};
    });
  })
  .then(()=>{

    const sitemapXmlArr = sitemapJsonArr.map(p=>{
      return `
        <url>
          <loc>${thisUrl}${p.path ? '/': ''}${p.path}</loc>
          <lastmod>${p.lastmod || '2021-01-01'}</lastmod>
          <changefreq>${p.changefreq || 'yearly'}</changefreq>
          <priority>${p.priority || 0.5}</priority>
        </url>
      `;
    });

    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapXmlArr.join(' ')}
</urlset>`;

    return fs.writeFile('public/sitemap.xml', xmlString, function (err) {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log('Generated sitemap.xml');
    });
  })
  .then(()=>{

    const jsonArrString = JSON.stringify(sitemapJsonArr,null,2);

    fs.writeFile('helpers/sitemap/sitemap-arr.json', jsonArrString, function (err) {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`Generated sitemap-arr.json using ${thisUrl}`);
    });

    const sitemapHashString = JSON.stringify(sitemapHash, null, 2);
    fs.writeFile('helpers/sitemap/sitemap-hash.json', sitemapHashString, function (err) {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`Generated dynamic sitemap-hash.json using ${thisUrl}`);
    });

  })
  .catch(err=>{
    // eslint-disable-next-line no-console
    console.error(err);
  });
