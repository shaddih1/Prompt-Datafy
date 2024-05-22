
import {
  Agency,
  AppIcon,
  Coworking,
  Crypto,
  Marketing,
  PortFolio,
  SassClassic,
  SassModern,
  Software,
  Startup,
} from './svgIcons'

const MENU_ITEMS = [
  {
    key: 'home',
    label: 'Home',
    url: '/home',
    isTitle: false,
  },
  {
    key: 'landing',
    label: 'Landing',
    isTitle: false,
    children: [
      {
        key: 'app',
        label: 'App',
        url: '/landing/app',
        parentKey: 'landing',
      },
      {
        key: 'sass-classic',
        label: 'Sass Classic',
        url: '/landing/sass-classic',
        parentKey: 'landing',
      },
      {
        key: 'software',
        label: 'Software',
        url: '/landing/software',
        parentKey: 'landing',
      },
      {
        key: 'coworkng',
        label: 'Coworking',
        url: '/landing/coworking',
        parentKey: 'landing',
      },
      {
        key: 'marketing',
        label: 'Marketing',
        url: '/landing/marketing',
        parentKey: 'landing',
      },
      {
        key: 'sass-modern',
        label: 'Sass Modern',
        url: '/landing/sass-modern',
        parentKey: 'landing',
      },
      {
        key: 'startup',
        label: 'Startup',
        url: '/landing/startup',
        parentKey: 'landing',
      },
      {
        key: 'agency',
        label: 'Agency',
        url: '/landing/agency',
        parentKey: 'landing',
      },
      {
        key: 'crypto',
        label: 'Crypto',
        url: '/landing/crypto',
        parentKey: 'landing',
      },
      {
        key: 'potfolio-landing',
        label: 'Portfolio',
        url: '/landing/portfolio',
        parentKey: 'landing',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: false,
    children: [
      {
        key: 'company',
        label: 'Company',
        url: '/pages/company',
        parentKey: 'pages',
      },
      {
        key: 'dashboard',
        label: 'Dashboard',
        url: '/dashboard',
        parentKey: 'pages',
      },
      {
        key: 'career',
        label: 'Career',
        url: '/pages/career',
        parentKey: 'pages',
      },
      {
        key: 'pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'setting',
        label: 'Setting',
        url: '/setting',
        parentKey: 'pages',
      },
      {
        key: 'help',
        label: 'Help',
        url: '/pages/help',
        parentKey: 'pages',
      },
    ],
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    isTitle: false,
    children: [
      {
        key: 'portfolio-grid',
        url: '/pages/portfolio/grid',
        label: 'Portfolio Grid',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-masonry',
        url: '/pages/portfolio/masonry',
        label: 'Portfolio Masonry',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-item',
        url: '/pages/portfolio/item',
        label: 'Portfolio Item',
        parentKey: 'portfolio',
      },
    ],
  },
  {
    key: 'blogs',
    label: 'Blog',
    parentKey: 'Pages',
    isDivider: false,
    children: [
      {
        key: 'blog-page',
        label: 'Blog',
        url: '/pages/blogs/list',
        parentKey: 'blogs',
      },
      {
        key: 'blog-post',
        label: 'Blog Post',
        url: '/pages/blogs/post',
        parentKey: 'blogs',
      },
    ],
  },
  {
    key: 'auth',
    label: 'Account',
    isTitle: false,
    children: [
      {
        key: 'auth-login',
        label: 'Login',
        url: '/auth/login',
        parentKey: 'auth',
      },
      {
        key: 'auth-register',
        label: 'Sign Up',
        url: '/auth/register',
        parentKey: 'auth',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forget Password',
        url: '/auth/forgot-password',
        parentKey: 'auth',
      },
      {
        key: 'auth-confirm-account',
        label: 'Confirm Account',
        url: '/auth/confirm-account',
        parentKey: 'auth',
      },
    ],
  },
  {
    key: 'contact-us',
    label: 'Contact us',
    url: '/contact-us',
    isTitle: false,
  },
]

const HORIZONTAL_MENU_ITEMS = [
  {
    key: 'home',
    label: 'Home',
    url: '/',
    isTitle: true,
  },
  {
    key: 'landing',
    label: 'Landing',
    isTitle: true,
    children: [
      {
        key: 'landing-app',
        label: 'App',
        icon: <AppIcon />,
        url: '/landing/app',
        parentKey: 'landing',
      },
      {
        key: 'landing-sass-classic',
        label: 'Sass Classic',
        icon: <SassClassic />,
        url: '/landing/sass-classic',
        parentKey: 'landing',
      },
      {
        key: 'landing-software',
        label: 'Software',
        icon: <Software />,
        url: '/landing/software',
        parentKey: 'landing',
      },
      {
        key: 'landing-coworkng',
        label: 'Coworking',
        icon: <Coworking />,
        url: '/landing/coworking',
        parentKey: 'landing',
      },
      {
        key: 'landing-marketing',
        label: 'Marketing',
        icon: <Marketing />,
        url: '/landing/marketing',
        parentKey: 'landing',
      },
      {
        key: 'landing-sass-modern',
        label: 'Sass Modern',
        icon: <SassModern />,
        url: '/landing/sass-modern',
        parentKey: 'landing',
      },
      {
        key: 'landing-startup',
        label: 'Startup',
        icon: <Startup />,
        url: '/landing/startup',
        parentKey: 'landing',
      },
      {
        key: 'landing-agency',
        label: 'Agency',
        icon: <Agency />,
        url: '/landing/agency',
        parentKey: 'landing',
      },
      {
        key: 'landing-crypto',
        label: 'Crypto',
        icon: <Crypto />,
        url: '/landing/crypto',
        parentKey: 'landing',
      },
      {
        key: 'landing-portfolio-landing',
        label: 'Portfolio',
        icon: <PortFolio />,
        url: '/landing/portfolio',
        parentKey: 'landing',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-auth',
        label: 'Account',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-login',
            label: 'Login',
            url: '/auth/login',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-register',
            label: 'Sign Up',
            url: '/auth/register',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-forgot-password',
            label: 'Forget Password',
            url: '/auth/forgot-password',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-confirm-account',
            label: 'Confirm Account',
            url: '/auth/confirm-account',
            parentKey: 'pages-auth',
          },
        ],
      },
      {
        key: 'pages-blogs',
        label: 'Blog',
        parentKey: 'pages',
        isDivider: true,
        children: [
          {
            key: 'blog',
            label: 'Blog',
            url: '/pages/blogs/list',
            parentKey: 'pages-blogs',
          },
          {
            key: 'blog-post',
            label: 'Blog Post',
            url: '/pages/blogs/post',
            parentKey: 'pages-blogs',
          },
        ],
      },
      {
        key: 'pages-company',
        label: 'Company',
        url: '/pages/company',
        parentKey: 'pages',
      },
      {
        key: 'pages-dashboard',
        label: 'Dashboard',
        url: '/dashboard',
        parentKey: 'pages',
      },
      {
        key: 'setting',
        label: 'Setting',
        url: '/setting',
        parentKey: 'pages',
      },
      {
        key: 'pages-career',
        label: 'Career',
        url: '/pages/career',
        parentKey: 'pages',
      },
      {
        key: 'pages-pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'pages-portfolio',
        label: 'Portfolio',
        parentKey: 'pages',
        isDivider: true,
        children: [
          {
            key: 'portfolio-grid',
            url: '/pages/portfolio/grid',
            label: 'Portfolio Grid',
            parentKey: 'pages-portfolio',
          },
          {
            key: 'portfolio-masonry',
            url: '/pages/portfolio/masonry',
            label: 'Portfolio Masonry',
            parentKey: 'pages-portfolio',
          },
          {
            key: 'portfolio-item',
            url: '/pages/portfolio/item',
            label: 'Portfolio Item',
            parentKey: 'pages-portfolio',
          },
        ],
      },
      {
        key: 'pages-help',
        label: 'Help',
        url: '/pages/help',
        parentKey: 'pages',
      },
    ],
  },
  {
    key: 'contact-us',
    label: 'Contact us',
    url: '/contact-us',
    isTitle: true,
  },
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
