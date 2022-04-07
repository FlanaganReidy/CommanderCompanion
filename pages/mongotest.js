import Link from 'next/link'
import styles from '../styles/Home.module.css'
import clientPromise from '../lib/mongodb'

export default function MongoTest({isConnected}){
    return(
        <div className={styles.container}>
            <h1>This is the Mongo Test</h1>
            {isConnected ? (<h3>You are connected to MongoDB</h3>):(<h3>You are not connected to MongoDB</h3>)}
        <Link href="/">
            <a className={styles.card}>Back to home</a>
        </Link>
        </div>
        )
}

export async function getServerSideProps(context){
    try {
        await clientPromise
        return {
            props:{isConnected:true},
        }
    } catch (e){
        console.error(e)
        return{
            props:{isConnected: false},
        }
    }
}