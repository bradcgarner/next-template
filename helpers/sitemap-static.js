'use strict';

const today = new Date();
const yr = today.getFullYear();

const siteMapStatic = [ // list these in the same order as the menu
  {
    key: 'index',
    path: '',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '1.0'
  },
  {
    key: 'privacy',
    path: 'privacy/',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '0.1'
  },
];

module.exports = {
  siteMapStatic,
};