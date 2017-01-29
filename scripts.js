// FOR VISITED STATE
var rows = document.querySelectorAll('a.row');
for(i=0;i < rows.length; i++) {
  rows[i].addEventListener('click', function() {
    this.classList.add('visited');
  })
}

(function(){

})();

var workList;


function XHR(file, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', 'https://kolinitin89.github.io/mywork/worklist.json', true);
    xhr.send();
}

XHR();

// function getJSON(callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//       workList = callback(xhr.responseText);
//       console.log(workList);
//     }
//   }
//   xhr.open('GET', 'https://kolinitin89.github.io/mywork/worklist.json', true);
//   xhr.send();
//
// }
// getJSON();

//
// var listHTML = document.getElementById('list_container');
// var listMaker;
// console.log(workList);
// for(i=0;i>workList.length;i++) {
//   listMaker.innerHTML = 'asdsdsad';
// }
