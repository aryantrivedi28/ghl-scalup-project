import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "GHL Scalup CMS",

  projectId: "t2htf078",
  dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes, // ✅ THIS IS THE KEY
  },
});