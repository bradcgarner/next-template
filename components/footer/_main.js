import Link                from 'next/link';
import { isObjectLiteral } from 'conjunction-junction';
import content             from '../../helpers/content';
import GRDLogo             from '../graphics/logo-lbg-color';
import { 
  backgroundDark, 
  footerElementMargins, 
  fontNormal,
  accentFontColor,
  fontOnColorColorHover,
  globalHeaderColor,
  fontFinePrint}              from '../../helpers/styles-all';
import SocialFollow        from '../social/follow';
import FooterConsent       from './consent';
import { privacyOpen,
  oopsClick, 
  phoneLink,
  privacyGoTo,
  scrollPageFooter,
  navLink}              from '../../helpers/browser/tag-manager';

export default function Footer(props) {

  const contact = content.contact || {} ;
  const info    = contact.info || {} ;
  const privacy = content.privacy || {} ;
  const footer  = content.footer || {} ;

  const win = typeof window !== 'undefined' ? window : {} ;
  const path = win.location && win.location.pathname ? win.location.pathname : '' ;
  const pathClass = path === '/' ? 'home' : path ? path : 'no-path';

  const locationDiv = <div className='location'>
    <div className={`${oopsClick} footer logo-in-footer true`} >
      <GRDLogo outline={true}/>
    </div>
    <address className={`${oopsClick} footer address true`}>
      <p className='address-line'>
        {info.address1}
      </p>
      <p className='address-line'>
        {info.address2}
      </p>
    </address>
    <a className={`${phoneLink} ${pathClass} true1 true2`} 
      href={`tel:${info.tel}`}>
      <p className='phone'>{info.tel}</p>
    </a>
    <style jsx>{`
      .location {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }    
      .logo-in-footer {
        display: block;
        width: 200px;
        margin-bottom: 15px;
      }
      .address {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .address-line,
      .phone-link {
        font-style: normal;
        text-decoration: none;
        color: ${accentFontColor};
        margin-bottom: 15px;
        display: block;
        width: 100%;
      }
      .phone,
      .address-line {
        font-size: 14px;
        color: ${accentFontColor};
        text-align: center;
      }
      .phone:hover {
        color: ${fontOnColorColorHover};
      }
      
      @media (min-width: 630px) {
        .location {
          justify-content: space-between;
        }
        .address {
          align-items: flex-start;
        }
        .phone,
        .address-line {
          text-align: left;
        }
      }
    `}</style>
  </div>

  const contactDiv = <div className='contact'>
    <h4 className={`contact-header ${navLink} footer ${pathClass} contact`}>
      <Link href={`/contact`}>
        <a className='contact-header'>{info.buttonLabel}</a>
      </Link>
    </h4>
    <style jsx>{`
      .contact {
        justify-content: center;
        align-items: center;
        ${footerElementMargins}
      }
      .contact-header {
        text-align: center;
        font-size: 30px;
        color: ${globalHeaderColor};
        cursor: pointer;
        text-decoration: none;
      }
      .contact-header:hover {
        color ${accentFontColor};
      }
    `}</style>
  </div>

  const sitemapDiv = <div className='sitemap'>
    <h6 className={`sitemap-header ${navLink} footer ${pathClass} sitemap`}>
      <Link href={`/sitemap`}>
        <a className='sitemap-header'>sitemap</a>
      </Link>
    </h6>
    <div className='seo-divs'>
      <Link href={`/sitemap.html`}>
        <a className='sitemap-html-xml'>html</a>
      </Link>
      <Link href={`/sitemap.xml`}>
        <a className='sitemap-html-xml'>xml</a>
      </Link>
    </div>
    <style jsx>{`
      .sitemap {
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        flex-direction: column;
      }
      .sitemap-header {
        text-align: center;
        font-size: 24px;
        color: ${globalHeaderColor};
        cursor: pointer;
        text-decoration: none;
      }
      .sitemap-header:hover {
        color ${accentFontColor};
      }
      .seo-divs {
        justify-content: space-between;
        width: 100%;
      }
      .sitemap-html-xml {
        text-decoration: none;
        color: #ccc;
        font-size: 12px;
      }
    `}</style>
  </div>

  const _c = isObjectLiteral(props.consent) ? props.consent : {} ;
  const {consented, userHistory, userStats} = _c;

  const privacyDiv = <ul className='privacy'>
    <li className={`li privacy ${privacyGoTo} ${pathClass}-footer ${consented}-${userHistory}-${userStats}`} >
      <Link href={`/privacy`}>
        <a className='link'>{privacy.policyButtonLabel}</a> 
      </Link>
    </li>
    <li className={`li privacy ${privacyOpen} ${pathClass}-footer ${consented}-${userHistory}-${userStats}`} >
      <button className='link' 
        role='nav'
        onClick={()=>{props.showPrivacySettings()}}>
        {privacy.settingsButtonLabel}
      </button> 
    </li>
    <style jsx>{`
      @media (max-width: 630px){
        .privacy {
          margin-bottom: 30px;
        }
      }
      .li {
        width: 120px;
        margin: 10px;
        text-align: center;
      }
      .link {
        ${fontNormal}
        font-size: 11px;
        font-style: italic;
        font-weight: normal;
        background-color: transparent;
        border: none;
        color: #444;
        text-decoration: none;
      }
      .link:hover {
        color: ${fontOnColorColorHover};
      }
    `}</style>
  </ul>

  const footerCenter = <div className='footer-center'>
    {contactDiv}
    {sitemapDiv}
    {privacyDiv}
    <style jsx>{`
      .footer-center {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>

  const consent = 
    !props.consent ? null : 
    props.consent.consented ? null :
    <FooterConsent 
      consent             ={props.consent}
      toggleExpand        ={props.toggleExpand}
      showPrivacySettings ={props.showPrivacySettings}
      changeConsent       ={props.changeConsent} />
  
  return <footer className='footer' id={scrollPageFooter}>
    {locationDiv}
    {footerCenter}
    <SocialFollow post={props.post} meta={props.meta}/>
    {consent}
    <p className='copyright'>{footer.copyright}</p>
    <style jsx>{`
      .footer {
        flex-direction: column;
        flex-wrap: wrap;
        ${backgroundDark}
        padding: 50px 50px 100px 50px;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #bbb;
        z-index: 99;
        position: relative;
      }
      
      @media (min-width: 630px) {
        .footer {
          flex-direction: row;
          padding-bottom: 50px;
        }
      }
      @media (min-width: 900px) {
        .footer {
          padding-bottom: 0px;
        }
      }
      .copyright {
        position: absolute;
        bottom: 0;
        right: 0;
        ${fontFinePrint}
        text-align: right;
        font-size: 12px;
        padding: 10px;
        color: #777;
      }
  `}</style>
  </footer>;
}
