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

    return <div>Admin</div>

    

}