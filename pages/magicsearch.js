export default function MagicSearch({cards,isLoading}){

    if (isLoading) return <p>Loading...</p>
    if (!cards) return  <p>Huh, it didn't work</p>

    return(
        <div>
        <ul>
            {cards.map((card)=>(
                <li key={card.id}>
                   <p>{card.name}</p> 
                </li>
            ))}
        </ul>
        </div>
    ) 

}

export async function getServerSideProps(){
    try{
        const res = await fetch("https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3")
        const cards = await res.json()
        console.log(cards)
        return{
            props:{
                isLoading:false,
                cards:cards.data
            }
        }

    }
    catch(e){
        console.error(e)
        return{
            props:{
                isLoading:true,
            }
        }
    }
}