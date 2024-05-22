
// images
import slack from '@/assets/images/brands/slack.png'
import fb from '@/assets/images/brands/fb.png'
import salesforce from '@/assets/images/brands/salesforce.jpg'
import at from '@/assets/images/brands/at.png'
import gsheet from '@/assets/images/brands/gsheet.png'
import ac from '@/assets/images/brands/ac.jpeg'

const integrations = [
  {
    appLogo: slack,
    app: 'Slack',
    description:
      'Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
  },
  {
    appLogo: fb,
    app: 'Facebook Lead Ads',
    description:
      'Facebook lead ads make signing up for business information easy for people and more valuable for businesses',
  },
  {
    appLogo: salesforce,
    app: 'Salesforce',
    description:
      'Salesforce is a leading enterprise customer relationship manager (CRM) application',
  },
  {
    appLogo: at,
    app: 'Airtable',
    description:
      'Organize anything with Airtable, a modern database created for everyone',
  },
  {
    appLogo: gsheet,
    app: 'Google Sheets',
    description:
      'Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data',
  },
  {
    appLogo: ac,
    app: 'ActiveCampaign',
    description:
      'ActiveCampaign combines all aspects of email marketing into a single and easy-to-use platform',
  },
]

const planFeatures = [
  {
    name: 'Landing pages',
    starter: {
      available: true,
    },
    professional: {
      available: true,
    },
    enterprise: {
      available: true,
    },
  },
  {
    name: 'Drag-and-drop editor',
    starter: {
      available: false,
    },
    professional: {
      available: true,
    },
    enterprise: {
      available: true,
    },
  },
  {
    name: 'Email marketing',
    starter: {
      available: true,
    },
    professional: {
      available: true,
    },
    enterprise: {
      available: true,
    },
  },
  {
    name: 'Ad retargeting',
    starter: {
      available: false,
      addon: true,
    },
    professional: {
      available: false,
    },
    enterprise: {
      available: true,
    },
  },
  {
    name: 'Messenger integration',
    starter: {
      available: false,
    },
    professional: {
      available: false,
    },
    enterprise: {
      available: true,
    },
  },
  {
    name: 'Live chat',
    starter: {
      available: false,
    },
    professional: {
      available: false,
      addon: true,
    },
    enterprise: {
      available: true,
    },
  },
  {
    name: 'Conversational bots',
    starter: {
      available: false,
    },
    professional: {
      available: true,
    },
    enterprise: {
      available: true,
    },
  },
  {
    name: 'SEO recommendations & optimizations',
    starter: {
      available: false,
    },
    professional: {
      available: true,
    },
    enterprise: {
      available: true,
    },
  },
]

export { integrations, planFeatures }
