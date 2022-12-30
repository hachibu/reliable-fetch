---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

:::caution

This library is **only** compatible with Node.js v18+ and relies on the native Fetch API which is an experimental feature.

:::

## Getting Started

1. Install Reliable Fetch using your favorite package manager.

<Tabs>
<TabItem value="npm" label="npm">

```bash
npm add --save-dev @hachibu/reliable-fetch
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add --dev @hachibu/reliable-fetch
```

</TabItem>
</Tabs>

2. Create a file named `timeout.js` with the following code.

```js
const reliableFetch = require('@hachibu/reliable-fetch').default

async function main() {
    const timeout = 10 // milliseconds

    await reliableFetch('https://google.com')
        .on('timeout', () => console.log('timeout triggered'))
        .timeout({ timeout })
        .catch(console.log)
}

main()
```

3. Finally, run the code.

```bash
node timeout.ts
```
