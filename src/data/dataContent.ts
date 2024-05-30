import eggImage from '../assets/mobile/image-transform.jpg'
import eggImageDesktop from '../assets/desktop/image-transform.jpg'
import cupImage from '../assets/mobile/image-stand-out.jpg'
import cupImageDesktop from '../assets/desktop/image-stand-out.jpg'
import cherryImage from '../assets/mobile/image-graphic-design.jpg'
import cherryImageDesktop from '../assets/desktop/image-graphic-design.jpg'
import orangeImage from '../assets/mobile/image-photography.jpg'
import orangeImageDesktop from '../assets/desktop/image-photography.jpg'

interface imageContent {
    imgSrc: string,
    imgSrcDesktop?: string,
    imgAlt?: string,
}
interface textContent {
    title: string,
    text: string,
    color?: string,
}
interface textImageContent extends imageContent, textContent {}

export const imageContent:imageContent[] = [
    {
        imgSrc: eggImage,
        imgSrcDesktop: eggImageDesktop,
        imgAlt: "An Egg in a yellow background"
    },
    {
        imgSrc: cupImage,
        imgSrcDesktop: cupImageDesktop,
        imgAlt: "A pink glass in a pink background"
    }
]

export const textContent:textContent[] = [
    {
        title: "Transform your brand",
        text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        color: "soft-yellow"
    },
    {
        title: "Stand out to the right audience",
        text: "Using a collaborative formula of designers, researchers, photographers, videographer, and copywriters, we'll build and extend your brand in digital places.",
        color: "soft-red"
    }
]

export const textImageContent:textImageContent[] = [
    {
        imgSrc: cherryImage,
        imgSrcDesktop: cherryImageDesktop,
        imgAlt: "Two Cherries",
        title: "Graphic Design",
        text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention",
    },
    {
        imgSrc: orangeImage,
        imgSrcDesktop: orangeImageDesktop,
        imgAlt: "A Orange fruit",
        title: "Photography",
        text: "Increase your credibility by getting the most stunning high-quality photos that improve your business image",
    }
]