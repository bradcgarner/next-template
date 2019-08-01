import { isObjectLiteral } from 'conjunction-junction';
import content            from './content';
const thisUrl = process.env.THIS_URL;

export const getMeta = (page, post) => {
  const h = isObjectLiteral(content.home) ? content.home : {} ;
  const metaDef = isObjectLiteral(h.meta) ? h.meta : {} ;
  const thisPage = isObjectLiteral(content[page]) ? content[page] : {} ;
  const metaThis = isObjectLiteral(thisPage.meta) ? thisPage.meta : {} ;

  const url = post ? `${thisUrl}/publication/${post.slug}` : null ;
  const metaPost = isObjectLiteral(post) ? {
    title:         post.seo_title,
    description:   post.meta_description,
    url:           url,
    image:         post.featured_image,
    alt:           post.slug,
  } : {} ;
  
  const meta = {
    ...metaDef, 
    ...metaThis, 
    ...metaPost, 
  };
  return meta;
};