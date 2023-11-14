import OnSale from "./Components/Oferts"
import PromoModePay from "./Components/PromoModePay"
import Recommendation from "./Components/Recommendation"
import TopBar from "./Components/TopBar"
import SeconBar from "./Components/secondBar"

export default function MenuInit (){
    return (
        <>
            <TopBar/>
            <div style={{height:"60px"}}></div>
            <SeconBar/>
            <OnSale/>
            <PromoModePay/>
            <Recommendation/>
        </>
    )
}