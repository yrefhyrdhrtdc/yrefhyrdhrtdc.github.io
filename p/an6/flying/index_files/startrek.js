var jQ = false;

function initJQ() {
	// загружаю jQuery, если он не загружен
	if (typeof(jQuery) == 'undefined') {
		if (!jQ) {
			jQ = true;
			document.write('<scr' + 'ipt type="text/javascript" src="../yandex.st/jquery/1.10.2/jquery.min.js"></scr' + 'ipt>');
		}
		setTimeout('initJQ()', 50);
	} else {
		(function($) {


			$(function() {
				"use strict";

				// поправить на продакшене
                var domain = 'callback';
                if (location.host === 'testlanding.local' || location.host === 'mding.local' || location.host === 'testlanding2.local' || location.host === 'testlayer.local' || location.host === 'testlayer2.local') {
					domain = 'callback.cookie_cpagetti.local';
				} else if (location.host === 'test') {
					domain = 'newcallback';
				}

				// регистрирую хит и получаю параметры для функций
				var register_hit = 'http://' + domain + '/hit';
				$.ajax({
					url: register_hit,
					type: 'GET',
					data: {
						site: window.location.href.replace(/\/$/, '') // убирается закрывающий слэш
					},
					dataType: "jsonp"
				});

			})
		})(jQuery)
	}
}
initJQ();


// комбекер
var comebacker = null;
var cb_jqi = cb_ale = false;
function cb_iJQ(current_site, target_site) {
	if (target_site.indexOf('?') === -1) {
		target_site = target_site + '@comebacker=1';
	}else{
		target_site = target_site + '&comebacker=1';
	}

	if (!window.jQuery) {
		if (!cb_jqi) {
			if (typeof $ == 'function') {
				cb_ale = true;
			}
			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "../ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
			document.getElementsByTagName('head')[0].appendChild(script);
			cb_jqi = true;
		}
		setTimeout('cb_iJQ()', 50);
	} else {
		if (true == cb_ale) {
			$j = jQuery.noConflict();
		} else {
			$j = jQuery;
		}
		comebacker = '{"settings":{"dir_url":"\/comebacker\/","script_path":"..//'+current_site+'comebacker/comebacker.php","page_to":"..//'+target_site+'\/","pages_to":"[{\\\"index\\\":0,\\\"url\\\":\\\"..//'+target_site+'\/\\\",\\\"from\\\":\\\"0\\\",\\\"to\\\":\\\"\\\"}]","how_often_show":"every_time","button_name_capitalization":"first_upper","work_page":"","working_in_opera_after":"3","working_in_opera":"off"},"page":"..//'+target_site+'\/","from":"0","to":"","exit_text":"**********************************\\n\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!!! \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u042b\u0419 \u0428\u0410\u041d\u0421! \u0421\u041a\u0418\u0414\u041a\u0410 50%!\\n**********************************\\n\\n\u0422\u043e\u043b\u044c\u043a\u043e \u0421\u0415\u0419\u0427\u0410\u0421 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 30 \u043c\u0438\u043d\u0443\u0442 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u0448\u0430\u043d\u0441 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443 50%!\\n\\n\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 [[\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u043e\u043f\u043a\u0438]] \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0413\u0420\u0410\u041d\u0414\u0418\u041e\u0417\u041d\u0423\u042e \u0421\u041a\u0418\u0414\u041a\u0423!\\n\\n\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c 9 \u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a \u043f\u043e \u0441\u043f\u0435\u0446. \u0446\u0435\u043d\u0435!","bar":{"link_text_left":"\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \\\"Comebacker\\\"","link_text_right":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u0441\u044e\u0434\u0430","link_href":"../comebacker.ru/@utm_source=client_website&utm_medium=bar&utm_campaign=i-want-same","height":"12","background_color":"c9c7c7","link_size":"10","link_color":"242424"},"module_where_loaded":"site"}';
		jQuery.ajax({
			type: 'GET',
			url: '/comebacker/comebacker.php?settings=eyJzZXR0aW5ncyI6eyJpZCI6IjExOTUxIiwid29ya19wYWdlIjoiIiwid29ya2luZ19pbl9vcGVyYSI6ZmFsc2UsInNjcmlwdF9wYXRoIjoiaHR0cDpcL1wvYmxvZ2VybGl2ZS5jb21cL2NvbWViYWNrZXJcL2NvbWViYWNrZXIucGhwIiwiZGlyX3VybCI6IlwvY29tZWJhY2tlclwvIiwiaG93X29mdGVuX3Nob3ciOiJldmVyeV90aW1lIiwiYnV0dG9uX25hbWVfY2FwaXRhbGl6YXRpb24iOiJmaXJzdF91cHBlciJ9LCJhbGVydCI6ZmFsc2UsImJhciI6ZmFsc2UsImltYWdlIjp7InBvc2l0aW9uIjoiaW5fcGFnZSIsImFsaWduIjoiY2VudGVyIiwibWFyZ2luIjpbIjAiLCIwIiwiMCIsIjAiXSwiYmFja2dyb3VuZF9jb2xvciI6ImZmZmZmZiIsInNyYyI6eyIwIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0wLS5wbmciLCIyIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0yLS5wbmciLCIzIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0zLS5wbmcifX0sImF1ZGlvIjp7InNyYyI6eyIwIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvYXVkaW9cL3J1XC9tYWxlXC8xLm1wMyIsIjMiOiJodHRwOlwvXC9jYmZpbGVzZnJlZS5tYWtlZHJlYW1wcm9maXRzLnJ1XC9hdWRpb1wvcnVcL21hbGVcLzEyLm1wMyJ9LCJzdG9wX2FmdGVyX2NhbmNlbCI6dHJ1ZX19&referer=' + window.location.href,
			dataType: "jsonp",
			complete: function() {
				disableEvents();
				catcherInit(function() {
					onDomChange(function() {
						setTimeout(disableEvents, 200);
					});
				});
				jQuery('body').append(comebacker_html['whole']);
				jQuery('[id*=comebacker_iframe]').load(function() {
					jQuery(this).contents().find('object, audio, video, iframe').css('display', 'none');
					jQuery(this).contents().find('object').wrap('<div style="display: none" />');
				});
				initPreloads();
			}
		});
	}
}


