export default function middleware(req) {
  console.log(req.url == process.env.ROOT_PATH ? "/" : "not");
}