<?php

$ip = $_SERVER['REMOTE_ADDR'];
$valid_array = ['64.4.248.23', '64.4.249.23', '66.211.168.91', '66.211.168.123', '173.0.84.66', '173.0.84.98', '173.0.88.66', '173.0.88.98',' 173.0.92.23', '173.0.93.23', '64.4.248.21', '64.4.249.21' ,'66.211.168.126', '173.0.84.101', '173.0.84.69', '173.0.88.101', '173.0.88.69', '173.0.92.21', '173.0.93.21', '173.0.81.65'];
    
$valid = 0;
foreach( $valid_array as $value) {
    if ( $value == $ip ){ $valid++; }
}
    
if ( $valid > 0 ){ $validation  = true; }
else { $validation = false; } 

//key
global $wpdb;
$quasar_form_option = $wpdb->get_results( "SELECT * FROM {$wpdb->base_prefix}quasarform_option WHERE id='1'", ARRAY_A  );
foreach($quasar_form_option as $row){
    $array_option = explode(";",$row['mainparams']);
}
$key = $array_option[5];
   
   


//validation 2
$custom = explode(';', $_POST['custom']);
if ( $key == $custom[1] ){

    //url page
    $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $url = explode('?', $url);
    $url = $url[0];
        
    $_POST['payment_date'] = str_replace('%3A',':', $_POST['payment_date'] );
    $_POST['business'] = str_replace('%40','@', $_POST['business'] );
    $string_payment = [
        "payment_status" => $_POST['payment_status'], 
        "summa" => $_POST['mc_gross'],
        "item_name" => $_POST['item_name'],
        "payment_date" => $_POST['payment_date'] , 
        "business" => $_POST['business'] ,
        "address_country" => $_POST['residence_country'],
        "quantity" => $_POST['quantity'],
        "first_name" => $_POST['first_name'],
        "last_name" => $_POST['last_name'],
        "currency" => $_POST['mc_currency'],
        'url_page' => $url,
        'id_form' => $custom[0],
        'validation' => $validation
    ];
    
    //save message in database
    $val = json_encode($string_payment);
    
    $wpdb->query( $wpdb->prepare( "INSERT INTO {$wpdb->base_prefix}quasarform_history ( `message`, `heading`, `data`,`payments` ) VALUES ( %s, %s, %s, %s )", $val, 'PayPal', current_time( 'H:i Y-m-d'  ), 'paymant' ));
    
    //30 message max
    $array_history = $wpdb->get_results("SELECT * FROM {$wpdb->base_prefix}quasarform_history where payments='paymant'" ,  ARRAY_A );
    if (count($array_history) > 30){;
        //delete row with lowest id
        $array_id = [];
        foreach ($array_history as $row){
            $array_id[] = $row['id'];
        }
        $wpdb->query("DELETE FROM {$wpdb->base_prefix}quasarform_history WHERE id = '".$array_id[0]."' ");
    }
    
    quasar_form_sendmail('2', $string_payment );

}
    


?>