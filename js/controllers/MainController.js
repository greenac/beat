app.controller('MainController', ['$scope', function($scope){

	$scope.info = {
	title: "Increasing Science Literacy",
	paraone: "What happens when you take college students and professors from different STEM disciplines and integrate them into local school systems? Better yet, what if they taught what they know best through fun, interactive, conceptual based modules? Natural science through the lens of real world examples. Technology through actual application. Science isn't a subject confined to dusty old tomes, but something that needs to be experienced first hand.",
	paratwo: "That's what we here at BEAT strive to do. We believe that STEM education is much more than textbooks and worksheets; it's everything and everywhere around us, and should be taught through experiments, interactive lectures and innovation. Through award winning modules and our expert content development team, we aim to provide elementary, middle and high school students the opportunity to see science and technology from a different perspective."
	};

	$scope.programs = [
	{
		title: 'Biology',
		description: 'Biology Blah blah',
		align: 'center-align',
		program_img: 'imgs/scienceback.jpg'
	},
	{
		title: 'Engineering',
		description: "Engineering Blah blah",
		align: 'left-align',
		program_img: 'imgs/engback.jpg'
	},
	{
		title: "Agriculture",
		description: "Agriculture Blah blah",
		align: 'right-align',
	},
	{
		title: "Technology",
		description: "Technology Blah blah",
		align: 'center-align',
		program_img: "imgs/techback.jpg"
	}
	];

	$scope.team = [
	{
		name: 'Steven Duval Ruilova',
		title: 'Co-Founder/CEO',
		email: 'steven@learnbeat.org',
		team_photo: 'imgs/headshots/sdr.jpg'
	},
	{
		name: 'Michael Urner',
		title: 'Co-Founder/CFO',
		email: 'michael@learnbeat.org',
		team_photo: 'imgs/headshots/sdr.jpg'
	},
	{
		name: 'Marco Gutierrez',
		title: 'Director of Technology',
		email: 'marco@learnbeat.org',
		team_photo: 'imgs/headshots/sdr.jpg'
	},
	{
		name: 'Sergio Gonzalez',
		title: 'Director of Agriculture',
		email: 'sergio@learnbeat.org'
	},
	{
		name: 'Ryan Paw',
		title: 'President (FQTQ)',
		email: 'rpaw@ucmerced.edu'
	},
	{
		name: 'Manny Collazo IV',
		title: 'Media Production Manager',
		email: '#'
	},
	{
		name: 'Chloe Zimmerman',
		title: 'Secretary',
		email: 'info@learnbeat.org'
	}
	]

}]);