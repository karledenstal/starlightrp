import fields from "./fields.js";
import { writeFileSync } from "node:fs";

const output = Object.fromEntries(
  fields
    .toSorted((a, b) => a.order - b.order)
    .map((field, index) => {
      const fid = String(index + 1);

      return [
        fid,
        {
          fid,
          ftitle: field.title,
          fdesc: field.description ?? "",
          fcontent: field.options
            ? Object.entries(field.options)
                .map(([key, value]) => `${key}=${value}`)
                .join("\r|")
            : "",
          ftype: field.type,
          freq: field.required ? "1" : "0",
          fhide: field.hide ? "1" : "0",
          fmaxinput: "0",
          fedit: field.canEdit === false ? "0" : "1",
          forder: String(field.order),
          fshowreg: field.showOnReg ? "1" : "0",
          fjsonversion: "1.00",
        },
      ];
    }),
);

writeFileSync("./pfields.json", JSON.stringify(output, null, 2));

console.log(`Generated ${fields.length} profile fields!`);
