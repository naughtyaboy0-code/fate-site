// Short texts for the public pages, shown in the visitor's browser language (English otherwise).
(function () {
  var T = {
    en: { tagline: "One hour with someone, anywhere in the world. Then it's gone.", terms: "Terms of Service", privacy: "Privacy Policy", contact: "Contact",
      confirmedTitle: "Your email is confirmed", confirmedBody: "Go back to the FATE app and log in.",
      resetTitle: "Reset your password", checking: "Checking the link…", enter: "Enter a new password.", placeholder: "New password (8+ characters)",
      change: "Change password", expired: "This link has expired or is invalid. Please request a new email from the app.",
      short: "Use at least 8 characters.", failed: "Couldn't change it: ", done: "Your password was changed. Go back to the FATE app and log in." },
    ja: { tagline: "世界のだれかと、1時間だけ。そして消える。", terms: "利用規約", privacy: "プライバシーポリシー", contact: "お問い合わせ",
      confirmedTitle: "メールアドレスを確認しました", confirmedBody: "FATEのアプリに戻って、ログインしてください。",
      resetTitle: "パスワードの再設定", checking: "リンクを確認しています…", enter: "新しいパスワードを入力してください。", placeholder: "新しいパスワード(8文字以上)",
      change: "変更する", expired: "リンクの有効期限が切れているか、正しくありません。アプリからもう一度メールを送ってください。",
      short: "8文字以上にしてください。", failed: "変更できませんでした：", done: "パスワードを変更しました。FATEのアプリに戻ってログインしてください。" },
    ko: { tagline: "세계 어딘가의 누군가와 단 한 시간. 그리고 사라져요.", terms: "이용약관", privacy: "개인정보 처리방침", contact: "문의하기",
      confirmedTitle: "이메일이 확인되었어요", confirmedBody: "FATE 앱으로 돌아가 로그인해 주세요.",
      resetTitle: "비밀번호 재설정", checking: "링크를 확인하고 있어요…", enter: "새 비밀번호를 입력해 주세요.", placeholder: "새 비밀번호 (8자 이상)",
      change: "변경하기", expired: "링크가 만료되었거나 올바르지 않아요. 앱에서 메일을 다시 요청해 주세요.",
      short: "8자 이상으로 입력해 주세요.", failed: "변경하지 못했어요: ", done: "비밀번호를 변경했어요. FATE 앱으로 돌아가 로그인해 주세요." },
    "zh-Hans": { tagline: "和世界某处的某个人，只聊一小时。然后消失。", terms: "服务条款", privacy: "隐私政策", contact: "联系我们",
      confirmedTitle: "邮箱已确认", confirmedBody: "请回到 FATE 应用登录。",
      resetTitle: "重置密码", checking: "正在验证链接…", enter: "请输入新密码。", placeholder: "新密码（至少 8 位）",
      change: "修改密码", expired: "链接已过期或无效。请在应用中重新发送邮件。",
      short: "请至少输入 8 位。", failed: "修改失败：", done: "密码已修改。请回到 FATE 应用登录。" },
    "zh-Hant": { tagline: "和世界某處的某個人，只聊一小時。然後消失。", terms: "服務條款", privacy: "隱私權政策", contact: "聯絡我們",
      confirmedTitle: "電子郵件已確認", confirmedBody: "請回到 FATE App 登入。",
      resetTitle: "重設密碼", checking: "正在驗證連結…", enter: "請輸入新密碼。", placeholder: "新密碼（至少 8 位）",
      change: "變更密碼", expired: "連結已過期或無效。請在 App 中重新寄送郵件。",
      short: "請至少輸入 8 位。", failed: "變更失敗：", done: "密碼已變更。請回到 FATE App 登入。" },
    es: { tagline: "Una hora con alguien, en cualquier parte del mundo. Luego desaparece.", terms: "Términos del servicio", privacy: "Política de privacidad", contact: "Contacto",
      confirmedTitle: "Tu correo está confirmado", confirmedBody: "Vuelve a la app FATE e inicia sesión.",
      resetTitle: "Restablece tu contraseña", checking: "Comprobando el enlace…", enter: "Escribe una contraseña nueva.", placeholder: "Contraseña nueva (mínimo 8)",
      change: "Cambiar contraseña", expired: "El enlace caducó o no es válido. Pide un correo nuevo desde la app.",
      short: "Usa al menos 8 caracteres.", failed: "No se pudo cambiar: ", done: "Tu contraseña se cambió. Vuelve a la app FATE e inicia sesión." },
    pt: { tagline: "Uma hora com alguém, em qualquer lugar do mundo. Depois, some.", terms: "Termos de Uso", privacy: "Política de Privacidade", contact: "Contato",
      confirmedTitle: "Seu e-mail foi confirmado", confirmedBody: "Volte ao app FATE e entre.",
      resetTitle: "Redefina sua senha", checking: "Verificando o link…", enter: "Digite uma nova senha.", placeholder: "Nova senha (mínimo 8)",
      change: "Alterar senha", expired: "O link expirou ou é inválido. Peça um novo e-mail pelo app.",
      short: "Use pelo menos 8 caracteres.", failed: "Não foi possível alterar: ", done: "Sua senha foi alterada. Volte ao app FATE e entre." },
    fr: { tagline: "Une heure avec quelqu'un, n'importe où dans le monde. Puis tout disparaît.", terms: "Conditions d'utilisation", privacy: "Politique de confidentialité", contact: "Contact",
      confirmedTitle: "Ton e-mail est confirmé", confirmedBody: "Reviens dans l'app FATE et connecte-toi.",
      resetTitle: "Réinitialise ton mot de passe", checking: "Vérification du lien…", enter: "Saisis un nouveau mot de passe.", placeholder: "Nouveau mot de passe (8 min.)",
      change: "Changer le mot de passe", expired: "Ce lien a expiré ou n'est pas valide. Redemande un e-mail depuis l'app.",
      short: "Utilise au moins 8 caractères.", failed: "Impossible de le changer : ", done: "Ton mot de passe a été changé. Reviens dans l'app FATE et connecte-toi." },
    de: { tagline: "Eine Stunde mit jemandem, irgendwo auf der Welt. Dann ist es vorbei.", terms: "Nutzungsbedingungen", privacy: "Datenschutzerklärung", contact: "Kontakt",
      confirmedTitle: "Deine E-Mail ist bestätigt", confirmedBody: "Geh zurück zur FATE-App und melde dich an.",
      resetTitle: "Passwort zurücksetzen", checking: "Link wird geprüft…", enter: "Gib ein neues Passwort ein.", placeholder: "Neues Passwort (mind. 8 Zeichen)",
      change: "Passwort ändern", expired: "Der Link ist abgelaufen oder ungültig. Fordere in der App eine neue E-Mail an.",
      short: "Mindestens 8 Zeichen.", failed: "Ändern fehlgeschlagen: ", done: "Dein Passwort wurde geändert. Geh zurück zur FATE-App und melde dich an." },
    id: { tagline: "Satu jam dengan seseorang, di mana pun di dunia. Lalu hilang.", terms: "Ketentuan Layanan", privacy: "Kebijakan Privasi", contact: "Kontak",
      confirmedTitle: "Email kamu sudah dikonfirmasi", confirmedBody: "Kembali ke aplikasi FATE dan masuk.",
      resetTitle: "Atur ulang kata sandi", checking: "Memeriksa tautan…", enter: "Masukkan kata sandi baru.", placeholder: "Kata sandi baru (min. 8)",
      change: "Ubah kata sandi", expired: "Tautan sudah kedaluwarsa atau tidak valid. Minta email baru dari aplikasi.",
      short: "Gunakan minimal 8 karakter.", failed: "Gagal mengubah: ", done: "Kata sandimu sudah diubah. Kembali ke aplikasi FATE dan masuk." },
    th: { tagline: "หนึ่งชั่วโมงกับใครสักคน ที่ไหนก็ได้ในโลก แล้วทุกอย่างก็หายไป", terms: "ข้อกำหนดการใช้งาน", privacy: "นโยบายความเป็นส่วนตัว", contact: "ติดต่อ",
      confirmedTitle: "ยืนยันอีเมลแล้ว", confirmedBody: "กลับไปที่แอป FATE แล้วเข้าสู่ระบบ",
      resetTitle: "รีเซ็ตรหัสผ่าน", checking: "กำลังตรวจสอบลิงก์…", enter: "กรอกรหัสผ่านใหม่", placeholder: "รหัสผ่านใหม่ (อย่างน้อย 8 ตัว)",
      change: "เปลี่ยนรหัสผ่าน", expired: "ลิงก์หมดอายุหรือไม่ถูกต้อง โปรดขออีเมลใหม่จากแอป",
      short: "ใช้อย่างน้อย 8 ตัวอักษร", failed: "เปลี่ยนไม่สำเร็จ: ", done: "เปลี่ยนรหัสผ่านแล้ว กลับไปที่แอป FATE แล้วเข้าสู่ระบบ" },
    vi: { tagline: "Một giờ với ai đó, ở bất cứ đâu trên thế giới. Rồi biến mất.", terms: "Điều khoản dịch vụ", privacy: "Chính sách quyền riêng tư", contact: "Liên hệ",
      confirmedTitle: "Email của bạn đã được xác nhận", confirmedBody: "Hãy quay lại ứng dụng FATE và đăng nhập.",
      resetTitle: "Đặt lại mật khẩu", checking: "Đang kiểm tra liên kết…", enter: "Nhập mật khẩu mới.", placeholder: "Mật khẩu mới (ít nhất 8 ký tự)",
      change: "Đổi mật khẩu", expired: "Liên kết đã hết hạn hoặc không hợp lệ. Hãy yêu cầu email mới trong ứng dụng.",
      short: "Dùng ít nhất 8 ký tự.", failed: "Không đổi được: ", done: "Đã đổi mật khẩu. Hãy quay lại ứng dụng FATE và đăng nhập." }
  };
  var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"]);
  var pick = "en";
  for (var i = 0; i < langs.length; i++) {
    var l = String(langs[i]);
    if (/^zh/i.test(l)) { pick = /(Hant|TW|HK|MO)/i.test(l) ? "zh-Hant" : "zh-Hans"; break; }
    var code = l.split("-")[0].toLowerCase();
    if (T[code]) { pick = code; break; }
  }
  window.FATE_LANG = pick;
  window.t = function (k) { return (T[pick] && T[pick][k]) || T.en[k] || k; };
  document.documentElement.lang = pick;
  document.addEventListener("DOMContentLoaded", function () {
    var nodes = document.querySelectorAll("[data-t]");
    for (var j = 0; j < nodes.length; j++) nodes[j].textContent = window.t(nodes[j].getAttribute("data-t"));
    var ph = document.querySelectorAll("[data-t-placeholder]");
    for (var k = 0; k < ph.length; k++) ph[k].placeholder = window.t(ph[k].getAttribute("data-t-placeholder"));
    // legal pages: Japanese visitors get the Japanese version
    var legal = document.querySelectorAll("a[data-legal]");
    for (var m = 0; m < legal.length; m++) legal[m].href = legal[m].getAttribute("data-legal") + (pick === "ja" ? "-ja" : "") + ".html";
  });
})();
