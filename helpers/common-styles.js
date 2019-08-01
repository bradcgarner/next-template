export const red =                    '#c12b5b';
export const accentFontColor =        '#c12b5b';
export const accentFontColorHover =   '#999';
export const green =                  '#8bad33';
export const greenDarker =            '#7d9b2d';
export const greenLighter =           '#a2bd5b';
export const gray =                   '#464143';
export const purple =                 '#73308a';
export const black =                  '#231f20';
export const headerFontColor =        '#333';
export const headerFontColorHover =   '#999';
export const headerBackgroundColor =  'white';
export const menuBackgroundColor =    '#eee';
export const navHoverColor       =    '#ddd';
export const globalFontColor =        '#333';
export const globalHeaderColor =      '#444';
export const mainHeaderColor =        green;
export const fadedHeaderColor =       '#555';
export const carouselDotColor =       '#bbb';
export const carouselDotColorActive = '#717171';
export const carouselArrowColor =     'white';
export const consentFontColor =       '#fff';
export const imageBackgroundColor =   '#ccc';
export const modalHeaderColor =       green;
export const cardHoverColor =         '#eee';
export const modalBackground =        'rgba(0, 0, 0, 0.6)'
export const tagsAndCatsListColor =   accentFontColor;
export const fontOnColorColor =       'white';
export const fontOnColorColorHover =  '#888';
export const teamBackgroundColor   =  '#ddd';
export const cardShadowColorRGB    =  '27, 39, 51';
export const disabledButtonColor   =  '#ccc';
export const warmGray1             =  '#6e6259';
export const warmGray2             =  '#584e47';
export const warmGray3             =  '#423a35';
export const warmGray4             =  '#7c7169';

export const backgroundLight = 'background-color: #fff;';
export const backgroundMid   = 'background-color: #fafafa;';
export const backgroundDark  = 'background-color: #e6e6e6;';
export const backgroundVDark = 'background-color: #999;';
export const backgroundBlack = `background-color: #555;`;

// this is in the Myers reset in _frame.js
export const fontNormal = `
  font-family: Open Sans, san-serif;
`;
export const fontFinePrint = `
  font-family: Open Sans Condensed, sans-serif;
`;
export const fontBlogMenu = `
  font-family: Open Sans, san-serif;
`;
// font-family: Merriweather, serif
// font-family: Arima Madurai, cursive
// font-family: Open Sans Condensed, sans-serif
// font-family: Bellefair, serif

// this is in format-html.js
export const fontBlog = `
  font-family: Playfair Display, serif
`;
export const fontReading = `
  ${fontBlog};
`;
export const fontAuthor = fontReading;
/* IMPORTANT! THIS GOES IN _FRAME.JS TO LOAD GOOGLE FONTS */
const fontsToLoadArr = [
  // 'Anton',
  // 'Inconsolata',
  'Playfair+Display', // publications
  // 'Nanum+Gothic',
  // 'Merriweather:300',
  'Open+Sans:700', // normal
  'Open+Sans+Condensed:300', // fine print
  'Roboto', // ONLY needed to check meta tags
  // 'Arima+Madurai:100',
  // 'Bellefair',
];
export const fontsToLoad = fontsToLoadArr.join('%7C');

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

export const hotButton = `
  ${_bigButton}
  background-color: rgb(221, 0, 0);
  color: #fff;
`;

export const hotButtonHover = `
  border: 1px solid #ddd;
  background-color: rgb(255, 0, 0);
  color: #888;
`;

export const sidebarTitleCSS = `
  overflow: hidden;
  font-size: 14px;
  color: ${accentFontColor};
  padding: 20px 0 10px 0;
  margin: 0;
`;

export const defQuoteStyle = `
  font-size:   14px;
  line-height: 18px;
  text-align:  justify;
  color:      #444;
  margin-top: 10px;
  margin-bottom: 10px;
  ${fontReading}
`;

export const defEmStyle = `
  font-size: 16px;
  color:    ${green};
`;

export const footerElementMargins = `
  margin: 0 20px 50px 20px;
`;

export const pubContent = `
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 40px 20px;
  margin-top: 75px;
`;

export const postContent = pubContent;

export const pageContent = `
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 40px 20px;
  margin-top: 75px;
`;

export const pubContentInner = `
  flex-direction: column;
  min-height: 75vh;
  width: 100%;
  max-width: 800px;
`;

export const pageContentInner = pubContentInner;

export const pubTitle = `
  font-size: 30px;
  text-align: center;
  color: #444;
`;

export const postTitle = pubTitle;

export const sideBarBottomBarBreakpoint = 650;

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