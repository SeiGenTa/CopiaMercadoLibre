import OnSale from "./Components/Oferts"
import PromoModePay from "./Components/PromoModePay"
import Recommendation from "./Components/Recommendation"
import NavBar from "./Components/navBar"

export default function MenuInit (){
    return (
        <>
            <NavBar/>
            <OnSale/>
            <PromoModePay/>
            <Recommendation/>
        </>
    )
}