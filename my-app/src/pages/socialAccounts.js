import { useEffect, useState } from "react"


export default function MyAccounts({ view }){

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

    return(
        <>
            <div className="container-fluid m-0 text-white socialAccounts" style={{height: 15 + "vh", backgroundColor: stateView.bcolor, color: "#F1F6F9"}}>
                <div className="row h-100">
                    <div className="col-sm d-flex justify-content-center align-items-center myLink">
                        <a href="https://github.com/haro3535" target="_blank" className="pe-auto text-reset text-decoration-none">
                            <div className="container d-flex justify-content-center">
                                <i className="bi bi-github h3"></i>
                                <div style={{width: 0.5 + "rem"}}></div>
                                <p className="mb-0 align-self-center">Github</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm d-flex flex-column justify-content-center align-items-center myLink">
                        <a href="https://www.linkedin.com/in/harun-onur-59b958226/" target="_blank" className="pe-auto text-reset text-decoration-none">
                            <div className="container d-flex justify-content-center">
                                <i className="bi bi-linkedin h3"></i>
                                <div style={{width: 0.5 + "rem"}}></div>
                                <p className="mb-0 align-self-center">LinkedIn</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm d-flex justify-content-center align-items-center myLink">
                        <a href="https://www.instagram.com/harunonr_/" target="_blank" className="pe-auto text-reset text-decoration-none">
                            <div className="container d-flex justify-content-center">
                                <i className="bi bi-instagram h3"></i>
                                <div style={{width: 0.5 + "rem"}}></div>
                                <p className="mb-0 align-self-center">Instagram</p>
                            </div>  
                        </a>
                    </div>
                    <div className="col-sm d-flex justify-content-center align-items-center myLink">
                        <a href="https://twitter.com/harun_onur7" target="_blank" className="pe-auto text-reset text-decoration-none">
                            <div className="container d-flex justify-content-center">
                                <i className="bi bi-twitter h3"></i>
                                <div style={{width: 0.5 + "rem"}}></div>
                                <p className="mb-0 align-self-center">Twitter</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    ) 
}

