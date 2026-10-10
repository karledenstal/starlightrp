$(function () {
  marked.use({
    gfm: true,
    tables: true,
    breaks: false,
  });

  $(".markdown").each(function () {
    let raw = $(this).html();

    // 0) FIX BLOCKQUOTES FIRST
    raw = raw.replace(/>/g, ">");

    /* ---------------------------------------------
     * 1) LINE BREAK HANDLING (Jcink <br> → markdown)
     * --------------------------------------------- */

    raw = raw.replace(/(<br\s*\/?>\s*){2,}/gi, "\n\n");
    raw = raw.replace(/<br\s*\/?>/gi, "  \n");

    /* ---------------------------------------------
     * 2) IMAGE SHORTHAND: !url → ![](url)
     * --------------------------------------------- */

    raw = raw.replace(/!https?:\/\/\S+/g, (match) => {
      const url = match.slice(1);
      return `![](${url})`;
    });

    /* ---------------------------------------------
     * 3) PROTECT TABLE LINES BEFORE TYPOGRAPHY
     * --------------------------------------------- */

    const tableLines = [];
    raw = raw.replace(/^\s*\|.*\|\s*$/gm, (line) => {
      tableLines.push(line);
      return `__TABLE_LINE_${tableLines.length - 1}__`;
    });

    /* ---------------------------------------------
     * 4) SMART TYPOGRAPHY (curly quotes, ellipsis, dashes)
     * --------------------------------------------- */

    raw = raw
      .replace(/---/g, "—") // em dash
      .replace(/--/g, "–") // en dash
      .replace(/\.{3}/g, "…") // ellipsis
      .replace(/"([^"]*)"/g, "“$1”") // curly double quotes
      .replace(/'([^']*)'/g, "‘$1’") // curly single quotes
      .replace(/(\w)'(\w)/g, "$1’$2"); // apostrophes in words

    /* ---------------------------------------------
     * 5) RESTORE TABLE LINES AFTER TYPOGRAPHY
     * --------------------------------------------- */

    raw = raw.replace(/__TABLE_LINE_(\d+)__/g, (_, i) => tableLines[i]);

    /* ---------------------------------------------
     * 7) EMOJI AUTOCORRECT
     * --------------------------------------------- */

    const emojiMap = {
      ":)": "🙂",
      ":(": "☹️",
      ":D": "😄",
      ";)": "😉",
      ":P": "😛",
      ":o": "😮",
      ":O": "😮",
      ":|": "😐",
      ":'(": "😢",
      "<3": "❤️",
      "</3": "💔",
    };

    for (const [key, value] of Object.entries(emojiMap)) {
      const safeKey = key.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$&");
      raw = raw.replace(new RegExp(safeKey, "g"), value);
    }

    raw = raw.replace(/(?<![a-zA-Z]):\//g, "😕");

    /* ---------------------------------------------
     * 8) FINAL PREP + MARKDOWN PARSE
     * --------------------------------------------- */

    raw = raw.trim();
    const html = marked.parse(raw);
    $(this).html(html);
  });
});
