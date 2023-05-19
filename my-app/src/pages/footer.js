

export default function Footer(){

    const year = new Date().getFullYear();

    return <footer className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#394867', color: "white", height: "2.5rem"}}>
        <p className="m-0 fs-6">Copyright © Harun Onur {year}</p>
    </footer>

}