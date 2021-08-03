'use strict';

const livingWalls = {
  meta: {
    // limit seoTitle to 55 characters
    //         1       10         20         30         40         50
    seoTitle: 'Living Walls',
    h1Tag:    'Living Walls',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Living Walls',
    path:        'living-walls',
    image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
    alt:         'Living Walls',

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
  
  exteriorLivingWalls: {
    pageType: 'product',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Exterior Living Walls',
      h1Tag:    'Exterior Living Walls',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Exterior Living Walls.',
      path:        'exterior-living-walls',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Exterior Living Walls',
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
        url: 'from Sempergreen Services', // ?? 
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

  interiorLivingWalls: {
    pageType: 'product',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Interior Living Walls',
      h1Tag:    'Interior Living Walls',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Interior Living Walls.',
      path:        'interior-living-walls',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Interior Living Walls',
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
        url: 'data sheet from Sempergreen Services', // ?? 
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

  livingWallMaintenance: {
    pageType: 'service',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Living Wall Maintenance',
      h1Tag:    'Living Wall Maintenance',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Living Wall Maintenance.',
      path:        'living-wall-maintenance',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Living Wall Maintenance',
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
        url: 'do we have any downloads?', // ?? 
      },
      {
        label: 'Specifications', // North American CSI format
        icon: '',
        url: '',
        notes: 'maintenance specs',
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
  livingWalls,
};