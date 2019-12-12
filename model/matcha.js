require('dotenv').config()

const mongoose = require('mongoose')

const model = mongoose.model(process.env.DB_DATABASE, {
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
});

module.exports = model;

