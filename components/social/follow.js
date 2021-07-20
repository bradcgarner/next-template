import { footerElementMargins } from '../../helpers/common-styles';
import Link from 'next/link';
import content from '../../helpers/content';

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';
import { 
  followFacebook, 
  followLinkedin, 
  followTwitter, 
  socialIconWrapper} from '../../helpers/browser/tag-manager';

export default function Follow(props) {

  const size  = 40;
  const round = true;
  const socialHandles = content.socialHandles;

const platforms = [
  { 
    icon: <FacebookIcon size={size} round={round}/>,
    name: 'facebook',
    className: followFacebook  
  },
  { 
    icon: <LinkedinIcon size={size} round={round}/>,
    name: 'linkedin',
    className: followLinkedin  
  },
  { 
    icon: <TwitterIcon size={size} round={round}/>,
    name: 'twitter',
    className: followTwitter   
  },
];

  const buttons = platforms.map((p,i)=>{
    const url = socialHandles[p.name] ? socialHandles[p.name].url : '' ;
    return <div key={i} 
      className={`social-icon-wrapper social-button ${p.className}`}
      style={{height: size, flexGrow: 0}}>
      <a href={url} target='_blank' >
        {p.icon}
      </a>
      <style jsx>{`
        .social-button {
          margin: 0 10px 10px 10px;
        }
      `}</style>
    </div>
  })

  return <div className='follow'>
    {buttons}
    <style jsx>{`
      .follow {
        align-items: center;
        justify-content: space-around;
        flex: 1;
        min-width: 200px;
        flex-wrap: wrap;
      }
      
      @media (min-width: 630px) {
        .follow {
          margin-right: 20px;
          height: 150px;
          width: 150px;
          flex-grow: 0;
        }
      }
    `}</style>
  </div>
};