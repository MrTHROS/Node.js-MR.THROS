import express from 'express';
import chalk from 'chalk';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(chalk.green(`Listening on port ${port}`));
});