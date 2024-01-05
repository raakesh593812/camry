jQuery(function($){
  
"use strict"; 
    
//array name form
var arrayName = [ localization3.selectformname ];
$('#select_name_form').find('label span').each(function(){
    let idForm = $(this).closest('label').prev('input').attr('data-id');
    let value =  idForm + '|' +$(this).html() ;
    arrayName.push ( value );
});


function idAttribute(value, name) { 
    var idForm = value;
    let nameForm = name ;
    arrayName.map(function(value) {
        let id = value;
        let arrayNamePlusID = '';
        if ( value.match(/\|/g) ) { 
            arrayNamePlusID = value.split('|'); 
            id = arrayNamePlusID[1];
        }
        if ( id == nameForm ){
            idForm = arrayNamePlusID[0];
        }
    });
    return idForm;
}

 
//custom block in gutenberg
( function( blocks, element ) {
    const el = element.createElement;
    const { registerBlockType } = blocks; 

    registerBlockType( 'quasar-form/custom-block', {
        title: 'Quasar form',
       	icon:  el( 
			'svg',
			{ 'aria-hidden': 'true', role: 'img', focusable: 'false', 'class': 'icon-addquasar-form', xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', color: '#4649dd', viewBox: '0 0 20 20' },
			el('path', { d: 'M18.8,6.1C18.9,6,18.9,5.8,19,5.7c-0.2,0-0.3-0.1-0.4-0.1c-1.2,0.2-2.4,0.3-3.5,0.7c-3.5,1-6.5,2.8-9.1,5.3c-0.1,0.1-0.2,0.1-0.2,0.2c0-0.2,0.1-0.3,0.2-0.5C7.4,9,9.4,7.2,11.6,5.9C12,5.6,12.1,5.4,12,5.1c-0.2-0.8-0.4-1.6-0.6-2.4c-0.2-0.7-0.4-1.4-0.6-2C10.6,0.1,10.4,0,9.9,0.4C9.7,0.5,9.6,0.7,9.5,0.8C7.8,2.5,6.6,4.5,5.5,6.6C5.4,6.9,5.3,7.1,5.2,7.3C3.6,8,0.8,9.4,0.1,10c-0.2,0.2-0.1,0.3,0.1,0.4c0.5,0.2,2.1,0.9,3.3,1.5c-0.4,1.3-0.7,2.6-0.9,4c-0.1,0.8-0.2,1.7-0.3,2.6c0,0.1,0.1,0.3,0.2,0.4c0.1-0.1,0.3-0.1,0.3-0.2c0.3-0.3,0.6-0.7,0.9-1.1c2.4-2.8,5-5.5,8.2-7.5c0.7-0.5,1.5-0.9,2.2-1.3c0,0,0,0.1,0.1,0.1c0,0,0,0.1-0.1,0.1c-0.2,0.2-0.4,0.3-0.6,0.5c-1.7,1.4-3.3,3-4.6,4.8c-0.2,0.3-0.2,0.4,0.1,0.6c2.1,1.3,4.2,2.6,6.3,3.8c0.1,0.1,0.4,0.2,0.5,0.1c0.1-0.1,0.1-0.3,0.2-0.5c0-0.1,0-0.2,0-0.3c-0.3-1.4-0.6-2.9-1-4.3c-0.4-1.6-0.5-1.6,0.5-3C16.6,9.1,17.7,7.6,18.8,6.1z' })
		),
        category: 'common',
        keywords: [ 'email', 'subscribe', 'misha' ],
        attributes: {
            nameform: {
				type: 'string',
				default: ''
			},
			typeform: {
				type: 'string',
				default: 'inline'
			},
		    alignform: {
				type: 'string',
				default: 'center'
			},
			text: {
				type: 'string',
				default: ''
			},
			id: {
				type: 'string',
				default: ''
			}
		},
        edit: function( props ) {
            
			const { attributes: { text , nameform, typeform, alignform, id  }, className, setAttributes } = props;
            return (
                el( 'div', { className: props.className },
                    el( 'div', { className: 'swap-add-quasar-form' },
                        //heading
                        el( 'div', { className: 'heading-add-quasar-form' }, 'Quasar form'),
                        //name form
                        el( 'div', { className: 'block-add-quasar-form name-quasar-form' },
                        
                            el( 'div', { className: 'text-add-quasar-form' }, localization3.selectform ),
                            el( 'div', { className: 'swap-select-quasar-form' }, 
                                el( 'select', {  className: 'select-add-quasar-form', 'value':props.attributes.nameform,  onChange: function(value) { props.setAttributes({ nameform: event.target.value }) }, }, 
                                
                                    //array name form
                                    arrayName.map(function( valueThis ) {
                                        let optionText = valueThis;
                                        if ( valueThis.match(/\|/g) ) { 
                                            valueThis = valueThis.split('|'); 
                                            optionText = valueThis[1];
                                        }
                                        return el( 'option', {value: optionText}, optionText  );
                                    })
                                )
                            )
                        ),
                        //type form
                        el( 'div', { className: 'block-add-quasar-form type-quasar-form' },
                            el( 'div', { className: 'text-add-quasar-form' }, localization3.typeform ),
                            el( 'div', { className: 'swap-select-quasar-form' }, 
                                el( 'select', { className: 'select-add-quasar-form' , 'value':props.attributes.typeform, onChange: function(value) { props.setAttributes({ typeform: event.target.value }) }  }, 
                                    el( 'option', {	value: 'inline' }, localization3.inline ),
                                    el( 'option', { value: 'popup' }, localization3.popup )
                                )
                            )
                        ),
                        //align form
                        el( 'div', { className: 'block-add-quasar-form align-quasar-form' },
                            el( 'div', { className: 'text-add-quasar-form' }, localization3.alignform ),
                            el( 'div', { className: 'swap-select-quasar-form' }, 
                                el( 'select', { className: 'select-add-quasar-form', id:'align-add-quasar-form' , 'value':props.attributes.alignform, onChange: function(value) { props.setAttributes({ alignform: event.target.value }) } }, 
                                    el( 'option', { value: 'center' }, localization3.center ),
                                    el( 'option', { value: 'right' }, localization3.right ),
                                    el( 'option', { value: 'left' }, localization3.left )
                                )
                            )
                        ),
                        //text for button
                        el( 'div', { className: 'block-add-quasar-form button-text-quasar-form' },
                            el( 'div', { className: 'text-add-quasar-form' }, localization3.buttontext ),
                            el( 'div', { className: 'swap-select-quasar-form' }, 
                                el( 'input', { placeholder: 'text for popup button', 'value':props.attributes.text, type: 'text' , className: 'select-add-quasar-form' , 
                                    //save value input in attribut 'text'
                                    onChange:  function(value) { 
                                        props.setAttributes({ text: event.target.value });
                                    }
                                    
                                })
                              
                            )
                        ),
                        //id (for fixed bug)
                        el( 'div', { className: 'block-add-quasar-form none-block-q' },
                                el( 'input', { 
                                placeholder: '', 
                                'value': idAttribute(props.attributes.id, props.attributes.nameform ), type: 'text' , className: 'select-add-quasar-form' } , //value can be omitted
                                //save value input in attribut 'id'
                                props.setAttributes({ id: idAttribute(props.attributes.id, props.attributes.nameform ) })
                                )
                              
                        ),
                    )
                )
            );
            
        },   
        save: function( props ) {
                      
            let nameForm = props.attributes.nameform ;
            let typeForm = props.attributes.typeform;
            let alignForm = props.attributes.alignform;
            let textPopup = props.attributes.text;
            let idForm = idAttribute(props.attributes.id, props.attributes.nameform );
            //final str
            let string ='[formaQ id="'+idForm+'" type="'+typeForm+'" align="'+alignForm+'" text="'+textPopup+'" ]';
            
            return (
                el( 'div', { className: props.className }, string
                )
            );
        },
    }); 
	 
})

(
	window.wp.blocks, // wp.blocks becomes just "block" variable
	window.wp.element
);
 


});

