import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "GHL Scalup CMS",

  projectId: "t2htf078",
  dataset: "production",

  plugins: [
    structureTool(), // ✅ replaced deskTool
    visionTool(),
  ],
});