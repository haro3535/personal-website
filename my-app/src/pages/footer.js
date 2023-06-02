

export default function Footer({ view }){

    const year = new Date().getFullYear();

    return <footer className='d-flex justify-content-center align-items-center footer' style={{backgroundColor: view.second_color, color: "white", height: "2.5rem"}}>
        <p className="m-0 fs-6">Copyright © Harun Onur {year}</p>
    </footer>

}