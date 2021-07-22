import React               from 'react';
import Link                from 'next/link';
import { ChevronDoubleUp } from 'something-rather-iconic';
import { 
	purpleLighter,
  purpleSlightlyLighter,
	purple, 
  purpleDarker, 
	cardShadowColorRGB }     from "../../helpers/styles-all";

const colorThemes = {
	standard: {
		background:  purple,
		button:      purpleSlightlyLighter,
		buttonHover: purpleDarker,
	},
	private: {
		background:  purpleDarker,
		button:      purpleSlightlyLighter,
		buttonHover: purpleLighter,
	}
}

export default function DropDownMenu(props) {

	const menuContents = Array.isArray(props.menuContents) ?
	  props.menuContents : [] ;

	const colorThemeName = props.colorThemeName || 'standard';
	const colorTheme = colorThemes[colorThemeName] || colorThemes.standard;

  const win = typeof window !== 'undefined' ? window : {};
  const path = win.location && typeof win.location.pathname === 'string' ?
    win.location.pathname : '';
  const pathArr = path.split('/');
  const finalPath = pathArr[pathArr.length-1];
  const reloadOnClick = finalPath === 'model';

  const reload = () => {
    if(win && win.location && typeof win.location.reload === 'function'){
      win.location.reload();
    }
  };

  const top = props.hidden ? `
    top: -800px;
  `: `
    top: 0;
  `;

	let row = 0;
	let column = 0;
	let finalRowStartsAtIndex = 0;
	let className = '';

	const resetMenuItemTracker = menuGroup => {
		const finalItem = menuGroup[menuGroup.length-1];
		finalRowStartsAtIndex = 
		  finalItem.full ?
			menuGroup.length-1 :
			menuGroup.length-2 ;
    row = 0;
	};

	const updateMenuItemTracker = (menuItem,mdx) => {
		if(menuItem.full){
      column = 1;
		} else if(!column) {
			column = 1;
		} else {
			column = 0;
		}
		const t = mdx === 0 || row === 0 ? 't' : '';
		const b = mdx >= finalRowStartsAtIndex ? 'b' : '' ;
		const l = menuItem.full || !column ? 'l' : '';
		const r = menuItem.full || column ? 'r' : '';
		const tl = t && l ? 'tl' : '';
		const tr = t && r ? 'tr' : '';
		const bl = b && l ? 'bl' : '';
		const br = b && r ? 'br' : '';
		const full = menuItem.full ? 'full' : 'half';
		className = `button ${full} ${t} b ${l} r ${tl} ${tr} ${bl} ${br}`;
    // console.log({
    //   menuItem,column,row,mdx,
    //   t,b,l,r,tl,tr,bl,br,full,className
    // })
    if(column === 1){
      row++;
    }
	}

  return <div className='menu'
    style={{
      width: 290,
      backgroundColor: colorTheme.background,
      position: 'absolute',
      top: props.hidden ? -800 : 0,
      right: 0,
      zIndex: -1,
      transition: 'top 1s',
      WebkitTransition: 'top 1s',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 10,
      borderLeft: '1px solid white',
      boxShadow: `rgba(${cardShadowColorRGB}, 0.5) 5px 5px 10px 0px`,
    }}>
    <div role='nav' className='menu-contents'
		  style={{
				width: 280,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
				paddingTop: 80, /* to clear bar */
				paddingBottom: 20,
			}}>
      { 
        menuContents.map((menuGroup,gdx)=>{
          return <div key={gdx} className='menu-group'
					  style={{
							flexWrap: 'wrap',
							width: 270,
							justifyContent: 'space-between',
							marginBottom: 15,
						}}>
            {
              menuGroup.type === 'component' &&
								React.isValidElement(menuGroup.component) ?
								menuGroup.component :

							menuGroup.type === 'big' ?
                <div key={gdx} 
                  className='button t l b r tl tr bl br full bold' onClick={()=>props.toggleMenu()}>
                  <Link prefetch={false} href={menuGroup.href}>
                    <a role='link' className='link'>{menuGroup.label}</a> 
                  </Link>
                </div> :

              menuGroup.type === 'header' ?
                <div className='header full bold' 
                  onClick={()=>props.toggleMenu()}>
                  <h3 className='h3'>{menuGroup.label}</h3> 
                </div> :

              Array.isArray(menuGroup) ?
                menuGroup.map((menuItem,mdx)=>{
                  if(mdx===0){
                    resetMenuItemTracker(menuGroup);
                  }
                  updateMenuItemTracker(menuItem,mdx);
                  return <div key={mdx} className={className}
                  	onClick={()=>props.toggleMenu()}>
										{
											React.isValidElement(menuItem.left) ?
											menuItem.left : null 
										}
										{
											typeof menuItem.href === 'string' ?
												<Link prefetch={false} href={menuItem.href}>
													<a role='link' className='link'>{menuItem.label}</a> 
												</Link> : 
											typeof menuItem.function === 'function' ?
												<p className='link' onClick={()=>menuItem.function()}>
													{menuItem.label}
												</p> :
											typeof props[menuItem.functionName] === 'function' ?
											  <p className='link' onClick={()=>props[menuItem.functionName]()}>
													{menuItem.label}
												</p> : null 
										}
                	</div>
            }) : null 
          } 
          </div>
        })
      }
      <div className='close-button'
        onClick={()=>props.toggleMenu()}>
        <ChevronDoubleUp style={{height:25, width:25}}/>
      </div>
    </div>
    <style jsx>{`
      @media print {
        .menu {
          display: none !important;
        }
      }
			.nav-link {
				display: flex;
				align-items: center;
			}
			.contact-group {
				margin-top: 15px;
			}
			.header,
			.button {
				display: flex;
				align-items: center;
				min-height: 40px;
				line-height: 1.2;
				align-items: center;
				justify-content: center;
			}
			.button {
				background-color: ${colorTheme.button};
				cursor: pointer;
			}
			.b {
				border-bottom: 1px solid rgba(204, 204, 204, 0.4);
			}
			.r {
				border-right: 1px solid rgba(204, 204, 204, 0.4);
			}
			.l {
				border-left: 1px solid rgba(204, 204, 204, 0.4);
			}
			.t {
				border-top: 1px solid rgba(204, 204, 204, 0.4);
			}
			.tl {
				border-top-left-radius: 10px;
			}
			.tr {
				border-top-right-radius: 10px;
			}
			.bl {
				border-bottom-left-radius: 10px;
			}
			.br {
				border-bottom-right-radius: 10px;
			}
			.half {
				width: 50%;
			}
			.full {
				width: 100%;
			}
			.bold,
			.h3 {
				color: white;
				font-size: 24px;
				font-weight: bold;
			}
			.button:hover {
				background-color: ${colorTheme.buttonHover};
			}
			.link {
				color: white;
				text-decoration: none;
				text-align: center;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.private {
				font-style: italic;
				color: #efe086; /* roots in front color */
			}
			.close-button {
				color: white;
				cursor: pointer;
				width: 30px;
				align-items: center;
				justify-content: center;
			}
			.close-button:hover {
				opacity: 0.8;
			}
    `}</style>
  </div>
}