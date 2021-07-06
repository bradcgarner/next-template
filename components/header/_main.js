import Link                from 'next/link';
import { isObjectLiteral } from 'conjunction-junction';
import PRLogo              from '../graphics/logo-grd-color';
import content             from '../../helpers/content';
import { navLink }         from '../../helpers/browser/tag-manager';
import {
  headerBackgroundColor, 
  navHoverColor,
  accentFontColor,
  greenDarker }            from '../../helpers/common-styles';
import Menu                from './menu';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuHidden: true,
      divs: [],
      menu: [],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount(){
    const divs   = Array.isArray(content.menu) ? content.menu : [] ;
    const menu   = divs.map(divName=>{
      const theDiv = isObjectLiteral(content[divName]) ? content[divName] : {} ;
      return isObjectLiteral(theDiv.mainNav) ? theDiv.mainNav : {} ;
    });
    this.setState({
      divs,
      menu,
    });
  }

  toggleMenu(){
    this.setState({menuHidden: !this.state.menuHidden});
  }

  scrollToTop() {
    const where = typeof window !== 'undefined' && window.document ? 'client' : 'server' ;
    if(where === 'client'){
      if(typeof window.scrollTo === 'function'){
        window.scrollTo(0,0);
      }
    }
  }

  render() {
    
    const win = typeof window !== 'undefined' ? window : {} ;
    const path = win.location && win.location.pathname ? win.location.pathname : '' ;
    const pathClass = path === '/' ? 'home' : path ? path : 'no-path';

    const bp1 = 750;
    const bp2 = 900;
    const bp3 = 1250;

    const linkToTop = (m,i) => {
      return <li key={i} 
        className={`${navLink} main ${pathClass} ${m.id}`}
        onClick={()=>this.scrollToTop()}>
        {m.barLabel}
        <style jsx>{`
            .nav-link {
              color: ${greenDarker};
              text-decoration: none;
              min-width: 100px;
              height: 100%;
              text-align: center;
              justify-content: center;
              align-items: center;
              display: none;
              cursor: pointer;
            }
            .nav-link:hover {
              background-color: ${navHoverColor};
            }
            .nav-link:hover {
              color: ${accentFontColor};
            }
            @media(min-width: ${bp1}px){
              .nav-link {
                display: flex;
              }
            }
        `}</style>
      </li>
    };

    const burger = (m,i) => {
      return <li key={i} 
        className={`${navLink} burger ${pathClass} ${m.id}`}
        onClick={()=>this.toggleMenu()}>
        {m.barLabel}
        <style jsx>{`
          .nav-link {
            color: ${greenDarker};
            text-decoration: none;
            width: 100px;
            text-align: center;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          .nav-link:hover {
            color: ${accentFontColor};
          }
          @media(min-width: ${bp1}px){
            .menu {
              display: none;
            }
          }
        `}</style>
      </li>
    };
  
    const linksJSX = this.state.menu.map((m,i)=>{
      const isTop = m.id === 'top';
      const isBurger = m.id === 'menu';
      if(isTop){
        return linkToTop(m,i);
      }
      if(isBurger){
        return burger(m,i);
      }
      return <li key={i}
        className={`priority-${m.priority} ${navLink} main ${pathClass} ${m.id}`} >
        { m.link ? <Link href={m.link}>
          <a className='link' role='link'>{m.barLabel}</a> 
        </Link> : null }
        <style jsx>{`
          .nav-link {
            color: ${greenDarker};
            margin-left: 5px;
            margin-right: 5px;
            flex: 1;
            height: 100%;
            text-align: center;
            justify-content: center;
            align-items: center;
          }
          .link {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
          }
          .nav-link:hover {
            background-color: ${navHoverColor};
          }
          .nav-link:hover {
            color: ${accentFontColor};
          }
          .nav-link a {
            text-decoration: none;
          }
          .priority-1,
          .priority-2,
          .priority-3 {
            display: none;
          }
          @media(min-width: ${bp1}px){
            .priority-3 {
              display: flex;
            }
          }
          @media(min-width: ${bp2}px){
            .priority-2 {
              display: flex;
            }
          }
          @media(min-width: ${bp3}px){
            .priority-1 {
              display: flex;
            }
          }
        `}</style>
      </li>
    });
    
    return <nav className='nav-outer'>
      <Menu 
        hidden={this.state.menuHidden}
        menu={this.state.menu}
        path={path} 
        pathClass={pathClass}
        toggleMenu={this.toggleMenu} />
      <div className='nav-bar'>
        <div className={`${navLink} main ${pathClass} home`} >
          <Link href={'/'}>
            <div role='link' className='logo' >
              <PRLogo animation={true}/>
            </div>
          </Link>
        </div>
        <ul role='nav' className='nav-links'>
          {linksJSX}
        </ul>
      </div>
  
      <style jsx>{`
      .nav-outer {
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        z-index: 999999;
      }
      .nav-bar {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        justify-content: space-between;
        background-color: ${headerBackgroundColor};
        box-shadow: 0 2px 20px -2px gray;
        z-index: 110;
      }
      .logo {
        display: block;
        width: 130px;
      }
      .home {
        align-items: center;
        cursor: pointer;
        padding-left: 15px;
        padding-top: 10px; /* to optically center logo */
        padding-right: 50px;
        height: 100%;
      }
      @media(min-width: ${bp1}px){
        .home:hover {
          background-color: ${navHoverColor};
        }
      }
      .nav-links {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
      }
      @media(min-width: ${bp1}px){
        .nav-links {
          justify-content: space-between;
          flex: 1;
        }
      }

      `}</style>
    </nav>
  }

  
}