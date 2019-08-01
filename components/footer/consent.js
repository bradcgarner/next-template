import ConsentExpanded    from './consent-expanded';
import ConsentBanner      from './consent-banner';
import { backgroundBlack } from '../../helpers/common-styles';

export default props => {

  const consent = props.consent ? props.consent : {} ;
  const content = consent.expanded ? 
    <ConsentExpanded
      consent       ={props.consent}
      changeConsent ={props.changeConsent} /> : 
    <ConsentBanner 
      consent       ={props.consent}
      changeConsent ={props.changeConsent}
      toggleExpand  ={props.toggleExpand} /> ;

  return <div className="consent-container" 
    role="banner" 
    aria-hidden="false">
    <div className="consent-middle" 
      role="alertdialog" 
      aria-describedby="notice-message">
      {content}
    </div>
    <style jsx>{`
      .consent-container {
        ${backgroundBlack}
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        z-index: 99000;
        border-top: 1px solid white;
      }
      .consent-middle {
        width: 100%;
        padding: 20px;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
}