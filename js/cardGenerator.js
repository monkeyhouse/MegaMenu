/*
 * Created By MonkeyHouse
 * Created To: Generate menu items
 * Created For: Mega menu demo
 * 
 * Item > .menu > .item
 */
//dependency on lorem impsum generator & zencoding


var cardGenerator = (function () {

    var api = {};

    api.createCard = createSimpleCard;
    api.createCards = createNCards;

    function createSimpleCard() {

        var minItems = 4;
        var maxItems = 15;
        if (Math.random() < .4) {
            maxItems = 120;
        }
        var numItems = minItems + Math.floor(Math.random() * (maxItems - minItems)) + 1;

        var title = lipsum.generateWords(3);
        var words = lipsum.generateWordsArray(4, numItems).map(function (w) { return { 'word': w }; });
        var data = {
            title: title,
            words: words
        };
        var template = '' +
            'div.item>((b>{!title!})' + // !words.length!
            '+(div.menu>!for:words!' +
            'a.item{!word!}))';

        var myOutput = $.zc(template, data);

        return myOutput.get(0);
    }

    function createNCards(n) {
        n = n || 7;
        var c = document.createDocumentFragment();
        for (var i = 0; i < n; i++) {
            var card = createSimpleCard();
            c.appendChild(card);
        }
        return c;
    }

    return api;
})();
