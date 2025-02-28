import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { uma } from "uma/vite";
import { bling } from "@tanstack/bling/vite";
import Unimport from "unimport/unplugin";

export default defineConfig({
  root: "app",
  resolve: {
    dedupe: ["preact"],
  },
  plugins: [
    Unimport.vite({ imports: [{ name: "server$", from: "@tanstack/bling" }] }),
    bling(),
    uma(),
    preact({
      prerender: false,
    }),
    tailwindcss(),
  ],
});
