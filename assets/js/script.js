// MAIN СТРАНИЦА

// СКРИПТ НА ОТКРЫТИЕ/ЗАКРЫТИЕ MENU

$(document).ready(function() {
    let isMenuOpen = false; // Переменная для отслеживания состояния меню
    const icon = $('.header_item_user_arrow_icon'); // Иконка стрелки
    const menu = $('.header_menu'); // Меню

    // Открытие/закрытие меню при нажатии на стрелку
    $('.header_item_user_arrow').on('click', function(event) {
        event.stopPropagation(); // Останавливаем всплытие события

        if (!isMenuOpen) {
            // Если меню закрыто, открываем его
            menu.slideDown(300, function() {
                // После завершения анимации поворачиваем стрелку
                icon.css('transform', 'rotate(180deg)');
            });
        } else {
            // Если меню открыто, закрываем его
            icon.css('transform', 'rotate(0deg)'); // Возвращаем стрелку обратно
            menu.slideUp(300); // Плавно закрываем меню
        }

        isMenuOpen = !isMenuOpen; // Меняем состояние меню
    });

    // Закрытие меню при нажатии вне его
    $(document).on('click', function(event) {
        if (!$(event.target).closest(menu).length && !$(event.target).is('.header_item_user_arrow')) {
            menu.slideUp(300); // Скрываем меню
            icon.css('transform', 'rotate(0deg)'); // Возвращаем стрелку обратно
            isMenuOpen = false; // Сбрасываем состояние меню
        }
    });

    // Закрытие меню при нажатии на элемент меню
    $('.header_menu_item').on('click', function() {
        menu.slideUp(300); // Скрываем меню
        icon.css('transform', 'rotate(0deg)'); // Возвращаем стрелку обратно
        isMenuOpen = false; // Сбрасываем состояние меню
    });
});





//   СКРИПТ НА ЗАКРЫТИЕ МОДАЛОК

$(document).ready(function() {
    // Обработчик клика для кнопки закрытия
    $('.modal_login_rect_item_section_close, .modal_overlay').on('click', function() {
        $('.modal').css('display', 'none')(); // Скрыть модальное окно без анимации
    });
});




// ОТКРЫТИЕ МОДАЛКИ ЛОГИН

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenLogin').click(function() {
        $('.modal').css('display', 'none');
        $('#modalLogin').css('display', 'block');
    });
});


// ОТКРЫТИЕ МОДАЛКИ РЕГИСТРАЦИИ

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenSignin').click(function() {
        $('.modal').css('display', 'none');
        $('#modalSign').css('display', 'block');
    });
});


// ОТКРЫТИЕ МОДАЛКИ CREATE

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenCreate').click(function() {
        $('.modal').css('display', 'none');
        $('#modalCreate').css('display', 'block');
    });
});

// ОТКРЫТИЕ МОДАЛКИ EDIT AVATAR

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenEditAvatar').click(function() {
        $('.modal').css('display', 'none');
        $('#modalEditAvatar').css('display', 'block');
    });
});


// ОТКРЫТИЕ МОДАЛКИ RESET PASSWORD

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenReset').click(function() {
        $('.modal').css('display', 'none');
        $('#modalReset').css('display', 'block');
    });
});

// ОТКРЫТИЕ МОДАЛКИ CODE

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenCode').click(function() {
        $('.modal').css('display', 'none');
        $('#modalCode').css('display', 'block');
    });
});


// ОТКРЫТИЕ МОДАЛКИ PASSWORD

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenPass').click(function() {
        $('.modal').css('display', 'none');
        $('#modalPass').css('display', 'block');
    });
});


// ОТКРЫТИЕ МОДАЛКИ PASSWORD SAVED

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenSaved').click(function() {
        $('.modal').css('display', 'none'); // Скрываем все модальные окна
        $('#modalSaved').css('display', 'block'); // Показываем #modalSaved

        // Анимация ширины .modal_save_progress_bg
        $('.modal_save_progress_bg').css('width', '0%'); // Устанавливаем начальную ширину
        $('.modal_save_progress_bg').animate({ width: '100%' }, 2000, function() {
            // После завершения анимации скрываем #modalSaved плавно
            $('#modalSaved').fadeOut(500); // Скрываем с эффектом затухания
        });
    });
});




