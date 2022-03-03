<h1 align="center">
LuckyStrike
</h1>

<p align="center">The new solution for a fast and simple logger.</p>


<h2 align="center">
Installation
</h2>

From yarn:
`yarn add luckystrike`\
From npm: `npm i luckystrike`

<h2 align="center">
Examples
</h2>

```ts
import { error, warn } from 'luckystrike';

try {
   warn('This is a warn for you'); 
} catch(err) {
    error(err));
}