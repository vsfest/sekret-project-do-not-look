import js_logo from './js/logo.svg'
import css_logo from './css/logo.svg'
import decompress_logo from './decompress/logo.svg'

const titoLink = 'https://ti.to/cssconf-au/2018'
const venue = '5 Blackwood street, North Melbourne'

export const JS = {
  title: 'JSConf AU 2018',
  logo: js_logo,
  date: '21st & 22nd March 2018',
  url: 'https://2018.jsconfau.com',
  description: `
    JSConfAU is an event that’s far from the standard conference playbook because we believe you deserve more than that. We focus on two things, pushing JavaScript beyond its boundaries and providing exceptional human social activities that encourage community and friendship building.

    JSConfAU drives beyond what is popular or cool today, toward topics that define and revolutionize the future of our technology.
  `,
  venue,
  titoLink,
  theme: {
    primary: '#0247BF'
  },
  contact: {
    twitter: 'jsconfau',
    mailingList: {
      url: 'http://jsconfau.createsend.com/t/j/s/oskty',
      formName: 'cm-oskty-oskty'
    }
  }
}

export const CSS = {
  title: 'CSSConf AU 2018',
  logo: css_logo,
  date: '20th March 2018',
  url: 'https://2018.cssconf.com.au',
  description: 'CSSConf is a community conference dedicated to the designers and developers who build the world’s most engaging user interfaces. For the community, from the community.',
  venue,
  titoLink,
  theme: {
    primary: '#ff7500'
  },
  contact: {
    twitter: 'cssconfau',
    mailingList: {
      url: 'http://jsconfau.createsend.com/t/j/s/oskty',
      formName: 'cm-oskty-oskty'
    }
  }
}

export const Decompress = {
  title: 'Decompress 2018',
  logo: decompress_logo,
  date: '23rd March 2018',
  url: 'https://2018.decompress.com.au',
  description: 'Decompress is a community day for designers and developers run by the CSSConf and JSConf team. Our focus is squarely set on creating an all- inclusive space for attendees to learn, share and create. Topics covered are a blend of CSSConf and JSConf, and will even feature some of the same speakers.',
  venue,
  titoLink,
  theme: {
    primary: '#ff3d3d'
  },
  contact: {
    twitter: 'decompressau',
    mailingList: {
      url: 'http://jsconfau.createsend.com/t/j/s/obhjr/',
      formName: 'cm-obhjr-obhjr'
    }
  }
}
