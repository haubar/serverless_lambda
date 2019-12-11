
require('dotenv').config()
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    //基本抓取資訊
    id: String,
    shortcode: String,
    timestamp: String,
    display_url: String,
    thumbnail_src: String,
    owner_id: String,
    location_id: String,
    location_name: String,
    lat: String,
    lng: String,
    address: JSON,
    //添加輔助資料
    tag: String,
    sort: Number,
    enable: Boolean,
    on_place: Boolean,
    created_date: String
})
mongoose.connect( process.env.DB_HOST ,{useNewUrlParser:true, useFindAndModify: false, useCreateIndex: true})

const model = mongoose.model(process.env.DB_DATABASE, schema)

module.exports = model;








