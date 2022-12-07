const { Router } = require("express");
const { route } = require("../app");
const router = Router();
const proCtrl = require("../controller/user.controller")

router.post("/registro", proCtrl.postRegistro);

router.post("/login", proCtrl.postLogin);

module.exports = router; 