(function ($) {
$(document).ready(function () {

"use strict";
//create window
$('.swap-admin-panel-q').on('click', '.help-message-q' , function(e){
    if( $(e.target).hasClass('help-message-q') && !$(e.target).hasClass('wp-mail') && !$(e.target).hasClass('smtp-mail') && !$(e.target).hasClass('disable-d') && !$(e.target).hasClass('mail-text-message-help') && !$(e.target).hasClass('mail-poluchatel-help') && !$(e.target).hasClass('after-send-mail-help') && !$(e.target).hasClass('mail-sender-help')  ){
        $('.swap-modal-help-q').remove();
        $(this).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
        if ( $(this).hasClass('q1') ){ 
            $('.modal-help-q').html( $('.help-chekcbox-t').html() );
            $('.swap-modal-help-q').css({'top' : '-80px'});
        }
        if ( $(this).hasClass('q2') ){ 
            if ( $(this).closest('.admin-col-modal').hasClass('admin-modal-box-col-2') ){ $('.swap-modal-help-q').css({'left' : '-360px'});}
            else  { $('.swap-modal-help-q').css({'top' : '-80px'}); }
            $('.modal-help-q').html( $('.help-none-field-t').html() ); 
        }
        if ( $(this).hasClass('q3') ){ 
            $('.swap-modal-help-q').css({'top' : '-50px', 'left' : '0px' });
            $('.modal-help-q').html( $('.help-select-t').html() ); 
        }
        if ( $(this).hasClass('q4') ){ 
            $('.modal-help-q').html( $('.help-total-t').html() ); 
            $('.swap-modal-help-q').css({'top' : '-190px', 'width' : '500px'});
        }
        if ( $(this).hasClass('q6') ){
            $('.modal-help-q').html( $('.text-mask-q').html() ); 
            $('.swap-modal-help-q').css({'top' : '-130px' ,'left ': '-250px', 'background-color' : '#040404'});
        }
        if ( $(this).hasClass('q7') ){
            $('.modal-help-q').html( $('.text-copy-paste-style-q').html() ); 
            $('.swap-modal-help-q').css({'top' : '-140px' ,'left': '-330px', 'background-color' : '#040404'});
        }
        if ( $(this).hasClass('q8') ){
            $(this).closest('.not-active-field').removeClass('not-active-field');
            $('.modal-help-q').html( $('.text-filling-auto-q').html() ); 
            $('.swap-modal-help-q').css({'top' : '-460px' ,'left': '-300px', 'width' : '850px' ,'background-color' : '#040404'});
        }
        if ( $(this).hasClass('q9') ){
            $(this).closest('.not-active-field').removeClass('not-active-field');
            $('.modal-help-q').html( $('.text-filling-status-help-q').html() ); 
            $('.swap-modal-help-q').css({'top' : '-220px' , 'width' : '550px' ,'background-color' : '#040404'});
        }
        if ( $(this).hasClass('q10') ){
            $('.modal-help-q').html( $('.text-message-datepicker').html() ); 
            $('.swap-modal-help-q').css({'top' : '0px'});
        }
        if ( $(this).hasClass('q11') ){
            $('.modal-help-q').html( $('.text-message-submit-sisable-design').html() ); 
        }
        if ( $(this).hasClass('q12') ){
            $('.modal-help-q').html( $('.text-message-total-hide').html() ); 
            $('.swap-modal-help-q').css({'top' : '-55px'});
        }
        if ( $(this).hasClass('q13') ){
            $('.modal-help-q').html( $('.text-message-paypal-price').html() ); 
            $('.swap-modal-help-q').css({'top' : '-55px'});
        }
        
        if ( $(this).hasClass('q14') ){
            $('.modal-help-q').html( $('.text-message-paypal-number').html() ); 
            $('.swap-modal-help-q').css({'top' : '-55px'});
        }
        
        if ( $(this).hasClass('q15') ){
            $('.modal-help-q').html( $('#text-responsive-help-q').html() ); 
            $('.swap-modal-help-q').css({'top' : '-55px'});
        }
        
        if ( $(this).hasClass('q16') ){
            $('.modal-help-q').html( $('.text-link-form').html() ); 
            $('.swap-modal-help-q').css({'top' : '-55px', 'width' : '500px', 'left': '-300px' });
        }
        if ( $(this).hasClass('q19') ){
            $('.modal-help-q').html( $('.text-help-celi-number').html() ); 
            $('.swap-modal-help-q').css({'top' : '-60px' ,'left': '-380px'});
        }
        $('.not-active-field').removeClass('not-active-field');
    }
});

function restoreClassNotActive(){
    //restore class not-active-fiel
    //filling
    if ( $('#a-filling-status').length > 0 ){
        let filling = $('#a-filling-status').find('option:selected').attr('data-val');
        if ( filling == 'disabled' ){
            $('#adm-input-filling').closest('.admin-editor-input').addClass('not-active-field');
        }
        else {
            $('#adm-input-filling').closest('.admin-editor-input').removeClass('not-active-field'); 
        }
    }
    //mask
    if ($('#activate-mask-q').prop('checked') === false){
        $('#adm-mask-q').closest('.admin-editor-input').addClass('not-active-field');
    }
    else {
        $('#adm-mask-q').closest('.admin-editor-input').removeClass('not-active-field'); 
    }
}

//close window
$('.swap-admin-panel-q').on('click', '.close-help-q' , function(){
    $(this).closest('.swap-modal-help-q').remove();
    restoreClassNotActive();
}); 

//close window 2
$('.swap-admin-panel-q').on('click' , function(e){
    if ( $('.swap-form-q').find('.swap-modal-help-q').length > 0 ){
        if ( $(e.target).attr('class')!='swap-modal-help-q' && $(e.target).attr('class')!='modal-help-q' && $(e.target).parent().attr('class')!='modal-help-q' && !$(e.target).hasClass('help-message-q') && !$(e.target).hasClass('help-logick-panel') && !$(e.target).hasClass('help-mail') ){ 
            $('.swap-admin-panel-q').find('.swap-modal-help-q').remove();
            restoreClassNotActive();
        }
    }
    if ( $('.help-logick-panel').find('.swap-modal-help-q').length > 0 ){
        if ( $(e.target).attr('class')!='swap-modal-help-q' && $(e.target).attr('class')!='modal-help-q' && $(e.target).parent().attr('class')!='modal-help-q' && !$(e.target).hasClass('help-logick-panel') ){ 
            $('.help-logick-panel').find('.swap-modal-help-q').remove();
        }
    }
    if ( $('.setting_general-box').find('.swap-modal-help-q').length > 0 ){
        if ( $(e.target).attr('class')!='swap-modal-help-q' && !$(e.target).hasClass('help-message-q') && $(e.target).attr('class')!='modal-help-q' && $(e.target).parent().attr('class')!='modal-help-q' && !$(e.target).hasClass('help-mail') ){ 
            $('.setting_general-box').find('.swap-modal-help-q').remove();
        }
    }

});

//help logick
$('.help-logick-panel').on('click' , function(e){
    if(  $(e.target).hasClass('help-logick-panel') ){ 
        $(this).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
        $('.modal-help-q').html( $('.help-logick-t').html() );
        $('.swap-modal-help-q').css({'width' : '550px'});
    }
});

//help mail message
$('.setting_general-box').on('click' , function(e){

    if( $(e.target).hasClass('help-message-q') ){
        $('.swap-modal-help-q').remove();
        if ( $(e.target).hasClass('wp-mail') ){
            $(this).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
            $('.modal-help-q').html( $('#text-mail-help1-q').html() );
            $('.swap-modal-help-q').css({'width' : '650px', 'left' : '0px'});
        }
        if ( $(e.target).hasClass('smtp-mail') ){
            $(this).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
            $('.modal-help-q').html( $('#text-mail-help2-q').html() );
            $('.swap-modal-help-q').css({'width' : '650px', 'left' : '0px'});
        }
        if ( $(e.target).hasClass('mail-text-message-help') ){
            $(e.target).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
            $('.modal-help-q').html( $('.text-message-mail-short-code').html() );
            $('.swap-modal-help-q').css({'width' : '650px', 'left' : '0px'});
        }
        if ( $(e.target).hasClass('mail-poluchatel-help') ){
            $(e.target).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
            $('.modal-help-q').html( $('.text-message-mail-polychatel').html() );
            $('.swap-modal-help-q').css({'width' : '650px', 'left' : '0px'});
        }
        if ( $(e.target).hasClass('after-send-mail-help') ){
            $(e.target).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
            $('.modal-help-q').html( $('.text-message-mail-after').html() );
            $('.swap-modal-help-q').css({'width' : '650px', 'left' : '0px'});
        }
        if ( $(e.target).hasClass('mail-sender-help') ){
            $(e.target).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
            $('.modal-help-q').html( $('.sender-mail-sender-help').html() );
        }
    }
});

//help design
$('.setting_design-box').on('click' , '.help-message-q' , function(e){
    if( $(e.target).hasClass('help-message-q') ){ 
        if ( $(e.target).hasClass('disable-d') ){
            $(this).append('<div class="swap-modal-help-q"> <div class="modal-help-q"></div> <div class="close-help-q"><i class="fa fa-timesq"></i></div> </div>');
            $('.modal-help-q').html( $('#text-help-disable-design-q').html() );
            $('.swap-modal-help-q').css({'top' : '-100px', 'left' : '0px'});
        }
    }
});

//tab setting
$('.swap-form-q').on('click', '.tab-setting-field-q, .tab-design-field-q' , function(e){
    $('.tab-setting-field-q, .tab-design-field-q').removeClass('active-tab-adm');
    $(this).addClass('active-tab-adm');
    let numberdesign = 0;
    if ( $(this).hasClass('tab-setting-field-q') ) {
        $('.admin-modal-box-col-1').find('.admin-editor-input').each(function(){
            if ( $(this).attr('data-tab-adm') == 'setting' ){ $(this).css('display' ,'flex'); } 
            else { $(this).css('display' ,'none');  numberdesign++; } 
        });
        if ( numberdesign === 0 ){ $('.tab-design-field-q').css('display', 'none'); }
    }
    if ( $(this).hasClass('tab-design-field-q') ) {
        $('.admin-modal-box-col-1').find('.admin-editor-input').each(function(){
            if ( $(this).attr('data-tab-adm') == 'design' ){ $(this).css('display' ,'flex'); numberdesign++; } 
            else { $(this).css('display' ,'none'); } 
        });
        if ( numberdesign === 0 ){ $('.tab-design-field-q').css('display', 'none'); }
    }
    
    //auto width field setting
    $('.admin-modal-box-col-1 .admin-editor-input').each(function(){
        if ( $(this).find('label').length === 0 ){
            if ( $(this).find('.wp-picker-container').length === 0 ){ 
                if ( $(this).find('textarea').length === 0 ){ 
                    $(this).css('width' , $(this).find('span').css('width') );
                }
            }
        }
    });
});


//error setting mail
$('#setting-general-q').on('click', function (){
    helpSettingMail();
});

$('.setting-mail-swap').on('keyup change', function(){
    helpSettingMail();
});

function helpSettingMail(){
    let arrayMailSetting = [];
    let val = '';
    let number = 0;
    let valid = '';
    //email kyda prisilat
    arrayMailSetting[0] = $('#Emailsq').val();
    //tema message
    arrayMailSetting[1] = $('#emailNameq').val();
    
    //wp mail name
    arrayMailSetting[2] = $('#sendername').val();
    //wp mail email
    arrayMailSetting[3] = $('#senderemail').val();
    
    //smtp name  
    arrayMailSetting[4] = $('#sendernamesmtp').val();
    //smtp mail otravitela
    arrayMailSetting[5] = $('#sendermailsmtp').val();  
    //smtp login
    arrayMailSetting[6] = $('#usernamesmtp').val();
    //smtp pass
    arrayMailSetting[7] = $('#passwordsmtp').val();
    //smtp host
    arrayMailSetting[8] = $('#hostsmtp').val();
    //smtp port
    arrayMailSetting[9] = $('#posrtsmtp').val();
    
    let methodSendMail = $('input[name=type-send-mail]:checked').attr('id');
    //valid email kyda prisilat
    if ( arrayMailSetting[0] === '' ){ val = val + ' - ' + $('#text-mail-error1-q').html() + '<br>'; number++;}
    else {
        valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        //mnogo email
        if ( arrayMailSetting[0].match(/,/g) ){
            let array = arrayMailSetting[0].split(',');
            $.each(array, function(index,value){
                let validation = valid.test(String( value ).toLowerCase());
                if ( validation === false ){
                    val = val + ' - ' + $('#text-mail-incorrectly1-q').html() + '<br>';
                    number++;
                }
            });
            
        }
        //one email
        else {
            valid = valid.test(String( arrayMailSetting[0] ).toLowerCase());
            if ( valid === false ){
                val = val + ' - ' + $('#text-mail-incorrectly1-q').html() + '<br>';
                number++;
            }
        }
    }
    if ( arrayMailSetting[1] === '' ){ val = val + ' - ' + $('#text-mail-error2-q').html() + '<br>'; number++;}
    if ( methodSendMail == 'wpmailtype' ){
        if ( arrayMailSetting[2] === '' ){ val = val + ' - ' + $('#text-mail-error3-q').html() + '<br>'; number++;}
        if ( arrayMailSetting[3] === '' ){ val = val + ' - ' + $('#text-mail-error4-q').html() + '<br>'; number++;}
    }
    else {
        if ( arrayMailSetting[4] === '' ){ val = val + ' - ' + $('#text-mail-error3-q').html() + '<br>'; number++;}
        //smtp mail otravitela
        if ( arrayMailSetting[5] === '' ){ val = val + ' - ' + $('#text-mail-error4-q').html() + '<br>'; number++;}
        else {
            let valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            valid = valid.test(String( arrayMailSetting[5] ).toLowerCase());
            if ( valid === false ){
                val = val + ' - ' + $('#text-mail-incorrectly3-q').html() + '<br>';
                number++;
            }
        }
        //user name
        if ( arrayMailSetting[6] === '' ){ val = val + ' - ' + $('#text-mail-error5-q').html() + '<br>'; number++;}
        else {
            let valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            valid = valid.test(String( arrayMailSetting[6] ).toLowerCase());
            if ( valid === false ){
                val = val + ' - ' + $('#text-mail-incorrectly2-q').html() + '<br>';
                number++;
            }
        }
        if ( arrayMailSetting[7] === '' ){ val = val + ' - ' + $('#text-mail-error6-q').html() + '<br>'; number++;}
        if ( arrayMailSetting[8] === '' ){ val = val + ' - ' + $('#text-mail-error7-q').html() + '<br>'; number++;}
        //port
        if ( arrayMailSetting[9] === '' ){ val = val + ' - ' + $('#text-mail-error8-q').html() + '<br>'; number++;}
        else {
            if ( arrayMailSetting[9].match(/[^0-9]/g) ) { 
                val = val + ' - ' + $('#text-mail-incorrectly4-q').html() + '<br>';
                number++;
            }
        }
    }
    
    if (number > 0){
        val = $('#text-mail-error-message-q').html() + '<br>' + val;
    }
    if (number === 0){
        val = '<span>'+$('#text-mail-yes-message-q').html()+'</span>';
    }
    
    
    $('.message-error-mail-setting').html( val);
}

//copy style field
$('.modalbox-admin-panel').on('click', '.copy-qs', function (){
    let value = '';
    let selectorsave = $('.active-edit-q');
    if ( !$(this).hasClass('tab-cs') ){
        //input 
        if ( selectorsave.hasClass('type-input-element') || selectorsave.hasClass('type-phone-element') || selectorsave.hasClass('type-email-element') || selectorsave.hasClass('type-textarea-element') || selectorsave.hasClass('type-data-element') || selectorsave.hasClass('type-dropdawn-element') || selectorsave.hasClass('type-timepicker-element') ){
            $('.css-copy-field-style-tex').attr('data-field', 'input');
        
            let input = '';
            if ( selectorsave.hasClass('type-textarea-element') ){ input = selectorsave.find('textarea');}
            else if ( selectorsave.hasClass('type-dropdawn-element') ){ input = selectorsave.find('select');}
            else input = selectorsave.find('input');
        
            value = selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + input.css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + input.css('background-color') + ';' + selectorsave.attr('data-focus-class') + ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + input.css('height') + ';' + selectorsave.find('.fa-icons-q i').attr('class') + ';' + selectorsave.find('.fa-icons-q').attr('data-num') + ';' + selectorsave.find('.fa-icons-q i').css('color') + ';' + selectorsave.attr('data-style') + ';' + input.css('padding-top') + ' ' + input.css('padding-right') + ' ' + input.css('padding-bottom') + ' ' + input.css('padding-left') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight')  + ';' + selectorsave.attr('data-placeholder');
        
            if ( selectorsave.hasClass('type-dropdawn-element') ){ value = value + ';' + selectorsave.find('option').css('color'); }
            else { value = value + ';'+selectorsave.attr('data-placeholder');}
        }
    }
    else if ( $(this).hasClass('tab-cs') ){
        $('.css-copy-field-style-tex').attr('data-field', 'tab');
         
        let tab = $('.activ-tab-q');
        value = tab.css('font-size') + ';' + tab.attr('data-color1') + ';' + tab.css('height') + ';' + tab.attr('data-color2') + ';' + tab.css('border-color') + ';' + tab.css('border-width') + ';' + tab.css('border-radius') + ';' + tab.css('padding-top') + ' ' + tab.css('padding-right') + ' ' + tab.css('padding-bottom') + ' ' + tab.css('padding-left') + ';' + tab.attr('data-hover-background') + ';' + tab.attr('data-hover-color');
    }
        
    $('.css-copy-field-style-tex').html( value );  
    $(this).next('.paste-qs').addClass('active-paste-q');
     
    
});

//paste style field
$('.modalbox-admin-panel').on('click', '.active-paste-q', function (){
    let selectorsave = $('.active-edit-q');
    let style = $('.css-copy-field-style-tex').html().split(';');
    //field
    if ( $('.css-copy-field-style-tex').attr('data-field') =='input' ){
        
        let input = '';
        if ( selectorsave.hasClass('type-textarea-element') ){ input = selectorsave.find('textarea');}
        else if ( selectorsave.hasClass('type-dropdawn-element') ){ input = selectorsave.find('select');}
        else input = selectorsave.find('input');
        
        let heading = selectorsave.find('.heading-field-q'); 
        let removeClassArray = [ selectorsave.attr('data-focus-class'), selectorsave.attr('data-placeholder') ];
        selectorsave.removeClass( removeClassArray[0] +' '+removeClassArray[1] ).addClass(style[5] + ' '+style[16]);
        //style field
        if ( style[12] == 'style1' ) { 
            selectorsave.removeClass('style-qform-2').addClass('style-qform-1'); 
            let val =  $('#stylePolzunok select').find('option[data-val="style1"]').html();
            $('#stylePolzunok select').val(val);
        }
        else { 
            selectorsave.removeClass('style-qform-1').addClass('style-qform-2'); 
            selectorsave.find('input').attr('placeholder', '');
            selectorsave.find('textarea').attr('placeholder', '');
            let val =  $('#stylePolzunok select').find('option[data-val="style2"]').html();
            $('#stylePolzunok select').val(val);
        }
        
        selectorsave.attr({
            'data-border-color' : style[3],
            'data-focus-class' : style[5],
            'data-border-radius' : style[6],
            'data-border-width' : style[7],
            'data-style' : style[12],
            'data-placeholder' : style[16],
        });
        heading.css({
            'color' : style[0],
            'font-size' : style[1],
            'margin-bottom' : style[14],
            'font-weight' : style[15]
        }).attr('data-font', style[1]);
        input.css({ 
            'font-size' : style[2],
            'background-color' : style[4],
            'height': style[8],
            'padding': style[13],
            'border-radius' : style[6],
            'border-width' : style[7],
            'border-color' : style[3],
        }).find('.fa-icons-q').attr('data-num', style[10]).find('i').css('color',style[11]).attr('class', style[9]);
        
        //color option fix
        if ( selectorsave.hasClass('type-dropdawn-element') ) {
            if ( style[17] !=='' ){ input.css('color' , style[17]); }
            if ( style[17] =='color-p-1' ) {input.css('color' , '#454444'); }
            if ( style[17] =='color-p-2' ) {input.css('color' , '#e31a1a'); }
            if ( style[17] =='color-p-3' ) {input.css('color' , '#ed5922'); }
            if ( style[17] =='color-p-4' ) {input.css('color' , '#1eb61b'); }
            if ( style[17] =='color-p-5' ) {input.css('color' , '#1bb674'); }
            if ( style[17] =='color-p-6' ) {input.css('color' , '#1bb0b6'); }
            if ( style[17] =='color-p-7' ) {input.css('color' , '#1ea2d3'); }
            if ( style[17] =='color-p-8' ) {input.css('color' , '#8c1ed3'); }
            if ( style[17] =='color-p-9' ) {input.css('color' , '#fff'); }
            if ( style[17] =='color-p-10' ) {input.css('color' , '#7a7878'); }
            if ( style[17] =='color-p-11' ) {input.css('color' , '#e2e2e2'); }
            if ( style[17] =='color-p-12' ) {input.css('color' , '#3b77d1'); }
        }
        
        $('.active-edit-q').trigger('click');
    
    }
});

function disableLib(){
    //disable lib
    if ( $('#disable-lib-fafa').attr('data-disable') === 'yes' ) {  
        $('#disable-lib-fafa').attr("checked","checked");  
        $('.customfafa').find('.disable-lib-error-q').css('display', 'inline-block');
    }
    else {
        $('.customfafa').find('.disable-lib-error-q').css('display', 'none');
    }
    
    if ( $('#disable-lib-date').attr('data-disable') === 'yes' ) {  
        $('#disable-lib-date').attr("checked","checked");  
        $('#add-date-q').find('.disable-lib-error-q').css('display', 'inline-block');
    }
    else {
        $('#add-date-q').find('.disable-lib-error-q').css('display', 'none');
    }
    
    if ( $('#disable-lib-slider').attr('data-disable') === 'yes' ) {  
        $('#disable-lib-slider').attr("checked","checked"); 
        $('#add-range-q').find('.disable-lib-error-q').css('display', 'inline-block');
    }
    else {
        $('#add-range-q').find('.disable-lib-error-q').css('display', 'none');
    }
    if ( $('#disable-lib-phone').attr('data-disable') === 'yes' ) {  $('#disable-lib-phone').attr("checked","checked");  }
    
    if ( $('#disable-lib-calculator').attr('data-disable') === 'yes' ) {  
        $('#disable-lib-calculator').attr("checked","checked"); 
        $('#type-itog-element').find('.disable-lib-error-q').css('display', 'inline-block');
    }  
    else { 
        $('#type-itog-element').find('.disable-lib-error-q').css('display', 'none');
    }
}
disableLib(); 

$('.swap-top-menu-new-q').on('change', 'input', function(){
    let activ = $(this).prop('checked');
    if ( activ === true ){ $(this).attr('data-disable', 'yes'); }
    else  { $(this).attr('data-disable', 'not'); }
});


$('.header-form-quasar').on('click', '.swap-top-menu-save-q' , function(){
    let disable = $('#disable-lib-fafa').attr('data-disable') + ';' + $('#disable-lib-date').attr('data-disable') + ';' + $('#disable-lib-slider').attr('data-disable') + ';' + $('#disable-lib-phone').attr('data-disable') + ';' + $('#disable-lib-calculator').attr('data-disable');
    $.ajax({
        type: "POST",
        data: {
            action: 'save_active_lib_q',
            nonce_code : params.nonce,
            option: disable
        },
        url: params.ajaxurl,
        success: function( response ) {
            
            disableLib();
            $('.saved-lib-q').css({'opacity' : '1', 'z-index' : '1'});
            setTimeout(function(){
                $(".saved-lib-q").css({'opacity' : '0', 'z-index' : '-1'});
            },2000);
            
        },
        error: function (error) {
            
            $('.error-saved-lib-q').css({'opacity' : '1', 'z-index' : '1'});
            setTimeout(function(){
                $(".error-saved-lib-q").css({'opacity' : '0', 'z-index' : '-1'});
            },2000);
            
        }
    });	 
});

//short code in form page
$('.form-short-code-q, .form-link-p-q').on('click' , function(){
    $(this).select();
});

$('.form-short-code-swap-q select').on('change' , function(){
    let shortCode = $('.form-short-code-swap-q select').find('option:selected').attr('data-val');
    if ( shortCode == 'inline'){ 
        $('.form-short-code-q').val( $('#short-code-help').html() );
    }
    else {
        $('.form-short-code-q').val( $('#short-code-popup-help').html() );
    }
});

//validation slider
$('.modalbox-admin-panel').on('keyup', '#sliderField, #polzunokmax, #polzunokstep, #polzunokvalue, #adm-price-pay-custom-q, #adm-number-pay-custom-q', function(){
    //forbidden symbols
    if ( $(this).val().match(/[^0-9\.]/g) ){ 
        let edit = $(this).val().replace(/[^0-9\.]/g,'');
        $(this).val( edit );
    }
});

//validation timepicker
$('.modalbox-admin-panel').on('keyup', '#min-timepicker, #max-timepicker, #step-timepicker', function(){
    //forbidden symbols
    if ( $(this).val().match(/[^0-9\:]/g) ){ 
        let edit = $(this).val().replace(/[^0-9\:]/g,'');
        $(this).val( edit );
    }
});

//validation paypal - remove probel
$('.modalbox-admin-panel').on('keyup', '#adm-paypal-sandbox-a, #adm-paypal-live-a', function(){
    //forbidden symbols
    if ( $(this).val().match(/\s/g) ){ 
        let edit = $(this).val().replace(/\s/g,'');
        $(this).val( edit );
    }
});




//fix link editor
$(document).on('click', '.mce-widget[data-link-q="yes"]' , function(){
    $('.wp-link-input').closest('.mce-toolbar-grp').find('.dashicons-admin-generic').trigger('click');
});



//custom timepicker
$(document).on('click', '.type-timepicker-element .input-swap', function(){
    if ( $(this).find('.wrap-time-list-q').length === 0 ) {
        let object = $(this).parent();
        $('.active-time-q').removeClass('.active-time-q').find('.wrap-time-list-q').remove();
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
$('.swap-admin-modalbox').on('click', function(e){
    if ( $('.wrap-time-list-q').length > 0 ){
        if ( (!$(".active-time-q").is(e.target)) && ($(".active-time-q").has(e.target).length === 0) )  {
            $('.wrap-time-list-q').remove();
            $('.active-time-q').removeClass('active-time-q');
        }
    }
});



$('#drag-drop-element').on('click', '.hours-list-q div, .minute-list-q div' , function(e){
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
    //fix style 2
    if ( mainObject.hasClass('style-qform-2') ){
        if ( mainObject.find('.hour-picker-q').html() !='--' || mainObject.find('.minut-picker-q').html() !='--' ) { 
            mainObject.find('.wrap-time-picker-q').css('display' ,'flex');
            mainObject.addClass('style-qform-2-focus');
        }
    }
});


//validation name form
$(document).on('keyup', '#nameQform' , function(){
    //forbidden symbols
    if ( $(this).val().match(/[\/\'\\\"<>]/g) ){ 
        let edit = $(this).val().replace(/[\/\'\\\"<>]/g,'');
        $(this).val( edit );
    }
});

//fix date style2
$(document).on('change', '.type-data-element', function(){
    let object = '#'+$('.qdatapicker').attr('data-id-field');
    if ( $(object).hasClass('style-qform-2') ){
        $(object).addClass('style-qform-2-focus'); 
    }
});


});
})(jQuery);