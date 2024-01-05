(function ($) {
$(document).ready(function () {

"use strict";
   
let put = params.put3;
const demoIMG1 = params.put3+"/img/img1.png";
const demoIMG2 = params.put3+"/img/img2.png";
const demoIMG3 = params.put3+"/assets/img-captha";
const paypalIMG = params.put3+"/assets/img/paypal-icon.png";

$('.demo-img-q-1').attr('src', demoIMG1);

$(".demo-range").slider({// UI slider demo
    min: 1,
    max: 10,
	step: 1,
    value: 1,
    range: "min",
    animate: "fast",
    slide : function(event, ui) { 
        if (ui.value !==0){ 
            $(this).find('span').html("<div class='tumbler-q-slider show-informer'>" + ui.value + "</div>"); 
        } 
        else { 
            $(this).find('span').html("<div class='tumbler-q-slider'>" + ui.value + "</div>"); 
        }  
    }   
});


var wpEditor = { 
    tinymce: {
		wpautop  : true,
		theme    : 'modern',
		skin     : 'lightgray',
		language : 'en',
		formats  : {
			alignleft  : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'left' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignleft' }
			],
			aligncenter: [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'center' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'aligncenter' }
			],
			alignright : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'right' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignright' }
			],
			strikethrough: { inline: 'del' }
		},
		relative_urls       : false,
		remove_script_host  : false,
		convert_urls        : false,
		browser_spellcheck  : true,
		fix_list_elements   : true,
		entities            : '38,amp,60,lt,62,gt',
		entity_encoding     : 'raw',
		keep_styles         : false,
		paste_webkit_styles : 'font-weight font-style color',
		preview_styles      : 'font-family font-size font-weight font-style text-decoration text-transform',
		tabfocus_elements   : ':prev,:next',
		plugins    : 'charmap,hr,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpeditimage,wpgallery,wplink,wpdialogs,wpview',
		resize     : 'vertical',
		menubar    : false,
		indent     : false,
		fontsize_formats: "8px 10px 11px 12px 13px 14px 15px 16px 17px 18px 24px 36px",
		toolbar1   : 'bold,italic,numlist,forecolor,hr,alignleft,aligncenter,alignright,alignjustify,spellchecker,fontsizeselect,wp_adv',
		toolbar2   : 'formatselect,underline,pastetext,removeformat,undo,redo,',
		body_class : 'id post-type-post post-status-publish post-format-standard',
		wpeditimage_disable_captions: false,
		wpeditimage_html5_captions  : true,

	},
	quicktags   : true,
};

//custom text
var wpEditorCustomHtml = { 
    mediaButtons: true,
    tinymce: {
		wpautop  : true,
		theme    : 'modern',
		skin     : 'lightgray',
		formats  : {
			alignleft  : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'left' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignleft' }
			],
			aligncenter: [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'center' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'aligncenter' }
			],
			alignright : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'right' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignright' }
			],
			strikethrough: { inline: 'del' }
		},
		relative_urls       : false,
		remove_script_host  : false,
		convert_urls        : false,
		browser_spellcheck  : true,
		fix_list_elements   : true,
		entities            : '38,amp,60,lt,62,gt',
		entity_encoding     : 'raw',
		keep_styles         : false,
		paste_webkit_styles : 'font-weight font-style color',
		preview_styles      : 'font-family font-size font-weight font-style text-decoration text-transform',
		tabfocus_elements   : ':prev,:next',
		plugins    : 'charmap,hr,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpeditimage,wpgallery,wplink,wpdialogs,wpview',
		resize     : 'vertical',
		menubar    : false,
		indent     : false,
		toolbar1   : 'bold,italic,alignleft,aligncenter,alignright,link,unlink,formatselect,fontsizeselect,wp_adv',
		fontsize_formats: "8px 10px 11px 12px 13px 14px 15px 16px 17px 18px 24px 36px",
		toolbar2   : 'underline,alignjustify,forecolor,pastetext,removeformat,outdent,indent,undo,redo',
		body_class : 'id post-type-post post-status-publish post-format-standard',
		wpeditimage_disable_captions: false,
		wpeditimage_html5_captions  : true,
        //parse html
		init_instance_callback: function (editor) {
            editor.on('keyup', function (e) {
                if ( $('.admin-col-modal .wp-editor-wrap').hasClass('tmce-active') ){
                    if ( $(idElement).hasClass('type-custom-text-element') ){
                        $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
                    }
                    if ( $(idElement).hasClass('type-privacy-element') ){
                        $(idElement).find('.html-text-check-q').html( tinyMCE.activeEditor.getContent() );
                    }
                    if ( $(idElement).hasClass('type-tooltip-element') ){
                        $(idElement).find('.text-tooltip-q').html( tinyMCE.activeEditor.getContent() );
                    }
                }
            });
            //when pressing keys
            editor.on('ExecCommand', function (e) {
                if ( $('.admin-col-modal .wp-editor-wrap').hasClass('tmce-active') ){
                    if ( $(idElement).hasClass('type-custom-text-element') ){
                        $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
                    }
                    if ( $(idElement).hasClass('type-privacy-element') ){
                        $(idElement).find('.html-text-check-q').html( tinyMCE.activeEditor.getContent() );
                    }
                }
            });
            //close help window
            editor.on('focus', function (e) {
                if ( $('.modalbox-admin-panel').find('.swap-modal-help-q').length > 0 ){  $('.modalbox-admin-panel').find('.swap-modal-help-q').remove(); }
            });
        }
	},
	//turn on html editor
	quicktags  : {
	    //add buttom html edit
        buttons : 'strong,em,ul,ol,li,code'
    },
};

//Privacy editor
var wpEditorPrivacy = {
    tinymce: {
        media_buttons : 1,
		wpautop  : true,
		theme    : 'modern',
		skin     : 'lightgray',
		formats  : {
			alignleft  : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'left' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignleft' }
			],
			aligncenter: [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'center' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'aligncenter' }
			],
			alignright : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'right' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignright' }
			],
			strikethrough: { inline: 'del' }
		},
		relative_urls       : false,
		remove_script_host  : false,
		convert_urls        : false,
		browser_spellcheck  : true,
		fix_list_elements   : true,
		entities            : '38,amp,60,lt,62,gt',
		entity_encoding     : 'raw',
		keep_styles         : false,
		paste_webkit_styles : 'font-weight font-style color',
		preview_styles      : 'font-family font-size font-weight font-style text-decoration text-transform',
		tabfocus_elements   : ':prev,:next',
		plugins    : 'charmap,hr,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpeditimage,wpgallery,wplink,wpdialogs,wpview',
		resize     : 'vertical',
		menubar    : false,
		indent     : false,
		toolbar1   : 'bold,italic,alignleft,aligncenter,alignright,link,unlink,formatselect,fontsizeselect,wp_adv',
		fontsize_formats: "8px 10px 11px 12px 13px 14px 15px 16px 17px 18px 24px 36px",
		toolbar2   : 'underline,alignjustify,forecolor,pastetext,removeformat,outdent,indent,undo,redo',
		body_class : 'id post-type-post post-status-publish post-format-standard',
		wpeditimage_disable_captions: false,
		wpeditimage_html5_captions  : true,
        //parse html
		init_instance_callback: function (editor) {
            editor.on('keyup', function (e) {
                if ( $('.admin-col-modal .wp-editor-wrap').hasClass('tmce-active') ){
                    if ( $(idElement).hasClass('type-custom-text-element') ){
                        $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
                    }
                    if ( $(idElement).hasClass('type-privacy-element') ){
                        $(idElement).find('.html-text-check-q').html( tinyMCE.activeEditor.getContent() );
                    }
                }
            });
            //when pressing keys
            editor.on('ExecCommand', function (e) {
                if ( $('.admin-col-modal .wp-editor-wrap').hasClass('tmce-active') ){
                    if ( $(idElement).hasClass('type-custom-text-element') ){
                        $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
                    }
                    if ( $(idElement).hasClass('type-privacy-element') ){
                        $(idElement).find('.html-text-check-q').html( tinyMCE.activeEditor.getContent() );
                    }
                }
            });
            //close help window
            editor.on('focus', function (e) {
                if ( $('.modalbox-admin-panel').find('.swap-modal-help-q').length > 0 ){  $('.modalbox-admin-panel').find('.swap-modal-help-q').remove(); }
            });
        }
	},
	quicktags  : {
	    //add buttom html edit
        buttons : 'strong,em,ul,ol,li,code'
    },
};

//fix for link
$(document).on('click' ,'#wp-link-update' , function(){
    $('#tinymce').trigger('click');
    if ( $(idElement).hasClass('type-privacy-element') ){
        $(idElement).find('.html-text-check-q').html( tinyMCE.activeEditor.getContent() );
    }
    if ( $(idElement).hasClass('type-custom-text-element') ){
        $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
    }
    if ( $(idElement).hasClass('type-itog-element') ){
        $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
    }
    
});

var wpEditorTotal = { 
    tinymce: {
		wpautop  : true,
		theme    : 'modern',
		skin     : 'lightgray',
		formats  : {
			alignleft  : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'left' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignleft' }
			],
			aligncenter: [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'center' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'aligncenter' }
			],
			alignright : [
				{ selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles: { textAlign: 'right' } },
				{ selector: 'img,table,dl.wp-caption', classes: 'alignright' }
			],
			strikethrough: { inline: 'del' }
		},
		relative_urls       : false,
		remove_script_host  : false,
		convert_urls        : false,
		browser_spellcheck  : true,
		fix_list_elements   : true,
		entities            : '38,amp,60,lt,62,gt',
		entity_encoding     : 'raw',
		keep_styles         : false,
		paste_webkit_styles : 'font-weight font-style color',
		preview_styles      : 'font-family font-size font-weight font-style text-decoration text-transform',
		tabfocus_elements   : ':prev,:next',
		plugins    : 'charmap,hr,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpeditimage,wpgallery,wplink,wpdialogs,wpview',
		resize     : 'vertical',
		menubar    : false,
		indent     : false,
		toolbar1   : 'bold,italic,alignleft,aligncenter,alignright,link,unlink,formatselect,fontsizeselect,wp_adv',
		fontsize_formats: "8px 10px 11px 12px 13px 14px 15px 16px 17px 18px 24px 36px",
		toolbar2   : 'underline,alignjustify,forecolor,pastetext,removeformat,outdent,indent,undo,redo',
		body_class : 'id post-type-post post-status-publish post-format-standard',
		wpeditimage_disable_captions: false,
		wpeditimage_html5_captions  : true,
		//parse html
		init_instance_callback: function (editor) {
            editor.on('keyup', function (e) {
                if ( $('.admin-col-modal .wp-editor-wrap').hasClass('tmce-active') ){
                     $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
                }
            });
            editor.on('ExecCommand', function (e) {
                if ( $('.admin-col-modal .wp-editor-wrap').hasClass('tmce-active') ){
                     $(idElement).find('div').html( tinyMCE.activeEditor.getContent() );
                }
            });
            //close help window
            editor.on('focus', function (e) {
                if ( $('.modalbox-admin-panel').find('.swap-modal-help-q').length > 0 ){  $('.modalbox-admin-panel').find('.swap-modal-help-q').remove(); }
            });
        }
	},
	quicktags   : true,
};

//decode
function decodeHTML(string){
    string = string.replace(/Q2@/g, '>').replace(/Q1@/g,'<').replace(/%a@/g, "'").replace(/%A@/g, '"').replace(/@palk@/g, '/').replace(/TO%C/g, ';');
    string = string.replace( /%1%/g, "<").replace( /@2F/g, ">").replace( /@TRDEEEQWGG/g, "/").replace( /GndRERD/g, "'").replace( /KLFD2NFD/g, '"').replace( /SkobKi/g, "<").replace( /SKrjlfd/g, '>').replace( /<#p>/g, '</p>').replace( /\@\P\$/g, '|').replace( /lt;/g, ">").replace( /gt;/g, "<");
    return string;
}

//js   ContentFormqMail id textarea
wp.editor.initialize( 'ContentFormqMail', wpEditor);
wp.editor.initialize( 'after-send-mail-text', wpEditor);

var idElement = $('#drag-drop-element');

//ful size in custom html edit
$('.modalbox-admin-panel').on('change', '.custom-size-button-q input', function(){
    let object = $(this).closest('.custom-size-button-q');
    if ( object.hasClass('active-full-size-cq') ){
        object.removeClass('active-full-size-cq');
        let styleObject = $(this).closest('.modalbox-admin-panel');
        styleObject.find('#customtextqQ_ifr').css({'height' : '130px', 'max-height' : '130px' });
        styleObject.find('#customtextqQ').css({'height' : '130px', 'max-height' : '130px' });
    }
    else { 
        object.addClass('active-full-size-cq');
        let heightWindow = $(window).height(); //height window
        let heightWindow2 = ( $(window).height() / 100) * 50 ; //60% height window
        heightWindow2 = heightWindow2 + "px";
        let styleObject = $(this).closest('.modalbox-admin-panel');
        styleObject.find('#customtextqQ_ifr').css({'height' : heightWindow2, 'max-height' : heightWindow2 });
        styleObject.find('#customtextqQ').css({'height' : heightWindow2, 'max-height' : heightWindow2 });
    }
});


//spoiler history message
$('.swap-message-element').each(function(){
    var shortDescription = $(this).find('.message-history').html();
    shortDescription = shortDescription.replace(/<br>/g, ' '); 
    let lengthDescription = shortDescription.length;
    //spam protect
    if ( $(this).find('.spam-detected').length > 0 ){
        if ( lengthDescription > 80 ) { 
            shortDescription = shortDescription.substr( 0, lengthDescription - (lengthDescription- 70) ); 
            shortDescription = shortDescription.replace( /[<>\/]$/g , '' );
            shortDescription = shortDescription+'...'; 
            shortDescription = '<span class="spam-detected">'+$(this).find('.spam-detected').html()+'</span>'+shortDescription;
        }
    }
    else {
        if ( lengthDescription > 90 ) { 
            shortDescription = shortDescription.substr( 0, lengthDescription - (lengthDescription- 80) ); 
            //remove simvol from end string
            shortDescription = shortDescription.replace( /[<>\/]$/g , '' );
            shortDescription = shortDescription+'...'; 
        }
    }
    $(this).find('.short-message-history').html(shortDescription);
});

$('.swap-history-message').on('click', '.swap-message-element' , function(e){ 
    if ( !$(".message-history").is(e.target) && $(".message-history").has(e.target).length === 0 && !$(e.target).hasClass('remove-message-block') && !$(e.target).hasClass('fa-timesq') )  {
        if ($(this).hasClass('open-spoiler')) { 
            $(this).removeClass('open-spoiler');
            $(this).find('.short-message-history').css('display', 'flex'); 
            $(this).find('.spoiler-label').html('<i class="fa fa-chevron-downq"></i>');
        }
        else {
            $(this).addClass('open-spoiler'); 
            $(this).find('.spoiler-label').html('<i class="fa fa-chevron-upq"></i>');
        }
        $(this).find('.message-history').slideToggle();
    }
});

//max size name form in history
$('.name-subject.element-history').each(function(){
    let nameForm = $(this).html();
    if ( nameForm.length > 13 ){
        let lengthVal = nameForm.length;
        nameForm = nameForm.substr( 0, lengthVal - (lengthVal - 13) ); 
        nameForm = nameForm + '...';
        $(this).html(nameForm);
    }
});

//pagination select form
$('.pagination-form-q').on('click' , '.pagination-number' , function(){  
    var idpagination = $(this).html();
    $('.pagination-number').removeClass('active-pagination');
    $(this).addClass('active-pagination');
    $('.swap-select-form[data-pagination!='+idpagination+']').css('display','none');
    $('.swap-select-form[data-pagination='+idpagination+']').css('display','flex');
});

//pagination select message in history
$('.pagination-history-q').on('click' , '.pagination-number-history' , function(){  
    var idpagination = $(this).attr('data-page');
    $('.pagination-number-history').removeClass('active-pagination');
    $(this).addClass('active-pagination');
    $(this).closest('.box-history-message').find('.swap-message-element[data-pagination!='+idpagination+']').css('display','none');
    $(this).closest('.box-history-message').find('.swap-message-element[data-pagination='+idpagination+']').css('display','flex');
});
//payment spoiler
$('.swap-paypal-message').on('click', '.swap-message-element' , function(e){ 
    if ( !$(".message-history").is(e.target) && $(".message-history").has(e.target).length === 0 && !$(e.target).hasClass('remove-message-block') && !$(e.target).hasClass('fa-timesq') )  {
        if ($(this).hasClass('open-spoiler')) { 
            $(this).removeClass('open-spoiler');
            $(this).find('.short-message-history').css('display', 'flex'); 
            $(this).find('.spoiler-pay-text').html('<i class="fa fa-chevron-downq"></i>');
        }
        else {
            $(this).addClass('open-spoiler'); 
            $(this).find('.spoiler-pay-text').html('<i class="fa fa-chevron-upq"></i>');
        }
        $(this).find('.message-history').slideToggle();
    }
});


//button back main menu
$('#menu-select-form-q').on('click', function(){  
    location.reload();
});


//button remove form
$('.swap-select-form-q').on('click', '.remove-form' , function(){ 
    $('.swap-modal-remove').css('display', 'flex');
    $('.podtverdit-modal').attr('data-remove', $(this).closest('.swap-select-form').find('.id-form-q').html() );
});
//confirmation remove
$('.swap-select-form-q').on('click', '.yes-remove' , function(){ 
    $('.swap-modal-remove').css('display', 'flex');
    $('.podtverdit-modal').attr('data-remove', $(this).prev('.viborform').find('.id-form-admin-tex-q').html() );
    let idremoveform = $('.podtverdit-modal').attr('data-remove');
    $('.swap-select-form .id-form-q:contains("'+idremoveform+'")').closest('.swap-select-form').remove(); 
    //ajax remove form
    $.ajax({
        type: "POST",
        url: params.ajaxurl,
        data: {
            action: 'remove_form',
            nonce_code : params.nonce,
            removeform: idremoveform
        }
    });
    //change in pagination after form removal
    var number = $('.swap-select-form').length; 
    var numberId = 1;
    var selectedPage = $('.pagination-number.active-pagination');
    if ( number  > 0 ){
        var chislopagination = 0;
        $('.swap-select-form').each(function(){
            chislopagination++;
            if (chislopagination === 11 ){
                numberId++;
                chislopagination = 1;
            }
            $(this).attr('data-pagination' , numberId  );
        }); 
        //empty pagination removal
        $('.pagination-number').each(function(){
            var idpageclear = $(this).html();
            if ( $('.swap-select-form[data-pagination='+idpageclear+']').length === 0){ $(this).remove(); }
        });   
        //click on the desired pagination
        if ( selectedPage.lenght > 0 ){ 
            selectedPage.trigger('click');
        }
        else { 
            $('.pagination-number:contains("1")').trigger('click');
        }
    }
});

//hide window remove form
$('.swap-select-form-q').on('click', '.swap-modal-remove' , function(e){
    if ( !$(e.target).hasClass('podtverdit-modal') ){
        $('.swap-modal-remove').css('display' , 'none'); 
    }
});

//remove history message
$('.swap-history-message, .swap-paypal-message').on('click', '.remove-message-block' , function(){ 
    let idremovemessage = $(this).closest('.swap-message-element').attr('data-id');
    let removeobject = $(this).closest('.swap-message-element');
    $.ajax({
        type: "POST",
        url: params.ajaxurl,
        data: {
            action: 'remove_history_message',
            nonce_code : params.nonce,
            removemessage: idremovemessage
        },
        success: function( ) {
            removeobject.remove();
        }
    });
    //change in pagination after message remove
    let object = $(this).closest('.box-history-message');
    var pageNumberPagination = $(this).closest('.swap-message-element').attr('data-pagination');
    //if remove all element in page
    if ( object.find('.swap-message-element[data-pagination="'+pageNumberPagination+'"]' ).length === 1){
        //if page not last 
        if ( object.find('.pagination-number-history[data-page="'+pageNumberPagination+'"]' ).next('.pagination-number-history').length === 1 ){
            let nextPage = Number(pageNumberPagination) + 1 ;
            //remove this page
            object.find('.pagination-number-history[data-page="'+pageNumberPagination+'"]' ).remove();
            object.find('.pagination-number-history[data-page="'+nextPage+'"]' ).trigger('click');
            //update number page
            object.find('.pagination-number-history').each(function(){
                let number = $(this).attr('data-page');
                if ( number > pageNumberPagination ){
                    let updateNumber = Number(number) - 1;
                    $(this).html( updateNumber );
                }
            });
        }
        //page last 
        else {
            if ( object.find('.pagination-number-history[data-page="'+pageNumberPagination+'"]' ).prev('.pagination-number-history').length === 1 ){
                let prevPage = Number(pageNumberPagination) - 1;
                //remove this page
                object.find('.pagination-number-history[data-page="'+pageNumberPagination+'"]' ).remove();
                object.find('.pagination-number-history[data-page="'+prevPage+'"]' ).trigger('click');
            }
        }
    
    }
});



$('.activate-button-q').on('click', function(){
    let keybaze = $('#activate-element-q').val();
    $.ajax({
        type: "POST",
        url: params.ajaxurl,
        data: {
            action: 'bd_option',
            nonce_code : params.nonce,
            optionbaze: keybaze
        },
        success: function(  ) {
            location.reload();
        }
    });
});

//status license
$('.element-header-menu').on('click' , function(){ 
    if ( $('.status-license-q .open-status-l').length === 0 ) {
        if ( !$('.param-elemnt-q').hasClass('element-option') ) { 
            $('.status-license-yes').addClass('open-status-l').slideToggle();
        }
        else { 
            $('.status-license-not').addClass('open-status-l').slideToggle(); 
        }
    }
    
    setTimeout(function(){
        $('.open-status-l').removeClass('open-status-l').slideToggle();
    },4000);
     
});



//show window add form
$('.swap-select-form-q').on('click', '.button-add-newform' , function(){ 
    $(".swap-box-created-form").css('display', 'block');
});


 //if the form is empty show text: 'Add field'
function textEmptyForm(){
    if ( $('.form-element-q[data-tabs="0"]').length !== 0) { 
        $('.zaglushka').addClass('tab-none-q');  
    }
    if ( $('.form-element-q[data-tabs="0"]').length === 0) { 
        if ( $('.zaglushka').length === 0){
            let textEmptyForm = '<div class="zaglushka">'+$('#text-addfield-q').html()+' </div>';
            $('#drag-drop-element').append(textEmptyForm);
        }
    }
}

//hide window add form
$(document).mouseup(function (i){ 
    //hide window created new form
    if ( ($(".swap-box-created-form").css('display')==='block') && (!$(".swap-created-form").is(i.target)) && ($(".swap-box-created-form").has(i.target).length === 0 ) )  {
        $(".swap-box-created-form").css('display', 'none');
    }
});

  

//add new form
$('.swap-select-form-q').on('click', '.created-form-button' , function(){  
    //conditions unique name form
    let nameQform = $('#nameQform').val(); 
    let uniqueName = 0;
    let maxLength = 0;
    $('.name-form-bd').each(function(){
        if ( $(this).html()===nameQform ){
            uniqueName++; 
        }
    });
    if ( nameQform.length > 20 ) {
        maxLength++; 
    }
    //validation name form
    if ( $('#nameQform').val() !=='' && uniqueName === 0 && maxLength === 0){
        clearmodaladmin();
        $('.swap-admin-panel-q').css('display', 'flex') ; //window show
        $('.swap-select-form-q, .swap-panel-form-q , .header-form-quasar, .swap-box-created-form, .activation-star-form-3, .wrap-text-warning-cash').css('display', 'none');
        let idNewElement = Number($('#contentFormsss').attr('data-id')) + 1;
        //write id
        $('.id-form-nuber-field').html( idNewElement );
        $('.id-form-admin-tex-q').html( idNewElement ); //id number
        $('#short-code-help').html( '[formaQ id="'+idNewElement+'" type="inline" align="center" ]' );
        $('#short-code-popup-help').html( '[formaQ id="'+idNewElement+'" type="popup" align="center" text="'+$('#text-for-button').html()+'" ]' );
        $('#short-code-php-help').html( '&lt;?php echo do_shortcode( [formaQ id="'+idNewElement+'" type="inline" align="center" ] ) ?&gt;' );
        $('.form-short-code-q').val( '[formaQ id="'+idNewElement+'" type="inline" align="center" ]' );
        $('.form-short-code-swap-q').css( 'display' , 'flex');
        $('.form-link-p-q').val( 'quasar-form-p-'+idNewElement+'' );
        
        //replace spaces in the title
        let nameForm = $('#nameQform').val();
        nameForm = nameForm.replace(/\s/g,'_');
        $('#form-name-value').val( nameForm ); //name form
        $('#sizeqForm').val('420px');
        $('.admin-form-q').css( 'width' , '420px');
        //warning short code in help
        $('.warning-shortcode-hepl').css('display','block');
        //hide import / export setting
        $('.export-form-swap, .export-form-swap, .message-quick-2, .copy-export-button').css('display' ,'none');
        $('.show-new-form-q').css('display' ,'block');
        textEmptyForm(); //textEmptyForm
        //write id of the form
        $('.id-form-admin').html('Field0q');
        //setting mail defoult
        $('#wpmailtype').trigger('click');//active wp mail
        //defolut method wp mail
        $('.wp_mail-seting').css('display', 'block'); 
        $('.stmtp-setting').css('display', 'none');  
        $('.setting-tab-q[data-tab-setting="1"]').trigger('click');
        //defoult senfer mail
        $('#senderemail').val( $('.sender-mail-generate').html() );
        
        //defoult design setting 
        //background form
        let createdElement = "<input class='background-design' data-alpha='true' value='#fff'>";
        $("#background-design").append( createdElement );
        $('#background-design input').wpColorPicker( colorOptions);
        //padding form
        $('#padding-left-form').val( $('#drag-drop-element').css('padding-left') );
        $('#padding-right-form').val( $('#drag-drop-element').css('padding-right') );
        $('#padding-top-form').val( $('#drag-drop-element').css('padding-top') );
        $('#padding-bottom-form').val( $('#drag-drop-element').css('padding-bottom') );
        //border form
        createdElement = "<input class='background-design'data-alpha='true' value='#000'>";
        $("#border-color-form").append( createdElement );
        $('#border-color-form input').wpColorPicker( colorOptions);
        $('#border-width-q').val( $('#drag-drop-element').css('border-width') );
        //background popup
        createdElement = "<input class='background-design-popup' data-alpha='true' value='#fff'>";
        $("#background-design-popup").append( createdElement );
        $('#background-design-popup input').wpColorPicker( colorOptions);
        //color popup
        createdElement = "<input class='font-color-design-popup' data-alpha='true' value='#444'>";
        $("#font-color-design-popup").append( createdElement );
        $('#font-color-design-popup input').wpColorPicker( colorOptions);
        //padding popup
        $('#padding-left-popup').val( $('.button-design-popup').css('padding-left') );
        $('#padding-right-popup').val( $('.button-design-popup').css('padding-right') );
        $('#padding-top-popup').val( $('.button-design-popup').css('padding-top') );
        $('#padding-bottom-popup').val( $('.button-design-popup').css('padding-bottom') );
        //font size popup
        $('#font-size-popup').val( $('.button-design-popup').css('font-size') );
        
        //border popup
        createdElement = "<input class='border-color-popup' data-alpha='true' value='#1ea2d3'>";
        $("#border-color-popup").append( createdElement );
        $('#border-color-popup input').wpColorPicker( colorOptions);
        $('#border-radius-popup').val( $('.button-design-popup').css('border-radius') );
        $('#border-width-popup').val( $('.button-design-popup').css('border-width') );
        //color informer button custom color
        let colorInformerId = $('.button-design-popup').attr('data-hover-background').split('-');
        $('#customcolor5').attr('class','color-informer').addClass('color-'+colorInformerId[2]+'q');
        colorInformerId = $('.button-design-popup').attr('data-hover-color').split('-');
        $('#customcolor6').attr('class','color-informer').addClass('color-'+colorInformerId[2]+'q');
        //shedow and full img fin
        $('#adaptiv-fon').parent().remove();
        $('#shedow-forma').parent().remove();
        $('#checkbox-after-text').parent().remove();
        $('#anti-spam-q').parent().remove();
        $('#copy-auto-scroll').parent().remove();
        $('#copy-mail-for-user').parent().remove();
        $('.wrap-footer-q').remove();
        //shedow
        createdElement = "<div class='swap-block-setting-desing checkbox-design-setting width-100-q'> <input id='shedow-forma' type='checkbox'><label for='shedow-forma'><div></div></label><span>"+$('#text-shedow-hide-q').html()+"</span> </div>";
        $('.checkbox-design-q').append(createdElement);
    
        //img background full size
        createdElement = "<div class='swap-block-setting-desing checkbox-design-setting width-100-q'> <input id='adaptiv-fon' type='checkbox'><label for='adaptiv-fon'><div></div></label><span>"+$('#text-img-fon-full-q').html()+"</span> </div>";
        $('.checkbox-design-q').append( createdElement );
        
        $('.setting-tab-q[data-tab-setting="4"]').trigger('click');
        $('.quasart-q').trigger('click');
        
        //disable design
        createdElement = "<div class='swap-block-setting-desing checkbox-design-setting width-100-q'> <input id='disable-design-q' type='checkbox'><label for='disable-design-q'><div></div></label><span>"+$('#text-disable-design-q').html()+"</span> <span class='help-message-q disable-d'>?</span></div>";
        $('.checkbox-design-q').append(createdElement);
        
        //antispam setting
        createdElement = "<div class='checkbox-antispam checkbox-design-setting'> <input id='anti-spam-q' type='checkbox'><label for='anti-spam-q'><div></div></label><span>"+$('#text-antispam-q').html()+"</span> </div>";
        $('.wrap-antispam-setting').append(createdElement);
        
        //text after setting
        createdElement = "<div class='checkbox-after-text checkbox-design-setting'> <input id='checkbox-after-text' type='checkbox' checked><label for='checkbox-after-text'><div></div></label><span>"+$('#text-after-submit').html()+"</span> </div>";
        $('.wrap-setting-after-text').append(createdElement);
        
        //copy mail for user
        createdElement = "<div class='checkbox-design-setting'> <input id='copy-mail-for-user' type='checkbox'><label for='copy-mail-for-user'><div></div></label><span>"+$('#text-send-copy-mail-user-q').html()+"</span> </div>";
        $('.wrap-send-user-mail-q').append(createdElement);
        
        //auto scroll enable
        createdElement = "<div class='checkbox-auto-scroll checkbox-design-setting'> <input id='copy-auto-scroll' type='checkbox'><label for='copy-auto-scroll'><div></div></label><span>"+$('#text-auto-scroll').html()+"</span> </div>";
        $('.wrap-auto-scroll').append(createdElement);

    }     
    //invalid form name
    if($('#nameQform').val() ===''){ 
       $('.error-add-newform').html( $('#text-createdformerror1-q').html() ).css('display' ,'block'); 
       $('.error-add-newform').prev('input').addClass('error-name-form');
    }
    if(uniqueName > 0){ 
        $('.error-add-newform').html( $('#text-createdformerror2-q').html() ).css('display' ,'block'); 
        $('.error-add-newform').prev('input').addClass('error-name-form');
    }
    if(maxLength > 0){ 
        $('.error-add-newform').html( $('#text-createdformerror3-q').html() ).css('display' ,'block'); 
        $('.error-add-newform').prev('input').addClass('error-name-form');
    }
});

//remover error class of name field
$('#nameQform').on('focus', function(){
    if ( $(this).hasClass('error-name-form') ) { 
        $(this).removeClass('error-name-form'); 
        $(this).next('.error-add-newform').css('display', 'none');
    } 
});


//clear window editor
function clearmodaladmin(){
    $('.admin-modal-box-col-1, .admin-modal-box-col-2').html(''); 
    $('.modalbox-admin-panel').css('display', 'none');
}  

//tabs in window setting
$('.setting-tab-q').on('click' , function() {
    let tabSetting = Number( $(this).attr('data-tab-setting') );
    //setting tab
    if ( tabSetting < 4 || tabSetting === 8 ) {
        $('.setting_general-box .setting-tab-q').removeClass('activ-tab-setting-q');
        $('.swap-tab-setting-q').css('display', 'none');
        $('.swap-tab-setting-q[data-tab-setting="'+tabSetting+'"]').css('display', 'block');
    }
    //design tab
    if ( tabSetting === 4 || tabSetting === 5 ) { 
        $('.setting_design-box .setting-tab-q').removeClass('activ-tab-setting-q');
        $('.design-setting-tab').css('display', 'none');
        $('.design-setting-tab[data-tab-setting="'+tabSetting+'"]').css('display', 'block');
    }
    //quick tab
    if ( tabSetting === 6 || tabSetting === 7 ) { 
        $('.quick-start-q .setting-tab-q').removeClass('activ-tab-setting-q');
        $('.quick-start-tab').css('display', 'none');
        $('.quick-start-tab[data-tab-setting="'+tabSetting+'"]').css('display', 'flex');
    }
    $(this).addClass('activ-tab-setting-q');
});


//created form in main list
$('.swap-select-form-q').on('click', '.viborform' , function(){
   
    //selected short code
	var selected_text = "";
	let textShortCode = $(this).find('.short-code-q').html();
	
	if(window.getSelection) {
		selected_text = window.getSelection().toString();
	} 
	else if(document.selection && document.selection.type != "Control") {
		selected_text = document.selection.createRange().text;
	}
	if( selected_text == textShortCode || selected_text.length > 5 ) {
		return;
		
	}
 
    $("#list-form-q").val( $(this).find('.this-name-q').html() ).attr('data-form' , $(this).find('.this-name-q').html() );
    createdform();
    $('.swap-select-form-q, .swap-panel-form-q , .header-form-quasar, .activation-star-form-3, .wrap-text-warning-cash').css('display', 'none');
});

//list-form-q
$('#list-form-q').on('change', function(){
    if ( $(this).val() !='Select form') { createdform(); }
});   

//import / export form
$('.active-export-button').on('click' , function(){
    let exportCode = $('#import-form-code').val();
    if ( exportCode.match(/quasarFormPl/g) ){
        if (  exportCode.match(/quasarFormPl/g).length === 3 ){
            $('#drag-drop-element').find('.form-element-q').remove();
            exportCode = exportCode.split('quasarFormPl');
            var classThisform= $('.class-this-form-q').html();
            $(classThisform).find('.string-html-form-bd').html( exportCode[0] );
            $(classThisform).find('.setting-form-bd').html( exportCode[1] );
            $(classThisform).find('.tabs-form-bd').html( exportCode[2] );
            $(classThisform).find('.logick-form-bd').html( exportCode[3] );
            createdform();
            
            $('#import-form-code').html( '' );
        }
        else { 
            $('#import-form-code').closest('.element-css-q').addClass('error-esport-q'); 
        }
    }
    else { 
        $('#import-form-code').closest('.element-css-q').addClass('error-esport-q');
    }
   
});
//remove error class
$('#import-form-code').on('focus' , function(){
    let object = $('#import-form-code').closest('.element-css-q');
    if ( object.hasClass('error-esport-q') ) { 
        object.removeClass('error-esport-q'); 
    }
});

//select export text
$('.copy-export-button').on('click' , function(){
    $('#export-form-code').select();
});

//copy form
$('.copy-form-q').on('click' , function(){
    var nameFormCopy = $(this).closest('.swap-select-form').find('.this-name-q').html();
    var idFormCopy = 0;
    $('#contentFormsss .none-element').each(function(){
        if ( $(this).find('.name-form-bd').html() == nameFormCopy ){ idFormCopy = $(this).attr('data-id-string'); }
    });
    var classThisFormCopy = '.cs' + idFormCopy;
    var arrayFormCopy = [];
    arrayFormCopy[0] = $(classThisFormCopy).find('.name-form-bd').html();
    arrayFormCopy[1] = $(classThisFormCopy).find('.string-html-form-bd').html();
    arrayFormCopy[2] = $(classThisFormCopy).find('.setting-form-bd').html( );
    arrayFormCopy[3] = $(classThisFormCopy).find('.tabs-form-bd').html( );
    arrayFormCopy[4] = $(classThisFormCopy).find('.logick-form-bd').html( );
    
    //generation name
    var nameCopyForm = arrayFormCopy[0];
    if ( nameCopyForm > 15 ) { 
        nameCopyForm = nameCopyForm.substr( 0, (nameCopyForm.length - 5 ));
    }
    nameCopyForm = arrayFormCopy[0] + '_copy';
    
   
    //generation id
    var neyIdCopyForm = Number( $('#contentFormsss').find('.none-element:last').attr('data-id-string') ) + 1;
    var classCopyForm = 'cs' + neyIdCopyForm;
    $('.class-this-form-q').html( '.'+classCopyForm );


    //add none element
    $('#contentFormsss').find('.none-element:last').after('<p class="'+classCopyForm+' none-element"><span class="id-select-form">'+neyIdCopyForm+'</span><span class="name-form-bd">'+nameCopyForm+'</span><span class="string-html-form-bd">'+arrayFormCopy[1]+'</span> <span class="setting-form-bd">'+arrayFormCopy[2]+'</span><span class="tabs-form-bd">'+arrayFormCopy[3]+'</span><span class="logick-form-bd">'+arrayFormCopy[4]+'</span></p>');
    //add list
    $('.swap-select-form:last').after('<div class="swap-select-form"> <div class="viborform">  <div class="id-form-q">'+neyIdCopyForm+'</div><div class="name-form-q"> <div class="this-name-q">'+nameCopyForm+'</div> </div></div></div>');
    
    //add selected list
    $('#list-form-q').find('option:last').after('<option>'+nameCopyForm+'</option>');
    $('#list-form-q').find('option').each(function(){
        if ( $(this).html() == nameCopyForm ){ $(this).attr('selected', 'selected'); }
    });
    
    //created  form
    $('.swap-select-form-q, .swap-panel-form-q , .header-form-quasar, .activation-star-form-3, .wrap-text-warning-cash').css('display', 'none');
    //short code
    let idNewElement = Number($('#contentFormsss').attr('data-id')) + 1;
    $('.id-form-nuber-field').html( idNewElement );
    $('.id-form-admin-tex-q').html( idNewElement ); //id number
    $('#short-code-help').html( '[formaQ id="'+idNewElement+'" type="inline" align="center" ]' );
    $('#short-code-popup-help').html( '[formaQ id="'+idNewElement+'" type="popup" align="center" text="'+$('#text-for-button').html()+'" ]' );
    $('.form-short-code-q').val( '[formaQ id="'+idNewElement+'" type="inline" align="center" ]' );
    createdform(1);
    
});


//constcruction level 2
$('.admin-form-q').on('click', '.add-construction-q' , function(){ 
    let object = $(this).parent().next('.container-construction');
    let construction2 = "<div class='form-element-q element-css-q construction-block-2' data-sizes='100%' data-tip='construction-block-2'><div class='panel-construction-q'> <div class='colqswap'><span><i class='fa fa-barsq'></i></span>   <div class='colq'> <div class='coloneq two-q'>1</div>  <div class='coluvirsal two-q'>2</div> <div class='coluvirsal two-q'>3</div> <div class='coluvirsal two-q'>4</div> <div class='coluvirsal two-q'>5</div> <div class='coluvirsal two-q'>6</div>  </div> </div>  <div class='removconstructq'>"+$('#text-remove-q').html()+"</div> </div> <div class='swap-construction-q two-q'>  <div class='box-construction-q two-q' style='width: 100%; height: 100%;' data-sizeq='100%' data-color-1='rgba(255,255,255,0)' data-padding='0px|0px|0px|0px' data-margin='0px|0px|0px|0px' data-custum=''><div class='dashboard-construction'>  <div class='editor-column'> <i class='fa fa-pencilq'></i></div> </div> <div class='container-construction-2' style='height: 100%;'></div> </div>  </div>  </div>";
    object.prepend( construction2 );
    dragdrobbable();
});



//fix border construction
function fixborder2(){
    $('.construction-block .container-construction').each(function(){
        if ( $(this).html() ===''){
            $(this).css({'border' : '1px dashed #aaa'}); 
        } 
        else {
            $(this).css({'border' : '1px solid rgb(194, 191, 191)'});
        } 
    });
}


function validationNameForm (value){
    let object = $('.swap-name-box');
    let validation = 0;
    //max simbol name
    if ( value.length > 20 ) { 
        object.addClass('error-name-form'); 
        let number = value.length ;
        let numberRemov = number - 20;
        value = value.substr( 0, number - numberRemov );
        validation++;
    }
    else { 
        if ( object.hasClass('error-name-form') ) { object.removeClass('error-name-form'); }
    }
    //not empty
    if ( value === '' ) { 
        object.addClass('error-name-form-2'); 
        validation++;
    }
    else { 
        if ( object.hasClass('error-name-form-2') ) { object.removeClass('error-name-form-2'); }
    }
    //name use
    let uniqueName = 0;
    let valThisName = $('#form-name-value').val();
    $('#list-form-q').find('option').each(function(){
        if ( $(this).prop('selected') !== true ){
            if ( $(this).html() == valThisName ) {uniqueName++; }
        }
    });
    if ( uniqueName > 0 ){
        object.addClass('error-name-form-3');
        validation++;
    }
    else { 
        if ( object.hasClass('error-name-form-3') ) { object.removeClass('error-name-form-3'); }
    }
        
    if ( validation > 0 ) {return false; }
}

//changes width and name form
$('.form-name-q input').on('keyup', function() {
    let value = $(this).val().replace(/</g,'').replace(/>/g, '').replace(/'/g, '').replace(/"/g, '').replace(/[/]/g, '').replace(/;/g, '').replace(/[|]/g, '').replace(/&/g, '').replace(/\s/g,'_');
    
    if ( $(this).attr('id') === 'form-name-value' ){
        validationNameForm( value );
    }
    $(this).val( value );
    if ( $(this).attr('id')==='sizeqForm' ) { 
        $('.admin-form-q').css( 'width' , value); 
    }
});
$('.form-name-q input').on('focus', function() {
    let element = $(this).closest('.swap-name-box');
    if ( element.hasClass('error-name-form') ) { 
        element.removeClass('error-name-form');
    }
    if ( element.hasClass('error-name-form-2') ) { 
        element.removeClass('error-name-form-2');
    } 
});


//select form 
function createdform(q = 0) {
    //clear window
    clearmodaladmin();
    $('.swap-admin-panel-q').css('display', 'flex');
    $('.admin-form-q, .swap-tabs-form-q').html(''); //clear content prev form
    $('#form-name-value').val('');
    $('#adaptiv-fon').parent().remove();
    $('#shedow-forma').parent().remove();
    $('#disable-design-q').parent().remove();
    $('#anti-spam-q').parent().remove();
    $('#copy-mail-for-user').parent().remove();
    $('#checkbox-after-text').parent().remove();
    $('#copy-auto-scroll').parent().remove();
    $('.message-no-add, .wrap-footer-q').remove();
    let nameSelectedForm = $("#list-form-q").val(); // value selected
    $("#name-field-bd").attr('value' , nameSelectedForm ); //save original name form
    let arrayNumber = $('.box-select-form-q .swap-select-form').length; 
    let cycle = 0; 
    //array form
    while (cycle < arrayNumber) {
        var classThisForm = '.cs' + cycle; //class this form
        var nameThisForm = $(classThisForm).find('.name-form-bd').html(); // name this form
        //selected form
        if (nameSelectedForm === nameThisForm) {
            //class selected form
            $('.class-this-form-q').html( classThisForm );
            let idNumber = 0;
            if( q == 1 ){ idNumber = Number($('#contentFormsss').attr('data-id')) + 1; }
            else { idNumber = $( classThisForm ).find('.id-select-form').html(); }
            $('.id-form-admin-tex-q').html( idNumber ) ; //id number
            $('#short-code-help').html( '[formaQ id="'+idNumber+'" type="inline" align="center" ]' );
            $('.form-short-code-q').val( '[formaQ id="'+idNumber+'" type="inline" align="center" ]' );
            $('#short-code-popup-help').html( '[formaQ id="'+idNumber+'" type="popup" align="center" text="'+$('#text-for-button').html()+'" ]' );
            $('#short-code-php-help').html( '&lt;?php echo do_shortcode( [formaQ id="'+idNumber+'" type="inline" align="center" ] ) ?&gt;' );
            $('.form-short-code-swap-q').css( 'display' , 'flex');
            $('.form-short-code-swap-q select').val( $('.form-short-code-swap-q').find('option:first-child').html() ) ;
            $('.form-link-p-q').val( 'quasar-form-p-'+idNumber+'' );
            
            let idField = 'Field'+ $( classThisForm ).find('.id-select-form').html() +'q'; //write id
            $('.id-form-admin').html( idField );
            
            //base setting form
            let arraySetting = $( classThisForm ).find('.setting-form-bd').html().split('/'); 
            $('#sizeqForm').val(arraySetting[0]); // width form
            $('.admin-form-q').css( 'width' , arraySetting[0]);
            let numberId = arraySetting[1] * 1;//number id field
            //write id
            $('.id-form-nuber-field').html( numberId );
            $('#form-name-value').val( nameThisForm ); //name form
       
            var tabsArray = $( classThisForm ).find('.tabs-form-bd').html();//str tab
            tabsArray = tabsArray.split('|'); 
            if (typeof tabsArray[0] ==="undefined" ){
                $('#add-tab-q').attr('data-tab-1', '0');
            }
            if (typeof tabsArray[0] !="undefined" ){ 
                $('#add-tab-q').attr('data-tab-1', tabsArray[0]); 
            }
        }
        cycle++;  
    }

    //Created form ---------------------------------------------------------
    var classThis = $('.class-this-form-q').html();
    var strFormSelectedArray = $( classThis ).find('.string-html-form-bd').html().split('/'); //array filed
    strFormSelectedArray = $.grep(strFormSelectedArray , function(n){  return n !== ' ' && n !== ''});//clear spaces
    var stringForm = '';
    var numberId = 0; 
    
    $.each( strFormSelectedArray, function(key,value){
        let arrayFieldContent = strFormSelectedArray[key].split(';'); //array params this field
        //conversion of special characters back
        $.each( arrayFieldContent, function(key2,value2){
            arrayFieldContent[key2] = arrayFieldContent[key2].replace(/Q1@/g,"<").replace(/Q2@/g, '>').replace(/%a@/g, "'").replace(/%A@/g, '"').replace(/@palk@/g, '/').replace(/TO%C/g, ';').replace(/R@R/g, '|').replace(/PROcentQ/g, '%').replace(/ZapETayA/g, "&#39;");
        }); 
        
        let createdElement = $('.html-create-fied').html();
        
        //1. field input
        if (arrayFieldContent[0] === 'input') { 
            numberId++ ;
            let heading = '';
            let qclass = 'form-element-q type-input-element element-css-q '+ arrayFieldContent[10] +' '+ arrayFieldContent[14];
            if (arrayFieldContent[7] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[2] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            //auto filling
            if (typeof arrayFieldContent[27] =="undefined"){arrayFieldContent[27] = '';}
            if (typeof arrayFieldContent[28] =="undefined"){arrayFieldContent[28] = 'disabled';}
            if (typeof arrayFieldContent[29] =="undefined"){arrayFieldContent[29] = '';}
            
            //style 1
            if (arrayFieldContent[22] ==='style1'){
                qclass = qclass + ' style-qform-1'; 
                heading ='<span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size: '+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span>';
            }
            //style 2
            if (arrayFieldContent[22] ==='style2'){
                qclass = qclass + ' style-qform-2'; 
                heading ='<label for="firldS'+numberId+'"> <span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size:'+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span></label>';
            }
            
            let stringStyle = "font-size:"+arrayFieldContent[11]+"; border-color:"+arrayFieldContent[12]+"; background-color:"+arrayFieldContent[13]+"; border-radius:"+arrayFieldContent[15]+"; border-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[17]+"; padding: "+arrayFieldContent[24];
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[6]+"' class='"+qclass+"' style='width: "+arrayFieldContent[3]+"' data-sizes='"+arrayFieldContent[3]+"' data-req='"+ arrayFieldContent[2] +"' data-tabs ='"+ arrayFieldContent[5]+"' data-tip='input' data-none='"+arrayFieldContent[7]+"' data-focus-class='"+arrayFieldContent[14]+"' data-border-radius='"+arrayFieldContent[15]+"' data-border-width='"+arrayFieldContent[16]+"' data-placeholder='"+arrayFieldContent[10]+"' data-border-color='"+arrayFieldContent[12]+"' data-custum='"+arrayFieldContent[21]+"' data-custum-2='"+arrayFieldContent[29]+"' data-style='"+arrayFieldContent[22]+"' data-validation='"+arrayFieldContent[23]+"'>"+heading+"<div class='input-swap'><input id='firldS"+numberId+"' class='style-element' style='"+stringStyle+"' placeholder='"+arrayFieldContent[1].replace(/[\']/g, '&#39;')+"' autocomplete='off' data-filling='"+arrayFieldContent[27]+"' data-filling-a='"+arrayFieldContent[28]+"'><div class='fa-icons-q' data-num='"+arrayFieldContent[19]+"'><i class='"+arrayFieldContent[18]+"' style='font-size:"+arrayFieldContent[11]+"; color:"+arrayFieldContent[20]+"'></i></div></div></div>";
        }

        
        //2. field email
        if (arrayFieldContent[0] === 'type-email-element') { 
            numberId++ ;
            let heading = '';
            let qclass = 'form-element-q type-email-element element-css-q '+ arrayFieldContent[10] +' '+ arrayFieldContent[14];
            if (arrayFieldContent[7] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[2] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            
            if (typeof arrayFieldContent[27] =="undefined"){arrayFieldContent[27] = '';}
            
            //style 1
            if (arrayFieldContent[22] ==='style1'){
                qclass = qclass + ' style-qform-1'; 
                heading ='<span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size: '+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span>';
            }
            //style 2
            if (arrayFieldContent[22] ==='style2'){
                qclass = qclass + ' style-qform-2'; 
                heading ='<label for="firldS'+numberId+'"> <span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size:'+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span></label>';
            }
            
            let stringStyle = "font-size:"+arrayFieldContent[11]+"; border-color:"+arrayFieldContent[12]+"; background-color:"+arrayFieldContent[13]+"; border-radius:"+arrayFieldContent[15]+"; border-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[17]+"; padding: "+arrayFieldContent[24];
     
            stringForm = stringForm + "<div id='"+arrayFieldContent[6]+"' class='"+qclass+"' style='width: "+arrayFieldContent[3]+"' data-sizes='"+arrayFieldContent[3]+"' data-req='"+ arrayFieldContent[2] +"' data-tabs ='"+ arrayFieldContent[5]+"' data-tip='type-email-element' data-none='"+arrayFieldContent[7]+"' data-border-color='"+arrayFieldContent[12]+"' data-focus-class='"+arrayFieldContent[14]+"' data-border-radius='"+arrayFieldContent[15]+"' data-border-width='"+arrayFieldContent[16]+"' data-placeholder='"+arrayFieldContent[10]+"' data-custum='"+arrayFieldContent[21]+"' data-custum-2='"+arrayFieldContent[27]+"' data-style='"+arrayFieldContent[22]+"' data-validation='"+arrayFieldContent[23]+"'>"+heading+"<div class='input-swap'><input id='firldS"+numberId+"' class='style-element' style='"+stringStyle+"' placeholder='"+arrayFieldContent[1].replace(/[\']/g, '&#39;')+"' autocomplete='off'><div class='fa-icons-q' data-num='"+arrayFieldContent[19]+"'><i class='"+arrayFieldContent[18]+"' style='font-size:"+arrayFieldContent[11]+"; color:"+arrayFieldContent[20]+"'></i></div></div></div>";
        }
            
        //3. field  phone
        if (arrayFieldContent[0] === 'type-phone-element') { 
            numberId++ ;
            let heading = '';
            let qclass = 'form-element-q type-phone-element element-css-q '+ arrayFieldContent[10] +' '+ arrayFieldContent[14];
            if (arrayFieldContent[7] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[2] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            
            //style 1
            if (arrayFieldContent[22] ==='style1'){
                qclass = qclass + ' style-qform-1'; 
                heading ='<span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size: '+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span>';
            }
            //style 2
            if (arrayFieldContent[22] ==='style2'){
                qclass = qclass + ' style-qform-2'; 
                heading ='<label for="firldS'+numberId+'"> <span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size:'+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span></label>';
            }
            
            if ( arrayFieldContent[28] =='yes' ) { qclass = qclass + ' mask-p-q';}
            if (typeof arrayFieldContent[29] =="undefined"){arrayFieldContent[29] = '';}
            
            let stringStyle = "font-size:"+arrayFieldContent[11]+"; border-color:"+arrayFieldContent[12]+"; background-color:"+arrayFieldContent[13]+"; border-radius:"+arrayFieldContent[15]+"; border-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[17]+"; padding: "+arrayFieldContent[24];
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[6]+"' class='"+qclass+"' style='width: "+arrayFieldContent[3]+"' data-sizes='"+arrayFieldContent[3]+"' data-req='"+ arrayFieldContent[2] +"' data-tabs ='"+ arrayFieldContent[5]+"' data-tip='type-phone-element' data-none='"+arrayFieldContent[7]+"' data-focus-class='"+arrayFieldContent[14]+"' data-border-radius='"+arrayFieldContent[15]+"' data-border-width='"+arrayFieldContent[16]+"' data-placeholder='"+arrayFieldContent[10]+"' data-border-color='"+arrayFieldContent[12]+"' data-custum='"+arrayFieldContent[21]+"' data-custum-2='"+arrayFieldContent[29]+"' data-style='"+arrayFieldContent[22]+"' data-validation='"+arrayFieldContent[23]+"'>"+heading+"<div class='input-swap'><input id='firldS"+numberId+"' class='style-element' style='"+stringStyle+"' placeholder='"+arrayFieldContent[1].replace(/[\']/g, '&#39;')+"' autocomplete='off' data-mask='"+arrayFieldContent[27]+"' data-mask-a='"+arrayFieldContent[28]+"' ><div class='fa-icons-q' data-num='"+arrayFieldContent[19]+"'><i class='"+arrayFieldContent[18]+"' style='font-size:"+arrayFieldContent[11]+"; color:"+arrayFieldContent[20]+"'></i></div></div></div>";
        }
               
            
        //4. field checkbox
        if (arrayFieldContent[0] === 'checkboks') { 
            numberId++; 
            let qclass = 'form-element-q type-checkbox-element element-css-q '+arrayFieldContent[30];
            let classAlign = '';
            let imgCheckbox = '';
            if (arrayFieldContent[1] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            if (arrayFieldContent[6] === 'yes'){
                qclass = qclass + ' radio-checket-q';
            }
            if (arrayFieldContent[8] === 'none'){
                qclass = qclass + ' nonesq'; 
            }
            if (arrayFieldContent[9] === 'horizontal') {
                classAlign = 'swap-checkbox-q gorizontal-align';
            }
            if (arrayFieldContent[9] != 'horizontal') {
                classAlign = 'swap-checkbox-q';
            }
            if (arrayFieldContent[10] !== '' && arrayFieldContent[10] !== ' ') {
                imgCheckbox = '<img src="'+arrayFieldContent[10]+'">';
            }
            if (arrayFieldContent[11] ==='style1'){
                qclass = qclass + ' style-t-qform-1';
            }
            if (arrayFieldContent[11] ==='style2'){
                qclass = qclass + ' style-t-qform-2';
            }
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[7]+"' class='"+qclass+"' style='width: "+arrayFieldContent[2]+"' data-tip='checkboks' data-sizes='"+arrayFieldContent[2]+"' data-req='"+ arrayFieldContent[1]+"' data-tabs ='"+arrayFieldContent[5]+"' data-radio='"+arrayFieldContent[6]+"' data-align='"+arrayFieldContent[9]+"' data-align-box='"+arrayFieldContent[30]+"' data-none='"+arrayFieldContent[8]+"' data-style='"+arrayFieldContent[11]+"' data-custum='"+arrayFieldContent[21]+"'> <span class='heading-field-q' data-font='"+arrayFieldContent[20]+"' style='color:"+arrayFieldContent[19]+"; font-size:"+arrayFieldContent[20]+"; line-height:"+arrayFieldContent[20]+"; margin-bottom:"+arrayFieldContent[27]+"; font-weight: "+arrayFieldContent[28]+"'>"+arrayFieldContent[3]+"</span> <div class='"+classAlign+"' style='padding-top:"+arrayFieldContent[24]+"'>" ;
            let massivContentChecket = 31; 
            let contentCheckbox = '';
            //radio
            if (arrayFieldContent[6] === 'yes'){
                let typeckecks = 'radio' ;	
                while (arrayFieldContent[4] > 0){
                    contentCheckbox = arrayFieldContent[massivContentChecket].split('|');
                    if (typeof contentCheckbox[3] =="undefined"){contentCheckbox[3] = '';}
                                        
                    stringForm = stringForm + "<input type="+typeckecks+" id='"+contentCheckbox[0]+"'name='check;"+arrayFieldContent[7]+"' date-rasschet='"+contentCheckbox[2]+"' date-defoult='"+contentCheckbox[3]+"' "+contentCheckbox[3]+"><label for='"+ contentCheckbox[0] +"' style='margin-bottom:"+arrayFieldContent[26]+"'><div class='checkbox-qform' style='border-color:"+arrayFieldContent[12]+"; border-width:"+arrayFieldContent[18]+"; width:"+arrayFieldContent[16]+"; min-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[16]+"'><div class='checkbox-fafa' style='background-color:"+arrayFieldContent[29]+"'><i class='fa fa-checkq' style='font-size:"+arrayFieldContent[17]+"; background-color:"+arrayFieldContent[13]+"; color:"+arrayFieldContent[13]+"; width:"+arrayFieldContent[23]+"; height:"+arrayFieldContent[23]+";'></i></div></div><div class='html-text-check-q' style='color:"+arrayFieldContent[14]+"; font-size:"+arrayFieldContent[15]+"; padding-left:"+arrayFieldContent[25]+"'>"+contentCheckbox[1].replace(/PROcentQ/g, '%').replace(/Q1@/g,"<").replace(/Q2@/g, '>').replace(/%a@/g, "'").replace(/%A@/g, '"').replace(/@palk@/g, '/').replace(/TO%C/g, ';').replace(/R@R/g, '|')+"</div></label>";   
                    massivContentChecket++;
                    arrayFieldContent[4] = arrayFieldContent[4] - 1;
                    numberId++;
                }
            }
            //checkbox
            if (arrayFieldContent[6] != 'yes'){
                let typeckecks = 'checkbox' ;
                while (arrayFieldContent[4] >  0){
                    contentCheckbox = arrayFieldContent[massivContentChecket].split('|');
                    if (typeof contentCheckbox[3] =="undefined"){contentCheckbox[3] = '';}
                                        
                    stringForm = stringForm + "<input type="+typeckecks+" id='"+contentCheckbox[0]+"' date-rasschet='"+contentCheckbox[2]+"' date-defoult='"+contentCheckbox[3]+"' "+contentCheckbox[3]+"><label for='"+ contentCheckbox[0] +"' style='margin-bottom:"+arrayFieldContent[26]+"'><div class='checkbox-qform' style='border-color:"+arrayFieldContent[12]+"; border-width:"+arrayFieldContent[18]+"; width:"+arrayFieldContent[16]+"; min-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[16]+";'><div class='checkbox-fafa' style='background-color:"+arrayFieldContent[29]+"'><i class='fa fa-checkq' style='font-size:"+arrayFieldContent[17]+"; background-color:"+arrayFieldContent[22]+"; color:"+arrayFieldContent[13]+"; width:"+arrayFieldContent[23]+"; height:"+arrayFieldContent[23]+";'></i></div></div><div class='html-text-check-q' style='color:"+arrayFieldContent[14]+"; font-size:"+arrayFieldContent[15]+"; padding-left:"+arrayFieldContent[25]+"'>"+contentCheckbox[1].replace(/PROcentQ/g, '%').replace(/Q1@/g,"<").replace(/Q2@/g, '>').replace(/%a@/g, "'").replace(/%A@/g, '"').replace(/@palk@/g, '/').replace(/TO%C/g, ';').replace(/R@R/g, '|')+"</div></label>";    
                    massivContentChecket++;
                    arrayFieldContent[4] = arrayFieldContent[4] - 1;
                    numberId++;
                }
            }
            stringForm = stringForm + '</div></div>' ;
            numberId++;
        } 
   

        //5. submit
        if (arrayFieldContent[0] === 'submits') { 
            let stringstyle ='';
            let qclass = 'form-element-q element-css-q type-submit-element '+arrayFieldContent[4];
            //style
            if (arrayFieldContent[13] ==='style1'){
                qclass = qclass + ' style-qform-1';
            }
            if (arrayFieldContent[13] ==='style2'){
                qclass = qclass + ' style-qform-2';
            }
            if (arrayFieldContent[2] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[3] === 'yes'){
                stringstyle = stringstyle + 'width: 100%;';
            }
            
            if (typeof arrayFieldContent[18] =="undefined"){arrayFieldContent[18]= '';}
            if (typeof arrayFieldContent[19] =="undefined"){arrayFieldContent[19]= 'not';}
            
            stringstyle = stringstyle +"border-radius:"+arrayFieldContent[5]+"; background-color:"+arrayFieldContent[6]+"; color:"+arrayFieldContent[7]+"; border-color:"+arrayFieldContent[14]+"; font-size:"+arrayFieldContent[15]+"; padding:" +arrayFieldContent[16]+"; border-width:"+arrayFieldContent[17];

            stringForm = stringForm + "<div id='"+arrayFieldContent[9]+"' class='"+qclass+"' style='width:"+ arrayFieldContent[1] +";' data-sizes='"+arrayFieldContent[1]+"' data-tip='submits' data-ful='"+arrayFieldContent[3]+"' data-none='"+arrayFieldContent[2]+"' data-border-radius='"+arrayFieldContent[5]+"' data-border-width='"+arrayFieldContent[17]+"' data-border-color='"+arrayFieldContent[14]+"' data-custum='"+arrayFieldContent[10]+"' data-custum-2='"+arrayFieldContent[18]+"' data-hover-background='"+arrayFieldContent[12]+"'data-hover-color='"+arrayFieldContent[11]+"' data-color1='"+arrayFieldContent[6]+"' data-color2='"+arrayFieldContent[7]+"' data-disable-style='"+arrayFieldContent[19]+"' data-align-box='"+arrayFieldContent[4]+"'  data-style='"+arrayFieldContent[13]+"'><span class='submit-button-q style-element "+arrayFieldContent[11]+" "+arrayFieldContent[12]+"' style='"+stringstyle+"'>"+arrayFieldContent[8]+"</span></div>";
        }

        //6. field textarea
        if (arrayFieldContent[0] === 'type-textarea-element'){
            let qclass = 'form-element-q type-textarea-element element-css-q '+ arrayFieldContent[11] +' '+ arrayFieldContent[15]; 
            let heading = '';
            if (arrayFieldContent[3] === 'Requed'){
                qclass = qclass +' requed-field-q';
            }
            if (arrayFieldContent[8] === 'none'){
                qclass = qclass + ' nonesq';
            }
            
            if (typeof arrayFieldContent[23] =="undefined"){arrayFieldContent[23]= '';}
            
            //style 1
            if (arrayFieldContent[19] ==='style1'){
                qclass = qclass + ' style-qform-1'; 
                heading ="<span class='heading-field-q' data-font='"+arrayFieldContent[10]+"' style='color:"+arrayFieldContent[9]+"; font-size:"+arrayFieldContent[10]+"; line-height:"+arrayFieldContent[10]+"; margin-bottom: "+arrayFieldContent[20]+"; font-weight: "+arrayFieldContent[22]+"'>"+ arrayFieldContent[4] + "</span>";
            }
            //style 2
            if (arrayFieldContent[19] ==='style2'){
                qclass = qclass + ' style-qform-2'; 
                heading ="<label for='firldS"+numberId+"'> <span class='heading-field-q' data-font='"+arrayFieldContent[10]+"' style='color:"+arrayFieldContent[9]+"; font-size:"+arrayFieldContent[10]+";line-height:"+arrayFieldContent[10]+"; margin-bottom: "+arrayFieldContent[20]+"; font-weight: "+arrayFieldContent[22]+"'>"+ arrayFieldContent[4] +"</span></label>";
            }
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[7]+"' style='width: "+arrayFieldContent[2]+"' class='"+qclass+"' data-sizes='"+arrayFieldContent[2]+"' data-none='"+arrayFieldContent[8]+"' data-req='"+ arrayFieldContent[3] +"' data-heighsts='"+ arrayFieldContent[5] + "' data-tabs ='"+arrayFieldContent[6]+"' data-tip='type-textarea-element' data-border-color='"+arrayFieldContent[13]+"' data-focus-class='"+arrayFieldContent[15]+"' data-heading-style-2='none' data-border-radius='"+arrayFieldContent[16]+"' data-border-width='"+arrayFieldContent[17]+"' data-placeholder='"+arrayFieldContent[11]+"' data-custum='"+arrayFieldContent[18]+"' data-custum-2='"+arrayFieldContent[23]+"' data-style='"+arrayFieldContent[19]+"'>"+heading+"<textarea id='firldS"+numberId+"' class='style-qform-1 style-element' style='font-size:"+arrayFieldContent[12]+"; border-color:"+arrayFieldContent[13]+"; background-color:"+arrayFieldContent[14]+"; border-radius:"+arrayFieldContent[16]+"; border-width: "+arrayFieldContent[17]+"; height: "+arrayFieldContent[5]+"; padding: "+arrayFieldContent[21]+"' placeholder='"+arrayFieldContent[1].replace(/[\']/g, '&#39;')+"'></textarea></div>";
        }
   
   
        //7. custom Html
        if (arrayFieldContent[0] === 'type-custom-text-element'){
            let qclass = 'form-element-q element-css-q type-custom-text-element';
            if (!arrayFieldContent[1]){ 
                arrayFieldContent[1] = '50%';
            }
            if (arrayFieldContent[4] === 'none'){
                qclass = qclass + ' nonesq';
            }
            
            arrayFieldContent[5] = arrayFieldContent[5].replace(/Q2@/g, '>').replace(/Q1@/g,'<').replace(/%a@/g, "'").replace(/%A@/g, '"').replace(/@palk@/g, '/').replace(/TO%C/g, ';');
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[3]+"' style='width: "+arrayFieldContent[1]+"' class='"+qclass+"' data-sizes='"+ arrayFieldContent[1] + "' data-tabs ='"+ arrayFieldContent[2] + "' data-tip='type-custom-text-element' data-none ='"+arrayFieldContent[4]+"' data-custum='"+arrayFieldContent[6]+"'><div id='firldS" + numberId + "'>"+ arrayFieldContent[5] +"</div></div>";
        }
   
   
        //8. field total
        if (arrayFieldContent[0] === 'type-itog-element'){
            let qclass = 'form-element-q element-css-q type-itog-element';
            if (!arrayFieldContent[1]){ 
                arrayFieldContent[1] = '50%';
            }
            if (arrayFieldContent[4] === 'none'){
                qclass = qclass + ' nonesq';
            }
            
            arrayFieldContent[5] = arrayFieldContent[5].replace(/@palk@/g, '/');
            if (typeof arrayFieldContent[8] =="undefined"){arrayFieldContent[8]= '1';}
            if (typeof arrayFieldContent[9] =="undefined"){arrayFieldContent[9]= 'not';}
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[3]+"' style='width: "+arrayFieldContent[1]+"' class='"+qclass+"' data-sizes='"+ arrayFieldContent[1] + "' data-tabs ='"+ arrayFieldContent[2] +"' data-tip='type-itog-element' data-none ='"+arrayFieldContent[4]+"' data-kalkulation='"+arrayFieldContent[7]+"' data-rounding='"+arrayFieldContent[8]+"' data-hide-total='"+arrayFieldContent[9]+"' data-custum='"+arrayFieldContent[6]+"'><div id='firldS"+numberId+"'>"+arrayFieldContent[5] +"</div></div>";
        }
	  
        //9. field dropdown
        if (arrayFieldContent[0] === 'type-dropdawn-element') { 
            let qclass = 'form-element-q type-dropdawn-element element-css-q '+ arrayFieldContent[10] +' '+ arrayFieldContent[14];
            if (arrayFieldContent[7] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[1] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            //style
            if (arrayFieldContent[20] ==='style1'){
                qclass = qclass + ' style-qform-1';
            }
            if (arrayFieldContent[20] ==='style2'){
                qclass = qclass + ' style-qform-2';
            }
            numberId++;
        
            stringForm = stringForm + "<div id='"+arrayFieldContent[6]+"' class='"+qclass+"' style='width: "+arrayFieldContent[2]+"' data-tip='dropdawn' data-sizes='"+arrayFieldContent[2]+"' data-req='"+ arrayFieldContent[1]+"' data-tabs ='"+arrayFieldContent[5]+"' data-border-color='"+arrayFieldContent[12]+"' data-none='"+arrayFieldContent[7]+"' data-focus-class='"+arrayFieldContent[14]+"' data-border-radius='"+arrayFieldContent[15]+"' data-border-width='"+arrayFieldContent[16]+"' data-placeholder='"+arrayFieldContent[10]+"' data-style='"+arrayFieldContent[20]+"' data-custum='"+arrayFieldContent[19]+"'><span class='heading-field-q' data-font='"+arrayFieldContent[9]+"' style='color:"+arrayFieldContent[8]+"; font-size:"+arrayFieldContent[9]+"; line-height:"+arrayFieldContent[9]+"; margin-bottom:"+arrayFieldContent[21]+"; font-weight:"+arrayFieldContent[23]+";'>"+arrayFieldContent[3]+"</span>";
           
            let massivContentChecket = 24;  
            let contentCheckbox = '';
            stringForm = stringForm + "<select class='style-qform-1 style-element' style='font-size:"+arrayFieldContent[11]+"; line-height:"+arrayFieldContent[11]+"; border-color:"+arrayFieldContent[12]+"; background-color:"+arrayFieldContent[13]+"; border-radius:"+arrayFieldContent[15]+"; border-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[17]+"; color:"+arrayFieldContent[18]+"; padding: "+arrayFieldContent[22]+"'>";
            //array option
            while (arrayFieldContent[4] > 0){

                contentCheckbox = arrayFieldContent[massivContentChecket].replace(/&#39;/g, "ZapETayA").split('#');
                
                if (contentCheckbox[3] ==='no') { 
                    stringForm = stringForm + "<option type='option' id='"+contentCheckbox[0]+"' date-rasschet='"+contentCheckbox[2]+"' data-selected='"+contentCheckbox[3]+"'>"+ contentCheckbox[1].replace(/ZapETayA/g, "&#39;") +"</option>"; 
                }
                else { 
                    stringForm = stringForm + "<option type='option' id='"+contentCheckbox[0]+"' date-rasschet='"+contentCheckbox[2]+"' data-selected='"+contentCheckbox[3]+"' selected>"+ contentCheckbox[1].replace(/ZapETayA/g, "&#39;") +"</option>";
                }
                massivContentChecket++;
                arrayFieldContent[4] = arrayFieldContent[4] - 1;
                numberId++;
            }
            
            stringForm = stringForm + '</select></div>' ;
            numberId++;
        } 
   
 
        //10. field range
        if (arrayFieldContent[0] === 'type-range-element'){
            let qclass = 'form-element-q type-range-element element-css-q qrstandart polzunok-q-defaut ';
            if (arrayFieldContent[1] === 'Requed'){
                qclass = qclass +' requed-field-q';
            }
            if (arrayFieldContent[5] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[15] === 'style2'){
                qclass = qclass + 'qrstyle1';
            } 
            
            if (typeof arrayFieldContent[23] =="undefined"){arrayFieldContent[23] = 'not';}
            if (typeof arrayFieldContent[24] =="undefined"){arrayFieldContent[24] = 'top';}
            if (typeof arrayFieldContent[25] =="undefined"){arrayFieldContent[25] = '6px';}
            if (typeof arrayFieldContent[26] =="undefined"){arrayFieldContent[26] = '10px';}
            if (typeof arrayFieldContent[27] =="undefined"){arrayFieldContent[27] = '-22px';}
            if (typeof arrayFieldContent[28] =="undefined"){arrayFieldContent[28] = '#3c434a';}
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[4]+"' class='"+qclass+"' style='width: "+arrayFieldContent[2]+"' data-sizes='"+arrayFieldContent[2]+"' data-req='"+arrayFieldContent[1]+"' data-tip='type-range-element' data-style='"+arrayFieldContent[15]+"' data-tabs='"+arrayFieldContent[3]+"' data-none='"+arrayFieldContent[5]+"' data-custum='"+arrayFieldContent[18]+"'><span class='heading-field-q' data-font='"+arrayFieldContent[19]+"' style='font-size:"+arrayFieldContent[19]+"; line-height:"+arrayFieldContent[19]+"; color: "+arrayFieldContent[20]+"; margin-bottom: "+arrayFieldContent[21]+"; font-weight:"+arrayFieldContent[22]+";'>"+arrayFieldContent[17]+"</span><div class='polzet "+arrayFieldContent[6]+"' style='background-color: "+arrayFieldContent[12]+"; height: "+arrayFieldContent[25]+"; border-radius: "+arrayFieldContent[26]+";' data-min='"+arrayFieldContent[7]+"' data-max='"+arrayFieldContent[8]+"' data-step='"+arrayFieldContent[9]+"' data-val='"+arrayFieldContent[10]+"' data-class='"+arrayFieldContent[6]+"' data-color1='"+arrayFieldContent[11]+"' data-color2='"+arrayFieldContent[12]+"' data-color3='"+arrayFieldContent[13]+"' data-color4='"+arrayFieldContent[14]+"' data-color5='"+arrayFieldContent[28]+"' data-sh='"+arrayFieldContent[16]+"' data-sh-2='"+arrayFieldContent[23]+"' data-p-s='"+arrayFieldContent[24]+"' data-m-s='"+arrayFieldContent[27]+"' data-info='type-range-element'></div> </div>";
            numberId++;
        }
   
   
        //11. field datepicker
        if (arrayFieldContent[0] === 'type-data-element') { 
            numberId++ ;
            let qclass = 'form-element-q type-data-element element-css-q '+ arrayFieldContent[10] +' '+ arrayFieldContent[14];
            if (arrayFieldContent[7] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[2] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            let heading = '';
            //style
            if (arrayFieldContent[25] ==='style1'){
                qclass = qclass + ' style-qform-1'; 
                heading ="<span class='heading-field-q' style='color:"+arrayFieldContent[8]+"; font-size:"+arrayFieldContent[9]+"; line-height:"+arrayFieldContent[9]+"; margin-bottom:"+arrayFieldContent[28]+"; font-weight:"+arrayFieldContent[29]+";' data-font='"+arrayFieldContent[9]+"'> "+ arrayFieldContent[4] +"</span>";
            }
            if (arrayFieldContent[25] ==='style2'){
                qclass = qclass + ' style-qform-2'; 
                heading ="<label for='firldS"+numberId+"'> <span class='heading-field-q' data-font='"+arrayFieldContent[9]+"' style='color:"+arrayFieldContent[8]+"; font-size:"+arrayFieldContent[9]+"; line-height:"+arrayFieldContent[9]+"; margin-bottom:"+arrayFieldContent[28]+"; font-weight:"+arrayFieldContent[29]+";'> "+ arrayFieldContent[4] +"</span></label>";
            }
            
            if (typeof arrayFieldContent[30] =="undefined"){arrayFieldContent[30] = 'defoult';}
            if (typeof arrayFieldContent[31] =="undefined"){arrayFieldContent[31] = 'yes';}
            if (typeof arrayFieldContent[32] =="undefined"){arrayFieldContent[32] = 'not';}
            

            stringForm = stringForm + "<div id='"+arrayFieldContent[6]+"' class='"+qclass+"' style='width: "+arrayFieldContent[3]+"' data-sizes='"+arrayFieldContent[3]+"' data-req='"+ arrayFieldContent[2] +"' data-tabs ='"+ arrayFieldContent[5] + "' data-tip='type-data-element' data-none='"+arrayFieldContent[7]+"' data-focus-class='"+arrayFieldContent[14]+"' data-border-radius='"+arrayFieldContent[15]+"' data-border-width='"+arrayFieldContent[16]+"' data-placeholder='"+arrayFieldContent[10]+"' data-border-color='"+arrayFieldContent[26]+"' data-lang='"+arrayFieldContent[30]+"' data-s-1='"+arrayFieldContent[31]+"' data-s-2='"+arrayFieldContent[32]+"' data-custum='"+arrayFieldContent[24]+"' data-style='"+arrayFieldContent[25]+"'>"+heading+"<div class='input-swap'><input id='firldS"+numberId+"' class='style-element' style='font-size:"+arrayFieldContent[11]+"; border-color:"+arrayFieldContent[12]+"; background-color:"+arrayFieldContent[13]+"; border-radius:"+arrayFieldContent[15]+"; border-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[17]+"; padding: "+arrayFieldContent[27]+"' placeholder='"+arrayFieldContent[1].replace(/[\']/g, '&#39;')+"' data-colorsw='"+arrayFieldContent[21]+"' data-colorsw2='"+arrayFieldContent[22]+"' data-colorsw3='"+arrayFieldContent[23]+"' autocomplete='off'><div class='fa-icons-q' data-num='"+arrayFieldContent[19]+"'><i class='"+arrayFieldContent[18]+"' style='font-size:"+arrayFieldContent[11]+"; color:"+arrayFieldContent[20]+"'></i></div></div></div>";
        }    
        
        //12. field timepicker
        if (arrayFieldContent[0] === 'type-timepicker-element') { 
            numberId++ ;
            let heading = '';
            let qclass = 'form-element-q type-timepicker-element element-css-q '+ arrayFieldContent[10] +' '+ arrayFieldContent[14];
            if (arrayFieldContent[7] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[2] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            //auto filling
            if (typeof arrayFieldContent[27] =="undefined"){arrayFieldContent[27] = '';}
            if (typeof arrayFieldContent[28] =="undefined"){arrayFieldContent[28] = 'disabled';}
            if (typeof arrayFieldContent[29] =="undefined"){arrayFieldContent[29] = '';}
            
            //style 1
            if (arrayFieldContent[22] ==='style1'){
                qclass = qclass + ' style-qform-1'; 
                heading ='<span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size: '+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span>';
            }
            //style 2
            if (arrayFieldContent[22] ==='style2'){
                qclass = qclass + ' style-qform-2'; 
                heading ='<label for="firldS'+numberId+'"> <span class="heading-field-q" data-font="'+arrayFieldContent[9]+'" style="color:'+arrayFieldContent[8]+'; font-size:'+arrayFieldContent[9]+'; line-height:'+arrayFieldContent[9]+'; margin-bottom: '+arrayFieldContent[25]+'; font-weight: '+arrayFieldContent[26]+';">'+arrayFieldContent[4]+'</span></label>';
            }
            
            let stringStyle = "font-size:"+arrayFieldContent[11]+"; border-color:"+arrayFieldContent[12]+"; background-color:"+arrayFieldContent[13]+"; border-radius:"+arrayFieldContent[15]+"; border-width: "+arrayFieldContent[16]+"; height:"+arrayFieldContent[17]+"; padding: "+arrayFieldContent[24];
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[6]+"' class='"+qclass+"' style='width: "+arrayFieldContent[3]+"' data-sizes='"+arrayFieldContent[3]+"' data-req='"+ arrayFieldContent[2] +"' data-tabs ='"+ arrayFieldContent[5]+"' data-tip='type-timepicker-element' data-none='"+arrayFieldContent[7]+"' data-focus-class='"+arrayFieldContent[14]+"' data-border-radius='"+arrayFieldContent[15]+"' data-border-width='"+arrayFieldContent[16]+"'  data-border-color='"+arrayFieldContent[12]+"' data-custum='"+arrayFieldContent[21]+"' data-custum-2='"+arrayFieldContent[29]+"' data-style='"+arrayFieldContent[22]+"' data-validation='"+arrayFieldContent[23]+"' data-min='"+arrayFieldContent[27]+"' data-max='"+arrayFieldContent[28]+"' data-step='"+arrayFieldContent[30]+"' data-color-1='"+arrayFieldContent[31]+"' data-color-2='"+arrayFieldContent[32]+"' data-color-3='"+arrayFieldContent[33]+"' data-color-4='"+arrayFieldContent[34]+"'>"+heading+"<div class='input-swap'><div class='wrap-time-picker-q' style='font-size:"+arrayFieldContent[11]+"; color:"+arrayFieldContent[10]+";'><div class='timepicker-q hour-picker-q'>--</div><span>:</span><div class='timepicker-q minut-picker-q'>--</div> </div><input id='firldS"+numberId+"' class='style-element' style='"+stringStyle+"'  autocomplete='off' readonly><div class='fa-icons-q' data-num='"+arrayFieldContent[19]+"'><i class='"+arrayFieldContent[18]+"' style='font-size:"+arrayFieldContent[11]+"; color:"+arrayFieldContent[20]+"'></i></div></div></div>";
        }
    
    
        //13. upload button
        if (arrayFieldContent[0] === 'type-upload-element') { 
            numberId++ ;
            let qclass = "form-element-q element-css-q type-upload-element";
            if (arrayFieldContent[6] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[1] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            
            let stringStyle = "background-color:"+arrayFieldContent[12]+"; color:"+arrayFieldContent[13]+"; border-color:"+arrayFieldContent[14]+"; border-radius:"+arrayFieldContent[16]+"; border-width:"+arrayFieldContent[24]+"; font-size:"+arrayFieldContent[19];
    
            stringForm = stringForm + "<div id='"+arrayFieldContent[5]+"' class='"+qclass+"' style='width: "+arrayFieldContent[2]+"' data-sizes='"+ arrayFieldContent[2]+"' data-req='"+arrayFieldContent[1]+"' data-tabs='"+arrayFieldContent[4]+"' data-tip='type-upload-element' data-max='"+arrayFieldContent[7]+"' data-r='"+arrayFieldContent[8]+"' data-v='"+arrayFieldContent[9]+"' data-none='"+arrayFieldContent[6]+"' data-color1='"+arrayFieldContent[12]+"' data-color2='"+arrayFieldContent[13]+"' data-border-radius='"+arrayFieldContent[16]+"' data-border-width='"+arrayFieldContent[24]+"' data-border-color='"+arrayFieldContent[14]+"' data-hover-color="+arrayFieldContent[17]+" data-hover-background="+arrayFieldContent[18]+" data-custum='"+arrayFieldContent[11]+"'><span class='heading-field-q' data-font='"+arrayFieldContent[20]+"' style='color:"+arrayFieldContent[21]+"; font-size:"+arrayFieldContent[20]+"; line-height:"+arrayFieldContent[20]+"; margin-bottom:"+arrayFieldContent[22]+"; font-weight:"+arrayFieldContent[23]+";'>"+arrayFieldContent[3]+"</span>  <label class='style-element "+arrayFieldContent[17]+" "+arrayFieldContent[18]+"' style='"+stringStyle+"' for='firldS" + numberId + "'><span>"+arrayFieldContent[10]+"</span><div class='fa-icons-q'><i  style='color: "+arrayFieldContent[15]+"' class='fa fa-uploadq'></i></div> <input id='firldS" + numberId + "'></label>  </div>";
        } 


        //14. captha
        if (arrayFieldContent[0] === 'type-captcha-element') { 
            let qclass = 'form-element-q element-css-q type-captcha-element requed-field-q';
            if (arrayFieldContent[2] === 'none'){
                qclass = qclass + ' nonesq';
            }
            
            let heading ="<span class='heading-field-q' style='color:"+arrayFieldContent[9]+"; font-size:"+arrayFieldContent[10]+"; line-height:"+arrayFieldContent[10]+"; margin-bottom:"+arrayFieldContent[11]+"; font-weight:"+arrayFieldContent[13]+";' data-font='"+arrayFieldContent[10]+"'>"+ arrayFieldContent[12] +"</span>";
         
            stringForm = stringForm + "<div id='"+arrayFieldContent[7]+"' class='"+qclass+"' style='width: "+arrayFieldContent[1]+"' data-tip='type-captcha-element' data-none='"+arrayFieldContent[2]+"' data-custum='"+arrayFieldContent[6]+"' data-sizes='"+arrayFieldContent[1]+"' data-tabs ='"+arrayFieldContent[8]+"'> "+heading+" <div class='captcha-element-q'> <img src="+demoIMG3+"/qfc-4.png><div class='pl-form-q'>+</div> <img src="+demoIMG3+"/qfc-5.png> <div class='pl-form-q'>=</div> <input class='pl-form-q' style='border-color: "+arrayFieldContent[3]+"; border-width: "+arrayFieldContent[4]+"; border-radius: "+arrayFieldContent[5]+";'></div></div>";
        }
   
   
        //15. field privacy
        if (arrayFieldContent[0] === 'type-privacy-element') {
            numberId++ ;
            let qclass = 'form-element-q type-privacy-element element-css-q qrstandart';
            if (arrayFieldContent[2] === 'none'){
                qclass = qclass + ' nonesq';
            }
            if (arrayFieldContent[6] ==='style1'){
                qclass = qclass + ' style-t-qform-1';
            }
            if (arrayFieldContent[6] ==='style2'){
                qclass = qclass + ' style-t-qform-2';
            }
            if (arrayFieldContent[19] === 'Requed'){
                qclass = qclass + ' requed-field-q';
            }
            
            //defoult val
            if (typeof arrayFieldContent[26] =="undefined"){arrayFieldContent[26] = 'no';}
            if (typeof arrayFieldContent[28] =="undefined"){arrayFieldContent[28] = '#fff';}
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[4]+"' class='"+qclass+"' style='width: "+arrayFieldContent[1]+"' data-tip='type-privacy-element' data-tabs='"+arrayFieldContent[5]+"' data-sizes='"+arrayFieldContent[1]+"' data-req='"+arrayFieldContent[19]+"' data-style='"+arrayFieldContent[6]+"' data-defoult='"+arrayFieldContent[26]+"' data-none='"+arrayFieldContent[2]+"' data-custum='"+arrayFieldContent[15]+"'><span class='heading-field-q' style='color: "+arrayFieldContent[20]+"; font-size: "+arrayFieldContent[21]+"; margin-bottom: "+arrayFieldContent[13]+"; font-weight: "+arrayFieldContent[25]+";' data-font='"+arrayFieldContent[21]+"'>"+arrayFieldContent[3]+"</span> <div class='swap-checkbox-q' style='padding-top:"+arrayFieldContent[22]+"'> <input type='checkbox' id='"+arrayFieldContent[18]+"'> <label for='"+arrayFieldContent[18]+"' style='margin-bottom:"+arrayFieldContent[24]+"'><div class='checkbox-qform' style='border-color:"+arrayFieldContent[7]+"; border-width:"+arrayFieldContent[12]+"; width:"+arrayFieldContent[10]+"; min-width:"+arrayFieldContent[10]+"; height:"+arrayFieldContent[10]+";'><div class='checkbox-fafa' style='background-color: "+arrayFieldContent[28]+"'><i class='fa fa-checkq' style='font-size:"+arrayFieldContent[11]+"; background-color:"+arrayFieldContent[16]+"; color:"+arrayFieldContent[8]+"; width:"+arrayFieldContent[11]+"; height:"+arrayFieldContent[11]+";'></i></div></div><div class='html-text-check-q' style='padding-left:"+arrayFieldContent[23]+"'>"+arrayFieldContent[17].replace(/PROcentQ/g, '%').replace(/Q1@/g,"<").replace(/Q2@/g, '>').replace(/%a@/g, "'").replace(/%A@/g, '"').replace(/@palk@/g, '/').replace(/TO%C/g, ';').replace(/R@R/g, '|')+"</div></label></div></div>";
        }
        
        // 16. paypal
        if (arrayFieldContent[0] === 'type-paypal-element') { 
            let qclass = 'form-element-q type-paypal-element element-css-q ';
            if (arrayFieldContent[11] === 'none'){
                qclass = qclass + ' nonesq';
            }
            
            stringForm = stringForm + "<div id='"+arrayFieldContent[10]+"' class='"+qclass+"' style='width: "+arrayFieldContent[8]+"' data-tip='type-paypal-element' data-tabs='"+arrayFieldContent[9]+"' data-sizes='"+arrayFieldContent[8]+"' data-none='"+arrayFieldContent[11]+"' data-custum='"+arrayFieldContent[12]+"'> <span class='text-paypal-q' data-live-account='"+arrayFieldContent[1]+"' data-sandbox-account='"+arrayFieldContent[2]+"' data-senbox-mode='"+arrayFieldContent[3]+"' data-price='"+arrayFieldContent[4]+"' data-number='"+arrayFieldContent[5]+"' data-currency='"+arrayFieldContent[6]+"' data-lang='"+arrayFieldContent[7]+"' data-item-name='"+arrayFieldContent[13]+"' data-url-success='"+arrayFieldContent[14]+"'  data-url-cancel='"+arrayFieldContent[15]+"'><img src='"+paypalIMG+"'></span> </div>";
        }
 

        //17. consctruction level 1
        let constructtext = arrayFieldContent[0].indexOf('construction@');
        if (constructtext != -1){ 
            let tabsconstr = arrayFieldContent[0].split('@');
            stringForm = stringForm + "<div class='form-element-q element-css-q construction-block' data-sizes='100%' data-tip='construction-block' data-tabs='"+tabsconstr[1]+"' ><div class='panel-construction-q'> <div class='colqswap'><span><i class='fa fa-barsq'></i></span> <div class='colq'> <div class='coloneq'>1</div>  <div class='coluvirsal'>2</div> <div class='coluvirsal'>3</div> <div class='coluvirsal'>4</div> <div class='coluvirsal'>5</div> <div class='coluvirsal'>6</div> </div></div><div class='removconstructq'>"+$('#text-remove-q').html()+"</div> </div> <div class='swap-construction-q'> ";
        }
        constructtext = arrayFieldContent[0].indexOf('container@');
        if (constructtext != -1) {
            let arrayColumn = arrayFieldContent[0].split('@'); 
            stringForm = stringForm + "<div class='box-construction-q' style='width: "+arrayColumn[1]+"; height: 100%;' data-sizeq='"+arrayColumn[1]+"' data-color-1='"+arrayColumn[2]+"' data-padding='"+arrayColumn[3]+"' data-margin='"+arrayColumn[4]+"' data-custum='"+arrayColumn[5]+"'><div class='dashboard-construction'> <div class='add-construction-q'><i class='fa fa-plusq'></i></div> <div class='editor-column'> <i class='fa fa-pencilq'></i></div> </div> <div class='container-construction' style='height: 100%;'>";
        }
        if (arrayFieldContent[0] === 'endconteiner@') { 
            stringForm = stringForm + '</div></div>';
        }
        if (arrayFieldContent[0] === 'endconstruct@') { 
            stringForm = stringForm + '</div></div>'; 
        }


        //18. consctruction level 2
        constructtext = arrayFieldContent[0].indexOf('construction2@');
        if (constructtext != -1){ 
            let tabsconstr = arrayFieldContent[0].split('@');
            stringForm = stringForm + "<div class='form-element-q element-css-q construction-block-2' data-sizes='100%' data-tip='construction-block-2'><div class='panel-construction-q'> <div class='colqswap'><span><i class='fa fa-barsq'></i></span> <div class='colq'> <div class='coloneq two-q'>1</div>  <div class='coluvirsal two-q'>2</div> <div class='coluvirsal two-q'>3</div> <div class='coluvirsal two-q'>4</div> <div class='coluvirsal two-q'>5</div> <div class='coluvirsal two-q'>6</div> </div></div><div class='removconstructq'>"+$('#text-remove-q').html()+"</div> </div> <div class='swap-construction-q two-q'> ";
        }
        constructtext = arrayFieldContent[0].indexOf('container2@');
        if (constructtext != -1) {
            let arrayColumn = arrayFieldContent[0].split('@'); 
            stringForm = stringForm + "<div class='box-construction-q two-q' style='width: "+arrayColumn[1]+"; height: 100%;' data-sizeq='"+arrayColumn[1]+"' data-color-1='"+arrayColumn[2]+"' data-padding='"+arrayColumn[3]+"' data-margin='"+arrayColumn[4]+"' data-custum='"+arrayColumn[5]+"'><div class='dashboard-construction'><div class='editor-column'> <i class='fa fa-pencilq'></i></div> </div> <div class='container-construction-2' style='height: 100%;'>";
        }
        if (arrayFieldContent[0] === 'endconteiner2@') { 
            stringForm = stringForm + '</div></div>';
        }
        if (arrayFieldContent[0] === 'endconstruct2@') { 
            stringForm = stringForm + '</div></div>';
        }

        numberId++;
    });//eng array created form
    $('.admin-form-q').append( stringForm ); //created form
    //clear prev logic
    $('.logick-box > div:not(.swap-button-logick)').remove();


    //setting email
    var strokasq3 = $( $('.class-this-form-q').html() ).find('.setting-form-bd').html().split('/');
    if (typeof strokasq3[2] !=="undefined" && strokasq3[2] !==0 ){
        let arrayMailSetting = strokasq3[2].split('|');
        arrayMailSetting[2] = arrayMailSetting[2].replace( /%1%/g, "<").replace( /@2F/g, ">").replace( /@TRDEEEQWGG/g, "/").replace( /GndRERD/g, "'").replace( /KLFD2NFD/g, '"').replace( /SkobKi/g, "<").replace( /SKrjlfd/g, '>').replace( /<#p>/g, '</p>').replace( /\@\P\$/g, '|').replace( /lt;/g, ">").replace( /gt;/g, "<");
        if (arrayMailSetting[3] === 'wpmailtype'){ 
            $('#wpmailtype').trigger('click');
            $('.wp_mail-seting').css('display', 'block');
        }
        else {
            $('#mailsmtp').trigger('click');
            $('.stmtp-setting').css('display', 'block'); 
        }
        $('#Emailsq').val(arrayMailSetting[0]);
        $('#emailNameq').val(arrayMailSetting[1]);
        $('#sendername').val(arrayMailSetting[4]);
        $('#senderemail').val(arrayMailSetting[5]);
        $('#sendernamesmtp').val(arrayMailSetting[6]);
        $('#sendermailsmtp').val(arrayMailSetting[7]);
        $('#usernamesmtp').val(arrayMailSetting[8]);
        arrayMailSetting[9] = arrayMailSetting[9].replace(/@TRDEEEQWGG/g, '/').replace( /@RRRRDDDETGCDSW/g, "\\").replace(/@PQWRTEADYY/g, '|').replace( /@RRDDYESQWQOOJ/g, "<").replace( /@ARWSFGGGGCDCSARYHB/g, ">").replace( /@YTREWASCGNBFDSI/g, "'").replace( /@GFDRHGFYHKJHG/g, '"').replace( /@RRTTESVCGHNFDEWSHM/g, "&");
        $('#passwordsmtp').val(arrayMailSetting[9]);
        $('#hostsmtp').val(arrayMailSetting[10]);
        $('#posrtsmtp').val(arrayMailSetting[11]);
        window.tinyMCE.get('ContentFormqMail').setContent(arrayMailSetting[2]);
        $('.setting-tab-q[data-tab-setting="1"], .setting-tab-q[data-tab-setting="4"]').trigger('click');
        if ( !$('.quasart-q').hasClass('open-spoiler') ) {  $('.quasart-q').trigger('click'); }
    }
    //setting text after sending form
    if (typeof strokasq3[7] !="undefined"){
        let testAfterSend = decodeHTML(strokasq3[7]);
        window.tinyMCE.get('after-send-mail-text').setContent(testAfterSend);
    }
    //setting localization
    if (typeof strokasq3[4] !="undefined"){
        let arrayLocalization = strokasq3[4].split('|');
        $('#message-received-q').val(arrayLocalization[0].replace(/ZapETayA/g, "'"));
        $('#message-sent-q').val(arrayLocalization[1].replace(/ZapETayA/g, "'"));
        $('#required-field-q').val(arrayLocalization[2].replace(/ZapETayA/g, "'"));
        $('#invalid-mail-q').val(arrayLocalization[3].replace(/ZapETayA/g, "'"));
        $('#alphabets-send-q').val(arrayLocalization[4].replace(/ZapETayA/g, "'"));
        $('#numbers-send-q').val(arrayLocalization[5].replace(/ZapETayA/g, "'"));
        $('#captcha-error-q').val(arrayLocalization[6].replace(/ZapETayA/g, "'"));
        $('#uplod-file-1-q').val(arrayLocalization[7].replace(/ZapETayA/g, "'"));
        $('#uplod-file-2-q').val(arrayLocalization[8].replace(/ZapETayA/g, "'"));
        $('#uplod-file-3-q').val(arrayLocalization[9].replace(/ZapETayA/g, "'"));
        $('#uplod-file-4-q').val(arrayLocalization[10].replace(/ZapETayA/g, "'"));
        $('#submit-next').val(arrayLocalization[11].replace(/ZapETayA/g, "'"));
        if (typeof arrayLocalization[12] !="undefined") {  $('#invalid-phone').val(arrayLocalization[12].replace(/ZapETayA/g, "'")); }
        
        //addon woo loc
        if ( $('#product-1-order').length > 0 ){ 
            if (typeof arrayLocalization[13] !="undefined"){$('#product-1-order').val(arrayLocalization[13]); }
            else { $('#product-1-order').val( $('#product-1-order').attr('placeholder') ); } 
            
            if (typeof arrayLocalization[14] !="undefined"){$('#quantity-1-order').val(arrayLocalization[14]); }
            else { $('#product-1-order').val( $('#quantity-1-order').attr('placeholder') ); } 
            
            if (typeof arrayLocalization[15] !="undefined"){$('#price-1-order').val(arrayLocalization[15]); }
            else { $('#product-1-order').val( $('#quantity-1-order').attr('placeholder') ); } 
        }
    }
    //redirect after submit
    let redirect = strokasq3[6];
    if ( redirect !=='' ){ 
        redirect = decodeHTML(redirect);
    }
    $('#redirect-after-submit').val( redirect );
    
    //setting design
    $('#background-design, #border-color-form, #border-color-popup, #font-color-design-popup, #background-design-popup').html('');
    let arrayStyle = strokasq3[3].split('|'); 
    var arrayDesign = {
        'Backgroundform': arrayStyle[0], 
        'Borderwidth': arrayStyle[1], 
        'Bordercolor': arrayStyle[2], 
        'Backgroundimg': arrayStyle[3].replace( /#/g, "/").replace( /%1%/g, "<"), 
        'Customclass': arrayStyle[6], 
        'Paddingform': arrayStyle[7], 
        'Paddingbutton': arrayStyle[8], 
        'Borderwidthbutton': arrayStyle[9], 
        'Backgroundbutton': arrayStyle[10] , 
        'Colorbutton': arrayStyle[11],  
        'Fontsizebutton': arrayStyle[12], 
        'Bordercolorbutton': arrayStyle[13], 
        'Borderradiusbutton': arrayStyle[14], 
        'Customclassbutton': arrayStyle[17], 
        'Borrderradiusform': arrayStyle[18]
    };
    //shedow
    createdElement = "<div class='swap-block-setting-desing checkbox-design-setting width-100-q'> <input id='shedow-forma' type='checkbox'><label for='shedow-forma'><div></div></label><span>"+$('#text-shedow-hide-q').html()+"</span> </div>";
    $('.checkbox-design-q').append(createdElement);
    if (arrayStyle[4]==='shedow-none-q'){ 
        $('.admin-form-q').addClass('shedow-none-q');  
        $('#shedow-forma').attr('checked', 'checked');
    }
    else {
        $('.admin-form-q').removeClass('shedow-none-q');  
    }
    
    //antispam setting
    createdElement = "<div class='checkbox-antispam checkbox-design-setting'> <input id='anti-spam-q' type='checkbox'><label for='anti-spam-q'><div></div></label><span>"+$('#text-antispam-q').html()+"</span> </div>";
    $('.wrap-antispam-setting').append(createdElement);
        
    if (typeof strokasq3[8] =="undefined"){ strokasq3[8]='not'; }
    if (strokasq3[8]==='yes'){ 
        $('#anti-spam-q').attr('checked', 'checked');
    }
    
    //copy mail for user
    createdElement = "<div class='checkbox-design-setting'> <input id='copy-mail-for-user' type='checkbox'><label for='copy-mail-for-user'><div></div></label><span>"+$('#text-send-copy-mail-user-q').html()+"</span> </div>";
    $('.wrap-send-user-mail-q').append(createdElement);
    if (typeof strokasq3[9] =="undefined"){ strokasq3[9]='not'; }
    if (strokasq3[9]==='yes'){ 
        $('#copy-mail-for-user').attr('checked', 'checked');
    }
    
    //text after setting
    createdElement = "<div class='checkbox-after-text checkbox-design-setting'> <input id='checkbox-after-text' type='checkbox'><label for='checkbox-after-text'><div></div></label><span>"+$('#text-after-submit').html()+"</span> </div>";
    $('.wrap-setting-after-text').append(createdElement);
    if (typeof strokasq3[10] =="undefined"){ strokasq3[10]='yes'; }
    if (strokasq3[10]==='yes'){ 
        $('#checkbox-after-text').attr('checked', 'checked');
    }
    
    //auto scroll enable
    createdElement = "<div class='checkbox-auto-scroll checkbox-design-setting'> <input id='copy-auto-scroll' type='checkbox'><label for='copy-auto-scroll'><div></div></label><span>"+$('#text-auto-scroll').html()+"</span> </div>";
    $('.wrap-auto-scroll').append(createdElement);
    if (typeof strokasq3[11] =="undefined"){ strokasq3[11]='yes'; }
    if (strokasq3[11]==='yes'){ 
        $('#copy-auto-scroll').attr('checked', 'checked');
    }

    
    //img background full size
    createdElement = "<div class='swap-block-setting-desing checkbox-design-setting width-100-q'> <input id='adaptiv-fon' type='checkbox'><label for='adaptiv-fon'><div></div></label><span>"+$('#text-img-fon-full-q').html()+"</span> </div>";
    $('.checkbox-design-q').append( createdElement );
    if (arrayStyle[5]!='not'){ 
        $('.admin-form-q').addClass('background-full-size-img'); 
        $('#adaptiv-fon').attr('checked', 'checked');
    }
    else {
        $('.admin-form-q').removeClass('background-full-size-img');  
    }
    
    //disable design
    createdElement = "<div class='swap-block-setting-desing checkbox-design-setting width-100-q'> <input id='disable-design-q' type='checkbox'><label for='disable-design-q'><div></div></label><span>"+$('#text-disable-design-q').html()+"</span> <span class='help-message-q disable-d'>?</span></div>";
    $('.checkbox-design-q').append(createdElement);
    if (typeof arrayStyle[19] =="undefined"){ arrayStyle[19]='not'; }
    if (arrayStyle[19]==='yes'){ 
        $('.admin-form-q').addClass('disalow-design-q');  
        $('#disable-design-q').attr('checked', 'checked');
    }
    else {
        $('.admin-form-q').removeClass('disalow-design-q');  
    }

    //button popup hover attr and color informer
    $('.button-design-popup').attr({'data-hover-background' : arrayStyle[15], 'data-hover-color' : arrayStyle[16], 'class' : 'button-design-popup' }).addClass(arrayStyle[15]).addClass(arrayStyle[16]);
    let colorInformerId = arrayStyle[15].split('-');
    $('#customcolor5').attr('class','color-informer').addClass('color-'+colorInformerId[2]+'q');
    colorInformerId = arrayStyle[16].split('-');
    $('#customcolor6').attr('class','color-informer').addClass('color-'+colorInformerId[2]+'q');
    
    //custom class form
    $('#custom-form-class').val( arrayDesign['Customclass'] );
    $('#custom-form-popup').val( arrayDesign['Customclassbutton'] );
    //background form
    var createdElement = "<input class='background-design' data-alpha='true' value='"+arrayDesign['Backgroundform']+"'>";
    $("#background-design").append( createdElement );
    $('#background-design input').wpColorPicker( colorOptions);
    //border color form
    createdElement = "<input class='background-design' data-alpha='true' value='"+arrayDesign['Bordercolor']+"'>";
    $("#border-color-form").append( createdElement );
    $('#border-color-form input').wpColorPicker( colorOptions);
    //background popup
    createdElement = "<input class='background-design-popup' data-alpha='true' value='"+arrayDesign['Backgroundbutton']+"'>";
    $("#background-design-popup").append( createdElement );
    $('#background-design-popup input').wpColorPicker( colorOptions)
    //color popup
    createdElement = "<input class='font-color-design-popup' data-alpha='true' value='"+arrayDesign['Colorbutton']+"'>";
    $("#font-color-design-popup").append( createdElement );
    $('#font-color-design-popup input').wpColorPicker( colorOptions );
    //border color popup
    createdElement = "<input class='border-color-popup' data-alpha='true' value='"+arrayDesign['Bordercolorbutton']+"'>";
    $("#border-color-popup").append( createdElement );
    $('#border-color-popup input').wpColorPicker( colorOptions );
    
    $('#border-width-q').val( arrayDesign['Borderwidth'] );
    $('#backgroun-image-q').val( arrayDesign['Backgroundimg'] );
  
    //style form
    $('.container-form-q').css({'background-color' : $('#background-design').find('.wp-color-result').css('background-color'), 'border-color' : $('#border-color-form').find('.wp-color-result').css('background-color'), 'padding' : arrayDesign['Paddingform'], 'border-radius' : arrayDesign['Borrderradiusform'] });
    //style popup button
    $('.button-design-popup').css({ 'padding' : arrayDesign['"Paddingbutton'], 'border-width' : arrayDesign['Borderwidthbutton'], 'background-color' : arrayDesign['Backgroundbutton'], 'color' : arrayDesign['Colorbutton'], 'font-size' : arrayDesign['Fontsizebutton'], 'border-color': arrayDesign['Bordercolorbutton'],'border-radius': arrayDesign['Borderradiusbutton']  });

    let form = $('.container-form-q'); 
    $('#padding-left-form').val( form.css('padding-left') );
    $('#padding-right-form').val( form.css('padding-right') );
    $('#padding-top-form').val( form.css('padding-top') );
    $('#padding-bottom-form').val( form.css('padding-bottom') );
    $('#border-radius-form').val( form.css('border-radius') );
   
    
    let button = $('.button-design-popup');
    $('#padding-left-popup').val( button.css('padding-left') );
    $('#padding-right-popup').val( button.css('padding-right') );
    $('#padding-top-popup').val( button.css('padding-top') );
    $('#padding-bottom-popup').val( button.css('padding-bottom') );
    $('#border-width-popup').val( button.css('border-width') );
    $('#border-radius-popup').val( button.css('border-radius') );
    $('#font-size-popup').val( button.css('font-size') );
    
    //custom color window - hover color
    let colorCustonValue = $('.button-design-popup').attr('data-hover-background');
    colorCustonValue = colorCustonValue.split('-'); 
    let idCustomColor = '#cs' + colorCustonValue[2];//id this clolor
    let colorDefolt = 'color-'+colorCustonValue[2]+'q';
    
    //click first tab quick quasart
    $('.setting-tab-q[data-tab-setting="6"]').trigger('click');

    //activate drag drop
    dragdrobbable(); 
    fixborder2();
    desinform();
    
    //launch slider UI
    activateUpdateSlider();
    
    //launch phone
    $('.type-phone-element').each(function(){ 
        let val = $(this).find('input').attr('data-mask');
        if ( val !=='' ){ 
            let val2 = $(this).find('input').attr('data-mask-a');
            if ( val2 === 'yes') {
                $(this).find('input').mask( val ); 
            }
        }
    });
    
    
    //activate datepicker
    datapiker();

    if ( $('.form-element-q[data-tabs="0"]').length !== 0) { $('.zaglushka').addClass('tab-none-q'); }
    if ( $('.form-element-q[data-tabs="0"]').length === 0) { 
        if ( $('.zaglushka').length === 0){
            let activeTab = '';
            if ( $('.activ-tab-q').length !== 0 ){ 
                activeTab = $('.activ-tab-q').attr('data-tabsid'); 
            }
            else { 
                activeTab = 0;
            }
            let textEmptyForm = '<div class="zaglushka" data-tabs="'+activeTab+'"> '+$('#text-addfield-q').html()+'</div>';
            $('#drag-drop-element').append(textEmptyForm);
        }
    }


    //if the form is empty show text: 'Add field'
    if ( $('#drag-drop-element').html()==='' ) { 
        var activeTab = '';
        if ( $('.activ-tab-q').length !== 0 ){ 
            activeTab = $('.activ-tab-q').attr('data-tabsid');
        }
        else { 
            activeTab = 0; 
        }
        let textEmptyForm = '<div class="zaglushka" data-tabs="'+activeTab+'"> '+$('#text-addfield-q').html()+' </div>';
        $('#drag-drop-element').append(textEmptyForm);
    }
 
    //add tabs of base
    if (  Number( $('#add-tab-q').attr('data-tab-1') ) > 0 ) {
        let classThis = $('.class-this-form-q').html();
        let tabsArrayTwo = $( classThis ).find('.tabs-form-bd').html().split('|');//str tab
  
        let createdElement = tabsArrayTwo[1].replace(/@1/g,'<' ).replace(/@2/g,'>' ).replace(/KqRT/g,'"' );
        $('.swap-tabs-form-q').append(createdElement); 
        $('.form-element-q[data-tabs!="0"]').not('.type-submit-element').not('.construction-block-2').addClass('tab-none-q');
        let chislo = 0 ; //click on the first tab
        $('.tab-box-q').each(function(){
            if ( chislo===0 ){ 
                $(this).trigger('click'); 
            }
            chislo++;
        });
    }  
    
    //show button Preview
    if ( $('.construction-block').length > 0 ) { 
        $('.button-preview').css('display','flex');
    }
    else { $('.button-preview').css('display','none'); }
    
    //export form 
    let formCode = $( classThis ).find('.string-html-form-bd').html() + 'quasarFormPl' + $( classThis ).find('.setting-form-bd').html() + 'quasarFormPl' + $( classThis ).find('.tabs-form-bd').html() + 'quasarFormPl' + $( classThis ).find('.tabs-form-bd').html() ;
    $('#export-form-code').html( formCode ); 
    $('#import-form-code').html('');
    
    //limit paypal field
    if ( $('#drag-drop-element').find('.type-paypal-element').length > 0 ){
        $('#type-paypal-element').addClass('deactive-add');
        $('#type-paypal-element').append('<div class="message-no-add">'+$('#text-no-added-q').html()+'</div>');
    }
  
} //end function created form


//edit design form
$('.modalbox-setting .setting_design-box').on('input keyup change', function() {
    desinform();
});
  
//editor design setting
function desinform(){
    //border
    $('.container-form-q').css({ 'border-width' : $('#border-width-q').val(), 'border-radius' : $('#border-radius-form').val() });
    //backgroun image
    let backgroundImg = $('#backgroun-image-q').val();
    if (backgroundImg === ''){ 
        $('.container-form-q').css( 'background-image' , 'none' );
    }
    else { 
        $('.container-form-q').css( 'background-image' , 'url('+$('#backgroun-image-q').val()+')' );
    }
    //shedow
    let shedow = $('#shedow-forma').prop('checked');
    if (shedow === true){
        $('.container-form-q').addClass('shedow-none-q');
    }
    else { 
        $('.container-form-q').removeClass('shedow-none-q'); 
    }
    //disable design
    let dusableDesign = $('#disable-design-q').prop('checked');
    if (dusableDesign === true){
        $('.swap-admin-modalbox').addClass('disable-design-q');
        if ( $('.warning-disable-design').length === 0 ){
            $('.swap-admin-modalbox').prepend('<div class="warning-disable-design">'+$('#text-warning-disable-design-q').html()+'</div>');
        }
    }
    else { 
        $('.swap-admin-modalbox').removeClass('disable-design-q'); 
        if ( $('.warning-disable-design').length > 0 ){
            $('.warning-disable-design').remove();
        }
    }
    //backgroun-image size
    let fonIMGAdaptiv = $('#adaptiv-fon').prop('checked');
    if (fonIMGAdaptiv === true){
        $('.container-form-q').addClass('background-full-size-img');
    }
    else { 
        $('.container-form-q').removeClass('background-full-size-img');
    }
    //padding
    $('.container-form-q').css({ 'padding-left' : $('#padding-left-form').val(), 'padding-right' :  $('#padding-right-form').val(), 'padding-top' : $('#padding-top-form').val() , 'padding-bottom' :  $('#padding-bottom-form').val() });
    //padding button
    $('.button-design-popup').css({ 'padding-left' : $('#padding-left-popup').val(), 'padding-right' : $('#padding-right-popup').val(), 'padding-top' : $('#padding-top-popup').val() , 'padding-bottom' : $('#padding-bottom-popup').val(), 'border-width' : $('#border-width-popup').val(), 'font-size': $('#font-size-popup').val(), 'border-radius' : $('#border-radius-popup').val()  });
}   
if ( $('.admin-form-q').hasClass('background-none-q')  ) { $('#fon-transparent').attr('checked', 'checked'); }
if ( $('.admin-form-q').hasClass('shedow-none-q')  ) { $('#shedow-forma').attr('checked', 'checked'); }
if ( $('.admin-form-q').hasClass('background-full-size-img')  ) { $('#adaptiv-fon').attr('checked', 'checked'); }






// tab switching
$('.swap-tabs-form-q').on('click', '.tab-box-q' , function(){
    $('.tab-box-q').removeClass('activ-tab-q');
    $(this).addClass('activ-tab-q');
    var activeTab = $(this).attr('data-tabsid');
    var numberElement = 0;
    var textEmptyForm = '';
    $(".form-element-q").each(function(){ 
        var tabsatribut = $(this).attr('data-tabs');
        if ( $(this).attr('data-tip') != 'submits' && !$(this).hasClass('construction-block-2') ) { 
            $(this).addClass('tab-none-q'); 
        }
        if (tabsatribut === activeTab) { 
            $(this).removeClass('tab-none-q'); 
            numberElement++; 
        }
    });
    $('.zaglushka[data-tabs!="'+activeTab+'"]').addClass('tab-none-q');
    //if the tab is empty add text:
    if (numberElement === 0){
        //change "zaglushka"
        if( $('.zaglushka[data-tabs="'+activeTab+'"]').length > 0  ){
            $('.zaglushka[data-tabs="'+activeTab+'"]').remove();
        }
        if( $('.zaglushka[data-tabs="'+activeTab+'"]').length ===0  ){
            textEmptyForm = '<div class="zaglushka" data-tabs="'+activeTab+'"> '+$('#text-addfield-q').html()+' </div>';
            $('#drag-drop-element').prepend(textEmptyForm);
        }
    }
}); 


//spoiler in admin
$('.modalbox-setting').on('click' , '.spoiler-box-q' , function() {
    if ( $(this).hasClass('open-spoiler') ) { 
        $(this).removeClass('open-spoiler'); 
    }
    else { 
        $(this).addClass('open-spoiler'); 
    }
    $(this).next('.spoiler-content-q').slideToggle();
});

//tabs in setting email
$('.tabs-type-send-mail').on('click' , 'input[name=type-send-mail]' , function() {
    if ( $(this).attr('id') ==='wpmailtype') {
        $('.wp_mail-seting').css('display', 'block');
        $('.stmtp-setting').css('display', 'none');
    }
    if ( $(this).attr('id') ==='mailsmtp') {
        $('.wp_mail-seting').css('display', 'none'); 
        $('.stmtp-setting').css('display', 'block'); 
    }
});


function sortingField(){
    if ( $(idElement).hasClass('type-captcha-element') ){
        $('#admInpt00').parent('.admin-editor-input').css('order' ,'1');
        $('#admInpt1').parent('.admin-editor-input').css('order' ,'2');
        $('#admInpt03').parent('.admin-editor-input').css('order' ,'3');
        $('#switch-tab-field').parent().css('order' ,'4');
        $('#admcustomclass').parent().css('order' ,'5');
    }
    if ( $(idElement).hasClass('type-itog-element') ){
        $('#ItogTextaarea').parent('.admin-editor-input').css('order' ,'1');
        $('#itograsschet2').css('order' ,'2');
        $('#admInpt1').parent('.admin-editor-input').css('order' ,'3');
        $('#rounding-calculation').parent().css('order' ,'4');
        $('#hide-not-full-val').parent().css('order' ,'5');
        $('#admInpt03').parent().css('order' ,'6');
    }
    if ( $(idElement).hasClass('type-paypal-element') ){
        $('#adm-paypal-live-a').parent().css('order' ,'2');
        $('#adm-paypal-sandbox-a').parent().css('order' , '3');
        $('#sandbox-mode-p').parent().css('order' , '3');
        $('#adm-paypal-return-succes').parent().css('order' ,'3');
        $('#adm-paypal-return-cancel').parent().css('order' ,'3');
        $('#adm-paypal-name-item').parent().css('order' , '5');
        $('#paypal-language-q').parent().css('order' , '6');
        $('#paypal-currency-q').parent().css('order' , '7');
        $('#pay-two-field').parent().css('order' , '8');
        $('#adm-price-pay-custom-q').closest('.admin-editor-input').css('order' , '9');
        $('#adm-number-pay-custom-q').closest('.admin-editor-input').css('order' , '10');

        $('.separator-bottom-panel-q').css('order' , '11');
        $('#admInpt1').parent().css('order' , '12');
        $('#admInpt03').parent().css('order' , '13');
        $('#admInpt2').parent().css('order' , '14');
        $('#admcustomclass').parent().css('order' , '15');
    }
    //input
    if ( $(idElement).hasClass('type-input-element') ){
        $('#admInpt00').parent('.admin-editor-input').css('order' ,'1');
        $('#admInpt1').parent('.admin-editor-input').css('order' ,'2');
        $('#admInpt0').parent('.admin-editor-input').css('order' ,'3');
        $('#validation-type').parent('.admin-editor-input').css('order' ,'4');
        
        $('#admInpt2').parent('.admin-editor-input').css('order' ,'5');
        $('#admInpt03').parent('.admin-editor-input').css('order' ,'6');
        
        $('#admcustomclass').parent().css('order' ,'7');
        $('#admcustomclass-2').parent().css('order' ,'8');
        $('#input-separator').css('order' ,'9');
        
        $('#a-filling-status').parent().css('order' ,'10');
        $('#adm-input-filling').parent().css('order' ,'11');
    }
} 

//Required field
function requedField() {
    let RequedValue = $(idElement).closest('.form-element-q').attr('data-req');
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='admInpt2' type='checkbox' autocomplete='off'><label for='admInpt2'></label><span>"+$('#text-required-q').html()+"</span></div>";
    
    $('.admin-modal-box-col-1').append(createdElement);
    if (RequedValue === 'Requed') {  $("#admInpt2").attr("checked","checked");  } 
}

//custom class
function customclass() { 
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-customclass-q').html()+"</span><input id='admcustomclass' class='admin-filed-style-1 custom-class-input not-validation' placeholder='class1 class2...' autocomplete='off' value='"+$(idElement).closest('.form-element-q').attr('data-custum')+"'></div>";
    
    if ( !$(idElement).hasClass('type-itog-element') && !$(idElement).hasClass('type-custom-text-element') ){
        $('.admin-modal-box-col-1').append(createdElement);
    }
    else { $('.admin-modal-box-col-2').append(createdElement); }
    
    if ( $(idElement).hasClass('type-input-element') || $(idElement).hasClass('type-phone-element') || $(idElement).hasClass('type-email-element')  ){
        createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-customclass-2-q').html()+"</span><input id='admcustomclass-2' class='admin-filed-style-1 custom-class-input not-validation' placeholder='class1 class2...' autocomplete='off' value='"+$(idElement).attr('data-custum-2')+"'></div>";
        $('.admin-modal-box-col-1').append(createdElement);
    }
    
    if ( $(idElement).hasClass('type-textarea-element') ){
        createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-customclass-3-q').html()+"</span><input id='admcustomclass-2' class='admin-filed-style-1 custom-class-input not-validation' placeholder='class1 class2...' autocomplete='off' value='"+$(idElement).attr('data-custum-2')+"'></div>";
        $('.admin-modal-box-col-1').append(createdElement);
    }
    
    if ( $(idElement).hasClass('type-submit-element') ){
        createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-customclass-4-q').html()+"</span><input id='admcustomclass-2' class='admin-filed-style-1 custom-class-input not-validation' placeholder='class1 class2...' autocomplete='off' value='"+$(idElement).attr('data-custum-2')+"'></div>";
        $('.admin-modal-box-col-1').append(createdElement);
    }
    
}

//copy style
function copystyle() { 
    let createdElement = "<div class='admin-editor-input copy-style-field'><span>"+$('#text-field-style-cp-q').html()+"<span class='help-message-q q7 fix-col-2'>?</span></span><div class='swap-copy-q'> <div class='element-copy-q copy-qs'>"+$('#text-copy-style-q').html()+"</div> <div class='element-copy-q paste-qs'>"+$('#text-paste-style-q').html()+"</div></div> </div>";
    $('.admin-modal-box-col-2').append(createdElement);
    
    
    //paste css yes/no
    if ( $('.css-copy-field-style-tex').attr('data-field') == 'input' ){
        //input group
        if ( $(idElement).hasClass('type-input-element') || $(idElement).hasClass('type-phone-element') || $(idElement).hasClass('type-email-element') || $(idElement).hasClass('type-data-element') || $(idElement).hasClass('type-dropdawn-element') || $(idElement).hasClass('type-textarea-element') || $(idElement).hasClass('type-timepicker-element') ){ 
                $('.paste-qs').addClass('active-paste-q');
        }
    }
 
}

//width
function fieldWidth() { 
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-fieldwidth-q').html()+"</span><input id='admInpt1' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).closest('.form-element-q').attr('data-sizes')+"' ></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
}

//placeholder
function plakeholderQ() {
    if ( $(idElement).attr('data-style')!='style2' ){ 
        let createdElement = "<div class='admin-editor-input heading-width-q' data-tab-adm='setting'><span>"+$('#text-placeholder-q').html()+"</span>";
        
        //input and datepicker
        if ( $(idElement).attr('data-style')!='style2' ) {
            if ( $(idElement).hasClass('type-input-element') || $(idElement).hasClass('type-data-element') || $(idElement).hasClass('type-email-element') || $(idElement).hasClass('type-phone-element') ) {
                
                let val = $(idElement).find('input').attr('placeholder').replace(/'/g, "&#39;");
                createdElement = createdElement+"<input id='admInpt0' class='admin-filed-style-1 not-validation' autocomplete='off' value='"+val+"'></div> <div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-fontsize-q').html()+"</span><input id='admplaceholdersize' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('input').css('font-size')+"'>";
            }
        }
        
        if ( $(idElement).attr('data-style')!='style2' ) {
            //textarea
            if ($(idElement).hasClass('type-textarea-element')) {
                
                let val = $(idElement).find('textarea').attr('placeholder').replace(/'/g, "&#39;");
                createdElement = createdElement+"<input id='admInpt0' class='admin-filed-style-1 not-validation' autocomplete='off' value='"+val+"'></div> <div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-fontsize-q').html()+"</span><input id='admplaceholdersize' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('textarea').css('font-size')+"'>";
            }
        }
        
        createdElement = createdElement+'</div>';
        $('.admin-modal-box-col-1').append(createdElement);
       
    }
}

//mask
function mask(){
    
    //activate mask
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='activate-mask-q' type='checkbox'><label for='activate-mask-q'></label><span>"+$('#text-mask-activ-q').html()+"</span> </div>";
    
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-mask-q').html()+" <span class='help-message-q q6'>?</span> </span><input id='adm-mask-q' class='admin-filed-style-1 not-validation' autocomplete='off' value='"+$(idElement).find('input').attr('data-mask')+"'> <div class='disable-lib-error-q fix-disable-phone-l'>"+$('#text-disabled-lib-q').html()+"</div> </div> ";
    
    $('.admin-modal-box-col-1').append(createdElement);
    
    if ( $(idElement).find('input').attr('data-mask-a')==='yes'){
        $("#activate-mask-q").attr("checked","checked"); 
        $('#admInpt0').closest('.admin-editor-input').addClass('not-active-field');
        $('#adm-mask-q').closest('.admin-editor-input').removeClass('not-active-field');
        $(idElement).addClass('mask-p-q'); //for style 2
    }
    else { 
        $('#adm-mask-q').closest('.admin-editor-input').addClass('not-active-field');
        $('#admInpt0').closest('.admin-editor-input').removeClass('not-active-field');
        $(idElement).removeClass('mask-p-q');//for style 2
    }
    
    //disable lib
    if ( $('#disable-lib-phone').attr('data-disable') === 'yes' ) {  $('#adm-mask-q').next('.disable-lib-error-q').css('display', 'inline-block'); }
}

//heading, size heading, color heading, margin
function headingQ() {
    //heading
    let val = $(idElement).find('.heading-field-q').html().replace(/'/g, "&#39;");
    let createdElement = "<div class='admin-editor-input heading-width-q' data-tab-adm='setting'><span>"+$('#text-heading-q').html()+"</span><input id='admInpt00' class='admin-filed-style-1 not-validation' autocomplete='off' value='"+val+"'></div>";
    //another title
    if ( $(idElement).hasClass('type-dropdawn-element') || $(idElement).hasClass('type-checkbox-element') || $(idElement).hasClass('checkbox-img') || $(idElement).hasClass('type-tooltip-element')  ){ 
        createdElement = '';
    }
    //heading size
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-headingsize-q').html()+"</span><input id='admsizeheding' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.heading-field-q').attr('data-font')+"'> </div>" ;
    $('.admin-modal-box-col-1').append(createdElement); 
    //heading color
    createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-headingcolor-q').html()+"</span><div id='admcolorheading'><input class='rangeadm' autocomplete='off' data-alpha='true' value='"+$(idElement).find('.heading-field-q').css('color')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#admcolorheading input').wpColorPicker(colorOptions);
    //heading weight
    createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-headingweight-q').html()+"</span> <div id='field-weight'> <select class='admin-dropdown-style-1'><option data-val='style1'>300</option> <option data-val='style2'>400</option>  <option data-val='style2'>500</option> <option data-val='style2'>600</option>  <option data-val='style2'>700</option> <option data-val='style2'>800</option> </select></div> </div>";
    //heading margin bottom
    var value = '';
    if ($(idElement).hasClass('type-textarea-element') ){
        let heading = $(idElement).attr('data-heading-style-2');
        if ( heading ==='style2' ) {
            value = '25px';
        }
        if ( heading ==='style1' ) {
            value = '5px';
        }
        if ( heading ==='none' ) {
            value = $(idElement).find('.heading-field-q').css('margin-bottom');
        }
    }
    else {
        value = $(idElement).find('.heading-field-q').css('margin-bottom');
    }
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-headingmargin-q').html()+"</span><input id='heading-margin-bottom' class='admin-filed-style-1' autocomplete='off' value='"+ value+"'></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    
    //font-weight val in select
    $('#field-weight select').val( $(idElement).find('.heading-field-q').css('font-weight') );
    //adaptive fix class
    if ( $(idElement).hasClass('type-dropdawn-element') || $(idElement).hasClass('type-privacy-element') ){ 
        $('#admInpt00').addClass('fix-adaptive-select'); 
        $('#field-weight, #heading-margin-bottom').closest('.admin-editor-input').addClass('fix-adaptive-select-2');
    }
    
} 
 
//field id
function idQ() {
    let createdElement = "<div id='remove-element' class='blockid'><div class='swap-tab-amin-field'><div><span class='id-field-qf'>ID</span>: "+$(idElement).attr('id')+"</div>";
    createdElement = createdElement + "<div class='tab-setting-field-q'><i class='fa fa-chevron-rightq'></i> "+$('#text-setting-q').html()+"</div>";
    createdElement = createdElement + "<div class='tab-design-field-q'><i class='fa fa-chevron-rightq'></i> "+$('#text-design-q').html()+"</div></div> </div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    
    let heightWindow = $(window).height(); //height window
    if ( heightWindow > 700  ){ 
        //new panel
        createdElement = "<div id='for-large-monitors' class='for-large-monitors-q'><div class='swap-tab-amin-field'>";
        createdElement = createdElement + "<div class='tab-display-ney-q'> <i class='fa fa-chevron-upq'></i> </div>";
        createdElement = createdElement + "<div class='tab-display-classik-q'> <i class='fa fa-chevron-downq'></i> </div></div> </div>";
        $('.admin-modal-box-col-1').append(createdElement); 
    }
}


//Hide field on page load
function hideField() {
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='admInpt03' type='checkbox'><label for='admInpt03'></label><span>"+$('#text-defaultnone-q').html()+"</span><span class='help-message-q q2'>?</span> </div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    if ($(idElement).attr('data-none')==='none'){ $("#admInpt03").attr("checked","checked"); }
}


function disableStyleField(){
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='adm-disable-style-this' type='checkbox'><label for='adm-disable-style-this'></label><span>"+$('#text-disable-tyle-this-q').html()+"</span><span class='help-message-q q11'>?</span> </div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    if ( $(idElement).attr('data-disable-style')==='yes' ){ $("#adm-disable-style-this").attr("checked","checked"); }
}


//range
function sliderField() {
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-minvalue-q').html()+"</span><input id='sliderField' class='rangeadm admin-filed-style-1' autocomplete='off' value='"+ $(idElement).find('.polzet').attr('data-min')+"'></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-maxvalue-q').html()+"</span><input id='polzunokmax' class='rangeadm admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.polzet').attr('data-max')+"'></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-step-q').html()+"<span class='help-message-q q19'>?</span></span><input id='polzunokstep' class='rangeadm admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.polzet').attr('data-step')+"'></div>";
    createdElement = createdElement +"<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-quasartvalue-q').html()+"</span><input id='polzunokvalue' class='rangeadm admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.polzet').attr('data-val')+"'></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
}

//range background
function sliderColor1() {
    let idq = $(idElement).find('.ui-slider-range').css('background-color');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-rangecolor1-q').html()+"</span><div id='colorzapolnitel'><input class='rangeadm' autocomplete='off' data-alpha='true' value='"+idq+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorzapolnitel input').wpColorPicker(colorOptions);
}

//range background-2
function sliderColor2() {
    let idq = $(idElement).find('.polzet').css('background-color');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-rangecolor2-q').html()+"</span><div id='colorzapolnitel2'><input class='rangeadm' data-alpha='true' value='"+idq+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorzapolnitel2 input').wpColorPicker(colorOptions);
}	

//range background toogle
function sliderColor3() {
    let idq = $(idElement).find('.ui-slider-handle').css('background-color');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-togglebackground-q').html()+"</span><div id='colorzapolnitel3'><input class='rangeadm' data-alpha='true' value='"+idq+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorzapolnitel3 input').wpColorPicker(colorOptions);
}	

//range background-2 toogle
function sliderColor4() {
    let idq = $(idElement).find('.ui-slider-handle').css('color');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-numbercolor-q').html()+"</span><div id='colorzapolnitel4'><input class='rangeadm' data-alpha='true' value='"+idq+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorzapolnitel4 input').wpColorPicker(colorOptions);
}	

//range background-2 toogle
function sliderColor4() {
    let idq = $(idElement).find('.polzet').attr('data-color4');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-numbercolor-q').html()+"</span><div id='colorzapolnitel4'><input class='rangeadm' data-alpha='true' value='"+idq+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorzapolnitel4 input').wpColorPicker(colorOptions);
    
    //color scale
    idq = $(idElement).find('.polzet').attr('data-color5');
    createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-scale-color-q').html()+"</span><div id='scale-color'><input class='rangeadm' data-alpha='true' value='"+idq+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#scale-color input').wpColorPicker(colorOptions);
}

//rounding 
function rounding(){
    let val = $(idElement).attr('data-rounding');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span class='style-heding-q'>"+$('#text-rounding-q').html()+"</span> <div id='rounding-calculation'> <select class='admin-dropdown-style-1'><option data-val='1'>"+$('#text-rounding1-q').html()+"</option> <option data-val='2'>"+$('#text-rounding2-q').html()+"</option>   <option data-val='3'>"+$('#text-rounding3-q').html()+"</option>  <option data-val='4'>"+$('#text-rounding4-q').html()+"</option> <option data-val='5'>"+$('#text-rounding5-q').html()+"</option> <option data-val='6'>"+$('#text-rounding6-q').html()+"</option>  </select></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    
    let selected = $('#rounding-calculation').find('option[data-val="'+val+'"]').html();
    $('#rounding-calculation').find('select').val( selected );
}


//select style field
function typeStyle(){
    let style = $(idElement).attr('data-style');
    let createdElement = '';
    //all field, not checkbox
    if ( !$(idElement).hasClass('type-checkbox-element') && !$(idElement).hasClass('type-privacy-element') && !$(idElement).hasClass('type-range-element') ){
        createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span class='style-heding-q'>"+$('#text-fieldstyle-q').html()+"</span> <div id='stylePolzunok'> <select class='admin-dropdown-style-1'><option data-val='style1'>"+$('#text-style1-q').html()+"</option> <option data-val='style2'>"+$('#text-style2-q').html()+"</option> </select></div></div>";
    }
    //checkbox
    if ( $(idElement).hasClass('type-checkbox-element') ){
        createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span class='style-heding-q'>"+$('#text-fieldstyle-q').html()+"</span> <div id='stylePolzunok'> <select class='admin-dropdown-style-1'><option data-val='style1'>"+$('#text-style1-q').html()+"</option> <option data-val='style2'>"+$('#text-style2-q').html()+"</option> <option class='pro-style' data-val='style3'>"+$('#text-style3-q').html()+"</option> <option class='pro-style' data-val='style4'>"+$('#text-style4-q').html()+"</option> </select></div></div>";
    }
    //privacy
    if ( $(idElement).hasClass('type-privacy-element')){
        createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span class='style-heding-q'>"+$('#text-fieldstyle-q').html()+"</span> <div id='stylePolzunok'> <select class='admin-dropdown-style-1'><option data-val='style1'>"+$('#text-style1-q').html()+"</option> <option data-val='style2'>"+$('#text-style2-q').html()+"</option> <option class='pro-style' data-val='style4'>"+$('#text-style4-q').html()+"</option> </select></div></div>";
    }
    //slider
    if ( $(idElement).hasClass('type-range-element')){
        createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span class='style-heding-q'>"+$('#text-fieldstyle-q').html()+"</span> <div class='adm-list-wrap-q' id='stylePolzunok'> <select class='admin-dropdown-style-1'><option data-val='style1'>"+$('#text-style1-q').html()+"</option> <option data-val='style2'>"+$('#text-style2-q').html()+"</option> <option data-val='style3'>"+$('#text-style3free-q').html()+"</option> </select></div></div>";
    }
    
    $('.admin-modal-box-col-1').append(createdElement); 
    let selected = $('#stylePolzunok').find('option[data-val="'+style+'"]').html();
    $('#stylePolzunok').find('select').val( selected );
}

//date lang
function dateLang(){
    let lang = $(idElement).attr('data-lang');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-lang-q').html()+"<span class='help-message-q q10'>?</span></span> <div id='date-lang'> <select class='admin-dropdown-style-1'><option data-val='defoult'>"+$('#text-defoult-q').html()+"</option> <option data-val='ru'>"+$('#text-ru-q').html()+"</option> </select></div></div>";

    $('.admin-modal-box-col-1').append(createdElement); 
    let selected = $('#date-lang').find('option[data-val="'+lang +'"]').html();
    $('#date-lang').find('select').val( selected );
}

//scale
function scale(){
    let idq = $(idElement).find('.polzet').attr('data-sh'); 
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='admsh' type='checkbox'> <label for='admsh'></label><span>"+$('#text-scale-q').html()+"</span> </div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    if ( $(idElement).find('.polzet').attr('data-sh')==='yes'){ 
        $("#admsh").attr("checked","checked");
    }
}

//ful scale
function scaleFull(){
    let idq = $(idElement).find('.polzet').attr('data-sh-2'); 
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='scale-full' type='checkbox'> <label for='scale-full'></label><span>"+$('#text-scale-full-q').html()+"</span> </div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    if ( $(idElement).find('.polzet').attr('data-sh-2')==='yes' ){ 
        $("#scale-full").attr("checked","checked");
    }
}

function sendfileqform (){
    let limit = $(idElement).closest('.form-element-q').attr('data-max');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-filelimit-q').html()+"</span><input id='admmax' class='admin-filed-style-1' autocomplete='off' value='"+limit+"'></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-allowedextensions-q').html()+"</span><input id='admr' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).closest('.form-element-q').attr('data-r')+"'></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-maxsizefile-q').html()+"</span><input id='admv' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).closest('.form-element-q').attr('data-v')+"'></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
}	

function textbutton(){
    let object = '';
    let createdElement = '';
    if ( $(idElement).hasClass('type-submit-element') ){
        object =  $(idElement).find('span');
        createdElement = "<div class='admin-editor-input heading-width-q' data-tab-adm='setting'><span>"+$('#text-buttontext-q').html()+"</span><input id='admsub' class='admin-filed-style-1' autocomplete='off' value='"+object.html().replace(/'/g, "&#39;")+"'></div>";
    } 
    if ( $(idElement).hasClass('type-upload-element') ){ 
        object = $(idElement).find('label span');
        createdElement = "<div class='admin-editor-input heading-width-q' data-tab-adm='setting'><span>"+$('#text-buttontext-q').html()+"</span><input id='admsub' class='admin-filed-style-1' autocomplete='off' value='"+object.html().replace(/'/g, "&#39;")+"'></div>";
    }
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-buttonfontsize-q').html()+"</span><input id='admbottonfontsize' class='admin-filed-style-1' autocomplete='off' value='"+object.css('font-size')+"'></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
}

function colorssubmit(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-backgroundcolor-q').html()+"</span><div id='colorsubmit1'><input autocomplete='off' data-alpha='true' value='"+$(idElement).attr('data-color1')+"'></div></div> <div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-colortext-q').html()+"</span><div id='colorsubmit2'><input data-tab-adm='design' autocomplete='off' data-alpha='true' value='"+$(idElement).attr('data-color2')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorsubmit1 input').wpColorPicker(colorOptions);
    $('#colorsubmit2 input').wpColorPicker(colorOptions);
}

function alignbuttom(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-fieldalign-q').html()+"</span><div class='swap-align-buttons'> <div class='element-align-q' id='left-button'><i class='fa fa-align-leftq'></i></div> <div class='element-align-q' id='center-button'><i class='fa fa-align-centerq'></i></div>  <div class='element-align-q' id='right-button'><i class='fa fa-align-rightq'></i></div>   </div></div>";
    $('.admin-modal-box-col-1').append(createdElement);  
    if ( $(idElement).hasClass('align-left-q') ) { 
        $('#left-button').addClass('element-align-active-q');
    }
    if ( $(idElement).hasClass('align-right-q') ) { 
        $('#right-button').addClass('element-align-active-q');
    }
    if ( $(idElement).hasClass('align-center-q') ) { 
        $('#center-button').addClass('element-align-active-q');
    }
    //checkbox img
    if ( $(idElement).hasClass('checkbox-img')  ){
        createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-textalign-q').html()+"</span><div class='swap-align-buttons align-element-2'>  <div class='element-align-q' id='left-button2'><i class='fa fa-align-leftq'></i></div> <div class='element-align-q' id='center-button2'><i class='fa fa-align-centerq'></i></div>  <div class='element-align-q' id='right-button2'><i class='fa fa-align-rightq'></i></div>   </div></div>"; 
        $('.admin-modal-box-col-1').append(createdElement);  
        if ( $(idElement).hasClass('align-left-q2') ) { 
            $('#left-button2').addClass('element-align-active-q');
        }
        if ( $(idElement).hasClass('align-right-q2') ) { 
            $('#right-button2').addClass('element-align-active-q');
        }
        if ( $(idElement).hasClass('align-center-q2') ) { 
            $('#center-button2').addClass('element-align-active-q');
        }
    }
}

function fullsizesubmit(){
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='design'><input id='admfullsb' type='checkbox'><label for='admfullsb'></label><span>"+$('#text-fullwidth-q').html()+"</span></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    if ($(idElement).attr('data-ful')==='yes'){ $("#admfullsb").attr("checked","checked");} 
}

//background color input
function colorinput(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-backgroundcolor-q').html()+"</span><div id='colorinput'><input data-alpha='true' value='"+$(idElement).find('.style-element').css('background-color')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorinput input').wpColorPicker(colorOptions);
}

//color fa fa
function colorfafa(){
    let createdElement = "<div class='admin-editor-input more-setting-none' data-tab-adm='design'><span>"+$('#text-iconcolor-q').html()+"</span><div id='colorfafa'><input data-alpha='true' value='"+$(idElement).find('.fa-icons-q i').css('color')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorfafa input').wpColorPicker(colorOptions);
}

//border input
function borderradiusinput(){ 
    //border radius
    let borderTop = $(idElement).find('.style-element').css('borderTopLeftRadius');
    let borderBottom = $(idElement).find('.style-element').css('borderBottomRightRadius');
    let borderRight = $(idElement).find('.style-element').css('borderTopRightRadius');
    let borderLeft = $(idElement).find('.style-element').css('borderBottomLeftRadius');
    let borderRadius = '';
    if ( borderTop === borderBottom && borderTop === borderLeft && borderTop === borderRight ) {  
        borderRadius = borderTop; 
    }
    else {  
        borderRadius = borderTop+' '+borderRight+' '+borderBottom+' '+ borderLeft; 
    }
    
    //border width
    borderTop = $(idElement).find('.style-element').css('border-top-width');
    borderBottom = $(idElement).find('.style-element').css('border-bottom-width');
    borderRight = $(idElement).find('.style-element').css('border-right-width');
    borderLeft = $(idElement).find('.style-element').css('border-left-width');
    let borderWidth = '';
    if ( borderTop === borderBottom && borderTop === borderLeft && borderTop === borderRight ) { 
        borderWidth = borderTop; 
    }
    else { 
        borderWidth = borderTop+' '+borderRight+' '+borderBottom+' '+ borderLeft; 
    }
    
    var createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-borderradius-q').html()+"</span><input id='admborderinput' class='admin-filed-style-1' autocomplete='off' value='"+borderRadius+"'></div> <div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-borderwidth-q').html()+"</span><input id='admborderinputsize' class='admin-filed-style-1' autocomplete='off' value='"+borderWidth+"'></div>";
    //separation border and border hover
    var borderValue = $(idElement).attr('data-border-color');
    createdElement = createdElement +"<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-bordercolor-q').html()+"</span><div id='colorborderinput'><input autocomplete='off' data-alpha='true' value='"+borderValue+"'></div></div> "; 
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colorborderinput input').wpColorPicker(colorOptions);
}

//border dropdown
function borderdropdown(){
    //border radius
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'> <span>"+$('#text-borderradius-q').html()+"</span><input id='admborderinput' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).attr('data-border-radius')+"'></div>";
    //border width
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'> <span>"+$('#text-borderwidth-q').html()+"</span><input id='admborderinputsize' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).attr('data-border-width')+"'></div>";
    //border color
    let bordervalue = $(idElement).attr('data-border-color');
    createdElement = createdElement +"<div class='admin-editor-input' data-tab-adm='design'> <span>"+$('#text-bordercolor-q').html()+"</span><div id='colorborderinput'><input autocomplete='off' data-alpha='true' value='"+bordervalue+"'></div></div>"; 
    //custom focus border color
    let colorCustonValue = $(idElement).attr('data-focus-class');
    colorCustonValue = colorCustonValue.split('-'); 
    let idCustomColor = '#cs' + colorCustonValue[2];//id this color
    let colorDefolt = 'color-'+colorCustonValue[2]+'q';
    createdElement = createdElement + "<div class='admin-editor-input custom-calor-swap' data-tab-adm='design'><span>"+$('#text-borderfocuscolor-q').html()+"</span> <div class='custom-color-button'> <div id='customcolor1' class='color-informer " +colorDefolt+"'></div> <div class='text-colorbutton'>"+$('#text-selectcolor-q').html()+"</div> </div> </div>";
    $('.admin-modal-box-col-1').append(createdElement);
    $('#colorborderinput input').wpColorPicker(colorOptions);
    //style 2 hide border radius field
    if ( $(idElement).attr('data-style') === 'style2' ) { $('#admborderinput').closest('div').hide(); }
    
}

function combinationSetting() {
    //heading
    let val = $(idElement).find('.heading-field-q').html().replace(/'/g, "&#39;");
    let createdElement = "<div class='admin-editor-input fix-adm-check-panel swap-4-field' data-tab-adm='setting'><div class='box-dabl-filed'><div class='swap-field-in-duble'><span>"+$('#text-heading-q').html()+"</span><input id='admInpt00' class='admin-filed-style-1 not-validation' autocomplete='off' value='"+val+"'></div>";
    //width
    createdElement = createdElement + "<div class='swap-field-in-duble'><span>"+$('#text-fieldwidth-q').html()+"</span><input id='admInpt1' class='admin-filed-style-1 width-min-q' value='"+$(idElement).closest('.form-element-q').attr('data-sizes')+"'></div></div>";
    //Requed
    let RequedValue = $(idElement).closest('.form-element-q').attr('data-req');
    createdElement = createdElement + "<div class='swap-field-in-duble'> <div class='admin-check-style-1'> <input id='admInpt2' type='checkbox' autocomplete='off'><label for='admInpt2'></label><span>"+$('#text-required-q').html()+"</span></div>";

    //hide
    createdElement = createdElement + "<div class='admin-check-style-1'> <input id='admInpt03' type='checkbox'><label for='admInpt03'></label><span>"+$('#text-defaultnone-q').html()+"</span><span class='help-message-q q2'>?</span> </div></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    
    if ( $(idElement).attr('data-none')==='none' ){ $("#admInpt03").attr("checked","checked"); }
    if ( RequedValue === 'Requed' ) {  $("#admInpt2").attr("checked","checked");  }
    
    //remove requed in tooltip and progress
    if ( $(idElement).hasClass('type-tooltip-element')  ) { $('#admInpt2').closest('.admin-check-style-1').remove(); }
}


//height input
function heightinput(){
    if  ( $(idElement).hasClass('type-dropdawn-element') ){
        //height
        let createdElement = "<div class='admin-editor-input' data-tab-adm='design'> <span>"+$('#text-height-q').html()+"</span><input id='adminputheight' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.style-element').css('height')+"'> </div>";
       //backgroundcolor
       createdElement = createdElement +"<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-backgroundcolor-q').html()+"</span><div id='colorinput'><input data-alpha='true' value='"+$(idElement).find('.style-element').css('background-color')+"'></div></div>"; 
        $('.admin-modal-box-col-1').append(createdElement); 
        $('#colorinput input').wpColorPicker(colorOptions);
    }
    else { 
        let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-height-q').html()+"</span><input id='adminputheight' class='admin-filed-style-1'  autocomplete='off' value='"+$(idElement).find('.style-element').css('height') +"'></div>";
        $('.admin-modal-box-col-1').append(createdElement); 
    }
}

//color datepicker
function colordate(){
    let createdElement ="<div class='admin-editor-input separator-bottom-panel-q' data-tab-adm='design'><div>"+$('#text-datepicker-design-q').html()+"</div><div class='separator-line'></div></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-backgroundhead-q').html()+"</span><div id='colordate1'><input autocomplete='off' data-alpha='true' value='"+$(idElement).find('input').attr('data-colorsw')+"'></div></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-headingcolor-q').html()+"</span><div id='colordate2'><input autocomplete='off' data-alpha='true' value='"+$(idElement).find('input').attr('data-colorsw2')+"'></div></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-colortext-q').html()+"</span><div id='colordate3'><input autocomplete='off' data-alpha='true' value='"+$(idElement).find('input').attr('data-colorsw3')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colordate1 input').wpColorPicker(colorOptions);
    $('#colordate2 input').wpColorPicker(colorOptions);
    $('#colordate3 input').wpColorPicker(colorOptions);
}

//option in select
function selectoptions(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-fontsize-q').html()+"</span><input id='admselectfontsize' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('select').css('font-size')+"'></div>";
    
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-optioncolor-q').html()+"</span><div id='coloroption'><input class='admin-filed-style-1' data-alpha='true' autocomplete='off' value='"+$(idElement).find('select').css('color')+"'></div></div> "; 
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#coloroption input').wpColorPicker(colorOptions);
}

function validationfield(){
    let datavalidation = $(idElement).attr('data-validation');
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-validation-q').html()+"</span> <div id='validation-type'> <select class='admin-dropdown-style-1'> <option data-val='none'>"+$('#text-none-q').html()+"</option><option data-val='alphabete'>"+$('#text-onlyalphabets-q').html()+"</option><option data-val='number'>"+$('#text-onlynumbers-q').html()+"</option>  <option data-val='number-calculator'>"+$('#text-onlynumbers-and-dot-q').html()+"</option>  </select>  </div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    let selected = $('#validation-type').find('option[data-val="'+datavalidation+'"]').html();
    $('#validation-type').find('select').val( selected );
}

//custom color widow 
$('.modalbox-admin-panel, .modalbox-setting').on('click', '.custom-color-button', function(){
    let idColorButton = $(this).find('.color-informer').attr('id');
    //design popup or design field
    var targetWindowColor = '';
    if ( $(this).parent().hasClass('custom-calor-swap-setting') ) { 
        targetWindowColor = $('.modalbox-setting'); 
    } 
    else  { 
        targetWindowColor = $('.modalbox-admin-panel');
    } 
    //created window custom color
    if ( targetWindowColor.find('.customcolor').length === 0  ){
        //id buttom color
        var colorCustonValue ='';
        if ( idColorButton === 'customcolor1' ) { colorCustonValue = $(idElement).attr('data-focus-class'); }
        if ( idColorButton === 'customcolor2' ) { colorCustonValue = $(idElement).attr('data-placeholder'); }
        if ( idColorButton === 'customcolor3' ) { colorCustonValue = $(idElement).attr('data-hover-background'); }
        if ( idColorButton === 'customcolor4' ) { colorCustonValue = $(idElement).attr('data-hover-color'); }
        if ( idColorButton === 'customcolor5' ) { colorCustonValue = $('.button-design-popup').attr('data-hover-background'); }
        if ( idColorButton === 'customcolor6' ) { colorCustonValue = $('.button-design-popup').attr('data-hover-color'); }

        colorCustonValue = colorCustonValue.split('-'); 
        let idCustomColor = '#cs' + colorCustonValue[2];//id this color
        let idcolorinforme = $(this).find('.color-informer').attr('id');//id selected color
        let stringCustomColor = "<div class='customcolor' data-return="+idcolorinforme+" id='colorinputfocus'> <input id='cs1' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-1q' for='cs1' data-number='1'></label> <input id='cs2' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-2q' for='cs2' data-number='2'></label> <input id='cs3' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-3q' for='cs3' data-number='3'></label>   <input id='cs4' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-4q' for='cs4' data-number='4'></label>   <input id='cs5' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-5q' for='cs5' data-number='5'></label>  <input id='cs6' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-6q' for='cs6' data-number='6'></label>  <input id='cs7' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-7q' for='cs7' data-number='7'></label>  <input id='cs12' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-12q' for='cs12' data-number='12'></label>   <input id='cs8' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-8q' for='cs8' data-number='8'></label>  <input id='cs9' class='admin-editor-input'  name='customcolor' type='radio'> <label class='color-9q' for='cs9' data-number='9'></label><input id='cs10' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-10q' for='cs10' data-number='10'></label><input id='cs11' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-11q' for='cs11' data-number='11'></label><input id='cs13' class='admin-editor-input' name='customcolor' type='radio'> <label class='color-13q' for='cs13' data-number='13'>None</label> </div>";
        $(this).closest('.custom-calor-swap').append(stringCustomColor);
        $('#colorinputfocus').find(idCustomColor).attr("checked","checked") ;
    }
    else  { 
        $('.customcolor').remove('.customcolor'); 
    }
});	 

//select color in window custom color
$('.modalbox-admin-panel, .modalbox-setting').on('click', '.customcolor label', function(){
    var datareturn = $('.customcolor').attr('data-return');
    var colorCustom = $(this).css('background-color');
    var colorCheckId = $(this).attr('data-number');
    var removColorPrev = '';
    //color focus border
    if ( datareturn === 'customcolor1') {  
        removColorPrev = $(idElement).attr('data-focus-class');
        $(idElement).removeClass(removColorPrev);
        $(idElement).attr('data-focus-class', 'color-class-'+colorCheckId ).addClass('color-class-'+colorCheckId);
        $('#customcolor1').attr('class','color-informer').addClass('color-'+colorCheckId+'q');
    } 
    //color placeholder
    if ( datareturn === 'customcolor2') { 
        removColorPrev = $(idElement).attr('data-placeholder');
        $(idElement).removeClass(removColorPrev);
        $(idElement).attr('data-placeholder', 'color-p-'+colorCheckId ).addClass('color-p-'+colorCheckId);
        $('#customcolor2').attr('class','color-informer').addClass('color-'+colorCheckId+'q');
    }  
    //background hover: tab, submit, upload file
    if ( datareturn === 'customcolor3' ) { 
        removColorPrev = $(idElement).attr('data-hover-background');
        $(idElement).attr('data-hover-background', 'color-hover-'+colorCheckId );
        if ( $(idElement).hasClass('type-submit-element') || $(idElement).hasClass('type-upload-element') ){ 
            $(idElement).find('.style-element').removeClass(removColorPrev);
            $(idElement).find('.style-element').addClass('color-hover-'+colorCheckId);
        }
        else {
            $(idElement).removeClass(removColorPrev);
            $(idElement).addClass('color-hover-'+colorCheckId);  
        }
        $('#customcolor3').attr('class','color-informer').addClass('color-'+colorCheckId+'q');
    } 
    //color hover: tab, submit, upload file
    if ( datareturn === 'customcolor4' ) { 
        removColorPrev = $(idElement).attr('data-hover-color');
        $(idElement).attr('data-hover-color', 'color2-hover-'+colorCheckId );
        if ( $(idElement).hasClass('type-submit-element') || $(idElement).hasClass('type-upload-element') ){  
            $(idElement).find('.style-element').removeClass(removColorPrev);
            $(idElement).find('.style-element').addClass('color2-hover-'+colorCheckId); 
        }
        else  {
            $(idElement).removeClass(removColorPrev);
            $(idElement).addClass('color2-hover-'+colorCheckId);
        }
        $('#customcolor4').attr('class','color-informer').addClass('color-'+colorCheckId+'q');
    }  
    //hover popup button
    if ( datareturn === 'customcolor5' ) { 
        removColorPrev =  $('.button-design-popup').attr('data-hover-background');
        $('.button-design-popup').attr('data-hover-background', 'color-hover-'+colorCheckId ).removeClass(removColorPrev).addClass('color-hover-'+colorCheckId);
        $('#customcolor5').attr('class','color-informer').addClass('color-'+colorCheckId+'q');
    }  
    if ( datareturn === 'customcolor6' ) { 
        removColorPrev =  $('.button-design-popup').attr('data-hover-color');
        $('.button-design-popup').attr('data-hover-color', 'color2-hover-'+colorCheckId ).removeClass(removColorPrev).addClass('color2-hover-'+colorCheckId);
        $('#customcolor6').attr('class','color-informer').addClass('color-'+colorCheckId+'q');
    } 
    $(datareturn).css('background-color', colorCustom);
});

//custom color focus
function customcolor (){ 
    let colorCustonValue = $(idElement).attr('data-focus-class');
    colorCustonValue = colorCustonValue.split('-'); 
    let idCustomColor = '#cs' + colorCustonValue[2];//id this color
    let colorDefolt = 'color-'+colorCustonValue[2]+'q';
    let createdElement = "<div class='admin-editor-input custom-calor-swap' data-tab-adm='design'><span>"+$('#text-borderfocuscolor-q').html()+"</span> <div class='custom-color-button'> <div id='customcolor1' class='color-informer " +colorDefolt+"'></div> <div class='text-colorbutton'>"+$('#text-selectcolor-q').html()+"</div> </div> </div> ";
    $('.admin-modal-box-col-1').append(createdElement); 
}

//custom color placeholder
function customcolorplace(){ 
    let colorCustonValue = $(idElement).attr('data-placeholder');
    colorCustonValue = colorCustonValue.split('-'); 
    let idCustomColor = '#cs' + colorCustonValue[2];//id this color
    let colorDefolt = 'color-'+colorCustonValue[2]+'q';
    let createdElement = "<div class='admin-editor-input custom-calor-swap' data-tab-adm='design'><span>"+$('#text-placeholdercolor-q').html()+"</span> <div class='custom-color-button'> <div id='customcolor2' class='color-informer " +colorDefolt+"'></div> <div class='text-colorbutton'>"+$('#text-selectcolor-q').html()+"</div> </div> </div> ";
    $('.admin-modal-box-col-1').append(createdElement); 
}

//custom select fa fa icons
function customFafa(){ 
    let colorCustonValue = $(idElement).find('.fa-icons-q').html();
    let createdElement = "<div class='admin-editor-input custom-calor-swap' data-tab-adm='design'><span>"+$('#text-icons-q').html()+"</span> <div class='faicons-button-swap'> <div class='ficons-button admin-filed-style-1'>"+$('#text-select-q').html()+"</div> </div> </div> ";
    $('.admin-modal-box-col-1').append(createdElement); 
}

//select fa fa icons in custom
$('.modalbox-admin-panel').on('click', '.customfafa label', function(){
    let icons = $(this).html();
    let iconsData = $(this).attr('data-number');
    if ( !$(this).hasClass('remove-icons') ){ 
        $(idElement).find('.fa-icons-q').html(icons).attr('data-num', iconsData);
    }
    else {
        $(idElement).find('.fa-icons-q').html("<i class='none-i'></i>").attr('data-num', iconsData);
    }
});

//cusrom color hover 
function customcolorhover(){
    let classeElement = '';
    classeElement ='admin-editor-input custom-calor-swap';
    let colorCustomValue = $(idElement).attr('data-hover-background').split('-');
    let colorDefolt = 'color-'+colorCustomValue[2]+'q';
    let createdElement = '';
    if ( $(idElement).hasClass('tab-box-q') ){ 
        createdElement = "<div class='"+classeElement+"' data-tab-adm='design'><span>"+$('#text-hoveractiv+-q').html()+"</span> <div class='custom-color-button'> <div id='customcolor3' class='color-informer "+colorDefolt+"'></div> <div class='text-colorbutton'>"+$('#text-selectcolor-q').html()+"</div> </div> </div> ";
    }
    else { 
        createdElement = "<div class='"+classeElement+"' data-tab-adm='design'><span>"+$('#text-hoverbackground-q').html()+"</span> <div class='custom-color-button'> <div id='customcolor3' class='color-informer "+colorDefolt+"'></div> <div class='text-colorbutton'>"+$('#text-selectcolor-q').html()+"</div> </div> </div> "; 
    }
    colorCustomValue = $(idElement).attr('data-hover-color').split('-');
    colorDefolt = 'color-'+colorCustomValue[2]+'q';
    createdElement = createdElement+ "<div class='"+classeElement+"' data-tab-adm='design'><span>"+$('#text-hovercolor-q').html()+"</span> <div class='custom-color-button'> <div id='customcolor4' class='color-informer "+colorDefolt+"'></div> <div class='text-colorbutton'>"+$('#text-selectcolor-q').html()+"</div> </div> </div> ";
    $('.admin-modal-box-col-1').append(createdElement); 
}

//selected fa fa icons in custom
$('.modalbox-admin-panel').on('click', '.ficons-button', function(){
    if ($('.modalbox-admin-panel').find('.customfafa').css('display') != 'flex' ){
        let idIcons = $(idElement).find('.fa-icons-q').attr('data-num');
        let idCustomColor = '#cs' + idIcons;//id selected icon
        $('.customfafa').css('display', 'flex'); 
        $('.customfafa').find(idCustomColor).attr("checked","checked") ;
    }
    else { 
        $('.customfafa').css('display', 'none'); 
    }
});


//style checkbox
function fontsizefiled(){
    var sizeIcon = '';
    var colorBorderCheck = '';
    var colorCheck = '';
    var displayAdm = '';
    var borderWidthCheck ='';
    var sizeCheck = '';
    var classMoreSetting = '';
    if ( $(idElement).hasClass('type-checkbox-element') || $(idElement).hasClass('type-privacy-element') ) { 
        sizeCheck = $(idElement).find('.checkbox-qform').css('width');
        if ( $(idElement).attr('data-style')==='style1' ) { 
            sizeIcon = $(idElement).find('.checkbox-fafa i').css('width'); 
        }
        else { 
            sizeIcon = $(idElement).find('.checkbox-fafa i').css('font-size'); 
        }
        colorBorderCheck = $(idElement).find('.checkbox-qform').css('border-top-color');
        colorCheck = $(idElement).find('.checkbox-fafa i').css('color');
        borderWidthCheck = $(idElement).find('.checkbox-qform').css('border-top-width');
        displayAdm = 'flex';
        classMoreSetting = 'admin-editor-input';
    }
    if ( $(idElement).hasClass('checkbox-img') ) {  
        sizeCheck = $(idElement).find('.checkbox-img-check').css('width'); 
        sizeIcon = $(idElement).find('.checkbox-img-style2-checked').css('width');
        colorBorderCheck = $(idElement).find('.checkbox-img-check').css('border-top-color');
        colorCheck = $(idElement).find('.checkbox-img-style2-checked').css('background-color');
        borderWidthCheck = $(idElement).find('.checkbox-img-check').css('border-top-width');
        if ( $(idElement).hasClass('style-t-qform-1') ) { 
            displayAdm = 'none';
        }
        else { 
            displayAdm = 'flex'; 
        }
        classMoreSetting = 'admin-editor-input more-setting-none';
    }
    var createdElement = '';
    if ( $(idElement).hasClass('type-checkbox-element')  ) { 
        //forn sie
        createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-fontsize-q').html()+"</span><input id='admfontsize' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('label .html-text-check-q').css('font-size')+"'></div>";
        //border width
        createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-borderwidth-q').html()+"</span><input id='admcheckbordersize' class='admin-filed-style-1' autocomplete='off' value='"+borderWidthCheck+"'></div>";
        $('.admin-modal-box-col-1').append(createdElement);
    }     
    //border and check color
    createdElement = "<div class='admin-editor-input fix-adm-check-panel' data-tab-adm='design'> <span style='flex-basis: 100%;'>"+$('#text-checkboxcolor-q').html()+"</span> <div class='box-dabl-filed'> <input id='colorCheckborder' class='rangeadm' autocomplete='off' data-alpha='true' value='"+colorBorderCheck+"'> <input id='colorCheckborder1' class='rangeadm' data-alpha='true' value='"+colorCheck+"'> </div></div>";  
    
    createdElement = createdElement + "<div class='admin-editor-input fix-adm-check-panel' data-tab-adm='design'><span style='flex-basis: 100%;'>"+$('#text-checkborderwidth-q').html() +"</span><div class='box-dabl-filed'> <input id='admsizecheck' class='admin-filed-style-1' style='margin-right: 5px;' autocomplete='off' value='"+sizeCheck+"'>  <input id='admsizecheck2' class='admin-filed-style-1' autocomplete='off' value='"+sizeIcon+"'> </div> </div>";
    $('.admin-modal-box-col-1').append(createdElement);
    $('#colorCheckborder').wpColorPicker(colorOptions);
    $('#colorCheckborder1').wpColorPicker(colorOptions); 
    //checkbox size and border width
    if ( $(idElement).hasClass('checkbox-img') ) { 
        createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-fontsize-q').html()+"</span><input id='admfontsize' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('label .html-text-check-q').css('font-size')+"'></div> <div class='admin-editor-input' style='display: "+displayAdm+"'><span>"+$('#text-borderwidth-q').html()+"</span><input id='admcheckbordersize' class='admin-filed-style-1' autocomplete='off' value='"+borderWidthCheck+"'></div>";
        $('.admin-modal-box-col-1').append(createdElement);
    }
    //background color checkbox
    if ( $(idElement).hasClass('type-checkbox-element') ){
        createdElement ="<div class='admin-editor-input' data-tab-adm='design'> <span style='flex-basis: 100%;'>"+$('#text-backgroundcolor-q').html()+"</span> <input id='color-background-checkbox' class='rangeadm' autocomplete='off' data-alpha='true' value='"+$(idElement).find('.checkbox-fafa').css('background-color')+"'></div>";
        $('.admin-modal-box-col-1').append(createdElement);
        $('#color-background-checkbox').wpColorPicker(colorOptions);
        
    }
}

function selectFirstCheckbox(){
    //click ckeckbox
    let numberChecked = 0;
    $(idElement).find('input').each(function(){
        if ( $(this).prop('checked') ){ numberChecked++;}
    });
    if ( numberChecked === 0 ){  
        $(idElement).find('input:first').prop('checked' ,'checked'); 
    }
}

//chekcbox textarea
function checkboxtextaria(){
    var styleCheckbox = 'admin-editor-input requed-adm-q';
    var headingTextarea = '';
    if ( $(idElement).hasClass('type-checkbox-element') ) {
        styleCheckbox = styleCheckbox + ' checkbox-img-adm-1';
        headingTextarea = $('#text-checkboxstext-q').html();
    }
    else  { 
        styleCheckbox = styleCheckbox + ' checkbox-img-adm-2';
        headingTextarea = $('#text-checkboxstexthtml-q').html();
    }
    var createdElement = "<div class='"+styleCheckbox+"' data-tab-adm='setting'><span>"+$('#text-checkboxstexthtml-q').html()+"<span class='help-message-q q1'>?</span> </span> <textarea id='admInptCheck' class='admin-filed-style-1'></textarea></div>";  
    $('.admin-modal-box-col-1').append(createdElement); 
    var textVtextariaChecet = '';
    createdElement = createdElement = '';
    //array text checkbox
    $(idElement).closest('.form-element-q').find('label .html-text-check-q').each(function(){
        textVtextariaChecet = $(this).html()+'\r\n'; 
		if ( $(this).closest('label').prev('input').attr('date-rasschet') !== ''){ textVtextariaChecet = $(this).closest('label').prev('input').attr('date-rasschet')+'==='+textVtextariaChecet; }
		createdElement = createdElement + textVtextariaChecet;
    });
    $('#admInptCheck').html(createdElement);
    
}



//img in checkbox img
function checkboxtextariaIMG(){
    let createdElement = "<div class='admin-editor-input requed-adm-q checkbox-img-adm-3' data-tab-adm='setting'><span>"+$('#text-checkboxstexthtml-q').html()+"</span> <textarea id='admInptCheckIMG' class='admin-filed-style-1'></textarea></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $(idElement).closest('.form-element-q').find('label .img-checket').each(function(){
        let textVtextariaChecet = $(this).find('img').attr('src') + '\r\n';
        $('#admInptCheckIMG').append(textVtextariaChecet);
    });
}

//padding
function paddingfield(){
    var classField = '';
    var objectStyle = '';
    if( $(idElement).hasClass('type-input-element') || $(idElement).hasClass('type-data-element') || $(idElement).hasClass('type-email-element') || $(idElement).hasClass('type-phone-element') || $(idElement).hasClass('type-dropdawn-element') || $(idElement).hasClass('type-textarea-element') ) {
        if ( $(idElement).hasClass('type-textarea-element') || $(idElement).hasClass('type-dropdawn-element')  ) { 
            classField = 'admin-editor-input adm-padding-q padding-4-col'; 
        }
        else { 
            classField = 'admin-editor-input adm-padding-q padding-4-col';
        }
        objectStyle = '.style-element';
    }
    else {
        classField = 'admin-editor-input adm-padding-q padding-4-col';  
        objectStyle = 'span'; 
    }
    let createdElement = "<div class='"+classField+"' data-tab-adm='design'><span>"+$('#text-padding1-q').html()+"</span> <div class='wrap-block-margin-q'><input id='admpaddingleft' class='admin-filed-style-1' value='"+$(idElement).find(objectStyle).css('padding-left')+"'> <input id='admpaddingright' class='admin-filed-style-1' value='"+$(idElement).find(objectStyle).css('padding-right')+"'> <input id='admpaddingtop' class='admin-filed-style-1' value='"+$(idElement).find(objectStyle).css('padding-top')+"'><input id='admpaddingbottom' class='admin-filed-style-1' value='"+$(idElement).find(objectStyle).css('padding-bottom')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement);
}

//padding checkbox
function paddingcheckbox(){
    let object1 = $(idElement).find('.swap-checkbox-q');
    let object2 = $(idElement).find('.html-text-check-q');
    let object3 = $(idElement).find('label');
    let createdElement = '';
    if ( $(idElement).hasClass('type-checkbox-element') ) {
        createdElement = "<div class='admin-editor-input adm-padding-q adm-padding-2 width-uniq-1 padding-3-col' data-tab-adm='design'><span>"+$('#text-margin1-q').html()+"</span> <div class='wrap-block-margin-q'><input id='admpaddingleft' class='admin-filed-style-1' autocomplete='off' value='"+object1.css('padding-top')+"'> <input id='admpaddingright' class='admin-filed-style-1' autocomplete='off' value='"+object2.css('padding-left')+"'> <input id='admpaddingtop' class='admin-filed-style-1' autocomplete='off' value='"+object3.css('margin-bottom')+"'></div></div>";
    }
    $('.admin-modal-box-col-1').append(createdElement);
}

function colotextcheckbox(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-colortext-q').html()+"</span><div id='colortext'><input class='rangeadm' data-alpha='true' autocomplete='off' value='"+$(idElement).find('label .html-text-check-q').css('color')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colortext input').wpColorPicker(colorOptions);
}

//auto filling
function fillingField(){
    let createdElement = "<div id='input-separator' class='admin-editor-input separator-bottom-panel-q' data-tab-adm='setting'><div>"+$('#text-field-filling-q').html()+"</div><div class='separator-line'></div></div>";
    //status filling
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-filling-status-q').html()+"<span class='help-message-q q9'>?</span></span> <div id='a-filling-status'> <select class='admin-dropdown-style-1'>  <option data-val='disabled'>"+$('#text-disabled-q').html()+"</option> <option data-val='1'>"+$('#text-filling-1-q').html()+"</option> <option data-val='2'>"+$('#text-filling-2-q').html()+"</option> </select>  </div></div>";
    
    //class filling
    let classFilling = $(idElement).find('input').attr('data-filling');
    let statusFilling = $(idElement).find('input').attr('data-filling-a');
    createdElement = createdElement + "<div class='admin-editor-input fix-more-width' data-tab-adm='setting'><span>"+$('#text-field-filling-class-q').html()+"<span class='help-message-q q8'>?</span></span>  <input id='adm-input-filling' class='admin-filed-style-1 not-validation' autocomplete='off' value='"+classFilling+"' placeholder='class-1'> </div>";
    
    $('.admin-modal-box-col-1').append(createdElement);
    
    let valStatus = $('#a-filling-status').find('option[data-val="'+statusFilling+'"]').html();
    $('#a-filling-status').find('select').val(valStatus);
    
    //disabled
    var val = $('#a-filling-status').find('option:selected').attr('data-val');
    if ( val == 'disabled'){
        $('#adm-input-filling').closest('.admin-editor-input').addClass('not-active-field');
    }
    else { $('#adm-input-filling').closest('.admin-editor-input').removeClass('not-active-field'); }
}

function defoultOn(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-defoult-activated-q').html()+"</span> <div id='defoult-val-q'> <select class='admin-dropdown-style-1'><option data-val='no'>"+$('#text-no-q').html()+"</option> <option data-val='yes'>"+$('#text-yes-q').html()+"</option> </select></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    
    let val = $(idElement).attr('data-defoult');
    let selected = $('#defoult-val-q').find('option[data-val="'+val+'"]').html();
    $('#defoult-val-q').find('select').val( selected );
}

function defoultCheckboxVal(){
    let arrayCheckbox = $('#admInptCheck').text().split(/[\n\r]+/); 
    let allValue = "<option data-val='no'>"+$('#text-no-q').html()+"</option>";
    $.each(arrayCheckbox,function(index,value){
        if ( value !=='' ) { 
            let deleteSim = value.match( /^.*\={2}/);//remobe ==
            value = value.replace(deleteSim ,'');
            allValue = allValue + "<option data-val='no'>"+value+"</option>"; }
    });
    
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-defoult-checkbox-q').html()+"</span> <div id='defoult-val-q'> <select class='admin-dropdown-style-1'>"+allValue+"</select></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    
    let selected = $(idElement).find('input[date-defoult="checked"]').next('label').find('.html-text-check-q').text();
    if ( selected !=='' ){ $('#defoult-val-q').find('select').val( selected ); }
}



function disablefafa(){
    //disable lib
    if ( $('#disable-lib-fafa').attr('data-disable') === 'yes' ) {  
        if ( $(idElement).attr('data-style') == 'style1' ){
            let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span class='disable-lib-fafa-box'>"+$('.text-checkbox-disabled-fafa').html()+"</span></div>";
            $('.admin-modal-box-col-1').append(createdElement);
        }
    }
}

function listCalculator(){
    let listCalculator = '';
    $('#drag-drop-element').find('.type-itog-element').each(function(){
        listCalculator = listCalculator + '<option>'+$(this).attr('id')+' - '+$('#text-total-q').html()+'</option>';
    });
    return listCalculator;
}


function paypalsetting(){
    let setting = $(idElement).find('.text-paypal-q');

    let createdElement = "<div class='admin-editor-input documentation-adm' data-tab-adm='setting'> <span><a href='"+$('#text-link-paypal-q').html()+"' target='_blank'>"+$('#text-documentation-q').html()+"</a></span> </div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'> <span>"+$('#text-live-account').html()+"</span><input id='adm-paypal-live-a' class='admin-filed-style-1' autocomplete='off' value='"+setting.attr('data-live-account')+"'></div>";
    
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'> <span>"+$('#text-sandbox-account').html()+"</span><input id='adm-paypal-sandbox-a' class='admin-filed-style-1 not-validation' autocomplete='off' value='"+ setting.attr('data-sandbox-account')+"'></div>";

    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span class='style-heding-q'>"+$('#text-sandbox-mode').html()+"</span> <div id='sandbox-mode-p'> <select class='admin-dropdown-style-1'><option data-val='yes'>"+$('#text-sandbox-mode-on').html()+"</option> <option data-val='not'>"+$('#text-sandbox-mode-of').html()+"</option> </select></div></div>";
    //name item
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'> <span>"+$('#text-paypal-item-name-q').html()+"</span><input id='adm-paypal-name-item' class='admin-filed-style-1' autocomplete='off' value='"+setting.attr('data-item-name')+"'></div>";
    //lang 
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-lang-q').html()+"</span> <div id='paypal-language-q'> <select class='admin-dropdown-style-1'>";
    createdElement = createdElement + '<option  value="1">Danish</option> </option> <option  value="2">Dutch</option> <option value="3">English</option><option  value="20">English - UK</option>	<option  value="4">French</option> <option  value="5">German</option> <option  value="6">Hebrew</option>	<option  value="7">Italian</option>	<option  value="8">Japanese</option>	<option  value="9">Norwgian</option> <option  value="10">Polish</option><option  value="11">Portuguese</option><option  value="12">Russian</option><option  value="13">Spanish</option><option  value="14">Swedish</option><option  value="15">Simplified Chinese -China only</option><option  value="16">Traditional Chinese - Hong Kong only</option><option  value="17">Traditional Chinese - Taiwan only</option>	<option  value="18">Turkish</option>	<option  value="19">Thai</option>';
    createdElement = createdElement + "</select></div></div>";
    //valute
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-currency-q').html()+"</span> <div id='paypal-currency-q'> <select class='admin-dropdown-style-1'>";
    createdElement = createdElement + '<option  value="1">Australian Dollar - AUD</option><option  value="2">Brazilian Real - BRL</option><option  value="3">Canadian Dollar - CAD</option><option  value="4">Czech Koruna - CZK</option><option  value="5">Danish Krone - DKK</option>	<option  value="6">Euro - EUR</option><option  value="7">Hong Kong Dollar - HKD</option><option  value="8">Hungarian Forint - HUF</option>	<option  value="9">Israeli New Sheqel - ILS</option><option  value="10">Japanese Yen - JPY</option><option  value="11">Malaysian Ringgit - MYR</option>	<option  value="12">Mexican Peso - MXN</option><option  value="13">Norwegian Krone - NOK</option><option  value="14">New Zealand Dollar - NZD</option>	<option  value="15">Philippine Peso - PHP</option>	<option  value="16">Polish Zloty - PLN</option>	<option  value="17">Pound Sterling - GBP</option>	<option  value="18">Russian Ruble - RUB</option><option  value="19">Singapore Dollar - SGD</option>	<option  value="20">Swedish Krona - SEK</option><option  value="21">Swiss Franc - CHF</option><option  value="22">Taiwan New Dollar - TWD</option><option  value="23">Thai Baht - THB</option><option  value="24">Turkish Lira - TRY</option><option value="25">U.S. Dollar - USD</option>';
    createdElement = createdElement + "</select></div></div>";
    //price
    createdElement = createdElement + "<div class='admin-editor-input fix-adm-check-panel pay-price-adm' data-tab-adm='setting'><span>"+$('#text-price-q').html()+"<span class='help-message-q q13'>?</span></span> <div class='pay-two-field' id='paypal-price-q'><input id='adm-price-pay-custom-q' style='margin-right: 5px;' class='admin-filed-style-1' autocomplete='off'><select class='admin-dropdown-style-1'> <option value='not'>"+$('#text-no-q').html()+"</option> "+listCalculator()+"</select></div></div>";
    //number
    createdElement = createdElement + "<div class='admin-editor-input fix-adm-check-panel pay-price-adm' data-tab-adm='setting'><span>"+$('#text-number-pay-q').html()+"<span class='help-message-q q14'>?</span></span> <div class='pay-two-field' id='paypal-number-q'><input id='adm-number-pay-custom-q' style='margin-right: 5px;' class='admin-filed-style-1' autocomplete='off'><select class='admin-dropdown-style-1'> <option value='not'>"+$('#text-no-q').html()+"</option> "+listCalculator()+"</select></div></div>";
    //link return succes
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'> <span>"+$('#text-paypal-success-q').html()+"</span><input id='adm-paypal-return-succes' class='admin-filed-style-1' autocomplete='off' placeholder='http://example.com/succes' value='"+ setting.attr('data-url-success')+"'></div>";
    //link return cancel
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'> <span>"+$('#text-paypal-cancel-q').html()+"</span><input id='adm-paypal-return-cancel' class='admin-filed-style-1' autocomplete='off' placeholder='http://example.com/cancel' value='"+ setting.attr('data-url-cancel')+"'></div>";
    //separator
    createdElement = createdElement +"<div class='admin-editor-input separator-bottom-panel-q' data-tab-adm='setting'><div>"+$('#text-setting-no-payment-q').html()+"</div><div class='separator-line'></div></div>";

    
    
    $('.admin-modal-box-col-1').append(createdElement);
    //sand box mode on/of
    let selected = $('#sandbox-mode-p').find('option[data-val="'+setting.attr('data-senbox-mode')+'"]').html();
    $('#sandbox-mode-p').find('select').val( selected );
    
    //price
    let price = setting.attr('data-price');
    if ( price.match(/[^0-9\.]/g) ){ 
        let val = price+' - '+$('#text-total-q').html();
        $('#paypal-price-q').find('select').val( val );
    }
    else { $('#adm-price-pay-custom-q').val( price ); }
    
    //number
    let number = setting.attr('data-number');
    if ( number.match(/[^0-9\.]/g) ){ 
        let val = number+' - '+$('#text-total-q').html();
        $('#paypal-number-q').find('select').val( val );
    }
    else { $('#adm-number-pay-custom-q').val( number); }
    
    //lang
    let lang = setting.attr('data-lang');
    let val = $('#paypal-language-q').find('option[value='+lang+']').html();
    $('#paypal-language-q').find('select').find('option').each(function(){
        if ( $(this).html() == val ){$(this).prop('selected', true); }
    });
    
    //Currency
    let currency = setting.attr('data-currency');
    $('#paypal-currency-q').find('select').find('option').each(function(){
        if ( $(this).attr('value') == currency ){$(this).prop('selected', true); }
    });
    
}

function proStyleCheckbox(){
    if ( $(idElement).attr('data-warning') == '2' ) {
        let createdElement = "<div class='admin-editor-input warning-text-qq' data-tab-adm='design'><span class=''>"+$('#text-checkbox-pro-style').html()+"</span></div>";
        $('#stylePolzunok').closest('.admin-editor-input').after(createdElement);
        $(idElement).attr('data-warning', '0');
    }
}

function settingDatepicker(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-minvalue-q').html()+"</span><input id='min-timepicker' class='rangeadm admin-filed-style-1' autocomplete='off' value='"+ $(idElement).attr('data-min')+"'></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-maxvalue-q').html()+"</span><input id='max-timepicker' class='rangeadm admin-filed-style-1' autocomplete='off' value='"+$(idElement).attr('data-max')+"'></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-step-minute-q').html()+"</span><input id='step-timepicker' class='rangeadm admin-filed-style-1' autocomplete='off' value='"+$(idElement).attr('data-step')+"'></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
}

function colorPicker(){
    let createdElement = "<div class='admin-editor-input separator-bottom-panel-q' data-tab-adm='design'><div>"+$('#text-time-separator-q').html()+"</div><div class='separator-line'></div></div>";     
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-colortext-q').html()+"</span><div id='colortime1'><input autocomplete='off' data-alpha='true' value='"+$(idElement).attr('data-color-1')+"'></div></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-backgroundcolor-q').html()+"</span><div id='colortime2'><input autocomplete='off' data-alpha='true' value='"+$(idElement).attr('data-color-2')+"'></div></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-hoverbackground-q').html()+"</span><div id='colortime3'><input autocomplete='off' data-alpha='true' value='"+$(idElement).attr('data-color-3')+"'></div></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-hovercolor-q').html()+"</span><div id='colortime4'><input autocomplete='off' data-alpha='true' value='"+$(idElement).attr('data-color-4')+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#colortime1 input').wpColorPicker(colorOptions);
    $('#colortime2 input').wpColorPicker(colorOptions);
    $('#colortime3 input').wpColorPicker(colorOptions);
    $('#colortime4 input').wpColorPicker(colorOptions);
}

function fontTimepicker(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-fontsize-q').html()+"</span><input id='admplaceholdersize' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.wrap-time-picker-q').css('font-size')+"'></div>";
    createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-placeholdercolor-q').html()+"</span><div id='colortime5'><input autocomplete='off' data-alpha='true' value='"+$(idElement).find('.wrap-time-picker-q').css('color')+"'></div>";
    
    $('.admin-modal-box-col-1').append(createdElement);
    $('#colortime5 input').wpColorPicker(colorOptions);
}

function megaValidation(){
    $('.admin-editor-input[data-tab-adm="setting"]').each(function(){
        let input = $(this).find('input');
        fieldValidationSetting(input);
    });
}

function fieldValidationSetting(input){
    if ( !input.hasClass('not-validation') ){
        if ( input.val() === ''){ 
            input.addClass('error-setting-field-q');
            let id = input.attr('id');
            input.after('<label class="error-setting-field-text-q" for='+id+'>'+$('#text-error-q').html()+'</label>');
        }
        else{
            input.removeClass('error-setting-field-q');
            input.parent().find('.error-setting-field-text-q').remove();
        }
    }
}

$('.modalbox-admin-panel').on('keyup' , '.admin-editor-input[data-tab-adm="setting"] input', function(){
    fieldValidationSetting( $(this) );
});


function designFiedlSeparator(){
    let createdElement = "<div class='admin-editor-input separator-bottom-panel-q' data-tab-adm='design'><div>"+$('#text-design-separator-q').html()+"</div><div class='separator-line'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
}



//align
$('.modalbox-admin-panel').on('click', '.element-align-q i',  function(){
    if ( !$(this).closest('.swap-align-buttons').hasClass('align-element-2') ) {
        $(idElement).closest('.form-element-q').removeClass('align-left-q').removeClass('align-center-q').removeClass('align-right-q');
    }
    else { 
        $(idElement).closest('.form-element-q').removeClass('align-left-q2').removeClass('align-center-q2').removeClass('align-right-q2'); 
    }
    $(this).closest('.swap-align-buttons').find('.element-align-q').removeClass('element-align-active-q');
    $(this).parent().addClass('element-align-active-q');
    
    if ( $(this).closest('div').attr('id')==='left-button'){ 
        $(idElement).closest('.form-element-q').addClass('align-left-q').attr('data-align-box', 'align-left-q'); 
    }
    if ( $(this).closest('div').attr('id')==='center-button'){ 
        $(idElement).closest('.form-element-q').addClass('align-center-q').attr('data-align-box', 'align-center-q'); 
    }
    if ( $(this).closest('div').attr('id')==='right-button'){ 
        $(idElement).closest('.form-element-q').addClass('align-right-q').attr('data-align-box', 'align-right-q');
    }

    if ( $(this).closest('div').attr('id')==='left-button2'){ 
        $(idElement).closest('.form-element-q').addClass('align-left-q2').attr('data-align-box2', 'align-left-q2'); 
    }
    if ( $(this).closest('div').attr('id')==='center-button2'){ 
        $(idElement).closest('.form-element-q').addClass('align-center-q2').attr('data-align-box2', 'align-center-q2');
    }
    if ( $(this).closest('div').attr('id')==='right-button2'){ 
        $(idElement).closest('.form-element-q').addClass('align-right-q2').attr('data-align-box2', 'align-right-q2'); 
    }
});

//input style 2
$('.swap-admin-modalbox').on('focus', 'input, textarea',  function(){
    let field = $(this).closest('.form-element-q');
    //fix phone style 2
    field.closest('.form-main-element').find('.type-phone-element').each(function(){
       if ( $(this).find('input').val() ===''){ $(this).removeClass('style-qform-2-focus'); }
    });
    if ( field.hasClass('style-qform-2') ) {
        field.addClass('style-qform-2-focus');
    }
});

    
$('.swap-admin-modalbox').on('focusout', '.style-qform-2 input , .style-qform-2 textarea',  function(){
    if ($(this).val()==='') {  $(this).closest('.form-element-q').removeClass('style-qform-2-focus'); }
});

$('.modalbox-admin-panel').on('click', '.tab-display-ney-q, .tab-display-classik-q', function(e){
    
    $('.tab-display-ney-q, .tab-display-classik-q').removeClass('active-tab-adm');
    $(this).addClass('active-tab-adm');
    if ( $(this).hasClass('tab-display-classik-q') ){
        $('.modalbox-admin-panel').addClass('small-window-q classic-window-q');
    }
    else {
        $('.modalbox-admin-panel').removeClass('small-window-q classic-window-q');
    }
    if ( $(this).hasClass('tab-display-ney-q') ){
        $('.modalbox-admin-panel').addClass('new-window-q');
    }
    else {
        $('.modalbox-admin-panel').removeClass('new-window-q');
    }
    
});

//position scale
function positionScale(){
    let show = $(idElement).find('.polzet').attr('data-p-s'); 
    let createdElement = "<div class='admin-editor-input not-active-field' data-tab-adm='setting'><span>"+$('#text-scale-position-q').html()+"</span> <div id='position-scale'> <select class='admin-dropdown-style-1'><option data-val='top'>"+$('#text-top-q').html()+"</option> <option data-val='bottom'>"+$('#text-bottom-q').html()+"</option> </select></div></div>";
    $('.admin-modal-box-col-1').append(createdElement);
    $('#position-scale').find('option').each(function(){ 
        if ( $(this).attr('data-val') == show ) { 
            $(this).attr('selected', 'selected');
        }
    });
}

//style slider
function styleslider(){
    let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-height-q').html()+"</span><input id='adm-height-q' class='admin-filed-style-1' value='"+$(idElement).find('.polzet').css('height')+"'></div>";
    $('.admin-modal-box-col-1').append(createdElement);
    
    createdElement = "<div class='admin-editor-input' data-tab-adm='design'> <span>"+$('#text-borderradius-q').html()+"</span><input id='adm-border-radius-s' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.polzet').css('border-radius')+"'></div>";
    $('.admin-modal-box-col-1').append(createdElement);
    
    let val = '-22px';
    if ( $(idElement).find('.polzet').attr('data-sh')==='yes' || $(idElement).find('.polzet').attr('data-sh-2')==='yes' ) {
        val = $(idElement).find('.polzet').attr('data-m-s');
    }
    
    createdElement = "<div class='admin-editor-input not-active-field' data-tab-adm='design'> <span>"+$('#text-scale-margin-q').html()+"</span><input id='adm-scale-margin' class='admin-filed-style-1' autocomplete='off' value='"+ val +"'></div>";
    $('.admin-modal-box-col-1').append(createdElement);
}

function dateSetting(){
    //hide proshedshie dati
    let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='adm-setting-date-1' type='checkbox'><label for='adm-setting-date-1'></label><span>"+$('#text-hide-prosh-date-q').html()+"</span> </div></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    if ( $(idElement).attr('data-s-1')==='yes'){ $("#adm-setting-date-1").attr("checked","checked"); }
    
    //turn off weekends
    createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='adm-setting-date-2' type='checkbox'><label for='adm-setting-date-2'></label><span>"+$('#text-hide-weekends-date-q').html()+"</span> </div></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    if ( $(idElement).attr('data-s-2')==='yes'){ $("#adm-setting-date-2").attr("checked","checked"); }
}


$('.admin-form-q').on('click', '.form-element-q', function(e){
    if ( $(this).attr('data-tip')!='construction-block' &&  $(this).attr('data-tip')!='construction-block-2' ) {
        idElement = '#' + $(this).attr('id');
        if ( !$('#drag-drop-element').hasClass('preview-form') ) {
            //class this element
            $('.form-element-q').removeClass('active-edit-q');
            $(idElement).addClass('active-edit-q');
            let coordinat = this.getBoundingClientRect().top;
            let heightWindow = $(window).height(); //height window
            let heightWindow2 = ( $(window).height() / 100) * 60 ; //60% height window
            let heightWindow3 = ( $(window).height() / 100) * 40 ; //40% height window

            //if height monitor > 550px
            if ( heightWindow > 700 && !$('.modalbox-admin-panel').hasClass('classic-window-q') ){
                $('.modalbox-admin-panel').removeClass('small-window-q').addClass('new-window-q');
                coordinat = Number(coordinat) + 100;
                let coordinatPx = heightWindow2 + 'px';
                
                //scroll
                let poz = $(this).offset().top - heightWindow3;
                $('html, body').animate({
                    scrollTop: poz
                }, 500);
                $('.modalbox-admin-panel').attr('position', coordinatPx);
                
            }
            //if height monitor < 550px
            else  {
                $('.modalbox-admin-panel').addClass('small-window-q').removeClass('new-window-q');
            }
            modalpanel(idElement);
        }
    }
});
function modalpanel(){
    setTimeout(function(){ //fix bug iris
        clearmodaladmin(); 
        
        if ( $('.modalbox-admin-panel').hasClass('small-window-q') ){
            $('.modalbox-admin-panel').css({'display' : 'flex'});
        }
        else {
            let coordinat = $('.modalbox-admin-panel').attr('position');
            $('.modalbox-admin-panel').css({'display' : 'flex', 'top' : coordinat });
        }
        
        //id field
        idQ(idElement);
        if ( $(idElement).hasClass('type-custom-text-element') ) {
            //show size in 2 column
            $(idElement).closest('.form-element-q').attr('data-sizes');
            let createdElement = "<div class='admin-editor-input' data-tab-adm='setting'><span>"+$('#text-fieldwidth-q').html()+"</span><input id='admInpt1' class='admin-filed-style-1' value='"+$(idElement).closest('.form-element-q').attr('data-sizes')+"'></div>";
            $('.admin-modal-box-col-2').append(createdElement); 
            
            //hide in 2 column
            createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='admInpt03' type='checkbox'><label for='admInpt03'></label><span>"+$('#text-defaultnone-q').html()+"</span><span class='help-message-q q2'>?</span> </div>";
            $('.admin-modal-box-col-2').append(createdElement); 
            if ( $(idElement).attr('data-none')==='none'){ $("#admInpt03").attr("checked","checked"); }
        }
        //universal 1
        if ( !$(idElement).hasClass('type-custom-text-element') && !$(idElement).hasClass('type-submit-element')  ) {
            if ( !$(idElement).hasClass('type-itog-element') && !$(idElement).hasClass('type-paypal-element') ){
                //heading
                headingQ();
            }
            //size
            if ( !$(idElement).hasClass('type-dropdawn-element') && !$(idElement).hasClass('type-checkbox-element') ) {
                fieldWidth();
            }
        }
        //input editor
        if( $(idElement).hasClass('type-input-element') || $(idElement).hasClass('type-email-element') || $(idElement).hasClass('type-phone-element') ) {
            designFiedlSeparator();
            typeStyle();
            plakeholderQ(); 
            customcolorplace();
            colorinput();
            customcolor();
            borderradiusinput();
            heightinput();
            customFafa();
            colorfafa();
            paddingfield();
            if ( $(idElement).hasClass('type-input-element') ) {
                validationfield();
                fillingField();
            }
            //copy style
            copystyle();
        }
        //phone  editor
        if( $(idElement).hasClass('type-phone-element') ) {
            mask();
        }
        //time picker
        if( $(idElement).hasClass('type-timepicker-element') ) {
            designFiedlSeparator();
            typeStyle();
            fontTimepicker();
            colorinput();
            customcolor();
            borderradiusinput();
            heightinput();
            customFafa();
            colorfafa();
            paddingfield();
            colorPicker();
            //copy style
            copystyle();
            settingDatepicker();
            //disable padding
           $('#admpaddingleft').closest('.admin-editor-input').remove();
        }
        //ckeckbox editor
        if($(idElement).hasClass('type-checkbox-element')) {
            $('.modalbox-admin-panel').addClass('modalbox-admin-panel img-checked-modalbox') ;
            designFiedlSeparator();
            typeStyle();
            //disable fa fa lib
            disablefafa();
            checkboxtextaria();
            fontsizefiled();
            colotextcheckbox();
            paddingcheckbox();
            alignbuttom();
            combinationSetting();
            //radio buttons
            let createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='admInptRadio' type='checkbox'><label for='admInptRadio'></label><span>"+$('#text-radiobuttons-q').html()+"</span></div>";
            createdElement = createdElement + "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'><input id='admCheckalign' type='checkbox' class='admin-editor-input'><label for='admCheckalign'></label><span>"+$('#text-horizontlal-q').html()+"</span></div>";
            $('.admin-modal-box-col-1').append(createdElement); 
            if ($(idElement).attr('data-radio') === 'yes'){ 
                $("#admInptRadio").attr("checked","checked");
            }
            if ($(idElement).attr('data-align') === 'horizontal'){ 
                $("#admCheckalign").attr("checked","checked");
            }
            defoultCheckboxVal();
            //warning pro style
            proStyleCheckbox();
        }
        //textarea-editor
        if ( $(idElement).hasClass('type-textarea-element') )  {
            designFiedlSeparator();
            typeStyle();
            plakeholderQ(); 
            customcolorplace();
            let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-height-q').html()+"</span><input id='admheught' class='admin-filed-style-1' value='"+$(idElement).find('textarea').css('height')+"'></div>";
            $('.admin-modal-box-col-1').append(createdElement);
            colorinput();
            customcolor();
            borderradiusinput();
            paddingfield();
            //copy style
            copystyle();
            //remove setting for style2
            if ( $(idElement).attr('data-style') === 'style2' ) { $('#customcolor2').closest('.admin-editor-input').remove(); }
        }
        //custom text editor
        if ( $(idElement).hasClass('type-custom-text-element') )  {
            //html editor
            let createdElement = "<div id='htmlQ' class='admin-editor-input admin-editor-custom adm-fix-css' data-tab-adm='setting'><textarea id='customtextqQ' name='customtextqQ'>"+$(idElement).find('div').html()+"</textarea></div>";
            $('.admin-modal-box-col-1').append(createdElement); 
            //dynamix wp_editor
            wp.editor.remove( 'customtextqQ', wpEditorCustomHtml );        
            wp.editor.initialize( 'customtextqQ', wpEditorCustomHtml );
            //button full size
            let buttonFullSize = '<div class="custom-size-button-q"><input type="checkbox" id="custom-size-button-q"><label for="custom-size-button-q">'+$('#text-full-size-q').html()+'<i class="fa fa-arrows-altq"></i></label></div>';
            $('.insert-media').after(buttonFullSize);
            //class for link tool
            $('.admin-editor-custom').find('.mce-i-link').closest('.mce-widget').attr('data-link-q', 'yes');
        }
        //total editor
        if ( $(idElement).hasClass('type-itog-element') ) {
            //arifmetic editor
            let createdElement = "<div id='itograsschet' class='admin-editor-input' data-tab-adm='setting'><span class='warning-adm'>"+$('#text-totaltextwarning-q').html()+"</span><span>"+$('#text-totaltext-q').html()+"<span class='help-message-q q4'>?</span></span><textarea id='ItogTextaarea' name='ItogTextaarea' placeholder='"+$('#text-exampletotal-q').html()+": [Field43q1] + [Field43q2] + ([Field43q3] - [Field43q4])'>"+$(idElement).attr('data-kalkulation')+"</textarea></div>";
            //html editor
            createdElement = createdElement + "<div class='admin-editor-input' id='itograsschet2' data-tab-adm='setting'><span>"+$('#text-totaltext2-q').html()+"</span><textarea id='itograsschethtml' name='itograsschethtml'>"+$(idElement).find('div').html()+"</textarea></div>";
            $('.admin-modal-box-col-1').append(createdElement); 
            wp.editor.remove( 'itograsschethtml', wpEditorTotal );        
            wp.editor.initialize( 'itograsschethtml', wpEditorTotal );
            //rounding
            rounding();
            //warning total
            createdElement = '<div class="admin-editor-input warning-text-qq" data-tab-adm="setting"><span class="help-mail">'+$('#text-text-total-warning-q').html()+"</span></div>";
            $('.admin-modal-box-col-2').append(createdElement); 
            
            //validation total
            validationCalculator( $('#ItogTextaarea') );
            
            //total hide for empty field
            createdElement = "<div class='admin-editor-input admin-check-style-1' data-tab-adm='setting'> <input id='hide-not-full-val' type='checkbox'><label for='hide-not-full-val'></label><span>"+$('#text-total-final-q').html()+"</span><span class='help-message-q q12'>?</span> </div></div></div>";
            $('.admin-modal-box-col-1').append(createdElement); 
            if ( $(idElement).attr('data-hide-total')==='yes' ){ $("#hide-not-full-val").attr("checked","checked"); }
            
            //class for link tool
            $('#itograsschet2').find('.mce-i-link').closest('.mce-widget').attr('data-link-q', 'yes');
        }
        //dropdown editor
        if ( $(idElement).hasClass('type-dropdawn-element') ) { 
            designFiedlSeparator();
            typeStyle();
            borderdropdown();
            let createdElement = "<div class='admin-editor-input option-text-q' data-tab-adm='setting'><span>"+$('#text-optiopns-q').html()+"<span class='help-message-q q3'>?</span></span> <textarea id='admInptSelect'></textarea></div>";
            //options editor
            $('.admin-modal-box-col-1').append(createdElement); 
            //array option
            $(idElement).closest('.form-element-q').find('option').each(function(){
                var textVtextariaChecet = $(this).html() + '\r\n';
                if ( $(this).attr('date-rasschet') !== ''){ textVtextariaChecet = $(this).attr('date-rasschet')+'==='+textVtextariaChecet; }
                if ( $(this).attr('data-selected') === 'yes'){ textVtextariaChecet = $(this).attr('date-rasschet')+'!='+textVtextariaChecet; }
                $('#admInptSelect').append(textVtextariaChecet);
            });
            selectoptions();
            heightinput();
            paddingfield();
            //heading, width, hide,
            combinationSetting();
            //copy style
            copystyle();
        }
        //date editor
        if ( $(idElement).hasClass('type-data-element') ) {
            designFiedlSeparator();
            typeStyle();
            plakeholderQ(); 
            customcolorplace(); 
            colorinput();
            customFafa();
            customcolor();
            borderradiusinput();
            heightinput();
            colorfafa();
            colordate();
            paddingfield();
            //copy style
            copystyle();
            //lang
            dateLang();
            dateSetting();
        }
        //upload file editor
        if ($(idElement).hasClass('type-upload-element')) {
            designFiedlSeparator();
            textbutton();
            sendfileqform();
            borderradiusinput();
            colorssubmit();
            colorfafa();
            customcolorhover();
        }
        //range editor
        if ($(idElement).hasClass('type-range-element'))  {
            designFiedlSeparator();
            typeStyle();
            sliderField();
            sliderColor1();  
            sliderColor2(); 
            sliderColor3(); 
            sliderColor4();
            styleslider();
            scale();
            scaleFull();
            positionScale();
            if ( $(idElement).find('.polzet').attr('data-sh')==='yes' || $(idElement).find('.polzet').attr('data-sh-2')==='yes' ) {
                $('.admin-modal-box-col-1 .not-active-field').removeClass('not-active-field');
            }
        }
        //submit editor
        if ($(idElement).hasClass('type-submit-element'))  {
            textbutton();
            fieldWidth();
            alignbuttom();
            typeStyle();
            colorssubmit();
            borderradiusinput();
            paddingfield();
            fullsizesubmit();
            customcolorhover();
            disableStyleField();
        }
        //captcha editor
        if ($(idElement).hasClass('type-captcha-element'))  {
            designFiedlSeparator();
            //size
            let createdElement = "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-borderwidth-q').html()+"</span><input id='admcaptchaborderwidth' class='admin-filed-style-1' value='"+$(idElement).find('input.pl-form-q').css('border-top-width')+"'> </div>";
            //border radius
            createdElement = createdElement+ "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-borderradius-q').html()+"</span><input id='admcaptchaborderradius' class='admin-filed-style-1' value='"+$(idElement).find('input.pl-form-q').css('border-top-right-radius')+"'> </div>";
            //border color
            createdElement = createdElement + "<div class='admin-editor-input' data-tab-adm='design'><span>"+$('#text-bordercolor-q').html()+"</span><div id='colorcaptcha'><input class='rangeadm' data-alpha='true' value='"+$(idElement).find('input.pl-form-q').css('border-top-color')+"'></div></div>";
            $('.admin-modal-box-col-1').append(createdElement);
            $('#colorcaptcha input').wpColorPicker(colorOptions);
        }
        //privacy editor
        if ( $(idElement).hasClass('type-privacy-element') )  {
            designFiedlSeparator();
            requedField();
            hideField(); 
            typeStyle();
            //disable fa fa lib
            disablefafa();
            let createdElement = "<div id='text-privat-pol' class='admin-editor-input admin-editor-custom adm-fix-css' data-tab-adm='setting'><span></span><textarea id='privacyelement' name='privacyelement' class='admin-editor-input'>"+$(idElement).find('.html-text-check-q').html()+"</textarea></div>";
            $('.admin-modal-box-col-1').append(createdElement); 
            //html editor
            wp.editor.remove( 'privacyelement', wpEditorPrivacy );        
            wp.editor.initialize( 'privacyelement', wpEditorPrivacy );
            //style checkbox
            var sizeCheck = $(idElement).find('.checkbox-qform').css('width');
            var sizeIcon = '';
            if ( $(idElement).attr('data-style')==='style1') {
                sizeIcon = $(idElement).find('.checkbox-fafa i').css('width'); 
            }
            else { 
                sizeIcon = $(idElement).find('.checkbox-fafa i').css('font-size'); 
            }
            var colorBorderCheck = $(idElement).find('.checkbox-qform').css('border-top-color');
            var colorCheck = $(idElement).find('.checkbox-fafa i').css('color');
            var classMoreSetting = 'admin-editor-input';
            createdElement ="<div class='admin-editor-input fix-adm-check-panel' data-tab-adm='design'>  <span style='flex-basis: 100%;'>"+$('#text-checkboxcolor-q').html()+"</span> <div class='box-dabl-filed'> <input id='colorCheckborder' class='rangeadm' autocomplete='off' data-alpha='true' value='"+colorBorderCheck+"'> <input id='colorCheckborder1' class='rangeadm' data-alpha='true' value='"+colorCheck+"'> </div>"; 
            $('.admin-modal-box-col-1').append(createdElement);
            $('#colorCheckborder').wpColorPicker(colorOptions);
            $('#colorCheckborder1').wpColorPicker(colorOptions); 
            //size checkbox
            createdElement = "<div class='admin-editor-input fix-adm-check-panel' data-tab-adm='design'> <span>"+$('#text-checkborderwidth-q').html()+"</span> <div class='box-dabl-filed'>  <input id='admsizecheck' class='admin-filed-style-1' style='margin-right: 5px;' autocomplete='off' value='"+sizeCheck+"'>"; 
            
            createdElement = createdElement + "<input id='admsizecheck2' class='admin-filed-style-1' autocomplete='off' value='"+sizeIcon+"'> </div> </div> </div>";
            $('.admin-modal-box-col-1').append(createdElement);

            //boorder check
            createdElement = "<div class='admin-editor-input' data-tab-adm='design'> <span>"+$('#text-borderwidth-q').html()+"</span><input id='admcheckbordersize' class='admin-filed-style-1' autocomplete='off' value='"+ $(idElement).find('.checkbox-qform').css('border-top-width')+"'></div>";
            $('.admin-modal-box-col-1').append(createdElement); 
            //padding
            createdElement = "<div class='admin-editor-input adm-padding-q adm-padding-2 padding-3-col' data-tab-adm='design'><span>"+$('#text-margin3-q').html()+"</span><div class='wrap-block-margin-q'><input id='admpaddingleft' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.swap-checkbox-q').css('padding-top')+"'> <input id='admpaddingright' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('.html-text-check-q').css('padding-left')+"'> <input id='admpaddingtop' class='admin-filed-style-1' autocomplete='off' value='"+$(idElement).find('label').css('margin-bottom')+"'></div></div>";
            $('.admin-modal-box-col-1').append(createdElement);
            
            //background-color checkbox
            createdElement ="<div class='admin-editor-input' data-tab-adm='design'> <span style='flex-basis: 100%;'>"+$('#text-backgroundcolor-q').html()+"</span> <input id='color-background-checkbox' class='rangeadm' autocomplete='off' data-alpha='true' value='"+$(idElement).find('.checkbox-fafa').css('background-color')+"'></div>";
            $('.admin-modal-box-col-1').append(createdElement);
            $('#color-background-checkbox').wpColorPicker(colorOptions);
            //defoult on
            defoultOn();
            
            //class for link tool
            $('.admin-editor-custom').find('.mce-i-link').closest('.mce-widget').attr('data-link-q', 'yes');
        }  
        //pay pal editor
        if ( $(idElement).hasClass('type-paypal-element') )  {
            paypalsetting();
        }
        //universal field 2
        if ( !$(idElement).hasClass('type-itog-element') && !$(idElement).hasClass('type-custom-text-element') && !$(idElement).hasClass('type-submit-element') && !$(idElement).hasClass('type-privacy-element') && !$(idElement).hasClass('type-dropdawn-element') && !$(idElement).hasClass('type-checkbox-element') && !$(idElement).hasClass('type-captcha-element') && !$(idElement).hasClass('type-paypal-element') ) {
            //required
            requedField();
        }
        if ( !$(idElement).hasClass('type-custom-text-element') && !$(idElement).hasClass('type-privacy-element') && !$(idElement).hasClass('type-dropdawn-element') && !$(idElement).hasClass('type-checkbox-element') ) {
            //default hide
            hideField();
        }
        //cusmom class
        customclass();
        //duplicate
        let createdElement = "<div id='duplicate-element' class='admin-editor-input dublicate-button'><i class='fa fa-cloneq'></i>"+$('#text-duplicate-q').html()+"</div>";
        //remove
        createdElement = createdElement + "<div id='remove-element' class='admin-editor-input remove-button-q'>"+$('#text-remove-q').html()+"</div>";
        $('.admin-modal-box-col-2').append(createdElement); 
        
        //sorting field
        sortingField();
        
        //validation all setting
        megaValidation();
        
        //click to first tab
        if ( $(idElement).attr('data-tab-style') !='yes' ) {
            $('.tab-setting-field-q').trigger('click');
        }
        else {
            $(idElement).attr('data-tab-style', 'not');
            $('.tab-design-field-q').trigger('click');
        }
        
        //activ tab disaply
        if ( !$('.modalbox-admin-panel').hasClass('classic-window-q')  ){
            $('.tab-display-ney-q').addClass('active-tab-adm');
        }
        else {
            $('.tab-display-classik-q').addClass('active-tab-adm');
        }
        
    },100);
}



//second datapicker window
function datapiker() {
    $('.type-data-element').each(function(){
        let setting_1 = 0;
        if ( $(this).attr('data-s-1') =='not' ){ setting_1 = null; }
        let setting_2 = $(this).attr('data-s-2');
        
        let datacolor1 = $(this).find('input').attr('data-colorsw');
        let datacolor2 = $(this).find('input').attr('data-colorsw2');
        let datacolor3 = $(this).find('input').attr('data-colorsw3');
        
        $(this).find('input').datepicker({//date table call
            beforeShow: function(input, inst) {
                let datacolor1 = $(this).attr('data-colorsw');
                let datacolor2 = $(this).attr('data-colorsw2');
                let datacolor3 = $(this).attr('data-colorsw3');
                //before action
                $('#ui-datepicker-div').addClass('qdatapicker').attr('data-id-field', $(this).closest('.type-data-element').attr('id') );
                $('#ui-datepicker-div').find('.ui-datepicker-header').css('background-color', datacolor1) ;
                //color of setting
                setTimeout(function(){
                    $('.ui-datepicker-header').css({'background-color' : datacolor1 , 'color' : datacolor2 }).find('.ui-corner-all').css('color' ,datacolor2 ); 
                    $('.ui-datepicker-calendar a').css({'color' : datacolor3}); 
                },30);
                if ( $(idElement).hasClass('type-data-element') ) { modalpanel(); }
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



function activateUpdateSlider(){
    $('.type-range-element').each(function(){ 
        var element = $(this).find('.polzet');
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
                let element = $(this);
                let color1 = element.attr('data-color1');
                let color2 = element.attr('data-color2');
                let color3 = element.attr('data-color3');
                let color4 = element.attr('data-color4');
                if (ui.value !==0){ 
                    $(this).find('span').html("<div class='tumbler-q-slider show-informer' style='color: "+color4+";'>" + ui.value + "</div>"); 
                } 
                else { 
                    $(this).find('span').html("<div class='tumbler-q-slider' style='color: "+color4+";'>" + ui.value + "</div>"); 
                }  
            }   
        });
        //add sclae in range
        if ( element.attr('data-sh')==='yes' || element.attr('data-sh-2')==='yes' ) {
            $(this).find('.rangeotm').remove();
            let slider = $(this).find('.polzet');
            let top = slider.attr('data-m-s');
            if ( element.attr('data-sh')==='yes' && element.attr('data-sh-2')==='not' ) {
                if ( minQ!=='' && maxQ!=='' ){
                    slider.addClass('scale-q');
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

//write editing data
$('.modalbox-admin-panel').on('input keyup', function(e) {
    //replace special symbols
    $('.modalbox-admin-panel input').each(function(){ 
        if ( $(this).attr('id') != 'adm-paypal-return-succes' && $(this).attr('id') != 'adm-paypal-return-cancel'){
            let validation = $(this).val().replace(/</g,'').replace(/>/g, '').replace(/"/g, '').replace(/[/]/g, '').replace(/;/g, '').replace(/[|]/g, '').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&/g, '');
            $(this).val(validation);
        }
    }); 
    //construction
    if ( $(idElement).hasClass('box-construction-q') ){
        //width
        $(idElement).attr('data-sizeq' , $('#admcontsrSize').val() ).css('width', $('#admcontsrSize').val() );
        //padding
        let strParams = $('#admpaddingleft').val() + '|' + $('#admpaddingright').val() + '|' + $('#admpaddingtop').val() + '|' + $('#admpaddingbottom').val();
        $(idElement).attr('data-padding', strParams);
        //margin
        strParams = $('#marginleft').val() + '|' + $('#marginright').val() + '|' + $('#margintop').val() + '|' + $('#marginbottom').val();
        $(idElement).attr('data-margin', strParams);
        //custom class
        $(idElement).attr('data-custum', $('#admcustomclass').val() );
    }
    //tabs
    if ( $(idElement).hasClass('tab-box-q') ){
        //text
        idElement.find('span').html( $('#admheadingtabs').val() );
        //custom class
        var customclass = $('#admcustomclasstab').val().replace(/</g,'').replace(/>/g, '').replace(/'/g, '').replace(/"/g, '').replace(/[/]/g, '').replace(/;/g, '').replace(/[|]/g, '').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&/g, '');
        idElement.attr('data-custum', customclass );
        //font-size
        idElement.css('font-size', $('#tabfontsize').val() );
        //border width and radius and padding
        idElement.css({'border-width' : $('#tabborderwidth').val(), 'border-radius' : $('#tabborderradius').val() , 'padding-left' :  $('#admpaddingleft').val(), 'padding-right' :  $('#admpaddingright').val(), 'padding-top' :  $('#admpaddingtop').val(), 'padding-bottom' : $('#admpaddingbottom').val() });
        //style
        var styletab = $('#styletab').find('option:selected').attr('data-val');
        if ( styletab === 'style1') { idElement.addClass('tab-style-1').removeClass('tab-style-2').css({'border-radius' : '0px', 'padding-left' : '10px', 'padding-right' : '10px' }); }
        if ( styletab === 'style2') { idElement.addClass('tab-style-2').removeClass('tab-style-1').css({'border-radius' : '100px', 'padding-left' : '15px',  'padding-right' : '15px' }); }
        
    }
    //all field
    if ( ! $(idElement).hasClass('tab-box-q') ){
        //heading
        if ( !$(idElement).hasClass('type-submit-element') && !$(idElement).hasClass('type-itog-element') && !$(idElement).hasClass('type-custom-text-element') ){ 
            $(idElement).find('.heading-field-q').html( $('#admInpt00').val() ).attr('data-font' , $('#admsizeheding').val() ).css({'font-size' : $('#admsizeheding').val(), 'line-height' : $('#admsizeheding').val(), 'margin-bottom' : $('#heading-margin-bottom').val(), 'font-weight' : $('#field-weight select').val() });
        }
        //width field, font size
        $(idElement).css('width', $('#admInpt1').val() ).attr({'data-sizes' : $('#admInpt1').val(), 'data-custum' : $('#admcustomclass').val() });
        
        //input and date field and email
        if ( $(idElement).hasClass('type-input-element') || $(idElement).hasClass('type-data-element') || $(idElement).hasClass('type-email-element') || $(idElement).hasClass('type-phone-element')  || $(idElement).hasClass('type-timepicker-element') ){ 
            //placeholder. font size, fa fa size
            $(idElement).attr('data-validation', $('#validation-type option:selected').attr('data-val') ).find('input').attr('placeholder', $('#admInpt0').val() ).css({ 'font-size' : $('#admplaceholdersize').val() }).closest(idElement).find('.fa-icons-q i').css({ 'font-size' : $('#admplaceholdersize').val() });
            
            //custom class2
            $(idElement).attr('data-custum-2', $('#admcustomclass-2').val() );
            
            //filing
            let filling = $('#a-filling-status').find('option:selected').attr('data-val');
            if ( $(idElement).hasClass('type-input-element') ) {
                //filling class validation
                let validationFilling = $('#adm-input-filling').val().replace(/\s/g,'').replace(/\./g, '');
                $('#adm-input-filling').val(validationFilling);
            }
            
            //border radius, width, height
            $(idElement).attr({
                'data-border-radius' : $('#admborderinput').val(),
                'data-border-width' : $('#admborderinputsize').val() 
            }).find('input').css({
                'border-radius' : $('#admborderinput').val(), 
                'border-width' : $('#admborderinputsize').val(), 
                'height' : $('#adminputheight').val(), 
                'padding-left' : $('#admpaddingleft').val(), 
                'padding-right' : $('#admpaddingright').val(), 
                'padding-top' : $('#admpaddingtop').val(), 
                'padding-bottom' : $('#admpaddingbottom').val() 
            }).attr({
                'data-filling' : $('#adm-input-filling').val(),
                'data-filling-a' : filling,
            });
            
            if ( filling == 'disabled'){
                $('#adm-input-filling').closest('.admin-editor-input').addClass('not-active-field');
            }
            else {
                $('#adm-input-filling').closest('.admin-editor-input').removeClass('not-active-field'); 
            }
        }
        
        //phone
        if ( $(idElement).hasClass('type-phone-element') ){ 
            //activ mask
            let activ = $('#activate-mask-q').prop('checked');
            if ( activ === true ){
                //mask
                let mask = $('#adm-mask-q').val();
                let placeholder = mask.replace(/[9]/g,'_'); 
                $(idElement).find('input').mask( mask ).attr({'data-mask' :  mask , 'data-mask-a' : 'yes', 'placeholder' : placeholder});
                //hide placeholder
                $('#admInpt0').closest('.admin-editor-input').addClass('not-active-field');
                $('#adm-mask-q').closest('.admin-editor-input').removeClass('not-active-field');
                $(idElement).addClass('mask-p-q');//for style 2
            }
            else { 
                $(idElement).find('input').attr({'data-mask-a' : 'not'});
                //show placeholder
                $('#admInpt0').closest('.admin-editor-input').removeClass('not-active-field');
                $('#adm-mask-q').closest('.admin-editor-input').addClass('not-active-field');
                $(idElement).find('input').unmask().val('');
                $(idElement).addClass('mask-p-q'); //for style 2
            }
            let style = $('#stylePolzunok').find('option:selected').attr('data-val');
            if ( style ==='style2' ){ $(idElement).find('input').attr('placeholder', ''); }
        }
        //date picker
        if ( $(idElement).hasClass('type-data-element') ) {
            let lang = $('#date-lang').find('option:selected').attr('data-val');
            $(idElement).attr('data-lang', lang);
            
            if ( $('#adm-setting-date-1').prop('checked') ){ 
                $(idElement).attr('data-s-1', 'yes');
            }
            else { $(idElement).attr('data-s-1', 'not'); }
            
            if ( $('#adm-setting-date-2').prop('checked') ){ 
                $(idElement).attr('data-s-2', 'yes');
            }
            else { $(idElement).attr('data-s-2', 'not'); }
            
            //update 
            $('.hasDatepicker').removeClass('hasDatepicker');
            datapiker();
        }
        //time picker
        if ( $(idElement).hasClass('type-timepicker-element') ) {
            $(idElement).attr({
                'data-min' : $('#min-timepicker').val(), 
                'data-max' : $('#max-timepicker').val(), 
                'data-step' : $('#step-timepicker').val() 
            }).find('.wrap-time-picker-q').css('font-size', $('#admplaceholdersize').val() );
        }
        //textarea field
        if ( $(idElement).hasClass('type-textarea-element')){
            $(idElement).attr({'data-border-radius' : $('#admborderinput').val(), 'data-border-width' : $('#admborderinputsize').val() }).find('textarea').attr('placeholder', $('#admInpt0').val() ).css({ 'font-size' : $('#admplaceholdersize').val() });
            $(idElement).find('textarea').css({
                'border-radius' : $('#admborderinput').val(),
                'border-width' : $('#admborderinputsize').val(),
                'height' : $('#admheught').val(), 
                'padding-left' : $('#admpaddingleft').val(), 
                'padding-right' : $('#admpaddingright').val(), 
                'padding-top' : $('#admpaddingtop').val(), 
                'padding-bottom' : $('#admpaddingbottom').val() 
            });
            //style 2 edit heading
            let style = $(idElement).attr('data-heading-style-2');
            if ( style ==='style1' ){ 
                $(idElement).find('.heading-field-q').css('margin-bottom', '5px'); 
                $(idElement).attr('data-heading-style-2' , 'none');
            }
            if ( style ==='none' ){ 
                $(idElement).find('.heading-field-q').css('top', $('#heading-margin-bottom').val() ); 
            }
            //custom class
            $(idElement).attr('data-custum-2', $('#admcustomclass-2').val() );
        }
        
        //checkbox and privacy field
        if ( $(idElement).hasClass('type-checkbox-element') || $(idElement).hasClass('type-privacy-element') ){ 
            var scale = $('#admCheckalign').prop('checked');
            if ( scale === true ){
                $(idElement).attr('data-align', 'horizontal').find('.swap-checkbox-q').addClass('gorizontal-align');
            }
            else { 
                $(idElement).attr('data-align', 'vertical').find('.swap-checkbox-q').removeClass('gorizontal-align'); 
            }
            //font size , margin
            $(idElement).find('label .html-text-check-q').css({'font-size' : $('#admfontsize').val() , 'padding-left' : $('#admpaddingright').val() });
            $(idElement).find('label').css({ 'margin-bottom' : $('#admpaddingtop').val() });
            //size checkbox
            var sizecheck = $('#admsizecheck').val();
            $(idElement).find('.checkbox-qform').css({'width' : sizecheck, 'height' : sizecheck, 'min-width' : sizecheck, 'border-width' : $('#admcheckbordersize').val() }).find('.checkbox-fafa i').css({'font-size': $('#admsizecheck2').val() });
            $(idElement).find('.swap-checkbox-q').css('padding-top', $('#admpaddingleft').val() );
            //radio buttons
            if ( $('#admInptRadio').prop("checked") ) {
                var sizeradibutton = $(idElement).find('.checkbox-qform').css('width');
                $(idElement).find('input').each(function(){
                    $(this).attr({type: "radio", name: "radio"+$(idElement).attr('id') }); 
                }); 
                $(idElement).attr('data-radio', 'yes').addClass('radio-checket-q').find('.checkbox-fafa i').css({
                    'background-color': $(idElement).find('.checkbox-qform i').css('color') , 
                    'width': $('#admsizecheck2').val(), 
                    'height' : $('#admsizecheck2').val() 
                });
            }
            //standart checkbox
            else { 
                $(idElement).find('input').each(function(){
                    $(this).attr({type: "checkbox" }); 
                });
                if ( $(idElement).attr('data-style')==='style1' ) { 
                    $(idElement).attr('data-radio' , 'not').removeClass('radio-checket-q').find('.checkbox-fafa i').css({'background-color': 'transparent'}); 
                }
                else { 
                    $(idElement).attr('data-radio' , 'not').removeClass('radio-checket-q').find('.checkbox-fafa i').css({ 'width': $('#admsizecheck2').val(), 'height' : $('#admsizecheck2').val() }); 
                }
            } 
            //in radio checkbox sizes must be either even or odd
            var fixedWidthBorder = $('#admsizecheck').val().match(/\d+/); // number search
            var fixedWidthBorder2 = $('#admsizecheck2').val().match(/\d+/);
            var conditionNumber = 0;
            if (fixedWidthBorder % 2 === 0){ conditionNumber++; } //conditions - even numbers
            if (fixedWidthBorder2 % 2 === 0){ conditionNumber++; } 
            //corrective size
            var fixSizeCheck = 0;
            if (conditionNumber === 1 ){ 
                $('#admsizecheck2').css('border-color' , 'rgb(221, 51, 51)'); 
                fixSizeCheck = fixedWidthBorder2 - 1; 
            }
            if (conditionNumber != 1 ){ 
                $('#admsizecheck2').css('border-color' , '#d1cfcf'); 
                fixSizeCheck = fixedWidthBorder2;
            }
            $(idElement).find('.checkbox-fafa i').css({'width': fixSizeCheck, 'min-width': fixSizeCheck, 'height' : fixSizeCheck });
        }
        //checkbox
        if ( $(idElement).hasClass('type-checkbox-element') ){
            //data defoult
            let val = $('#defoult-val-q').find('option:selected').val();
            $(idElement).attr('data-defoult', val);
            let limitOne = 0;
            $(idElement).find('.swap-checkbox-q .html-text-check-q').each(function(){
                if ( $(this).text() == val && limitOne === 0 ){ 
                    let input = $(this).closest('label').prev('input');
                    input.attr('date-defoult',  'checked'); 
                    limitOne++;
                    //activ checkbox
                    let activ = input.prop('checked');
                    if ( activ !== true ){
                        input.prop('checked', true);
                    }
                }
                else { 
                    let input = $(this).closest('label').prev('input');
                    input.attr('date-defoult',  '');
                    //deactiv checkbox
                    let activ = input.prop('checked');
                    if ( activ === true ){
                        input.prop('checked', false);
                    }
                    
                }
            });

        }
        //privacy field
        if ( $(idElement).hasClass('type-privacy-element') ){ 
            //data defoult
            let val = $('#defoult-val-q').find('option:selected').attr('data-val');
            $(idElement).attr('data-defoult', val);
        }
        //dropdown 
        if ( $(idElement).hasClass('type-dropdawn-element') ){ 
            $(idElement).attr({
                'data-border-radius' : $('#admborderinput').val(), 
                'data-border-width' : $('#admborderinputsize').val() 
            }).find('select').css({ 
                'font-size' : $('#admselectfontsize').val(), 
                'line-height' : $('#admselectfontsize').val(), 
                'border-radius' : $('#admborderinput').val(),
                'border-width' : $('#admborderinputsize').val(), 
                'height' : $('#adminputheight').val(),
                'padding-left' : $('#admpaddingleft').val(), 
                'padding-right' : $('#admpaddingright').val(), 
                'padding-top' : $('#admpaddingtop').val(), 
                'padding-bottom' : $('#admpaddingbottom').val()  
            });
        }
        
        //total
        if ( $(idElement).hasClass('type-itog-element') )  {
            //arifmetic 
            $(idElement).attr('data-kalkulation' , $('#ItogTextaarea').val() );
            //hide (full filing field)
            if ( $('#hide-not-full-val').prop("checked") ) {
                $(idElement).attr('data-hide-total', 'yes');
            }
            else { 
                $(idElement).attr('data-hide-total', 'not');
            }
        }
        
        //uplod file
        if ( $(idElement).hasClass('type-upload-element') ){ 
            //buttom text
            $(idElement).attr({
                'data-border-radius' : $('#admborderinput').val(), 
                'data-border-width' : $('#admborderinputsize').val() 
            }).find('label span').html( $('#admsub').val() ).closest('label').css({ 
                'border-radius' : $('#admborderinput').val(),
                'border-width' : $('#admborderinputsize').val(), 
                'font-size' : $('#admbottonfontsize').val() 
            });
            //max number file
            $(idElement).attr({
                'data-max' : $('#admmax').val(),
                'data-r' : $('#admr').val(), 
                'data-v' : $('#admv').val() 
            });
        }
        
        //submit
        if ( $(idElement).hasClass('type-submit-element') ){ 
            //border, padding
            $(idElement).attr({
                'data-border-radius' : $('#admborderinput').val(), 
                'data-border-width' : $('#admborderinputsize').val() 
            }).find('span').html( $('#admsub').val() ).css({
                'border-radius' : $('#admborderinput').val(), 
                'border-width' : $('#admborderinputsize').val(), 
                'font-size' : $('#admbottonfontsize').val(), 
                'padding-left' : $('#admpaddingleft').val(), 
                'padding-right' : $('#admpaddingright').val(), 
                'padding-top' : $('#admpaddingtop').val(), 
                'padding-bottom' : $('#admpaddingbottom').val()
            });
            //full width
            let fullWidth = $('#admfullsb').prop('checked');
            if (fullWidth === true){ $(idElement).attr('data-ful', 'yes').find('span').css('width','100%'); }
            else { 
                $(idElement).attr('data-ful', 'not').find('span').css('width','auto');
            }
            
            //disable style
            let disableStyle = $('#adm-disable-style-this').prop('checked');
            if (disableStyle === true){ $(idElement).attr('data-disable-style', 'yes'); }
            else { 
                $(idElement).attr('data-disable-style', 'not');
            }
            
            //custom class
            $(idElement).attr('data-custum-2', $('#admcustomclass-2').val() );
        }
        
        //captcha
        if ($(idElement).hasClass('type-captcha-element'))  {
            //border
            $(idElement).find('input.pl-form-q').css({
                'border-width' : $('#admcaptchaborderwidth').val(), 
                'border-radius' : $('#admcaptchaborderradius').val() 
            });
        }
        
        //range
        if ( $(idElement).hasClass('type-range-element') ){ 
            //min value
            let polzunokqmin = $('#sliderField').val();
            $(idElement).find('.polzet').attr('data-min', polzunokqmin);
            polzunokqmin = Number(polzunokqmin);  
            $(idElement).find('.polzet').slider({ min: polzunokqmin }); 
            //max value
            let polzunokqmax = $('#polzunokmax').val();
            $(idElement).find('.polzet').attr('data-max', polzunokqmax);	
            polzunokqmax = Number(polzunokqmax);  
            $(idElement).find('.polzet').slider({ max: polzunokqmax });	
            //step
            let sliderStep = $('#polzunokstep').val();
            if ( sliderStep === '' || sliderStep === '0' || sliderStep === 0 ){ sliderStep = 1; }
            $(idElement).find('.polzet').attr('data-step', sliderStep);	
            sliderStep = Number(sliderStep);   
            $(idElement).find('.polzet').slider({ step: sliderStep });  
            //defoult vlue, style
            $(idElement).find('.polzet').attr({
                'data-val' : $('#polzunokvalue').val(), 
                'data-m-s' : $('#adm-scale-margin').val(),
            }).css({
                'height' : $('#adm-height-q').val(),
                'border-radius' : $('#adm-border-radius-s').val(),
            }).find('.ui-slider-range').css({
                'height' : $('#adm-height-q').val(),
                'border-radius' : $('#adm-border-radius-s').val(),
            });	
            let top = $('#adm-scale-margin').val();
            //scale
            let scale = $('#admsh').prop('checked');
            if (scale === true){
                let slider = $(idElement).find('.polzet');
                slider.attr('data-sh', 'yes');
                let coloScale = slider.attr('data-color5');
                let widthSlider = slider.css('width');
                widthSlider = widthSlider.replace(/[^0-9\.]/g, '');
                let min = Number( slider.attr('data-min') );
                let max = Number( slider.attr('data-max') );
                if ( min!=='' && max!=='' ){
                    $(idElement).find('.rangeotm').remove();
                    slider.addClass('scale-q');
                    let left = widthSlider;
                    let leftPX = 0;
                    slider.append( $('<div class="rangeotm"><div class="scale-sl-q">'+min+'</div></div>').css({'left' : leftPX+'px', 'top' : top, 'color' : coloScale }) );
                    leftPX = leftPX + Number(left);
                    slider.append( $('<div class="rangeotm"><div class="scale-sl-q">'+max+'</div></div>').css({'left' : leftPX+'px', 'top' : top, 'color' : coloScale }) );
                }
            }
            else { 
                $(idElement).find('.polzet').attr('data-sh', 'none').removeClass('scale-q');
                $(idElement).find('.rangeotm').remove();
            }  
            
            //scale full
            if ( $('#scale-full').prop('checked') ){
                let slider = $(idElement).find('.polzet');
                slider.attr('data-sh-2', 'yes');
                let widthSlider = slider.css('width');
                let coloScale = slider.attr('data-color5');
                widthSlider = widthSlider.replace(/[^0-9\.]/g, '');
                let min = Number( slider.attr('data-min') );
                let max = Number( slider.attr('data-max') );
                let step = Number( slider.attr('data-step') );
                if ( min!=='' && max!=='' ){
                    $(idElement).find('.rangeotm').remove();
                    slider.addClass('scale-q');
                    let summaVal = (max - min) / step;
                    summaVal = Math.floor(summaVal);
                    let left = 100 / summaVal;
                    let leftPX = 0;
                    while( min <= max ){
                        let val = min;
                        if ( min != Math.floor(min) ){
                            val = val.toFixed(1);
                        }
                        slider.append( $('<div class="rangeotm"><div class="scale-sl-q">'+val+'</div></div>').css({'left' : leftPX+'%', 'top' : top, 'color' : coloScale  }) );
                        leftPX = leftPX + left;
                        min = min + step;
                    }
                }
            }
            else { 
                $(idElement).find('.polzet').attr('data-sh-2', 'not').removeClass('scale-q');
                if ( !$('#admsh').prop('checked') ){
                    $(idElement).find('.rangeotm').remove();
                }
            }  
            
            //position scale
            let val = $('#position-scale').find('option:selected').attr('data-val');
            if ( $(idElement).find('.polzet').attr('data-p-s') != val ){
                if ( val == 'top' ) {
                    $(idElement).find('.rangeotm').css('top', '-22px');
                    $(idElement).find('.polzet').attr({
                        'data-p-s' : 'top',
                        'data-m-s' : '-22px',
                    }).removeClass('button-scale-q');
                    $('#adm-scale-margin').val('-22px');
                }
                else { 
                    $(idElement).find('.polzet').attr({
                        'data-p-s' : 'bottom',
                        'data-m-s' : '12px',
                    }).addClass('button-scale-q');
                    $(idElement).find('.rangeotm').css('top', '12px');
                    $('#adm-scale-margin').val('12px');
                }
            }
            
            //style not activ
            if ( $(idElement).find('.polzet').attr('data-sh')==='yes' || $(idElement).find('.polzet').attr('data-sh-2')==='yes' ) {
                $('.admin-modal-box-col-1 .not-active-field').removeClass('not-active-field');
            }
            else {
                $('#position-scale').closest('.admin-editor-input').addClass('not-active-field');
                $('#adm-scale-margin').closest('.admin-editor-input').addClass('not-active-field');
            }
        }	
        
        //parse html , editor custom, privacy, total
        if ( $(idElement).hasClass('type-custom-text-element') ){ 
            let fixeditora = $('.modalbox-admin-panel').find('#customtextqQ').val(); 
	        $(idElement).find('div').html(fixeditora);
        }
        if ( $(idElement).hasClass('type-itog-element') ){ 
            if( $('.wp-editor-wrap').hasClass('html-active') ) {
                let fixeditora = $('.modalbox-admin-panel').find('#itograsschethtml').val(); 
                $(idElement).find('div').html(fixeditora);
            }
        }
        if ( $(idElement).hasClass('type-privacy-element') ){
            let fixeditora = $('.modalbox-admin-panel').find('#privacyelement').val();
            $(idElement).find('.html-text-check-q').html(fixeditora);
        }
        
        //total
        if ( $(idElement).hasClass('type-itog-element') ){
            let val = $('#rounding-calculation').find('option:selected').attr('data-val');
            $(idElement).attr('data-rounding', val);
        }
        
        //paypal
        if ( $(idElement).hasClass('type-paypal-element') ){
            //validation price
            //only number
            if ( $('#adm-price-pay-custom-q').val().match(/[^0-9\.]/g) ){ 
                let val = $('#adm-price-pay-custom-q').val().replace(/[^0-9\.]/g, ''); 
                $('#adm-price-pay-custom-q').val( val );
            }
            let price = 0;
            if ( $('#paypal-price-q').find('option:selected').attr('value') !='not') {
                if ( $('#adm-price-pay-custom-q').val() !=='' ){ 
                    $('.modalbox-admin-panel').find('#paypal-price-q').find('select').addClass('error-vaidation-pay');
                    $('#adm-price-pay-custom-q').val(''); 
                }
                else { 
                    $('.modalbox-admin-panel').find('#paypal-price-q').find('select').removeClass('error-vaidation-pay'); 
                }
                
                let val = $('#paypal-price-q').find('option:selected').html();
                val = val.split('-');
                val[0] = $.trim(val[0]);
                price = val[0];
                
            }
            else { price = $('#adm-price-pay-custom-q').val(); }
            
            //number
            //only number
            if ( $('#adm-number-pay-custom-q').val().match(/[^0-9\.]/g) ){ 
                let val = $('#adm-number-pay-custom-q').val().replace(/[^0-9\.]/g, ''); 
                $('#adm-number-pay-custom-q').val( val );
            }
            let number = 0;
            if ( $('#paypal-number-q').find('option:selected').attr('value') !='not') {
                if ( $('#adm-number-pay-custom-q').val() !=='' ){ 
                    $('.modalbox-admin-panel').find('#paypal-number-q').find('select').addClass('error-vaidation-pay');
                    $('#adm-number-pay-custom-q').val('');
                }
                else { 
                    $('.modalbox-admin-panel').find('#paypal-number-q').find('select').removeClass('error-vaidation-pay'); 
                }
            
                let val = $('#paypal-number-q').find('option:selected').html();
                val = val.split('-');
                val[0] = $.trim(val[0]);
                number = val[0];
                
            }
            else { number = $('#adm-number-pay-custom-q').val(); }
            
            $(idElement).find('.text-paypal-q').attr({
                'data-live-account' : $('#adm-paypal-live-a').val(),
                'data-sandbox-account' : $('#adm-paypal-sandbox-a').val(),
                'data-price' : price,
                'data-number' : number,
                'data-currency' : $('#paypal-currency-q').find('option:selected').attr('value'),
                'data-lang' : $('#paypal-language-q').find('option:selected').attr('value'),
                'data-senbox-mode' : $('#sandbox-mode-p').find('option:selected').attr('data-val'),
                'data-item-name' : $('#adm-paypal-name-item').val(),
                'data-url-success' : $('#adm-paypal-return-succes').val(),
                'data-url-cancel' : $('#adm-paypal-return-cancel').val(),
            });
        }
        
 
        //style field
        var style = $('#stylePolzunok').find('option:selected').attr('data-val');
        if ( $(idElement).attr('data-style') != style){ 
            $(idElement).attr('data-style' , style);
            $(idElement).removeClass('style-qform-1 style-qform-2 style-t-qform-1 style-t-qform-2');
            //style 1
            if (style ==='style1' ){ 
                if ( !$(idElement).hasClass('checkbox-img') && !$(idElement).hasClass('type-checkbox-element') && !$(idElement).hasClass('type-privacy-element') ){ 
                    $(idElement).addClass('style-qform-1');
                    //input
                    if ( $(idElement).find('input').length> 0 ){ 
                        $(idElement).attr({'data-border-radius' : '3px', 'data-border-width' : '1px', 'data-border-color' : 'rgb(194, 194, 194)'}).find('input').attr('placeholder', 'text').css({'border-radius' : '3px', 'border-color' : 'rgb(194, 194, 194)', 'border-width' : '1px', 'height': '35px', 'background-color' : 'rgba(255, 255, 255, 0)', 'padding-left' : '6px' }); 
                        let headingPrev = $(idElement).find('label');
                        let heading = headingPrev.find('.heading-field-q').html();
                        let headingStyle = headingPrev.find('.heading-field-q').attr('style');
                        let headingFont = headingPrev.find('.heading-field-q').attr('data-font');
                        headingPrev.closest('.form-element-q').prepend('<span class="heading-field-q" data-font="'+headingFont+'" style="'+headingStyle+'">'+heading+'</span>');
                        headingPrev.remove();
                        //fix timepicker
                        if ( $(idElement).hasClass('type-timepicker-element') ){
                            $(idElement).find('input').attr('placeholder', '');
                        }
                        //fix placeholder phone
                        if ( $(idElement).hasClass('type-phone-element')  ){
                            //activ mask
                            let mask = $(idElement).find('input').attr('data-mask-a');
                            if ( mask === 'yes' ){
                                //mask
                                let mask2 = $(idElement).find('input').attr('data-mask');
                                if ( mask2 !==''){
                                    $(idElement).find('input').attr('placeholder', mask2);
                                }
                            }
                        }
                    } 
                    //select
                    if ( $(idElement).find('select').length> 0 ){ 
                        $(idElement).attr({'data-border-radius' : '3px', 'data-border-width' : '1px', 'data-border-color' : 'rgb(194, 194, 194)'}).find('select').css({'border-radius' : '3px', 'border-color' : 'rgb(194, 194, 194)', 'border-width' : '1px', 'height': '35px', 'background-color' : '#f9f9f9' }); 
                    }
                    //textarea
                    if ( $(idElement).find('textarea').length> 0){ 
                        $(idElement).attr({'data-border-radius' : '3px', 'data-border-width' : '1px', 'data-border-color' : 'rgb(194, 194, 194)'}).find('textarea').attr('placeholder', $('#text-textareaplaceholder-q').html() ).css({'border-radius' : '3px', 'border-color' : 'rgb(194, 194, 194)', 'border-width' : '1px', 'height': '102px', 'background-color' : 'rgba(255, 255, 255, 0)' , 'padding-left' : '10px' }); 
                    }
                    //submit
                    if ( $(idElement).find('.submit-button-q').length> 0 ){ 
                        $(idElement).attr({'data-border-radius' : '0px', 'data-border-width' : '0px', 'data-border-color' : '#fff'}).find('.submit-button-q').css({'background-color' : '#5fb43c', 'border-color' : '#fff0', 'border-width': '0px', 'border-radius' : '0px', 'color' : '#fff'}).attr('class', 'submit-button-q style-element color-hover-5').closest('.form-element-q').attr({'data-hover-color': 'color2-hover-9', 'data-hover-background' : 'color-hover-7', 'data-color1' : '#5fb43c', 'data-color2' : '#fff'});
                    }
                    //slider
                    if ( $(idElement).hasClass('type-range-element') ){
                        $(idElement).find('.polzet').css({
                            'height' : '6px',
                            'border-radius' : '6px',
                        }).attr({
                            'data-m-s' : '-22px',
                            'data-p-s' : 'top',
                            'data-sh-2' : 'not',
                            'data-sh' : 'yes',
                        }).removeClass('button-scale-q').find('.ui-slider-range').css({
                            'height' : '6px',
                            'border-radius' : '6px',
                        });
                        let slider = $(idElement).find('.polzet');
                        $(idElement).find('.rangeotm').css('top', '-22px');
                        slider.attr('data-sh', 'yes');
                        slider.attr('data-sh-2', 'not');
                        activateUpdateSlider();
                    }
                    $('#admInpt0').closest('.admin-editor-input').css('display' , 'block'); 
                    //show border radius admin field
                    $('#admborderinput').closest('.admin-editor-input').hide();
                    //textarea heading
                    if ( $(idElement).hasClass('type-textarea-element') ) { 
                        $(idElement).attr('data-heading-style-2', 'style1');
                        $(idElement).find('.heading-field-q').css({'margin-bottom' : '5px', 'top' : '25px'});
                    }
                }
                else {  
                    if ( $(idElement).hasClass('type-checkbox-element')  ){
                        if ( $(idElement).attr('data-radio')==='not'){ 
                            $(idElement).addClass('style-t-qform-1').find('.checkbox-fafa i').css('background-color', 'transparent' ); 
                        }
                    }
                    
                    //click first ckeckbox
                    selectFirstCheckbox();
                    
                    if ( $(idElement).hasClass('type-privacy-element') ){
                        $(idElement).addClass('style-t-qform-1').find('.checkbox-fafa i').css('background-color', 'transparent' ); 
                    }
                }
            }
            //style 2
            if (style ==='style2' || style ==='style3' || style ==='style4'){  
                if ( !$(idElement).hasClass('checkbox-img') && !$(idElement).hasClass('type-checkbox-element') && !$(idElement).hasClass('type-privacy-element')){ 
                    $(idElement).addClass('style-qform-2'); 
                    //input
                    if ( $(idElement).find('input').length> 0 ){ 
                        $(idElement).attr({'data-border-radius' : '0px', 'data-border-width' : '0px 0px 1px 0px', 'data-border-color' : 'rgb(194, 194, 194)'}).find('input').attr('placeholder', '').css({'border-radius' : '0px', 'padding-left' : '0px' , 'background-color' : '#ffffff00'}).closest('.form-element-q').find('.heading-field-q').css({'font-size' : '14px' });
                        let headingPrev = $(idElement).find('.heading-field-q');
                        let heading = headingPrev.html();
                        let headingStyle = headingPrev.attr('style');
                        let headingFont = headingPrev.attr('data-font');
                        let id = $(idElement).find('.style-element').attr('id');
                        headingPrev.closest('.form-element-q').prepend('<label for="'+id+'"><span class="heading-field-q" data-font="'+headingFont+'" style="'+headingStyle+'">'+heading+'</span></label>');
                        headingPrev.remove();
                    } 
                    //select
                    if ( $(idElement).find('select').length> 0 ){ 
                        $(idElement).attr({'data-border-radius' : '0px', 'data-border-width' : '0px 0px 1px 0px'}).find('.heading-field-q').css({'font-size' : '14px' }).attr('data-font' , '14px'); 
                        $(idElement).find('select').css({'background-color' : '#ffffff00', 'border-width' : '0px 0px 1px 0px', 'border-radius' : '0px'}); 
                    }
                    //textarea
                    if ( $(idElement).attr({'data-border-radius' : '0px', 'data-border-width' : '0px 0px 1px 0px'}).find('textarea').length> 0 ){ 
                        $(idElement).find('textarea').attr('placeholder', '').css({'background-color' : '#ffffff00', 'padding-left' : '0px', 'border-width' : '0px 0px 1px 0px', 'border-radius' : '0px'}); 
                    }
                    //submit
                    if ( $(idElement).find('.submit-button-q').length> 0 ){
                        $(idElement).attr({'data-border-radius' : '3px', 'data-border-width' : '2px', 'data-border-color' : '#1ea2d3'}).find('.submit-button-q').css({'background-color' : 'rgba(0, 0, 0, 0)', 'border-color' : '#1ea2d3', 'color': '#545353', 'border-width': '2px', 'border-radius' : '3px', 'padding-left' : '20px', 'padding-right': '20px'}).attr('class', 'submit-button-q style-element color-hover-7 color2-hover-9').closest('.form-element-q').attr({'data-hover-color': 'color2-hover-9', 'data-hover-background' : 'color-hover-7', 'data-color1' : 'rgba(0, 0, 0, 0)', 'data-color2' : '#545353' });
                    }
                    //slider
                    if ( $(idElement).hasClass('type-range-element') ){
                        $(idElement).find('.polzet').addClass('button-scale-q').css({
                            'height' : '2px',
                            'border-radius' : '0px',
                        }).attr({
                            'data-sh-2' : 'yes',
                            'data-p-s' : 'bottom',
                            'data-m-s' : '12px'
                        }).find('.ui-slider-range').css({
                            'height' : '2px',
                            'border-radius' : '0px',
                        });
                        //scale ful
                        let slider = $(idElement).find('.polzet');
                        slider.attr('data-sh-2', 'yes');
                        $(idElement).find('.rangeotm').css('top', '12px');
                        activateUpdateSlider();
                    }
                    $('#admInpt0').closest('.admin-editor-input').css('display' , 'none').find('input').val('');
                    //hide border radius admin field
                    $('#admborderinput').closest('.admin-editor-input').hide();
                    //textarea heading
                    if ( $(idElement).hasClass('type-textarea-element') ) { 
                        $(idElement).find('.heading-field-q').css({'margin-bottom' : '5px', 'top' : '25px'});
                        $(idElement).attr('data-heading-style-2', 'style2');
                    }
              
                }
                else  { 
                    if ( $(idElement).hasClass('type-checkbox-element') || $(idElement).hasClass('type-privacy-element') ){
                        //warning use style pro
                        if ( style ==='style3' || style ==='style4' ){
                            if ( $(idElement).attr('data-warning') !='1' ){
                                $(idElement).attr('data-warning' ,'2');
                            }
                        }
                        
                        $(idElement).find('.checkbox-fafa i').css({'width': $('#admsizecheck2').val(), 'height' : $('#admsizecheck2').val() });
                        //in radio checkbox sizes must be either even or odd
                        let fixedWidthBorder = $('#admsizecheck').val().match(/\d+/); // search number
                        let fixedWidthBorder2 = $('#admsizecheck2').val().match(/\d+/);
                        let conditionNumber = 0;
                        if (fixedWidthBorder % 2 === 0){ conditionNumber++; } //conditions - even numbers
                        if (fixedWidthBorder2 % 2 === 0){ conditionNumber++; } 
                        //correction size checkbox
                        var ispravlenie = fixedWidthBorder2 - 1 +'px' ;
                        if (conditionNumber === 1 ){ $('#admsizecheck2').val(ispravlenie).css('border-color' , 'rgb(221, 51, 51)'); }
                        if (conditionNumber != 1 ){ $('#admsizecheck2').css('border-color' , '#d1cfcf'); }
                        $(idElement).attr('data-style', 'style2').addClass('style-t-qform-2').find('.checkbox-fafa i').css({'background-color': $(idElement).find('.checkbox-qform i').css('color'), 'width': $('#admsizecheck2').val(), 'min-width': $('#admsizecheck2').val(), 'font-size' : $('#admsizecheck2').val(),  'height': $('#admsizecheck2').val() });
                        
                        //click first ckeckbox
                        selectFirstCheckbox();
     
                    }
                }
            }
            //style 3
            if (style ==='style3' ){  
                //slider
                if ( $(idElement).hasClass('type-range-element') ){
                    $(idElement).find('.polzet').addClass('button-scale-q').css({
                        'height' : '10px',
                        'border-radius' : '10px',
                    }).attr({
                        'data-sh-2' : 'yes',
                        'data-p-s' : 'bottom',
                        'data-m-s' : '17px'
                    }).find('.ui-slider-range').css({
                        'height' : '10px',
                        'border-radius' : '10px',
                    });
                    //scale ful
                    let slider = $(idElement).find('.polzet');
                    slider.attr('data-sh-2', 'yes');
                    $(idElement).find('.rangeotm').css('top', '17px');
                    activateUpdateSlider();
                }
            }
            
            if ( !$(idElement).hasClass('type-upload-element') && !$(idElement).hasClass('type-paypal-element')  ){
                $(idElement).attr('data-tab-style', 'yes');
                $(idElement).trigger('click');
            }
        }
        //required
        let requedAdm = $('#admInpt2').prop('checked');
        if (requedAdm === true) { 
            $(idElement).attr('data-req' , 'Requed').addClass('requed-field-q');
        } 
        else { 
            if( !$(idElement).hasClass('type-captcha-element') ){//catpca vsegda req
                $(idElement).closest('.form-element-q').attr('data-req' , 'noRequed').removeClass('requed-field-q'); 
            }
        }
        //defoult none
        let nachaloscrit = $('#admInpt03').prop('checked');
        if (nachaloscrit === true) {
            $(idElement).attr('data-none' , 'none').addClass('nonesq');
        } 
        else { 
            $(idElement).attr('data-none' , 'show').removeClass('nonesq'); 
        }
   }
});


//color editor
var colorOptions = {
    change: function(event, ui){
        //color toogle range
        if((this).closest('#colorzapolnitel')) {
            let theColor = ui.color.toString();
            $(idElement).find('.polzet').attr('data-color1', theColor).find('.ui-slider-range').css('background-color' , theColor);	
            
        }
        //color range
        if((this).closest('#colorzapolnitel2')) {
            let theColor = ui.color.toString();
            $(idElement).find('.polzet').attr('data-color2', theColor).css('background-color' , theColor);
        }
        //color range2
        if((this).closest('#colorzapolnitel3')) {
            let theColor = ui.color.toString();
            $(idElement).find('.polzet').attr('data-color3', theColor).find('.ui-slider-handle').css('background-color' , theColor);	
            
        }
        //color range3
        if((this).closest('#colorzapolnitel4')) {
            let theColor = ui.color.toString();
            $(idElement).find('.polzet').attr('data-color4', theColor).find('.tumbler-q-slider').css('color' , theColor);	
            
        }
        
        if ( $(idElement).hasClass('type-range-element') ) {
            $(idElement).find('.polzet').attr('data-color5', $('#scale-color').find('input').val() ).find('.rangeotm').css('color', $('#scale-color').find('input').val() );
        }
        
        //background submit and upload button
        if((this).closest('#colorsubmit1')) {
            $(idElement).attr({'data-color1' : ui.color.toString() }).find('.style-element').css('background-color' , ui.color.toString() );	
        }
        //color submit and upload button
        if((this).closest('#colorsubmit2')) {
            $(idElement).attr({'data-color2' : ui.color.toString() }).find('.style-element').css('color' , ui.color.toString());	
        }
        //color checkbox
        if((this).closest('#colortext')) {
            $(idElement).find('label .html-text-check-q').css('color' , ui.color.toString());	    
        }
        //color border checkbox
        if((this).closest('#colorCheckborder')) {
            if( $(idElement).hasClass('type-checkbox-element') || $(idElement).hasClass('type-privacy-element') ){ 
                $(idElement).find('.checkbox-qform').css('border-color' , ui.color.toString() ); 
            
            }
            if( $(idElement).hasClass('checkbox-img') ){ 
                $(idElement).find('.checkbox-img-check').css('border-color' , ui.color.toString() ); 
            }
        }
        //color checkbox2
        if( (this).closest('#colorCheckborder1')) {
            if( $(idElement).hasClass('type-checkbox-element') || $(idElement).hasClass('type-privacy-element')){ 
                if ( $(idElement).attr('data-style')==='style1' ){
                    if ( $(idElement).hasClass('radio-checket-q') ){ 
                        $(idElement).find('.checkbox-fafa i').css({'color' : ui.color.toString(), 'background-color' : ui.color.toString() }); 
                    }
                    else { 
                        $(idElement).find('.checkbox-fafa i').css('color', ui.color.toString() ); 
                    }
                }
                if ( $(idElement).attr('data-style')==='style2' ){
                    $(idElement).find('.checkbox-fafa i').css({'color' : ui.color.toString(), 'background-color' : ui.color.toString() }); 
                }
            }
            if ( $(idElement).hasClass('checkbox-img') ) { 
                $(idElement).find('.checkbox-img-style2-checked').css({'background-color' : ui.color.toString() }).attr('data-color-c', ui.color.toString());
            } 
        }
        //color heading
        if ( (this).closest('#admcolorheading') ) {
            $(idElement).find('.heading-field-q').css({'color' : ui.color.toString() });
        }
        //color border
        if ( (this).closest('#colorborderinput') ) {
            $(idElement).attr( 'data-border-color' , ui.color.toString() ).find('.style-element').css({'border-color' : ui.color.toString() });
        }
        //background input
        if ( (this).closest('#colorinput') ) {
            $(idElement).find('.style-element').css({'background-color' : ui.color.toString() });
        }
        //color fa fa
        if ( (this).closest('#colorfafa') ) {
            $(idElement).find('.fa-icons-q i').css({'color' : ui.color.toString() });
        }
        //color date1
        if ( (this).closest('#colordate1') ) {
            $(idElement).find('input').attr({'data-colorsw' : ui.color.toString() });
        }
        //color date2
        if ( (this).closest('#colordate2') ) {
            $(idElement).find('input').attr({'data-colorsw2' : ui.color.toString() });
        }
        //color date3
        if ( (this).closest('#colordate3') ) {
            $(idElement).find('input').attr({'data-colorsw3' : ui.color.toString() });
        }
        //color option
        if ( (this).closest('#coloroption') ) {
            $(idElement).find('select').css({'color' : ui.color.toString()  });
        }
        //background form
        if ( (this).closest('#background-design') ) {
            $('.container-form-q').css({'background-color' : ui.color.toString() });
        }
        //form border color
        if ( (this).closest('#border-color-form') ) {
            $('.container-form-q').css({'border-color' : ui.color.toString() });
        }
        //color tab
        if ( (this).closest('#tabfontcolor') ) {
            idElement.css({'color' : ui.color.toString() });
            idElement.attr('data-color1', ui.color.toString() );
        }
        //background tab
        if ( (this).closest('#tabbackground') ) {
            idElement.css({'background-color' : ui.color.toString() });
            idElement.attr('data-color2', ui.color.toString() );
        }
        //border color tab
        if ( (this).closest('#tabbordercolor') ) {
            idElement.css({'border-color' : ui.color.toString() });
        }
        //color border captcha
        if ( (this).closest('#colorcaptcha') ) {
            $(idElement).find('input.pl-form-q').css({'border-color' : ui.color.toString() });
        }
        //background text checkbox
        if ( (this).closest('#colorbackground') ) {
            $(idElement).find('label').css({'background-color' : ui.color.toString() });
        }
        //color button popup
        if ( (this).closest('#font-color-design-popup') ) {
             $('.button-design-popup').css({ 'color' : ui.color.toString() });
        }
        //background button popup
        if((this).closest('#background-design-popup')) {
            $('.button-design-popup').css({ 'background-color' : ui.color.toString() });
        }
        //background button popup
        if ( (this).closest('#border-color-popup') ) {
            $('.button-design-popup').css({ 'border-color' : ui.color.toString() });
        }
        //construction background
        if ( (this).closest('#construction-color') ) {
            $(idElement).attr({'data-color-1' : ui.color.toString() });
        }
        //checkbox background
        if ( (this).closest('#color-background-checkbox') ) {
            $(idElement).find('.checkbox-fafa').css({'background-color' : ui.color.toString() });
        }
        
        //timepicker
        if ( $(idElement).hasClass('type-timepicker-element') ){ 
            if ( (this).closest('#colortime1') ) {
                $(idElement).attr({ 'data-color-1' : ui.color.toString() });
            }
            if ( (this).closest('#colortime2') ) {
                $(idElement).attr({ 'data-color-2' : ui.color.toString() });
            }
            if ( (this).closest('#colortime3') ) {
                $(idElement).attr({ 'data-color-3' : ui.color.toString() });
            }
            if ( (this).closest('#colortime4') ) {
                $(idElement).attr({ 'data-color-4' : ui.color.toString() });
            }
            if ( (this).closest('#colortime5') ) {
                $(idElement).find('.wrap-time-picker-q').css({ 'color' : ui.color.toString() });
            }
        }
      
    }
};


//forbidden symbol setting
$('.modalbox-setting').on('keyup', 'input' , function(){
    if ( ! $(this).hasClass('password-q') &&  !$(this).hasClass('special-field') )  {
        let value = $(this).val().replace(/</g,'').replace(/>/g, '').replace(/"/g, '').replace(/[/]/g, '').replace(/;/g, '').replace(/[|]/g, '').replace(/&lt/g, '').replace(/&gt/g, '').replace(/#/g, '').replace(/\|/g, '').replace(/&/g, '');
        $(this).val(value);
    }
});


//duplicate
$('.modalbox-admin-panel').on('click', '.dublicate-button' , function(){ 
    var idFieldNumber = Number( $('.id-form-nuber-field').html() ) + 1;
    var id = $('.id-form-admin').html();
    var idDublicate = id + idFieldNumber ;
    var objectDublicate = $(idElement).closest('.form-element-q');
    
    //duplicate checkbox
    if ( objectDublicate.hasClass('type-checkbox-element') || objectDublicate.hasClass('checkbox-img') || objectDublicate.hasClass('type-privacy-element') ){
        objectDublicate.clone().attr('id' , idDublicate).addClass('clone').insertAfter( objectDublicate ); 
        $('.clone').each(function(){
            //change id
            $(this).find('input').each(function(){
                idFieldNumber++;
                idDublicate = id + idFieldNumber;
                $(this).attr('id', idDublicate);
                $(this).next('label').attr('for', idDublicate);
            });
            $(this).removeClass('clone');
        });
    }
    //duplicate slider
    if ( objectDublicate.hasClass('type-range-element') ) {
        objectDublicate.clone().attr('id' , idDublicate).addClass('clone').insertAfter( objectDublicate ); 
        $('.clone').each(function(){
            //change id slider
            let classSlider = id+"polzunok"+idFieldNumber ;
            let classSlider2 = 'polzet '+classSlider+' ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all';
            $(this).find('.polzet').attr({'data-class' : classSlider, 'class' : classSlider2 }).find('.ui-slider-range').remove();
            $(this).removeClass('clone');
        });
        //update all slider
         activateUpdateSlider();
    }
    //duplicate timepicker
    if ( objectDublicate.hasClass('type-timepicker-element') ) {
        objectDublicate.removeClass('active-time-q').find('.wrap-time-list-q').remove();
    }
    //duplicate datepicker
    if ( objectDublicate.hasClass('type-data-element') ) {
        objectDublicate.clone().attr('id' , idDublicate).insertAfter( objectDublicate ); 
        $('#'+idDublicate).find('.hasDatepicker').removeClass('hasDatepicker');
        datapiker();
    }
    //duplicate other
    if ( !objectDublicate.hasClass('type-range-element') && !objectDublicate.hasClass('type-checkbox-element') && !objectDublicate.hasClass('checkbox-img') && !objectDublicate.hasClass('type-data-element') && !objectDublicate.hasClass('type-privacy-element') ) { 
        objectDublicate.clone().attr('id' , idDublicate).insertAfter( objectDublicate ); 
    }
    
    //update number id filed
    $('.id-form-nuber-field').html( idFieldNumber );
    
    //add field in select elemnet logic
    let arraySelect = $('.swap-logick-box').find('.select-logic');
    if ( arraySelect.length > 0 ) {  
        arraySelect.each(function(){
            let field = $('#'+idDublicate);
            let thisSelect = $(this);
            //id + name
            if ( field.attr('data-tip') != 'type-custom-text-element' && field.attr('data-tip') != 'type-itog-element' && field.attr('data-tip') != 'type-upload-element' && field.attr('data-tip') != 'submits' && field.attr('data-tip') != 'type-privacy-element' && field.attr('data-tip') != 'type-captcha-element' ){
                    $(this).append('<option>'+idDublicate+' - '+field.find('.heading-field-q').html()+'</option>');
            }
            //custom text
            if ( field.attr('data-tip') === 'type-custom-text-element' && !thisSelect.hasClass('condition-name') ){
                $(this).append('<option>'+idDublicate+' - '+$('#text-customtextlogic-q').html()+'</option>');
            }
            //total
            if ( field.attr('data-tip') === 'type-itog-element' ){
                $(this).append('<option>'+idDublicate+' - '+$('#text-total-q').html()+'</option>');
            }
            //custom upload
            if ( field.attr('data-tip') === 'type-upload-element' && !thisSelect.hasClass('condition-name')){
                $(this).append('<option>'+idDublicate+' - '+$('#text-uploadfile-q').html()+'</option>');
            }
            //custom text
            if ( field.attr('data-tip') === 'submits' && !thisSelect.hasClass('condition-name') ){
                $(this).append('<option>'+idDublicate+' - '+$('#text-submit-q').html()+'</option>');
            }
            //captcha
            if ( field.attr('data-tip') === 'type-captcha-element' && !thisSelect.hasClass('condition-name') ){
                $(this).append('<option>'+idDublicate+' - '+$('#text-captcha-q').html()+'</option>');
            }
            //privacy
            if ( field.attr('data-tip') === 'type-privacy-element' && !thisSelect.hasClass('condition-name') ){
                $(this).append('<option>'+idDublicate+' - '+$('#text-privacypolicy-q').html()+'</option>');
            }
        });
    }
});
    
    

    
//remove
$('.modalbox-admin-panel').on('click', '.remove-button-q' , function(){
    let idRemoveElement = '#'+$(idElement).closest('.form-element-q').attr('id');
    $(idRemoveElement).remove(); 
    $(this).closest('.modalbox-admin-panel').css('display' , 'none'); 
    textEmptyForm2(); 
    
    //limit paypal field
    if ( $('#drag-drop-element').find('.type-paypal-element').length === 0 ){
        $('#type-paypal-element').removeClass('deactive-add');
        $('#type-paypal-element').find('.message-no-add').remove();
    }

});

//editor checkboxs
$('.modalbox-admin-panel').on('textarea keyup', '#admInptCheck' , function(e) {
    if (typeof idElement !="undefined"){
        var cycleChecked = 0;
        var parentChek ='';
        var arrayColorCheckbox = '';
        var checkText = '';
        var calculation = '';
        let idNewElement= $('.id-form-nuber-field').html();
        //checkbox
        if ( $(idElement).hasClass('type-checkbox-element') )  {
            checkText = $('#admInptCheck').val().split(/[\n\r]+/); //array of strings from textarea
            parentChek = $(idElement).closest('.form-element-q').find('.swap-checkbox-q') ; //chekbox box
            cycleChecked = 0; 
            arrayColorCheckbox = [ 
                $(idElement).find('.checkbox-qform').css('border-top-color'), 
                $(idElement).find('.checkbox-fafa i').css('color') , 
                $(idElement).find('label .html-text-check-q').css('color'), 
                $(idElement).find('label span').css('font-size') , 
                $(idElement).find('.checkbox-qform').css('width') , 
                $(idElement).find('.checkbox-fafa i').css('font-size'),  
                $(idElement).find('.checkbox-fafa').css('background-color'),
            ] ;
            //fix for style 2 3 4
            let styleFafa = '';
            if ( $(idElement).attr('data-style') === 'style1' ) {styleFafa = "color:"+arrayColorCheckbox[1]+"; font-size:"+arrayColorCheckbox[5]; }
            else { styleFafa = "background-color:"+arrayColorCheckbox[1]+"; color:"+arrayColorCheckbox[1]+"; font-size:"+arrayColorCheckbox[5]; }
            $(idElement).find('label').remove();
            $(idElement).find('input').remove();

            $(checkText).each(function(){
                // updating all checkboxes
                if (checkText[cycleChecked] !=='') {
                    idNewElement++;
                    if ( checkText[cycleChecked].match(/\={2}/) ) {//get values for calculator
                        var calculationClear =  checkText[cycleChecked].match( /^.*\={2}/);  //characters that are deleted
                        calculation = checkText[cycleChecked].match( "^.*?(?==)" ); //number for calculation
                        calculation = calculation[0].replace(/[^0-9\.]/g,'');//only numbers
                        checkText[cycleChecked] = checkText[cycleChecked].replace(calculationClear,'');
                    } 
                    else { 
                        calculation=''; 
                    }
                    var createdElement = "<input type='checkbox' id='fieldQchild"+ idNewElement+"' date-rasschet='"+calculation+"'><label for='fieldQchild"+ idNewElement +"'><div class='checkbox-qform' style='border-color:"+arrayColorCheckbox[0]+"; height: "+arrayColorCheckbox[4]+"; width:"+arrayColorCheckbox[4]+";'><div class='checkbox-fafa' style='background-color:"+arrayColorCheckbox[6]+"';><i class='fa fa-checkq' style='"+styleFafa+"'></i></div></div><div class='html-text-check-q' style='color:"+arrayColorCheckbox[2]+"; font-size:"+arrayColorCheckbox[2]+"'>"+checkText[cycleChecked]+"</div></label>";
                    $(parentChek).append(createdElement);//add updated checkbox
                } 
                cycleChecked++;
            });
            
            //defould falue
            let defoult = $(idElement).attr('date-defoult');
            $(idElement).find('input').each(function(){
                if ( $(this).find('.html-text-check-q').text() == defoult ){ $(this).attr('date-defoult', 'checked'); }
            });
            
            
            //defould falue update list of setting
            let allValue = "<option data-val='no'>"+$('#text-no-q').html()+"</option>";
            $.each(checkText,function(index,value){
                if ( value !=='' ) { allValue = allValue + "<option data-val='no'>"+value+"</option>"; }
            });
            $('#defoult-val-q').find('option').remove();
            $('#defoult-val-q').find('select').append(allValue); 
            let selected = $(idElement).attr('data-defoult');
            $('#defoult-val-q').find('select').val( selected );
        }
        //checkbox img
        if ( $(idElement).hasClass('checkbox-img') )  {
            checkText =  $('#admInptCheck').val().split(/[\n\r]+/); //array of strings from textarea
            var checkTextIMG = $('#admInptCheckIMG').val().split(/[\n\r]+/); //array of links to pictures
            parentChek = $(idElement).closest('.form-element-q').find('.swap-checkbox-q') ;
            cycleChecked = 0;
            calculation = '';
            arrayColorCheckbox = [ 
                $(idElement).find('.checkbox-img-check').css('border-top-color'),
                $(idElement).find('.checkbox-img-style2-checked').css('background-color') , 
                $(idElement).find('label .html-text-check-q').css('color'), 
                $(idElement).find('label .html-text-check-q').css('font-size'), 
                $(idElement).find('.checkbox-img-check').css('width') , 
                $(idElement).find('.checkbox-img-style2-checked').css('width') ,
                $(idElement).find('label').css('background-color'),
                $(idElement).find('label').css('width'),
                $(idElement).find('.checkbox-img-check').css('background-color')
               
            ] ;
            //fix for style 2 3
            let styleFafa = '';
            if ( $(idElement).attr('data-style') === 'style1' ) { styleFafa = "border-color:"+arrayColorCheckbox[0]+"; height: "+arrayColorCheckbox[4]+"; width:"+arrayColorCheckbox[4]; }
            else { styleFafa = "background-color:"+arrayColorCheckbox[8]+"; border-color:"+arrayColorCheckbox[0]+"; height: "+arrayColorCheckbox[4]+"; width:"+arrayColorCheckbox[4]; }
            
            $(idElement).find('label').remove();
            $(idElement).find('input').remove();
            $(checkText).each(function(){
                if (checkText[cycleChecked] !=='' && checkText[cycleChecked] !==' ') {
                    idNewElement++;
                    if (typeof checkTextIMG[cycleChecked] ==="undefined"){checkTextIMG[cycleChecked] ='';}
                    if ( checkText[cycleChecked].match(/\={2}/) ) {//get values for calculator
                        var calculationClear = checkText[cycleChecked].match(/^.*\={2}/);  //characters that are deleted
                        calculation = checkText[cycleChecked].match( "^.*?(?==)" ); //number for calculation
                        calculation = calculation[0].replace(/[^0-9\.]/g,'');//only numbers
                        checkText[cycleChecked] = checkText[cycleChecked].replace(calculationClear,'');
                    }
                    else { 
                        calculation=''; 
                    }
                    var createdElement = "<input type='checkbox' id='fieldQchild"+ idNewElement +"' date-rasschet='"+calculation+"'>  <label for='fieldQchild"+idNewElement+"' data-width="+arrayColorCheckbox[7]+" style='background-color:"+arrayColorCheckbox[6]+"'><div class='swap-img-checket'><div class='img-checket'><img src='"+checkTextIMG[cycleChecked]+"'></div></div> <div class='checkbox-img-style2'><div class='checkbox-img-check' style='"+styleFafa+"'><div class='checkbox-img-style2-checked' style='background-color:"+arrayColorCheckbox[1]+"; font-size:"+arrayColorCheckbox[5]+"'></div></div> <div class='html-text-check-q'  style='color:"+arrayColorCheckbox[2]+"; font-size:"+arrayColorCheckbox[2]+";'>"+checkText[cycleChecked]+"</div></div></label></label> "; 
                    $(parentChek).append(createdElement);
                }
                cycleChecked++;
            });   
       }
       $('.id-form-nuber-field').html( idNewElement );
    }
});
 
//editor img in  checkboxs
$('.modalbox-admin-panel').on('textarea keyup', '#admInptCheckIMG' , function(e) {
    if($(idElement).hasClass('checkbox-img'))  {
        var checkText =  $('#admInptCheck').val().split(/[\n\r]+/);
        var checkTextIMG = $('#admInptCheckIMG').val().split(/[\n\r]+/); 
        var parentChek = $(idElement).closest('.form-element-q').find('.swap-checkbox-q') ; 
        var cycleChecked = 0;
        var rasschet='';
        let idNewElement = $('.id-form-nuber-field').html();
        var arrayColorCheckbox = [ 
            $(idElement).find('.checkbox-img-check').css('border-color'), 
            $(idElement).find('.checkbox-img-style2-checked').css('background-color'), 
            $(idElement).find('label .html-text-check-q').css('color'), 
            $(idElement).find('label .html-text-check-q').css('font-size'), 
            $(idElement).find('.checkbox-img-check').css('width'), 
            $(idElement).find('.checkbox-img-style2-checked').css('width'), 
            $(idElement).find('label').css('background-color'),
            $(idElement).find('label').css('width'),
        ] ;
        $(idElement).find('label').remove();
        $(idElement).find('input').remove();
        $(checkTextIMG).each(function(){
            if (checkTextIMG[cycleChecked] !=='') {
                idNewElement++;
                //checkbox text
                if (typeof checkText[cycleChecked] ==="undefined"){checkText[cycleChecked] ='';}
                if (checkText[cycleChecked].match( /^.*\={2}/) )  {
                    var calculationClear = checkText[cycleChecked].match( /^.*\={2}/);   
                    rasschet = checkText[cycleChecked].match( "^.*?(?==)" ); 
                    rasschet = rasschet[0].replace(/[^0-9]/g,'');
                    checkText[cycleChecked] = checkText[cycleChecked].replace(calculationClear,'');
                }  
                else { 
                    rasschet=''; 
                }
                var createdElement = "<input type='checkbox' id='fieldQchild"+ idNewElement +"' date-rasschet='"+rasschet+"'>  <label for='fieldQchild"+idNewElement+"' data-width="+arrayColorCheckbox[7]+" style='background-color:"+arrayColorCheckbox[6]+"'><div class='swap-img-checket'><div class='img-checket'><img src='"+checkTextIMG[cycleChecked]+"'></div></div> <div class='checkbox-img-style2'><div class='checkbox-img-check' style='border-color:"+arrayColorCheckbox[0]+"; height: "+arrayColorCheckbox[4]+"; width:"+arrayColorCheckbox[4]+";'><div class='checkbox-img-style2-checked' style='background-color:"+arrayColorCheckbox[1]+"; font-size:"+arrayColorCheckbox[5]+"'></div></div> <div class='html-text-check-q' style='color:"+arrayColorCheckbox[2]+"; font-size:"+arrayColorCheckbox[2]+";'>"+checkText[cycleChecked]+"</div></div></label></label>";
                $(parentChek).append(createdElement);
            }
            cycleChecked++;
        });
        $('.id-form-nuber-field').html( idNewElement );
    }
});
 

//editor option in select
$('.modalbox-admin-panel').on('keyup', '#admInptSelect' , function(e) {
    if (typeof idElement !="undefined"){
        let idNewElement = $('.id-form-nuber-field').html();
        if ( $(idElement).hasClass('type-dropdawn-element') ) {
            var checkText = $('#admInptSelect').val().replace(/</g,'').replace(/>/g, '').replace(/"/g, '').replace(/[/]/g, '').replace(/;/g, '').replace(/[|]/g, '').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&/g, ''); 
            $('#admInptSelect').val( checkText );
            checkText = checkText.split(/[\n\r]+/);
            var selectclass = $(idElement).find('select').attr('class');
            var arrayStyle = [ $(idElement).find('select').css('background-color'), $(idElement).find('select').css('color'), $(idElement).find('select').css('border-color') ];
            var rasschet = '';
            var cycleChecked = 0; 
            $(idElement).closest('.form-element-q').find('option').each(function(){ $(this).closest('select').remove(); });
            var createdElement = "<select class='"+selectclass+"' style='background-color:"+arrayStyle[0]+"; color:"+arrayStyle[1]+"; border-color:"+arrayStyle[2]+";'>";
            $(checkText).each(function(){
                idNewElement++;
                if (checkText[cycleChecked] !=='' && checkText[cycleChecked] !==' ') {
                    var selected ='no';
                    if ( checkText[cycleChecked].match( /==/g ) || checkText[cycleChecked].match( /!=/g )  )  {
                        var calculationClear = checkText[cycleChecked].match( /^.*\==/);   
                        rasschet = checkText[cycleChecked].match( "^.*?(?==)" ); 
                        if (rasschet == '!'){rasschet = '';}
                        selected = checkText[cycleChecked].match( /!=/g ); 
                        checkText[cycleChecked] = checkText[cycleChecked].replace(calculationClear,'').replace(/!=/g,'');
                        if (selected == '!='){selected = 'yes';}
                    } 
                    else { 
                        rasschet='';
                    }
                    if (selected == 'yes') { 
                        createdElement = createdElement +" <option type='option' id='fieldQchild"+ idNewElement +"' date-rasschet='"+rasschet+"' data-selected='"+selected+"' selected>"+ checkText[cycleChecked] +"</option>"; 
                    }
                    else {
                        createdElement = createdElement +" <option type='option' id='fieldQchild"+ idNewElement +"' date-rasschet='"+rasschet+"' data-selected='no'>"+ checkText[cycleChecked] +"</option>"; 
                    }
                }
                cycleChecked++;
            });
            createdElement = createdElement + "</select>";
            $(idElement).append(createdElement);
        }
        $('.id-form-nuber-field').html( idNewElement );
   }
}); 
 
 


//popup window editor in top menu
$(document).mouseup(function (e){ 
    let noneWindowQ = 0; 
    //fix range
    if ( $(e.target).parent().attr('data-tip')==='type-range-element' ){  noneWindowQ = 1; }
    if ( $(e.target).parent().attr('data-info')==='type-range-element' ){  noneWindowQ = 1; }
    //fix link panel
    if ( $('#wp-link-wrap').css('display') =='block' ){  noneWindowQ = 1; }
    if ( $(e.target).hasClass('mce-ico') ){  noneWindowQ = 1; } 
   
    //main window
    if ( noneWindowQ === 0){
        if ( ($(".modalbox-admin-panel").css('display')==='flex') && (!$(".modalbox-admin-panel").is(e.target)) && ($(".modalbox-admin-panel").has(e.target).length === 0) )  {
            
            if ( !$(e.target).hasClass('mce-container') && !$(e.target).hasClass('mce-text') &&  !$(e.target).parent().hasClass('mce-container') && !$(e.target).parent().hasClass('mce-container-body') && !$(e.target).parent().hasClass('mce-grid-cell') && !$(e.target).hasClass('mce-grid-cell') ) {
                $(".modalbox-admin-panel").css('display', 'none');
                $('.active-edit-q').removeClass('active-edit-q');
            } 
        }
    }
    //window custom color
    if  ( (!$(".custom-color-button").is(e.target)) && ($(".custom-color-button").has(e.target).length === 0) ){ 
        if ( $('.modalbox-admin-panel').find('.customcolor').length !== 0 && !$(e.target).parent().hasClass('customcolor')  && !$(e.target).hasClass('customcolor')   ) { 
            $('.modalbox-admin-panel').find('.customcolor').remove();
        }
        if ( $('.modalbox-setting').find('.customcolor').length !== 0 && !$(e.target).parent().hasClass('customcolor') && !$(e.target).hasClass('customcolor')   ) { 
            $('.modalbox-setting').find('.customcolor').remove(); 
        }
    }
    //window custom fa fa
    if  ( (!$(".ficons-button").is(e.target)) && ($(".ficons-button").has(e.target).length=== 0) ){ 
        if ($('.modalbox-admin-panel').find('.customfafa').length !== 0 && !$(e.target).closest('.customfafa').hasClass('customfafa')  ) {
            $('.customfafa').css('display', 'none');
        }
    }

});

	
//Drag-and-drop quasart
function dragdrobbable(){
    var containers = '';
    var i = 0;
    var test = '';
    //construction level 0
    var sortableOptions1 = {
        group: {
            name: "quform",
            pull: true,
            put: function (to) {
                //to.el - this element
                let classZone = to.el.classList;
                let mainBox = document.getElementById('drag-drop-element');
                let dragItem = mainBox.querySelectorAll('.sortable-drag');
                let number = 0;
                //array item sortable
                dragItem.forEach(function(userItem) {
                    if ( userItem.classList.contains("construction-block-2") ) { number++; }
                    test = userItem.classList;
                });
                
                if (number === 0 ) {
                    return true; 
                }
                else  { 
                    return false; 
                }
            }
        },
        animation: 250,
        ghostClass: 'dragdrop-zapolnetel',
        swapThreshold: 0.65,
        forceFallback: true,
    };   
    containers = $(".container-construction-0");
    for (i = 0; i < containers.length; i++) {
        new Sortable(containers[i], sortableOptions1);
    }
    //construction level 1
    var sortableOptions2 = {
        group: {
            name: "quform",
            pull: true,
            put: function (to) {
                //to.el - this element
                let mainBox = document.getElementById('drag-drop-element');
                let dragItem = mainBox.querySelectorAll('.sortable-drag');
                let number = 0;
                //array item sortable
                dragItem.forEach(function(userItem) {
                    //forbidden classes for construction level 1
                    if ( userItem.classList.contains("construction-block") ) { number++; }
                });
                
                if (number === 0 ) {
                    return true; 
                    
                }
                else  { 
                    return false;
                    
                }
            }
        },
        animation: 250,
        ghostClass: 'dragdrop-zapolnetel',
        swapThreshold: 0.65,
        forceFallback: true,

    };   
    containers = $(".container-construction");
    for (i = 0; i < containers.length; i++) {
        new Sortable(containers[i], sortableOptions2);
    }
    //construction level 2
    var sortableOptions3 = {
        group: {
          name: "quform2",
            pull: true,
            put: function (to) {
                //to.el - this element
                let mainBox = document.getElementById('drag-drop-element');
                let dragItem = mainBox.querySelectorAll('.sortable-drag');
                let number = 0;
                let test = '';
                //array item sortable
                dragItem.forEach(function(userItem) {
                    //forbidden classes for construction level 2
                    if( userItem.classList.contains("container-construction-2") ) { number++; }
                    if( userItem.classList.contains("construction-block") ) { number++; }
                    if( userItem.classList.contains("construction-block-2") ) { number++; }
                    
                    test = userItem.classList;
                });
                if (number === 0 ) {
                    return true; 
                  
                }
                else  { 
                    return false;
                }
            }
        } , 
        animation: 250,
        ghostClass: 'dragdrop-zapolnetel',
        swapThreshold: 0.65,
        forceFallback: true,
        
    };
    containers = $(".container-construction-2");
    for (i = 0; i < containers.length; i++) {
        new Sortable(containers[i], sortableOptions3);
    }
}

dragdrobbable();



//show text "add field"
function textEmptyForm2(){
    var textEmptyForm = '';
    var activeTab = '';
    if ( $('.tab-box-q').length === 0 ){
        if ( $('.form-element-q:not(.type-submit-element)').length === 0 ){
            if ( $('.zaglushka').length === 0){
                textEmptyForm = '<div class="zaglushka" data-tabs="0">'+$('#text-addfield-q').html()+' </div>';
                $('#drag-drop-element').prepend(textEmptyForm); 
            }
            else { 
                $('.zaglushka').removeClass('tab-none-q'); 
            }
        }
        else { 
            $('.zaglushka').addClass('tab-none-q');
        }
    }
    if ( $('.tab-box-q').length !== 0 ){
        if ($('.activ-tab-q').length !== 0){ 
            activeTab = $('.activ-tab-q').attr('data-tabsid');
        }
        else { 
            activeTab = 0; 
        }
        if ( $('.form-element-q[data-tabs="'+activeTab+'"]').length !== 0) { $('.zaglushka').addClass('tab-none-q'); }
        if ( $('.form-element-q[data-tabs="'+activeTab+'"]').length === 0) {
            if ( $('.zaglushka[data-tabs="'+activeTab+'"]').length === 0){
                //remove prev zaglushka
                $('.zaglushka').each(function(){
                    let conditionAttr = $(this).attr('data-tabs');
                    if (typeof conditionAttr === typeof undefined || conditionAttr === false) {
                        $(this).remove();
                    }
                });
                //add tab zaglushka
                textEmptyForm = '<div class="zaglushka" data-tabs="'+activeTab+'">'+$('#text-addfield-q').html()+' </div>';
                $('#drag-drop-element').prepend(textEmptyForm);
            }  
            else { 
                $('.zaglushka[data-tabs="'+activeTab+'"]').removeClass('tab-none-q');
            }
        } 
    }
}


//captcha
function captcha (){
   $('.type-captcha-element').each(function(){
        var elementcaptcha = $(this).find('.captcha-element-q');
        if ( $(this).find('img').length === 0 ){
            function getRandomInRange(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var random1 = getRandomInRange(0, 8);
            var random2 = getRandomInRange(0, 8);
            var element1 = "<img src="+demoIMG3+"/qfc-"+random1+".png>";
            var element2 = "<img src="+demoIMG3+"/qfc-"+random2+".png>";
            var stringcaptcha = '';
            if ( element1 >= element2 ){ 
                stringcaptcha = element1 + '<div class="pl-form-q">-</div>'+element2+'<div class="pl-form-q">=</div> <div class="pl-form-q">'; 
            }
            else { 
                stringcaptcha = element1 + '<div class="pl-form-q">+</div>'+element2+'<div class="pl-form-q">=</div>';
            }
            elementcaptcha.prepend(stringcaptcha);
        }
    });
}
 

//add field--------------------------------------------------------------------------------------------
$('.created-field-q').on('click' , function(){ 
    //active number tab
    let activeTab = '';
    if ( $('.activ-tab-q').length !== 0 ){ 
        activeTab = $('.activ-tab-q').attr('data-tabsid'); 
    }
    else { 
        activeTab = 0; 
    }
    
    let idFieldNumber = Number( $('.id-form-nuber-field').html() ) + 1; //number id field
    let idField = $('.id-form-admin').html();
    let createdElement = '';
  
    //add input
    if ( $(this).attr('id')==='add-input-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-input-element style-qform-1 color-p-10 color-class-7' style='width: 100%' data-sizes='100%' data-req='noRequed' data-tip='input' data-tabs='"+activeTab+"' data-none='show' data-focus-class='color-class-7' data-border-radius='3px' data-border-width='1px' data-placeholder='color-p-10' data-custum='' data-custum-2='' data-border-color='#c2c2bf' data-style='style1' data-validation='none'><span class='heading-field-q' data-font='14px'>"+$('#text-fieldname-q').html()+"</span><div class='input-swap'><input id='field"+idField+'Qchild'+idFieldNumber+"' class='style-element' placeholder='"+$('#text-fieldname2-q').html()+"' autocomplete='off' data-filling='' data-filling-a='disabled'><div class='fa-icons-q' data-num='23'><i class='none-i'></i></div></div></div>";
        $('.admin-form-q').prepend(createdElement);
    }
    
    //add phone
    if ( $(this).attr('id')==='add-phone-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-phone-element style-qform-1 color-p-10 color-class-7' style='width: 100%' data-sizes='100%' data-req='noRequed' data-tip='type-phone-element' data-tabs='"+activeTab+"' data-none='show' data-focus-class='color-class-7' data-border-radius='3px' data-border-width='1px' data-placeholder='color-p-10' data-custum='' data-custum-2='' data-border-color='#c2c2bf' data-style='style1' data-validation='none'><span class='heading-field-q' data-font='14px'>"+$('#text-phone-q').html()+"</span><div class='input-swap'><input id='field"+idField+'Qchild'+idFieldNumber+"' class='style-element' placeholder='"+$('#text-phone2-q').html()+"' data-mask='"+$('#text-mask-eng-q').html()+"' data-mask-a='not' autocomplete='off'><div class='fa-icons-q' data-num='23'><i class='none-i'></i></div></div></div>";
        $('.admin-form-q').prepend(createdElement);
    }
    
    //add email input
    if ( $(this).attr('id')==='add-email-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-email-element style-qform-1 color-p-10 color-class-7' style='width: 100%' data-sizes='100%' data-req='noRequed' data-tip='type-email-element' data-tabs='"+activeTab+"' data-none='show' data-focus-class='color-class-7' data-border-radius='3px' data-border-width='1px' data-placeholder='color-p-10' data-custum='' data-custum-2='' data-border-color='#c2c2bf' data-style='style1' data-validation='none'><span class='heading-field-q' data-font='14px'>"+$('#text-fieldmail-q').html()+"</span><div class='input-swap'><input id='field"+idField+'Qchild'+idFieldNumber+"' class='style-element' placeholder='"+$('#text-fieldmail2-q').html()+"' autocomplete='off'><div class='fa-icons-q' data-num='23'><i class='fa fa-envelope-oq'></i></div></div></div>";
        $('.admin-form-q').prepend(createdElement);
    }
    
    //add checkbox
    if ( $(this).attr('id')==='add-checkbox-q' ){
        let idchecet = idField+'child' + idFieldNumber;
        idFieldNumber = idFieldNumber + 1;
        let idchecet2 = idField+'child'+ idFieldNumber;
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q type-checkbox-element element-css-q qrstandart' style='width: 100%' data-tip='checkboks' data-tabs='"+activeTab+"' data-sizes='100%' data-req='noRequed' data-radio='not' data-align='vertical' data-align-box='align-left-q' data-style='style2' data-none='show' data-custum=''><span class='heading-field-q' data-font='14px'>"+$('#text-selectitem-q').html()+"</span> <div class='swap-checkbox-q'><input type='checkbox' id='"+idchecet+"' data-name='Red' date-rasschet=''> <label for='"+idchecet+"'><div class='checkbox-qform'><div class='checkbox-fafa'><i class='fa fa-checkq' style='background-color:  rgb(60, 67, 74)'></i></div></div><div class='html-text-check-q'>"+$('#text-red-q').html()+"</div></label><input type='checkbox' id='"+idchecet2+"' data-name='Blue' date-rasschet=''> <label for='"+idchecet2+"'><div class='checkbox-qform'><div class='checkbox-fafa'><i class='fa fa-checkq' style='background-color: rgb(60, 67, 74)'></i></div></div><div class='html-text-check-q'>"+$('#text-blue-q').html()+"</div></label></div></div>";
        $('.admin-form-q').prepend(createdElement); 
    }
    
    //add radio button
    if ( $(this).attr('id')==='add-radio-q' ){
        let idchecet = idField+'child' + idFieldNumber;
        idFieldNumber = idFieldNumber + 1;
        let idchecet2 = idField+'child'+ idFieldNumber;
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q type-checkbox-element element-css-q qrstandart style-t-qform-1 radio-checket-q' style='width: 100%' data-tip='checkboks' data-tabs='"+activeTab+"' data-sizes='100%' data-req='noRequed' data-radio='yes' data-align='vertical' data-align-box='align-left-q' data-color-select='#d34085' data-color-base='rgb(204, 204, 204)' data-color-style4='#9FD468' data-color-style4-d='#fff' data-style='style1' date-defoult='' data-none='show' data-custum=''><span class='heading-field-q' data-font='14px'>"+$('#text-selectitem-q').html()+"</span> <div class='swap-checkbox-q'><input type='radio' id='"+idchecet+"' data-name='Red' date-rasschet='' date-defoult='' name='radio"+idField+idFieldNumber+"'> <label for='"+idchecet+"'><div class='checkbox-qform' data-border-r='0px'><div class='checkbox-fafa'><i class='fa fa-checkq'></i></div></div><div class='html-text-check-q'>"+$('#text-red-q').html()+"</div></label><input type='radio' id='"+idchecet2+"' data-name='Blue' date-rasschet='' date-defoult='' name='radio"+idField+idFieldNumber+"'> <label for='"+idchecet2+"'><div class='checkbox-qform' data-border-r='0px'><div class='checkbox-fafa'><i class='fa fa-checkq'></i></div></div><div class='html-text-check-q'>"+$('#text-blue-q').html()+"</div></label></div></div>";
        $('.admin-form-q').prepend(createdElement); 
    }
    
    //add timepicker
    if ( $(this).attr('id')==='add-timepicker-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-timepicker-element style-qform-1 color-p-10 color-class-7' style='width: 100%' data-sizes='100%' data-req='noRequed' data-tip='type-timepicker-element' data-tabs='"+activeTab+"' data-none='show' data-focus-class='color-class-7' data-border-radius='3px' data-border-width='1px' data-placeholder='color-p-10' data-custum='' data-custum-2='' data-border-color='#c2c2bf' data-min='12:00' data-max='18:00' data-step='1' data-hour='' data-minute='' data-color-1='rgb(0, 115, 170)' data-color-2='#fff' data-color-3='#50bbfa' data-color-4='#fff' data-style='style1' data-validation='none'><span class='heading-field-q' data-font='14px'>"+$('#text-timepicker-q').html()+"</span><div class='input-swap'><div class='wrap-time-picker-q'><div class='timepicker-q hour-picker-q'>--</div><span>:</span><div class='timepicker-q minut-picker-q'>--</div> </div><input id='field"+idField+'Qchild'+idFieldNumber+"' class='style-element'  autocomplete='off' readonly><div class='fa-icons-q' data-num='23'><i class='fa fa-clock-oq'></i></div></div></div>";
        $('.admin-form-q').prepend(createdElement);
    }
  

    //add submit
    if ( $(this).attr('id')==='add-submit-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-submit-element align-center-q' style='width: 100%;' data-sizes='100%' data-tip='submits' data-none='show' data-ful='not' data-custum='' data-custum-2='' data-disable-style='not' data-hover-color='color2-hover-9' data-hover-background='color-hover-5' data-border-color='#fff' data-border-radius='50px' data-border-width='1px' data-color1='#5fb43c' data-color2='#fff' data-align-box='align-center-q' data-style='style1'><span class='submit-button-q style-element color-hover-5'>"+$('#text-submit-q').html()+"</span></div>";
        $('.admin-form-q').append(createdElement);
    }
  
    //add textarea
    if ( $(this).attr('id')==='add-textarea-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-textarea-element style-qform-1 color-class-7' style='width: 100%;' data-sizes='100%' data-req='noRequed' data-headings='' data-tip='type-textarea-element' data-tabs='"+activeTab+"' data-none='show' data-heading-style-2='none' data-focus-class='color-class-7' data-border-radius='3px' data-border-width='1px' data-placeholder='color-p-10' data-border-color='#c2c2bf' data-custum='' data-custum-2='' data-style='style1'><span class='heading-field-q' data-font='14px'>"+$('#text-comments-q').html()+"</span><textarea id='field"+idField+'Qchild'+idFieldNumber+"' class='style-element' placeholder='"+$('#text-textareaplaceholder-q').html()+"'></textarea></div>";
        $('.admin-form-q').prepend(createdElement); 
    }

    //add custom text   
    if ( $(this).attr('id')==='add-castum-html-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-custom-text-element' style='width: 100%;' data-sizes='100%' data-req='noRequed' data-tip='type-custom-text-element' data-tabs='"+ activeTab +"' data-none='show' data-custum=''><div id='field"+idField+'Qchild'+idFieldNumber+"'>"+$('#text-texthtml-q').html()+"</div></div>";
        $('.admin-form-q').prepend(createdElement); 
    }
  
    //add range
    if ( $(this).attr('id')==='add-range-q' ){
        var classpolzunok = idField+"polzunok"+idFieldNumber ;
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-range-element polzunok-q-defaut qrstandart' style='width: 100%' data-sizes='100%' data-req='noRequed' data-headings='' data-tip='type-range-element' data-tabs='"+activeTab+"' data-style='style1' data-none='show' data-custum=''><span class='heading-field-q' data-font='14px'>"+$('#text-heading-q').html()+"</span><div class='polzet "+classpolzunok+"' data-min='0' data-max='20' data-step='1' data-val='1' data-class='"+classpolzunok+"' data-sh='none' data-sh-2='not' data-p-s='top'  data-m-s='-22px'  data-color1='rgb(90, 169, 237)' data-color2='rgb(30, 115, 190)' data-color3='rgb(233, 233, 233)' data-color4='#000' data-color5='#3c434a' data-color-r-4='rgb(0, 0, 0)' data-info='type-range-element'></div> </div>";
        $('.admin-form-q').prepend(createdElement); 
        activateUpdateSlider();
    }
  
    //add date 
    if ( $(this).attr('id')==='add-date-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-data-element color-p-10 color-class-7 style-qform-1' style='width: 100%' data-sizes='100%' data-req='noRequed' data-headings='' data-tip='type-data-element' data-tabs='"+activeTab+"' data-none='show' data-focus-class='color-class-7' data-border-radius='3px' data-border-width='1px' data-placeholder='color-p-10' data-style='style1' data-border-color='rgb(194, 194, 194)' data-lang='defoult' data-custum=''><span class='heading-field-q' data-font='14px'>"+$('#text-date-q').html()+"</span><div class='input-swap'><input id='field"+idField+'Qchild'+idFieldNumber+"' class='style-element' placeholder='"+$('#text-date2-q').html()+"' data-colorsw='#50bbfa' data-colorsw2='#fff' data-colorsw3='#0073aa'><div class='fa-icons-q' data-num='23' autocomplete='off'><i class='none-i'></i></div></div></div>";
        $('.admin-form-q').prepend(createdElement); 
        datapiker();
    }
    
    //add dropdown
    if ( $(this).attr('id')==='add-dropdawn-q' ){
        let idchecet = 'fieldQchild' + idFieldNumber;
        idFieldNumber = idFieldNumber + 1;
        let idchecet2 = 'fieldQchild' + idFieldNumber;
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q type-dropdawn-element element-css-q style-qform-1 color-p-10 color-class-7' style='width: 100%' data-tip='dropdawn' data-tabs='"+ activeTab +"' data-sizes='100%' data-req='noRequed' data-border-color='rgb(194, 194, 194)' data-none='show' data-focus-class='color-class-7' data-border-radius='3px' data-border-width='1px' data-placeholder='color-p-10' data-style='style1' data-custum=''> <span class='heading-field-q' data-font='14px'>"+$('#text-color-q').html()+"</span>  <select class='style-element'><option type='option' id='"+idchecet+"' date-rasschet='' data-selected='yes'><span>"+$('#text-selectoption-q').html()+"</span></option> <option type='option' id='"+idchecet+"' date-rasschet='' data-selected='no'><span>"+$('#text-red-q').html()+"</span></option> <option type='option' id='"+idchecet2+"' date-rasschet='' data-selected='no'><span>"+$('#text-blue-q').html()+"</span></option> </select></div>";
        $('.admin-form-q').prepend(createdElement);
    }
    
    //add total
    if ( $(this).attr('id')==='type-itog-element' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-itog-element' style='width: 100%;' data-sizes='100%' data-req='noRequed' data-tip='type-itog-element' data-tabs='"+ activeTab +"' data-none='show' data-rounding='1' data-custum='' data-kalkulation=''><div id='field"+idField+'Qchild'+idFieldNumber+"'>"+$('#text-total-q').html()+": [itog] $.</div></div>";
        $('.admin-form-q').prepend(createdElement);
    }
 
    //add uplod file
    if ( $(this).attr('id')==='add-upload-element-q' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-upload-element' style='width: 100%' data-sizes='100%' data-req='noRequed' data-headings='' data-tip='type-upload-element' data-max='5' data-r='doc,zip,png,jpg,pdf' data-v='1' data-tabs='"+activeTab+"' data-none='show' data-custum='' data-border-radius='0px' data-border-width='3px' data-color1='#4fbcff' data-color2='#fff' data-hover-color='color2-hover-9' data-hover-background='color-hover-7' data-style='style1'><span class='heading-field-q' data-font='14px'></span> <label class='style-element color-hover-7' for='field"+idField+'Qchild'+idFieldNumber+"'><span>"+$('#text-uploadfil-q').html()+"</span> <div class='fa-icons-q'><i class='fa fa-uploadq'></i></div> <input id='field"+idField+'Qchild'+idFieldNumber+"'></label> </div>";
        $('.admin-form-q').prepend(createdElement); 
        datapiker();
    }
  
    //add captcha
    if ( $(this).attr('id')==='type-captcha-element' ){
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q element-css-q type-captcha-element requed-field-q' style='width: 100%;' data-sizes='100%' data-tip='type-captcha-element' data-tabs='"+ activeTab +"' data-none='show' data-custum=''> <span class='heading-field-q' data-font='14px'></span> <div class='captcha-element-q'>  <input class='pl-form-q'></div></div> </div>";
        $('.admin-form-q').prepend(createdElement);
        captcha();
    }
  
    //add privacy-element
    if ( $(this).attr('id')==='type-privacy-element' ){
        let idchecet2 = 'fieldQchild' + idFieldNumber;
        createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q type-privacy-element element-css-q requed-field-q' style='width: 100%' data-tip='type-privacy-element' data-tabs='"+ activeTab +"' data-sizes='100%' data-req='Requed' data-style='style2' data-none='show' data-defoult='no' data-custum=''><span class='heading-field-q' data-font='14px'></span> <div class='swap-checkbox-q'> <input type='checkbox' id='"+ idchecet2 +"' data-name='' date-rasschet=''> <label for='"+ idchecet2 +"'><div class='checkbox-qform'><div class='checkbox-fafa'><i class='fa fa-checkq' style='background-color: rgb(60, 67, 74)'></i></div></div><div class='html-text-check-q'><p>"+$('#text-privacypolicyfield-q').html()+"</p></div></label></div></div>";
        $('.admin-form-q').prepend(createdElement); 
    }
    
    //add paypal
    if ( $(this).attr('id')==='type-paypal-element' ){
        if ( $('#drag-drop-element').find('.type-paypal-element').length === 0 ){
        
            let idchecet2 = 'fieldQchild' + idFieldNumber;
            createdElement = "<div id='"+idField+idFieldNumber+"' class='form-element-q type-paypal-element element-css-q' style='width: 100%' data-tip='type-paypal-element' data-tabs='"+ activeTab +"' data-sizes='100%' data-style='style1' data-none='show' data-custum=''> <span class='text-paypal-q' data-live-account='' data-sandbox-account='' data-item-name='Item name' data-senbox-mode='not' data-price='1' data-number='1' data-currency='25' data-lang='20' data-url-cancel='' data-url-success=''><img src='"+paypalIMG+"'></span> </div>";
            $('.admin-form-q').prepend(createdElement); 
            //limit field
            $('#type-paypal-element').addClass('deactive-add');
            $('#type-paypal-element').append('<div class="message-no-add">'+$('#text-no-added-q').html()+'</div>');
        }
    }
  
    //add construction
    if ( $(this).attr('id')==='construction-element-q' ){
        createdElement = "<div class='form-element-q element-css-q construction-block' style='width: 100%; min-height: 80px' data-sizes='100%' data-tip='construction-block' data-tabs='"+ activeTab +"'><div class='panel-construction-q'> <div class='colqswap'><span><i class='fa fa-barsq'></i></span> <div class='colq'> <div class='coloneq'>1</div>  <div class='coluvirsal'>2</div> <div class='coluvirsal'>3</div> <div class='coluvirsal'>4</div> <div class='coluvirsal'>5</div> <div class='coluvirsal'>6</div>  </div> </div> <div class='removconstructq'>"+$('#text-remove-q').html()+"</div> </div> <div class='swap-construction-q'>  <div class='box-construction-q' style='width: 100%; height: 100%;' data-color-1='rgba(255,255,255,0)' data-padding='0px|0px|0px|0px' data-margin='0px|0px|0px|0px' data-custum='' data-sizeq='100%'><div class='dashboard-construction'>  <div class='add-construction-q'><i class='fa fa-plusq'></i></div>  <div class='editor-column'> <i class='fa fa-pencilq'></i></div>  </div>    <div class='container-construction' style='height: 100%;'></div> </div>  </div>  </div>";
        $('.admin-form-q').prepend(createdElement); 
        $('.button-preview').css('display','flex');
        dragdrobbable();//add Drag-and-drop this box
    }
    
    //update number id filed
    $('.id-form-nuber-field').html( idFieldNumber );
    
    textEmptyForm2();
}); 

  
//construction editor 
$('.admin-form-q').on('click', '.editor-column' , function(){
    clearmodaladmin();
    idElement = $(this).closest('.box-construction-q');
    
    if ( !$('#drag-drop-element').hasClass('preview-form') ) {
        //class this element
        let coordinat = this.getBoundingClientRect().top;
        let heightWindow = $(window).height(); //height window
        let heightWindow2 = ( $(window).height() / 100) * 60 ; //60% height window
        let heightWindow3 = ( $(window).height() / 100) * 40 ; //40% height window

        //if height monitor > 550px
        if ( heightWindow > 700 && !$('.modalbox-admin-panel').hasClass('classic-window-q') ){
            $('.modalbox-admin-panel').removeClass('small-window-q');
            coordinat = Number(coordinat) + 100;
            let coordinatPx = heightWindow2 + 'px';
                
            //scroll
            let poz = $(this).offset().top - heightWindow3;
            $('html, body').animate({
                scrollTop: poz
            }, 500);
            $('.modalbox-admin-panel').attr('position', coordinatPx);
        }
        //if height monitor < 550px
        else  {
            $('.modalbox-admin-panel').addClass('small-window-q');
        }
    }
    
    if ( $('.modalbox-admin-panel').hasClass('small-window-q') ){
        $('.modalbox-admin-panel').css({'display' : 'flex'});
    }
    else {
        let coordinat = $('.modalbox-admin-panel').attr('position');
        $('.modalbox-admin-panel').css({'display' : 'flex', 'top' : coordinat });
    }
    //width
    let widthAdm = idElement.attr('data-sizeq');
    let createdElement = "<div class='admin-editor-input'><span>"+$('#text-width-q').html()+"</span><input id='admcontsrSize' class='admin-filed-style-1' value='" + widthAdm + "'></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    //remove
    createdElement ="<div class='removcolq admin-editor-input remove-button-q' id='admcontsrDelete' class='admin-editor-input'>"+$('#text-remove-q').html()+"</div>";
    $('.admin-modal-box-col-2').append(createdElement); 
    //bacground color
    createdElement = "<div class='admin-editor-input'><span>"+$('#text-backgroundcolor-q').html()+"</span><div id='construction-color'><input class='admin-editor-input' data-alpha='true' value='"+$(idElement).attr('data-color-1') +"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement); 
    $('#construction-color input').wpColorPicker(colorOptions);
    //padding
    let dataPadding = $(idElement).attr('data-padding').split('|');
    createdElement = "<div class='admin-editor-input adm-padding-q padding-4-col'><span>"+$('#text-padding1-q').html()+"</span> <div class='wrap-block-margin-q'><input id='admpaddingleft' class='admin-filed-style-1' value='"+dataPadding[0]+"'> <input id='admpaddingright' class='admin-filed-style-1' value='"+dataPadding[1]+"'> <input id='admpaddingtop' class='admin-filed-style-1' value='"+dataPadding[2]+"'><input id='admpaddingbottom' class='admin-filed-style-1' value='"+dataPadding[3]+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement);
    //margin
    dataPadding = $(idElement).attr('data-margin').split('|');
    createdElement = "<div class='admin-editor-input adm-padding-q padding-4-col'><span>"+$('#text-margin4-q').html()+"</span> <div class='wrap-block-margin-q'><input id='marginleft' class='admin-filed-style-1' value='"+dataPadding[0]+"'> <input id='marginright' class='admin-filed-style-1' value='"+dataPadding[1]+"'> <input id='margintop' class='admin-filed-style-1' value='"+dataPadding[2]+"'><input id='marginbottom' class='admin-filed-style-1' value='"+dataPadding[3]+"'></div></div>";
    $('.admin-modal-box-col-1').append(createdElement);
    //custom class
    createdElement = "<div class='admin-editor-input'><span>"+$('#text-customclass-q').html()+"</span><input id='admcustomclass' class='admin-filed-style-1 custom-class-input' placeholder='class1 class2...' autocomplete='off' value='"+$(idElement).attr('data-custum')+"'></div>";
    $('.admin-modal-box-col-2').append(createdElement); 
    //more setting in Pro
    createdElement = "<div class='admin-editor-input'><span>"+$('#text-pro-section-q').html()+"</span></div>";
    $('.admin-modal-box-col-1').append(createdElement);
    
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



//actions when an element hits the construction
$('.container-construction-0').mouseup(function(eventObject){
    $('.construction-block .container-construction').each(function(){
        //if the block is not empty
        if ($(this).html() !=='' ){
            $(this).css({'border' : '1px solid rgb(194, 191, 191)'});
            $(this).find('.form-element-q').css({'width' : '100%'}).attr('data-sizes', '100%');
        }  
        if ($(this).html() ===''){ $(this).css({'border' : '1px dashed #aaa'}); }  
        setTimeout(function(){ fixborder(); },50); 
    });
});

function fixborder(){
    $('.construction-block .container-construction').each(function(){
        if ($(this).html() ===''){ $(this).css({'border' : '1px dashed #aaa'}); }  	
    });
}

 

//construction transform in 1 colums
$('.admin-form-q').on('click', '.coloneq' , function(){  
    if ( !$(this).hasClass('two-q') ) {
        let object = $(this).closest('.construction-block').find('.box-construction-q:not(.two-q)'); 
        if(object.length !=1){
            let number = 0;
            let column = '';
            object.each(function(){
                number++;	
                if (number === 1){ 
                    column = $(this) ; 
                    column.css({ 'width' : ' 100%' }).attr('data-sizeq', '100%'); 
                } //transfer content to this column
                if (number != 1){ $(this).find('.form-element-q').appendTo( 
                    column.children('.container-construction') ); 
                    $(this).remove();
                }
            });
            dragdrobbable();
        }
    }
    if ( $(this).hasClass('two-q') ) {
        let object = $(this).closest('.construction-block-2').find('.box-construction-q'); 
        if(object.length !=1){
            let number = 0;
            let column = '';
            object.each(function(){
                number++;
                if (number === 1){ column = $(this).css({ 'width' : ' 100%' }).attr('data-sizeq', '100%'); } //transfer content to this column
                if (number != 1){ $(this).find('.form-element-q').appendTo( 
                    column.children('.container-construction-2') ); 
                    $(this).remove();
                }
            });
            dragdrobbable();
        }
    }
    
});


//construction transform in 2 3 4 5 6 colums
$('.admin-form-q').on('click', '.coluvirsal' , function(){  
    var column = '';
    let numberColumn = Number( $(this).html() );//number colums 
    if ( ! $(this).hasClass('two-q') ) {
        let object = $(this).closest('.construction-block').find('.box-construction-q:not(.two-q)'); 
        if(object.length != numberColumn){//not current column selected
            let number = 0;
            column = '';
            object.each(function(){
                number++;	
                if (number === 1){ column = $(this); } //column to which all fields are transferred
                if (number != 1){ 
                    $(this).find('.form-element-q').appendTo( column.children('.container-construction') ); 
                    $(this).remove(); 
                }
            });
            let number2 = 0;
            //add columns in construction
            while ( (numberColumn -1 ) > number2 ) { 
                number2++;
                let widthColumn = '';
                if (numberColumn === 2) {widthColumn = '50%';}
                if (numberColumn === 3) {widthColumn = '33.3%';}
                if (numberColumn === 4) {widthColumn = '25%';}
                if (numberColumn === 5) {widthColumn = '20%';}
                if (numberColumn === 6) {widthColumn = '16.6%';}
                $(this).closest('.construction-block').find('.swap-construction-q:not(.two-q)').append( "<div class='box-construction-q' style='width: "+widthColumn+"; height: 100%;' data-color-1='rgba(255,255,255,0)' data-padding='0px|0px|0px|0px' data-margin='0px|0px|0px|0px' data-custum='' data-sizeq='"+widthColumn+"'><div class='dashboard-construction'>  <div class='add-construction-q'><i class='fa fa-plusq'></i></div>  <div class='editor-column'><i class='fa fa-pencilq'></i></div>  </div> <div class='container-construction'></div> </div>");
                dragdrobbable();
                column.css({ 'width' : widthColumn }).attr('data-sizeq', widthColumn);
            }
        }
    }
    if ( $(this).hasClass('two-q') ) {
        let object = $(this).closest('.construction-block-2').find('.box-construction-q'); 
        if(object.length  != numberColumn){//not current column selected
            let number = 0;
            column = '';
            object.each(function(){
                number++;	
                if (number === 1){ column = $(this); } //column to which all fields are transferred
                if (number !== 1){ 
                    $(this).find('.form-element-q').appendTo( column.children('.container-construction-2') );
                    $(this).remove(); 
                }
            });
            let number2 = 0;
            //creating columns in the constructor
            while ( (numberColumn -1 ) > number2 ) { 
                number2++; 
                let widthColumn = '';
                if (numberColumn === 2) {widthColumn = '50%';}
                if (numberColumn === 3) {widthColumn = '33.3%';}
                if (numberColumn === 4) {widthColumn = '25%';}
                if (numberColumn === 5) {widthColumn = '20%';}
                if (numberColumn === 6) {widthColumn = '16.6%';}
                $(this).closest('.construction-block-2').find('.swap-construction-q').append( "<div class='box-construction-q two-q' style='width: "+widthColumn+"; height: 100%;' data-color-1='rgba(255,255,255,0)' data-padding='0px|0px|0px|0px' data-margin='0px|0px|0px|0px' data-custum='' data-sizeq='"+widthColumn+"'><div class='dashboard-construction'>  <div class='editor-column'><i class='fa fa-pencilq'></i></div>  </div> <div class='container-construction-2'></div> </div>");
                dragdrobbable();
                column.css({ 'width' : widthColumn }).attr('data-sizeq', widthColumn);
            }
        }
    }
    
});
	

//remove colums
$('.modalbox-admin-panel').on('click', '.removcolq' , function(){ 
    $(idElement2).closest('.box-construction-q').remove(); 
    $(this).closest('.modalbox-admin-panel').css('display' , 'none');
    
    //limit paypal field
    if ( $('#drag-drop-element').find('.type-paypal-element').length === 0 ){
        $('#type-paypal-element').removeClass('deactive-add');
        $('#type-paypal-element').find('.message-no-add').remove();
    }
});	

	
//remove construction
$('.admin-form-q').on('click', '.removconstructq' , function(){  
    if( !$(this).closest('.form-element-q').hasClass('construction-block-2') ) {  
        $(this).closest('.construction-block').remove(); 
    }
    else { 
        $(this).closest('.construction-block-2').remove();
    }
    
    // preview button
    if ( $('.construction-block').length > 0 ) { 
        $('.button-preview').css('display','flex');
    }
    else { $('.button-preview').css('display','none'); }
    
    //limit paypal field     
    if ( $('#drag-drop-element').find('.type-paypal-element').length === 0 ){         
        $('#type-paypal-element').removeClass('deactive-add');         
        $('#type-paypal-element').find('.message-no-add').remove();     
    }
});

//construction preview button
$('.form-name-q').on('click', '.button-preview' , function(){  
    if( $('#button-preview').prop('checked') === true){
        $('#drag-drop-element').addClass('preview-form');
        $('.active-edit-q').removeClass('active-edit-q');
        //add css preview
        $('.box-construction-q').each(function(){
            let object = $(this);
            let padding = $(this).attr('data-padding').split('|');
            let margin = $(this).attr('data-margin').split('|');
            object.css({'background-color': object.attr('data-color-1'), 'padding-left': padding[0], 'padding-right': padding[1], 'padding-top': padding[2], 'padding-bottom': padding[3], 'margin-left': margin[0], 'margin-right': margin[1], 'margin-top': margin[2] , 'margin-bottom': margin[3] });
        });
        
    }
    else { 
        $('#drag-drop-element').removeClass('preview-form');
        //remove css preview
        $('.box-construction-q').each(function(){
            let object = $(this);
            let padding = $(this).attr('data-padding').split('|');
            let margin = $(this).attr('data-margin').split('|');
            object.css({'background-color': 'transparent', 'padding-left': '5px', 'padding-right': '5px', 'padding-top': '0px', 'padding-bottom': '0px', 'margin' : '0px' });
        });
    }
});




//window setting
$('.swap-top-menu-q').on('click' , '.setting-q', function(){ 
    $('.setting_general-box, .setting_design-box , .logick-box, .quick-start-q, .help-box-q').css('display', 'none');
    $(".swap-modalbox-setting").removeClass('none-box-q').removeClass('background-design-panel').css({'width' : '100%'});
    $('.modalbox-setting').removeClass('full-window-q').removeClass('scroll-box-q').removeClass('full-window-2-q').css('max-width', '100%'); 
    //show window setting email
    if ( $(this).attr('id')==='setting-general-q'){
        $('.setting_general-box').css('display', 'block');
    }
    //show window setting logic
    if ( $(this).attr('id')==='setting-logic-q'){
        if ( $('#setting-logic-q').attr('data-window-1') === 'full' ) { $('.modalbox-setting').addClass('full-window-q'); }
        if ( $('#setting-logic-q').attr('data-window-2') === 'full' ) { $('.modalbox-setting').addClass('scroll-box-q'); }
        $('.logick-box').css('display', 'flex');
    }
    //show window setting design
    if ( $(this).attr('id')==='setting-design-q'){
        $('.setting_design-box').css('display', 'block');
        $('.modalbox-setting').css('max-width', '300px');
        $('.swap-modalbox-setting').addClass('background-design-panel');
    }
    //quick quasart
    if ( $(this).attr('id')==='setting-quick-q'){
        $('.quick-start-q').css('display', 'flex');
        $('.modalbox-setting').addClass('full-window-2-q');
    }
    //quick quasart
    if ( $(this).attr('id')==='setting-help-q'){
        $('.help-box-q').css('display', 'block');
    }
});


var stringq ='';
var strokaVbd='';
var arrayField = [];
var heading = '';
var stringCSS='';
var selectorsave ='';
function proverkaString(){
	stringq = stringq.replace(/</g,"Q1@").replace(/>/g, 'Q2@').replace(/'/g, '%a@').replace(/"/g, '%A@').replace(/[/]/g, '@palk@').replace(/nbsp;/g, ' ').replace(/;/g, 'TO%C').replace(/[|]/g, 'R@R').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&/g, '').replace(/%/g, 'PROcentQ');
}
function headingString(heading){
	heading = heading.replace(/</g,'').replace(/>/g, '').replace(/'/g, 'ZapETayA').replace(/"/g, '').replace(/[/]/g, '').replace(/nbsp;/g, ' ').replace(/;/g, '').replace(/[|]/g, '').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&/g, '');
	return heading;
}

//window setting hide
$(".swap-modalbox-setting").on('click', function(e){
    //3 conditions fix
    if ( (!$(".modalbox-setting").is(e.target)) && ( $(".modalbox-setting").has(e.target).length === 0) && ( !$(e.target).hasClass('fa-timesq') )  && ( !$(e.target).hasClass('remove-logic-elment') ) )   {
        $(".swap-modalbox-setting").addClass('none-box-q').css({'width' : '0%'});
    }
}); 
$(".close-window-setting i").on('click', function(e){
    $(".swap-modalbox-setting").addClass('none-box-q').css({'width' : '0%'});
}); 
 

var objectSaveForm = {};
//Save form
//1. string input
function saveinput() {
    heading = selectorsave.find('.heading-field-q').html();
    let input = selectorsave.find('input');
    strokaVbd = strokaVbd +  'input' + ';' + headingString( input.attr('placeholder') ) + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading ) + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-placeholder') + ';' + input.css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + input.css('background-color') + ';' + selectorsave.attr('data-focus-class') +  ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + input.css('height') + ';' + selectorsave.find('.fa-icons-q i').attr('class') + ';' + selectorsave.find('.fa-icons-q').attr('data-num') + ';' + selectorsave.find('.fa-icons-q i').css('color') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-style') + ';' + selectorsave.attr('data-validation') + ';' + input.css('padding-top') + ' ' + input.css('padding-right') + ' ' + input.css('padding-bottom') + ' ' + input.css('padding-left') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + input.attr('data-filling') + ';' + input.attr('data-filling-a') + ';' + selectorsave.attr('data-custum-2') +'/' ;

}

//2. string input mail
function saveemail() {
    heading = selectorsave.find('.heading-field-q').html();
    let input = selectorsave.find('input');
    
    strokaVbd = strokaVbd + 'type-email-element' + ';' + headingString( input.attr('placeholder') ) + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading )  + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-placeholder') + ';' + input.css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + input.css('background-color') + ';' + selectorsave.attr('data-focus-class') + ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + input.css('height') + ';' + selectorsave.find('.fa-icons-q i').attr('class') + ';' + selectorsave.find('.fa-icons-q').attr('data-num') + ';' + selectorsave.find('.fa-icons-q i').css('color') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-style') + ';' + selectorsave.attr('data-validation') + ';' + input.css('padding-top') + ' ' + input.css('padding-right') + ' ' + input.css('padding-bottom') + ' ' + input.css('padding-left') +  ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + selectorsave.attr('data-custum-2') +'/' ;
}

//3. string phone
function savephone() {
    heading = selectorsave.find('.heading-field-q').html();
    let input = selectorsave.find('input');
    strokaVbd = strokaVbd +  'type-phone-element' + ';' + headingString( input.attr('placeholder') ) + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading ) + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-placeholder') + ';' + input.css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + input.css('background-color') + ';' + selectorsave.attr('data-focus-class') +  ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + input.css('height') + ';' + selectorsave.find('.fa-icons-q i').attr('class') + ';' + selectorsave.find('.fa-icons-q').attr('data-num') + ';' + selectorsave.find('.fa-icons-q i').css('color') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-style') + ';' + selectorsave.attr('data-validation') + ';' + input.css('padding-top') + ' ' + input.css('padding-right') + ' ' + input.css('padding-bottom') + ' ' + input.css('padding-left') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + input.attr('data-mask') + ';' + input.attr('data-mask-a') + ';' + selectorsave.attr('data-custum-2') + '/' ;

}

//4. string checkbox
function savecheckbox() {
	heading = selectorsave.find('.heading-field-q').html();
    strokaVbd = strokaVbd + 'checkboks' + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading ) + ';' + selectorsave.find('label').length + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('data-radio') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.attr('data-align') + ';' + stringq  + ';' + selectorsave.attr('data-style') + ';' + selectorsave.find('.checkbox-qform').css('border-top-color') + ';' + selectorsave.find('.checkbox-fafa i').css('color') + ';' + selectorsave.find('label .html-text-check-q').css('color') + ';' + selectorsave.find('label .html-text-check-q').css('font-size') + ';' + selectorsave.find('.checkbox-qform').css('width')+ ';' + selectorsave.find('.checkbox-fafa i').css('font-size') + ';' + selectorsave.find('.checkbox-qform').css('border-top-width') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.find('.checkbox-fafa i').css('background-color') + ';' + selectorsave.find('.checkbox-fafa i').css('width') + ';' + selectorsave.find('.swap-checkbox-q').css('padding-top') + ';' + selectorsave.find('label .html-text-check-q').css('padding-left') + ';' + selectorsave.find('label').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + selectorsave.find('.checkbox-fafa').css('background-color') + ';' + selectorsave.attr('data-align-box') + ';'; 
    //array label
    selectorsave.find('label').each(function(){
        stringq = $(this).find('.html-text-check-q').html();
        proverkaString();
        stringq = stringq.replace( /\s$/g , '' );
        strokaVbd = strokaVbd+$(this).attr('for')+'|'+stringq+'|'+$(this).prev('input').attr('date-rasschet')+'|'+ $(this).prev('input').attr('date-defoult')+';' ;
    });
    strokaVbd = strokaVbd + '/' ;
}


//6. string dropown
function savedropdawn() {
    let massivLebelov = selectorsave.find('option'); 
    heading = selectorsave.find('.heading-field-q').html();
    let select = selectorsave.find('select');
    
    strokaVbd = strokaVbd + 'type-dropdawn-element' + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading ) + ';' + massivLebelov.length + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-placeholder') + ';' + select.css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + select.css('background-color') + ';' + selectorsave.attr('data-focus-class') + ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + select.css('height') + ';' + select.css('color') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-style') +';' + selectorsave.find('.heading-field-q').css('margin-bottom') +';' +  select.css('padding-top') + ' ' + select.css('padding-right') + ' ' + select.css('padding-bottom') + ' ' + select.css('padding-left') +';' + selectorsave.find('.heading-field-q').css('font-weight') + ';'; 
    //save options
    $(massivLebelov).each(function(){
        strokaVbd = strokaVbd + $(this).attr('id') + '#' + headingString( $(this).html() ) + '#' + $(this).attr('date-rasschet') + '#' + $(this).attr('data-selected') + ';' ;
    });
    strokaVbd = strokaVbd + '/' ;
} 

//6. string submit
function savesunmit() {
    let submit = selectorsave.find('span');
    
    strokaVbd = strokaVbd + 'submits' + ';' + selectorsave.attr('data-sizes') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.attr('data-ful') + ';' + selectorsave.attr('data-align-box') + ';' + selectorsave.attr('data-border-radius') + ';' + submit.css('background-color') + ';' + submit.css('color') + ';' + headingString( submit.html() )  + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-hover-color') + ';' + selectorsave.attr('data-hover-background') + ';' + selectorsave.attr('data-style') +';' + selectorsave.attr('data-border-color') + ';' + submit.css('font-size') +';'+ submit.css('padding-top') + ' ' + submit.css('padding-right') + ' ' + submit.css('padding-bottom') + ' ' + submit.css('padding-left') +  ';' + selectorsave.attr('data-border-width') + ';' + selectorsave.attr('data-custum-2') + ';' + selectorsave.attr('data-disable-style') + '/' ; 
}



//8. string textarea
function savetextaria() {
    heading = selectorsave.find('.heading-field-q').html();
    let textarea = selectorsave.find('textarea');
    
    strokaVbd = strokaVbd + 'type-textarea-element' + ';' +  headingString( textarea.attr('placeholder') )  + ';' + selectorsave.attr('data-sizes') + ';' + selectorsave.attr('data-req') + ';' + headingString( heading ) + ';' + textarea.css('height') + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' +  selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-placeholder')  + ';' + textarea.css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + textarea.css('background-color') + ';' + selectorsave.attr('data-focus-class') + ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-style') +';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + textarea.css('padding-top') + ' ' + textarea.css('padding-right') + ' ' + textarea.css('padding-bottom') + ' ' + textarea.css('padding-left') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + selectorsave.attr('data-custum-2') +'/' ;	
}


//8. string custom text
function savecustomtext(){
    stringq = selectorsave.find('div').html();
    proverkaString(); 
    strokaVbd = strokaVbd + 'type-custom-text-element' + ';' + selectorsave.attr('data-sizes') + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + stringq + ';' + selectorsave.attr('data-custum') + '/' ; 
}


//9. string total
function saveItog (){ 
    let kalkulation = selectorsave.attr('data-kalkulation').replace(/</g,'').replace(/>/g, '').replace(/'/g, '').replace(/"/g, '').replace(/[/]/g, '@palk@').replace(/;/g, '').replace(/&/g, ''); 
    let convertHTMLQ = selectorsave.find('div').html().replace(/</g,'Q1@').replace(/>/g, 'Q2@').replace(/'/g, '%a@').replace(/"/g, '%A@').replace(/[/]/g, '@palk@').replace(/;/g, 'TO%C').replace(/&/g, ''); 
    strokaVbd = strokaVbd + 'type-itog-element' + ';' + selectorsave.attr('data-sizes') + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + convertHTMLQ + ';' + selectorsave.attr('data-custum') + ';' + kalkulation + ';' + selectorsave.attr('data-rounding') + ';' + selectorsave.attr('data-hide-total') +'/' ;   
}


//10. string range
function savepolzunok() {
    let slider = selectorsave.find('.polzet');
    heading = selectorsave.find('.heading-field-q').html();
    strokaVbd = strokaVbd + 'type-range-element' + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + slider.attr('data-class') + ';' + slider.attr('data-min') +';' + slider.attr('data-max') +';'+ slider.attr('data-step') +';' + slider.attr('data-val') +';'+ selectorsave.find('.ui-slider-range').css('background-color') + ';'+ slider.css('background-color') +';'+ selectorsave.find('.ui-slider-handle').css('background-color') + ';'+ slider.attr('data-color4') + ';' + selectorsave.attr('data-style') + ';' + slider.attr('data-sh') + ';' +  headingString( heading ) + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' +  slider.attr('data-sh-2') + ';' + slider.attr('data-p-s') + ';' + slider.css('height') + ';' + slider.css('border-radius') + ';' + slider.attr('data-m-s') + ';' + slider.attr('data-color5') + '/' ;
}  

//11. string datepicker
function datapickerqq() {
    heading = selectorsave.find('.heading-field-q').html();
    let input = selectorsave.find('input');
    
    strokaVbd = strokaVbd + 'type-data-element' + ';' + headingString( input.attr('placeholder') ) + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading ) + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-placeholder') + ';' + input.css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + input.css('background-color') + ';' + selectorsave.attr('data-focus-class') + ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + input.css('height') + ';' + selectorsave.find('.fa-icons-q i').attr('class') + ';' + selectorsave.find('.fa-icons-q').attr('data-num') + ';' + selectorsave.find('.fa-icons-q i').css('color') + ';' + input.attr('data-colorsw') + ';' + input.attr('data-colorsw2') + ';' + input.attr('data-colorsw3') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-style') + ';' + selectorsave.attr('data-border-color') + ';' + input.css('padding-top') + ' ' + input.css('padding-right') + ' ' + input.css('padding-bottom') + ' ' + input.css('padding-left')  + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + selectorsave.attr('data-lang') + ';' + selectorsave.attr('data-s-1') + ';' + selectorsave.attr('data-s-2') +'/' ;
}

//12. string captcha
function captchaSave() {
    heading = selectorsave.find('.heading-field-q').html();
    strokaVbd = strokaVbd + 'type-captcha-element' + ';' + selectorsave.attr('data-sizes') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.find('input.pl-form-q').css('border-top-color') + ';' + selectorsave.find('input.pl-form-q').css('border-top-width') + ';' + selectorsave.find('input.pl-form-q').css('border-top-right-radius') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + headingString( heading ) + ';' + selectorsave.find('.heading-field-q').css('font-weight') + '/' ;	
}

//13. string uload
function uploaderq() {
    heading = selectorsave.find('.heading-field-q').html();
    
    strokaVbd = strokaVbd + 'type-upload-element' + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading ) + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.attr('data-max') + ';' + selectorsave.attr('data-r') + ';' + selectorsave.attr('data-v') + ';' + headingString( selectorsave.find('label span').html() ) + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-color1') + ';' + selectorsave.attr('data-color2') + ';' + selectorsave.attr('data-border-color') + ';' + selectorsave.find('i').css('color') + ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-hover-color') + ';' + selectorsave.attr('data-hover-background') + ';' + selectorsave.find('label').css('font-size') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + selectorsave.attr('data-border-width') + '/' ;
}

//14. string privacy
function privacySave() {
    stringq = selectorsave.find('label .html-text-check-q').html();
    proverkaString();
    heading = selectorsave.find('.heading-field-q').html();
    
    strokaVbd = strokaVbd + 'type-privacy-element' + ';' + selectorsave.attr('data-sizes') + ';' + selectorsave.attr('data-none') + ';' + headingString( heading ) + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('data-style') + ';' + selectorsave.find('.checkbox-qform').css('border-top-color') + ';' + selectorsave.find('.checkbox-fafa i').css('color') + ';' + selectorsave.find('label span').css('font-size') + ';' + selectorsave.find('.checkbox-qform').css('width')+ ';' + selectorsave.find('.checkbox-fafa i').css('font-size') + ';' + selectorsave.find('.checkbox-qform').css('border-top-width') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.find('.checkbox-fafa i').css('background-color') + ';' + stringq + ';' + selectorsave.find('label').attr('for') + ';' + selectorsave.attr('data-req') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.find('.swap-checkbox-q').css('padding-top') + ';' + selectorsave.find('label .html-text-check-q').css('padding-left') + ';' + selectorsave.find('label').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + selectorsave.attr('data-defoult') + ';' + ';' + selectorsave.find('.checkbox-fafa').css('background-color') + '/'; //';' + ';'  need for pro
}

//15. string paypal
function savepaypal() {
    let object = selectorsave.find('.text-paypal-q');
    strokaVbd = strokaVbd + 'type-paypal-element' + ';' + headingString( object.attr('data-live-account') ) + ';' + headingString( object.attr('data-sandbox-account') ) + ';' + object.attr('data-senbox-mode') + ';' + object.attr('data-price') + ';' + object.attr('data-number') + ';' + object.attr('data-currency') + ';' + object.attr('data-lang') + ';' + selectorsave.attr('data-sizes')  + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.attr('data-custum') + ';' + headingString( object.attr('data-item-name') ) + ';';
    
    stringq = object.attr('data-url-success');
    proverkaString(); 
    strokaVbd = strokaVbd + stringq + ';';
    stringq = object.attr('data-url-cancel');
    proverkaString(); 
    strokaVbd = strokaVbd + stringq + '/';
}

//16. string timepicker
function savetimepicker() {
    heading = selectorsave.find('.heading-field-q').html();
    let input = selectorsave.find('input');
    strokaVbd = strokaVbd +  'type-timepicker-element' + ';' + ';' + selectorsave.attr('data-req') + ';' + selectorsave.attr('data-sizes') + ';' + headingString( heading ) + ';' + selectorsave.attr('data-tabs') + ';' + selectorsave.attr('id') + ';' + selectorsave.attr('data-none') + ';' + selectorsave.find('.heading-field-q').css('color') + ';' + selectorsave.find('.heading-field-q').css('font-size') + ';' + selectorsave.find('.wrap-time-picker-q').css('color') + ';' + selectorsave.find('.wrap-time-picker-q').css('font-size') + ';' + selectorsave.attr('data-border-color') + ';' + input.css('background-color') + ';' + selectorsave.attr('data-focus-class') + ';' + selectorsave.attr('data-border-radius') + ';' + selectorsave.attr('data-border-width') + ';' + input.css('height') + ';' + selectorsave.find('.fa-icons-q i').attr('class') + ';' + selectorsave.find('.fa-icons-q').attr('data-num') + ';' + selectorsave.find('.fa-icons-q i').css('color') + ';' + selectorsave.attr('data-custum') + ';' + selectorsave.attr('data-style') + ';' + selectorsave.attr('data-validation') + ';' + input.css('padding-top') + ' ' + input.css('padding-right') + ' ' + input.css('padding-bottom') + ' ' + input.css('padding-left') + ';' + selectorsave.find('.heading-field-q').css('margin-bottom') + ';' + selectorsave.find('.heading-field-q').css('font-weight') + ';' + selectorsave.attr('data-min') + ';' + selectorsave.attr('data-max') + ';' + selectorsave.attr('data-custum-2') + ';' + selectorsave.attr('data-step') + ';' + selectorsave.attr('data-color-1') + ';' + selectorsave.attr('data-color-2') + ';' + selectorsave.attr('data-color-3') + ';' + selectorsave.attr('data-color-4') +'/' ;
}



// Save form
$("#save-form-q").on('click', function(){  

    //validation name form
    let value = $('#form-name-value').val().replace(/</g,'').replace(/>/g, '').replace(/'/g, '').replace(/"/g, '').replace(/[/]/g, '').replace(/;/g, '').replace(/[|]/g, '').replace(/&/g, '').replace(/\s/g,'_');
    let validation = validationNameForm(value);
    if (validation === false ){
        $('.error-saved-form-quasar').css({'opacity' : '1', 'top': '100px', 'z-index' : '1'});
        setTimeout(function(){
            $(".error-saved-form-quasar").css({'opacity' : '0', 'top': '15px', 'z-index' : '-1'});
            $("#save-form-q").removeClass('nont-active');
        },2000);
        $("#save-form-q").removeClass('nont-active');
        return;
    }

    strokaVbd = '';
    //array all field
    $('.admin-form-q').children('.element-css-q').each(function(){
        selectorsave = $(this);
        //remove class 'Hide field on page load'
        let removeSpecialClass = 0;
        if ( selectorsave.hasClass('nonesq') ) {
            selectorsave.removeClass('nonesq'); 
            removeSpecialClass = 1;
        }
        if ( $(this).attr('data-tip')==='input'){
            saveinput();
        }
        if ( $(this).attr('data-tip')==='type-email-element'){
             saveemail();
        }
        if ( $(this).attr('data-tip')==='type-phone-element'){
            savephone();
        }
        if ( $(this).attr('data-tip')==='checkboks'){
            savecheckbox(); 
        }
        if ( $(this).attr('data-tip')==='dropdawn'){
            savedropdawn();
        }
        if ( $(this).attr('data-tip')==='submits'){
            savesunmit();
        }
        if ( $(this).attr('data-tip')==='type-textarea-element'){
            savetextaria();
        }
        if ( $(this).attr('data-tip')==='type-custom-text-element'){
            savecustomtext();
        }
        if ( $(this).attr('data-tip')==='type-itog-element'){
            saveItog();
        } 
        if ( $(this).attr('data-tip')==='type-range-element'){
            savepolzunok();
        }
        if ( $(this).attr('data-tip')==='type-data-element'){
            datapickerqq();
        }
        if ( $(this).attr('data-tip')==='type-upload-element'){
            uploaderq();
        }
        if ( $(this).attr('data-tip')==='type-captcha-element'){
            captchaSave();
        }
        if ( $(this).attr('data-tip')==='type-privacy-element'){
            privacySave();
        }
        if ( $(this).attr('data-tip')==='type-paypal-element'){
            savepaypal();
        } 
        if ( $(this).attr('data-tip')==='type-timepicker-element'){
            savetimepicker();
        }
        //return class 'Hide field on page load'
        if ( removeSpecialClass === 1 ) {
            selectorsave.addClass('nonesq'); 
        }
        //14. construction level 1
        if ($(this).attr('data-tip') === 'construction-block' ) {
            strokaVbd = strokaVbd + 'construction@' + $(this).attr('data-tabs') + '/' ; 
            $(this).find('.box-construction-q:not(.two-q)').each(function(){ 
               
                strokaVbd = strokaVbd + 'container@'+ $(this).attr('data-sizeq') + '@' + $(this).attr('data-color-1') + '@' + $(this).attr('data-padding') + '@' + $(this).attr('data-margin') + '@' + $(this).attr('data-custum') + '/' ;
                $(this).find('.form-element-q').each(function(){
                    //save consctruction level 1
                    selectorsave = $(this);
                    if( ! selectorsave.parent().hasClass('container-construction-2') ) {
                        //1. str input
                        if ( $(this).attr('data-tip')==='input'){
                            saveinput();
                        }
                        //2. str mail
                        if ( $(this).attr('data-tip')==='type-email-element'){
                            saveemail();
                        }
                        //3. str phone
                        if ( $(this).attr('data-tip')==='type-phone-element'){
                            savephone();
                        }
                        //4. str checkbox
                        if ( $(this).attr('data-tip')==='checkboks'){
                            savecheckbox();
                        }
                        //5. str dropdown
                        if ( $(this).attr('data-tip')==='dropdawn'){
                            savedropdawn();
                        }
                        //6. str submit
                        if ( $(this).attr('data-tip')==='submits'){
                            savesunmit();
                        }
                        //7. str textarea
                        if ( $(this).attr('data-tip')==='type-textarea-element'){
                            savetextaria();
                        }
                        //8. str custom HTML
                        if ( $(this).attr('data-tip')==='type-custom-text-element'){
                            savecustomtext();
                        }
                        //9. str total
                        if ( $(this).attr('data-tip')==='type-itog-element'){
                            saveItog();
                        } 
                        //10. str range
                        if ( $(this).attr('data-tip')==='type-range-element'){
                            savepolzunok();
                        }
                        //11. str datepicker
                        if ( $(this).attr('data-tip')==='type-data-element'){
                            datapickerqq();
                        }
                        //12. str upload
                        if ( $(this).attr('data-tip')==='type-upload-element'){
                            uploaderq();
                        }
                        //13. str captcha
                        if ( $(this).attr('data-tip')==='type-captcha-element'){
                            captchaSave();
                        }
                        //14 str privacy
                        if ( $(this).attr('data-tip')==='type-privacy-element'){
                            privacySave();
                        }
                        //15 str paypal
                        if ( $(this).attr('data-tip')==='type-paypal-element'){
                            savepaypal();
                        } 
                        //16 timepicker
                        if ( $(this).attr('data-tip')==='type-timepicker-element'){
                            savetimepicker();
                        }
                        //17. construction level 2
                        if ($(this).attr('data-tip') === 'construction-block-2' ) {
                            strokaVbd = strokaVbd + 'construction2@' + '/' ; 
                            $(this).find('.box-construction-q').each(function(){ 
                                strokaVbd = strokaVbd + 'container2@'+ $(this).attr('data-sizeq') + '@' + $(this).attr('data-color-1') + '@' + $(this).attr('data-padding') + '@' + $(this).attr('data-margin') + '@' + $(this).attr('data-custum') + '/';
                                $(this).find('.form-element-q').each(function(){
                                    selectorsave = $(this);
                                    //1. str input
                                    if ( $(this).attr('data-tip')==='input'){
                                        saveinput();
                                    }
                                    //2. str checkbox
                                    if ( $(this).attr('data-tip')==='checkboks'){
                                        savecheckbox();
                                    }
                                    //3. str mail
                                    if ( $(this).attr('data-tip')==='type-email-element'){
                                        saveemail();
                                    }
                                    //4. str phone
                                    if ( $(this).attr('data-tip')==='type-phone-element'){
                                        savephone();
                                    }
                                    //5. str dropdown
                                    if ( $(this).attr('data-tip')==='dropdawn'){
                                        savedropdawn();
                                    }
                                    //6. str submit
                                    if ( $(this).attr('data-tip')==='submits'){
                                        savesunmit();
                                    }
                                    //7. str textarea
                                    if ( $(this).attr('data-tip')==='type-textarea-element'){
                                        savetextaria();
                                    }
                                    //8. str custom HTML
                                    if ( $(this).attr('data-tip')==='type-custom-text-element'){
                                        savecustomtext();
                                    }
                                    //9. str total
                                    if ( $(this).attr('data-tip')==='type-itog-element'){
                                        saveItog();
                                    } 
                                    //10. str range
                                    if ( $(this).attr('data-tip')==='type-range-element'){
                                        savepolzunok();
                                    }
                                    //11. str datepicker
                                    if ( $(this).attr('data-tip')==='type-data-element'){
                                        datapickerqq();
                                    }
                                    //12. str upload
                                    if ( $(this).attr('data-tip')==='type-upload-element'){
                                        uploaderq();
                                    }
                                    //13. str captcha
                                    if ( $(this).attr('data-tip')==='type-captcha-element'){
                                        captchaSave();
                                    }
                                    //14. str privacy
                                    if ( $(this).attr('data-tip')==='type-privacy-element'){
                                        privacySave();
                                    }
                                    //15 str paypal
                                    if ( $(this).attr('data-tip')==='type-paypal-element'){
                                        savepaypal();
                                    } 
                                    //16 timepicker
                                    if ( $(this).attr('data-tip')==='type-timepicker-element'){
                                        savetimepicker();
                                    }
                                }); 
                                strokaVbd = strokaVbd + 'endconteiner2@' + '/' ;
                            }); 
                            strokaVbd = strokaVbd + 'endconstruct2@' + '/' ;
                        }
                    }
                });	
                strokaVbd = strokaVbd + 'endconteiner@' + '/' ;
            });
         	strokaVbd = strokaVbd + 'endconstruct@' + '/' ;
        }
    

    }); // end save field
   

    //save other
    $("#inbd").attr('value', strokaVbd); // save content form  in tex input
    //save form name
    let originalNandNovname = $("#name-field-bd").attr('value') + '/' + $(".swap-form-name-panel input").val() ; // original name + current name
    $("#name-field-bd").attr('data-name', originalNandNovname ) ;// save name in tex input
    $("#name-field-bd").attr('value', $(".swap-form-name-panel input").val() );//fix bug save

    //save email
    window.tinyMCE.triggerSave();
    let stringTextariaMail = window.tinyMCE.get('ContentFormqMail').getContent();
    
    stringTextariaMail = stringTextariaMail.replace( /\//g, "@TRDEEEQWGG").replace( /</g, "SkobKi").replace( />/g, 'SKrjlfd').replace( /'/g, "GndRERD").replace( /"/g, "KLFD2NFD").replace( /\|/g, "@P$").replace( /&/g, "").replace( /\\/g, "");
    
    let password = $('#passwordsmtp').val().replace( /\//g, "@TRDEEEQWGG").replace( /\\/g, "@RRRRDDDETGCDSW").replace( /\|/g, "@PQWRTEADYY").replace( /</g, "@RRDDYESQWQOOJ").replace( />/g, "@ARWSFGGGGCDCSARYHB").replace( /'/g, "@YTREWASCGNBFDSI").replace( /"/g, "@GFDRHGFYHKJHG").replace( /&/g, "@RRTTESVCGHNFDEWSHM");
    let stringMail = $('#Emailsq').val() + '|' + $('#emailNameq').val() + '|' + stringTextariaMail + '|' + $('input[name=type-send-mail]:checked').attr('id') + '|' + $('#sendername').val() + '|' + $('#senderemail').val() + '|' + $('#sendernamesmtp').val() + '|' + $('#sendermailsmtp').val() + '|' + $('#usernamesmtp').val() + '|' + password + '|' + $('#hostsmtp').val() + '|' + $('#posrtsmtp').val() ;
    //save width form + id number  
    let strSetting = $('.swap-form-size-panel input').val(); //width form
    strSetting = strSetting + '/' + $('.id-form-nuber-field').html() ;//number id field
    //email
    strSetting = strSetting + '/' + stringMail.replace(/'/g, 'ZapETayA') ; 
    //save design form
    strSetting = strSetting + '/' + $('.container-form-q').css('background-color') + '|' + $('.container-form-q').css('border-top-width') + ' ' + $('.container-form-q').css('border-bottom-width') + ' ' + $('.container-form-q').css('border-right-width') + ' ' + $('.container-form-q').css('border-left-width') + '|' + $('.container-form-q').css('border-top-color') + '|' + $('#backgroun-image-q').val().replace( /\//g, "#");
    if ( $('.container-form-q').hasClass('shedow-none-q') ){ 
        strSetting = strSetting + '|' + 'shedow-none-q'; 
    }
    else { 
        strSetting = strSetting + '|' + 'not'; 
    }
    if ( $('.container-form-q').hasClass('background-full-size-img') ){ 
        strSetting = strSetting + '|' + 'background-full-size-img'; 
    }
    else { 
        strSetting = strSetting + '|' + 'not'; 
    }
    if ( $('#custom-form-class').val() !==''){ 
        strSetting = strSetting + '|' + $('#custom-form-class').val();
    }
    else { 
        strSetting = strSetting + '|'; 
    }
    strSetting = strSetting + '|' + $('.container-form-q').css('padding-top') + ' ' + $('.container-form-q').css('padding-right') + ' ' + $('.container-form-q').css('padding-bottom') + ' ' + $('.container-form-q').css('padding-left') + '|' ;
    //popup style
    strSetting = strSetting + $('.button-design-popup').css('padding-top') + ' ' + $('.button-design-popup').css('padding-right') + ' ' + $('.button-design-popup').css('padding-bottom') + ' ' + $('.button-design-popup').css('padding-left') + '|' + $('.button-design-popup').css('border-top-width') + ' ' + $('.button-design-popup').css('border-bottom-width') + ' ' + $('.button-design-popup').css('border-left-width') + ' ' + $('.button-design-popup').css('border-right-width') + '|' + $('.button-design-popup').css('background-color') + '|' + $('.button-design-popup').css('color') + '|' + $('.button-design-popup').css('font-size') + '|' + $('.button-design-popup').css('border-top-color') + '|' + $('.button-design-popup').css('border-top-left-radius') + ' ' + $('.button-design-popup').css('border-top-right-radius') + ' ' + $('.button-design-popup').css('border-bottom-right-radius') + ' ' + $('.button-design-popup').css('border-bottom-left-radius') + '|' + $('.button-design-popup').attr('data-hover-background') + '|' + $('.button-design-popup').attr('data-hover-color') + '|' + $('#custom-form-popup').val() + '|';
    //form border radius
    strSetting = strSetting + $('.container-form-q').css('border-top-left-radius') + ' ' + $('.container-form-q').css('border-top-right-radius') + ' ' + $('.container-form-q').css('border-bottom-right-radius') + ' ' + $('.container-form-q').css('border-bottom-left-radius');
    
    //disalloy design
    if ( $('.swap-admin-modalbox').hasClass('disable-design-q') ){ 
        strSetting = strSetting + '|' + 'yes'; 
    }
    else { 
        strSetting = strSetting + '|' + 'not'; 
    }
    
    //save localization
    strSetting = strSetting + '/'+ headingString( $('#message-received-q').val() ) + '|' + headingString( $('#message-sent-q').val() )+ '|' + headingString( $('#required-field-q').val() ) + '|' + headingString( $('#invalid-mail-q').val() ) + '|' + headingString( $('#alphabets-send-q').val() ) + '|' + headingString( $('#numbers-send-q').val() ) +'|'+ headingString( $('#captcha-error-q').val() )+'|'+ headingString( $('#uplod-file-1-q').val() ) +'|'+ headingString( $('#uplod-file-2-q').val() ) +'|'+ headingString( $('#uplod-file-3-q').val() ) +'|'+ headingString( $('#uplod-file-4-q').val() )  +'|'+ headingString( $('#submit-next').val() ) + '|' + headingString( $('#invalid-phone').val() )+ '|';
    //addon woo loc
    if ( $('#product-1-order').length > 0 ){ strSetting = strSetting + headingString( $('#product-1-order').val() ) + '|'; }
    else { strSetting = strSetting + 'New order product:' + '|'; }
    
    if ( $('#quantity-1-order').length > 0 ){ strSetting = strSetting + headingString( $('#quantity-1-order').val() ) + '|'; }
    else { strSetting = strSetting + 'Quantity:' + '|'; }
    
    if ( $('#price-1-order').length > 0 ){ strSetting = strSetting + headingString( $('#price-1-order').val() ) + '|'; }
    
    //string key 
    var keyvalid = 0;
    var keyvalid2 = 0;
    var keyvalid3 = 0;
    $('#drag-drop-element .form-element-q').each(function(){  
        if ( $(this).attr('data-validation')==='Only numbers' ) { keyvalid2++; }
        if ( $(this).attr('data-validation')==='Only alphabets' ) { keyvalid3++; }
        if ( $(this).hasClass('requed-field-q') ) { keyvalid++;}
    }); 
    strSetting = strSetting + '/'+ keyvalid +'A'+ keyvalid2 +'A'+ keyvalid3;
    //save redirect after submit
    if ( $('#redirect-after-submit').val() !== '') {
        let redirect = $('#redirect-after-submit').val().replace(/</g,"Q1@").replace(/>/g, 'Q2@').replace(/'/g, '%a@').replace(/"/g, '%A@').replace(/[/]/g, '@palk@').replace(/nbsp;/g, ' ').replace(/;/g, 'TO%C').replace(/[|]/g, 'R@R').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&/g, '');
        strSetting = strSetting + '/' + redirect;
    }
    else { 
        strSetting = strSetting + '/';
    }
    // save text after sending form
    let stringAfterSendText = window.tinyMCE.get('after-send-mail-text').getContent();
    stringAfterSendText = stringAfterSendText.replace(/</g,"Q1@").replace(/>/g, 'Q2@').replace(/'/g, '%a@').replace(/"/g, '%A@').replace(/[/]/g, '@palk@').replace(/nbsp;/g, ' ').replace(/;/g, 'TO%C').replace(/[|]/g, 'R@R').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&/g, '');
    strSetting = strSetting + '/' + stringAfterSendText;   
    
    //save antispam setting
    let antispam = 'not';
    if ( $('#anti-spam-q').prop('checked') ){antispam ='yes'; }
    strSetting = strSetting + '/' +antispam;
    
    //save copy mail
    let copy_mail = 'not';
    if ( $('#copy-mail-for-user').prop('checked') ){copy_mail ='yes'; }
    strSetting = strSetting + '/' +copy_mail;
    
    //text after send
    let after_text = 'not';
    if ( $('#checkbox-after-text').prop('checked') ){after_text ='yes'; }
    strSetting = strSetting + '/' +after_text;
    
    //auto scroll enable
    let auto_scroll = 'not';
    if ( $('#copy-auto-scroll').prop('checked') ){auto_scroll ='yes'; }
    strSetting = strSetting + '/' +auto_scroll;
   
    //write setting 
    $("#setting-field-bd").attr('value', strSetting ) ;// save setting in tex input

    //save tabs
    if ( $('.tab-box-q').length === 0 ){ $('#add-tab-q').attr('data-tab-1' , '0'); }
    let strTab = $('#add-tab-q').attr('data-tab-1') + '|'+ $('.swap-tabs-form-q').html().replace(/</g,'@1' ).replace(/>/g,'@2' ).replace(/activ-tab-q/g,'' ).replace(/\"/g,'KqRT' ); 
    $("#tabs-field-bd").attr('value', strTab  ) ;// save number tab in tex input
  
    let contentForm = $("#inbd").val(); //content form
    let nameForm = $("#name-field-bd").attr('data-name'); //name form
    let settingForm = $("#setting-field-bd").val(); //setting form
    let tabForm = $("#tabs-field-bd").val(); //tabs
    let logicForm = $("#logic-field-bd").val(); //logic
    
    //overwriting form data
    let classThisForm = $('.class-this-form-q').html();
    $(classThisForm).find('.string-html-form-bd').html(contentForm);
    $(classThisForm).find('.setting-form-bd').html(settingForm);
    $(classThisForm).find('.tabs-form-bd').html(tabForm);
    $(classThisForm).find('.logick-form-bd').html(logicForm);

    $.ajax({
        type: "POST",
        data: {
            action: 'save_forma_q',
            nonce_code : params.nonce,
            inbd: contentForm, 
            nameformq: nameForm, 
            settingsbd: settingForm,
            tabsq: tabForm, 
            logic: logicForm
        },
        url: params.ajaxurl,
        success: function( response ) {
            $('.saved-form-quasar').css({'opacity' : '1', 'top': '100px', 'z-index' : '1'});
            setTimeout(function(){
                $(".saved-form-quasar").css({'opacity' : '0', 'top': '15px', 'z-index' : '-1'});
                $("#save-form-q").removeClass('nont-active');
            },2000);
        },
        error: function (error) {
            $('.error-saved-form-quasar').css({'opacity' : '1', 'top': '100px', 'z-index' : '1'});
            setTimeout(function(){
                $(".error-saved-form-quasar").css({'opacity' : '0', 'top': '15px', 'z-index' : '-1'});
                $("#save-form-q").removeClass('nont-active');
            },2000);
            $("#save-form-q").removeClass('nont-active');
        }
    });	  	
    //clear tex input
    $("#inbd, #setting-field-bd, #tabs-field-bd, #logic-field-bd").attr('value' , '') ; 
    $("#name-field-bd").attr('data-name' , '') ;

});

//calculator validation
$('.modalbox-admin-panel').on('keyup', '#ItogTextaarea',  function(){
    validationCalculator( $(this) );
});
function validationCalculator(x){
    let field = x;
    let val = field.val().replace(/\s/g, '');
   // if ( val ===''){return;}
    let number = 0;
    //dublicate spec symbol
    if ( val.match(/([\/*.\[\]])\1/) ) {
        number++;
    }   
    //raznie operatori vmeste
    if ( val.match(/[*\/][+*\/\-]/g) || val.match(/[+*\/\-][*\/]/g) ){
        number++;
    }  
    //zapreshenie simvoli
    let simbol = val.replace(/\[.*?\]/g, '');
    if ( simbol.match(/[^0-9+*\-\/\(\)\.\[\]]/g) ) {
        number++;
    }
    //start string
    if ( val.match(/^[+*\/\.\]\)]/g) ) {
        number++;
    }
    //end string
    if ( val.match(/[+*\/\.\-\[\(]$/g) ) {
        number++;
    }
    //zapret tochki posle simvolov
    if ( val.match(/([+*\/\.\-]\.)/g) ) {
        number++;
    }
    //zapret tochki do simvolov
    if ( val.match(/(\.[+*\/\.\-])/g) ) {
        number++;
    }
    //megdy skobkami obezatelno znak
    if ( val.match(/[\]\)][\[\(]/g) ) {
        number++;
    }
    //summa brackets [ ]
    let brackets = val.match(/\[/g);
    if (brackets !==null ){ brackets = brackets.length;}
    else {brackets = 0;}
    
    let brackets2 = val.match(/\]/g);
    if (brackets2 !==null ){ brackets2 = brackets2.length;}
    else {brackets2 = 0;}

    if ( brackets != brackets2) {number++;}
    // ( )
    brackets = val.match(/\(/g);
    if (brackets !==null ){ brackets = brackets.length;}
    else {brackets = 0;}

    brackets2 = val.match(/\)/g);
    if (brackets2 !==null ){ brackets2 = brackets2.length;}
    else {brackets2 = 0;}
    
    if ( brackets != brackets2) {number++;}
    
    //zapret pustix skobok 
    let s = val.match(/\(.*?\)/g); 
    $.each( s, function(index,value){
        let valid = value.substr( 1, (value.length - 2 ));
        if ( valid === '' ){number++;}
    });    

    //validation id field
    var arrayId = field.val().match(/\[.*?\]/g); 
    $.each( arrayId,function(index,value){
        let id = value.substr( 1, (value.length - 2 ));
        if ( id!=='' && !id.match(/[^0-9a-zA-Z]/g) ){
            id = '#' + id;
            if ( $('#drag-drop-element').find(id).length === 0 ) {number++;}
        }
        else {number++;}
    });
    //add error class
    if ( number > 0 ){
        if ( $('#itograsschet').find('.error-formula').length === 0 ) {
            field.addClass('error-val-k');
            let createdElement = '<span class="error-formula">'+$('#text-error-q').html()+'</span>';
            field.prev('span').append(createdElement);
        }
    }
    else { 
        field.removeClass('error-val-k');
        $('#itograsschet').find('.error-formula').remove();
    }
}

//validation width form
$('.swap-form-size-panel').on('keyup', 'input', function(){
    validationWidth( $(this) );
});  
function validationWidth(x){
    let val = x.val();
    
    //forbidden symbols
    if ( val.match(/[^0-9a-z\%]/g) ){ 
        let edit = val.replace(/[^0-9a-z\%]/g,'');
        x.val( edit );
    }
    
    let validation = 0;
    if ( val.match(/[0-9]/g) ){ validation++; }
    if ( val.match(/[a-z]/g) || val.match(/[\%]/g) ){ 
        validation++; 
    }
    
    if ( validation != 2 ){
        $('.swap-form-size-panel').addClass('error-width-f');
        $('.error-width-form').css('display','flex');
    }
    else { 
        $('.swap-form-size-panel').removeClass('error-width-f');
        $('.error-width-form').css('display','none');
    }
} 

});
})(jQuery);


