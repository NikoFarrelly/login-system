import express from 'express';
import mysql from 'mysql';

const port = 4000;
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    database: 'login_system_db',
    insecureAuth: true
})
connection.connect();
connection.query("SELECT * FROM users", (req, res) => console.log(res));
// const query = async () => connection.query("SELECT * FROM users");
// (async () => {
//     query().then(res => console.log('query res:', res));
// })();

// connection.query("DELETE FROM users WHERE username='a'", (req,res) => console.log(res));
app.use(express.urlencoded());
app.use(express.json());

const FailureScenario = (res) => {
    res.status(500);
    res.end()
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/', (req, res) => {
    res.send("Yoza!")
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const authUser = await authenticateUser(username, password);
    const isValid = !!username && !!password && authUser;
    if (isValid) {

        res.status(200)
        res.end(JSON.stringify({success: true}));
    }
    res.status(500);
    res.end(JSON.stringify({success: false}))
})

app.post('/createAccount', async (req, res) => {
    const {username, password} = req.body;
    const user = {username, password};
    await writeUserToDB(user).then(result => {
        if (result) {
            res.status(200)
            res.end();
        }
        FailureScenario(res)
    }).catch(error => {
        console.error('e:', error);
        FailureScenario(res);
    });
})

app.listen(port, () => {
    console.log(`we are listening at http://localhost:${port}`)
})

const writeNewUserToDB = (user) => new Promise((res, rej) =>
    connection.query('INSERT INTO users SET ?', user, (err, result) =>
        err ? rej(err) : res(result.affectedRows === 1)
    )
);

const checkUsernameExists = (username) =>
    new Promise((res, rej) =>
        connection.query('SELECT * FROM users WHERE username=?', [username], (err, result) =>
            err ? rej(err) : res(result.length === 0)
        )
    );

const writeUserToDB = async (user) => (await checkUsernameExists(user.username)) ? await writeNewUserToDB(user) : false;

const authenticateUser = (username, password) =>
    new Promise((res, rej) => connection.query("SELECT username, password FROM users WHERE username=? AND password=?", [username, password], (err, result) =>
            err ? rej(err) : res(result.length === 1)
        )
    );

