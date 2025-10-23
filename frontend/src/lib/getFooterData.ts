import { strapiClient } from "./strapi"

export type FooterData = {
  location: string
}

export const getFooterData = async ({ scope }: { scope: 'draft' | 'published' }): Promise<FooterData> => {
  const { data } = await strapiClient.single('footer').find({
    status: scope,
    fields: ['Ubicacion']
  })

  return {
    location: data.Ubicacion
  }
}
