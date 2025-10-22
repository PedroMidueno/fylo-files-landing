import { strapiClient } from "./strapi"

export type ProductiveData = {
  title: string
  firstParagraph: string
  secondParagraph: string
  ctaText: string
  imageUrl: string
}

export const getProductiveData = async (): Promise<ProductiveData> => {
  const { data } = await strapiClient.single('productivo').find({
    fields: ['Titulo', 'Parrafo1', 'Parrafo2', 'TextoCTA'],
    populate: {
      Imagen: {
        fields: ['url']
      }
    }
  })

  return {
    title: data.Titulo,
    firstParagraph: data.Parrafo1,
    secondParagraph: data.Parrafo2,
    ctaText: data.TextoCTA,
    imageUrl: data.Imagen.url
  }
}
