<?php
/*
Plugin Name: Quasar Form
Plugin URI: https://quasar-form.com
Description: Premium WordPress form and survey builder. Make amazing forms, incredibly fast.
Version: 5.9
Author: nucleus_genius
Text Domain: quasar-form
Domain Path: /lang/
*/

//URL
define( 'quasar_form_path', plugin_dir_path(__FILE__ ) );
define( 'quasar_form_url', plugins_url( '/', __FILE__ ) );
define( 'quasar_form_version', '5.9' );


// add button admin
add_action('admin_menu', 'quasar_form_main_addpanel' ); 
function quasar_form_main_addpanel() {
   add_menu_page('Quasar-form', 'Quasar Form', 'manage_options', 'quasar-form/admin.php', '', plugins_url( 'quasar-form/assets/img/icon2.png' ));
  
}


//add custom url
$quasar_form_url = quasar_form_path.'/quasar-form-main.php';


add_filter( 'plugin_action_links_'.plugin_basename(__FILE__), 'quasar_form_add_to_pro', 10, 4 );
function quasar_form_add_to_pro( $plugin_link, $quasar_form_url  ) {
    $plugin_link[] = '<a href="/wp-admin/admin.php?page=quasar-form%2Fadmin.php">'.__('Setting','quasar-form').'</a>';
    $plugin_link[] = '<a href="https://quasar-form.com/" style="color: red; font-weight: bold;" target="_blank">Go Pro!</a>';
	return $plugin_link;
}

//creating a database when activating the plugin
function quasar_form_addtable (){
	global $wpdb;
    $table_name = $wpdb->prefix . 'quasarform_main';
	$sql = "CREATE TABLE $table_name (
			id int(11) NOT NULL AUTO_INCREMENT,
			name mediumtext NOT NULL,
			content mediumtext NOT NULL,
			setting mediumtext NOT NULL,
			tabs mediumtext NOT NULL,
			logic mediumtext NOT NULL,
			date mediumtext NOT NULL,
			UNIQUE KEY id (id)
			);";
    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql );
    
    //table2
    $table_name = $wpdb->prefix . 'quasarform_history';
    $sql = "CREATE TABLE $table_name (
			id int(11) NOT NULL AUTO_INCREMENT,
			heading mediumtext NOT NULL,
			message mediumtext NOT NULL,
			data mediumtext NOT NULL,
			payments mediumtext NOT NULL,
			UNIQUE KEY id (id)
			);";
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );
	
	//table3
	$table_name = $wpdb->prefix . 'quasarform_option';
    $sql = "CREATE TABLE $table_name (
			id int(11) NOT NULL AUTO_INCREMENT,
			mainparams mediumtext NOT NULL,
			UNIQUE KEY id (id)
			);";
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );
    //default option
    $quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option", ARRAY_A  );
    if ( count($quasar_form_option) == 0 ) {
        $key = rand(1, 1000);
        $wpdb->query( $wpdb->prepare( "INSERT INTO {$wpdb->base_prefix}quasarform_option ( `mainparams` ) VALUES ( %s )",  'not;not;not;not;not;'.$key ));
        $wpdb->query( $wpdb->prepare( "INSERT INTO {$wpdb->base_prefix}quasarform_option ( `mainparams` ) VALUES ( %s )",  'yes;0;yes;yes;yes;yes;'));
    }
	
	//we collect a database of site domains that use our plugin. No data other than the domain is sent
	$quasar_form_option = explode('/', get_site_url());
	$quasar_form_curl = curl_init();
    curl_setopt_array($quasar_form_curl, [
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => 'https://quasar-form.com/genevalidation2.php',
        CURLOPT_USERAGENT => 'Codular Sample cURL Request',
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => [
            'param2' => $quasar_form_option['2']
        ]
    ]);
    $quasar_form_otvet = curl_exec($quasar_form_curl);
    curl_close($quasar_form_curl);
}
register_activation_hook( __FILE__, 'quasar_form_addtable' );




//lang dirname
function quasar_form_lang() {
	load_plugin_textdomain( 'quasar-form', false, dirname( plugin_basename( __FILE__ ) ) . '/lang/' ); 
}
add_action( 'plugins_loaded', 'quasar_form_lang' );

//option
global $wpdb;
$quasar_form_number = 0;
$quasar_form_array_option_1 ='not;not;not;not;not';
$quasar_form_array_option_2 ='yes;0;yes;yes;yes;yes;';

if( is_admin() ){
	$quasar_form_table_name = "{$wpdb->base_prefix}quasarform_option";
    $quasar_form_query = $wpdb->get_var("SHOW TABLES LIKE '{$wpdb->base_prefix}quasarform_option'");
    //table exists
    if ( $quasar_form_query == $quasar_form_table_name ){  
        $quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option", ARRAY_A  );
    }
    else {
        $quasar_form_option = [];
    }
}
else {
    $quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option", ARRAY_A  );
}

foreach($quasar_form_option as $row){
    if ( $quasar_form_number == 0 ){
        if ( preg_match("/;/", $row['mainparams']) ) { $quasar_form_array_option_1 = explode(";",$row['mainparams']); }
        else { $quasar_form_array_option_1 = explode(";", $quasar_form_array_option_1); }
    }
    if ( $quasar_form_number == 1 ){
        if ( preg_match("/;/", $row['mainparams']) ) { $quasar_form_array_option_2 = explode(";",$row['mainparams']); }
        else { $quasar_form_array_option_2 = explode(";", $quasar_form_array_option_2); }
    }
    $quasar_form_number++;
}

//update base for new version qf
if ( $quasar_form_number == 1 || $quasar_form_number > 2 ){
    
    $quasar_form_array_admin = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_main" , ARRAY_A  );
    foreach( $quasar_form_array_admin as $quasar_form_row){ 
        //content
        $validation_serialized = is_serialized( $quasar_form_row['content']  );
        if ( $validation_serialized ==true) {
            $quasar_form_row['content'] = maybe_unserialize($quasar_form_row['content']);
            $quasar_form_row['content'] = implode('/', $quasar_form_row['content'] );
            $quasar_form_save_name['name'] = $quasar_form_row['name'];
        }
        if ( $validation_serialized ==false ) {
            //name
            $quasar_form_save_name['name'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['name'] );
	        $quasar_form_save_name['name'] = json_decode($quasar_form_save_name['name']);
	        
            //content
	        $quasar_form_row['content'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['content'] );
	        $quasar_form_row['content'] = json_decode($quasar_form_row['content']);

		    //setting
    	 	$quasar_form_row['setting'] = str_replace( 'RTQasB',  '\\',  $quasar_form_row['setting'] );
            $quasar_form_row['setting'] = json_decode($quasar_form_row['setting']);
        }

        //modified format
        $quasar_form_save_name['name'] = wp_json_encode( $quasar_form_save_name['name'] );
        $quasar_form_save_name['name'] = str_replace( '\\', 'RTQasB', $quasar_form_save_name['name'] );
        //content
        $quasar_form_save_array['content'] = $quasar_form_row['content'];
        if ( is_string( $quasar_form_row['content'] ) ){ $quasar_form_save_array['content'] = explode( '/', $quasar_form_save_array['content'] ); }
        $quasar_form_save_array['content'] = wp_json_encode( $quasar_form_save_array['content'] );
        $quasar_form_save_array['content'] = str_replace( "ZapETayA" , '\u0027', $quasar_form_save_array['content'] ); //fix for '
        //setting
        $quasar_form_save_array['setting'] = wp_json_encode( $quasar_form_row['setting'] );
        $quasar_form_save_array['setting'] = str_replace( "ZapETayA" , '\u0027', $quasar_form_save_array['setting'] ); //fix for '
        
        $wpdb->update( "{$$wpdb->base_prefix}quasarform_main",
	        [ 'name' => $quasar_form_save_name['name'], 'content' => $quasar_form_save_array['content'], 'setting' => $quasar_form_save_array['setting'], 'tabs' => $quasar_form_row['tabs'], 'logic' => $quasar_form_row['logic'], 'date' => $quasar_form_row['date'] ],
	        [ 'name' => $quasar_form_row['name'] ],
	        [ '%s', '%s', '%s', '%s','%s', '%s'],
	        [ '%s' ]
	   );
	   
    } 
    
    if ( $quasar_form_number > 2 ) { $wpdb->query("DELETE FROM {$wpdb->base_prefix}quasarform_option WHERE id != '1' "); }
    //update option table
    $wpdb->query( $wpdb->prepare( "INSERT INTO {$wpdb->base_prefix}quasarform_option ( `mainparams` ) VALUES ( %s )",  'yes;'));
    //update table histiry
	$wpdb->query("ALTER TABLE {$wpdb->base_prefix}quasarform_history ADD payments mediumtext NOT NULL");
}

