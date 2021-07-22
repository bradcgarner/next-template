export const fireNewPageView = noScroll => {
  const thisUrl = process.env.THIS_URL;
  if(typeof window !== 'undefined'){
    const pathname = window.location && window.location.pathname ? window.location.pathname : null ;
    if(!noScroll && typeof window.scrollTo === 'function'){
      window.scrollTo(0,0);
    }
    if(pathname && typeof window.dataLayer !== 'undefined'){
      if(typeof window.dataLayer.push === 'function'){
        window.dataLayer.push({
          event: 'PageView',
          url: `${thisUrl}${pathname}`,
        });
      }
    }
  }
};

export const fireGtmHover = (label, value) => {
  if(typeof window !== 'undefined'){
    if(typeof window.dataLayer !== 'undefined'){
      if(typeof window.dataLayer.push === 'function'){
        window.dataLayer.push({
          event: 'onHover',
          hoverLabel: label,
          hoverValue: value,
        });
      }
    }
  }
}

export const addressLink       = 'address-link';
export const carouselNav       = 'carousel-nav';
export const carouselEnlarge   = 'carousel-enlarge';
export const navLink           = 'nav-link';
export const oopsClick         = 'oops-click';
export const phoneLink         = 'phone-link';
export const postLink          = 'post-link';

export const privacyAll        = 'privacy-all';
export const privacyOpen       = 'privacy-open';
export const privacySave       = 'privacy-save';
export const privacyGoTo       = 'privacy-go-to';
export const modalOpen         = 'modal-open';

// first class is the trigger; second class must be last class, and will be parsed as the type
export const teamFocusClass    = 'team-focus';
export const linkFromHome      = 'link-from-home';
export const linkStatic        = 'link-static';

// these are set in the 'green-search' npm module
// set however many of these we want to set in GTM
// currently set at every 10 events
const monitoringScroll = 'search-id-EVENTNUMBER';
// these are in the react-chart-js-preprocessor npm module
const graphControl = 'graph-control';
const graphCatcher = 'graph-catcher';
const gwEventButton = 'graph-even-button';

// @@@@@@@@@@ END CLASSES', START IDS!!!! @@@@@@@@@@@ 

// top 0% is assumed on page load
export const scrollPost2040    = 'scroll-2040'; // used as ids to indicate 20-40%, 40-60%, 60-80%, 80-100% of post or un-segmented page
export const scrollPost4060    = 'scroll-4060';
export const scrollPost6080    = 'scroll-6080';
export const scrollPost8099    = 'scroll-8099';
export const scrollPostBottom  = 'scroll-share';
export const scrollPageFooter  = 'scroll-footer';

export const scrollBoard       = 'scroll-board';
export const scrollSupporters  = 'scroll-supporters';
export const scrollLabText     = 'scroll-lab-text';
export const monitoringVideo   = 'monitoring-video';
export const monitoringSearch  = 'monitoring-search-console';
export const monitoringFaq     = 'monitoring-faq';

// these are set in the menu
const team     = ['team','team-josh','team-brad','team-anna','team-nolan'];
const mission  = 'mission';
const research = 'research';
// these are set by image index #
const labImage = 'lab-image-1'; // -2, etc.
const monitoringFaqImage = 'monitoring-faq-image-1'; // -2, etc.

// @@@@@@@@@@ END IDs, RE-START CLASSES!!!! @@@@@@@@@@@ 

// all the following are used as classes where socialIconWrapper is the class
// format: action network
export const followFacebook   = 'follow facebook';
export const followInstagram  = 'follow instagram';
export const followLinkedin   = 'follow linkedin';
export const followPinterest  = 'follow pinterest';
export const followSoundcloud = 'follow soundcloud';
export const followTwitter    = 'follow twitter';
export const followYoutube    = 'follow youtube';

export const shareFacebook  = 'share facebook';
export const shareLinkedin  = 'share linkedin';
export const sharePinterest = 'share pinterest';
export const shareReddit    = 'share reddit';
export const shareTumblr    = 'share tumblr';
export const shareTwitter   = 'share twitter';
export const shareWhatsapp  = 'share whatsapp';
export const shareWorkplace = 'share workplace';
export const shareEmail     = 'share email';

