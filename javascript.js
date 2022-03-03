function add(form) {
	var annualPay = 0;
	var Pay = form.Pay.value;
	var Days = form.Days.value;

	if (Days != "" && Pay != "") { 
		annualPay = (Pay / 60 * 3 * Days * 52);
	} 

	document.getElementById("myDiv").innerHTML = "Yearly Clippings Cash: $"+(Math.round(annualPay * 100) / 100).toFixed(2);
}