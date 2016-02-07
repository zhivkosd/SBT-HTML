var sectionHeight = document.querySelector('#section').clientHeight;
document.querySelector('#aside').style.height = sectionHeight + 'px';
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

var navEls = document.querySelectorAll('.links_horizontal_nav > li'),
	li, dd_menu;

for (var i = 0; i < navEls.length; i++) {
	li = navEls[i];
	if(li.id !== 'home'){
		dd_menu = document.querySelector('#' + li.id + ' .dd_menu');
		li.addEventListener('mouseover', (function(menu) {
			return function() { 
				if (menu.hasClass('hide')) {
					menu.classList.add('show');
					menu.classList.remove('hide');
				}
				else {
					menu.classList.add('hide');
					menu.classList.remove('show');
				}
			};
		})(dd_menu));

		li.addEventListener('mouseout', (function(menu) {
			return function() { 
				if (menu.hasClass('show')) {
					menu.classList.add('hide');
					menu.classList.remove('show');
				}
			};
		})(dd_menu));
	}
};

var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('.dropdown a'),
			menu = el.querySelector('.dropdown-content'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			event.target.innerHTML = 'Click to close<i class="icon-arrow open"></i>';
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			event.target.innerHTML = 'Click to open<i class="icon-arrow close"></i>';
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			event.preventDefault();
		}
	};
});

