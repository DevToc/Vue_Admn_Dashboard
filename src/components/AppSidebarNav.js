import { defineComponent, h, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { CSidebarNav, CNavItem, CNavGroup, CNavTitle } from '@coreui/vue'
import nav from '@/_nav.js'

const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const normalizePath = (path) =>
      decodeURI(path)
        .replace(/#.*$/, '')
        .replace(/(index)?\.(html)$/, '')

    const isActiveLink = (route, link) => {
      if (link === undefined) {
        return false
      }

      if (route.hash === link) {
        return true
      }

      const currentPath = normalizePath(route.path)
      const targetPath = normalizePath(link)

      return currentPath === targetPath
    }

    const isActiveItem = (route, item) => {
      if (isActiveLink(route, item.to)) {
        return true
      }

      if (item.children) {
        return item.children.some((child) => isActiveItem(route, child))
      }

      return false
    }

    const renderItem = (item) => {
      const route = useRoute()

      if (item.children) {
        return h(
          resolveComponent('CNavGroup'),
          {
            visible: item.children.some((child) => isActiveItem(route, child)),
          },
          {
            togglerContent: () => [
              h(resolveComponent('CIcon'), {
                customClassName: 'nav-icon',
                name: item.icon,
              }),
              item.name,
            ],
            default: () => item.children.map((child) => renderItem(child)),
          },
        )
      }

      return item.to
        ? h(
            RouterLink,
            {
              to: item.to,
              custom: true,
            },
            {
              default: (props) =>
                h(
                  resolveComponent(item._name),
                  {
                    active: props.isActive,
                    href: props.href,
                    onClick: () => props.navigate(),
                  },
                  {
                    default: () => [
                      item.icon &&
                        h(resolveComponent('CIcon'), {
                          customClassName: 'nav-icon',
                          name: item.icon,
                        }),
                      item.name,
                      item.badge &&
                        h(
                          resolveComponent('CBadge'),
                          {
                            class: 'ms-auto',
                            color: item.badge.color,
                          },
                          {
                            default: () => item.badge.text,
                          },
                        ),
                    ],
                  },
                ),
            },
          )
        : h(
            resolveComponent(item._name),
            {},
            {
              default: () => item.name,
            },
          )
    }

    return () =>
      h(
        CSidebarNav,
        {},
        {
          default: () => nav.map((item) => renderItem(item)),
        },
      )
  },
})
export { AppSidebarNav }