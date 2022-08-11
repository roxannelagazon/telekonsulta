const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    feePerCunsultation: {
      type: Number,
      required: true,
    },
    timings : {
      type: Array,
      required: true,
    },
    days : {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