// выставляю значение у инпутов
function set_params(params) {


	if ($(infoclick.order_form).length == 0) {
		console.warn('Не найден элемент order_form');
	} else {
		$(infoclick.order_form)
			.attr('action', params.order_url)
			.attr('method', 'POST')
	}


	var order_product = getProduct();
	if (order_product !== false) {
		for (var i = 0; i < order_product.length; i++) {
			$(infoclick.order_form).
			append('<input type="hidden" name="BuyForm[product_id][]" value="' + order_product[i] + '">')
		}
	}

//	console.log(infoclick.order_name)

	if ($(infoclick.order_name).length == 0) {
		console.warn('Не найден элемент order_name');
	} else {
		$(infoclick.order_name).attr('name', 'BuyForm[name]').attr('required', 'required');
	}

	if (infoclick.order_phone && $(infoclick.order_phone).length == 0) {
		console.warn('Не найден элемент order_phone');
	} else {
		$(infoclick.order_phone).attr('name', 'BuyForm[phone]').attr('required', 'required');
	}

	if (infoclick.order_email && $(infoclick.order_email).length == 0) {
		console.warn('Не найден элемент order_email');
	} else {
		$(infoclick.order_email)
			.attr('name', 'BuyForm[email]')
			.attr('type', 'email')
			.attr('required', 'required');
	}

	// у всех форм, в которых нет инпута для имени создаю пустышку
	$(infoclick.order_form).each(function(){
		var form = $(this);
		if (!$('input[name="BuyForm[name]"]', form).length) {
			form.append('<input type="hidden" name="BuyForm[name]" value="[обратный звонок]">');
		}
	});
}


