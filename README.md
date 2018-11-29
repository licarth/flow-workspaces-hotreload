### Setup

- `./packages/app` contains a `create-react-app`-based   application
- `./packages/tools` contains a very tiny library that uses babel to transpile sources in `/src` to `/lib`.

In `./packages/tools/src/index.js` you will find a flow-typed method called `computeSquare` that is imported used in `./packages/app/src/App.js`. Lib tools is imported via 
```
+----------------------+               +---------------------+
|                      |               |                     |
|  ./packages/tools    | +-----------> | ./packages/app      |
|                      |               |                     |
|                flow  |               |               flow  |
|              mathjs  |               |   create-react-app  |
+----------------------+               +---------------------+
```

Both project use flow for type checking.

To make flow work with yarn workspaces, I'm using `flow-mono`. 

#### Commands
- `yarn start-dev` builds `tools` (babel) and `app`, starts the app in dev mode and watches for changes in `tools` and `app`.
- `yarn flow` executes `flow-mono create-symlinks` and `flow` on both packages `tools` and `app`.

### Goal
🚩 **See flow errors in `app/src/index.js` when we change method definition in `tools/src/index.js` without restarting flow server** 🚩 

### What I've tried
1. Copy sources as `*.js.flow` files near babel-transpiled files in `lib/` with `flow-copy-source`. No hot reloading : flow server does not pick the new files on change. `killall flow` and editing flow config are the only ways I found to make flow pick the new files so far.
2. add tools/ to `[include]` in `.flowconfig`. I tried this in combination with 1. works if the libs have no imports. If they have imports in `tools` that are not dependencies of `app`, it fails : for example 
    ```
    Cannot resolve module `styled-components`.

    3| import styled from 'styled-components';
                            ^^^^^^^^^^^^^^^^^^^
    ```
    **TODO** : Make this fail in this project.

3. Use `flow gen-flow-files` to generate type definitions from sources. This script is experimental, and on our projects it just fails. 💀 See [facebook/flow#5871](https://github.com/facebook/flow/issues/5871).

### Conclusions
I did not find a good way to achieve this with flow.

I can't see any way around `killall flow` for now.
