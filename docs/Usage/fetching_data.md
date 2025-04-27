---
sidebar_position: 2
---

# Fetching Data

This document provides a comprehensive overview of two generic functions: `call` and `data`. These functions are
designed to handle HTTP requests, retrieve data from external resources, and manage error handling.

:::caution
Note: the `data` method is specific to `GET` calls only
:::

## Consideration

**Backend**

```php
class SomeController extends Controller
{
    #[Action]
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

---

## 1. `call` Function

The `call` function is a generic utility for performing HTTP requests with flexibility for customization.
It is ideal for use cases for any method, headers, and query parameters need to be specified if there are any

### Function Signature

```javascript
functionName.call({params = {}, headers = {}, methodHead = false})
```

### Parameters

- **`params`** (Optional):
    - An object representing the query parameters to append to the URL.
    - These parameters are often used to pass information such as identifiers (e.g., user IDs) or filter criteria.

- **`headers`** (Optional):
    - An object containing HTTP headers to include in the request.
    - Typically used for passing authentication tokens (e.g., `Authorization: Bearer <token>`), content types, or custom
      headers.

- **`methodHead`** (Optional, default: `false`):
    - A boolean that determines whether the request method should be `HEAD` or `GET`.
    - If `true`, the method used will be `HEAD`, which is useful for fetching metadata or checking the existence of
      resources.

### Return Value

- **`Promise`**: Resolves to the raw HTTP response received from the server.

### Workflow and Behavior

1. The function constructs an HTTP request using the given `params` and `headers`.
2. Appends `params` as query strings to the URL.
3. Uses the `methodHead` parameter to determine the HTTP method (`HEAD` or `GET`).
4. Send the request to the designated endpoint.
5. Upon receiving the response:
    - Update an internal or external error object if the server returns an error.
    - Throw an exception for invalid responses, based on custom checks or HTTP status codes.
6. Returns the server response as-is.

### Example Usage

```javascript 
functionName.call({
    params: {id: 123, filter: 'active'},
    headers: {'Authorization': 'Bearer someToken'},
    methodHead: false
})
    .then(response => {
        console.log('GET response received:', response);
    })
    .catch(error => {
        console.error('An error occurred:', functionName.errors);
    });
```

---

## 2. `data` Function

The `data` function is an extension of the `call` function, specifically designed to handle `GET` requests where the
expected response is in JSON format. This function is useful when fetching structured data such as user information,
product listings, or other application data.

### Function Signature

```javascript
functionName.data({params = {}, headers = {}})
```

### Parameters

- **`params`** (Optional):
    - Similar to the `params` in `call`, representing query parameters appended to the endpoint.

- **`headers`** (Optional):
    - HTTP headers to include in the request, such as authorization details or custom values.

### Return Value

- **`Promise`**: Resolves to the parsed JSON object returned by the server.

### Workflow and Behavior

1. Sends a `GET` request to the target endpoint, using the query parameters (`params`) and headers provided.
2. Parses the server's response as JSON:
    - If the server responds with valid JSON, the parsed data is returned.
    - If the server returns an error or invalid response, the function captures and processes the error using custom
      error handling mechanisms.
3. Update an internal or external error object if the response contains errors.
4. Throw an exception for invalid responses or unexpected errors.

### Example Usage

```javascript 
let data = await functionName.data({
    params: {page: 1, limit: 10},
    headers: {'Authorization': 'Bearer someToken'}
})
```

---

## Key Differences: `call` vs `data`

| Feature         | `call`                                           | `data`                                    |
|-----------------|--------------------------------------------------|-------------------------------------------|
| **Purpose**     | Generic HTTP requests (`HEAD`/`GET` methods)     | Specific to `GET` requests with JSON data |
| **Parameters**  | Includes `params`, `headers`, and `methodHead`   | Includes `params` and `headers` only      |
| **Return Type** | Resolves to raw HTTP response                    | Resolves to parsed JSON object            |
| **Use Case**    | Header or metadata requests, flexible HTTP calls | Fetch structured data                     |

---

## General Error Handling

Both functions rely on the following mechanisms to manage errors:

1. **Custom Error Objects**:
    - The server response is processed and converted into a structured error object for easy debugging.

2. **Exceptions**:
    - Invalid responses (e.g., HTTP status codes 4xx/5xx) trigger an exception to simplify upstream error handling.

3. **Chaining and Async/Await**:
    - Both functions return Promises, making it easy to handle success and failure using `.then()`/`.catch()` or `try`/
      `catch`.

### Error Handling Example

```javascript 

functionName.data({params: {id: 123}}).then(jsonData => {
    console.log('Data received:', jsonData);
}).catch(error => {
    // highlight-next-line
    console.error('Error occurred:', functionName.errors);
});
```

---

## Best Practices

- **Use `call`** for:
    - Requests requiring flexible HTTP methods (`HEAD`/`GET`) or authenticated metadata queries.
    - Low-level control over raw HTTP responses.

- **Use `data`** for:
    - Convenience when working with JSON APIs.
    - High-level abstraction to get parsed JSON directly.

- **Always Handle Errors**:
    - Implement proper error handling using `.catch()` or `try`/`catch`.
    - Log errors and update the UI or notify users where necessary.
