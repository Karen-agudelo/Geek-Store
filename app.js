const express = require ('express');

const path = require('path');

const app = express ();

app.use(express.static('./public'));

app.listen(3000, () => console.log ('servidor corriendo en el puerto 3000'));

app.get('/', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/home.html'))
});

app.get('/productos.html', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/productos.html'))
});

app.get('/contacto.3tml', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/contacto.html'))
});

app.get('/ofertas.html', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/ofertas.html'))
});

app.get('/nosotros.html', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/nosotros.html'))
});

 

