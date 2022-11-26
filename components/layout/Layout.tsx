import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { FC, ReactNode } from "react";

interface ILayout {
    children?: ReactNode | null;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </div>
    );
};

export default Layout;
