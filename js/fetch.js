import { keys }from "/js/keys.js";
const getUserEvents = (username = "OctaviousDavis") => {
	const url = `https://api.github.com/users/${username}/events`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${keys.github}`,
		},
	};
	return fetch(url, options)
		.then((response) => response.json())
		.catch((error) => {
			return error;
		});
};

(() => {
	getUserEvents("OctaviousDavis").then((events) => {
		console.log("Events => ", events);
		const pushEvents = events.filter((event) => event.type === "PushEvent");
		console.log("Push Events => ", pushEvents);
		const lastPushEvent = pushEvents[0];
		console.log("Last Push Event => ", lastPushEvent);
		const lastPushEventDate = new Date(lastPushEvent.created_at);
		console.log("Last Push Event Date => ", lastPushEventDate);
	},);
})();