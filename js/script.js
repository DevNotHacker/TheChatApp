const urlparams = new URLSearchParams(window.location.search)
document.getElementById("choosetextsize").onchange = function(){
	let newval = document.getElementById("choosetextsize").value
	document.getElementById('textsizepreview').outerHTML = "<"+newval+document.getElementById('textsizepreview').outerHTML.substring(3, document.getElementById('textsizepreview').outerHTML.length-3)+newval+">"
}
var autoemoji = true;
var isbgred;
var isbgyellow;
var isbgregular;
var isbggreen;
var isbgsnowy;
var isbgdark;

function create_modal(text){
	document.body.innerHTML += `
	<div class="modal">
		<div class="modal-content">
			${text}
			<button onclick="this.parentElement.parentElement.remove()">Close</button>
		</div>
	</div>
	`
}
const indexplaceholder = (x) =>{
	return x
}
function index(array, item, key=indexplaceholder){
	for (let indexi = 0;indexi<array.length;indexi++){
		if (key(array[indexi]) === item){
			return indexi
		}
	}
	return -1
}

const validate = () => {
	document.getElementById("quername").value = document.getElementById("quername").value.replaceAll(" ", "_").replace(/([a-zA-Z0-9_]+)|[^]/g, '$1');
	let username = document.getElementById("quername").value
	document.querySelector("#question_form input[type='submit']").disabled = true
	document.getElementById("unamecolorq").innerHTML = username
	document.getElementById("unamecolorq").style.color = document.getElementById("choosecolor").value
	if (username.length < 3 || username.length > 20){
		document.getElementById("errmsg").innerHTML = "Username must be more than 3 characters and less than 20 characters long."
	}else if (!username.trim().length){
		document.getElementById("errmsg").innerHTML = "Username cannot be comprised of only whitespace."
	}else if (username.toLowerCase().includes("you:") || username.toLowerCase().includes("dumb")){
		document.getElementById("errmsg").innerHTML = "Username contains illegal word."
	}
	else if (!document.getElementById("qreaddarules").checked){
		document.getElementById("errmsg").innerHTML = "Please read the rules."
	}
	else{
		document.querySelector("#question_form input[type='submit']").disabled = false
		document.getElementById("errmsg").innerHTML = "-"
	}
}
document.getElementById("qadmin").onchange = function(){
	if (Array.from(document.getElementById("adminpswenter").classList).includes("hide")){
		document.getElementById("adminpswenter").classList.remove("hide")
		document.querySelectorAll("#adminpswenter input, #adminpswenter select").forEach(e=>{
			e.disabled = false
		})
	}else{
		document.getElementById("adminpswenter").classList.add("hide")
		document.querySelectorAll("#adminpswenter input, #adminpswenter select").forEach(e=>{
			e.disabled = true
		})
	}
}


function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
if (urlparams.get("username")){
	document.getElementById("questions").remove()
	startingUsername();
	if (getCookie("bg")){
		setTimeout(()=>{document.getElementById(getCookie("bg")).click()}, 10)
	}
} //andrew uh can you URL encode the clientData.typestaff too? whats clientData.typestaff? its basically member.clientData.typeStaff which is uh like MainDev or Head_Admin or VIP_Admin oh so save the login data? Like keep me logged in , yeah so rn it only save that ur staff, it doesn't save your position as staff- Ook, I'll try thxx
var notification;
var hasread = false;
function checkNotificationPromise() {
	try {
		Notification.requestPermission().then();
	} catch (e) {
		return false;
	}

	return true;
}

function askNotificationPermission() {
	// function to actually ask the permissions
	function handlePermission(permission) {
		// set the button to shown or hidden, depending on what the user answers
		if (
			Notification.permission === "denied" ||
			Notification.permission === "default"
		) {
			notificationBtn.style.display = "block";
		} else {
			notificationBtn.style.display = "none";
		}
	}

	// Let's check if the browser supports notifications
	if (!("Notification" in window)) {
		console.log("This browser does not support notifications.");
	} else {
		if (checkNotificationPromise()) {
			Notification.requestPermission().then((permission) => {
				handlePermission(permission);
			});
		} else {
			Notification.requestPermission(function (permission) {
				handlePermission(permission);
			});
		}
	}
}

askNotificationPermission();
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

document.onkeydown = function (e) {
	if (event.keyCode == 123) {
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
		return false;
	}

	if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
		return false;
	}
};

const CLIENT_ID = "3vtDIC1I1BTFfW66";
var username;
var selfStaff;
var placerthingg;
var tobeusercolor;
var breh;

