import path from 'path';
import { promises as fs } from 'fs';


export default async function handler(req,res){

        try{
            const flag = await checkAdmin(req.body);

            res.status(200).json({succeed: flag});
            
        }catch(err) {
            res.status(500).json({error: 'failed to load data'})
        }
}



async function checkAdmin(body){

    const dataPath = path.join(process.cwd(), 'src/pages/api/data/');
    const admin = await fs.readFile(dataPath + 'admin.json','utf-8');
    const parsed = JSON.parse(admin);
    
    let {uname, password, isLogged} = parsed;
    
    if (uname == body.username && password == body.password) {
        
        isLogged = true;

        const updatedJSON = {
            "name": uname,
            "password": password,
            "isLogged": isLogged,
        }
        await fs.writeFile(dataPath + 'admin.json', JSON.stringify(updatedJSON,null,2),'utf-8');

        return true;
    }
    else return false
  
  }