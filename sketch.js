let currentImage;
let answer = "";
let inputBox;

function preload() {
  nameEnter = loadImage('images/name enter.png');
  partyInvite = loadImage('images/party invite.png');
  inviteNo = loadImage('images/invite no end.png');
  presentChoice = loadImage('images/present choice.png');
  partyScene = loadImage('images/party scene.png');
  partySceneWH = loadImage('images/party scene w present ham.png');
  partySceneWP = loadImage('images/party scene w present pony.png');
  partySceneWM = loadImage('images/party scene w present money.png');
  partySceneWS = loadImage('images/party scene w present skate.png');
  noPresent = loadImage('images/nopresent end.png');
  hamburgerPresent = loadImage('images/hamburger present.png');
  hamburgerOpen = loadImage('images/hamburger open.png');
  hamburgerEnd1 = loadImage('images/hamburger end1.png');
  hamburgerEnd2 = loadImage('images/hamburger end2.png');
  moneyPresent = loadImage('images/onemillion present.png');
  moneyOpen = loadImage('images/money open.png');
  moneyEnd1 = loadImage('images/money end1.png');
  moneyEnd2 = loadImage('images/money end2.png');
  ponyPresent = loadImage('images/pony present.png');
  ponyOpen = loadImage('images/pony open.png');
  ponyEnd1 = loadImage('images/horse end1.png');
  ponyEnd2 = loadImage('images/horse end2.png');
  skatePresent = loadImage('images/skate present.png');
  skateOpen = loadImage('images/skateboard open.png');
  skateEnd1 = loadImage('images/skate end1.png');
  skateEnd2 = loadImage('images/skate end2.png');

}
// Function to handle key press events
function handleKeyPress(event) {
  // Check if the key pressed is 'y' or 'Y'
  if (event.key === 'y' || event.key === 'Y') {
    answer = "yes";
    console.log("Answer set to yes");
  }
  // Check if the key pressed is 'n' or 'N'
  else if (event.key === 'n' || event.key === 'N') {
    answer = "no";
    console.log("Answer set to no");
  }
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
  textSize(24);
  textStyle(BOLD);
  
  // Set initial image
  
  currentImage = partyInvite;
  image(currentImage, 0, 0, width, height);
  
  // Prompt user
  
}

function draw() {
  image(currentImage, 0, 0, width, height);
  
  if (currentImage === partyInvite && answer === "") {
    promptUser();
}
}

  
  // Handle transitions based on the current image and player's choice
//   if (currentImage === partyInvite) {
//     if (answer === "yes") {
//       currentImage = presentChoice;
//       // Create an input box for the user
//       inputBox = createInput();
//       inputBox.position(450, 250);
//       inputBox.size(300, 30);
//       inputBox.changed(processInput);
//     } else if (answer === "no") {
//       currentImage = inviteNo;
//     }
//   } else if (currentImage === presentChoice) {
    
