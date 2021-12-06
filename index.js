const express = require("express");
const bodyparser = require("body-parser");
const { pool } = require("./connection");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

pool.getConnection((err) => {
  if (err) throw err;
  console.log("DB connected");
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.post(`/registration`, (req, res) => {
  console.info(req.body);
  const { fname, lname, pass, cpass, phone, email } = req.body;
  if (pass !== cpass) {
    res.end("/Passwords not matching creteria");
  } else {
    let sql = `INSERT INTO farmers (firstname,lastname,email,phone,pass) VALUES('${fname}','${lname}','${email}','${phone}','${pass}');`;
    pool.query(sql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  }
});

app.post(`/logindetails`, (req, res) => {
  console.info(req.body);
  const { username, pass } = req.body;
  let sql = `SELECT EXISTS(SELECT * FROM farmers WHERE email='${username}' AND pass='${pass}') AS available;`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    let response = {};
    if (result[0].available) {
      console.log("User available");
      response.available = result[0].available;
      pool.query(
        `SELECT * FROM farmers WHERE email='${username}' AND pass='${pass}';`,
        (err, result) => {
          response = {
            ...response,
            ...result[0],
          };
          console.log(response);
          res.json(response);
        }
      );
    } else {
      console.log("User Unavailable");
      response.available = 0;
      console.log(response);
      res.json(response);
    }
  });
});

//query request
app.post(`/query`, upload.single("imageAttached"), (req, res) => {
  console.log(req.body.topic); //insert the details to the database
  if (req.file === undefined) {
    imageFile = null;
  } else {
    imageFile = req.file.filename;
  }
  const { userId, topic, question } = req.body;
  let sql = `INSERT INTO questions (userId,topic,question,imageUrl) VALUES(${userId},'${topic}','${question}','${imageFile}');`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.end("success");
  });
});
app.post(`/solution`, upload.single("imageAttached"), (req, res) => {
  console.log(req.body.topic); //insert the details to the database
  let imageFile;
  if (req.file === undefined) {
    imageFile = null;
  } else {
    imageFile = req.file.filename;
  }
  const { userId, questionId, solution } = req.body;
  let sql = `INSERT INTO responses (userId,questionId,response,imageUrl) VALUES(${userId},${questionId},'${solution}','${imageFile}');`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.end("success");
  });
});

app.get(`/myqueries/:id`, (req, res) => {
  console.log("myquery requests " + req.params.id);
  let sql = `SELECT * FROM questions WHERE userId=${req.params.id};`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get(`/search/:searchKey`, (req, res) => {
  console.log("myquery requests " + req.params.searchKey);
  let sql = `SELECT * FROM questions WHERE question LIKE '%${req.params.searchKey}%' OR topic LIKE '%${req.params.searchKey}%';`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//gets all responses that match the parameter id
app.get(`/responses/:id`, (req, res) => {
  console.log("response for myqueries " + req.params.id);
  let sql = `SELECT * FROM responses WHERE questionId =${req.params.id};`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//gets images
app.get(`/image/:imagename(*)`, (req, res) => {
  console.log("response for query " + req.params.imagename);
  res.sendFile(__dirname + `/images/${req.params.imagename}`);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening to port ${port}`);
});
