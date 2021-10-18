function onmessage(ctx){
	const userinfo = {
		id: "A9S7I16Y68",
		clientData: {
			name: "[Bot]_testbot",
			usercolor: "#660000",
			isStaff: "true",
		},
	};

	if ((ctx.content).includes("/saytest")){
		addMessageToListDOM("test!", userinfo)
	}
}