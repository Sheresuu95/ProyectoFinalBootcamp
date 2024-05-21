import {FC} from "react";
import SectionWins from "../../components/layout/SectionWins";
import HeadWins from "../../components/layout/HeadWins";
import SectionWins2 from "../../components/layout/SectionWins2";
import { UserProvider } from "../../components/common/UserContext";


const Wins: FC = () => {
    return (
        <UserProvider>
            <div id="root">
                <HeadWins />
                <SectionWins />
                <SectionWins2 />
        </div>
        </UserProvider>
    )
}

export default Wins