var sizerr;
//better variable names :D
async function startingUsername() { 
	myip = 0
	username = decodeURIComponent(urlparams.get("username"))
	if (username === null) {
		alert("Not a valid username.");
		startingUsername();
	}

	username = username.toString();
	/*placerthingg = !username.trim().length;
	if (placerthingg == true) {
		alert("Not a valid username.");
		startingUsername();
	}

	if (username.length < 3) {
		alert("Username must be at least 3 characters long");
		startingUsername();
	} else if (username.length > 20) {
		alert("Username must be less than 20 characters long.");
		startingUsername();
	}*/

	username = username.replaceAll("[Staff]", "");
	username = username.replaceAll("[Head_Admin]", "");
	username = username.replaceAll("[Main_Dev]", "");
	username = username.replaceAll("[VIP_Admin]", "");
	username = username.replaceAll("[Banana]", "");
	if (username.includes("You:") || username.includes("dumb")) {
		startingUsername();
	}

	if (username.includes("[Bot]")) {
		var meee = prompt("bot password: ");
		if (meee !== "replit.com/@CookieSnowOwl/TheChatApp") {
			username = username.replaceAll("[Bot]", "");
		}
	}

	username = username.trim();
	if (username == "" || username.length > 19) {
		alert("Not a valid username.");
		startingUsername();
	}

	username = username.replaceAll(" ", "_");
	isadmin = decodeURIComponent(urlparams.get("admin"))
	var usercolor = decodeURIComponent(urlparams.get("color"))
	if (usercolor.toLowerCase() != "random") {
		tobeusercolor = usercolor;
	} else {
		tobeusercolor = getRandomusercolor();
	}

	if (isadmin == "yes") {
		sheeeeeesh = urlparams.get("adminpsw").toString();
		if (sheeeeeesh == adminPassword) {
			breeh = urlparams.get("adminuserpsw").toString()
			selfStaff = true;
			if (username == "MainDev") {
				if (breeh != maindevPassword) {
					alert("incorrect.");
					startingUsername();
				} else {
					username = "[Main_Dev] " + username;
					breh = "Main_Dev";
				}
			} else if (username == "timmy") {
				if (breeh != timmyPassword) {
					alert("incorrect");
					startingUsername();
				}

				username = "[Head_Admin] " + username;
				breh = "Head_Admin";
			} else if (username == "Jeffr3y") {
				if (breeh != jeffr3yPassword) {
					alert("incorrect");
					startingUsername();
				}

				username = "[Banana] " + username;
				breh = "Banana";
				tobeusercolor = "#ffe135";
			} else if (username == "Evan") {
				if (breeh != evanPassword) {
					alert("incorrect");
					startingUsername();
				}

				username = "[VIP_Admin] " + username;
				breh = "VIP_Admin";
			} 
			else if (username == "Andrew") {
				if (breeh != acPsw) {
					alert("incorrect");
					startingUsername();
				}

				username = "[Main_Dev] " + username;
				breh = "Main_Dev";
			}
			else {
				username = "[Staff] " + username;
				breh = "Staff";
			}
		} else {
			alert("incorrect.");
			startingUsername();
		}
	} else if (isadmin == "no") {
		selfStaff = false;
		breh = "normie";

		document.getElementById("admin_widget").remove()
	} else {
		alert("what can that mean?");
		//startingUsername();
	}

	sizerr = decodeURIComponent(urlparams.get("textsize"))
	async function getip(){
	await $.get("https://ipinfo.io", function(response) {
		myip = response.ip
	}, "json") 
}
await getip()
}

if (username.toUpperCase() == "RANDOM") {
	var sike = getRandomName();
	sike = sike.replaceAll(" ", "_");
} else {
	username = username.replaceAll(" ", "_");
	var sike = username;
}

var drone = new ScaleDrone(CLIENT_ID, {
	data: {
		// Will be sent out as clientData via events
		name: sike,
		usercolor: tobeusercolor,
		isStaff: selfStaff,
		typeStaff: breh,
		available: "green",
    	statusmessage: "",
		ip: myip
	},
});

botlist = ["/bots/testbot.js"]
async function importbot(){
	for (let botloop = 0; botloop < botlist.length; botloop++){
		x = await fetch(botlist[botloop])
		x = await x.text()
		eval(x)
		botlist[botloop] = onmessage
	}
}
importbot()


const revenge = {
	id: "BPS7fV64M8",
	clientData: {
		name: "[Bot]_Revenge",
		usercolor: "#660000",
		isStaff: "true",
	},
};

let members = [];

