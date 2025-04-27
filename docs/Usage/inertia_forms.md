---
sidebar_position: 6
---

# Inertia Forms

lact also handles submitting a form using Inertia.js forms.

## Consideration

**Backend**

```php
class SomeController extends Controller
{
    #[Action(method: 'post')]
    public function functionName()
    {
        return [];
    }
}
```

**Frontend**

```javascript
import { functionName } from '@actions/SomeController.js';
```

## Usage

```javascript
let form = useForm({
    name: 'name',
    email: 'email'
})

// highlight-next-line
form.submit(functionName.form(), {
    onSuccess: (res) => {
        console.log(res)
    },
});
```

**`.form()`** Is a method which returns the `method` and `url`. You can also pass params to form() to pass the params to url.

```javascript
functionName.form({
    user: 1
})

/*
* {method: 'post', url: '.../1'}
* */
```
