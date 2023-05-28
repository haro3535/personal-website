// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import { promises as fs } from 'fs';

async function sendJSONData(){

  const dataPath = path.join(process.cwd(), 'src/pages/api/projects/');

  const jsonFile = await fs.readFile(dataPath + 'projects.json','utf-8');

  return jsonFile;
}


export default async function handler(req, res) {

  try{
    const data = await sendJSONData();

    const serialized = JSON.stringify(data);

    res.status(200).json(serialized)
  }catch(err){
    res.status(500).json({error: 'failed to load data'})
  }
}


