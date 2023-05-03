export const menuItems = [
	{
		label: 'Menu',
		isHeader: true,
	},
	{
		id: 'dashboard',
		label: 'Dashboards',
		icon: 'ri-dashboard-2-line',
		subItems: [
			{
				id: 'analytics',
				label: 'Analytics',
				link: '/dashboard-analytics',
				parentId: 'dashboard',
			},
			{
				id: 'ecommerce',
				label: 'Ecommerce',
				link: '/dashboard',
				parentId: 'dashboard',
			},
		],
	},
	{
		label: 'pages',
		isHeader: true,
	},
	{
		id: 'authentication',
		label: 'Authentication',
		icon: 'ri-account-circle-line',
		subItems: [
			{
				id: 'signIn',
				label: 'Sign In',
				link: '/#',
				isChildItem: true,
				parentId: 'authentication',
				childItems: [
					{ id: 1, label: 'Basic', link: '/auth/login' },
					{ id: 2, label: 'Cover', link: '/auth/login' },
				],
			},
			{
				id: 'signUp',
				label: 'Sign Up',
				link: '/auth/register',
				parentId: 'authentication',
			},
			{
				id: 'passwordReset',
				label: 'Password Reset',
				link: '/auth/reset-password',
				parentId: 'authentication',
			},
		],
	},
	{
		id: 'pages',
		label: 'Pages',
		icon: 'ri-pages-line',
		subItems: [
			{
				id: 'starter',
				label: 'Starter',
				link: '/pages/starter',
				parentId: 'pages',
			},
			{
				id: 'profile',
				label: 'Profile',
				isChildItem: true,
				parentId: 'pages',
				childItems: [
					{
						id: 1,
						label: 'Simple Page',
						link: '/pages/profile/simple',
						parentId: 'pages',
					},
					{
						id: 2,
						label: 'Settings',
						link: '/pages/profile/settings',
						parentId: 'pages',
					},
				],
			},
			{ id: 'team', label: 'Team', link: '/pages/team', parentId: 'pages' },
			{
				id: 'timeline',
				label: 'Timeline',
				link: '/pages/timeline',
				parentId: 'pages',
			},
			{ id: 'faqs', label: 'FAQs', link: '/pages/faqs', parentId: 'pages' },
			{
				id: 'pricing',
				label: 'Pricing',
				link: '/pages/pricing',
				parentId: 'pages',
			},
			{
				id: 'comingSoon',
				label: 'Coming Soon',
				link: '/pages/coming-soon',
				parentId: 'pages',
			},
		],
	},
	{
		label: 'Components',
		isHeader: true,
	},
	{
		id: 'baseUi',
		label: 'Base UI',
		icon: 'ri-pencil-ruler-2-line',
		subItems: [
			{
				id: 'alerts',
				label: 'Alerts',
				link: '/ui/alerts',
				parentId: 'baseUi',
			},
			{
				id: 'badges',
				label: 'Badges',
				link: '/ui/badges',
				parentId: 'baseUi',
			},
			{
				id: 'buttons',
				label: 'Buttons',
				link: '/ui/buttons',
				parentId: 'baseUi',
			},
			{
				id: 'colors',
				label: 'Colors',
				link: '/ui/colors',
				parentId: 'baseUi',
			},
			{ id: 'cards', label: 'Cards', link: '/ui/cards', parentId: 'baseUi' },
			{
				id: 'carousel',
				label: 'Carousel',
				link: '/ui/carousel',
				parentId: 'baseUi',
			},
			{
				id: 'dropdowns',
				label: 'Dropdowns',
				link: '/ui/dropdowns',
				parentId: 'baseUi',
			},
			{ id: 'grid', label: 'Grid', link: '/ui/grid', parentId: 'baseUi' },
			{
				id: 'images',
				label: 'Images',
				link: '/ui/images',
				parentId: 'baseUi',
			},
			{ id: 'tabs', label: 'Tabs', link: '/ui/tabs', parentId: 'baseUi' },
			{
				id: 'accordions',
				label: 'Accordion & Collapse',
				link: '/ui/accordions',
				parentId: 'baseUi',
			},
			{
				id: 'modals',
				label: 'Modals',
				link: '/ui/modals',
				parentId: 'baseUi',
			},
			{
				id: 'offcanvas',
				label: 'Offcanvas',
				link: '/ui/offcanvas',
				parentId: 'baseUi',
			},
			{
				id: 'placeholders',
				label: 'Placeholders',
				link: '/ui/placeholders',
				parentId: 'baseUi',
			},
			{
				id: 'progress',
				label: 'Progress',
				link: '/ui/progress',
				parentId: 'baseUi',
			},
			{
				id: 'notifications',
				label: 'Notifications',
				link: '/ui/notifications',
				parentId: 'baseUi',
			},
			{
				id: 'typography',
				label: 'Typography',
				link: '/ui/typography',
				parentId: 'baseUi',
			},
			{ id: 'lists', label: 'Lists', link: '/ui/lists', parentId: 'baseUi' },
			{
				id: 'general',
				label: 'General',
				link: '/ui/general',
				parentId: 'baseUi',
			},
			{
				id: 'ribbons',
				label: 'Ribbons',
				link: '/ui/ribbons',
				parentId: 'baseUi',
			},
			{
				id: 'utilities',
				label: 'Utilities',
				link: '/ui/utilities',
				parentId: 'baseUi',
			},
		],
	},
	{
		id: 'forms',
		label: 'Forms',
		icon: 'ri-file-list-3-line',
		link: '/#',
		subItems: [
			{
				id: 'basicelements',
				label: 'Basic Elements',
				link: '/forms-elements',
				parentId: 'forms',
			},
			{
				id: 'formselect',
				label: 'Form Select',
				link: '/forms-select',
				parentId: 'forms',
			},
			{
				id: 'checkboxsradios',
				label: 'Checkboxs & Radios',
				link: '/forms-checkboxes-radios',
				parentId: 'forms',
			},
			{
				id: 'pickers',
				label: 'Pickers',
				link: '/forms-pickers',
				parentId: 'forms',
			},
			{
				id: 'inputmasks',
				label: 'Input Masks',
				link: '/forms-masks',
				parentId: 'forms',
			},
			{
				id: 'advanced',
				label: 'Advanced',
				link: '/forms-advanced',
				parentId: 'forms',
			},
			{
				id: 'rangeslider',
				label: 'Range Slider',
				link: '/forms-range-sliders',
				parentId: 'forms',
			},
			{
				id: 'validation',
				label: 'Validation',
				link: '/forms-validation',
				parentId: 'forms',
			},
			{
				id: 'wizard',
				label: 'Wizard',
				link: '/forms-wizard',
				parentId: 'forms',
			},
			{
				id: 'editors',
				label: 'Editors',
				link: '/forms-editors',
				parentId: 'forms',
			},
			{
				id: 'fileuploads',
				label: 'File Uploads',
				link: '/forms-file-uploads',
				parentId: 'forms',
			},
			{
				id: 'formlayouts',
				label: 'Form Layouts',
				link: '/forms-layouts',
				parentId: 'forms',
			},
			{
				id: 'select2',
				label: 'Select2',
				link: '/forms-select2',
				parentId: 'forms',
			},
		],
	},
	{
		id: 'tables',
		label: 'Tables',
		icon: 'ri-layout-grid-line',
		link: '/#',
		subItems: [
			{
				id: 'basictables',
				label: 'Basic Tables',
				link: '/tables-basic',
				parentId: 'tables',
			},
			{
				id: 'gridjs',
				label: 'Grid Js',
				link: '/tables-gridjs',
				parentId: 'tables',
			},
			{
				id: 'listjs',
				label: 'List Js',
				link: '/tables-listjs',
				parentId: 'tables',
			},
			{
				id: 'datatables',
				label: 'Datatables',
				link: '/tables-datatables',
				parentId: 'tables',
			},
		],
	},
	{
		id: 'icons',
		label: 'Icons',
		icon: 'ri-compasses-2-line',
		link: '/#',
		subItems: [
			{
				id: 'remix',
				label: 'Remix',
				link: '/icons-remix',
				parentId: 'icons',
			},
			{
				id: 'boxicons',
				label: 'Boxicons',
				link: '/icons-boxicons',
				parentId: 'icons',
			},
			{
				id: 'materialdesign',
				label: 'Material Design',
				link: '/icons-materialdesign',
				parentId: 'icons',
			},
			{
				id: 'lineawesome',
				label: 'Line Awesome',
				link: '/icons-lineawesome',
				parentId: 'icons',
			},
			{
				id: 'feather',
				label: 'Feather',
				link: '/icons-feather',
				parentId: 'icons',
			},
			{
				id: 'crypto',
				label: 'Crypto SVG',
				link: '/icons-crypto',
				parentId: 'icons',
			},
		],
	},
];
