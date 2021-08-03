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
      text: 'This is a subheading. You can go from h2 through h6.'
    },

    {
      element: 'text',
      text: [
        'This is a paragraph. No links, no special formatting (except see below).',
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
          href: 'http://www.example.com/details?detail=21IWLKTLvUFB14', // this is where you go
          text: 'this link', // this is the text that you see and click on
          title: 'Interactive Green Roof Profile Details', // title appears on hover
        },
        ' which shows "Interactive Green Roof Profile Details" when you hover over it.',
      ],
    },

    {
      element: 'video',
      url: 'https://youtu.be?something=something', // url where the video is saved 
      title: 'title that displays bold below the video, null to omit',
      caption: 'single paragraph caption, plain text only. null to omit',
    },

    {
      element: 'image',
      src: 'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS', // where the image is saved (almost always Butter CMS)
      alt: 'describe for a blind person', // same as alt tag described in meta, used by screen readers, blind people, and appears if the image is missing or link is broken, or even if the internet is too slow to load the image fast enough
      caption: null, // 'single paragraph caption. in this case null indicates to omit (no caption)',
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

  // BETWEEN LEVEL 2 TOP AND BOTTOM WILL BE SOME STANDARD CONTENT FOR EACH LEVEL 2 PAGE
  // THE STANDARD CONTENT WILL SUMMARIZE THE LEVEL 3 DATA

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

  sedumMats: {
    // templates recognize 2 page types: "product" and "service"
    // the only differences are some formatting
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

    // INBETWEEN LEVEL 3 TOP AND BOTTOM WILL BE ALL THE DATA FARTHER BELOW
    // DOWNLOADS, PHOTOS, VIDEOS, ETC.
	
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
        label: '', // displays below the icon, visible to user
        icon: '', // leave blank for now, we might use different icons for pdfs, or specs, or .docx, or images, etc.
        url: 'https://www.sempergreen.com/stuff', // 'e.g. link to data sheets at Sempergreen.com',
      },
      {
        label: 'Specifications', // North American CSI format
        icon: '',
        url: '',
        // notes below could be visible ONLY to the sales team, never visible to general public
        notes: 'very brief blurb to copy-paste into specs', // you can add notes to anything, and they are only visible in this file, not used anywhere
      }
    ],
    photoLibrary: [
      {
        topics: ['slope','color','interplanting'], // we can easily change these later, these are for sorting and filtering
        projectName: '',
        projectLocation: '',
        href: '', // external url for project (to a web page)
        src: '', // url, or filename for now - this is an image saved on Butter CMS
        alt:  '', // describe the photo as if for a blind person, use good keywords
        caption: '', // briefly describe with good keywords 
      },
    ],
    videos: [
      {
        // for filenames for videos, we can have a folder with videos; enter the filename of the video,
        // when we take the video live, we will change the link to the YouTube url
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