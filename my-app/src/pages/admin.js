import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/check');
    const admin = await res.json();

    return{
        props: {
            admin,
        },
    }
}

export default function Admin({ admin }){
    const router = useRouter();
    const [flag, setFlag] = useState(false);


    useEffect(() => {
        const parsedInfo = JSON.parse(admin);
        if (parsedInfo.isLogged == false) {
            router.push('http://localhost:3000/login')
        }
        else {
            setFlag(true)
        }
    })

    return(
        <>
            <main>
                <nav>

                </nav>
                <div style={{width: '100vw', height: '100vh',display: 'flex'}}>
                    <div className="left-panel" style={{width: '20vw', height: '100vh', border: '1px solid black'}}>
                        <div className="left-menu">
                            <div className="left-menu-elements">Projects</div>
                            <div className="left-menu-elements"></div>
                            <div className="left-menu-elements"></div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className="project-info">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Proje Adı" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Ara</button>
                            </div>
                            <div className="project-list">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

    

}