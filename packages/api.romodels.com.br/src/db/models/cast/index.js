import mongoose from 'mongoose';

const CastSchema = mongoose.Schema(
  {
    name: {
      first_name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: true
      },
      full_name: {
        type: String,
        required: true
      }
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      required: true
    },
    category: {
      type: [String],
      required: true
    },
    hidden: {
      type: Boolean,
      default: false
    },
    photos: {
      gallery: [{ url: String }]
    },
    medidas: {
      altura: {
        type: String
      },
      busto: {
        type: String
      },
      cintura: {
        type: String
      },
      quadril: {
        type: String
      },
      torax: {
        type: String
      },
      terno: {
        type: String
      },
      manequim: {
        type: String
      },
      sapatos: {
        type: String
      },
      olhos: {
        type: String
      },
      cabelos: {
        type: String
      }
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Cast', CastSchema);
