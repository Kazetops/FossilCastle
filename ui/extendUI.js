var extUI = extUI || {};

extUI.createOriBtn = function(divId, content){
	let oriBtnObj = new oriUI.oriButton(divId, content);
	oriBtnObj.init();
	return oriBtnObj;
};