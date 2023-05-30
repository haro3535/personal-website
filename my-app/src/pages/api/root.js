// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {

  try{
    const data = await sendJSONData();
    console.log(JSON.parse(data))
  

    res.status(200).json(data)
  }catch(err){
    res.status(500).json({error: 'failed to load data'})
  }
}


async function sendJSONData(){

  const dataPath = path.join(process.cwd(), 'src/pages/api/data/');

  const projects = await fs.readFile(dataPath + 'projects.json','utf-8');

  const views = await fs.readFile(dataPath + 'view.json','utf-8');

  const mergeData = {projects,views}
  const serialized = JSON.stringify(mergeData);

  return serialized;
}

