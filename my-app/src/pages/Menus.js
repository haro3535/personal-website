import { useState, useEffect } from "react";

export default function Menus({ display }){

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(e.target[3].value)

        const image = e.target[2].files[0]
        const body = new FormData();

        body.append('header',e.target[0].value)
        body.append('description',e.target[1].value)
        body.append('image',image);
        body.append('link',e.target[3].value)

        console.log(body)

        fetch('/api/upload', {
            method: 'POST',
            body: body,
        })
        .then((res) => {
            if(res.ok){
                const { fileUrl } = res.json();
                console.log('Uploaded file URL:', fileUrl);
            }
        })
        .catch(err => console.log(err))

    }

    if (display == 0) {
        return;
    }
    else if (display == 1){
        return(
            <>
                <div className="popups-wrapper">
                    <div className="popups" id="add-popup">
                        <form onSubmit={handleSubmit} encType="multiple/form-data">
                            <input type="text" placeholder="Başlık" style={{marginTop: '2rem'}} required></input>
                            <textarea placeholder="Açıklama" style={{resize: 'none', marginTop: '2rem', height: '5rem'}} required></textarea>
                            <input type="file" accept="image/*" style={{marginTop: '2rem'}} required></input>
                            <input type="text" placeholder="Link" style={{marginTop: '2rem'}} required></input> 
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