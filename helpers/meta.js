import { isObjectLiteral } from 'conjunction-junction';
import content             from './content';
import sitemapHash         from './sitemap/sitemap-hash.json';

const thisUrl = process.env.THIS_URL;

export const getMeta = (pageKey, post) => {
  const home     = isObjectLiteral(content.home) ? content.home : {} ;
  const metaHome = isObjectLiteral(home.meta) ? home.meta : {} ;
  const metaPage = isObjectLiteral(sitemapHash[pageKey]) ? sitemapHash[pageKey] : {} ;

  const postUrl = post ? `${thisUrl}/publication/${post.slug}` : null ;
  const metaPost = isObjectLiteral(post) ? {
    title:         post.seo_title,
    description:   post.meta_description,
    url:           postUrl,
    image:         post.featured_image,
    alt:           post.slug,
  } : {} ;
  
  const meta = {
    ...metaHome, 
    ...metaPage, 
    ...metaPost, 
  };
  return meta;
};