const express = require('express');
const { route } = require('./routes/tasks');
const app = express();
const tasks = require('./routes/tasks');

// middleware

app.use(express.json())



//routes
app.get('/hello', (req, res)=>{
	res.send('Gerenciador de senha App')
});

app.use('/api/v1/tasks', tasks)


//rotas da api
//app.get('/api/v1/tasks') -pega todas as tasks
//app.post('/api/v1/tasks') -cria uma nova tasks
//app.get('/api/v1/tasks/:id') -pega uma unica tasks
//app.patch('/api/v1/tasks/:id') -atualiza tasks
//app.delete('/api/v1/tasks/:id') -deleta tasks




// Port and listen
const port = 3000
app.listen(port, console.log(`App escultando na porta ${port}`));

