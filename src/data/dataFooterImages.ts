// Mobile Top Image
import milkImage from '../assets/mobile/image-gallery-milkbottles.jpg'
import orangeImage from '../assets/mobile/image-gallery-orange.jpg'
import iceCreamConeImage from '../assets/mobile/image-gallery-cone.jpg'
import sugarCubeImage from '../assets/mobile/image-gallery-sugar-cubes.jpg'

// Desktop Top Image
import milkImageDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'
import orangeImageDesktop from '../assets/desktop/image-gallery-orange.jpg'
import iceCreamConeImageDesktop from '../assets/desktop/image-gallery-cone.jpg'
import sugarCubeImageDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'

// Social Media Icons
import iconFacebook from '../assets/icon-facebook.svg'
import iconInstagram from '../assets/icon-instagram.svg'
import iconTwitter from '../assets/icon-twitter.svg'
import iconPinterest from '../assets/icon-pinterest.svg'

type socialMediasIconsType = string[]

interface imagesType {
    src: string,
    srcDesktop: string,
    alt: string,
}

export const socialMediasIcons:socialMediasIconsType = [iconFacebook,iconInstagram,iconTwitter,iconPinterest]

export const imagesFooter:imagesType[] = [
    {
        src: milkImage,
        srcDesktop: milkImageDesktop,
        alt: "5 Milk bottles aligned with clouds on top of it"
    },
    {
        src: orangeImage,
        srcDesktop: orangeImageDesktop,
        alt: "An orange sliced in half, in a white plate"
    },
    {
        src: iceCreamConeImage,
        srcDesktop: iceCreamConeImageDesktop,
        alt: "An empty Ice cream cone"
    },
    {
        src: sugarCubeImage,
        srcDesktop: sugarCubeImageDesktop,
        alt: "A bunch of sugar cubes"
    },
]