"use strict";

function removeClass(block, active) {
  var parentBlock = block;

  for (var i = 0; i < parentBlock.children.length; i++) {
    event.target.nodeName == 'LI' && parentBlock.children[i].classList.contains(active) && parentBlock.children[i].classList.remove(active);
  }
}

function addClass(className) {
  event.target.nodeName == 'LI' && event.target.classList.add(className);
}

var langBlock = document.querySelector('.choose__lang');
langBlock.addEventListener('click', function () {
  removeClass(langBlock, 'lang__active');
  addClass('lang__active');
});
var currBlock = document.querySelector('.choose__curr');
currBlock.addEventListener('click', function () {
  removeClass(currBlock, 'curr__active');
  addClass('curr__active');
});
var navBlock = document.querySelector('.navigation__list');
navBlock.addEventListener('click', function () {
  removeClass(navBlock, 'navigation--active');
  addClass('navigation--active');
});

function slideImg(slider) {
  var sliderWidth = slider.offsetWidth;
  var maxWidth = movable.children.length - 1;

  if (event.target.classList.contains('slider__right')) {
    width += sliderWidth;

    if (width > sliderWidth * maxWidth) {
      width = sliderWidth * maxWidth;
    }

    ;
    movable.style.cssText = "margin-left : -".concat(width, "px");

    if (count >= pointsCount - 1) {
      count = pointsCount - 1;
    } else {
      count++;
    }

    ;
  }

  if (event.target.classList.contains('slider__left')) {
    width -= sliderWidth;

    if (width < 0) {
      width = 0;
    }

    ;
    movable.style.cssText = "margin-left : -".concat(width, "px");

    if (count <= 0) {
      count = 0;
    } else {
      count--;
    }

    ;
  }

  points.innerHTML = '';

  for (var i = 0; i < pointsCount; i++) {
    var li = document.createElement('li');

    if (i == count) {
      li.classList.add('slider__active');
    }

    ;
    points.appendChild(li);
  }
}

var width = 0;
var count = 0;
var slider = document.querySelector('.slider__inside');
slider.addEventListener('click', function () {
  slideImg(slider);
});
var points = slider.querySelector('.slider__pointers');
var movable = slider.querySelector('.slider__content');
var pointsCount = movable.children.length;
var pointersArr = [];

for (var i = 0; i < pointsCount; i++) {
  var li = document.createElement('li');
  points.appendChild(li);
  pointersArr.push(li);
  pointersArr[count].classList.add('slider__active');
}