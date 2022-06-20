function(d){
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
}
