import { strapiClient } from "./strapi"

export type Testimonial = {
  name: string
  position: string
  review: string
  avatarUrl: string
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const { data } = await strapiClient.collection('testimonials').find({
    sort: 'createdAt',
    fields: ['Nombre', 'Puesto', 'Resena'],
    populate: {
      Avatar: {
        fields: ['url']
      }
    }
  })

  if (!data) return []

  return data.map(testimonial => ({
    name: testimonial.Nombre,
    position: testimonial.Puesto,
    review: testimonial.Resena,
    avatarUrl: testimonial.Avatar.url
  }))
}
