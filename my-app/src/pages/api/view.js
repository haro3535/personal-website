import path from 'path';
import {promises as fs} from 'fs';


export default async function handler(req,res){

    if(req.method === 'GET'){

        try{
            const getPath = path.join(process.cwd(), 'src/pages/api/data/');

            const jData = await fs.readFile(getPath + 'views.json','utf-8');

            const sData = JSON.stringify(jData)

            res.status(200).json(sData);
        }catch(err){
            res.status(500).end();
        }
    }

}
