import mongoose from 'mongoose';

const ModeloSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      enum: ['masculino', 'feminino'],
      required: true
    },
    category: {
      type: [String],
      required: true
    },
    hidden: {
      type: Boolean,
      default: false,
      required: true
    },
    photos: [{ url: String }],
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

export default mongoose.model('Modelo', ModeloSchema);