//automatic disabled of libraries
if ( $quasar_form_number == 2 ){
    if ( !isset($quasar_form_array_option_2['2']) ) {$quasar_form_array_option_2['2'] = 'yes';}
    if ( !isset($quasar_form_array_option_2['3']) ) {$quasar_form_array_option_2['3'] = 'yes';}
    if ( !isset($quasar_form_array_option_2['4']) ) {$quasar_form_array_option_2['4'] = 'yes';}
    if ( !isset($quasar_form_array_option_2['5']) ) {$quasar_form_array_option_2['5'] = 'yes';}
    if ( $quasar_form_array_option_2['2']=='not'){$quasar_form_array_option_1['4'] ='yes';}
    if ( $quasar_form_array_option_2['3']=='not'){$quasar_form_array_option_1['3'] ='yes';}
    if ( $quasar_form_array_option_2['4']=='not'){$quasar_form_array_option_1['1'] ='yes';}
    if ( $quasar_form_array_option_2['5']=='not'){$quasar_form_array_option_1['2'] ='yes';}
}

//frontend
function quasar_form_frontend(){
    global $quasar_form_array_option_1;
        
    if ( $quasar_form_array_option_1['0'] !='yes' ) { wp_enqueue_style('Quasar-form-icon',  quasar_form_url.'assets/font-awesome/css/font-awesome.css', array(), quasar_form_version); }
    wp_enqueue_style('Quasar-form-frontend-style', quasar_form_url.'assets/css/frontend.css', array(), quasar_form_version );
    //add slider js
    if ( $quasar_form_array_option_1['2'] !='yes' ) { 
        wp_enqueue_script('jquery-ui-slider'); 
        wp_enqueue_script('touch-punch-frontend-script', quasar_form_url.'lib/jquery-ui-touch-punch.min.js', array('jquery') , quasar_form_version, true);
    }
    //add datepicker js
    if ( $quasar_form_array_option_1['1'] !='yes' ) { 
        wp_enqueue_script('jquery-ui-datepicker'); 
        wp_localize_jquery_ui_datepicker(); 
    }
    
    //add frontend js
    wp_enqueue_script('Quasar-form-frontend-script', quasar_form_url.'assets/js/frontend.js', array('jquery') , quasar_form_version, true);
    wp_localize_script('Quasar-form-frontend-script', 'params',
        array(
            'ajaxurlq' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('nonce-frontend-q')
        )
    ); 
    
    //string-math
    if ( $quasar_form_array_option_1['4'] !='yes' ) {
        wp_enqueue_script('string-math-q', quasar_form_url.'lib/string-math.js', array('jquery') , quasar_form_version, true);
    }
    //mask
    if ( $quasar_form_array_option_1['3'] !='yes' ) {
        wp_register_script('Quasar-form-maskedinput',  quasar_form_url.'lib/maskedinput/maskedinput.js', array('jquery') , quasar_form_version, true );
        wp_enqueue_script('Quasar-form-maskedinput');
    }
}
add_action('wp_enqueue_scripts','quasar_form_frontend');




$quasar_form_array_popup = array(
    array(
        "id"  => "-",
    )
);
$quasar_form_array_logic_id = [];


//decode spec symbol
function quasar_form_decode($q){
    $q = str_replace( "Q1@", "<", $q);
    $q = str_replace( "Q2@", ">", $q);
    $q = str_replace( "PROcentQ", "%", $q);
    $q = str_replace( "%a@", "'", $q);
    $q = str_replace( "%A@", '"', $q);
    $q = str_replace( "@palk@", "/", $q);
    $q = str_replace( "TO%C", ";", $q);
    $q = str_replace( "ZapETayA", "'", $q);
    
    $q = str_replace( "@TRDEEEQWGG", "/", $q ); 
    $q = str_replace( "SkobKi", "<", $q );
    $q = str_replace( "SKrjlfd", ">", $q ); 
    $q = str_replace( "&1&", "'", $q ); 
    $q = str_replace( "&2&", '"', $q ); 
    $q = str_replace( "KLFD2NFD", '"', $q ); 
    $q = str_replace( "GndRERD", "'", $q );
    $q = str_replace( "@P$", "|", $q );
    return $q;
}

//activation short code
function quasar_form_short_code($atts) {
    global $quasar_form_array_popup, $quasar_form_array_logic_id;

    
    $quasar_form_number = 0;
     
    // default params
    $quasar_form_array_form = shortcode_atts( array( 
      	'id' => '-', 
    	'type' => 'inline', 
    	'align' => 'center',
    	'text' => 'form'
    ), $atts ); 
    ob_start();
    
    //align
    $alignclass = $quasar_form_array_form['align'].'-align-q';

    //popup form
    if ( $quasar_form_array_form['type']=='popup' ){ 
        //array popup form
        $quasar_form_array_popup[] =array(
            "id"=> $quasar_form_array_form['id'],
            "type" => $quasar_form_array_form['type'],
            "align" => $quasar_form_array_form['align'],
            "text" => $quasar_form_array_form['text']
        );
        
        global $wpdb;
        $array_date_form = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_main WHERE id = '".$quasar_form_array_form['id']."'" , ARRAY_A  );
        if ( count($array_date_form) > 0 ){
            //style popup button
            foreach($array_date_form as $row){
                $setting = explode("/",$row['setting']); 
            }
            $array_design = explode('|', $setting['3']);
        
            //class popup button  
            if ( $array_design['17'] == ''){ $class = 'button-qform '.$alignclass.' '.$array_design['15'].' '.$array_design['16'].' button-unique-class-'.$quasar_form_number; }
            else { $class = 'button-qform '.$alignclass.' '.$array_design['15'].' '.$array_design['16'].' '.$array_design['17']. ' button-unique-class-'.$quasar_form_number; }

            echo '<div class="'.esc_attr( $class ).'" style="padding: '.esc_attr( $array_design['8'] ).'; border-width: '.esc_attr( $array_design['9'] ).'; background-color: '.esc_attr( $array_design['10'] ).'; color: '.esc_attr( $array_design['11'] ).'; font-size:'.esc_attr( $array_design['12'] ).'; border-color: '.esc_attr( $array_design['13'] ).'; border-radius: '.esc_attr( $array_design['14'] ).'" data-form="'.esc_attr( $quasar_form_array_form['id'] ).'">'.esc_html( $quasar_form_array_form['text'] ).'</div>';
        }

    }
    //inline form
    if ($quasar_form_array_form['type']=='inline'){ 
        echo '<div class="inline-box-qform '.esc_attr( $alignclass ).'" >';
        include (quasar_form_path .'include/frontend-form.php');
        echo '</div>';
    }
    

    $output_string=ob_get_contents();
    ob_end_clean();
    return $output_string;
}
add_shortcode('formaQ', 'quasar_form_short_code');//activation short code function



//add popup form in footer
function quasar_form_popup_form(){
    global $quasar_form_array_popup;
    $array_id = [];
    foreach ( $quasar_form_array_popup as $key => $value ){
        if (count($value) == 4){
            $quasar_form_array_form =  array(
                "id"  => $value['id'],
                "type" => $value['type'],
                "align" => $value['align'],
                "text" => $value['text']
            );
            $array_id[] = $quasar_form_array_form['id'];
            $remove_dublicate = 0;
            foreach ( $array_id as $value2 ){
                if ($value2 == $quasar_form_array_form['id']){ $remove_dublicate++; }
            }
            if ($remove_dublicate <= 1 ){
                echo '<div class="modal-box-qform">';
                include (quasar_form_path.'include/frontend-form.php') ;
                echo '</div>';
            }
        }
    }
}
add_action( 'wp_footer', 'quasar_form_popup_form', 20 );



