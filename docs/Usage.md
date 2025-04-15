---
sidebar_position: 3
---

# Usage

To use Lact, there are **Two Approaches**.

- Approach One: Action Attribute (recommended)
- Approach Two: Action Prefix

## Approach One: Action Attribute (recommended)

If you’re using lact, you don't have to crate routes; lact will take care of it for you. All you have to do is add
and #[Action] attribute to your controller method, with a mandatory methods: 'get|post|...'.

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

Apart from ```method```, you can also pass the following params as per your requirement in ```#[Action]```

- (string) ```method```: get | post | patch | put |delete (default is 'get' if not provided)
- (string) ```path```: path of the route. (e.g., path: '/user/store')
- (string) ```name```: name of the route. (e.g., name: 'user.store')
- (array) ```params```: array off all the url params, in same order as you want in URL. (e.g., params: ['user'])
- (array) ```middleware```: array of all the middleware you want to apply in the route. (e.g.,
  middleware: ['auth', 'verified']).
  The package adds ```web``` by default.

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

:::tip
All the arguments in the attributes are optional with defaults.
:::

```php
// highlight-next-line
#[Action()]
public function index()
{
    // process...
}

// the route for the above function will translate to
//  Route::get(
//        '85906456-216d-4f44-f456-4c3508478b52', 
//        [App\Http\Controllers\DashboardController::class, 'index']
//  )->name('dashboard.index')
//   ->middleware(['web'])
//   ->prefix('action');
```

## Approach Two: Action Prefix

The first step will be adding a prefix action to the route which you want to be translated into actions.

```php
Route::get('path', [ControllerName::class, 'functionName'])
  ->name('route.name')
  // highlight-next-line
  ->prefix('action');
```
:::danger[Caution]
Once you add the prefix, the urls of the routes will be changed. In case you are using the routes directly please update those with a ```/action``` prefix.
:::

```php title="e.g."
/user => /action/user
```

## Frontend Usage

```jsx
import { functionName } from '@actions/ControllerName';

// ...
functionName.call({}).then(async (r) => {
  const res = await r.json()
  // process....
})

functionName.route()
// /path

functionName.route({ user: 1 })
// /path/1

functionName.route({ q: 'Amber' })
// /path?q=Amber

functionName.routeName
// 'route.name'
```

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