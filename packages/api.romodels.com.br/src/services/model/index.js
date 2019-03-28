import { CastModel } from '../../db/models';

export default {
  createModel: async data => {
    try {
      console.log('data', data);

      if (data.sex === 'male') {
        const maleCast = new CastModel({
          name: {
            first_name: data.first_name,
            last_name: data.last_name,
            full_name: data.first_name + ' ' + data.last_name
          },
          sex: data.sex,
          category: data.category,
          photos: {
            gallery: data.files
          },
          medidas: {
            altura: data.model_height,
            torax: data.model_torax,
            terno: data.model_terno,
            manequim: data.model_manequim,
            sapatos: data.model_shoe_size,
            olhos: data.model_eye_color,
            cabelos: data.model_hair_color
          }
        });

        const payload = await maleCast.save();

        return payload;
      } else {
        const femaleCast = new CastModel({
          name: {
            first_name: data.first_name,
            last_name: data.last_name,
            full_name: data.first_name + ' ' + data.last_name
          },
          sex: data.sex,
          category: data.category,
          photos: {
            gallery: data.files
          },
          medidas: {
            altura: data.model_height,
            busto: data.model_busto,
            cintura: data.model_cintura,
            quadril: data.model_quadril,
            manequim: data.model_manequim,
            sapatos: data.model_shoe_size,
            olhos: data.model_eye_color,
            cabelos: data.model_hair_color
          }
        });

        const payload = await femaleCast.save();

        return payload;
      }
    } catch (error) {
      throw error;
    }
  }
};
