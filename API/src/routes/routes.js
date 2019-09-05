const { Router }= require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Inicio');
});

router.get('/nosotros', (req, res) => {
    res.send('nosotros')
})

module.exports = router;