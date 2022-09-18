var sdate = Date.now();
function update_time() {
  var edate = Date.now();
  var ss = Math.floor((edate - sdate) / 1000);
  var mm = Math.floor(ss / 60);
  var hh = Math.floor(mm / 60);
  ss = ss % 60;
  mm = mm % 60;
  hh = hh % 24;
  document.getElementById("text-0000000f").value = hh + ":" + mm + ":" + ss;
}
setInterval(update_time,1000);
