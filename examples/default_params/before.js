var showMood = function(name, mood){
  var name = name || "Val";
  var mood = mood || "sad";
  console.log(name,"is", mood)
}

showMood("Jarrod");
showMood("Jarrod", "grumpy");
showMood();