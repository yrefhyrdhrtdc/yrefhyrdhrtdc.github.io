$(document).ready(function(){
    $('select[name="id_country"]').on('change', function(){
        changeSelect( $(this).val() );
        changeCountry();
        // $('select').trigger('refresh'); //для стилизированного селекта
    });

    var user_country = location.search;
    user_country = user_country.match(/g\=([0-9])/i);
    user_country = user_country[1];

    changeSelect(user_country);
    changeCountry();
    lastpack(10)

});


function changeSelect( user_country ){

    $('select[name="id_country"] option').removeAttr('selected');
    switch (user_country) {
        case "1":
            $('select[name="id_country"] option[value="1"]').prop('selected', true );
            break;
        case "2":
            $('select[name="id_country"] option[value="2"]').prop('selected', true );
            break;
        case "3":
            $('select[name="id_country"] option[value="3"]').prop('selected', true );
            break;
        default:
            $('select[name="id_country"] option[value="0"]').prop('selected', true );
            break;
    }
}


function changeCountry()
{
    var obj = $('select[name="id_country"]').eq(0);
    var country = $(obj).val();
    switch (parseInt(country))
    {
        case 0:
            $('.oldprice').text('2980 руб.');
            $('.newprice').text('1490 руб.');
            $('.delivery').text('300 руб.');
            $('.itog').text('2790 руб.');
            break;
        case 1:
            $('.oldprice').text('1358 грн');
            $('.newprice').text('779 грн');
			$('.delivery').text('50 грн');
            $('.itog').text('629 грн');
            break;
        case 2:
            $('.oldprice').text('11000 тг.');
            $('.newprice').text('5390 тг.');
            $('.itog').text('7040 тг.');
            break;
        case 3:
            $('.oldprice').text('580 т.р.');
            $('.newprice').text('299 т.р.');
            $('.itog').text('339 т.руб. ');
            break;
        default:
            break;
    }
}


function lastpack(last)
{
    if (last > 5)
    {
        last--;
        $('.lastpack').html(last);
        setTimeout(lastpack, 60000, last);
    }
}