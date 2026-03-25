import fs from "fs"
import path from "path"
import { compare, hash } from "bcrypt";

const filePath = path.join(process.cwd(), "src", "data", "users.json")

export function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}

export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id))    
}

export function getByEmail (email) {
    const data = getAll();
    return data.find(u => u.email.toLowerCase() === email.toLowerCase())    
}

export function verifyPassword (hashedPassword, password) {
    const isValid = compare(password, hashedPassword)
    return isValid;   
}

export async function save(email, password) {
    const data = getAll();
    const found = getByEmail(email)
    const hashedPassword = await hash(password, 12);
    if (found) {
        throw new Error("user already exists.")
    }
    data.push({
        id: data.length + 1,
        email, 
        password: hashedPassword
    })
    fs.writeFileSync(filePath, JSON.stringify(data))
}