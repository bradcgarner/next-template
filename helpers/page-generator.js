'use strict';

const { titleCaseWord } = require('conjunction-junction/build/primitives');
const fs = require('fs');
require('dotenv').config();
const content = require('./content');

const possiblePageKeys = Object.keys(content);

possiblePageKeys.forEach(pageKey=>{
  const thisPage = content[pageKey] || {};
  const meta = thisPage.meta || {};
  const path = meta.path;
  if(thisPage.autoGenerateLevel2){
   	const level2PageString = `
import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import Level2Content       from '../components/home/_main';
import content             from '../helpers/content';
import { fireNewPageView } from '../helpers/browser/tag-manager';

export default function ${titleCaseWord(pageKey)}Page() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const pageKey = '${pageKey}';

  return <Frame meta={content[pageKey].meta}>
    <Level2Content pageKey={pageKey}/>
  </Frame>

}`;

    fs.writeFile(`pages/${path}.js`, level2PageString, function (err) {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`Generated ${path}.js`);
    });

    for(let level3PageKey in thisPage){
      const possibleLevel3Page = thisPage[level3PageKey];
      if(possibleLevel3Page.meta && possibleLevel3Page.pageType){
        const level3Meta = possibleLevel3Page.meta;

        const level3Path = level3Meta.path;
				
        const level3PageString = `
import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import Level2Content       from '../components/home/_main';
import content             from '../helpers/content';
import { fireNewPageView } from '../helpers/browser/tag-manager';

export default function ${titleCaseWord(level3PageKey)}Page() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const pageKey = '${level3PageKey}';

  return <Frame meta={content[pageKey].meta}>
    <Level3Content 
		  pageKey={pageKey}
			pageType='${possibleLevel3Page.pageType}'/>
  </Frame>

}`;

        fs.writeFile(`pages/${level3Path}.js`, level3PageString, function (err) {
          if (err) throw err;
          // eslint-disable-next-line no-console
          console.log(`Generated ${level3Path}.js`);
        });
      }
    }

  }

});