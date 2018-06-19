export function redirectToPath({
	type,
	avatar
}) {
	let url = (type === "genius") ? "/genius" : "/boss";
	if (!avatar) {
		url += "info";
		console.log('nonono')
	}
	return url;
}