# Migrate React App to TypeScript

### Install types and init `.tsconfig`:

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npx tsc —init
```

### `.tsconfig` from CRA `--template typescript`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

`“checkJS”: true` optional flag, which checkes all `.js` files and prints errors, but doesn't break application.

### `strict` mode

`“strict”: true`:

```json
noImplicitAny
noImplicitThis
alwaysStrict
strictBindCallApply
strictNullChecks
strictFunctionTypes
strictPropertyInitialization
useUnknownInCatchVariables
```

### Plugin for VSCode

plugin: [TypeScript Error Translator](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator)

### File check or ignore

`@ts-check` - validates `.js`

`@ts-nocheck` - disables validating `.js` file, even when `"checkJs": true`

`@ts-ignore` - disables validating next line

`@ts-expect-error` - checks next line and prevents throwing TS error. But when it is used and next line is correct it throws error

### Approach:

- top - down
- bottom - up
