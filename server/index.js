import Server from "./src/server.js";
import app from "./src/app.js";

const PORT = app.get("port") || 3000;
app.set("json spaces", 4);

Server(PORT);