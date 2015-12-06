# metalsmith-many-more

Metalsmith plugin to split content into several metadata fields.

[![Build
Status](https://travis-ci.org/iilab/metalsmith-many-more.svg?branch=master)](https://travis-ci.org/iilab/metalsmith-many-more)
[![Dependency
Status](https://gemnasium.com/iilab/metalsmith-many-more.svg)](https://gemnasium.com/iilab/metalsmith-many-more)

## Features

This allows you to split content separated by a separator (by default ```<!--more-->```) into a metadata key (by default ```children```) as an array.

## Installation

npm install metalsmith-many-more

## CLI Usage

```
{
  "plugins": {
    "metalsmith-many-more": {
      "separator": "<!--more-->",
      "key": "children"
    }
  }
}
```

## License

MIT
