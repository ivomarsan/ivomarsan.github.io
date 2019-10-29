export const PageLogo = () =>
  import(
    /* webpackChunkName: "PageLogo.vue" */
    `@/components/PageLogo.vue`
  )

export const MainMenu = () =>
  import(
    /* webpackChunkName: "MainMenu.vue" */
    `@/components/MainMenu.vue`
  )

export const HelloI18n = () =>
  import(
    /* webpackChunkName: "HelloI18n.vue" */
    `@/components/HelloI18n.vue`
  )

export const HelloWorld = () =>
  import(
    /* webpackChunkName: "HelloWorld.vue" */
    `@/components/HelloWorld.vue`
  )

export const MySection = () =>
  import(
    /* webpackChunkName: "MySection.vue" */
    `@/components/MySection.vue`
  )

export const SvgIcon = () =>
  import(
    /* webpackChunkName: "SvgIcon.vue" */
    `@/components/SvgIcon.vue`
  )

// const Components = {}

// const allComponents = require
//   .context('@/components', true, /[A-Za-z0-9-_,\s]+\.vue$/i)
//   .keys()
//   .map(component => component.replace(/\.\/|\.vue/g, ''))

// allComponents.forEach(component => {
//   Components[component] = require(/* webpackChunkName: "[request]" */
//   `@/components/${component}.vue`)
// })
