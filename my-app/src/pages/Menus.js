import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Menus({ display, projectIndex }){

    const {data , error, isLoading} = useSWR('/api/project', fetcher);

    if(error) alert('Projeleri yüklerken bir hata gerçekleşti!');
    if(isLoading) return <p>Loading...</p>

    const parsedData = JSON.parse(data);

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
                alert("Proje Eklendi!");
            }
        })
        .catch(err => alert("Proje Eklenemedi!"))

    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)

        const currentProject = parsedData.project[projectIndex];
        let projectDataValues = [
            currentProject.headers['tr'],
            currentProject.headers['en'],
            currentProject.headers['de'],
            currentProject.descriptions['tr'],
            currentProject.descriptions['en'],
            currentProject.descriptions['de'],
            currentProject.img['url'],
            currentProject.link
        ]

        console.log(projectDataValues)

        let isChanged = false;
        let newImage = false;

        const myForm = e.target;
        console.log(myForm.childElementCount)
        for(let i = 0; i < (myForm.childElementCount-1); i++){
            if(i == 6){
                try{
                    if(myForm.children[i].files[0] == (null || undefined || '')){
                        continue;
                    }
                    else{
                        newImage = true; 
                    }
                }
                catch(err){
                    console.log(err)
                }
            }
            if(myForm.children[i].value != projectDataValues[i]){
                console.log('merhaba')
                isChanged = true;
            }
        }

        if(!isChanged && !newImage) alert('Değişiklik algılanamadı!')

        const image = myForm['Image'].files[0];
        const body = new FormData();

        body.append('headers',myForm["HTr"].value)
        body.append('headers',myForm["HEn"].value)
        body.append('headers',myForm["HDe"].value)
        body.append('descriptions',myForm["DTr"].value)
        body.append('descriptions',myForm["DEn"].value)
        body.append('descriptions',myForm["DDe"].value)
        body.append('image',image);
        body.append('link',myForm["Link"].value)
        body.append('index',projectIndex)

        // datayı fetch lemek kaldı 

        fetch('/api/update', {
            method: "POST",
            body: body,
        })
        .then(async res => {
            if(res.ok){
                const { success } = await res.json();
                if (success) {
                    alert('Proje Güncellendi!')
                }
                else alert('Proje Güncellenemedi!')

            }
        })
        .catch(err => alert("Bir hata meydana geldi!"))

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
    else if (display == 2 && (projectIndex != undefined || projectIndex != null)){
        return(
            <>
                <div className="popups-wrapper">
                    <div className="popups" id="update-popup">
                        <form onSubmit={handleUpdateSubmit} encType="multiple/form-data">
                            <input type="text" name="HTr" placeholder="Başlık Türkçe" defaultValue={parsedData.project[projectIndex].headers['tr']} style={{marginTop: '2rem'}} required></input>
                            <input type="text" name="HEn" placeholder="Başlık İngilizce" defaultValue={parsedData.project[projectIndex].headers['en']} style={{marginTop: '2rem'}} required></input>
                            <input type="text" name="HDe" placeholder="Başlık Almanca" defaultValue={parsedData.project[projectIndex].headers['de']} style={{marginTop: '2rem'}} required></input>
                            <textarea name="DTr" placeholder="Açıklama Türkçe" defaultValue={parsedData.project[projectIndex].descriptions['tr']} style={{resize: 'none', marginTop: '2rem', height: '5rem'}} required></textarea>
                            <textarea name="DEn" placeholder="Açıklama İngilizce" defaultValue={parsedData.project[projectIndex].descriptions['en']} style={{resize: 'none', marginTop: '2rem', height: '5rem'}} required></textarea>
                            <textarea name="DDe" placeholder="Açıklama Almanca" defaultValue={parsedData.project[projectIndex].descriptions['de']} style={{resize: 'none', marginTop: '2rem', height: '5rem'}} required></textarea>
                            <input type="file" name="Image" accept="image/*" style={{marginTop: '2rem'}}></input>
                            <input type="text" name="Link" placeholder="Link" defaultValue={parsedData.project[projectIndex].link} style={{marginTop: '2rem'}} required></input> 
                            <button className="btn btn-primary" type="submit" style={{
                                width: '10rem',
                                marginTop: '2rem'
                            }}>Değişikliği Kaydet</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}