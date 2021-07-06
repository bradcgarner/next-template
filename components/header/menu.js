import Link             from 'next/link';
import { 
  cardShadowColorRGB,
  accentFontColorHover, 
  accentFontColor, 
  menuBackgroundColor } from '../../helpers/common-styles';
import { navLink }      from '../../helpers/browser/tag-manager';

export default function Menu (props) {

  const top = props.hidden ? `
    top: -800px;
  `: `
    top: 0;
  `;

  const menu = Array.isArray(props.menu) ? props.menu : [] ;

  const linksJSX = menu.map((m,i)=>{
    const isBlog = m.id === 'blog';
    const skip = m.id === 'top' || m.id === 'menu' || !m.id ;
    const link = isBlog && props.path === '/' ? '/#blog' : m.link ;
    if(skip){
      return null;
    }
    return <li key={i}
      className={`${navLink} burger ${props.pathClass} ${m.id}`} 
      onClick={()=>props.toggleMenu()}>
      <Link href={link}>
        <a role='link' className='link'>{m.burgerLabel}</a> 
      </Link>
      <style jsx>{`
        .nav-link {
          display: flex;
          align-items: center;
        }
        .link {
          display: flex;
          width: 100%;
          min-height: 40px;
          align-items: center;
          color: ${accentFontColor};
          text-decoration: none;
          padding-left: 20px;
          line-height: 1.2;
        }
        .link:hover {
          background-color: ${accentFontColorHover};
        }
      `}</style>
    </li>
  });

  return <div className='menu'>
    <ul role='nav' className='nav-links'>
      {linksJSX}
    </ul>
    <style jsx>{`
      .menu {
        width: 50%;
        min-width: 240px;
        max-width: 320px;
        background-color: ${menuBackgroundColor};
        position: absolute;
        ${top}
        right: 0;
        z-index: -1;
        transition: top 1s;
        -webkit-transition: top 1s;
        flex-direction: column;
        border-radius: 5px;
        border-left: 1px solid white;
        box-shadow: rgba(${cardShadowColorRGB}, 0.5) 5px 5px 10px 0px;
      }
      .nav-links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding-top: 80px; /* to clear bar */
        padding-bottom: 20px;
      }
    `}</style>
  </div>
}