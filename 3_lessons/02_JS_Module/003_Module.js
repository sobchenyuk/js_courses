//      Анонимная функция 
//      (function(){
//         тело функции
//      })();
(function () {

    var message = "Hello from module3";

    window.onload = function (){
        var pArray = document.getElementsByTagName("p");

        for (var i = 0; i < pArray.length; i++) {
            pArray[i].innerHTML += "<b>"  + message + "</b>";
        }
    }

})();
