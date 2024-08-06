const express = require('express');
const router = express.Router();
const xemay = require('../models/xemayModel');

// lấy danh sách product
router.get('/', async (req, res) => {
    try {
        const xemays = await xemay.find(); // đọc dữ liệu
        res.json(xemays);
        // res.render('sinhviens',{sinhviens: sinhviens});
        console.log(xemays);
    } catch (error) {
        console.log(error); // trả về lỗi
        res.status(500).json({ error: 'Internel Server Error' })
    }
});
// lấy chi tiết 1 product
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await xemay.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy thông tin sản phẩm', error: error.message });
    }
});
// thêm mới  
router.post('/', async (req, res) => {
    try {
        const { ten_xe, mau_sac, gia_ban, mo_ta, hinh_anh } = req.body;
        const xemay1 = new xemay({ ten_xe, mau_sac, gia_ban, mo_ta, hinh_anh });
        await xemay1.save()
        res.status(201).json(xemay1);
    } catch (error) {
        console.log(error);
    }
})

// định nghĩa update
router.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const { ten_xe, mau_sac, gia_ban, mo_ta, hinh_anh } = req.body;
        const updateSinhvien = await xemay.findByIdAndUpdate(_id, { ten_xe, mau_sac, gia_ban, mo_ta, hinh_anh }, { new: true });
        res.json(updateSinhvien);
    } catch (error) {
        console.log(error);
    }
})
// dịnh nghĩa Delete
router.delete('/:_id', async (req, res) => {
    const { _id } = req.params; // lấy id do người dùng nhập
    try {
        await xemay.findByIdAndDelete(_id) // thực hiện xóa 
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;