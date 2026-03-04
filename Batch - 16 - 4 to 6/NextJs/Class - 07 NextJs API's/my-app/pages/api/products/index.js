import { getAll, save } from "@/services/service";


export default function handler(req, res) {
  if (req.method === "GET") {
    const data = getAll()
    return res.status(200).json(data);
  } else if (req.method === "POST") {
    const {title, description, price} = req.body;
    save(title, description, price);
    return res.status(201).json({message: "Data Added Successfully"}).send();
  }
  return res.status(404).json({message: "This Method is not Allowed"}).send();
}
