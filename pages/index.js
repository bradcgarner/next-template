import React, { useEffect } from 'react';
import Frame           from '../components/_general/_frame';
import HomeContent     from '../components/home/_main';
import content         from '../helpers/content';
import { 
  fireNewPageView }    from '../helpers/browser/tag-manager';

export default function Index() {

  let ready;

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      ready = true;
    }
  }, [ready])

  return <Frame meta={content.main.meta}>
    <HomeContent/>
  </Frame>

}