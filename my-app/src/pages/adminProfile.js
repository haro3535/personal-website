import Image from "next/image"

export default function AdminProfile(){

    const handlePPSubmit = (e) =>{
        e.preventDefalut();

    }

    const handleLinkSubmit = (e) =>{
        
    }

    return(
       <div>
            <legend>Profil Fotoğrafı</legend>
            <div className="pp-wrapper">
                <Image
                alt="PP"
                src={'/uploads/foto1.jpg'}
                fill={true}
                />
            </div>
            <from>
                <input type="file"></input>
                <br></br>
                <br></br>
                <button className="btn btn-primary" type="submit" onSubmit={handlePPSubmit}>Resmi Kaydet</button>
            </from>
            <div className="info-part">
                <form>
                <fieldset>
                    <legend>Social Accounts</legend>
                    <label><i className="bi bi-github h3"></i></label>
                    <input type="text" placeholder="Link"></input><br></br>
                    <br></br>
                    <label><i className="bi bi-linkedin h3"></i></label>
                    <input type="text" placeholder="Link"></input><br></br>
                    <br></br>
                    <label><i className="bi bi-instagram h3"></i></label>
                    <input type="text" placeholder="Link"></input><br></br>
                    <br></br>
                    <label><i className="bi bi-twitter h3"></i></label>
                    <input type="text" placeholder="Link"></input><br></br>
                    <br></br>
                    <button className="btn btn-primary" type="submit" onSubmit={handleLinkSubmit}>Değişikliği Kaydet</button>
                </fieldset>
                </form>
            </div>
       </div>
    )
}