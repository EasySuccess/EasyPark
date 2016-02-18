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
	
function getParkFee(name){
			
	feeOf2 = ["栢麗", "下環街市"];
	feeOf3 = ["栢港","栢景","栢威","栢蕙","污水處理站","華士古達嘉馬花園 ","祐漢公園","科學館","麗都","交通事務局大樓","青翠樓","望善樓","河邊新街","快富樓","蓮花路","永寧街","氹仔中央公園","氹仔客運碼頭","望賢樓","湖畔大廈","居雅大廈","業興大廈","樂群樓","青葱大廈"]
	feeOf6 = ["栢佳","栢濤","栢寧","栢力","栢樂","南灣(栢湖)","宋玉生廣場","藝園","亞馬喇前地","何賢公園","馬六甲街","黑橋街","快達樓"]
	
	if(feeOf2.indexOf(name) >= 0){
		return "$2";
	}else if(feeOf6.indexOf(name) >= 0){
		return "$6";
	}else{
		return "$3";
	}
	
}