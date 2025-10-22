import { strapiClient } from "./strapi"

export type HeroData = {
  heroTitle: string
  heroDescription: string
  ctaText: string
}

export const getHeroData = async (): Promise<HeroData> => {
  const { data } = await strapiClient.single('hero-page').find({
    fields: ['Titulo', 'Descripcion', 'TextoCTA']
  })

  return {
    heroTitle: data.Titulo,
    heroDescription: data.Descripcion,
    ctaText: data.TextoCTA
  }
}
