/*
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
	document.body.innerHTML += `<button class="round" key="${key}" val="${leDictionary[key]}" keyorval="val">${leDictionary[key]}</button>&nbsp;&nbsp;&nbsp;&nbsp;`
}

document.querySelectorAll(".round").forEach(e=>{
	e.onclick = function(){
		if (this.getAttribute("keyorval") === "val"){
			this.setAttribute("keyorval", "key")
			this.innerHTML = this.getAttribute("key")
		}else{
			this.setAttribute("keyorval", "val")
			this.innerHTML = this.getAttribute("val")
		}
	}
})
//ayyyyyyy gj. hi. hi

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