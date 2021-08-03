'use strict';

const fallProtection = {
  meta: {
    // limit seoTitle to 55 characters
    // seoTitle is the title of the page in search engine results (user does not see this on the screen)
    //         1       10         20         30         40         50
    seoTitle: 'Green Roof Fall Protection',
    // <h1> is the main title that renders on the screen. The user sees this.
    h1Tag:    'Green Roof Fall Protection',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Green Roof Fall Protection',
    // do not edit the path, this is the actual URL (e.g. living-building-group.com/fall-protection)
    path:        'fall-protection',
    // this image is used in search engine previews, or when you post a url in LinkedIn, Slack, email, etc.
    // all images should be saved in Butter CMS
    // coordinate with Brad before uploading (we need to figure out workflow for sizing and naming images, and stripping metadata)
    image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
    // alt tags should always be used with images. They are used by the blind, screen-reader devices,
    // and web-crawler bots to figure out what is in the image we show. Google can tell if you are lying.
    alt:         'Green Roof Fall Protection',

    // the changefreq and priority should stay as-is, these tell Google how we prefer for the pages to rank
    // for all content pages, we will say we update them monthly, and our priority is 90% (0.9), home page gets 100% (1.0), contact pages, etc. get <50% (0.5)
    changefreq: 'monthly',
    priority: '0.9'
  },

  autoGenerateLevel2: true,

  level2TopElements: [ 
    // Can be anything, but generally keep
    // minimal to display near top of page.
    {
      element: 'text',
      text: [
        'See SAMPLE_ELEMENTS',
      ]
    },
  ],

  level2BottomElements: [
    // Can be anything, but feel free to be lengthy.
    // This will display at the bottom of page, below everything else.
    // Good place to stuff a lot of keywords.
    {
      element: 'text',
      text: [
        'See SAMPLE_ELEMENTS',
      ]
    },
    
  ],

  // @@@@@@@@@@@@@@@@@@@@ START LEVEL 3 @@@@@@@@@@@@@@@@@@
  
  diaSafe: {
    pageType: 'product',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'DiaSafe',
      h1Tag:    'DiaSafe',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'DiaSafe.',
      path:        'dia-safe',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'DiaSafe',
    },
    /* 
		clarify that LBG does not sell a system called "Purple-Roof"
    Full systems are available from others.  GRSP sells a few components.
		Link to GRD
		*/
    level3TopElements: [ 
      // Can be anything, but generally keep
      // minimal to display near top of page.
      {
        element: 'text',
        text: [
          'See SAMPLE_ELEMENTS',
        ]
      },
    ],
	
    level3BottomElements: [
      // Can be anything, but feel free to be lengthy.
      // This will display at the bottom of page, below everything else.
      // Good place to stuff a lot of keywords.
      {
        element: 'text',
        text: [
          'See SAMPLE_ELEMENTS',
        ]
      },
    ],

    downloads: [
      {
        label: '',
        icon: '',
        url: 'from DiaSafe',
      },
      {
        label: 'Specifications', // North American CSI format
        icon: '',
        url: '',
        notes: 'full specs',
      }
    ],
    photoLibrary: [
      {
        topics: ['slope','color','interplanting'],
        projectName: '',
        projectLocation: '',
        href: '', // external url for project
        src: '', // url, or filename for now
        alt:  '', // describe the photo as if for a blind person, use good keywords
        title: '', // project name
        caption: null, // briefly describe with good keywords 
      },
    ],
    videos: [ // all on purple-roof YouTube
      {
        src: '', // url, or filename for now
        alt: '', // describe the photo as if for a blind person, use good keywords
        title: '', // video title
        caption: '', // briefly describe with good keywords 
      },
    ]
  },

};

module.exports = {
  fallProtection,
};