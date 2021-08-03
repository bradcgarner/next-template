'use strict';

const trellis = {
  meta: {
    // limit seoTitle to 55 characters
    //         1       10         20         30         40         50
    seoTitle: 'Trellis Systems',
    h1Tag:    'Trellis Systems',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Trellis Systems',
    path:        'trellises',
    image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
    alt:         'Trellis Systems',

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
    
  greenscreen: {
    pageType: 'product',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Greenscreen',
      h1Tag:    'Greenscreen',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Greenscreen.',
      path:        'greenscreen',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Greenscreen',
    },
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
        url: 'from Grenscreen', // ?? 
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
  trellis,
};