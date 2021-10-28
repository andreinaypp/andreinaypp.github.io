$(function() {
  $('input#alojamientoFechas').daterangepicker({
    startDate: moment(),
    endDate: moment().add(1, 'day'),
    autoApply: true,
    locale: {
      format: 'DD/MM/YYYY'
    }
  });
});