// cordova.js will be replaced by the right one when running "cordova prepare"
// in order to simulate "device ready" behavior and test the app on a computer, we bootstrap the app here
setTimeout(function () {
    //loading angular app
    angular.bootstrap(document, ['tp.app']);
    // set fastclick
    FastClick.attach(document.body);      
    // Positioning scrollable content and tool bar
    
    document.getElementById('scrollable-content-area').style.height = (window.innerHeight - 50) + 'px';
   	

}, 1000);