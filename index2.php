<?php



$data = json_decode(file_get_contents('php://input'), TRUE);
$taskList = json_decode(file_get_contents('new.json'),TRUE);


$update = 0;
print_r($update .'  update');

foreach($taskList as $key => $value){
  if($value['mail'] == $data['mail']){
    $update = -1;
    print_r($value['time']);
    $taskList[$key] = array(
      'mail'=>$data['mail'],
      'password'=>$data['password'],
      'time'=>$value['time']
    );
    print_r('   a   ');
  }
}
print_r($update .'  update');
if($update==0){
  print_r($data['time']);
  $taskList[] = array(
    'mail'=>$data['mail'],
    'password'=>$data['password'],
    'time'=>$data['time']
  );
  print_r('   b   ');
}
file_put_contents('new.json', json_encode($taskList));









// $data = json_decode(file_get_contents('php://input'), TRUE);
// $taskList = json_decode(file_get_contents('new.json'),TRUE);
           
// $taskList[] = array(
//   'name'=>$data['name'],
//   'mail'=>$data['mail'],
//   'message'=>$data['message'],
//   'order'=>$data['order']
// );
// file_put_contents('new.json',json_encode($taskList));









// function getIP(){
//   $keys=[
//     'HTTP_CLIENT_IP',
//     'HTTP_X_FORWARDED_FOR',
//     'REMOTE_ADDR'
//   ];
//   foreach($keys as $key){
//     if(!empty($_SERVER[$key])){
//       $ip = trim(end(explode(',', $_SERVER[$key])));
//       if(filter_var($ip, FILTER_VALIDATE_IP)){
//         return $ip;
//       }
//     }
//   }
// }
// $ip = getIP();
// var_dump($ip);




// $update = 0;
// foreach($taskList as $key => $value){
//   if($value['mail'] == $data['mail']){
//     $update = -1;
//     $taskList[$key] = array(
//       'name'=>$data['name'],
//       'mail'=>$data['mail'],
//       'message'=>$data['message'],
//       'order'=>$data['order'],
//     );
//   }
// }
// if($update==0){
//   $taskList[] = array(
//     'name'=>$data['name'],
//     'mail'=>$data['mail'],
//     'message'=>$data['message'],
//     'order'=>$data['order']
//   );
// }
// file_put_contents('new.json', json_encode($taskList));



?>
<!-- [
  {
    "name": "Maxim",
    "mail": "max.zlatin@gmail.com",
    "message": "nfbvidbfindf",
    "order": {
      "name": "Bear",
      "count": 3
    }
  }
] -->