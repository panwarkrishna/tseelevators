<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']); exit();
}

require_once __DIR__ . '/Exception.php';
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$input    = json_decode(file_get_contents('php://input'), true);
$name     = htmlspecialchars($input['name']     ?? '');
$email    = htmlspecialchars($input['email']    ?? '');
$business = htmlspecialchars($input['business'] ?? '');
$phone    = htmlspecialchars($input['phone']    ?? '');
$message  = htmlspecialchars($input['message']  ?? '');
$date     = date('d M Y, h:i A');

if (!$name || !$email || !$business || !$phone || !$message) {
    echo json_encode(['success' => false, 'message' => 'All fields required']); exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email']); exit();
}

$gmailUser = "aditechinfo4@gmail.com";
$gmailPass = "fust ufzs hdjz hdyo";

function sendMail($gmailUser, $gmailPass, $to, $subject, $htmlBody, $replyTo = '') {
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $gmailUser;
        $mail->Password   = $gmailPass;
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;
        $mail->setFrom($gmailUser, 'Aditech Info');
        $mail->addAddress($to);
        if ($replyTo) $mail->addReplyTo($replyTo);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}

// ============ OWNER EMAIL ============
$ownerHtml = "
<table width='100%' cellpadding='0' cellspacing='0' style='max-width:600px;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;'>
  <tr><td style='background:#3B3BFF;padding:28px 32px;text-align:center;'>
    <div style='font-size:22px;font-weight:700;color:#fff;'>Aditech Info</div>
    <div style='font-size:13px;color:rgba(255,255,255,0.75);margin-top:4px;'>New Contact Form Submission</div>
  </td></tr>
  <tr><td style='padding:28px 32px;background:#fff;'>
    <div style='background:#F0F0FF;border-left:4px solid #3B3BFF;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:24px;'>
      <div style='font-size:13px;color:#5555BB;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px;'>New Enquiry Received</div>
      <div style='font-size:15px;color:#1a1a1a;font-weight:600;'>$name from $business wants to connect</div>
    </div>
    <table width='100%' cellpadding='0' cellspacing='0'>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'>
        <table width='100%'><tr>
          <td style='font-size:13px;color:#666;width:120px;'>&#128100; Name</td>
          <td style='font-size:14px;font-weight:600;color:#1a1a1a;'>$name</td>
        </tr></table>
      </td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'>
        <table width='100%'><tr>
          <td style='font-size:13px;color:#666;width:120px;'>&#128231; Email</td>
          <td style='font-size:14px;color:#3B3BFF;'>$email</td>
        </tr></table>
      </td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'>
        <table width='100%'><tr>
          <td style='font-size:13px;color:#666;width:120px;'>&#127970; Business</td>
          <td style='font-size:14px;font-weight:600;color:#1a1a1a;'>$business</td>
        </tr></table>
      </td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'>
        <table width='100%'><tr>
          <td style='font-size:13px;color:#666;width:120px;'>&#128222; Phone</td>
          <td style='font-size:14px;color:#1a1a1a;'>$phone</td>
        </tr></table>
      </td></tr>
      <tr><td style='padding:10px 0;'>
        <div style='font-size:13px;color:#666;margin-bottom:8px;'>&#128172; Message</div>
        <div style='background:#f7f7f7;border-radius:8px;padding:14px 16px;font-size:14px;color:#333;line-height:1.6;'>$message</div>
      </td></tr>
    </table>
    <div style='margin-top:24px;margin-bottom:20px;padding:14px 18px;background:#f7f7f7;border-radius:8px;display:flex;justify-content:space-between;align-items:center;'>
      <span style='font-size:12px;color:#999;'>&#128197; $date</span>
    </div>
    <a href='mailto:$email' style='display:inline;justify-content:center;background:#3B3BFF;color:#fff;text-decoration:none;padding:8px 18px;border-radius:6px;font-size:13px;font-weight:600;'>Reply Now &rarr;</a>
  </td></tr>
  <tr><td style='background:#f7f7f7;padding:16px 32px;text-align:center;border-top:1px solid #e5e5e5;'>
    <div style='font-size:12px;color:#999;'>Aditech Info &middot; Uttam Nagar, New Delhi - 110059</div>
    <div style='font-size:12px;color:#999;margin-top:2px;'>+91-98107-58829 &middot; info@aditechinfo.com</div>
  </td></tr>
