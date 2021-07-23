import { useState }        from 'react';
import Link                from 'next/link';
import { scrollToTop }     from 'browser-helpers';
import { 
  ArrUp, 
  Abacus,
  BarsSolid }              from 'something-rather-iconic';
import { navLink }         from '../../helpers/browser/tag-manager';
import { 
  headerFontColor, 
  headerFontColorHover, 
  headerBackgroundColor}   from '../../helpers/styles-all';
import { 
  mainMenuContents, 
  privateMenuContents }    from '../../helpers/content/menus';
import Logo                from '../graphics/logo-lbg-color';
import { getAuthToken }    from '../user/helpers';
import DropDownMenu        from './drop-down-menu';


export default function Header(props) {

  const [menuHidden, setMenuHidden] = useState(true)
  const [menuHiddenPrivate, setMenuHiddenPrivate] = useState(true)
  const [menuHiddenSubscription, setMenuHiddenSubscription] = useState(true)
  const [hasAuthToken, setHasAuthToken] = useState(getAuthToken() ? true : false)

  const toggleMenu = index => {
    if(index === 1){
        setMenuHidden(!menuHidden);
        setMenuHiddenPrivate(true);
        setMenuHiddenSubscription(true);
        setHasAuthToken(typeof window !== 'undefined' && window.localStorage && window.localStorage.authToken ? true : false);
    } else if(index === 2){
        setMenuHidden(true);
        setMenuHiddenPrivate(!menuHiddenPrivate);
    } else if (index === 3){
        setMenuHidden(true);
        setMenuHiddenSubscription(!menuHiddenSubscription);
    } else {
        setMenuHidden(true);
        setMenuHiddenPrivate(true);
        setMenuHiddenSubscription(true);
        setHasAuthToken(typeof window !== 'undefined' && window.localStorage && window.localStorage.authToken ? true : false);
    }
  }

  const localScrollToTop = () => {
    setMenuHidden(true);
    setMenuHiddenPrivate(true);
    scrollToTop();
  };
 
  const privateClass = hasAuthToken ? 'not-private' : 'private';
  const paidClass = props.hasSubscription ? 'not-paid' : 'paid';
      
  const navOuterCss = {
    display: 'flex',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '60px',
    zIndex: 999999,
  };
  const navBarCss = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    backgroundColor: headerBackgroundColor,
    boxShadow: '0 2px 20px -2px #ccc',
    zIndex: 110,
  };
  const homeAndLogoCss = {
    display: 'block',
    alignSelf: 'center',
    width: 100,
    marginLeft: '15px',
    cursor: 'pointer',
  };
  const navLinksCss = {
    display: 'flex',
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    marginRight: '10px',
  };
  const dropDownAndTopCss = {
    flexDirection: 'column',
    color: headerFontColor,
    textDecoration: 'none',
    width: '30px',
    height: '45px',
    marginLeft: '10px',
    marginRight: '15px',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    listStyle: 'none',
  }

  const iconLabelCss = {
    width: '100%',
    margin: 0,
    textAlign: 'center',
    fontSize: '10px',
    color: 'inherit',
  };

  return <nav className='nav-outer' style={navOuterCss}>
    <DropDownMenu 
      menuContents={mainMenuContents}
      hidden={menuHidden}
      toggleMenu={toggleMenu} />
    {
      hasAuthToken?
      <DropDownMenu
        menuContents  ={privateMenuContents}
        hidden        ={menuHiddenPrivate}
        colorThemeName='private'
        toggleMenu    ={toggleMenu} /> : null
    }

    <div className='nav-bar' style={navBarCss}>
      <div className={`${navLink} main home home`} style={homeAndLogoCss}>
        <Link prefetch={false} href={'/'}>
          <div role='link' className='logo' style={homeAndLogoCss}>
            <Logo />
          </div>
        </Link>
      </div>
      <ul role='nav' className='nav-links' style={navLinksCss}>
        <li className={`${navLink} main to-top top`}
          style={{...dropDownAndTopCss, width: '40px'}}
          onClick={()=>localScrollToTop()}>
          <ArrUp style={{width:40, height:30}}/>
          <p className='icon-label'
            style={iconLabelCss}>
            Top
          </p>
        </li>
        <li className={`${navLink} main drop-down open`}
          style={dropDownAndTopCss}
          onClick={()=>toggleMenu(1)}>
          <BarsSolid style={{width: 30, height:30}}/>
          <p className='icon-label'
            style={iconLabelCss}>
              Menu
          </p>
        </li>
        { hasAuthToken ?
            <li className={`${privateClass} ${navLink} main drop-down open`}
              style={dropDownAndTopCss}
              onClick={()=>toggleMenu(2)}>
              <Abacus style={{width: 30, height:30}}/>
              <p className='icon-label'
                style={iconLabelCss}>
                Menu
              </p>
            </li> : null 
        }
        
      </ul>
    </div>

    <style jsx>{`
      @media print {
        .nav-outer {
          display: none !important;
        }
      }
      .logo:hover {
        opacity: 0.9;
      }
      .top:hover,
      .drop-down:hover {
        color: ${headerFontColorHover};
      }
    `}</style>
  </nav>
} 