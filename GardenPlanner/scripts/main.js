var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "vegetables.json?" +new Date().getTime(), true); //add date at end of request to trick refresh/no cache
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var vegList = JSON.parse(this.responseText);
      renderVegList(vegList);
    }
};
xmlhttp.send();

function renderVegList(vegList){
var htmlString = "";

htmlString += "<form><select name='SelVegetable'>";

  for (i = 0; i < vegList.length; i++) {
    // console.log(JSON.stringify(vegList[i].Veg), JSON.stringify(vegList[i].Name)); //Test Output
    htmlString += "<option value='" + JSON.stringify(vegList[i].ID) + "'>" +
    JSON.stringify(vegList[i].Veg) + " - " + JSON.stringify(vegList[i].Name);
  }

htmlString += "</select></form>";
//console.log(htmlString); //Test Output
document.getElementById("vegList").innerHTML = htmlString;
}
