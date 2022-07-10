import { useEffect, useState } from "react"
import {Form,Button }from "react-bootstrap"

export default function MagicSearch(){

    const [formData, setFormData]= useState("")

    async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch("https://api.scryfall.com/cards/autocomplete?q=" + formData )
        setCards(await res.json())
        console.log("https://api.scryfall.com/autocomplete?q=" + formData )
        console.log(cards)
        
    }

    const [cards, setCards] = useState([])
    //form data lives in the state

    //if (isLoading) return <p>Loading...</p>
    //if (!cards) return  <p>Huh, it didn't work</p>

    
    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="justify-content-md-center">
                <Form.Label>Card name</Form.Label>
                <Form.Control type="text" onChange = {(e) => setFormData(e.target.value)}></Form.Control>
            </Form.Group>  
            <Button type="submit">Press this Button</Button>
        </Form>
        
        </div>
    ) 
}

// export async function getServerSideProps(){
//     try{
//         const res = await fetch("https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3")
//         const cards = await res.json()
//         //console.log(cards)
//         return{
//             props:{
//                 isLoading:false,
//                 cards:cards.data
//             }
//         }

//     }
//     catch(e){
//         console.error(e)
//         return{
//             props:{
//                 isLoading:true,
//             }
//         }
//     }
// }