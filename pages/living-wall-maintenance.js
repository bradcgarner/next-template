
import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import Level3Content       from '../components/level2/_main';
import content             from '../helpers/content';
import { fireNewPageView } from '../helpers/browser/tag-manager';

export default function LivingWallMaintenancePage() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const pageKey = 'livingWallMaintenance';

  return <Frame meta={content.livingWalls[pageKey].meta}>
    <Level3Content 
		  pageKey={pageKey}
			pageType='service'/>
  </Frame>

}