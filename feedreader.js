/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Test to ensure that the variable allFeeds is defined and is not empty*/

        it('Feeds variable is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test to ensure that each feed's URL in the allFeeds variable is defined and is not empty */

        it('Feeds URLs are defined', function() {
          allFeeds.forEach(function(element) {
            expect(element.url).toBeDefined();
            expect(element.url).not.toBe(0);
          });
        });

        /* Test to ensure that each feed's name in the allFeeds variable is defined and is not empty */

        it('Feeds names are defined', function() {
          allFeeds.forEach(function(element) {
            expect(element.name).toBeDefined();
            expect(element.name).not.toBe(0);
          });
        });
    });


    /* Test suite that checks the menu */
    describe('The menu', function() {


        /* Test that ensures the menu element is hidden by default */
        it('Menu hidden by default', function() {
          expect($('body').hasClass("menu-hidden")).toEqual(true);
        });


         /* Test that ensures the menu changes visibility when the icon is clicked */
        it('Menu changing visibility when menu icon is clicked', function() {
          $('.menu-icon-link').trigger("click");
          expect($('body').hasClass("menu-hidden")).toEqual(false);
          $('.menu-icon-link').trigger("click");
          expect($('body').hasClass("menu-hidden")).toEqual(true);
        });
    });
    /* Test suite that checks whether the loadFeed functions works properly */
    describe('Initial Entries', function() {


        /* Test that ensures that there is at least a .entry element in the .feed container when the
           loadFeed function is called and done */
         beforeEach(function(done) {
            loadFeed(0, done);
         })
         it('Feed container has at least one sentry', function(done) {
            expect($(".feed").has(".entry").length).not.toBe(0);
            done();
         });
    });
    /* Test suite that checks if the feeds works well */
    describe('New Feed Selection', function() {
        var feedContent1, feedContent2;


        /* Test that ensures that the content of the feeds are different and actually changes. */ 

         beforeEach(function(done) {
           loadFeed(0, function(){
             feedContent1 = document.querySelector(".feed").innerHTML;
             loadFeed(1, function(){
               feedContent2 = document.querySelector(".feed").innerHTML;
               done();
             });
           });

         })
         it('Content actually changes', function(done){
            expect(feedContent1).not.toEqual(feedContent2);
            done();
         });
    });
}());
