var arraySubmit = '';
var idThisForm = '';
var arrayCheckbox = '';
var arrayTextField= '';
(function ($) {
$(document).ready(function () {

'use strict';

//show popup form
$('.button-qform').on('click', function(){
    $(this).addClass('active-q-b');
    let dataForm = $(this).attr('data-form');
    let showForm = $('.quasar-form[data-id="'+dataForm+'"]').closest('.modal-box-qform');
    showForm.css({'display' : 'flex'});
    //animation popup
    setTimeout(function(){
        showForm.find('.swap-form-block').addClass('show-from-q');
    },100);
});

$('.modal-box-qform').on('click', function(q){
    if( !$(q.target).hasClass('quasar-form') && ($(".quasar-form").has(q.target).length === 0 ) && !$(q.target).hasClass('fa-timesq')  ) {  
        $('.modal-box-qform').css('display' , 'none').find('.swap-form-block').removeClass('show-from-q');
        $('.button-qform').removeClass('active-q-b');
    }
});

//close modal Esc
$(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
	    $('.modal-box-qform').each(function(){
	        if ( $(this).css('display') =='flex'){
	            $('.modal-box-qform').css('display' , 'none').find('.swap-form-block').removeClass('show-from-q');
                $('.button-qform').removeClass('active-q-b');
	        }
	    });
	}
});

//show popup form when you click on an element with class "data-starid" and attr data-starid 
$(document).on('click', '.quasar-form-button' , function(){
    let iformi  = $(this).attr('data-quasarid');
    if (typeof iformi !== typeof undefined && iformi !== false) {
        let showForm = $('.quasar-form[data-id="'+iformi+'"]').closest('.modal-box-qform');
        showForm.css({'display' : 'flex'});
        //animation popup
        setTimeout(function(){
            showForm.find('.swap-form-block').addClass('show-from-q');
        },100);
    }
});

//show popup form link
$(document).on('click', 'a' , function(q){
    let href = $(this).attr('href');
   
    if (typeof href !== typeof undefined){
        if ( href.match(/quasar-form-p-/g) ){
            q.preventDefault();
            let iformi = href.split('-');
            iformi = iformi[3];
            let showForm = $('.quasar-form[data-id="'+iformi+'"]').closest('.modal-box-qform');
            showForm.css({'display' : 'flex'});
            //animation popup
            setTimeout(function(){
                showForm.find('.swap-form-block').addClass('show-from-q');
            },100);
        }
    }
});


//close popup form
$('.close-quasar-form, .close-quasar-form i').on('click', function(){
    $('.modal-box-qform').css('display' , 'none').find('.swap-form-block').removeClass('show-from-q');
});


//input style 2
$('.form-main-element').on('focus', '.input-style-quasar, .textarea-style-quasar',  function(){
    let field = $(this).closest('.form-element-q');
    //fix phone style 2
    field.closest('.form-main-element').find('.type-phone-element').each(function(){
       if ( $(this).find('input').val() ===''){ $(this).removeClass('style-qform-2-focus'); }
    });
    if ( field.hasClass('style-qform-2') ) {
        field.addClass('style-qform-2-focus');
    }
});

$('.form-main-element').on('focusout', '.style-qform-2 .input-style-quasar, .style-qform-2 .textarea-style-quasar',  function(){
    if ( $(this).val()==='' ) { 
        let field = $(this).closest('.form-element-q');
        //all filed
        if ( !field.hasClass('type-timepicker-element') ) { field.removeClass('style-qform-2-focus'); }
        //timepicker field
        if ( field.hasClass('type-timepicker-element') ) { 
            if ( field.find('.hour-picker-q').html() =='--' && field.find('.minut-picker-q').html() =='--' ) {  field.removeClass('style-qform-2-focus'); }
        }
    }
});
//calculation function
function kalculation(thisForm) {
    
    thisForm.find('.type-itog-element').each(function(){ 
        let stringCalculation = $(this).find('div').attr('data-kalkulation');
        let object  = $(this);
        let hide = object.attr('data-hide-total');
        let hideNumber = 0;
        //array id for calculation
        var arrayCalkulation = stringCalculation.match(/\[.*?\]/g); 
        var valueField = '';
        let rounding = $(this).attr('data-rounding');
        if (arrayCalkulation !==null){
            $.each( arrayCalkulation,function(index,value){ 
                var brackets = value;
                var idfield = '#' + value.substr( 1, (value.length - 2 ))+' ';//remove brackets [ ]
                var thisField = thisForm.find(idfield);
                //value field
                if ( thisField.hasClass('type-input-element') || thisField.hasClass('type-quantity-element') ){ 
                    valueField = thisField.find('input').val(); 
                    if ( valueField !== '' && !valueField.match(/[0-9]/g) ){valueField = 0;}
                }
                if ( thisField.hasClass('type-checkbox-element') || thisField.hasClass('checkbox-img') ){ 
                    valueField = ''; 
                    thisField.find('input').each(function(){
                        if ($(this).prop("checked")){ 
                            //total all field checkbox
                            if (valueField ===''){ valueField = $(this).attr('date-rasschet'); }
                            else {
                                if ( $(this).attr('date-rasschet') !=='' ){
                                    valueField = stringMath ( valueField +'+'+$(this).attr('date-rasschet') );
                                }
                            }
                        }
                    });
                } 
                if ( thisField.hasClass('type-dropdawn-element') ){ 
                    valueField = ''; 
                    thisField.find('option').each(function(){
                        if ($(this).prop("selected")){ 
                            //total all option selected
                            if (valueField ===''){ valueField = $(this).attr('date-rasschet'); }
                            else valueField = stringMath ( valueField +'+'+$(this).attr('date-rasschet') ) ;
                        }
                    });
                } 
                if ( thisField.hasClass('type-range-element') ){ valueField = thisField.find('.tumbler-q-slider').html(); }
                if ( thisField.hasClass('type-itog-element') ){ 
                    valueField = thisField.find('.summa-itog').html(); 
                }
                if (typeof valueField =="undefined"){ valueField = 0; hideNumber++; }
                if ( valueField==='' ){ valueField = 0; hideNumber++;}
                stringCalculation = stringCalculation.replace( value , valueField );
            });
            //hide not full fill
            if ( hide == 'yes'){
                if ( hideNumber > 0){ object.addClass('hide-not-full'); } 
                if ( hideNumber === 0){ object.removeClass('hide-not-full'); } 
            }
            
            //clear extra characters
            if ( stringCalculation === ''){ stringCalculation = '0'; }
            stringCalculation = stringCalculation.replace( /[^0-9+*\-\/\(\)\.]/g , '' );
            //blocked error delenie na 0
            stringCalculation = stringCalculation.replace( /(\/0)/g , '/1' );
            var total  =  stringMath ( stringCalculation ) ;
            if ( rounding == '1' ){ total = Math.round(total); }//standart down
            if ( rounding == '2' ){ total = Math.ceil(total); }//Round up
            if ( rounding == '3' ){ total = Math.floor(total); }//Round down
            if ( rounding == '4' ){ total = total.toFixed(2); }
            if ( rounding == '5' ){ total = total.toFixed(1); }

            $(this).find('.summa-itog').html(total).attr('data-val-calculation', total);//output

            let qforma = $(this).closest('.quasar-form');
            qforma.find('.form-element-q').attr('data-logick', '0');
        }
    });
}


//launch function calculation
$('.quasar-form').on('click keyup', 'input' ,   function(){
    var thisForm = $(this).closest('.quasar-form');
    //validation
    let element = $(this).closest('.form-element-q');
    if ( element.hasClass('type-input-element') ){
        if ( element.attr('data-validation') == 'number'){
            if ( $(this).val().match(/[^0-9]/g) ) { 
                if ( ! element.hasClass('error-validation') ) { 
                    element.addClass('error-validation'); 
                    showTextErrorForm(thisForm);
                } 
            }
            else {
                if ( element.hasClass('error-validation') ) {
                    element.removeClass('error-validation'); 
                    showTextErrorForm(thisForm);
                } 
            }
        }
        if ( element.attr('data-validation') == 'number-calculator' ){
            if ( $(this).val().match(/[^0-9.,]/g) ) { 
                if ( ! element.hasClass('error-validation') ) { 
                    element.addClass('error-validation'); 
                    showTextErrorForm(thisForm);
                } 
            }
            else {
                if ( element.hasClass('error-validation') ) {
                    element.removeClass('error-validation'); 
                    showTextErrorForm(thisForm);
                } 
            }
            //replce zapetua na tochka for calculator
            let val_replace = $(this).val().replace(/,/g, '.');
            $(this).val( val_replace  ); 
        }
        if ( element.attr('data-validation') == 'alphabete' ){
            if ( $(this).val().match(/[0-9@#$%^&*(){}|+=_№!"':;.,<>?!`~\-\]\[\\\/\s]/) ) { 
                if ( ! element.hasClass('error-validation') ) { 
                    element.addClass('error-validation'); 
                    showTextErrorForm(thisForm);
                } 
            }
            else {
                if ( element.hasClass('error-validation') ) {
                    element.removeClass('error-validation'); 
                    showTextErrorForm(thisForm);
                } 
            }
        }
    }
    if ( thisForm.find('.type-itog-element').length > 0 ) { 
        kalculation(thisForm); 
    }
});

$('.quasar-form').on('change', 'select' , function(){
    var thisForm = $(this).closest('.quasar-form');
    if ( thisForm.find('.type-itog-element').length > 0 ) { 
        kalculation(thisForm); 
    }
    //for logick zapolneno or nezapolneno
    let object = $(this).closest('.form-element-q');
    if ( object.hasClass('type-dropdawn-element')  ){
        let zapolnenie = 0;
        let valuselect = object.find('option:selected');
        if ( valuselect.attr('data-selected')=='yes') { zapolnenie++; }
        if ( zapolnenie > 0 ) { object.attr('data-val', 'false'); }
        else { object.attr('data-val', 'true'); }
    }
});
		

//launch slider UI
function sliderUpdate(){
    $('.type-range-element').each(function(){ 
        var element = $(this).find('.polzet');
        let width = element.attr('data-width');
        let color1 = element.attr('data-color1');
        let color2 = element.attr('data-color2');
        let color3 = element.attr('data-color3');
        let color4 = element.attr('data-color4');
        let minQ = Number(element.attr('data-min'));
        let maxQ = Number(element.attr('data-max'));
        let stepQ = Number(element.attr('data-step'));
        let valQ = Number(element.attr('data-val'));
 
        element.slider({// UI slider
            min: minQ,
            max: maxQ,
	        step: stepQ,
            value: valQ,
            range: "min",
            animate: "fast",
            slide : function(event, ui) { 
                if (ui.value !==0){ 
                    $(this).find('span').html("<div class='tumbler-q-slider show-informer' style='color: "+color4+";'>" + ui.value + "</div>"); 
                } 
                else { 
                    $(this).find('span').html("<div class='tumbler-q-slider' style='color: "+color4+";'>" + ui.value + "</div>"); 
                }
                
                //1. launch calulation
                var thisForm = $(this).closest('.quasar-form');
                if ( thisForm.find('.type-itog-element').length > 0 ) { kalculation(thisForm); }
                //2. launch logic function
                thisForm.find('.form-element-q').attr('data-logick', '0');
            }   
        });
        //add sclae in range
        if ( element.attr('data-sh')==='yes' || element.attr('data-sh-2')==='yes' ) {
            let slider = $(this).find('.polzet');
            let top = slider.attr('data-m-s');
            if ( element.attr('data-sh')==='yes' && element.attr('data-sh-2')==='not' ) {
                if ( minQ!=='' && maxQ!=='' ){
                    slider.addClass('scale-q');
                    let summaVal = maxQ - minQ;
                    let leftPX = 0;
                    slider.append( $('<div class="rangeotm"><div class="scale-sl-q">'+minQ+'</div></div>').css({'left' : leftPX+'%', 'top': top, 'color': element.attr('data-color5') }) );
                    leftPX = 100;
                    slider.append( $('<div class="rangeotm"><div class="scale-sl-q">'+maxQ+'</div></div>').css({'left': leftPX+'%', 'top': top, 'color': element.attr('data-color5') }) );
                }
            }
            else {
                if ( element.attr('data-sh-2')==='yes' ) {
                    if ( minQ!=='' && maxQ!=='' ){
                        slider.addClass('scale-q');
                        let summaVal = (maxQ - minQ) / stepQ;
                        summaVal = Math.floor(summaVal);
                        let left = 100 / summaVal;
                        let leftPX = 0;
                        while( minQ <= maxQ ){
                            let val = minQ;
                            if ( minQ != Math.floor(minQ) ){
                                val = val.toFixed(1);
                            }
                            slider.append( $('<div class="rangeotm"><div class="scale-sl-q">'+val+'</div></div>').css({'left' : leftPX+'%', 'top' : top, 'color': element.attr('data-color5') }) );
                            leftPX = leftPX + left;
                            minQ = minQ + stepQ;
                        }
                    }
                }
            }
        }
        //position
        if ( element.attr('data-p-s')==='bottom' ){ element.addClass('button-scale-q'); }
        
        $(this).find('.polzet').find('span').html("<div class='tumbler-q-slider'>" +  element.slider("value") + "</div>");  
        $(this).find('.ui-slider-range').css({
            'background-color' : color1,
            'height' : element.css('height'),
            'border-radius' : element.css('border-radius'),
        });
        $(this).find('.polzet').css({ 'background-color' : color2 });
        $(this).find('.ui-slider-handle').css('background-color', color3);
    });
}
      
sliderUpdate();

//start calculator
$('.quasar-form').each(function(){
    if ( $(this).find('.type-itog-element').length > 0 ){
        kalculation( $(this) );
    }
});
     

//activation UI datepicker
function datapiker() {
    $('.type-data-element').each(function(){
        let lang = $(this).attr('data-lang');
        if ( lang =='ru' ){
            $.datepicker.setDefaults({
				closeText: 'Закрыть',
				prevText: '<Пред',
				nextText: 'След>',
				currentText: 'Сегодня',
				monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
				monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
				dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
				dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
				dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
				weekHeader: 'Нед',
				dateFormat: 'dd-mm-yy',
				firstDay: 1,
				showAnim: 'slideDown',
				isRTL: false,
				showMonthAfterYear: false,
				yearSuffix: ''
			} );
        }
        let setting_1 = 0;
        if ( $(this).attr('data-s-1') =='not' ){ setting_1 = null; }
        let setting_2 = $(this).attr('data-s-2');
        
        let datacolor1 = $(this).find('input').attr('data-colorsw');
        let datacolor2 = $(this).find('input').attr('data-colorsw2');
        let datacolor3 = $(this).find('input').attr('data-colorsw3');
        
        $(this).find('input').datepicker({//date table call
            beforeShow: function(input, inst) {
                //before action
                $('#ui-datepicker-div').addClass('qdatapicker').attr('data-id-field', $(this).closest('.type-data-element').attr('id') );
                $('#ui-datepicker-div').find('.ui-datepicker-header').css('background-color', datacolor1) ;
                //color of setting
                setTimeout(function(){
                    $('.ui-datepicker-header').css({'background-color' : datacolor1 , 'color' : datacolor2 }).find('.ui-corner-all').css('color' , datacolor2 ); 
                    $('.ui-datepicker-calendar a').css({'color' : datacolor3}); 
                },30);
            },
            beforeShowDay: function(date){
                //disable wekend
                if ( setting_2 =='yes' ){
                    let dayOfWeek = date.getDay();
                    if (dayOfWeek === 0 || dayOfWeek === 6){
        				return [false];
        			} 
        			else {
        				return [true];
        			}
        		}
        		else { return [true]; }
		    },
            onChangeMonthYear: function(year, month, widget) {
                let datacolor1 = $(this).attr('data-colorsw');
                let datacolor2 = $(this).attr('data-colorsw2');
                let datacolor3 = $(this).attr('data-colorsw3');
                setTimeout(function(){
                    $('.ui-datepicker-header').css({'background-color' : datacolor1 , 'color' : datacolor2 }).find('.ui-corner-all').css('color' , datacolor2 ); 
                    $('.ui-datepicker-calendar a').css({'color' : datacolor3}); 
                },20);
            },
            minDate: setting_1,
        });
    });
}

if( $('.type-data-element').length > 0 ){
    datapiker();
}

//fix date style2
$('.type-data-element').on('change',  function(){
    let object = '#'+$('.qdatapicker').attr('data-id-field');
    if ( $(object).hasClass('style-qform-2') ){
        $(object).addClass('style-qform-2-focus'); 
    }
});

//custom timepicker
$('.quasar-form').on('click', '.type-timepicker-element .input-swap', function(){
    if ( $(this).find('.wrap-time-list-q').length === 0 ) {
        let object = $(this).parent();
        $('.wrap-time-list-q').remove();
        $('.active-time-q').removeClass('active-time-q').find('.wrap-time-list-q').remove();
        object.addClass('active-time-q');
        let min = object.attr('data-min').split(':');
        let max = object.attr('data-max').split(':');
        let step = object.attr('data-step');
        let time = '<div class="wrap-time-list-q" style="background-color:'+object.attr('data-color-2')+';">';
        let hours = '<div class="hours-list-q">';
        let minute = '<div class="minute-list-q">';
        let valHours = $(this).find('.hour-picker-q').html();
        let valMinute = $(this).find('.minut-picker-q').html();
        let number = 0;
        let totalHour = 0;

        while (number < 24) {
            let val = '';
            if (number < 10){ val = '0'+number; }
            else { val = number; }
            if ( Number(val) >= min[0] && Number(val) <= max[0] ){ //min max hour
                if ( String(valHours) ==  String(val) ){hours = hours + "<div class='active-t-q' style='color:"+object.attr('data-color-4')+"; background-color:"+object.attr('data-color-3')+";'>"+val+"</div>";}
                else { hours = hours + "<div style='color:"+object.attr('data-color-1')+";'>"+val+"</div>"; }
                totalHour++;
            }
            number++;
        }
        hours = hours + '</div>';
        time = time + hours;
    
        number = 0;
        let stepVal = 1;
        while (number < 60) {
            let val = '';
            if (number < 10){ val = '0'+number; }
            else { val = number; }
            if ( totalHour === 1 ){
                if ( stepVal === 1 ){//step
                    if ( Number(val) >= min[1] && Number(val) <= max[1] ){ //min max minut
                        if ( String(valMinute) == String(val) ){ minute = minute + "<div class='active-t-q' style='color:"+object.attr('data-color-4')+"; background-color:"+object.attr('data-color-3')+";'>"+val+"</div>";}
                        else { minute = minute + "<div style='color:"+object.attr('data-color-1')+";'>"+val+"</div>"; }
                    }
                }
            }
            else { 
                //stepVal = Number(stepVal);
                if ( stepVal === 1 ){//step
                    if ( String(valMinute) == String(val) ){ minute = minute + "<div class='active-t-q' style='color:"+object.attr('data-color-4')+"; background-color:"+object.attr('data-color-3')+";'>"+val+"</div>";}
                    else { minute = minute + "<div style='color:"+object.attr('data-color-1')+";'>"+val+"</div>"; }
                }
            }
            number++;
            stepVal--;
            if ( stepVal === 0 ){ stepVal =  Number(step); }
        }
        time = time + minute;
        time = time + '</div>';
        $(this).append(time);
    }
});

//window timepicker remove
$(document).on('click', function(e){
    if ( $('.wrap-time-list-q').length > 0 ){
        if ( (!$(".active-time-q").is(e.target)) && ($(".active-time-q").has(e.target).length === 0) )  {
            $('.wrap-time-list-q').remove();
            $('.active-time-q').removeClass('active-time-q');
        }
    }
});

$('.quasar-form').on('click', '.hours-list-q div, .minute-list-q div' , function(e){
    let object = $(this).parent();
    let val = $(this).html();
    let mainObject = $(this).closest('.type-timepicker-element');
    $(this).parent().find('.active-t-q').removeClass('active-t-q').css({"color" : mainObject.attr('data-color-1'), "background-color" : '' });
    $(this).addClass('active-t-q').css({"background-color" : mainObject.attr('data-color-3'), "color" : mainObject.attr('data-color-4')  });
    if ( object.hasClass('hours-list-q') ){
        object.closest('.type-timepicker-element').attr('data-hour' , val).find('.hour-picker-q').html(val);
    }
    if ( object.hasClass('minute-list-q') ){
        object.closest('.type-timepicker-element').attr('data-minute' , val).find('.minut-picker-q').html(val);
    }
    mainObject.removeClass('empty-filed-q');
    mainObject.attr( 'data-time',  mainObject.find('.hour-picker-q').html() + ':' + mainObject.find('.minut-picker-q').html() );//for logic condition
    //for logick
    if ( mainObject.find('.hour-picker-q').html() !='--' && mainObject.find('.minut-picker-q').html() !='--' ) {  
        mainObject.find('input').trigger('keyup'); //zapolneno
    }
    //fix style 2
    if ( mainObject.hasClass('style-qform-2') ){
        if ( mainObject.find('.hour-picker-q').html() !='--' || mainObject.find('.minut-picker-q').html() !='--' ) { 
            mainObject.find('.wrap-time-picker-q').css('display' ,'flex');
            mainObject.addClass('style-qform-2-focus');
        }
    }
}); 

//captcha
function captcha(){
    $('.type-captcha-element').each(function(){
        //random
        var elementcaptcha = $(this).find('.captcha-element-q');
        var stringk = '';
        elementcaptcha.find('img').each(function(){
            function getRandomInRange(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var random1 = getRandomInRange(0, 8);
            var linkimg =  $(this).attr('src').split('/');
            linkimg.pop();
            var string ='';
            $.each(linkimg,function(index,value){
                string = string + value +'/';
            });
            string = string + 'qfc-'+random1+'.png';
            stringk = stringk + '/' + random1;
            $(this).attr({'src': string });
        });
        stringk = stringk.split('/');
        if (stringk[1] > stringk[2]  ) {
            $(this).find('div').each(function(){
                if( $(this).html()=='+'){ $(this).html('-'); }
            });
        }
        else {  
            $(this).find('div').each(function(){
                if( $(this).html()=='-'){ $(this).html('+'); }
            }); 
        }
    });
}
captcha();



//fix style with empty title
$('.form-main-element .type-upload-element').each(function(){
    if ($(this).find('.heading-field-q').html()===''){ $(this).find('.heading-field-q').css('top' , '-5px'); }
});

var idNumber = 0;
//uplod file
$('.type-upload-element').on('change', 'input[type="file"]',  function(){	
    if ( $(this).val()!=='' ) {
        let nameFile = this.files[0].name;
        let nameFileUpload = nameFile.length;
        let sizeFile = this.files[0].size;
        let condition = 0;
        let button = $(this).closest('.type-upload-element');
        //type file
        let arrayTypeFile = nameFile.split('.');
        let typeFile = arrayTypeFile .pop();// typeFile
        $(this).closest('label').removeClass('empty-filed-q').prev('.messagereq').find('span').css('display', 'none'); 
        //conditions
        //size file
        let max = button.attr('data-v') * 1000000 ;
        if ( sizeFile > max ){ 
            $(this).closest('label').addClass('empty-filed-q').prev('.messagereq').find('.error-upload-1').css('display', 'flex');  
            $(this).attr('type', 'text'); 
            $(this).attr('type', 'file');
            $(this).closest('label').find('.textfq').removeClass('tochkiq');
            condition++;
        }
        //type fiel (typeFile)
        let extension = button.attr('data-r');
        let number = 0;
        if ( extension.indexOf(',') > 0 ){
            var arrayExtension = extension.split(','); 
            $.each(arrayExtension,function(index,value){ 
                if(value == typeFile){ number++; }
            });
        }
        if ( extension.indexOf(',') == -1 ){ 
            if (extension == typeFile){ number++; }
        }
        if ( number === 0 ){ 
            $(this).closest('label').addClass('empty-filed-q').prev('.messagereq').find('.error-upload-2').css('display', 'flex'); 
            $(this).attr('type', 'text');
            $(this).attr('type', 'file');  
            $(this).closest('label').find('.textfq').removeClass('tochkiq');
            condition++;
        }
        //name file in button
        if (nameFileUpload > 16 && condition === 0 ) { 
            nameFile = nameFile.substr( 0, nameFileUpload - (nameFileUpload - 16) ); //maximum name length
            $(this).closest('label').find('.textfq').addClass('tochkiq');
            $(this).closest('label').find('.textfq').text(nameFile);
        }
        if (nameFileUpload <= 16) { 
            $(this).closest('label').find('.textfq').removeClass('tochkiq'); 
            $(this).closest('label').find('.textfq').text(nameFile);
        }
        idNumber++;
        //plus add file
        if( button.attr('data-max') > 1) {//condition file limit
            if ( button.attr('data-max') >  button.find('label').length ) {
                if ( $(this).closest('.type-upload-element').find('.add-button-upload').length === 0 ) {
                    let CreadetElement ='<div class="additionally-box"> <div class="add-button-upload">'+ button.attr('data-add') +'</div></div>';
                    button.append(CreadetElement);
                }
            }
        }
    }
    else {
        let textButton = $(this).closest('.type-upload-element').attr('data-text');
        $(this).closest('label').find('.textfq').removeClass('tochkiq').text(textButton); 
    }
});

$('.type-upload-element').on('click', '.add-button-upload',  function(){ 
    let stylebutton = [];
    let button = $(this).closest('.type-upload-element');
    let idq = button.find('label').filter(":first").attr('for');
    stylebutton[0] = button.find('label');
    stylebutton[1] = stylebutton[0].attr('style');
    stylebutton[2] = stylebutton[0].attr('class');
    stylebutton[3] = stylebutton[0].find('i').attr('style');
    let idq2 = idq + idNumber;
    //add upload button
    let CreadetElement = '<span class="messagereq">'+button.find('.messagereq').filter(":first").html()+'</span> <label class="'+stylebutton[2]+'" style="'+stylebutton[1]+'" for="'+idq2+'"><span class="textfq">'+button.attr('data-text')+'</span> <div class="fa-icons-q"><i class="fa fa-uploadq" style="'+stylebutton[3]+'"></i></div><input id="'+idq2+'" class="element-css-q" name="userFile1" type="file"></label>'; 
    button.find('.swap-button-upload').append(CreadetElement);
    idNumber++;
    //hide message
    $('#'+idq2).closest('label').removeClass('empty-filed-q').prev('.messagereq').find('span').css('display', 'none');
    //add remove button
    if ( button.find('.remove-button-upload').length === 0 && button.find('label').length > 1 ){
        CreadetElement ='<div class="remove-button-upload"><i class="fa fa-timesq"></i></div>';
        button.find('.additionally-box').append(CreadetElement);
    } 
    //add class margin
    if ( button.find('label').length > 1 ) {
        if ( !button.find('.swap-button-upload').hasClass('margin-bottom-upload') ){ button.find('.swap-button-upload').addClass('margin-bottom-upload'); }
    }
    else { 
        if ( button.find('.swap-button-upload').hasClass('margin-bottom-upload') ){ 
            button.find('.swap-button-upload').removeClass('margin-bottom-upload'); 
        } 
    }
  
    //remove plus add file
    if ( $(this).closest('.type-upload-element').find('label').length >= $(this).closest('.type-upload-element').attr('data-max') ) { 
       $(this).remove();
    }
});

$('.type-upload-element').on('click', '.remove-button-upload',  function(){ 
    let button = $(this).closest('.type-upload-element');
    let remove = button.find('label').filter(":last");
    remove.prev('.messagereq').remove();
    remove.remove();
    if ( button.find('label').length == 1 ) { button.find('.remove-button-upload').remove(); }
    //plus add file
    if ( button.attr('data-max') > 1) {//condition file limit
        if ( button.find('.add-button-upload').length === 0 ) {
            if ( button.find('label').length > 0 ) {
                let CreadetElement ='<div class="add-button-upload">'+ button.attr('data-add') +'</div>';
                button.find('.additionally-box').append(CreadetElement);
            }
        }
    }
});	

//launch phone
$('.type-phone-element').each(function(){ 
    let val = $(this).find('input').attr('data-mask');
    if ( $(this).find('input').attr('data-mask-a') !='not' ){
        if ( val !=='' ){ $(this).find('input').mask( val, {autoclear: false} ); }
    }
});

//auto filling
$('.quasar-form').each(function(){
    let qforma = $(this);
    qforma.find('.type-input-element input').each(function(){
        if ( $(this).attr('data-filling-a') == '1' && $(this).attr('data-filling') !== '' ) { 
            let input = $(this);
            let classFiling = $(this).attr('data-filling');
            if ( !classFiling.match(/,/g) ){
                let object = $('.'+classFiling);
                let type = object.prop('nodeName');
                if ( type == 'INPUT' || type == 'TEXTAREA' || type == 'SELECT' ){
                    input.val( $('.'+classFiling).val() ) ;
                }
                else  { 
                    input.val( $('.'+classFiling).html() ) ;
                }
                //fix fot style 2
                if ( input.closest('.form-element-q').hasClass('style-qform-2') ) {
                    if ( input.val !==''){ $(this).closest('.form-element-q').addClass('style-qform-2-focus'); }
                }
            }
        }
    });
});


function showTextErrorForm(qforma){
    if ( !qforma.hasClass('warning-add') ){
        qforma.find('.error-filed-q').each(function(){
            $(this).html( $(this).attr('data-text') );
        });
        
        let val = qforma.find('.error-qform');
        val.html( val.attr('data-text') );
        
        qforma.find('.messagereq span').each(function(){
            $(this).html( $(this).attr('data-text') );
        });
        
        val = qforma.find('.message-send-q span');
        val.html( val.attr('data-text') );
        
        val = qforma.find('.text-prorgress-send');
        val.html( val.attr('data-text')+': ');
        
        val = qforma.find('.text-after-send-q');
        val.html( val.attr('data-text') );
        
        qforma.addClass('warning-add');
        
        //text after send
        let object = qforma.find('.text-after-send-q');
        let objectHtml = object.html();
        let textDefoult = qforma.find('.none-element-send-q').html();
        if ( objectHtml.match(/\[default value\]/) ) {
            objectHtml = objectHtml.replace( '[default value]' , textDefoult);
            object.html( objectHtml );
        }
    }
}

// Send emails
$('.quasar-form').on('submit', function(e) {

    e.preventDefault();
    e.stopPropagation();
    
    var qforma = $(this).closest('.quasar-form');
    showTextErrorForm(qforma);
    qforma.find('.tab-box-q').filter(':last').addClass('last');
    if ( qforma.find('.activ-tab-q').hasClass('last') || qforma.find('.tab-box-q').length === 0  ) {
        
        var valueRequed = 0; 
        var numberRequed = 0;
        //required field conditions
        qforma.find('.requed-field-q').each(function(){ 
            numberRequed++;
            //1. input, datepicker, email
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-phone-element') || $(this).hasClass('type-data-element') || $(this).hasClass('type-upload-element') ) { 
                let input = $(this).find('input');
                if ( input.val() ==="" && input.attr('data-filling-a') != '2' && input.attr('data-filling-a') != '1' ) { 
                    $(this).closest('.form-element-q').addClass('empty-filed-q'); 
                    valueRequed = 1;
                } 
            }
            //2. timepicker
            if ( $(this).hasClass('type-timepicker-element' ) ) { 
                if ( $(this).find('.hour-picker-q').html() =='--' || $(this).find('.minut-picker-q').html() =='--' ) {  
                    $(this).closest('.form-element-q').addClass('empty-filed-q'); 
                    valueRequed = 1;
                }
            }
            //3. checkbox
            if ( $(this).hasClass('type-checkbox-element') || $(this).hasClass('checkbox-img') || $(this).hasClass('type-privacy-element') ) { 
                let elementThis = $(this);
                let number = 0; 
                $(this).find('input').each(function(){
                    if ( $(this).prop("checked") ){ number++ ; }
                }); 
                if (number === 0){
                    if(!$(elementThis).hasClass('empty-filed-q')) { $(elementThis).addClass('empty-filed-q'); }
                    valueRequed = 1 ;
                } 
            } 
            //4. textarea
            if ($(this).hasClass('type-textarea-element')) {
                if ($(this).find('textarea').val() ===""){ 
                    $(this).addClass('empty-filed-q'); 
                    valueRequed = 1;
                } 
            }
            //5. dropdawn
            if ($(this).hasClass('type-dropdawn-element')) { 
                let valuselect = $(this).find('option:selected');
                if ( valuselect.attr('data-selected')=='yes') { 
                    $(this).addClass('empty-filed-q');
                    valueRequed = 1;
                }
            }
            //6. captcha
            if ($(this).hasClass('type-captcha-element')) { 
                if ($(this).find('input').val() ===""){ 
                    $(this).addClass('empty-filed-q'); 
                    valueRequed = 1;
                } 
                else {
                    var stringc ='';
                    var valueinput = $(this).find('input').val();
                    $(this).find('img').each(function(){
                        var arrayCaptcha = $(this).attr('src').split('/');
                        var valc = arrayCaptcha.pop();
                        valc = valc.split('-');
                        var valc2 = valc[1].split('.');
                        stringc = stringc + valc2[0] + '/';
                    });
                    stringc = stringc.split('/');
                    var verification='';
                    $(this).find('div.pl-form-q').each(function(){
                        if ( $(this).html()=='-' ){ verification = ( Number(stringc[0])+1) - ( Number(stringc[1])+1 ); }
                        if ( $(this).html()=='+' ){ verification = ( Number(stringc[0])+1) + ( Number(stringc[1])+1 ); }
                    });
                    //final validationFieldValue
                    if( valueinput != verification ){  
                        $(this).closest('.type-captcha-element').addClass('error-captcha-q');  
                        captcha(); 
                        valueRequed = 2;  
                       
                    }
                }
            }
        }); 
        //validation key
        var numberfalid = 0;
        var keyVerification = qforma.find('.form-main-element').attr('data-q');
        if (typeof keyVerification =="undefined"){ numberfalid++; }
        else {
            keyVerification = keyVerification.split('&');
            var arrayKey = keyVerification[0].split('A');
            if (keyVerification !=='' && arrayKey.length === 3){
                if ( qforma.attr('data-id') != ( keyVerification[1] - 7) ){ numberfalid++; } //condition id form
                if ( arrayKey[0] != numberRequed ){ numberfalid++; } //quantity requed field
                //quantity numbers and alphabets
                if ( arrayKey[1] != qforma.find('.form-element-q[data-validation="Only numbers"]').length ){ numberfalid++; }
                if ( arrayKey[2] != qforma.find('.form-element-q[data-validation="Only alphabets"]').length ){ numberfalid++; }
            }
            else { numberfalid++; }
        
            if (numberfalid !== 0) { 
                qforma.find('.swap-error-qform').css('display', 'block');
                valueRequed = 10; 
            }
            else {qforma.find('.swap-error-qform').css('display', 'none');}
        } 
        //validation only numbers
        qforma.find('.form-element-q[data-validation="number"]').each(function(){
            let input = $(this).find('input');
            if ( input.val().match(/[^0-9]/g) && input.attr('data-filling-a') != '2' && input.attr('data-filling-a') != '1') { 
                if ( ! $(this).hasClass('empty-filed-q') ) { 
                    $(this).addClass('error-validation'); 
                    valueRequed = 3;
                } 
            }
        });
        //validation only numbers for calculation
        qforma.find('.form-element-q[data-validation="number-calculator"]').each(function(){
            let input = $(this).find('input');
            if ( input.val().match(/[^0-9.,]/g) && input.attr('data-filling-a') != '2' && input.attr('data-filling-a') != '1') { 
                if ( ! $(this).hasClass('empty-filed-q') ) { 
                    $(this).addClass('error-validation'); 
                    valueRequed = 3;
                } 
            }
        });
        //validation only alphabets
        qforma.find('.form-element-q[data-validation="alphabete"]').each(function(){
            let input = $(this).find('input');
            if ( input.val().match(/[0-9@#$%^&*(){}|+=_№!"':;.,<>?!`~\-\]\[\\\/\s]/) ) { 
                if ( ! $(this).hasClass('empty-filed-q') && input.attr('data-filling-a') != '2' && input.attr('data-filling-a') != '1') { 
                    $(this).addClass('error-validation');
                    valueRequed = 3;
                } 
            }
        });
        //validation email
        qforma.find('.type-email-element').each(function(){
            let email = $(this).find('input').val();
            if ( email !=='' ){
                function validateEmail() {
                    var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    return re.test(String(email).toLowerCase());
                }
                let valid = validateEmail();
                if ( valid === false ){
                    $(this).addClass('error-mail-q');
                    valueRequed = 4; 
                }
            }
        });
        //validation phone
        qforma.find('.type-phone-element').each(function(){
            let mask = $(this).find('input').attr('data-mask-a');
            if ( mask ==='yes' ){
                let mask2 = $(this).find('input').attr('data-mask');
                let number = mask2.match(/[0-9]/g).length;
                if ( mask2 !== '' ){
                    let phone = $(this).find('input').val();
                    if ( phone !=='' ){
                        phone = phone.match(/[0-9]/g).length;
                        if ( number != phone ) {  
                            $(this).addClass('error-validation');
                            valueRequed = 3;
                        }
                    }
                       
                }
            }
        });
        //validation special
        if ( qforma.find('.special-field').val() !=='' ) {
            valueRequed = 1; 
        }

        if (valueRequed === 0){
            arrayCheckbox = '';
            arrayTextField = '';
            var dataField = '';
            var form_data = new FormData(); 
            form_data.append('id-form', qforma.attr('data-id') ); //add id this form in message

            qforma.find('.form-element-q').each(function(){
                //input, email, datepicker
                var heading = '';
                if ($(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-phone-element') || $(this).hasClass('type-data-element') ){
                    let input = $(this).find('input');
                    //auto filling
                    if ( input.attr('data-filling-a') == '2' ) { 
                        let classFiling = input.attr('data-filling');
                        if ( !classFiling.match(/,/g) ){
                            input.val( $('.'+classFiling).html() ) ;
                        }
                        else {
                            classFiling = classFiling.split(',');
                            if ( classFiling[0]!=='' && classFiling[1]!=='' ){
                                //popup form
                                if ( qforma.hasClass('form-type-popup') ){
                                    let id = qforma.attr('data-id');
                                    let button = $('.active-q-b');
                                    let val = button.closest('.'+classFiling[0]).find('.'+classFiling[1]).html();
                                    input.val( val) ;
                                }
                                else {
                                    let val = qforma.closest('.'+classFiling[0]).find('.'+classFiling[1]).html();
                                    $(this).val( val ) ;
                                }
                            }
                        }
                    }
                    
                    if ($(this).find('input').val() !==''){ 
                        if ( $(this).find('.heading-field-q').length > 0 ) { 
                            heading = $(this).find('.heading-field-q').html(); 
                        }
                        else { 
                            heading= '';
                        }
                        dataField = dataField + $(this).attr('id') + ";" + heading + ';' + $(this).find('input').val() + 'RazDelITEL';
                        arrayTextField = arrayTextField + $(this).attr('id') + ";" + heading + ';' + input.val() + 'RazDelITEL';
                    }
                }
                //checkbox
                if ( $(this).hasClass('type-checkbox-element') || $(this).hasClass('checkbox-img') ){
                    let validationFieldValue = 0; 
                    let thisElement = $(this);
                    $(this).find('input').each(function(){
                        if ( $(this).prop("checked") ){
                            validationFieldValue++;
                            if (validationFieldValue == 1) { 
                                dataField = dataField + thisElement.attr('id') + ";" + thisElement.find('.heading-field-q').html() + ";"; 
                            }
                            dataField = dataField + $(this).next('label').find('.html-text-check-q').html() + ';';
                            arrayCheckbox = arrayCheckbox + $(this).next('label').find('.html-text-check-q').html() + ';';
                        }
                    });
                    if (validationFieldValue !== 0){ 
                        dataField = dataField +'RazDelITEL'; 
                        arrayCheckbox = arrayCheckbox +'custom-class:' + $(this).find('input').attr('class')+ 'RazDelITEL'; 
                    }
                }
                //upload
                if ($(this).hasClass('type-upload-element')){
                    $(this).find('input').each( function(){
                        var idnameq = $(this).attr('name');
                        form_data.append('file[]', $(this).prop('files')[0]);
                    });
                }

                //textarea
                if ($(this).hasClass('type-textarea-element')) {
                    if ( $(this).find('.heading-field-q').length > 0 ) { 
                        heading = $(this).find('.heading-field-q').html(); 
                    }
                    else heading = '';
                    if ( $(this).find('textarea').val() !==''){ 
                        dataField = dataField + $(this).attr('id') + ";" + heading + ';' + $(this).find('textarea').val() + 'RazDelITEL';
                    }
                }
                //dropdown
                if ($(this).hasClass('type-dropdawn-element')) {
                    if ( $(this).find('.heading-field-q').length > 0 ) { 
                        heading = $(this).find('.heading-field-q').html();
                    }
                    else heading = '';
                    if ($(this).find('select').val() !==''){
                        dataField = dataField + $(this).attr('id') + ";" + heading + ';' + $(this).find('select').val() + 'RazDelITEL';
                    }
                }
                //range
                if ($(this).hasClass('type-range-element')) { 
                    dataField = dataField + $(this).attr('id') + ";" + $(this).find('.heading-field-q').html() + ';' + $(this).find(".polzet").slider( "value" ) + 'RazDelITEL' ;
                }
                //timepicker
                if ($(this).hasClass('type-timepicker-element')) { 
                    if ( $(this).find('.hour-picker-q').html() !='--' || $(this).find('.minut-picker-q').html() !='--' ) {  
                        dataField = dataField + $(this).attr('id') + ";" + $(this).find('.heading-field-q').html() + ';' + $(this).find(".hour-picker-q").html() + ':' + $(this).find(".minut-picker-q").html() + 'RazDelITEL' ;
                    }
                }
                //total
                if ($(this).hasClass('type-itog-element')) {
                    dataField = dataField + $(this).attr('id') + ";" + ";" + $(this).find('div').html() + 'RazDelITEL';
                }
            });

            //data mail
            form_data.append('action', 'mail_send_q'); 
            form_data.append('nonce_code', params.nonce); 
            form_data.append('contentQform', dataField );
            form_data.append('urlpage', window.location.href ); 
            form_data.append('titlepage', qforma.attr('data-title') ); 
            //addon 1 info product
            let stringWooData = '';
            if ( $('.wrap-button-quasar-woo').length > 0 ){
                let object = $('.active-q-b').closest('.wrap-button-quasar-woo');
                //id
                stringWooData = stringWooData +'id;'+ object.attr('data-id') +';' + object.attr('data-id-v') +'/';
                //name
                if ( qforma.find('.type-name-product').length > 0 ){
                    stringWooData = stringWooData +'name;'+ qforma.find('.type-name-product').html() +'/';
                }
                //quantity
                if ( qforma.find('.number-product-in-q').length > 0 ){
                    stringWooData = stringWooData +'quantity;'+ qforma.find('.number-product-in-q input').val() +';default/';
                }
                else {
                    if ( $('.active-q-b').length > 0  ){
                        let val = object.attr('data-qua');
                        if ( val !== 0 ){
                            if ( qforma.find('#'+val).length > 0 ){ 
                                stringWooData = stringWooData +'quantity;'+ qforma.find('#'+val).find('input').val() +';custom/';
                            }
                        }
                    }
                } 
                //prise
                if ( qforma.find('.product-prise-q').length > 0 ){
                    stringWooData = stringWooData +'price;'+ object.attr('data-id') +'/';
                }
                //empty 
                if ( qforma.find('.wrap-select-variable-q').length > 0 ){
                    let block = qforma.find('.wrap-select-variable-q');
                    if ( block.hasClass('error-variable-q') ){ 
                        block.removeClass('error-variable-q').find('.text-requed-woo-q').remove();
                    }
                    if ( object.attr('data-fill')=='not' ){ 
                        block.addClass('error-variable-q').append( '<div class="text-requed-woo-q">'+object.find('.variable-block-q').attr('data-text-r')+'</div>' );
                        return; 
                    }
                    else {
                        if ( object.attr('data-id-v')=='none' || object.attr('data-id-v')==='' || object.attr('data-full')==='not' ){ 
                            block.addClass('error-variable-q').append( '<div class="text-requed-woo-q" style="top: -25px;">'+object.find('.variable-block-q').attr('data-text-not-v')+'</div>' );    
                            return; 
                        }
                    }
                    
                }
                //data val 
                stringWooData = stringWooData +'data-val;'+ object.attr('data-val') +'/';
            }
            if ( stringWooData !=='' ){form_data.append('product-info', stringWooData ); }
            
    	    $.ajax({
                beforeSend: function() {
                    qforma.find('.text-after-send-q').css('display', 'flex');
                    //collapse form
                    if ( qforma.find('.text-after-send-q').attr('data-after-submit') =='yes' ){
                        qforma.find('.form-main-element').slideToggle();
                    }
                    else {
                        qforma.find('.text-after-send-q').css({
                            'position' : 'absolute',
                            'z-index' : '5',
                            'background-color' : '#fff',
                            'left' : '20px',
                            'right' : '20px',
                            'border' : '1px solid #d5d2d2',
                        });
                        qforma.find('.text-after-send-q').css({
                            'opacity' : '1',
                        });
                        
                        setTimeout(function(){
                            qforma.find('.text-after-send-q').css({
                                'display' : 'none',
                            });
                        }, 2800);
                    }
                    
                    //scroll after submit
                    if ( !qforma.hasClass('form-type-popup') && qforma.find('.text-after-send-q').attr('data-scroll') =='yes' ){
                        let heightWindow3 = ( $(window).height() / 100 ) * 40 ;
                        let poz = qforma.find('.text-after-send-q').offset().top - heightWindow3;
                        $('html, body').animate({
                            scrollTop: poz
                        }, 300);
                    }
                },
		        xhr: function() { 
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", function(evt) {
                        if (evt.lengthComputable) {
                            var percentComplete = (evt.loaded / evt.total) * 100;
                            percentComplete = percentComplete.toFixed(0) + '%';
                            qforma.find('.text-after-send-q .percent-send-q').html(percentComplete);
                        }
                    }, false);
                    return xhr;
                },
                url         : params.ajaxurlq,
                type        : 'POST',
                data        : form_data,
                cache       : false,
                processData : false,
                contentType : false,
                success: function() {
                    qforma.find('.message-send-q').css('display' , 'block');
                    qforma.find('.text-prorgress-send, .swap-tabs-element, .percent-send-q').css('display' , 'none');
                    //pay 
                    if ( qforma.find('.type-paypal-element').length > 0 ){
                        setTimeout(function(){
                            let object = qforma.find('.type-paypal-element');
                            let pay_data = new FormData(); 
                            pay_data.append('action', 'pay_pal_q'); 
                            pay_data.append('nonce_code', params.nonce); 
                            pay_data.append('idpay', object.attr('id') ); 
                            pay_data.append('idform', qforma.attr('data-id') ); 
                            pay_data.append('urlpage', window.location.href ); 
                            pay_data.append('titlepage', qforma.attr('data-title') );
                            
                            let attr1 = object.attr('data-i-1');
                            let attr2 = object.attr('data-i-2');
                            if (typeof attr1 !== typeof undefined && attr1 !== false) {
                                attr1 = qforma.find('#'+attr1).find('.summa-itog').html();
                                pay_data.append('attr1', attr1 );
                            }
                            if (typeof attr2 !== typeof undefined && attr2 !== false) {
                                attr2 = qforma.find('#'+attr2).find('.summa-itog').html();
                                pay_data.append('attr2', attr2 );
                            }
                            $.ajax({
                                url : params.ajaxurlq,
                                type : 'POST',
                                data : pay_data,
                                cache : false,
                                processData : false,
                                contentType : false,
                                success: function(q) {
                                    let last = q[q.length-1];
                                    if (last == '0'){
                                        q = q.substring(0, q.length - 1);
                                    }
                                    window.location.href = q; 
                                }
                            });
                            
                        }, 1200);
                        
                    }
                    //redirect
                    let redirect = qforma.find('.url-r').attr('data-url');
                    if ( redirect !== '') { 
                        setTimeout(function(){
                            window.location.href = redirect; 
                        }, 1200);
                    }
                },
                error: function(errorThrown) {
                }
            });
            idThisForm = qforma.attr('data-id');
            arraySubmit = dataField.split('RazDelITEL');
            if ( arrayCheckbox !=='' ){ arrayCheckbox = arrayCheckbox.split('RazDelITEL'); }
            if ( arrayTextField !=='' ){ arrayTextField = arrayTextField.split('RazDelITEL'); }
        }
        else  { 
            arraySubmit = false;
            //scroll enable
            if ( qforma.find('.text-after-send-q').attr('data-scroll') =='yes' ){
                //error field
                let last_error ='';
                if ( valueRequed == 1 ){
                    last_error = qforma.find('.empty-filed-q:last');
                }
                if ( valueRequed == 3 ){
                    last_error = qforma.find('.error-validation:last');
                }
                if ( valueRequed == 4 ){
                    last_error = qforma.find('.error-mail-q:last');
                }
                if ( valueRequed == 2 ){
                    last_error = qforma.find('.error-captcha-q:last');
                }
                 
                if ( last_error !=='' && !qforma.hasClass('form-type-popup') ){
                    //scroll
                    let heightWindow3 = ( $(window).height() / 100) * 40 ;
                    let poz = last_error.offset().top - heightWindow3;
                    $('html, body').animate({
                        scrollTop: poz
                    }, 500);
                }
            }
        }
        //activ event submit
        qforma.find('.submit-quasar-form-event').trigger('click');
    }
    //click on the next tab when submit is clicked
    if ( qforma.find('.tab-box-q').length > 0 ){ qforma.find('.activ-tab-q').next().trigger('click'); } 
}); 

    
$('.form-main-element').on('click', 'input, textarea, select' , function(){ 
    var elementClass = $(this).closest('.form-element-q');
    if ( elementClass.hasClass('error-validation') || elementClass.hasClass('empty-filed-q') || elementClass.hasClass('error-mail-q') || elementClass.hasClass('error-captcha-q') ){
        $(this).closest('.form-element-q').removeClass('empty-filed-q').removeClass('error-validation').removeClass('error-captcha-q').removeClass('error-mail-q'); 
    } 
});


});
})(jQuery);