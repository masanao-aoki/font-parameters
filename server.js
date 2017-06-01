var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8888));

app.use(express.static(__dirname + '/root'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, 'root', 'index.html'))
})

app.listen(app.get('port'),function(){
	console.log(`Expressサーバーを起動しました。`);
});