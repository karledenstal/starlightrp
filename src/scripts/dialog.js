$(function () {
  const $dialog = $("#starlight-dialog");
  const dialog = $dialog[0];
  const $body = $dialog.find(".dialog-body");
  const $search = $dialog.find(".input-search");

  let searchIndex = [];

  $dialog.on("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  window.openStarlightDialog = async function () {
    $body.empty();
    $search.val("");

    if (!dialog.open) {
      dialog.showModal();
    }

    $search.trigger("focus");

    try {
      const [lore, characters] = await Promise.all([
        getLoreIndex(),
        getCharacters(),
      ]);

      searchIndex = [
        ...lore.map((page) => ({
          ...page,
          type: "lore",
        })),
        ...characters,
      ];

      const $cards = searchIndex.map((entry, index) => {
        const $card = $("<div>", {
          class: `result-card result-${entry.type}`,
          "data-index": index,
        });

        if (entry.type === "character") {
          $card.hide();
        }

        $("<a>", {
          class: "entry-title",
          href: entry.url || "#",
          text: entry.title,
        }).appendTo($card);

        $("<div>", {
          class: "tags",
        })
          .append($("<strong>").text("Tags: "))
          .append(document.createTextNode((entry.keywords ?? []).join(", ")))
          .appendTo($card);

        return $card;
      });

      $body.empty().append($cards);
    } catch (error) {
      console.error("Failed to load search index:", error);
      $body.text("Failed to load search results.");
    }
  };

  $dialog.find(".dialog-close").on("click", () => dialog.close());

  $(document).on("keydown", function (e) {
    if ($(e.target).is('textarea[name="Post"]')) return;
    if (e.ctrlKey && e.key.toLowerCase() === "k" && !e.repeat) {
      e.preventDefault();
      openStarlightDialog();
    }
  });

  $search.on("input", function () {
    const query = $(this).val().trim();
    const results = new Set(searchEntries(searchIndex, query));

    $body.find(".result-card").each(function () {
      const $card = $(this);
      const entry = searchIndex[$card.data("index")];

      const matches =
        (query !== "" || entry.type === "lore") && results.has(entry);

      if (matches) {
        if (!$card.is(":visible")) {
          $card.stop(true, true).slideDown(150);
        }
      } else {
        if ($card.is(":visible")) {
          $card.stop(true, true).slideUp(150);
        }
      }
    });
  });
});

// -------------------------
// Lore
// -------------------------

let loreIndexPromise;

function getLoreIndex() {
  const INDEX_URL =
    "https://cdn.jsdelivr.net/gh/karledenstal/strdocs@content-data/index.json";

  return (loreIndexPromise ??= fetch(INDEX_URL)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch lore index");
      return res.json();
    })
    .catch((err) => {
      loreIndexPromise = null;
      throw err;
    }));
}

// -------------------------
// Characters
// -------------------------

let characterIndexPromise;

function getCharacters() {
  return (characterIndexPromise ??= $.get(
    "/index.php?act=Members&max_results=1000",
  )
    .then((html) => {
      const $page = $("<div>").append($.parseHTML(html));

      return $page
        .find(".member-row")
        .map(function () {
          const {
            id,
            name,
            faceclaim,
            pronouns,
            group,
            affiliation,
            residence,
            player,
          } = this.dataset;

          return {
            title: name,
            type: "character",
            keywords: [
              id,
              faceclaim,
              pronouns,
              group,
              affiliation,
              residence,
              player,
            ].filter(Boolean),
            url: `/index.php?showuser=${id}`,
          };
        })
        .get();
    })
    .catch((err) => {
      characterIndexPromise = null;
      throw err;
    }));
}

// -------------------------
// Search
// -------------------------

function searchEntries(index, query) {
  const q = query.toLowerCase().trim();

  return index.filter((entry) =>
    [entry.title, ...(entry.keywords ?? [])].some((value) =>
      value.toLowerCase().includes(q),
    ),
  );
}
