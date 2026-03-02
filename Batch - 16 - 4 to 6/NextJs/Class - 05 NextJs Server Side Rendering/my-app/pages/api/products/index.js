const data = [
      {
        title: "Samsung Phone",
        descripton: "This is Samsung Product",
        price: 120000,
        id: 1
      },
      {
        title: "Iphone",
        descripton: "This is Apple Product",
        price: 220000,
        id: 2
      }
    ]

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(data);
  }
  return res.status(404).json({message: "This Method is not Allowed"}).send();
}