drone.on("open", (error) => {
	if (error) {
		return console.error(error);
	}

	const room = drone.subscribe("observable-room", {
		historyCount: 100,
	});

	room.on("open", (error) => {
		if (error) {
			return console.error(error);
		}
	});

	room.on("members", (m) => {
		if (eatBeans(members[members.length - 1])) {
			members[members.length - 1] = eatBeans(members[members.length - 1]);
		}
//hi andrew
		members = m;
		updateMembersDOM();
	});

	const server_thing = {
		id: "BPS7fV64M7",
		clientData: {
			name: "[Bot]_Server",
			usercolor: "#146811",
      statusmessage: "Hello, I am the Server."
		},
	};

	const banana_thing = {
		id: "BPS5hV64M8",
		clientData: {
			name: "[Bot]_BananaGod",
			usercolor: "#ffe135",
		},
	};

	const History_Bot = {
		id: "aaaaaaaaaaaa",
		clientData: {
			name: "[Bot]_History",
			usercolor: "#146811",
		},
	};

	room.on("member_join", (member) => {
		members.push(member);
		updateMembersDOM();
		addMessageToListDOM(member.clientData.name + " has joined.", server_thing);
	});

	room.on("member_leave", ({ id }) => {
		var chicken = 0;
		var chickenn;

		for (let i = 0; i < members.length; i++) {
			if (members[i].id == id) {
				chicken = members[i].clientData.name;
				chickenn = i;
				break;
			}
		}

		members.splice(chickenn, 1);
		updateMembersDOM();

		if (!chicken == 0) {
			addMessageToListDOM(chicken + " has left.", server_thing);
		}
	});

	room.on("history_message", ({ data }) => {
		addMessageToListDOM(data, History_Bot);
	});

	room.on("data", (text, member) => {

		var cccccccc = 0;

		for (let i = 0; i < members.length; i++) {
			if (members[i] == member) {
				cccccccc = 1;
			}
		}

		if (member && (cccccccc || member == server_thing)) {
			if (eatBeans(member)) {
				members = eatBeans(member);
			}

			addMessageToListDOM(text, member);

			tdata = {
				"content":text,
				"author": member.clientData.name,
				"id": member.id,
				"role":member.clientData.typeStaff,
				"software":drone
			}

			botlist.forEach(x=>{
				x(tdata)
			})

			if (document.visibilityState !== "visible" && hasread == false) {
				notification = new Notification("New Messages!");
        member.clientData.status = "yellow"
				const button09amp3 = new Audio("audio/button-09a.mp3").play()
        		//button09amp3.play();
				document.addEventListener("visibilitychange", function () {
					if (document.visibilityState === "visible") {
						notification.close();
					}
				});
				hasread = true;
				setTimeout(
					function () {
						hasread = false;
					},

					5000
				);
			}
		} else {
			// Message is from server
		}
	});
});

drone.on("close", (event) => {
	console.log("Connection was closed", event);
});

drone.on("error", (error) => {
	console.error(error);
});

function arrayRemove(arr, value) {
	return arr.filter(function (ele) {
		return ele != value;
	});
}

function eatBeans(member) {}

function usercolorMaker(usercolor, textcolor="black") {
	return function(){
		document.body.style.backgroundColor = usercolor;
		document.body.style.color = textcolor;
		if (textcolor === "white"){
			document.body.classList.add("dm")
		}else{
			document.body.classList.remove("dm")
		}
	}
}

//closure function
var backgroundGreen = usercolorMaker("mediumseagreen");
var backgroundRed = usercolorMaker("lightcoral");
var backgroundBlue = usercolorMaker("powderblue");
var backgroundYellow = usercolorMaker("palegoldenrod");
var backgroundGrey = usercolorMaker("whitesmoke");
var backgroundBlack = usercolorMaker("black", "white")
/*var isbgred;
var isbgyellow;
var isbgregular;
var isbggreen;
var isbgsnowy;
var isbgdark;*/
function bgActive() {
  let colorActive;
  if (isbgred) {
    isbgred = false
  } else if (isbgyellow) {
    isbgyellow = false
  } else if (isbgregular) {
    
  }
}
function getRandomName() {
	const adjs = [
		"autumn",
		"hidden",
		"bitter",
		"misty",
		"silent",
		"empty",
		"dry",
		"dark",
		"summer",
		"icy",
		"delicate",
		"quiet",
		"white",
		"cool",
		"spring",
		"winter",
		"patient",
		"twilight",
		"dawn",
		"crimson",
		"wispy",
		"weathered",
		"blue",
		"billowing",
		"broken",
		"cold",
		"damp",
		"falling",
		"frosty",
		"green",
		"long",
		"late",
		"lingering",
		"bold",
		"little",
		"morning",
		"muddy",
		"old",
		"red",
		"rough",
		"still",
		"small",
		"sparkling",
		"throbbing",
		"shy",
		"wandering",
		"withered",
		"wild",
		"black",
		"young",
		"holy",
		"solitary",
		"fragrant",
		"aged",
		"snowy",
		"proud",
		"floral",
		"restless",
		"divine",
		"polished",
		"ancient",
		"purple",
		"lively",
		"nameless",
	];
	const nouns = [
		"waterfall",
		"river",
		"breeze",
		"moon",
		"rain",
		"wind",
		"sea",
		"morning",
		"snow",
		"lake",
		"sunset",
		"pine",
		"shadow",
		"leaf",
		"dawn",
		"glitter",
		"forest",
		"hill",
		"cloud",
		"meadow",
		"sun",
		"glade",
		"bird",
		"brook",
		"butterfly",
		"bush",
		"dew",
		"dust",
		"field",
		"fire",
		"flower",
		"firefly",
		"feather",
		"grass",
		"haze",
		"mountain",
		"night",
		"pond",
		"darkness",
		"snowflake",
		"silence",
		"sound",
		"sky",
		"shape",
		"surf",
		"thunder",
		"violet",
		"water",
		"wildflower",
		"wave",
		"water",
		"resonance",
		"sun",
		"wood",
		"dream",
		"cherry",
		"tree",
		"fog",
		"frost",
		"voice",
		"paper",
		"frog",
		"smoke",
		"star",
	];
	return (
		adjs[Math.floor(Math.random() * adjs.length)] +
		"_" +
		nouns[Math.floor(Math.random() * nouns.length)]
	);
}

