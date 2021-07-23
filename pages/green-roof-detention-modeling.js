
import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import Level3Content       from '../components/level2/_main';
import content             from '../helpers/content';
import { fireNewPageView } from '../helpers/browser/tag-manager';

export default function DetentionModelingPage() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const pageKey = 'detentionModeling';

  return <Frame meta={content.stormwater[pageKey].meta}>
    <Level3Content 
		  pageKey={pageKey}
			pageType='service'/>
  </Frame>

}