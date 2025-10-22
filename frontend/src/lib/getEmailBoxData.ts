import { strapiClient } from "./strapi"

export type EmailBoxData = {
  title: string
  paragraph: string
  ctaText: string
}

export const getEmailBoxData = async (): Promise<EmailBoxData> => {
  const { data } = await strapiClient.single('email-box').find({
    fields: ['Titulo', 'Parrafo', 'TextoCTA']
  })
  return {
    title: data.Titulo,
    paragraph: data.Parrafo,
    ctaText: data.TextoCTA
  }
}
