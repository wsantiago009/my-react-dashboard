import React from 'react';

//Components
import Container from './Container/Container';
import Header from './Header/Header';
import ContractCards from './Contract/ContractCards';
import { Row, Col } from './Grid';

const Dashboard = () => (
    <Container>
        <Header />
        <Row>
            <Col size='1' backgroundColor='#fff'>
                <ContractCards 
                    title='Company 1'
                    country='Hawaii'
                    price='$8.000'
                    rate='Fixed Rate'
                    contractDate='Aug 1st, 2021 - Nov 30th, 2021'
                    clientName='Penelope Cooley'
                />
                <ContractCards 
                    title='Company 2'
                    country='Thailand'
                    price='$12.000'
                    rate='Fixed Rate'
                    contractDate='Aug 21st, 2021 - Dec 23th, 2021'
                    clientName='Laura Burks'
                />
            </Col>
            <Col size='1'>
                <h1>Charts</h1>
            </Col>
        </Row>
    </Container>
)

export default Dashboard
