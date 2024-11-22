const mongoose = require("mongoose");
const Voucher = require("../models/Voucher");
const Brand = require("../models/Brand");

module.exports = {
  getAllVoucher: async (req, res) => {
    try {
      const data = await Voucher.find({}).populate('brandId').exec();

      if (data?.length <= 0) {
        return res.status(200).json({
          message: "Tidak ada data Voucher",
        });
      }

      return res.status(200).json({
        message: "Data berhasil ditemukan",
        data,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
  getAllVoucherByBrand: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Voucher.find({brandId: id}).exec();

      if (data?.length <= 0) {
        return res.status(200).json({
          message: "Tidak ada data Voucher by brand",
        });
      }

      return res.status(200).json({
        message: "Data berhasil ditemukan",
        data,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
  getVoucherById: async (req, res) => {
    try {
      const { id } = req.params;
      const getDataById = await Voucher.findById(id).populate('brandId').exec();

      if (!getDataById) {
        return res.status(404).json({
          message: "data tidak ditemukkan",
        });
      }

      return res.status(200).json({
        message: "data berhasil ditemukkan",
        data: getDataById,
      });

    } catch (err) {
      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
  addVoucher: async (req, res) => {
    try {
      const data = req.body;

      //check if is there that brand on db ? 
      if(!mongoose.Types.ObjectId.isValid(data.brandId)){
        return res.status(400).json({
          message: "Invalid Id brand",
        });
      }

      const isBrand = await Brand.findById(data.brandId).exec();
      if(isBrand === null){
         return res.status(403).json({
           message: "data brand belum dimasukkan",
         });
      }
      
      const newData = new Voucher(data);

      await newData.save();

      return res.status(201).json({
        message: "Data berhasil ditambahkan",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
  editVoucherById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      data.updatedAt = Date.now();
      const updateDataById = await Voucher.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!updateDataById) {
        return res.status(404).json({
          message: "Data tidak ditemukan",
        });
      }

      return res.status(200).json({
        message: "Data berhasil diubah",
        data: updateDataById,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
  deletedVoucherById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedData = await Voucher.findByIdAndDelete(id);

      if (!deletedData) {
        return res.status(404).json({
          message: "Data tidak ditemukan",
        });
      }

      return res.status(200).json({
        message: "Data berhasil dihapus",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
  deletedAllVoucher: async (req, res) => {
    try {
      await Voucher.deleteMany({});

      return res.status(200).json({
        message: "Semua data berhasil dihapus",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
};
