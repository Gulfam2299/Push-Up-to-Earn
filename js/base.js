$(document).ready(function() {
    var modal = document.getElementById("js-menuModal");
    var btn = document.getElementsByClassName("js-menuIcon")[0];
    var whitePaperModal = document.getElementById("js-whitePaperModal");
    var btnWhitePaper = document.getElementsByClassName("js-whitePaperMenu")[0];
    var span = document.getElementsByClassName("js-closeModal")[0];
    var jsCloseWhitePaperModal = document.getElementsByClassName("js-closeWhitePaperModal")[0];
    var screenWidth = screen.width;

    btn.onclick = function() {
        modal.style.display = "block";
    }

    if (btnWhitePaper && screenWidth <= 640) {
        btnWhitePaper.onclick = function() {
            whitePaperModal.style.display = "block";
        }
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    if (jsCloseWhitePaperModal && screenWidth <= 640) {
        jsCloseWhitePaperModal.onclick = function() {
            whitePaperModal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

        if (event.target == whitePaperModal) {
            modal.style.display = "none";
        }
    }

    $('body').on('click', '.js-headerItem', function(e) {
        e.preventDefault();
        $(this).parent().find('.js-headerItem').removeClass('active')
        $(this).addClass('active')

        window.location.href = $(this).find('a')[0].href;

        if (modal) modal.style.display = "none";
    });

    const tab = window.location.href.split('#').length > 1 ? window.location.href.split('#').pop() : null;

    if (tab) {
        $('.js-headerItem').removeClass('active');
        $('.js-headerItem').map((_index, element) => {
            if ($(element).find('a').attr('href').includes(tab)) {
                $(element).addClass('active');
            }
        });
    }

    if (screenWidth <= 640) {
        $('body').on('click', '.js-whitePaperMenu a', function(e) {
            e.preventDefault();
        })
    }

    $('body').on('click', '.js-footerItem a', function(e) {
        e.preventDefault();
        const tab = this.href.split('#').length > 1 ? this.href.split('#').pop() : null;

        if (tab) {
            $('.js-headerItem').removeClass('active');
            $('.js-headerItem').map((_index, element) => {
                if ($(element).find('a').attr('href').includes(tab)) {
                    $(element).addClass('active');
                }
            });
        }

        window.location.href = this.href;
    })

    $('body').on('click', '.jsCopyAddress', function(e) {
        const address = $(this).data('address');

        navigator.clipboard.writeText(address);
        $('.js-copyWrap .tooltiptext').text('Copied');
    })

    $('.jsCopyAddress').mouseenter(function(e) {}).mouseleave(function() {
        $('.js-copyWrap .tooltiptext').text('Copy');
    });
});