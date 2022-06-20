<!-- highlight.js ボタン -->
;(function(d){
if(!window.getSelection){
  return
}
var btn = d.createElement(&quot;button&quot;)
btn.id = &quot;selectPre&quot;
btn.textContent = &quot;ソースコード全選択&quot;
btn.addEventListener(&quot;click&quot;, selectPre, false)
function selectPre(){
  var sel = window.getSelection()
  var pre = this.parentNode
  sel.selectAllChildren(pre)
  sel.extend(pre, pre.childNodes.length-1)
}
var pres = d.getElementsByTagName(&quot;code&quot;)
for(var i=pres.length; i--;){
  pres[i].addEventListener(&quot;mouseover&quot;, addBtn, false)
}
function addBtn(e){
  if(this === addBtn.ele) return // not to addBtn if already
  this.appendChild(btn)
  return addBtn.ele = this
}
})(document)
