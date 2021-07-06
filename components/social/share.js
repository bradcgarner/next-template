import { isObjectLiteral }      from 'conjunction-junction';
import content                  from '../../helpers/content';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share';
import { 
  shareFacebook, 
  shareLinkedin,  
  shareTwitter, 
  shareWhatsapp, 
  shareWorkplace, 
  shareEmail, 
  scrollPostBottom } from '../../helpers/browser/tag-manager';
import { accentFontColorHover, sideBarBottomBarBreakpoint } from '../../helpers/common-styles';

export default props => {

  const size  = 40;
  const round = true;
  const meta  = props.meta || {} ;
  const url   = meta.url;
  const pub  = isObjectLiteral(props.pub) ?
    props.pub : { featured_image: meta.image } ;

  const e = <EmailShareButton url={url}>
    <EmailIcon size={size} round={round}/>
  </EmailShareButton>

  const fb = <FacebookShareButton url={url}>
    <FacebookIcon size={size} round={round}/>
  </FacebookShareButton>

  const li = <LinkedinShareButton url={url}>
    <LinkedinIcon size={size} round={round}/>
  </LinkedinShareButton>

  const tw = <TwitterShareButton url={url}>
    <TwitterIcon size={size} round={round}/>
  </TwitterShareButton>

  const wa = <WhatsappShareButton url={url}>
    <WhatsappIcon size={size} round={round}/>
  </WhatsappShareButton>

  const wp = <WorkplaceShareButton url={url}>
    <WorkplaceIcon size={size} round={round}/>
  </WorkplaceShareButton>

  const platforms = [
    { platform: fb, className: shareFacebook  },
    { platform: li, className: shareLinkedin  },
    { platform: tw, className: shareTwitter   },
    { platform: wa, className: shareWhatsapp  },
    { platform: wp, className: shareWorkplace },
    { platform: e , className: shareEmail     },
  ]

  const buttons = platforms.map((p,i)=>{
    return <div key={i} 
      className={`social-icon-wrapper ${p.className} ${pub.slug} true`}
      style={{height: size, flexGrow: 0}}>
      {p.platform}
      <style jsx>{`
        .social-icon-wrapper {
          width: 60px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        @media(min-width: ${sideBarBottomBarBreakpoint}){
          .social-icon-wrapper {
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  })

  return <div className='sharing' id={scrollPostBottom}>
    <h5 className='header'>
     {content.pubs.shareHeader}
    </h5>
    <div className='button-container'>
      {buttons}
    </div>
    <style jsx>{`
      .sharing {
        flex-direction: column;
        margin: 50px 0;
        width: 100%;
        max-width: 800px;
      }
      .header {
        margin-bottom: 15px;
        color: ${accentFontColorHover};
      }
      .button-container {
        align-items: center;
        justify-content: space-around;
        flex: 1;
        width: 100%;
        min-width: 200px;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
};