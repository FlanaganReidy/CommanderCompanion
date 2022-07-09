import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Button, Form} from "react-bootstrap"


export default function login(){

    function handleSubmit(e){
        e.preventDefault();
        console.log("Thanks for submitting, fool");
    }

    return(
        <Form onClick={handleSubmit}>
            <Form.Group className="justify-content-md-center">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" ></Form.Control>
            </Form.Group>
            <Form.Group className="justify-content-md-center">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text"></Form.Control>
            </Form.Group>
            
            <Button type="submit">Press this Button</Button>
        </Form>
    )
}