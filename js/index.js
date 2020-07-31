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
		document.getElementById("hero").style.backgroundColor="black"
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
		document.getElementById("problem").style.backgroundColor="black"


		//process

		//components-show

		//body
	} else {
		document.getElementById('darkModeToggle').innerHTML = 'Turn on';
		//hero
		invertModeOff('bottom-nav');
		invertModeOff('hero-heading-pair');
		document.getElementById("hero").style.backgroundColor="white"
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
		document.getElementById("problem").style.backgroundColor="white"


		//process
		invertModeOff('process');

		//components-show
		invertModeOff('iconography');

		//body
	}
}

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

const process = document.querySelector('.anatomy');

document.addEventListener(
	'scroll',
	function () {
		if (isInViewport(process) == true) {
			document.getElementById('stack2').style.animation = 'move-stack 0.6s ease 1.1s 1 forwards';
			document.getElementById('stack1').style.animation = 'move-stack 0.6s ease 1s 1 forwards';
		} else {
		}
	},
	{
		passive: true,
	}
);

var rellax1 = new Rellax('.co-col-1');
rellax1.options.speed=-10;
var rellax2 = new Rellax('.co-col-2')
rellax2.options.speed=50;
var rellax3 = new Rellax('.co-col-3')
rellax3.options.speed=-50;
var rellax4 = new Rellax('.co-col-4')
rellax4.options.speed=50;



