
const plans = [
  {
    id: 1,
    name: 'Starter',
    price: '49',
    duration: '/ month',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      '1 User',
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
    isRecommended: true,
    isPopular: true,
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

const benefits = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
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
    title: 'Technical Support',
    description:
      'Our professional technical support team will help you out at every step',
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M14.1654881,7.35483745 L9.61055177,10.3622525 C9.47921741,10.4489666 9.39637436,10.592455 9.38694497,10.7495509 L9.05991526,16.197949 C9.04337012,16.4735952 9.25341309,16.7104632 9.52905936,16.7270083 C9.63705011,16.7334903 9.74423017,16.7047714 9.83451193,16.6451626 L14.3894482,13.6377475 C14.5207826,13.5510334 14.6036256,13.407545 14.613055,13.2504491 L14.9400847,7.80205104 C14.9566299,7.52640477 14.7465869,7.28953682 14.4709406,7.27299168 C14.3629499,7.26650974 14.2557698,7.29522855 14.1654881,7.35483745 Z"
            id="Combined-Shape"
            fill="currentcolor"
          />
        </g>
      </svg>
    ),
    title: 'Technology',
    description:
      'A special training to get start with the platform by professionals',
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <rect
            id="Rectangle-62-Copy"
            fill="currentcolor"
            opacity="0.3"
            x={13}
            y={4}
            width={3}
            height={16}
            rx="1.5"
          />
          <rect
            id="Rectangle-62-Copy-2"
            fill="currentcolor"
            x={8}
            y={9}
            width={3}
            height={11}
            rx="1.5"
          />
          <rect
            id="Rectangle-62-Copy-4"
            fill="currentcolor"
            x={18}
            y={11}
            width={3}
            height={9}
            rx="1.5"
          />
          <rect
            id="Rectangle-62-Copy-3"
            fill="currentcolor"
            x={3}
            y={13}
            width={3}
            height={7}
            rx="1.5"
          />
        </g>
      </svg>
    ),
    title: 'Growth Analysis',
    description:
      'A dedicated team to get insights around your growth every month',
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M22,7 L22,9 L19,9 C18.4477153,9 18,9.44771525 18,10 L18,13 C18,13.5522847 18.4477153,14 19,14 L22,14 L22,16 L19,16 C17.3431458,16 16,14.6568542 16,13 L16,10 C16,8.34314575 17.3431458,7 19,7 L22,7 Z"
            id="Path-52"
            fill="currentcolor"
            opacity="0.3"
            transform="translate(19.000000, 11.500000) scale(-1, 1) translate(-19.000000, -11.500000) "
          />
          <path
            d="M4.75777452,5 C5.56503586,3.79401426 6.93979195,3 8.5,3 C10.0602081,3 11.4349641,3.79401426 12.2422255,5 L4.75777452,5 Z"
            id="Combined-Shape"
            fill="currentcolor"
            opacity="0.3"
          />
          <path
            d="M7,5 C7,2.790861 8.790861,1 11,1 C13.209139,1 15,2.790861 15,5 L7,5 Z"
            id="Combined-Shape"
            fill="currentcolor"
            opacity="0.3"
          />
          <path
            d="M12.0500091,5 C12.2816442,3.85887984 13.290521,3 14.5,3 C15.709479,3 16.7183558,3.85887984 16.9499909,5 L12.0500091,5 Z"
            id="Combined-Shape"
            fill="currentcolor"
            opacity="0.3"
          />
          <path
            d="M8,8 L8,8 C8.55228475,8 9,8.44771525 9,9 L9,18 C9,18.5522847 8.55228475,19 8,19 L8,19 C7.44771525,19 7,18.5522847 7,18 L7,9 C7,8.44771525 7.44771525,8 8,8 Z M13,8 L13,8 C13.5522847,8 14,8.44771525 14,9 L14,18 C14,18.5522847 13.5522847,19 13,19 L13,19 C12.4477153,19 12,18.5522847 12,18 L12,9 C12,8.44771525 12.4477153,8 13,8 Z M4.06055214,5 L16.9394479,5 C17.4917326,5 17.9394479,5.44771525 17.9394479,6 C17.9394479,6.01958668 17.9388724,6.03916914 17.9377222,6.05872202 L17.1107386,20.117444 C17.0485547,21.1745693 16.1731425,22 15.1141898,22 L5.88581016,22 C4.82685754,22 3.95144525,21.1745693 3.88926141,20.117444 L3.06227777,6.05872202 C3.02984649,5.50739031 3.4504984,5.0341569 4.00183012,5.00172563 C4.021383,5.00057546 4.04096546,5 4.06055214,5 Z"
            id="Combined-Shape"
            fill="currentcolor"
          />
        </g>
      </svg>
    ),
    title: 'Rewards',
    description: 'A special reward for the most performing account every month',
  },
]

export { plans, benefits }
