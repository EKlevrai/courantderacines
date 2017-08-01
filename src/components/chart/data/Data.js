/**
	* Data File
	* contains the data and its model for all charts
	* used by many components (even for a single chart), so use it wisely
	*/
	export const PieChartData = [
		{label: 'Skills', value: 311286, imgUrl:'./skills.png', description: 'My experience in web developpement is broad. I learned a lot about front-end (Angular, React, jquery), back-end(node.js, java J2EE and Spring) and other stuff like data(mongoDB and many SQL) and systems administration (CentOS and RHEL at work, Debian at home).'},
		{label: 'Motivation', value: 262515, imgUrl:'./motivation.jpg', description: 'Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay !'},
		{label: 'Creativity', value: 181489, imgUrl:'./Creative-Mind.jpg', description: 'Which is usefull because in IT there is never only one solution.'},
		{label: 'Team spirit', value: 159520, imgUrl:'./team-spirit.jpg', description: 'Nothing to say, except it\'s important.'},
		{label: 'Sense of humor', value: 70131, imgUrl:'./sense-humor.jpg', description: 'A kangaroo enter in a organic bar, and ask for a soda. Bartender says "10€". Kangaroo pays and start to drink. Bartender says "Wow, I have never seen a kangaroo in this bar.". And the kangaroo answer "No shit Sherlock, 10€ for a soda !"'},
		{label: 'Mistery reason', value: 3252, imgUrl:'./mistery.jpg', description: 'You will find out when we\'ll work together :).'}
	];

		export const BarChartData = [
			{
				cat : 'front-end',
				skills: [
					{label:	'Angular', value: 277},
					{label:	'React', value: 176},
					{label:	'Jquery', value: 192},
					{label:	'D3.js', value: 130},
					{label:	'YUI', value: 92}
				]
			},
			{
				cat : 'back-end',
				skills: [
					{label:	'j2EE', value: 220},
					{label:	'node.js', value: 104},
					{label:	'Php', value: 98},
					{label:	'Spring', value: 130},
					{label:	'Liferay', value: 79},
					{label:	'Magento', value: 41}
				]
			},
			{
				cat : 'data',
				skills: [
					{label:	'mongoDB', value: 190},
					{label:	'MySQL', value: 210},
					{label:	'PGSQL', value: 100}
				]
			},
			{
				cat : 'infrastructure',
				skills: [
					{label:	'RHEL', value: 210},
					{label:	'Debian', value: 185},
					{label:	'CentOS', value: 90},
					{label:	'Ubuntu', value: 75}
				]
			}
	]
