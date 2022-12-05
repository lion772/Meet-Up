//POST /api/new-meetup
import { MONGODB_USERNAME, MONGODB_PASSWORD } from "../../secrets";
import { MongoClient } from "mongodb";
import { MeetupData } from "../../components/meetups/MeetupDetail";

export default async function handler(req: any, res: any) {
    if (req.method === "POST") {
        const data: MeetupData = req.body;

        try {
            const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.xe1fe.mongodb.net/meetups?retryWrites=true&w=majority`;
            const client = await MongoClient.connect(uri);
            const db = client.db();
            //Get hold of db collections
            const meetupsCollection = db.collection("meetups");
            //Insert a new meetup data document into your db
            const result = await meetupsCollection.insertOne({ data });
            console.log(result);
            client.close();
            res.status(201).json({ message: "Meetup inserted!" });
        } catch (error) {
            throw new Error(
                (error as Error).message || "An error has occurred."
            );
        }
    }
}
