//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here


addFilter('toMonth', function(x) {
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (x > 0) {
      return months[x - 1]; // returns date as per month
    } else {
      return x;
    }
  })

  addFilter('listCheckboxValues', function (content) {
    let text = "";
    for (let i = 0; i < content.length; i++) {
        text += content[i] + "";
    }
    return text 
}, { renderAsHtml: true })

