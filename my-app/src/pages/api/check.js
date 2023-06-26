import path from 'path';
import { promises as fs } from 'fs';


export default async function handler(req,res){

    try{
        const adminInfo = await checkAdminInfo();


        res.status(200).json(adminInfo);
    }
    catch(err) {
        res.status(500).json({error: 'failed to load data'})
    }

}




async function checkAdminInfo(){

    const dataPath = path.join(process.cwd(), 'src/pages/api/data/');

    const readFile = await fs.readFile(dataPath + 'admin.json','utf-8');

    console.log(readFile)

    return readFile;
}