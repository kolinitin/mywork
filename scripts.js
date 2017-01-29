
// for JSON
var workList;

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'worklist.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var workList = JSON.parse(response);
    var listHTML = document.getElementById('list_container');
    for(i=0;i<workList.length;i++) {
      // console.log(workList.length);
      listHTML.innerHTML += '<a href="' + workList[i].link + '" target="_blank" class="row"><div class="row__details"><h2 class="title">' + workList[i].title + '</h2>  <p class="row__details_brief">' + workList[i].brief + '</p>  <div class="row__details_other">    <div class="row__details_other__text">Type: <p>' + workList[i].type + '</p></div>    <div class="row__details_other__text">Preview: <p>' + workList[i].preview + '</p></div>    <div class="row__details_other__text">Platform: <p>' + workList[i].platform + '</p></div>  </div></div><div class="row__arrow">&#x2197;</div></a>';

      // FOR VISITED STATE
      var rows = document.querySelectorAll('a.row');
      for(j=0;j < rows.length; j++) {
        rows[j].addEventListener('click', function() {
          this.classList.add('visited');
        })
      }
    }
 });
}
init();
