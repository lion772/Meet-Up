import { MongoClient } from "mongodb";
import { FC, Fragment } from "react";
import { MeetupData } from "../components/meetups/MeetupDetail";
import MeetupList from "../components/meetups/MeetupList";
import { MONGODB_PASSWORD, server } from "../secrets";

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

/* export async function getServerSideProps(context: any) {
    const req = context.req;
    const res = context.res;
    //fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    };
}

 */
export async function getStaticProps() {
    //fetch data from an API
    const uri = `mongodb+srv://lion772:${MONGODB_PASSWORD}@cluster0.xe1fe.mongodb.net/meetups?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup: any) => {
                return {
                    id: meetup._id.toString(),
                    ...meetup.data,
                };
            }),
        },
        revalidate: 10,
    };
}

export default HomePage;

/* Difference between getStaticProps and getServerSideProps:

1. The getStaticProps function without the revalidate property:



The getStaticProps function WITHOUT the revalidate property, is for apps that needs data that NEVER, or almost NEVER changes. That data will stays there, static, indefinitely included in your pre-rendered html code in the server and waiting for your next request to be served very quick,… unless you deploy again. In that case the JavaScriopt code will be executed again in the middle of the mentioned deployment process (not exactly on the server and not on the client. More like: “in between”). This behavior will only happen on a production server. Because on a development server the JavaScript code will be executed again every time you update the page or access the same route (another request in both cases), so it will behave exactly as with the getServerSideProps function on a development server. This function is perfect for apps with static not changing data, that takes really long periods of time pefore being updated or that literally NEVER changes. Like a personal or portfolio website, for example. You can always deploy again if you need to perform any rare or occasional modification on the data.



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

2. The getStaticProps function with the revalidate property:



The getStaticProps function WITH the revalidate property, is more like for apps that needs data that changes from time to time (setting 5 or 10 mins for example). Between updates or page re-generations on the server, the data will stay static, without changes. On a development server, besides the periodic execution and page re-generation on the server due to the validate property, the JavaScript code will ALSO be executed again every time you manually update the page or when you access the same route (another request in both cases), so it will behave similar in that regard, as with the getServerSideProps function, on a development server. The new data after each page re-generation will be available to the client only if the page is manually updated or if the route is re-accessed. So setting a very low number on validate (like 1 second, for example) doesn’t makes much sense, as the app still needs to wait for another request from the user anyway, after the latest page re-generation on the server, in order to watch the fresh data. This function is perfect for apps where the data changes from time to time but is not vital to have the latest information (on a news app, for example).

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

2. The getServerSideProps function:



The getServerSideProps function is for apps that needs fresh data every time you update the page manually or every time you access that route manually (another request in both cases), which will trigger another execution of the JavaScript code included inside that function and therefore the data will be ghathered again. Is for apps in which the data changes really fast. The user has access to fresh data every single time he updates the page or access the route (every time he performs a request). This function makes your Next.js web app to behave like any Ruby on Rails or Laravel web app, for example, with the included JavaScript code running only in the server, possibly dealing with sensible information like API keys and certificates, all safe and hided from the client (your browser). This function is perfect for apps that works with changing data, and/or when the data is potentially accessed by many users at the same time (like a CMS module with many accessing users, for example).


*/
