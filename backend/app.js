import express from 'express';

const port = 4000;
const app = express();

app.use(express.urlencoded());
app.use(express.json());

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

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    const isValid = !!username && !!password;
    if (isValid) {
        res.status(200)
        res.end();
    }
    res.status(500);
    res.end()
})

app.post('/createAccount', (req, res) => {
    const {username, password} = req.body;
    const isValid = !!username && !!password;
    if (isValid) {
        res.status(200)
        res.end();
    }
    res.status(500);
    res.end()
})

app.listen(port, () => {
    console.log(`we are listening at http://localhost:${port}`)
})

