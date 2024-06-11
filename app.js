const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:subpage', (req, res) => {
  const subpage = req.params.subpage
  res.render('show', { subpage: subpage })
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})