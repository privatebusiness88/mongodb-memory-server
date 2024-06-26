---
id: mongo-memory-server-opts
title: 'MongoMemoryServerOpts'
---

API Documentation of `MongoMemoryServerOpts`-Interface

## Values

### instance

Typings: `instance?: MongoMemoryInstanceOpts`

Set custom options for the instance, uses [`MongoMemoryInstanceOpts`](./mongo-memory-instance-opts.md).

### binary

Typings: `binary?: MongoBinaryOpts`

Set custom options for finding the binary, uses [`MongoBinaryOpts`](./mongo-binary-opts.md).

### spawn

Typings: `spawn?: SpawnOptions`

Set custom spawn options for spawning processes, uses [`SpawnOptions`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)

### auth

Typings: `auth?: AutomaticAuth`

Set custom Authentication options for the instance, uses [`AutomaticAuth`](./mongo-memory-server-automaticauth.md).
