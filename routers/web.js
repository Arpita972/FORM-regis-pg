const client = require("../connection.js");
client.connect();
const cors = require("cors");


const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(cors())



//get all users
router.get("/users",(req, res) => {
  client.query(`Select * from users`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});




router.post("/userinsert", async (req, res) => {
  const user = req.body;
  console.log(user);

  let hashedpwd = await hashPassword(user.upassword)
  console.log(hashedpwd)
  let insertQuery = `insert into users(uname, upassword,gender,about) 
                       values('${user.uname}', '${hashedpwd}','${user.gender}','${user.about}')`;
                       console.log(insertQuery);

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.json("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});



 async function hashPassword(plaintextPassword) {
  const hash =  await bcrypt.hash(plaintextPassword, 10); // Store hash in the database
  return hash
}







module.exports = router;
