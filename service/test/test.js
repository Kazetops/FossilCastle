
var test = function(){
	var _this = this;
	_this.init = function(){
		$("#testSpan").html("11234");
	};
};

$(function(){
	var obj = new test();
	obj.init();
});