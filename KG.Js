$(document).ready(function(){
  

  $("#showUl").click(function() { 

  	 $("ul.sub").show()


	});
});

var displayImage = $('#displayImage')
var video = $('.video');

displayImage.click(function() {
	displayImage.hide();
	video.removeClass("hide");
	video.trigger("play");
});



