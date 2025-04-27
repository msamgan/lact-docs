---
sidebar_position: 3
---

# Sending Data

The `call` function can be used as a generic HTTP utility for performing `POST` requests with the purpose of sending
data to a server endpoint. This function provides flexibility and is adaptable for many use cases where data submission
is required (e.g., creating new records, submitting forms, etc.).

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

---

## Function Signature

```javascript 
functionName.call({params = {}, headers = {}, data = {}})
```

---

## Parameters

- **`params`** *(Optional)*:
    - An object representing query parameters to append to the request URL.
    - Useful for sending additional information or filtering based on dynamic needs.

  **Example**:
  ```javascript
  params: { userId: 123, type: 'admin' }
  ```

- **`headers`** *(Optional)*:
    - An object containing the HTTP headers to include in the request.
    - Typically used for passing content type, authentication tokens, or custom headers.

  **Example**:
  ```javascript
  headers: { 
      'Authorization': 'Bearer <token>' 
  }
  ```

- **`data`** *(Optional)*:
    - The payload to be sent to the server.
    - type: `object`

  **Example**:
  ```javascript
  data: { 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      password: 'securePassword123'
  }
  ```

---

## Return Value

- **`Promise`**:
    - Resolves to the server's response, which can either be the raw response object, a JSON body, or status metadata
      based on the API's design.
    - Should be parsed (if needed) for further processing.

---

## Workflow and Behavior

1. **Headers Construction**:

- Merges default headers with custom headers from the caller in the `header` object

2. **Sending the POST Request**:

- Attaches the `data` payload to the request.

3. **Processing the Response**:

- Returns the server's response directly or throws errors based on the HTTP status code.

4. **Error Handling**:

- Supports customizable error handling by parsing `functionName.errors` messages and providing robust exception
  management.

---

## Example Usage

### Example 1: Submitting JSON Data

When working with JSON APIs, include a `Content-Type` header of `application/json`  and provide the data payload in the
data object:

```javascript 
functionName.call({
    params: {},
    headers: {'Authorization': 'Bearer myToken'},
    data: {name: 'Jane Doe', email: 'jane.doe@example.com'}
}).then(response => {
    console.log('Data submitted successfully:', response);
}).catch(error => {
    console.error('Failed to submit data:', functionName.errors);
});
```

### Example 2: Submitting File Data

For file uploads, use `FormData` to package the body content:

```javascript 
const formData = new FormData();

formData.append('file', selectedFile);
formData.append('userId', 123);

functionName.call({
    headers: {'Authorization': 'Bearer myToken'},
    data: formData
}).then(response => {
    console.log('File uploaded successfully:', response);
}).catch(error => {
    console.error('Failed to upload file:', functionName.errors);
});
```