function powerLinks(){
//aqui entra o codigo anterior do script
link.onkeypress = function(e){
var keynum;
if(window.event) // para o IE
keynum = window.event.keyCode;
else if(e.keyCode) // Netscape/Firefox/Opera
keynum = e.keyCode;
if (keynum == 13) {
fazAlgumaCoisa();
return false;
}
}
}
var randomScalingFactor = function(){ 
	
	return Math.round(Math.random()*1000)
	
	};
	
	var pieData = [
				{
					value: 500,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Red"
				}

			];
			
	

window.onload = function(){
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	
};