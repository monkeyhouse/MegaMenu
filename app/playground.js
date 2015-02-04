(function () {
    // load menu from json?


    function rand(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }

    //Generate Left Column Ids
    var lColItems = $('#left .item');
    lColItems.uniqueId();

    var mColContent = {}, mMin = 2, mMax = 10;
    var rColContent = {}, rMin = 10, rMax = 110;

    lColItems.each(function (ix, item) {
        // Generate Middle Column Contents
        var $items = $(cardGenerator.createMenuItems(rand(mMin, mMax)));
        $items.attr('data-parent-id', item.id);
        mColContent[item.id] = $items;

        //Generate Right Column Contents
        $items.each(function (mIx, mItem) {
            var $rItems = $(cardGenerator.createMenuItems(rand(rMin, rMax)));
            $rItems.attr('data-parent-id', mItem.id);
            rColContent[mItem.id] = $rItems;
        });

    });

    

    //render all middle tiers onto the screen hidden
    var middleValues = $.map(mColContent, function (v) { return v; });
    $('#middle .menu').html(middleValues);

    // middle items are show/hide css
    //right items are document fragment add/remove

    $('#left .menu').menuAim({
        activate: showMiddleColumn,
        rowSelector: "> .item"
    });

    var lSelection = '';

    function showMiddleColumn(el) {
        var prevSelection = lSelection;
        lSelection = el.id;
        if (prevSelection !== lSelection) {
            var $el = $(el);
            $el.addClass('active');

            $('#middle .item[data-parent-id!=' + lSelection + ']').css('display', 'none');
            $('#middle .item[data-parent-id=' + lSelection + ']').css('display', 'block');

            $('#' + prevSelection).removeClass('active');
        }
    }



    $('#middle .menu').menuAim({
        activate: showRightColumn,
        rowSelector: "> .item"
    });

    var rSelection = '';
    function showRightColumn(el) {
        var prevSelection = rSelection;
        rSelection = el.id;
        if (prevSelection !== rSelection) {
            var $el = $(el);
            $el.addClass('active');
            rColContent[prevSelection] = $('#right .menu').html();
            $('#right .menu').html(rColContent[rSelection]);
            $('#' + prevSelection).removeClass('active');
        }
    }


    function init() {        //activate left, middle items
        //get first item
        var fLeft = $(lColItems).get(0);

        //get second middle item
        var fMiddle = $(mColContent[fLeft.id]).get(1);

        showMiddleColumn(fLeft);
        showRightColumn(fMiddle);
    }

    init();
})();
