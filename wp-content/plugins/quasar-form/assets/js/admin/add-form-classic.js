jQuery(function($){
$(document).ready(function(){
    
"use strict";

$(document).on('click','#add-form-q',function(){
    $('.swap-modal-add-form').css('display' , 'flex');
});
    
$('.swap-modal-add-form').on('click', function(q) { 
    if ( !$(q.target).hasClass('modal-add-form')  && ($(".modal-add-form").has(q.target).length === 0)  ) { 
        $('.swap-modal-add-form').css('display' , 'none');
    }
});
 
$('.swap-modal-add-form').on('change', '#select_type_form input', function(q) { 
    if ( $('#form-tip-popup').attr("checked")=='checked' ){ 
        $('.modal-add-form .text-popup-q').css('display', 'block'); 
        $('.modal-add-form .align-setting-q').css('display', 'none'); 
    }
    else { 
        $('.modal-add-form .text-popup-q').css('display', 'none'); 
        $('.modal-add-form .align-setting-q').css('display', 'block');
    }
});

$('.button-add-form').on('click', function(q) { 
    let valueSelect = $('#select_name_form input:checked').attr('data-id');
    let valueType = $('#select_type_form input:checked').attr('data-type');
    let valueAlign = $('#select_align_form input:checked').attr('data-align');
    //add short code in editor
    if (valueType == 'inline') {
        wp.media.editor.insert('[formaQ id="'+valueSelect+'" type="'+valueType+'" align="'+valueAlign+'" ]');
    }
    if (valueType == 'popup') {
        let textButton = $('#text-button-q').val();
        wp.media.editor.insert('[formaQ id="'+valueSelect+'" type="'+valueType+'" align="'+valueAlign+'" text="'+textButton+'" ]');
    }
    $('.swap-modal-add-form').css('display' , 'none');
    $('#text-button-q').val('');

});

 


});
});