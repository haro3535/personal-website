import { useState, useEffect } from "react";

export default function Menus({ display }){

    const handleSubmit = (e) => {
        e.preventDefault();

        const image = e.target["Image"].files[0]
        const body = new FormData();

        body.append('headers',e.target["HTr"].value)
        body.append('headers',e.target["HEn"].value)
        body.append('headers',e.target["HDe"].value)
        body.append('descriptions',e.target["DTr"].value)
        body.append('descriptions',e.target["DEn"].value)
        body.append('descriptions',e.target["DDe"].value)
        body.append('image',image);
        body.append('link',e.target["Link"].value)

        console.log(body)

        fetch('/api/upload', {
            method: 'POST',
            body: body,
        })
        .then(async (res) => {
            if(res.ok){
                const { fileUrl, success } = await res.json();
                console.log('Uploaded file URL:', fileUrl);
                console.log('success:', success);
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
                            <input type="text" name="HTr" placeholder="Başlık Türkçe" style={{marginTop: '2rem'}} required></input>
                            <input type="text" name="HEn" placeholder="Başlık İngilizce" style={{marginTop: '2rem'}} required></input>
                            <input type="text" name="HDe" placeholder="Başlık Almanca" style={{marginTop: '2rem'}} required></input>
                            <textarea name="DTr" placeholder="Açıklama Türkçe" style={{resize: 'none', marginTop: '2rem', height: '5rem'}} required></textarea>
                            <textarea name="DEn" placeholder="Açıklama İngilizce" style={{resize: 'none', marginTop: '2rem', height: '5rem'}} required></textarea>
                            <textarea name="DDe" placeholder="Açıklama Almanca" style={{resize: 'none', marginTop: '2rem', height: '5rem'}} required></textarea>
                            <input type="file" name="Image" accept="image/*" style={{marginTop: '2rem'}} required></input>
                            <input type="text" name="Link" placeholder="Link" style={{marginTop: '2rem'}} required></input> 
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