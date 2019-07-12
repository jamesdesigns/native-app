// This is Original and should stay
const dialogsModule = require("tns-core-modules/ui/dialogs");


// This is for the Modal Feature
// const RoutesItemDetailViewModel = require("./routes-item-detail-view-model");
// const routesItemDetailViewModel = new RoutesItemDetailViewModel();

// exports.pageLoaded = function(args) {
//   const page = args.object;
//   page.bindingContext = routesItemDetailViewModel;
// }

// End of the Modal Feature code




const ogdenN = `Hello World!`;


// This is for the Alert Function
exports.alertOgdenN = function () {
  dialogsModule.confirm({
    title: "North Bound",
    // message: "NO STOP   NO STOP   5:07 AM   5:37 AM  6:07 AM  6:37 AM   7:07 AM   7:37 AM  8:07 AM  8:37 AM   9:37 AM   10:37 AM   11:37 AM   12:37 PM   1:37 PM   NO STOP   2:37 PM   3:07 PM   3:37 PM   4:07 PM   4:37 PM   5:07 PM   5:37 PM   6:07 PM   6:37 PM   7:07 PM   8:07 PM   9:07 PM   10:07 PM   10:37 PM   11:07 PM",
    message: ogdenN,
    okButtonText: "CLOSE"
  }).then(() => {
    console.log("The user closed the alert.");
  });
};
// This is for the Alert Function
exports.alertOgdenS = function () {
  // dialogsModule.alert({
    dialogsModule.confirm({
    title: "South Bound",
    message: `6:00 AM  9:00 AM  10:00 AM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
    okButtonText: "CLOSE"
  }).then(() => {
    console.log("The user closed the alert.");
  });
};




// This is for the Modal Feature
exports.showModal = function (args) {
    const page = args.object.page;
    page.showModal(
      "./modal/modal", // Path to the xml file of modal without extension
      { 
        // Passing NEW DATA to test the Modal
       
        // End of Passing NEW DATA to test the Modal
        
        
        // Pass any context you want to use in the modal
        // you can pass anything you want as the context, even a viewModel!

        // context: "Some data",
        // foodType: "Veg",
        // food: [
        //   {
        //     name: "Carrot"
        //   },
        //   {
        //     name: "Potatoe"
        //   }
        // ]

      },
      function closeCallback(result) { // you can customise this callback the way you want
        // if modal was closed without submitting, this will still get called
        // so check if the parameters are defined before you use them
        if (result) {
          console.log("Result was: ", result);
        }
      },
      false // Full screen or not? (on iOS the modal is fullscreen irrespective of this value)
    );
  }
// End of the Modal Feature code



// All Original -- BELOW THIS LINE
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = args.context;
}

function onBackButtonTap(args) {
    const view = args.object;
    const page = view.page;
    page.frame.goBack();
}

exports.onNavigatingTo = onNavigatingTo; 
exports.onBackButtonTap = onBackButtonTap; 
