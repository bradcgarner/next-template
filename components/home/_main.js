import { 
  accentFontColor, }      from '../../helpers/styles-all';
import { oopsClick }      from '../../helpers/browser/tag-manager';
import content            from '../../helpers/content';
import Logo               from '../graphics/logo-lbg-color';

export default function HomeContent(props) {

  const contentCss = {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 120,
  };

  const landingLogoContainerCss = {
    display: 'block',
    width: '70vw',
    maxWidth: 500,
    marginBottom: 50,
  };

  const landingCategoriesContainerCss = {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const imageContainerCss = {
    width: 250,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 25,
    marginBottom: 50,
  };

  const imageCss = {
    objectFit: 'contain',
    width: '100%',
  };

  const h2Css = {
    textAlign: 'center',
    marginBottom: 20,
  };

  const home = content.home || {};
  const mainMenu = Array.isArray(home.mainMenu) ?
    home.mainMenu.map(category=>{
      if(content[category] && content[category].meta){
        return content[category].meta
      }
      return null;
    }) : [];

  return <div className='content' style={contentCss}>
    <div className='landing-logo-container'
      style={landingLogoContainerCss}>
      <Logo />
    </div>
    <div className='landing-categories-container'
      style={landingCategoriesContainerCss}>
      {
        mainMenu.map((meta, i)=>{
          return <div key={i} 
            className='image-container'
            style={imageContainerCss}>
            <h2 className='h2'
              style={h2Css}>
              {meta.h1Tag}
            </h2>
            <img className='image'
              style={imageCss}
              src={meta.image}
              alt={meta.alt} />
          </div>
        })
      }
    </div>
  </div>

  }