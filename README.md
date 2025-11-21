# fische

**React Utility Custom Hook Package**

```
npm install fische
yarn add fische
pnpm add fische
```

## useBooleanState

- A useState hook for using boolean state conveniently
- example `const [display, show, hide, toggle] = useBooleanState(initialState)`
- If `initialState` is not provided as an argument, the default state value is set to **false**.
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-boolean-state)

## useConditionalRender

- A React hook for using conditional render easily
- useful in triggering animation with (un)mounting component
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-conditional-render)

## useDebouncedEffect / State / Fn

- A React hook for debounced effect/state
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-debounced)

## useForceRender

- A React hook for forcibly rendering a component
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-force-render)

## useIsomorphicLayoutEffect

- In an SSR environment, useEffect should be used, while on the client side, useLayoutEffect should be utilized.
- helps prevent hydration errors
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-isomorphic-layout-effect)

## useMediaQuery

- A React hook for using MediaQuery easily
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-media-query)

## useRefEffect

- A React hook for give effect to Ref values
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-ref-effect)

## useTextCopy

- A React hook for copying plain text to clipboard
- other types will be provided later
- **works only in localhost or https**
- [DOCS](https://github.com/XunderbarX/fische/tree/main/src/use-clipboard)
