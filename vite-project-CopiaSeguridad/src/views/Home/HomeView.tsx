//Imports de componente';
import { FC } from 'react'
import Body from '../../components/layout/Body';
import Section1 from '../../components/layout/Section1';
import Section2 from '../../components/layout/Section2';
import Section3 from '../../components/layout/Section3';

const HomeView: FC = () => {
    return (
        <>
            <Body>
                <Section1/>
                <Section2/>
                <Section3/>
            </Body>
        </>
    )
}

export default HomeView