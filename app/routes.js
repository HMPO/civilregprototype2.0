//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Run this code when a form is submitted to task-list
router.post('/task-list', function (req, res) {

// Make a variable and give it the value from 'ageBracket'
var ageBracket = req.session.data['age-bracket']

// Check whether the variable 'age' matches a condition
if (ageBracket == "unknown"){
    // Send the user to cannot-start page
   res.redirect('/under16/create-new-record/cannot-start')
 } else {
//    // Send user to ineligible page
    res.redirect('/under16/create-new-record/task-list')
  }

})
