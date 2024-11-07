//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#chooseCE')

  accessibleAutocomplete.enhanceSelectElement({

    defaultValue: 'search',

    selectElement: selectElement

  })


})
