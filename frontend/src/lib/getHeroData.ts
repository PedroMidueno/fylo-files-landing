import { strapiClient } from "./strapi"

export type HeroData = {
  heroTitle: string
  heroDescription: string
  ctaText: string
}

export const getHeroData = async ({ scope }: { scope: 'draft' | 'published' }): Promise<HeroData> => {
  const { data } = await strapiClient.single('hero-page').find({
    status: scope,
    fields: ['Titulo', 'Descripcion', 'TextoCTA']
  })

  return {
    heroTitle: data.Titulo,
    heroDescription: data.Descripcion,
    ctaText: data.TextoCTA
  }
}
