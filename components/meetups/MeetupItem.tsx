import { FC } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

interface IMeetupItem {
    id: string;
    image: string;
    title: string;
    address: string;
}

const MeetupItem: FC<IMeetupItem> = (props) => {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button>Show Details</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
