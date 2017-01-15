(function () {
var slaiderContentImg = document.querySelector('.slaider__content_img');
var slaider = document.querySelector('.slaider__content');
slaider.insertAdjacentHTML('afterBegin', '<img src="img/1.jpg" alt="">');
var slaiderImg = document.querySelector('.slaider__content img');
function funcActive() {
	var click = event.target;
	var img;
	img = click.getAttribute('src');
	slaiderImg.setAttribute('src', img);
}
slaiderContentImg.addEventListener('click',funcActive, true);
})();