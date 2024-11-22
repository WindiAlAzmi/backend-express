const mongoose = require("mongoose");
const Transaction = require("../models/Transaction");
const User = require("../models/User");
const Voucher = require("../models/Voucher");

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
      const getDataById = await Transaction.findById(id)
        .populate("userId")
        .populate("vouchers")
        .exec();

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

      //check if there is user in db ?
      if (!mongoose.Types.ObjectId.isValid(data.userId)) {
        return res.status(400).json({
          message: "Invalid Id brand",
        });
      }

      const isUser = await User.findById(data.userId).exec();
      if (isUser === null) {
        return res.status(403).json({
          message: "tidak ada data user di db, silahkan buat dlu!",
        });
      }

      //check if there are vouchers in db ?
      let dataVouchers = [];
      if (data?.vouchers?.length !== 0) {
        for (const item of data?.vouchers) {
          if (!mongoose.Types.ObjectId.isValid(item)) {
            return res.status(400).json({
              message: "Invalid Id Voucher" + " " + item,
            });
          }

          const isVoucher = await Voucher.findById(item).exec();
          if (isVoucher === null) {
            return res.status(403).json({
              message: "tidak ada data voucher" + " " + item,
            });
          }
          dataVouchers.push(isVoucher);
        }
      }

      let totalCostInPoint = 0;
      const getPointsFromVoucher = dataVouchers
        ?.map((item) => parseInt(item.costInPoints.replace(/,/g, "")))
        .reduce((acc, curr) => acc + curr, 0)
        .toLocaleString();

      if (data?.vouchers?.length === 1) {
        totalCostInPoint = (
          data?.quantity *
          dataVouchers?.map((item) =>
            parseInt(item.costInPoints.replace(/,/g, ""))
          )
        ).toLocaleString();
      } else {
        totalCostInPoint = getPointsFromVoucher;
      }

      //Check if the user has enough points to redeem the voucher
      const newData = await new Transaction(data);
      newData.totalCost = totalCostInPoint;

      if (parseInt(isUser.points) === 0) {
        newData.status = "failed";
      } else {
        const reducePoints = parseInt(totalCostInPoint.replace(/,/g, ""));
        const userPoints = parseInt(isUser.points.replace(/,/g, ""));
        const calculate = (userPoints - reducePoints).toLocaleString();

        //update data user
        await User.findByIdAndUpdate(data.userId, {
          points: calculate,
        });

        newData.status = "success";
      }

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
