const Brand = require("../models/Brand");

module.exports = {
  getAllBrand: async (req, res) => {
    try {
      const data = await Brand.find({});

      if (data?.length <= 0) {
        return res.status(200).json({
          message: "Tidak ada data brand",
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
  getBrandById: async (req, res) => {
    try {
      const { id } = req.params;
      const getDataById = await Brand.findById(id).exec();

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
  addBrand: async (req, res) => {
    try {
      const data = req.body;
      const newData = new Brand(data);

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
  editBrandById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      data.updatedAt = Date.now();
      const updateDataById = await Brand.findByIdAndUpdate(id, data, {
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
  deletedBrandById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedData = await Brand.findByIdAndDelete(id);

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
  deletedAllBrand: async (req, res) => {
    try {
      await Brand.deleteMany({});

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
