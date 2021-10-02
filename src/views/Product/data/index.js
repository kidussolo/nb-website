import tts from "../../../assets/images/product-tts.png"
import agriexprt from "../../../assets/images/agriexpert.png"
import agrily from "../../../assets/images/agrily.png"
import milknews from "../../../assets/images/Milknews.jpg"
import dashboard from "../../../assets/images/dashboard1.png"

export const partners = [
  {
    name: 'Agriexpert',
    logo: agriexprt
  },
  {
    name: 'Agrily',
    logo: agrily,
  },
  {
    name: 'Milknews',
    logo: milknews,
  },
  
  {
    name: "Soufflet",
    logo: "https://www.soufflet.com/themes/custom/gs_theme/images/logo/logo.svg"
  },
  {
    name: "Kvedomosti",
    logo: "https://kvedomosti.ru/wp-content/themes/kvedomosti/images/footer__logo.png"
  },
  
];


export const process = [
  {
    icon: 'fas fa-brain',
    title: '1. Idea',
    description:
      'We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: '2. Design',
    description:
      'We start by designing a mockup or prototype of your website/app, and present it to you. Once with the initial mockup, we start the revision process to perfect it.',
  },
  {
    icon: 'fas fa-laptop-code',
    title: '3. Development',
    description:
      'We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, and super scalable website.',
  },
  {
    icon: 'fas fa-cogs',
    title: '4. Launch & Maintenance',
    description:
      'When the project is ready, we help you to launch it and push it live. After that, we meet with your team to train them on how to edit, update and scale it.',
  },
];

export const work = [
  {
    title: 'Text To Speech',
    description:
      'Convert your article to speech and reach out to a wide range of users',
    illustration: tts,
  },
  {
    title: 'Media Monitoring',
    description:
      'Free yourself from constantly checking social media Social media monitoring using one convenient dashboard and email, SMS or messenger alerts for trending posts.',
    illustration: 'https://assets.maccarianagency.com/the-front/illustrations/mobiles.svg',
  },
  {
    label: 'CLIENT PORTAL ACCESS',
    title: 'Simple Customer Dashboards',
    description:
      'Give sub-users access to a simplified dashboard with limited permission levels to offer remote management and real-time analytics.',
    illustration: dashboard,
  },
];

export const reviews = [
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
    },
    authorName: 'Veronica Adams',
    authorOccupation: 'Growth Marketer, Crealytics',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
    },
    authorName: 'Akachi Luccini',
    authorOccupation: 'Lead Generation, Alternative Capital',
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
    },
    authorName: 'Jack Smith',
    authorOccupation: 'Head of Operations, Parkfield Commerce',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