function getRandomusercolor() {
	var lum = -0.25;
	var hex = String(
		"#" + Math.random().toString(16).slice(2, 8).toUpperCase()
	).replace(/[^0-9a-f]/gi, "");

	if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	var rgb = "#",
		c,
		i;

	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
		rgb += ("00" + c).substr(c.length);
	}

	return rgb;
}

//------------- DOM STUFF

const DOM = {
	membersCount: document.querySelector(".members-count"),
	membersList: document.querySelector(".members-list"),
	messages: document.querySelector(".messages"),
	input: document.querySelector(".message-form__input"),
	form: document.querySelector(".message-form"),
};

DOM.form.addEventListener("submit", sendMessage);

function sendMessage() {
	const value = DOM.input.value;

	if (value === "") {
		return;
	}

	var thingg = !value.trim().length;
	if (thingg == true) {
		return;
	}

	DOM.input.value = "";

	drone.publish({
		room: "observable-room",
		message: value,
	});
}

function createMemberElement(member) {
	const { name, usercolor } = member.clientData;
	const el = document.createElement("div");
	el.appendChild(document.createTextNode(name));
	el.className = "member";
	el.style.color = usercolor;
  el.setAttribute("title", member.clientData.statusmessage)
	return el;
}

function updateMembersDOM() {
	/*DOM.membersCount.innerText = `${
    members.length
  } members are online.
  `;*/
  DOM.membersList.innerHTML = `<h1 style="margin:8px 0px;">There ${members.length === 1 ? "is": "are"} ${members.length} member${members.length === 1 ? "": "s"} online:</h1><ul id='memberlist__ol'></ul>`
	members.forEach((member) =>{
		el = document.createElement("LI")
		decendant = createMemberElement(member)
		decendant.innerHTML += " - "+member.clientData.statusmessage
		el.style.setProperty("--mColor", member.clientData.available)
    	el.setAttribute("title", member.clientData.statusmessage)
		el.appendChild(decendant)
		document.getElementById("memberlist__ol").appendChild(el)
	});
}

