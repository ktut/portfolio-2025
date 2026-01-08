// Centralized route metadata configuration
// Used by both the Vue Router and the static HTML generator

const routesMeta = {
  '/': {
    displayName: 'Home',
    ogImage: 'https://rkdvis.com/assets/me-burgundy-social.jpg',
    ogTitle: 'Ramzi Dreessen — RKDVIS.COM',
    ogDescription:
      'A web developer, designer, and photographer based in Chicago.',
    ogUrl: 'https://rkdvis.com'
  },
  '/about': {
    displayName: 'About',
    ogImage: 'https://rkdvis.com/assets/me-burgundy-social.jpg',
    ogTitle: 'About — Ramzi Dreessen',
    ogDescription:
      'A web developer, designer, and photographer based in Chicago.',
    ogUrl: 'https://rkdvis.com/about'
  },
  '/chase': {
    displayName: 'JPMC Performance Dashboard',
    ogImage: 'https://rkdvis.com/assets/PD-night-mock.jpg',
    ogTitle:
      'Building the Chase Media Solutions Performance Dashboard — Ramzi Dreessen',
    ogDescription:
      'Front-end engineering on a web app for campaign monitoring and reporting for card-linked offers',
    ogUrl: 'https://rkdvis.com/chase'
  },
  '/chase-travel': {
    displayName: 'Chase Travel Case Study',
    ogImage: 'https://rkdvis.com/assets/gua-lo.jpg',
    ogImageWidth: '750',
    ogImageHeight: '500',
    ogTitle: 'Fixing Chase Travel: A Case Study',
    ogDescription:
      'Applying industry standards, user research and some common sense to fix the clunky travel booking app',
    ogUrl: 'https://rkdvis.com/chase-travel'
  },
  '/chase-travel-fixed': {
    displayName: 'Fixing Chase Travel',
    ogImage: 'https://rkdvis.com/assets/CT-laptop-mock.jpg',
    ogTitle:
      'Fixing the Chase Travel UI in Two Weeks with Cursor and Claude Code',
    ogDescription:
      'A former Chase engineer reimagines the clunky travel booking app with improved UI + UX and better customer support access',
    ogUrl: 'https://rkdvis.com/chase-travel-fixed'
  },
  '/chicagomagazine': {
    displayName: 'ChiMag Editorial Web Design',
    ogImage: 'https://rkdvis.com/assets/chimag-mag-spread.jpg',
    ogTitle: 'Chicago Magazine Editorial Web Design — Ramzi Dreessen',
    ogDescription: 'Handling web-guy duties at a Chicago media staple',
    ogUrl: 'https://rkdvis.com/chicagomagazine'
  },
  '/chicagomagazine-subscription': {
    displayName: 'ChiMag Subscription Page',
    ogImage: 'https://rkdvis.com/assets/ipad-chimag-mock.jpg',
    ogTitle: 'Chicago Magazine Subscription Page Redesign — Ramzi Dreessen',
    ogDescription:
      'Redesigning the subscription experience to drive conversions',
    ogUrl: 'https://rkdvis.com/chicagomagazine-subscription'
  },
  '/high5games': {
    displayName: 'H5G Builder System',
    ogImage: 'https://rkdvis.com/assets/h5g-social.jpg',
    ogTitle: 'High 5 Games Tout Builder System — Ramzi Dreessen',
    ogDescription: 'Building a custom carousel banner-building system and app',
    ogUrl: 'https://rkdvis.com/high5games'
  },
  '/suntimes': {
    displayName: 'CST Print Design',
    ogImage: 'https://rkdvis.com/assets/print-design/IMG_0008.jpg',
    ogTitle: 'Chicago Sun-Times Print Design — Ramzi Dreessen',
    ogDescription: 'Print design work for Chicago Sun-Times SPLASH magazine',
    ogUrl: 'https://rkdvis.com/suntimes'
  },
  '/photo': {
    displayName: 'Portrait Photography',
    ogImage: 'https://rkdvis.com/assets/photo/ruffalo-social.jpg',
    ogTitle: 'Portrait Photography — Ramzi Dreessen',
    ogDescription:
      'Portraits shot for Chicago Sun-Times SPLASH magazine and other clients',
    ogUrl: 'https://rkdvis.com/photo'
  }
}

// Export for both CommonJS (build script) and ES modules (Vue Router)
module.exports = { routesMeta }
// Also support ES module import
if (typeof exports !== 'undefined') {
  exports.routesMeta = routesMeta
}
