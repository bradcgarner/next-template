
import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import Level2Content       from '../components/level2/_main';
import content             from '../helpers/content';
import { fireNewPageView } from '../helpers/browser/tag-manager';

export default function LivingWallsPage() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const pageKey = 'livingWalls';

  return <Frame meta={content[pageKey].meta}>
    <Level2Content pageKey={pageKey}/>
  </Frame>

}