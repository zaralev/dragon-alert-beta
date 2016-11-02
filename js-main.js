// jwt custom code
//
// function pageSetUp() {
// 	//console.log('pageSetUp');
// 	document.getElementById("result").innerHTML = "00";
//
// 	var a=document.getElementsByTagName("a");
// 	for(var i=0;i<a.length;i++)
// 	{
// 		 a[i].onclick=function()
// 		 {
// 			  window.location=this.getAttribute("href");
// 			  return false
// 		 }
// 	}
// }


function jmp2LocalPage(whichPage) {
    location.href = whichPage;
}

// function changeDate() {
// 	console.log("did it burp");
//     document.getElementById("year").onclick = function() {
//         document.getElementById("current").innerHTML = "<input type='radio' name='date' value='Last Year' checked> Last Year";
// 				console.log("burp");
//     }​
// }
