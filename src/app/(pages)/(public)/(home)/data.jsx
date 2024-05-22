
// images
import homeApp from '@/assets/images/demo/home-app.jpg'
import homeSaas from '@/assets/images/demo/home-saas.jpg'
import homeSaas2 from '@/assets/images/demo/home-saas2.jpg'
import homeStartup from '@/assets/images/demo/home-startup.jpg'
import homeSoftware from '@/assets/images/demo/home-software.jpg'
import homeAgency from '@/assets/images/demo/home-agency.jpg'
import homeCoworking from '@/assets/images/demo/home-coworking.jpg'
import homeCrypto from '@/assets/images/demo/home-crypto.jpg'
import homeMarketing from '@/assets/images/demo/home-marketing.jpg'
import homePortfolio from '@/assets/images/demo/home-portfolio.jpg'

import company from '@/assets/images/demo/company.jpg'
import contact from '@/assets/images/demo/contact.jpg'
import career from '@/assets/images/demo/career.jpg'
import blog from '@/assets/images/demo/blog.jpg'
import blogPost from '@/assets/images/demo/blog-post.jpg'
import portfolioGrid from '@/assets/images/demo/portfolio-grid.jpg'
import portfolioMasonry from '@/assets/images/demo/portfolio-masonry.jpg'
import portfolioItem from '@/assets/images/demo/portfolio-item.jpg'
import pricing from '@/assets/images/demo/pricing.jpg'
import help from '@/assets/images/demo/help.jpg'

import authLogin from '@/assets/images/demo/auth-login.jpg'
import authSignup from '@/assets/images/demo/auth-signup.jpg'
import authPassword from '@/assets/images/demo/auth-password.jpg'
import authConfirm from '@/assets/images/demo/auth-confirm.jpg'

const landings = [
  {
    image: homeApp,
    url: '/landing/app',
    name: 'Mobile App',
  },
  {
    image: homeSaas,
    url: '/landing/sass-modern',
    name: 'Saas Modern',
  },
  {
    image: homeSaas2,
    url: '/landing/sass-classic',
    name: 'Saas Classic',
  },
  {
    image: homeStartup,
    url: '/landing/startup',
    name: 'Startup',
  },
  {
    image: homeSoftware,
    url: '/landing/software',
    name: 'Software',
  },
  {
    image: homeAgency,
    url: '/landing/agency',
    name: 'Agency',
  },
  {
    image: homeCoworking,
    url: '/landing/coworking',
    name: 'Co-Working',
  },
  {
    image: homeCrypto,
    url: '/landing/crypto',
    name: 'Crypto',
  },
  {
    image: homeMarketing,
    url: '/landing/marketing',
    name: 'Marketing',
  },
  {
    image: homePortfolio,
    url: '/landing/portfolio',
    name: 'Portfolio',
  },
]

const secondaryPages = [
  {
    image: company,
    url: '/pages/company',
    name: 'Company',
  },
  {
    image: contact,
    url: '/contact-us',
    name: 'Contact',
  },
  {
    image: career,
    url: '/pages/career',
    name: 'Career',
  },
  {
    image: blog,
    url: '/pages/blogs/list',
    name: 'Blog',
  },
  {
    image: blogPost,
    url: '/pages/blogs/post',
    name: 'Blog-Post',
  },
  {
    image: portfolioGrid,
    url: '/pages/portfolio/grid',
    name: 'Portfolio Grid',
  },
  {
    image: portfolioMasonry,
    url: '/pages/portfolio/masonry',
    name: 'Portfolio Masonry',
  },
  {
    image: portfolioItem,
    url: '/pages/portfolio/item',
    name: 'Portfolio-item',
  },
  {
    image: pricing,
    url: '/pages/pricing',
    name: 'Pricing',
  },
  {
    image: help,
    url: '/pages/help',
    name: 'Help',
  },
]

