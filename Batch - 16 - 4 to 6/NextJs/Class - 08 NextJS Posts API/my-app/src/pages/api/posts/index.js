import { getAllPosts } from "@/services/postsServices";


export default function handler(req, res) {
  if(req.method === "GET") {
    const data = getAllPosts()
    return res.status(200).json(data);
  }
  return res.status(404).json({}).send();
}

