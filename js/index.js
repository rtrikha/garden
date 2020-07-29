function invertModeOn(id) {
	document.getElementById(id).style.filter = 'invert(1)';
}

function invertModeOff(id) {
	document.getElementById(id).style.filter = 'invert(0)';
}

function darkMode() {
	if (document.getElementById('darkModeToggle').innerHTML == 'Turn on') {
		document.getElementById('darkModeToggle').innerHTML = 'Turn off';
		//hero
		invertModeOn('hero-heading-pair');
		invertModeOn('bottom-nav');
		invertModeOn('reach-card');
		invertModeOn('review-card');
		invertModeOn('avatar');
		invertModeOn('stars');
		document.getElementById('moon').style.filter = 'drop-shadow(0px 0px 24px rgba(255, 255, 255,0.6))';
		invertModeOn('read-more-1');
		invertModeOn('about-card');
		invertModeOn('read-more-2');
		invertModeOn('calendar-card');
		invertModeOn('nights');
		invertModeOn('footer');

		//problem
		invertModeOn('problem-heading-pair');

		//process
		invertModeOn('process');

		//body
		document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
	} else {
		document.getElementById('darkModeToggle').innerHTML = 'Turn on';
		//hero
		invertModeOff('bottom-nav');
		invertModeOff('hero-heading-pair');
		invertModeOff('bottom-nav');
		invertModeOff('reach-card');
		invertModeOff('review-card');
		invertModeOff('avatar');
		invertModeOff('stars');
		document.getElementById('moon').style.filter = 'drop-shadow(0px 0px 24px rgba(255, 255, 255,0))';
		invertModeOff('read-more-1');
		invertModeOff('about-card');
		invertModeOff('read-more-2');
		invertModeOff('calendar-card');
		invertModeOff('nights');
		invertModeOff('footer');

		//problem
		invertModeOff('problem-heading-pair');

		//process
		invertModeOff('process');

		//body
		document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
	}
}
