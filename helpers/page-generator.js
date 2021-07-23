'use strict';

const { titleCaseWord } = require('conjunction-junction/build/primitives');
const fs = require('fs');
require('dotenv').config();
const content = require('./content');

const possiblePageKeys = Object.keys(content);

possiblePageKeys.forEach(level2PageKey=>{
  const level2Page = content[level2PageKey] || {};
  const level2Meta = level2Page.meta || {};
  const level2Path = level2Meta.path;
  if(level2Page.autoGenerateLevel2){
   	const level2PageString = `
import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import Level2Content       from '../components/level2/_main';
import content             from '../helpers/content';
import { fireNewPageView } from '../helpers/browser/tag-manager';

export default function ${titleCaseWord(level2PageKey)}Page() {

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const pageKey = '${level2PageKey}';

  return <Frame meta={content[pageKey].meta}>
    <Level2Content pageKey={pageKey}/>
  </Frame>

}`;

    fs.writeFile(`pages/${level2Path}.js`, level2PageString, function (err) {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`Generated level 2 page: ${level2Path}.js`);
    });

    for(let level3PageKey in level2Page){
      const possibleLevel3Page = level2Page[level3PageKey];
      if(possibleLevel3Page.meta && possibleLevel3Page.pageType){
        const level3Meta = possibleLevel3Page.meta;
        const level3Path = level3Meta.path;
				
        const level3PageString = `
import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame';
import Level3Content       from '../components/level2/_main';
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

  return <Frame meta={content.${level2PageKey}[pageKey].meta}>
    <Level3Content 
		  pageKey={pageKey}
			pageType='${possibleLevel3Page.pageType}'/>
  </Frame>

}`;

        fs.writeFile(`pages/${level3Path}.js`, level3PageString, function (err) {
          if (err) throw err;
          // eslint-disable-next-line no-console
          console.log(`Generated level 3 page:       ${level3Path}.js`);
        });
      }
    }

  }

});