import { IncomingForm } from "formidable";
import path from "path";
import fs from "fs-extra";

export const config = {
    api: {
      bodyParser: false, // Disable the default Next.js body parsing
    },
  };

export default async function handler(req,res){


    const form = new IncomingForm();
    form.keepExtensions = true;

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    form.parse(req, async function (err,fields,files) {

        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to process form data.' });
            return;
          }

        
        try{
            const uploadedFile = files.image[0];
            // Move the uploaded file to the specified directory
            const fileName = `${Date.now()}-${uploadedFile.originalFilename}`;
            const filePath = path.join(uploadDir, fileName);
            await fs.move(uploadedFile.filepath, filePath);

            await updateProject(fields,`/uploads/${fileName}`)
        }
        catch(err){}

        try{

          await updateProject(fields,"Empty")
          res.status(200).json({ success: flag })
        }
        catch(error){
          console.error(error);
          res.status(500).json({ error: 'Failed to process uploaded file.' });
        }

        


    })
}


async function updateProject(fields, filePath){

    const { headers, descriptions, link, index } = fields;

    const dataPath = path.join(process.cwd(), 'src/pages/api/data/');
    const projects = await fs.readFile(dataPath + 'projects.json', 'utf-8');

    let parsedProjects = JSON.parse(projects).project;

    console.log(parsedProjects[index]);

    let currentFilepath = parsedProjects[index].img['url'];

    if(filePath != 'Empty'){
      currentFilepath = filePath;
    }

    const project = {
        headers: {
          tr: headers[0],
          en: headers[1],
          de: headers[2]
        },
        descriptions: {
          tr: descriptions[0],
          en: descriptions[1],
          de: descriptions[2],
        },
        img: {
          url: currentFilepath,
        },
        link: link[0]
      }

      let objectList = []

      const projectLenght = parsedProjects.length;

      parsedProjects.splice(index,1);
      // Burada ilk parametre index i belirtiyor ikincisi ise yapacağı işlemi belirtiyor - silme
      
      for (let i = 0; i < projectLenght; i++) {
        
        if(index != i){
          objectList.push(parsedProjects[i])
        }
        else objectList.push(project)
        
      }

      const updatedJson = JSON.stringify({
        project: objectList
      },null,2)
  
      await fs.writeFile(dataPath + 'projects.json', updatedJson, 'utf-8');

      
}


