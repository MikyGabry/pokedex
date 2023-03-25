const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set(methodOverride('_method'));

app.get('/pokemon', (res, req) => {
    res.render('index.ejs')
})

app.get('pokemon/new', (res, req) => {
    res.render('new.ejs')
})

app.get('pokemon/:id', (res, req) => {
    res.render('show.ejs')
})

app.get('pokemon/:id/edit', (res, req) => {
    res.render('edit.ejs')
})

app.post('pokemon', (res, req) => {
    res.redirect('/pokemon')
})

app.put('pokemon/:id', (res, req) => {
    res.redirect(`/pokemon/${req.params.id}`)
})

app.get('pokemon/:id/destroy', (res, req) => {
    res.render('destroy.ejs')
})

app.delete('pokemon/:id', (res, req) => {
    res.redirect('/pokemon')
})



app.listen(PORT, () => {
    console.log(`🔥 Server is listening to PORT ${PORT} 🌊`)
})