//admin
function quasar_form_admin_style() { 
    wp_enqueue_style('admin-styles-q2',  quasar_form_url.'assets/css/add-form.css', array(), quasar_form_version  );
}
add_action('admin_enqueue_scripts', 'quasar_form_admin_style');


//add script admin page 
function quasar_form_admin_script( $hook ){
    if( $hook != 'quasar-form/admin.php' ){ return; }
    
    //hide notifications
    remove_all_actions('admin_notices');
    
    //admin
    wp_register_script('Quasar-form-admin-script',  quasar_form_url.'assets/js/admin/admin.js', array(), quasar_form_version  );
    wp_enqueue_script('Quasar-form-admin-script');
    
    //drag and drop
    wp_register_script('Quasar-form-sortable',  quasar_form_url.'lib/Sortable-1.9.0.js' );
    wp_enqueue_script('Quasar-form-sortable');
    
    //mask
    wp_register_script('Quasar-form-maskedinput',  quasar_form_url.'lib/maskedinput/maskedinput.js' );
    wp_enqueue_script('Quasar-form-maskedinput');
    
    //help
    wp_register_script('Quasar-form-help',  quasar_form_url.'/assets/js/admin/admin-help.js',  array(), quasar_form_version  );
    wp_enqueue_script('Quasar-form-help');
    
    //admin quick-quasart js
    wp_register_script('Quasar-form-admin-quick-start',  quasar_form_url.'/assets/js/admin/quick-start-form.js', array(), quasar_form_version  );
    wp_enqueue_script('Quasar-form-admin-quick-start');
    
    //admin ajax
    wp_localize_script('Quasar-form-admin-script', 'params',
        array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'put3' => plugins_url( '/', __FILE__ ),
            'nonce' => wp_create_nonce('q-ajax-nonce')
        )
    ); 
    
    
    //standart script
    wp_enqueue_script('jquery-ui-core');
    wp_enqueue_script('jquery-ui-widget');
    wp_enqueue_script('jquery-ui-button');
    wp_enqueue_script('jquery-ui-spinner');
    wp_enqueue_script('jquery-ui-slider');
    wp_enqueue_script('jquery-ui-sortable');
    wp_enqueue_script('jquery-ui-datepicker');
    wp_enqueue_script('jquery-color');
    wp_enqueue_style('wp-color-picker');
    wp_enqueue_script('wp-color-picker');
    wp_enqueue_script('iris');
    wp_enqueue_media();
    //wp editor
    wp_enqueue_editor();
    //admin fa fa
    wp_enqueue_style('Quasar-form-font-awesome',  quasar_form_url.'assets/font-awesome/css/font-awesome.min.css', array(), quasar_form_version  ); 
    //admin css
    wp_enqueue_style('Quasar-form-admin-style',  quasar_form_url.'assets/css/admin.css', array(), quasar_form_version );
    //admin alfa color picker
    wp_enqueue_style( 'Quasar-form-color-picker-alpha' );
    wp_enqueue_script( 'Quasar-form-color-picker-alpha', quasar_form_url.'lib/wp-color-picker-alpha-master/dist/wp-color-picker-alpha.min.js' , array( 'wp-color-picker' ) , quasar_form_version , true);
  
    //color localization
    wp_localize_script('Quasar-form-color-picker-alpha', 'localizationColor',
        array(
            'color' => esc_html__('Select Color','Quasar-form'),
            'clear' => esc_html__('Clear','Quasar-form'),
        )
    ); 
    
}
add_action('admin_enqueue_scripts','quasar_form_admin_script');


//add button "add form" in pages
function quasar_form_addform_button() {
    echo "<a id='add-form-q' class='button add-Quasar-form-classic'>".esc_html__('Add form','Quasar-form')."</a>";
}
add_action('media_buttons', 'quasar_form_addform_button', 15);



//add button and add cutom block in editor js
function quasar_form_addform_button_script() {
    //classic
    wp_enqueue_script('Quasar-form-classic', quasar_form_url.'assets/js/admin/add-form-classic.js', array('jquery'), quasar_form_version );
    //block
    wp_enqueue_script('Quasar-form-block',  quasar_form_url.'assets/js/admin/add-form-gutenberg.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' ), quasar_form_version );
    //block localization
    wp_localize_script('Quasar-form-block', 'localization3',
        array(
            'left' =>  esc_html__('Left','quasar-form'),
            'right' => esc_html__('Right','quasar-form'),
            'center' => esc_html__('Center','quasar-form'),
            'inline' => esc_html__('Inline','quasar-form'),
            'popup' => esc_html__('Popup','quasar-form'),
            'buttontext' => __('Button text:','quasar-form'),
            'selectform' => esc_html__('Select form:','quasar-form'),
            'alignform' => esc_html__('Align of form:','quasar-form'),
            'typeform' => esc_html__('Type of form:','quasar-form'),
            'selectformname' => esc_html__('Form name','quasar-form'),
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('q-ajax-nonce')
        )
    ); 
    
    
} 
add_action('admin_enqueue_scripts', 'quasar_form_addform_button_script');

//add button html popup
add_action (  'admin_footer' , 'quasar_form_popup_buttton_html' ) ; 
function  quasar_form_popup_buttton_html( ) { 
    global $wpdb;
    $array_form = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_main" , ARRAY_A  );
    $number = 0 ; 
    $str_add_form = '';
    foreach($array_form as $row){ // list name form
        //name
        $row['name'] = str_replace( 'RTQasB',  '\\',  $row['name'] );
	    $row['name'] = json_decode( $row['name'] );
	    
        if ($number == 0){ 
            $str_add_form.='<input id="form'.esc_html( $row['id'] ).'" type="radio" name="nameform" data-id="'.esc_html( $row['id'] ).'" checked></input> <label for="form'.esc_html( $row['id'] ).'"> <div class="checkbox-qform"><div class="checkbox-fafa"></div></div> <span>'.esc_html( $row['name'] ).'</span></label>';
        }
        else { 
            $str_add_form.= '<input id="form'.esc_html( $row['id'] ).'" type="radio" name="nameform" data-id="'.esc_html( $row['id'] ).'"></input> <label for="form'.esc_html( $row['id'] ).'"> <div class="checkbox-qform"><div class="checkbox-fafa"></div></div> <span>'.esc_html( $row['name'] ).'</span></label>'; 
        }
        $number++; 
    }

    $text_1 = __("Select form:",'quasar-form');
    $text_2 = __("Type of form",'quasar-form');
    $text_3 = __("Inline form",'quasar-form');
    $text_4 = __("Popup form",'quasar-form');
    $text_5 = __("Align:",'quasar-form');
    $text_6 = __("Center",'quasar-form');
    $text_7 = __("Right",'quasar-form');
    $text_8 = __("Left",'quasar-form');
    $text_9 = __("Button text:",'quasar-form');
    $text_10 = __("Add form",'quasar-form');

    
    echo '
    <div class="swap-modal-add-form" style="display:none"> 
        <div class="modal-add-form"> 
            <div class="heading-quasar-add-form">Quasar-form</div>
        
            <div class="swap-selected-block">
                <div class="modal-heading-q">'.esc_html($text_1).'</div>
                <div id="select_name_form" class="type-checkbox-element radio-select"> 
                    '.wp_specialchars_decode( $str_add_form ).'
                </div>
            </div>
            
            <div class="swap-selected-block">
                <div class="modal-heading-q">'.esc_html($text_2).'</div> 
                <div id="select_type_form" class="type-checkbox-element radio-select">
                    <input id="form-tip-inline" type="radio" name="tip" data-type="inline" checked></input>
                    <label for="form-tip-inline"> 
                        <div class="checkbox-qform">
                            <div class="checkbox-fafa"></div>
                        </div> 
                        <span>'.esc_html($text_3).'</span>
                    </label>
                    <input id="form-tip-popup" type="radio" name="tip" data-type="popup"></input> 
                    <label for="form-tip-popup"> 
                        <div class="checkbox-qform">
                            <div class="checkbox-fafa"></div>
                        </div> 
                        <span>'.esc_html($text_4).'</span>
                    </label>
                </div>
            </div> 
            
            <div class="swap-selected-block align-setting-q">
                <div class="modal-heading-q">'.esc_html($text_5).'</div>
                <div id="select_align_form" class="type-checkbox-element radio-select">
                    <input id="form-center-align" name="align" type="radio" data-align="center" checked></input> 
                    <label for="form-center-align">
                        <div class="checkbox-qform">
                            <div class="checkbox-fafa"></div>
                        </div> 
                        <span>'.esc_html($text_6).'</span>
                    </label>
                    <input id="form-center-right" name="align" type="radio" data-align="right"></input> 
                    <label for="form-center-right">
                        <div class="checkbox-qform"> 
                            <div class="checkbox-fafa"></div>
                        </div> 
                        <span>'.esc_html($text_7).'</span>
                    </label>
                    <input id="form-center-left" name="align" type="radio" data-align="left"></input> 
                    <label for="form-center-left">
                        <div class="checkbox-qform">
                            <div class="checkbox-fafa"></div>
                        </div> 
                        <span>'.esc_html($text_8).'</span>
                    </label>
                </div>
            </div>
            
            <div class="swap-selected-block text-popup-q"> 
                <div class="modal-heading-q">'.esc_html($text_9).'</div> 
                <input id="text-button-q">
            </div>
            
            <div class="swap-selected-block save-element-adm-form">
                <div class="button-add-form">'.esc_html($text_10).'</div>
            </div>
        </div>
    </div>';
}




