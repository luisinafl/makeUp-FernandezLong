export interface BaseContent {
  brand: string,
  shade: string | number,
  price: number,
  image: string
}


export interface Foundation extends BaseContent {
  brand: string,
  shade: string | number,
  coverage: string,
  price: number,
  image: string
}


export const foundations: Foundation[] = [
  {
    brand: 'Maybelline FitMe',
    shade: 280,
    coverage: 'full',
    price: 23.95,
    image: '../../../assets/images/fit-me.jpg'
  },
  {
    brand: 'Loreal Infallible',
    shade: 'Golden beige',
    coverage: 'medium',
    price: 54,
    image: '../../../assets/images/infallible.jpg'
  }
]

interface Lipstick extends BaseContent {

  brand: string,
  shade: string,
  price: number,
  image: string

}


export const lipsticks: Lipstick[] = [
  {
    brand: 'Loreal Color Richie',
    shade: 'dark peach',
    price: 4.5,
    image: '../../../assets/images/color-richie.jpg'
  },
  {
    brand: 'Maybelline Super Stay',
    shade: 'Seductress',
    price: .45,
    image: '../../../assets/images/super-stay.jpg'
  }
]

export const products = [lipsticks, foundations]
