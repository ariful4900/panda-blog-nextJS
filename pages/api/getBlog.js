import * as fs from 'fs'
export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (error, data)=>{
   
    if(error){
        res.status(500).json({message: 'No Search Blog Found'})
    }
    res.status(200).json(JSON.parse(data))
  })
}