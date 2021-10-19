import "dotenv/config";
import express from "express";

const app = express();
const port = 4000;

app.get("/github", (request, response) => {
	response.redirect(
		`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
	);
});
app.get("/signin/callback", (request, response) => {
	const { code } = request.query;

	return response.json(code);
});
app.listen(port, () => console.log("🚀 Server running on PORT " + port));
