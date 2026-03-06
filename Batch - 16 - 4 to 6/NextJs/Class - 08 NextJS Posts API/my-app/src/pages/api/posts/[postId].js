import { getPostById } from "@/services/postsServices";

export default function handler(req, res) {
  if(req.method === "GET") {
    const id = req.query.postId;
    const data = getPostById(id);
    return res.status(200).json(data);
  }
  return res.status(404).json({}).send();
}

// a 2111
// p 3423
// p 2342
// l 3433
// e 3323

