import path from 'path';
import { promises as fs } from 'fs';


export default async function handler(req,res){

        try{
            console.log('salam')
            console.log(req.body)
            

            const flag = await checkAdmin(req.body);

            console.log('merhabalar ' + flag)
            

            if(flag) res.redirect('/admin',307);
            else res.redirect('/login');
            
        }catch(err) {
            res.status(500).json({error: 'failed to load data'})
        }

    
      res.status(200).end();
    
}



async function checkAdmin(body){

    const dataPath = path.join(process.cwd(), 'src/pages/api/data/');
    const admin = await fs.readFile(dataPath + 'admin.json','utf-8');
    const parsed = JSON.parse(admin);
    
    let {uname, password, isLogged} = parsed;
    
    if (uname == body.username && password == body.password) {
        
        isLogged = true;

        await fs.writeFile(dataPath + 'admin.json', JSON.stringify(parsed,null,2));

        return true;
    }
    else return false
  
  }