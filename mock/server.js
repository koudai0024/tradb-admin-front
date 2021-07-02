const jsonServer = require("json-server");
const server = jsonServer.create();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Realm"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  next();
});

server.use(
  "/api/users",
  jsonServer.router({
    "": require("./api/user"),
  })
);

if (module.parent === null) {
  var port = process.env.PORT || 4000;
  server.listen(port);
  console.log("port:" + port);
}

module.exports = server;
