import express from "express";

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
//Informa que o express deve converter automaticamente 
//  o corpo requisições e respostas para JSON
app.use(express.json())

//Lista de objetos que simula o nosso BD
const livros = [
  {id: 1, "titulo": "Senhor dos Aneis"},
  {id: 2, "titulo": "O Hobiit"}
]


app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
}) 

app.get('/livros', (req, res) => {
  res.render('index', {'livros':livros})
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
})
app.get('/livros/delete/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.render('index', {'livros':livros})
})
app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
})


function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}

export default app