//   }
//  if (currentImage === hamburgerPresent){
//     if (answer === "yes"){
//       currentImage = partySceneWH;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   }
//   if (currentImage === partySceneWH){
//     if (answer === "yes"){
//       currentImage = hamburgerOpen;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   }
//   if (currentImage === hamburgerOpen){
//     if (answer === "yes"){
//       currentImage = hamburgerEnd1;
//     }
//     else if (answer === "no"){
//       currentImage = hamburgerEnd2;
//     }
//   }
//   if (currentImage === moneyPresent){
//     if (answer === "yes"){
//       currentImage = partySceneWM;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   }
//   if (currentImage === partySceneWM){
//     if (answer === "yes"){
//       currentImage = moneyOpen;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   }
//   if (currentImage === moneyOpen){
//     if (answer === "yes"){
//       currentImage = moneyEnd1;
//     }
//     else if (answer === "no"){
//       currentImage = moneyEnd2;
//     }
//   }
//   if (currentImage === ponyPresent){
//     if (answer === "yes"){
//       currentImage = partySceneWP;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   }
//   if (currentImage === partySceneWP){
//     if (answer === "yes"){
//       currentImage = ponyOpen;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   }
//   if (currentImage === ponyOpen){
//     if (answer === "yes"){
//       currentImage = ponyEnd1;
//     }
//     else if (answer === "no"){
//       currentImage = ponyEnd2;
//     }
//   }
//   if (currentImage === skatePresent){
//     if (answer === "yes"){
//       currentImage = partySceneWS;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   } if (currentImage === partySceneWS){
//     if (answer === "yes"){
//       currentImage = skateOpen;
//     }
//     else if (answer === "no"){
//       currentImage = inviteNo;
//     }
//   }
//   if (currentImage === skateOpen){
//     if (answer === "yes"){
//       currentImage = skateEnd1;
//     }
//     else if (answer === "no"){
//       currentImage = skateEnd2;
//     }
//   }
//   if (currentImage === partyScene){
//     if (answer === "yes"){
//       currentImage = noPresent;
//     }
//     else if (answer === "no"){
//       currentImage = noPresent;
//     }
//   }

 
  // Display current image
  function keyPressed() {
    if (key === 'y' || key === 'Y') {
      answer = "yes";
      handleAnswer();
    } else if (key === 'n' || key === 'N') {
      answer = "no";
      handleAnswer();
    }
  }
  
  function handleAnswer() {
    // Handle transitions based on the current image and player's choice
    switch(currentImage) {
      case partyInvite:
        
        if (answer === "yes") {
          currentImage = presentChoice;
          // Create an input box for the user
          inputBox = createInput();
          inputBox.position(450, 250);
          inputBox.size(300, 30);
          inputBox.changed(processInputPresentChoice);
        } else if (answer === "no") {
          currentImage = inviteNo;
        }
        break;
     
      case hamburgerPresent:
        if (answer === "yes") {
          currentImage = partySceneWH;
        } else if (answer === "no") {
          currentImage = inviteNo;
        }
        break;
      case partySceneWH:
        if (answer === "yes") {
          currentImage = hamburgerOpen;
        } else if (answer === "no") {
          currentImage = noPresent;
        }
        break;
      case hamburgerOpen:
        if (answer === "yes") {
          currentImage = hamburgerEnd1;
        } else if (answer === "no") {
          currentImage = hamburgerEnd2;
        }
        break;
      case moneyPresent:
          if (answer === "yes") {
            currentImage = partySceneWM;
          } else if (answer === "no") {
            currentImage = inviteNo;
          }
        break;
      case partySceneWM:
          if (answer === "yes") {
            currentImage = moneyOpen;
          } else if (answer === "no") {
            currentImage = noPresent;
          }
        break;
      case moneyOpen:
          if (answer === "yes") {
            currentImage = moneyEnd1;
          } else if (answer === "no") {
            currentImage = moneyEnd2;
          }
        break;
       case ponyPresent:
        if (answer === "yes") {
          currentImage = partySceneWP;
        } else if (answer === "no") {
          currentImage = inviteNo;
        }
        break;
      case partySceneWP:
        if (answer === "yes") {
          currentImage = ponyOpen;
        } else if (answer === "no") {
          currentImage = noPresent;
        }
        break;
      case ponyOpen:
        if (answer === "yes") {
          currentImage = ponyEnd2;
        } else if (answer === "no") {
          currentImage = ponyEnd1;
        }
        break;
       case skatePresent:
        if (answer === "yes") {
          currentImage = partySceneWS;
        } else if (answer === "no") {
          currentImage = inviteNo;
        }
        break;
      case partySceneWS:
        if (answer === "yes") {
          currentImage = skateOpen;
        } else if (answer === "no") {
          currentImage = inviteNo;
        }
        break;
      case skateOpen:
        if (answer === "yes") {
          currentImage = skateEnd1;
        } else if (answer === "no") {
          currentImage = skateEnd2;
        }
        break;
       case partyScene:
        if (answer === "yes") {
          currentImage = noPresent;
        } else if (answer === "no") {
          currentImage = noPresent;
        }
        break;
      case partySceneWP:
        if (answer === "yes") {
          currentImage = ponyOpen;
        } else if (answer === "no") {
          currentImage = noPresent;
        }
        break;
      case ponyOpen:
        if (answer === "yes") {
          currentImage = ponyEnd2;
        } else if (answer === "no") {
          currentImage = ponyEnd1;
        }
        break;
    }
    
 
  
  
  // Reset answer for the next prompt
  answer = "";
}

function promptUser() {
  fill(60,90,180);
  text("RSVP? (press y for yes, n for no)", 250, 750);
}

// function processInput() {
//   let userInput = inputBox.value();
  
//   if (userInput === "hamburger") {
//     currentImage = hamburgerPresent;
//   } else if (userInput === "$1,000,000") {
//     currentImage = moneyPresent;
//   } else if (userInput === "pony") {
//     currentImage = ponyPresent;
//   } else if (userInput === "skateboard") {
//     currentImage = skatePresent;
//   } else {
   
//     currentImage = partyScene;
//   }
  
  
//   inputBox.remove();
// }
function processInputPresentChoice() {
  let userInput = inputBox.value().toLowerCase(); // Convert input to lowercase
  
  // Check the user's choice and transition to the corresponding image
  switch (userInput) {
    case "hamburger":
      currentImage = hamburgerPresent;
      break;
    case "$1,000,000":
      currentImage = moneyPresent;
      break;
    case "pony":
      currentImage = ponyPresent;
      break;
    case "skateboard":
      currentImage = skatePresent;
      break;
    default:
      currentImage = partyScene; // Default to partyScene if input is invalid
  }
  
  inputBox.remove(); // Remove the input box
}

