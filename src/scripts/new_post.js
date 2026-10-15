$(function () {
  const $row = $("#code-buttons");
  const $header = $("#code-buttons-header");

  $header.find(".pformstrip").text("Markdown");

  const bold = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bold preview-icon"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg>`;

  const italics = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-italic preview-icon"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>`;

  const strike = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-strikethrough preview-icon"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" x2="20" y1="12" y2="12"/></svg>`;

  const link = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link preview-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  const image = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image preview-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`;

  const sms = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square preview-icon"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>`;

  const emoji = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-face-slightly-smiling preview-icon"><path d="M15 10V9"/><path d="M16.472 15a6 6 0 01-8.943 0"/><path d="M9 10V9"/><circle cx="12" cy="12" r="10"/></svg>`;

  $row.html(`
    <td colspan="2" class="pformright">
      <div class="markdown-toolbar">
        <div class="markdown-actions">
        <button type="button" data-md="bold" title="Bold">${bold}</button>
        <button type="button" data-md="italic" title="Italic">${italics}</button>
        <button type="button" data-md="strike" title="Strikethrough">${strike}</button>
        <button type="button" data-md="link" title="Link">${link}</button>
    <span class="md-sep"></span>
        <button type="button" data-md="image" title="Image">${image}</button>
      </div>
    <div class="bbcode-actions">
      <button type="button" data-md="texting" title="Texting">${sms}</button>
      <span class="md-sep"></span>
        <button type="button" popovertarget="emojitool" title="Emoji picker">${emoji}</button>
    </div>
    </div>
    </td>
  `);

  const formats = {
    bold: ["**", "**"],
    italic: ["*", "*"],
    strike: ["~~", "~~"],
    link: ["[", "](https://)"],
    quote: ["> ", ""],
    code: ["\`", "\`"],
    image: ["![", "](https://)"],
  };

  $row.on("click", "[data-md]", function () {
    const textarea = document.forms["REPLIER"]?.elements["Post"];
    if (!textarea) return;

    const format = formats[this.dataset.md];
    if (!format) return;

    const [before, after] = format;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.slice(start, end);

    // Insert Markdown
    textarea.setRangeText(before + selected + after, start, end);

    // Focus and position cursor
    textarea.focus();
    textarea.setSelectionRange(
      start + before.length,
      start + before.length + selected.length,
    );
  });

  $(document.forms["REPLIER"]?.elements["Post"]).on("keydown", function (e) {
    const shortcuts = {
      b: "bold",
      i: "italic",
      k: "link",
    };

    if (!(e.ctrlKey || e.metaKey) || e.repeat) return;

    const action = shortcuts[e.key.toLowerCase()];
    if (!action) return;

    e.preventDefault();

    $row.find(`[data-md="${action}"]`).trigger("click");
  });
});

$(function () {
  const $row = $("#enter-your-post");

  $row.find("td.pformleft").remove();
  $row.find("td.pformright").attr("colspan", "2");
});

$(function () {
  const $row = $("#post-options");
  if (!$row.length) return;

  const $cell = $row.find("td.pformright");
  const $track = $cell.find('input[name="enabletrack"]');

  // No tracking option? Remove the entire row.
  if (!$track.length) {
    $row.remove();
    return;
  }

  // Preserve the actual Jcink checkbox.
  $track.detach();

  $cell
    .empty()
    .append($("<label>").append($track).append(" Notify me of replies"));
});
