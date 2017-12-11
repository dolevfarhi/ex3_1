	var sum=34; 
	var imgSrc='<img src="images/star.png" />';
	var imgSrc1='<img src="images/plus.png" />';
function getRandomColor() {
  		var letters = '0123456789ABCDEF';
  		var color = '#';
  		for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  		}
  	return color;
	}	
	
function create(sum){
for (var i=0;i< sum; i++){	
	var newObj = $ ('<section>').addClass('rectangle').css('background',getRandomColor())
	$('#mainLayout3').append(newObj);
}
}

$("#mainLayout3").on("click","section",function(){
	if ($(this).is(":last-child")){
	create(1);	
	}
	else {
	if (!$(this).hasClass("star")){
		$(this).addClass("star").html(imgSrc);
	}
	else {
		$(this).removeClass("star").html("");
	}
	}
	
});

		
create(sum);
