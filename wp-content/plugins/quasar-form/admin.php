<?php 
    $url = plugins_url( '/assets/img', __FILE__ );
    $quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option WHERE id='1'", ARRAY_A  );
    foreach($quasar_form_option as $row){
        if ( !preg_match("/;/", $row['mainparams']) ) {$row['mainparams'] = 'not;not;not;not;not';}
        $array_option = explode(";",$row['mainparams']);
    }
    
    
    if ( is_plugin_active('wp-rocket/wp-rocket.php') ) {
        echo 
        '<div class="wrap-text-warning-cash">
            <div class="text-warning-cash">
                <span>'.esc_html__('Note.','quasar-form').'</span>
                <span>'.esc_html__('Сaching plugin "WP Rocket" is installed on your site. With incorrect cache settings, you may have a problem receiving notifications from forms.','quasar-form').'</span>
                <a href="'.esc_html__('https://quasar-form.com/help/sending-emails/basic-setup/#help-c','quasar-form').'" target="_blank">'.esc_html__('Read the instructions on what to add to the "WP Rocket" settings','quasar-form').'</a>
            </div>
        </div>';
    }
?>



<div class='header-form-quasar'>
    <div class='swap-header-q'>
        <div class='swap-logo-header-q'>
            <div class='logo-header-q'>
                <div class='version-q-form'><?php esc_html_e('Free version','quasar-form');?> 5.9</div>
            </div> 
        </div>
        <div class='menu-header-q'>
            <div class='element-header-menu'><?php esc_html_e('License','quasar-form');?></div>
            <div class='element-header-lib-menu menu-top-quasar'><?php esc_html_e('Speed settings','quasar-form');?>
                <div class='menu-top-drop'>
                    
                    <div class='wrap-dashboard-speed-q'>
                    
                        <div class='swap-top-heading-q'><?php esc_html_e('If your goal is the maximum website loading speed and the "PageSpeed Insights" (Google speed) indicator is important for you, you can disable libraries that are not used in the forms. If you disable all libraries, the plugin will affect the website loading speed by 0.5%.','quasar-form');?>
                        </div>
                    
                        <div class='swap-top-menu-new-q'>
                            <div class='li-top-menu-q admin-check-style-1'>  
                                <input id='disable-lib-fafa' type='checkbox' autocomplete='off' data-disable='<?php echo $array_option[0] ?>'><label for='disable-lib-fafa'></label><span><?php esc_html_e('Disable the fa fa icons library','quasar-form');?></span>
                            </div> 
                        
                            <div class='li-top-menu-q admin-check-style-1'>  
                                <input id='disable-lib-date' type='checkbox' autocomplete='off' data-disable='<?php echo $array_option[1] ?>'><label for='disable-lib-date'></label><span><?php esc_html_e('Disable the "Datepicker" field library','quasar-form');?></span> 
                            </div>
                        
                            <div class='li-top-menu-q admin-check-style-1'>  
                                <input id='disable-lib-slider' type='checkbox' autocomplete='off' data-disable='<?php echo $array_option[2] ?>'><label for='disable-lib-slider'></label><span><?php esc_html_e('Disable the "Slider" field library','quasar-form');?></span> 
                            </div>
                        
                            <div class='li-top-menu-q admin-check-style-1'>  
                                <input id='disable-lib-phone' type='checkbox' autocomplete='off' data-disable='<?php echo $array_option[3] ?>'><label for='disable-lib-phone'></label><span><?php esc_html_e('Disable the phone mask library in the "Phone input" field','quasar-form');?></span>
                            </div>
                        
                            <div class='li-top-menu-q admin-check-style-1'>  
                                <input id='disable-lib-calculator' type='checkbox' autocomplete='off' data-disable='<?php echo $array_option[4] ?>'><label for='disable-lib-calculator'></label><span><?php esc_html_e('Disable calculator library','quasar-form');?></span> 
                            </div>
                        </div>
                    
                        <div class='swap-save-block-q'>
                            <div class='swap-top-menu-save-q'><?php esc_html_e('Save setting','quasar-form'); ?> </div>
                            <div class='swap-save-informer-q'>
                                <div class="error-saved-lib-q"> <span><i class='fa fa-exclamation-triangleq'></i></span> <?php esc_html_e('Error while saving','quasar-form'); ?> </div>
                                <div class="saved-lib-q"> <span><i class='fa fa-checkq'></i></span> <?php esc_html_e('Saved','quasar-form'); ?> </div>
                            </div>
                        </div>
                    
                    </div>
                    <div class='wrap-img-speed-q'>
                        <p><img src='<?php echo esc_url($url); ?>/speed-setting.png'></p>
                    </div> 
                    
                </div>
            </div>
                
            <div class='element-header-addon menu-top-quasar'><?php esc_html_e('Addons','quasar-form');?>
                <div class='menu-top-drop width-auto-menu'>
                    <div class='wrap-dashboard-speed-q'>
                        <div class='addons-list'>
                            
                            <div class='wrap-addon-element-q'>
                                <p class='name-addon-q'>1) Quasar Form add-on for WooCommerce</p>
                                <p class='description-addon-q'><?php esc_html_e('Allows you to use forms from the Quasar Form plugin as quick order forms in Woocommerce. Free version available.','quasar-form');?></p>
                                <p class='link-addon-q'>
                                    <a href='<?php esc_html_e('https://woocommerce.quasar-form.com/', 'quasar-form');?>' target='_blank'><?php esc_html_e('See addon demo','quasar-form'); ?></a>
                                </p>
                            </div>
                            
                            <div class='wrap-addon-element-q'>
                                <p class='name-addon-q'>2) Quasar Form add-on for Telegram</p>
                                <p class='description-addon-q'><?php esc_html_e('Allows you to duplicate applications from forms created in the Quasar Form plugin in Telegram.','quasar-form');?>
                                <span class='link-addon-q'> <a href='<?php esc_html_e('https://quasar-form.com/telegram/', 'quasar-form');?>' target='_blank'><?php esc_html_e('Instruction','quasar-form'); ?></a></span></p>
                            </div>
                            
                            <div class='wrap-addon-element-q'>
                                <p class='name-addon-q'>3) Quasar Form add-on for Bitrix24</p>
                                <p class='description-addon-q'><?php esc_html_e('Allows you to duplicate applications from forms created in the Quasar Form plugin in Bitrix24.','quasar-form');?>
                                <span class='link-addon-q'> <a href='<?php esc_html_e('https://quasar-form.com/bitriks24/', 'quasar-form');?>' target='_blank'><?php esc_html_e('Instruction','quasar-form'); ?></a></span></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    </div>  
</div>

<div class='activation-quasar-form'>
    <p class='activation-text-q'><?php esc_html_e('Please activate the plugin','quasar-form');?> </p>
    <div class='element-css-q type-input-element style-qform-1 color-p-10 key-field-q'>
        <input id='activate-element-q' class='style-element' placeholder='<?php esc_attr_e('Enter product key','quasar-form');?>' autocomplete='off'>
    </div>
    <div class='activate-button-q'><?php esc_html_e('Activate','quasar-form');?> </div>
</div> 

<div class='status-license-q'>
    <div class='status-license-swap'>  
    
        <div class='status-license-yes'>  
            <p class='activated-test-q'><i class='fa fa-checkq'></i> <?php esc_html_e('Plugin activated','quasar-form');?></p>
            <p class='text-status-support-q'><?php esc_html_e('You can contact support if you encounter problems with the operation of the plugin.','quasar-form');?> </p>
        </div>
        
        <div class='status-license-not'>  
            <p class='no-activated-test-q'><i class="fa fa-timesq"></i> <?php esc_html_e('Plugin not activated','quasar-form');?></p>
            <p class='text-status-support-q'><?php esc_html_e('Support service is not available for you.','quasar-form');?> </p>
        </div>
        
    </div>
</div>

    
<div class='swap-panel-form-q'>
    <div class='swap-select-form-q'>
        <div class='box-select-form-q'>
            <div class='head-select-form'>
                <div class='heading-select-form'><?php esc_html_e('Select form','quasar-form');?></div>
                <div class='swap-box-created-form'>
                    <div class='swap-created-form'> 
                        <div class='box-created-form-q'>
                            <div class='headin-new-quasar-form'><?php esc_html_e('Creating a new form','quasar-form');?></div>
                            <div class='swap-panel-add-new-form'>
                                <input id='nameQform' class='input-name-add-form admin-filed-style-1' placeholder='<?php esc_html_e('Form name','quasar-form');?>'>
                                <div class='error-add-newform'></div>
                                <div class='swap-created-form-button'>
                                    <div class='created-form-button'><?php esc_html_e('Create form','quasar-form'); ?> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
                <div class='swap-modal-remove'> 
                    <div class='podtverdit-modal' data-remove=''>
                        <div class='yes-remove'><?php esc_html_e('Yes','quasar-form'); ?> </div>
                        <div class='not-remove'><?php esc_html_e('No','quasar-form'); ?> </div>
                    </div> 
                </div> 
                <div class='button-add-newform'><?php esc_html_e('Create form','quasar-form'); ?></div> 
            </div>
            <div class='structure-select-panel'>
                <div class='swap-structure-select-panel'>
                    <div class='structure-id'><?php esc_html_e('ID','quasar-form'); ?></div>  
                    <div class="structure-name"><?php esc_html_e('Name and shortcode','quasar-form'); ?></div>  
                    <div class="structure-edit"><?php esc_html_e('Last-edit','quasar-form'); ?></div>  
                </div>
            </div>

            <?php global $wpdb  ;
            $quasar_form_array_form = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_main" , ARRAY_A  ); 
            //create main form selection list
            $quasar_form_number = 0;
            foreach($quasar_form_array_form as $quasar_form_row){
                //last edit date
                $quasar_form_data = explode('-', date("Y-m-d-G") );
                $quasar_form_data_bd = explode('-', $quasar_form_row['date'] ); 
                $quasar_form_data_if = '';  
                $quasar_form_number++;
                //year
                if ($quasar_form_data[0] != $quasar_form_data_bd[0]){
                    $quasar_form_date_itog = $quasar_form_data[0] - $quasar_form_data_bd[0];
                    if ( $quasar_form_date_itog > 1){ $quasar_form_data_if = esc_html__('more than a year ago','quasar-form'); }
                    else  { 
                        $quasar_form_data_if = esc_html__('last year','quasar-form'); 
                    }
                }
                //months
                if ($quasar_form_data_if ==''){
                    if ( $quasar_form_data[1] != $quasar_form_data_bd[1]){
                        $quasar_form_date_itog = $quasar_form_data[1] - $quasar_form_data_bd[1];
                        if ( $quasar_form_date_itog == 1){ $quasar_form_data_if = esc_html__('last month','quasar-form'); } 
                        if ( $quasar_form_date_itog > 1 && $quasar_form_date_itog < 5){ $quasar_form_data_if = $quasar_form_date_itog.esc_html__(' months ago','quasar-form'); }
                        if ( $quasar_form_date_itog >= 5){ $quasar_form_data_if = $quasar_form_date_itog.esc_html__(' months ago','quasar-form'); }
                   }
                }   
                //days
                if ($quasar_form_data_if ==''){
                    if ( $quasar_form_data[2] != $quasar_form_data_bd[2]){
                        $quasar_form_date_itog = $quasar_form_data[2] - $quasar_form_data_bd[2];
                        if ( $quasar_form_date_itog == 1){ $quasar_form_data_if = esc_html__('yesterday','quasar-form'); }
                        if ( $quasar_form_date_itog > 1 && $quasar_form_date_itog < 5){ $quasar_form_data_if = $quasar_form_date_itog.esc_html__(' days ago','quasar-form'); }
                        if ( $quasar_form_date_itog >= 5){ $quasar_form_data_if = $quasar_form_date_itog.esc_html__(' days ago','quasar-form'); } 
                   }
                }
                //hour
                if ($quasar_form_data_if ==''){
                    if ( $quasar_form_data[3] != $quasar_form_data_bd[3]){
                        $quasar_form_date_itog = $quasar_form_data[3] - $quasar_form_data_bd[3];
                        if ( $quasar_form_date_itog == 1){ $quasar_form_data_if = esc_html__('hour ago','quasar-form'); }//1 hour
                        if ( $quasar_form_date_itog > 1 && $quasar_form_date_itog < 5){ $quasar_form_data_if = $quasar_form_date_itog.esc_html__(' hours ago','quasar-form'); }
                        if ( $quasar_form_date_itog >= 5){ $quasar_form_data_if = $quasar_form_date_itog.esc_html__(' hours ago','quasar-form'); } 
                    }
                    else  { 
                        $quasar_form_data_if = $quasar_form_data_if.esc_html__(' less than an hour ago','quasar-form'); 
                    }

                }
                //attrabyte pagination
                $quasar_form_pagination_id = ($quasar_form_number / 10);
                if (stristr($quasar_form_pagination_id, '.')!=FALSE)  { 
                    $quasar_form_pagination_id = explode('.' , $quasar_form_pagination_id); 
                    $quasar_form_paginationprior = $quasar_form_pagination_id[0];
                    $quasar_form_paginationprior++;
                } 
                else {
                    $quasar_form_paginationprior = $quasar_form_pagination_id;
                }
                //main list form
                if ($quasar_form_paginationprior != 1 ){ echo '<div class="swap-select-form" style="display: none" data-pagination="'.esc_attr( $quasar_form_paginationprior ).'">' ;}
                else  { 
                    echo '<div class="swap-select-form" data-pagination="'.esc_attr( $quasar_form_paginationprior ).'">'; 
                }
                
                //name
                if ( json_decode($quasar_form_row['name']) != null){ 
                    $quasar_form_row['name'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['name'] );
                    $quasar_form_row['name'] = json_decode($quasar_form_row['name']);
                }
                
                echo '
                <div class="viborform"> 
                    <div class="id-form-q">'.esc_html( $quasar_form_row['id'] ).'</div>  
                    <div class="name-form-q"> 
                        <div class="this-name-q">'.esc_html( $quasar_form_row['name'] ).'</div>
                        <div class="short-code-q">[formaQ id="'.esc_html( $quasar_form_row['id'] ).'" type="inline" align="center" ]</div>
                    </div>
                    <div class="last-edit-form">'.esc_html( $quasar_form_data_if ).'</div>
                </div> 
                <div class="copy-form-q"><i class="fa fa-cloneq"></i></div>
                <div class="remove-form"><i class="fa fa-timesq"></i></div></div>';
            } 
            echo '<div class="pagination-form-q">';
            //pagination
            if ($quasar_form_number > 1){
                $quasar_form_number_pagination = 0;
                $quasar_form_pagination_count = $quasar_form_number;
                while( $quasar_form_pagination_count > 0){
                    $quasar_form_number_pagination++;
                    if ($quasar_form_number_pagination == 1){ 
                        echo '<div class="pagination-number active-pagination">'.esc_html( $quasar_form_number_pagination ).'</div>'; 
                    }
                    else  { 
                        echo '<div class="pagination-number">'.esc_html( $quasar_form_number_pagination ).'</div>'; 
                    }
                    $quasar_form_pagination_count = $quasar_form_pagination_count - 10;
                }
            }
            echo '</div>';
            ?>
        </div>
        <div class="test-help-shortcode"><?php echo esc_html_e('Shortcode for popup form looks like this:','quasar-form') ?> 
            <p>[formaQ id="1" type="popup" align="center" text="text button" ] </p> 
        </div>
    </div>
    

