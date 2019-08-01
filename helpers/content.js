import {
  EllipsisVAlt, 
  CaretUp
} from '../components/graphics/icons';
import { warmGray1, warmGray2, warmGray3, warmGray4 } from './common-styles';
/*
 * This file - with few, small exceptions - includes ALL "static" content for the Purple-Roof site, i.e. all content that is not a blog post or image or file.
 * Blog posts and images are in the CMS.
 * Files (such as Word documents for spec downloads), are saved at ____ (currently TBD).
 * When editing this file MAINTAIN FILE STRUCTURE!!!
 * The site is hard-coded to read the structure of this file, structure mostly being object structure (data types, what is an object, what are object keys, etc)
 * Arrays may change length. Array length is not object structure.  E.g. if there are 2 lines of text in an array, and we want 5 lines, change to 5 lines; this does not affect "structure".
 * ALL OTHER COMMENTS ARE IN-LINE
 */


const thisUrl = process.env.THIS_URL;
const thisDomain = process.env.THIS_DOMAIN;

export default {

  // IGNORE EVERYTHING ABOVE THIS LINE EXCEPT GENERAL COMMENTS IN /* */.
  // meta tags go in the header, which creates previews in search engines, sharing, etc.
  // post meta tags are per post, using Butter CMS
  index: {
    meta: {
      siteName:    'Green Roof Diagnostics',
      twitterCard: 'summary_large_image',
      twitterSite: 5, // get this from Twitter
      fbAppId:     3, // get htis from Facebook
      type:        'website',
      // end tags that apply to all pages
      
      // start tags that apply ONLY to the home page (blog posts read these tags from the CMS) (pages missing tags will use the home page tags as default)
      title:       'Green Roof Diagnostics',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         thisUrl,
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
      alt:    'Green Roof Diagnostics',
    },
  }, // end index (home)

  // this is an array (list) of major divs of the main page
  // these are listed in order that they appear 1) on the main page, and 2) in the nav bar menu
  // DO NOT CHANGE THE ORDER WITHOUT COORDINATING WITH BRAD!!!!!!
  // The program hard-codes the index of each div.  E.g. 'What' is hard-coded to read from the first index.
  menu: [
    // home is always at left of menu
    'privacy', // this is the id of the div for scrolling purposes. It will appear in the URL when clicked, e.g. https://greenroofdiagnostics.com changes to https://greenroofdiagnostics.com/#mission when this is clicked in the menu.
    'toTop',
    'burger',
  ],
  // END MENU

  landing: {
    backgroundImage: 'https://cdn.buttercms.com/iwpVNbNQ3ScnxnsYcCyo',
    // no alt tag for background image
    tagline: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
    subTag: `We are a team of professionals of various backgrounds who share a common goal: to improve the understanding and effectiveness of green infrastructure through rigorous science.`,
  },

  // privacy page and in footer. Note that this page is no-crawl
  privacy: {
    meta: {
      title:       'Green Roof Diagnostics Privacy Policy',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/privacy`,
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
      alt:    'Green Roof Diagnostics Privacy Policy',
    },
    consent: {
      bannerMain: 'This site uses cookies.',
      buttonLabel: 'OK',
      showMore: 'Show Details',
    },
    theCompany: 'Green Roof Diagnostics',
    thisDomain: 'greenroofdiagnostics.com',
    thisUrl: 'http://www.greenroofdiagnostics.com',    
    deleteMessage: 'Delete all cookies? This cannot be un-done.',
    // button in footer
    policyButtonLabel: 'privacy policy',
    // button in footer to open expanded consent footer
    settingsButtonLabel: 'privacy settings',
    // button from expanded consent footer
    policyExpandedLabel: 'Read our full privacy policy.',
    // header at top of privacy page
    header: 'Privacy Policy',
  },

  /* NOTE: the urls listed are social handles we want people to FOLLOW, not any ghost accounts.
   * If you need to edit the url of an existing handle: do that here. No need to coordinate with Brad.
   * BUT, if you want to add or remove a social profile (e.g. add Tumblr or remove Facebook), PLEASE coordinate that with Brad. This is because there is another part of the code that links these with icons; Brad needs to manage that part.
   * If you want to change how social SHARING is handled, e.g. allow to share via MySpace, coordinate that with Brad for similar reasons.
   */
  socialHandles: {
    facebook: {
      url: 'https://www.facebook.com/greenroofdiagnostics'
    },
    linkedin: {
      url: 'https://linkedin.com/company/green-roof-diagnostics'
    }, 
    twitter: {
      url: 'https://twitter.com/GRD_Research'
    },
  },

  footer: {
    copyright: 'Copyright 2019 Green Roof Diagnostics, LLC',
  },

  // this is the 'go back to top of page' icon, which is an icon, not text
  toTop: {
    mainNav: {
      barLabel:    <CaretUp style={{width: 40, height:40}}/>,
      burgerLabel: null,
      divHeader:   null,
      pageHeader:  null,
      id:     'top', // this is the id of the div for scrolling purposes. IN THIS CASE, USER DOES NOT SEE IN THE URL. Top just goes to top and removes the hash.  E.g. https://purple-roof.com/#what changes to https://purple-roof.com when clicked.
      link:   null,
      priority: 1, // 1st to go
    },
  },

  burger: {
    mainNav: {
      barLabel: <EllipsisVAlt style={{width: 40, height:40}}/>,
      burgerLabel: null,
      divHeader: null,
      pageHeader: null,
      id:     'menu', // this is the id of the div for scrolling purposes. IN THIS CASE, USER DOES NOT SEE IN THE URL. Top just goes to top and removes the hash.  E.g. https://purple-roof.com/#what changes to https://purple-roof.com when clicked.
      link:   null,
      priority: -1, // appears when everything else disappears
    },
  },

  error: {
    '404': 'Sorry, but we didn\'t find that page.',
    error: 'Sorry, but there was a problem loading this page.',
    meta: {
      title:       'Green Roof Diagnostics',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         thisUrl,
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
      alt:    'Green Roof Diagnostics',
    },
  },
};