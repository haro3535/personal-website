import { useEffect, useState } from "react";

export default function Footer({ view }){

    const [stateView, setStateView] = useState({
        texture: "0",
        mcolor: "#F1F6F9",
        bcolor: "#394867",
        tcolor: "black"
    });

    useEffect(() => {
        if(view != undefined){
            setStateView(view)
        }
    })

    const year = new Date().getFullYear();

    return <footer className='d-flex justify-content-center align-items-center footer' style={{backgroundColor: stateView.bcolor, color: "white", height: "2.5rem"}}>
        <p className="m-0 fs-6">Copyright © Harun Onur {year}</p>
    </footer>

}