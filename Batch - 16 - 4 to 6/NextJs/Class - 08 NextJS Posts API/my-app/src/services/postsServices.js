import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "src", "db", "posts.json")

export function getAllPosts() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data)
}

export function getPostById(id) {
  const data = getAllPosts() // [{}]
  const post = data.find(p => p.id === Number(id)) // for unique values {}
  return post 
}

export function updatePostById(id, obj) {
  const data = getPostById(id);

}