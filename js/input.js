var Input = (function () {

    var _selectors = 'input[type="text"],input[type="password"],input[type="number"],input[type="email"],textarea';

    $('.input-wrapper').each(function () {

        var $this = $(this);

        // Setup layout
        var _inputBox = $('<div class="input-box">');
        var _inputLine = $('<div class="input-line">');
        var _animateLine = $('<div class="animate-line">');

        var _input = $this.find(_selectors);
        var _labelText = $this.find('.float-text');

        $this
           // .append(_inputBox)
            .append(_input)
            .append(_labelText)
            .append(_inputLine)
            .append(_animateLine)


        // $this.find('.input-box')
        //     .append(_input)
        //     .append(_labelText);


        //On Input Focus
        $(document).on('focus', _selectors, function (evt) {
            var $this = $(this);

            var _parent = $this.parents('.input-wrapper');
            if (!_parent.hasClass('focus')) {

                _parent.addClass('focus')
                    .addClass('text-top');
            }
        });

        //On Input Blur
        $(document).on('blur', _selectors, function () {
            var $this = $(this);
            var _parent = $this.parents('.input-wrapper');

            _parent.removeClass('focus')
                .addClass('blur');

            if (_parent.hasClass('text-top') && $this.val().length === 0) {
                _parent.removeClass('text-top');
            }

            setTimeout(function () {
                _parent.removeClass('blur');
            },300);
        });

    });

    function updateInput() {

        $(document).find(_selectors).each(function () {
            var $this = $(this);
            var _parent = $this.parents('.input-wrapper');

            if ($this.val().length > 0) {
                _parent.addClass('text-top');
            }

        });
    }

    $(document).ready(function () {
        updateInput();
    })

})();