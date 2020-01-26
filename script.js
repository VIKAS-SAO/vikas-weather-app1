var city;
function getCity(){
    city=document.getElementById("city").value;
    console.log(city);


    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1a186e548f790f709f27899950b68013",
    function(data){
    console.log(data); 
    
    var icon="http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
    var temperature=Math.floor(data.main.temp-273);
    var weather=data.weather[0].main;
     
    $(".icon").attr("src",icon);
    $(".temp").text(temperature+" * C");
    $(".weather").html(weather);
    
    }
    );




}
 