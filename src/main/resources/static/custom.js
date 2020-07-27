 $(document).ready(function(){
	
	
   switch(data.weather[0].get('description')){
      	case "clear sky":
          	$("body").css("background-image",'url("https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80")');
        break;
      	case "few clouds":
        	$('body').css('background-image','url("https://images.unsplash.com/photo-1506588345361-5e12b7840845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")');
        	break;
       	case "scattered clouds":
       		$('body').css('background-image','url("http://cdn.wallpapersafari.com/88/8/RcbPo5.jpg")');
        	break;
		case "broken clouds":
       		$('body').css('background-image','url("https://images.unsplash.com/photo-1581149718729-a18d90034cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")');
        	break;
		case "shower rain":
       		$('body').css('background-image','url("https://images.unsplash.com/photo-1568749060075-55a51f687fa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")');
        	break;
		case "rain":
       		$('body').css('background-image','url("https://images.unsplash.com/photo-1487762488615-8a011458b53e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")');
        	break;
		case "thunderstorm":
       		$('body').css('background-image','url("https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")');
        	break;
		case "snow":
       		$('body').css('background-image','url("https://images.unsplash.com/photo-1516431883659-655d41c09bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80")');
        	break;
		case "mist":
       		$('body').css('background-image','url("https://images.unsplash.com/photo-1517278401293-161e3fffd176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")');
        	break;
      	default:
        	$('body').css('background-image','url("https://images.unsplash.com/photo-1490845433441-5174fe36bc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80")');
        	break;
    }
});
    

