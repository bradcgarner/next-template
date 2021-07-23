'use strict';

const vegetation = {
  meta: {
    // limit seoTitle to 55 characters
    //         1       10         20         30         40         50
    seoTitle: 'Green Roof Vegetation',
    h1Tag:    'Green Roof Vegetation',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Green Roof Vegetation.',
    path:        'vegetation',
    image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
    alt:         'Green Roof Vegetation',

    changefreq: 'monthly',
    priority: '0.9'
  },

  autoGenerateLevel2: true,
	
  SAMPLE_ELEMENTS: [

    {
      element: 'h2',
      text: 'This is a subheading. You can go through h6.'
    },

    {
      element: 'text',
      text: [
        'This is a paragraph. No links, no special formatting.',
        'Paragraph 2.',
        'Paragraph 3.',
      ],
    },

    {
      element: 'text',
      text: [
        'Plain text allows only ONE type of formatting: !!bold color!!, plain, !!more bold color!!, and back to plain.',
      ],
    },

    {
      element: 'p-link',
      text: [
        'This is the beginning of a sentence that includes ',
        {
          href: 'http://www.example.com/details?detail=21IWLKTLvUFB14',
          text: 'this link',
          title: 'Interactive Green Roof Profile Details',
        },
        ' which shows "Interactive Green Roof Profile Details" when you hover over it.'
      ],
    },

    {
      element: 'video',
      url: 'url where the video is saved',
      title: 'title of video',
      caption: 'single paragraph caption. null to omit',
    },


    {
      element: 'image',
      src: 'url where the image is saved',
      alt: 'describe for a blind person',
      caption: 'single paragraph caption. null to omit',
    },

    {
      element: 'component', // AVOID
      component: 'This lets Brad create a custom component.'
    },

    {
      element: 'html',
      html: [ // AVOID
        `<div style='width:100%; flex-direction: column'>
          <p style='color:"purple";font-weight: 800; line-height: 1.6em;'>Purple-Roof Concept travel exhibit.</p>
          <p style='color:"purple";font-weight: 800; line-height: 1.6em;'>The exhibit is on display at Amazon HQ in Luxemburg (Lux12) until December 2021.</p>
        </div>`,
      ],
    },

  ],

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

  sedumMats: {
    pageType: 'product',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Sedum Mats',
      h1Tag:    'Sedum Mats',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Sedum Mats.',
      path:        'sedum-mats',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Sedum Mats',
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
        url: 'link to data sheets at Sempergreen.com',
      },
      {
        label: 'Specifications', // North American CSI format
        icon: '',
        url: '',
        notes: 'very brief blurb to copy-paste into specs',
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
    videos: [
      {
        src: '', // url, or filename for now
        alt: '', // describe the photo as if for a blind person, use good keywords
        title: '', // video title
        caption: '', // briefly describe with good keywords 
      },
    ]
  },

  sedumTiles: {
    pageType: 'product',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Color Solutions',
      h1Tag:    'Color Solutions',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Color Solutions.',
      path:        'color-solutions',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Color Solutions',
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
        url: 'data sheets',
      },
      {
        label: 'Specifications', // North American CSI format
        icon: '',
        url: '',
        notes: 'very brief blurb to copy-paste into specs',
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
    videos: [
      {
        src: '', // url, or filename for now
        alt: '', // describe the photo as if for a blind person, use good keywords
        title: '', // video title
        caption: '', // briefly describe with good keywords 
      },
    ]
  },

  beeAndButterfly: {
    pageType: 'product',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Bee and Butterfly Planters',
      h1Tag:    'Bee and Butterfly Planters',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Bee and Butterfly Planters.',
      path:        'bee-and-butterfly-planters',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Bee and Butterfly Planters',
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
        url: 'data sheets',
      },
      {
        label: 'Specifications', // North American CSI format
        icon: '',
        url: '',
        notes: 'very brief blurb to copy-paste into specs',
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
    videos: [
      {
        src: '', // url, or filename for now
        alt: '', // describe the photo as if for a blind person, use good keywords
        title: '', // video title
        caption: '', // briefly describe with good keywords 
      },
    ]
  },

  maintenance: {
    pageType: 'service',
    meta: {
      // limit seoTitle to 55 characters
      //         1       10         20         30         40         50
      seoTitle: 'Green Roof Maintenance',
      h1Tag:    'Green Roof Maintenance',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Green Roof Maintenance.',
      path:        'green-roof-maintenance',
      image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
      alt:         'Green Roof Maintenance',
    },
    level3TopElements: [ 
      // Can be anything, but generally keep
      // minimal to display near top of page.
      {
        element: 'text',
        text: [
          'brief photographic description of services offered + value proposition.',
          'All remaining content is on sempergreenservices.com  ',
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
        url: 'if we have any',
      },
      {
        label: 'Specifications', // North American CSI format
        icon: '',
        url: '',
        notes: 'very brief maintenance spec blurb to copy-paste into specs',
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
    videos: [
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
  vegetation,
};