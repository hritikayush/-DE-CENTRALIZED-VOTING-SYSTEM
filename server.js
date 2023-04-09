const {createServer} = require('http');
const next = require('next');

const app = next({  //NODE_ENV is a global variable which checks whether is server is in production mode 
    dev : process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() =>{
    createServer(handler).listen(3000, err =>{
        if (err) throw err;
        console.log('Ready on local host: 3000');
    });
});