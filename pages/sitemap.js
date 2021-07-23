import React, 
{ useEffect, useState }    from 'react';
import sitemapArr          from '../helpers/sitemap/sitemap-arr.json';
import content             from '../helpers/content';
import { getMeta }         from '../helpers/meta';
import { fontsToLoad }     from '../helpers/styles-all';
import SiteMapCard         from '../components/_general/sitemap-card';
import Frame               from '../components/_general/_frame';
import { fireNewPageView } from '../helpers/browser/tag-manager';

export default function SiteMap() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const contentObj = content || {} ;

  const metas = Array.isArray(sitemapArr) ? sitemapArr.map((thisSitemapObj,i)=>{
    const thisKey = thisSitemapObj.key || 'no-key';
    const thisContent = contentObj[thisKey] || {};
    const thisMeta = thisContent.meta || {};
    const page = {...thisSitemapObj, ...thisMeta};
    return <SiteMapCard
      key={i}
      page ={page}/>
  }) : [];

  const meta = getMeta('sitemap');

  return <Frame 
    hideHeader={false}
    meta={meta}
    fontsToLoad={contentObj.sitemap && contentObj.sitemap.fontsToLoad ? contentObj.sitemap.fontsToLoad : fontsToLoad}  >
    <section className='section'>
      {metas}
      <style jsx>{`
        .section {
          flex-wrap: wrap;
          justify-content: center;
          width: 100vw;
          margin-top: 100px;
          flex: 1;
        }
      `}</style>
    </section>
  </Frame>
  
}