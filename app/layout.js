(function() {

    //Generate Left Column Ids
    var lcolItems = $('#mmLeftColumn .menu:first-of-type .item');
    lcolItems.uniqueId();

    //Generate Right Column Contents
    var rColContent = {};
    var cMin = 2, cMax = 8;

    lcolItems.each(function(ix, item) {

        var numCards = cMin + Math.floor(Math.random() * (cMax - cMin));

        var cards = cardGenerator.createCards(numCards);

        rColContent[item.id] = cards;
    });



    //Initializatin of semantic ui content
    //TODO: do the components in parallel
    $('#MegaMenuTrigger')
        .popup({
            hoverable: true,
            position: 'bottom left',
            delay: {
                show: 200,
                hide: 200
            },
            //onHide: expandLeftColumn,
            transition: 'fade right',
            preserve: true
        });
    
    $('#TopMenuButtons .ui.button').popup({
        hoverable: true,
        position: 'bottom right',
        delay: {
            show: 100,
            hide: 500
        }
    });


    //Initialization of menu aim TODO: also do this in parallel
    $('#mmLeftColumn .menu').menuAim({
        activate: loadRightColumn,
        rowSelector: "> .item"
    });

    var $cardContainer = $('#cardContainer');
    var selection = '';
    function loadRightColumn(el) {
        var prevSelection = selection;
        selection = el.id;
        if (prevSelection !== selection) {
            var $el = $(el);
            $el.addClass('active');
            var frag = rColContent[selection];
            rColContent[prevSelection] = $cardContainer.html();
            $cardContainer.html(frag);
            $('#' + prevSelection).removeClass('active');
        }

    }

})();


/*
When intergrated, 
More interface needed

onread need to..
  - if content is cached, restore from cache
  - request content

onload need to set active menu item
 - select left column (active)
 - show correct right column content 


 interface methods:


 void reloadMenu();  // clear cache object, reload from server, (display loading icon in place...)
 void replaceBreadCrumbs( DocumentFragment newContent); //replace breadcrumbs with new content

 Cache Objects
 // headerHtml  document fragment - entirety of header


 //plan: entirety of header will be cached after first load
 // header will be loaded from cache when page changes
 // breadcrumbs will be inserted into header

*/

$(function () {

    //$('.item').click(function() {
    //    var items = $(this).parent('.menu').find('.item');
    //    items.removeClass('active');
    //    $(this).addClass('active');
    //});


    $(function () {

        //mobile options...

        // in app, not all menu options are on top, also, they actually have unique urls
        //var tOpts = document.createDocumentFragment();
        //$('#topnav a').each(function(ix, el) {
        //    tOpts.appendChild(new Option(el.innerText, el.getAttribute('href') + ix));
        //});
        //$('#mtopnav').append(tOpts);

        ////
        //var sOpts = document.createDocumentFragment();
        //$('#sidenav a').each(function(ix, el) {
        //    sOpts.appendChild(new Option(el.innerText, el.getAttribute('href') + ix));
        //});
        //$('#msidenav').append(sOpts);

        //$('.ui.dropdown')
        //    .dropdown({
        //        // you can use any ui transition
        //        transition: 'drop'
        //    });

    });

});