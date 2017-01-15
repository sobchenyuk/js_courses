(function () {
	//validation
	var formPatern = {};
	formPatern.name = "";
	formPatern.phone = "[/^\+380\d{3}\d{3}\d{3}$/gm]";
	function validationPattern(elem,pattern,key) {
		var placeholderText;
		var span = document.createElement('span');
		span.className = "error";
		span.innerHTML = "Укажите "+placeholderText;
		var patternRegExp,
			res;
		event.preventDefault();
			patternRegExp = new RegExp(pattern);
			console.log(patternRegExp);
			res = patternRegExp.test(elem.value);
			if (res === false) {
				elem.classList.remove("invalid");
				elem.classList.remove("valid");
				elem.className += "invalid";
				placeholderText= elem.placeholder;
				span.innerHTML = "Укажите "+placeholderText;
				elem.parentNode.appendChild(span);
			} else {
				elem.classList.remove("invalid");
				elem.classList.remove("valid");
				elem.className = "valid";
			}
	}

	function testValidate() {
		var error;
		error = document.querySelectorAll('span.error');
		if(error){
			for(var i = 0;i< error.length; i++){
				error[i].parentNode.removeChild(error[i]);
			}
		}
		var i = 0;
		for (var key in formPatern) {
			validationPattern(form.elements[i],formPatern[key],key);
			i++
		}
	}
	form.addEventListener("submit", testValidate, true )
})();
