import { strapiClient } from "./strapi"

export type Feature = {
  name: string
  description: string
  imageUrl: string
}

export const getFeatures = async (): Promise<Feature[]> => {
  const { data } = await strapiClient.collection('features').find({
    sort: 'createdAt',
    fields: ['Nombre', 'Descripcion'],
    populate: {
      Imagen: {
        fields: ['url']
      }
    },
  })

  if (!data) return []

  return data.map(feature => ({
    name: feature.Nombre,
    description: feature.Descripcion,
    imageUrl: feature.Imagen.url
  }))
}