import { strapiClient } from "./strapi"

export type FooterData = {
  location: string
}

export const getFooterData = async (): Promise<FooterData> => {
  const { data } = await strapiClient.single('footer').find({
    fields: ['Ubicacion']
  })

  return {
    location: data.Ubicacion
  }
}
