import Link from 'next/link'
import styles from '../styles/Home.module.css'
import clientPromise from '../lib/mongodb'
//import { db } from 'mongodb'

export default function MongoTest({isConnected, movies}){
    return(
        <div className={styles.container}>
            <h1>This is the Mongo Test</h1>
            {isConnected ? (<h3>You are connected to MongoDB</h3>):(<h3>You are not connected to MongoDB</h3>)}
            <ul>
                {movies.map((movie)=>(
                <li>
                    <h2>{movie.title}</h2>
                    <h3>{movie.metacritic}</h3>
                    <p>{movie.plot}</p>
                </li>    
                ))}
            </ul>
        </div>
        )
}

export async function getServerSideProps(){
    try { 
        const client = await clientPromise

        const movies = await client.db("sample_mflix")
        .collection("movies")
        .find({})
        .sort({metacritic: -1})
        .limit(20)
        .toArray();

        return {
            props:{
                isConnected:true,
                movies: JSON.parse(JSON.stringify(movies)),
            },
            
        }
    } catch (e){
        console.error(e)
        return{
            props:{isConnected: false},
        }
    }
}