export const main = {

  // IGNORE EVERYTHING ABOVE THIS LINE EXCEPT GENERAL COMMENTS IN /* */.
  // meta tags go in the header, which creates previews in search engines, sharing, etc.
  // post meta tags are per post, using Butter CMS
	meta: {
		siteName:    'Living Building Group',
		twitterCard: 'summary_large_image',
		twitterSite: 5, // get this from Twitter
		fbAppId:     3, // get this from Facebook
		type:        'website',
		// end tags that apply to all pages
		
		// start tags that apply ONLY to the home page (blog posts read these tags from the CMS) (pages missing tags will use the home page tags as default)
		title:       'Living Building Group',
		description: 'Living Building Group does some shit.',
		url:         process.env.THIS_URL,
		image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
		alt:         'Living Building Group',
	},

  landing: {
    tagline: 'Living Building Group provides unbiased, scientific research for the green infrastructure industry.',
    subTag: `We are a team of professionals of various backgrounds who share a common goal: to improve the understanding and effectiveness of green infrastructure through rigorous science.`,
  },

	mainMenu: [
		'vegetation',
		'stormwater',
		'fallProtection',
		'solar',
		'gir',
		'livingWalls',
		'trellis',
	],

	level1TopElements: [ 
		// Can be anything, but generally keep
		// minimal to display near top of page.
		{
			element: 'text',
			text: [
				'See SAMPLE_ELEMENTS',
			]
		},
	],

	level1BottomElements: [
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
};