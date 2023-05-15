//Importar módulos
const express = require('express')
const app = express()
const path = require('path') //Rutas
const hbs = require('hbs')

const puerto = 8082

//Servidor de contenido estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname + '/public/views'))
app.set('view engine', 'hbs') //Motor de plantilla

//Configuración del directorio que guardará los archivos partial hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/login', (req, res) => {
    res.render('login', {
        titulo: 'Login',
        nombre: 'Inicio de sesión'
    })
    //res.write('home')
    //res.end()
})

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Home',
        nombre: 'Camilo Perez'
    })
    //res.write('home')
    //res.end()
})

app.get('/clientes', (req, res) => {
    res.render('clientes', {
        titulo: 'Clientes',
        nombre: 'Clientes'
    })
    //res.write('home')
    //res.end()
})

app.get('/formClientes', (req, res) => {
    res.render('formClientes', {
        titulo: 'Nuevo cliente',
        nombre: 'Registrar cliente'
    })
    //res.write('home')
    //res.end()
})

app.get('/ventas', (req, res) => {
    res.render('ventas', {
        titulo: 'Ventas',
        nombre: 'Ventas'
    })
    //res.write('home')
    //res.end()
})

app.get('/formVentas', (req, res)=>{
    res.render('formVentas',{
        titulo: 'Nueva venta',
        nombre: 'Registrar venta'
    })
    //res.write('home')
    //res.end()
})

app.get('/productos', (req, res) => {
    res.render('productos', {
        titulo: 'Productos',
        nombre: 'Productos'
    })
    //res.write('home')
    //res.end()
})

app.get('/formProductos', (req, res) => {
    res.render('formProductos', {
        titulo: 'Nuevo Producto',
        nombre: 'Registrar Producto'
    })
    //res.write('home')
    //res.end()
})

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})