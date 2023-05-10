

export default function MyAccounts(){

    return(
        <>
            <div className="container-fluid bg-dark m-0 text-white " style={{height: 15 + "vh"}}>
                <div className="row h-100">
                    <div className="col-sm d-flex justify-content-center align-items-center">
                        <div className="container d-flex justify-content-center">
                            <i class="bi bi-github h3"></i>
                            <div style={{width: 0.5 + "rem"}}></div>
                            <p className="mb-0 align-self-center">Github</p>
                        </div>
                    </div>
                    <div className="col-sm d-flex flex-column justify-content-center align-items-center">
                        <div className="container d-flex justify-content-start">
                            <i class="bi bi-linkedin h3"></i>
                            <div style={{width: 0.5 + "rem"}}></div>
                            <p className="mb-0 align-self-center">LinkedIn</p>
                        </div>
                        <div className="container d-flex">
                            {/* Buraya fetch ile aldığın değeri koyacaksın */}
                            <span></span>
                            <p className="mb-0 align-self-center">connections</p>
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-center align-items-center">
                        <div className="container d-flex justify-content-center">
                            <i class="bi bi-instagram h3"></i>
                            <div style={{width: 0.5 + "rem"}}></div>
                            <p className="mb-0 align-self-center">Instagram</p>
                        </div>  
                    </div>
                    <div className="col-sm d-flex justify-content-center align-items-center">
                        <div className="container d-flex justify-content-center">
                            <i class="bi bi-twitter h3"></i>
                            <div style={{width: 0.5 + "rem"}}></div>
                            <p className="mb-0 align-self-center">Twitter</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

function fetchFollowers(){

}