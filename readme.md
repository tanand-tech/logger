# @tanand-tech/logger 
![Version](https://img.shields.io/badge/version-2.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/tanand-tech/logger#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/tanand-tech/logger/graphs/commit-activity)

tslog wrapper for tanand-tech internal usage

### [Homepage](https://github.com/tanand-tech/logger#readme)

## Usage

### Installation

```shell
npm install @tanand-tech/logger
```

### Enable filepath

```shell
// Unix
LOGGER_DISPLAY_FILE_PATH=true npm run start

// Windows
set LOGGER_DISPLAY_FILE_PATH=true npm run start

// Cross-env
cross-env LOGGER_DISPLAY_FILE_PATH=true npm run start
```

### Configure log levels

```shell
// Unix
LOGGER_MIN_LEVEL=3 npm run start
LOGGER_MIN_LEVEL=info npm run start

// Windows
set LOGGER_MIN_LEVEL=3 npm run start
set LOGGER_MIN_LEVEL=info npm run start

// Cross-env
cross-env LOGGER_MIN_LEVEL=3 npm run start
cross-env LOGGER_MIN_LEVEL=info npm run start
```

###### Log Levels (In order of priority)

1. Fatal
2. Error
3. Warn
4. Info
5. Debug
6. Trace
7. Silly

## Author

**tanand-tech**

* Github: [@tanand-tech](https://github.com/tanand-tech)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/tanand-tech/logger/issues).
