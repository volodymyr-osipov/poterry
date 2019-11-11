(function ($) {
    $.fn.xlusiveDropdown = function () {
        function Dropdown(dropdown) {
            this.$dropdown = $(dropdown);
            this.$toggler = this.$dropdown.children('.dropdown__toggler');
            this.init();
        }

        Dropdown.prototype.init = function () {
            var that = this;
            that.$toggler.on('click', function () {
                that.$dropdown.toggleClass('opened');
            });
            $(document).on('click', function (event) {
                if (!$(event.target).closest(that.$dropdown, that.$dropdown).length) {
                    that.$dropdown.removeClass('opened');
                }
            });
        };

        return this.each(function () {
            new Dropdown(this);
        });
    };
})(jQuery);
