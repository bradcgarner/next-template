import { logout }          from '../../components/user/helpers';

export const mainMenuContents = [
	{
		href: '/',
		label: 'Home',
		type: 'big',
	},
	{
		type: 'header',
		label: 'Tools',
	},
	[
		{
			href: '/model',
			label: 'Retention Modeler',
			full: true,
		},
		{
			href: '/specs',
			label: 'Specs',
		},
		{
			href: '/details',
			label: 'Details',
		},
	],
	{
		type: 'header',
		label: 'Resources',
	},
	[
		{
			href: '/blog',
			label: 'Blog',
		},
		{
			href: '/retention-and-detention',
			label: 'Videos',
		},
		// {
		// 	href: '/faq',
		// 	label: 'FAQ',
		// },
		// {
		// 	href: '/terminology',
		// 	label: 'Terminology',
		// },
		{
			href: '/green-roof-hydrology',
			label: 'Hydrology',
		},
		{
			href: '/green-roof-biology',
			label: 'Biology',
		},
		{
			href: '/detention',
			label: 'Detention',
		},
		{
			href: '/projects',
			label: 'Projects',
		},
	],
	[
		{
			href: '/contact',
			label: 'Contact',
			full: true,
		},
	],
];

export const privateMenuContents = [
	{
		type: 'header',
		label: 'More Tools',
	},
	[
		{
			href: '/detention-model',
			label: 'Detention Modeler',
			full: true,
		},
		{
			href: '/profile-properties',
			label: 'Profile Properties',
		},
		{
			href: '/presentations',
			label: 'Presentations',
		},
		{
			href: '/products',
			label: 'Product Listings',
			full: true,
		},
	],
	{
		type: 'header',
		label: 'More Resources',
	},
	[
		{
			href: '/sitemap-private',
			label: 'Private Sitemap',
		},
		{
			href: '/ftp',
			label: 'FTP',
		},
		{
			href: '/sales-training-videos',
			label: 'Sales Training Videos',
			full: true,
		},
		{
			href: '/installation-guidelines',
			label: 'Installation Instructions',
			full: true,
		},
	],
	[
		{
			function: logout,
			label: 'Log Out',
			full: true,
		},
	],
];