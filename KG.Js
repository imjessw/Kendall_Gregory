$(document).ready(function(){
  

  $("#showUl").click(function() { 

  	 $("ul.sub").show()


	});


	var displayImage = $('#displayImage')
	var video = $('.Playvideo');


	displayImage.on("click",function() {
		displayImage.addClass("hide");

		if (displayImage.hide=true) {
			video.removeClass("hide");
			video.trigger("play");
			
		}
		
		video.on("click",function(){
			console.log("clicked")
			 $(this).get(0).paused ? $(this).get(0).play() : $(this).get(0).pause();


		});

		video.on('ended',function(){
		    console.log('Video has ended!');
		    video.addClass("hide");
		    displayImage.removeClass("hide");
			console.log("should see displayImage")

	    });				
	});

});



