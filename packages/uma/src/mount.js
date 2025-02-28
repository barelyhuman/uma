import { h, hydrate } from "preact";
import { createApp } from "./app.jsx";
import routes from "/routes";

if (typeof window !== "undefined") {
  const mountElement = document.getElementById("root");
  hydrate(h(createApp, { routes }), mountElement);
}
