import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'yunxinx/ZZZ',
        repoId: 'R_kgDOPMnJqA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOPMnJqM4CtD2m',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        inputPosition: 'top',
        lang: 'zh-CN',
        lightTheme: 'light',
        darkTheme: 'dark',
        themeUrl: 'https://notes.134257.xyz/static/giscus'
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      "Home Site": "https://134257.xyz",
      "Theme Github": "https://github.com/jackyzha0/quartz",
      "Theme Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
    Component.RecentNotes({
      title: "Recent writing",
      limit: 3
    })
  ],
  right: [
    // 移除掉右侧的关系图谱组件
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
