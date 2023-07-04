import { destroyCookie } from 'nookies';


export default async function handler(req,res){

    if (req.method === 'POST') {
        // Clear the cookies
        destroyCookie({ res }, 'login');
        destroyCookie({ res }, 'admin');
    
        // Return a success message or redirect to the login page
        res.status(200).json({ message: 'Logout successful' });
      } else {
        res.status(405).json({ error: 'Method not allowed' });
      }
}