---
sidebar_position: 2
---

# Installation

You can install the package via composer:

```bash
composer require msamgan/lact
```

you will also need the vite plugin.

```bash
npm i -D vite-plugin-run
```

## Set Up

Then,
update your application's ``vite.config.js`` file
to watch for changes to your application's routes and controllers and register aliases for importing the generated files
into your application.

```js title="vite.config.js"
import {run} from "vite-plugin-run";
import {resolve} from 'node:path';
import { lactPreBuild } from './vendor/msamgan/lact/resources/methods';

export default defineConfig({
    plugins: [
        // ...
        run([
            {
                name: "lact",
                run: ["php", "artisan", "lact:run"],
                pattern: ["routes/**/*.php", "app/**/Http/Controllers/**/*.php"],
            },
        ]),
        lactPreBuild()
    ],
    resolve: {
        alias: {
            '@actions': resolve(__dirname, 'vendor/msamgan/lact/resources/action'),
        },
    },
});
```

:::danger[Caution]
Please add the below meta-tag to your ```app.blade.php``` to resolve the CSRF issues for your post-routes.
:::
```html title="app.blade.php"
<meta name="csrf" content="{{ csrf_token() }}">
```
