const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  pricePerDay: {
    type: Number,
    required: [true, 'Price per day is required'],
    min: [0, 'Price cannot be negative']
  },
  size: {
    type: String,
    required: true,
    enum: ['S', 'M', 'L', 'XL']
  },
  category: {
    type: String,
    required: true,
    enum: ['Casual', 'Formal', 'Party', 'Traditional']
  },
  availability: {
    type: Boolean,
    default: true
  },
  images: {
    type: [String],
    default: []
  },
  rentalPeriod: {
    startDate: Date,
    endDate: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);