//functions
add_action('wp_ajax_mail_send_q', 'quasar_form_sendmail' ); 
add_action('wp_ajax_save_forma_q', 'quasar_form_save' ); 
add_action('wp_ajax_nopriv_mail_send_q', 'quasar_form_sendmail'); 
add_action('wp_ajax_remove_form', 'quasar_form_removeform'); 
add_action('wp_ajax_remove_history_message', 'quasar_form_remove_message'); 
add_action('wp_ajax_save_active_lib_q', 'quasar_form_option' ); 
//paypal
add_action('wp_ajax_nopriv_pay_pal_q', 'quasar_form_pay_pal');  
add_action('wp_ajax_pay_pal_q', 'quasar_form_pay_pal'); 

//paypal
function quasar_form_pay_pal(){
    
    // Check nonce 
    check_ajax_referer( 'nonce-frontend-q', 'nonce_code' );
    
    $id_pay = sanitize_text_field( $_POST['idpay'] );
    $id_form = sanitize_text_field( $_POST['idform'] );
    $url_form = sanitize_text_field( $_POST['urlpage'] );
    
    //information on this form from the database
    global $wpdb;
    $quasar_form_array_this_form = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}quasarform_main  WHERE id ='$id_form' ", ARRAY_A );
    foreach($quasar_form_array_this_form as $row){
        if ( json_decode( $row['name'] ) != null ){ 
            $row['name'] = str_replace( 'RTQasB',  '\\',  $row['name'] );
            $row['name'] = json_decode($row['name']);
            $name_form = ($row['name']);
        }
        
        if ( json_decode( $row['content'] ) != null ){ 
            $row['content'] = str_replace( 'RTQasB',  '\\',  $row['content'] );
            $row['content'] = json_decode($row['content']);
            $all_field_string = $row['content'];
        }
    }
    
    //search field paypal
    foreach( $all_field_string as $val ){
        $array_field = explode(";", $val );
        if ($array_field['0'] == 'type-paypal-element') {
            
            $setting_pay_pal = [
                "live-account" => $array_field['1'], 
                "data-sandbox" => $array_field['2'],
                "sandbox-of-on" => $array_field['3'],
                "price" => $array_field['4'],
                "number" => $array_field['5'],
                "currency" => $array_field['6'],
                "lang" => $array_field['7'],
                "item_name" => $array_field['13'],
                "url-success" => $array_field['14'],
                "url-camcel" => $array_field['15'],
            ];
        } 
    }

    if ( preg_match("/[^0-9\.]/", $array_field['4']) ) { 
        if ( isset($_POST['attr1']) ){ $setting_pay_pal['price'] = sanitize_text_field($_POST['attr1']); }
    }
    if ( preg_match("/[^0-9\.]/", $array_field['5']) ) { 
        if ( isset($_POST['attr2']) ){ $setting_pay_pal['number'] = sanitize_text_field($_POST['attr2']); }
    }
    
    $url_form = sanitize_text_field( $_POST['urlpage'] );

    //paypal url
    $setting_pay_pal['url-success'] = quasar_form_decode( $setting_pay_pal['url-success'] );
    $setting_pay_pal['url-camcel'] = quasar_form_decode( $setting_pay_pal['url-success'] );
 
    
    //paypal request
    if ( $setting_pay_pal['sandbox-of-on'] == 'yes'){
        $account = $setting_pay_pal['data-sandbox'];
        $path = 'sandbox.paypal';
    }
    else {
        $account = $setting_pay_pal['live-account'];
        $path = 'paypal';
    }
    
    
    // currency
	if ( $setting_pay_pal['currency'] == "1") { $currency = "AUD"; }
	if ( $setting_pay_pal['currency'] == "2") { $currency = "BRL"; }
	if ( $setting_pay_pal['currency'] == "3") { $currency = "CAD"; }
	if ( $setting_pay_pal['currency'] == "4") { $currency = "CZK"; }
	if ( $setting_pay_pal['currency'] == "5") { $currency = "DKK"; }
	if ( $setting_pay_pal['currency'] == "6") { $currency = "EUR"; }
	if ( $setting_pay_pal['currency'] == "7") { $currency = "HKD"; }
	if ( $setting_pay_pal['currency'] == "8") { $currency = "HUF"; }
	if ( $setting_pay_pal['currency'] == "9") { $currency = "ILS"; }
	if ( $setting_pay_pal['currency'] == "10") { $currency = "JPY"; }
	if ( $setting_pay_pal['currency'] == "11") { $currency = "MYR"; }
	if ( $setting_pay_pal['currency'] == "12") { $currency = "MXN"; }
	if ( $setting_pay_pal['currency']== "13") { $currency = "NOK"; }
	if ( $setting_pay_pal['currency'] == "14") { $currency = "NZD"; }
	if ( $setting_pay_pal['currency'] == "15") { $currency = "PHP"; }
	if ( $setting_pay_pal['currency'] == "16") { $currency = "PLN"; }
	if ( $setting_pay_pal['currency'] == "17") { $currency = "GBP"; }
	if ( $setting_pay_pal['currency'] == "18") { $currency = "RUB"; }
	if ( $setting_pay_pal['currency'] == "19") { $currency = "SGD"; }
	if ( $setting_pay_pal['currency'] == "20") { $currency = "SEK"; }
	if ( $setting_pay_pal['currency'] == "21") { $currency = "CHF"; }
	if ( $setting_pay_pal['currency'] == "22") { $currency = "TWD"; }
	if ( $setting_pay_pal['currency'] == "23") { $currency = "THB"; }
	if ( $setting_pay_pal['currency'] == "24") { $currency = "TRY"; }
	if ( $setting_pay_pal['currency'] == "25") { $currency = "USD"; }
	
	// language
	if ( $setting_pay_pal['lang'] == "1") {$language = "da_DK";} //Danish
	if ( $setting_pay_pal['lang'] == "2") {$language = "nl_BE";} //Dutch
	if ( $setting_pay_pal['lang'] == "3") {$language = "EN_US";} //English
	if ( $setting_pay_pal['lang'] == "20") {$language = "en_GB";} //English - UK
	if ( $setting_pay_pal['lang'] == "4") {$language = "fr_CA";} //French
	if ( $setting_pay_pal['lang'] == "5") {$language = "de_DE";} //German
	if ( $setting_pay_pal['lang'] == "6") {$language = "he_IL";} //Hebrew
	if ( $setting_pay_pal['lang'] == "7") {$language = "it_IT";} //Italian
	if ( $setting_pay_pal['lang'] == "8") {$language = "ja_JP";} //Japanese
	if ( $setting_pay_pal['lang'] == "9") {$language = "no_NO";} //Norwgian
	if ( $setting_pay_pal['lang'] == "10") {$language = "pl_PL";} //Polish
	if ( $setting_pay_pal['lang'] == "11") {$language = "pt_BR";} //Portuguese
	if ( $setting_pay_pal['lang'] == "12") {$language = "ru_RU";} //Russian
	if ( $setting_pay_pal['lang'] == "13") {$language = "es_ES";} //Spanish
	if ( $setting_pay_pal['lang'] == "14") {$language = "sv_SE";} //Swedish
	if ( $setting_pay_pal['lang'] == "15") {$language = "zh_CN";} //Simplified Chinese - China
	if ( $setting_pay_pal['lang'] == "16") {$language = "zh_HK";} //Traditional Chinese - Hong Kong
	if ( $setting_pay_pal['lang'] == "17") {$language = "zh_TW";} //Traditional Chinese - Taiwan
	if ( $setting_pay_pal['lang'] == "18") {$language = "tr_TR";} //Turkish
	if ( $setting_pay_pal['lang'] == "19") {$language = "th_TH";} //Thai
    
    //validation level 2
    if ( isset($quasar_form_array_option_1['5']) ){$custom = $id_form.';'.$quasar_form_array_option_1['5'];}
    else {
        $key = rand(1, 1000);
        $option = $quasar_form_array_option_1 = 'not;not;not;not;not;'.$key;
        $wpdb->query( $wpdb->prepare( "UPDATE {$wpdb->base_prefix}quasarform_option SET mainparams = '$option' WHERE ID = '1'", '%s' , '%d' ));
        
        $custom = $id_form.';'.$key;
    }
    
	$array = array(
		'business'			=> $account,
		'currency_code'		=> $currency,
		'charset'			=> get_bloginfo('charset'),
		'rm'				=> '1', 				// return method for return url, use 1 for GET
		'return'			=> $setting_pay_pal['url-success'],
		'cancel_return'		=> $setting_pay_pal['url-camcel'],
		'bn'				=> 'WPPlugin_SP',
		'lc'				=> $language,
		'quantity'          => $setting_pay_pal['number'],
		'item_name'			=> $setting_pay_pal['item_name'],
		'amount'			=> $setting_pay_pal['price'],
		'cmd'				=> '_xclick',
		'notify_url'		=> $url_form,//url for response request
		'no_shipping'       => '1',
		'custom'            =>  $custom
	);
	
	// generate url with parameters
	$paypal_url = "https://www.$path.com/cgi-bin/webscr?";
	$paypal_url .= http_build_query($array);
	$paypal_url = htmlentities($paypal_url); // fix for &curren was displayed literally
	$paypal_url = str_replace('&amp;','&',$paypal_url);
    echo $paypal_url;
    
}

