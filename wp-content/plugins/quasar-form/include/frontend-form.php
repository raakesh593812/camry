<?php  

global $wpdb, $quasar_form_array_option_1;
$array_form = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_main WHERE id = '".$quasar_form_array_form['id']."'" , ARRAY_A  );

$url = quasar_form_url.'/assets/img-captha'; //for captha
$idchecet = 0 ;


//array  form
foreach($array_form as $row){

    //setting
    $row['setting'] = json_decode($row['setting']);
    $setting =  explode( '/', $row['setting'] ); //array setting
    
    //design form
    $array_design = explode( '|', $setting['3'] );
    $strokastyle = 'background-color:'.$array_design['0'].'; border-width:'.$array_design['1'].'; border-radius:'.$array_design['18'].'; border-color:'.$array_design['2'].'; padding:'.$array_design['7'].';'; 
    if ( $array_design['3'] !='' ){
        $array_design['3'] = str_replace( "#", "/", $array_design['3']); 
        $strokastyle.='background-image: url('.$array_design['3'].');';
    }
    $classform ='swap-content-form-q';//class form
    if ( $array_design['6'] != '' ){ $classform.= ' '.$array_design['6']; }
    //shedow
    if ( $array_design['4'] =='shedow-none-q' ){ $classform.= ' shedow-none-q'; }
    //ful size background img
    if ( $array_design['5'] !='not' ){ $classform.= ' background-full-size-img';  }
    
    //after text send
    if ( !isset($setting['10']) ){ $setting['10'] ='yes'; }
    if ( !isset($setting['11']) ){ $setting['11'] ='yes'; }


    //localization
    $massivlocalization= explode( '|', $setting['4'] );
    //key
    $keyvalid = $setting['5'].'&'.( $quasar_form_array_form['id'] + 7 ) ;
    //redirect
    if ( $setting['6'] != '' ) {
        $redirect = quasar_form_decode( $setting['6'] );
    }
    else $redirect = '';
    
    //type form, unique class form
    $unique_class_form = 'unique-class-'.esc_html( $quasar_form_array_form['id'] );
    if ($quasar_form_array_form['type']=='inline'){ $class_qform = 'quasar-form form-type-inline '.$unique_class_form.''; }
    if ($quasar_form_array_form['type']=='popup'){ $class_qform = 'quasar-form form-type-popup '.$unique_class_form.''; }
    
    //disable design 
    $disable_design = 0;
    if ( !isset( $array_design['19'] )  ) { $array_design['19'] ='not'; }
    if ( $array_design['19'] =='yes' ) { $disable_design = 1; }
    
    //unique id
    global $quasar_form_number, $quasar_form_array_logic_id;
    $quasar_form_number++;
    $quasar_form_array_logic_id[] = $quasar_form_array_form['id'].'/'.$quasar_form_number;
    
    //quasart created form
    echo '<div class="'.esc_attr( $class_qform ).'" style="width: '.esc_attr( $setting['0'] ).'" data-id='.esc_attr( $quasar_form_array_form['id'] ).' data-unique-id='.esc_attr( $quasar_form_number ).' data-title="'.esc_html( get_the_title() ).'">'; 
    echo '<div class="swap-form-block">';
    //text after send
    if ( !isset( $setting['7'] )  ) {$setting['7'] = '[default value]';}
    else {
        $setting['7'] = quasar_form_decode( $setting['7'] );
    }
    
    echo '
    <div class="close-quasar-form"><i class="fa fa-timesq"></i></div>
    <div class="'.esc_attr( $classform ).'" style="'.esc_attr( $strokastyle ).'">
        <div class="none-element-send-q">
            <div class="text-defoult-send-q">
                <div class="text-prorgress-send" data-text="'.esc_attr( $massivlocalization['1'] ).'"></div>
                <div class="message-send-q"> <i class="fa fa-checkq"></i><span data-text="'.esc_attr( $massivlocalization['0'] ).'" ></span></div> 
                <span class="percent-send-q">0%</span>
            </div>
        </div>
        
        <div class="text-after-send-q" data-after-submit="'.esc_html( wp_specialchars_decode( $setting['10'] ) ).'" data-text="'.esc_html( wp_specialchars_decode( $setting[7] ) ).'" data-scroll="'.esc_html( $setting['11'] ).'"></div>
        
    <form class="form-main-element" enctype="multipart/form-data" autocomplete="off" data-q="'.esc_attr( $keyvalid ).'">' ;
    
    //content
	$row['content'] = json_decode( $row['content'] );
    $content_form = $row['content'];
    $number_for_check = 0;
    
    //array created field
    foreach ( $content_form as $val ){
        $array_field=explode(";", $val ); 
        //1. input
        $requedclass1 = 'norequedclass' ;
        if ($array_field['0'] == 'input') {
            $qclass = 'form-element-q type-input-element element-css-q '.$array_field['10'].' '.$array_field['14'];
            $idchecet = $idchecet + 1;
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';}; 
            if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['7'] == 'none') {$qclass.= ' noneq' ;}
	        if ($array_field['21'] != '') {$qclass.= ' '.$array_field['21'];}
	        if ($array_field['23']=='alphabete'){$validation_error = '<span class="error-filed-q validation-field-q" data-text="'.esc_attr( $massivlocalization['4'] ).'"></span>';}
            if ($array_field['23']=='number' || $array_field['23']=='number-calculator'){$validation_error = '<span class="error-filed-q validation-field-q" data-text="'.esc_attr( $massivlocalization['5'] ).'"></span>';}
            if ($array_field['23']=='none'){$validation_error = '';}
            //style 1
	        if ($array_field['22'] =='style1'){ 
                $qclass.= ' style-qform-1'; 
                if ( $array_field['4'] !='') {
                    if ( $disable_design == 0) { 
                        $heading ='<span class="heading-field-q" style="color:'.esc_attr( $array_field['8'] ).'; font-size: '.esc_attr( $array_field['9'] ).'; line-height: '.esc_attr( $array_field['9'] ).'; margin-bottom: '.esc_attr( $array_field['25'] ).'; font-weight: '.$array_field['26'].';">'.esc_html( $array_field['4'] ).'</span>';
                    }
                    else {
                        $heading ='<span class="heading-field-q">'.esc_html( $array_field['4'] ).'</span>';
                    }
                }
                else  { 
                    $heading = '';
                    if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q-2';}
                }
	            $requed = $validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span>';
            }   
            //style 2
            if ($array_field['22'] =='style2'){
                $qclass.= ' style-qform-2'; 
                if ( $disable_design == 0) { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q" style="color:'.$array_field['8'].'; font-size: '.$array_field['9'].'; line-height: '.$array_field['9'].'; margin-bottom: '.$array_field['25'].'; font-weight: '.$array_field['26'].';">'.$array_field['4'].'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                else { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q">'.$array_field['4'].'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                $requed = '';
            }
            //disable design
            $input_class='admin-filed-style-1 input-style-quasar ';
            if ( $disable_design == 0) {  
                $style_1 ='font-size: '.esc_attr( $array_field['11'] ).'; border-color:'.esc_attr( $array_field['12'] ).'; background-color:'.esc_attr( $array_field['13'] ).';  border-radius:'.esc_attr( $array_field['15'] ).'; border-width: '.esc_attr( $array_field['16'] ).'; height:' .esc_attr( $array_field['17'] ).'; padding: '.esc_attr( $array_field['24'] );
 
            }
            else {
                $style_1=''; $input_class='admin-filed-style-1 '; 
                $qclass = 'form-element-q type-input-element element-css-q style-qform-1';
                if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q'; } 
            }
            
            if ( !isset($array_field['27']) ) {$array_field['27'] = '';}
            if ( !isset($array_field['28']) ) {$array_field['28'] = 'disabled';}
            if ( isset($array_field['29']) ) {
                if ( $array_field['29'] != '' ) {$input_class.= $array_field['29'].' ';}
            }
         
            echo '
            <div id="'.esc_attr( $array_field['6'] ).'" class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['3'] ).'" data-tabs=' .esc_attr( $array_field['5'] ). ' data-values="1" data-validation="' . esc_attr( $array_field['23'] ).'" data-val="false">
            '.wp_specialchars_decode( $heading ).'
                <div class="input-swap">
                '.wp_specialchars_decode( $requed ).'
                    <input id="elem'.esc_attr( $idchecet.$quasar_form_number ).'" type="text" class="'.esc_attr( $input_class.$array_field['2'] ).'" style="'.esc_attr( $style_1 ).'" placeholder="'.esc_attr( $array_field['1'] ).'" name="input;'.esc_attr( $array_field['5'] ). ';' .esc_attr( $idchecet ).'" data-filling="'.esc_attr( $array_field['27'] ).'" data-filling-a="'.esc_attr( $array_field['28'] ).'" autocomplete="off"> 
                    <div class="fa-icons-q" data-num='.esc_attr( $array_field['19'] ).'> 
                        <i class="'.esc_attr( $array_field['18'] ).'" style="font-size:'.esc_attr( $array_field['11'] ).'; color:'.esc_attr( $array_field['20'] ).'"></i>
                    </div>
                </div>
            </div>';
        }
        
        //2. email
        else if ($array_field['0'] == 'type-email-element') {
            $qclass = 'form-element-q type-email-element element-css-q '.$array_field['10'].' '.$array_field['14'];
            $idchecet = $idchecet + 1;
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';}; 
            if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['7'] == 'none') {$qclass.= ' noneq' ;}
	        if ($array_field['21'] != '') {$qclass.= ' '.$array_field['21'];}
            $validation_error = '<span class="error-filed-q validation-mail-q" data-text="'.esc_attr( $massivlocalization['3'] ).'"></span>';
            //style 1
	        if ($array_field['22'] =='style1'){ 
                $qclass.= ' style-qform-1'; 
                if ( $array_field['4'] !='') {
                    if ( $disable_design == 0) { 
                        $heading ='<span class="heading-field-q" style="color:'.esc_attr( $array_field['8'] ).'; font-size: '.esc_attr( $array_field['9'] ).'; line-height: '.esc_attr( $array_field['9'] ).'; margin-bottom: '.esc_attr( $array_field['25'] ).'; font-weight: '.$array_field['26'].';">'.esc_html( $array_field['4'] ).'</span>';
                    }
                    else {
                        $heading ='<span class="heading-field-q">'.esc_html( $array_field['4'] ).'</span>';
                    }
                }
                else  { 
                    $heading = '';
                    if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q-2';}
                }
	            $requed = $validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span>';
            }   
            //style 2
            if ($array_field['22'] =='style2'){
                $qclass.= ' style-qform-2'; 
                if ( $disable_design == 0) { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q" style="color:'.$array_field['8'].'; font-size: '.$array_field['9'].'; line-height: '.$array_field['9'].'; margin-bottom: '.$array_field['25'].'; font-weight: '.$array_field['26'].';">'.$array_field['4'].'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                else { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q">'.$array_field['4'].'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                $requed = '';
            }
            
            //disable design
            $input_class='admin-filed-style-1 input-style-quasar ';
            if ( $disable_design == 0) {        
                $style_1 ='font-size: '.esc_attr( $array_field['11'] ).'; border-color:'.esc_attr( $array_field['12'] ).'; background-color:'.esc_attr( $array_field['13'] ).';  border-radius:'.esc_attr( $array_field['15'] ).'; border-width: '.esc_attr( $array_field['16'] ).'; height:' .esc_attr( $array_field['17'] ).'; padding: '.esc_attr( $array_field['24'] );
 
            }
            else {
                $style_1=''; $input_class='admin-filed-style-1 '; 
                $qclass = 'form-element-q type-email-element element-css-q style-qform-1';
                if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q'; } 
            }
            
            if ( isset($array_field['27']) ) {
                if ( $array_field['27'] != '' ) {$input_class.= $array_field['27'].' ';}
            }

            echo '
            <div id="'.esc_attr( $array_field['6'] ).'" class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['3'] ).'" data-tabs=' .esc_attr( $array_field['5'] ). ' data-values="1" data-validation="' . esc_attr( $array_field['23'] ).'" data-val="false">
            '.wp_specialchars_decode( $heading ).'
                <div class="input-swap">
                '.wp_specialchars_decode( $requed ).'
                    <input id="elem'.esc_attr( $idchecet.$quasar_form_number ).'" type="email" class="'.esc_attr( $input_class.$array_field['2'] ).'" style="'.esc_attr( $style_1 ).'" placeholder="'.esc_attr( $array_field['1'] ).'" name="input;'.esc_attr( $array_field['5'] ). ';' .esc_attr( $idchecet ).'" autocomplete="off"> 
                    <div class="fa-icons-q" data-num='.esc_attr( $array_field['19'] ).'> 
                        <i class="'.esc_attr( $array_field['18'] ).'" style="font-size:'.esc_attr( $array_field['11'] ).'; color:'.esc_attr( $array_field['20'] ).'"></i>
                    </div>
                </div>
            </div>';
        }
        
        
        //3. phone
        else if ($array_field['0'] == 'type-phone-element') {
            $qclass = 'form-element-q type-phone-element element-css-q '.$array_field['10'].' '.$array_field['14'];
            $idchecet = $idchecet + 1;
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';}; 
            if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['7'] == 'none') {$qclass.= ' noneq' ;}
	        if ($array_field['21'] != '') {$qclass.= ' '.$array_field['21'];}
	        if ( array_key_exists('28', $array_field) ) { 
                if ($array_field['28']=='yes'){
                    $validation_error = '<span class="error-filed-q validation-field-q" data-text="'.esc_attr( $massivlocalization['12'] ).'"></span>';  
                    $data_mask = 'yes';
                    $qclass.= ' mask-p-q';
                }
                if ($array_field['28']=='not'){$validation_error = ''; $data_mask = 'not';}
	        }
	        else {$validation_error = ''; $data_mask = 'not';}
	        if ( $quasar_form_array_option_1['3'] =='yes' ) {$data_mask  = 'not';} //disable mask lib
	        
            //style 1
	        if ($array_field['22'] =='style1'){ 
                $qclass.= ' style-qform-1'; 
                if ( $array_field['4'] !='') {
                    if ( $disable_design == 0) { 
                        $heading ='<span class="heading-field-q" style="color:'.esc_attr( $array_field['8'] ).'; font-size: '.esc_attr( $array_field['9'] ).'; line-height: '.esc_attr( $array_field['9'] ).'; margin-bottom: '.esc_attr( $array_field['25'] ).'; font-weight: '.$array_field['26'].';">'.esc_html( $array_field['4'] ).'</span>';
                    }
                    else {
                        $heading ='<span class="heading-field-q">'.esc_html( $array_field['4'] ).'</span>';
                    }
                }
                else  { 
                    $heading = '';
                    if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q-2';}
                }
	            $requed = $validation_error.'<span class="error-filed-q requed-message">'.esc_html( $massivlocalization['2'] ).'</span>';
            }   
            //style 2
            if ($array_field['22'] =='style2'){
                $qclass.= ' style-qform-2'; 
                if ( $disable_design == 0) { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q" style="color:'.$array_field['8'].'; font-size: '.$array_field['9'].'; line-height: '.$array_field['9'].'; margin-bottom: '.$array_field['25'].'; font-weight: '.$array_field['26'].';">'.$array_field['4'].'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                else { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q">'.$array_field['4'].'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                $requed = '';
            }
            
            //disable design
            $input_class='admin-filed-style-1 input-style-quasar ';
            if ( $disable_design == 0) {        
                $style_1 ='font-size: '.esc_attr( $array_field['11'] ).'; border-color:'.esc_attr( $array_field['12'] ).'; background-color:'.esc_attr( $array_field['13'] ).';  border-radius:'.esc_attr( $array_field['15'] ).'; border-width: '.esc_attr( $array_field['16'] ).'; height:' .esc_attr( $array_field['17'] ).'; padding: '.esc_attr( $array_field['24'] );
            }
            else {
                $style_1=''; $input_class='admin-filed-style-1 '; 
                $qclass = 'form-element-q type-phone-element element-css-q style-qform-1';
                if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q'; } 
            }   
            
            if ( isset($array_field['29']) ) {
                if ( $array_field['29'] != '' ) {$input_class.= $array_field['29'].' ';}
            }
            
            echo '
            <div id="'.esc_attr( $array_field['6'] ).'" class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['3'] ).'" data-tabs=' .esc_attr( $array_field['5'] ). ' data-values="1" data-validation="' . esc_attr( $array_field['23'] ).'" data-val="false">
            '.wp_specialchars_decode( $heading ).'
                <div class="input-swap">
                '.wp_specialchars_decode( $requed ).'
                    <input id="elem'.esc_attr( $idchecet.$quasar_form_number ).'" type="tel" class="'.esc_attr( $input_class.$array_field['2'] ).'" style="'.esc_attr( $style_1 ).'" placeholder="'.esc_attr( $array_field['1'] ).'" name="input;'.esc_attr( $array_field['5'] ). ';' .esc_attr( $idchecet ).'" autocomplete="off" data-mask="'.esc_attr( $array_field['27']).'" data-mask-a="'.esc_attr( $data_mask ).'" > 
                    <div class="fa-icons-q" data-num='.esc_attr( $array_field['19'] ).'> 
                        <i class="'.esc_attr( $array_field['18'] ).'" style="font-size:'.esc_attr( $array_field['11'] ).'; color:'.esc_attr( $array_field['20'] ).'"></i>
                    </div>
                </div>
            </div>';
        }
      
        //4. checkbox
        else if ($array_field['0'] == 'checkboks') {
            $qclass = 'form-element-q type-checkbox-element element-css-q '.esc_attr( $array_field['30'] );
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';} 
            if ($array_field['6'] == 'yes'){$qclass.= ' radio-checket-q';}
            if ($array_field['8'] == 'none') {$qclass.= ' noneq' ;}
            if ($array_field['1'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['9'] == 'horizontal') {$classalign = 'swap-checkbox-q gorizontal-align';} 
            if ($array_field['9'] != 'horizontal') {$classalign = 'swap-checkbox-q';}
            if (!$array_field['3']) {$array_field['3'] = '';}
	        if ($array_field['21'] != '') {$qclass.= ' '.$array_field['21'];}
	        //protect of disable fafa
	        if ($array_field['11'] =='style1' && wp_style_is( 'Quasar-form-icon', 'done' ) ){$qclass.= ' style-t-qform-1';}
	        else if ($array_field['11'] =='style1' && !wp_style_is( 'Quasar-form-icon', 'done' ) ){ $qclass.= ' style-t-qform-2'; $array_field['22'] = $array_field['13']; }
            if ($array_field['11'] =='style2'){$qclass.= ' style-t-qform-2';}


            $idchecet = $idchecet + 1;
            $namechecboxa = ';'.$idchecet ;
        
            $style_1 = "border-color:".esc_attr( $array_field['12'] )."; border-width:".esc_attr( $array_field['18'] )."; width:".esc_attr( $array_field['16'] )."; min-width: ".esc_attr( $array_field['16'] )."; height:".esc_attr( $array_field['16'] );
            $style_2 = "font-size:".esc_attr( $array_field['17'] )."; color:".esc_attr( $array_field['13'] )."; background-color:".esc_attr( $array_field['22'] )."; width:".esc_attr( $array_field['23'] )."; min-width: ".esc_attr( $array_field['23'] )."; height:".esc_attr( $array_field['23'] );
            $style_3 = "color:".esc_attr( $array_field['14'] )."; font-size:".esc_attr( $array_field['15'] )."; padding-left:".esc_attr( $array_field['25'] );
            $style_4 = "font-size:".esc_attr( $array_field['17'] )."; background-color:".esc_attr( $array_field['13'] )."; width:".esc_attr( $array_field['23'] )."; min-width: ".esc_attr( $array_field['23'] )."; height:".esc_attr( $array_field['23'] );
            $style_5 = "color:".esc_attr( $array_field['19'] )."; font-size:".esc_attr( $array_field['20'] )."; line-height:".esc_attr( $array_field['20'] )."; margin-bottom: ".esc_attr( $array_field['27'] )."; font-weight: ".esc_attr( $array_field['28'] );
        
            echo "
            <div id=".esc_attr( $array_field['7'] )." class='".esc_attr( $qclass )."' style='width: ".esc_attr( $array_field['2'] )."' data-tabs =".esc_attr( $array_field['5'] )." data-values='0' data-logick='0'> 
                <span class='heading-field-q' style='".esc_attr( $style_5 )."'>".esc_html( $array_field['3'] )."</span> 
                <div class='checkbox-box-q'>
                  <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>
                  <div class='".esc_attr( $classalign )."' style='padding-top:".esc_attr( $array_field['24'] )."'> " ;
                    $content_checket_nymber = 31 ;
                    //content checkbox
                    while ($array_field['4'] > 0){
                        if ($array_field['6'] == 'yes'){$typeckecks = 'radio'; }
                        else {
                            $typeckecks = 'checkbox' ; 
                            $number_for_check++; 
                        }
                        $content_checkbox = explode('|', $array_field[$content_checket_nymber] );
                        if ( !isset( $content_checkbox['3'] ) ) { $content_checkbox['3']=''; }
                        //decode spec symbol
                        $content_checkbox['1'] = quasar_form_decode($content_checkbox['1']);
                        //checkbox
                        if($array_field['6'] != 'yes'){
                            echo "
                            <input type='".esc_attr( $typeckecks )."' id='".esc_attr( $content_checkbox['0'].$quasar_form_number )."' ".esc_attr($content_checkbox['3'])." name='check;".esc_attr( $number_for_check.$quasar_form_number )."' date-rasschet='".esc_attr( $content_checkbox['2'])."'>
                            <label for='".esc_attr( $content_checkbox['0'].$quasar_form_number )."' style='margin-bottom:".esc_attr( $array_field['26'] )."'>
                                <div class='checkbox-qform' style='".esc_attr( $style_1 )."'>
                                    <div class='checkbox-fafa' style='background-color:".esc_attr( $array_field['29'] )."'>
                                        <i class='fa fa-checkq' style='".esc_attr( $style_2 )."'></i>
                                    </div>
                                </div>
                                <div class='html-text-check-q' style='".esc_attr( $style_3 )."'>".wp_specialchars_decode( $content_checkbox['1'] )."</div>
                            </label>";  
                        }
                        //radio
                        if($array_field['6'] == 'yes'){
                            echo "
                            <input type='".esc_attr( $typeckecks )."' id='".esc_attr( $content_checkbox['0'].$quasar_form_number  )."' ".esc_attr($content_checkbox['3'])." name='check;".esc_attr( $idchecet.$quasar_form_number )."' date-rasschet='".esc_attr( $content_checkbox['2'])."'>
                            <label for='".esc_attr( $content_checkbox['0'].$quasar_form_number  )."' style='margin-bottom:".esc_attr( $array_field['26'] )."'>
                                <div class='checkbox-qform' style='".esc_attr( $style_1 )."'>
                                    <div class='checkbox-fafa' style='background-color:".esc_attr( $array_field['29'] )."'>
                                        <i class='fa fa-checkq' style='".esc_attr( $style_2 )."'></i>
                                    </div>
                                </div>
                                <div class='html-text-check-q' style='".esc_attr( $style_3 )."'>".wp_specialchars_decode( $content_checkbox['1'] )."</div>
                            </label>";  
                        }
                        $content_checket_nymber++;
                        $array_field['4'] = $array_field['4'] - 1;
                    }
                    echo '
                </div>
                </div>
            </div>';
        } 
    


        //5. dropdown
        else if ($array_field['0'] == 'type-dropdawn-element') {
            $qclass = 'form-element-q type-dropdawn-element element-css-q '.esc_attr( $array_field['10'] ).' '.esc_attr( $array_field['10'] );  
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';}
            if ($array_field['1'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['7'] == 'none') {$qclass.= ' noneq' ;}
            if ($array_field['19'] != '') {$qclass.= ' '.$array_field['19'];}  
            if ($array_field['20'] =='style1'){$qclass.= ' style-qform-1';}
            if ($array_field['20'] =='style2'){$qclass.= ' style-qform-2';}
            $idchecet = $idchecet + 1;
            $namechecboxa = ';'.$idchecet;
        
            $style_1 = "color:".esc_attr( $array_field['8'] )."; font-size: ".esc_attr( $array_field['9'] )."; line-height: ".esc_attr( $array_field['9'] )."; margin-bottom: ".esc_attr( $array_field['21'] )."; font-weight: ".esc_attr( $array_field['23'] );
            $style_2 = 'font-size:'.esc_attr( $array_field['11'] ).'; line-height:'.esc_attr( $array_field['11'] ).'; border-color:'.esc_attr( $array_field['12'] ).'; background-color:'.esc_attr( $array_field['13'] ).'; border-radius:'.esc_attr( $array_field['15'] ).'; border-width: '.esc_attr( $array_field['16'] ).'; height:'.esc_attr( $array_field['17'] ).'; color:'.esc_attr( $array_field['18'] ).'; padding:'.esc_attr( $array_field['22'] );
            
            //heading
            if ( $array_field['3'] !='') {
                if ( $disable_design == 0) { 
                    $heading = "<span class='heading-field-q' style='".esc_attr( $style_1 )."'>".esc_html( $array_field['3'] )."</span>";
                }
                else {
                    $heading = "<span class='heading-field-q' >".esc_html( $array_field['3'] )."</span>";
                }
            }
            else {
                $heading = '';
                if ($array_field['1'] == 'Requed'){$qclass.= ' requed-field-q-2';}
            }
            
            //disable design
            $select_class='admin-filed-style-1 select-style-quasar ';
            if ( $disable_design != 0) {   
                $style_2=''; $select_class='admin-filed-style-1 ';
            }
        
            echo "
            <div id=".esc_attr( $array_field['6'] )." class='".esc_attr( $qclass )."' style='width:".esc_attr( $array_field['2'] )."' data-tabs =".esc_attr( $array_field['5'] )." data-values='0' data-logick='0' data-val='false'>
                ".wp_specialchars_decode( $heading )."
                <div class='input-swap'>
                    <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>" ;
                    $content_checket_nymber = 24; 
                    //content checkbox
                    echo '<select class="'.esc_attr( $select_class.$array_field['1'] ).'" style="'.esc_attr( $style_2 ).'">';
                    while ($array_field['4'] > 0){
                        $content_checkbox= explode('#', $array_field[$content_checket_nymber] ); 
                        if ($content_checkbox['2'] =='yes'){ 
                            echo "<option type='option' id='".esc_attr( $content_checkbox['0'] )."' date-rasschet='".esc_attr( $content_checkbox['2'] )."' data-selected='".esc_attr( $content_checkbox[3] )."' selected>"
                           .esc_html( $content_checkbox['1'] )."</option>";
                        }
                        else echo "<option type='option' id='".esc_attr( $content_checkbox['0'] )."' date-rasschet='".esc_attr( $content_checkbox['2'] )."' data-selected='".esc_attr( $content_checkbox['3'] )."'>".esc_html( $content_checkbox['1'] )."</option>";
                        $content_checket_nymber++;
                        $array_field['4'] = $array_field['4'] - 1;
                    }
                    echo '</select>
                </div>
            </div>';
        } 
        
        
    
        //6. submit
        else if ($array_field['0'] == 'submits') {
            //$stringstyle ='';
            $qclass = 'form-element-q element-css-q type-submit-element '.esc_attr( $array_field['4'] );
            if ($array_field['2'] == 'none') {$qclass.= ' noneq'; }
            if ($array_field['3'] =='yes'){$qclass.= ' full-width-q';}
            if ($array_field['10'] != '') {$qclass.= ' '.$array_field['10'];}
            if ($array_field['13'] =='style1'){$qclass.= ' style-qform-1';}
            if ($array_field['13'] =='style2'){$qclass.= ' style-qform-2';}
            $idchecet = $idchecet + 1;
	        
            $style_1 = "border-radius:".esc_attr( $array_field['5'] )."; background-color:".esc_attr( $array_field['6'] )."; color:".esc_attr( $array_field['7'] )."; border-color:".esc_attr( $array_field['14'] )."; font-size:".esc_attr( $array_field['15'] )."; line-height:".esc_attr( $array_field['15'] )."; padding:" .esc_attr( $array_field['16'] )."; border-width:".esc_attr( $array_field['17'] );
            $style_2 = "width:".esc_attr( $array_field['1'] );
            
            if ( !isset($array_field['19']) ){$array_field['19'] = 'not';}
            
            //disable design
            $submit_class='element-send-q submit-style-quasar '.$array_field['11'].' '.$array_field['12'];
            if ( $disable_design != 0 || $array_field['19']=='yes' ) {   
                $style_1=''; $submit_class='element-send-q';
            }
            
            if ( isset($array_field['18']) ) {
                if ( $array_field['18'] != '' ) {$submit_class.= ' '.$array_field['18'];}
            }
            
            echo "
            <div id='".esc_attr( $array_field['9'] )."' class='".esc_attr( $qclass )."' style='".esc_attr( $style_2 )."' data-tip='submits'>
                <button type='submit'  class='".esc_attr( $submit_class )."'  style='".esc_attr( $style_1 )."' data-text='".esc_attr( $array_field['8'] )."' data-next='".esc_attr( $massivlocalization['11'] )."' >".esc_html( $array_field['8'] )."</button>
            </div>";
        } 

        //7. textarea
        else if ($array_field['0'] == 'type-textarea-element') {
            $qclass = 'form-element-q type-textarea-element element-css-q '.esc_attr( $array_field['11'] ).' '.esc_attr( $array_field['15'] );
            $idchecet = $idchecet + 1;
            if ($array_field['3'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['6'] != 0) {$qclass.= ' tab-none-q';}; 
            if ($array_field['8'] == 'none') {$qclass.= ' noneq'; }
            if ($array_field['18'] != '') {$qclass.= ' '.$array_field['18'];} 
            //style 1
            if ($array_field['19'] =='style1'){
                $qclass.= ' style-qform-1'; 
                if ( $array_field['4'] !='') {
                    if ( $disable_design == 0) { 
                        $heading ="<span class='heading-field-q' style='color:".esc_attr( $array_field['9'] )."; font-size:".esc_attr( $array_field['10'] )."; line-height:".esc_attr( $array_field['10'] )."; margin-bottom: ".esc_attr( $array_field['20'] )."; font-weight: ".esc_attr( $array_field['22'] ).";'>".esc_html( $array_field['4'] )."</span>";
                    }
                    else {   
                        $heading ="<span class='heading-field-q'>".esc_html( $array_field['4'] )."</span>";
                    }
                }
                else {
                    $heading = '';
                    if ($array_field['3'] == 'Requed'){$qclass.= ' requed-field-q-2';}
                }
                $requed = '<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span>';
            }
            //style 2
            if ($array_field['19'] =='style2'){
                $qclass.= ' style-qform-2'; 
                if ( $disable_design == 0) { 
                    $heading = "
                    <label for='elem".esc_attr( $idchecet.$quasar_form_number )."'> 
                        <span class='heading-field-q' style='color:".esc_attr( $array_field['9'] )."; font-size:".esc_attr( $array_field['10'] )."; line-height:".esc_attr( $array_field['10'] )."; top: ".esc_attr( $array_field['20'] )."; font-weight: ".esc_attr( $array_field['22'] ).";'>".esc_html( $array_field['4'] )."</span>
                        <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>
                    </label>";
                }
                else {
                    $heading = "
                    <label for='elem".esc_attr( $idchecet.$quasar_form_number )."'> 
                        <span class='heading-field-q'>".esc_html( $array_field['4'] )."</span>
                        <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>
                    </label>";
                }
                
                $requed='';
            }
        
            $style_1 = 'font-size:'.esc_attr( $array_field['12'] ).'; border-color:'.esc_attr( $array_field['13'] ).'; background-color:'.esc_attr( $array_field['14'] ).'; border-radius:'.esc_attr( $array_field['16'] ).'; border-width: '.esc_attr( $array_field['17'] ).'; height: '.esc_attr( $array_field['5'] ).'; padding: '.esc_attr( $array_field['21'] );
            
            //disable design
            $textarea_class='element-css-q textarea-style-quasar ';
            if ( $disable_design == 0) {        
                $style_1 = 'font-size:'.esc_attr( $array_field['12'] ).'; border-color:'.esc_attr( $array_field['13'] ).'; background-color:'.esc_attr( $array_field['14'] ).'; border-radius:'.esc_attr( $array_field['16'] ).'; border-width: '.esc_attr( $array_field['17'] ).'; height: '.esc_attr( $array_field['5'] ).'; padding: '.esc_attr( $array_field['21'] );
            }
            else {
                $style_1=''; $textarea_class='element-css-q ';
                $qclass = 'form-element-q type-textarea-element element-css-q';
                if ($array_field['3'] == 'Requed'){$qclass.= ' requed-field-q';}
            }
            
            if ( isset($array_field['23']) ) {
                if ( $array_field['23'] != '' ) {$textarea_class.= $array_field['23'].' ';}
            }
        
            echo '
            <div id='.esc_attr( $array_field['7'] ).' class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['2'] ).';" data-tabs ='.esc_attr( $array_field['6'] ).' data-values="1" data-val="false"> 
            '.wp_specialchars_decode( $heading ).'
                <div class="input-swap">
                    '.wp_specialchars_decode( $requed ).'
                    <textarea id="elem'.esc_attr( $idchecet.$quasar_form_number ).'" class="'.$textarea_class .esc_attr( $array_field['3'] ).'" style="'.esc_attr( $style_1 ).'" placeholder="'.esc_attr( $array_field['1'] ).'"></textarea>
                </div>
            </div>' ;
        } 

    
        //9. custom text
        else if ($array_field['0'] == 'type-custom-text-element') { 
            $qclass = 'form-element-q type-custom-text-element';
            if ($array_field['2'] != 0) {$qclass.= ' tab-none-q';}
            if ($array_field['4'] == 'none') {$qclass.= ' noneq' ;}
	        if ($array_field['6'] != '') {$qclass.= ' '.$array_field['6'];} 
	        
	        $array_field['5'] = quasar_form_decode($array_field['5']);
            
            echo '
            <div id='.esc_attr( $array_field['3'] ).' class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['1'] ).'" data-tabs ='.esc_attr( $array_field['2'] ).'>
                <div id=elem'.esc_attr( $idchecet ).' class="element-css-q">'. wp_specialchars_decode( $array_field['5'] ) .'</div>
            </div>';
        } 
	  

        //10. total
        else if ($array_field['0'] == 'type-itog-element' && $quasar_form_array_option_1['4'] !='yes' ) { 
            $qclass = 'form-element-q type-itog-element';
            if ($array_field['2'] != 0) {$qclass.= ' tab-none-q';} 
            if ($array_field['4'] == 'none') {$qclass.= ' noneq';}
	        if ($array_field['6'] != '') {$qclass.= ' '.$array_field['6'];}  
	        
	        //decode spec symbol
            $array_field['5'] = quasar_form_decode($array_field['5']);
            $array_field['5'] = str_replace( "[itog]", "<span class='summa-itog'>0</span>", $array_field['5']  );
            $array_field['7'] = quasar_form_decode($array_field['7']);
            
            if ( !isset($array_field['8']) ){$array_field['8'] = '1';}
            if ( !isset($array_field['9']) ){$array_field['9'] = 'not';}
            if ( $array_field['9'] == 'yes' ){ $qclass.=' hide-not-full';}
            
            echo '
            <div id='.esc_attr( $array_field['3'] ).' class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['1'] ).'" data-tabs ='.esc_attr( $array_field['2'] ).' data-rounding="'.esc_attr( $array_field['8'] ).'" data-hide-total="'.esc_attr( $array_field['9'] ).'">
                <div id=elem'.esc_attr( $idchecet ).' data-kalkulation="'.esc_attr( $array_field['7'] ).'">'.wp_specialchars_decode( $array_field['5'] ).'</div>
            </div>';
        } 

        //11. range
        else if ($array_field['0'] == 'type-range-element' && $quasar_form_array_option_1['2'] !='yes' ){
            $qclass = 'form-element-q type-range-element polzunok-q-defaut qrstandart';
            if ($array_field['1'] == 'Requed'){$qclass.=' requed-field-q';}
            if ($array_field['3'] != 0) {$qclass.= ' tab-none-q';} 
            if ($array_field['5'] == 'none') {$qclass.= ' noneq';}
            if ($array_field['15'] == 'style2'){$qclass.=' qrstyle1';} 
            if ($array_field['18'] != '') {$qclass.= ' '.$array_field['18'];}
            
            if ( !isset($array_field['23']) ){$array_field['23'] = 'not';}
            if ( !isset($array_field['24']) ){$array_field['24'] = 'top';}
            if ( !isset($array_field['25']) ){$array_field['25'] = '6px';}
            if ( !isset($array_field['26']) ){$array_field['26'] = '10px';}
            if ( !isset($array_field['27']) ){$array_field['27'] = '-22px';}
            if ( !isset($array_field['28']) ){$array_field['28'] = '#3c434a';}

            echo"
            <div id='".esc_attr( $array_field['4'] )."' class='".esc_attr( $qclass )."' style='width: ".esc_attr( $array_field['2'] )."' data-req='".esc_attr( $array_field['1'] )."' data-tip='type-range-element' data-tabs='".esc_attr( $array_field['3'] )."' data-val='false'>
                <span class='heading-field-q' style='color:".esc_attr( $array_field['20'] )."; font-size:".esc_attr( $array_field['19'] )."; line-height:".esc_attr( $array_field['19'] )."; margin-bottom: ".esc_attr( $array_field['21'] )."; font-weight: ".esc_attr( $array_field['22'] )."'>".esc_html( $array_field['17'] )."</span>  
                <div class='polzet ".esc_attr( $array_field['6'] )."' style='background-color: ".esc_attr( $array_field['12'] )."; height: ".esc_attr( $array_field['25'] )."; border-radius: ".esc_attr( $array_field['26'] ).";' data-min='".esc_attr( $array_field['7'] )."' data-max='".esc_attr( $array_field['8'] )."' data-step='".esc_attr( $array_field['9'] )."' data-val='".esc_attr( $array_field['10'] )."' data-class='".esc_attr( $array_field['6'] )."' data-color1='".esc_attr( $array_field['11'] )."' data-color2='".esc_attr( $array_field['12'] )."' data-color3='".esc_attr( $array_field['13'] )."' data-color4='".esc_attr( $array_field['14'] )."' data-color5='".esc_attr( $array_field['28'] )."' data-sh='".esc_attr( $array_field['16'] )."' data-sh-2='".esc_attr( $array_field['23'] )."' data-p-s='".esc_attr( $array_field['24'] )."' data-m-s='".esc_attr( $array_field['27'] )."' data-info='type-range-element'></div> 
            </div>";
        }

    
        //12. datepicker
        else if ($array_field['0'] == 'type-data-element' && $quasar_form_array_option_1['1'] !='yes' ) { 
            $qclass = 'form-element-q type-data-element element-css-q '.esc_attr( $array_field['10'] ).' '.esc_attr( $array_field['14'] );
            $idchecet = $idchecet + 1;
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';}
            if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['7'] == 'none') {$qclass.= ' noneq';}
            if ($array_field['24'] != '') {$qclass.= ' '.$array_field['24'];} 
            //style 1
            if ($array_field['25'] =='style1'){
                $qclass.= ' style-qform-1'; 
                if ( $array_field['4'] !='') {
                    if ( $disable_design == 0) {
                        $heading = "<span class='heading-field-q' style='color:".esc_attr( $array_field['8'] )."; font-size:".esc_attr( $array_field['9'] )."; line-height:".esc_attr( $array_field['9'] )."; margin-bottom:".esc_attr( $array_field['28'] )."; font-weight: ".esc_attr( $array_field['29'] )."'>".esc_html( $array_field['4'] )."</span>";
                    }
                    else {
                        $heading = "<span class='heading-field-q'>".esc_html( $array_field['4'] )."</span>";
                    }
                }
                else {
                    $heading = '';
                    if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q-2';}
                }
                $requed = '<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span>';
            }
            //style 2
            if ($array_field['25'] =='style2'){
                $qclass.= ' style-qform-2';
                if ( $disable_design == 0) {
                    $heading = "
                    <label for='elem".esc_attr( $idchecet.$quasar_form_number )."'> 
                        <span class='heading-field-q' style='color:".esc_attr( $array_field['8'] )."; font-size:".esc_attr( $array_field['9'] )."; line-height:".esc_attr( $array_field['9'] )."; margin-bottom:".esc_attr( $array_field['28'] )."; font-weight: ".esc_attr( $array_field['29'] )."'>".esc_html( $array_field['4'] )."</span> <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>
                    </label>";
                }
                else {
                    $heading = "
                    <label for='elem".esc_attr( $idchecet.$quasar_form_number )."'> 
                        <span class='heading-field-q'>".esc_html( $array_field['4'] )."</span> <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>
                    </label>";
                }
                $requed = '';
            }
            
            //disable design
            $input_class='admin-filed-style-1 input-style-quasar ';
            if ( $disable_design == 0) {        
                $style_1 = 'font-size:'.esc_attr( $array_field['11'] ).'; border-color:'.esc_attr( $array_field['12'] ).'; background-color:'.esc_attr( $array_field['13'] ).'; border-radius:'.esc_attr( $array_field['15'] ).'; border-width: '.esc_attr( $array_field['16'] ).'; height:'.esc_attr( $array_field['17'] ).'; padding: '.esc_attr( $array_field['27'] );;
            }
            else {
                $style_1=''; $input_class='admin-filed-style-1 '; 
                $qclass = 'form-element-q type-data-element element-css-q style-qform-1';
                if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q';}
            }
            
            if ( !isset($array_field['30']) ){$array_field['30'] = 'defoult';}
            if ( !isset($array_field['31']) ){$array_field['31'] = 'yes';}
            if ( !isset($array_field['32']) ){$array_field['32'] = 'not';}

           
            echo '
            <div id="'.esc_attr( $array_field['6'] ).'" class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['3'] ).'" data-tabs ='.esc_attr( $array_field['5'] ).' data-values="1" data-val="false" data-lang="'.esc_attr( $array_field['30'] ).'" data-s-1="'.esc_attr( $array_field['31'] ).'" data-s-2="'.esc_attr( $array_field['32'] ).'">
            '.wp_specialchars_decode( $heading ).'
                <div class="input-swap">
                    '.wp_specialchars_decode( $requed ).'
                    <input id="elem'.esc_attr( $idchecet.$quasar_form_number ).'" class="'.esc_attr( $input_class.$array_field['2'] ).'" style="'.esc_attr( $style_1 ).'" placeholder="'.esc_attr( $array_field['1'] ).'" data-colorsw='.esc_attr( $array_field['21'] ).' data-colorsw2='.esc_attr( $array_field['22'] ).' data-colorsw3='.esc_attr( $array_field['23'] ).' autocomplete="off"> 
                    <div class="fa-icons-q" data-num='.esc_attr( $array_field['19'] ).'> 
                        <i class="'.esc_attr( $array_field['18'] ).'" style="font-size:'.esc_attr( $array_field['11'] ).'; color:'.esc_attr( $array_field['20'] ).'"></i>
                    </div>
                </div>
            </div>';
        }  
    
        //13. timepicker
        $requedclass1 = 'norequedclass' ;
        if ($array_field['0'] == 'type-timepicker-element') {
            $qclass = 'form-element-q type-timepicker-element element-css-q '.$array_field['14'];
            $idchecet = $idchecet + 1;
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';}; 
            if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['7'] == 'none') {$qclass.= ' noneq' ;}
	        if ($array_field['21'] != '') {$qclass.= ' '.$array_field['21'];}
	        $validation_error = '';
            //style 1
	        if ($array_field['22'] =='style1'){ 
                $qclass.= ' style-qform-1'; 
                if ( $array_field['4'] !='') {
                    if ( $disable_design == 0) { 
                        $heading ='<span class="heading-field-q" style="color:'.esc_attr( $array_field['8'] ).'; font-size: '.esc_attr( $array_field['9'] ).'; line-height: '.esc_attr( $array_field['9'] ).'; margin-bottom: '.esc_attr( $array_field['25'] ).'; font-weight: '.esc_attr( $array_field['26'] ).';">'.esc_html( $array_field['4'] ).'</span>';
                    }
                    else {
                        $heading ='<span class="heading-field-q">'.esc_html( $array_field['4'] ).'</span>';
                    }
                }
                else  { 
                    $heading = '';
                    if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q-2';}
                }
	            $requed = $validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span>';
            }   
            //style 2
            if ($array_field['22'] =='style2'){
                $qclass.= ' style-qform-2'; 
                if ( $disable_design == 0) { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q" style="color:'.esc_attr( $array_field['8'] ).'; font-size: '.esc_attr( $array_field['9'] ).'; line-height: '.$array_field['9'].'; margin-bottom: '.esc_attr( $array_field['25'] ).'; font-weight: '.esc_attr( $array_field['26'] ).';">'.esc_html( $array_field['4'] ).'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                else { 
                    $heading ='<label for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> <span class="heading-field-q">'.esc_html( $array_field['4'] ).'</span> '.$validation_error.'<span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span> </label>';
                }
                $requed = '';
            }
            //disable design
            $input_class='admin-filed-style-1 input-style-quasar ';
            if ( $disable_design == 0) {  
                $style_1 ='font-size: '.esc_attr( $array_field['11'] ).'; border-color:'.esc_attr( $array_field['12'] ).'; background-color:'.esc_attr( $array_field['13'] ).';  border-radius:'.esc_attr( $array_field['15'] ).'; border-width: '.esc_attr( $array_field['16'] ).'; height:' .esc_attr( $array_field['17'] ).'; padding: '.esc_attr( $array_field['24'] );
 
            }
            else {
                $style_1=''; $input_class='admin-filed-style-1 '; 
                $qclass = 'form-element-q type-timepicker-element element-css-q style-qform-1';
                if ($array_field['2'] == 'Requed'){$qclass.= ' requed-field-q';}
            }
            
            if ( !isset($array_field['27']) ) {$array_field['27'] = '';}
            if ( !isset($array_field['28']) ) {$array_field['28'] = 'disabled';}
            if ( isset($array_field['29']) ) {
                if ( $array_field['29'] != '' ) {$input_class.= $array_field['29'].' ';}
            }
            echo '
            <div id="'.esc_attr( $array_field['6'] ).'" class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['3'] ).'" data-tabs=' .esc_attr( $array_field['5'] ). ' data-values="1" data-validation="' . esc_attr( $array_field['23'] ).'" data-val="false" data-min="'.esc_attr( $array_field['27'] ).'" data-max="'.esc_attr( $array_field['28'] ).'" data-step="'.esc_attr( $array_field['30'] ).'" data-color-1="'.esc_attr( $array_field['31'] ).'" data-color-2="'.esc_attr( $array_field['32'] ).'" data-color-3="'.esc_attr( $array_field['33'] ).'" data-color-4="'.esc_attr( $array_field['34'] ).'" data-time="">
            '.wp_specialchars_decode( $heading ).'
                <div class="input-swap">
                    <div class="wrap-time-picker-q" style="font-size: '.esc_attr( $array_field['11'] ).'; color: '.esc_attr( $array_field['10'] ).'">
                        <div class="timepicker-q hour-picker-q">--</div><span>:</span><div class="timepicker-q minut-picker-q">--</div> 
                    </div> 
                    '.wp_specialchars_decode( $requed ).'
                    <input id="elem'.esc_attr( $idchecet.$quasar_form_number ).'" type="text" class="'.esc_attr( $input_class.$array_field['2'] ).'" style="'.esc_attr( $style_1 ).'" placeholder="'.esc_attr( $array_field['1'] ).'" name="input;'.esc_attr( $array_field['5'] ). ';' .esc_attr( $idchecet ).'" autocomplete="off" readonly> 
                    <div class="fa-icons-q" data-num='.esc_attr( $array_field['19'] ).'> 
                        <i class="'.esc_attr( $array_field['18'] ).'" style="font-size:'.esc_attr( $array_field['11'] ).'; color:'.esc_attr( $array_field['20'] ).'"></i>
                    </div>
                </div>
            </div>';
        }

        //14. upload
        else if ($array_field['0'] == 'type-upload-element') {
            $qclass = 'form-element-q type-upload-element';
            if ($array_field['1'] == 'Requed'){$qclass.= ' requed-field-q';}
            if ($array_field['4'] != 0) {$qclass.= ' tab-none-q';}
            if ($array_field['6'] == 'none') {$qclass.= ' noneq';}
	        if ($array_field['11'] != '') {$qclass.= ' '.$array_field['11'];}  
            $idchecet = $idchecet + 1;
        
            $style_1 = 'background-color:'.esc_attr( $array_field['12'] ).'; color:'.esc_attr( $array_field['13'] ).'; border-color:'.esc_attr( $array_field['14'] ).'; border-radius:'.esc_attr( $array_field['16'] ).'; border-width:'.esc_attr( $array_field['24'] ).'; font-size:'.esc_attr( $array_field['19'] );
            $style_2 = "color:".esc_attr( $array_field['21'] )."; font-size:".esc_attr( $array_field['20'] )."; line-height:".esc_attr( $array_field['20'] )."; margin-bottom:".esc_attr( $array_field['22'] )."; font-weight: ".esc_attr( $array_field['23'] );
        
            echo '
            <div id='.esc_attr( $array_field['5'] ).' class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_field['2'] ).'" data-tabs ='.esc_attr( $array_field['4'] ).' data-values="1" data-max='.esc_attr( $array_field['7'] ).' data-r='.esc_attr( $array_field['8'] ).' data-v='.esc_attr( $array_field['9'] ).' data-add="'.esc_html( $massivlocalization['8'] ).'" data-text="'.esc_html( $massivlocalization['7'] ).'">
                <span class="heading-field-q" style="'.esc_attr( $style_2 ).'">'.esc_html( $array_field['3'] ).'</span> 
                <div class="swap-button-upload"> 
                    <span class="error-filed-q requed-message" data-text="'.esc_attr( $massivlocalization['2'] ).'"></span>  
                    <span class="messagereq"> 
                        <span class="error-upload-1" data-text="'.esc_attr( $massivlocalization['9'] ).'"></span>
                        <span class="error-upload-2" data-text="'.esc_attr( $massivlocalization['10'] ).'"></span>
                    </span>
                    <label class="style-element '.esc_attr( $array_field['17'] ).' '.esc_attr( $array_field['18'] ).'" style="'.esc_attr( $style_1 ).'" for="elem'.esc_attr( $idchecet.$quasar_form_number ).'"> 
                        <span class="textfq" >'.esc_html( $array_field['10'] ).'</span> 
                        <div class="fa-icons-q">
                            <i style="color: '.esc_attr( $array_field['15'] ).'" class="fa fa-uploadq"></i>
                        </div> 
                        <input id=elem'.esc_attr( $idchecet.$quasar_form_number ).' class="element-css-q '.esc_attr( $array_field['1'] ).'" name="file[]" type="file" >
                    </label> 
                </div>
            </div>';
        } 

        //15. captcha
        else if ($array_field['0'] == 'type-captcha-element') { 
            $qclass = 'form-element-q element-css-q type-captcha-element requed-field-q';
            if ($array_field['2'] == 'none'){$qclass.= ' noneq';}
            if ($array_field['6'] != '') {$qclass.= ' '.$array_field['6'];}
            
            $heading ="<span class='heading-field-q' style='color:".esc_attr( $array_field['9'] )."; font-size:".esc_attr( $array_field['10'] )."; line-height:".esc_attr( $array_field['10'] )."; margin-bottom: ".esc_attr( $array_field['11'] )."; font-weight: ".esc_attr( $array_field['13'] )."'>".esc_html( $array_field['12'] )."</span>";
     
            echo "
            <div id='".esc_attr( $array_field['7'] )."' class='".esc_attr( $qclass )."' style='width: ".esc_attr( $array_field['1'] )."' data-tabs = ".esc_attr( $array_field['8'] )." data-tip='type-captcha-element' data-sizes='".esc_attr( $array_field['1'] )."'>".wp_specialchars_decode( $heading )."
                <div class='captcha-element-q'>
                    <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>
                    <span class='error-filed-q error-captcha-e' data-text='".esc_attr( $massivlocalization['6'] )."'></span> 
                    <img src='".esc_url($url)."/qfc-2.png'>
                    <div class='pl-form-q'>+</div> 
                    <img src='".esc_url($url)."/qfc-5.png'> 
                    <div class='pl-form-q'>=</div> 
                    <input class='pl-form-q' style='border-color: ".esc_attr( $array_field['3'] )."; border-width: ".esc_attr( $array_field['4'] )."; border-radius: ".esc_attr( $array_field['5'] ).";'>
                </div>
            </div>";
        }
    
    
        //16. privacy
        else if ($array_field['0'] == 'type-privacy-element') { 
            $qclass = 'form-element-q type-privacy-element element-css-q';
            $idchecet = $idchecet + 1;
            if ($array_field['2'] == 'none') {$qclass.= ' noneq';}
            if ($array_field['5'] != 0) {$qclass.= ' tab-none-q';}
	        if ($array_field['6'] =='style1' && wp_style_is( 'Quasar-form-icon', 'done' ) ){ $qclass.= ' style-t-qform-1'; }
	        else if ($array_field['6'] =='style1' && !wp_style_is( 'Quasar-form-icon', 'done' ) ){ $qclass.= ' style-t-qform-2'; $array_field['16'] = $array_field['8']; }
            if ($array_field['15'] != '') {$qclass.= ' '.$array_field['15'];}
            if ($array_field['19'] == 'Requed'){$qclass.= ' requed-field-q';}
           
            $style_1 = "border-color:".esc_attr( $array_field['7'] )."; border-width:".esc_attr( $array_field['12'] )."; min-width:".esc_attr( $array_field['10'] ). "; width:".esc_attr( $array_field['10'] )."; height:".esc_attr( $array_field['10'] );
            $style_2 = "font-size:".esc_attr( $array_field['11'] )."; background-color:".esc_attr( $array_field['16'] )."; color:".esc_attr( $array_field['8'] )."; width:".esc_attr( $array_field['11'] )."; height:".esc_attr( $array_field['11'] );
            $style_3 = "color:".esc_attr( $array_field['20'] )."; font-size:".esc_attr( $array_field['21'] )."; line-height:".esc_attr( $array_field['21'] )."; margin-bottom: ".esc_attr( $array_field['13'] )."; font-weight: ".esc_attr( $array_field['25'] );
            
            //defoult val
            if ( !isset($array_field['26']) ){ $array_field['26'] = 'no'; }
            if ( $array_field['26'] == 'yes' ) { $checked = 'checked'; }
            else { $checked = ''; }
            if ( !isset($array_field['28']) ){ $array_field['28'] = '#fff';}

            //decode spec symbol
            $array_field['17'] = quasar_form_decode($array_field['17']);
            
            echo "
            <div id='".esc_attr( $array_field['4'] )."' class='".esc_attr( $qclass )."' style='width: ".esc_attr( $array_field['1'] )."' data-tip='type-privacy-element' data-tabs='".esc_attr( $array_field['5'] )."' data-req='".esc_attr( $array_field['19'] )."' data-style='".esc_attr( $array_field['6'] )."'>
                <span class='heading-field-q' style='".esc_attr( $style_3 )."'>".esc_html( $array_field['3'] )."</span>
                <div class='checkbox-box-q'>
                    <span class='error-filed-q requed-message' data-text='".esc_attr( $massivlocalization['2'] )."'></span>
                    <div class='swap-checkbox-q'> 
                        <input type='checkbox' id='".esc_attr( $array_field['18'].$quasar_form_number  )."' ".esc_attr( $checked )."> 
                        <label for='".esc_attr( $array_field['18'].$quasar_form_number )."'>
                            <div class='checkbox-qform' style='".esc_attr( $style_1 )."'>
                                <div class='checkbox-fafa' style='background-color: ".esc_attr( $array_field['28'] )."'>
                                    <i class='fa fa-checkq' style='".esc_attr( $style_2 )."'></i>
                                </div>
                            </div>
                            <div class='text-privacy-q'>".wp_specialchars_decode( $array_field['17'] )."</div>
                        </label>
                    </div>
                </div>
            </div>";
        } 

        // 17. paypal
        else if ($array_field['0'] === 'type-paypal-element') { 
            $qclass  = 'form-element-q type-paypal-element element-css-q';
            if ($array_field['11'] == 'none'){$qclass.= ' noneq';}
            if ($array_field['12'] != '') {$qclass.= ' '.$array_field['12'];}

            if ( preg_match("/[^0-9\.]/", $array_field['4']) ) { $price = "data-i-1='".esc_attr( $array_field['4'] )."'"; }
            else { $price =''; }
            
            if ( preg_match("/[^0-9\.]/", $array_field['5']) ) { $number = "data-i-2='".esc_attr( $array_field['5'] )."'"; }
            else { $number  =''; }
            
            echo " 
            <div id='".esc_attr( $array_field['10'] )."' class='".esc_attr( $qclass )."' style='width: ".esc_attr( $array_field['8'] )."' data-tip='type-paypal-element' data-tabs='".esc_attr( $array_field['9'] )."' data-sizes='".esc_attr( $array_field['8'] )."' $price $number  data-custum='".esc_attr( $array_field['12'] )."'> 
                <span class='text-paypal-q'><img src='".quasar_form_url."assets/img/paypal-icon.png' alt='PayPal' width='82' height='24'> </span>
            </div>";
        }
    
        //18. construction 1
        else if (stristr($array_field['0'], 'construction@')!=FALSE) {
            $array_style_column = explode("@",$array_field['0']); 
            echo '<div class="construction-block" data-tabs ="'.esc_attr( $array_style_column['1'] ).'"> ';
        }
        else if (stristr($array_field['0'], 'container@')!=FALSE) { 
            $array_style_column = explode("@",$array_field['0']);
            
            $qclass = 'box-construction-q';
            if ($array_style_column['5'] != '') { $qclass.= ' '.$array_style_column['5']; }
            $array_padding = explode('|', $array_style_column['3']);
            $array_margin = explode('|', $array_style_column['4']);
            
            echo '<div class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_style_column['1'] ).'; background-color: '.esc_attr( $array_style_column['2'] ).'; padding-left: '.esc_attr( $array_padding['0'] ).'; padding-right: '.esc_attr( $array_padding['1'] ).'; padding-top: '.esc_attr( $array_padding['2'] ).'; padding-bottom: '.esc_attr( $array_padding['3'] ).'; margin-left: '.esc_attr( $array_margin['0'] ).'; margin-right: '.esc_attr( $array_margin['1'] ).'; margin-top: '.esc_attr( $array_margin['2'] ).'; margin-bottom: '.esc_attr( $array_margin['3'] ).'; "> ';
        }
    
        if ($array_field['0'] == 'endconteiner@') {echo '</div>';}
        if ($array_field['0'] == 'endconstruct@') {echo '</div>';}
    
    
        //19. construction 2
        else if (stristr($array_field['0'], 'construction2@')!=FALSE) {
            $array_style_column = explode("@",$array_field['0']); 
            echo '<div class="construction-block second-level-q" data-tabs ="'.esc_attr( $array_style_column['1'] ).'"> ';
        }
        else if (stristr($array_field['0'], 'container2@')!=FALSE) { 
            $array_style_column = explode("@",$array_field['0']);;
            
            $qclass = 'box-construction-q';
            if ($array_style_column['5'] != '') { $qclass.= ' '.$array_style_column['5']; }
            $array_padding = explode('|', $array_style_column['3']);
            $array_margin = explode('|', $array_style_column['4']);
            
            echo '<div class="'.esc_attr( $qclass ).'" style="width: '.esc_attr( $array_style_column['1'] ).'; background-color: '.esc_attr( $array_style_column['2'] ).'; padding-left: '.esc_attr( $array_padding['0'] ).'; padding-right: '.esc_attr( $array_padding['1'] ).'; padding-top: '.esc_attr( $array_padding['2'] ).'; padding-bottom: '.esc_attr( $array_padding['3'] ).'; margin-left: '.esc_attr( $array_margin['0'] ).'; margin-right: '.esc_attr( $array_margin['1'] ).'; margin-top: '.esc_attr( $array_margin['2'] ).'; margin-bottom: '.esc_attr( $array_margin['3'] ).'; "> ';
        }
    
        if ($array_field['0'] == 'endconteiner2@') {echo '</div>';}
        if ($array_field['0'] == 'endconstruct2@') {echo '</div>';}
    
    } //end array created field
  

    echo '
    <div class="swap-error-qform">
         <span class="error-qform" data-text="'.esc_attr__('Please correct the errors and try again','quasar-form').'"></span>
    </div>
    <div class="submit-quasar-form-event"></div>
    <div class="special-element">
        <input class="special-field">
    </div>
    <div class="special-element url-r" data-url="'.esc_attr( $redirect ).'"></div>
   </form>
</div>
</div>
</div>';
}

if (isset($_POST["txn_id"]) && isset($_POST["txn_type"])){
    require_once (quasar_form_path .'include/paypal.php');
}