</table>";

// ============ CUSTOMER EMAIL ============
$customerHtml = "
<table width='100%' cellpadding='0' cellspacing='0' style='max-width:600px;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;'>
  <tr><td style='background:#3B3BFF;padding:28px 32px;text-align:center;'>
    <div style='font-size:22px;font-weight:700;color:#fff;'>Aditech Info</div>
    <div style='font-size:13px;color:#fff!important;margin-top:4px;'>aditechinfo.com</div>
  </td></tr>
  <tr><td style='padding:32px 32px 24px;background:#fff;text-align:center;'>
    <div style='font-size:20px;font-weight:700;color:#1a1a1a;margin-bottom:8px;'>Thank you, $name!</div>
    <div style='font-size:15px;color:#555;line-height:1.6;max-width:380px;margin:0 auto;'>We have received your enquiry and our team will get back to you within <strong>24 hours</strong>.</div>
  </td></tr>
  <tr><td style='padding:0 32px 24px;background:#fff;'>
    <div style='background:#F0F0FF;border-radius:10px;padding:18px 20px;'>
      <div style='font-size:13px;font-weight:600;color:#5555BB;margin-bottom:14px;text-transform:uppercase;letter-spacing:0.5px;'>Your submission details</div>
      <table width='100%' cellpadding='0' cellspacing='0' style='font-size:13px;'>
        <tr><td style='color:#666;padding:5px 0;width:100px;'>Name</td><td style='color:#1a1a1a;font-weight:600;'>$name</td></tr>
        <tr><td style='color:#666;padding:5px 0;'>Business</td><td style='color:#1a1a1a;font-weight:600;'>$business</td></tr>
        <tr><td style='color:#666;padding:5px 0;'>Phone</td><td style='color:#1a1a1a;'>$phone</td></tr>
        <tr><td style='color:#666;padding:5px 0;vertical-align:top;'>Message</td><td style='color:#555;line-height:1.5;'>$message</td></tr>
      </table>
    </div>
  </td></tr>
  <tr><td style='padding:0 32px 28px;background:#fff;'>
    <div style='border:1px solid #e5e5e5;border-radius:10px;padding:18px 20px;'>
      <div style='font-size:13px;font-weight:600;color:#1a1a1a;margin-bottom:12px;'>Get in touch directly</div>
      <table width='100%' style='font-size:13px;'>
        <tr><td style='color:#666;padding:4px 0;'>&#128222; Phone</td><td style='color:#3B3BFF;'>+91-98107-58829</td></tr>
        <tr><td style='color:#666;padding:4px 0;'>&#128231; Email</td><td style='color:#3B3BFF;'>info@aditechinfo.com</td></tr>
        <tr><td style='color:#666;padding:4px 0;'>&#127760; Website</td><td style='color:#3B3BFF;'>aditechinfo.com</td></tr>
      </table>
    </div>
  </td></tr>
  <tr><td style='background:#f7f7f7;padding:16px 32px;text-align:center;border-top:1px solid #e5e5e5;'>
    <div style='font-size:12px;color:#999;'>&copy; 2026 Aditech Info &middot; Uttam Nagar, New Delhi - 110059</div>
    <div style='font-size:12px;color:#bbb;margin-top:4px;'>You received this because you submitted a contact form on our website.</div>
  </td></tr>
</table>";

$adminSent = sendMail($gmailUser, $gmailPass, "aditechinfo4@gmail.com",
    "New Enquiry: $name ($business)", $ownerHtml, $email);

sendMail($gmailUser, $gmailPass, $email,
    "We received your enquiry AditechInfo", $customerHtml);

echo json_encode(['success' => $adminSent]);
?>