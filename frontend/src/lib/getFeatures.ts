import { strapiClient } from "./strapi"

export type Feature = {
  name: string
  description: string
  imageUrl: string
}

export const getFeatures = async ({ scope }: { scope: 'draft' | 'published' }): Promise<Feature[]> => {
  const { data } = await strapiClient.collection('features').find({
    status: scope,
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