//option 
function quasar_form_option(){
    
    // Check nonce 
    check_ajax_referer( 'q-ajax-nonce', 'nonce_code' );
    
    // Stop if the current user is not an admin or do not have administrative access
	if( ! current_user_can( 'manage_options' ) ) {
		die();
	}
    
    $option = sanitize_text_field( $_POST['option'] );
    global $wpdb;
    $wpdb->update( "{$wpdb->base_prefix}quasarform_option",
	   [ 'mainparams' => $option ],
	   [ 'ID' => '1'],
	   [ '%s' ],
	   [ '%s' ]
	);
}

// save/update form
function quasar_form_save(){
    
	// Check nonce 
    check_ajax_referer( 'q-ajax-nonce', 'nonce_code' );
    
    // Stop if the current user is not an admin or do not have administrative access
	if( ! current_user_can( 'manage_options' ) ) {
		die();
	}
    	
    $quasar_form_save_array = array(
        'content' => sanitize_text_field( $_POST['inbd'] ),
        'setting' => sanitize_text_field( $_POST['settingsbd'] ),
        'tabs' => sanitize_text_field ( $_POST['tabsq'] ),
        'logic' => sanitize_text_field ( $_POST['logic'] )
    );
    $name_form_prev_last = explode("/", sanitize_text_field($_POST['nameformq']) ); //prev and last name form


    global $wpdb;
    $update_check = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}quasarform_main ", ARRAY_A  );
    $number = 0;
    $mumber_decode = 0;
    foreach( $update_check as $row){
        $mumber_decode = 0;
        //name
        if ( json_decode($row['name']) != null ){ 
            $row['name'] = str_replace( 'RTQasB',  '\\',  $row['name'] );
            $row['name'] = json_decode($row['name']);
            $mumber_decode++;
        }
        
        if ( $row['name'] == $name_form_prev_last[0] ) { 
            $number++; 
            //back coding in json
            if ( $mumber_decode > 0 ){
                $row['name'] = wp_json_encode( $row['name'] );
                $row['name'] = str_replace( '\\', 'RTQasB', $row['name'] );
                $name_form_prev_last[0] = $row['name'];
            }
        }
    }
    $update_check = $number;

    $date = date("Y-m-d-G"); //date 

    //name new
    $name_form_prev_last[1] = wp_json_encode( $name_form_prev_last[1] );
    $name_form_prev_last[1] = str_replace( '\\', 'RTQasB', $name_form_prev_last[1] );
    
    //content
    $quasar_form_save_array['content'] = explode( '/', $quasar_form_save_array['content'] );
    $quasar_form_save_array['content'] = wp_json_encode( $quasar_form_save_array['content'] );
    $quasar_form_save_array['content'] = str_replace( "ZapETayA" , '\u0027', $quasar_form_save_array['content'] ); //fix for '
    //setting
    $quasar_form_save_array['setting'] = wp_json_encode( $quasar_form_save_array['setting'] );
    $quasar_form_save_array['setting'] = str_replace( "ZapETayA" , '\u0027', $quasar_form_save_array['setting'] ); //fix for '
    
    
    //creating a new form
    if ($update_check==0){
        $wpdb->query( $wpdb->prepare( "INSERT INTO {$wpdb->base_prefix}quasarform_main ( `name`, `content`, `setting`,`tabs` , `logic` , `date`) VALUES ( %s, %s, %s, %s, %s, %s)", $name_form_prev_last[1], $quasar_form_save_array['content'] , $quasar_form_save_array['setting'] , $quasar_form_save_array['tabs'] , $quasar_form_save_array['logic'] , $date ));
        
        //save last id
        $id = '0';
        $update_check = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}quasarform_main WHERE name='".$name_form_prev_last['1']."'", ARRAY_A  );
        foreach( $update_check as $row ){
            $id = $row['id'];
        }
        $quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option WHERE id='2'", ARRAY_A  );
        foreach( $quasar_form_option as $row ){
            $option = explode(';', $row['mainparams']);
        }
        $option['1'] = $id;
        $option = implode(';', $option);
        
        $wpdb->update( "{$wpdb->base_prefix}quasarform_option",
	        [ 'mainparams' => $option ],
	        [ 'id' => '2' ],
	        [ '%s' ],
	        [ '%s' ]
	   );
    }
    //updating the current form
    else { 
        $wpdb->update( "{$wpdb->base_prefix}quasarform_main",
	        [ 'name' => $name_form_prev_last['1'], 'content' => $quasar_form_save_array['content'], 'setting' => $quasar_form_save_array['setting'], 'tabs' => $quasar_form_save_array['tabs'], 'logic' => $quasar_form_save_array['logic'], 'date' => $date ],
	        [ 'name' => $name_form_prev_last['0'] ],
	        [ '%s', '%s', '%s', '%s','%s', '%s'],
	        [ '%s' ]
	   );
    }
    
    //automatic disabled of libraries
    automatic_disabled_libraries();
}

