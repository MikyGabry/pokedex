const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override');
const pokemons = require('./pokemon')
// console.log(pokemons)

app.set('view engine', 'ejs');
app.set(methodOverride('_method'));




app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemons})
})

app.get('pokemon/new', (req, res) => {
    res.render('new.ejs')
})

app.get('pokemon/:id', (req, res) => {
    res.render('show.ejs')
})

app.get('pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs')
})

app.post('pokemon', (req, res) => {
    res.redirect('/pokemon')
})

app.put('pokemon/:id', (req, res) => {
    res.redirect(`/pokemon/${req.params.id}`)
})

app.get('pokemon/:id/destroy', (req, res) => {
    res.render('destroy.ejs')
})

app.delete('pokemon/:id', (req, res) => {
    res.redirect('/pokemon')
})



app.listen(PORT, () => {
    console.log(`🔥 Server is listening to PORT ${PORT} 🌊`)
})