const express = require('express');
const path = require('path')
const port = 4200;
const app = express();

/*
    * "dist" folder contains angular project
    * in this case it is "eden-farms"
    * it can be any angular project and the folder name can be changed according to the project name
*/
app.use(express.static('./dist/eden-farms'))
/*
    * node uses different templates for rendering html files
    * here, we have used pug for example
    * it is not at all required, but node requires template for rendering html files
    * we just need any template engine just for mentioning the node to understand
    * but, we will render angular only
*/
app.set('view engine', 'pug');

/*
    * the "index" file in the build of angualr will be rendered in the root url
*/
app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname})
});

/*
    * any route will not be handled by node rather it will be handled by angular
    * so any route will redirect to the "index" and will be handled by angular
    * the below 2 functions does exactly that
*/
app.get('/', getRoot);
app.get('/*', getUndefined);

function getRoot(request, response) {
    response.sendFile(path.resolve('./dist/eden-farms/index.html'));
 }
 
 function getUndefined(request, response) {
    response.sendFile(path.resolve('./dist/eden-farms/index.html'));
 }


app.listen(port, () => {
    console.log("Server is listening on port "+port);
});