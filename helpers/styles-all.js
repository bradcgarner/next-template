export const red =                    '#c12b5b';
export const green =                  '#8bad33';
export const greenDarker =            '#7d9b2d';
export const greenLighter =           '#a2bd5b';
export const gray =                   '#464143';
export const black =                  '#231f20';
export const menuBackgroundColor =    '#eee';
export const navHoverColor       =    '#ddd';
export const mainHeaderColor =        green;
export const carouselDotColor =       '#bbb';
export const carouselDotColorActive = '#717171';
export const carouselArrowColor =     'white';
export const consentFontColor =       '#fff';
export const fontOnColorColor =       'white';
export const fontOnColorColorHover =  '#888';
export const disabledButtonColor   =  '#ccc';
export const warmGray1             =  '#6e6259';
export const warmGray2             =  '#584e47';
export const warmGray3             =  '#423a35';
export const warmGray4             =  '#7c7169';

export const accentFontColor =        '#73308a';
export const accentFontColorHover =   '#8d798d';
export const purple =                 '#73308a';
export const purpleRGB =              '115,48,138';
export const purpleDarker =           '#5c266e';
export const purpleLighter =          '#8f59a1';
export const purpleSlightlyLighter  = '#814495';

export const headerFontColor =        accentFontColor;
export const headerFontColorHover =   '#a28ba2';
export const headerBackgroundColor =  '#fafafa';
export const footerBackgroundColor =  '#fafafa';
export const globalFontColor =        '#2a171c';
export const globalHeaderColor =      '#3c2727';
export const fadedHeaderColor =       '#4c414c';
export const burgerMenuFontColor =    '#fff';
export const burgerMenuFontColorHover = accentFontColorHover;
export const imageBackgroundColor =   '#d8c7d8';
export const modalHeaderColor =       accentFontColor;
export const cardHoverColor =         '#f7f1f7';
export const cardShadowColor =        '#2a17ac';
export const cardShadowColorRGB =     '35,31,32';
export const modalBackground =        'rgba(0, 0, 0, 0.6)';
export const mediumGray =             '#8d798d';

export const backgroundLight = 'background-color: #fff;';
export const backgroundMid   = 'background-color: #f8f9f9;';
export const backgroundDark  = 'background-color: #e6e6e6;';
export const backgroundVDark = 'background-color: #8d798d;';
export const backgroundBlack = `background-color: ${purple};`;


// this is in the Myers reset in _frame.js
export const fontNormal = `
  font-family: Source Sans Pro, sans-serif;
`;
export const fontFinePrint = `
  font-family: Open Sans Condensed, sans-serif;
`;
export const fontReading = `
  font-family: Nanum Gothic, sans-serif
`;

/* IMPORTANT! THIS GOES IN _FRAME.JS TO LOAD GOOGLE FONTS */
const fontsToLoadArr = [
  'Nanum+Gothic', // blog
  'Source+Sans+Pro', // normal
  'Open+Sans:700', // blog menu
  'Open+Sans+Condensed:300', // fine print
  'Roboto', // ONLY to check meta tags!!!
  // 'Anton',
  // 'Playfair+Display',
  // 'Inconsolata',// 'Merriweather:300',
  // 'Arima+Madurai:100',
  // 'Bellefair',
];
export const fontsToLoad = fontsToLoadArr.join('%7C'); // encoded pipe | character


export const section = `
  justify-content: space-between;
  width: 100vw;
  border-bottom: 1px solid #ddd;
  padding: 70px 20px 20px 20px;
  overflow: hidden;
`;

export const mainHeaderCSS = `
  font-size: 45px;
  text-align: center;
  color: ${mainHeaderColor};
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const homeContentHeaderCSS = `
  font-size: 30px;
  text-align: center;
  color: ${globalHeaderColor};
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const card = `
  flex-direction: column;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(${cardShadowColorRGB}, 0.25) 5px 5px 10px 0px;
`;

export const modalCard = `
  position: relative;
  -webkit-transform: translate3d(0,0,0);
  display: block;
  height: 70vh;
  min-height: 400px;
  width: 90vw;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(${cardShadowColorRGB}, 0.25) 5px 5px 10px 0px;
  z-index: 9999;
  overflow-y: scroll;
`;

const _bigButton = `
  ${fontNormal}
  font-size: 14px;
  align-self: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  padding-top: 3px;
`;

export const bigButton = `
  ${_bigButton}
  background-color: #888;
  color: #fff;
`;

export const bigButtonHover =`
  border: 1px solid #ddd;
  background-color: #fff;
  color: #888;
`;


export const footerElementMargins = `
  margin: 0 20px 50px 20px;
`;

export const pageContent = `
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 40px 20px;
  margin-top: 75px;
`;

export const pageContentInner = `
  flex-direction: column;
  min-height: 75vh;
  width: 100%;
  max-width: 800px;
`;

export const iconColorInactive = '#c7c8ca';

export const boxShadow = `box-shadow: rgba(${cardShadowColorRGB}, 0.3) 3px 3px 5px 0px;`

export const headerCSS = `
  font-size: 30px;
  text-align: center;
  color: ${headerFontColor};
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const sectionHeaderCSS = `
  max-width: 500px;
  margin-bottom: 30px;
  font-size: 40px;
  border-bottom: 7px solid ${accentFontColor};
`;

export const sectionSubheaderCSS = `
  font-size: 30px;
  color: ${accentFontColor};
`;

export const sectionSubheader2CSS = `
  font-size: 24px;
  color: ${accentFontColor};
`;

export const hotButton = `
  ${_bigButton}
  background-color: ${purple};
  color: #fff;
`;

export const hotButtonHover = `
  border: 1px solid #ddd;
  background-color: rgba(${purpleRGB},0.8);
`;

export const consentButton = `
  ${_bigButton}
  background-color: ${purpleDarker};
  border: 1px solid #ddd;
  color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
`;

export const consentButtonHover = `
  background-color: ${purpleLighter};
`;

export const pageTitle = `
  font-size: 30px;
  text-align: center;
  color: ${globalHeaderColor};
`;

export const expandCompressStyle = `
  position: absolute;
  top: -20px;
  right: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const transparent = `
  opacity: 0.1;
  cursor: initial;
`;