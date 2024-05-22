
//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

const testimonials = [
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
  },
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
  },
]

const FAQContent= [
  {
    title: ' Can I use this template for my client?',
    description:
      ' Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace. ',
  },
  {
    title: ' Can this theme work with WordPress?',
    description:
      " No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme. ",
  },
  {
    title: ' How do I get help with the theme?',
    description:
      ' Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime. ',
  },
  {
    title: ' Will you regularly give updates of Prompt ?',
    description:
      ' Yes, We will update the Prompt regularly. All the future updates would be available without any cost. ',
  },
]

const plans= [
  {
    id: 1,
    name: 'Starter',
    price: '49',
    duration: '/ month',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
    isRecommended: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '99',
    duration: '/ month',
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial client',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
    isPopular: true,
    isRecommended: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '599',
    duration: '/ month',
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial client',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
    isRecommended: false,
  },
]

const pricingCards = {
  Starter: {
    duration: 500,
    price: '49',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
  },
  Professional: {
    duration: 700,
    price: '99',
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
  },
  Enterprise: {
    duration: 900,
    price: '599',
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
  },
}

const footerLinks = {
  platform: {
    links: ['Demo', 'Pricing', 'Integrations', 'Status'],
  },
  'Knowledge Base': {
    links: ['Blog', 'Help Center', 'Sales Tools catalog', 'API'],
  },
  company: {
    links: ['About us', 'Career', 'Contact Us'],
  },
  legal: {
    links: ['Usage Policy', 'Privacy Policy', 'Terms of Service', 'Trust'],
  },
}

export { testimonials, plans, FAQContent, footerLinks, pricingCards }