// если продукт один, то можно определить на ИК - беру его,
// иначе - проверяю, и ставлю то, что стоит на лендинге
function getProduct() {
	var order_product;
	if (params.product_id.length == 1) {
		order_product = params.product_id;
	} else if (params.product_id.length == 0) {
		console.warn("К лендингу не прикрплены продукты");
		return false;
	} else if (typeof infoclick.order_product == 'undefined') {
		console.warn("Продукт не задан, и его нельзя определить автоматически");
		return false;
	} else if (!Array.isArray(infoclick.order_product)) {
		console.warn("Неверный формат продукта, должен быть [1,2,3]");
		return false;
	} else {
		order_product = infoclick.order_product;
	}

	return order_product;
}


function set_subscribe() {
	if (typeof infoclick.subscribe_form !== 'undefined') {

		// устанавливаю action
		if ($(infoclick.subscribe_form).length == 0) {
			console.warn('Не найден элемент subscribe_form');
		} else {
			$(infoclick.subscribe_form)
				.attr('action', params.subscribe_url)
				.attr('method', 'POST')
		}

		if (infoclick.subscribe_email && $(infoclick.subscribe_email).length == 0) {
			console.warn('Не найден элемент subscribe_email');
		} else {
			$(infoclick.subscribe_email)
				.attr('name', 'SubscribeForm[email]')
				.attr('type', 'email')
				.attr('required', 'required');
		}

		// если Клиент только что купил - он уже зарегистрирован, и email должен упасть к нему
		var bill_token = getUrlParameter('bill_token');
		if (bill_token) {
			$(infoclick.subscribe_form)
				.append('<input type="hidden" name="SubscribeForm[session_id]" value="' + bill_token + '">')
		}

	}
}
// отображение подтверждения заказа
function set_success() {
    if (typeof infoclick.success_form !== 'undefined') {
        var bill_token = getUrlParameter('bill_token');
        if (bill_token) {
            var domain = 'cpagetti.com';
            if (location.host === 'testlanding.local' || location.host === 'testlanding2.local' || location.host === 'testlayer.local') {
                domain = 'cpagetti.local';
            }
            $.ajax({
                url: 'http://' + domain + '/connect/bill/getInfoByToken',
                type: 'POST',
                data: {bill_token: bill_token},
                success: function(data){
                    $(infoclick.success_form).html(data);
                }
            });
        }
    }
}


function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}


function set_placeholders () {
	var url_country = getUrlParameter('g');
    //коммент по просьбе руслана 2014.12.02
	//set_placeholders_by_g(url_country);

}

function set_placeholders_by_g (g) { // отдельно, чтобы можно было задать при изменении селекта
	switch (parseInt(g, 10)) {
		case 1: // UA
			$('input[name="BuyForm[phone]"]').attr('placeholder', '+380 12 345 6789');
			break;
		case 2: // KZ
			$('input[name="BuyForm[phone]"]').attr('placeholder', '+7 717 123 4567');
			break;
		case 3: // BY
			$('input[name="BuyForm[phone]"]').attr('placeholder', '+375 12 345 6789');
			break;
		default: // RU
			$('input[name="BuyForm[phone]"]').attr('placeholder', '+7 926 123 4567');
			break;
	}
}

function set_price ($params) {
    var geo_prices =  $params.prices.split(';');
    var url_country = getUrlParameter('g');
    var prices = [];
    $.each(geo_prices, function(key, val) {
        var country_prices =  val.split(',');
        if (country_prices.length > 1) {
            prices[country_prices[0]] =  country_prices;
        }
    });
    if (prices[url_country] && prices[url_country][3] && prices[url_country][3].length) {
        $('.oldprice_substitute').html(prices[url_country][3]);
    }
    if (prices[url_country] && prices[url_country][1] && prices[url_country][1].length) {
        $('.price_substitute').html(prices[url_country][1]);
    }
    if (prices[url_country] && prices[url_country][2] && prices[url_country][2].length) {
        $('.totalprice_substitute').html(prices[url_country][2]);
    }

}


