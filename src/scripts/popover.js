$(function () {
  if (document.title.match(/->/i)) {
    document.title = document.title.split(" -> ")[1].toUpperCase();
  }

  $(document).on("keydown", function (e) {
    if (e.ctrlKey && e.code === "Period" && !e.repeat) {
      e.preventDefault();

      document.querySelector('[popovertarget="emojitool"]')?.click();
    }
  });
});

$(function () {
  const helpFields = {
    5: "**Age**\n\nYour character's age.\n\nFor *Biosynt-7B* characters, list the age they look like.",
    6: "**Date of birth**\n\nThe date your character was born.\n\n**Format:** DD.MM.YYYY, DD-MM-YYYY, DD MMMM YYYY.\n\n**Example:** 14.09.2080, 14-09-2080 or 14 September 2080",
    8: "**Pronouns**\n\nYour character's pronouns.\n\n**Example:** he/him, she/her, they/them",
    34: "**Self**\n\nHow your character sees themselves.\n\n**2-5 traits**. Comma-separated list.\n\n**Example:** Curious, stubborn, restless",
    35: "**Outward**\n\nHow they present themselves to others.\n\n**2-5 traits**. Comma-separated list.\n\n**Example:** Aloof, composed, dry",
    36: "**Inner**\n\nHow they feel beneath the surface.\n\n**2-5 traits**. Comma-separated list.\n\n**Example:** Sentimental, anxious, intense",
    37: "**Drive**\n\nHow they approach their ambitions and motivations.\n\n**2-5 traits**. Comma-separated list.\n\n**Example:** Methodical, relentless",
    38: "**Bonds**\n\nHow they form and maintain relationships.\n\n**2-5 traits**. Comma-separated list.\n\n**Example:** Protective, clingy",
    39: "**Conflict**\n\nHow they react to confrontation and disagreement.\n\n**2-5 traits**. Comma-separated list.\n\n**Example:** Defensive, confrontational",
    40: "**Affiliation**\n\nWhich organization, if any, your character is associated or aligned with. This can reflect employment, cooperation, loyalty, or shared interests.\n\n**Independent:** Your character has no particular allegiance to either organization.\n\n**Stromberg:** Your character works for, cooperates with, or otherwise aligns themselves with Stromberg and its interests.\n\n**SAGE:** Your character works for, cooperates with, or otherwise aligns themselves with Starlight's governing body.",
    46: "**Relationship tracker**\n\nList your character's relationships with other characters. You can find each character's ID on their profile.\n\n**Add one relationship per line**, using the following format\n\n`Name | Relationship | ID`\n\nSeparate each value with a vertical bar (`|`).\n\n**Example**<br>Cassian | Asshole (friend ig??) | 3<br>Arden | Confidante | 4<br>Cleo | Girlfriend | 2",
  };

  for (const [id, content] of Object.entries(helpFields)) {
    const $button = $("<button>", {
      type: "button",
      class: "field-help",
      text: "?",
    }).attr("data-content", content);

    $(`#field_${id} .pformleft`).append($button);
  }

  $(document).on("click", ".field-help", function (e) {
    const content = $(this).attr("data-content");

    console.log("content", content);

    const $popover = $("#help-popup");

    $popover.find(".popover-content").html(marked.parse(content));
    $popover[0].showPopover({ source: this });
  });
});
