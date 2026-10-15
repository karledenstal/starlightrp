import "./popover.js";
import "./dialog.js";
import "./registration.js";
import "./new_post.js";
import "./markdown.js";

$(function () {
  const headers = {
    3: "Identity",
    11: "Appearance",
    16: "Visual",
    21: "Intimacy",
    28: "Personality Chart",
    34: "Personality Spread",
    41: "Family",
    46: "Orbit",
    47: "Player",
  };

  for (const [id, title] of Object.entries(headers)) {
    const $header = $("<tr>").append(
      $("<td>", {
        colspan: 2,
        class: "pformstrip",
        style: "display:table-cell",
      }).append(
        $("<div>", {
          class: "profile-section-header",
          text: title,
        }),
      ),
    );

    $(`#field_${id}`).before($header);
  }
});