function set_validation () {

		$(infoclick.order_form).submit(function (e) {
			var mess = '';

			// validate phone
			if (infoclick.order_phone) {
				var phone_obj = getCountryId($('input[name="BuyForm[phone]"]', this).val());
				if (phone_obj.country < 0) {
					$('input[name="BuyForm[phone]"]', this).addClass('errorField');
					mess += "\nПожалуйста, введите коректный номер телефона.";
				}
			}

			if (infoclick.order_name) {
				var name = $('input[name="BuyForm[name]"]', this).val();

				if (!name) {
					$('input[name="BuyForm[name]"]', this).addClass('errorField');
					mess += "\nПожалуйста, введите коректное имя.";
				}
			}

			if (infoclick.order_email) {
				var email = $('input[name="BuyForm[email]"]', this).val();
				if (!email || !validateEmail(email)) {
					$('input[name="BuyForm[email]"]', this).addClass('errorField');
					mess += "\nПожалуйста, введите коректный email.";
				}
			}

			if (mess) {
				e.preventDefault();
				alert(mess);
				return false;
			}
		});

}


function normalizePhone(phone) {
	phone = phone.replace(/[^0-9]/g,'');
//	console.log("phone" + phone);
	var len = phone.length;
	if (len < 9 || len > 12) {
		return false;
	} else {
		return phone;
	}
}


function setMetrikaCode(counter, code, sub1, sub2, sub3, sub4, sub5) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../mc.yandex.ru/metrika/watch.js';
    document.body.appendChild(script);


    var metrika = false;
    function initMetrika() {
        if (typeof(Ya) == "undefined" || typeof(Ya.Metrika) == "undefined") {
            setTimeout(function(){
                initMetrika();
            }, 50);
        } else {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = 'try { var yaCounter' + counter + '= new Ya.Metrika({id:' + counter + '});} catch(e) {}' +
            "yaCounter" + counter + ".reachGoal('" + code + "', {'sub1': '" + sub1 + "', 'sub2': '" + sub2 + "', 'sub3': '" + sub3 + "', 'sub4': '" + sub4 + "', 'sub5': '" + sub5 + "'});";
            document.body.appendChild(script);
        }
    }
    initMetrika();
}

function getCountryId(phone) {
	phone = normalizePhone(phone);
	if (!phone) {
		return  {country: -1, phone: false};
	}

	var country = -1;

	var len = phone.length;
	if (len === 10) {
		if (phone.substr(0,1) == 7) {
			phone = '7' + phone;
			country = 2; //KZ
		} else if (phone.substr(0,1) == 0) {
			country = 13; // UK или BY
		} else if (phone.substr(0,1).search(/[3489]/) >= 0) {
			phone = '7' + phone;
			country = 0; // RU
		}
	} else if (len == 9 && phone.substr(0, 1) == 0) {
		phone = '373' + phone.substr(1);
		country = 4; // MD
	} else if (len == 11 && phone.substr(0, 3) == 373) {
		country = 4; // MD
	} else if (len == 12) {
		if (phone.substr(0, 3) == '380') {
			country = 1; // UK
		} else if (phone.substr(0, 3) == '375') {
			country = 3; // BY
		}
	} else if (len == 11 && (phone.substr(0, 1) == 7 || phone.substr(0, 1) == 8)) {
		if (phone.substr(0, 1) == 8) {
			phone = '7' + phone.substr(1);
		}

		if (phone.substr(1, 1) == 7) {
			country = 2; //KZ
		} else if (phone.substr(1,1).search(/[3489]/) >= 0) {
			country = 0; // RU
		}
	}

	return {country: country, phone: phone};
}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
