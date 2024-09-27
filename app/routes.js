//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Run this code when a form is submitted to task-list
router.post('*/age-range', function (req, res) {

  var AgeOfDeceased = req.session.data['age-bracket']

  // Check whether the variable matches a condition
  if (AgeOfDeceased == "unknown"){
    // Send user to next page
    res.redirect('cannot-start')
  } else {

    res.redirect('task-list')
  }

})

// Run this code when a form is submitted to the next page in the create record journey (bilingual)
router.post('*/bilingual', function (req, res) {

  var AgeOfDeceased = req.session.data['age-bracket']

  // Check whether the variable matches a condition
  if (AgeOfDeceased == "I do not have their age"){
    // Send user to next page
    res.redirect('cannot-start')
  } else {

    res.redirect('bilingual')
  }

})
