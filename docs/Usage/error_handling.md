---
sidebar_position: 7
---

# Error Handling

lact uses the following mechanisms for handling errors:

- `makeErrorObject(response)`: Converts the server response into a structured error object and stores it in the `errors` property.
- `throwException(response)`: Throws an exception if the `response` indicates a failure (e.g., HTTP status 4xx or 5xx, anything other then 20x).

## Validation Error

In case of validation error from server all the errors are pushed to the `errors` property too.
From there they can be accessed.

```javascript
console.log(functionName.error.name)
// (string) | Name is Required 
```
