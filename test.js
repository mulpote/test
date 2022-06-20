<!--
count = 0; //カウントの初期値
timerID = setInterval('countup()',1000); //1秒毎にcountup()を呼び出し

function countup() {
	count++;
	document.form_count.counter.value = count;
}
-->


    var doc0= document.getElementById("div0");  
    doc0.innerHTML= "gibhutに javaScript を格納！";   

;(function(d){
if(!window.getSelection){
  return
}
var btn = d.createElement("button")
btn.id = "selectPre"
btn.textContent = "ソースコード全選択"
btn.addEventListener("click", selectPre, false)
function selectPre(){
  var sel = window.getSelection()
  var pre = this.parentNode
  sel.selectAllChildren(pre)
  sel.extend(pre, pre.childNodes.length-1)
}
var pres = d.getElementsByTagName("code")
for(var i=pres.length; i--;){
  pres[i].addEventListener("mouseover", addBtn, false)
}
function addBtn(e){
  if(this === addBtn.ele) return // not to addBtn if already
  this.appendChild(btn)
  return addBtn.ele = this
}
})(document)
