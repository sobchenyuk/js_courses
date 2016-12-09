function firstElenment(obj) {

	removeBottonClass(obj);

	console.log('first');

	switchItem();

	var active = document.querySelector(".main-list-item");
	if(active.classList.contains('active')){
		return false;
	}else {
		active.className +=" active";
	}

}

function lastElenment(obj) {

	removeBottonClass(obj);

	switchItem();

	var items = document.getElementById("list");
	items.lastChild.className +=" active";

	console.log('last');

}

function nextElenment(obj) {

	removeBottonClass(obj);

	var active = document.querySelector('.active');

	var items = document.getElementById("list");

	var next = active.nextSibling;

	switchItem();

	if (next == null){

		items.firstChild.className +=" active";

	} else{
		active.nextSibling.className +=" active";
	}

	console.log('next')


}

function previousElenment(obj) {

	removeBottonClass(obj);

	var active = document.querySelector('.active');


	var items = document.getElementById("list");


	var next = active.previousSibling;


	switchItem();

	if (next == null){

		items.lastChild.className +=" active";

	} else{
		active.previousSibling.className +=" active";
	}


	console.log('previous')

}

function insertPreviousElenment(obj) {

	removeBottonClass(obj);

	switchItem();

	var items = document.getElementById("list");

	var li = document.createElement("li");
	li.innerHTML = "Ваш выбор";
	li.className +="main-list-item active";

	items.appendChild(li);


	console.log('insertPrevious')

}

function deleteLastElenment(obj) {

	removeBottonClass(obj);

	switchItem();

	var items = document.getElementById("list");

	var oneChild = items.lastChild;
	items.removeChild(oneChild);
	items.lastChild.className +=" active";


	console.log('deleteLast')

}

function insertFirstElenment(obj) {

	removeBottonClass(obj);

	switchItem();

	var items = document.getElementById("list");

	var theFirstChild = items.firstChild;

	var li = document.createElement("li");
	li.innerHTML = "Ваш выбор";
	li.className +="main-list-item active";

	items.insertBefore(li, theFirstChild);



	//items.appendChild(li);



	console.log('insertFirst')

}

function removeBottonClass(obj) {
	var el = document.querySelectorAll(".btn > button");
	for (var i = 0, cnt = el.length; i < cnt; i++) {
		el[i].classList.remove("button_active");
	}
		obj.className +=" button_active";
}

function switchItem() {
	var item = document.querySelectorAll(".body-main-list > .main-list-item");
	for (var i = 0, cnt = item.length; i < cnt; i++) {
		item[i].classList.remove("active");
	}
}
