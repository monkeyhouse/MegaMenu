
// plugins
$.fn.extend({
    scrollParent: function (includeHidden) {
        var position = this.css("position"),
            excludeStaticParent = position === "absolute",
            overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            scrollParent = this.parents().filter(function () {
                var parent = $(this);
                if (excludeStaticParent && parent.css("position") === "static") {
                    return false;
                }
                return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
            }).eq(0);

        return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
    },

    uniqueId: (function () {
        var uuid = 0;

        return function () {
            return this.each(function () {
                if (!this.id) {
                    this.id = "ui-id-" + (++uuid);
                }
            });
        };
    })(),

    removeUniqueId: function () {
        return this.each(function () {
            if (/^ui-id-\d+$/.test(this.id)) {
                $(this).removeAttr("id");
            }
        });
    }
});