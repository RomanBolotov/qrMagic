const express = require('express') //Подключаем библиотеку
const nanoId = require('nano-id')
const app = express() //Создаём объект сервера
const port = 3000 //Указываем порт, на котором будет работать сервер

app.get('/getticket', (req, res) => {
    let newTicket = nanoId(50);
    answer = JSON.stringify({
        'ticket': newTicket,
        'status': 200
    })

    res.send(answer)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})