//automatic disabled of libraries
function automatic_disabled_libraries(){
    global $wpdb;
    $update_check = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}quasarform_main", ARRAY_A  );
    $calculator = 'not';
    $phone_mask = 'not';
    $date_picker = 'not';
    $slider = 'not';
    foreach( $update_check as $row ){
        $row['content'] = json_decode( $row['content'] );
        foreach (  $row['content'] as $val ){
            $array_field=explode(";", $val ); 

            if ($array_field['0'] == 'type-itog-element') { $calculator = 'yes'; }
            if ($array_field['0'] == 'type-phone-element' && $array_field['28']=='yes' ) { $phone_mask = 'yes'; }
            if ($array_field['0'] == 'type-data-element') { $date_picker = 'yes'; }
            if ($array_field['0'] == 'type-range-element') { $slider = 'yes'; }
        }
    }
    $quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option WHERE id='2'", ARRAY_A  );
    foreach( $quasar_form_option as $row ){
        $option = explode(';', $row['mainparams']);
    }
    $option = $option['0'] .';'. $option['1'] .';'. $calculator .';'. $phone_mask .';'. $date_picker .';'. $slider;
    //update option 2
    $wpdb->update( "{$wpdb->base_prefix}quasarform_option",
	   [ 'mainparams' => $option ],
	   [ 'id' => '2' ],
	   [ '%s' ],
	   [ '%s' ]
	);
}

