import { getEmailBoxData } from "./getEmailBoxData"
import { getFeatures } from "./getFeatures"
import { getFooterData } from "./getFooterData"
import { getGeneralData } from "./getGeneralData"
import { getHeroData } from "./getHeroData"
import { getProductiveData } from "./getProductiveData"
import { getTestimonials } from "./getTestimonials"

export const getCompleteData = async () => {
  const [generalData, heroData, features, productive, testimonials, emailBoxData, footerData] = await Promise.all([
    getGeneralData(),
    getHeroData(),
    getFeatures(),
    getProductiveData(),
    getTestimonials(),
    getEmailBoxData(),
    getFooterData()
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
