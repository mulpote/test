count = 0; //カウントの初期値
timerID = setInterval(&#39;countup()&#39;,1000); //1秒毎にcountup()を呼び出し

function countup() {
	count++;
	document.form_count.counter.value = count;
}
