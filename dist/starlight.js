(()=>{$(function(){document.title.match(/->/i)&&(document.title=document.title.split(" -> ")[1].toUpperCase()),$(document).on("keydown",function(e){e.ctrlKey&&e.code==="Period"&&!e.repeat&&(e.preventDefault(),document.querySelector('[popovertarget="emojitool"]')?.click())})});$(function(){let e={5:`**Age**

Your character's age.

For *Biosynt-7B* characters, list the age they look like.`,6:`**Date of birth**

The date your character was born.

**Format:** DD.MM.YYYY, DD-MM-YYYY, DD MMMM YYYY.

**Example:** 14.09.2080, 14-09-2080 or 14 September 2080`,8:`**Pronouns**

Your character's pronouns.

**Example:** he/him, she/her, they/them`,34:`**Self**

How your character sees themselves.

**2-5 traits**. Comma-separated list.

**Example:** Curious, stubborn, restless`,35:`**Outward**

How they present themselves to others.

**2-5 traits**. Comma-separated list.

**Example:** Aloof, composed, dry`,36:`**Inner**

How they feel beneath the surface.

**2-5 traits**. Comma-separated list.

**Example:** Sentimental, anxious, intense`,37:`**Drive**

How they approach their ambitions and motivations.

**2-5 traits**. Comma-separated list.

**Example:** Methodical, relentless`,38:`**Bonds**

How they form and maintain relationships.

**2-5 traits**. Comma-separated list.

**Example:** Protective, clingy`,39:`**Conflict**

How they react to confrontation and disagreement.

**2-5 traits**. Comma-separated list.

**Example:** Defensive, confrontational`,40:`**Affiliation**

Which organization, if any, your character is associated or aligned with. This can reflect employment, cooperation, loyalty, or shared interests.

**Independent:** Your character has no particular allegiance to either organization.

**Stromberg:** Your character works for, cooperates with, or otherwise aligns themselves with Stromberg and its interests.

**SAGE:** Your character works for, cooperates with, or otherwise aligns themselves with Starlight's governing body.`,46:`**Relationship tracker**

List your character's relationships with other characters. You can find each character's ID on their profile.

**Add one relationship per line**, using the following format

\`Name | Relationship | ID\`

Separate each value with a vertical bar (\`|\`).

**Example**<br>Cassian | Asshole (friend ig??) | 3<br>Arden | Confidante | 4<br>Cleo | Girlfriend | 2`};for(let[t,n]of Object.entries(e)){let i=$("<button>",{type:"button",class:"field-help",text:"?"}).attr("data-content",n);$(`#field_${t} .pformleft`).append(i)}$(document).on("click",".field-help",function(t){let n=$(this).attr("data-content");console.log("content",n);let i=$("#help-popup");i.find(".popover-content").html(marked.parse(n)),i[0].showPopover({source:this})})});$(function(){let e=$("#starlight-dialog"),t=e[0],n=e.find(".dialog-body"),i=e.find(".input-search"),r=[];e.on("click",function(o){o.target===t&&t.close()}),window.openStarlightDialog=async function(){n.empty(),i.val(""),t.open||t.showModal(),i.trigger("focus");try{let[o,s]=await Promise.all([v(),b()]);r=[...o.map(a=>({...a,type:"lore"})),...s];let l=r.map((a,d)=>{let c=$("<div>",{class:`result-card result-${a.type}`,"data-index":d});return $("<a>",{class:"entry-title",href:a.url||"#",text:a.title}).appendTo(c),$("<div>",{class:"tags"}).append($("<strong>").text("Tags: ")).append(document.createTextNode((a.keywords??[]).join(", "))).appendTo(c),c});n.empty().append(l)}catch(o){console.error("Failed to load search index:",o),n.text("Failed to load search results.")}},e.find(".dialog-close").on("click",()=>t.close()),$(document).on("keydown",function(o){o.ctrlKey&&o.key.toLowerCase()==="k"&&!o.repeat&&(o.preventDefault(),openStarlightDialog())}),i.on("input",function(){let o=new Set(y(r,$(this).val()));n.find(".result-card").each(function(){let s=$(this),l=r[s.data("index")];o.has(l)?s.is(":visible")||s.stop(!0,!0).slideDown(150):s.is(":visible")&&s.stop(!0,!0).slideUp(150)})})});var g;function v(){return g??=fetch("https://cdn.jsdelivr.net/gh/karledenstal/strdocs@content-data/index.json").then(t=>{if(!t.ok)throw new Error("Failed to fetch lore index");return t.json()}).catch(t=>{throw g=null,t})}var w;function b(){return w??=$.get("/index.php?act=Members&max_results=1000").then(e=>$("<div>").append($.parseHTML(e)).find(".member-row").map(function(){let{id:n,name:i,faceclaim:r,pronouns:o,group:s,affiliation:l,residence:a,player:d}=this.dataset;return{title:i,type:"character",keywords:[r,o,s,l,a,d].filter(Boolean),url:`/index.php?showuser=${n}`}}).get()).catch(e=>{throw w=null,e})}function y(e,t){let n=t.toLowerCase().trim();return e.filter(i=>[i.title,...i.keywords??[]].some(r=>r.toLowerCase().includes(n)))}$(function(){let e=$("#registration-form"),t=e.find(".tablepad");$('form[name="REG"]').contents().filter((u,h)=>h.nodeType===3&&h.textContent.includes("Please ensure")).remove();let n=e.find("fieldset:has(#registered-name-checkeh)").detach(),i=e.find("fieldset:has(#password-one)").detach(),r=e.find("fieldset:has(#email-one)").detach(),o=e.find('fieldset:has([name="field_1"])').detach(),s=e.find('fieldset:has([name="field_2"])').detach(),l=e.find("fieldset:has(.g-recaptcha)").detach(),a=e.find('fieldset:has([name="allow_admin_mail"])').detach(),d=e.find('fieldset:has([name="time_offset"])').detach(),c=e.find('input[name="agree"]').closest(".desc").detach(),p=e.find('input[type="submit"]').detach();t.empty().append($("<div>",{class:"registration-layout"}).append($("<section>",{class:"registration-section"}).append($("<h3>").text("Account Details"),n,i,r),$("<section>",{class:"registration-section"}).append($("<h3>").text("Character Details"),o,s),$("<section>",{class:"registration-section"}).append($("<h3>").text("Preferences"),a,d),$("<section>",{class:"registration-section"}).append($("<h3>").text("Verification"),l,c,p)))});$(function(){let e=$("#code-buttons");$("#code-buttons-header").find(".pformstrip").text("Markdown"),e.html(`
    <td colspan="2" class="pformright">
      <div class="markdown-toolbar">
        <div class="markdown-actions">
        <button type="button" data-md="bold" title="Bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bold preview-icon"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></button>
        <button type="button" data-md="italic" title="Italic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-italic preview-icon"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></button>
        <button type="button" data-md="strike" title="Strikethrough"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-strikethrough preview-icon"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" x2="20" y1="12" y2="12"/></svg></button>
        <button type="button" data-md="link" title="Link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link preview-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></button>
    <span class="md-sep"></span>
        <button type="button" data-md="image" title="Image"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image preview-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></button>
      </div>
    <div class="bbcode-actions">
      <button type="button" data-md="texting" title="Texting"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square preview-icon"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg></button>
      <span class="md-sep"></span>
        <button type="button" popovertarget="emojitool" title="Emoji picker"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-face-slightly-smiling preview-icon"><path d="M15 10V9"/><path d="M16.472 15a6 6 0 01-8.943 0"/><path d="M9 10V9"/><circle cx="12" cy="12" r="10"/></svg></button>
    </div>
    </div>
    </td>
  `);let d={bold:["**","**"],italic:["*","*"],strike:["~~","~~"],link:["[","](https://)"],quote:["> ",""],code:["`","`"]};e.on("click","[data-md]",function(){console.log("clicked");let c=document.forms.REPLIER?.elements.Post;if(!c)return;if(this.dataset.md==="emoji"){console.log("emoji");return}let p=d[this.dataset.md];if(!p)return;let[u,h]=p,m=c.selectionStart,f=c.selectionEnd,k=c.value.slice(m,f);c.setRangeText(u+k+h,m,f,"select"),c.focus()})});$(function(){let e=$("#enter-your-post");e.find("td.pformleft").remove(),e.find("td.pformright").attr("colspan","2")});$(function(){let e=$("#post-options");if(!e.length)return;let t=e.find("td.pformright"),n=t.find('input[name="enabletrack"]');if(!n.length){e.remove();return}n.detach(),t.empty().append($("<label>").append(n).append(" Notify me of replies"))});$(function(){marked.use({gfm:!0,tables:!0,breaks:!1}),$(".markdown").each(function(){let e=$(this).html();e=e.replace(/>/g,">"),e=e.replace(/(<br\s*\/?>\s*){2,}/gi,`

`),e=e.replace(/<br\s*\/?>/gi,`  
`),e=e.replace(/!https?:\/\/\S+/g,r=>`![](${r.slice(1)})`);let t=[];e=e.replace(/^\s*\|.*\|\s*$/gm,r=>(t.push(r),`__TABLE_LINE_${t.length-1}__`)),e=e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/\.{3}/g,"\u2026").replace(/"([^"]*)"/g,"\u201C$1\u201D").replace(/'([^']*)'/g,"\u2018$1\u2019").replace(/(\w)'(\w)/g,"$1\u2019$2"),e=e.replace(/__TABLE_LINE_(\d+)__/g,(r,o)=>t[o]);let n={":)":"\u{1F642}",":(":"\u2639\uFE0F",":D":"\u{1F604}",";)":"\u{1F609}",":P":"\u{1F61B}",":o":"\u{1F62E}",":O":"\u{1F62E}",":|":"\u{1F610}",":'(":"\u{1F622}","<3":"\u2764\uFE0F","</3":"\u{1F494}"};for(let[r,o]of Object.entries(n)){let s=r.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$&");e=e.replace(new RegExp(s,"g"),o)}e=e.replace(/(?<![a-zA-Z]):\//g,"\u{1F615}"),e=e.trim();let i=marked.parse(e);$(this).html(i)})});})();
