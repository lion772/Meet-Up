import { FC } from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface IMeetupList {
    meetups: {
        id: string;
        image: string;
        title: string;
        address: string;
    }[];
}

const MeetupList: FC<IMeetupList> = (props) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </ul>
    );
};

export default MeetupList;
