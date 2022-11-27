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
        <MeetupDetail
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            address={meetup.address}
            title={meetup.title}
            description={meetup.description}
        />
    );
};

export async function getStaticProps(context: {
    params: { meetupId: string };
}) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    //fetch data from an API
    return {
        props: {
            meetup: {
                id: meetupId,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg/1024px-Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg",
                address: "La Serenissima",
                title: "Venice",
                description: "This is a first meetup",
            },
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
        fallback: false,
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
