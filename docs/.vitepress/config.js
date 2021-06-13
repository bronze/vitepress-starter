module.exports = {
  lang: 'en-US',
  title: 'Thompson Total Branding',
  description: '',

  themeConfig: {
    docsDir: 'docs',

    nav: [
      { text: 'Where are we now', link: '/where/index', activeMatch: '^^/where/' },
      { text: 'Why are we there', link: '/why/index', activeMatch: '^^/why/' },
      { text: 'Where could we be', link: '/could/index', activeMatch: '^/could/' },
      { text: 'How can we get there', link: '/how/index', activeMatch: '^/how/' },
      { text: 'Are we getting there', link: '/are/index', activeMatch: '^/are/' },
      {
        text: 'Original TTB',
        link: 'http://jura.com.br/jwt/Fset001.htm'
      }
    ],
    sidebar: {
      '/where/': getWhereSidebar(),
      '/why/': getWhySidebar(),
      '/could/': getCouldSidebar(),
      '/how/': getHowSidebar(),
      '/are/': getAreSidebar(),
      '/': getAllSidebar()
    }
  }
}

function getAllSidebar() {
  return [
    // {
    //   text: 'TTB Overview',
    //   link: '/overview',
    // },
    {
      text: 'The Planning Cycle',
      link: '/the-planning-cycle',
    },
    {
      text: 'Where are we now',
      link: '/where/index',
      children: [
        { text: 'Category/Market Dynamics Checklist', link: '/where/category-checklist' },
        { text: 'Brand Performance Checklist', link: '/where/brand-performance-checklist' },
        { text: 'Brand User Checklist', link: '/where/brand-user-checklist' },
        { text: 'Client Business Checklist', link: '/where/client-business-checklist' },
        { text: 'Brand Assessor Checklist', link: '/where/brand-checklist' }
      ]
    },
    {
      text: 'Why are we there',
      link: '/why/index',
      children: [
        { text: 'Category and Market Discoveries Checklist', link: '/why/category-checlist' },
        { text: 'Brand Discoveries Tools', link: '/why/brand-tools' },
        { text: 'Consumer Discoveries', link: '/why/consumer-discoveries' },
        { text: 'Branding Properties Audit ', link: '/why/branding-properties-audit' },
        { text: 'Communications Audit ', link: '/why/communications-audit' },
        { text: 'Semiotics ', link: '/why/semiotics' },
        { text: 'Client Discoveries ', link: '/why/client-discoveries' },
        { text: 'Key Discoveries Summary ', link: '/why/key-discoveries' }
      ]
    },
    {
      text: 'Where could we be',
      link: '/could/index',
      children: [
        { text: 'Day One Brandstorm', link: '/could/day-one-brandstorm' },
        { text: 'BrandCepts Overview', link: '/could/brandcepts-overview' },
        { text: 'BrandCepts Research', link: '/could/brandcepts-research' },
        { text: 'Brand Vision ', link: '/could/brand-vision' }
      ]
    },
    {
      text: 'How can we get there',
      link: '/how/index',
      children: [
        { text: 'Communications Planning', link: '/how/communications-planning' },
        { text: 'Branding Idea ', link: '/how/branding-idea' },
        { text: 'Creative Briefs ', link: '/how/creative-briefs' },
        { text: 'Creative Development Research Guidelines ', link: '/how/creative-research' }
      ]
    },
    {
      text: 'Are we getting there',
      link: '/are/index',
      children: [
        { text: 'Performance Evaluation Introduction', link: '/are/performance-introduction' },
        { text: 'Performance Evaluation Checklist', link: '/are/performance-checklist' },
        { text: 'Performance Evaluation Workplan', link: '/are/performance-workplan' }
      ]
    }
  ]
}

function getWhereSidebar() {
  return [
    {
      text: 'Where are we now',
      children: [
        { text: 'Category/Market Dynamics Checklist', link: '/where/category-checklist' },
        { text: 'Brand Performance Checklist', link: '/where/brand-performance-checklist' },
        { text: 'Brand User Checklist', link: '/where/brand-user-checklist' },
        { text: 'Client Business Checklist', link: '/where/client-business-checklist' },
        { text: 'Brand Assessor Checklist', link: '/where/brand-checklist' }
      ]
    }
  ]
}

function getWhySidebar() {
  return [
    {
      text: 'Why are we there',
      children: [
        { text: 'Category and Market Discoveries Checklist', link: '/why/category-checlist' },
        { text: 'Brand Discoveries Tools', link: '/why/brand-tools' },
        { text: 'Consumer Discoveries', link: '/why/consumer-discoveries' },
        { text: 'Branding Properties Audit ', link: '/why/branding-properties-audit' },
        { text: 'Communications Audit ', link: '/why/communications-audit' },
        { text: 'Semiotics ', link: '/why/semiotics' },
        { text: 'Client Discoveries ', link: '/why/client-discoveries' },
        { text: 'Key Discoveries Summary ', link: '/why/key-discoveries' }
      ]
    },
  ]
}

function getCouldSidebar() {
  return [
    {
      text: 'Where could we be',
      children: [
        { text: 'Day One Brandstorm', link: '/could/day-one-brandstorm' },
        { text: 'BrandCepts Overview', link: '/could/brandcepts-overview' },
        { text: 'BrandCepts Research', link: '/could/brandcepts-research' },
        { text: 'Brand Vision ', link: '/could/brand-vision' }
      ]
    }
  ]
}

function getHowSidebar() {
  return [
    {
      text: 'How can we get there',
      children: [
        { text: 'Communications Planning', link: '/how/communications-planning' },
        { text: 'Branding Idea ', link: '/how/branding-idea' },
        { text: 'Creative Briefs ', link: '/how/creative-briefs' },
        { text: 'Creative Development Research Guidelines ', link: '/how/creative-research' }
      ]
    }
  ]
}

function getAreSidebar() {
  return [
    {
      text: 'Are we getting there',
      children: [
        { text: 'Performance Evaluation Introduction', link: '/are/performance-introduction' },
        { text: 'Performance Evaluation Checklist', link: '/are/performance-checklist' },
        { text: 'Performance Evaluation Workplan', link: '/are/performance-workplan' }
      ]
    }
  ]
}