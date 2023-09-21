

// var randomnumber1= Math.floor(Math.random())*6+1;

// var randomdice_image ="dice"+randomnumber1+".png";

// var random_image_source="dicepng/"+randomdice_image;


// var img1=document.querySelectorAll("img")[];

// img1.setAttribute("src",random_image_source);


const photos = ['dicepng/dice1.png', 'dicepng/dice2.png', 'dicepng/dice3.png', 'dicepng/dice4.png', 'dicepng/dice5.png', 'dicepng/dice6.png'];
      
      // Generate a random number between 0 and 5
      const randomIndex = Math.floor(Math.random() * 6 );
      
      // Set the src attribute of the img element to a random photo
      const img = document.getElementById('random-photo1');
      img.src = photos[randomIndex];

      const randomIndex2 = Math.floor(Math.random() * 6 );
      const img2 = document.getElementById('random-photo2');
      img2.src = photos[randomIndex2];
      

      if(randomIndex>randomIndex2){
        document.querySelector("h1").innerHTML="💦Player 1 WIN";
      }
      else if (randomIndex<randomIndex2){
        document.querySelector("h1").innerHTML="💦Player 2 WIN";
      }
      else{
        document.querySelector("h1").innerHTML="💧DRAW";

      }


// document.querySelector("h1").innerHTML="ma chuda";
