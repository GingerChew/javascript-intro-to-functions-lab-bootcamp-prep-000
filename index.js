function shout(string){
  return string.toUpperCase ();
}

function whisper(string){
  return string.toLowerCase ();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

var lowercase='hello'
var uppercase='HELLO'
var love="I love you, Grandma."
function sayHiToGrandma(string){
  if(string===lowercase){
    return ("I can't hear you!")
  }
  if(string===uppercase){
    return("YES INDEED!")
  }
  if(string===love){
    return("I love you, too.")
  }
}
