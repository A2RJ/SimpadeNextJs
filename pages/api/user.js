import axios from "axios";

export default function handler(req, res) {
const data = axios.get('https://jsonplaceholder.typicode.com/users')

  req.method === "GET"
    ? res.status(200).json(data)
    : res.status(405).json(`Method ${req.method} Not Allowed`);
}
