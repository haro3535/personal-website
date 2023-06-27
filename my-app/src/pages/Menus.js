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

        fetch('/api/addProject', {
            method: 'POST',
            body: body,
        })
        .then((res) => {
            if(res.ok) alert('Proje Kayıtedildi!')
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
                            <input type="text" placeholder="Başlık" style={{marginTop: '2rem'}}></input>
                            <textarea placeholder="Açıklama" style={{resize: 'none', marginTop: '2rem', height: '5rem'}}></textarea>
                            <input type="file" accept="image/*" style={{marginTop: '2rem'}}></input>
                            <input type="text" placeholder="Link" style={{marginTop: '2rem'}}></input> 
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