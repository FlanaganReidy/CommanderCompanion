import { useEffect, useState } from "react"
import {Form,Button, FormControl }from "react-bootstrap"


export default function MagicSearch(){


    //send this to the api to search the specific card
    async function handleSubmit(e){
        e.preventDefault();
        console.log(e.target[0].value)
        const response = await fetch("https://api.scryfall.com/cards/search?q="+ e.target[0].value)
        const data = await response.json()
        console.log(data);

        
    }

    const [cards, setCards] = useState(()=>({data:[]}))

    async function handleChange(e) {
        //updates an array containing the contents of the autocomplete endpoint
        const res = await fetch("https://api.scryfall.com/cards/autocomplete?q=" + e )
        setCards(await res.json())
        console.log(cards)
    }
    
    
    return(
        <div>
            <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="justify-content-md-center">
                <Form.Label>Card name</Form.Label>
                <Form.Control name="searchBar" list="searchOptions" type="text" onChange = {(e) => handleChange(e.target.value)}></Form.Control>
                <datalist id="searchOptions">
                {cards.data.map((card)=>
                <option key={card} value={card}/>
                 )}
                </datalist>
            </Form.Group> 
            

            <Button type="submit">Search</Button>
        </Form>
           
        </div>
    ) 
}