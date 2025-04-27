---
sidebar_position: 6
---

# API References

This section contains detailed API references, including endpoints, methods, and parameters.

---

## Module

- **Path**: `/vendor/msamgan/lact/resources/actions/`
- **Dependencies**:
    - `throwException`
    - `baseHeaders`
    - `makeErrorObject`
    - `loadValidationErrors`
    - `validationStatusErrorCode`
    - `route`
---

## Properties

#### `errors`
- **Type**: `Object`
- **Description**: Stores errors returned from the server after the request is made.

#### `routeName`
- **Type**: `string`
- **Value**: `'name.of.the.route'`
- **Description**: Name of the route used for fetching data.

---

## Methods

#### 1. `call({ params, headers, methodHead })`
Executes a request to the `named` route.

- **Parameters**:
    - `params` (optional): An object of query parameters to append to the route.
    - `headers` (optional): An object of HTTP headers to include in the request.
    - `methodHead` (optional, default `false`): If `true`, the request will use the `HEAD` method; otherwise, it will use `GET`.

- **Returns**:
    - A `Promise` that resolves to the `response`.

- **Behavior**:
    - Sends a `GET` or `HEAD` request to the `named` route.
    - Populates the `errors` property with errors from the server.
    - Invokes `throwException` on the `response` if there is non `20*` response. 

#### Example:

```javascript
functionName
    .call({ 
        params: { userId: 1 }, 
        headers: { Authorization: 'Bearer token' } 
    }).then(response => { console.log(response); });
```

---

#### 2. `data({ params, headers })`
Executes a `GET` request to retrieve data.

- **Parameters**:
    - `params` (optional): An object of query parameters to append to the route.
    - `headers` (optional): An object of HTTP headers to include in the request.

- **Returns**:
    - A `Promise` that resolves to the parsed JSON `response`.

- **Behavior**:
    - Sends a `GET` request to the `named` route.
    - Populates the `errors` property with errors from the server.
    - Invokes `throwException` on the `response` if there is non `20*` response. 

#### Example:

```javascript
functionName
    .data({ 
        params: { userId: 1 }, 
        headers: { Authorization: 'Bearer token' } 
    }).then(data => { console.log(data); });
```

---

#### 3. `route(params)`
Generates a URL for the `named` route.

- **Parameters**:
    - `params` (optional): An object of query parameters to append to the route.

- **Returns**:
    - The fully constructed route URL as a string.

#### Example:
```javascript
const url = functionName.route({ userId: 1 });

console.log(url); // Outputs the URL
```
---

#### 4. `form(params)`
Creates an object for form submission to the `named` route.

- **Parameters**:
    - `params` (optional): An object of query parameters to append to the route.

- **Returns**:
    - An object containing:
        - `method`: The HTTP method for the form based on the declaration.
        - `url`: The generated URL for the `named` route.

#### Example:

```javascript
// used with inertia form.
const formInfo = functionName.form({ userId: 1 });

console.log(formInfo); // Output: { method: '...', url: '...' }
```



