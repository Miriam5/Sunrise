

$(document).ready(function() {

  if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(function(position) {
      		lat = "lat=" + position.coords.latitude;
      		lng = "lng=" + position.coords.longitude;
       		console.log(lat, lng); 
        	sunriseSunset(lat,lng);
     		}); 
     		} else {
       			 alert("Geolocation is not supported by this browser.");
  }
 


	function sunriseSunset(lat,lng) {
		//var lat = 41.0682;
		//var long = 72.3387;
		var endpoint = "https://api.sunrise-sunset.org/json?";
//https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today
		var params =  lat + "&" + lng; //+ "&date=today&callback=myCallback";
		var api = endpoint + params;
		var lat, lng;
		
		$.ajax({
				url: api,
		
				success: function(result){
					var rise = result.results.sunrise,
					set = result.results.sunset,
					length = result.results.day_length;
				
					console.log(result.results);

					$("#sunrise-time").html("Sunrise: " + rise);
					$("#sunset-time").html("Sunset: " + set);
					$("#day-length").html("The day is " + length + " hours long.");
					//$(".time").html("Time: " + new Date().getHours() + ":" + new Date().getMinutes());
					$("#date").html("Today is " + "" + "Be present and enjoy every moment.");
		 
					console.group();
						console.log(result.results.sunrise);
						console.log(result.results.sunset);
						console.log(result.results.day_length);
						//console.log(results.date);
					console.groupEnd();

	 			},
		 		error: function() {

				$(".loading").html("Oopps, sorry, the server is down.");

				}
			});
		};
}); 
/*<div class="SUNSET">

		<div class="containing">
			<p id="loading"></p>
			<h2></h2>
			<p id="sunrise-time"></p>
			<p id="sunset-time"></p>
			<p id="day-length"></p>
			<p id="date"></p>
		</div>
		
	</div>
	*/
