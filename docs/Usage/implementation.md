---
sidebar_position: 1
---

# Implementation

To implement Lact, there are **Two Approaches**.

- Approach One: **Auto Routes Generation (recommended)**
- Approach Two: **Action Prefix**

---

## Auto Routes Generation (recommended)

When using Lact, you don't need to manually define routes — Lact handles them for you.
Add the #[Action] attribute to your controller method and specify the required HTTP methods (e.g., get, post, etc.).

```php title="App/Http/Controllers/DashboardController.php"
use Msamgan\Lact\Attributes\Action;

// highlight-next-line
#[Action(method: 'get')]
public function dashboardData(Request $request)
{
    return User::query()
        ->when($request->has('q'), function ($query) use ($request) {
            $query->where('name', 'like', '%' . $request->get('q') . '%');
        })->get();
}
```

In addition to `method`, you can also pass the following parameters to the `#[Action]` attribute as needed:

- **`method`** (`string`): The HTTP method for the route (`get`, `post`, `patch`, `put`, `delete`).  
  _Default: `get` if not specified._

- **`path`** (`string`): The URL path for the route.  
  _Example: `path: '/user/store'`_

- **`name`** (`string`): The name of the route.  
  _Example: `name: 'user.store'`_

- **`params`** (`array`): An array of URL parameters, listed in the order you want them to appear in the URL.  
  _Example: `params: ['user']`_

- **`middleware`** (`array`): An array of middleware you want to apply to the route.  
  _Example: `middleware: ['auth', 'verified']`_

:::tip
*-- The `web` middleware is automatically applied by default.*

*-- All the arguments in the attributes are optional with defaults.*
:::

```php title="E.g."
use Msamgan\Lact\Attributes\Action;

// highlight-next-line
#[Action(method: 'post', path: "user/update", params: ['user'], name: 'user.update', middleware: ['auth', 'verified'])]
public function update(User $user, Request $request)
{
    // process...
}

// the route for the above function will translate to
//  Route::post(
//        'user/update/{user}', 
//        [App\Http\Controllers\DashboardController::class, 'update']
//  )->name('user.update')
//   ->middleware(['web', auth','verified'])
//   ->prefix('action');
```

```php
// highlight-next-line
#[Action()]
public function index()
{
    // process...
}

// the route for the above function will translate to
//  Route::get(
//        'time-work-light-sun-plant-village-law-year-year-fact', 
//        [App\Http\Controllers\DashboardController::class, 'index']
//  )->name('dashboard.index')
//   ->middleware(['web'])
//   ->prefix('action');
```

---

## Approach Two: Action Prefix

The first step will be adding a prefix action to the route which you want to be translated into actions.

```php
Route::get('path', [ControllerName::class, 'functionName'])
  ->name('route.name')
  // highlight-next-line
  ->prefix('action');
```

:::danger[Caution]
Once you add the prefix, the urls of the routes will be changed. In case you’re using the routes directly please update
those with a ```/action``` prefix.
:::

```php title="e.g."
/user => /action/user
```

---

## Generate Definitions

Though once you do the [setup](/docs/installation),
all the definitions will be generated auto
but still, if you feel the need to generate the definition for the functions, you can do it by the following command.

```bash
php artisan lact:run
```

:::tip
In some instances the autogenerate takes some time, please run the above command for manual definition generation.
:::