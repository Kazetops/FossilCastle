var oriUI = oriUI || {};

{
	function oriButton(divId, content){
		this._settings = {
			divId : divId,
			content : content
		};
	}
	
	oriButton.prototype = {
		constructor : oriButton,
		version : "0.0.1",
		init : function(){
			let $settings = this._settings;
			let $dom = $("<div class='oriBtn'></div>").text($settings.content);
			$("#" + $settings.divId).append($dom);
		}
	};
	
	oriUI.oriButton = oriButton;
}