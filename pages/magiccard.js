
import Image from "next/image";
import dynamic from 'next/dynamic';
import {Suspense} from 'react';
import carddata from "../public/samplecard";
import {Row,Col,Container,Accordion} from "react-bootstrap"


export default function magiccard(props){
    console.log(props)
    return(
        <Container fluid>
            {props.mycard.map((card) => (
        <div>
            <h2>{card.name}</h2>
            <div>
                <Row>
                    <Col s={12} md={6} lg={4}>
                    <img className = "cardImage" src={card.image_uris.normal}></img>
                    </Col>

                    <Col md={6} lg={4}>
                    <Row>
                        <Col>
                            USD
                        </Col>
                        <Col>
                            USD Foil
                        </Col>
                        <Col>
                            USD Etched
                        </Col>
                        <Col>
                            EUR
                        </Col>
                        <Col>
                            EUR Foil
                        </Col>
                        <Col>
                            Tix
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {card.prices.usd}
                        </Col>
                        <Col>
                            {card.prices.usd_foil}
                        </Col>
                        <Col>
                            {card.prices.usd_etched}
                        </Col>
                        <Col>
                            {card.prices.eur}
                        </Col>
                        <Col>
                            {card.prices.eur_foil}
                        </Col>
                        <Col>
                            {card.prices.tix}
                        </Col>
                    </Row>
                    <Row>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Oracle Text</Accordion.Header>
                            <Accordion.Body>
                            {card.oracle_text}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Flavor Text</Accordion.Header>
                            <Accordion.Body>
                            {card.flavor_text}
                            </Accordion.Body>
                         </Accordion.Item>
                    </Accordion>
                    </Row>              
                    </Col>
                </Row>
            </div>
        </div>))
        }
    </Container>
    )
    
    
}
export const getServerSideProps = () => ({
    props:{
    mycard : carddata.data,
    }
})