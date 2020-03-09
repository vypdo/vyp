$(document).ready(function() {
  $("#container1").twentytwenty({
    default_offset_pct: 0.99, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'Ответ', // подпись 'до'
    after_label: 'Задача', // подпись 'после'
    no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "бегунок"
    click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
  });
});
