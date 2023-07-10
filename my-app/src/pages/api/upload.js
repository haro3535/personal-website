import { IncomingForm } from "formidable";
import path from "path";
import fs from "fs-extra";
import { headers } from "next/dist/client/components/headers";


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

    const uploadedFile = files.image[0];

    try{

      // Create the uploads directory if it doesn't exist
      await fs.ensureDir(uploadDir);

      // Move the uploaded file to the specified directory
      const fileName = `${Date.now()}-${uploadedFile.originalFilename}`;
      const filePath = path.join(uploadDir, fileName);
      await fs.move(uploadedFile.filepath, filePath);

      const flag = await createProject(fields,`/uploads/${fileName}`)
      
      // Return the URL of the uploaded file to the client
      const fileUrl = `/uploads/${fileName}`;
    
      res.status(200).json({ fileUrl, success: flag });
    }catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to process uploaded file.' });
    }
  })
}


async function createProject(fields, filepath){

  try{

    const { headers, descriptions, link } = fields;
    console.log(fields);

    const dataPath = path.join(process.cwd(), 'src/pages/api/data/');
    const projects = await fs.readFile(dataPath + 'projects.json', 'utf-8');

    let parsedProjects = JSON.parse(projects).project;

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
        url: filepath,
      },
      link: link[0]
    }

    parsedProjects.push(project)

    const updatedJson = JSON.stringify({
      project: parsedProjects
    },null,2)

    await fs.writeFile(dataPath + 'projects.json', updatedJson, 'utf-8');

    return true;
  }
  catch(err){
    console.error(err)
    return false;
  }
}

