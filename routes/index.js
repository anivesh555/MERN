
const routes = require("express").Router()
const {login , auth } = require("./../controller/mainContainer")
const stre = require("./../controller/bufferStreams")
const child = require("./../controller/childProcess")
const { thisFunc } = require("../controller/this")
routes.get("/login",login)
routes.get("/auth",auth)

// streams
routes.get("/read",stre.read)
routes.get("/write",stre.write)

// child process
routes.get("/exec",child.execProc)
routes.get("/fork",child.forkProc)
routes.get("/spawn",child.spawnProc)

// sockets


// this
routes.get('/this',thisFunc )




module.exports = routes;