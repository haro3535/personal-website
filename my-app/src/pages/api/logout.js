import { promises as fs} from 'fs'
import path from 'path'


export default async function handler(req,res){

    try{

        const dataPath = path.join(process.cwd(), 'src/pages/api/data/');
        const admin = await fs.readFile(dataPath + 'admin.json','utf-8');
        const parsedAdmin = JSON.parse(admin);
    
        const adminJson = {
            name: parsedAdmin.name,
            password: parsedAdmin.password,
            isLogged: false
        }
    
        await fs.writeFile(dataPath + 'admin.json', JSON.stringify(adminJson,null,2),'utf-8');

        res.status(200).json({success: true})

    }catch(err){
        console.log(err)
        res.status(500)
    }
}