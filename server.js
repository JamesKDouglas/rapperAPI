const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Sheya bin Abraham-Jinn',
        'birthLocation': 'London, England'
    },

    'Chance The Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },

    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase();
    //dot notation can't deal with the space we expect. So use brackets
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log('The server is doing the running.')
})