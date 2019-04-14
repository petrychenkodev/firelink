function removeClass(block, active){
	const parentBlock = block;
	for(let i = 0; i < parentBlock.children.length; i++){
		event.target.nodeName == 'LI' && (
		parentBlock.children[i].classList.contains(active) &&
		parentBlock.children[i].classList.remove(active));
	}
}
function addClass(className){
	event.target.nodeName == 'LI' &&
	event.target.classList.add(className);
}

const langBlock = document.querySelector('.choose__lang');
langBlock.addEventListener('click', ()=>{
	removeClass(langBlock, 'lang__active');
	addClass('lang__active');
});

const currBlock = document.querySelector('.choose__curr');
currBlock.addEventListener('click', ()=>{
	removeClass(currBlock, 'curr__active');
	addClass('curr__active');
});

const navBlock = document.querySelector('.navigation__list');
navBlock.addEventListener('click', ()=>{
	removeClass(navBlock, 'navigation--active');
	addClass('navigation--active');
});

function slideImg (slider){
	const sliderWidth = slider.offsetWidth;
	const maxWidth = movable.children.length - 1;
	if(event.target.classList.contains('slider__right')){
		width += sliderWidth;
		if(width > sliderWidth * maxWidth) {width = sliderWidth * maxWidth};
		movable.style.cssText = `margin-left : -${width}px`;
		if(count >= pointsCount-1){count = pointsCount-1}else{count++};
	}
	if(event.target.classList.contains('slider__left')){
		width -= sliderWidth;
		if(width < 0) {width = 0};
		movable.style.cssText = `margin-left : -${width}px`;
		if(count <= 0){count = 0}else{count--};
	}
	points.innerHTML = '';
	for (let i = 0; i < pointsCount; i++){
		const li = document.createElement('li');
		if(i==count){li.classList.add('slider__active')};
		points.appendChild(li);
	}
}
let width = 0;
let count = 0;

const slider = document.querySelector('.slider__inside');
slider.addEventListener('click', ()=>{
	slideImg (slider);
});

const points = slider.querySelector('.slider__pointers');
const movable = slider.querySelector('.slider__content');
let pointsCount = movable.children.length;
let pointersArr = [];
for (let i = 0; i < pointsCount; i++){
	const li = document.createElement('li');
	points.appendChild(li);
	pointersArr.push(li);
	pointersArr[count].classList.add('slider__active');
}