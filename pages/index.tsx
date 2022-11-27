import { FC, Fragment } from "react";
import { MeetupData } from "../components/meetups/MeetupDetail";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg/1024px-Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg",
        title: "Venice",
        address: "La Serenissima",
        description: "This is a first meetup",
    },
    {
        id: "m2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
        title: "Munich",
        address: "Marienplatz",
        description: "This is a second meetup",
    },
    {
        id: "m3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chambord_pano.jpg/1024px-Chambord_pano.jpg",
        title: "French",
        address: "Chambord Pano",
        description: "This is a third meetup",
    },
];

interface IHomePage {
    meetups: MeetupData[];
}

const HomePage: FC<IHomePage> = ({ meetups }) => {
    return (
        <Fragment>
            <MeetupList meetups={meetups} />
        </Fragment>
    );
};

export async function getStaticProps() {
    //fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    };
}

export default HomePage;