<div class="swap-history-message">
        <div class="box-history-message">
            <div class="heading-histoty"><?php esc_html_e('Last 30 emails','quasar-form'); ?></div>
            <?php //history send message
            global $wpdb  ;
            $quasar_form_array_form = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_history" , ARRAY_A  ); 
            $quasar_form_array_form = array_reverse($quasar_form_array_form);
            $quasar_form_number = 0;
            foreach($quasar_form_array_form as $quasar_form_row){
                //only mail message
                if ( $quasar_form_row['payments'] !='paymant'){
                    //spam protect
                    $spam_protect = '';
                    if ( $quasar_form_row['payments'] =='spam'){ $spam_protect = "<span class='spam-detected'>".esc_html__('Spam', 'quasar-form')."</span>"; }
                    
                    //attribute pagination
                    $quasar_form_number++;
                    $quasar_form_pagination_id = ($quasar_form_number / 10);
                    if (stristr($quasar_form_pagination_id, '.')!=FALSE)  {
                        $quasar_form_pagination_id = explode('.' , $quasar_form_pagination_id); 
                        $quasar_form_paginationprior = $quasar_form_pagination_id[0]; 
                        $quasar_form_paginationprior++;
                    } 
                    else { 
                        $quasar_form_paginationprior = $quasar_form_pagination_id; 
                    }
                    if ($quasar_form_paginationprior != 1){
                        echo '<div class="swap-message-element" style="display:none" data-pagination="'.esc_attr( $quasar_form_paginationprior ).'" data-id="'.esc_attr( $quasar_form_row['id'] ).'">'; 
                    }
                    else { 
                        echo '<div class="swap-message-element" data-pagination="'.esc_attr( $quasar_form_paginationprior) .'" data-id="'.esc_attr( $quasar_form_row['id'] ).'">';
                    }
                    $quasar_form_row['message'] = str_replace( 'RTQasB', '\\', $quasar_form_row['message'] );
                    if ( json_decode($quasar_form_row['message']) != null ){ 
                       $quasar_form_row['message'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['message'] );
	                   $quasar_form_row['message'] = json_decode( $quasar_form_row['message'] );
                    }
                    if ( json_decode($quasar_form_row['heading']) != null ){ 
                       $quasar_form_row['heading'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['heading'] );
	                   $quasar_form_row['heading'] = json_decode( $quasar_form_row['heading'] );
                    }    
                    echo '<div class="message-date element-history">'.esc_html( $quasar_form_row['data'] ).'</div> 
                       <div class="name-subject element-history">'.esc_html( $quasar_form_row['heading'] ).'</div> 
                      <div class="short-message-history element-history">'.$spam_protect.'</div>  
                      <div class="spoiler-label"><i class="fa fa-chevron-downq"></i></div>
                      <div class="remove-message-block"><i class="fa fa-timesq"></i></div>
                      <div class="message-history element-history">'.wp_specialchars_decode( $quasar_form_row['message'] ).'</div> 
                    </div> ';
                }
            }
            echo '<div class="pagination-history-q">';
            //pagination in history
            if ($quasar_form_number > 1){
                $quasar_form_number_pagination = 0;
                $quasar_form_pagination_count = $quasar_form_number;
                while( $quasar_form_pagination_count > 0 ){
                    $quasar_form_number_pagination++;
                    if ($quasar_form_number_pagination == 1){ 
                        echo '<div class="pagination-number-history active-pagination" data-page="'.esc_html( $quasar_form_number_pagination ).'">'.esc_html( $quasar_form_number_pagination ).'</div>'; 
                    }
                    else  { 
                        echo '<div class="pagination-number-history" data-page="'.esc_html( $quasar_form_number_pagination ).'">'.esc_html( $quasar_form_number_pagination ).'</div>'; 
                    }
                    $quasar_form_pagination_count = $quasar_form_pagination_count - 10;
                }
            }
            echo '</div>';
            ?>
        </div> 
    </div> 
    
    
    <div class="swap-paypal-message">
        <div class="box-history-message">
            <div class="heading-histoty"><?php esc_html_e('Last 30 payments','quasar-form'); ?></div>
            <?php
            global $wpdb  ;
            $quasar_form_array_form = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_history where payments='paymant' " , ARRAY_A  ); 
            $quasar_form_array_form = array_reverse($quasar_form_array_form);
            $quasar_form_number = 0;
            foreach($quasar_form_array_form as $quasar_form_row){
                //only payman
                    //attribute pagination
                    $quasar_form_number++;
                    $quasar_form_pagination_id = ($quasar_form_number / 10);
                    if (stristr($quasar_form_pagination_id, '.')!=FALSE)  {
                        $quasar_form_pagination_id = explode('.' , $quasar_form_pagination_id); 
                        $quasar_form_paginationprior = $quasar_form_pagination_id[0]; 
                        $quasar_form_paginationprior++;
                    } 
                    else { 
                        $quasar_form_paginationprior = $quasar_form_pagination_id; 
                    }
                    if ($quasar_form_paginationprior != 1){
                        echo '<div class="swap-message-element" style="display:none" data-pagination="'.esc_attr( $quasar_form_paginationprior ).'" data-id="'.esc_attr( $quasar_form_row['id'] ).'">'; 
                    }
                    else { 
                        echo '<div class="swap-message-element" data-pagination="'.esc_attr( $quasar_form_paginationprior) .'" data-id="'.esc_attr( $quasar_form_row['id'] ).'">';
                    }
                    
                    $quasar_form_row['message'] = str_replace( 'RTQasB', '\\', $quasar_form_row['message'] );
                    
                    if ( json_decode($quasar_form_row['message']) != null ){ 
	                   $quasar_form_row['message'] = json_decode( $quasar_form_row['message'], true );
                    }
                    
                    if ( $quasar_form_row['message']['validation'] ==false ){ $validation = '<p><b>'.esc_html__("Failed to verify the authenticity of the payment, be sure to compare the data from the form and from your PayPal.",'quasar-form') .'</b></p>';}
                    else { $validation = ''; } 
                    
                    echo '
                    <div class="message-date element-history">'.esc_html( $quasar_form_row['data'] ).'</div> 
                      <div class="name-subject element-history">'.esc_html( $quasar_form_row['heading'] ).'</div>
                      <div class="short-message-pay element-history">'.esc_html__('Fee','quasar-form') .': '. wp_specialchars_decode( $quasar_form_row['message']['summa'] ).' '. wp_specialchars_decode( $quasar_form_row['message']['currency'] ).'</div>  
                      <div class="spoiler-pay-text"><i class="fa fa-chevron-downq"></i></div>
                      <div class="remove-message-block"><i class="fa fa-timesq"></i></div>
                      <div class="message-history element-history payment-text-style-q">
                      <p><span>'.esc_html__('Payment status','quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['payment_status'] ).'</p>
                      <p><span>'.esc_html__('Fee','quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['summa'] ).' '.wp_specialchars_decode( $quasar_form_row['message']['currency'] ).'</p>
                      <p><span>'.esc_html__("Item name",'quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['item_name'] ).'</p>
                      <p><span>'.esc_html__("Quantity item",'quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['quantity'] ).'</p>
                      <p><span>'.esc_html__('Payment date','quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['payment_date'] ).'</p>
                      <p><span>'.esc_html__("Payer mail",'quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['business'] ).'</p>
                      <p><span>'.esc_html__("Payer country",'quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['address_country'] ).'</p>
                      <p><span>'.esc_html__("Payer name",'quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['first_name'] ). ' ' .wp_specialchars_decode( $quasar_form_row['message']['last_name'] ).'</p>
                      <p><span>'.esc_html__("Payer country",'quasar-form') .':</span> '. wp_specialchars_decode( $quasar_form_row['message']['address_country'] ).'</p><br>
                      <p><span>'.esc_html__('Page url', 'quasar-form').':</span> '. wp_specialchars_decode( $quasar_form_row['message']['url_page'] ).'</p>
                      '.$validation.'
                      
                      
                      </div> 
                    </div> ';
            }
            echo '<div class="pagination-history-q">';
            //pagination in history
            if ($quasar_form_number > 1){
                $quasar_form_number_pagination = 0;
                $quasar_form_pagination_count = $quasar_form_number;
                while( $quasar_form_pagination_count > 0 ){
                    $quasar_form_number_pagination++;
                    if ($quasar_form_number_pagination == 1){ 
                        echo '<div class="pagination-number-history active-pagination" data-page="'.esc_html( $quasar_form_number_pagination ).'">'.esc_html( $quasar_form_number_pagination ).'</div>'; 
                    }
                    else  { 
                        echo '<div class="pagination-number-history" data-page="'.esc_html( $quasar_form_number_pagination ).'">'.esc_html( $quasar_form_number_pagination ).'</div>'; 
                    }
                    $quasar_form_pagination_count = $quasar_form_pagination_count - 10;
                }
            }
            echo '</div>';
            ?>
        </div> 
    </div> 
    
    
</div>




