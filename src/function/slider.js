jQuery(document).ready(function($) {
    let currentSlide = 0;
    const slidesCount = $('.slide').length;

    function showSlide(index) {
        $('.slides').css('transform', `translateX(-${index * 100}%)`);
        updatePagination(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slidesCount;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
        showSlide(currentSlide);
    }

    $('.next-button').on('click', nextSlide);
    $('.prev-button').on('click', prevSlide);
    setInterval(function() {
        nextSlide();
    }, 5000);

    // Handle click on pagination dots
    $('.dot-xyz').on('click', function() {
        currentSlide = $(this).index();
        showSlide(currentSlide);
    });

    function updatePagination(index) {
        $('.dot-xyz').removeClass('active');
        $('.dot-xyz').eq(index).addClass('active'); 
    }
});