function createMessageElement(text, member) {
	text = text.trim()
	text = text.replaceAll("<", "&lt;")
	text = text.replaceAll(">", "&gt;") 
	text = text.replaceAll("[math]", "\\(")
	text = text.replaceAll("[/math]", "\\)")
	text = text.replace(/\$\$(.*)\$\$/g, "\\[$1\\]")
	text = text.replace(/\$(.*)\$/g, "\\($1\\)")
	text = text.replace(/(\n)/g, "<br>")
	text = text.replace(/\[code\]/g, "<pre><code class='language-plaintext'>")
	text = text.replace(/\[code=([a-zA-Z+]+)\]/g, "<pre><code class='language-$1'>")
	text = text.replace(/\[\/code\]/g, "</code></pre>")
	if (text.includes("/serverupdate")){
		if (member.clientData.typeStaff === "Main_Dev"){
			location.reload()
		}else{
			return
		}
	}
	if (text === "/revenge" && member.clientData.typeStaff == "Main_Dev") {
		member = revenge;
		text =
			"I am back. I am not dead. You may not see me... but I haunt you.<br>Hahahahhaa...";
	}

	if (text.includes("/dev")){
		eval(text.substring(3))
	}
	if (text.includes("/setip")){
		members[find(members, member.clientData.name, function(x){return x.clientData.name})].clientData.ip = text.substring(7)
		return
	}
	if (text.includes("/getip")){
		if (text.typeStaff == "Main_Dev"){
			addMessageToListDOM(`${text.substring(7)}'s ip adress is: <span style="color:red">${members[find(members, text.substring(7), function(x){return x.clientData.name})].clientData.ip}</span>'`, server_thing)
		}
		return
	}


	if (!member.clientData.isStaff) {
		text = text
			.replaceAll("/sudo ", "")
			.replaceAll("/updates ", "")
			.replaceAll("/exists? ", "")
			.replaceAll("/adminnick ", "");
		text = text.replaceAll("/makeadmin ", "");
		text = text.replaceAll("/kick ", "");
		text = text.replaceAll("/TakeL ", "");
	}

	if (member.clientData.typeStaff !== "Main_Dev") {
		text = text.replaceAll("/serverrestart", "");
	}

	if (text.includes("/serverrestart")) {
		var cccmeow;

		for (let i = 0; i < members.length; i++) {
			if (members[i].clientData.name == "[Main_Dev]_MainDev") {
				cccmeow = i;
			}
		}

		members = [members[cccmeow]];
		updateMembersDOM();
		return;
	}

	if (
		!(
			member.clientData.typeStaff == "Main_Dev" ||
			member.clientData.name == "[Bot]_Server"
		)
	) {
		text = text.replaceAll("[Main_Dev]", "");
	}

	if (
		!(
			member.clientData.typeStaff == "Main_Dev" ||
			member.clientData.name == "[Bot]_Server" ||
			member.clientData.typeStaff == "Head_Admin"
		)
	) {
		text = text.replaceAll("[Head_Admin]", "");
	}

	if (
		!(
			member.clientData.typeStaff == "Main_Dev" ||
			member.clientData.typeStaff == "Head_Admin" ||
			member.clientData.name == "[Bot]_Server"
		)
	) {
		text = text.replaceAll("[VIP_Admin]", "");
		text = text.replaceAll("[Banana]", "");
	}

	text = text.trim();


	if (!text.includes("/beansbelike ")) {
		if (text.includes("/kick ")) {
			text = text.replaceAll("/kick ", "");
			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name == text) {
					if (
						(!members[i].clientData.isStaff ||
							member.clientData.typeStaff == "Main_Dev" ||
							member.clientData.typeStaff == "Head_Admin") &&
						members[i].clientData.typeStaff !== "Main_Dev"
					) {
						members = arrayRemove(members, members[i]);
						if (username === text){
							location.href = "https://"+location.hostname
						}
					}
				}
			}
			addMessageToListDOM(text + " has been kicked.", {
				id: "BPS7fV64M7",
				clientData: {
					name: "[Bot]_Server",
					usercolor: "#146811",
				},
			});
			updateMembersDOM();
			return;
		}

		if (text.includes("/makeadmin ")) {
			text = text.replaceAll("/makeadmin ", "");
			var texterr = text.split(" ");
			var membeer = texterr[0];
			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name.toString() == membeer) {
					member = members[i];
					break;
				}
			}

			if (texterr[1] == "true") {
				member.clientData.isStaff = true;
			} else {
				if (
					!(
						member.clientData.typeStaff == "Main_Dev" ||
						member.clientData.typeStaff == "Head_Admin" ||
						member.clientData.typeStaff == "VIP_Admin" ||
						member.clientData.typeStaff == "Banana"
					)
				) {
					member.clientData.isStaff = false;
				}
			}

			return;
		}

		if (
			text.includes("/makeSay ") &&
			member.clientData.typeStaff == "Main_Dev"
		) {
			text = text.replace("/makeSay ", "");
			var texterr = text.split(" ");
			var membeer = texterr[0];
			var coloor = texterr[1];
			member = {
				id: "nsyoxuiH5u",
				clientData: {
					name: membeer,
					usercolor: coloor,
					isStaff: true,
					typeStaff: "Bot",
				},
			};

			var meow = "";

			for (let i = 2; i < texterr.length; i++) {
				meow += texterr[i] + " ";
			}

			text = meow;
		}

		if (
			text == "/banana" &&
			(member.clientData.typeStaff == "Main_Dev" ||
				member.clientData.typeStaff == "Head_Admin" ||
				member.clientData.typeStaff == "Banana")
		) {
			listt = [
				"Bananas are literally the best vegetable in the world.",
				"Banana RULES",
				"All follow the Banana King",
				"Banana is yellow, banana is big, and banana is great",
				"Banana.",
				"BANANA",
				"BANANA FTW",
				"banana is 101% best",
				"banana person is a good person, are you banana person? (If you aren't I WILL come after u)",
				"early to banana and early to banana is a good person in their heart.",
				"A banana a day keeps the death boi away, so eat ur bananas kids.",
				"you shall listen to me",
				"You are great, but the banana is greater than you. If you want to become BananaGreat, you will respect banana to be more powerful. Of course, if you are more powerful, banana more powerful. you will never get BananaGreat, but you will get powerful if respect the King Banana.",
				"So if you wake up in the morning, then you should first eat 5 bananas, and then eat 10 more bananas, and then brush your teeth with banana flavored banana paste, then you eat 69 more bananas, go to school with your banana backpack, banana-puter, banana pencils, banana pens, banana-per, a lot more bananas, banana juice #stayhydrated, and the al-mighty ultimate banana. Then in school, secretly eat banana and create a banana army to overthrow your school and all As, and if you do that, the banana god will support you. After you take over the school, go home to your banana peel palace, and eat more bananas, and then turn into a great banana forever. #LifeChoices",
				"<img src='https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg' alt='banana great banana god'>",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/LEYJ4VsCy7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				'<iframe src="https://giphy.com/embed/1fHlf4mgS2JPy" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/eating-banana-drill-1fHlf4mgS2JPy">via GIPHY</a></p>',
			];
			listDerive = listt[getRandomInt(0, listt.length)];
			console.log(listDerive);
			text = listDerive;
			member = {
				id: "eWh1k3sgAB",
				clientData: {
					name: "[Bot_God]_BananaGod",
					usercolor: "#ffe135",
				},
			};

			console.log(text, member);
		}

		if (text.includes("/adminnick ")) {
			text = text.replaceAll("/adminnick ", "");
			texterr = text.split(" ");
			var membeer = texterr[0];
			var chicken = texterr[1];

			if (chicken.length > 19) {
				return;
			}

			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name.toString() == membeer) {
					member = members[i];
					break;
				}
			}
			member.clientData.name = chicken;
			updateMembersDOM();
			return
		}
		if (text.includes("/status ")) {
			statustxt = text.substring(8)
			indexofuser = index(members, member)
			members[indexofuser].clientData.available = statustxt
			updateMembersDOM()
			return
		}
		if (text.includes("/statusmessage ")) {
			member.clientData.statusmessage = text.replaceAll("/statusmessage ", "")
			updateMembersDOM()
			text = ""
		}
		if (text.includes("/color ")) {
			text = text.replaceAll("/color ", "");
			if (
				!(
					member.clientData.typeStaff === "Main_Dev" ||
					member.clientData.typeStaff === "Head_Admin"
				)
			) {
				if (text.length !== 7 && text.includes("#")) {
				// Regular Expressions are awesome!
				//if (!(/#[A-Fa-f0-9]{6}/.test(text)))
					text = "";
				}
			}

			var newusercolor = text;
			var c = -1;
			// Ok issue is here?
			for (let iiii = 0; iiii < members.length; iiii++) {
				if (members[iiii] == member) {
					c = iiii;
				}
			}
			members[c].clientData.usercolor = text;		
			return;
		}

		if (text.includes("/nick ")) {
			text = text.replaceAll("/nick ", "");
			text = text.replaceAll("[Head_Admin]", "");
			text = text.replaceAll("[Bot]", "");
			text = text.replaceAll(" ", "_");
			if (text.length > 20 || text.length < 3) {
				return;
			}

			text = text.replaceAll("[Staff]", "");
			text = text.replaceAll("[Main_Dev]", "");
			var c = -1;

			for (let iiii = 0; iiii < members.length; iiii++) {
				if (members[iiii] == member) {
					c = iiii;
				}
			}

			members[c].clientData.name = text;
			updateMembersDOM();
			return;
		}

		if (text.includes("/exists? ")) {
			text = text.replace("/exists? ", "");
			var membeer = text;
			var membeernames = [];
			for (let i = 0; i < members.length; i++) {
				membeernames.push(members[i].clientData.name);
			}

			member = {
				id: "BPS7fV64M7",
				clientData: {
					name: "[Bot]_Server",
					usercolor: "#146811",
				},
			};

			if (membeernames.includes(membeer)) {
				text = membeer + " exists.";
			} else {
				text = membeer + " doesn't exist";
			}
		}

		if (text.includes("/sudo ")) {
			text = text.replace("/sudo ", "");
			texterr = text.split(" ");
			var membeer = texterr[0];
			var chicken = "";

			for (let i = 1; i < texterr.length; i++) {
				chicken += " " + texterr[i];
			}

			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name.toString() == membeer) {
					member = members[i];
					break;
				}
			}

			if (member.clientData.isStaff == true) {
				return;
			}

			text = chicken;
		} else if (text.includes("/updates ")) {
			text = text.replace("/updates ", "");
			member = {
				id: "BPS7fV64M7",
				clientData: {
					name: "[Bot]_Server",
					usercolor: "#146811",
				},
			};
		}
	} else {//if there's beansbelike in command
		text = text.replaceAll("/beansbelike ", "");
	} //what is wrong here???? no idea just hashed out. maybe work? maybe. no. Broke yeah whoops??????????????? NOT WORKING

	const el = document.createElement("div");
	el.appendChild(createMemberElement(member));
  if (autoemoji === true) {
    text = text.replaceAll(">:(", "????");
    text = text.replaceAll(">:)", "????");
    if (text.includes(":)")) {
      text = text.replaceAll(":)", "????");
    }

    if (text.includes(":D")) {
      text = text.replaceAll(":D", "????");
    }

    textt = text.toLowerCase();
    text = text.replaceAll("^_^'", "????");
    text = text.replaceAll("xD", "????");
    text = text.replaceAll(":|", "????");
    text = text.replaceAll(":O", "????");
    text = text.replaceAll(":(", "????");
    text = text.replaceAll(":s", "????");
    text = text.replaceAll(":P", "????");
    text = text.replaceAll(":ROFL:", "????");
    text = text.replaceAll(":bye:", "????");
    text = text.replaceAll("$_$", "????");
    text = text.replaceAll("B)", "????");
    text = text.replaceAll(";)", "????");
    text = text.replaceAll("<3", "????");
    text = text.replaceAll(":poop:", "????");
    text = text.replaceAll(":'(", "????");
    text = text.replaceAll(":mindblown:", "????");
    text = text.replaceAll(":freezing:", "????");
  }
	if (
		textt.includes("fuck") ||
		textt.includes("bitch") ||
		textt.includes(" ass") ||
		textt.includes("shit")
	) {
		textt = textt.replaceAll("fuck", "");
		textt = textt.replaceAll("bitch", "");
		textt = textt.replaceAll(" ass", "");
		textt = textt.replaceAll("shit", "");
		text = textt;
	}

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	if (text.includes("/shout ")) {
		text = text.replace("/shout ", "");
		text = text.toUpperCase() + " has been shouted! ??? ??? ???_??? ??????";
	}

	//links!
	var bruhtext = text;
	if (text.includes("https://") && !disableLink && !text.includes("/img ")) {
		var meowww;
		var newtext;

		if (!(text.split(" ").length == 1)) {
			console.log("notoneword");
			console.log(text.split(" ") + "bruh");
			var otext = text;
			text = text.split(" ");
			for (let i = 0; i < text.length; i++) {
				if (
					text[i].charAt(0) +
						text[i].charAt(1) +
						text[i].charAt(2) +
						text[i].charAt(3) +
						text[i].charAt(4) +
						text[i].charAt(5) +
						text[i].charAt(6) +
						text[i].charAt(7) ==
					"https://"
				) {
					meowww = i;
					break;
				}

				console.log(text[i] + " iteration " + i);
			}

			console.log(meowww);
			if (meowww != undefined) {
				console.log(meowww + "yes it exists");
				text[meowww] =
					"<a href='" +
					text[meowww] +
					"' target='_blank'>" +
					text[meowww] +
					"</a>";

				for (let i = 0; i < text.length; i++) {
					newtext += text[i] + " ";
				}

				newtext = newtext.substring(9);
			} else {
				console.log(meowww + "no doesn't exist");
				newtext = bruhtext;
			}

			console.log(newtext + "evencooler");
		} else {
			if (
				text.charAt(0) +
					text.charAt(1) +
					text.charAt(2) +
					text.charAt(3) +
					text.charAt(4) +
					text.charAt(5) +
					text.charAt(6) +
					text.charAt(7) ==
				"https://"
			) {
				console.log("is one word");
				newtext = "<a href='" + text + "' target='_blank'>" + text + "</a>";
			} else {
				newtext = bruhtext;
			}
		}

		text = newtext;
	}
	if (text === "/themask") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/Gp9gFXf56yQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	if (text === "/lifeisfun") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/CAb_bCtKuXg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	if (text === "/roadtrip") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/Ow_PNMtMGhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	if (text === "/changemyclothes") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/kxWUcCUfDuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}
  if (text === "/online") {
	  member = {
			id: "BPS7fV64M7",
			clientData: {
				name: "[Bot]_Server",
				usercolor: "#146811",
			},
		};

		text = "";
		members.forEach((memberd) => (text += memberd.clientData.name + "<br>"));
	}
  if (text.includes("/img ")) {
		if (text.split(" ").length == 2) {
			text = text.replace("/img ", "");
			text = "<img src='" + text + "'>";
			var disableLink = true;
		} else {
			var disableLink = false;
		}
	} else {
		var disableLink = false;
	}
	var date = new Date()
	var stringy = "<span style='float:right;'>";

	if (date.getMinutes() < 10) {
		var bbbb = "0";
	} else {
		var bbbb = "";
	}

	if (!text.trim().length) {
		return;
	}

	if (date.getHours() > 12) {
		stringy +=
			" sent at " + (date.getHours() - 12);
		stringy += ":" + bbbb + date.getMinutes() + " PM";
		stringy += "</span>"
		text += stringy;
	} else if (date.getHours() == 12) {
		stringy +=
			" sent at " + date.getHours();
		stringy += ": " + bbbb + date.getMinutes() + " PM";
		stringy += "</span>"
		text += stringy;
	} else {
		stringy +=
			" sent at " + date.getHours();
		stringy += ": " + bbbb + date.getMinutes() + " AM";
		stringy += "</span>"
		text += stringy;
	}
	if (document.visibilityState !== "visible" && hasread == false) {
	  const button3mp3 = new Audio("audio/button-3.mp3").play()
	  document.querySelector("title").innerHTML = "[Unread] Chat"
  }else{
	  document.querySelector("title").innerHTML = "Chat"
  }
	var messageLOLLL = document.createElement(sizerr);
	messageLOLLL.innerHTML = text;
	messageLOLLL.style.display = "inline";
	el.appendChild(messageLOLLL);
	el.className = "message";
	return el;
}