<div class='swap-admin-panel-q'>
    <div class='swap-form-q'> 
        <div class='swap-top-menu-q'>
            <div class='swap-modalbox-setting none-box-q'>
                <div class='modalbox-setting'> 
                    <div class='close-window-setting'><i class='fa fa-timesq'></i></div>
                    <!-- logic -->
                    <div class='logick-box'>
                        <div class='swap-button-logick'>
                            <div class='logick-go-to-pro-q'><div class='pro-version-q-form'><?php esc_html_e('Available only in Pro version','quasar-form'); ?></div> </div>  
                            <div class='size-logick-panel'> <i class='fa fa-arrows-altq' aria-hidden='true'></i> </div> 
                            <div class='height-logick-panel'><i class='fa fa-arrows-vq' aria-hidden='true'></i></div> 
                              <div class='doc-link-l-q'><a class='link-dok-q' href="<?php esc_html_e('https://quasar-form.com/help/using-conditional-logic/','quasar-form');?>" target='_blank'><?php esc_html_e('Description of the operation of logic with examples','quasar-form'); ?></a></div>
                            
                            <div class="help-logick-t">
                                <p><?php esc_html_e('The possibilities of conditional logic from the Pro version','quasar-form'); ?></p>
                                <p><?php esc_html_e('At the moment the logic supports 16 actions:','quasar-form'); ?></p>
                                <p><?php esc_html_e('1) Show field – shows the field if it has been hidden. Has the opposite effect. If the condition is no longer met, the field is automatically hidden again.' ,'quasar-form'); ?></p>
                                <p><?php esc_html_e('2) Hide field - hides the field. Has the opposite effect. If the condition is no longer met, the field is automatically shown again.' ,'quasar-form'); ?></p>
                                <p><?php esc_html_e('3) Change html in custom text - changes the text or html in the "Custom text / html" field. Works only with this type of fields. Does not have the opposite effect. If the condition is no longer met, the original content of the field is not restored.' ,'quasar-form'); ?></p>
                                <p><?php esc_html_e('4) Set value of the field - sets the value for the field. Does not have the opposite effect. If the condition is no longer met, the original field value is not restored.' ,'quasar-form'); ?></p>

                                <p><?php esc_html_e('5) Recalculate the calculator total - recalculates the value of the "total calculation" field. Works only with this type of field. This logic can be used to apply discounts or to create complex calculators. The [itog] shortcode is the current total of the calculator. You can also use the shortcodes with field IDs as in the calculator formula. If the condition is no longer met, the effect of this action disappears for the calculation. Example of a discount application(20%):' ,'quasar-form'); ?> [itog] - (( [itog] * 20) / 100 )</p>
                                
                                <p><?php esc_html_e('8-9) Make the field required / Make the field not required - make the field required or optional. Required fields cannot be skipped.','quasar-form') ?></p>
                                <p><?php esc_html_e('10-11) Disable sending the field value to mail / Enable sending the field value to mail - allows you to exclude the field and its value from the letter that you receive by email. This option is suitable for quizzes with multiple question branches in order not to fill letters with unnecessary information. ','quasar-form') ?></p>
                                <p><?php esc_html_e('12) Change the value of the variable - Allows you to set the value of the variable from other variables. The value can be a calculation of several variables. Example:','quasar-form') ?></p>
                                <p><?php esc_html_e('13) Change variable value to field value - set the value of the variable as equal to the field value.' ,'quasar-form'); ?></p>
                                <p><?php esc_html_e('14) Hide tab - hides tab. You cannot switch to a hidden tab. Required fields in a hidden tab are ignored.' ,'quasar-form'); ?></p>
                                <p><?php esc_html_e('15) Show tab - shows tab. Such a tab has the status of a regular tab.' ,'quasar-form'); ?></p>
                                <p><?php esc_html_e('16) Switch to tab - switches the form to the tab specified in this action. To switch to a hidden tab, you first need to show it.' ,'quasar-form'); ?></p>
                            </div>
 
                        </div>
                      
                    </div>
                    <!-- setting-->
                    <div class='setting_general-box'>
                        <div class='setting-tab-swap-q'>
                            <div class='setting-tab-q' data-tab-setting='1'><?php esc_html_e('Email settings','quasar-form'); ?></div>
                            <div class='setting-tab-q' data-tab-setting='8'><?php esc_html_e('Text after sending the form','quasar-form'); ?></div>
                            <div class='setting-tab-q' data-tab-setting='2'><?php esc_html_e('Frontend text/localization','quasar-form'); ?></div>
                            <div class='setting-tab-q' data-tab-setting='3'><?php esc_html_e('Import/export form','quasar-form'); ?></div>
                        </div>   
                        <div class='setting-mail-swap swap-tab-setting-q' data-tab-setting='1'>
                            <div class='swap-spoiler-q'>
                                <div class='spoiler-box-q quasart-q'><span class='number-spoiler-d'>1</span><?php esc_html_e('Select a method for sending letters','quasar-form'); ?> </div> 
                                <div class='spoiler-content-q'>
                                
                                    <div class='message-mail-help-method'>
                                        <div><span class='help-message-q wp-mail'>?</span></div>
                                        <div><span class='help-message-q smtp-mail'>?</span></div>
                                    </div>
                                    
                                    <div class='tabs-type-send-mail'> 
                                        <input id='wpmailtype' type='radio' name='type-send-mail'>
                                        <label class='type-send-mail-q' for='wpmailtype'>
                                            <div class='name-method-q'> 
                                                <div class='chechbox-setting-q'></div><?php esc_html_e('WP-mail','quasar-form'); ?>
                                            </div>
                                        </label>            
                                        <input id='mailsmtp' type='radio' name='type-send-mail'>
                                        <label class='type-send-mail-q' for='mailsmtp'>
                                            <div class='name-method-q'> 
                                                <div class='chechbox-setting-q'></div><?php esc_html_e('SMTP Method','quasar-form'); ?>
                                            </div>
                                        </label>  
                                        <div class='setting-mail-tab'>
                                            <div class='wp_mail-seting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Sender Name','quasar-form'); ?></span>
                                                <input class='style-element' id='sendername' autocomplete='off' placeholder='<?php esc_attr_e('Sender Name','quasar-form');?>'>
                                            </div>
                                            <div class='wp_mail-seting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Sender Email','quasar-form'); ?><span class='help-message-q mail-sender-help'>?</span></span>
                                                <input class='style-element' id='senderemail' type='text' autocomplete='off' placeholder='<?php esc_attr_e('Sender Email','quasar-form');?>'>
                                            </div>
                                            <div class='stmtp-setting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Sender Name','quasar-form'); ?></span>
                                                <input class='style-element' id='sendernamesmtp' autocomplete='off' placeholder='<?php esc_attr_e('Sender Name','quasar-form');?>'>
                                            </div>
                                            <div class='stmtp-setting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Sender Email','quasar-form'); ?></span>
                                                <input class='style-element' id='sendermailsmtp' autocomplete='off' placeholder='<?php esc_attr_e('Sender Email','quasar-form');?>'>
                                            </div>
                                            <div class='stmtp-setting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Username','quasar-form'); ?> </span>
                                                <input class='style-element' id='usernamesmtp' autocomplete="off" placeholder='<?php esc_attr_e('Username','quasar-form');?>'>
                                            </div>
                                            <div class='stmtp-setting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Password','quasar-form'); ?> </span>
                                                <input class='style-element password-q' id='passwordsmtp' type='password' autocomplete='off' placeholder='<?php esc_attr_e('Password','quasar-form');?>'>
                                            </div>  
                                            <div class='stmtp-setting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'> <?php esc_html_e('SMTP Host','quasar-form'); ?></span>
                                                <input class='style-element' id='hostsmtp' autocomplete='off'  placeholder='<?php esc_attr_e('SMTP Host','quasar-form');?>'>
                                            </div>    
                                            <div class='stmtp-setting element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element flex-basis-two'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Port','quasar-form'); ?></span>
                                                <input class='style-element' id='posrtsmtp' autocomplete='off' placeholder='<?php esc_attr_e('Port','quasar-form');?>'>
                                            </div>                              
                                        </div>
                                    </div> 
                                    
                                    <div class="separato-mail-setting-q"></div>
                                    <div class="swap-box-mail-options">
                                        <div class="swap-mail-q flex-basis-two">
                                            <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Send Email To','quasar-form'); ?> </span>
                                                <span class='help-message-q mail-poluchatel-help'>?</span>
                                                <input id="Emailsq" type='text' class='style-element' placeholder='<?php esc_attr_e('mail1@example.com','quasar-form');?>' autocomplete='off'>
                                            </div>
                                        </div>  
                                        <div class="swap-name-mail-q flex-basis-two">
                                            <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                                <span class='heading-field-q heading-setting-field'><?php esc_html_e('Email Subject','quasar-form'); ?></span>
                                                <input id ="emailNameq" name="emailNameq" class='style-element' placeholder='<?php esc_attr_e('Email subject from this form','quasar-form');?>' autocomplete='off' value='[Form Name]- <?php esc_html_e('A new message','quasar-form'); ?>'>
                                            </div>
                                        </div> 
                                    </div>  
                                    <div class='message-error-mail-setting'></div>
                                </div>
                            </div> 
                            
                            <div class='swap-spoiler-q'>
                                <div class="spoiler-box-q"><span class='number-spoiler-d'>2</span><?php esc_html_e('Email notifications','quasar-form'); ?></div> 
                                <div class="spoiler-content-q"> 
      
                                    <div class="swap-setting-textarea-q"> 
                                        <span class='help-message-q mail-text-message-help'>?</span>
                                        <textarea id="ContentFormqMail">
                                            <p><?php esc_html_e('You have received a new form submission','quasar-form'); ?></p> 
                                            <p>[content form]</p> 
                                            <p>[page title]</p> 
                                            <p>[URL]</p> 
                                            <p>[Time]</p> 
                                        </textarea> 
                                    </div>
                                </div>
                            </div>
                            
                            <div class='swap-spoiler-q'>
                                <div class="spoiler-box-q"><span class='number-spoiler-d'>3</span><?php esc_html_e('Spam protection','quasar-form'); ?></div> 
                                <div class="spoiler-content-q"> 
                                    <div class="swap-setting-textarea-q">
                                        <div class='wrap-antispam-setting'> 
                                            <p><?php esc_html_e('Quasar Form plugin already has built-in spam protection. However, if you receive spam from contact forms, you can enable additional protection.','quasar-form'); ?></p>
                                            <p><?php esc_html_e('Principle of operation of additional protection:','quasar-form'); ?></p>
                                            <p><?php esc_html_e('Almost all spam submissions contain links. Such letters will be blocked and will not be sent to your mail. However, you can see these emails in the plugin admin panel in the section last 30 emails marked as spam.','quasar-form'); ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class='swap-spoiler-q'>
                                <div class="spoiler-box-q"><span class='number-spoiler-d'>4</span><?php esc_html_e('Sending email to user','quasar-form'); ?></div> 
                                <div class="spoiler-content-q"> 
                                    <div class="swap-setting-textarea-q">
                                        <div class='wrap-send-user-mail-q'> 
                                            <p><?php esc_html_e('You can activate an email notification for the user who submitted the form. The user will receive a copy of your email.','quasar-form'); ?></p>
                                            <p><?php esc_html_e("The user's email will be taken from the 'email' form field",'quasar-form'); ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class='swap-spoiler-q'>
                                <div class="spoiler-box-q"><span class='number-spoiler-d'>5</span><?php esc_html_e('Auto scrolling inside the form','quasar-form'); ?></div> 
                                <div class="spoiler-content-q"> 
                                    <div class="swap-setting-textarea-q">
                                        <div class='wrap-auto-scroll'> 
                                            <p><?php esc_html_e('If the required fields are not filled in the form or are filled incorrectly, scrolling occurs, which shows the user which fields were filled in incorrectly or not filled out. This only works inside inline forms.','quasar-form'); ?></p>
                                            <p><?php esc_html_e('If you have problems with scrolling disable this option.','quasar-form'); ?></p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class='swap-redirect-setting'>
                                <p> <?php esc_attr_e('Redirection after sending. Leave blank if redirection is not needed','quasar-form'); ?></p>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'> 
                                    <input id ="redirect-after-submit" class='style-element special-field' placeholder='<?php esc_attr_e('http://example.com/thank-you','quasar-form'); ?>' autocomplete='off'>
                                </div>
                            </div>
                        
                        </div>
                        <!-- Text after sending --> 
                        <div class="frontend-text-swap swap-tab-setting-q" data-tab-setting='8'>
                            <p> <?php esc_attr_e('In this section, you set the text that will be shown after the form is submitted.','quasar-form'); ?><span class='help-message-q after-send-mail-help'>?</span></p>
                        
                            <div class='wrap-setting-after-text'></div>
                            <textarea id="after-send-mail-text">
                                <p>[default value]</p> 
                            </textarea> 
                        </div> 
                         <!-- localization --> 
                        <div class="frontend-text-swap swap-tab-setting-q" data-tab-setting='2'>
                            <p><?php esc_html_e('Localization frontend text','quasar-form'); ?></p>
                            <div class='lacalization-box-q'>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="message-received-q" class='style-element' placeholder='<?php esc_attr_e('Your message has been sent','quasar-form'); ?>' autocomplete='off' value='<?php esc_attr_e('Message received','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="message-sent-q" class='style-element' placeholder='<?php esc_attr_e('Message is sent','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Message is sent','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="required-field-q" class='style-element' placeholder='<?php esc_attr_e('Required field','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Required','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="invalid-mail-q" class='style-element' placeholder='<?php esc_attr_e('Invalid email address','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Invalid email','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="alphabets-send-q" class='style-element' placeholder='<?php esc_attr_e('Only alphabets','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Only alphabets','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="numbers-send-q" class='style-element' placeholder='<?php esc_attr_e('Only numbers','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Only numbers','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="captcha-error-q" class='style-element' placeholder='<?php esc_attr_e('Captcha error','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Captcha error','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="uplod-file-1-q" class='style-element' placeholder='<?php esc_attr_e('Upload file','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Upload file','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="uplod-file-2-q" class='style-element' placeholder='<?php esc_attr_e('Add file','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Add file','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="uplod-file-3-q" class='style-element' placeholder='<?php esc_attr_e('file size exceeded','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('File size exceeded','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="uplod-file-4-q" class='style-element' placeholder='<?php esc_attr_e('invalid file extension','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Invalid file extension','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="submit-next" class='style-element' placeholder='<?php esc_attr_e('Next','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Next','quasar-form');?>'>
                                </div>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <input id ="invalid-phone" class='style-element' placeholder='<?php esc_attr_e('Invalid phone','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('Invalid phone','quasar-form');?>'>
                                </div>
                                
                                <!-- addon 1 --> 
                                <?php
                                if ( is_plugin_active('quasar-form-woo-add-on/quasar-form-shop-main.php') || is_plugin_active('quasar-form-woo-add-on-pro/quasar-form-shop-main.php') ) {
                                    echo "<div class='wrap-addon-1-loc'>";
                                }
                                else {
                                    echo "<div class='wrap-addon-1-loc' style='display:none'>"; 
                                }
                                ?>
                                    
                                    <div class='admin-editor-input separator-bottom-panel-q' data-tab-adm='design'><div class='name-addon-loc-q'>Quasar Form add-on for WooCommerce</div><div class='separator-line'></div></div>
                                    
                                    <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                        <input id ="product-1-order" class='style-element' placeholder='<?php esc_attr_e('New order product:','quasar-form');?>' autocomplete='off' value='<?php esc_attr_e('New order product:','quasar-form');?>'>
                                    </div>
                                    <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                        <input id ="quantity-1-order" class='style-element' placeholder='<?php esc_html_e('Quantity:','quasar-form'); ?>' autocomplete='off' value='<?php esc_html_e('Quantity:','quasar-form'); ?>'>
                                    </div>
                                    <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                        <input id ="price-1-order" class='style-element' placeholder='<?php esc_html_e('Total:','quasar-form'); ?>' autocomplete='off' value='<?php esc_html_e('Total:','quasar-form'); ?>'>
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                        </div> 
                        <!-- Import/export form --> 
                        <div class="frontend-text-swap swap-tab-setting-q" data-tab-setting='3'>
                            <div class='copy-export-button'><?php esc_html_e('Select text to export','quasar-form');?> </div>
                            <div class='export-form-swap'> 
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <span class='heading-field-q heading-setting-field'><?php esc_attr_e('Export form','quasar-form');?></span>
                                    <textarea id ="export-form-code" class='style-element' placeholder='<?php esc_attr_e('Your message has been sent','quasar-form'); ?>' autocomplete='off' value='<?php esc_attr_e('Message received','quasar-form'); ?>'></textarea>
                                </div>
                            </div>
                            <div class='export-form-swap'>
                                <div class='element-css-q type-input-element style-qform-1 color-p-10 color-class-1 adm-setting-element'>
                                    <span class='heading-field-q heading-setting-field'><?php esc_attr_e('Import form','quasar-form');?></span>
                                    <div class='error-export-form'><?php esc_attr_e('Incorrect text of export!','quasar-form');?></div>
                                    <textarea id ="import-form-code" class='style-element' placeholder='<?php esc_attr_e('Your message has been sent','quasar-form'); ?>' autocomplete='off' value='<?php esc_attr_e('Message received','quasar-form'); ?>'></textarea>
                                </div>
                                <div class='active-export-button'><?php esc_html_e('Apply import','quasar-form');?> </div>
                            </div>
                            <div class='message-quick-2 show-new-form-q'><?php esc_html_e('To be able to import the form, you need to save and refresh the page.','quasar-form'); ?></div>
                            <div class='message-quick-2'><?php esc_html_e('If you do not copy all the text while importing or exporting, it may lead to errors in the form!','quasar-form'); ?></div>
                        </div> 
                    </div>
                     <!-- design -->
                    <div class="setting_design-box">
                        <div class="setting-tab-swap-q">
                            <div class="setting-tab-q" data-tab-setting='4'><?php esc_html_e('Design form','quasar-form'); ?></div>
                            <div class="setting-tab-q" data-tab-setting='5'><?php esc_html_e('Design popup button','quasar-form'); ?></div>
                        </div>  
                        
                        <div class="design-setting-tab" data-tab-setting='4'>
                            <div class='swap-background-design'> 
                            
                                <div class='swap-box-setting-design padding-css-form'>
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Padding left','quasar-form'); ?> </span>
                                        <input id='padding-left-form' class='admin-filed-style-1' placeholder='padding-left'>
                                    </div> 
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Padding right','quasar-form'); ?> </span>
                                        <input id='padding-right-form' class='admin-filed-style-1' placeholder='padding-right'>
                                    </div> 
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Padding top','quasar-form'); ?> </span>
                                        <input id='padding-top-form' class='admin-filed-style-1' placeholder='padding-top'>
                                    </div> 
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>  
                                        <span><?php esc_html_e('Padding bottom','quasar-form'); ?> </span>
                                        <input id='padding-bottom-form' class='admin-filed-style-1' placeholder='padding-bottom'>
                                    </div> 
                                </div> 
                                <div class='swap-box-setting-design padding-css-form'>
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Custom class','quasar-form'); ?> </span>
                                        <input id='custom-form-class' class='admin-filed-style-1' placeholder='class1 class2...'>
                                    </div> 
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Border radius','quasar-form'); ?></span>
                                        <input id='border-radius-form' class='admin-filed-style-1' placeholder='border-radius'>
                                    </div> 
                                </div> 
                                <div class='swap-box-setting-design'>
                                    <div class='swap-block-setting-desing design-color-picker'>
                                        <span><?php esc_html_e('Border color','quasar-form'); ?> </span>
                                        <div id='border-color-form'></div>
                                    </div>  
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Border width','quasar-form'); ?></span>
                                        <input id='border-width-q' class='admin-filed-style-1 width-170' placeholder='border-width'>
                                    </div> 
                                </div> 
                                <div class='swap-box-setting-design'>
                                    <div class='swap-block-setting-desing design-color-picker'>
                                        <span><?php esc_html_e('Background color','quasar-form'); ?></span>
                                        <div id='background-design'></div>
                                    </div>  
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1 width-170'>
                                        <span><?php esc_html_e('Custom background image','quasar-form'); ?></span>
                                        <input id='backgroun-image-q' class='admin-filed-style-1 special-field' placeholder='img url'>
                                    </div> 
                                </div>    
                                <div class='swap-box-setting-design checkbox-design-q'>
                                </div> 
                            </div>
                        </div>
                        
                        <div class='design-setting-tab' data-tab-setting='5'>
                            <div class='swap-block-setting-desing width-100-q'>
                                <div class='box-button-design-popup'> 
                                    <div class='button-design-popup color-hover-7 color2-hover-9' data-hover-background='color-hover-7' data-hover-color='color2-hover-9'><?php esc_html_e('Text in the button','quasar-form'); ?> </div>
                                </div> 
                               
                            </div> 
                            
                            <div class='swap-box-setting-design padding-css-form'>
                                <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                    <span><?php esc_html_e('Padding left','quasar-form'); ?> </span>
                                    <input id='padding-left-popup' class='admin-filed-style-1' placeholder='padding-left'>
                                </div> 
                                <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                    <span><?php esc_html_e('Padding right','quasar-form'); ?> </span>
                                    <input id='padding-right-popup' class='admin-filed-style-1' placeholder='padding-right'>
                                </div> 
                                <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                    <span><?php esc_html_e('Padding top','quasar-form'); ?> </span>
                                    <input id='padding-top-popup' class='admin-filed-style-1' placeholder='padding-top'>
                                </div> 
                                <div class='swap-block-setting-desing align-flex-q style-qform-1'>  
                                    <span><?php esc_html_e('Padding bottom','quasar-form'); ?> </span>
                                    <input id='padding-bottom-popup' class='admin-filed-style-1' placeholder='padding-bottom'>
                                </div>
                            </div> 
                            
                            <div class='swap-background-design'> 
                                <div class='swap-box-setting-design padding-css-form'>
                                
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Custom class','quasar-form'); ?> </span>
                                        <input id='custom-form-popup' class='admin-filed-style-1' placeholder='class1 class2...'>
                                    </div> 
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Border radius','quasar-form'); ?></span>
                                        <input id='border-radius-popup' class='admin-filed-style-1' placeholder='border-radius'>
                                    </div> 
                                </div> 
                            </div>
                        
                            <div class='swap-background-design'> 
                                <div class='swap-box-setting-design'>
                                    <div class='swap-block-setting-desing design-color-picker'>
                                        <span><?php esc_html_e('Border color','quasar-form'); ?> </span>
                                        <div id='border-color-popup'></div>
                                    </div>  
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Border width','quasar-form'); ?></span>
                                        <input id='border-width-popup' class='admin-filed-style-1 width-170' placeholder='border-width'>
                                    </div>     
                                </div> 
                                <div class='swap-box-setting-design'>
                                    <div class='swap-block-setting-desing design-color-picker'>
                                        <span><?php esc_html_e('Background color','quasar-form'); ?></span>
                                        <div id='background-design-popup'></div>
                                    </div>  
                                    
                                    <div class='swap-block-setting-desing width-170'>
                                        <span><?php esc_html_e('Hover: background, color','quasar-form'); ?></span>
                                        
                                        <div class='admin-editor-input custom-calor-swap custom-calor-swap-setting'>
                                            <div class='custom-color-button'>
                                                <div id='customcolor5' class='color-informer'></div>
                                                <div class='text-colorbutton'><?php esc_html_e('Color','quasar-form'); ?></div> 
                                            </div>
                                            <div class='custom-color-button'>
                                                <div id='customcolor6' class='color-informer'></div>
                                                <div class='text-colorbutton'><?php esc_html_e('Color','quasar-form'); ?></div> 
                                            </div>
                                            
                                        </div>
                                        
                                    </div> 
                                </div>  
                            
                                <div class='swap-box-setting-design'>
                                    <div class='swap-block-setting-desing design-color-picker'>
                                        <span><?php esc_html_e('Font color','quasar-form'); ?></span>
                                        <div id='font-color-design-popup'></div>
                                    </div> 
                                    <div class='swap-block-setting-desing align-flex-q style-qform-1'>
                                        <span><?php esc_html_e('Font size','quasar-form'); ?></span>
                                        <input id='font-size-popup' class='admin-filed-style-1 width-170' placeholder='font-size'>
                                    </div> 
                                </div>  
                                
                            </div>
                        </div>
                    </div>
                    <!-- quick-quasart -->
                    <div class='quick-start-q'>
                         <div class="setting-tab-swap-q">
                            <div class="setting-tab-q" data-tab-setting='6'><?php esc_html_e('Simple forms','quasar-form'); ?></div>
                            <div class="setting-tab-q" data-tab-setting='7'><?php esc_html_e('Calculator example','quasar-form'); ?> </div>
                        </div>  
                        <div class="quick-start-tab" data-tab-setting='6'>
                            <div class='message-quick'><?php esc_html_e('Click on the desired template','quasar-form'); ?></div>
                            <!-- demo-1 -->
                            <div class='swap-demo'>
                                <div class='demo-element' data-demo='1'>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Name','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_attr_e('Your full name','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Phone','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_attr_e('Your phone number','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Email','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_attr_e('A valid email','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'><i class='fa fa-envelope-oq'></i></div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Comments','quasar-form'); ?></span>
                                        <textarea class='style-element' placeholder='<?php esc_attr_e('You comments','quasar-form'); ?>'></textarea>
                                    </div>
                                    <div class='field-demo-q type-privacy-element element-css-q requed-field-q'>
                                        <span class='heading-field-q'></span> 
                                        <div class='swap-checkbox-q'>
                                            <input type='checkbox' id='demo-1'> 
                                            <label for='demo-1'>
                                                <div class='checkbox-qform'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><p><?php esc_html_e('I agree with the privacy policy','quasar-form'); ?></p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-5'><?php esc_html_e('Submit','quasar-form'); ?></span>
                                    </div>
                                </div> 
                            </div>  
                            <!-- demo-2 -->
                            <div class='swap-demo'>
                                <div class='demo-element demo-form-2' data-demo='2'>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-1 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Name','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-1 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Phone','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-1 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Email','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'><i class='fa fa-envelope-oq'></i> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-1 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Comments','quasar-form'); ?></span>
                                        <textarea class='style-element'></textarea>
                                    </div>
                                    <div class='field-demo-q type-privacy-element element-css-q requed-field-q style-t-qform-2'>
                                        <span class='heading-field-q'></span> 
                                        <div class='swap-checkbox-q'>
                                            <input type='checkbox' id='demo-2'> 
                                            <label for='demo-2'>
                                                <div class='checkbox-qform demo-check-q'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><p><?php esc_html_e('I agree with the privacy policy','quasar-form'); ?></p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-7 color2-hover-9 demo-submit-style2'><?php esc_html_e('Submit','quasar-form'); ?></span>
                                    </div>
                                </div> 
                            </div> 
                            <!-- demo-3 -->
                            <div class='swap-demo demo-form-3'>
                                <div class='demo-element' data-demo='3'>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-9 color-class-9'>
                                        <span class='heading-field-q'><?php esc_html_e('Name','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-9 color-class-9'>
                                        <span class='heading-field-q'><?php esc_html_e('Phone','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-9 color-class-9'>
                                        <span class='heading-field-q'><?php esc_html_e('Email','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q'><i class='fa fa-envelope-oq'></i></div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-1 color-class-9'>
                                        <span class='heading-field-q'><?php esc_html_e('Comments','quasar-form'); ?></span>
                                        <textarea class='style-element' ></textarea>
                                    </div>
                                    <div class='field-demo-q type-privacy-element element-css-q requed-field-q'>
                                        <span class='heading-field-q'></span> 
                                        <div class='swap-checkbox-q'>
                                            <input type='checkbox' id='demo-3'> 
                                            <label for='demo-3'>
                                                <div class='checkbox-qform demo-check-q'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><p><?php esc_html_e('I agree with the privacy policy','quasar-form'); ?></p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-5'><?php esc_html_e('Submit','quasar-form'); ?> </span>
                                    </div>
                                </div> 
                            </div>  
                            <!-- demo-4 -->
                            <div class='swap-demo'>
                                <div class='demo-element demo-form-4' data-demo='4'>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-5'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_attr_e('Name','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-5'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_attr_e('Phone','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-5'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_attr_e('Email','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'><i class='fa fa-envelope-oq'></i></div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-5'>
                                        <textarea class='style-element' placeholder='<?php esc_attr_e('You comments','quasar-form'); ?>'></textarea>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-5'><?php esc_html_e('Submit','quasar-form'); ?> </span>
                                    </div>
                                </div> 
                            </div>  
                            <!-- demo-5 -->
                           <div class='swap-demo'>
                                <div class='demo-element demo-form-5' data-demo='5'>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Name','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Phone','quasar-form'); ?></span>
                                         <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q'></div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Email','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element'autocomplete='off'>
                                            <div class='fa-icons-q'><i class='fa fa-envelope-oq'></i></div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-7'>
                                        <span class='heading-field-q'><?php esc_html_e('Comments','quasar-form'); ?></span>
                                        <textarea class='style-element'></textarea>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-7'><?php esc_html_e('Submit','quasar-form'); ?></span>
                                    </div>
                                </div> 
                            </div> 
                            <!-- demo-6 -->
                            <div class='swap-demo'>
                                <div class='demo-element demo-form-6' data-demo='6'>
                                    <div class="swap-heading-demo-form">
                                        <div class="heading-demo-form"><?php esc_html_e('Heading','quasar-form'); ?></div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-2'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_html_e('Name','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-2'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_html_e('Phone','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-2'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_html_e('Email','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'><i class='fa fa-envelope-oq'></i></div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-2'>
                                        <textarea class='style-element' placeholder='<?php esc_html_e('You comments','quasar-form'); ?>'></textarea>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-2'><?php esc_html_e('Submit','quasar-form'); ?></span>
                                    </div>
                                </div> 
                            </div> 
                            <!-- demo-7 -->
                            <div class='swap-demo'>
                                <div class='demo-element demo-form-7' data-demo='7'>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-3'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_html_e('Name','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-3'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_html_e('Phone','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-3'>
                                        <div class='input-swap'>
                                            <input class='style-element' placeholder='<?php esc_html_e('Email','quasar-form'); ?>' autocomplete='off'>
                                            <div class='fa-icons-q'><i class='fa fa-envelope-oq'></i></div>
                                         </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-3'>
                                        <textarea class='style-element' placeholder='<?php esc_html_e('You comments','quasar-form'); ?>'></textarea>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-3'><?php esc_html_e('Submit','quasar-form'); ?> </span>
                                    </div>
                                </div> 
                            </div> 
                             <!-- demo-8 -->
                            <div class='swap-demo demo-form-8'>
                                <div class='demo-element' data-demo='8'>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-8 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Name','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-8 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Phone','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-8 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Email','quasar-form'); ?></span>
                                        <div class='input-swap'>
                                            <input class='style-element' autocomplete='off'>
                                            <div class='fa-icons-q' data-num='23'><i class='fa fa-envelope-oq'></i> </div>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-textarea-element style-qform-1 color-class-8 style-qform-2'>
                                        <span class='heading-field-q' data-font='14px'><?php esc_html_e('Comments','quasar-form'); ?></span>
                                        <textarea class='style-element'></textarea>
                                    </div>
                                    <div class='field-demo-q type-privacy-element element-css-q requed-field-q style-t-qform-2'>
                                        <span class='heading-field-q'></span> 
                                        <div class='swap-checkbox-q'>
                                            <input type='checkbox' id='demo-8'> 
                                            <label for='demo-8'>
                                                <div class='checkbox-qform demo-check-q'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><p><?php esc_html_e('I agree with the privacy policy','quasar-form'); ?></p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-submit-element align-center-q'>
                                        <span class='submit-button-q style-element color-hover-13 color2-hover-13 demo-submit-style2'><?php esc_html_e('Submit','quasar-form'); ?></span>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                        <!-- demo calculation -->
                        <div class="quick-start-tab" data-tab-setting='7'>
                            
                            <div class='swap-calculation-q'>
                                <div class='message-quick-2'><?php esc_html_e('! Calculator works only in the frontend part of the site','quasar-form'); ?></div>
                                <div class='message-quick'><?php esc_html_e('The value of all fields is used to calculate','quasar-form'); ?></div>
                            </div>
                             <!-- calculation 1  -->
                            <div class="swap-demo demo-element" data-demo='1c'>
                                <!-- input -->
                                <div class='field-demo-q type-input-element style-qform-1 color-p-10 color-class-7'>
                                    <span class='heading-field-q'><?php esc_html_e('Number of items','quasar-form'); ?></span>
                                    <div class='input-swap'>
                                        <input class='style-element' autocomplete='off'>
                                        <div class='fa-icons-q' data-num='23'> </div>
                                    </div>
                                </div>
                                <!-- checkbox  -->
                                <div class='swap-demo-checkbox-q'>
                                    <div class='field-demo-q type-checkbox-element element-css-q qrstandart'>
                                        <span class='heading-field-q'><?php esc_html_e('Select item','quasar-form'); ?></span> 
                                        <div class='swap-checkbox-q'>
                                            <input type='checkbox' id='checkbox-demo-1'> 
                                            <label for='checkbox-demo-1'>
                                                <div class='checkbox-qform'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><?php esc_html_e('item-1','quasar-form'); ?></div>
                                            </label>
                                            <input type='checkbox' id='checkbox-demo-2'> 
                                            <label for='checkbox-demo-2'>
                                                <div class='checkbox-qform'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><?php esc_html_e('item-2','quasar-form'); ?></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-checkbox-element element-css-q qrstandart'>
                                        <span class='heading-field-q'><?php esc_html_e('Select item','quasar-form'); ?> </span> 
                                        <div class='swap-checkbox-q'>
                                            <input type='checkbox' id='checkbox-demo-3'> 
                                            <label for='checkbox-demo-3'>
                                                <div class='checkbox-qform'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><?php esc_html_e('item-3','quasar-form'); ?> </div>
                                            </label>
                                            <input type='checkbox' id='checkbox-demo-4'> 
                                            <label for='checkbox-demo-4'>
                                                <div class='checkbox-qform'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><?php esc_html_e('item-4','quasar-form'); ?></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class='field-demo-q type-checkbox-element element-css-q qrstandart radio-checket-q'>
                                        <span class='heading-field-q'><?php esc_html_e('Select item','quasar-form'); ?></span> 
                                        <div class='swap-checkbox-q'>
                                            <input type='radio' name='radio-demo' id='checkbox-demo-5'> 
                                            <label for='checkbox-demo-5'>
                                                <div class='checkbox-qform'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><?php esc_html_e('item-5','quasar-form'); ?></div>
                                            </label>
                                            <input type='radio' name='radio-demo' id='checkbox-demo-6'> 
                                            <label for='checkbox-demo-6'>
                                                <div class='checkbox-qform'>
                                                    <div class='checkbox-fafa'><i class='fa fa-checkq'></i></div>
                                                </div>
                                                <div class='html-text-check-q'><?php esc_html_e('item-6','quasar-form'); ?></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <!-- dropdown -->
                                <div class='field-demo-q type-dropdawn-element element-css-q style-qform-1 color-p-10'> 
                                    <span class='heading-field-q'><?php esc_html_e('Select item','quasar-form'); ?></span>  
                                    <select class='style-element'>
                                        <option type='option'>
                                            <span><?php esc_html_e('Select An Option','quasar-form'); ?></span>
                                        </option> 
                                        <option>
                                            <span><?php esc_html_e('Red','quasar-form'); ?></span>
                                        </option> 
                                        <option>
                                            <span><?php esc_html_e('Blue','quasar-form'); ?></span>
                                        </option> 
                                    </select>
                                </div>
                                <!-- total -->
                                <div class='field-demo-q element-css-q type-itog-element'>
                                    <div><?php esc_html_e('Total: 0 $.','quasar-form'); ?></div>
                                </div>
                            </div>
                            
                            <!-- calculation 2  -->
                            <div class="swap-demo demo-element" data-demo='2c'>
                                <div class='swap-demo-checkbox-q demo-column-70'>
                                     <!-- checkbox img -->
                                    <div class='field-demo-q checkbox-img element-css-q style-t-qform-1 align-left-q'> 
                                        <span class='heading-field-q'><?php esc_html_e('Select item','quasar-form'); ?></span> 
                                        <div class='swap-checkbox-q horizontal-img'> 
                                            <input type='checkbox' id='checkbox-imd-demo1'> 
                                            <label for='checkbox-imd-demo1'>
                                                <div class='swap-img-checket'>
                                                    <div class='img-checket'>
                                                        <img  class='demo-img-q-1' src=''>
                                                    </div>
                                                </div>
                                                <div class='checkbox-img-style2'>
                                                    <div class='checkbox-img-check'>
                                                        <div class='checkbox-img-style2-checked'></div>
                                                    </div> 
                                                    <div class='html-text-check-q'><?php esc_html_e('item-3','quasar-form'); ?></div>
                                                </div>
                                            </label>
                                            <input type='checkbox' id='checkbox-imd-demo2'> 
                                            <label for='checkbox-imd-demo2'> 
                                                <div class='swap-img-checket'>
                                                    <div class='img-checket'>
                                                        <img class='demo-img-q-1' src=''>
                                                    </div>
                                                </div> 
                                                <div class='checkbox-img-style2'>
                                                    <div class='checkbox-img-check'>
                                                        <div class='checkbox-img-style2-checked'></div>
                                                    </div>
                                                    <div class='html-text-check-q'><?php esc_html_e('item-4','quasar-form'); ?></div>
                                                </div>
                                            </label> 
                                        </div>
                                    </div>
                                </div>
                                <!-- range -->
                                <div class='field-demo-q element-css-q type-range-element polzunok-q-defaut qrstandart'>
                                    <span class='heading-field-q'><?php esc_html_e('Heading','quasar-form'); ?></span>
                                    <div class='polzet demo-range'></div> 
                                </div>
                                <!-- total -->
                                <div class='field-demo-q element-css-q type-itog-element'>
                                    <div><?php esc_html_e('Total: 0 $.','quasar-form'); ?></div>
                                </div>
                                <div class='field-demo-q type-submit-element align-center-q'>
                                    <span class='submit-button-q style-element color-hover-5'><?php esc_html_e('Submit','quasar-form'); ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- help -->
                    <div class='help-box-q'>
                        
                         <div class='box-text-help'>
                            <p class='heading-help-text'><?php esc_html_e('1. How to add a form to a page','quasar-form'); ?></p> 
                            <p><?php esc_html_e('1.1. Add this shortcode:','quasar-form'); ?> <span id='short-code-help'></span></p>
                            <p><?php esc_html_e('1.2. If you need a popup form:','quasar-form'); ?> <span id='short-code-popup-help'></span></p>
                            <p><?php esc_html_e('1.3. If you need to insert a form into php code:','quasar-form'); ?> <span id='short-code-php-help'></span></p>
                            <p class='warning-shortcode-hepl'>  <?php esc_html_e('!Saved forms and updated pages so that short codes are generated.', 'quasar-form'); ?></p>
                            <p> <?php esc_html_e('1.4. You can use the button in the panel:','quasar-form'); ?> </p>
                            <div class='swap-spoiler-q'>
                                <div class='spoiler-box-q'><?php esc_html_e('Add to gutenberg','quasar-form'); ?></div> 
                                <div class='spoiler-content-q'> 
                                    <p><img src='<?php echo esc_url($url); ?>/help1.png'></p>
                                </div>
                            </div>
                            <div class='swap-spoiler-q'>
                                <div class="spoiler-box-q"><?php esc_html_e('Add to classic editor','quasar-form'); ?></div> 
                                <div class="spoiler-content-q"> 
                                    <p><img src='<?php echo esc_url($url); ?>/help2.png'></p>
                                </div>
                            </div>
                        </div>  
                        
                        <div class='box-text-help'>
                            <p class='heading-help-text'><?php esc_html_e('2. Custom pop-up button','quasar-form'); ?> </p> 
                            <a href='<?php esc_html_e('https://quasar-form.com/help/custom-popup-button/','quasar-form'); ?>' target='_blank'>
                                <?php esc_html_e('Instruction','quasar-form'); ?>
                            </a>
                        </div>
                        
                        <div class='box-text-help'>
                            <p class='heading-help-text'><?php esc_html_e('3. What to do if notifications are not received in the email?','quasar-form'); ?> </p> 
                            <a href='<?php esc_html_e('https://quasar-form.com/help/sending-emails/basic-setup/','quasar-form'); ?>' target='_blank'>
                                <?php esc_html_e('Instruction','quasar-form'); ?>
                            </a>
                        </div>
                        
                        <div class='box-text-help'>
                            <p class='heading-help-text'><?php esc_html_e('4. How to create a calculator?','quasar-form'); ?> </p> 
                            <a href='<?php esc_html_e('https://quasar-form.com/help/using-calculator-functions/','quasar-form'); ?>' target='_blank'>
                                <?php esc_html_e('Instruction','quasar-form'); ?>
                            </a>
                        </div>
                        
                        <div class='box-text-help'>
                            <p class='heading-help-text'><?php esc_html_e('5. JS Event','quasar-form'); ?> </p> 
                            <a href='<?php esc_html_e('https://quasar-form.com/js-events/','quasar-form'); ?>' target='_blank'>
                                <?php esc_html_e('Instruction','quasar-form'); ?>
                            </a>
                        </div>
                        
                        <p><a href='https://quasar-form.com/help/' target='_blank'> <?php esc_html_e('Read the documentation on the official website','quasar-form'); ?>  </a></p>
                           
                    </div>
                    
                </div>
            </div>
            <div class='logo-plugin-q'>Quasar Form</div>  
            <div id='menu-select-form-q' class='menu-top-q'> <?php esc_html_e('Back to menu','quasar-form'); ?></div> 
            <div class='drop-menu-select' class='menu-top-q'>
                <select id='list-form-q'>
                    <option><?php esc_html_e('Select form','quasar-form'); ?></option>
                    <?php //add list all form
                    global $wpdb  ;
                    $quasar_form_array_form = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_main" , ARRAY_A  ); 
                    foreach($quasar_form_array_form as $quasar_form_row){
                        //name
                        if ( json_decode($quasar_form_row['name']) != null ){ 
                            $quasar_form_row['name'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['name'] );
                            $quasar_form_row['name'] = json_decode($quasar_form_row['name']);
                        }
                        echo '<option>' .esc_html( $quasar_form_row['name'] ). '</option>' ;
                    }
                    ?> 
                </select>
            </div>
            <div id='setting-general-q' class='menu-top-q setting-q'><?php esc_html_e('Setting','quasar-form'); ?></div>
            <div id='setting-design-q' class='menu-top-q setting-q'> <?php esc_html_e('Design','quasar-form'); ?></div>
            <div id='setting-logic-q' class='menu-top-q setting-q' data-window-1='standart' data-window-2='standart'> <?php esc_html_e('Logic','quasar-form'); ?></div>
            <div id='setting-quick-q' class='menu-top-q setting-q'> <?php esc_html_e('Quick start','quasar-form'); ?></div>
            <div id='setting-help-q' class='menu-top-q setting-q'> <?php esc_html_e('Help','quasar-form'); ?></div>
        </div>

        <div class="swap-bilder-form-q">
            <div class="form-short-code-swap-q"> 
                <div class="wrap-short-code-section"> 
                    <select>
                        <option data-val='inline' selected><?php esc_html_e('Inline','quasar-form');?></option>
                        <option data-val='popup'><?php esc_html_e('Popup','quasar-form');?></option>
                    </select>
                    <span class='st-for-select'></span>
                    <input class="form-short-code-q">
                </div>
                <div class="wrap-link-popup-section"> 
                    <div class="link-popup-q"><span><?php esc_html_e('Link to the form:','quasar-form');?></span> <input class="form-link-p-q"> <span class='help-message-q q16'>?</span> </div>
                </div>
            </div>
            <div class="form-name-q"> 
                <div class='swap-name-box'>
                    <div class='error-export-form-3'><?php esc_attr_e('This name is already in use','quasar-form');?></div>
                    <div class='error-export-form-2'><?php esc_attr_e('The form name cannot be empty','quasar-form');?></div>
                    <div class='error-export-form'><?php esc_attr_e('The name can contain up to 20 characters','quasar-form');?></div>
                    <div class='swap-form-name-panel'>
                        <span class='qform-dop-input'><?php esc_html_e('Form name','quasar-form'); ?> </span> 
                        <input id='form-name-value' autocomplete='off'> 
                    </div> 
                </div> 
                <div class='swap-form-size-panel'>
                    <div class="error-width-form"><?php esc_html_e('Error', 'quasar-form'); ?></div>
                    <span class='qform-dop-input'><?php esc_html_e('Width','quasar-form'); ?></span> 
                    <input id='sizeqForm' autocomplete='off'> 
                </div>
                <div class='swap-button-preview'>
                    <div class='button-preview'> 
                        <input id='button-preview' type='checkbox'>
                        <label class='button-preview-check' for='button-preview'> <div class='chechbox-setting-q'></div><span><?php esc_html_e('Preview form','quasar-form'); ?> </span></label>  
                    </div>
                </div>
            </div>
            <div class='swap-admin-modalbox'>
                <div class='swap-tabs-form-q'></div>
                <div id='drag-drop-element' class='admin-form-q container-form-q container-construction-0'></div>
            </div>
            <div class='modalbox-admin-panel'>
                <div class='admin-col-modal admin-modal-box-col-1'></div>
                <div class='admin-col-modal admin-modal-box-col-2'></div> 
                <div class='customfafa'> 
                    <div class='disable-lib-error-q fix-icon-d'><?php esc_html_e('Library disabled','quasar-form');?></div>
                    <input id='cs1' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs1'data-number='1'><i class='fa fa-phoneq'></i></label>   
                    <input id='cs2' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs2'data-number='2'><i class='fa fa-envelopeq'></i></label>   
                    <input id='cs3' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs3'data-number='3'><i class='fa fa-envelope-oq'></i></label> 
                    <input id='cs4' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs4'data-number='4'><i class='fa fa-userq'></i></label>
                    <input id='cs5' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs5'data-number='5'><i class='fa fa-user-oq'></i></label>
                    <input id='cs6' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs6'data-number='6'><i class='fa fa-calendarq'> </i></label>    
                    <input id='cs7' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs7'data-number='7'><i class='fa fa-calendar-check-oq'></i></label> 
                    <input id='cs8' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs8'data-number='8'><i class='fa fa-clock-oq'></i></label> 
                    <input id='cs9' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs9'data-number='9'><i class='fa fa-address-cardq'></i></label>  
                    <input id='cs10' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs10'data-number='10'><i class='fa fa-address-card-oq'></i></label> 
                    <input id='cs11' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs11'data-number='11'><i class='fa fa-calculatorq'></i></label>   
                    <input id='cs12' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs12'data-number='12'><i class='fa fa-commentq'></i></label>  
                    <input id='cs13' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs13'data-number='13'><i class='fa fa-comment-oq'></i></label>  
                    <input id='cs14' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs14'data-number='14'><i class='fa fa-codeq'></i></label> 
                    <input id='cs15' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs15'data-number='15'><i class='fa fa-downloadq'></i></label> 
                    <input id='cs16' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs16'data-number='16'><i class='fa fa-uploadq'></i></label> 
                    <input id='cs17' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs17'data-number='17'><i class='fa fa-cloud-downloadq'></i></label> 
                    <input id='cs18' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs18'data-number='18'><i class='fa fa-cloud-uploadq'></i></label> 
                    <input id='cs19' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs19'data-number='19'><i class='fa fa-linkq'></i></label>
                    <input id='cs20' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs20'data-number='20'><i class='fa fa-pencilq'></i></label> 
                    <input id='cs21' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs21'data-number='21'><i class='fa fa-file-image-oq'></i></label> 
                    <input id='cs22' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs22'data-number='22'><i class='fa fa-file-oq'></i></label>  
                    <input id='cs23' class='admin-editor-input' name='customcolor' type='radio'> <label for='cs23'class='remove-icons' data-number='23'><?php esc_html_e('none','quasar-form'); ?></label>  
                </div>
            </div>
        </div>
    </div>

    <div class="swap-right-panel-q"> 
        <div class="heading-right-panel"><?php esc_html_e('Add field','quasar-form'); ?> </div>
        <div class="saved-form-quasar"> <span><i class='fa fa-checkq'></i></span> <?php esc_html_e('Form saved','quasar-form'); ?> </div>
        <div class="error-saved-form-quasar"> <span><i class='fa fa-exclamation-triangleq'></i></span> <?php esc_html_e('Error saved','quasar-form'); ?> </div>
        <div id='add-input-q' class='created-field-q'><img src='<?php echo esc_url($url); ?>/1-03.png'><?php esc_html_e('One line input','quasar-form'); ?></div>
        <div id='add-phone-q' class='created-field-q'><img src='<?php echo esc_url($url); ?>/1-22.png'><?php esc_html_e('Phone input','quasar-form'); ?></div>
        <div id='add-email-q' class='created-field-q'><img src='<?php echo esc_url($url); ?>/1-05.png'><?php esc_html_e('Email input','quasar-form'); ?></div>
        <div id='add-textarea-q' class='created-field-q'><img src='<?php echo esc_url($url); ?>/1-02.png'><?php esc_html_e('Textarea','quasar-form'); ?> </div>
        <div id='add-checkbox-q' class='created-field-q'> <img src='<?php echo esc_url($url); ?>/1-06.png'><?php esc_html_e('Checkbox','quasar-form'); ?> </div>
        <div id='add-radio-q' class='created-field-q'> <img src='<?php echo esc_url($url); ?>/1-25.png'><span><?php esc_html_e('Radio button','quasar-form'); ?></span></div>
        <div id='add-checkimage-q' class='created-field-q'>  <div class='pro-version-q-form'><?php esc_html_e('Pro','quasar-form'); ?></div> <?php esc_html_e('Checkbox img','quasar-form'); ?> </div>
        <div id="type-privacy-element" class="created-field-q"><img src='<?php echo esc_url($url); ?>/1-14.png'><?php esc_html_e('Privacy policy','quasar-form'); ?> </div>
        <div id='add-castum-html-q' class='created-field-q'> <img src='<?php echo esc_url($url); ?>/1-09.png'><?php esc_html_e('Custom text/html','quasar-form'); ?> </div>
        <div id='add-upload-element-q' class='created-field-q'> <img src='<?php echo esc_url($url); ?>/1-11.png'> <?php esc_html_e('Upload file','quasar-form'); ?> </div>
        <div id='add-submit-q' class="created-field-q"> <img src='<?php echo esc_url($url); ?>/1-12.png'> <?php esc_html_e('Submit','quasar-form'); ?>  </div>
        <div id='morefield' class="drop-menu-button created-field-q">
            <div class="element-drop-menu"> <?php esc_html_e('More fields','quasar-form'); ?></div>
            <div class="swap-drop-menu-q">
                <div class="drop-menu-q">
                    
                    <div class="wrap-pay-menu">
                        <div id="add-button-q" class="created-field-q drop-menu-li"><div class='pro-version-q-form'><?php esc_html_e('Pro','quasar-form'); ?></div><span><?php esc_html_e('Button','quasar-form'); ?></span></div>
                        <div id="add-img-load-q" class="created-field-q drop-menu-li"> <div class='pro-version-q-form'><?php esc_html_e('Pro','quasar-form'); ?></div><span><?php esc_html_e('Show Image uploaded by user','quasar-form'); ?></span></div>
                        <div id="type-paypal-element" class="created-field-q drop-menu-li"><img src='<?php echo esc_url($url); ?>/2-22.png'><?php esc_html_e('PayPal','quasar-form'); ?></div>
                    </div>
                    
                    <div class="wrap-drop-field-menu">
                        <div id='add-range-q' class='created-field-q'> 
                            <img src='<?php echo esc_url($url); ?>/1-08.png'><?php esc_html_e('Slider','quasar-form');?> 
                            <div class='disable-lib-error-q'><?php esc_html_e('Library disabled','quasar-form');?></div>
                        </div>
                        <div id="add-dropdawn-q" class="created-field-q"> <img src='<?php echo esc_url($url); ?>/1-07.png'><?php esc_html_e('Dropdown','quasar-form'); ?> </div>
                        <div id="add-timepicker-q" class="created-field-q"> <img src='<?php echo esc_url($url); ?>/1-23.png'><?php esc_html_e('Timepicker','quasar-form'); ?> </div>
                        <div id="add-date-q" class="created-field-q"> 
                            <img src='<?php echo esc_url($url); ?>/1-10.png'> <?php esc_html_e('Datepicker','quasar-form'); ?> 
                            <div class='disable-lib-error-q'><?php esc_html_e('Library disabled','quasar-form');?></div>
                        </div>
                        <div id="add-quantity-q" class="created-field-q">  <div class='pro-version-q-form'><?php esc_html_e('Pro','quasar-form'); ?></div><?php esc_html_e('Quantity','quasar-form'); ?> </div>
                        <div id="add-progress-quiz-q" class="created-field-q"> <div class='pro-version-q-form'><?php esc_html_e('Pro','quasar-form'); ?></div> <?php esc_html_e('Progress of quiz','quasar-form'); ?> </div>
                        <div id="add-tooltip-q" class="created-field-q"> <div class='pro-version-q-form'><?php esc_html_e('Pro','quasar-form'); ?></div> <?php esc_html_e('Tooltip','quasar-form'); ?> </div>
                        <div id="type-captcha-element" class="created-field-q drop-menu-li"><img src='<?php echo esc_url($url); ?>/1-13.png'><?php esc_html_e('Captcha','quasar-form'); ?></div>
                        <div id="type-itog-element" class="created-field-q">
                            <img src='<?php echo esc_url($url); ?>/1-15.png'><?php esc_html_e('Total calculation','quasar-form'); ?>
                            <div class='disable-lib-error-q'><?php esc_html_e('Library disabled','quasar-form');?></div>
                        </div>
                    </div>
                    
                </div>   
            </div>
        </div>
        <div class="heading-category-q"> <?php esc_html_e('Other','quasar-form'); ?> </div>
        <div id="construction-element-q" class="created-field-q"><?php esc_html_e('Add constructor','quasar-form'); ?> </div>
        <div id="add-tab-q" class="created-field-q" data-tab-1='0'> <div class='pro-version-q-form'><?php esc_html_e('Pro','quasar-form'); ?> </div><?php esc_html_e('Add tab','quasar-form'); ?> </div>
        <div class="save-quasar-form-button" id="save-form-q"> <?php esc_html_e('Save form','quasar-form'); ?> </div>
        <form id="bdform">
            <input class="none-element" id="inbd" name="inbd">
            <input class="none-element" id="name-field-bd" name="name-field-bd" data-name="">
            <input class="none-element" id="setting-field-bd" name="setting-field-bd">
            <input class="none-element" id="tabs-field-bd" name="tabs-field-bd">
            <input class="none-element" id="logic-field-bd" name="logic-field-bd">
        </form>
        <div class="none-element id-form-admin"></div>
        <div class="none-element id-form-admin-tex-q"></div>
        <div class="none-element id-form-nuber-field"></div>
        <div class="none-element class-this-form-q"></div>
        <div class="none-element css-copy-field-style-tex" data-field='not'></div>
        <div class="none-element help-text-q">
            <div class="help-chekcbox-t">
                <p><?php esc_html_e('1) Each new line creates a checkbox.','quasar-form'); ?></p>
                <p><?php esc_html_e('2) It is possible to use HTML, styled and classes on each line (example: <span style="color: #000">Red </span>). If this checkbox is used in logic, do not activate this feature.','quasar-form'); ?></p>
                <p><?php esc_html_e('3) If you want to use checkboxes for the calculator, set the sum of each checkbox as follows. Example:' ,'quasar-form'); ?>
                    <br><?php esc_html_e('100==Red' ,'quasar-form'); ?>
                    <br><?php esc_html_e('300==Blue' ,'quasar-form'); ?>
                </p>
            </div>
            <div class="help-none-field-t">
                <p><?php esc_html_e('The field will be hidden on page load. Why is this needed? For dynamic forms, you can use logic to show or hide fields.','quasar-form'); ?></p>
            </div>
            <div class="help-select-t">
                <p><?php esc_html_e('1) A string that starts with "! =" is considered a placeholder and is selected by default. Until another value is selected, the field is considered blank.','quasar-form'); ?></p>
                <p><?php esc_html_e('2) If you want to use this field for the calculator, set the sum of each option as follows. Example:' ,'quasar-form'); ?>
                    <br><?php esc_html_e('100==Red' ,'quasar-form'); ?>
                    <br><?php esc_html_e('300==Blue' ,'quasar-form'); ?>
                </p>
            </div>
            <div class="help-total-t">
                <p><?php esc_html_e('1) Here you enter the formula for your calculator. To make a field participate in calculation, you need to specify its id in curly braces.','quasar-form'); ?></p>
                <p><?php esc_html_e('2) Mathematical operators available: + - * / ( )','quasar-form'); ?></p>
                <p><?php esc_html_e('3) Decimal values are written with a dot, for example: 10.45','quasar-form'); ?></p>
                <p><?php esc_html_e('4) The screenshot shows the location of the id of each field:','quasar-form'); ?> </p> <img src='<?php echo esc_url($url); ?>/help3.jpg'>
                <p><?php esc_html_e('5) In the formula, you can use the ID of other total fields','quasar-form'); ?></p>
            </div>
            <div class="field-edit-text-q">
                <div id='text-shedow-hide-q'> <?php esc_html_e('Disable shadow', 'quasar-form'); ?></div>
                
                <div id='text-img-fon-full-q'> <?php esc_html_e('Stretch background image', 'quasar-form'); ?></div>
                <div id='text-setting-q'> <?php esc_html_e('Setting', 'quasar-form'); ?></div>
                <div id='text-design-q'> <?php esc_html_e('Design', 'quasar-form'); ?></div>
                
                <div id='text-heading-q'><?php esc_html_e('Heading', 'quasar-form'); ?></div>
                <div id='text-headingsize-q'><?php esc_html_e('Heading size', 'quasar-form'); ?></div>
                <div id='text-headingcolor-q'><?php esc_html_e('Heading color', 'quasar-form'); ?></div>
                <div id='text-headingmargin-q'><?php esc_html_e('Heading indent', 'quasar-form'); ?></div>
                <div id='text-headingweight-q'><?php esc_html_e('Heading weight', 'quasar-form'); ?></div>
                <div id='text-fieldwidth-q'><?php esc_html_e('Field width', 'quasar-form'); ?></div> 
                <div id='text-fieldstyle-q'><?php esc_html_e('Field style', 'quasar-form'); ?></div>
                <div id='text-placeholder-q'><?php esc_html_e('Placeholder', 'quasar-form'); ?></div>
                <div id='text-fontsize-q'> <?php esc_html_e('Font size', 'quasar-form'); ?></div>
                <div id='text-placeholdercolor-q'><?php esc_html_e('Placeholder color', 'quasar-form'); ?></div>
                <div id='text-backgroundcolor-q'><?php esc_html_e('Background color', 'quasar-form'); ?></div>
                <div id='text-backgroundcolor1-q'><?php esc_html_e('Background color 1', 'quasar-form'); ?></div>
                <div id='text-backgroundcolor2-q'><?php esc_html_e('Background color 2', 'quasar-form'); ?></div>
                <div id='text-color1-q'><?php esc_html_e('Color 1', 'quasar-form'); ?></div>
                <div id='text-icons-q'><?php esc_html_e('icons', 'quasar-form'); ?></div>
                <div id='text-borderfocuscolor-q'><?php esc_html_e('Border color while in focus', 'quasar-form'); ?></div>
                <div id='text-borderradius-q'><?php esc_html_e('Border radius', 'quasar-form'); ?></div>
                <div id='text-borderwidth-q'><?php esc_html_e('Border width', 'quasar-form'); ?></div>
                <div id='text-bordercolor-q'><?php esc_html_e('Border color', 'quasar-form'); ?></div>
                <div id='text-height-q'><?php esc_html_e('Height', 'quasar-form'); ?></div>
                <div id='text-moresetting-q'><?php esc_html_e('More setting', 'quasar-form'); ?></div>
                <div id='text-validation-q'><?php esc_html_e('Validation', 'quasar-form'); ?></div>
                <div id='text-padding1-q'><?php esc_html_e('Padding: left right top bottom', 'quasar-form'); ?></div>
                <div id='text-iconcolor-q'><?php esc_html_e('Icon color', 'quasar-form'); ?></div>
                <div id='text-required-q'><?php esc_html_e('Required', 'quasar-form'); ?></div>
                <div id='text-defaultnone-q'><?php esc_html_e('Hide field on page', 'quasar-form'); ?></div>
                <div id='text-customclass-q'><?php esc_html_e('Custom CSS class for container', 'quasar-form'); ?></div>
                <div id='text-customclass-2-q'><?php esc_html_e('Custom CSS class for input', 'quasar-form'); ?></div>
                <div id='text-customclass-3-q'><?php esc_html_e('Custom CSS class for textarea', 'quasar-form'); ?></div>
                <div id='text-customclass-4-q'><?php esc_html_e('Custom CSS class for button', 'quasar-form'); ?></div>
                <div id='text-duplicate-q'><?php esc_html_e('duplicate', 'quasar-form'); ?></div>
                <div id='text-minvalue-q'><?php esc_html_e('Min value', 'quasar-form'); ?></div>
                <div id='text-maxvalue-q'><?php esc_html_e('Max value', 'quasar-form'); ?></div>
                <div id='text-step-q'><?php esc_html_e('Step', 'quasar-form'); ?></div>
                <div id='text-quasartvalue-q'><?php esc_html_e('default value', 'quasar-form'); ?></div>
                <div id='text-rangecolor1-q'><?php esc_html_e('Range color 1', 'quasar-form'); ?></div>
                <div id='text-rangecolor2-q'><?php esc_html_e('Range color 2', 'quasar-form'); ?></div>
                <div id='text-togglebackground-q'><?php esc_html_e('Toggle color', 'quasar-form'); ?></div>
                <div id='text-numbercolor-q'><?php esc_html_e('Number color', 'quasar-form'); ?></div>
                <div id='text-tabstyle-q'><?php esc_html_e('Tab style', 'quasar-form'); ?></div>
                <div id='text-scale-q'><?php esc_html_e('Scale', 'quasar-form'); ?></div>
                <div id='text-filelimit-q'><?php esc_html_e('File limit', 'quasar-form'); ?></div>
                <div id='text-allowedextensions-q'><?php esc_html_e('Allowed Extensions', 'quasar-form'); ?></div>
                <div id='text-maxsizefile-q'><?php esc_html_e('Max size of 1 file in mb', 'quasar-form'); ?></div>
                <div id='text-buttontext-q'><?php esc_html_e('Button text', 'quasar-form'); ?></div>
                <div id='text-buttonfontsize-q'><?php esc_html_e('Font size', 'quasar-form'); ?></div>
                <div id='text-colortext-q'><?php esc_html_e('Text color', 'quasar-form'); ?></div>
                <div id='text-fieldalign-q'><?php esc_html_e('Field align', 'quasar-form'); ?></div>
                <div id='text-textalign-q'><?php esc_html_e('Text align', 'quasar-form'); ?></div>
                <div id='text-fullwidth-q'><?php esc_html_e('Full width', 'quasar-form'); ?></div>
                <div id='text-backgroundhead-q'><?php esc_html_e('Background head', 'quasar-form'); ?></div>
                <div id='text-headingcolor-q'><?php esc_html_e('Heading color', 'quasar-form'); ?></div>
                <div id='text-optioncolor-q'><?php esc_html_e('Option color', 'quasar-form'); ?></div>
                <div id='text-none-q'><?php esc_html_e('None', 'quasar-form'); ?></div>
                <div id='text-onlyalphabets-q'><?php esc_html_e('Only alphabets', 'quasar-form'); ?></div>
                <div id='text-onlynumbers-q'><?php esc_html_e('Only numbers', 'quasar-form'); ?></div>
                <div id='text-onlynumbers-and-dot-q'><?php esc_html_e('Only numbers and dots for decimal places', 'quasar-form'); ?></div>
                <div id='text-select-q'><?php esc_html_e('Select', 'quasar-form'); ?></div>
                <div id='text-hoveractiv-q'><?php esc_html_e('Hover/active background', 'quasar-form'); ?></div>
                <div id='text-selectcolor-q'><?php esc_html_e('Select color', 'quasar-form'); ?></div>
                <div id='text-hoverbackground-q'><?php esc_html_e('Hover background', 'quasar-form'); ?></div>
                <div id='text-hovercolor-q'><?php esc_html_e('Hover color', 'quasar-form'); ?></div>
                <div id='text-moresetting-q'><?php esc_html_e('More setting', 'quasar-form'); ?></div>
                <div id='text-checkboxstexthtml-q'><?php esc_html_e('Checkboxs text/html', 'quasar-form'); ?></div>
                <div id='text-checkboxIMG-q'><?php esc_html_e('Links to checkbox images', 'quasar-form'); ?></div>  
                <div id='text-checkboxstext-q'><?php esc_html_e('Checkboxs text. Can use html.', 'quasar-form'); ?></div>
                <div id='text-linkstoimages-q'><?php esc_html_e('Links to images inside checkboxes', 'quasar-form'); ?></div>
                <div id='text-padding1-q'><?php esc_html_e('Padding: left right top bottom', 'quasar-form'); ?></div>
                <div id='text-margin1-q'><?php esc_html_e('Margin: top, text, check', 'quasar-form'); ?></div>
                <div id='text-margin2-q'><?php esc_html_e('Margin: text-left, text-top, top, bottom, right, left', 'quasar-form'); ?></div>
                <div id='text-margin3-q'><?php esc_html_e('Margin: top, text, check', 'quasar-form'); ?></div>
                <div id='text-margin4-q'><?php esc_html_e('Margin: left, right, top, bottom', 'quasar-form'); ?></div>
                <div id='text-radiobuttons-q'> <?php esc_html_e('Radio-buttons', 'quasar-form'); ?></div>
                <div id='text-align-q'><?php esc_html_e('Align', 'quasar-form'); ?></div>
                <div id='text-horizontlal-q'><?php esc_html_e('Horizontlal', 'quasar-form'); ?></div>
                <div id='text-vertical-q'><?php esc_html_e('Vertical', 'quasar-form'); ?></div>
                <div id='text-customtext-q'><?php esc_html_e('Custom text', 'quasar-form'); ?></div>
                <div id='text-totaltext-q'><?php esc_html_e('Your formula to calculate.', 'quasar-form'); ?></div>
                <div id='text-totaltext2-q'><?php esc_html_e('Custom text, [itog] - displays the total after calculation.', 'quasar-form'); ?></div>
                <div id='text-totaltextwarning-q'><?php esc_html_e('! incorrect filling of this field can cause errors.', 'quasar-form'); ?></div>
                <div id='text-exampletotal-q'><?php esc_html_e('Example', 'quasar-form'); ?></div>
                <div id='text-optiopns-q'><?php esc_html_e('Options', 'quasar-form'); ?></div>
                <div id='text-checkboxcolor-q'><?php esc_html_e('Checkbox color: border, check', 'quasar-form'); ?></div>
                <div id='text-checkborderwidth-q'><?php esc_html_e('Checkbox size: border, check', 'quasar-form'); ?></div>
                <div id='text-style1-q'><?php esc_html_e('style-1', 'quasar-form'); ?></div>
                <div id='text-style2-q'><?php esc_html_e('style-2', 'quasar-form'); ?></div>
                <div id='text-style3-q'><?php esc_html_e('Pro style-3', 'quasar-form'); ?></div>
                <div id='text-style4-q'><?php esc_html_e('Pro style-4', 'quasar-form'); ?></div>
                <div id='text-style3free-q'><?php esc_html_e('style-3', 'quasar-form'); ?></div>
                <div id='text-remove-q'><?php esc_html_e('Remove', 'quasar-form'); ?></div>
                <div id='text-addfield-q'><?php esc_html_e('Your form', 'quasar-form'); ?></div>
                <div id='text-createdformerror1-q'><?php esc_html_e('The form name cannot be empty', 'quasar-form'); ?></div>
                <div id='text-createdformerror2-q'><?php esc_html_e('This name is already in use', 'quasar-form'); ?></div>
                <div id='text-createdformerror3-q'><?php esc_html_e('The name can contain up to 20 characters', 'quasar-form'); ?></div>
                <div id='text-widthimgbox-q'><?php esc_html_e('Single box width', 'quasar-form'); ?></div>
                <div id='text-textareaplaceholder-q'><?php esc_html_e('More details', 'quasar-form'); ?></div>
                <div id='text-width-q'><?php esc_html_e('Width', 'quasar-form'); ?></div>
                <div id='text-fieldname-q'><?php esc_html_e('Name', 'quasar-form'); ?></div>
                <div id='text-fieldname2-q'><?php esc_html_e('Your full name', 'quasar-form'); ?></div>
                <div id='text-fieldmail-q'><?php esc_html_e('Email', 'quasar-form'); ?></div>
                <div id='text-fieldmail2-q'><?php esc_html_e('A valid email', 'quasar-form'); ?></div>
                <div id='text-mailplaceholder-q'><?php esc_html_e('A valid email', 'quasar-form'); ?></div>
                <div id='text-selectitem-q'><?php esc_html_e('Select item', 'quasar-form'); ?></div>
                <div id='text-red-q'><?php esc_html_e('Red', 'quasar-form'); ?></div>
                <div id='text-blue-q'><?php esc_html_e('Blue', 'quasar-form'); ?></div>
                <div id='text-item-q'><?php esc_html_e('Item', 'quasar-form'); ?></div>
                <div id='text-submit-q'><?php esc_html_e('Submit', 'quasar-form'); ?></div>
                <div id='text-comments-q'><?php esc_html_e('Comments', 'quasar-form'); ?></div>
                <div id='text-texthtml-q'><?php esc_html_e('Custom text/html', 'quasar-form'); ?></div>
                <div id='text-date-q'><?php esc_html_e('Date', 'quasar-form'); ?></div>
                <div id='text-date2-q'><?php esc_html_e('Choose a date', 'quasar-form'); ?></div>
                <div id='text-selectoption-q'><?php esc_html_e('Select An Option', 'quasar-form'); ?></div>
                <div id='text-total-q'><?php esc_html_e('Total', 'quasar-form'); ?></div>
                <div id='text-privacypolicyfield-q'><?php esc_html_e('I agree with the privacy policy', 'quasar-form'); ?></div>
                <div id='text-color-q'><?php esc_html_e('Color', 'quasar-form'); ?></div>
                <div id='text-showfield-q'><?php esc_html_e('Show field', 'quasar-form'); ?></div>
                <div id='text-hidefield-q'><?php esc_html_e('Hide field', 'quasar-form'); ?></div>
                <div id='text-changehtml-q'><?php esc_html_e('Change html in custom text', 'quasar-form'); ?></div>
                <div id='text-action-q'><?php esc_html_e('Select action', 'quasar-form'); ?></div>
                <div id='text-and-q'><?php esc_html_e('And', 'quasar-form'); ?></div>
                <div id='text-or-q'><?php esc_html_e('Or', 'quasar-form'); ?></div>
                <div id='text-trigger-q'><?php esc_html_e('Trigger', 'quasar-form'); ?></div>
                <div id='text-conditions-q'><?php esc_html_e('Conditions', 'quasar-form'); ?></div>
                <div id='text-ravno-q'><?php esc_html_e('is equal to', 'quasar-form'); ?></div>
                <div id='text-neravno-q'><?php esc_html_e('is not equal to', 'quasar-form'); ?></div>
                <div id='text-bolshe-q'><?php esc_html_e('is greater than', 'quasar-form'); ?></div>
                <div id='text-menshe-q'><?php esc_html_e('is less than', 'quasar-form'); ?></div>
                <div id='text-zapolneno-q'><?php esc_html_e('filled', 'quasar-form'); ?></div>
                <div id='text-nezapolneno-q'><?php esc_html_e('not filled', 'quasar-form'); ?></div>
                <div id='text-value-q'><?php esc_html_e('Value', 'quasar-form'); ?></div>
                <div id='text-selectfield-q'><?php esc_html_e('Select a field', 'quasar-form'); ?></div>
                <div id='text-customtextlogic-q'><?php esc_html_e('Custom text', 'quasar-form'); ?></div>
                <div id='text-uploadfil-q'><?php esc_html_e('Upload file', 'quasar-form'); ?></div>
                <div id='text-submit-q'> <?php esc_html_e('Submit', 'quasar-form'); ?></div>
                <div id='text-privacypolicy-q'><?php esc_html_e('Privacy policy', 'quasar-form'); ?></div>
                <div id='text-quantity-q'><?php esc_html_e('Quantity', 'quasar-form'); ?></div>
                <div id='text-captcha-q'><?php esc_html_e('Captcha', 'quasar-form'); ?></div>
                <div id='text-setvalue-q'><?php esc_html_e('Set value of the field', 'quasar-form'); ?></div>
                <div id='text-phone-q'><?php esc_html_e('Phone', 'quasar-form'); ?></div>
                <div id='text-phone2-q'><?php esc_html_e('Your phone number', 'quasar-form'); ?></div>
                <div id='text-quick-start-q'><?php esc_html_e('!All fields created earlier will be overwritten', 'quasar-form'); ?></div>
                <div id='text-step-minute-q'><?php esc_html_e('Step (for minutes)', 'quasar-form'); ?></div>
                
                <div id='text-mask-q'><?php esc_html_e('Phone mask', 'quasar-form'); ?></div>
                <div id='text-mask-eng-q'><?php esc_html_e('0(999) 999-9999', 'quasar-form'); ?></div>
                <div id='text-mask-activ-q'><?php esc_html_e('Use a mask', 'quasar-form'); ?></div>
                <div id='text-checkbox-pro-style'><?php esc_html_e('Styles 3 and 4 are available only in Pro version.', 'quasar-form'); ?></div>
                <div id='text-rounding-q'><?php esc_html_e('Rounding of total', 'quasar-form'); ?></div>
                <div id='text-rounding1-q'><?php esc_html_e('Standard rounding', 'quasar-form'); ?></div>
                <div id='text-rounding2-q'><?php esc_html_e('Round up', 'quasar-form'); ?></div>
                <div id='text-rounding3-q'><?php esc_html_e('Round down', 'quasar-form'); ?></div>
                <div id='text-rounding4-q'><?php esc_html_e('No rounding, two decimal places', 'quasar-form'); ?></div>  
                <div id='text-rounding5-q'><?php esc_html_e('No rounding, one decimal places', 'quasar-form'); ?></div>
                <div id='text-rounding6-q'><?php esc_html_e('No rounding', 'quasar-form'); ?></div>  
                <div id='text-top-q'><?php esc_html_e('Top', 'quasar-form'); ?></div> 
                <div id='text-bottom-q'><?php esc_html_e('Bottom', 'quasar-form'); ?></div>
                <div id='text-scale-position-q'><?php esc_html_e('Scale position', 'quasar-form'); ?></div>
                <div id='text-scale-full-q'><?php esc_html_e('Full scale', 'quasar-form'); ?></div>
                <div id='text-scale-margin-q'><?php esc_html_e('Scale indent', 'quasar-form'); ?></div>
                <div id='text-scale-color-q'><?php esc_html_e('Scale color', 'quasar-form'); ?></div>
                <div id='text-hide-prosh-date-q'><?php esc_html_e('Disable past days', 'quasar-form'); ?></div>
                <div id='text-hide-weekends-date-q'><?php esc_html_e('Turn off weekends', 'quasar-form'); ?></div>
                
                
                <div id='text-mail-error1-q'><?php esc_html_e('Send Email To', 'quasar-form'); ?></div>
                <div id='text-mail-error2-q'><?php esc_html_e('Email Subject', 'quasar-form'); ?></div>
                <div id='text-mail-error3-q'><?php esc_html_e('Sender Name', 'quasar-form'); ?></div>
                <div id='text-mail-error4-q'><?php esc_html_e('Sender Email', 'quasar-form'); ?></div> 
                <div id='text-mail-error5-q'><?php esc_html_e('Username', 'quasar-form'); ?></div>
                <div id='text-mail-error6-q'><?php esc_html_e('Password', 'quasar-form'); ?></div>
                <div id='text-mail-error7-q'><?php esc_html_e('SMTP Host', 'quasar-form'); ?></div>
                <div id='text-mail-error8-q'><?php esc_html_e('Port', 'quasar-form'); ?></div>
                <div id='text-mail-error-message-q'><?php esc_html_e('To receive letters after submitting the form, fill in the fields:', 'quasar-form'); ?></div>
                <div id='text-mail-yes-message-q'><?php esc_html_e('if all the settings fields are filled in correctly, you will receive letters after submitting the form.', 'quasar-form'); ?></div>
                <div id='text-mail-incorrectly1-q'><?php esc_html_e('The "Send Email To" field is filled in incorrectly', 'quasar-form'); ?></div>
                <div id='text-mail-incorrectly2-q'><?php esc_html_e('The "Username" field is filled in incorrectly', 'quasar-form'); ?></div>
                <div id='text-mail-incorrectly3-q'><?php esc_html_e('The "Sender Email" field is filled in incorrectly', 'quasar-form'); ?></div>
                <div id='text-mail-incorrectly4-q'><?php esc_html_e('The "Port" field is filled in incorrectly', 'quasar-form'); ?></div>
                <div id='text-captcha-warning-q'><?php esc_html_e('Please note that all forms created through the Quasar form plugin are already protected from spam. This way you can do without captcha.','quasar-form');?></div>
                
                <div id='text-mail-help1-q'>
                    <p class='help-mail'><?php esc_html_e('Screenshot of working version of WP-mail settings:', 'quasar-form'); ?></p>
                    <p class='help-mail' ><img class='help-mail' src='<?php echo esc_url($url); ?>/<?php esc_html_e('help-mail-1.png', 'quasar-form');?>'></p>
                    <p class='help-mail'><?php esc_html_e("It is better to use the following address as the sender mail: noreply@".$_SERVER['SERVER_NAME']."", 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('If letters do not arrive, check your spam folder.', 'quasar-form'); ?></p>
                </div>
                
                <div id='text-mail-help2-q'>
                    <p class='help-mail'><?php esc_html_e('Screenshot of working version of SMTP-mail settings:', 'quasar-form'); ?></p>
                    <p class='help-mail' ><img class='help-mail' src='<?php echo esc_url($url); ?>/<?php esc_html_e('help-mail-2.png', 'quasar-form');?>'></p>
                    <p class='help-mail'><?php esc_html_e('Depending on the host of your mail, you may need additional steps to set up your mail.', 'quasar-form'); ?></p>
                </div>
               
                <div class="text-mask-q">
                    <p class='help-mail'><?php esc_html_e('"9" - Represents a numeric character (0-9)', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('Examples of number masks:', 'quasar-form'); ?></p>
                    <p class='help-mail'>
                    <?php esc_html_e('England: +44 9999 9999', 'quasar-form'); ?><br>
                    <?php esc_html_e('France: +33 9 99 99 99 99', 'quasar-form'); ?><br>
                    <?php esc_html_e('Russia: +7(999) 999-9999', 'quasar-form'); ?>
                    </p>
                </div> 
                <div id="text-help-disable-design-q">
                    <p class='help-mail'><?php esc_html_e('If your theme already has styles for a simple form and you want to use them, then enable this option.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('This option disables plugin styles for the following fields:', 'quasar-form'); ?></p>
                    <?php esc_html_e('1) Input (One line input, Phone input, Email input, Datepicker)', 'quasar-form'); ?><br>
                    <?php esc_html_e('2) Textarea', 'quasar-form'); ?><br>
                    <?php esc_html_e('3) Select (Dropdown)', 'quasar-form'); ?><br>
                    <?php esc_html_e('4) Submit', 'quasar-form'); ?>
                    </p>
                </div> 
                <div id='text-warning-disable-design-q'> <?php esc_html_e('Styles of some of the fields are disabled in the settings', 'quasar-form'); ?></div>
                <div id='text-disable-design-q'> <?php esc_html_e('Disable field design', 'quasar-form'); ?></div>
                <div id='text-copy-style-q'><?php esc_html_e('Copy', 'quasar-form'); ?></div>
                <div id='text-paste-style-q'><?php esc_html_e('Paste', 'quasar-form'); ?></div>
                
                <div id='text-field-style-cp-q'><?php esc_html_e('Copy field styles', 'quasar-form'); ?></div>
                <div id='text-field-filling-q'><?php esc_html_e('Fill the field with outer content. You just need to indicate the element class from where the content will be taken.', 'quasar-form'); ?></div>
                <div id='text-field-filling-class-q'><?php esc_html_e('Class for finding content', 'quasar-form'); ?></div>
                <div id='text-disabled-q'><?php esc_html_e('Disabled', 'quasar-form'); ?></div>
                <div id='text-filling-1-q'><?php esc_html_e('Fill after page load', 'quasar-form'); ?></div>
                <div id='text-filling-2-q'><?php esc_html_e('Fill when sending the form', 'quasar-form'); ?></div>
                <div id='text-filling-status-q'><?php esc_html_e('Autocomplete status', 'quasar-form'); ?></div>
                <div id='text-defoult-q'><?php esc_html_e('Default', 'quasar-form'); ?></div>
                <div id='text-lang-q'><?php esc_html_e('Lang', 'quasar-form'); ?></div>
                <div id='text-en-q'><?php esc_html_e('English', 'quasar-form'); ?></div>
                <div id='text-ru-q'><?php esc_html_e('Russian', 'quasar-form'); ?></div>
                <div id='text-disabled-lib-q'><?php esc_html_e('Library disabled','quasar-form');?></div>
                <div id='text-defoult-activated-q'><?php esc_html_e('Activated by default', 'quasar-form'); ?></div>
                <div id='text-yes-q'><?php esc_html_e('yes' ,'quasar-form'); ?></div>
                <div id='text-no-q'><?php esc_html_e('not' ,'quasar-form'); ?></div>
                <div id='text-full-size-q'><?php esc_html_e('Full size','quasar-form');?></div>
                <div id='text-disable-tyle-this-q'><?php esc_html_e('Disable design', 'quasar-form'); ?></div>
                <div id='text-text-total-warning-q'><?php esc_html_e('Note the calculator works only in the front-end of the site','quasar-form');?></div>
                <div id='text-error-q'><?php esc_html_e('Error', 'quasar-form'); ?></div>
                <div id='text-total-final-q'><?php esc_html_e('Hide until all fields are filled', 'quasar-form'); ?></div>
                <div id='text-currency-q'><?php esc_html_e('Currency', 'quasar-form'); ?></div>
                <div id='text-price-q'><?php esc_html_e('Price (custom or calculator)', 'quasar-form'); ?></div>
                <div id='text-number-pay-q'><?php esc_html_e('Number (custom or calculator)', 'quasar-form'); ?></div>
                <div id='text-paypal-item-name-q'><?php esc_html_e('Product name (only english and number)', 'quasar-form'); ?></div>
                <div id='text-live-account'><?php esc_html_e('Live Account', 'quasar-form'); ?></div>
                <div id='text-sandbox-account'><?php esc_html_e('Sandbox Account', 'quasar-form'); ?></div>
                <div id='text-sandbox-mode'><?php esc_html_e('Sandbox Mode', 'quasar-form'); ?></div>
                <div id='text-sandbox-mode-on'><?php esc_html_e('On (Sandbox mode)', 'quasar-form'); ?></div>
                <div id='text-sandbox-mode-of'><?php esc_html_e('Off (Live mode)', 'quasar-form'); ?></div>
                <div id='text-number-q'><?php esc_html_e('Number', 'quasar-form'); ?></div>
                <div id='text-select-q'><?php esc_html_e('Select', 'quasar-form'); ?></div>
                <div id='text-paypal-cancel-q'><?php esc_html_e('PayPal cancel URL', 'quasar-form'); ?></div>                
                <div id='text-paypal-success-q'><?php esc_html_e('PayPal success URL', 'quasar-form'); ?></div> 
                <div id='text-setting-no-payment-q'><?php esc_html_e('Settings not related to payment', 'quasar-form'); ?></div>
                <div id='text-link-paypal-q'><?php esc_html_e('https://quasar-form.com/paypal/', 'quasar-form'); ?></div>  
                <div id='text-documentation-q'><?php esc_html_e('Documentation', 'quasar-form'); ?></div>
                <div id='text-no-added-q'><?php esc_html_e('Already added', 'quasar-form'); ?></div>
                <div id='text-timepicker-q'><?php esc_html_e('Timepicker', 'quasar-form'); ?></div>
                <div id='text-datepicker-design-q'><?php esc_html_e('Date picker window design', 'quasar-form'); ?></div>
                <div id='text-step-q'><?php esc_html_e('Step', 'quasar-form'); ?></div>
                <div id='text-defoult-checkbox-q'><?php esc_html_e('Selected by default', 'quasar-form'); ?></div>
                <div id='text-pro-section-q'><?php esc_html_e('In the Pro version there is more customization of style settings and there are responsiveness settings.', 'quasar-form'); ?></div>
                <div id='text-button-q'><?php esc_html_e('Button', 'quasar-form'); ?></div>
                <div id='text-design-separator-q'><?php esc_html_e('Field design', 'quasar-form'); ?></div>
                <div id='text-antispam-q'><?php esc_html_e('Enable additional protection against spam', 'quasar-form'); ?></div>
                <div id='text-warning-submit-q'><?php esc_html_e('Localization of the text "next" in the settings -> Frontend text', 'quasar-form'); ?></div>
                <div id='text-time-separator-q'><?php esc_html_e('Time picker window design', 'quasar-form'); ?></div>
                <div id='text-send-copy-mail-user-q'><?php esc_html_e('Enable sending a copy of the email to the user.', 'quasar-form'); ?></div>
                <div id='text-for-button'><?php esc_html_e('Button text', 'quasar-form'); ?></div>
                <div id='text-after-submit'><?php esc_html_e('Collapse form after submit.', 'quasar-form'); ?></div>
                <div id='text-auto-scroll'><?php esc_html_e('Auto scrolling enabled', 'quasar-form'); ?></div>
               
                <div class="text-copy-paste-style-q">
                    <p class='help-mail'><?php esc_html_e('This option allows you to copy the styles of some fields.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('For example, in order to not re-style similar fields like "Phone input" and" Email input ", you just need to copy the styles of one field and apply them on the other.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('Fields that support the transfer of styles:', 'quasar-form'); ?></p>
                    <?php esc_html_e('1) Input (One line input, Phone input, Email input, Datepicker)', 'quasar-form'); ?><br>
                    <?php esc_html_e('2) Textarea', 'quasar-form'); ?><br>
                    <?php esc_html_e('3) Select (Dropdown)', 'quasar-form'); ?><br>
                    </p>
                </div> 
                
                <div class="text-filling-auto-q">
                    <p class='help-mail'><?php esc_html_e('This option allows you to write data outside of the form into the form.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('What is it for?', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('For example, your form is located in the product card, you can write down the name of the product, price and other parameters in the form fields. You just need to specify the class of the element with the content you want.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('Fields that you fill in this way can be hidden from being displayed in front end, so they will not distract users.' , 'quasar-form'); ?></p>
                    <p class='help-mail'><b><?php esc_html_e('There are two options to write the class', 'quasar-form'); ?></b></p>
                    <p class='help-mail'><?php esc_html_e('1) write one class. In this case, the search will be carried out throughout the whole page.', 'quasar-form'); ?><br>
                    <img class='help-mail' src='<?php echo esc_url($url); ?>/<?php esc_html_e('help3eng', 'quasar-form');?>.jpg'>
                    <p class='help-mail'><?php esc_html_e('2) write two classes separated by a comma. In this case, the search will be conducted from the form or form button along the DOM upwards until the first class is found (similar to the .closest () method). When the first class is found, the search for the element with the second class will continue inside the first class. Content will be obtained from the second class search result. The second method is needed in cases where many elements have the same class.', 'quasar-form'); ?><br>
                    <img class='help-mail' src='<?php echo esc_url($url); ?>/<?php esc_html_e('help4eng', 'quasar-form');?>.jpg'></p>
                    <p class='help-mail red-text-q'><?php esc_html_e('The variant with 2 classes will function correctly only if the option "Fill when submitting the form" is selected in the field "Autocomplete status".', 'quasar-form'); ?></p>
                </div> 
                
                <div class="text-filling-status-help-q">
                    <p class='help-mail'><?php esc_html_e('This option allows you to enable automatic filling of fields with data outside the form.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('"Fill after page load" - this field will be filled after page load with data that is contained in the element which class you have specified.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('"Fill when submitting the form" - When submitting the form, this field will be filled with the data contained in the element which class you have specified. Only this mode supports two classes.', 'quasar-form'); ?></p>
                    <p class='help-mail red-text-q'><?php esc_html_e('Classes must be set in the field "Class for finding content".', 'quasar-form'); ?></p>
                    <img class='help-mail' src='<?php echo esc_url($url); ?>/<?php esc_html_e('help3eng', 'quasar-form');?>.jpg'>
                    <p class='help-mail red-text-q'><?php esc_html_e('If this option is enabled, then validation and mandatory filling of this field are ignored.', 'quasar-form'); ?></p>
                </div>
                
                <div class="text-message-mail-short-code">
                    <p class='help-mail'><?php esc_html_e('This field is the text of your notification that you will receive by email.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('Shortcodes you can use:', 'quasar-form'); ?></p>
                    <?php esc_html_e('1) [content form] - content of all form fields.', 'quasar-form'); ?><br>
                    <?php esc_html_e('2) [URL] - link to the page from which the form was submitted.', 'quasar-form'); ?><br>
                    <?php esc_html_e('3) [page title] - title of the page or post from which the form was submitted.', 'quasar-form'); ?><br>
                    <?php esc_html_e('4) [Time] - form submission time and date.', 'quasar-form'); ?><br>
                    <?php esc_html_e('5) id of any field can be wrapped in brackets to get its content, for example: [Field73q451]', 'quasar-form'); ?>
                    </p>
                </div> 
                
                <div class="text-message-mail-polychatel">
                    <p class='help-mail'><?php esc_html_e('In this field you enter the mail to which letters from the form will come.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('You can enter multiple email addresses separated by commas without spaces.', 'quasar-form'); ?><br>
                    <?php esc_html_e('Example: youmail1@gmail.com,youmail2@gmail.com', 'quasar-form'); ?>
                    </p>
                </div> 
                <div class="text-message-datepicker">
                    <p class='help-mail'><?php esc_html_e('If set by default, the language of the datepicker will be taken from the localization of your site.', 'quasar-form'); ?></p>
                </div> 
                <div class="text-message-mail-after">
                    <p class='help-mail'><?php esc_html_e('The shortcode [default value] displays the standard text when the form is submitted. The localization of this text is in the "Frontend text" settings section.', 'quasar-form'); ?></p>
                    <p class='help-mail'><?php esc_html_e('If you want to display only your text, you can delete the shortcode.', 'quasar-form'); ?></p>
                    <p class='help-mail'><img class='help-mail' src='<?php echo esc_url($url); ?>/<?php esc_html_e('help-after-text-en', 'quasar-form');?>.jpg'></p>
                </div> 
                
                <div class="text-checkbox-disabled-fafa">
                    <p class='help-mail'><?php esc_html_e("! The fa fa icon library is disabled, the first style will not work.", 'quasar-form'); ?></p>
                </div>
                
                <div class="sender-mail-sender-help">
                    <p class='help-mail'><?php esc_html_e("It is better to use the following address as the sender mail: noreply@".$_SERVER['SERVER_NAME']."", 'quasar-form'); ?></p>
                </div>
                
                <div class="text-message-submit-sisable-design">
                    <p class='help-mail'><?php esc_html_e("If your theme already has styles for the submit button and you want to use them, you can disable the plugin styles for the button.", 'quasar-form');?></p>
                </div>
                
                <div class="text-message-total-hide">
                    <p class='help-mail'><?php esc_html_e("The 'total' field will be hidden until all the fields from the formula are filled.", 'quasar-form');?></p>
                </div>
                
                <div class="text-message-paypal-price">
                    <p class='help-mail'><?php esc_html_e("There are 2 options for determining the amount that the buyer will pay.", 'quasar-form');?></p>
                    <p class='help-mail'><?php esc_html_e("1) You specify the fixed price yourself.", 'quasar-form');?><br>
                    <?php esc_html_e("2) The price will be the value of the total of the calculator.", 'quasar-form');?></p>
                    <p class='help-mail'><?php esc_html_e("Only one option can be specified.", 'quasar-form');?></p>
                </div>
                
               <div class="text-message-paypal-number">
                    <p class='help-mail'><?php esc_html_e("There are 2 options for determining the number of items.", 'quasar-form');?></p>
                    <p class='help-mail'><?php esc_html_e("1) You specify the fixed number yourself.", 'quasar-form');?><br>
                    <?php esc_html_e("2) The number will be the value of the total of the calculator.", 'quasar-form');?></p>
                    <p class='help-mail'><?php esc_html_e("Only one option can be specified.", 'quasar-form');?></p>
                </div>
                
                <div class="text-link-form">
                    <p class='help-mail'><?php esc_html_e("If you want to create a custom button for the popup form, then the easiest option is to use this form link:", 'quasar-form');?><span class='link-this-form'></span></p>
                    <p class='help-mail'><?php esc_html_e("! Important: the short code of the pop-up version of this form must be on the page", 'quasar-form');?></p>
                    <p class='help-mail'><?php esc_html_e("Example:", 'quasar-form');?><br>
                    <?php esc_html_e("<a href='quasar-form-p-1'>My button</a>", 'quasar-form');?><br>
                    <?php esc_html_e('<div style="display: none">[formaQ id="1" type="popup" align="right" ] </div>', 'quasar-form');?></p>
                    <p><?php esc_html_e('If you have placed a shortcode in the header of the site and it does not work, move it to the footer.', 'quasar-form');?></p>
                    <p><?php esc_html_e('Note. All this is required only if the standard button from the plugin does not suit you for some reason.', 'quasar-form');?></p>
                </div>
                
                <div class="text-help-celi-number">
                    <p><?php esc_html_e('Decimal values are written with a dot, for example: 10.45','quasar-form'); ?></p>
                </div>
                
                <div class="sender-mail-generate"><?php echo 'noreply@'.$_SERVER['SERVER_NAME'];?></div>
                
            </div>
        </div>
    </div>
</div>


<?php 
global $wpdb ;

//id new form
$quasar_form_id = '0';
$quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option WHERE id='2'", ARRAY_A  );
foreach( $quasar_form_option as $row ){
    $quasar_form_id = explode(';', $row['mainparams']);
}

echo '<div class="param-elemnt-q"></div> 
    <div class="none-element" id="contentFormsss" data-id="'.esc_html( $quasar_form_id['1'] ).'">'; 
    $quasar_form_array_admin = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_main" , ARRAY_A  );
    $quasar_form_number = 0; 
    foreach( $quasar_form_array_admin as $quasar_form_row){ 
        //content form admin 
        //content
        $validation_serialized = is_serialized( $quasar_form_row['content']  );
        if ( $validation_serialized ==true) {
            $quasar_form_row['content'] = maybe_unserialize($quasar_form_row['content']);
            $quasar_form_row['content'] = implode('/', $quasar_form_row['content'] );
        }
        if ( $validation_serialized ==false ) {
            $quasar_form_row['name'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['name'] );
	        $quasar_form_row['name'] = json_decode($quasar_form_row['name']);
	        
            //content
	        $quasar_form_row['content'] = json_decode($quasar_form_row['content']);
            $quasar_form_row['content'] = implode('/', $quasar_form_row['content'] );

		    //setting
            $quasar_form_row['setting'] = json_decode($quasar_form_row['setting']);
        }

        echo '
        <p class="cs'.esc_attr( $quasar_form_number ).' none-element" data-id-string="'.esc_attr( $quasar_form_number ).'">
            <span class="id-select-form">'.esc_html( $quasar_form_row['id'] ).'</span>
            <span class="name-form-bd">'.esc_html( $quasar_form_row['name'] ).'</span>
            <span class="string-html-form-bd">'.esc_html( $quasar_form_row['content'] ).'</span> 
            <span class="setting-form-bd">'.esc_html( $quasar_form_row['setting'] ).'</span> 
            <span class="tabs-form-bd">'.esc_html( $quasar_form_row['tabs'] ).'</span>
            <span class="logick-form-bd">'.esc_html( $quasar_form_row['logic'] ).'</span>
        </p>';
        $quasar_form_number++; 
    } 
echo '</div>';
?>

<div class='wrap-footer-q'>
    <div class='wrap-addons-q'>
        <div class='addons-text'><?php esc_html_e('Addons:','quasar-form'); ?></div>
        <div class='addons-element'>
            <a href='<?php esc_html_e('https://woocommerce.quasar-form.com/', 'quasar-form');?>' target='_blank'>1) <?php esc_html_e('Add-on for WooCommerce (One click buy)','quasar-form'); ?></a>
            <a href='<?php esc_html_e('https://quasar-form.com/telegram/', 'quasar-form');?>' target='_blank'>2) <?php esc_html_e('Add-on for Telegram','quasar-form'); ?></a>
            <a href='<?php esc_html_e('https://quasar-form.com/bitriks24/', 'quasar-form');?>' target='_blank'>3) <?php esc_html_e('Add-on for Bitrix24','quasar-form'); ?></a>
        </div>
    </div>
</div>