// ОТКРЫТИЕ МОДАЛКИ PROVABLY

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenProvably').click(function() {
        $('.modal').css('display', 'none');
        $('#modalProvably').css('display', 'block');
    });
});


// ОТКРЫТИЕ МОДАЛКИ WHAT

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenWhat').click(function() {
        $('.modal').css('display', 'none');
        $('#modalWhat').css('display', 'block');
    });
});

// ОТКРЫТИЕ МОДАЛКИ How

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenHow').click(function() {
        $('.modal').css('display', 'none');
        $('#modalHow').css('display', 'block');
    });
});

// ОТКРЫТИЕ МОДАЛКИ PROVABLY HOW

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenProvablyHow').click(function() {
        $('.modal').css('display', 'none');
        $('#modalProvablyHow').css('display', 'block');
    });
});



// ОТКРЫТИЕ МОДАЛКИ PROFILE SETTING

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenProfileSetting').click(function() {
        $('.modal').css('display', 'none');
        $('#modalProfileSetting').css('display', 'block');
    });
});

// ОТКРЫТИЕ МОДАЛКИ TWO FACTOR

$(document).ready(function() {
    // Открытие модального окна
    $('.OpenFactor').click(function() {
        $('.modal').css('display', 'none');
        $('#modalFactor').css('display', 'block');
    });
});


// ОТКРЫТИЕ NOTIFICATION

$(document).ready(function() {
    // Открытие/закрытие модального окна
    $('.OpenNotification').click(function() {
        var isVisible = $('#Notification').css('display') === 'block';
        
        if (isVisible) {
            $('#Notification').css('display', 'none');
        } else {
            $('.modal').css('display', 'none');
            $('#Notification').css('display', 'block');
        }
    });

    // Очистка содержимого и показ элемента .header_item_uved_rect_main_clear
    $('.header_item_uved_rect_up_close').click(function() {
        // Очищаем содержимое .header_item_uved_rect_main_items
        $('.header_item_uved_rect_main_items').empty();

        // Проверяем, пуст ли контейнер
        if ($('.header_item_uved_rect_main_items').is(':empty')) {
            $('.header_item_uved_rect_main_clear').css('display', 'flex');
        }
    });

    // Закрытие модального окна по клику вне него
    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('#Notification').length && !target.closest('.OpenNotification').length) {
            $('#Notification').css('display', 'none');
        }
    });
});



// КОПИРОВАНИЕ ССЫЛКИ В TWO FACTOR

$(document).ready(function() {
    $('.modal_factor_block_rect_copy').on('click', function() {
        // Получаем значение из поля ввода
        var valueToCopy = $('.modal_factor_block_rect_input').val();
        
        // Создаем временный элемент textarea для копирования
        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(valueToCopy).select();
        
        // Копируем текст в буфер обмена
        document.execCommand('copy');
        
        // Удаляем временный элемент
        $temp.remove();
        
        // Вы можете добавить уведомление о том, что текст скопирован
        // alert('Скопировано: ' + valueToCopy);
    });
});





// КОПИРОВАНИЕ CEED В  PROFILE SETTING

$(document).ready(function() {
    $('.modal_progile_setting_blocks_block_rect_copy').on('click', function() {
        // Получаем значение из поля ввода
        var valueToCopy = $('.modal_progile_setting_blocks_block_rect_ceed').val();
        
        // Создаем временный элемент textarea для копирования
        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(valueToCopy).select();
        
        // Копируем текст в буфер обмена
        document.execCommand('copy');
        
        // Удаляем временный элемент
        $temp.remove();
        
        // Вы можете добавить уведомление о том, что текст скопирован
        // alert('Скопировано: ' + valueToCopy);
    });
});




// СКРИПТ ВЫБОРА АВАТАРКИ

$(document).ready(function() {
    // Переменная для хранения текущего выбранного элемента
    let selectedAvatar = null;

    // Обработчик клика на элементе с классом .modal_create_select_item_avatar
    $('.modal_create_select_item_avatar').on('click', function() {
        // Если есть выбранный элемент, убираем класс
        if (selectedAvatar) {
            $(selectedAvatar).removeClass('modal_create_select_item_avatar_select');
        }

        // Добавляем класс к текущему элементу
        $(this).addClass('modal_create_select_item_avatar_select');

        // Обновляем переменную с текущим выбранным элементом
        selectedAvatar = this;
    });
});
