const mongoose = require('mongoose');
const xemaySchema = new mongoose.Schema({
    ten_xe:{
        type:String,
        require:true
    },
    mau_sac:{
        type:String,
        require:true
    },
    gia_ban:{
        type:Number,
        default:0,
        require:true
    },
    mo_ta:{
        type:String,
    },
    hinh_anh:{
        type:String,
    }
})
const xemay = mongoose.model('xemays',xemaySchema);
module.exports = xemay ;