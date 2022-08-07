
import Image from "next/image";
import dynamic from 'next/dynamic';
import {Suspense} from 'react';
import carddata from "../public/samplecard";
import {Row,Col,Container,Accordion} from "react-bootstrap"


export default function magiccard(props){
    console.log(props)
    return(
        <Container fluid>
            {Array.isArray(props)?props.data.map((card, index) => (
            <div key = {index}>
            <h2>{card.name}</h2>
            <div>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                    <img className = "cardImage" src={card.image_uris.normal}></img>
                    </Col>

                    <Col md={6} lg={4}>
                    <Row className="text-center">
                        <Col className="border">
                            USD
                        </Col>
                        <Col className="border">
                            USD Foil
                        </Col>
                        <Col className="border">
                            Tix
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col className="border">
                            {card.prices.usd}
                        </Col>
                        <Col className="border">
                            {card.prices.usd_foil}
                        </Col>
                        <Col className="border">
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
        </div>)) : null
        }
    </Container>
    )
    
    
}