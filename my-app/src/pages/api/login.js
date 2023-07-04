import path from 'path';
import { promises as fs } from 'fs';
import { serialize } from 'cookie';


export default async function handler(req,res){
    if (req.method === 'POST') {
        // Assuming you're using a form with 'email' and 'password' fields
        const flag = await checkAdmin(req.body)
        // Perform your server-side validation or authentication logic here
        if (flag) {
          // If the login is successful, set the cookies
          const cookieOptions = {
            httpOnly: false, // Cookie cannot be accessed by JavaScript
            sameSite: 'strict', // Cookie will only be sent on the same site
            maxAge: 86400, // Cookie will expire in 1 day (adjust as needed)
            path: '/', // Cookie is accessible from all pages
          };
    
          // Set a cookie for the admin page
          res.setHeader('Set-Cookie', serialize('admin', 'true', cookieOptions));
          
    
          // Return a success message or redirect to the admin page
          res.status(200).json({ message: 'Login successful' });
        } else {
          // Return an error message if login fails
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } else {
        res.status(405).json({ error: 'Method not allowed' });
      }
}



async function checkAdmin(body){

    const dataPath = path.join(process.cwd(), 'src/pages/api/data/');
    const admin = await fs.readFile(dataPath + 'admin.json','utf-8');
    const parsed = JSON.parse(admin);
    
    let {name, password} = parsed;
    
    if (name == body.username && password == body.password) {

        const updatedJSON = {
            "name": name,
            "password": password,
        }
        await fs.writeFile(dataPath + 'admin.json', JSON.stringify(updatedJSON,null,2),'utf-8');

        return true;
    }
    else return false
  
  }