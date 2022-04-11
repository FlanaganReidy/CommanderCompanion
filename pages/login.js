import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function login(){

    function handleSubmit(e){
        e.preventDefault();
        console.log("Thanks for submitting, fool");
    }

    return(
        <form onClick={handleSubmit}>
            <label>
                Username:
                <input type="text" ></input>
            </label>
            <label>
                Password:
                <input type="text"></input>
            </label>
            <label>
                <input type="submit" value="Press this button"/>
            </label>

        </form>
    )
}