const checkListRouter = require('./src/routes/checklist')
const express = require('express');

const app = express();
app.use(express.json());

app.use('/checklists', checkListRouter); //checklists entra como parametro para busca da rota. só entrarão rotas que estiverem precedidas do nome checklists



/* const log = (req, res, next) => {
    console.log(req.body)
    console.log(`Data: ${Date.now()}`)
    next();
}

app.use(log);

app.get('/', (req, res) => {
    res.send('<h1>Minha Lista de tarefas :)</h1>');
})

app.get('/json', (req, res) => {
    console.log(req.body)
    const {title, done} = {title: 'Tarefa X', done: true};
    res.json({title, done});
}) */


app.listen(3000, () => {
    console.log('listening on port 3000');
})