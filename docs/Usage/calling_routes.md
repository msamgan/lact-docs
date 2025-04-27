---
sidebar_position: 5
---

# Calling Routes by Name

In addition to the direct controllers functions, lact also provide a `route` function.

```javascript
import { route } from '@actions/routes';
```

The `route` function takes a route name and optional parameters,
then generates a complete URL by finding the named route declared,
replacing any parameters in the URL path, and prepending the application's base URL.
**It's like a JavaScript version of Laravel's route helper.**

```php title="web.php"
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
```

```javascript title="javascript"
// Import the route function
import { route } from '@actions/routes';

// Example 1: Basic route with no parameters
const homeUrl = route('home');
// Result: http://lacttest.test/
```