
import Image from "next/image";
import carddata from "../public/samplecard";

export default function magiccard(props){
    console.log(props)
    return(
        props.mycard.map((card) => (
        <div>
            <h2>{card.name}</h2>
            <div>
            <Image src={card.image_uris.normal} layout="responsive" width={100} height={120}></Image>
            <p>{card.color_identity}</p>
            </div>
        </div>))
    )
}
export const getServerSideProps = () => ({
    props:{
    mycard : carddata.data,
    }
})