import TopBar from "./TopBar";
import SeconBar from "./secondBar";
import { useState,useEffect } from "react";

export default function NavBar() {
    const [dataCategories, setDataCategories] = useState([]);
    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLC/categories")
        .then(response=> {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data =>{
            console.log(data[0]);
            setDataCategories(data);
        })
    }, [])


    return (
        <>
            <TopBar categories={dataCategories}/>
            <div style={{height:"60px"}}></div>
            <SeconBar categories={dataCategories} />
        </>
    );
}