/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'support-hero-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
      'connect-src': "'self'",
      'font-src': "'self' http://fonts.gstatic.com",
      'img-src': "'self' https://secure.gravatar.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    },

  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    routeAfterAuthentication: 'index'
  }



  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy['connect-src'] = "'self' ws://localhost:35729 http://localhost:3000";

    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: '/oauth/token',
      serverTokenRevocationEndpoint: '/oauth/revoke',
      refreshAccessTokens: true
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'https://support-hero-api.herokupapp.com/oauth/token',
      serverTokenRevocationEndpoint: 'https://support-hero-api.herokupapp.com/oauth/revoke',
      refreshAccessTokens: true,
      crossOriginWhitelist: ['https://support-hero-api.herokupapp.com/']
    }
  }

  return ENV;
};
