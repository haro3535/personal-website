import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Admin({ admin }){
    const router = useRouter();
    const [flag, setFlag] = useState(false);


    useEffect(() => {
        
        if(flag == false){
            router.push('/login')
        }
    })

    return <div>Admin</div>

    

}