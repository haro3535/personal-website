import {promises as fs} from 'fs';
import path from 'path';

export default async function handler(req,res){

    if(req.method === 'POST'){

        const flag = await deleteProject(req.body.index);
        res.status(200).json({success: flag})

    }
    else{
        res.status(200).json({error: 'An error occureed!'});
    }
    
}



async function deleteProject(index){

    try{

        const dataPath = path.join(process.cwd(), 'src/pages/api/data/');
        const projects = await fs.readFile(dataPath + 'projects.json', 'utf-8');

        let parsedProjects = JSON.parse(projects).project;

        let deleteProject = parsedProjects.splice(index,1);
        // Burada ilk parametre index i belirtiyor ikincisi ise yapacağı işlemi belirtiyor - silme 

        let newJsonTemplate = JSON.stringify({
            project: []
        });


        let jsonList = JSON.parse(newJsonTemplate)["project"];

        parsedProjects.forEach(element => {
            jsonList.push(element);
        });

        let newJson = JSON.stringify({
            project: jsonList,
        },null,2)

        console.log(newJson)

        await fs.writeFile(dataPath + 'projects.json', newJson, 'utf-8');

        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
}