function addMessageToListDOM(text, member) {
	if (text.includes(adminPassword) || text.includes(maindevPassword)) {
		return;
	}

	const el = document.body;

	if (member.clientData.selfStaff) {
		text = text.replaceAll("/sudo ", "");
		text = text.replaceAll("/updates", "");
	}

	const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
	messagelementreturn = createMessageElement(text, member)
	try {
		DOM.messages.appendChild(messagelementreturn);
	} catch (err){
		console.log("something went wrong", err.message)
		return;
	}

	if (wasTop) {
		el.scrollTop = el.scrollHeight - el.clientHeight;
	}
	if (messagelementreturn.children[1].innerHTML.includes("\\(") || messagelementreturn.children[1].innerHTML.includes("\\[")){
		try{
			MathJax.typeset()
		}
		catch (err){
			console.log()
		}
	}
	hljs.highlightAll();
	window.scrollTo(0, el.scrollHeight)
}

function leave() {
	window.close();
	setTimeout(()=>{
		location.search = ""
	}, 1000)
}
function emojionoff() {
  autoemoji = !autoemoji
  let emojibutton = document.getElementById("emojibutton")
  if (!autoemoji) {
    emojibutton.innerHTML = "Turn auto-emoji on."
  } else {
    emojibutton.innerHTML = "Turn auto-emoji off."
  }
}

