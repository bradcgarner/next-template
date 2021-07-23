import React, 
{ useEffect, useState }     from 'react';
import Router               from 'next/router';
import { detect }           from 'detect-browser';
import Frame                from '../components/_general/_frame';
import { getMeta }          from '../helpers/meta';
import { fireNewPageView }  from '../helpers/browser/tag-manager';

export default function FourOFour() {
  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
      setTimeout(()=>{
        Router.push('/');
      }, 4000);
    }
  }, [ready])


  const browser = detect();
  const properties = [
    <p key={1} style={{fontSize: 12, color: '#aaa', marginRight: 10}}>browser info:</p>
  ];
  for(let key in browser){
    properties.push(<p key={key} style={{fontSize: 12, color: '#aaa', marginRight: 10}}>{key}: {browser[key]}</p>);
  }
  const meta = getMeta('error');

  return <Frame 
    hideHeader={false} 
    meta={meta} >
    <section className='section'>
      <h1>404</h1>
      Sorry, but we did not find that page.
      <div className='properties'>
        {properties}
      </div>
      <style jsx>{`
        .section {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100vw;
          flex: 1;
        }
        h1 {
          font-size: 100px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 50px;
        }
        .properties {
          margin-top: 20px;
        }
      `}</style>
    </section>
  </Frame>
}