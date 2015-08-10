$(document).ready(function(){
  

  $("#showUl").click(function() { 

  	 $("ul.sub").show()


	});


	var displayImage = $('#displayImage')
	var video = $('.Playvideo');


	displayImage.on("click",function() {
		// displayImage.hide();
		displayImage.addClass("hide");

		if (displayImage.hide=true) {
			video.removeClass("hide");
			video.trigger("play");
			

		} else if(video.on('click',"play") == true){

			console.log("add pause function")
		};


		video.on('ended',function(){
		    console.log('Video has ended!');
		    video.addClass("hide");
		    displayImage.removeClass("hide");
			console.log("should see displayImage")

	    });


		
		
	});
});



