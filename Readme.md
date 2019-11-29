### First, add testing lib

run:
`adonis install @adonisjs/vow`


To configure, follow [these instructions](https://github.com/adonisjs/adonis-vow/blob/develop/instructions.md)


add @adonisjs/vow to aceProviders on start/app.js:
```js
const aceProviders = [
  '@adonisjs/vow/providers/VowProvider'
]
```

### Configure .env.testing
