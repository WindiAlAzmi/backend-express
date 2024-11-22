const Transaction = require("../models/Transaction");

module.exports = {
  getAllTransaction: async (req, res) => {
    try {
      const data = await Transaction.find({});

      if (data.length <= 0) {
        return res.status(200).json({
          message: "Tidak ada data transaksi",
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
  getTransactionById: async (req, res) => {
    try {
      const { id } = req.params;
      const getDataById = await Transaction.findById(id).exec();

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
  addTransaction: async (req, res) => {
    try {
      const data = req.body;
      const newData = await new Transaction(data);
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
  editTransactionById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      data.updatedAt = Date.now();
      const updateDataById = await Transaction.findByIdAndUpdate(id, data, {
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
  deletedTransactionById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedData = await Transaction.findByIdAndDelete(id);

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
  deletedAllTransaction: async (req, res) => {
    try {
      await Transaction.deleteMany({});

      return res.status(200).json({
        message: "semua berhasil dihapus",
      });
    } catch (err) {
      

      return res.status(500).json({
        message: "Terjadi kesalahan",
        error: err.message,
      });
    }
  },
};
