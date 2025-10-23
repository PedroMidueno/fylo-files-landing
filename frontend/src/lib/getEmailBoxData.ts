import { strapiClient } from "./strapi"

export type EmailBoxData = {
  title: string
  paragraph: string
  ctaText: string
}

export const getEmailBoxData = async ({ scope }: { scope: 'draft' | 'published' }): Promise<EmailBoxData> => {
  const { data } = await strapiClient.single('email-box').find({
    status: scope,
    fields: ['Titulo', 'Parrafo', 'TextoCTA']
  })
  return {
    title: data.Titulo,
    paragraph: data.Parrafo,
    ctaText: data.TextoCTA
  }
}
