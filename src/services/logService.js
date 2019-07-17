import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://ad3fd5d812454edd87f8139e491e13c0@sentry.io/1507393"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
