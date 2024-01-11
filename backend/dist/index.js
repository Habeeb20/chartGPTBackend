import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const Port = process.env.PORT || 5055;
connectToDatabase().then(() => {
    app.listen(Port, () => console.log(`server Open on ${Port} & connected to the database`));
}).catch((err) => console.log(err));
//# sourceMappingURL=index.js.map