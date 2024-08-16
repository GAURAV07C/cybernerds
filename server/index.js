const express = require("express");
const app = express();
const Cors = require("cors");

dotenv.config();


const PORT = process.env.PORT || 4000;

app.use(express.json())

app.use(
    Cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
