import createUserDB from './users-db.js';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config()
const db = {connected: false}
const uri = process.env.DB_URI
db.client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
db.client.on('open', _=>{ db.connected=true, console.log('DB connected.') })
db.client.on('topologyClosed', _=>{ db.connected=false, console.log('DB disconnected.') })

export async function createDB() {
    if (! db.connected) {
        await db.client.connect();
    }
    return db.client.db(process.env.DB_NAME);
}

const usersDB = createUserDB({ createDB });
export default usersDB;