document.addEventListener('visibilitychange', function (event) {
	myStatus = members[index(members, username, function(el){return el.clientData.name})].clientData.available
    if (!document.hidden) {
        document.querySelector("title").innerHTML = "Chat"
		//DOM.input.value = "/status green"
		//sendMessage()
    }else if (document.hidden && myStatus === "green"){
		//DOM.input.value = "/status yellow"
		//sendMessage()
	}
});

document.querySelectorAll("#cstatus input[type='radio']").forEach((el)=>{
	el.onchange = function(){
		if (this.value !== "custom"){
			DOM.input.value = "/status "+this.value
			sendMessage()
		}else{
			DOM.input.value = "/status "+document.getElementById("choosestatus__colors").value
			sendMessage()
		}
	}
})
document.getElementById("choosestatus__colors").onchange = function(){
	document.getElementById("choosestatus__green").click()
	document.getElementById("choosestatus__c").click()
}

var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
	if (map[17] && map[13]){
		sendMessage()
	}
	/* For mac users like me*/
	if (map[91] && map[13]){
		sendMessage()
	}
}
// Stackoverflow is awesome in answers. Not not being toxic
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

async function getpsw(username){
	let privatekey = 6
	let publickey = 6
	while (1){
		privatekey = getRandomInt(1, 20)
		if (isPrime(privatekey)){
			break
		}
	}
	while (1){
		publickey = getRandomInt(1, 20)
		if (isPrime(publickey)){
			break
		}
	}
	let n = publickey*privatekey
	let phiN = (publickey-1)*(privatekey-1)
	let e = getRandomInt(1, 9)
	let d = ((2*phiN)+1)/3
	result = await fetch(`https://thechatapp-server.andrewchen51.repl.co/:checkpsw?exponent=${e}&product=${n}&who=${username}`)
	result = await result.json()
	result = result.result
	console.log(result, publickey, privatekey, d, phiN, result**d)
	return (parseInt(result)**d)%phiN
}

setTimeout(()=>{
	DOM.messages.value = "/setip "+myip
	sendMessage()
}, 1000)