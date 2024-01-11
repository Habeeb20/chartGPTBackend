import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect to mongoDb");
    }
}
async function disconncetFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("connot connect to the database");
    }
}
export { connectToDatabase, disconncetFromDatabase };
//# sourceMappingURL=connection.js.map