//Send mail
function quasar_form_sendmail( $q = "1", $array_send =''){ 
    
    //message payment
    if ( $q == "2" ){
        $_POST['id-form'] = $array_send['id_form'];
        $_POST['urlpage'] = $array_send['url_page'];
        $_POST['titlepage']= '';
        
        if ( $array_send['validation'] ==false ){ $validation = '<p><b>'.esc_html__("Failed to verify the authenticity of the payment, be sure to compare the data from the form and from your PayPal.",'quasar-form') .'</b></p>';}
        else { $validation = ''; } 
        
        $_POST['contentQform'] = $validation.'
        <p><span><b>'.esc_html__('Payment status','quasar-form') .':</b></span> '.$array_send['payment_status'].'</p>
        <p><span><b>'.esc_html__('Fee','quasar-form') .':</b></span> '. $array_send['summa'] .' '.$array_send['currency'] .'</p>
        <p><span><b>'.esc_html__("Item name",'quasar-form') .':</b></span> '.$array_send['item_name'].'</p>
        <p><span><b>'.esc_html__("Quantity item",'quasar-form') .':</b></span> '. $array_send['quantity'].'</p>
        <p><span><b>'.esc_html__('Payment date','quasar-form') .':</b></span> '. $array_send['payment_date'] .'</p>
        <p><span><b>'.esc_html__("Payer mail",'quasar-form') .':</b></span> '. $array_send['business'] .'</p>
        <p><span><b>'.esc_html__("Payer country",'quasar-form') .':</b></span> '. $array_send['address_country'] .'</p>
        <p><span><b>'.esc_html__("Payer name",'quasar-form') .':</b></span> '. $array_send['first_name'] . ' ' . $array_send['last_name'] .'</p>
        <p><span><b>'.esc_html__("Page url",'quasar-form') .':</b></span> '. $array_send['url_page'].'</p>';
    }

	
  if( $q != "2" ){
    // Check nonce 
    check_ajax_referer( 'nonce-frontend-q', 'nonce_code' );
  }
    
  function quasar_form_send_mail( $to, $body, $email, $filepath, $filename, $q ) {
    $quasar_form_idform = sanitize_text_field( $_POST['id-form'] ); //id this form
    //information on this form from the database
    global $wpdb;
    $quasar_form_array_this_form = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}quasarform_main  WHERE id ='$quasar_form_idform' ", ARRAY_A );
    foreach($quasar_form_array_this_form as $row){
         
        if ( json_decode( $row['setting'] ) != null ){ 
            $row['setting'] = str_replace( 'RTQasB',  '\\',  $row['setting'] );
            $row['setting'] = json_decode($row['setting']);
        }
        $setting = explode('/',  $row['setting'] );
              
        if ( json_decode( $row['name'] ) != null ){ 
            $row['name'] = str_replace( 'RTQasB',  '\\',  $row['name'] );
            $row['name'] = json_decode($row['name']);
        }
        
        if ( json_decode( $row['content'] ) != null ){ 
            $row['content'] = str_replace( 'RTQasB',  '\\',  $row['content'] );
            $row['content'] = json_decode($row['content']);
            $all_field_string =  $row['content'];
        }
        else  {
            $all_field_string = maybe_unserialize( $row['content'] );
        }
        
        $name_form_history = $row['name'];
    }
    //search field upload buttons
    $string_valid_file_extensions = '';
    $array_id_email_field = [];
    foreach( $all_field_string as $val ){
        $array_field = explode(";", $val );
        if ($array_field['0'] == 'type-upload-element') {
            //str of valid file extensions
            $string_valid_file_extensions.= $array_field['8'].',';
        }
        if ($array_field['0'] == 'type-email-element') {
            //str of valid file extensions
            $array_id_email_field[]= $array_field['6'];
        }
    }
    //setting form
    $form_array_mail = explode('|', $setting[2]);
    //antispam setting
    if( !isset($setting[8]) ) { $setting[8] = 'not'; }
    $spam_protect = $setting[8]; 
    //copy mail
    if( !isset($setting[9]) ) { $setting[9] = 'not'; }
    $copy_mail = $setting[9]; 
    $email_for_copy = '';

    //parse the line with the contents of all form fields + html custom ;
    $str_content_mail ='';
    $array_value_field =[];
    $array_content_mail = explode('RazDelITEL', sanitize_text_field ($_POST['contentQform']) );
    $array_content_mail = array_filter($array_content_mail) ;//delete empty values
    foreach($array_content_mail as $key => $value){
        $array_value_field  = explode(';', $value );
        $array_value_field = array_filter( $array_value_field);
        $array_count = count($array_value_field) - 1;
        $number_1 = 0; 
        $number_2 = 1;
        $stringcontent = '';
        if ( $array_count > 2){$checkbox = 'yes';}
        else { $checkbox = 'no'; }
        //value this field
        while($array_count >0){
            $number_1++;
            //all field
            if ($checkbox != 'yes'){
                if ( !isset($array_value_field[1]) ) {$array_value_field[1] = '';}
                if ( $array_value_field[1] !='' && $array_value_field[2] != '' ){ $stringcontent = '<b>'.$array_value_field[1].'</b>: '; }
                $stringcontent.= $array_value_field[2].'<br>';
                //for copy mail for user - search email
                if ( $copy_mail == 'yes' ){
                    if ($array_id_email_field){
                        foreach ( $array_id_email_field as $value ){
                            if ( $array_value_field[0] == $value ){
                                if ( $email_for_copy ==='' ){//only 1 email
                                    $email_for_copy = $array_value_field[2];
                                }
                            }
                        }
                    }
                }
            }
            //checkbox
            if ($checkbox == 'yes'){
                if ($number_1 == 1){
                    $stringcontent.='<b>'.$array_value_field[$number_2].'</b><br>';
                }
                if ($number_1 > 1){
                    $stringcontent.=$array_value_field[$number_2].'<br>';
                }  
            }
            $number_2++;
            $array_count--;
        }
        $str_content_mail.= $stringcontent;
        $array_value_field_2[$array_value_field[0]] = $stringcontent;
    }
   
    $urlpage = sanitize_text_field( $_POST['urlpage'] );
    $headingpage = sanitize_text_field( $_POST['titlepage'] );
    
    //spam protect
    if ( $spam_protect == 'yes' ){
        if ( preg_match("(http://)", $str_content_mail ) || preg_match("(https://)" , $str_content_mail) || preg_match("(href)" , $str_content_mail)) { $spam_protect ='spam-detect'; }
    }
    
    //addon woo
    if ( isset($_POST['product-info']) ){
        $_POST['product-info'] = sanitize_text_field($_POST['product-info']);
        $array_product_info = explode('/', $_POST['product-info'] );
        $strindg_product_info= '';
        $localization_product_info = explode('|', $setting[4]);
        if ( !isset($localization_product_info[13]) ){ $localization_product_info[13] = 'New order product:'; }
        if ( !isset($localization_product_info[14]) ){ $localization_product_info[14] = 'Quantity:'; }
        if ( !isset($localization_product_info[15]) ){ $localization_product_info[15] = 'Total:'; }
        $data_val = '';
        foreach( $array_product_info as $value ){
            $val = explode(';', $value );
            //id
            if ($val[0] == 'id') { 
                $product = new WC_Product($val[1]);
                $product_type = get_the_terms( $val[1],'product_type')[0]->slug;
                $variableId = $val[2];
            }
            //name product
            if ($val[0] == 'name') { $name_product= '<b style="color: #2d78ea">'.$localization_product_info[13].'</b> '.$val[1]; }
            //quantity product
            if ($val[0] == 'quantity') { 
                $quantity_product_q = $val[1]; 
                if ( $val[2]=='default' ){ $strindg_product_info.= '<b style="color: #2d78ea">'.$localization_product_info[14].'</b> '.$val[1].'<br>'; }
            }
            //price product
            if ($val[0] == 'price') { 

                //simple 
                if( $product_type == 'simple' ){
                    $price_product_info = $product->get_price();
                    //quantity prise
                    if ( isset($quantity_product_q) ){ $price_product_info = $price_product_info * (int)$quantity_product_q; }
                    $strindg_product_info.= '<b style="color: #2d78ea">'.$localization_product_info[15].'</b> '.$price_product_info.'<br>';
                }
                //variable
                else if ( $product_type == 'variable' ){
                    $product = wc_get_product( $product->get_id() );
                    $variations = $product->get_available_variations();

                    foreach ($variations as $key => $value ){
                        //selected variable
                        if ( $variations[$key]['variation_id'] == $variableId ){
                            $price_product_info = $variations[$key]['display_price'];
                            //quantity prise
                            if ( isset($quantity_product_q) ){ $price_product_info = $price_product_info * (int)$quantity_product_q; }
                            $strindg_product_info.= '<b style="color: #2d78ea">'.$localization_product_info[15].'</b> '.$price_product_info.'<br>';
                        }
                    }
                }
            }
            //for all option
            if ($val[0] == 'data-val') {
                if ( isset($val[1]) ){ $data_val = $val[1]; }
            }
           
        }
        //name variable
        if ( $product_type == 'variable' ){
            $product = wc_get_product( $product->get_id() );
            $variations = $product->get_available_variations();
            $number_data_val = 0;
            if ( $data_val !='' ){ 
                $data_val = explode('|', $data_val);  
                $number_data_val++; 
                foreach ( $data_val as $key => $value){
                    if ( $value !='' ){
                        $value = explode(':', $value);
                        $value = $value['1'];
                        $data_val[$key] = $value;
                    }
                }
            }
            foreach ($variations as $key => $value ){
                   
                //selected variable
                if ( $variations[$key]['variation_id'] == $variableId ){ 
                    //name variable
                    if ( !isset($name_product) ){ $name_product = '';}
                    foreach ( $variations[$key]['attributes'] as $key2 => $value2 ){

                        //vetka esli est zavisimosti
                        if ( $value2 !='' ){
                            //search name attribute po slag
                            if (preg_match("/_/", $key2)) {
                                $name_tax = explode('_', $key2);
                                $name_tax = array_pop($name_tax);
                                $name_tax = 'pa_'.urldecode($name_tax);
                                $term = get_term_by( 'slug', $value2, $name_tax);
                                if ( isset($term->name) ) { $attr_name = $term->name; }
                                else { $attr_name = ''; }
                                if ( $attr_name !=''){
                                    $attr_name = urldecode($attr_name);
                                    $name_product.= ' - <b>'. $attr_name.'</b>';
                                }
                                else {
                                    $attr_name = urldecode($value2);
                                    $name_product.= ' - <b>'. $attr_name.'</b>';
                                }
                                 
                                //remove attr iz massiva data_val (chtob bez dubleaga)
                                if ( $number_data_val > 0 ){
                                    foreach ( $data_val as $key3 => $value3){
                                        if ( $value3 == $attr_name) { 
                                            unset($data_val[$key3]);
                                        }
                                    }
                                }
                                
                            }

                        }
                    }
                    //dlya variable all value
                    foreach ( $data_val as $key3 => $value3){
                        if ( $value3 != ''){
                            $name_product.= ' - <b>'. $value3.'</b>';
                        }
                    }
                }
            }
        }
        //final name product
        if ( isset($name_product) ) { $strindg_product_info = $name_product.'<br>'.$strindg_product_info; }
        
        $str_content_mail =  $strindg_product_info.'<br>'.$str_content_mail;
        
    }
    
    //recovery of special characters
    $messag_email = str_replace( "@TRDEEEQWGG", "/", $form_array_mail[2] ); 
    $messag_email = str_replace( "SkobKi", "<", $messag_email );
    $messag_email = str_replace( "SKrjlfd", ">", $messag_email ); 
    $messag_email = str_replace( "%1%", "<", $messag_email );
    $messag_email = str_replace( "@2F", ">", $messag_email ); 
    $messag_email = str_replace( "&1&", "'", $messag_email ); 
    $messag_email = str_replace( "&2&", '"', $messag_email ); 
    $messag_email = str_replace( "KLFD2NFD", '"', $messag_email ); 
    $messag_email = str_replace( "GndRERD", "'", $messag_email );
    $messag_email = str_replace( "@P$", "|", $messag_email );
    $messag_email = str_replace( "gt;", ">", $messag_email );
    $messag_email = str_replace( "lt;", "<", $messag_email );
    $messag_email = str_replace( "<#p>", "</p>", $messag_email );
   
    preg_match_all('/\[.*?\]/' , $messag_email , $array_short_code); //search  [ ... ]

    //array of replacing short codes with values
    foreach ( $array_short_code as $key => $value){
        foreach ( $value as $key2 => $value2){
            
            if ($value2 !='[content form]' && $value2 !='[URL]' && $value2 !='[Time]' && $value2 !='[page title]' ){
                
                $fieldidq = $value2;
                $fieldidq = substr($fieldidq, 1, -1);
                $fieldidq = strip_tags($fieldidq);
                $string = '';
                $string = implode(":",  $array_value_field_2); 
                
                if (array_key_exists($fieldidq, $array_value_field_2)) {//if this key is present in the array of all fields
                    $messag_email = str_replace( $value2,  $array_value_field_2[$fieldidq], $messag_email );
                }

            } 
            //replace short code: [content form] , [URL] , [Time]
            if ($value2=='[content form]'){ $messag_email = str_replace( $value2,  $str_content_mail , $messag_email );  }
            if ($value2=='[URL]'){ $messag_email = str_replace( $value2,  $urlpage , $messag_email );  }
            if ($value2=='[page title]'){ $messag_email = str_replace( $value2,  $headingpage , $messag_email );  }
            if ($value2=='[Time]'){ $messag_email = str_replace( $value2,  current_time( 'H:i:s Y-m-d'  ) , $messag_email ); }
        }
    }

    if ( $q != "2" ){ 

        //save message in database
        global $wpdb;
    
        $messag_email_in_db = wp_json_encode( $messag_email );
        $messag_email_in_db = str_replace( '\\', 'RTQasB', $messag_email_in_db );
    
        if ( json_encode( $name_form_history) != true ){ 
            $name_form_history = wp_json_encode( $name_form_history );
            $name_form_history = str_replace( '\\', 'RTQasB', $name_form_history );
        }
    
        $name_in_db = wp_json_encode( $name_form_history );
        $name_in_db = str_replace( '\\', 'RTQasB',  $name_in_db );
    
        $name_form_history = sanitize_text_field($name_form_history);
        
        $type_message = '';
        if ( $spam_protect == 'spam-detect' ) {$type_message ='spam';}
        $wpdb->query( $wpdb->prepare( "INSERT INTO {$wpdb->base_prefix}quasarform_history ( `message`, `heading`, `data`, `payments` ) VALUES ( %s, %s, %s, %s )", $messag_email_in_db, $name_in_db, current_time( 'H:i Y-m-d'  ),$type_message  )); 
        //limit 30
        $array_history = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}quasarform_history where payments!='paymant'" ,  ARRAY_A );
        
        if (count($array_history) > 30){
            //delete row with lowest id
            $array_id = [];
            foreach ($array_history as $row){
                $array_id[] = $row['id'];
            }
            $wpdb->query("DELETE FROM {$wpdb->base_prefix}quasarform_history WHERE id = '".$array_id[0]."' ");
        }
    }
    else { $messag_email = $_POST['contentQform']; }
    
    //letter heading - reading short code [Form Name]
    preg_match_all('/\[.*?\]/' , $form_array_mail[1] , $array_skobki_name);
    foreach ( $array_skobki_name as $key => $value){
        foreach ( $value as $key2 => $value2){
            if ($value2=='[Form Name]'){  
                $form_array_mail[1] = str_replace( $value2,  $name_form_history , $form_array_mail[1] );
            }
        }
    }
    
    
    if ( $spam_protect != 'spam-detect' ){
            
        //method SMTP
        if ($form_array_mail[3]=='mailsmtp'){ 
            require (quasar_form_path.'lib/PHPMailer/PHPMailer.php'); 
            require (quasar_form_path.'lib/PHPMailer/SMTP.php');
            require (quasar_form_path.'lib/PHPMailer/Exception.php');
            
            $mail = new PHPMailer\PHPMailer\PHPMailer();
            try {
                $msg = "ok";
                $mail->isSMTP();   
                $mail->CharSet = "UTF-8";                                          
                $mail->SMTPAuth   = true;
                //mail password decoding
                $form_array_mail[9] = str_replace( "@TRDEEEQWGG", "/",  $form_array_mail[9] );
                $form_array_mail[9] = str_replace( "@RRRRDDDETGCDSW", "\\",  $form_array_mail[9] );
                $form_array_mail[9] = str_replace( "@PQWRTEADYY", "|",  $form_array_mail[9] );
                $form_array_mail[9] = str_replace( "@RRDDYESQWQOOJ", "<",  $form_array_mail[9] );
                $form_array_mail[9] = str_replace( "@ARWSFGGGGCDCSARYHB", ">",  $form_array_mail[9] );
                $form_array_mail[9] = str_replace( "@YTREWASCGNBFDSI", "'",  $form_array_mail[9] );
                $form_array_mail[9] = str_replace( "@GFDRHGFYHKJHG", '"',  $form_array_mail[9] );
                $form_array_mail[9] = str_replace( "@RRTTESVCGHNFDEWSHM", '&',  $form_array_mail[9] );
    
                // setting
                $mail->Host       = $form_array_mail[10]; // SMTP 
                $mail->Username   = $form_array_mail[8]; // login
                $mail->Password   = $form_array_mail[9]; // password
                $mail->SMTPSecure = 'ssl'; // ssl
                $mail->Port       = $form_array_mail[11];//port
                $mail->setFrom($form_array_mail[7], $form_array_mail[6]); // email and name 
                //address of the recipient
                //many mails
                if (preg_match("/,/", $form_array_mail[0])) {
                    $massivmail = explode(',' , $form_array_mail[0]);
                    foreach($massivmail as $key => $value){
                        $mail->addAddress($value); 
                    }
                    //for user copy message
                    if ( $copy_mail == 'yes' && $email_for_copy !='' ){
                        $mail->addAddress($email_for_copy);
                    }
                }
                //one mail
                else { 
                    $mail->addAddress($form_array_mail[0]);
                    //for user copy message
                    if ( $copy_mail == 'yes' && $email_for_copy !='' ){
                        $mail->addAddress($email_for_copy);
                    }
                }
                $str = '';
                // send file
                if (!empty($_FILES['file']['name'][0])) {
                    for ($ct = 0; $ct < count($_FILES['file']['tmp_name']); $ct++) {
                        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
                        $filename = $_FILES['file']['name'][$ct];
    
                        //weed out files with an invalid extension for phpmailer
                        $file_type = explode('.', $filename); 
                        $file_type = array_pop($file_type);//type this fail
                        $array_valid_file_extensions = explode(',' , $string_valid_file_extensions);
                        $valid = 0;
                        foreach  ( $array_valid_file_extensions as $value){
                            if ( $value == $file_type ) { 
                                $valid++; 
                                $str.=' 2 -'.$value; 
                            }
                        }
                        // validation file
                        if ( $valid > 0 ){
                            $str.=' 1 ';
                            if (move_uploaded_file($_FILES['file']['tmp_name'][$ct], $uploadfile)) {
                                $mail->addAttachment($uploadfile, $filename);
                            } 
                            else { $msg .= esc_html__('Could not attach file','quasar-form') . $uploadfile; }
                        }
                   }   
                }
                // message
                $mail->isHTML(true);
                $mail->Subject = $form_array_mail[1];//heading message
                $mail->Body    = $messag_email; //message
                
                 
                // sending status
                if ($mail->send()) { echo esc_html( $msg ); }
                else { echo esc_html__('Message was not sent. Your email settings are incorrect','quasar-form'); }
           } 
           catch (Exception $e) { echo esc_html__('Message was not sent. Cause of error','quasar-form').": {$mail->ErrorInfo}"; }
        }
        
        //method wp mail
        else {
            //for user copy message
            if ( $copy_mail == 'yes' && $email_for_copy !='' ){
                $form_array_mail[0].= ','.$email_for_copy;
            }
            $to = $form_array_mail[0];//email
            $subject = $form_array_mail[1]; //subject
            $headers = "Content-type: text/html; charset=UTF-8 \r\n";
            $headers .= 'From: '.$form_array_mail[4].' <'.$form_array_mail[5].'>' . "\r\n"; 
            $headers .= "MIME-Version: 1.0\r\n";
            //content message
            $body = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body>'; 
            $body .= $messag_email;
            $body .= '</body></html>';
            $body = $body."\r\n\r\n";
            $multipart = $body;
            $file = [];
            $q = 0;
            if (0 <count($_FILES) ) {
    	        if ( ! function_exists( 'wp_handle_upload' ) ) { require_once( ABSPATH . 'wp-admin/includes/file.php' ); }
    	        $uploadedfile = $_FILES['file'];
    	        $chislo = count($_FILES['file']);
    	        foreach($uploadedfile['name'] as $key => $value ){ 
    	            if ($uploadedfile['name'][$key]) {
                        $file2 = array(
                            'name'     => sanitize_file_name( $uploadedfile['name'][$key] ),
                            'type'     => esc_html( $uploadedfile['type'][$key] ),
                            'tmp_name' => esc_html( $uploadedfile['tmp_name'][$key] ),
                            'error'    => esc_html( $uploadedfile['error'][$key] ),
                            'size'     => $uploadedfile['size'][$key]
                        );
                        
                        //weed out files with an invalid extension for wp mail
                        $file_type = explode('.', $file2['name']); 
                        $file_type = array_pop($file_type);//type this fail
                        $array_valid_file_extensions = explode(',' , $string_valid_file_extensions);
                        $valid = 0;
                        foreach  ( $array_valid_file_extensions as $value){
                            if ( $value == $file_type ) { $valid++; }
                        }
                        // validation file
                        if ( $valid > 0 ){
                            //file upload
                            $overrides = [ 'test_form' => false ];
                            $movefile = wp_handle_upload($file2,$overrides);
                            $file[] = $movefile['file'];
                        }
    	            }
               }
            }
            wp_mail($to, $subject, $multipart ,  $headers, $file);
       }
    }
 } //end function quasar_form_send_mail
 
 //variables file
 $file = [];
 $filepath = '';
 $filename = '';

 //launch send function
 $to='';  
 $body=''; 
 $email= '';
 $quasar_form_idform ='';
 quasar_form_send_mail($to, $body, $email, $filepath ,$quasar_form_idform, $q  );
}

//remove form
function quasar_form_removeform(){
	// Check nonce 
    check_ajax_referer( 'q-ajax-nonce', 'nonce_code' ); 
    
    // Stop if the current user is not an admin or do not have administrative access
	if( ! current_user_can( 'manage_options' ) ) {
		die();
	}
    
    $removefunction = sanitize_text_field($_POST['removeform']);
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->base_prefix}quasarform_main WHERE id = '".$removefunction."' ");
    
    //automatic disabled of libraries
    automatic_disabled_libraries();
}


//remove message in history
function quasar_form_remove_message(){

	// Check nonce 
    check_ajax_referer( 'q-ajax-nonce', 'nonce_code' );
    
    // Stop if the current user is not an admin or do not have administrative access
	if( ! current_user_can( 'manage_options' ) ) {
		die();
	}
	
    $removefunction = sanitize_text_field($_POST['removemessage']);
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->base_prefix}quasarform_history WHERE id = '".$removefunction."' ");
    
    wp_die();
}
