import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

console.log("test");

const root = createRoot(document.getElementById("root") as any);

root.render(<App />);
