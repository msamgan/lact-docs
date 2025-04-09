---
sidebar_position: 4
---

# Closures

For Closures, the name of the route becomes the name of the calling function, which can be imported from "Closures"

```php title="Backend Controller"
Route::get('dashboard-data', function () {
    return \App\Models\User::query()->get();
})->name('dashboard.data')->prefix('action');
```
```jsx title="Frontend"
// highlight-next-line
import { dashboardData } from '@actions/Closures';

//...
dashboardData.call({
    param: {
        q: 'Amber',
    },
}).then(async (r) => {
    const res = await r.json()
});
```
