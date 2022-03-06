function scuberGreetingForFeet(distance) {
 if (distance <= 400) {
   return 'This one is on me!' ; 
 } if (distance >= 2000 && distance <= 2500) {
   return 'I will gladly take your thirty bucks.'
 } if (distance >= 2500) {
   return `No can do.`
 }
}


function ternaryCheckCity(city) {
  return (city === "NYC") ?  "Ok, sounds good." : "No go."
}

ternaryCheckCity(NYC);
 

function switchOnCharmFromTip(tipped) {
  if (tipped === "generous") {
    return "Thank you so much." 
  } if (tipped === `not as generous`) {
  return "Thank you." 
  } if (tipped === "thanks for everything") {
    return "Bye."
}
}
switchOnCharmFromTip(tipped);