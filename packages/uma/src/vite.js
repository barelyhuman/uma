import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
``;
/**
 * @returns {import("vite").Plugin[]}
 */
export const uma = () => {
  let cfg;
  return [
    {
      name: "uma-virtuals",
      configResolved(_cfg) {
        cfg = _cfg;
      },
      resolveId(id, importer, options) {
        if (id == "uma/mount" || id == "/uma/mount") {
          return resolve(dirname(fileURLToPath(import.meta.url)), "./mount.js");
        }
      },
    },
  ];
};
