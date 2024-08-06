const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const xemayRoute = require('./routes/xemayRoute')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect('mongodb://0.0.0.0:27017/AND103')
.then(()=>{
    console.log('kết nối thành công');
})
.catch((err)=>{
    console.log('Lỗi'+err);
});

app.use('/xemay',xemayRoute);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log('server dang chay cong 3000');
})