import content from '../../helpers/content';

import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from 'react-share';
import { 
  InstagramIcon,
  YoutubeIcon, 
  SoundCloudIcon } from './custom';
import { 
  followFacebook, 
  followInstagram,
  followLinkedin, 
  followPinterest, 
  followSoundcloud, 
  followTwitter, 
  followYoutube, 
} from '../../helpers/browser/tag-manager';

export default function SocialFollow(props) {

  const size  = 40;
  const round = true;
  const socialHandles = content.socialHandles || {};

const platforms = [
  { 
    icon: <FacebookIcon size={size} round={round}/>,
    name: 'facebook',
    className: followFacebook, 
  },
  { 
    icon: <InstagramIcon style={{height: size, width: size}}/>,
    name: 'instagram',
    className: followInstagram,  
  },
  { 
    icon: <LinkedinIcon size={size} round={round}/>,
    name: 'linkedin',
    className: followLinkedin,
  },
  { 
    icon: <PinterestIcon size={size} round={round}/>,
    name: 'pinterest',
    className: followPinterest,
  },
  { 
    icon: <SoundCloudIcon style={{height: size, width: size}}/>,
    name: 'soundcloud',
    className: followSoundcloud,
  },
  { 
    icon: <TwitterIcon size={size} round={round}/>,
    name: 'twitter',
    className: followTwitter,   
  },
  { 
    icon: <YoutubeIcon style={{height: size, width: size}}/>,
    name: 'youtube',
    className: followYoutube,   
  },
];

  return <div className='follow'>
    {
      platforms.map((p,i)=>{
        const url = socialHandles[p.name] ? socialHandles[p.name].url : '' ;
        if(!url) return null;
        return <div key={i} 
          className={`social-icon-wrapper social-button ${p.className}`}
          style={{height: size, flexGrow: 0}}>
          <a href={url} target='_blank' >
            {p.icon}
          </a>
        </div>
      })
    }
    <style jsx>{`
      .follow {
        ${props.followStyle}
      }
      @media (min-width: 630px) {
        .follow {
          ${props.followStyleWide}
        }
      }
      .social-button {
        margin: 0 10px 10px 10px;
      }
      .social-button:hover {
        opacity: 0.9;
      }
    `}</style>
  </div>
};