const accountPages = [
  {
    image: authLogin,
    url: 'auth/login',
    name: 'Login',
  },
  {
    image: authSignup,
    url: 'auth/register',
    name: 'SignUp',
  },
  {
    image: authPassword,
    url: 'auth/forgot-password',
    name: 'Forget Password',
  },
  {
    image: authConfirm,
    url: 'auth/confirm-account',
    name: 'Confirm Account',
  },
]

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 54 33"
      >
        <g clipPath="url(#prefix__clip0)">
          <path
            fill="#38bdf8"
            fillRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path fill="#fff" d="M0 0h54v32.4H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: 'Based on latest Tailwind v3.3.2',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z"
            id="Combined-Shape"
            fill="currentcolor"
            opacity="0.3"
          />
          <path
            d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z"
            id="Combined-Shape"
            fill="currentcolor"
          />
        </g>
      </svg>
    ),
    name: 'Fully Responsive',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <rect
            id="Rectangle-7-Copy"
            fill="currentcolor"
            x={2}
            y={5}
            width={19}
            height={4}
            rx={1}
          />
          <rect
            id="Rectangle-7-Copy-4"
            fill="currentcolor"
            opacity="0.3"
            x={2}
            y={11}
            width={19}
            height={10}
            rx={1}
          />
        </g>
      </svg>
    ),
    name: 'Cross-browser compatible',
  },
  {
    name: 'Sass Powered',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z M12,5.99999664 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18.0000034 L12,5.99999664 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    name: 'Easy to customize',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <rect
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
            x={2}
            y={2}
            width={20}
            height={20}
            rx={10}
          />
          <path
            d="M6.16794971,14.5547002 C5.86159725,14.0951715 5.98577112,13.4743022 6.4452998,13.1679497 C6.90482849,12.8615972 7.52569784,12.9857711 7.83205029,13.4452998 C8.9890854,15.1808525 10.3543313,16 12,16 C13.6456687,16 15.0109146,15.1808525 16.1679497,13.4452998 C16.4743022,12.9857711 17.0951715,12.8615972 17.5547002,13.1679497 C18.0142289,13.4743022 18.1384028,14.0951715 17.8320503,14.5547002 C16.3224187,16.8191475 14.3543313,18 12,18 C9.64566871,18 7.67758127,16.8191475 6.16794971,14.5547002 Z"
            id="Path-56"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    name: 'Developer Friendly',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
          <rect
            id="Rectangle-28"
            fill="currentColor"
            opacity="0.3"
            transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) "
            x={11}
            y={4}
            width={2}
            height={16}
            rx={1}
          />
        </g>
      </svg>
    ),
    name: 'Clean & Easy to Understand Code',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
          <rect
            id="Rectangle-25"
            fill="currentColor"
            opacity="0.3"
            x={2}
            y={4}
            width={20}
            height={16}
            rx={2}
          />
          <polygon
            id="Path"
            fill="currentColor"
            opacity="0.3"
            points="4 20 10.5 11 17 20"
          />
          <polygon
            id="Path-Copy"
            fill="currentColor"
            points="11 20 15.5 14 20 20"
          />
          <circle
            id="Oval-76"
            fill="currentColor"
            opacity="0.3"
            cx="18.5"
            cy="8.5"
            r="1.5"
          />
        </g>
      </svg>
    ),
    name: 'Font and SVG Icons',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
          <path
            d="M9.26193932,16.6476484 C8.90425297,17.0684559 8.27315905,17.1196257 7.85235158,16.7619393 C7.43154411,16.404253 7.38037434,15.773159 7.73806068,15.3523516 L16.2380607,5.35235158 C16.6013618,4.92493855 17.2451015,4.87991302 17.6643638,5.25259068 L22.1643638,9.25259068 C22.5771466,9.6195087 22.6143273,10.2515811 22.2474093,10.6643638 C21.8804913,11.0771466 21.2484189,11.1143273 20.8356362,10.7474093 L17.0997854,7.42665306 L9.26193932,16.6476484 Z"
            id="Path-94-Copy"
            fill="currentColor"
            opacity="0.3"
            transform="translate(14.999995, 11.000002) rotate(-180.000000) translate(-14.999995, -11.000002) "
          />
          <path
            d="M4.26193932,17.6476484 C3.90425297,18.0684559 3.27315905,18.1196257 2.85235158,17.7619393 C2.43154411,17.404253 2.38037434,16.773159 2.73806068,16.3523516 L11.2380607,6.35235158 C11.6013618,5.92493855 12.2451015,5.87991302 12.6643638,6.25259068 L17.1643638,10.2525907 C17.5771466,10.6195087 17.6143273,11.2515811 17.2474093,11.6643638 C16.8804913,12.0771466 16.2484189,12.1143273 15.8356362,11.7474093 L12.0997854,8.42665306 L4.26193932,17.6476484 Z"
            id="Path-94"
            fill="currentColor"
            transform="translate(9.999995, 12.000002) rotate(-180.000000) translate(-9.999995, -12.000002) "
          />
        </g>
      </svg>
    ),
    name: 'Free Updates',
  },
]
export { landings, secondaryPages, accountPages, features }
