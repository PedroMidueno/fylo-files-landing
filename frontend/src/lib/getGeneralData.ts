import { strapiClient } from "./strapi"

export type GeneralData = {
  siteUrl: string
  siteTitle: string
  siteDescription: string
  siteDomain: string
  logoUrl: string
  ogImageUrl: string
  faviconUrl: string
}

export const getGeneralData = async (): Promise<GeneralData> => {
  const { data } = await strapiClient.single('general').find({
    fields: ['Titulo', 'Descripcion', 'Url'],
    populate: {
      Logo: {
        fields: ['url']
      },
      OgImage: {
        fields: ['url']
      },
      FavIcon: {
        fields: ['url']
      }
    }
  })

  const siteDomain = data.Url?.split('https://')?.[1]

  return {
    siteTitle: data.Titulo,
    siteDescription: data.Descripcion,
    siteUrl: data.Url,
    siteDomain,
    logoUrl: data.Logo.url,
    ogImageUrl: data.OgImage.url,
    faviconUrl: data.FavIcon.url
  }
}
