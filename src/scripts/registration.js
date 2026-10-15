$(function () {
  const $registration = $("#registration-form");
  const $pad = $registration.find(".tablepad");

  $('form[name="REG"]')
    .contents()
    .filter(
      (_, node) =>
        node.nodeType === 3 && node.textContent.includes("Please ensure"),
    )
    .remove();
  // Grab the original fieldsets
  const $username = $registration
    .find("fieldset:has(#registered-name-checkeh)")
    .detach();
  const $password = $registration.find("fieldset:has(#password-one)").detach();
  const $email = $registration.find("fieldset:has(#email-one)").detach();
  const $alias = $registration.find('fieldset:has([name="field_1"])').detach();
  const $playby = $registration.find('fieldset:has([name="field_2"])').detach();
  const $captcha = $registration.find("fieldset:has(.g-recaptcha)").detach();

  const $emailPrefs = $registration
    .find('fieldset:has([name="allow_admin_mail"])')
    .detach();
  const $timezone = $registration
    .find('fieldset:has([name="time_offset"])')
    .detach();

  // Preserve the original agreement and submit controls
  const $agreement = $registration
    .find('input[name="agree"]')
    .closest(".desc")
    .detach();
  const $submit = $registration.find('input[type="submit"]').detach();

  // Replace the legacy layout
  $pad.empty().append(
    $("<div>", { class: "registration-layout" }).append(
      $("<section>", { class: "registration-section" }).append(
        $("<h3>").text("Account Details"),
        $username,
        $password,
        $email,
      ),

      $("<section>", { class: "registration-section" }).append(
        $("<h3>").text("Character Details"),
        $alias,
        $playby,
      ),

      $("<section>", { class: "registration-section" }).append(
        $("<h3>").text("Preferences"),
        $emailPrefs,
        $timezone,
      ),

      $("<section>", { class: "registration-section" }).append(
        $("<h3>").text("Verification"),
        $captcha,
        $agreement,
        $submit,
      ),
    ),
  );
});
