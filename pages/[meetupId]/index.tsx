import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import MeetupDetail, {
    MeetupData,
} from "../../components/meetups/MeetupDetail";

interface IMeetupDetailPage {
    meetup: MeetupData;
}

const MeetupDetailPage: FC<IMeetupDetailPage> = ({ meetup }) => {
    //const { meetupId } = useRouter().query;
    return (
        <>
            <Head>
                <title> {meetup.title}</title>
                <meta name="description" content={meetup.description} />
            </Head>
            <MeetupDetail
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                address={meetup.address}
                title={meetup.title}
                description={meetup.description}
            />
        </>
    );
};

export async function getStaticPaths() {
    const uri = `mongodb+srv://lion772:kagebushin22@cluster0.xe1fe.mongodb.net/meetups?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection
        .find({}, { projection: { _id: 1 } })
        .toArray();

    client.close();

    const paths = meetups.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
    }));

    return {
        fallback: "blocking",
        paths: paths,
    };
}

export async function getStaticProps(context: {
    params: { meetupId: string };
}) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    //fetch data from an API

    const uri = `mongodb+srv://lion772:kagebushin22@cluster0.xe1fe.mongodb.net/meetups?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });
    client.close();

    return {
        props: {
            meetup: {
                id: selectedMeetup?._id.toString(),
                ...selectedMeetup?.data,
            },
        },
    };
}

export default MeetupDetailPage;

/* Fall back is a nice feature

because it allows you to pre-generate some of your pages

for specific meetup ID values.

For example the pages which are visited most frequently

and then pre-generate the missing ones dynamically

when requests for them are coming in.

Here however, I'll set fallback to false

to indicate that I defined all supported paths here. */
