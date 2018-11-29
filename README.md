### Setup

- `./packages/app` contains a `create-react-app`-based   application
- `./packages/tools` contains a very tiny library that uses babel to transpile sources in `/src` to `/lib`.

In `./packages/tools/src/index.js` you will find a flow-typed method called `computeSquare` that is imported used in `./packages/app/src/App.js`. Lib tools is imported via 
```
+----------------------+               +---------------------+
|                      |               |                     |
|  tools               | +-----------> |       app           |
|                      |               |                     |
+----------------------+               +---------------------+
```

Both project use flow for type checking.

### Goal
🚩 **See flow errors when we change** 🚩 

### Conclusions
TODO
