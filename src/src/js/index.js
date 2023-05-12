import './files/functions'
import '../pug/static/header/burger/burger'
import {_removeClasses} from "./files/functions";

let scrollPos = window.scrollY;
const header = document.querySelector("header");
const introBody = document.querySelector('.intro__body');
const scrollChange = 1;

const add_class_on_scroll = () => header.classList.add("_color");
const remove_class_on_scroll = () => header.classList.remove("_color");

window.addEventListener('scroll', function () {
	scrollPos = window.scrollY;
	if (scrollPos >= scrollChange) {
		add_class_on_scroll()
	} else {
		remove_class_on_scroll()
	}
	const navigationHeight = header.offsetHeight;
	document.documentElement.style.setProperty(
		'--scroll-padding',
		navigationHeight + 'px'
	)
});

function getAbsPosition(element) {
	let rect = element.getBoundingClientRect();
	return {x: rect.left, y: rect.top}
}

let pos = 228;
let coords = getAbsPosition(introBody);
if (coords.y < pos) {
	header.classList.add("_color")
}

const introTitle = document.querySelector('.intro__title i');
const introTitleNote = document.querySelector('.intro__title-note');

window.onload = function () {
	document.addEventListener('click', documentClick);

	function documentClick(e) {
		let targetEvent = e.target;
		if (targetEvent.classList.contains('footnote')) {
			targetEvent.closest('.intro__title-main').classList.add('_show');
		}
		if (!targetEvent.closest('.intro__title-main') && document.querySelectorAll('.intro__title-main._show').length > 0) {
			_removeClasses(document.querySelectorAll('.intro__title-main._show'), '_show');
		}
	}
}

const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

import '../pug/includes/popup/popup'
import './files/form'
