export type SpecsDataProps = {
  id: number
  paddingLeft?: string
  iconHref: string
  title: string
  subTitle: string
  anim: number
}

export const SpecsData: SpecsDataProps[] = [
  {
    id: 7649,
    paddingLeft: '24px',
    iconHref: 'icon1',
    title: 'Connection',
    subTitle: 'Bluetooth v5.2',
    anim: 0.8,
  },

  {
    id: 3593,
    iconHref: 'icon2',
    title: 'Battery',
    subTitle: 'Duration 40h',
    anim: 1.1,
  },

  {
    id: 8394,
    iconHref: 'icon3',
    title: 'Load',
    subTitle: 'Duration 40h',
    anim: 1.4,
  },

  {
    id: 4444,
    paddingLeft: '24px',
    iconHref: 'icon4',
    title: 'Microphone',
    subTitle: 'Supports Apple Siri and Google',
    anim: 1.7,
  },
]
