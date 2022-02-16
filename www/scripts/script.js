$(document).ready(function(){

// табы в контактах

  $('.j-tabs-link').on('click', function(event){
    event.preventDefault();

    const index = $(this).index('.j-tabs-link');

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-tabs-content').removeClass('active');
    $('.j-tabs-content').eq(index).addClass('active');
  });

// аккордеон

  let prevBtn;

  $('.j-accordion-btn').on('click', function(){
  if (this === prevBtn) {
    $(this).next().slideToggle();
    return;
  }

    $('.j-accordion-btn').next().slideUp();
    $(this).next().slideToggle();
    prevBtn = this;
  });

// слайдер

  $('.j-slider').slick({
  });

// фильтр бабочек

 $('.j-filter-link').on('click', function(event){
  event.preventDefault();

  const filterType = $(this).data('filter');

  $('.j-filter-link').removeClass('active');
  $(this).addClass('active');

  if(filterType === 'all') {
    $('.j-case').show();
    return;
  }

  $('.j-case').each(function() {
    const caseType = $(this).data('type');

    if (filterType === caseType) {
      $(this).show();
      return;
    }

    $(this).hide();
  });
});

});
