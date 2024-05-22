
import {
  FaBitcoin,
  FaBitcoinSign,
  FaDiamond,
  FaDochub,
  FaDropbox,
  FaEthereum,
  FaLock,
  FaT,
  FaTiktok,
} from 'react-icons/fa6'


const coins = [
  {
    icon: FaBitcoin,
    name: 'Bitcoin',
    size: 'text-5xl',
    variant: 'bg-orange-400',
  },
  {
    icon: FaEthereum,
    name: 'Ethereum',
    size: 'text-3xl',
    variant: 'bg-blue-500',
  },
  {
    icon: FaT,
    name: 'Tether',
    variant: 'bg-emerald-700',
  },
  {
    icon: FaLock,
    name: 'Chainlink',
    variant: 'bg-sky-500',
    isSolid: true,
  },
  {
    icon: FaDiamond,
    name: 'Basic Attention Token',
    variant: 'bg-red-500',
    isSolid: true,
  },
  {
    icon: FaDochub,
    name: 'Dash',
    variant: 'bg-sky-500',
  },
  {
    icon: FaDropbox,
    name: 'Binance Coin',
    variant: 'bg-amber-300',
  },
  {
    icon: FaTiktok,
    name: 'Tezos',
    variant: 'bg-green-500',
  },
]

const features = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
            id="Path-50"
            fill="currentcolor"
            opacity="0.3"
          />
          <path
            d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
            id="check-path"
            fill="currentcolor"
          />
        </g>
      </svg>
    ),
    title: 'Secure & Encrypted Transactions',
    description:
      'Advanced payment and processing technologies, fine-tuned from more than 3 years development',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <rect
            id="Combined-Shape"
            fill="currentcolor"
            opacity="0.3"
            x={2}
            y={5}
            width={20}
            height={14}
            rx={2}
          />
          <rect
            id="Rectangle-59"
            fill="currentcolor"
            x={2}
            y={8}
            width={20}
            height={3}
          />
          <rect
            id="Rectangle-59-Copy"
            fill="currentcolor"
            opacity="0.3"
            x={16}
            y={14}
            width={4}
            height={2}
            rx={1}
          />
        </g>
      </svg>
    ),
    title: 'Transparent Fees',
    description:
      'Barbelless catfish pelican gulper candlefish thornfishGulf menhaden ribbonbearer riffle.',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <rect
            id="Combined-Shape"
            fill="currentcolor"
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
            fill="currentcolor"
          />
        </g>
      </svg>
    ),
    title: 'Easy to Use',
    description:
      'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z"
            id="Path-76"
            fill="currentcolor"
          />
          <path
            d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z"
            id="Combined-Shape"
            fill="currentcolor"
            opacity="0.3"
          />
        </g>
      </svg>
    ),
    title: 'Quality Support',
    description:
      'Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.',
  },
]

export { coins, features }
