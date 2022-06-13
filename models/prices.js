import mongoose, { Schema } from "mongoose";

const priceSchema = new Schema({
  psand: {
    type: Number,
    default: 3200,
  },
  msand: {
    type: Number,
    default: 3100,
  },
  halfJally: {
    type: Number,
    default: 1300,
  },
  oneHalfJally: {
    type: Number,
    default: 1400,
  },
  threebyfourJally: {
    type: Number,
    default: 1500,
  },
  powder: {
    type: Number,
    default: 900,
  },
  chips: {
    type: Number,
    default: 1200,
  },
});

export default mongoose.models.Price || mongoose.model("Price", priceSchema);
