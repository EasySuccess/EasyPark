function getDayOfWeek(argDate){
	
	var weekday = new Array(7);
	weekday[0]=  "sunday";
	weekday[1] = "monday";
	weekday[2] = "tuesday";
	weekday[3] = "wednesday";
	weekday[4] = "thursday";
	weekday[5] = "friday";
	weekday[6] = "saturday";
	
	return weekday[argDate.getDay()];
}

function formatFloat(num, pos){
  var size = Math.pow(10, pos);
  return Math.round(num * size) / size;
}

//Cookie Function
function storeValue(key, value) {
	if (localStorage) {
		localStorage.setItem(key, value);
	} else {
		$.cookies.set(key, value);
	}
}

function getStoredValue(key) {
	if (localStorage) {
		return localStorage.getItem(key);
	} else {
		return $.cookies.get(key);
	}
}

function removeStoredValue(key){
	if(localStorage){
		localStorage.removeItem(key);
	} else {
		$.removeCookie(key);
	}
}

function getColorStyle(num){
	
	if(num <= 0){
		return "Red";
	}else if( num > 0 & num <= 30){
		return "Orange";
	}else if( num > 30 & num <= 60){	
		return "Khaki";
	}else if( num > 60 & num <= 90){
		return "Blue";
	}else if( num > 90){
		return "GreenYellow ";
	}else{
	}
}