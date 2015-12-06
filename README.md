# metalsmith-many-more

Metalsmith plugin to split content into several metadata fields.

[![Build
Status](https://travis-ci.org/iilab/metalsmith-many-more.svg?branch=master)](https://travis-ci.org/iilab/metalsmith-many-more)
[![Dependency
Status](https://gemnasium.com/iilab/metalsmith-many-more.svg)](https://gemnasium.com/iilab/metalsmith-many-more)

## Features

This allows you to split content separated by a separator (by default ```<!--more-->```) into a metadata key (by default ```children```) as an array.

The `pattern` property should be a valid [minimatch](https://www.npmjs.org/package/minimatch) pattern. If the pattern matches the file the plugin will be applied.

The `trim` property is a boolean indicating if leading and trailing whitespace and newline characters will be removed from the created array items.

## Installation

npm install metalsmith-many-more

## CLI Usage

```
{
  "plugins": {
    "metalsmith-many-more": {
      "pattern": "**/*.md",
      "separator": "<!--more-->",
      "key": "children",
      "trim": true
    }
  }
}
```

## License

MIT
