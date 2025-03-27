//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here

router.post('/public-facing/place-of-work/place-of-work', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // Javascript doesn't support hyphens ('-') in variable names (like formValue)

  let formValue = req.session.data['place-of-work']

  if (formValue.includes('Hospitals')) {
    res.redirect('/public-facing/place-of-work/hospitals')
  } else {
    res.redirect('/public-facing/place-of-work/cya-place-of-work')
  }
})