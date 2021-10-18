function onmessage(ctx){
	const userinfo = {
		id: "A9S7I16Y68",
		clientData: {
			name: "[Bot]_testbot",
			usercolor: "#00bd00",
			isStaff: "true",
		},
	};

	if ((ctx.content).includes("/say")){
		addMessageToListDOM("test!", userinfo)
	}
}