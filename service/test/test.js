
var test = function(){
	var _this = this;
	_this.init = function(){
		$("#testSpan").attr("title","test1233").tooltip();
		extUI.createOriBtn("treeMenuBtn1", "按钮1");
		extUI.createOriBtn("treeMenuBtn2", "按钮2");
		extUI.createOriBtn("treeMenuBtn3", "按钮3");
		extUI.createOriBtn("treeMenuBtn4", "按钮4");
		extUI.createOriBtn("treeMenuBtn5", "按钮5");
		extUI.createOriBtn("treeMenuBtn6", "按钮6");
	};
};

$(function(){
	var obj = new test();
	obj.init();
});