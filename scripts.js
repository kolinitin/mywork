
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
      listHTML.innerHTML += '<a href="' + workList[i].link + '" target="_blank" class="row"><div class="row__details"><h2 class="title">' + workList[i].title + '</h2>  <p class="row__details_brief">' + workList[i].brief + '</p>  <div class="row__details_other">    <div class="row__details_other__text">Type: <p>' + workList[i].type + '</p></div>    <div class="row__details_other__text">Preview: <p>' + workList[i].preview + '</p></div>    <div class="row__details_other__text">Platform: <p>' + workList[i].platform + '</p></div>  </div></div><div class="row__arrow"><svg height="48" viewBox="0 0 48 48" width="32"><path d="M0 0h48v48h-48z" fill="none"/><path fill="#0072c2" d="M38 38h-28v-28h14v-4h-14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-14h-4v14zm-10-32v4h7.17l-19.66 19.66 2.83 2.83 19.66-19.66v7.17h4v-14h-14z"/></svg></div></a>';

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
