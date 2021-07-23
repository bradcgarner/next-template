import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import HomeContent         from '../components/home/_main';
import content             from '../helpers/content';
import { 
  fireNewPageView }        from '../helpers/browser/tag-manager';

export default function Index() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  return <Frame meta={content.home.meta}>
    <HomeContent/>
  </Frame>

}