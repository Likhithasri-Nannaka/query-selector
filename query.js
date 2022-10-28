var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
var headerTitle = document.getElementById("header-title");
headerTitle.innerText = "Item List";
headerTitle.textContent = "Item Lister";
var item = document.getElementsByClassName("list-group-item");
for (var i = 0; i < item.length; i++) {
  item[i].style.fontWeight = "bold";
  item[i].style.backgroundColor = "yellow";
  item[i].style.backgroundColor = "#f4f4f4";
}
//item[2].style.backgroundColor = "green";
var li = document.getElementsByTagName("li");
//li[1].style.backgroundColor = "red";
//li[2].style.display = "none";
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
even[0].style.color = "green";
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "red";
}
item[2].style.backgroundColor = "green";
var new_item = document.getElementsByClassName("list-new-item");
var new_item_tag = document.getElementsByTagName("list-new-item");
new_item.style.backgroundcolour = "red";
new_item_tag.style.fontWeight = "bold";