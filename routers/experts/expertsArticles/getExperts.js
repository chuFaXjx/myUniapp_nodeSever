const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取专家文章所有数据
router.get('/getExperts', (req, res) => {
        const selectMysqlExperts = 'select * from experts;'
        connection.query(selectMysqlExperts,(request, result) => {
        console.log(result);
        res.send({
            code:0,
            msg:'获取数据成功',
            data:result,
        })
        })
})
module.exports.router = router;