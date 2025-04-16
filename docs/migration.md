---
sidebar_position: 7
---

# Migration
Please make the following changes to upgrade the package.

## From 0.2 to 0.3

- **Breaking:** Definition command has been renamed to ```lact:run```  from ```lact:build-actions```
- **Breaking:** Addition ```lactPreBuild()``` function needs to be added to plugin config, see [installation](/docs/installation#set-up)
- New ```lact:clear``` command is added, see [commands](/docs/commands#-php-artisan-lact-clear)
- Added New ```data``` function to fetch data directly.