// FOR VISITED STATE
var rows = document.querySelectorAll('a.row');
for(i=0;i < rows.length; i++) {
  rows[i].addEventListener('click', function() {
    this.classList.add('visited');
  })
}



var workList;

function getJSON() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(callback) {
    if(xhr.readyState === 4) {
      workList = JSON.parse(xhr.responseText);
      console.log(workList);
    }
  }
  xhr.open('GET', 'worklist.json');
  xhr.send();

}
getJSON();

//
// var listHTML = document.getElementById('list_container');
// var listMaker;
// console.log(workList);
// for(i=0;i>workList.length;i++) {
//   listMaker.innerHTML = 'asdsdsad';
// }
