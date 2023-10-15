import {ReactNode} from 'react'

export type Navlink = {
    title: string
    icon?:string | string[] | ReactNode
    path?: string
}

export type Hotel = {
      "id": string
      "url": string
      "deeplink": string
      "position": number
      "name": string
      "bathrooms": number
      "bedrooms": number
      "beds": number
      "city": string
      "images": string[]
      "hostThumbnail": string
      "isSuperhost": boolean
      "rareFind": boolean
      "lat": number
      "lng": number
      "persons": number
      "reviewsCount": number
      "rating": number
      "type": string
      "userId": number
      "address": string
      "amenityIds": number[]
      "previewAmenities": string[]
      "cancelPolicy": string
      "price": {
        "rate": number
        "currency": string
        "total": number
        "priceItems": [
          {
            "amount": number
          },
          {
            "amount": number
          }
        ]
      }
    }

export interface HotelPropsCard {
  key: number
  name : string
  city : string
  hostThumbnail : string
  address : string
  images : string[]
}