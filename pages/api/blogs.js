// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
    // first read the directory
    let data = await fs.promises.readdir("blogdata");
    // declare variable for holding the file
    let myFile;
    // array to store all the blogs
    let allBlogs = [];

    // traverse the array and read each file
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        // reading file
        myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        // pushing the file to the array
        allBlogs.push(JSON.parse(myFile));
    }

    res.status(200).json(allBlogs);
}
