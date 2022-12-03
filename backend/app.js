const express = require('express')
const app = express()
const cors = require(`cors`);
const { getConnection } = require(`./connection`)
const bodyParser = require('body-parser');
const { loginHandler } = require('./handler');
const cookieParser = require('cookie-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors({
  origin: "http://localhost:3000",
  credential: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))

app.use(cookieParser())
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/api/login', loginHandler)

app.get('/api/usersList', async function (req, res) {
  const getconn = await getConnection();
  const result = await getconn.query(
    "select * from useraccount order by username Asc"
  );
  res.send(result.recordsets[0])

})
app.get('/api/musicList', async function (req, res) {
  const getconn = await getConnection();
  const result = await getconn.query(
    "select * from music"
  );
  res.send(result.recordsets[0])

})
//testing sort button 
app.get('/api/sort', async function (req, res) {
  const getconn = await getConnection();
  const result = await getconn.query(
    "select * from useraccount order by username Asc"
  );
  res.send(result.recordsets[0])

})
//eo testing

app.get('/api/usersList/:userid', async function (req, res) {

  try {
    const { userid } = req.params;
    const getconn = await getConnection();
    const result = await getconn.query(
      `select * from useraccount where userid=${userid}`
    );
    res.send(result.recordsets[0])
    console.log({ userid })
  }
  catch (err) {
    console.log(err.message);
  }

})

app.put('/api/updateUser', async function (req, res) {
  try {
    const { userid, username, password } = req.body;

    const getconn = await getConnection();
    const result = await getconn.query(
      `update useraccount 
      set username='${username}', password='${password}'
       where userid=${userid}`
    );
    res.send('success');
  }

  catch (err) {
    console.log(err.message);
    res.send('')
  }
})
//testing drop user here
app.delete('/api/deleteUser/:userid', async function (req, res) {
  try {
    const { userid } = req.params;
    const getconn = await getConnection();
    const result = await getconn.query(
      `delete from useraccount 
      where userid=${userid}`
    );
    res.send('');
  }

  catch (err) {
    console.log(err.message);
    res.send('')
  }
})
//testing complete
app.post('/api/createUser', async function (req, res) {
  try {
    const { username, password } = req.body;
    console.log(req.body, 'body')
    const getconn = await getConnection();
    const result = await getconn.query(
      `insert into useraccount(username, password) values ('${username}','${password}')`
    );
    res.send(result.recordsets[0])
  }

  catch (err) {
    console.log(err.message);
    res.send('')
  }
})


app.listen(process.env.port, () => {
  console.log(`node is running on ${process.env.port}`)
})