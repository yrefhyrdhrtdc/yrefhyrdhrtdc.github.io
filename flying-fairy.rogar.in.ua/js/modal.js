﻿$(function () {

	if (typeof the_kma_time === 'undefined') {
		var the_kma_time = 10000;
	}	

    function TemplateRefresh() {
        ModalRefresh();
    }

    $(window).resize(function () {
        TemplateRefresh();
    });
    TemplateRefresh();

    /* -----------------------------------------------------------------------------------------
     * Modal Refresh
     */
    function ModalRefresh() {
        if ($('.modal').is(':visible')) {
            var modalBlock = $('.modal:visible .modal-block'),
                width = parseInt(modalBlock.width()),
                height = parseInt(modalBlock.height());
            if ($(window).height() > height + 20) {
                modalBlock.addClass('modal-top').removeClass('margin-t-b').css('margin-top', -1 * (height / 2));
            }
            else {
                modalBlock.addClass('margin-t-b').removeClass('modal-top');
            }
            if ($(window).width() > width) {
                modalBlock.addClass('modal-left').removeClass('margin-l').css('margin-left', -1 * (width / 2));
            }
            else {
                modalBlock.addClass('margin-l').removeClass('modal-left');
            }
        }
    }


    /* -----------------------------------------------------------------------------------------
     * Modal Show
     */
    $(document).on('click', 'a[modal]', function(){
        var modalWindow = $('div#' + $(this).attr('modal'));
        if (modalWindow.length){
            modalWindow.fadeIn('fast');
            $('body').addClass('modal-show');
            ModalRefresh();
            return false;
        }
    });


    /* -----------------------------------------------------------------------------------------
     * Modal Hide
     */
    function ModalHide() {
        $('.modal:visible').fadeOut('fast', function(){
            $('body').removeClass('modal-show');
        });
    }

    $(document)
        .on('click', '.icon-close, .modal', function (event) {
            if (event.target != this)
                return false;
            else
                ModalHide();
        })
        .on('keydown', function (key) {
            if (key.keyCode == 27)
                ModalHide();
        })
        .on('click', '.modal > *', function (event) {
            event.stopPropagation();
            return true;
        })


	try {
		//var kmainputs = kmacb();
		//$('#kmacb-form form').append(kmainputs);
		//$('body').append('<div id="kmacb"><a title="Перезвонить мне" href="#" modal="kmacb-form"><div class="kmacb-circle"></div><div class="kmacb-circle-fill"></div><div class="kmacb-img-circle"></div></a></div>');

		setTimeout(
			function start_kmacb() {
                $('body').append('<div id="kmacb"><a title="Заказать обратный звонок" href="#" modal="kmacb-form"><div class="kmacb-circle"></div><div class="kmacb-circle-fill"></div><div class="kmacb-img-circle"></div></a></div>');
			},
			the_kma_time
		);
	}
	catch (e) {}
});