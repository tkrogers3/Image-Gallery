const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

/* Index starts 1 and ends with 5 since there are 5 images, 
each iteration creates a new img for thumb bar */
for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');

    /* New Image attributes are set to
   src as defined by instructions. File location of images/pic, 
   index # of picture and img (jpg)file type */
    newImage.setAttribute('src', 'images/pic' + i + '.jpg'); 
  
    /*  When button is clicked, the function object (event) runs, firing a signal 
    to the event.target which is targeting the new image source to 
    replace displayed image with image that is clicked*/
    newImage.onclick = function(event) {
        displayedImage.src = event.target.src;
   }

    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button- Once again using the event object
to target the lighten/darken image button. */

btn.onclick = lightSwitch;

function lightSwitch(event) {
  var button = event.target;
  var mode = button.getAttribute("class");


  /* If button is clicked when dark, the button sets attribute  from "dark" to "light" 
  and changes the buttons text from "Darken" to "Lighten", and changes the tint 
  of the new photo by changing the background overlay color from dark  to light.
  The else statement runs the same except changes attributes from light to dark */

  if (mode === "dark") {
    //Mode  "dark"//
    button.setAttribute("class", "light");
    button.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,.5)";
    
  } else {
    button.setAttribute ("class", "dark");
    button.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}



