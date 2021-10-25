/*hi andrew
  text = text.replaceAll(">:(", "😠");
    text = text.replaceAll(">:)", "😈");
    if (text.includes(":)")) {
      text = text.replaceAll(":)", "😀");
    }

    if (text.includes(":D")) {
      text = text.replaceAll(":D", "😁");
    }

    textt = text.toLowerCase();
    text = text.replaceAll("^_^'", "😅");
    text = text.replaceAll("xD", "😆");
    text = text.replaceAll(":|", "😐");
    text = text.replaceAll(":O", "😮");
    text = text.replaceAll(":(", "🙁");
    text = text.replaceAll(":s", "😖");
    text = text.replaceAll(":P", "😛");
    text = text.replaceAll(":ROFL:", "🤣");
    text = text.replaceAll(":bye:", "👋");
    text = text.replaceAll("$_$", "🤑");
    text = text.replaceAll("B)", "😎");
    text = text.replaceAll(";)", "😏");
    text = text.replaceAll("<3", "🧡");
    text = text.replaceAll(":poop:", "💩");
    text = text.replaceAll(":'(", "😭");
    text = text.replaceAll(":mindblown:", "🤯");
    text = text.replaceAll(":freezing:", "🥶");
  }
*/
//hi andrew
const leDictionary = {
  ":)":"😀",
  ">:(":"😠",
  ">:)":"😈",
  ":D":"😁",
  "^_^'":"😅",
  "xD":"😆",
  ":|":"😐",
  ":O":"😮",
  ":(":"🙁",
  ":s":"😖",
  ":P":"😛",
  ":ROFL":"🤣",
  ":bye:":"👋",
  "$_$":"🤑",
  "B)":"😎",
  ";)":"😏",
  "<3":"🧡",
  ":poop:":"💩",
  ":'(":"😭",
  ":mindblown:":"🤯",
  ":freezing:":"🥶"
}
const leDictionaryCommands = {
  "general":{
    "/nick newnick": "Changes your username to newnick.",
    "/color newcolor": "Changes your color to newcolor.",
    "/img imglink": "sends an image with link imglink",
    "/shout text is cool": "sends capitalized 'text is cool' with a kaomoji at the end. Infinite parameters. ",
    "/status color": "sets your status to color",
    "/statusmessage hello there this is a status message": "sets your status message to hello there this is a status message"
  },
  "admin":{
    "/kick person":"kicks person",
    "/sudo person test string":"makes person say test string",
    
  }
  
}
function key(map){
	result = []
	for (key in map){
		result.push(key)
	}
	return result
}

//e.g. <span key="testkey" value="otherstuff" id="test">:)</span>
//document.getElementById("test").getAttribute("key")
//expected output: testkey

for (key in leDictionary){
	document.body.innerHTML += `<button class="round icon" key="${key}" val="${leDictionary[key]}" keyorval="val">${leDictionary[key]}</button>`
}

document.querySelectorAll(".icon").forEach(e=>{
	e.onclick = function(){
		if (this.getAttribute("keyorval") === "val"){
			this.setAttribute("keyorval", "key")
			this.innerHTML = this.getAttribute("key")
      		this.style.backgroundColor = "#ECECEC"
		}else{
			this.setAttribute("keyorval", "val")
			this.innerHTML = this.getAttribute("val")
      		this.style.backgroundColor = "white"
		}
	}
})
//ayyyyyyy gj. hi. hi
//new idea how about commands doesn't open in a new tab? oh wait that wouldn't work as well whatever its still on the board, though ??? so because it URI saves the login info sorta then you could open in same tab, but it just work as well rn because not all login info is saved, gtg eat dinner btw, k bye baiii

/*function addComponent(idofbutton) {
  let thebutton = document.getElementById(idofbutton)
  let thebuttoninner = thebutton.innerHTML
  //key(leDictionary).indexOf(thebuttoninner)
  item = leDictionary[idofbutton]
  thebutton.addEventListener("click", function() {
    if (thebuttoninner is 'key') {
		thebutton.innerHTML = leDictionary[thebuttoninner]
	  }else{
      thebutton.innerHTML = key pair of thebuttoninner
	  }
  })
}*/