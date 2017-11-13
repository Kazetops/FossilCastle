
var test = function(){
	var _this = this;
	_this.init = function(){
		$("#mainDiv").setText("11234");
	};
};

$(function(){
	var obj = new test();
	obj.init();
});