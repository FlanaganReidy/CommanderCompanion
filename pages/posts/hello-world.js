import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function HelloWorld(){
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch('/api/hello')
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading</p>
    if(!data) return <p>I have no memory of this place</p>

    return(
        <>
        <Head>
            <title>Hello World</title>
        </Head>
        <Script 
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy='lazyOnload'
            onLoad={()=>
                console.log(`script loaded correctly, window.FB has been populated`)}
        />
        <h1>Hello {data.name}</h1>
        <Link href="/">
            <a className={styles.card}>Back to home</a>
        </Link>
        <Image
        src ="/images/frazetta5.jpg"
        height={500}
        width={500}
        />
        </>
    ) 
}