const {auth} = require("../middleware/auth");
const router = require('express').Router();
const {update} = require("../controllers/userController");
const {validate} = require("../validators");
const {rules: userUpdateRules} = require('../validators/user/update')
const {userFile} = require("../middleware/fileUpload");

router.post('/update', [auth, userFile, userUpdateRules, validate], update)

module.exports = router;
