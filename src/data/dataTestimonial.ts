import emilyProfileImage from '../assets/image-emily.jpg'
import thomasProfileImage from '../assets/image-thomas.jpg'
import jennieProfileImage from '../assets/image-jennie.jpg'

interface userTestimonialType {
    img: string,
    testimonial: string,
    name: string,
    job: string,
}

const usersTestimonials:userTestimonialType[] = [
    {
    img: emilyProfileImage,
    testimonial: "We put our trust in Sunnyside and they delivered, making sure our need were met and deadlines were always hit.",
    name: 'Emily R.',
    job: 'Marketing Director',
    },
    {
    img: thomasProfileImage,
    testimonial: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience",
    name: 'Thomas S.',
    job: 'Chief Operating Officer',
    },
    {
    img: jennieProfileImage,
    testimonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside, Highly recommended!",
    name: "Jennie F.",
    job: 'Business Owner',
    },
]

export default usersTestimonials