
declare const __DEV__: boolean
/** Extension name, defined in packageJson.name */
declare const __NAME__: string

declare module '*.svelte' {
  const component: any
  export default component
}
