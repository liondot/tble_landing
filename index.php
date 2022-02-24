<?php

header("Content-Type: text/html; charset=UTF-8");

if(empty($_POST['company']) ||
empty($_POST['area']) ||
empty($_POST['name']) ||
empty($_POST['number']) ||
empty($_POST['message'])) {
    echo "<meta http-equiv-\"Content-Type\" content=\"text/html;charset=utf-8\" /> <script>
    window.alert('빠짐없이 입력해 주세요 :)');
    </script>";
    return false;
}

$company = strip_tags(htmlspecialchars($_POST['company']));
$area = strip_tags(htmlspecialchars($_POST['area']));
$name = strip_tags(htmlspecialchars($_POST['name']));
$number = strip_tags(htmlspecialchars($_POST['number']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = 'yoon3315.5@gmail.com'; //받는 측의 이메일 주소를 기입하는 부분
$from = 'informant';
$email_subject = "$name"; //메일 제목에 해당하는 부분
$email_body = "본 메일은 000에서 전송된 이메일입니다.\n"."세부내용은 다음과 같습니다. \n\nName: $name\n\nTel: $telnumber"
$headers = "From : $from"; //답장주소

mail($to, `=?UTF-8?B?`.base64_encode($email_subject).`?=`, $email_body, $headers);

if(!$name){
    echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=uft-8\" /> <script>
    window.alert('아이쿠! 다시 입력해 주세요');
    </script>";

} else {
    echo "<script>
    window.alert('문의해 주셔서 감사합니다 :)');
    parent.document.getElementById('my-form').reset();
    </script>";
}

?>