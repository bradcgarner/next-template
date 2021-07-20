import content             from '../../helpers/content';
import { isObjectLiteral } from 'conjunction-junction';
import { hotButton, 
  hotButtonHover, 
  accentFontColor, 
  fontOnColorColor }       from '../../helpers/common-styles';
import { privacyAll, 
  privacyOpen }            from '../../helpers/browser/tag-manager';

export default function ConsentBanner(props) {

  const c = content.privacy || {} ;
  const consent = c.consent || {} ;
  
  const changeConsent = 
    typeof props.changeConsent === 'function' ? 
    props.changeConsent : 
    ()=>{} ;

  const toggleExpand = 
    typeof props.toggleExpand === 'function' ? 
    props.toggleExpand : 
    ()=>{} ;

  const _c = isObjectLiteral(props.consent) ? props.consent : {} ;
  const {consented, userHistory, userStats} = _c;

  const win = typeof window !== 'undefined' ? window : {} ;
  const path = win.location && win.location.pathname ? win.location.pathname : '' ;
  const pathClass = path === '/' ? 'home' : path ? path : 'no-path';

  return <div className="consent-inner" 
    aria-label="notice-message">
    <p className="text">
      {consent.bannerMain}
    </p>
    <button
      className={`ok-button privacy ${privacyAll} ${pathClass} false`}
      onClick={()=>changeConsent({userHistory: true, userStats: true})}>
      {consent.buttonLabel}
    </button>
    <button
      className={`details-button privacy ${privacyOpen}-banner ${pathClass} ${consented}-${userHistory}-${userStats}`}
      onClick={()=>toggleExpand(true)}>
      {consent.showMore}
    </button>
    <style jsx>{`
      .consent-inner {
        justify-content: center;
        align-items: center;
      }
      .text {
        padding-right: 7px;
        font-size: 14px;
      }
      .text,
      .details-button {
        color: ${fontOnColorColor};
        text-align: center;
      }
      .details-button {
        border: none;
        background-color: transparent;
        text-decoration: underline;
        font-size: 12px;
      }
      .ok-button {
        ${hotButton}
        padding-left: 15px;
        padding-right: 15px;
        height: 35px;
      }
      .ok-button:hover {
        ${hotButtonHover}
      }
      .details-button:hover {
        color: ${accentFontColor};
      }
    `}</style>
  </div>
}