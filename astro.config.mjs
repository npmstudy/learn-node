import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Learn Node.js",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        { label: "关于本书", link: "/docs/" },
        {
          label: "第一章：Node.js入门",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "什么是Node.js",
              link: "/chapter1/example/",
            },
            {
              label: "安装",
              link: "/chapter1/example/",
            },
            {
              label: "第一个例子",
              link: "/chapter1/example/",
            },
            {
              label: "编辑器",
              link: "/chapter1/example/",
            },
            {
              label: "调试",
              link: "/chapter1/example/",
            },
            {
              label: "测试",
              link: "/chapter1/example/",
            },
          ],
        },
        {
          label: "第二章：理解ESM",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第三章：理解Async/await和异步流程控制",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第四章：学习npm，并写一个Cli",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第五章：写一个Express/Koa应用",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第六章：用TS写Node.js应用",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第七章：学习PNPM和Monorepo",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第八章：学习TDD和Vitest",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第九章：使用Node.js开发Web应用",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第十章：使用Node.js开发BFF应用",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第十一章：使用Node.js开发SSR应用",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第十二章：学习Web框架之Nestjs框架",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第十三章：学习全栈框架之Next.js框架",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "第十四章：学习独立开发者神器之Astrojs框架",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    react(),
  ],
  output: "server",
  adapter: vercel(),
});
