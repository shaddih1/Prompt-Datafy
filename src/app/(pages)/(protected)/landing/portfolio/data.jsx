


//images
import projectImg1 from '@/assets/images/features/agency1.jpg'
import projectImg2 from '@/assets/images/features/agency2.jpg'

import amazon from '@/assets/images/brands/amazon.svg'
import google from '@/assets/images/brands/google.svg'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-red-500"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z"
            id="Combined-Shape"
            fill="currentcolor"
            opacity="0.3"
          />
          <circle id="Oval-14" fill="currentcolor" cx={12} cy={9} r={5} />
        </g>
      </svg>
    ),
    title: 'UI/UX Design',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-red-500"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z"
            id="Combined-Shape"
            fill="currentcolor"
          />
          <path
            d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z"
            id="Rectangle-19-Copy-3"
            fill="currentcolor"
            opacity="0.3"
          />
        </g>
      </svg>
    ),
    title: 'Product Design',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-red-500"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
          <path
            d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z"
            id="Rectangle-25"
            fill="currentcolor"
          />
        </g>
      </svg>
    ),
    title: 'Frontend Development',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
]

const projects = [
  {
    title: 'Project',
    description: 'Branding, Interaction, Web Design',
    image: projectImg1,
  },
  {
    title: 'Project 2',
    description: 'Branding, Web Design & Development',
    image: projectImg2,
  },
  {
    title: 'Project 3',
    description: 'Branding, Interaction, Web Design',
    image: projectImg2,
  },
  {
    title: 'Project 4',
    description: 'Branding, Web Design & Development',
    image: projectImg1,
  },
]

const testimonials = [
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
    brand: amazon,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
    brand: google,
  },
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
    brand: amazon,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
    brand: google,
  },
]

export { services, projects, testimonials }
