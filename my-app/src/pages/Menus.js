import { useState, useEffect } from "react";

export default function Menus({ display }){

    const [header, setHeader] = useState();
    const [about, setAbout] = useState();
    const [dFile, setDFile] = useState();

    const handleHeader = (e) => {
        setHeader(e.target.value);
    }

    const handleAbout = (e) => {
        setAbout(e.target.value);
    }

    const handleFile = (e) => {
        setDFile(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(header)
        console.log(about)
        console.log(dFile)

    }

    if (display == 0) {
        return;
    }
    else if (display == 1){
        return(
            <>
                <div className="popups-wrapper">
                    <div className="popups" id="add-popup">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Başlık" style={{marginTop: '2rem'}} onChange={handleHeader}></input>
                            <textarea placeholder="Açıklama" style={{resize: 'none', marginTop: '2rem'}} onChange={handleAbout}></textarea>
                            <input type="file" accept="image/*" style={{marginTop: '2rem'}} onInput={handleFile}></input>
                            <button className="btn btn-primary" type="submit" style={{
                                width: '4rem',
                                marginTop: '2rem'
                            }}>Ekle</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    else if (display == 2){
        return(
            <>
                <div className="popups" id="update-popup">
    
                </div>
            </>
        )
    }
}