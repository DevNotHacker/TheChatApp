/*hi andrew
  text = text.replaceAll(">:(", "๐ ");
    text = text.replaceAll(">:)", "๐");
    if (text.includes(":)")) {
      text = text.replaceAll(":)", "๐");
    }

    if (text.includes(":D")) {
      text = text.replaceAll(":D", "๐");
    }

    textt = text.toLowerCase();
    text = text.replaceAll("^_^'", "๐");
    text = text.replaceAll("xD", "๐");
    text = text.replaceAll(":|", "๐");
    text = text.replaceAll(":O", "๐ฎ");
    text = text.replaceAll(":(", "๐");
    text = text.replaceAll(":s", "๐");
    text = text.replaceAll(":P", "๐");
    text = text.replaceAll(":ROFL:", "๐คฃ");
    text = text.replaceAll(":bye:", "๐");
    text = text.replaceAll("$_$", "๐ค");
    text = text.replaceAll("B)", "๐");
    text = text.replaceAll(";)", "๐");
    text = text.replaceAll("<3", "๐งก");
    text = text.replaceAll(":poop:", "๐ฉ");
    text = text.replaceAll(":'(", "๐ญ");
    text = text.replaceAll(":mindblown:", "๐คฏ");
    text = text.replaceAll(":freezing:", "๐ฅถ");
  }
*/
//hi andrew
const leDictionary = {
  ":)":"๐",
  ">:(":"๐ ",
  ">:)":"๐",
  ":D":"๐",
  "^_^'":"๐",
  "xD":"๐",
  ":|":"๐",
  ":O":"๐ฎ",
  ":(":"๐",
  ":s":"๐",
  ":P":"๐",
  ":ROFL":"๐คฃ",
  ":bye:":"๐",
  "$_$":"๐ค",
  "B)":"๐",
  ";)":"๐",
  "<3":"๐งก",
  ":poop:":"๐ฉ",
  ":'(":"๐ญ",
  ":mindblown:":"๐คฏ",
  ":freezing:":"๐ฅถ"
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