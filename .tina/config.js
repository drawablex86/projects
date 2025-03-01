import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "0cfe51b0-da19-4cd1-8f41-aab5e407cd5f", // Get this from tina.io
  token: "d730861c3b0442b27e69429c0b8b00e973ee64f6", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "assets/uploads",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "assets/uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
