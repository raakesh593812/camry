(function ($) {
$(document).ready(function () {
    
"use strict";
    
    
$('.swap-demo').on('click', function(e){
    let element = $(this);
    if (  $(".quick-start-q .swap-choice-form").length === 0 && !$(e.target).hasClass('fa-timesq') ) {
        if ( !element.hasClass('not-adding') ){
            let htmlSelect ='<div class="swap-choice-form"> <div class="choice-form">  <div class="yes-add-form"><i class="fa fa-checkq"></i></div> <div class="not-add-form"><i class="fa fa-timesq"></i></div></div> <div class="message-warning-q"><span class="warning-q">!</span>'+$('#text-quick-start-q').html()+'</div> </div>';
            element.append(htmlSelect);
        }
        else { 
            element.removeClass('not-adding'); 
        }
        
    }
});


//window 
$(document).mouseup(function (i){ 
    //hide window quick form
    if (  !( $(".swap-choice-form").is(i.target)) && ($(".swap-choice-form").has(i.target).length === 0 ) )  {
        $(".quick-start-q .swap-choice-form").remove();
    }
    if (  ( $(".swap-choice-form .fa-checkq").is(i.target)) )  {
        $(".swap-modalbox-setting").addClass('none-box-q').css({'width' : '0%'});
    }
});

//close window
$('.swap-demo').on('click', '.not-add-form',  function(){
    $(this).closest('.swap-choice-form').remove();
    $(this).closest('.swap-demo').addClass('not-adding');
});

//add template
$('.swap-demo').on('click', '.yes-add-form',  function(){
    var idTemplate = '';
    if ( !$(this).closest('.swap-demo').hasClass('demo-element')  ) { 
        idTemplate = $(this).closest('.swap-demo').find('.demo-element').attr('data-demo'); 
    }
    else { 
        idTemplate = $(this).closest('.swap-demo').attr('data-demo'); 
    }
    $('#drag-drop-element').find('.form-element-q').remove();
    if ( idTemplate !=='1c' && idTemplate !='2c' ){
        //add field;
        $('#add-submit-q').trigger('click');
        if (idTemplate ==='1' || idTemplate ==='2' || idTemplate ==='3' || idTemplate ==='8' ){ 
            $('#type-privacy-element').trigger('click'); 
        }
        $('#add-textarea-q').trigger('click');
        $('#add-email-q').trigger('click');
        $('#add-phone-q').trigger('click');
        $('#add-input-q').trigger('click');
    }
    //template 1
    if (idTemplate === '1'){
        $('#drag-drop-element').css('background-color', '#fff');
    }
    
    //template 2
    if (idTemplate ==='2'){
        $('#drag-drop-element').css('background-color', '#fff');
        //style element
        $('#drag-drop-element').find('.form-element-q').each(function(){
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-textarea-element') || $(this).hasClass('type-phone-element') ) { 
                var classField ='';
                if ( $(this).hasClass('type-input-element') ) { 
                    classField = 'type-input-element'; 
                }
                if ( $(this).hasClass('type-phone-element') ) { 
                    classField = 'type-phone-element';
                }
                if ( $(this).hasClass('type-email-element') ) { 
                    classField = 'type-email-element';
                }
                if ( $(this).hasClass('type-textarea-element') ) { 
                    classField = 'type-textarea-element'; 
                }
                classField = classField +' form-element-q element-css-q style-qform-1 color-p-10 color-class-7 style-qform-2';
                $(this).attr({ 'data-placeholder' : 'color-p-10', 'data-focus-class' : 'color-class-7', 'class' : classField , 'data-style': 'style2', 'data-border-width' : '0px 0px 1px 0px', 'data-border-radius' : '0px' });
                $(this).find('.style-element').attr('placeholder', '');
            } 
            //privacy
            if ( $(this).hasClass('type-privacy-element') ) {
                $(this).addClass('style-t-qform-2').attr({'data-style': 'style2', 'class' : 'form-element-q type-privacy-element element-css-q requed-field-q style-t-qform-2'});
                $(this).find('.checkbox-qform').css({'border-width' : '1px', 'border-color' : '#1ea2d3', 'width' : '18px', 'height' : '18px', 'min-width' : '18px'});
                $(this).find('.checkbox-fafa i').css({'background-color' : '#1ea2d3', 'color' : '#1ea2d3'});
               
            }
            //submit
            if ( $(this).hasClass('type-submit-element') ) {
                $(this).attr({ 'data-hover-background' : 'color-hover-7', 'data-color1' : 'rgba(52, 178, 238, 0)', 'data-color2': '#545353', 'data-hover-color' : 'color2-hover-9', 'data-border-radius' : '3px', 'data-border-width' : '2px','data-border-color':'#1ea2d3' }).find('.submit-button-q').css({'padding-left' : '20px', 'padding-right' : '20px', 'background-color': 'rgba(52, 178, 238, 0)', 'border-color': '#1ea2d3', 'border-width' : '2px', 'border-radius' : '3px', 'color' : '#545353'}).attr({'class' : 'submit-button-q style-element color-hover-7 color2-hover-9'});
            }
        });
        let phoneField = $('#drag-drop-element').find('.form-element-q').filter(':nth-child(2)');
        phoneField.find('.heading-field-q').html( $('#text-phone-q').html() );
    }
    
    //template 3
    if (idTemplate =='3'){
        $('#drag-drop-element').css('background-color', 'rgb(0, 0, 0)');
        //style element
        $('#drag-drop-element').find('.form-element-q').each(function(){
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-textarea-element') || $(this).hasClass('type-phone-element') ) { 
                var classField ='';
                if ( $(this).hasClass('type-input-element') ) { 
                    classField = 'type-input-element'; 
                }
                if ( $(this).hasClass('type-phone-element') ) { 
                    classField = 'type-phone-element';
                }
                if ( $(this).hasClass('type-email-element') ) { 
                    classField = 'type-email-element';
                    $(this).find('.fa-icons i').css('color' , '#fff');
                }
                if ( $(this).hasClass('type-textarea-element') ) { 
                    classField = 'type-textarea-element'; 
                }
                classField = classField +' form-element-q element-css-q style-qform-1 color-p-9 color-class-9';
                $(this).attr({'data-border-color' : 'rgba(255,255,255,0)', 'data-placeholder' : 'color-p-9', 'data-focus-class' : 'color-class-9', 'class' : classField });
                $(this).find('.style-element').css({'background-color' : '#737070', 'border-color' : 'transparent', 'border-radius' : '0px' }).attr('placeholder', '');
                $(this).find('.heading-field-q').css('color' , '#fff');
            } 
            //privacy
            if ( $(this).hasClass('type-privacy-element') ) {
                $(this).find('.html-text-check-q p').css('color', 'rgb(232, 230, 230)');
                $(this).find('.checkbox-qform').css('border-width' , '0px');
            }
            //submit
            if ( $(this).hasClass('type-submit-element') ) {
                $(this).attr({'data-hover-background' : 'color-hover-4', 'data-color1' : 'rgba(255,255,255,0)' , 'class' : 'form-element-q element-css-q type-submit-element align-center-q' , 'data-border-radius' : '0px', 'data-border-width' : '1px','data-border-color':'#1bb674'}).find('.submit-button-q').css({'padding-left' : '35px', 'padding-right' : '35px','background-color': 'transparent', 'border-color': '#1bb674', 'border-width' : '1px'});
            }
        });
        let phoneField = $('#drag-drop-element').find('.form-element-q').filter(':nth-child(2)');
        phoneField.find('.heading-field-q').html( $('#text-phone-q').html() ) ;
        
    }
    
    
    //template 4
    if (idTemplate =='4'){
        $('#drag-drop-element').css('background-color', '#fff');
        //style element
        $('#drag-drop-element').find('.form-element-q').each(function(){
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-textarea-element') || $(this).hasClass('type-phone-element') ) { 
                var classField ='';
                if ( $(this).hasClass('type-input-element') ) { 
                    classField = 'type-input-element'; 
                }
                if ( $(this).hasClass('type-phone-element') ) { 
                    classField = 'type-phone-element';
                }
                if ( $(this).hasClass('type-email-element') ) { 
                    classField = 'type-email-element';
                }
                if ( $(this).hasClass('type-textarea-element') ) { 
                    classField = 'type-textarea-element'; 
                }
                classField = classField +' form-element-q element-css-q style-qform-1 color-p-10 color-class-5';
                $(this).attr({ 'data-placeholder' : 'color-p-10', 'data-focus-class' : 'color-class-5', 'class' : classField });
                $(this).find('.style-element').css({'background-color' : 'rgba(255,255,255,0)', 'height' : '45px', 'padding-left' : '12px'});
                $(this).find('textarea').css({ 'height' : '102px'});
            } 
            //submit
            if ( $(this).hasClass('type-submit-element') ) {
                $(this).attr({'data-ful' : 'yes', 'data-hover-background' : 'color-hover-5', 'data-color1' : '#1dcb83' , 'class' : 'form-element-q element-css-q type-submit-element align-center-q', 'data-border-radius' : '3px', 'data-border-width' : '1px','data-border-color':'#1dcb83'}).find('.submit-button-q').css({'width' : '100%', 'background-color': '#1dcb83', 'border-color': '#1dcb83', 'border-width' : '0px', 'border-radius' : '3px'});
            }
        });

        $('#drag-drop-element').find('.heading-field-q').html('').css('margin-bottom', '3px');
        //phobe field
        let phoneField = $('#drag-drop-element').find('.form-element-q').filter(':nth-child(2)');
        phoneField.find('input').attr('placeholder', $('#text-phone2-q').html() );
        
    }
    
    //template 5
    if (idTemplate =='5'){
        $('#drag-drop-element').css('background-color', '#fff');
        //style element
        $('#drag-drop-element').find('.form-element-q').each(function(){
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-textarea-element') || $(this).hasClass('type-phone-element') ) { 
                var classField ='';
                if ( $(this).hasClass('type-input-element') ) { 
                    classField = 'type-input-element'; 
                }
                if ( $(this).hasClass('type-phone-element') ) { 
                    classField = 'type-phone-element';
                }
                if ( $(this).hasClass('type-email-element') ) { 
                    classField = 'type-email-element';
                }
                if ( $(this).hasClass('type-textarea-element') ) { 
                    classField = 'type-textarea-element'; 
                }
                classField = classField +' form-element-q element-css-q style-qform-1 color-p-10 color-class-7';
                $(this).attr({ 'data-placeholder' : 'color-p-10', 'data-focus-class' : 'color-class-7', 'class' : classField });
                $(this).find('.style-element').attr('placeholder', '');
            } 
            //submit
            if ( $(this).hasClass('type-submit-element') ) {
                $(this).attr({ 'data-hover-background' : 'color-hover-7', 'data-color1' : '#34b2ee', 'data-border-radius' : '3px', 'data-border-width' : '0px'}).find('.submit-button-q').css({'padding-left' : '20px', 'padding-right' : '20px', 'padding-top' : '12px', 'padding-bottom' : '12px', 'background-color': '#34b2ee', 'border-color': '#1dcb83', 'border-width' : '0px', 'border-radius' : '3px'}).attr({'class' : 'submit-button-q style-element color-hover-7'});
            }
        });
        let phoneField = $('#drag-drop-element').find('.form-element-q').filter(':nth-child(2)');
        phoneField.find('.heading-field-q').html( $('#text-phone-q').html() );
    }
    
    //template 6
    if (idTemplate =='6'){
        $('#drag-drop-element').css('background-color', '#fff');
        $('#add-castum-html-q').trigger('click');
        //style element
        $('#drag-drop-element').find('.form-element-q').each(function(){
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-textarea-element') || $(this).hasClass('type-phone-element') ) { 
                var classField ='';
                if ( $(this).hasClass('type-input-element') ) { 
                    classField = 'type-input-element'; 
                }
                if ( $(this).hasClass('type-phone-element') ) { 
                    classField = 'type-phone-element';
                }
                if ( $(this).hasClass('type-email-element') ) { 
                    classField = 'type-email-element';
                }
                if ( $(this).hasClass('type-textarea-element') ) { 
                    classField = 'type-textarea-element'; 
                }
                classField = classField +' form-element-q element-css-q style-qform-1 color-p-10 color-class-2';
                $(this).attr({ 'data-placeholder' : 'color-p-10', 'data-focus-class' : 'color-class-2', 'class' : classField });
                $(this).find('.style-element').css({'background-color' : '#f4f4f4;', 'height' : '40px', 'padding-left' : '12px'});
                $(this).find('textarea').css({ 'height' : '102px'});
            } 
            //submit
            if ( $(this).hasClass('type-submit-element') ) {
                $(this).attr({'data-ful' : 'yes', 'data-hover-background' : 'color-hover-2', 'data-color1' : '#ed224d', 'data-border-radius' : '3px', 'data-border-width' : '0px'}).find('.submit-button-q').css({'width' : '100%', 'background-color': '#ed224d', 'border-color': '#1dcb83', 'border-width' : '0px', 'border-radius' : '3px', 'padding': '15px 10px', 'font-size' : '15px'}).attr({'class' : 'submit-button-q style-element color-hover-2'});
            }
        });

        $('#drag-drop-element').find('.heading-field-q').html('').css('margin-bottom', '3px');
        //phobe field
        let phoneField = $('#drag-drop-element').find('.type-phone-element');
        phoneField.find('input').attr('placeholder', $('#text-phone2-q').html() );
        //heading
        $('#drag-drop-element').find('.type-custom-text-element div').html('<p style="color:rgb(237, 34, 77); font-size: 25px; text-align: center">'+$('#text-heading-q').html()+'</p>');
        
    }
    
    //template 7
    if (idTemplate =='7'){
        $('#drag-drop-element').css('background-color', '#fff');
        //style element
        $('#drag-drop-element').find('.form-element-q').each(function(){
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-textarea-element') || $(this).hasClass('type-phone-element') ) { 
                var classField ='';
                if ( $(this).hasClass('type-input-element') ) { 
                    classField = 'type-input-element'; 
                }
                if ( $(this).hasClass('type-phone-element') ) { 
                    classField = 'type-phone-element';
                }
                if ( $(this).hasClass('type-email-element') ) { 
                    classField = 'type-email-element';
                }
                if ( $(this).hasClass('type-textarea-element') ) { 
                    classField = 'type-textarea-element'; 
                }
                classField = classField +' form-element-q element-css-q style-qform-1 color-p-10 color-class-3';
                $(this).attr({ 'data-placeholder' : 'color-p-10', 'data-focus-class' : 'color-class-3', 'class' : classField , 'data-border-radius' : '25px'});
                $(this).find('.style-element').css({'background-color' : '#e6e6e6', 'height' : '40px',  'padding' : '15px', 'border-radius' : '25px'});
                $(this).find('textarea').css({ 'height' : '102px'});
            } 
            //submit
            if ( $(this).hasClass('type-submit-element') ) {
                $(this).attr({ 'data-hover-background' : 'color-hover-', 'data-color1' : '#f2ac32', 'data-border-radius' : '50px', 'data-border-width' : '0px'}).find('.submit-button-q').css({ 'background-color': '#f2ac32', 'border-color': '#f2ac32', 'border-width' : '0px', 'border-radius' : '50px', 'padding-left' : '25px', 'padding-right' : '25px' }).attr({ 'class' : 'submit-button-q style-element color-hover-3'});
            }
        });

        $('#drag-drop-element').find('.heading-field-q').html('').css('margin-bottom', '3px');
        //phobe field
        let phoneField = $('#drag-drop-element').find('.form-element-q').filter(':nth-child(2)');
        phoneField.find('input').attr('placeholder', $('#text-phone2-q').html());
    }
    
    //template 8
    if (idTemplate ==='8'){
        $('#drag-drop-element').css('background-color', 'rgb(0, 0, 0)');
        //style element
        $('#drag-drop-element').find('.form-element-q').each(function(){
            if ( $(this).hasClass('type-input-element') || $(this).hasClass('type-email-element') || $(this).hasClass('type-textarea-element') || $(this).hasClass('type-phone-element') ) { 
                var classField ='';
                if ( $(this).hasClass('type-input-element') ) { 
                    classField = 'type-input-element'; 
                }
                if ( $(this).hasClass('type-phone-element') ) { 
                    classField = 'type-phone-element';
                }
                if ( $(this).hasClass('type-email-element') ) { 
                    classField = 'type-email-element';
                }
                if ( $(this).hasClass('type-textarea-element') ) { 
                    classField = 'type-textarea-element'; 
                }
                classField = classField +' form-element-q element-css-q style-qform-1 color-p-9 color-class-8 style-qform-2';
                $(this).attr({ 
                    'data-placeholder' : 'color-p-9', 
                    'data-focus-class' : 'color-class-8',
                    'class' : classField , 
                    'data-style': 'style2', 
                    'data-border-width' : '0px 0px 1px 0px', 
                    'data-border-radius' : '0px', 
                    'data-border-color' : '#fff' 
                });
                $(this).find('.style-element').attr('placeholder', '').css('border-color', '#fff');
                $(this).find('.fa-icons-q i').css('color', '#fff');
            } 
            //privacy
            if ( $(this).hasClass('type-privacy-element') ) {
                $(this).addClass('style-t-qform-2').attr({'data-style': 'style2', 'class' : 'form-element-q type-privacy-element element-css-q requed-field-q style-t-qform-2'});
                $(this).find('.checkbox-qform').css({
                    'border-width' : '1px', 
                    'border-color' : '#fff', 
                    'width' : '18px', 
                    'height' : '18px',
                    'min-width' : '18px'
                });
                $(this).find('.checkbox-fafa i').css({'background-color' : 'rgb(130, 36, 227)', 'color' : 'rgb(130, 36, 227)'});
                $(this).find('p').css('color', '#fff');
               
            }
            //submit
            if ( $(this).hasClass('type-submit-element') ) {
                $(this).attr({
                    'data-ful' : 'yes', 
                    'data-hover-background' : 'color-hover-13', 
                    'data-hover-color' : 'color2-hover-13',
                    'data-color1' : 'rgb(123, 75, 219)', 
                    'data-color2' : '#fff',
                    'data-border-radius' : '3px', 
                    'data-border-width' : '0px'
                }).find('.submit-button-q').css({
                    'width' : '100%', 
                    'background-color': 'rgb(123, 75, 219)', 
                    'border-color': '#1dcb83', 
                    'border-width' : '0px', 
                    'border-radius' : '3px', 
                    'padding': '15px 10px',
                    'font-size' : '15px'
                }).attr({'class' : 'submit-button-q style-element color-hover-13'});
            }
        });
        let phoneField = $('#drag-drop-element').find('.form-element-q').filter(':nth-child(2)');
        phoneField.find('.heading-field-q').html( $('#text-phone-q').html() );
        $('#drag-drop-element').find('.heading-field-q').css({'color' : '#fff'});
    }
    

    //calculation 1
    if (idTemplate =='1c'){
        $('#drag-drop-element').css('background-color', '#fff');
        $('#type-itog-element').trigger('click');
        $('#add-dropdawn-q').trigger('click');
        $('#add-checkbox-q').trigger('click');
        $('#add-checkbox-q').trigger('click');
        $('#add-checkbox-q').trigger('click');
        $('#add-input-q').trigger('click');
        //style
        $('#drag-drop-element').find('.type-checkbox-element').css('width', '33%').attr('data-sizes', '33%');
        $('#drag-drop-element').find('.type-input-element').attr('data-validation' , 'number').find('.heading-field-q').html( $('#text-quick-start2-q').html() ) ;
        //checkbox 1
        let checkbox = $('#drag-drop-element').find('.type-checkbox-element').filter(':first');
        checkbox.find('.html-text-check-q').filter(':first').html( $('#checkbox-demo-1').next('label').find('.html-text-check-q').html() );
        checkbox.find('.html-text-check-q').filter(':last').html( $('#checkbox-demo-2').next('label').find('.html-text-check-q').html() );
        checkbox.find('input').filter(':first').attr('date-rasschet', '100');
        checkbox.find('input').filter(':last').attr('date-rasschet', '300');
        //checkbox 2
        checkbox = $('#drag-drop-element').find('.type-checkbox-element').filter(':nth-child(3)');
        checkbox.find('.html-text-check-q').filter(':first').html( $('#checkbox-demo-3').next('label').find('.html-text-check-q').html() );
        checkbox.find('.html-text-check-q').filter(':last').html( $('#checkbox-demo-4').next('label').find('.html-text-check-q').html() );
        checkbox.find('input').filter(':first').attr('date-rasschet', '500');
        checkbox.find('input').filter(':last').attr('date-rasschet', '1000');
        //checkbox 3 radio
        checkbox = $('#drag-drop-element').find('.type-checkbox-element').filter(':last');
        checkbox.find('.html-text-check-q').filter(':first').html( $('#checkbox-demo-5').next('label').find('.html-text-check-q').html() );
        checkbox.find('.html-text-check-q').filter(':last').html( $('#checkbox-demo-6').next('label').find('.html-text-check-q').html() );
        let id = checkbox.find('input').attr('id');
        checkbox.find('input').attr({'type' : 'radio', 'name' : id });
        checkbox.addClass('radio-checket-q').attr('data-radio' , 'yes');
        checkbox.find('input').filter(':first').attr('date-rasschet', '400');
        checkbox.find('input').filter(':last').attr('date-rasschet', '50');
        //dropdown
        $('.type-dropdawn-element').find('option').filter(':nth-child(2)').html( $('#text-red-q').html() ).attr('date-rasschet', '200');
        $('.type-dropdawn-element').find('option').filter(':last').html( $('#text-blue-q').html() ).attr('date-rasschet', '100');
        $('.type-dropdawn-element').find('.heading-field-q').html( $('#text-selectitem-q').html() );
        //total
        let strTotal ='( ';
        $('.form-element-q').each(function(){
            if ( ( $(this).hasClass('type-input-element') || $(this).hasClass('type-checkbox-element')  ) && !$(this).hasClass('radio-checket-q')  ) { 
                strTotal = strTotal + '['+$(this).attr('id')+']' + ' + '; 
            }
            if ( $(this).hasClass('radio-checket-q') ) { 
                strTotal = strTotal + '['+$(this).attr('id')+'] ) '; 
            }
            if ( $(this).hasClass('type-dropdawn-element') ) { 
                strTotal = strTotal + ' - '+ '['+$(this).attr('id')+']'; 
            }
        });
        $('.type-itog-element').attr('data-kalkulation',  strTotal);
    }
    
    //calculation 2
    if (idTemplate =='2c'){
        $('#drag-drop-element').css('background-color', '#fff');
        $('#add-submit-q').trigger('click');
        $('#type-itog-element').trigger('click');
        $('#add-range-q').trigger('click');
        $('#add-checkimage-q').trigger('click');
        //style
        let checkbox = $('#drag-drop-element').find('.checkbox-img');
        checkbox.find('.html-text-check-q').filter(':first').html( $('#checkbox-imd-demo1').next('label').find('.html-text-check-q').html() );
        checkbox.find('.html-text-check-q').filter(':last').html( $('#checkbox-imd-demo2').next('label').find('.html-text-check-q').html() );
        checkbox.find('input').filter(':first').attr('date-rasschet', '100');
        checkbox.find('input').filter(':last').attr('date-rasschet', '300');
        
        let strTotal ='';
        $('.form-element-q').each(function(){
            if ( $(this).hasClass('checkbox-img') ) { 
                strTotal = strTotal + '['+$(this).attr('id')+']' + ' + '; 
            }
            if ( $(this).hasClass('type-range-element') ) { 
                strTotal = strTotal+ '['+$(this).attr('id')+']'; 
            }
        });
        $('.type-itog-element').attr('data-kalkulation',  strTotal);
      
    }

});
 
    
});
})(jQuery);