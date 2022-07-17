import { useEffect, useState } from "react"
import {Form,Button, FormControl }from "react-bootstrap"


export default function MagicSearch(){


    async function handleSubmit(e){
        e.preventDefault();
    }

    const [cards, setCards] = useState(()=>({data:[]}))

    async function handleChange(e) {
        const res = await fetch("https://api.scryfall.com/cards/autocomplete?q=" + e )
        setCards(await res.json())
        console.log(cards)
    }
    
    
    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="justify-content-md-center">
                <Form.Label>Card name</Form.Label>
                <Form.Control type="text" onChange = {(e) => handleChange(e.target.value)}></Form.Control>
            </Form.Group>  
            <Button type="submit">Press this Button</Button>
        </Form>
           {cards.data.map((card)=>
                <li key={card}>{card}</li>
            )}
        </div>
    ) 
}