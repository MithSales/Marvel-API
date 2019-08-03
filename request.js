document.addEventListener("DOMContentLoaded", bindButton);
var apiKey = "ce5bb6bdbc567c8b7d7418148c5357d4";
var pKey = "3b17b1d2814c90ed33ed36d60fb5147ddb81b590";

function bindButton(event)
{
    var timer = event.timeStamp;
    var request = new XMLHttpRequest();
    var website = 'http://gateway.marvel.com/v1/public/characters?name='
    var name = document.getElementById('heroName').value;
    var web = website + name + 'ts=' + timer + '&apikey=' + apiKey + '&hash=' + pKey;

    document.getElementById('submit').addEventListener('click', function (event) {
      document.getElementById('heroName').textContent = "";
      document.getElementById('description').textContent = "";
      });

      request.open('GET', web, true) 

      request.setRequestHeader('Content-Type', 'application/json');
      request.addEventListener('load', function() {
          if(request.status >= 200 && requset.status < 400) {

            var result = JSON.parse(request.responseText);
            document.getElementById('name').textContent = result.name;
            document.getElementById('description').textContent = result.description;


          } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
          }

          event.preventDefault();
      });
      request.send(null);

}
