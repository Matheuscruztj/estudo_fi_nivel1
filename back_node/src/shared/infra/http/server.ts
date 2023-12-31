import { app } from "./app";
import "dotenv/config";

const port = process.env.APP_PORT || 3333;

app.listen(port, () => console.log(`Server is running on port ${port}!`));