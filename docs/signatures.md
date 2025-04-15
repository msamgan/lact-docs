---
sidebar_position: 6
---

# Signatures

Following are the signatures of the functions based on the method of the route.

## GET

```jsx
function({ params = {}, headers = {}, methodHead = false }) {}

//...
functionName.call({
    params: {q: 'text'},
    headers: {},
    methodHead: true // incase you just want to send a HEAD request insted of GET
}).then(async (r) => {
    const res = await r.json()
    // process....
})
```

## POST

```jsx
function({ data = {}, headers = {}, params = {} }) {}

//...
functionName.call({
    data: {name: 'some-name'},
    headers: {
        Authreziation: "Barer <token>"
    },
}).then(async (r) => {
    const res = await r.json()
    // process....
})
```
In ```POST```, ```PUT``` and ```PATCH``` we have a data object.
