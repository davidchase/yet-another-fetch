# yet-another-fetch
> Task for Fetch API

A simple [Task](https://github.com/briancavalier/yet) for [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Transforms Fetch into a lazy composable single path[^1] utility.

## Install

```sh
npm install yet-another-fetch
```
## Usage

```js
import {runTask, taskStr} from 'yet-another-fetch'

// some standard Fetch options
const fetchOpts = {
  method: 'GET'
  headers: new Headers(..),
  mode: 'cors'
}

const url = 'https://gist.github.com/../..'

// runTask retuns a list of `kill` and `futureValue`
// calling kill.kill() will prevent the fetch from happening
// futureValue contains the result of the fetch either an error or a value
const [kill, futureValue] = runTask(taskStr(url, fetchOpts))

// futureValue contains a map method to allow a way access the data inside
futureValue.map(console.log) // => either the fetch data string or an error
```

## API

#### taskStr 
A task for fetching string based content
#### taskJson
A task for fetching JSON based content
#### taskBlob
A task for fetching blobs (images/etc)
#### taskBuffer
A task for handling ArrayBuffers (sound/etc)
#### taskForm
A task for handling form objects

#### runTask
The method that actually runs the task (nothing is fetched until this method is called), imported from [yet](https://github.com/briancavalier/yet#runtask--task-a---kill-futurevalue-a)



[^1]: Task used in this library is [yet](https://github.com/briancavalier/yet) which provides a single path or only cares about resolving values. The errors handled in this library are done via Either monad from [data.either](https://github.com/folktale/data.either)