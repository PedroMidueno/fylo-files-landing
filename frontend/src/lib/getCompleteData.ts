import { STRAPI_PREVIEW } from 'astro:env/server'

import { getEmailBoxData } from "./getEmailBoxData"
import { getFeatures } from "./getFeatures"
import { getFooterData } from "./getFooterData"
import { getGeneralData } from "./getGeneralData"
import { getHeroData } from "./getHeroData"
import { getProductiveData } from "./getProductiveData"
import { getTestimonials } from "./getTestimonials"

const isPreview: boolean = STRAPI_PREVIEW

export const getCompleteData = async () => {
  const [generalData, heroData, features, productive, testimonials, emailBoxData, footerData] = await Promise.all([
    getGeneralData({ scope: isPreview ? 'draft' : 'published' }),
    getHeroData({ scope: isPreview ? 'draft' : 'published' }),
    getFeatures({ scope: isPreview ? 'draft' : 'published' }),
    getProductiveData({ scope: isPreview ? 'draft' : 'published' }),
    getTestimonials({ scope: isPreview ? 'draft' : 'published' }),
    getEmailBoxData({ scope: isPreview ? 'draft' : 'published' }),
    getFooterData({ scope: isPreview ? 'draft' : 'published' })
  ])

  return {
    generalData,
    heroData,
    features,
    productive,
    testimonials,
    emailBoxData,
    footerData
  }
}
