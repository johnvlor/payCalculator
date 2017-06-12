"use strict";

function inputHours(hours) {
	var hours = prompt ("Please enter your hours.");
	return hours;
}

function inputRate(rate) {
	var rate = prompt ("Please enter your pay rate");
	return rate;
}

function determineRegHours(regularHours) {
	var regHoursResult;
	var regularWorkWeek;
	
	regularWorkWeek = 40;
	
	if (regularHours >= regularWorkWeek) {
		regHoursResult = regularWorkWeek;
		return regHoursResult;
	}
	else {
		regHoursResult = regularHours;
		return regHoursResult;
	}
}

function calculateRegPay(regHours, regRate) {
	var regResult;
	
	regResult = regHours * regRate;
	return regResult;
}

function determineOtHours(overtimeHrs) {
	var otHoursResult;
	var regularWorkWeek;
	
	regularWorkWeek = 40;
	
	if (overtimeHrs >= regularWorkWeek) {
		otHoursResult = overtimeHrs - regularWorkWeek;
		return otHoursResult;
	}
	else {
		otHoursResult = 0;
		return otHoursResult;
	}
}

function determineOtRate(overtimeRate) {
	var otRateResult;
	var timeAndHalf;
	
	timeAndHalf = 1.5;
	
	otRateResult = overtimeRate * timeAndHalf;
	return otRateResult;
}

function calculateOtPay(myOtHrs, myOtRate) {
	var otPayResult;
	
	otPayResult = myOtHrs * myOtRate;
	return otPayResult;
}

function calculateTotalPay(totalRegPay, totalOtPay) {
	var totalPayResult;
	
	totalPayResult = totalRegPay + totalOtPay;
	return totalPayResult;
}

function displayHours(hours) {
	console.log("Hours = ", hours);
}

function displayRate(rate) {
	console.log("Rate = $", rate);
}

function displayRegularPay(regPay) {
	console.log("Regular pay = $", regPay.toFixed(2));
}

function displayOvertimePay(otPay) {
	console.log("OverTime pay = $", otPay.toFixed(2));
}

function displayTotalPay(totalPay) {
	console.log("Total pay = $", totalPay.toFixed(2));
}
	
function runProgram() {
	
	var hours = inputHours();
	var rate = inputRate();
	
	var regHours = determineRegHours(hours);
	var regPay = calculateRegPay(regHours, rate);

	var otHours = determineOtHours(hours);
	var otRate = determineOtRate(rate);
	var otPay = calculateOtPay(otHours, otRate);
	
	var totalPay = calculateTotalPay(regPay, otPay);
	
	displayHours(hours);
	displayRate(rate);
	displayRegularPay(regPay);
	displayOvertimePay(otPay);
	displayTotalPay(totalPay);
}

runProgram ();

