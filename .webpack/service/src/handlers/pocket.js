/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@sindresorhus/is/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sindresorhus/is/dist/index.js ***!
  \*****************************************************/
/***/ ((module, exports) => {

"use strict";

/// <reference lib="es2018"/>
/// <reference lib="dom"/>
/// <reference types="node"/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
const typedArrayTypeNames = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array'
];
function isTypedArrayName(name) {
    return typedArrayTypeNames.includes(name);
}
const objectTypeNames = [
    'Function',
    'Generator',
    'AsyncGenerator',
    'GeneratorFunction',
    'AsyncGeneratorFunction',
    'AsyncFunction',
    'Observable',
    'Array',
    'Buffer',
    'Object',
    'RegExp',
    'Date',
    'Error',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'DataView',
    'Promise',
    'URL',
    'HTMLElement',
    ...typedArrayTypeNames
];
function isObjectTypeName(name) {
    return objectTypeNames.includes(name);
}
const primitiveTypeNames = [
    'null',
    'undefined',
    'string',
    'number',
    'bigint',
    'boolean',
    'symbol'
];
function isPrimitiveTypeName(name) {
    return primitiveTypeNames.includes(name);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isOfType(type) {
    return (value) => typeof value === type;
}
const { toString } = Object.prototype;
const getObjectType = (value) => {
    const objectTypeName = toString.call(value).slice(8, -1);
    if (/HTML\w+Element/.test(objectTypeName) && is.domElement(value)) {
        return 'HTMLElement';
    }
    if (isObjectTypeName(objectTypeName)) {
        return objectTypeName;
    }
    return undefined;
};
const isObjectOfType = (type) => (value) => getObjectType(value) === type;
function is(value) {
    if (value === null) {
        return 'null';
    }
    switch (typeof value) {
        case 'undefined':
            return 'undefined';
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'function':
            return 'Function';
        case 'bigint':
            return 'bigint';
        case 'symbol':
            return 'symbol';
        default:
    }
    if (is.observable(value)) {
        return 'Observable';
    }
    if (is.array(value)) {
        return 'Array';
    }
    if (is.buffer(value)) {
        return 'Buffer';
    }
    const tagType = getObjectType(value);
    if (tagType) {
        return tagType;
    }
    if (value instanceof String || value instanceof Boolean || value instanceof Number) {
        throw new TypeError('Please don\'t use object wrappers for primitive types');
    }
    return 'Object';
}
is.undefined = isOfType('undefined');
is.string = isOfType('string');
const isNumberType = isOfType('number');
is.number = (value) => isNumberType(value) && !is.nan(value);
is.bigint = isOfType('bigint');
// eslint-disable-next-line @typescript-eslint/ban-types
is.function_ = isOfType('function');
is.null_ = (value) => value === null;
is.class_ = (value) => is.function_(value) && value.toString().startsWith('class ');
is.boolean = (value) => value === true || value === false;
is.symbol = isOfType('symbol');
is.numericString = (value) => is.string(value) && !is.emptyStringOrWhitespace(value) && !Number.isNaN(Number(value));
is.array = (value, assertion) => {
    if (!Array.isArray(value)) {
        return false;
    }
    if (!is.function_(assertion)) {
        return true;
    }
    return value.every(assertion);
};
is.buffer = (value) => { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.isBuffer) === null || _c === void 0 ? void 0 : _c.call(_b, value)) !== null && _d !== void 0 ? _d : false; };
is.nullOrUndefined = (value) => is.null_(value) || is.undefined(value);
is.object = (value) => !is.null_(value) && (typeof value === 'object' || is.function_(value));
is.iterable = (value) => { var _a; return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]); };
is.asyncIterable = (value) => { var _a; return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]); };
is.generator = (value) => is.iterable(value) && is.function_(value.next) && is.function_(value.throw);
is.asyncGenerator = (value) => is.asyncIterable(value) && is.function_(value.next) && is.function_(value.throw);
is.nativePromise = (value) => isObjectOfType('Promise')(value);
const hasPromiseAPI = (value) => {
    var _a, _b;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.then) &&
        is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.catch);
};
is.promise = (value) => is.nativePromise(value) || hasPromiseAPI(value);
is.generatorFunction = isObjectOfType('GeneratorFunction');
is.asyncGeneratorFunction = (value) => getObjectType(value) === 'AsyncGeneratorFunction';
is.asyncFunction = (value) => getObjectType(value) === 'AsyncFunction';
// eslint-disable-next-line no-prototype-builtins, @typescript-eslint/ban-types
is.boundFunction = (value) => is.function_(value) && !value.hasOwnProperty('prototype');
is.regExp = isObjectOfType('RegExp');
is.date = isObjectOfType('Date');
is.error = isObjectOfType('Error');
is.map = (value) => isObjectOfType('Map')(value);
is.set = (value) => isObjectOfType('Set')(value);
is.weakMap = (value) => isObjectOfType('WeakMap')(value);
is.weakSet = (value) => isObjectOfType('WeakSet')(value);
is.int8Array = isObjectOfType('Int8Array');
is.uint8Array = isObjectOfType('Uint8Array');
is.uint8ClampedArray = isObjectOfType('Uint8ClampedArray');
is.int16Array = isObjectOfType('Int16Array');
is.uint16Array = isObjectOfType('Uint16Array');
is.int32Array = isObjectOfType('Int32Array');
is.uint32Array = isObjectOfType('Uint32Array');
is.float32Array = isObjectOfType('Float32Array');
is.float64Array = isObjectOfType('Float64Array');
is.bigInt64Array = isObjectOfType('BigInt64Array');
is.bigUint64Array = isObjectOfType('BigUint64Array');
is.arrayBuffer = isObjectOfType('ArrayBuffer');
is.sharedArrayBuffer = isObjectOfType('SharedArrayBuffer');
is.dataView = isObjectOfType('DataView');
is.directInstanceOf = (instance, class_) => Object.getPrototypeOf(instance) === class_.prototype;
is.urlInstance = (value) => isObjectOfType('URL')(value);
is.urlString = (value) => {
    if (!is.string(value)) {
        return false;
    }
    try {
        new URL(value); // eslint-disable-line no-new
        return true;
    }
    catch (_a) {
        return false;
    }
};
// TODO: Use the `not` operator with a type guard here when it's available.
// Example: `is.truthy = (value: unknown): value is (not false | not 0 | not '' | not undefined | not null) => Boolean(value);`
is.truthy = (value) => Boolean(value);
// Example: `is.falsy = (value: unknown): value is (not true | 0 | '' | undefined | null) => Boolean(value);`
is.falsy = (value) => !value;
is.nan = (value) => Number.isNaN(value);
is.primitive = (value) => is.null_(value) || isPrimitiveTypeName(typeof value);
is.integer = (value) => Number.isInteger(value);
is.safeInteger = (value) => Number.isSafeInteger(value);
is.plainObject = (value) => {
    // From: https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
    if (toString.call(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.getPrototypeOf({});
};
is.typedArray = (value) => isTypedArrayName(getObjectType(value));
const isValidLength = (value) => is.safeInteger(value) && value >= 0;
is.arrayLike = (value) => !is.nullOrUndefined(value) && !is.function_(value) && isValidLength(value.length);
is.inRange = (value, range) => {
    if (is.number(range)) {
        return value >= Math.min(0, range) && value <= Math.max(range, 0);
    }
    if (is.array(range) && range.length === 2) {
        return value >= Math.min(...range) && value <= Math.max(...range);
    }
    throw new TypeError(`Invalid range: ${JSON.stringify(range)}`);
};
const NODE_TYPE_ELEMENT = 1;
const DOM_PROPERTIES_TO_CHECK = [
    'innerHTML',
    'ownerDocument',
    'style',
    'attributes',
    'nodeValue'
];
is.domElement = (value) => {
    return is.object(value) &&
        value.nodeType === NODE_TYPE_ELEMENT &&
        is.string(value.nodeName) &&
        !is.plainObject(value) &&
        DOM_PROPERTIES_TO_CHECK.every(property => property in value);
};
is.observable = (value) => {
    var _a, _b, _c, _d;
    if (!value) {
        return false;
    }
    // eslint-disable-next-line no-use-extend-native/no-use-extend-native
    if (value === ((_b = (_a = value)[Symbol.observable]) === null || _b === void 0 ? void 0 : _b.call(_a))) {
        return true;
    }
    if (value === ((_d = (_c = value)['@@observable']) === null || _d === void 0 ? void 0 : _d.call(_c))) {
        return true;
    }
    return false;
};
is.nodeStream = (value) => is.object(value) && is.function_(value.pipe) && !is.observable(value);
is.infinite = (value) => value === Infinity || value === -Infinity;
const isAbsoluteMod2 = (remainder) => (value) => is.integer(value) && Math.abs(value % 2) === remainder;
is.evenInteger = isAbsoluteMod2(0);
is.oddInteger = isAbsoluteMod2(1);
is.emptyArray = (value) => is.array(value) && value.length === 0;
is.nonEmptyArray = (value) => is.array(value) && value.length > 0;
is.emptyString = (value) => is.string(value) && value.length === 0;
// TODO: Use `not ''` when the `not` operator is available.
is.nonEmptyString = (value) => is.string(value) && value.length > 0;
const isWhiteSpaceString = (value) => is.string(value) && !/\S/.test(value);
is.emptyStringOrWhitespace = (value) => is.emptyString(value) || isWhiteSpaceString(value);
is.emptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0;
// TODO: Use `not` operator here to remove `Map` and `Set` from type guard:
// - https://github.com/Microsoft/TypeScript/pull/29317
is.nonEmptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length > 0;
is.emptySet = (value) => is.set(value) && value.size === 0;
is.nonEmptySet = (value) => is.set(value) && value.size > 0;
is.emptyMap = (value) => is.map(value) && value.size === 0;
is.nonEmptyMap = (value) => is.map(value) && value.size > 0;
const predicateOnArray = (method, predicate, values) => {
    if (!is.function_(predicate)) {
        throw new TypeError(`Invalid predicate: ${JSON.stringify(predicate)}`);
    }
    if (values.length === 0) {
        throw new TypeError('Invalid number of values');
    }
    return method.call(values, predicate);
};
is.any = (predicate, ...values) => {
    const predicates = is.array(predicate) ? predicate : [predicate];
    return predicates.some(singlePredicate => predicateOnArray(Array.prototype.some, singlePredicate, values));
};
is.all = (predicate, ...values) => predicateOnArray(Array.prototype.every, predicate, values);
const assertType = (condition, description, value, options = {}) => {
    if (!condition) {
        const { multipleValues } = options;
        const valuesMessage = multipleValues ?
            `received values of types ${[
                ...new Set(value.map(singleValue => `\`${is(singleValue)}\``))
            ].join(', ')}` :
            `received value of type \`${is(value)}\``;
        throw new TypeError(`Expected value which is \`${description}\`, ${valuesMessage}.`);
    }
};
exports.assert = {
    // Unknowns.
    undefined: (value) => assertType(is.undefined(value), 'undefined', value),
    string: (value) => assertType(is.string(value), 'string', value),
    number: (value) => assertType(is.number(value), 'number', value),
    bigint: (value) => assertType(is.bigint(value), 'bigint', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: (value) => assertType(is.function_(value), 'Function', value),
    null_: (value) => assertType(is.null_(value), 'null', value),
    class_: (value) => assertType(is.class_(value), "Class" /* class_ */, value),
    boolean: (value) => assertType(is.boolean(value), 'boolean', value),
    symbol: (value) => assertType(is.symbol(value), 'symbol', value),
    numericString: (value) => assertType(is.numericString(value), "string with a number" /* numericString */, value),
    array: (value, assertion) => {
        const assert = assertType;
        assert(is.array(value), 'Array', value);
        if (assertion) {
            value.forEach(assertion);
        }
    },
    buffer: (value) => assertType(is.buffer(value), 'Buffer', value),
    nullOrUndefined: (value) => assertType(is.nullOrUndefined(value), "null or undefined" /* nullOrUndefined */, value),
    object: (value) => assertType(is.object(value), 'Object', value),
    iterable: (value) => assertType(is.iterable(value), "Iterable" /* iterable */, value),
    asyncIterable: (value) => assertType(is.asyncIterable(value), "AsyncIterable" /* asyncIterable */, value),
    generator: (value) => assertType(is.generator(value), 'Generator', value),
    asyncGenerator: (value) => assertType(is.asyncGenerator(value), 'AsyncGenerator', value),
    nativePromise: (value) => assertType(is.nativePromise(value), "native Promise" /* nativePromise */, value),
    promise: (value) => assertType(is.promise(value), 'Promise', value),
    generatorFunction: (value) => assertType(is.generatorFunction(value), 'GeneratorFunction', value),
    asyncGeneratorFunction: (value) => assertType(is.asyncGeneratorFunction(value), 'AsyncGeneratorFunction', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: (value) => assertType(is.asyncFunction(value), 'AsyncFunction', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: (value) => assertType(is.boundFunction(value), 'Function', value),
    regExp: (value) => assertType(is.regExp(value), 'RegExp', value),
    date: (value) => assertType(is.date(value), 'Date', value),
    error: (value) => assertType(is.error(value), 'Error', value),
    map: (value) => assertType(is.map(value), 'Map', value),
    set: (value) => assertType(is.set(value), 'Set', value),
    weakMap: (value) => assertType(is.weakMap(value), 'WeakMap', value),
    weakSet: (value) => assertType(is.weakSet(value), 'WeakSet', value),
    int8Array: (value) => assertType(is.int8Array(value), 'Int8Array', value),
    uint8Array: (value) => assertType(is.uint8Array(value), 'Uint8Array', value),
    uint8ClampedArray: (value) => assertType(is.uint8ClampedArray(value), 'Uint8ClampedArray', value),
    int16Array: (value) => assertType(is.int16Array(value), 'Int16Array', value),
    uint16Array: (value) => assertType(is.uint16Array(value), 'Uint16Array', value),
    int32Array: (value) => assertType(is.int32Array(value), 'Int32Array', value),
    uint32Array: (value) => assertType(is.uint32Array(value), 'Uint32Array', value),
    float32Array: (value) => assertType(is.float32Array(value), 'Float32Array', value),
    float64Array: (value) => assertType(is.float64Array(value), 'Float64Array', value),
    bigInt64Array: (value) => assertType(is.bigInt64Array(value), 'BigInt64Array', value),
    bigUint64Array: (value) => assertType(is.bigUint64Array(value), 'BigUint64Array', value),
    arrayBuffer: (value) => assertType(is.arrayBuffer(value), 'ArrayBuffer', value),
    sharedArrayBuffer: (value) => assertType(is.sharedArrayBuffer(value), 'SharedArrayBuffer', value),
    dataView: (value) => assertType(is.dataView(value), 'DataView', value),
    urlInstance: (value) => assertType(is.urlInstance(value), 'URL', value),
    urlString: (value) => assertType(is.urlString(value), "string with a URL" /* urlString */, value),
    truthy: (value) => assertType(is.truthy(value), "truthy" /* truthy */, value),
    falsy: (value) => assertType(is.falsy(value), "falsy" /* falsy */, value),
    nan: (value) => assertType(is.nan(value), "NaN" /* nan */, value),
    primitive: (value) => assertType(is.primitive(value), "primitive" /* primitive */, value),
    integer: (value) => assertType(is.integer(value), "integer" /* integer */, value),
    safeInteger: (value) => assertType(is.safeInteger(value), "integer" /* safeInteger */, value),
    plainObject: (value) => assertType(is.plainObject(value), "plain object" /* plainObject */, value),
    typedArray: (value) => assertType(is.typedArray(value), "TypedArray" /* typedArray */, value),
    arrayLike: (value) => assertType(is.arrayLike(value), "array-like" /* arrayLike */, value),
    domElement: (value) => assertType(is.domElement(value), "HTMLElement" /* domElement */, value),
    observable: (value) => assertType(is.observable(value), 'Observable', value),
    nodeStream: (value) => assertType(is.nodeStream(value), "Node.js Stream" /* nodeStream */, value),
    infinite: (value) => assertType(is.infinite(value), "infinite number" /* infinite */, value),
    emptyArray: (value) => assertType(is.emptyArray(value), "empty array" /* emptyArray */, value),
    nonEmptyArray: (value) => assertType(is.nonEmptyArray(value), "non-empty array" /* nonEmptyArray */, value),
    emptyString: (value) => assertType(is.emptyString(value), "empty string" /* emptyString */, value),
    nonEmptyString: (value) => assertType(is.nonEmptyString(value), "non-empty string" /* nonEmptyString */, value),
    emptyStringOrWhitespace: (value) => assertType(is.emptyStringOrWhitespace(value), "empty string or whitespace" /* emptyStringOrWhitespace */, value),
    emptyObject: (value) => assertType(is.emptyObject(value), "empty object" /* emptyObject */, value),
    nonEmptyObject: (value) => assertType(is.nonEmptyObject(value), "non-empty object" /* nonEmptyObject */, value),
    emptySet: (value) => assertType(is.emptySet(value), "empty set" /* emptySet */, value),
    nonEmptySet: (value) => assertType(is.nonEmptySet(value), "non-empty set" /* nonEmptySet */, value),
    emptyMap: (value) => assertType(is.emptyMap(value), "empty map" /* emptyMap */, value),
    nonEmptyMap: (value) => assertType(is.nonEmptyMap(value), "non-empty map" /* nonEmptyMap */, value),
    // Numbers.
    evenInteger: (value) => assertType(is.evenInteger(value), "even integer" /* evenInteger */, value),
    oddInteger: (value) => assertType(is.oddInteger(value), "odd integer" /* oddInteger */, value),
    // Two arguments.
    directInstanceOf: (instance, class_) => assertType(is.directInstanceOf(instance, class_), "T" /* directInstanceOf */, instance),
    inRange: (value, range) => assertType(is.inRange(value, range), "in range" /* inRange */, value),
    // Variadic functions.
    any: (predicate, ...values) => {
        return assertType(is.any(predicate, ...values), "predicate returns truthy for any value" /* any */, values, { multipleValues: true });
    },
    all: (predicate, ...values) => assertType(is.all(predicate, ...values), "predicate returns truthy for all values" /* all */, values, { multipleValues: true })
};
// Some few keywords are reserved, but we'll populate them for Node.js users
// See https://github.com/Microsoft/TypeScript/issues/2536
Object.defineProperties(is, {
    class: {
        value: is.class_
    },
    function: {
        value: is.function_
    },
    null: {
        value: is.null_
    }
});
Object.defineProperties(exports.assert, {
    class: {
        value: exports.assert.class_
    },
    function: {
        value: exports.assert.function_
    },
    null: {
        value: exports.assert.null_
    }
});
exports.default = is;
// For CommonJS default export support
module.exports = is;
module.exports.default = is;
module.exports.assert = exports.assert;


/***/ }),

/***/ "./node_modules/@szmarczak/http-timer/dist/source/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@szmarczak/http-timer/dist/source/index.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const defer_to_connect_1 = __webpack_require__(/*! defer-to-connect */ "./node_modules/defer-to-connect/dist/source/index.js");
const nodejsMajorVersion = Number(process.versions.node.split('.')[0]);
const timer = (request) => {
    const timings = {
        start: Date.now(),
        socket: undefined,
        lookup: undefined,
        connect: undefined,
        secureConnect: undefined,
        upload: undefined,
        response: undefined,
        end: undefined,
        error: undefined,
        abort: undefined,
        phases: {
            wait: undefined,
            dns: undefined,
            tcp: undefined,
            tls: undefined,
            request: undefined,
            firstByte: undefined,
            download: undefined,
            total: undefined
        }
    };
    request.timings = timings;
    const handleError = (origin) => {
        const emit = origin.emit.bind(origin);
        origin.emit = (event, ...args) => {
            // Catches the `error` event
            if (event === 'error') {
                timings.error = Date.now();
                timings.phases.total = timings.error - timings.start;
                origin.emit = emit;
            }
            // Saves the original behavior
            return emit(event, ...args);
        };
    };
    handleError(request);
    request.prependOnceListener('abort', () => {
        timings.abort = Date.now();
        // Let the `end` response event be responsible for setting the total phase,
        // unless the Node.js major version is >= 13.
        if (!timings.response || nodejsMajorVersion >= 13) {
            timings.phases.total = Date.now() - timings.start;
        }
    });
    const onSocket = (socket) => {
        timings.socket = Date.now();
        timings.phases.wait = timings.socket - timings.start;
        const lookupListener = () => {
            timings.lookup = Date.now();
            timings.phases.dns = timings.lookup - timings.socket;
        };
        socket.prependOnceListener('lookup', lookupListener);
        defer_to_connect_1.default(socket, {
            connect: () => {
                timings.connect = Date.now();
                if (timings.lookup === undefined) {
                    socket.removeListener('lookup', lookupListener);
                    timings.lookup = timings.connect;
                    timings.phases.dns = timings.lookup - timings.socket;
                }
                timings.phases.tcp = timings.connect - timings.lookup;
                // This callback is called before flushing any data,
                // so we don't need to set `timings.phases.request` here.
            },
            secureConnect: () => {
                timings.secureConnect = Date.now();
                timings.phases.tls = timings.secureConnect - timings.connect;
            }
        });
    };
    if (request.socket) {
        onSocket(request.socket);
    }
    else {
        request.prependOnceListener('socket', onSocket);
    }
    const onUpload = () => {
        var _a;
        timings.upload = Date.now();
        timings.phases.request = timings.upload - (_a = timings.secureConnect, (_a !== null && _a !== void 0 ? _a : timings.connect));
    };
    const writableFinished = () => {
        if (typeof request.writableFinished === 'boolean') {
            return request.writableFinished;
        }
        // Node.js doesn't have `request.writableFinished` property
        return request.finished && request.outputSize === 0 && (!request.socket || request.socket.writableLength === 0);
    };
    if (writableFinished()) {
        onUpload();
    }
    else {
        request.prependOnceListener('finish', onUpload);
    }
    request.prependOnceListener('response', (response) => {
        timings.response = Date.now();
        timings.phases.firstByte = timings.response - timings.upload;
        response.timings = timings;
        handleError(response);
        response.prependOnceListener('end', () => {
            timings.end = Date.now();
            timings.phases.download = timings.end - timings.response;
            timings.phases.total = timings.end - timings.start;
        });
    });
    return timings;
};
exports.default = timer;
// For CommonJS default export support
module.exports = timer;
module.exports.default = timer;


/***/ }),

/***/ "./node_modules/cacheable-lookup/source/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/cacheable-lookup/source/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {
	V4MAPPED,
	ADDRCONFIG,
	ALL,
	promises: {
		Resolver: AsyncResolver
	},
	lookup: dnsLookup
} = __webpack_require__(/*! dns */ "dns");
const {promisify} = __webpack_require__(/*! util */ "util");
const os = __webpack_require__(/*! os */ "os");

const kCacheableLookupCreateConnection = Symbol('cacheableLookupCreateConnection');
const kCacheableLookupInstance = Symbol('cacheableLookupInstance');
const kExpires = Symbol('expires');

const supportsALL = typeof ALL === 'number';

const verifyAgent = agent => {
	if (!(agent && typeof agent.createConnection === 'function')) {
		throw new Error('Expected an Agent instance as the first argument');
	}
};

const map4to6 = entries => {
	for (const entry of entries) {
		if (entry.family === 6) {
			continue;
		}

		entry.address = `::ffff:${entry.address}`;
		entry.family = 6;
	}
};

const getIfaceInfo = () => {
	let has4 = false;
	let has6 = false;

	for (const device of Object.values(os.networkInterfaces())) {
		for (const iface of device) {
			if (iface.internal) {
				continue;
			}

			if (iface.family === 'IPv6') {
				has6 = true;
			} else {
				has4 = true;
			}

			if (has4 && has6) {
				return {has4, has6};
			}
		}
	}

	return {has4, has6};
};

const isIterable = map => {
	return Symbol.iterator in map;
};

const ttl = {ttl: true};
const all = {all: true};

class CacheableLookup {
	constructor({
		cache = new Map(),
		maxTtl = Infinity,
		fallbackDuration = 3600,
		errorTtl = 0.15,
		resolver = new AsyncResolver(),
		lookup = dnsLookup
	} = {}) {
		this.maxTtl = maxTtl;
		this.errorTtl = errorTtl;

		this._cache = cache;
		this._resolver = resolver;
		this._dnsLookup = promisify(lookup);

		if (this._resolver instanceof AsyncResolver) {
			this._resolve4 = this._resolver.resolve4.bind(this._resolver);
			this._resolve6 = this._resolver.resolve6.bind(this._resolver);
		} else {
			this._resolve4 = promisify(this._resolver.resolve4.bind(this._resolver));
			this._resolve6 = promisify(this._resolver.resolve6.bind(this._resolver));
		}

		this._iface = getIfaceInfo();

		this._pending = {};
		this._nextRemovalTime = false;
		this._hostnamesToFallback = new Set();

		if (fallbackDuration < 1) {
			this._fallback = false;
		} else {
			this._fallback = true;

			const interval = setInterval(() => {
				this._hostnamesToFallback.clear();
			}, fallbackDuration * 1000);

			/* istanbul ignore next: There is no `interval.unref()` when running inside an Electron renderer */
			if (interval.unref) {
				interval.unref();
			}
		}

		this.lookup = this.lookup.bind(this);
		this.lookupAsync = this.lookupAsync.bind(this);
	}

	set servers(servers) {
		this.clear();

		this._resolver.setServers(servers);
	}

	get servers() {
		return this._resolver.getServers();
	}

	lookup(hostname, options, callback) {
		if (typeof options === 'function') {
			callback = options;
			options = {};
		} else if (typeof options === 'number') {
			options = {
				family: options
			};
		}

		if (!callback) {
			throw new Error('Callback must be a function.');
		}

		// eslint-disable-next-line promise/prefer-await-to-then
		this.lookupAsync(hostname, options).then(result => {
			if (options.all) {
				callback(null, result);
			} else {
				callback(null, result.address, result.family, result.expires, result.ttl);
			}
		}, callback);
	}

	async lookupAsync(hostname, options = {}) {
		if (typeof options === 'number') {
			options = {
				family: options
			};
		}

		let cached = await this.query(hostname);

		if (options.family === 6) {
			const filtered = cached.filter(entry => entry.family === 6);

			if (options.hints & V4MAPPED) {
				if ((supportsALL && options.hints & ALL) || filtered.length === 0) {
					map4to6(cached);
				} else {
					cached = filtered;
				}
			} else {
				cached = filtered;
			}
		} else if (options.family === 4) {
			cached = cached.filter(entry => entry.family === 4);
		}

		if (options.hints & ADDRCONFIG) {
			const {_iface} = this;
			cached = cached.filter(entry => entry.family === 6 ? _iface.has6 : _iface.has4);
		}

		if (cached.length === 0) {
			const error = new Error(`cacheableLookup ENOTFOUND ${hostname}`);
			error.code = 'ENOTFOUND';
			error.hostname = hostname;

			throw error;
		}

		if (options.all) {
			return cached;
		}

		return cached[0];
	}

	async query(hostname) {
		let cached = await this._cache.get(hostname);

		if (!cached) {
			const pending = this._pending[hostname];

			if (pending) {
				cached = await pending;
			} else {
				const newPromise = this.queryAndCache(hostname);
				this._pending[hostname] = newPromise;

				try {
					cached = await newPromise;
				} finally {
					delete this._pending[hostname];
				}
			}
		}

		cached = cached.map(entry => {
			return {...entry};
		});

		return cached;
	}

	async _resolve(hostname) {
		const wrap = async promise => {
			try {
				return await promise;
			} catch (error) {
				if (error.code === 'ENODATA' || error.code === 'ENOTFOUND') {
					return [];
				}

				throw error;
			}
		};

		// ANY is unsafe as it doesn't trigger new queries in the underlying server.
		const [A, AAAA] = await Promise.all([
			this._resolve4(hostname, ttl),
			this._resolve6(hostname, ttl)
		].map(promise => wrap(promise)));

		let aTtl = 0;
		let aaaaTtl = 0;
		let cacheTtl = 0;

		const now = Date.now();

		for (const entry of A) {
			entry.family = 4;
			entry.expires = now + (entry.ttl * 1000);

			aTtl = Math.max(aTtl, entry.ttl);
		}

		for (const entry of AAAA) {
			entry.family = 6;
			entry.expires = now + (entry.ttl * 1000);

			aaaaTtl = Math.max(aaaaTtl, entry.ttl);
		}

		if (A.length > 0) {
			if (AAAA.length > 0) {
				cacheTtl = Math.min(aTtl, aaaaTtl);
			} else {
				cacheTtl = aTtl;
			}
		} else {
			cacheTtl = aaaaTtl;
		}

		return {
			entries: [
				...A,
				...AAAA
			],
			cacheTtl
		};
	}

	async _lookup(hostname) {
		try {
			const entries = await this._dnsLookup(hostname, {
				all: true
			});

			return {
				entries,
				cacheTtl: 0
			};
		} catch (_) {
			return {
				entries: [],
				cacheTtl: 0
			};
		}
	}

	async _set(hostname, data, cacheTtl) {
		if (this.maxTtl > 0 && cacheTtl > 0) {
			cacheTtl = Math.min(cacheTtl, this.maxTtl) * 1000;
			data[kExpires] = Date.now() + cacheTtl;

			try {
				await this._cache.set(hostname, data, cacheTtl);
			} catch (error) {
				this.lookupAsync = async () => {
					const cacheError = new Error('Cache Error. Please recreate the CacheableLookup instance.');
					cacheError.cause = error;

					throw cacheError;
				};
			}

			if (isIterable(this._cache)) {
				this._tick(cacheTtl);
			}
		}
	}

	async queryAndCache(hostname) {
		if (this._hostnamesToFallback.has(hostname)) {
			return this._dnsLookup(hostname, all);
		}

		let query = await this._resolve(hostname);

		if (query.entries.length === 0 && this._fallback) {
			query = await this._lookup(hostname);

			if (query.entries.length !== 0) {
				// Use `dns.lookup(...)` for that particular hostname
				this._hostnamesToFallback.add(hostname);
			}
		}

		const cacheTtl = query.entries.length === 0 ? this.errorTtl : query.cacheTtl;
		await this._set(hostname, query.entries, cacheTtl);

		return query.entries;
	}

	_tick(ms) {
		const nextRemovalTime = this._nextRemovalTime;

		if (!nextRemovalTime || ms < nextRemovalTime) {
			clearTimeout(this._removalTimeout);

			this._nextRemovalTime = ms;

			this._removalTimeout = setTimeout(() => {
				this._nextRemovalTime = false;

				let nextExpiry = Infinity;

				const now = Date.now();

				for (const [hostname, entries] of this._cache) {
					const expires = entries[kExpires];

					if (now >= expires) {
						this._cache.delete(hostname);
					} else if (expires < nextExpiry) {
						nextExpiry = expires;
					}
				}

				if (nextExpiry !== Infinity) {
					this._tick(nextExpiry - now);
				}
			}, ms);

			/* istanbul ignore next: There is no `timeout.unref()` when running inside an Electron renderer */
			if (this._removalTimeout.unref) {
				this._removalTimeout.unref();
			}
		}
	}

	install(agent) {
		verifyAgent(agent);

		if (kCacheableLookupCreateConnection in agent) {
			throw new Error('CacheableLookup has been already installed');
		}

		agent[kCacheableLookupCreateConnection] = agent.createConnection;
		agent[kCacheableLookupInstance] = this;

		agent.createConnection = (options, callback) => {
			if (!('lookup' in options)) {
				options.lookup = this.lookup;
			}

			return agent[kCacheableLookupCreateConnection](options, callback);
		};
	}

	uninstall(agent) {
		verifyAgent(agent);

		if (agent[kCacheableLookupCreateConnection]) {
			if (agent[kCacheableLookupInstance] !== this) {
				throw new Error('The agent is not owned by this CacheableLookup instance');
			}

			agent.createConnection = agent[kCacheableLookupCreateConnection];

			delete agent[kCacheableLookupCreateConnection];
			delete agent[kCacheableLookupInstance];
		}
	}

	updateInterfaceInfo() {
		const {_iface} = this;

		this._iface = getIfaceInfo();

		if ((_iface.has4 && !this._iface.has4) || (_iface.has6 && !this._iface.has6)) {
			this._cache.clear();
		}
	}

	clear(hostname) {
		if (hostname) {
			this._cache.delete(hostname);
			return;
		}

		this._cache.clear();
	}
}

module.exports = CacheableLookup;
module.exports.default = CacheableLookup;


/***/ }),

/***/ "./node_modules/cacheable-request/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cacheable-request/src/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const EventEmitter = __webpack_require__(/*! events */ "events");
const urlLib = __webpack_require__(/*! url */ "url");
const normalizeUrl = __webpack_require__(/*! normalize-url */ "./node_modules/normalize-url/index.js");
const getStream = __webpack_require__(/*! get-stream */ "./node_modules/get-stream/index.js");
const CachePolicy = __webpack_require__(/*! http-cache-semantics */ "./node_modules/http-cache-semantics/index.js");
const Response = __webpack_require__(/*! responselike */ "./node_modules/responselike/src/index.js");
const lowercaseKeys = __webpack_require__(/*! lowercase-keys */ "./node_modules/lowercase-keys/index.js");
const cloneResponse = __webpack_require__(/*! clone-response */ "./node_modules/clone-response/src/index.js");
const Keyv = __webpack_require__(/*! keyv */ "./node_modules/keyv/src/index.js");

class CacheableRequest {
	constructor(request, cacheAdapter) {
		if (typeof request !== 'function') {
			throw new TypeError('Parameter `request` must be a function');
		}

		this.cache = new Keyv({
			uri: typeof cacheAdapter === 'string' && cacheAdapter,
			store: typeof cacheAdapter !== 'string' && cacheAdapter,
			namespace: 'cacheable-request'
		});

		return this.createCacheableRequest(request);
	}

	createCacheableRequest(request) {
		return (opts, cb) => {
			let url;
			if (typeof opts === 'string') {
				url = normalizeUrlObject(urlLib.parse(opts));
				opts = {};
			} else if (opts instanceof urlLib.URL) {
				url = normalizeUrlObject(urlLib.parse(opts.toString()));
				opts = {};
			} else {
				const [pathname, ...searchParts] = (opts.path || '').split('?');
				const search = searchParts.length > 0 ?
					`?${searchParts.join('?')}` :
					'';
				url = normalizeUrlObject({ ...opts, pathname, search });
			}

			opts = {
				headers: {},
				method: 'GET',
				cache: true,
				strictTtl: false,
				automaticFailover: false,
				...opts,
				...urlObjectToRequestOptions(url)
			};
			opts.headers = lowercaseKeys(opts.headers);

			const ee = new EventEmitter();
			const normalizedUrlString = normalizeUrl(
				urlLib.format(url),
				{
					stripWWW: false,
					removeTrailingSlash: false,
					stripAuthentication: false
				}
			);
			const key = `${opts.method}:${normalizedUrlString}`;
			let revalidate = false;
			let madeRequest = false;

			const makeRequest = opts => {
				madeRequest = true;
				let requestErrored = false;
				let requestErrorCallback;

				const requestErrorPromise = new Promise(resolve => {
					requestErrorCallback = () => {
						if (!requestErrored) {
							requestErrored = true;
							resolve();
						}
					};
				});

				const handler = response => {
					if (revalidate && !opts.forceRefresh) {
						response.status = response.statusCode;
						const revalidatedPolicy = CachePolicy.fromObject(revalidate.cachePolicy).revalidatedPolicy(opts, response);
						if (!revalidatedPolicy.modified) {
							const headers = revalidatedPolicy.policy.responseHeaders();
							response = new Response(revalidate.statusCode, headers, revalidate.body, revalidate.url);
							response.cachePolicy = revalidatedPolicy.policy;
							response.fromCache = true;
						}
					}

					if (!response.fromCache) {
						response.cachePolicy = new CachePolicy(opts, response, opts);
						response.fromCache = false;
					}

					let clonedResponse;
					if (opts.cache && response.cachePolicy.storable()) {
						clonedResponse = cloneResponse(response);

						(async () => {
							try {
								const bodyPromise = getStream.buffer(response);

								await Promise.race([
									requestErrorPromise,
									new Promise(resolve => response.once('end', resolve))
								]);

								if (requestErrored) {
									return;
								}

								const body = await bodyPromise;

								const value = {
									cachePolicy: response.cachePolicy.toObject(),
									url: response.url,
									statusCode: response.fromCache ? revalidate.statusCode : response.statusCode,
									body
								};

								let ttl = opts.strictTtl ? response.cachePolicy.timeToLive() : undefined;
								if (opts.maxTtl) {
									ttl = ttl ? Math.min(ttl, opts.maxTtl) : opts.maxTtl;
								}

								await this.cache.set(key, value, ttl);
							} catch (error) {
								ee.emit('error', new CacheableRequest.CacheError(error));
							}
						})();
					} else if (opts.cache && revalidate) {
						(async () => {
							try {
								await this.cache.delete(key);
							} catch (error) {
								ee.emit('error', new CacheableRequest.CacheError(error));
							}
						})();
					}

					ee.emit('response', clonedResponse || response);
					if (typeof cb === 'function') {
						cb(clonedResponse || response);
					}
				};

				try {
					const req = request(opts, handler);
					req.once('error', requestErrorCallback);
					req.once('abort', requestErrorCallback);
					ee.emit('request', req);
				} catch (error) {
					ee.emit('error', new CacheableRequest.RequestError(error));
				}
			};

			(async () => {
				const get = async opts => {
					await Promise.resolve();

					const cacheEntry = opts.cache ? await this.cache.get(key) : undefined;
					if (typeof cacheEntry === 'undefined') {
						return makeRequest(opts);
					}

					const policy = CachePolicy.fromObject(cacheEntry.cachePolicy);
					if (policy.satisfiesWithoutRevalidation(opts) && !opts.forceRefresh) {
						const headers = policy.responseHeaders();
						const response = new Response(cacheEntry.statusCode, headers, cacheEntry.body, cacheEntry.url);
						response.cachePolicy = policy;
						response.fromCache = true;

						ee.emit('response', response);
						if (typeof cb === 'function') {
							cb(response);
						}
					} else {
						revalidate = cacheEntry;
						opts.headers = policy.revalidationHeaders(opts);
						makeRequest(opts);
					}
				};

				const errorHandler = error => ee.emit('error', new CacheableRequest.CacheError(error));
				this.cache.once('error', errorHandler);
				ee.on('response', () => this.cache.removeListener('error', errorHandler));

				try {
					await get(opts);
				} catch (error) {
					if (opts.automaticFailover && !madeRequest) {
						makeRequest(opts);
					}

					ee.emit('error', new CacheableRequest.CacheError(error));
				}
			})();

			return ee;
		};
	}
}

function urlObjectToRequestOptions(url) {
	const options = { ...url };
	options.path = `${url.pathname || '/'}${url.search || ''}`;
	delete options.pathname;
	delete options.search;
	return options;
}

function normalizeUrlObject(url) {
	// If url was parsed by url.parse or new URL:
	// - hostname will be set
	// - host will be hostname[:port]
	// - port will be set if it was explicit in the parsed string
	// Otherwise, url was from request options:
	// - hostname or host may be set
	// - host shall not have port encoded
	return {
		protocol: url.protocol,
		auth: url.auth,
		hostname: url.hostname || url.host || 'localhost',
		port: url.port,
		pathname: url.pathname,
		search: url.search
	};
}

CacheableRequest.RequestError = class extends Error {
	constructor(error) {
		super(error.message);
		this.name = 'RequestError';
		Object.assign(this, error);
	}
};

CacheableRequest.CacheError = class extends Error {
	constructor(error) {
		super(error.message);
		this.name = 'CacheError';
		Object.assign(this, error);
	}
};

module.exports = CacheableRequest;


/***/ }),

/***/ "./node_modules/clone-response/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/clone-response/src/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const PassThrough = __webpack_require__(/*! stream */ "stream").PassThrough;
const mimicResponse = __webpack_require__(/*! mimic-response */ "./node_modules/mimic-response/index.js");

const cloneResponse = response => {
	if (!(response && response.pipe)) {
		throw new TypeError('Parameter `response` must be a response stream.');
	}

	const clone = new PassThrough();
	mimicResponse(response, clone);

	return response.pipe(clone);
};

module.exports = cloneResponse;


/***/ }),

/***/ "./node_modules/decompress-response/index.js":
/*!***************************************************!*\
  !*** ./node_modules/decompress-response/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Transform, PassThrough} = __webpack_require__(/*! stream */ "stream");
const zlib = __webpack_require__(/*! zlib */ "zlib");
const mimicResponse = __webpack_require__(/*! mimic-response */ "./node_modules/decompress-response/node_modules/mimic-response/index.js");

module.exports = response => {
	const contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();

	if (!['gzip', 'deflate', 'br'].includes(contentEncoding)) {
		return response;
	}

	// TODO: Remove this when targeting Node.js 12.
	const isBrotli = contentEncoding === 'br';
	if (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {
		response.destroy(new Error('Brotli is not supported on Node.js < 12'));
		return response;
	}

	let isEmpty = true;

	const checker = new Transform({
		transform(data, _encoding, callback) {
			isEmpty = false;

			callback(null, data);
		},

		flush(callback) {
			callback();
		}
	});

	const finalStream = new PassThrough({
		autoDestroy: false,
		destroy(error, callback) {
			response.destroy();

			callback(error);
		}
	});

	const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();

	decompressStream.once('error', error => {
		if (isEmpty && !response.readable) {
			finalStream.end();
			return;
		}

		finalStream.destroy(error);
	});

	mimicResponse(response, finalStream);
	response.pipe(checker).pipe(decompressStream).pipe(finalStream);

	return finalStream;
};


/***/ }),

/***/ "./node_modules/decompress-response/node_modules/mimic-response/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/decompress-response/node_modules/mimic-response/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProperties = [
	'aborted',
	'complete',
	'headers',
	'httpVersion',
	'httpVersionMinor',
	'httpVersionMajor',
	'method',
	'rawHeaders',
	'rawTrailers',
	'setTimeout',
	'socket',
	'statusCode',
	'statusMessage',
	'trailers',
	'url'
];

module.exports = (fromStream, toStream) => {
	if (toStream._readableState.autoDestroy) {
		throw new Error('The second stream must have the `autoDestroy` option set to `false`');
	}

	const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));

	const properties = {};

	for (const property of fromProperties) {
		// Don't overwrite existing properties.
		if (property in toStream) {
			continue;
		}

		properties[property] = {
			get() {
				const value = fromStream[property];
				const isFunction = typeof value === 'function';

				return isFunction ? value.bind(fromStream) : value;
			},
			set(value) {
				fromStream[property] = value;
			},
			enumerable: true,
			configurable: false
		};
	}

	Object.defineProperties(toStream, properties);

	fromStream.once('aborted', () => {
		toStream.destroy();

		toStream.emit('aborted');
	});

	fromStream.once('close', () => {
		if (fromStream.complete) {
			if (toStream.readable) {
				toStream.once('end', () => {
					toStream.emit('close');
				});
			} else {
				toStream.emit('close');
			}
		} else {
			toStream.emit('close');
		}
	});

	return toStream;
};


/***/ }),

/***/ "./node_modules/defer-to-connect/dist/source/index.js":
/*!************************************************************!*\
  !*** ./node_modules/defer-to-connect/dist/source/index.js ***!
  \************************************************************/
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isTLSSocket(socket) {
    return socket.encrypted;
}
const deferToConnect = (socket, fn) => {
    let listeners;
    if (typeof fn === 'function') {
        const connect = fn;
        listeners = { connect };
    }
    else {
        listeners = fn;
    }
    const hasConnectListener = typeof listeners.connect === 'function';
    const hasSecureConnectListener = typeof listeners.secureConnect === 'function';
    const hasCloseListener = typeof listeners.close === 'function';
    const onConnect = () => {
        if (hasConnectListener) {
            listeners.connect();
        }
        if (isTLSSocket(socket) && hasSecureConnectListener) {
            if (socket.authorized) {
                listeners.secureConnect();
            }
            else if (!socket.authorizationError) {
                socket.once('secureConnect', listeners.secureConnect);
            }
        }
        if (hasCloseListener) {
            socket.once('close', listeners.close);
        }
    };
    if (socket.writable && !socket.connecting) {
        onConnect();
    }
    else if (socket.connecting) {
        socket.once('connect', onConnect);
    }
    else if (socket.destroyed && hasCloseListener) {
        listeners.close(socket._hadError);
    }
};
exports.default = deferToConnect;
// For CommonJS default export support
module.exports = deferToConnect;
module.exports.default = deferToConnect;


/***/ }),

/***/ "./node_modules/end-of-stream/index.js":
/*!*********************************************!*\
  !*** ./node_modules/end-of-stream/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var once = __webpack_require__(/*! once */ "./node_modules/once/once.js");

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		process.nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ "./node_modules/get-stream/buffer-stream.js":
/*!**************************************************!*\
  !*** ./node_modules/get-stream/buffer-stream.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {PassThrough: PassThroughStream} = __webpack_require__(/*! stream */ "stream");

module.exports = options => {
	options = {...options};

	const {array} = options;
	let {encoding} = options;
	const isBuffer = encoding === 'buffer';
	let objectMode = false;

	if (array) {
		objectMode = !(encoding || isBuffer);
	} else {
		encoding = encoding || 'utf8';
	}

	if (isBuffer) {
		encoding = null;
	}

	const stream = new PassThroughStream({objectMode});

	if (encoding) {
		stream.setEncoding(encoding);
	}

	let length = 0;
	const chunks = [];

	stream.on('data', chunk => {
		chunks.push(chunk);

		if (objectMode) {
			length = chunks.length;
		} else {
			length += chunk.length;
		}
	});

	stream.getBufferedValue = () => {
		if (array) {
			return chunks;
		}

		return isBuffer ? Buffer.concat(chunks, length) : chunks.join('');
	};

	stream.getBufferedLength = () => length;

	return stream;
};


/***/ }),

/***/ "./node_modules/get-stream/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-stream/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {constants: BufferConstants} = __webpack_require__(/*! buffer */ "buffer");
const pump = __webpack_require__(/*! pump */ "./node_modules/pump/index.js");
const bufferStream = __webpack_require__(/*! ./buffer-stream */ "./node_modules/get-stream/buffer-stream.js");

class MaxBufferError extends Error {
	constructor() {
		super('maxBuffer exceeded');
		this.name = 'MaxBufferError';
	}
}

async function getStream(inputStream, options) {
	if (!inputStream) {
		return Promise.reject(new Error('Expected a stream'));
	}

	options = {
		maxBuffer: Infinity,
		...options
	};

	const {maxBuffer} = options;

	let stream;
	await new Promise((resolve, reject) => {
		const rejectPromise = error => {
			// Don't retrieve an oversized buffer.
			if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
				error.bufferedData = stream.getBufferedValue();
			}

			reject(error);
		};

		stream = pump(inputStream, bufferStream(options), error => {
			if (error) {
				rejectPromise(error);
				return;
			}

			resolve();
		});

		stream.on('data', () => {
			if (stream.getBufferedLength() > maxBuffer) {
				rejectPromise(new MaxBufferError());
			}
		});
	});

	return stream.getBufferedValue();
}

module.exports = getStream;
// TODO: Remove this for the next major release
module.exports.default = getStream;
module.exports.buffer = (stream, options) => getStream(stream, {...options, encoding: 'buffer'});
module.exports.array = (stream, options) => getStream(stream, {...options, array: true});
module.exports.MaxBufferError = MaxBufferError;


/***/ }),

/***/ "./node_modules/got/dist/source/as-promise/create-rejection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/got/dist/source/as-promise/create-rejection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ./types */ "./node_modules/got/dist/source/as-promise/types.js");
function createRejection(error, ...beforeErrorGroups) {
    const promise = (async () => {
        if (error instanceof types_1.RequestError) {
            try {
                for (const hooks of beforeErrorGroups) {
                    if (hooks) {
                        for (const hook of hooks) {
                            // eslint-disable-next-line no-await-in-loop
                            error = await hook(error);
                        }
                    }
                }
            }
            catch (error_) {
                error = error_;
            }
        }
        throw error;
    })();
    const returnPromise = () => promise;
    promise.json = returnPromise;
    promise.text = returnPromise;
    promise.buffer = returnPromise;
    promise.on = returnPromise;
    return promise;
}
exports.default = createRejection;


/***/ }),

/***/ "./node_modules/got/dist/source/as-promise/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/got/dist/source/as-promise/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "events");
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
const PCancelable = __webpack_require__(/*! p-cancelable */ "./node_modules/p-cancelable/index.js");
const types_1 = __webpack_require__(/*! ./types */ "./node_modules/got/dist/source/as-promise/types.js");
const parse_body_1 = __webpack_require__(/*! ./parse-body */ "./node_modules/got/dist/source/as-promise/parse-body.js");
const core_1 = __webpack_require__(/*! ../core */ "./node_modules/got/dist/source/core/index.js");
const proxy_events_1 = __webpack_require__(/*! ../core/utils/proxy-events */ "./node_modules/got/dist/source/core/utils/proxy-events.js");
const get_buffer_1 = __webpack_require__(/*! ../core/utils/get-buffer */ "./node_modules/got/dist/source/core/utils/get-buffer.js");
const is_response_ok_1 = __webpack_require__(/*! ../core/utils/is-response-ok */ "./node_modules/got/dist/source/core/utils/is-response-ok.js");
const proxiedRequestEvents = [
    'request',
    'response',
    'redirect',
    'uploadProgress',
    'downloadProgress'
];
function asPromise(normalizedOptions) {
    let globalRequest;
    let globalResponse;
    const emitter = new events_1.EventEmitter();
    const promise = new PCancelable((resolve, reject, onCancel) => {
        const makeRequest = (retryCount) => {
            const request = new core_1.default(undefined, normalizedOptions);
            request.retryCount = retryCount;
            request._noPipe = true;
            onCancel(() => request.destroy());
            onCancel.shouldReject = false;
            onCancel(() => reject(new types_1.CancelError(request)));
            globalRequest = request;
            request.once('response', async (response) => {
                var _a;
                response.retryCount = retryCount;
                if (response.request.aborted) {
                    // Canceled while downloading - will throw a `CancelError` or `TimeoutError` error
                    return;
                }
                // Download body
                let rawBody;
                try {
                    rawBody = await get_buffer_1.default(request);
                    response.rawBody = rawBody;
                }
                catch (_b) {
                    // The same error is caught below.
                    // See request.once('error')
                    return;
                }
                if (request._isAboutToError) {
                    return;
                }
                // Parse body
                const contentEncoding = ((_a = response.headers['content-encoding']) !== null && _a !== void 0 ? _a : '').toLowerCase();
                const isCompressed = ['gzip', 'deflate', 'br'].includes(contentEncoding);
                const { options } = request;
                if (isCompressed && !options.decompress) {
                    response.body = rawBody;
                }
                else {
                    try {
                        response.body = parse_body_1.default(response, options.responseType, options.parseJson, options.encoding);
                    }
                    catch (error) {
                        // Fallback to `utf8`
                        response.body = rawBody.toString();
                        if (is_response_ok_1.isResponseOk(response)) {
                            request._beforeError(error);
                            return;
                        }
                    }
                }
                try {
                    for (const [index, hook] of options.hooks.afterResponse.entries()) {
                        // @ts-expect-error TS doesn't notice that CancelableRequest is a Promise
                        // eslint-disable-next-line no-await-in-loop
                        response = await hook(response, async (updatedOptions) => {
                            const typedOptions = core_1.default.normalizeArguments(undefined, {
                                ...updatedOptions,
                                retry: {
                                    calculateDelay: () => 0
                                },
                                throwHttpErrors: false,
                                resolveBodyOnly: false
                            }, options);
                            // Remove any further hooks for that request, because we'll call them anyway.
                            // The loop continues. We don't want duplicates (asPromise recursion).
                            typedOptions.hooks.afterResponse = typedOptions.hooks.afterResponse.slice(0, index);
                            for (const hook of typedOptions.hooks.beforeRetry) {
                                // eslint-disable-next-line no-await-in-loop
                                await hook(typedOptions);
                            }
                            const promise = asPromise(typedOptions);
                            onCancel(() => {
                                promise.catch(() => { });
                                promise.cancel();
                            });
                            return promise;
                        });
                    }
                }
                catch (error) {
                    request._beforeError(new types_1.RequestError(error.message, error, request));
                    return;
                }
                if (!is_response_ok_1.isResponseOk(response)) {
                    request._beforeError(new types_1.HTTPError(response));
                    return;
                }
                globalResponse = response;
                resolve(request.options.resolveBodyOnly ? response.body : response);
            });
            const onError = (error) => {
                if (promise.isCanceled) {
                    return;
                }
                const { options } = request;
                if (error instanceof types_1.HTTPError && !options.throwHttpErrors) {
                    const { response } = error;
                    resolve(request.options.resolveBodyOnly ? response.body : response);
                    return;
                }
                reject(error);
            };
            request.once('error', onError);
            const previousBody = request.options.body;
            request.once('retry', (newRetryCount, error) => {
                var _a, _b;
                if (previousBody === ((_a = error.request) === null || _a === void 0 ? void 0 : _a.options.body) && is_1.default.nodeStream((_b = error.request) === null || _b === void 0 ? void 0 : _b.options.body)) {
                    onError(error);
                    return;
                }
                makeRequest(newRetryCount);
            });
            proxy_events_1.default(request, emitter, proxiedRequestEvents);
        };
        makeRequest(0);
    });
    promise.on = (event, fn) => {
        emitter.on(event, fn);
        return promise;
    };
    const shortcut = (responseType) => {
        const newPromise = (async () => {
            // Wait until downloading has ended
            await promise;
            const { options } = globalResponse.request;
            return parse_body_1.default(globalResponse, responseType, options.parseJson, options.encoding);
        })();
        Object.defineProperties(newPromise, Object.getOwnPropertyDescriptors(promise));
        return newPromise;
    };
    promise.json = () => {
        const { headers } = globalRequest.options;
        if (!globalRequest.writableFinished && headers.accept === undefined) {
            headers.accept = 'application/json';
        }
        return shortcut('json');
    };
    promise.buffer = () => shortcut('buffer');
    promise.text = () => shortcut('text');
    return promise;
}
exports.default = asPromise;
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/got/dist/source/as-promise/types.js"), exports);


/***/ }),

/***/ "./node_modules/got/dist/source/as-promise/normalize-arguments.js":
/*!************************************************************************!*\
  !*** ./node_modules/got/dist/source/as-promise/normalize-arguments.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
const normalizeArguments = (options, defaults) => {
    if (is_1.default.null_(options.encoding)) {
        throw new TypeError('To get a Buffer, set `options.responseType` to `buffer` instead');
    }
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.encoding);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.resolveBodyOnly);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.methodRewriting);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.isStream);
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.responseType);
    // `options.responseType`
    if (options.responseType === undefined) {
        options.responseType = 'text';
    }
    // `options.retry`
    const { retry } = options;
    if (defaults) {
        options.retry = { ...defaults.retry };
    }
    else {
        options.retry = {
            calculateDelay: retryObject => retryObject.computedValue,
            limit: 0,
            methods: [],
            statusCodes: [],
            errorCodes: [],
            maxRetryAfter: undefined
        };
    }
    if (is_1.default.object(retry)) {
        options.retry = {
            ...options.retry,
            ...retry
        };
        options.retry.methods = [...new Set(options.retry.methods.map(method => method.toUpperCase()))];
        options.retry.statusCodes = [...new Set(options.retry.statusCodes)];
        options.retry.errorCodes = [...new Set(options.retry.errorCodes)];
    }
    else if (is_1.default.number(retry)) {
        options.retry.limit = retry;
    }
    if (is_1.default.undefined(options.retry.maxRetryAfter)) {
        options.retry.maxRetryAfter = Math.min(
        // TypeScript is not smart enough to handle `.filter(x => is.number(x))`.
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        ...[options.timeout.request, options.timeout.connect].filter(is_1.default.number));
    }
    // `options.pagination`
    if (is_1.default.object(options.pagination)) {
        if (defaults) {
            options.pagination = {
                ...defaults.pagination,
                ...options.pagination
            };
        }
        const { pagination } = options;
        if (!is_1.default.function_(pagination.transform)) {
            throw new Error('`options.pagination.transform` must be implemented');
        }
        if (!is_1.default.function_(pagination.shouldContinue)) {
            throw new Error('`options.pagination.shouldContinue` must be implemented');
        }
        if (!is_1.default.function_(pagination.filter)) {
            throw new TypeError('`options.pagination.filter` must be implemented');
        }
        if (!is_1.default.function_(pagination.paginate)) {
            throw new Error('`options.pagination.paginate` must be implemented');
        }
    }
    // JSON mode
    if (options.responseType === 'json' && options.headers.accept === undefined) {
        options.headers.accept = 'application/json';
    }
    return options;
};
exports.default = normalizeArguments;


/***/ }),

/***/ "./node_modules/got/dist/source/as-promise/parse-body.js":
/*!***************************************************************!*\
  !*** ./node_modules/got/dist/source/as-promise/parse-body.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ./types */ "./node_modules/got/dist/source/as-promise/types.js");
const parseBody = (response, responseType, parseJson, encoding) => {
    const { rawBody } = response;
    try {
        if (responseType === 'text') {
            return rawBody.toString(encoding);
        }
        if (responseType === 'json') {
            return rawBody.length === 0 ? '' : parseJson(rawBody.toString());
        }
        if (responseType === 'buffer') {
            return rawBody;
        }
        throw new types_1.ParseError({
            message: `Unknown body type '${responseType}'`,
            name: 'Error'
        }, response);
    }
    catch (error) {
        throw new types_1.ParseError(error, response);
    }
};
exports.default = parseBody;


/***/ }),

/***/ "./node_modules/got/dist/source/as-promise/types.js":
/*!**********************************************************!*\
  !*** ./node_modules/got/dist/source/as-promise/types.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancelError = exports.ParseError = void 0;
const core_1 = __webpack_require__(/*! ../core */ "./node_modules/got/dist/source/core/index.js");
/**
An error to be thrown when server response code is 2xx, and parsing body fails.
Includes a `response` property.
*/
class ParseError extends core_1.RequestError {
    constructor(error, response) {
        const { options } = response.request;
        super(`${error.message} in "${options.url.toString()}"`, error, response.request);
        this.name = 'ParseError';
    }
}
exports.ParseError = ParseError;
/**
An error to be thrown when the request is aborted with `.cancel()`.
*/
class CancelError extends core_1.RequestError {
    constructor(request) {
        super('Promise was canceled', {}, request);
        this.name = 'CancelError';
    }
    get isCanceled() {
        return true;
    }
}
exports.CancelError = CancelError;
__exportStar(__webpack_require__(/*! ../core */ "./node_modules/got/dist/source/core/index.js"), exports);


/***/ }),

/***/ "./node_modules/got/dist/source/core/calculate-retry-delay.js":
/*!********************************************************************!*\
  !*** ./node_modules/got/dist/source/core/calculate-retry-delay.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retryAfterStatusCodes = void 0;
exports.retryAfterStatusCodes = new Set([413, 429, 503]);
const calculateRetryDelay = ({ attemptCount, retryOptions, error, retryAfter }) => {
    if (attemptCount > retryOptions.limit) {
        return 0;
    }
    const hasMethod = retryOptions.methods.includes(error.options.method);
    const hasErrorCode = retryOptions.errorCodes.includes(error.code);
    const hasStatusCode = error.response && retryOptions.statusCodes.includes(error.response.statusCode);
    if (!hasMethod || (!hasErrorCode && !hasStatusCode)) {
        return 0;
    }
    if (error.response) {
        if (retryAfter) {
            if (retryOptions.maxRetryAfter === undefined || retryAfter > retryOptions.maxRetryAfter) {
                return 0;
            }
            return retryAfter;
        }
        if (error.response.statusCode === 413) {
            return 0;
        }
    }
    const noise = Math.random() * 100;
    return ((2 ** (attemptCount - 1)) * 1000) + noise;
};
exports.default = calculateRetryDelay;


/***/ }),

/***/ "./node_modules/got/dist/source/core/index.js":
/*!****************************************************!*\
  !*** ./node_modules/got/dist/source/core/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsupportedProtocolError = exports.ReadError = exports.TimeoutError = exports.UploadError = exports.CacheError = exports.HTTPError = exports.MaxRedirectsError = exports.RequestError = exports.setNonEnumerableProperties = exports.knownHookEvents = exports.withoutBody = exports.kIsNormalizedAlready = void 0;
const util_1 = __webpack_require__(/*! util */ "util");
const stream_1 = __webpack_require__(/*! stream */ "stream");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const url_1 = __webpack_require__(/*! url */ "url");
const http = __webpack_require__(/*! http */ "http");
const http_1 = __webpack_require__(/*! http */ "http");
const https = __webpack_require__(/*! https */ "https");
const http_timer_1 = __webpack_require__(/*! @szmarczak/http-timer */ "./node_modules/@szmarczak/http-timer/dist/source/index.js");
const cacheable_lookup_1 = __webpack_require__(/*! cacheable-lookup */ "./node_modules/cacheable-lookup/source/index.js");
const CacheableRequest = __webpack_require__(/*! cacheable-request */ "./node_modules/cacheable-request/src/index.js");
const decompressResponse = __webpack_require__(/*! decompress-response */ "./node_modules/decompress-response/index.js");
// @ts-expect-error Missing types
const http2wrapper = __webpack_require__(/*! http2-wrapper */ "./node_modules/http2-wrapper/source/index.js");
const lowercaseKeys = __webpack_require__(/*! lowercase-keys */ "./node_modules/lowercase-keys/index.js");
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
const get_body_size_1 = __webpack_require__(/*! ./utils/get-body-size */ "./node_modules/got/dist/source/core/utils/get-body-size.js");
const is_form_data_1 = __webpack_require__(/*! ./utils/is-form-data */ "./node_modules/got/dist/source/core/utils/is-form-data.js");
const proxy_events_1 = __webpack_require__(/*! ./utils/proxy-events */ "./node_modules/got/dist/source/core/utils/proxy-events.js");
const timed_out_1 = __webpack_require__(/*! ./utils/timed-out */ "./node_modules/got/dist/source/core/utils/timed-out.js");
const url_to_options_1 = __webpack_require__(/*! ./utils/url-to-options */ "./node_modules/got/dist/source/core/utils/url-to-options.js");
const options_to_url_1 = __webpack_require__(/*! ./utils/options-to-url */ "./node_modules/got/dist/source/core/utils/options-to-url.js");
const weakable_map_1 = __webpack_require__(/*! ./utils/weakable-map */ "./node_modules/got/dist/source/core/utils/weakable-map.js");
const get_buffer_1 = __webpack_require__(/*! ./utils/get-buffer */ "./node_modules/got/dist/source/core/utils/get-buffer.js");
const dns_ip_version_1 = __webpack_require__(/*! ./utils/dns-ip-version */ "./node_modules/got/dist/source/core/utils/dns-ip-version.js");
const is_response_ok_1 = __webpack_require__(/*! ./utils/is-response-ok */ "./node_modules/got/dist/source/core/utils/is-response-ok.js");
const deprecation_warning_1 = __webpack_require__(/*! ../utils/deprecation-warning */ "./node_modules/got/dist/source/utils/deprecation-warning.js");
const normalize_arguments_1 = __webpack_require__(/*! ../as-promise/normalize-arguments */ "./node_modules/got/dist/source/as-promise/normalize-arguments.js");
const calculate_retry_delay_1 = __webpack_require__(/*! ./calculate-retry-delay */ "./node_modules/got/dist/source/core/calculate-retry-delay.js");
let globalDnsCache;
const kRequest = Symbol('request');
const kResponse = Symbol('response');
const kResponseSize = Symbol('responseSize');
const kDownloadedSize = Symbol('downloadedSize');
const kBodySize = Symbol('bodySize');
const kUploadedSize = Symbol('uploadedSize');
const kServerResponsesPiped = Symbol('serverResponsesPiped');
const kUnproxyEvents = Symbol('unproxyEvents');
const kIsFromCache = Symbol('isFromCache');
const kCancelTimeouts = Symbol('cancelTimeouts');
const kStartedReading = Symbol('startedReading');
const kStopReading = Symbol('stopReading');
const kTriggerRead = Symbol('triggerRead');
const kBody = Symbol('body');
const kJobs = Symbol('jobs');
const kOriginalResponse = Symbol('originalResponse');
const kRetryTimeout = Symbol('retryTimeout');
exports.kIsNormalizedAlready = Symbol('isNormalizedAlready');
const supportsBrotli = is_1.default.string(process.versions.brotli);
exports.withoutBody = new Set(['GET', 'HEAD']);
exports.knownHookEvents = [
    'init',
    'beforeRequest',
    'beforeRedirect',
    'beforeError',
    'beforeRetry',
    // Promise-Only
    'afterResponse'
];
function validateSearchParameters(searchParameters) {
    // eslint-disable-next-line guard-for-in
    for (const key in searchParameters) {
        const value = searchParameters[key];
        if (!is_1.default.string(value) && !is_1.default.number(value) && !is_1.default.boolean(value) && !is_1.default.null_(value) && !is_1.default.undefined(value)) {
            throw new TypeError(`The \`searchParams\` value '${String(value)}' must be a string, number, boolean or null`);
        }
    }
}
function isClientRequest(clientRequest) {
    return is_1.default.object(clientRequest) && !('statusCode' in clientRequest);
}
const cacheableStore = new weakable_map_1.default();
const waitForOpenFile = async (file) => new Promise((resolve, reject) => {
    const onError = (error) => {
        reject(error);
    };
    // Node.js 12 has incomplete types
    if (!file.pending) {
        resolve();
    }
    file.once('error', onError);
    file.once('ready', () => {
        file.off('error', onError);
        resolve();
    });
});
const redirectCodes = new Set([300, 301, 302, 303, 304, 307, 308]);
const nonEnumerableProperties = [
    'context',
    'body',
    'json',
    'form'
];
exports.setNonEnumerableProperties = (sources, to) => {
    // Non enumerable properties shall not be merged
    const properties = {};
    for (const source of sources) {
        if (!source) {
            continue;
        }
        for (const name of nonEnumerableProperties) {
            if (!(name in source)) {
                continue;
            }
            properties[name] = {
                writable: true,
                configurable: true,
                enumerable: false,
                // @ts-expect-error TS doesn't see the check above
                value: source[name]
            };
        }
    }
    Object.defineProperties(to, properties);
};
/**
An error to be thrown when a request fails.
Contains a `code` property with error class code, like `ECONNREFUSED`.
*/
class RequestError extends Error {
    constructor(message, error, self) {
        var _a;
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'RequestError';
        this.code = error.code;
        if (self instanceof Request) {
            Object.defineProperty(this, 'request', {
                enumerable: false,
                value: self
            });
            Object.defineProperty(this, 'response', {
                enumerable: false,
                value: self[kResponse]
            });
            Object.defineProperty(this, 'options', {
                // This fails because of TS 3.7.2 useDefineForClassFields
                // Ref: https://github.com/microsoft/TypeScript/issues/34972
                enumerable: false,
                value: self.options
            });
        }
        else {
            Object.defineProperty(this, 'options', {
                // This fails because of TS 3.7.2 useDefineForClassFields
                // Ref: https://github.com/microsoft/TypeScript/issues/34972
                enumerable: false,
                value: self
            });
        }
        this.timings = (_a = this.request) === null || _a === void 0 ? void 0 : _a.timings;
        // Recover the original stacktrace
        if (is_1.default.string(error.stack) && is_1.default.string(this.stack)) {
            const indexOfMessage = this.stack.indexOf(this.message) + this.message.length;
            const thisStackTrace = this.stack.slice(indexOfMessage).split('\n').reverse();
            const errorStackTrace = error.stack.slice(error.stack.indexOf(error.message) + error.message.length).split('\n').reverse();
            // Remove duplicated traces
            while (errorStackTrace.length !== 0 && errorStackTrace[0] === thisStackTrace[0]) {
                thisStackTrace.shift();
            }
            this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join('\n')}${errorStackTrace.reverse().join('\n')}`;
        }
    }
}
exports.RequestError = RequestError;
/**
An error to be thrown when the server redirects you more than ten times.
Includes a `response` property.
*/
class MaxRedirectsError extends RequestError {
    constructor(request) {
        super(`Redirected ${request.options.maxRedirects} times. Aborting.`, {}, request);
        this.name = 'MaxRedirectsError';
    }
}
exports.MaxRedirectsError = MaxRedirectsError;
/**
An error to be thrown when the server response code is not 2xx nor 3xx if `options.followRedirect` is `true`, but always except for 304.
Includes a `response` property.
*/
class HTTPError extends RequestError {
    constructor(response) {
        super(`Response code ${response.statusCode} (${response.statusMessage})`, {}, response.request);
        this.name = 'HTTPError';
    }
}
exports.HTTPError = HTTPError;
/**
An error to be thrown when a cache method fails.
For example, if the database goes down or there's a filesystem error.
*/
class CacheError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'CacheError';
    }
}
exports.CacheError = CacheError;
/**
An error to be thrown when the request body is a stream and an error occurs while reading from that stream.
*/
class UploadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'UploadError';
    }
}
exports.UploadError = UploadError;
/**
An error to be thrown when the request is aborted due to a timeout.
Includes an `event` and `timings` property.
*/
class TimeoutError extends RequestError {
    constructor(error, timings, request) {
        super(error.message, error, request);
        this.name = 'TimeoutError';
        this.event = error.event;
        this.timings = timings;
    }
}
exports.TimeoutError = TimeoutError;
/**
An error to be thrown when reading from response stream fails.
*/
class ReadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'ReadError';
    }
}
exports.ReadError = ReadError;
/**
An error to be thrown when given an unsupported protocol.
*/
class UnsupportedProtocolError extends RequestError {
    constructor(options) {
        super(`Unsupported protocol "${options.url.protocol}"`, {}, options);
        this.name = 'UnsupportedProtocolError';
    }
}
exports.UnsupportedProtocolError = UnsupportedProtocolError;
const proxiedRequestEvents = [
    'socket',
    'connect',
    'continue',
    'information',
    'upgrade',
    'timeout'
];
class Request extends stream_1.Duplex {
    constructor(url, options = {}, defaults) {
        super({
            // This must be false, to enable throwing after destroy
            // It is used for retry logic in Promise API
            autoDestroy: false,
            // It needs to be zero because we're just proxying the data to another stream
            highWaterMark: 0
        });
        this[kDownloadedSize] = 0;
        this[kUploadedSize] = 0;
        this.requestInitialized = false;
        this[kServerResponsesPiped] = new Set();
        this.redirects = [];
        this[kStopReading] = false;
        this[kTriggerRead] = false;
        this[kJobs] = [];
        this.retryCount = 0;
        // TODO: Remove this when targeting Node.js >= 12
        this._progressCallbacks = [];
        const unlockWrite = () => this._unlockWrite();
        const lockWrite = () => this._lockWrite();
        this.on('pipe', (source) => {
            source.prependListener('data', unlockWrite);
            source.on('data', lockWrite);
            source.prependListener('end', unlockWrite);
            source.on('end', lockWrite);
        });
        this.on('unpipe', (source) => {
            source.off('data', unlockWrite);
            source.off('data', lockWrite);
            source.off('end', unlockWrite);
            source.off('end', lockWrite);
        });
        this.on('pipe', source => {
            if (source instanceof http_1.IncomingMessage) {
                this.options.headers = {
                    ...source.headers,
                    ...this.options.headers
                };
            }
        });
        const { json, body, form } = options;
        if (json || body || form) {
            this._lockWrite();
        }
        if (exports.kIsNormalizedAlready in options) {
            this.options = options;
        }
        else {
            try {
                // @ts-expect-error Common TypeScript bug saying that `this.constructor` is not accessible
                this.options = this.constructor.normalizeArguments(url, options, defaults);
            }
            catch (error) {
                // TODO: Move this to `_destroy()`
                if (is_1.default.nodeStream(options.body)) {
                    options.body.destroy();
                }
                this.destroy(error);
                return;
            }
        }
        (async () => {
            var _a;
            try {
                if (this.options.body instanceof fs_1.ReadStream) {
                    await waitForOpenFile(this.options.body);
                }
                const { url: normalizedURL } = this.options;
                if (!normalizedURL) {
                    throw new TypeError('Missing `url` property');
                }
                this.requestUrl = normalizedURL.toString();
                decodeURI(this.requestUrl);
                await this._finalizeBody();
                await this._makeRequest();
                if (this.destroyed) {
                    (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroy();
                    return;
                }
                // Queued writes etc.
                for (const job of this[kJobs]) {
                    job();
                }
                // Prevent memory leak
                this[kJobs].length = 0;
                this.requestInitialized = true;
            }
            catch (error) {
                if (error instanceof RequestError) {
                    this._beforeError(error);
                    return;
                }
                // This is a workaround for https://github.com/nodejs/node/issues/33335
                if (!this.destroyed) {
                    this.destroy(error);
                }
            }
        })();
    }
    static normalizeArguments(url, options, defaults) {
        var _a, _b, _c, _d, _e;
        const rawOptions = options;
        if (is_1.default.object(url) && !is_1.default.urlInstance(url)) {
            options = { ...defaults, ...url, ...options };
        }
        else {
            if (url && options && options.url !== undefined) {
                throw new TypeError('The `url` option is mutually exclusive with the `input` argument');
            }
            options = { ...defaults, ...options };
            if (url !== undefined) {
                options.url = url;
            }
            if (is_1.default.urlInstance(options.url)) {
                options.url = new url_1.URL(options.url.toString());
            }
        }
        // TODO: Deprecate URL options in Got 12.
        // Support extend-specific options
        if (options.cache === false) {
            options.cache = undefined;
        }
        if (options.dnsCache === false) {
            options.dnsCache = undefined;
        }
        // Nice type assertions
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.method);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.headers);
        is_1.assert.any([is_1.default.string, is_1.default.urlInstance, is_1.default.undefined], options.prefixUrl);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cookieJar);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.searchParams);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.cache);
        is_1.assert.any([is_1.default.object, is_1.default.number, is_1.default.undefined], options.timeout);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.context);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.hooks);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.decompress);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.ignoreInvalidCookies);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.followRedirect);
        is_1.assert.any([is_1.default.number, is_1.default.undefined], options.maxRedirects);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.throwHttpErrors);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.http2);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.allowGetBody);
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.localAddress);
        is_1.assert.any([dns_ip_version_1.isDnsLookupIpVersion, is_1.default.undefined], options.dnsLookupIpVersion);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.https);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.rejectUnauthorized);
        if (options.https) {
            is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.https.rejectUnauthorized);
            is_1.assert.any([is_1.default.function_, is_1.default.undefined], options.https.checkServerIdentity);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificateAuthority);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.key);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificate);
            is_1.assert.any([is_1.default.string, is_1.default.undefined], options.https.passphrase);
            is_1.assert.any([is_1.default.string, is_1.default.buffer, is_1.default.array, is_1.default.undefined], options.https.pfx);
        }
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cacheOptions);
        // `options.method`
        if (is_1.default.string(options.method)) {
            options.method = options.method.toUpperCase();
        }
        else {
            options.method = 'GET';
        }
        // `options.headers`
        if (options.headers === (defaults === null || defaults === void 0 ? void 0 : defaults.headers)) {
            options.headers = { ...options.headers };
        }
        else {
            options.headers = lowercaseKeys({ ...(defaults === null || defaults === void 0 ? void 0 : defaults.headers), ...options.headers });
        }
        // Disallow legacy `url.Url`
        if ('slashes' in options) {
            throw new TypeError('The legacy `url.Url` has been deprecated. Use `URL` instead.');
        }
        // `options.auth`
        if ('auth' in options) {
            throw new TypeError('Parameter `auth` is deprecated. Use `username` / `password` instead.');
        }
        // `options.searchParams`
        if ('searchParams' in options) {
            if (options.searchParams && options.searchParams !== (defaults === null || defaults === void 0 ? void 0 : defaults.searchParams)) {
                let searchParameters;
                if (is_1.default.string(options.searchParams) || (options.searchParams instanceof url_1.URLSearchParams)) {
                    searchParameters = new url_1.URLSearchParams(options.searchParams);
                }
                else {
                    validateSearchParameters(options.searchParams);
                    searchParameters = new url_1.URLSearchParams();
                    // eslint-disable-next-line guard-for-in
                    for (const key in options.searchParams) {
                        const value = options.searchParams[key];
                        if (value === null) {
                            searchParameters.append(key, '');
                        }
                        else if (value !== undefined) {
                            searchParameters.append(key, value);
                        }
                    }
                }
                // `normalizeArguments()` is also used to merge options
                (_a = defaults === null || defaults === void 0 ? void 0 : defaults.searchParams) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => {
                    // Only use default if one isn't already defined
                    if (!searchParameters.has(key)) {
                        searchParameters.append(key, value);
                    }
                });
                options.searchParams = searchParameters;
            }
        }
        // `options.username` & `options.password`
        options.username = (_b = options.username) !== null && _b !== void 0 ? _b : '';
        options.password = (_c = options.password) !== null && _c !== void 0 ? _c : '';
        // `options.prefixUrl` & `options.url`
        if (is_1.default.undefined(options.prefixUrl)) {
            options.prefixUrl = (_d = defaults === null || defaults === void 0 ? void 0 : defaults.prefixUrl) !== null && _d !== void 0 ? _d : '';
        }
        else {
            options.prefixUrl = options.prefixUrl.toString();
            if (options.prefixUrl !== '' && !options.prefixUrl.endsWith('/')) {
                options.prefixUrl += '/';
            }
        }
        if (is_1.default.string(options.url)) {
            if (options.url.startsWith('/')) {
                throw new Error('`input` must not start with a slash when using `prefixUrl`');
            }
            options.url = options_to_url_1.default(options.prefixUrl + options.url, options);
        }
        else if ((is_1.default.undefined(options.url) && options.prefixUrl !== '') || options.protocol) {
            options.url = options_to_url_1.default(options.prefixUrl, options);
        }
        if (options.url) {
            if ('port' in options) {
                delete options.port;
            }
            // Make it possible to change `options.prefixUrl`
            let { prefixUrl } = options;
            Object.defineProperty(options, 'prefixUrl', {
                set: (value) => {
                    const url = options.url;
                    if (!url.href.startsWith(value)) {
                        throw new Error(`Cannot change \`prefixUrl\` from ${prefixUrl} to ${value}: ${url.href}`);
                    }
                    options.url = new url_1.URL(value + url.href.slice(prefixUrl.length));
                    prefixUrl = value;
                },
                get: () => prefixUrl
            });
            // Support UNIX sockets
            let { protocol } = options.url;
            if (protocol === 'unix:') {
                protocol = 'http:';
                options.url = new url_1.URL(`http://unix${options.url.pathname}${options.url.search}`);
            }
            // Set search params
            if (options.searchParams) {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                options.url.search = options.searchParams.toString();
            }
            // Protocol check
            if (protocol !== 'http:' && protocol !== 'https:') {
                throw new UnsupportedProtocolError(options);
            }
            // Update `username`
            if (options.username === '') {
                options.username = options.url.username;
            }
            else {
                options.url.username = options.username;
            }
            // Update `password`
            if (options.password === '') {
                options.password = options.url.password;
            }
            else {
                options.url.password = options.password;
            }
        }
        // `options.cookieJar`
        const { cookieJar } = options;
        if (cookieJar) {
            let { setCookie, getCookieString } = cookieJar;
            is_1.assert.function_(setCookie);
            is_1.assert.function_(getCookieString);
            /* istanbul ignore next: Horrible `tough-cookie` v3 check */
            if (setCookie.length === 4 && getCookieString.length === 0) {
                setCookie = util_1.promisify(setCookie.bind(options.cookieJar));
                getCookieString = util_1.promisify(getCookieString.bind(options.cookieJar));
                options.cookieJar = {
                    setCookie,
                    getCookieString: getCookieString
                };
            }
        }
        // `options.cache`
        const { cache } = options;
        if (cache) {
            if (!cacheableStore.has(cache)) {
                cacheableStore.set(cache, new CacheableRequest(((requestOptions, handler) => {
                    const result = requestOptions[kRequest](requestOptions, handler);
                    // TODO: remove this when `cacheable-request` supports async request functions.
                    if (is_1.default.promise(result)) {
                        // @ts-expect-error
                        // We only need to implement the error handler in order to support HTTP2 caching.
                        // The result will be a promise anyway.
                        result.once = (event, handler) => {
                            if (event === 'error') {
                                result.catch(handler);
                            }
                            else if (event === 'abort') {
                                // The empty catch is needed here in case when
                                // it rejects before it's `await`ed in `_makeRequest`.
                                (async () => {
                                    try {
                                        const request = (await result);
                                        request.once('abort', handler);
                                    }
                                    catch (_a) { }
                                })();
                            }
                            else {
                                /* istanbul ignore next: safety check */
                                throw new Error(`Unknown HTTP2 promise event: ${event}`);
                            }
                            return result;
                        };
                    }
                    return result;
                }), cache));
            }
        }
        // `options.cacheOptions`
        options.cacheOptions = { ...options.cacheOptions };
        // `options.dnsCache`
        if (options.dnsCache === true) {
            if (!globalDnsCache) {
                globalDnsCache = new cacheable_lookup_1.default();
            }
            options.dnsCache = globalDnsCache;
        }
        else if (!is_1.default.undefined(options.dnsCache) && !options.dnsCache.lookup) {
            throw new TypeError(`Parameter \`dnsCache\` must be a CacheableLookup instance or a boolean, got ${is_1.default(options.dnsCache)}`);
        }
        // `options.timeout`
        if (is_1.default.number(options.timeout)) {
            options.timeout = { request: options.timeout };
        }
        else if (defaults && options.timeout !== defaults.timeout) {
            options.timeout = {
                ...defaults.timeout,
                ...options.timeout
            };
        }
        else {
            options.timeout = { ...options.timeout };
        }
        // `options.context`
        if (!options.context) {
            options.context = {};
        }
        // `options.hooks`
        const areHooksDefault = options.hooks === (defaults === null || defaults === void 0 ? void 0 : defaults.hooks);
        options.hooks = { ...options.hooks };
        for (const event of exports.knownHookEvents) {
            if (event in options.hooks) {
                if (is_1.default.array(options.hooks[event])) {
                    // See https://github.com/microsoft/TypeScript/issues/31445#issuecomment-576929044
                    options.hooks[event] = [...options.hooks[event]];
                }
                else {
                    throw new TypeError(`Parameter \`${event}\` must be an Array, got ${is_1.default(options.hooks[event])}`);
                }
            }
            else {
                options.hooks[event] = [];
            }
        }
        if (defaults && !areHooksDefault) {
            for (const event of exports.knownHookEvents) {
                const defaultHooks = defaults.hooks[event];
                if (defaultHooks.length > 0) {
                    // See https://github.com/microsoft/TypeScript/issues/31445#issuecomment-576929044
                    options.hooks[event] = [
                        ...defaults.hooks[event],
                        ...options.hooks[event]
                    ];
                }
            }
        }
        // DNS options
        if ('family' in options) {
            deprecation_warning_1.default('"options.family" was never documented, please use "options.dnsLookupIpVersion"');
        }
        // HTTPS options
        if (defaults === null || defaults === void 0 ? void 0 : defaults.https) {
            options.https = { ...defaults.https, ...options.https };
        }
        if ('rejectUnauthorized' in options) {
            deprecation_warning_1.default('"options.rejectUnauthorized" is now deprecated, please use "options.https.rejectUnauthorized"');
        }
        if ('checkServerIdentity' in options) {
            deprecation_warning_1.default('"options.checkServerIdentity" was never documented, please use "options.https.checkServerIdentity"');
        }
        if ('ca' in options) {
            deprecation_warning_1.default('"options.ca" was never documented, please use "options.https.certificateAuthority"');
        }
        if ('key' in options) {
            deprecation_warning_1.default('"options.key" was never documented, please use "options.https.key"');
        }
        if ('cert' in options) {
            deprecation_warning_1.default('"options.cert" was never documented, please use "options.https.certificate"');
        }
        if ('passphrase' in options) {
            deprecation_warning_1.default('"options.passphrase" was never documented, please use "options.https.passphrase"');
        }
        if ('pfx' in options) {
            deprecation_warning_1.default('"options.pfx" was never documented, please use "options.https.pfx"');
        }
        // Other options
        if ('followRedirects' in options) {
            throw new TypeError('The `followRedirects` option does not exist. Use `followRedirect` instead.');
        }
        if (options.agent) {
            for (const key in options.agent) {
                if (key !== 'http' && key !== 'https' && key !== 'http2') {
                    throw new TypeError(`Expected the \`options.agent\` properties to be \`http\`, \`https\` or \`http2\`, got \`${key}\``);
                }
            }
        }
        options.maxRedirects = (_e = options.maxRedirects) !== null && _e !== void 0 ? _e : 0;
        // Set non-enumerable properties
        exports.setNonEnumerableProperties([defaults, rawOptions], options);
        return normalize_arguments_1.default(options, defaults);
    }
    _lockWrite() {
        const onLockedWrite = () => {
            throw new TypeError('The payload has been already provided');
        };
        this.write = onLockedWrite;
        this.end = onLockedWrite;
    }
    _unlockWrite() {
        this.write = super.write;
        this.end = super.end;
    }
    async _finalizeBody() {
        const { options } = this;
        const { headers } = options;
        const isForm = !is_1.default.undefined(options.form);
        const isJSON = !is_1.default.undefined(options.json);
        const isBody = !is_1.default.undefined(options.body);
        const hasPayload = isForm || isJSON || isBody;
        const cannotHaveBody = exports.withoutBody.has(options.method) && !(options.method === 'GET' && options.allowGetBody);
        this._cannotHaveBody = cannotHaveBody;
        if (hasPayload) {
            if (cannotHaveBody) {
                throw new TypeError(`The \`${options.method}\` method cannot be used with a body`);
            }
            if ([isBody, isForm, isJSON].filter(isTrue => isTrue).length > 1) {
                throw new TypeError('The `body`, `json` and `form` options are mutually exclusive');
            }
            if (isBody &&
                !(options.body instanceof stream_1.Readable) &&
                !is_1.default.string(options.body) &&
                !is_1.default.buffer(options.body) &&
                !is_form_data_1.default(options.body)) {
                throw new TypeError('The `body` option must be a stream.Readable, string or Buffer');
            }
            if (isForm && !is_1.default.object(options.form)) {
                throw new TypeError('The `form` option must be an Object');
            }
            {
                // Serialize body
                const noContentType = !is_1.default.string(headers['content-type']);
                if (isBody) {
                    // Special case for https://github.com/form-data/form-data
                    if (is_form_data_1.default(options.body) && noContentType) {
                        headers['content-type'] = `multipart/form-data; boundary=${options.body.getBoundary()}`;
                    }
                    this[kBody] = options.body;
                }
                else if (isForm) {
                    if (noContentType) {
                        headers['content-type'] = 'application/x-www-form-urlencoded';
                    }
                    this[kBody] = (new url_1.URLSearchParams(options.form)).toString();
                }
                else {
                    if (noContentType) {
                        headers['content-type'] = 'application/json';
                    }
                    this[kBody] = options.stringifyJson(options.json);
                }
                const uploadBodySize = await get_body_size_1.default(this[kBody], options.headers);
                // See https://tools.ietf.org/html/rfc7230#section-3.3.2
                // A user agent SHOULD send a Content-Length in a request message when
                // no Transfer-Encoding is sent and the request method defines a meaning
                // for an enclosed payload body.  For example, a Content-Length header
                // field is normally sent in a POST request even when the value is 0
                // (indicating an empty payload body).  A user agent SHOULD NOT send a
                // Content-Length header field when the request message does not contain
                // a payload body and the method semantics do not anticipate such a
                // body.
                if (is_1.default.undefined(headers['content-length']) && is_1.default.undefined(headers['transfer-encoding'])) {
                    if (!cannotHaveBody && !is_1.default.undefined(uploadBodySize)) {
                        headers['content-length'] = String(uploadBodySize);
                    }
                }
            }
        }
        else if (cannotHaveBody) {
            this._lockWrite();
        }
        else {
            this._unlockWrite();
        }
        this[kBodySize] = Number(headers['content-length']) || undefined;
    }
    async _onResponseBase(response) {
        const { options } = this;
        const { url } = options;
        this[kOriginalResponse] = response;
        if (options.decompress) {
            response = decompressResponse(response);
        }
        const statusCode = response.statusCode;
        const typedResponse = response;
        typedResponse.statusMessage = typedResponse.statusMessage ? typedResponse.statusMessage : http.STATUS_CODES[statusCode];
        typedResponse.url = options.url.toString();
        typedResponse.requestUrl = this.requestUrl;
        typedResponse.redirectUrls = this.redirects;
        typedResponse.request = this;
        typedResponse.isFromCache = response.fromCache || false;
        typedResponse.ip = this.ip;
        typedResponse.retryCount = this.retryCount;
        this[kIsFromCache] = typedResponse.isFromCache;
        this[kResponseSize] = Number(response.headers['content-length']) || undefined;
        this[kResponse] = response;
        response.once('end', () => {
            this[kResponseSize] = this[kDownloadedSize];
            this.emit('downloadProgress', this.downloadProgress);
        });
        response.once('error', (error) => {
            // Force clean-up, because some packages don't do this.
            // TODO: Fix decompress-response
            response.destroy();
            this._beforeError(new ReadError(error, this));
        });
        response.once('aborted', () => {
            this._beforeError(new ReadError({
                name: 'Error',
                message: 'The server aborted pending request',
                code: 'ECONNRESET'
            }, this));
        });
        this.emit('downloadProgress', this.downloadProgress);
        const rawCookies = response.headers['set-cookie'];
        if (is_1.default.object(options.cookieJar) && rawCookies) {
            let promises = rawCookies.map(async (rawCookie) => options.cookieJar.setCookie(rawCookie, url.toString()));
            if (options.ignoreInvalidCookies) {
                promises = promises.map(async (p) => p.catch(() => { }));
            }
            try {
                await Promise.all(promises);
            }
            catch (error) {
                this._beforeError(error);
                return;
            }
        }
        if (options.followRedirect && response.headers.location && redirectCodes.has(statusCode)) {
            // We're being redirected, we don't care about the response.
            // It'd be best to abort the request, but we can't because
            // we would have to sacrifice the TCP connection. We don't want that.
            response.resume();
            if (this[kRequest]) {
                this[kCancelTimeouts]();
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete this[kRequest];
                this[kUnproxyEvents]();
            }
            const shouldBeGet = statusCode === 303 && options.method !== 'GET' && options.method !== 'HEAD';
            if (shouldBeGet || !options.methodRewriting) {
                // Server responded with "see other", indicating that the resource exists at another location,
                // and the client should request it from that location via GET or HEAD.
                options.method = 'GET';
                if ('body' in options) {
                    delete options.body;
                }
                if ('json' in options) {
                    delete options.json;
                }
                if ('form' in options) {
                    delete options.form;
                }
                this[kBody] = undefined;
                delete options.headers['content-length'];
            }
            if (this.redirects.length >= options.maxRedirects) {
                this._beforeError(new MaxRedirectsError(this));
                return;
            }
            try {
                // Do not remove. See https://github.com/sindresorhus/got/pull/214
                const redirectBuffer = Buffer.from(response.headers.location, 'binary').toString();
                // Handles invalid URLs. See https://github.com/sindresorhus/got/issues/604
                const redirectUrl = new url_1.URL(redirectBuffer, url);
                const redirectString = redirectUrl.toString();
                decodeURI(redirectString);
                // Redirecting to a different site, clear sensitive data.
                if (redirectUrl.hostname !== url.hostname || redirectUrl.port !== url.port) {
                    if ('host' in options.headers) {
                        delete options.headers.host;
                    }
                    if ('cookie' in options.headers) {
                        delete options.headers.cookie;
                    }
                    if ('authorization' in options.headers) {
                        delete options.headers.authorization;
                    }
                    if (options.username || options.password) {
                        options.username = '';
                        options.password = '';
                    }
                }
                else {
                    redirectUrl.username = options.username;
                    redirectUrl.password = options.password;
                }
                this.redirects.push(redirectString);
                options.url = redirectUrl;
                for (const hook of options.hooks.beforeRedirect) {
                    // eslint-disable-next-line no-await-in-loop
                    await hook(options, typedResponse);
                }
                this.emit('redirect', typedResponse, options);
                await this._makeRequest();
            }
            catch (error) {
                this._beforeError(error);
                return;
            }
            return;
        }
        if (options.isStream && options.throwHttpErrors && !is_response_ok_1.isResponseOk(typedResponse)) {
            this._beforeError(new HTTPError(typedResponse));
            return;
        }
        response.on('readable', () => {
            if (this[kTriggerRead]) {
                this._read();
            }
        });
        this.on('resume', () => {
            response.resume();
        });
        this.on('pause', () => {
            response.pause();
        });
        response.once('end', () => {
            this.push(null);
        });
        this.emit('response', response);
        for (const destination of this[kServerResponsesPiped]) {
            if (destination.headersSent) {
                continue;
            }
            // eslint-disable-next-line guard-for-in
            for (const key in response.headers) {
                const isAllowed = options.decompress ? key !== 'content-encoding' : true;
                const value = response.headers[key];
                if (isAllowed) {
                    destination.setHeader(key, value);
                }
            }
            destination.statusCode = statusCode;
        }
    }
    async _onResponse(response) {
        try {
            await this._onResponseBase(response);
        }
        catch (error) {
            /* istanbul ignore next: better safe than sorry */
            this._beforeError(error);
        }
    }
    _onRequest(request) {
        const { options } = this;
        const { timeout, url } = options;
        http_timer_1.default(request);
        this[kCancelTimeouts] = timed_out_1.default(request, timeout, url);
        const responseEventName = options.cache ? 'cacheableResponse' : 'response';
        request.once(responseEventName, (response) => {
            void this._onResponse(response);
        });
        request.once('error', (error) => {
            var _a;
            // Force clean-up, because some packages (e.g. nock) don't do this.
            request.destroy();
            // Node.js <= 12.18.2 mistakenly emits the response `end` first.
            (_a = request.res) === null || _a === void 0 ? void 0 : _a.removeAllListeners('end');
            error = error instanceof timed_out_1.TimeoutError ? new TimeoutError(error, this.timings, this) : new RequestError(error.message, error, this);
            this._beforeError(error);
        });
        this[kUnproxyEvents] = proxy_events_1.default(request, this, proxiedRequestEvents);
        this[kRequest] = request;
        this.emit('uploadProgress', this.uploadProgress);
        // Send body
        const body = this[kBody];
        const currentRequest = this.redirects.length === 0 ? this : request;
        if (is_1.default.nodeStream(body)) {
            body.pipe(currentRequest);
            body.once('error', (error) => {
                this._beforeError(new UploadError(error, this));
            });
        }
        else {
            this._unlockWrite();
            if (!is_1.default.undefined(body)) {
                this._writeRequest(body, undefined, () => { });
                currentRequest.end();
                this._lockWrite();
            }
            else if (this._cannotHaveBody || this._noPipe) {
                currentRequest.end();
                this._lockWrite();
            }
        }
        this.emit('request', request);
    }
    async _createCacheableRequest(url, options) {
        return new Promise((resolve, reject) => {
            // TODO: Remove `utils/url-to-options.ts` when `cacheable-request` is fixed
            Object.assign(options, url_to_options_1.default(url));
            // `http-cache-semantics` checks this
            // TODO: Fix this ignore.
            // @ts-expect-error
            delete options.url;
            let request;
            // This is ugly
            const cacheRequest = cacheableStore.get(options.cache)(options, async (response) => {
                // TODO: Fix `cacheable-response`
                response._readableState.autoDestroy = false;
                if (request) {
                    (await request).emit('cacheableResponse', response);
                }
                resolve(response);
            });
            // Restore options
            options.url = url;
            cacheRequest.once('error', reject);
            cacheRequest.once('request', async (requestOrPromise) => {
                request = requestOrPromise;
                resolve(request);
            });
        });
    }
    async _makeRequest() {
        var _a, _b, _c, _d, _e;
        const { options } = this;
        const { headers } = options;
        for (const key in headers) {
            if (is_1.default.undefined(headers[key])) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete headers[key];
            }
            else if (is_1.default.null_(headers[key])) {
                throw new TypeError(`Use \`undefined\` instead of \`null\` to delete the \`${key}\` header`);
            }
        }
        if (options.decompress && is_1.default.undefined(headers['accept-encoding'])) {
            headers['accept-encoding'] = supportsBrotli ? 'gzip, deflate, br' : 'gzip, deflate';
        }
        // Set cookies
        if (options.cookieJar) {
            const cookieString = await options.cookieJar.getCookieString(options.url.toString());
            if (is_1.default.nonEmptyString(cookieString)) {
                options.headers.cookie = cookieString;
            }
        }
        for (const hook of options.hooks.beforeRequest) {
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(options);
            if (!is_1.default.undefined(result)) {
                // @ts-expect-error Skip the type mismatch to support abstract responses
                options.request = () => result;
                break;
            }
        }
        if (options.body && this[kBody] !== options.body) {
            this[kBody] = options.body;
        }
        const { agent, request, timeout, url } = options;
        if (options.dnsCache && !('lookup' in options)) {
            options.lookup = options.dnsCache.lookup;
        }
        // UNIX sockets
        if (url.hostname === 'unix') {
            const matches = /(?<socketPath>.+?):(?<path>.+)/.exec(`${url.pathname}${url.search}`);
            if (matches === null || matches === void 0 ? void 0 : matches.groups) {
                const { socketPath, path } = matches.groups;
                Object.assign(options, {
                    socketPath,
                    path,
                    host: ''
                });
            }
        }
        const isHttps = url.protocol === 'https:';
        // Fallback function
        let fallbackFn;
        if (options.http2) {
            fallbackFn = http2wrapper.auto;
        }
        else {
            fallbackFn = isHttps ? https.request : http.request;
        }
        const realFn = (_a = options.request) !== null && _a !== void 0 ? _a : fallbackFn;
        // Cache support
        const fn = options.cache ? this._createCacheableRequest : realFn;
        // Pass an agent directly when HTTP2 is disabled
        if (agent && !options.http2) {
            options.agent = agent[isHttps ? 'https' : 'http'];
        }
        // Prepare plain HTTP request options
        options[kRequest] = realFn;
        delete options.request;
        // TODO: Fix this ignore.
        // @ts-expect-error
        delete options.timeout;
        const requestOptions = options;
        requestOptions.shared = (_b = options.cacheOptions) === null || _b === void 0 ? void 0 : _b.shared;
        requestOptions.cacheHeuristic = (_c = options.cacheOptions) === null || _c === void 0 ? void 0 : _c.cacheHeuristic;
        requestOptions.immutableMinTimeToLive = (_d = options.cacheOptions) === null || _d === void 0 ? void 0 : _d.immutableMinTimeToLive;
        requestOptions.ignoreCargoCult = (_e = options.cacheOptions) === null || _e === void 0 ? void 0 : _e.ignoreCargoCult;
        // If `dnsLookupIpVersion` is not present do not override `family`
        if (options.dnsLookupIpVersion !== undefined) {
            try {
                requestOptions.family = dns_ip_version_1.dnsLookupIpVersionToFamily(options.dnsLookupIpVersion);
            }
            catch (_f) {
                throw new Error('Invalid `dnsLookupIpVersion` option value');
            }
        }
        // HTTPS options remapping
        if (options.https) {
            if ('rejectUnauthorized' in options.https) {
                requestOptions.rejectUnauthorized = options.https.rejectUnauthorized;
            }
            if (options.https.checkServerIdentity) {
                requestOptions.checkServerIdentity = options.https.checkServerIdentity;
            }
            if (options.https.certificateAuthority) {
                requestOptions.ca = options.https.certificateAuthority;
            }
            if (options.https.certificate) {
                requestOptions.cert = options.https.certificate;
            }
            if (options.https.key) {
                requestOptions.key = options.https.key;
            }
            if (options.https.passphrase) {
                requestOptions.passphrase = options.https.passphrase;
            }
            if (options.https.pfx) {
                requestOptions.pfx = options.https.pfx;
            }
        }
        try {
            let requestOrResponse = await fn(url, requestOptions);
            if (is_1.default.undefined(requestOrResponse)) {
                requestOrResponse = fallbackFn(url, requestOptions);
            }
            // Restore options
            options.request = request;
            options.timeout = timeout;
            options.agent = agent;
            // HTTPS options restore
            if (options.https) {
                if ('rejectUnauthorized' in options.https) {
                    delete requestOptions.rejectUnauthorized;
                }
                if (options.https.checkServerIdentity) {
                    // @ts-expect-error - This one will be removed when we remove the alias.
                    delete requestOptions.checkServerIdentity;
                }
                if (options.https.certificateAuthority) {
                    delete requestOptions.ca;
                }
                if (options.https.certificate) {
                    delete requestOptions.cert;
                }
                if (options.https.key) {
                    delete requestOptions.key;
                }
                if (options.https.passphrase) {
                    delete requestOptions.passphrase;
                }
                if (options.https.pfx) {
                    delete requestOptions.pfx;
                }
            }
            if (isClientRequest(requestOrResponse)) {
                this._onRequest(requestOrResponse);
                // Emit the response after the stream has been ended
            }
            else if (this.writable) {
                this.once('finish', () => {
                    void this._onResponse(requestOrResponse);
                });
                this._unlockWrite();
                this.end();
                this._lockWrite();
            }
            else {
                void this._onResponse(requestOrResponse);
            }
        }
        catch (error) {
            if (error instanceof CacheableRequest.CacheError) {
                throw new CacheError(error, this);
            }
            throw new RequestError(error.message, error, this);
        }
    }
    async _error(error) {
        try {
            for (const hook of this.options.hooks.beforeError) {
                // eslint-disable-next-line no-await-in-loop
                error = await hook(error);
            }
        }
        catch (error_) {
            error = new RequestError(error_.message, error_, this);
        }
        this.destroy(error);
    }
    _beforeError(error) {
        if (this[kStopReading]) {
            return;
        }
        const { options } = this;
        const retryCount = this.retryCount + 1;
        this[kStopReading] = true;
        if (!(error instanceof RequestError)) {
            error = new RequestError(error.message, error, this);
        }
        const typedError = error;
        const { response } = typedError;
        void (async () => {
            if (response && !response.body) {
                response.setEncoding(this._readableState.encoding);
                try {
                    response.rawBody = await get_buffer_1.default(response);
                    response.body = response.rawBody.toString();
                }
                catch (_a) { }
            }
            if (this.listenerCount('retry') !== 0) {
                let backoff;
                try {
                    let retryAfter;
                    if (response && 'retry-after' in response.headers) {
                        retryAfter = Number(response.headers['retry-after']);
                        if (Number.isNaN(retryAfter)) {
                            retryAfter = Date.parse(response.headers['retry-after']) - Date.now();
                            if (retryAfter <= 0) {
                                retryAfter = 1;
                            }
                        }
                        else {
                            retryAfter *= 1000;
                        }
                    }
                    backoff = await options.retry.calculateDelay({
                        attemptCount: retryCount,
                        retryOptions: options.retry,
                        error: typedError,
                        retryAfter,
                        computedValue: calculate_retry_delay_1.default({
                            attemptCount: retryCount,
                            retryOptions: options.retry,
                            error: typedError,
                            retryAfter,
                            computedValue: 0
                        })
                    });
                }
                catch (error_) {
                    void this._error(new RequestError(error_.message, error_, this));
                    return;
                }
                if (backoff) {
                    const retry = async () => {
                        try {
                            for (const hook of this.options.hooks.beforeRetry) {
                                // eslint-disable-next-line no-await-in-loop
                                await hook(this.options, typedError, retryCount);
                            }
                        }
                        catch (error_) {
                            void this._error(new RequestError(error_.message, error, this));
                            return;
                        }
                        // Something forced us to abort the retry
                        if (this.destroyed) {
                            return;
                        }
                        this.destroy();
                        this.emit('retry', retryCount, error);
                    };
                    this[kRetryTimeout] = setTimeout(retry, backoff);
                    return;
                }
            }
            void this._error(typedError);
        })();
    }
    _read() {
        this[kTriggerRead] = true;
        const response = this[kResponse];
        if (response && !this[kStopReading]) {
            // We cannot put this in the `if` above
            // because `.read()` also triggers the `end` event
            if (response.readableLength) {
                this[kTriggerRead] = false;
            }
            let data;
            while ((data = response.read()) !== null) {
                this[kDownloadedSize] += data.length;
                this[kStartedReading] = true;
                const progress = this.downloadProgress;
                if (progress.percent < 1) {
                    this.emit('downloadProgress', progress);
                }
                this.push(data);
            }
        }
    }
    // Node.js 12 has incorrect types, so the encoding must be a string
    _write(chunk, encoding, callback) {
        const write = () => {
            this._writeRequest(chunk, encoding, callback);
        };
        if (this.requestInitialized) {
            write();
        }
        else {
            this[kJobs].push(write);
        }
    }
    _writeRequest(chunk, encoding, callback) {
        if (this[kRequest].destroyed) {
            // Probably the `ClientRequest` instance will throw
            return;
        }
        this._progressCallbacks.push(() => {
            this[kUploadedSize] += Buffer.byteLength(chunk, encoding);
            const progress = this.uploadProgress;
            if (progress.percent < 1) {
                this.emit('uploadProgress', progress);
            }
        });
        // TODO: What happens if it's from cache? Then this[kRequest] won't be defined.
        this[kRequest].write(chunk, encoding, (error) => {
            if (!error && this._progressCallbacks.length > 0) {
                this._progressCallbacks.shift()();
            }
            callback(error);
        });
    }
    _final(callback) {
        const endRequest = () => {
            // FIX: Node.js 10 calls the write callback AFTER the end callback!
            while (this._progressCallbacks.length !== 0) {
                this._progressCallbacks.shift()();
            }
            // We need to check if `this[kRequest]` is present,
            // because it isn't when we use cache.
            if (!(kRequest in this)) {
                callback();
                return;
            }
            if (this[kRequest].destroyed) {
                callback();
                return;
            }
            this[kRequest].end((error) => {
                if (!error) {
                    this[kBodySize] = this[kUploadedSize];
                    this.emit('uploadProgress', this.uploadProgress);
                    this[kRequest].emit('upload-complete');
                }
                callback(error);
            });
        };
        if (this.requestInitialized) {
            endRequest();
        }
        else {
            this[kJobs].push(endRequest);
        }
    }
    _destroy(error, callback) {
        var _a;
        this[kStopReading] = true;
        // Prevent further retries
        clearTimeout(this[kRetryTimeout]);
        if (kRequest in this) {
            this[kCancelTimeouts]();
            // TODO: Remove the next `if` when these get fixed:
            // - https://github.com/nodejs/node/issues/32851
            if (!((_a = this[kResponse]) === null || _a === void 0 ? void 0 : _a.complete)) {
                this[kRequest].destroy();
            }
        }
        if (error !== null && !is_1.default.undefined(error) && !(error instanceof RequestError)) {
            error = new RequestError(error.message, error, this);
        }
        callback(error);
    }
    get _isAboutToError() {
        return this[kStopReading];
    }
    /**
    The remote IP address.
    */
    get ip() {
        var _a;
        return (_a = this.socket) === null || _a === void 0 ? void 0 : _a.remoteAddress;
    }
    /**
    Indicates whether the request has been aborted or not.
    */
    get aborted() {
        var _a, _b, _c;
        return ((_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroyed) !== null && _b !== void 0 ? _b : this.destroyed) && !((_c = this[kOriginalResponse]) === null || _c === void 0 ? void 0 : _c.complete);
    }
    get socket() {
        var _a, _b;
        return (_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.socket) !== null && _b !== void 0 ? _b : undefined;
    }
    /**
    Progress event for downloading (receiving a response).
    */
    get downloadProgress() {
        let percent;
        if (this[kResponseSize]) {
            percent = this[kDownloadedSize] / this[kResponseSize];
        }
        else if (this[kResponseSize] === this[kDownloadedSize]) {
            percent = 1;
        }
        else {
            percent = 0;
        }
        return {
            percent,
            transferred: this[kDownloadedSize],
            total: this[kResponseSize]
        };
    }
    /**
    Progress event for uploading (sending a request).
    */
    get uploadProgress() {
        let percent;
        if (this[kBodySize]) {
            percent = this[kUploadedSize] / this[kBodySize];
        }
        else if (this[kBodySize] === this[kUploadedSize]) {
            percent = 1;
        }
        else {
            percent = 0;
        }
        return {
            percent,
            transferred: this[kUploadedSize],
            total: this[kBodySize]
        };
    }
    /**
    The object contains the following properties:

    - `start` - Time when the request started.
    - `socket` - Time when a socket was assigned to the request.
    - `lookup` - Time when the DNS lookup finished.
    - `connect` - Time when the socket successfully connected.
    - `secureConnect` - Time when the socket securely connected.
    - `upload` - Time when the request finished uploading.
    - `response` - Time when the request fired `response` event.
    - `end` - Time when the response fired `end` event.
    - `error` - Time when the request fired `error` event.
    - `abort` - Time when the request fired `abort` event.
    - `phases`
        - `wait` - `timings.socket - timings.start`
        - `dns` - `timings.lookup - timings.socket`
        - `tcp` - `timings.connect - timings.lookup`
        - `tls` - `timings.secureConnect - timings.connect`
        - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
        - `firstByte` - `timings.response - timings.upload`
        - `download` - `timings.end - timings.response`
        - `total` - `(timings.end || timings.error || timings.abort) - timings.start`

    If something has not been measured yet, it will be `undefined`.

    __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
    */
    get timings() {
        var _a;
        return (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.timings;
    }
    /**
    Whether the response was retrieved from the cache.
    */
    get isFromCache() {
        return this[kIsFromCache];
    }
    pipe(destination, options) {
        if (this[kStartedReading]) {
            throw new Error('Failed to pipe. The response has been emitted already.');
        }
        if (destination instanceof http_1.ServerResponse) {
            this[kServerResponsesPiped].add(destination);
        }
        return super.pipe(destination, options);
    }
    unpipe(destination) {
        if (destination instanceof http_1.ServerResponse) {
            this[kServerResponsesPiped].delete(destination);
        }
        super.unpipe(destination);
        return this;
    }
}
exports.default = Request;


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/dns-ip-version.js":
/*!*******************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/dns-ip-version.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dnsLookupIpVersionToFamily = exports.isDnsLookupIpVersion = void 0;
const conversionTable = {
    auto: 0,
    ipv4: 4,
    ipv6: 6
};
exports.isDnsLookupIpVersion = (value) => {
    return value in conversionTable;
};
exports.dnsLookupIpVersionToFamily = (dnsLookupIpVersion) => {
    if (exports.isDnsLookupIpVersion(dnsLookupIpVersion)) {
        return conversionTable[dnsLookupIpVersion];
    }
    throw new Error('Invalid DNS lookup IP version');
};


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/get-body-size.js":
/*!******************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/get-body-size.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __webpack_require__(/*! fs */ "fs");
const util_1 = __webpack_require__(/*! util */ "util");
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
const is_form_data_1 = __webpack_require__(/*! ./is-form-data */ "./node_modules/got/dist/source/core/utils/is-form-data.js");
const statAsync = util_1.promisify(fs_1.stat);
exports.default = async (body, headers) => {
    if (headers && 'content-length' in headers) {
        return Number(headers['content-length']);
    }
    if (!body) {
        return 0;
    }
    if (is_1.default.string(body)) {
        return Buffer.byteLength(body);
    }
    if (is_1.default.buffer(body)) {
        return body.length;
    }
    if (is_form_data_1.default(body)) {
        return util_1.promisify(body.getLength.bind(body))();
    }
    if (body instanceof fs_1.ReadStream) {
        const { size } = await statAsync(body.path);
        if (size === 0) {
            return undefined;
        }
        return size;
    }
    return undefined;
};


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/get-buffer.js":
/*!***************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/get-buffer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// TODO: Update https://github.com/sindresorhus/get-stream
const getBuffer = async (stream) => {
    const chunks = [];
    let length = 0;
    for await (const chunk of stream) {
        chunks.push(chunk);
        length += Buffer.byteLength(chunk);
    }
    if (Buffer.isBuffer(chunks[0])) {
        return Buffer.concat(chunks, length);
    }
    return Buffer.from(chunks.join(''));
};
exports.default = getBuffer;


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/is-form-data.js":
/*!*****************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/is-form-data.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
exports.default = (body) => is_1.default.nodeStream(body) && is_1.default.function_(body.getBoundary);


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/is-response-ok.js":
/*!*******************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/is-response-ok.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isResponseOk = void 0;
exports.isResponseOk = (response) => {
    const { statusCode } = response;
    const limitStatusCode = response.request.options.followRedirect ? 299 : 399;
    return (statusCode >= 200 && statusCode <= limitStatusCode) || statusCode === 304;
};


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/options-to-url.js":
/*!*******************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/options-to-url.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* istanbul ignore file: deprecated */
const url_1 = __webpack_require__(/*! url */ "url");
const keys = [
    'protocol',
    'host',
    'hostname',
    'port',
    'pathname',
    'search'
];
exports.default = (origin, options) => {
    var _a, _b;
    if (options.path) {
        if (options.pathname) {
            throw new TypeError('Parameters `path` and `pathname` are mutually exclusive.');
        }
        if (options.search) {
            throw new TypeError('Parameters `path` and `search` are mutually exclusive.');
        }
        if (options.searchParams) {
            throw new TypeError('Parameters `path` and `searchParams` are mutually exclusive.');
        }
    }
    if (options.search && options.searchParams) {
        throw new TypeError('Parameters `search` and `searchParams` are mutually exclusive.');
    }
    if (!origin) {
        if (!options.protocol) {
            throw new TypeError('No URL protocol specified');
        }
        origin = `${options.protocol}//${(_b = (_a = options.hostname) !== null && _a !== void 0 ? _a : options.host) !== null && _b !== void 0 ? _b : ''}`;
    }
    const url = new url_1.URL(origin);
    if (options.path) {
        const searchIndex = options.path.indexOf('?');
        if (searchIndex === -1) {
            options.pathname = options.path;
        }
        else {
            options.pathname = options.path.slice(0, searchIndex);
            options.search = options.path.slice(searchIndex + 1);
        }
        delete options.path;
    }
    for (const key of keys) {
        if (options[key]) {
            url[key] = options[key].toString();
        }
    }
    return url;
};


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/proxy-events.js":
/*!*****************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/proxy-events.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(from, to, events) {
    const fns = {};
    for (const event of events) {
        fns[event] = (...args) => {
            to.emit(event, ...args);
        };
        from.on(event, fns[event]);
    }
    return () => {
        for (const event of events) {
            from.off(event, fns[event]);
        }
    };
}
exports.default = default_1;


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/timed-out.js":
/*!**************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/timed-out.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeoutError = void 0;
const net = __webpack_require__(/*! net */ "net");
const unhandle_1 = __webpack_require__(/*! ./unhandle */ "./node_modules/got/dist/source/core/utils/unhandle.js");
const reentry = Symbol('reentry');
const noop = () => { };
class TimeoutError extends Error {
    constructor(threshold, event) {
        super(`Timeout awaiting '${event}' for ${threshold}ms`);
        this.event = event;
        this.name = 'TimeoutError';
        this.code = 'ETIMEDOUT';
    }
}
exports.TimeoutError = TimeoutError;
exports.default = (request, delays, options) => {
    if (reentry in request) {
        return noop;
    }
    request[reentry] = true;
    const cancelers = [];
    const { once, unhandleAll } = unhandle_1.default();
    const addTimeout = (delay, callback, event) => {
        var _a;
        const timeout = setTimeout(callback, delay, delay, event);
        (_a = timeout.unref) === null || _a === void 0 ? void 0 : _a.call(timeout);
        const cancel = () => {
            clearTimeout(timeout);
        };
        cancelers.push(cancel);
        return cancel;
    };
    const { host, hostname } = options;
    const timeoutHandler = (delay, event) => {
        request.destroy(new TimeoutError(delay, event));
    };
    const cancelTimeouts = () => {
        for (const cancel of cancelers) {
            cancel();
        }
        unhandleAll();
    };
    request.once('error', error => {
        cancelTimeouts();
        // Save original behavior
        /* istanbul ignore next */
        if (request.listenerCount('error') === 0) {
            throw error;
        }
    });
    request.once('close', cancelTimeouts);
    once(request, 'response', (response) => {
        once(response, 'end', cancelTimeouts);
    });
    if (typeof delays.request !== 'undefined') {
        addTimeout(delays.request, timeoutHandler, 'request');
    }
    if (typeof delays.socket !== 'undefined') {
        const socketTimeoutHandler = () => {
            timeoutHandler(delays.socket, 'socket');
        };
        request.setTimeout(delays.socket, socketTimeoutHandler);
        // `request.setTimeout(0)` causes a memory leak.
        // We can just remove the listener and forget about the timer - it's unreffed.
        // See https://github.com/sindresorhus/got/issues/690
        cancelers.push(() => {
            request.removeListener('timeout', socketTimeoutHandler);
        });
    }
    once(request, 'socket', (socket) => {
        var _a;
        const { socketPath } = request;
        /* istanbul ignore next: hard to test */
        if (socket.connecting) {
            const hasPath = Boolean(socketPath !== null && socketPath !== void 0 ? socketPath : net.isIP((_a = hostname !== null && hostname !== void 0 ? hostname : host) !== null && _a !== void 0 ? _a : '') !== 0);
            if (typeof delays.lookup !== 'undefined' && !hasPath && typeof socket.address().address === 'undefined') {
                const cancelTimeout = addTimeout(delays.lookup, timeoutHandler, 'lookup');
                once(socket, 'lookup', cancelTimeout);
            }
            if (typeof delays.connect !== 'undefined') {
                const timeConnect = () => addTimeout(delays.connect, timeoutHandler, 'connect');
                if (hasPath) {
                    once(socket, 'connect', timeConnect());
                }
                else {
                    once(socket, 'lookup', (error) => {
                        if (error === null) {
                            once(socket, 'connect', timeConnect());
                        }
                    });
                }
            }
            if (typeof delays.secureConnect !== 'undefined' && options.protocol === 'https:') {
                once(socket, 'connect', () => {
                    const cancelTimeout = addTimeout(delays.secureConnect, timeoutHandler, 'secureConnect');
                    once(socket, 'secureConnect', cancelTimeout);
                });
            }
        }
        if (typeof delays.send !== 'undefined') {
            const timeRequest = () => addTimeout(delays.send, timeoutHandler, 'send');
            /* istanbul ignore next: hard to test */
            if (socket.connecting) {
                once(socket, 'connect', () => {
                    once(request, 'upload-complete', timeRequest());
                });
            }
            else {
                once(request, 'upload-complete', timeRequest());
            }
        }
    });
    if (typeof delays.response !== 'undefined') {
        once(request, 'upload-complete', () => {
            const cancelTimeout = addTimeout(delays.response, timeoutHandler, 'response');
            once(request, 'response', cancelTimeout);
        });
    }
    return cancelTimeouts;
};


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/unhandle.js":
/*!*************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/unhandle.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// When attaching listeners, it's very easy to forget about them.
// Especially if you do error handling and set timeouts.
// So instead of checking if it's proper to throw an error on every timeout ever,
// use this simple tool which will remove all listeners you have attached.
exports.default = () => {
    const handlers = [];
    return {
        once(origin, event, fn) {
            origin.once(event, fn);
            handlers.push({ origin, event, fn });
        },
        unhandleAll() {
            for (const handler of handlers) {
                const { origin, event, fn } = handler;
                origin.removeListener(event, fn);
            }
            handlers.length = 0;
        }
    };
};


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/url-to-options.js":
/*!*******************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/url-to-options.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
exports.default = (url) => {
    // Cast to URL
    url = url;
    const options = {
        protocol: url.protocol,
        hostname: is_1.default.string(url.hostname) && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
        host: url.host,
        hash: url.hash,
        search: url.search,
        pathname: url.pathname,
        href: url.href,
        path: `${url.pathname || ''}${url.search || ''}`
    };
    if (is_1.default.string(url.port) && url.port.length > 0) {
        options.port = Number(url.port);
    }
    if (url.username || url.password) {
        options.auth = `${url.username || ''}:${url.password || ''}`;
    }
    return options;
};


/***/ }),

/***/ "./node_modules/got/dist/source/core/utils/weakable-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/got/dist/source/core/utils/weakable-map.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class WeakableMap {
    constructor() {
        this.weakMap = new WeakMap();
        this.map = new Map();
    }
    set(key, value) {
        if (typeof key === 'object') {
            this.weakMap.set(key, value);
        }
        else {
            this.map.set(key, value);
        }
    }
    get(key) {
        if (typeof key === 'object') {
            return this.weakMap.get(key);
        }
        return this.map.get(key);
    }
    has(key) {
        if (typeof key === 'object') {
            return this.weakMap.has(key);
        }
        return this.map.has(key);
    }
}
exports.default = WeakableMap;


/***/ }),

/***/ "./node_modules/got/dist/source/create.js":
/*!************************************************!*\
  !*** ./node_modules/got/dist/source/create.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultHandler = void 0;
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
const as_promise_1 = __webpack_require__(/*! ./as-promise */ "./node_modules/got/dist/source/as-promise/index.js");
const create_rejection_1 = __webpack_require__(/*! ./as-promise/create-rejection */ "./node_modules/got/dist/source/as-promise/create-rejection.js");
const core_1 = __webpack_require__(/*! ./core */ "./node_modules/got/dist/source/core/index.js");
const deep_freeze_1 = __webpack_require__(/*! ./utils/deep-freeze */ "./node_modules/got/dist/source/utils/deep-freeze.js");
const errors = {
    RequestError: as_promise_1.RequestError,
    CacheError: as_promise_1.CacheError,
    ReadError: as_promise_1.ReadError,
    HTTPError: as_promise_1.HTTPError,
    MaxRedirectsError: as_promise_1.MaxRedirectsError,
    TimeoutError: as_promise_1.TimeoutError,
    ParseError: as_promise_1.ParseError,
    CancelError: as_promise_1.CancelError,
    UnsupportedProtocolError: as_promise_1.UnsupportedProtocolError,
    UploadError: as_promise_1.UploadError
};
// The `delay` package weighs 10KB (!)
const delay = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});
const { normalizeArguments } = core_1.default;
const mergeOptions = (...sources) => {
    let mergedOptions;
    for (const source of sources) {
        mergedOptions = normalizeArguments(undefined, source, mergedOptions);
    }
    return mergedOptions;
};
const getPromiseOrStream = (options) => options.isStream ? new core_1.default(undefined, options) : as_promise_1.default(options);
const isGotInstance = (value) => ('defaults' in value && 'options' in value.defaults);
const aliases = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
exports.defaultHandler = (options, next) => next(options);
const callInitHooks = (hooks, options) => {
    if (hooks) {
        for (const hook of hooks) {
            hook(options);
        }
    }
};
const create = (defaults) => {
    // Proxy properties from next handlers
    defaults._rawHandlers = defaults.handlers;
    defaults.handlers = defaults.handlers.map(fn => ((options, next) => {
        // This will be assigned by assigning result
        let root;
        const result = fn(options, newOptions => {
            root = next(newOptions);
            return root;
        });
        if (result !== root && !options.isStream && root) {
            const typedResult = result;
            const { then: promiseThen, catch: promiseCatch, finally: promiseFianlly } = typedResult;
            Object.setPrototypeOf(typedResult, Object.getPrototypeOf(root));
            Object.defineProperties(typedResult, Object.getOwnPropertyDescriptors(root));
            // These should point to the new promise
            // eslint-disable-next-line promise/prefer-await-to-then
            typedResult.then = promiseThen;
            typedResult.catch = promiseCatch;
            typedResult.finally = promiseFianlly;
        }
        return result;
    }));
    // Got interface
    const got = ((url, options = {}, _defaults) => {
        var _a, _b;
        let iteration = 0;
        const iterateHandlers = (newOptions) => {
            return defaults.handlers[iteration++](newOptions, iteration === defaults.handlers.length ? getPromiseOrStream : iterateHandlers);
        };
        // TODO: Remove this in Got 12.
        if (is_1.default.plainObject(url)) {
            const mergedOptions = {
                ...url,
                ...options
            };
            core_1.setNonEnumerableProperties([url, options], mergedOptions);
            options = mergedOptions;
            url = undefined;
        }
        try {
            // Call `init` hooks
            let initHookError;
            try {
                callInitHooks(defaults.options.hooks.init, options);
                callInitHooks((_a = options.hooks) === null || _a === void 0 ? void 0 : _a.init, options);
            }
            catch (error) {
                initHookError = error;
            }
            // Normalize options & call handlers
            const normalizedOptions = normalizeArguments(url, options, _defaults !== null && _defaults !== void 0 ? _defaults : defaults.options);
            normalizedOptions[core_1.kIsNormalizedAlready] = true;
            if (initHookError) {
                throw new as_promise_1.RequestError(initHookError.message, initHookError, normalizedOptions);
            }
            return iterateHandlers(normalizedOptions);
        }
        catch (error) {
            if (options.isStream) {
                throw error;
            }
            else {
                return create_rejection_1.default(error, defaults.options.hooks.beforeError, (_b = options.hooks) === null || _b === void 0 ? void 0 : _b.beforeError);
            }
        }
    });
    got.extend = (...instancesOrOptions) => {
        const optionsArray = [defaults.options];
        let handlers = [...defaults._rawHandlers];
        let isMutableDefaults;
        for (const value of instancesOrOptions) {
            if (isGotInstance(value)) {
                optionsArray.push(value.defaults.options);
                handlers.push(...value.defaults._rawHandlers);
                isMutableDefaults = value.defaults.mutableDefaults;
            }
            else {
                optionsArray.push(value);
                if ('handlers' in value) {
                    handlers.push(...value.handlers);
                }
                isMutableDefaults = value.mutableDefaults;
            }
        }
        handlers = handlers.filter(handler => handler !== exports.defaultHandler);
        if (handlers.length === 0) {
            handlers.push(exports.defaultHandler);
        }
        return create({
            options: mergeOptions(...optionsArray),
            handlers,
            mutableDefaults: Boolean(isMutableDefaults)
        });
    };
    // Pagination
    const paginateEach = (async function* (url, options) {
        // TODO: Remove this `@ts-expect-error` when upgrading to TypeScript 4.
        // Error: Argument of type 'Merge<Options, PaginationOptions<T, R>> | undefined' is not assignable to parameter of type 'Options | undefined'.
        // @ts-expect-error
        let normalizedOptions = normalizeArguments(url, options, defaults.options);
        normalizedOptions.resolveBodyOnly = false;
        const pagination = normalizedOptions.pagination;
        if (!is_1.default.object(pagination)) {
            throw new TypeError('`options.pagination` must be implemented');
        }
        const all = [];
        let { countLimit } = pagination;
        let numberOfRequests = 0;
        while (numberOfRequests < pagination.requestLimit) {
            if (numberOfRequests !== 0) {
                // eslint-disable-next-line no-await-in-loop
                await delay(pagination.backoff);
            }
            // @ts-expect-error FIXME!
            // TODO: Throw when result is not an instance of Response
            // eslint-disable-next-line no-await-in-loop
            const result = (await got(undefined, undefined, normalizedOptions));
            // eslint-disable-next-line no-await-in-loop
            const parsed = await pagination.transform(result);
            const current = [];
            for (const item of parsed) {
                if (pagination.filter(item, all, current)) {
                    if (!pagination.shouldContinue(item, all, current)) {
                        return;
                    }
                    yield item;
                    if (pagination.stackAllItems) {
                        all.push(item);
                    }
                    current.push(item);
                    if (--countLimit <= 0) {
                        return;
                    }
                }
            }
            const optionsToMerge = pagination.paginate(result, all, current);
            if (optionsToMerge === false) {
                return;
            }
            if (optionsToMerge === result.request.options) {
                normalizedOptions = result.request.options;
            }
            else if (optionsToMerge !== undefined) {
                normalizedOptions = normalizeArguments(undefined, optionsToMerge, normalizedOptions);
            }
            numberOfRequests++;
        }
    });
    got.paginate = paginateEach;
    got.paginate.all = (async (url, options) => {
        const results = [];
        for await (const item of paginateEach(url, options)) {
            results.push(item);
        }
        return results;
    });
    // For those who like very descriptive names
    got.paginate.each = paginateEach;
    // Stream API
    got.stream = ((url, options) => got(url, { ...options, isStream: true }));
    // Shortcuts
    for (const method of aliases) {
        got[method] = ((url, options) => got(url, { ...options, method }));
        got.stream[method] = ((url, options) => {
            return got(url, { ...options, method, isStream: true });
        });
    }
    Object.assign(got, errors);
    Object.defineProperty(got, 'defaults', {
        value: defaults.mutableDefaults ? defaults : deep_freeze_1.default(defaults),
        writable: defaults.mutableDefaults,
        configurable: defaults.mutableDefaults,
        enumerable: true
    });
    got.mergeOptions = mergeOptions;
    return got;
};
exports.default = create;
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/got/dist/source/types.js"), exports);


/***/ }),

/***/ "./node_modules/got/dist/source/index.js":
/*!***********************************************!*\
  !*** ./node_modules/got/dist/source/index.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const url_1 = __webpack_require__(/*! url */ "url");
const create_1 = __webpack_require__(/*! ./create */ "./node_modules/got/dist/source/create.js");
const defaults = {
    options: {
        method: 'GET',
        retry: {
            limit: 2,
            methods: [
                'GET',
                'PUT',
                'HEAD',
                'DELETE',
                'OPTIONS',
                'TRACE'
            ],
            statusCodes: [
                408,
                413,
                429,
                500,
                502,
                503,
                504,
                521,
                522,
                524
            ],
            errorCodes: [
                'ETIMEDOUT',
                'ECONNRESET',
                'EADDRINUSE',
                'ECONNREFUSED',
                'EPIPE',
                'ENOTFOUND',
                'ENETUNREACH',
                'EAI_AGAIN'
            ],
            maxRetryAfter: undefined,
            calculateDelay: ({ computedValue }) => computedValue
        },
        timeout: {},
        headers: {
            'user-agent': 'got (https://github.com/sindresorhus/got)'
        },
        hooks: {
            init: [],
            beforeRequest: [],
            beforeRedirect: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: []
        },
        cache: undefined,
        dnsCache: undefined,
        decompress: true,
        throwHttpErrors: true,
        followRedirect: true,
        isStream: false,
        responseType: 'text',
        resolveBodyOnly: false,
        maxRedirects: 10,
        prefixUrl: '',
        methodRewriting: true,
        ignoreInvalidCookies: false,
        context: {},
        // TODO: Set this to `true` when Got 12 gets released
        http2: false,
        allowGetBody: false,
        https: undefined,
        pagination: {
            transform: (response) => {
                if (response.request.options.responseType === 'json') {
                    return response.body;
                }
                return JSON.parse(response.body);
            },
            paginate: response => {
                if (!Reflect.has(response.headers, 'link')) {
                    return false;
                }
                const items = response.headers.link.split(',');
                let next;
                for (const item of items) {
                    const parsed = item.split(';');
                    if (parsed[1].includes('next')) {
                        next = parsed[0].trimStart().trim();
                        next = next.slice(1, -1);
                        break;
                    }
                }
                if (next) {
                    const options = {
                        url: new url_1.URL(next)
                    };
                    return options;
                }
                return false;
            },
            filter: () => true,
            shouldContinue: () => true,
            countLimit: Infinity,
            backoff: 0,
            requestLimit: 10000,
            stackAllItems: true
        },
        parseJson: (text) => JSON.parse(text),
        stringifyJson: (object) => JSON.stringify(object),
        cacheOptions: {}
    },
    handlers: [create_1.defaultHandler],
    mutableDefaults: false
};
const got = create_1.default(defaults);
exports.default = got;
// For CommonJS default export support
module.exports = got;
module.exports.default = got;
module.exports.__esModule = true; // Workaround for TS issue: https://github.com/sindresorhus/got/pull/1267
__exportStar(__webpack_require__(/*! ./create */ "./node_modules/got/dist/source/create.js"), exports);
__exportStar(__webpack_require__(/*! ./as-promise */ "./node_modules/got/dist/source/as-promise/index.js"), exports);


/***/ }),

/***/ "./node_modules/got/dist/source/types.js":
/*!***********************************************!*\
  !*** ./node_modules/got/dist/source/types.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./node_modules/got/dist/source/utils/deep-freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/got/dist/source/utils/deep-freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(/*! @sindresorhus/is */ "./node_modules/@sindresorhus/is/dist/index.js");
function deepFreeze(object) {
    for (const value of Object.values(object)) {
        if (is_1.default.plainObject(value) || is_1.default.array(value)) {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
}
exports.default = deepFreeze;


/***/ }),

/***/ "./node_modules/got/dist/source/utils/deprecation-warning.js":
/*!*******************************************************************!*\
  !*** ./node_modules/got/dist/source/utils/deprecation-warning.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const alreadyWarned = new Set();
exports.default = (message) => {
    if (alreadyWarned.has(message)) {
        return;
    }
    alreadyWarned.add(message);
    // @ts-expect-error Missing types.
    process.emitWarning(`Got: ${message}`, {
        type: 'DeprecationWarning'
    });
};


/***/ }),

/***/ "./node_modules/http-cache-semantics/index.js":
/*!****************************************************!*\
  !*** ./node_modules/http-cache-semantics/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";

// rfc7231 6.1
const statusCodeCacheableByDefault = new Set([
    200,
    203,
    204,
    206,
    300,
    301,
    404,
    405,
    410,
    414,
    501,
]);

// This implementation does not understand partial responses (206)
const understoodStatuses = new Set([
    200,
    203,
    204,
    300,
    301,
    302,
    303,
    307,
    308,
    404,
    405,
    410,
    414,
    501,
]);

const errorStatusCodes = new Set([
    500,
    502,
    503, 
    504,
]);

const hopByHopHeaders = {
    date: true, // included, because we add Age update Date
    connection: true,
    'keep-alive': true,
    'proxy-authenticate': true,
    'proxy-authorization': true,
    te: true,
    trailer: true,
    'transfer-encoding': true,
    upgrade: true,
};

const excludedFromRevalidationUpdate = {
    // Since the old body is reused, it doesn't make sense to change properties of the body
    'content-length': true,
    'content-encoding': true,
    'transfer-encoding': true,
    'content-range': true,
};

function toNumberOrZero(s) {
    const n = parseInt(s, 10);
    return isFinite(n) ? n : 0;
}

// RFC 5861
function isErrorResponse(response) {
    // consider undefined response as faulty
    if(!response) {
        return true
    }
    return errorStatusCodes.has(response.status);
}

function parseCacheControl(header) {
    const cc = {};
    if (!header) return cc;

    // TODO: When there is more than one value present for a given directive (e.g., two Expires header fields, multiple Cache-Control: max-age directives),
    // the directive's value is considered invalid. Caches are encouraged to consider responses that have invalid freshness information to be stale
    const parts = header.trim().split(/\s*,\s*/); // TODO: lame parsing
    for (const part of parts) {
        const [k, v] = part.split(/\s*=\s*/, 2);
        cc[k] = v === undefined ? true : v.replace(/^"|"$/g, ''); // TODO: lame unquoting
    }

    return cc;
}

function formatCacheControl(cc) {
    let parts = [];
    for (const k in cc) {
        const v = cc[k];
        parts.push(v === true ? k : k + '=' + v);
    }
    if (!parts.length) {
        return undefined;
    }
    return parts.join(', ');
}

module.exports = class CachePolicy {
    constructor(
        req,
        res,
        {
            shared,
            cacheHeuristic,
            immutableMinTimeToLive,
            ignoreCargoCult,
            _fromObject,
        } = {}
    ) {
        if (_fromObject) {
            this._fromObject(_fromObject);
            return;
        }

        if (!res || !res.headers) {
            throw Error('Response headers missing');
        }
        this._assertRequestHasHeaders(req);

        this._responseTime = this.now();
        this._isShared = shared !== false;
        this._cacheHeuristic =
            undefined !== cacheHeuristic ? cacheHeuristic : 0.1; // 10% matches IE
        this._immutableMinTtl =
            undefined !== immutableMinTimeToLive
                ? immutableMinTimeToLive
                : 24 * 3600 * 1000;

        this._status = 'status' in res ? res.status : 200;
        this._resHeaders = res.headers;
        this._rescc = parseCacheControl(res.headers['cache-control']);
        this._method = 'method' in req ? req.method : 'GET';
        this._url = req.url;
        this._host = req.headers.host;
        this._noAuthorization = !req.headers.authorization;
        this._reqHeaders = res.headers.vary ? req.headers : null; // Don't keep all request headers if they won't be used
        this._reqcc = parseCacheControl(req.headers['cache-control']);

        // Assume that if someone uses legacy, non-standard uncecessary options they don't understand caching,
        // so there's no point stricly adhering to the blindly copy&pasted directives.
        if (
            ignoreCargoCult &&
            'pre-check' in this._rescc &&
            'post-check' in this._rescc
        ) {
            delete this._rescc['pre-check'];
            delete this._rescc['post-check'];
            delete this._rescc['no-cache'];
            delete this._rescc['no-store'];
            delete this._rescc['must-revalidate'];
            this._resHeaders = Object.assign({}, this._resHeaders, {
                'cache-control': formatCacheControl(this._rescc),
            });
            delete this._resHeaders.expires;
            delete this._resHeaders.pragma;
        }

        // When the Cache-Control header field is not present in a request, caches MUST consider the no-cache request pragma-directive
        // as having the same effect as if "Cache-Control: no-cache" were present (see Section 5.2.1).
        if (
            res.headers['cache-control'] == null &&
            /no-cache/.test(res.headers.pragma)
        ) {
            this._rescc['no-cache'] = true;
        }
    }

    now() {
        return Date.now();
    }

    storable() {
        // The "no-store" request directive indicates that a cache MUST NOT store any part of either this request or any response to it.
        return !!(
            !this._reqcc['no-store'] &&
            // A cache MUST NOT store a response to any request, unless:
            // The request method is understood by the cache and defined as being cacheable, and
            ('GET' === this._method ||
                'HEAD' === this._method ||
                ('POST' === this._method && this._hasExplicitExpiration())) &&
            // the response status code is understood by the cache, and
            understoodStatuses.has(this._status) &&
            // the "no-store" cache directive does not appear in request or response header fields, and
            !this._rescc['no-store'] &&
            // the "private" response directive does not appear in the response, if the cache is shared, and
            (!this._isShared || !this._rescc.private) &&
            // the Authorization header field does not appear in the request, if the cache is shared,
            (!this._isShared ||
                this._noAuthorization ||
                this._allowsStoringAuthenticated()) &&
            // the response either:
            // contains an Expires header field, or
            (this._resHeaders.expires ||
                // contains a max-age response directive, or
                // contains a s-maxage response directive and the cache is shared, or
                // contains a public response directive.
                this._rescc['max-age'] ||
                (this._isShared && this._rescc['s-maxage']) ||
                this._rescc.public ||
                // has a status code that is defined as cacheable by default
                statusCodeCacheableByDefault.has(this._status))
        );
    }

    _hasExplicitExpiration() {
        // 4.2.1 Calculating Freshness Lifetime
        return (
            (this._isShared && this._rescc['s-maxage']) ||
            this._rescc['max-age'] ||
            this._resHeaders.expires
        );
    }

    _assertRequestHasHeaders(req) {
        if (!req || !req.headers) {
            throw Error('Request headers missing');
        }
    }

    satisfiesWithoutRevalidation(req) {
        this._assertRequestHasHeaders(req);

        // When presented with a request, a cache MUST NOT reuse a stored response, unless:
        // the presented request does not contain the no-cache pragma (Section 5.4), nor the no-cache cache directive,
        // unless the stored response is successfully validated (Section 4.3), and
        const requestCC = parseCacheControl(req.headers['cache-control']);
        if (requestCC['no-cache'] || /no-cache/.test(req.headers.pragma)) {
            return false;
        }

        if (requestCC['max-age'] && this.age() > requestCC['max-age']) {
            return false;
        }

        if (
            requestCC['min-fresh'] &&
            this.timeToLive() < 1000 * requestCC['min-fresh']
        ) {
            return false;
        }

        // the stored response is either:
        // fresh, or allowed to be served stale
        if (this.stale()) {
            const allowsStale =
                requestCC['max-stale'] &&
                !this._rescc['must-revalidate'] &&
                (true === requestCC['max-stale'] ||
                    requestCC['max-stale'] > this.age() - this.maxAge());
            if (!allowsStale) {
                return false;
            }
        }

        return this._requestMatches(req, false);
    }

    _requestMatches(req, allowHeadMethod) {
        // The presented effective request URI and that of the stored response match, and
        return (
            (!this._url || this._url === req.url) &&
            this._host === req.headers.host &&
            // the request method associated with the stored response allows it to be used for the presented request, and
            (!req.method ||
                this._method === req.method ||
                (allowHeadMethod && 'HEAD' === req.method)) &&
            // selecting header fields nominated by the stored response (if any) match those presented, and
            this._varyMatches(req)
        );
    }

    _allowsStoringAuthenticated() {
        //  following Cache-Control response directives (Section 5.2.2) have such an effect: must-revalidate, public, and s-maxage.
        return (
            this._rescc['must-revalidate'] ||
            this._rescc.public ||
            this._rescc['s-maxage']
        );
    }

    _varyMatches(req) {
        if (!this._resHeaders.vary) {
            return true;
        }

        // A Vary header field-value of "*" always fails to match
        if (this._resHeaders.vary === '*') {
            return false;
        }

        const fields = this._resHeaders.vary
            .trim()
            .toLowerCase()
            .split(/\s*,\s*/);
        for (const name of fields) {
            if (req.headers[name] !== this._reqHeaders[name]) return false;
        }
        return true;
    }

    _copyWithoutHopByHopHeaders(inHeaders) {
        const headers = {};
        for (const name in inHeaders) {
            if (hopByHopHeaders[name]) continue;
            headers[name] = inHeaders[name];
        }
        // 9.1.  Connection
        if (inHeaders.connection) {
            const tokens = inHeaders.connection.trim().split(/\s*,\s*/);
            for (const name of tokens) {
                delete headers[name];
            }
        }
        if (headers.warning) {
            const warnings = headers.warning.split(/,/).filter(warning => {
                return !/^\s*1[0-9][0-9]/.test(warning);
            });
            if (!warnings.length) {
                delete headers.warning;
            } else {
                headers.warning = warnings.join(',').trim();
            }
        }
        return headers;
    }

    responseHeaders() {
        const headers = this._copyWithoutHopByHopHeaders(this._resHeaders);
        const age = this.age();

        // A cache SHOULD generate 113 warning if it heuristically chose a freshness
        // lifetime greater than 24 hours and the response's age is greater than 24 hours.
        if (
            age > 3600 * 24 &&
            !this._hasExplicitExpiration() &&
            this.maxAge() > 3600 * 24
        ) {
            headers.warning =
                (headers.warning ? `${headers.warning}, ` : '') +
                '113 - "rfc7234 5.5.4"';
        }
        headers.age = `${Math.round(age)}`;
        headers.date = new Date(this.now()).toUTCString();
        return headers;
    }

    /**
     * Value of the Date response header or current time if Date was invalid
     * @return timestamp
     */
    date() {
        const serverDate = Date.parse(this._resHeaders.date);
        if (isFinite(serverDate)) {
            return serverDate;
        }
        return this._responseTime;
    }

    /**
     * Value of the Age header, in seconds, updated for the current time.
     * May be fractional.
     *
     * @return Number
     */
    age() {
        let age = this._ageValue();

        const residentTime = (this.now() - this._responseTime) / 1000;
        return age + residentTime;
    }

    _ageValue() {
        return toNumberOrZero(this._resHeaders.age);
    }

    /**
     * Value of applicable max-age (or heuristic equivalent) in seconds. This counts since response's `Date`.
     *
     * For an up-to-date value, see `timeToLive()`.
     *
     * @return Number
     */
    maxAge() {
        if (!this.storable() || this._rescc['no-cache']) {
            return 0;
        }

        // Shared responses with cookies are cacheable according to the RFC, but IMHO it'd be unwise to do so by default
        // so this implementation requires explicit opt-in via public header
        if (
            this._isShared &&
            (this._resHeaders['set-cookie'] &&
                !this._rescc.public &&
                !this._rescc.immutable)
        ) {
            return 0;
        }

        if (this._resHeaders.vary === '*') {
            return 0;
        }

        if (this._isShared) {
            if (this._rescc['proxy-revalidate']) {
                return 0;
            }
            // if a response includes the s-maxage directive, a shared cache recipient MUST ignore the Expires field.
            if (this._rescc['s-maxage']) {
                return toNumberOrZero(this._rescc['s-maxage']);
            }
        }

        // If a response includes a Cache-Control field with the max-age directive, a recipient MUST ignore the Expires field.
        if (this._rescc['max-age']) {
            return toNumberOrZero(this._rescc['max-age']);
        }

        const defaultMinTtl = this._rescc.immutable ? this._immutableMinTtl : 0;

        const serverDate = this.date();
        if (this._resHeaders.expires) {
            const expires = Date.parse(this._resHeaders.expires);
            // A cache recipient MUST interpret invalid date formats, especially the value "0", as representing a time in the past (i.e., "already expired").
            if (Number.isNaN(expires) || expires < serverDate) {
                return 0;
            }
            return Math.max(defaultMinTtl, (expires - serverDate) / 1000);
        }

        if (this._resHeaders['last-modified']) {
            const lastModified = Date.parse(this._resHeaders['last-modified']);
            if (isFinite(lastModified) && serverDate > lastModified) {
                return Math.max(
                    defaultMinTtl,
                    ((serverDate - lastModified) / 1000) * this._cacheHeuristic
                );
            }
        }

        return defaultMinTtl;
    }

    timeToLive() {
        const age = this.maxAge() - this.age();
        const staleIfErrorAge = age + toNumberOrZero(this._rescc['stale-if-error']);
        const staleWhileRevalidateAge = age + toNumberOrZero(this._rescc['stale-while-revalidate']);
        return Math.max(0, age, staleIfErrorAge, staleWhileRevalidateAge) * 1000;
    }

    stale() {
        return this.maxAge() <= this.age();
    }

    _useStaleIfError() {
        return this.maxAge() + toNumberOrZero(this._rescc['stale-if-error']) > this.age();
    }

    useStaleWhileRevalidate() {
        return this.maxAge() + toNumberOrZero(this._rescc['stale-while-revalidate']) > this.age();
    }

    static fromObject(obj) {
        return new this(undefined, undefined, { _fromObject: obj });
    }

    _fromObject(obj) {
        if (this._responseTime) throw Error('Reinitialized');
        if (!obj || obj.v !== 1) throw Error('Invalid serialization');

        this._responseTime = obj.t;
        this._isShared = obj.sh;
        this._cacheHeuristic = obj.ch;
        this._immutableMinTtl =
            obj.imm !== undefined ? obj.imm : 24 * 3600 * 1000;
        this._status = obj.st;
        this._resHeaders = obj.resh;
        this._rescc = obj.rescc;
        this._method = obj.m;
        this._url = obj.u;
        this._host = obj.h;
        this._noAuthorization = obj.a;
        this._reqHeaders = obj.reqh;
        this._reqcc = obj.reqcc;
    }

    toObject() {
        return {
            v: 1,
            t: this._responseTime,
            sh: this._isShared,
            ch: this._cacheHeuristic,
            imm: this._immutableMinTtl,
            st: this._status,
            resh: this._resHeaders,
            rescc: this._rescc,
            m: this._method,
            u: this._url,
            h: this._host,
            a: this._noAuthorization,
            reqh: this._reqHeaders,
            reqcc: this._reqcc,
        };
    }

    /**
     * Headers for sending to the origin server to revalidate stale response.
     * Allows server to return 304 to allow reuse of the previous response.
     *
     * Hop by hop headers are always stripped.
     * Revalidation headers may be added or removed, depending on request.
     */
    revalidationHeaders(incomingReq) {
        this._assertRequestHasHeaders(incomingReq);
        const headers = this._copyWithoutHopByHopHeaders(incomingReq.headers);

        // This implementation does not understand range requests
        delete headers['if-range'];

        if (!this._requestMatches(incomingReq, true) || !this.storable()) {
            // revalidation allowed via HEAD
            // not for the same resource, or wasn't allowed to be cached anyway
            delete headers['if-none-match'];
            delete headers['if-modified-since'];
            return headers;
        }

        /* MUST send that entity-tag in any cache validation request (using If-Match or If-None-Match) if an entity-tag has been provided by the origin server. */
        if (this._resHeaders.etag) {
            headers['if-none-match'] = headers['if-none-match']
                ? `${headers['if-none-match']}, ${this._resHeaders.etag}`
                : this._resHeaders.etag;
        }

        // Clients MAY issue simple (non-subrange) GET requests with either weak validators or strong validators. Clients MUST NOT use weak validators in other forms of request.
        const forbidsWeakValidators =
            headers['accept-ranges'] ||
            headers['if-match'] ||
            headers['if-unmodified-since'] ||
            (this._method && this._method != 'GET');

        /* SHOULD send the Last-Modified value in non-subrange cache validation requests (using If-Modified-Since) if only a Last-Modified value has been provided by the origin server.
        Note: This implementation does not understand partial responses (206) */
        if (forbidsWeakValidators) {
            delete headers['if-modified-since'];

            if (headers['if-none-match']) {
                const etags = headers['if-none-match']
                    .split(/,/)
                    .filter(etag => {
                        return !/^\s*W\//.test(etag);
                    });
                if (!etags.length) {
                    delete headers['if-none-match'];
                } else {
                    headers['if-none-match'] = etags.join(',').trim();
                }
            }
        } else if (
            this._resHeaders['last-modified'] &&
            !headers['if-modified-since']
        ) {
            headers['if-modified-since'] = this._resHeaders['last-modified'];
        }

        return headers;
    }

    /**
     * Creates new CachePolicy with information combined from the previews response,
     * and the new revalidation response.
     *
     * Returns {policy, modified} where modified is a boolean indicating
     * whether the response body has been modified, and old cached body can't be used.
     *
     * @return {Object} {policy: CachePolicy, modified: Boolean}
     */
    revalidatedPolicy(request, response) {
        this._assertRequestHasHeaders(request);
        if(this._useStaleIfError() && isErrorResponse(response)) {  // I consider the revalidation request unsuccessful
          return {
            modified: false,
            matches: false,
            policy: this,
          };
        }
        if (!response || !response.headers) {
            throw Error('Response headers missing');
        }

        // These aren't going to be supported exactly, since one CachePolicy object
        // doesn't know about all the other cached objects.
        let matches = false;
        if (response.status !== undefined && response.status != 304) {
            matches = false;
        } else if (
            response.headers.etag &&
            !/^\s*W\//.test(response.headers.etag)
        ) {
            // "All of the stored responses with the same strong validator are selected.
            // If none of the stored responses contain the same strong validator,
            // then the cache MUST NOT use the new response to update any stored responses."
            matches =
                this._resHeaders.etag &&
                this._resHeaders.etag.replace(/^\s*W\//, '') ===
                    response.headers.etag;
        } else if (this._resHeaders.etag && response.headers.etag) {
            // "If the new response contains a weak validator and that validator corresponds
            // to one of the cache's stored responses,
            // then the most recent of those matching stored responses is selected for update."
            matches =
                this._resHeaders.etag.replace(/^\s*W\//, '') ===
                response.headers.etag.replace(/^\s*W\//, '');
        } else if (this._resHeaders['last-modified']) {
            matches =
                this._resHeaders['last-modified'] ===
                response.headers['last-modified'];
        } else {
            // If the new response does not include any form of validator (such as in the case where
            // a client generates an If-Modified-Since request from a source other than the Last-Modified
            // response header field), and there is only one stored response, and that stored response also
            // lacks a validator, then that stored response is selected for update.
            if (
                !this._resHeaders.etag &&
                !this._resHeaders['last-modified'] &&
                !response.headers.etag &&
                !response.headers['last-modified']
            ) {
                matches = true;
            }
        }

        if (!matches) {
            return {
                policy: new this.constructor(request, response),
                // Client receiving 304 without body, even if it's invalid/mismatched has no option
                // but to reuse a cached body. We don't have a good way to tell clients to do
                // error recovery in such case.
                modified: response.status != 304,
                matches: false,
            };
        }

        // use other header fields provided in the 304 (Not Modified) response to replace all instances
        // of the corresponding header fields in the stored response.
        const headers = {};
        for (const k in this._resHeaders) {
            headers[k] =
                k in response.headers && !excludedFromRevalidationUpdate[k]
                    ? response.headers[k]
                    : this._resHeaders[k];
        }

        const newResponse = Object.assign({}, response, {
            status: this._status,
            method: this._method,
            headers,
        });
        return {
            policy: new this.constructor(request, newResponse, {
                shared: this._isShared,
                cacheHeuristic: this._cacheHeuristic,
                immutableMinTimeToLive: this._immutableMinTtl,
            }),
            modified: false,
            matches: true,
        };
    }
};


/***/ }),

/***/ "./node_modules/http2-wrapper/source/agent.js":
/*!****************************************************!*\
  !*** ./node_modules/http2-wrapper/source/agent.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const EventEmitter = __webpack_require__(/*! events */ "events");
const tls = __webpack_require__(/*! tls */ "tls");
const http2 = __webpack_require__(/*! http2 */ "http2");
const QuickLRU = __webpack_require__(/*! quick-lru */ "./node_modules/quick-lru/index.js");

const kCurrentStreamsCount = Symbol('currentStreamsCount');
const kRequest = Symbol('request');
const kOriginSet = Symbol('cachedOriginSet');
const kGracefullyClosing = Symbol('gracefullyClosing');

const nameKeys = [
	// `http2.connect()` options
	'maxDeflateDynamicTableSize',
	'maxSessionMemory',
	'maxHeaderListPairs',
	'maxOutstandingPings',
	'maxReservedRemoteStreams',
	'maxSendHeaderBlockLength',
	'paddingStrategy',

	// `tls.connect()` options
	'localAddress',
	'path',
	'rejectUnauthorized',
	'minDHSize',

	// `tls.createSecureContext()` options
	'ca',
	'cert',
	'clientCertEngine',
	'ciphers',
	'key',
	'pfx',
	'servername',
	'minVersion',
	'maxVersion',
	'secureProtocol',
	'crl',
	'honorCipherOrder',
	'ecdhCurve',
	'dhparam',
	'secureOptions',
	'sessionIdContext'
];

const getSortedIndex = (array, value, compare) => {
	let low = 0;
	let high = array.length;

	while (low < high) {
		const mid = (low + high) >>> 1;

		/* istanbul ignore next */
		if (compare(array[mid], value)) {
			// This never gets called because we use descending sort. Better to have this anyway.
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	return low;
};

const compareSessions = (a, b) => {
	return a.remoteSettings.maxConcurrentStreams > b.remoteSettings.maxConcurrentStreams;
};

// See https://tools.ietf.org/html/rfc8336
const closeCoveredSessions = (where, session) => {
	// Clients SHOULD NOT emit new requests on any connection whose Origin
	// Set is a proper subset of another connection's Origin Set, and they
	// SHOULD close it once all outstanding requests are satisfied.
	for (const coveredSession of where) {
		if (
			// The set is a proper subset when its length is less than the other set.
			coveredSession[kOriginSet].length < session[kOriginSet].length &&

			// And the other set includes all elements of the subset.
			coveredSession[kOriginSet].every(origin => session[kOriginSet].includes(origin)) &&

			// Makes sure that the session can handle all requests from the covered session.
			coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams
		) {
			// This allows pending requests to finish and prevents making new requests.
			gracefullyClose(coveredSession);
		}
	}
};

// This is basically inverted `closeCoveredSessions(...)`.
const closeSessionIfCovered = (where, coveredSession) => {
	for (const session of where) {
		if (
			coveredSession[kOriginSet].length < session[kOriginSet].length &&
			coveredSession[kOriginSet].every(origin => session[kOriginSet].includes(origin)) &&
			coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams
		) {
			gracefullyClose(coveredSession);
		}
	}
};

const getSessions = ({agent, isFree}) => {
	const result = {};

	// eslint-disable-next-line guard-for-in
	for (const normalizedOptions in agent.sessions) {
		const sessions = agent.sessions[normalizedOptions];

		const filtered = sessions.filter(session => {
			const result = session[Agent.kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;

			return isFree ? result : !result;
		});

		if (filtered.length !== 0) {
			result[normalizedOptions] = filtered;
		}
	}

	return result;
};

const gracefullyClose = session => {
	session[kGracefullyClosing] = true;

	if (session[kCurrentStreamsCount] === 0) {
		session.close();
	}
};

class Agent extends EventEmitter {
	constructor({timeout = 60000, maxSessions = Infinity, maxFreeSessions = 10, maxCachedTlsSessions = 100} = {}) {
		super();

		// A session is considered busy when its current streams count
		// is equal to or greater than the `maxConcurrentStreams` value.

		// A session is considered free when its current streams count
		// is less than the `maxConcurrentStreams` value.

		// SESSIONS[NORMALIZED_OPTIONS] = [];
		this.sessions = {};

		// The queue for creating new sessions. It looks like this:
		// QUEUE[NORMALIZED_OPTIONS][NORMALIZED_ORIGIN] = ENTRY_FUNCTION
		//
		// The entry function has `listeners`, `completed` and `destroyed` properties.
		// `listeners` is an array of objects containing `resolve` and `reject` functions.
		// `completed` is a boolean. It's set to true after ENTRY_FUNCTION is executed.
		// `destroyed` is a boolean. If it's set to true, the session will be destroyed if hasn't connected yet.
		this.queue = {};

		// Each session will use this timeout value.
		this.timeout = timeout;

		// Max sessions in total
		this.maxSessions = maxSessions;

		// Max free sessions in total
		// TODO: decreasing `maxFreeSessions` should close some sessions
		this.maxFreeSessions = maxFreeSessions;

		this._freeSessionsCount = 0;
		this._sessionsCount = 0;

		// We don't support push streams by default.
		this.settings = {
			enablePush: false
		};

		// Reusing TLS sessions increases performance.
		this.tlsSessionCache = new QuickLRU({maxSize: maxCachedTlsSessions});
	}

	static normalizeOrigin(url, servername) {
		if (typeof url === 'string') {
			url = new URL(url);
		}

		if (servername && url.hostname !== servername) {
			url.hostname = servername;
		}

		return url.origin;
	}

	normalizeOptions(options) {
		let normalized = '';

		if (options) {
			for (const key of nameKeys) {
				if (options[key]) {
					normalized += `:${options[key]}`;
				}
			}
		}

		return normalized;
	}

	_tryToCreateNewSession(normalizedOptions, normalizedOrigin) {
		if (!(normalizedOptions in this.queue) || !(normalizedOrigin in this.queue[normalizedOptions])) {
			return;
		}

		const item = this.queue[normalizedOptions][normalizedOrigin];

		// The entry function can be run only once.
		// BUG: The session may be never created when:
		// - the first condition is false AND
		// - this function is never called with the same arguments in the future.
		if (this._sessionsCount < this.maxSessions && !item.completed) {
			item.completed = true;

			item();
		}
	}

	getSession(origin, options, listeners) {
		return new Promise((resolve, reject) => {
			if (Array.isArray(listeners)) {
				listeners = [...listeners];

				// Resolve the current promise ASAP, we're just moving the listeners.
				// They will be executed at a different time.
				resolve();
			} else {
				listeners = [{resolve, reject}];
			}

			const normalizedOptions = this.normalizeOptions(options);
			const normalizedOrigin = Agent.normalizeOrigin(origin, options && options.servername);

			if (normalizedOrigin === undefined) {
				for (const {reject} of listeners) {
					reject(new TypeError('The `origin` argument needs to be a string or an URL object'));
				}

				return;
			}

			if (normalizedOptions in this.sessions) {
				const sessions = this.sessions[normalizedOptions];

				let maxConcurrentStreams = -1;
				let currentStreamsCount = -1;
				let optimalSession;

				// We could just do this.sessions[normalizedOptions].find(...) but that isn't optimal.
				// Additionally, we are looking for session which has biggest current pending streams count.
				for (const session of sessions) {
					const sessionMaxConcurrentStreams = session.remoteSettings.maxConcurrentStreams;

					if (sessionMaxConcurrentStreams < maxConcurrentStreams) {
						break;
					}

					if (session[kOriginSet].includes(normalizedOrigin)) {
						const sessionCurrentStreamsCount = session[kCurrentStreamsCount];

						if (
							sessionCurrentStreamsCount >= sessionMaxConcurrentStreams ||
							session[kGracefullyClosing] ||
							// Unfortunately the `close` event isn't called immediately,
							// so `session.destroyed` is `true`, but `session.closed` is `false`.
							session.destroyed
						) {
							continue;
						}

						// We only need set this once.
						if (!optimalSession) {
							maxConcurrentStreams = sessionMaxConcurrentStreams;
						}

						// We're looking for the session which has biggest current pending stream count,
						// in order to minimalize the amount of active sessions.
						if (sessionCurrentStreamsCount > currentStreamsCount) {
							optimalSession = session;
							currentStreamsCount = sessionCurrentStreamsCount;
						}
					}
				}

				if (optimalSession) {
					/* istanbul ignore next: safety check */
					if (listeners.length !== 1) {
						for (const {reject} of listeners) {
							const error = new Error(
								`Expected the length of listeners to be 1, got ${listeners.length}.\n` +
								'Please report this to https://github.com/szmarczak/http2-wrapper/'
							);

							reject(error);
						}

						return;
					}

					listeners[0].resolve(optimalSession);
					return;
				}
			}

			if (normalizedOptions in this.queue) {
				if (normalizedOrigin in this.queue[normalizedOptions]) {
					// There's already an item in the queue, just attach ourselves to it.
					this.queue[normalizedOptions][normalizedOrigin].listeners.push(...listeners);

					// This shouldn't be executed here.
					// See the comment inside _tryToCreateNewSession.
					this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
					return;
				}
			} else {
				this.queue[normalizedOptions] = {};
			}

			// The entry must be removed from the queue IMMEDIATELY when:
			// 1. the session connects successfully,
			// 2. an error occurs.
			const removeFromQueue = () => {
				// Our entry can be replaced. We cannot remove the new one.
				if (normalizedOptions in this.queue && this.queue[normalizedOptions][normalizedOrigin] === entry) {
					delete this.queue[normalizedOptions][normalizedOrigin];

					if (Object.keys(this.queue[normalizedOptions]).length === 0) {
						delete this.queue[normalizedOptions];
					}
				}
			};

			// The main logic is here
			const entry = () => {
				const name = `${normalizedOrigin}:${normalizedOptions}`;
				let receivedSettings = false;

				try {
					const session = http2.connect(origin, {
						createConnection: this.createConnection,
						settings: this.settings,
						session: this.tlsSessionCache.get(name),
						...options
					});
					session[kCurrentStreamsCount] = 0;
					session[kGracefullyClosing] = false;

					const isFree = () => session[kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
					let wasFree = true;

					session.socket.once('session', tlsSession => {
						this.tlsSessionCache.set(name, tlsSession);
					});

					session.once('error', error => {
						// Listeners are empty when the session successfully connected.
						for (const {reject} of listeners) {
							reject(error);
						}

						// The connection got broken, purge the cache.
						this.tlsSessionCache.delete(name);
					});

					session.setTimeout(this.timeout, () => {
						// Terminates all streams owned by this session.
						// TODO: Maybe the streams should have a "Session timed out" error?
						session.destroy();
					});

					session.once('close', () => {
						if (receivedSettings) {
							// 1. If it wasn't free then no need to decrease because
							//    it has been decreased already in session.request().
							// 2. `stream.once('close')` won't increment the count
							//    because the session is already closed.
							if (wasFree) {
								this._freeSessionsCount--;
							}

							this._sessionsCount--;

							// This cannot be moved to the stream logic,
							// because there may be a session that hadn't made a single request.
							const where = this.sessions[normalizedOptions];
							where.splice(where.indexOf(session), 1);

							if (where.length === 0) {
								delete this.sessions[normalizedOptions];
							}
						} else {
							// Broken connection
							const error = new Error('Session closed without receiving a SETTINGS frame');
							error.code = 'HTTP2WRAPPER_NOSETTINGS';

							for (const {reject} of listeners) {
								reject(error);
							}

							removeFromQueue();
						}

						// There may be another session awaiting.
						this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
					});

					// Iterates over the queue and processes listeners.
					const processListeners = () => {
						if (!(normalizedOptions in this.queue) || !isFree()) {
							return;
						}

						for (const origin of session[kOriginSet]) {
							if (origin in this.queue[normalizedOptions]) {
								const {listeners} = this.queue[normalizedOptions][origin];

								// Prevents session overloading.
								while (listeners.length !== 0 && isFree()) {
									// We assume `resolve(...)` calls `request(...)` *directly*,
									// otherwise the session will get overloaded.
									listeners.shift().resolve(session);
								}

								const where = this.queue[normalizedOptions];
								if (where[origin].listeners.length === 0) {
									delete where[origin];

									if (Object.keys(where).length === 0) {
										delete this.queue[normalizedOptions];
										break;
									}
								}

								// We're no longer free, no point in continuing.
								if (!isFree()) {
									break;
								}
							}
						}
					};

					// The Origin Set cannot shrink. No need to check if it suddenly became covered by another one.
					session.on('origin', () => {
						session[kOriginSet] = session.originSet;

						if (!isFree()) {
							// The session is full.
							return;
						}

						processListeners();

						// Close covered sessions (if possible).
						closeCoveredSessions(this.sessions[normalizedOptions], session);
					});

					session.once('remoteSettings', () => {
						// Fix Node.js bug preventing the process from exiting
						session.ref();
						session.unref();

						this._sessionsCount++;

						// The Agent could have been destroyed already.
						if (entry.destroyed) {
							const error = new Error('Agent has been destroyed');

							for (const listener of listeners) {
								listener.reject(error);
							}

							session.destroy();
							return;
						}

						session[kOriginSet] = session.originSet;

						{
							const where = this.sessions;

							if (normalizedOptions in where) {
								const sessions = where[normalizedOptions];
								sessions.splice(getSortedIndex(sessions, session, compareSessions), 0, session);
							} else {
								where[normalizedOptions] = [session];
							}
						}

						this._freeSessionsCount += 1;
						receivedSettings = true;

						this.emit('session', session);

						processListeners();
						removeFromQueue();

						// TODO: Close last recently used (or least used?) session
						if (session[kCurrentStreamsCount] === 0 && this._freeSessionsCount > this.maxFreeSessions) {
							session.close();
						}

						// Check if we haven't managed to execute all listeners.
						if (listeners.length !== 0) {
							// Request for a new session with predefined listeners.
							this.getSession(normalizedOrigin, options, listeners);
							listeners.length = 0;
						}

						// `session.remoteSettings.maxConcurrentStreams` might get increased
						session.on('remoteSettings', () => {
							processListeners();

							// In case the Origin Set changes
							closeCoveredSessions(this.sessions[normalizedOptions], session);
						});
					});

					// Shim `session.request()` in order to catch all streams
					session[kRequest] = session.request;
					session.request = (headers, streamOptions) => {
						if (session[kGracefullyClosing]) {
							throw new Error('The session is gracefully closing. No new streams are allowed.');
						}

						const stream = session[kRequest](headers, streamOptions);

						// The process won't exit until the session is closed or all requests are gone.
						session.ref();

						++session[kCurrentStreamsCount];

						if (session[kCurrentStreamsCount] === session.remoteSettings.maxConcurrentStreams) {
							this._freeSessionsCount--;
						}

						stream.once('close', () => {
							wasFree = isFree();

							--session[kCurrentStreamsCount];

							if (!session.destroyed && !session.closed) {
								closeSessionIfCovered(this.sessions[normalizedOptions], session);

								if (isFree() && !session.closed) {
									if (!wasFree) {
										this._freeSessionsCount++;

										wasFree = true;
									}

									const isEmpty = session[kCurrentStreamsCount] === 0;

									if (isEmpty) {
										session.unref();
									}

									if (
										isEmpty &&
										(
											this._freeSessionsCount > this.maxFreeSessions ||
											session[kGracefullyClosing]
										)
									) {
										session.close();
									} else {
										closeCoveredSessions(this.sessions[normalizedOptions], session);
										processListeners();
									}
								}
							}
						});

						return stream;
					};
				} catch (error) {
					for (const listener of listeners) {
						listener.reject(error);
					}

					removeFromQueue();
				}
			};

			entry.listeners = listeners;
			entry.completed = false;
			entry.destroyed = false;

			this.queue[normalizedOptions][normalizedOrigin] = entry;
			this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
		});
	}

	request(origin, options, headers, streamOptions) {
		return new Promise((resolve, reject) => {
			this.getSession(origin, options, [{
				reject,
				resolve: session => {
					try {
						resolve(session.request(headers, streamOptions));
					} catch (error) {
						reject(error);
					}
				}
			}]);
		});
	}

	createConnection(origin, options) {
		return Agent.connect(origin, options);
	}

	static connect(origin, options) {
		options.ALPNProtocols = ['h2'];

		const port = origin.port || 443;
		const host = origin.hostname || origin.host;

		if (typeof options.servername === 'undefined') {
			options.servername = host;
		}

		return tls.connect(port, host, options);
	}

	closeFreeSessions() {
		for (const sessions of Object.values(this.sessions)) {
			for (const session of sessions) {
				if (session[kCurrentStreamsCount] === 0) {
					session.close();
				}
			}
		}
	}

	destroy(reason) {
		for (const sessions of Object.values(this.sessions)) {
			for (const session of sessions) {
				session.destroy(reason);
			}
		}

		for (const entriesOfAuthority of Object.values(this.queue)) {
			for (const entry of Object.values(entriesOfAuthority)) {
				entry.destroyed = true;
			}
		}

		// New requests should NOT attach to destroyed sessions
		this.queue = {};
	}

	get freeSessions() {
		return getSessions({agent: this, isFree: true});
	}

	get busySessions() {
		return getSessions({agent: this, isFree: false});
	}
}

Agent.kCurrentStreamsCount = kCurrentStreamsCount;
Agent.kGracefullyClosing = kGracefullyClosing;

module.exports = {
	Agent,
	globalAgent: new Agent()
};


/***/ }),

/***/ "./node_modules/http2-wrapper/source/auto.js":
/*!***************************************************!*\
  !*** ./node_modules/http2-wrapper/source/auto.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const http = __webpack_require__(/*! http */ "http");
const https = __webpack_require__(/*! https */ "https");
const resolveALPN = __webpack_require__(/*! resolve-alpn */ "./node_modules/resolve-alpn/index.js");
const QuickLRU = __webpack_require__(/*! quick-lru */ "./node_modules/quick-lru/index.js");
const Http2ClientRequest = __webpack_require__(/*! ./client-request */ "./node_modules/http2-wrapper/source/client-request.js");
const calculateServerName = __webpack_require__(/*! ./utils/calculate-server-name */ "./node_modules/http2-wrapper/source/utils/calculate-server-name.js");
const urlToOptions = __webpack_require__(/*! ./utils/url-to-options */ "./node_modules/http2-wrapper/source/utils/url-to-options.js");

const cache = new QuickLRU({maxSize: 100});
const queue = new Map();

const installSocket = (agent, socket, options) => {
	socket._httpMessage = {shouldKeepAlive: true};

	const onFree = () => {
		agent.emit('free', socket, options);
	};

	socket.on('free', onFree);

	const onClose = () => {
		agent.removeSocket(socket, options);
	};

	socket.on('close', onClose);

	const onRemove = () => {
		agent.removeSocket(socket, options);
		socket.off('close', onClose);
		socket.off('free', onFree);
		socket.off('agentRemove', onRemove);
	};

	socket.on('agentRemove', onRemove);

	agent.emit('free', socket, options);
};

const resolveProtocol = async options => {
	const name = `${options.host}:${options.port}:${options.ALPNProtocols.sort()}`;

	if (!cache.has(name)) {
		if (queue.has(name)) {
			const result = await queue.get(name);
			return result.alpnProtocol;
		}

		const {path, agent} = options;
		options.path = options.socketPath;

		const resultPromise = resolveALPN(options);
		queue.set(name, resultPromise);

		try {
			const {socket, alpnProtocol} = await resultPromise;
			cache.set(name, alpnProtocol);

			options.path = path;

			if (alpnProtocol === 'h2') {
				// https://github.com/nodejs/node/issues/33343
				socket.destroy();
			} else {
				const {globalAgent} = https;
				const defaultCreateConnection = https.Agent.prototype.createConnection;

				if (agent) {
					if (agent.createConnection === defaultCreateConnection) {
						installSocket(agent, socket, options);
					} else {
						socket.destroy();
					}
				} else if (globalAgent.createConnection === defaultCreateConnection) {
					installSocket(globalAgent, socket, options);
				} else {
					socket.destroy();
				}
			}

			queue.delete(name);

			return alpnProtocol;
		} catch (error) {
			queue.delete(name);

			throw error;
		}
	}

	return cache.get(name);
};

module.exports = async (input, options, callback) => {
	if (typeof input === 'string' || input instanceof URL) {
		input = urlToOptions(new URL(input));
	}

	if (typeof options === 'function') {
		callback = options;
		options = undefined;
	}

	options = {
		ALPNProtocols: ['h2', 'http/1.1'],
		...input,
		...options,
		resolveSocket: true
	};

	if (!Array.isArray(options.ALPNProtocols) || options.ALPNProtocols.length === 0) {
		throw new Error('The `ALPNProtocols` option must be an Array with at least one entry');
	}

	options.protocol = options.protocol || 'https:';
	const isHttps = options.protocol === 'https:';

	options.host = options.hostname || options.host || 'localhost';
	options.session = options.tlsSession;
	options.servername = options.servername || calculateServerName(options);
	options.port = options.port || (isHttps ? 443 : 80);
	options._defaultAgent = isHttps ? https.globalAgent : http.globalAgent;

	const agents = options.agent;

	if (agents) {
		if (agents.addRequest) {
			throw new Error('The `options.agent` object can contain only `http`, `https` or `http2` properties');
		}

		options.agent = agents[isHttps ? 'https' : 'http'];
	}

	if (isHttps) {
		const protocol = await resolveProtocol(options);

		if (protocol === 'h2') {
			if (agents) {
				options.agent = agents.http2;
			}

			return new Http2ClientRequest(options, callback);
		}
	}

	return http.request(options, callback);
};

module.exports.protocolCache = cache;


/***/ }),

/***/ "./node_modules/http2-wrapper/source/client-request.js":
/*!*************************************************************!*\
  !*** ./node_modules/http2-wrapper/source/client-request.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const http2 = __webpack_require__(/*! http2 */ "http2");
const {Writable} = __webpack_require__(/*! stream */ "stream");
const {Agent, globalAgent} = __webpack_require__(/*! ./agent */ "./node_modules/http2-wrapper/source/agent.js");
const IncomingMessage = __webpack_require__(/*! ./incoming-message */ "./node_modules/http2-wrapper/source/incoming-message.js");
const urlToOptions = __webpack_require__(/*! ./utils/url-to-options */ "./node_modules/http2-wrapper/source/utils/url-to-options.js");
const proxyEvents = __webpack_require__(/*! ./utils/proxy-events */ "./node_modules/http2-wrapper/source/utils/proxy-events.js");
const isRequestPseudoHeader = __webpack_require__(/*! ./utils/is-request-pseudo-header */ "./node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js");
const {
	ERR_INVALID_ARG_TYPE,
	ERR_INVALID_PROTOCOL,
	ERR_HTTP_HEADERS_SENT,
	ERR_INVALID_HTTP_TOKEN,
	ERR_HTTP_INVALID_HEADER_VALUE,
	ERR_INVALID_CHAR
} = __webpack_require__(/*! ./utils/errors */ "./node_modules/http2-wrapper/source/utils/errors.js");

const {
	HTTP2_HEADER_STATUS,
	HTTP2_HEADER_METHOD,
	HTTP2_HEADER_PATH,
	HTTP2_METHOD_CONNECT
} = http2.constants;

const kHeaders = Symbol('headers');
const kOrigin = Symbol('origin');
const kSession = Symbol('session');
const kOptions = Symbol('options');
const kFlushedHeaders = Symbol('flushedHeaders');
const kJobs = Symbol('jobs');

const isValidHttpToken = /^[\^`\-\w!#$%&*+.|~]+$/;
const isInvalidHeaderValue = /[^\t\u0020-\u007E\u0080-\u00FF]/;

class ClientRequest extends Writable {
	constructor(input, options, callback) {
		super({
			autoDestroy: false
		});

		const hasInput = typeof input === 'string' || input instanceof URL;
		if (hasInput) {
			input = urlToOptions(input instanceof URL ? input : new URL(input));
		}

		if (typeof options === 'function' || options === undefined) {
			// (options, callback)
			callback = options;
			options = hasInput ? input : {...input};
		} else {
			// (input, options, callback)
			options = {...input, ...options};
		}

		if (options.h2session) {
			this[kSession] = options.h2session;
		} else if (options.agent === false) {
			this.agent = new Agent({maxFreeSessions: 0});
		} else if (typeof options.agent === 'undefined' || options.agent === null) {
			if (typeof options.createConnection === 'function') {
				// This is a workaround - we don't have to create the session on our own.
				this.agent = new Agent({maxFreeSessions: 0});
				this.agent.createConnection = options.createConnection;
			} else {
				this.agent = globalAgent;
			}
		} else if (typeof options.agent.request === 'function') {
			this.agent = options.agent;
		} else {
			throw new ERR_INVALID_ARG_TYPE('options.agent', ['Agent-like Object', 'undefined', 'false'], options.agent);
		}

		if (options.protocol && options.protocol !== 'https:') {
			throw new ERR_INVALID_PROTOCOL(options.protocol, 'https:');
		}

		const port = options.port || options.defaultPort || (this.agent && this.agent.defaultPort) || 443;
		const host = options.hostname || options.host || 'localhost';

		// Don't enforce the origin via options. It may be changed in an Agent.
		delete options.hostname;
		delete options.host;
		delete options.port;

		const {timeout} = options;
		options.timeout = undefined;

		this[kHeaders] = Object.create(null);
		this[kJobs] = [];

		this.socket = null;
		this.connection = null;

		this.method = options.method || 'GET';
		this.path = options.path;

		this.res = null;
		this.aborted = false;
		this.reusedSocket = false;

		if (options.headers) {
			for (const [header, value] of Object.entries(options.headers)) {
				this.setHeader(header, value);
			}
		}

		if (options.auth && !('authorization' in this[kHeaders])) {
			this[kHeaders].authorization = 'Basic ' + Buffer.from(options.auth).toString('base64');
		}

		options.session = options.tlsSession;
		options.path = options.socketPath;

		this[kOptions] = options;

		// Clients that generate HTTP/2 requests directly SHOULD use the :authority pseudo-header field instead of the Host header field.
		if (port === 443) {
			this[kOrigin] = `https://${host}`;

			if (!(':authority' in this[kHeaders])) {
				this[kHeaders][':authority'] = host;
			}
		} else {
			this[kOrigin] = `https://${host}:${port}`;

			if (!(':authority' in this[kHeaders])) {
				this[kHeaders][':authority'] = `${host}:${port}`;
			}
		}

		if (timeout) {
			this.setTimeout(timeout);
		}

		if (callback) {
			this.once('response', callback);
		}

		this[kFlushedHeaders] = false;
	}

	get method() {
		return this[kHeaders][HTTP2_HEADER_METHOD];
	}

	set method(value) {
		if (value) {
			this[kHeaders][HTTP2_HEADER_METHOD] = value.toUpperCase();
		}
	}

	get path() {
		return this[kHeaders][HTTP2_HEADER_PATH];
	}

	set path(value) {
		if (value) {
			this[kHeaders][HTTP2_HEADER_PATH] = value;
		}
	}

	get _mustNotHaveABody() {
		return this.method === 'GET' || this.method === 'HEAD' || this.method === 'DELETE';
	}

	_write(chunk, encoding, callback) {
		// https://github.com/nodejs/node/blob/654df09ae0c5e17d1b52a900a545f0664d8c7627/lib/internal/http2/util.js#L148-L156
		if (this._mustNotHaveABody) {
			callback(new Error('The GET, HEAD and DELETE methods must NOT have a body'));
			/* istanbul ignore next: Node.js 12 throws directly */
			return;
		}

		this.flushHeaders();

		const callWrite = () => this._request.write(chunk, encoding, callback);
		if (this._request) {
			callWrite();
		} else {
			this[kJobs].push(callWrite);
		}
	}

	_final(callback) {
		if (this.destroyed) {
			return;
		}

		this.flushHeaders();

		const callEnd = () => {
			// For GET, HEAD and DELETE
			if (this._mustNotHaveABody) {
				callback();
				return;
			}

			this._request.end(callback);
		};

		if (this._request) {
			callEnd();
		} else {
			this[kJobs].push(callEnd);
		}
	}

	abort() {
		if (this.res && this.res.complete) {
			return;
		}

		if (!this.aborted) {
			process.nextTick(() => this.emit('abort'));
		}

		this.aborted = true;

		this.destroy();
	}

	_destroy(error, callback) {
		if (this.res) {
			this.res._dump();
		}

		if (this._request) {
			this._request.destroy();
		}

		callback(error);
	}

	async flushHeaders() {
		if (this[kFlushedHeaders] || this.destroyed) {
			return;
		}

		this[kFlushedHeaders] = true;

		const isConnectMethod = this.method === HTTP2_METHOD_CONNECT;

		// The real magic is here
		const onStream = stream => {
			this._request = stream;

			if (this.destroyed) {
				stream.destroy();
				return;
			}

			// Forwards `timeout`, `continue`, `close` and `error` events to this instance.
			if (!isConnectMethod) {
				proxyEvents(stream, this, ['timeout', 'continue', 'close', 'error']);
			}

			// Wait for the `finish` event. We don't want to emit the `response` event
			// before `request.end()` is called.
			const waitForEnd = fn => {
				return (...args) => {
					if (!this.writable && !this.destroyed) {
						fn(...args);
					} else {
						this.once('finish', () => {
							fn(...args);
						});
					}
				};
			};

			// This event tells we are ready to listen for the data.
			stream.once('response', waitForEnd((headers, flags, rawHeaders) => {
				// If we were to emit raw request stream, it would be as fast as the native approach.
				// Note that wrapping the raw stream in a Proxy instance won't improve the performance (already tested it).
				const response = new IncomingMessage(this.socket, stream.readableHighWaterMark);
				this.res = response;

				response.req = this;
				response.statusCode = headers[HTTP2_HEADER_STATUS];
				response.headers = headers;
				response.rawHeaders = rawHeaders;

				response.once('end', () => {
					if (this.aborted) {
						response.aborted = true;
						response.emit('aborted');
					} else {
						response.complete = true;

						// Has no effect, just be consistent with the Node.js behavior
						response.socket = null;
						response.connection = null;
					}
				});

				if (isConnectMethod) {
					response.upgrade = true;

					// The HTTP1 API says the socket is detached here,
					// but we can't do that so we pass the original HTTP2 request.
					if (this.emit('connect', response, stream, Buffer.alloc(0))) {
						this.emit('close');
					} else {
						// No listeners attached, destroy the original request.
						stream.destroy();
					}
				} else {
					// Forwards data
					stream.on('data', chunk => {
						if (!response._dumped && !response.push(chunk)) {
							stream.pause();
						}
					});

					stream.once('end', () => {
						response.push(null);
					});

					if (!this.emit('response', response)) {
						// No listeners attached, dump the response.
						response._dump();
					}
				}
			}));

			// Emits `information` event
			stream.once('headers', waitForEnd(
				headers => this.emit('information', {statusCode: headers[HTTP2_HEADER_STATUS]})
			));

			stream.once('trailers', waitForEnd((trailers, flags, rawTrailers) => {
				const {res} = this;

				// Assigns trailers to the response object.
				res.trailers = trailers;
				res.rawTrailers = rawTrailers;
			}));

			const {socket} = stream.session;
			this.socket = socket;
			this.connection = socket;

			for (const job of this[kJobs]) {
				job();
			}

			this.emit('socket', this.socket);
		};

		// Makes a HTTP2 request
		if (this[kSession]) {
			try {
				onStream(this[kSession].request(this[kHeaders]));
			} catch (error) {
				this.emit('error', error);
			}
		} else {
			this.reusedSocket = true;

			try {
				onStream(await this.agent.request(this[kOrigin], this[kOptions], this[kHeaders]));
			} catch (error) {
				this.emit('error', error);
			}
		}
	}

	getHeader(name) {
		if (typeof name !== 'string') {
			throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
		}

		return this[kHeaders][name.toLowerCase()];
	}

	get headersSent() {
		return this[kFlushedHeaders];
	}

	removeHeader(name) {
		if (typeof name !== 'string') {
			throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
		}

		if (this.headersSent) {
			throw new ERR_HTTP_HEADERS_SENT('remove');
		}

		delete this[kHeaders][name.toLowerCase()];
	}

	setHeader(name, value) {
		if (this.headersSent) {
			throw new ERR_HTTP_HEADERS_SENT('set');
		}

		if (typeof name !== 'string' || (!isValidHttpToken.test(name) && !isRequestPseudoHeader(name))) {
			throw new ERR_INVALID_HTTP_TOKEN('Header name', name);
		}

		if (typeof value === 'undefined') {
			throw new ERR_HTTP_INVALID_HEADER_VALUE(value, name);
		}

		if (isInvalidHeaderValue.test(value)) {
			throw new ERR_INVALID_CHAR('header content', name);
		}

		this[kHeaders][name.toLowerCase()] = value;
	}

	setNoDelay() {
		// HTTP2 sockets cannot be malformed, do nothing.
	}

	setSocketKeepAlive() {
		// HTTP2 sockets cannot be malformed, do nothing.
	}

	setTimeout(ms, callback) {
		const applyTimeout = () => this._request.setTimeout(ms, callback);

		if (this._request) {
			applyTimeout();
		} else {
			this[kJobs].push(applyTimeout);
		}

		return this;
	}

	get maxHeadersCount() {
		if (!this.destroyed && this._request) {
			return this._request.session.localSettings.maxHeaderListSize;
		}

		return undefined;
	}

	set maxHeadersCount(_value) {
		// Updating HTTP2 settings would affect all requests, do nothing.
	}
}

module.exports = ClientRequest;


/***/ }),

/***/ "./node_modules/http2-wrapper/source/incoming-message.js":
/*!***************************************************************!*\
  !*** ./node_modules/http2-wrapper/source/incoming-message.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Readable} = __webpack_require__(/*! stream */ "stream");

class IncomingMessage extends Readable {
	constructor(socket, highWaterMark) {
		super({
			highWaterMark,
			autoDestroy: false
		});

		this.statusCode = null;
		this.statusMessage = '';
		this.httpVersion = '2.0';
		this.httpVersionMajor = 2;
		this.httpVersionMinor = 0;
		this.headers = {};
		this.trailers = {};
		this.req = null;

		this.aborted = false;
		this.complete = false;
		this.upgrade = null;

		this.rawHeaders = [];
		this.rawTrailers = [];

		this.socket = socket;
		this.connection = socket;

		this._dumped = false;
	}

	_destroy(error) {
		this.req._request.destroy(error);
	}

	setTimeout(ms, callback) {
		this.req.setTimeout(ms, callback);
		return this;
	}

	_dump() {
		if (!this._dumped) {
			this._dumped = true;

			this.removeAllListeners('data');
			this.resume();
		}
	}

	_read() {
		if (this.req) {
			this.req._request.resume();
		}
	}
}

module.exports = IncomingMessage;


/***/ }),

/***/ "./node_modules/http2-wrapper/source/index.js":
/*!****************************************************!*\
  !*** ./node_modules/http2-wrapper/source/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const http2 = __webpack_require__(/*! http2 */ "http2");
const agent = __webpack_require__(/*! ./agent */ "./node_modules/http2-wrapper/source/agent.js");
const ClientRequest = __webpack_require__(/*! ./client-request */ "./node_modules/http2-wrapper/source/client-request.js");
const IncomingMessage = __webpack_require__(/*! ./incoming-message */ "./node_modules/http2-wrapper/source/incoming-message.js");
const auto = __webpack_require__(/*! ./auto */ "./node_modules/http2-wrapper/source/auto.js");

const request = (url, options, callback) => {
	return new ClientRequest(url, options, callback);
};

const get = (url, options, callback) => {
	// eslint-disable-next-line unicorn/prevent-abbreviations
	const req = new ClientRequest(url, options, callback);
	req.end();

	return req;
};

module.exports = {
	...http2,
	ClientRequest,
	IncomingMessage,
	...agent,
	request,
	get,
	auto
};


/***/ }),

/***/ "./node_modules/http2-wrapper/source/utils/calculate-server-name.js":
/*!**************************************************************************!*\
  !*** ./node_modules/http2-wrapper/source/utils/calculate-server-name.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const net = __webpack_require__(/*! net */ "net");
/* istanbul ignore file: https://github.com/nodejs/node/blob/v13.0.1/lib/_http_agent.js */

module.exports = options => {
	let servername = options.host;
	const hostHeader = options.headers && options.headers.host;

	if (hostHeader) {
		if (hostHeader.startsWith('[')) {
			const index = hostHeader.indexOf(']');
			if (index === -1) {
				servername = hostHeader;
			} else {
				servername = hostHeader.slice(1, -1);
			}
		} else {
			servername = hostHeader.split(':', 1)[0];
		}
	}

	if (net.isIP(servername)) {
		return '';
	}

	return servername;
};


/***/ }),

/***/ "./node_modules/http2-wrapper/source/utils/errors.js":
/*!***********************************************************!*\
  !*** ./node_modules/http2-wrapper/source/utils/errors.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/master/lib/internal/errors.js */

const makeError = (Base, key, getMessage) => {
	module.exports[key] = class NodeError extends Base {
		constructor(...args) {
			super(typeof getMessage === 'string' ? getMessage : getMessage(args));
			this.name = `${super.name} [${key}]`;
			this.code = key;
		}
	};
};

makeError(TypeError, 'ERR_INVALID_ARG_TYPE', args => {
	const type = args[0].includes('.') ? 'property' : 'argument';

	let valid = args[1];
	const isManyTypes = Array.isArray(valid);

	if (isManyTypes) {
		valid = `${valid.slice(0, -1).join(', ')} or ${valid.slice(-1)}`;
	}

	return `The "${args[0]}" ${type} must be ${isManyTypes ? 'one of' : 'of'} type ${valid}. Received ${typeof args[2]}`;
});

makeError(TypeError, 'ERR_INVALID_PROTOCOL', args => {
	return `Protocol "${args[0]}" not supported. Expected "${args[1]}"`;
});

makeError(Error, 'ERR_HTTP_HEADERS_SENT', args => {
	return `Cannot ${args[0]} headers after they are sent to the client`;
});

makeError(TypeError, 'ERR_INVALID_HTTP_TOKEN', args => {
	return `${args[0]} must be a valid HTTP token [${args[1]}]`;
});

makeError(TypeError, 'ERR_HTTP_INVALID_HEADER_VALUE', args => {
	return `Invalid value "${args[0]} for header "${args[1]}"`;
});

makeError(TypeError, 'ERR_INVALID_CHAR', args => {
	return `Invalid character in ${args[0]} [${args[1]}]`;
});


/***/ }),

/***/ "./node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = header => {
	switch (header) {
		case ':method':
		case ':scheme':
		case ':authority':
		case ':path':
			return true;
		default:
			return false;
	}
};


/***/ }),

/***/ "./node_modules/http2-wrapper/source/utils/proxy-events.js":
/*!*****************************************************************!*\
  !*** ./node_modules/http2-wrapper/source/utils/proxy-events.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (from, to, events) => {
	for (const event of events) {
		from.on(event, (...args) => to.emit(event, ...args));
	}
};


/***/ }),

/***/ "./node_modules/http2-wrapper/source/utils/url-to-options.js":
/*!*******************************************************************!*\
  !*** ./node_modules/http2-wrapper/source/utils/url-to-options.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/a91293d4d9ab403046ab5eb022332e4e3d249bd3/lib/internal/url.js#L1257 */

module.exports = url => {
	const options = {
		protocol: url.protocol,
		hostname: typeof url.hostname === 'string' && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
		host: url.host,
		hash: url.hash,
		search: url.search,
		pathname: url.pathname,
		href: url.href,
		path: `${url.pathname || ''}${url.search || ''}`
	};

	if (typeof url.port === 'string' && url.port.length !== 0) {
		options.port = Number(url.port);
	}

	if (url.username || url.password) {
		options.auth = `${url.username || ''}:${url.password || ''}`;
	}

	return options;
};


/***/ }),

/***/ "./node_modules/json-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/json-buffer/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

//TODO: handle reviver/dehydrate function like normal
//and handle indentation, like normal.
//if anyone needs this... please send pull request.

exports.stringify = function stringify (o) {
  if('undefined' == typeof o) return o

  if(o && Buffer.isBuffer(o))
    return JSON.stringify(':base64:' + o.toString('base64'))

  if(o && o.toJSON)
    o =  o.toJSON()

  if(o && 'object' === typeof o) {
    var s = ''
    var array = Array.isArray(o)
    s = array ? '[' : '{'
    var first = true

    for(var k in o) {
      var ignore = 'function' == typeof o[k] || (!array && 'undefined' === typeof o[k])
      if(Object.hasOwnProperty.call(o, k) && !ignore) {
        if(!first)
          s += ','
        first = false
        if (array) {
          if(o[k] == undefined)
            s += 'null'
          else
            s += stringify(o[k])
        } else if (o[k] !== void(0)) {
          s += stringify(k) + ':' + stringify(o[k])
        }
      }
    }

    s += array ? ']' : '}'

    return s
  } else if ('string' === typeof o) {
    return JSON.stringify(/^:/.test(o) ? ':' + o : o)
  } else if ('undefined' === typeof o) {
    return 'null';
  } else
    return JSON.stringify(o)
}

exports.parse = function (s) {
  return JSON.parse(s, function (key, value) {
    if('string' === typeof value) {
      if(/^:base64:/.test(value))
        return Buffer.from(value.substring(8), 'base64')
      else
        return /^:/.test(value) ? value.substring(1) : value 
    }
    return value
  })
}


/***/ }),

/***/ "./node_modules/keyv/src/index.js":
/*!****************************************!*\
  !*** ./node_modules/keyv/src/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const EventEmitter = __webpack_require__(/*! events */ "events");
const JSONB = __webpack_require__(/*! json-buffer */ "./node_modules/json-buffer/index.js");

const loadStore = opts => {
	const adapters = {
		redis: '@keyv/redis',
		mongodb: '@keyv/mongo',
		mongo: '@keyv/mongo',
		sqlite: '@keyv/sqlite',
		postgresql: '@keyv/postgres',
		postgres: '@keyv/postgres',
		mysql: '@keyv/mysql'
	};
	if (opts.adapter || opts.uri) {
		const adapter = opts.adapter || /^[^:]*/.exec(opts.uri)[0];
		return new (__webpack_require__("./node_modules/keyv/src sync recursive")(adapters[adapter]))(opts);
	}

	return new Map();
};

class Keyv extends EventEmitter {
	constructor(uri, opts) {
		super();
		this.opts = Object.assign(
			{
				namespace: 'keyv',
				serialize: JSONB.stringify,
				deserialize: JSONB.parse
			},
			(typeof uri === 'string') ? { uri } : uri,
			opts
		);

		if (!this.opts.store) {
			const adapterOpts = Object.assign({}, this.opts);
			this.opts.store = loadStore(adapterOpts);
		}

		if (typeof this.opts.store.on === 'function') {
			this.opts.store.on('error', err => this.emit('error', err));
		}

		this.opts.store.namespace = this.opts.namespace;
	}

	_getKeyPrefix(key) {
		return `${this.opts.namespace}:${key}`;
	}

	get(key, opts) {
		const keyPrefixed = this._getKeyPrefix(key);
		const { store } = this.opts;
		return Promise.resolve()
			.then(() => store.get(keyPrefixed))
			.then(data => {
				return (typeof data === 'string') ? this.opts.deserialize(data) : data;
			})
			.then(data => {
				if (data === undefined) {
					return undefined;
				}

				if (typeof data.expires === 'number' && Date.now() > data.expires) {
					this.delete(key);
					return undefined;
				}

				return (opts && opts.raw) ? data : data.value;
			});
	}

	set(key, value, ttl) {
		const keyPrefixed = this._getKeyPrefix(key);
		if (typeof ttl === 'undefined') {
			ttl = this.opts.ttl;
		}

		if (ttl === 0) {
			ttl = undefined;
		}

		const { store } = this.opts;

		return Promise.resolve()
			.then(() => {
				const expires = (typeof ttl === 'number') ? (Date.now() + ttl) : null;
				value = { value, expires };
				return this.opts.serialize(value);
			})
			.then(value => store.set(keyPrefixed, value, ttl))
			.then(() => true);
	}

	delete(key) {
		const keyPrefixed = this._getKeyPrefix(key);
		const { store } = this.opts;
		return Promise.resolve()
			.then(() => store.delete(keyPrefixed));
	}

	clear() {
		const { store } = this.opts;
		return Promise.resolve()
			.then(() => store.clear());
	}
}

module.exports = Keyv;


/***/ }),

/***/ "./node_modules/keyv/src sync recursive":
/*!*************************************!*\
  !*** ./node_modules/keyv/src/ sync ***!
  \*************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/keyv/src sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/lowercase-keys/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lowercase-keys/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";

module.exports = object => {
	const result = {};

	for (const [key, value] of Object.entries(object)) {
		result[key.toLowerCase()] = value;
	}

	return result;
};


/***/ }),

/***/ "./node_modules/mimic-response/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mimic-response/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProps = [
	'destroy',
	'setTimeout',
	'socket',
	'headers',
	'trailers',
	'rawHeaders',
	'statusCode',
	'httpVersion',
	'httpVersionMinor',
	'httpVersionMajor',
	'rawTrailers',
	'statusMessage'
];

module.exports = (fromStream, toStream) => {
	const fromProps = new Set(Object.keys(fromStream).concat(knownProps));

	for (const prop of fromProps) {
		// Don't overwrite existing properties
		if (prop in toStream) {
			continue;
		}

		toStream[prop] = typeof fromStream[prop] === 'function' ? fromStream[prop].bind(fromStream) : fromStream[prop];
	}
};


/***/ }),

/***/ "./node_modules/normalize-url/index.js":
/*!*********************************************!*\
  !*** ./node_modules/normalize-url/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Use the `URL` global when targeting Node.js 10
const URLParser = typeof URL === 'undefined' ? __webpack_require__(/*! url */ "url").URL : URL;

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
const DATA_URL_DEFAULT_MIME_TYPE = 'text/plain';
const DATA_URL_DEFAULT_CHARSET = 'us-ascii';

const testParameter = (name, filters) => {
	return filters.some(filter => filter instanceof RegExp ? filter.test(name) : filter === name);
};

const normalizeDataURL = (urlString, {stripHash}) => {
	const parts = urlString.match(/^data:([^,]*?),([^#]*?)(?:#(.*))?$/);

	if (!parts) {
		throw new Error(`Invalid URL: ${urlString}`);
	}

	const mediaType = parts[1].split(';');
	const body = parts[2];
	const hash = stripHash ? '' : parts[3];

	let base64 = false;

	if (mediaType[mediaType.length - 1] === 'base64') {
		mediaType.pop();
		base64 = true;
	}

	// Lowercase MIME type
	const mimeType = (mediaType.shift() || '').toLowerCase();
	const attributes = mediaType
		.map(attribute => {
			let [key, value = ''] = attribute.split('=').map(string => string.trim());

			// Lowercase `charset`
			if (key === 'charset') {
				value = value.toLowerCase();

				if (value === DATA_URL_DEFAULT_CHARSET) {
					return '';
				}
			}

			return `${key}${value ? `=${value}` : ''}`;
		})
		.filter(Boolean);

	const normalizedMediaType = [
		...attributes
	];

	if (base64) {
		normalizedMediaType.push('base64');
	}

	if (normalizedMediaType.length !== 0 || (mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE)) {
		normalizedMediaType.unshift(mimeType);
	}

	return `data:${normalizedMediaType.join(';')},${base64 ? body.trim() : body}${hash ? `#${hash}` : ''}`;
};

const normalizeUrl = (urlString, options) => {
	options = {
		defaultProtocol: 'http:',
		normalizeProtocol: true,
		forceHttp: false,
		forceHttps: false,
		stripAuthentication: true,
		stripHash: false,
		stripWWW: true,
		removeQueryParameters: [/^utm_\w+/i],
		removeTrailingSlash: true,
		removeDirectoryIndex: false,
		sortQueryParameters: true,
		...options
	};

	// TODO: Remove this at some point in the future
	if (Reflect.has(options, 'normalizeHttps')) {
		throw new Error('options.normalizeHttps is renamed to options.forceHttp');
	}

	if (Reflect.has(options, 'normalizeHttp')) {
		throw new Error('options.normalizeHttp is renamed to options.forceHttps');
	}

	if (Reflect.has(options, 'stripFragment')) {
		throw new Error('options.stripFragment is renamed to options.stripHash');
	}

	urlString = urlString.trim();

	// Data URL
	if (/^data:/i.test(urlString)) {
		return normalizeDataURL(urlString, options);
	}

	const hasRelativeProtocol = urlString.startsWith('//');
	const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);

	// Prepend protocol
	if (!isRelativeUrl) {
		urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
	}

	const urlObj = new URLParser(urlString);

	if (options.forceHttp && options.forceHttps) {
		throw new Error('The `forceHttp` and `forceHttps` options cannot be used together');
	}

	if (options.forceHttp && urlObj.protocol === 'https:') {
		urlObj.protocol = 'http:';
	}

	if (options.forceHttps && urlObj.protocol === 'http:') {
		urlObj.protocol = 'https:';
	}

	// Remove auth
	if (options.stripAuthentication) {
		urlObj.username = '';
		urlObj.password = '';
	}

	// Remove hash
	if (options.stripHash) {
		urlObj.hash = '';
	}

	// Remove duplicate slashes if not preceded by a protocol
	if (urlObj.pathname) {
		// TODO: Use the following instead when targeting Node.js 10
		// `urlObj.pathname = urlObj.pathname.replace(/(?<!https?:)\/{2,}/g, '/');`
		urlObj.pathname = urlObj.pathname.replace(/((?!:).|^)\/{2,}/g, (_, p1) => {
			if (/^(?!\/)/g.test(p1)) {
				return `${p1}/`;
			}

			return '/';
		});
	}

	// Decode URI octets
	if (urlObj.pathname) {
		urlObj.pathname = decodeURI(urlObj.pathname);
	}

	// Remove directory index
	if (options.removeDirectoryIndex === true) {
		options.removeDirectoryIndex = [/^index\.[a-z]+$/];
	}

	if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
		let pathComponents = urlObj.pathname.split('/');
		const lastComponent = pathComponents[pathComponents.length - 1];

		if (testParameter(lastComponent, options.removeDirectoryIndex)) {
			pathComponents = pathComponents.slice(0, pathComponents.length - 1);
			urlObj.pathname = pathComponents.slice(1).join('/') + '/';
		}
	}

	if (urlObj.hostname) {
		// Remove trailing dot
		urlObj.hostname = urlObj.hostname.replace(/\.$/, '');

		// Remove `www.`
		if (options.stripWWW && /^www\.([a-z\-\d]{2,63})\.([a-z.]{2,5})$/.test(urlObj.hostname)) {
			// Each label should be max 63 at length (min: 2).
			// The extension should be max 5 at length (min: 2).
			// Source: https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
			urlObj.hostname = urlObj.hostname.replace(/^www\./, '');
		}
	}

	// Remove query unwanted parameters
	if (Array.isArray(options.removeQueryParameters)) {
		for (const key of [...urlObj.searchParams.keys()]) {
			if (testParameter(key, options.removeQueryParameters)) {
				urlObj.searchParams.delete(key);
			}
		}
	}

	// Sort query parameters
	if (options.sortQueryParameters) {
		urlObj.searchParams.sort();
	}

	if (options.removeTrailingSlash) {
		urlObj.pathname = urlObj.pathname.replace(/\/$/, '');
	}

	// Take advantage of many of the Node `url` normalizations
	urlString = urlObj.toString();

	// Remove ending `/`
	if ((options.removeTrailingSlash || urlObj.pathname === '/') && urlObj.hash === '') {
		urlString = urlString.replace(/\/$/, '');
	}

	// Restore relative protocol, if applicable
	if (hasRelativeProtocol && !options.normalizeProtocol) {
		urlString = urlString.replace(/^http:\/\//, '//');
	}

	// Remove http/https
	if (options.stripProtocol) {
		urlString = urlString.replace(/^(?:https?:)?\/\//, '');
	}

	return urlString;
};

module.exports = normalizeUrl;
// TODO: Remove this for the next major release
module.exports.default = normalizeUrl;


/***/ }),

/***/ "./node_modules/once/once.js":
/*!***********************************!*\
  !*** ./node_modules/once/once.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(/*! wrappy */ "./node_modules/wrappy/wrappy.js")
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ "./node_modules/p-cancelable/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-cancelable/index.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


class CancelError extends Error {
	constructor(reason) {
		super(reason || 'Promise was canceled');
		this.name = 'CancelError';
	}

	get isCanceled() {
		return true;
	}
}

class PCancelable {
	static fn(userFn) {
		return (...arguments_) => {
			return new PCancelable((resolve, reject, onCancel) => {
				arguments_.push(onCancel);
				// eslint-disable-next-line promise/prefer-await-to-then
				userFn(...arguments_).then(resolve, reject);
			});
		};
	}

	constructor(executor) {
		this._cancelHandlers = [];
		this._isPending = true;
		this._isCanceled = false;
		this._rejectOnCancel = true;

		this._promise = new Promise((resolve, reject) => {
			this._reject = reject;

			const onResolve = value => {
				if (!this._isCanceled || !onCancel.shouldReject) {
					this._isPending = false;
					resolve(value);
				}
			};

			const onReject = error => {
				this._isPending = false;
				reject(error);
			};

			const onCancel = handler => {
				if (!this._isPending) {
					throw new Error('The `onCancel` handler was attached after the promise settled.');
				}

				this._cancelHandlers.push(handler);
			};

			Object.defineProperties(onCancel, {
				shouldReject: {
					get: () => this._rejectOnCancel,
					set: boolean => {
						this._rejectOnCancel = boolean;
					}
				}
			});

			return executor(onResolve, onReject, onCancel);
		});
	}

	then(onFulfilled, onRejected) {
		// eslint-disable-next-line promise/prefer-await-to-then
		return this._promise.then(onFulfilled, onRejected);
	}

	catch(onRejected) {
		return this._promise.catch(onRejected);
	}

	finally(onFinally) {
		return this._promise.finally(onFinally);
	}

	cancel(reason) {
		if (!this._isPending || this._isCanceled) {
			return;
		}

		this._isCanceled = true;

		if (this._cancelHandlers.length > 0) {
			try {
				for (const handler of this._cancelHandlers) {
					handler();
				}
			} catch (error) {
				this._reject(error);
				return;
			}
		}

		if (this._rejectOnCancel) {
			this._reject(new CancelError(reason));
		}
	}

	get isCanceled() {
		return this._isCanceled;
	}
}

Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);

module.exports = PCancelable;
module.exports.CancelError = CancelError;


/***/ }),

/***/ "./node_modules/pocket-api/index.js":
/*!******************************************!*\
  !*** ./node_modules/pocket-api/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const got = __webpack_require__(/*! got */ "./node_modules/got/dist/source/index.js")

const PocketAPI = class {
	constructor (consumer_key) {
		this.consumer_key = consumer_key
		this.config = {
			pocketUrl: {
				request: 'https://getpocket.com/v3/oauth/request',
				authorize: 'https://getpocket.com/v3/oauth/authorize',
				get: 'https://getpocket.com/v3/get',
				add: 'https://getpocket.com/v3/add',
				modify: 'https://getpocket.com/v3/send'
			},
			headers: {
				'content-type': 'application/json',
				'X-Accept': 'application/json'
			}
		}
	}

	setRequestToken (requestToken) {
		this.request_token = requestToken
	}

	setAccessToken (accessToken) {
		this.access_token = accessToken
	}

	setOptions (values, endpoint, method = 'post') {
		return {
			headers: this.config.headers,
			body: JSON.stringify(values),
			url: endpoint,
			method: method,
			reponseType: 'json'
		}
	}

	async getRequestToken (callback) {
		if (this.request_token) {
			return await this.request_token
		}

		let response
		let token
		const values = {
			consumer_key: this.consumer_key,
			redirect_uri: 'pocketapp1234:authorizationFinished'
		}

		const options = this.setOptions(values, this.config.pocketUrl.request)

		try {
			response = await got(options)
		} catch (e) {
			console.error(e.name + ': ' + e.message)
			throw new Error(e)
		}

		if (callback) {
			token = JSON.parse(response.body)
			return callback(token.code)
		}

		token = JSON.parse(response.body)
		return token.code
	}

	async getAccessToken (callback) {
		if (this.access_token) {
			return await this.access_token
		}

		let token
		let response
		const values = {
			consumer_key: this.consumer_key,
			code: this.request_token
		}

		const options = this.setOptions(values, this.config.pocketUrl.authorize)

		try {
			response = await got(options)
		} catch (e) {
			console.error(e.name + ': ' + e.message)
			throw new Error(e)
		}

		if (callback) {
			token = JSON.parse(response.body)
			this.access_token = token.code
			return callback(token)
		}

		token = JSON.parse(response.body)
		this.access_token = token.code
		return token
	}

	async getArticles (params, callback) {
		let response
		const access = {
			consumer_key: this.consumer_key,
			access_token: this.access_token,
			redirect_uri: 'http://localhost:8081/'
		}

		const values = { ...access, ...params }

		const options = this.setOptions(values, this.config.pocketUrl.get)

		try {
			console.log(JSON.stringify(options, null, 2));
			response = await got(options)
		} catch (e) {
			console.error(e.name + ': ' + e.message)
			throw new Error(e)
		}

		if (callback) {
			return callback(JSON.parse(response.body))
		}

		return JSON.parse(response.body)
	}

	async addArticles (params, callback) {
		let response
		const access = {
			consumer_key: this.consumer_key,
			access_token: this.access_token
		}

		const values = { ...access, ...params }

		const options = this.setOptions(values, this.config.pocketUrl.add)
		try {
			response = await got(options)
		} catch (e) {
			console.error(e.name + ': ' + e.message)
			throw new Error(e)
		}

		if (callback) {
			return callback(JSON.parse(response.body))
		}

		return JSON.parse(response.body)
	}

	async modifyArticles (actions, callback) {
		let response
		const values = {
			actions: actions,
			consumer_key: this.consumer_key,
			access_token: this.access_token
		}

		const options = this.setOptions(values, this.config.pocketUrl.modify)

		try {
			response = await got(options)
		} catch (e) {
			console.error(e.name + ': ' + e.message)
			throw new Error(e)
		}

		if (callback) {
			return callback(JSON.parse(response.body))
		}

		return JSON.parse(response.body)
	}
}

module.exports = PocketAPI


/***/ }),

/***/ "./node_modules/pump/index.js":
/*!************************************!*\
  !*** ./node_modules/pump/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var once = __webpack_require__(/*! once */ "./node_modules/once/once.js")
var eos = __webpack_require__(/*! end-of-stream */ "./node_modules/end-of-stream/index.js")
var fs = __webpack_require__(/*! fs */ "fs") // we only need fs to get the ReadStream and WriteStream prototypes

var noop = function () {}
var ancient = /^v?\.0/.test(process.version)

var isFn = function (fn) {
  return typeof fn === 'function'
}

var isFS = function (stream) {
  if (!ancient) return false // newer node version do not need to care about fs is a special way
  if (!fs) return false // browser
  return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close)
}

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort)
}

var destroyer = function (stream, reading, writing, callback) {
  callback = once(callback)

  var closed = false
  stream.on('close', function () {
    closed = true
  })

  eos(stream, {readable: reading, writable: writing}, function (err) {
    if (err) return callback(err)
    closed = true
    callback()
  })

  var destroyed = false
  return function (err) {
    if (closed) return
    if (destroyed) return
    destroyed = true

    if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
    if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy()

    callback(err || new Error('stream was destroyed'))
  }
}

var call = function (fn) {
  fn()
}

var pipe = function (from, to) {
  return from.pipe(to)
}

var pump = function () {
  var streams = Array.prototype.slice.call(arguments)
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop

  if (Array.isArray(streams[0])) streams = streams[0]
  if (streams.length < 2) throw new Error('pump requires two streams per minimum')

  var error
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1
    var writing = i > 0
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err
      if (err) destroys.forEach(call)
      if (reading) return
      destroys.forEach(call)
      callback(error)
    })
  })

  return streams.reduce(pipe)
}

module.exports = pump


/***/ }),

/***/ "./node_modules/quick-lru/index.js":
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


class QuickLRU {
	constructor(options = {}) {
		if (!(options.maxSize && options.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		this.maxSize = options.maxSize;
		this.onEviction = options.onEviction;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}

	_set(key, value) {
		this.cache.set(key, value);
		this._size++;

		if (this._size >= this.maxSize) {
			this._size = 0;

			if (typeof this.onEviction === 'function') {
				for (const [key, value] of this.oldCache.entries()) {
					this.onEviction(key, value);
				}
			}

			this.oldCache = this.cache;
			this.cache = new Map();
		}
	}

	get(key) {
		if (this.cache.has(key)) {
			return this.cache.get(key);
		}

		if (this.oldCache.has(key)) {
			const value = this.oldCache.get(key);
			this.oldCache.delete(key);
			this._set(key, value);
			return value;
		}
	}

	set(key, value) {
		if (this.cache.has(key)) {
			this.cache.set(key, value);
		} else {
			this._set(key, value);
		}

		return this;
	}

	has(key) {
		return this.cache.has(key) || this.oldCache.has(key);
	}

	peek(key) {
		if (this.cache.has(key)) {
			return this.cache.get(key);
		}

		if (this.oldCache.has(key)) {
			return this.oldCache.get(key);
		}
	}

	delete(key) {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}

		return this.oldCache.delete(key) || deleted;
	}

	clear() {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
	}

	* keys() {
		for (const [key] of this) {
			yield key;
		}
	}

	* values() {
		for (const [, value] of this) {
			yield value;
		}
	}

	* [Symbol.iterator]() {
		for (const item of this.cache) {
			yield item;
		}

		for (const item of this.oldCache) {
			const [key] = item;
			if (!this.cache.has(key)) {
				yield item;
			}
		}
	}

	get size() {
		let oldCacheSize = 0;
		for (const key of this.oldCache.keys()) {
			if (!this.cache.has(key)) {
				oldCacheSize++;
			}
		}

		return Math.min(this._size + oldCacheSize, this.maxSize);
	}
}

module.exports = QuickLRU;


/***/ }),

/***/ "./node_modules/resolve-alpn/index.js":
/*!********************************************!*\
  !*** ./node_modules/resolve-alpn/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const tls = __webpack_require__(/*! tls */ "tls");

module.exports = (options = {}) => new Promise((resolve, reject) => {
	let timeout = false;

	const callback = async () => {
		socket.off('timeout', onTimeout);
		socket.off('error', reject);

		if (options.resolveSocket) {
			resolve({alpnProtocol: socket.alpnProtocol, socket, timeout});

			if (timeout) {
				await Promise.resolve();
				socket.emit('timeout');
			}
		} else {
			socket.destroy();
			resolve({alpnProtocol: socket.alpnProtocol, timeout});
		}
	};

	const onTimeout = async () => {
		timeout = true;
		callback();
	};

	const socket = tls.connect(options, callback);

	socket.on('error', reject);
	socket.once('timeout', onTimeout);
});


/***/ }),

/***/ "./node_modules/responselike/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/responselike/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Readable = __webpack_require__(/*! stream */ "stream").Readable;
const lowercaseKeys = __webpack_require__(/*! lowercase-keys */ "./node_modules/lowercase-keys/index.js");

class Response extends Readable {
	constructor(statusCode, headers, body, url) {
		if (typeof statusCode !== 'number') {
			throw new TypeError('Argument `statusCode` should be a number');
		}
		if (typeof headers !== 'object') {
			throw new TypeError('Argument `headers` should be an object');
		}
		if (!(body instanceof Buffer)) {
			throw new TypeError('Argument `body` should be a buffer');
		}
		if (typeof url !== 'string') {
			throw new TypeError('Argument `url` should be a string');
		}

		super();
		this.statusCode = statusCode;
		this.headers = lowercaseKeys(headers);
		this.body = body;
		this.url = url;
	}

	_read() {
		this.push(this.body);
		this.push(null);
	}
}

module.exports = Response;


/***/ }),

/***/ "./src/clients/pocketCilent.ts":
/*!*************************************!*\
  !*** ./src/clients/pocketCilent.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchHighlights = void 0;
const pocket_api_1 = __importDefault(__webpack_require__(/*! pocket-api */ "./node_modules/pocket-api/index.js"));
const { POCKET_CONSUMER_KEY, POCKET_ACCESS_TOKEN } = process.env;
const fetchHighlights = async () => {
    const pocketClient = new pocket_api_1.default(POCKET_CONSUMER_KEY);
    pocketClient.setAccessToken(POCKET_ACCESS_TOKEN);
    const articles = await pocketClient.getArticles({
        images: 1,
        videos: 1,
        tags: 1,
        rediscovery: 1,
        annotations: 1,
        authors: 1,
        itemOptics: 1,
        meta: 1,
        posts: 1,
        total: 1,
        forceaccount: 1,
        state: 'all',
        sort: 'newest',
        detailType: 'complete',
    });
    const annotations = Object.values(articles.list)
        .map((article) => article.annotations?.map((annotation) => ({
        ...annotation,
        article,
    })) ?? [])
        .flat();
    return annotations.map((annotation) => ({
        id: annotation.annotation_id,
        text: annotation.quote,
        author: annotation.article.domain_metadata?.name ??
            annotation.article.resolved_url ??
            'Unknown',
    }));
};
exports.fetchHighlights = fetchHighlights;


/***/ }),

/***/ "./src/repositories/highlightRepository.ts":
/*!*************************************************!*\
  !*** ./src/repositories/highlightRepository.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStoredHighlights = exports.storeHighlights = void 0;
const aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ "aws-sdk"));
const { HIGHLIGHTS_TABLE_ARN } = process.env;
if (!HIGHLIGHTS_TABLE_ARN) {
    throw new Error('HIGHLIGHTS_TABLE_ARN Environment Variable not defined');
}
const tableName = HIGHLIGHTS_TABLE_ARN.substring(HIGHLIGHTS_TABLE_ARN.lastIndexOf('/') + 1);
const dbClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
const storeHighlights = async (highlights) => {
    const batchSizes = 25;
    const highlightQueue = [...highlights];
    while (highlightQueue.length > 0) {
        const highlightsToWrite = highlightQueue.splice(0, batchSizes);
        const params = {
            RequestItems: {
                [tableName]: highlightsToWrite.map((highlight) => ({
                    PutRequest: {
                        Item: highlight,
                    },
                })),
            },
        };
        await dbClient.batchWrite(params).promise();
    }
};
exports.storeHighlights = storeHighlights;
const getStoredHighlights = async () => {
    const highlights = [];
    let result = await dbClient.scan({ TableName: tableName }).promise();
    highlights.push(...(result.Items ?? []));
    while (result.LastEvaluatedKey) {
        result = await dbClient
            .scan({
            TableName: tableName,
            ExclusiveStartKey: result.LastEvaluatedKey,
        })
            .promise();
        highlights.push(...(result.Items ?? []));
    }
    return highlights;
};
exports.getStoredHighlights = getStoredHighlights;


/***/ }),

/***/ "./node_modules/wrappy/wrappy.js":
/*!***************************************!*\
  !*** ./node_modules/wrappy/wrappy.js ***!
  \***************************************/
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");;

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("http2");;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./src/handlers/pocket.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importHighlights = void 0;
const highlightRepository_1 = __webpack_require__(/*! ./../repositories/highlightRepository */ "./src/repositories/highlightRepository.ts");
const pocketCilent_1 = __webpack_require__(/*! ./../clients/pocketCilent */ "./src/clients/pocketCilent.ts");
const importHighlights = async (_event) => {
    const highlights = await pocketCilent_1.fetchHighlights();
    await highlightRepository_1.storeHighlights(highlights);
};
exports.importHighlights = importHighlights;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL2hhbmRsZXJzL3BvY2tldC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL0BzaW5kcmVzb3JodXMvaXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9Ac3ptYXJjemFrL2h0dHAtdGltZXIvZGlzdC9zb3VyY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvY2FjaGVhYmxlLWxvb2t1cC9zb3VyY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvY2FjaGVhYmxlLXJlcXVlc3Qvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2Nsb25lLXJlc3BvbnNlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9kZWNvbXByZXNzLXJlc3BvbnNlL2luZGV4LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2RlY29tcHJlc3MtcmVzcG9uc2Uvbm9kZV9tb2R1bGVzL21pbWljLXJlc3BvbnNlL2luZGV4LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2RlZmVyLXRvLWNvbm5lY3QvZGlzdC9zb3VyY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZW5kLW9mLXN0cmVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL2J1ZmZlci1zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvYXMtcHJvbWlzZS9jcmVhdGUtcmVqZWN0aW9uLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS9hcy1wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS9hcy1wcm9taXNlL25vcm1hbGl6ZS1hcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZ290L2Rpc3Qvc291cmNlL2FzLXByb21pc2UvcGFyc2UtYm9keS5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvYXMtcHJvbWlzZS90eXBlcy5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvY29yZS9jYWxjdWxhdGUtcmV0cnktZGVsYXkuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZ290L2Rpc3Qvc291cmNlL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZ290L2Rpc3Qvc291cmNlL2NvcmUvdXRpbHMvZG5zLWlwLXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZ290L2Rpc3Qvc291cmNlL2NvcmUvdXRpbHMvZ2V0LWJvZHktc2l6ZS5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvY29yZS91dGlscy9nZXQtYnVmZmVyLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS9jb3JlL3V0aWxzL2lzLWZvcm0tZGF0YS5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvY29yZS91dGlscy9pcy1yZXNwb25zZS1vay5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvY29yZS91dGlscy9vcHRpb25zLXRvLXVybC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvY29yZS91dGlscy9wcm94eS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZ290L2Rpc3Qvc291cmNlL2NvcmUvdXRpbHMvdGltZWQtb3V0LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS9jb3JlL3V0aWxzL3VuaGFuZGxlLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS9jb3JlL3V0aWxzL3VybC10by1vcHRpb25zLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS9jb3JlL3V0aWxzL3dlYWthYmxlLW1hcC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvY3JlYXRlLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9nb3QvZGlzdC9zb3VyY2UvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvZ290L2Rpc3Qvc291cmNlL3V0aWxzL2RlZXAtZnJlZXplLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2dvdC9kaXN0L3NvdXJjZS91dGlscy9kZXByZWNhdGlvbi13YXJuaW5nLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2h0dHAtY2FjaGUtc2VtYW50aWNzL2luZGV4LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2h0dHAyLXdyYXBwZXIvc291cmNlL2FnZW50LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2h0dHAyLXdyYXBwZXIvc291cmNlL2F1dG8uanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvaHR0cDItd3JhcHBlci9zb3VyY2UvY2xpZW50LXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvaHR0cDItd3JhcHBlci9zb3VyY2UvaW5jb21pbmctbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9odHRwMi13cmFwcGVyL3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9odHRwMi13cmFwcGVyL3NvdXJjZS91dGlscy9jYWxjdWxhdGUtc2VydmVyLW5hbWUuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvaHR0cDItd3JhcHBlci9zb3VyY2UvdXRpbHMvZXJyb3JzLmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL2h0dHAyLXdyYXBwZXIvc291cmNlL3V0aWxzL2lzLXJlcXVlc3QtcHNldWRvLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9odHRwMi13cmFwcGVyL3NvdXJjZS91dGlscy9wcm94eS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvaHR0cDItd3JhcHBlci9zb3VyY2UvdXRpbHMvdXJsLXRvLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvanNvbi1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMva2V5di9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMva2V5di9zcmN8c3luYyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9sb3dlcmNhc2Uta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9taW1pYy1yZXNwb25zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtdXJsL2luZGV4LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9wLWNhbmNlbGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvcG9ja2V0LWFwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9wdW1wL2luZGV4LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyLy4vbm9kZV9tb2R1bGVzL3F1aWNrLWxydS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLWFscG4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL3NyYy9jbGllbnRzL3BvY2tldENpbGVudC50cyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL3NyYy9yZXBvc2l0b3JpZXMvaGlnaGxpZ2h0UmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci8uL25vZGVfbW9kdWxlcy93cmFwcHkvd3JhcHB5LmpzIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL2V4dGVybmFsIFwiYXdzLXNka1wiIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvZXh0ZXJuYWwgXCJkbnNcIiIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci9leHRlcm5hbCBcImh0dHAyXCIiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL2V4dGVybmFsIFwibmV0XCIiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvZXh0ZXJuYWwgXCJ0bHNcIiIsIndlYnBhY2s6Ly9mYW50ZS1ub3RpZmllci9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL2V4dGVybmFsIFwiemxpYlwiIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZhbnRlLW5vdGlmaWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmFudGUtbm90aWZpZXIvLi9zcmMvaGFuZGxlcnMvcG9ja2V0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8vIDxyZWZlcmVuY2UgbGliPVwiZXMyMDE4XCIvPlxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJub2RlXCIvPlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHlwZWRBcnJheVR5cGVOYW1lcyA9IFtcbiAgICAnSW50OEFycmF5JyxcbiAgICAnVWludDhBcnJheScsXG4gICAgJ1VpbnQ4Q2xhbXBlZEFycmF5JyxcbiAgICAnSW50MTZBcnJheScsXG4gICAgJ1VpbnQxNkFycmF5JyxcbiAgICAnSW50MzJBcnJheScsXG4gICAgJ1VpbnQzMkFycmF5JyxcbiAgICAnRmxvYXQzMkFycmF5JyxcbiAgICAnRmxvYXQ2NEFycmF5JyxcbiAgICAnQmlnSW50NjRBcnJheScsXG4gICAgJ0JpZ1VpbnQ2NEFycmF5J1xuXTtcbmZ1bmN0aW9uIGlzVHlwZWRBcnJheU5hbWUobmFtZSkge1xuICAgIHJldHVybiB0eXBlZEFycmF5VHlwZU5hbWVzLmluY2x1ZGVzKG5hbWUpO1xufVxuY29uc3Qgb2JqZWN0VHlwZU5hbWVzID0gW1xuICAgICdGdW5jdGlvbicsXG4gICAgJ0dlbmVyYXRvcicsXG4gICAgJ0FzeW5jR2VuZXJhdG9yJyxcbiAgICAnR2VuZXJhdG9yRnVuY3Rpb24nLFxuICAgICdBc3luY0dlbmVyYXRvckZ1bmN0aW9uJyxcbiAgICAnQXN5bmNGdW5jdGlvbicsXG4gICAgJ09ic2VydmFibGUnLFxuICAgICdBcnJheScsXG4gICAgJ0J1ZmZlcicsXG4gICAgJ09iamVjdCcsXG4gICAgJ1JlZ0V4cCcsXG4gICAgJ0RhdGUnLFxuICAgICdFcnJvcicsXG4gICAgJ01hcCcsXG4gICAgJ1NldCcsXG4gICAgJ1dlYWtNYXAnLFxuICAgICdXZWFrU2V0JyxcbiAgICAnQXJyYXlCdWZmZXInLFxuICAgICdTaGFyZWRBcnJheUJ1ZmZlcicsXG4gICAgJ0RhdGFWaWV3JyxcbiAgICAnUHJvbWlzZScsXG4gICAgJ1VSTCcsXG4gICAgJ0hUTUxFbGVtZW50JyxcbiAgICAuLi50eXBlZEFycmF5VHlwZU5hbWVzXG5dO1xuZnVuY3Rpb24gaXNPYmplY3RUeXBlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdFR5cGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cbmNvbnN0IHByaW1pdGl2ZVR5cGVOYW1lcyA9IFtcbiAgICAnbnVsbCcsXG4gICAgJ3VuZGVmaW5lZCcsXG4gICAgJ3N0cmluZycsXG4gICAgJ251bWJlcicsXG4gICAgJ2JpZ2ludCcsXG4gICAgJ2Jvb2xlYW4nLFxuICAgICdzeW1ib2wnXG5dO1xuZnVuY3Rpb24gaXNQcmltaXRpdmVUeXBlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZVR5cGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiBpc09mVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSB0eXBlO1xufVxuY29uc3QgeyB0b1N0cmluZyB9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IGdldE9iamVjdFR5cGUgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBvYmplY3RUeXBlTmFtZSA9IHRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAoL0hUTUxcXHcrRWxlbWVudC8udGVzdChvYmplY3RUeXBlTmFtZSkgJiYgaXMuZG9tRWxlbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdIVE1MRWxlbWVudCc7XG4gICAgfVxuICAgIGlmIChpc09iamVjdFR5cGVOYW1lKG9iamVjdFR5cGVOYW1lKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0VHlwZU5hbWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgaXNPYmplY3RPZlR5cGUgPSAodHlwZSkgPT4gKHZhbHVlKSA9PiBnZXRPYmplY3RUeXBlKHZhbHVlKSA9PT0gdHlwZTtcbmZ1bmN0aW9uIGlzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICByZXR1cm4gJ3N0cmluZyc7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgcmV0dXJuICdib29sZWFuJztcbiAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgIGNhc2UgJ2JpZ2ludCc6XG4gICAgICAgICAgICByZXR1cm4gJ2JpZ2ludCc7XG4gICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIGlmIChpcy5vYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ09ic2VydmFibGUnO1xuICAgIH1cbiAgICBpZiAoaXMuYXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAnQXJyYXknO1xuICAgIH1cbiAgICBpZiAoaXMuYnVmZmVyKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ0J1ZmZlcic7XG4gICAgfVxuICAgIGNvbnN0IHRhZ1R5cGUgPSBnZXRPYmplY3RUeXBlKHZhbHVlKTtcbiAgICBpZiAodGFnVHlwZSkge1xuICAgICAgICByZXR1cm4gdGFnVHlwZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nIHx8IHZhbHVlIGluc3RhbmNlb2YgQm9vbGVhbiB8fCB2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgZG9uXFwndCB1c2Ugb2JqZWN0IHdyYXBwZXJzIGZvciBwcmltaXRpdmUgdHlwZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuICdPYmplY3QnO1xufVxuaXMudW5kZWZpbmVkID0gaXNPZlR5cGUoJ3VuZGVmaW5lZCcpO1xuaXMuc3RyaW5nID0gaXNPZlR5cGUoJ3N0cmluZycpO1xuY29uc3QgaXNOdW1iZXJUeXBlID0gaXNPZlR5cGUoJ251bWJlcicpO1xuaXMubnVtYmVyID0gKHZhbHVlKSA9PiBpc051bWJlclR5cGUodmFsdWUpICYmICFpcy5uYW4odmFsdWUpO1xuaXMuYmlnaW50ID0gaXNPZlR5cGUoJ2JpZ2ludCcpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmlzLmZ1bmN0aW9uXyA9IGlzT2ZUeXBlKCdmdW5jdGlvbicpO1xuaXMubnVsbF8gPSAodmFsdWUpID0+IHZhbHVlID09PSBudWxsO1xuaXMuY2xhc3NfID0gKHZhbHVlKSA9PiBpcy5mdW5jdGlvbl8odmFsdWUpICYmIHZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnY2xhc3MgJyk7XG5pcy5ib29sZWFuID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2U7XG5pcy5zeW1ib2wgPSBpc09mVHlwZSgnc3ltYm9sJyk7XG5pcy5udW1lcmljU3RyaW5nID0gKHZhbHVlKSA9PiBpcy5zdHJpbmcodmFsdWUpICYmICFpcy5lbXB0eVN0cmluZ09yV2hpdGVzcGFjZSh2YWx1ZSkgJiYgIU51bWJlci5pc05hTihOdW1iZXIodmFsdWUpKTtcbmlzLmFycmF5ID0gKHZhbHVlLCBhc3NlcnRpb24pID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFpcy5mdW5jdGlvbl8oYXNzZXJ0aW9uKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGFzc2VydGlvbik7XG59O1xuaXMuYnVmZmVyID0gKHZhbHVlKSA9PiB7IHZhciBfYSwgX2IsIF9jLCBfZDsgcmV0dXJuIChfZCA9IChfYyA9IChfYiA9IChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pc0J1ZmZlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwoX2IsIHZhbHVlKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogZmFsc2U7IH07XG5pcy5udWxsT3JVbmRlZmluZWQgPSAodmFsdWUpID0+IGlzLm51bGxfKHZhbHVlKSB8fCBpcy51bmRlZmluZWQodmFsdWUpO1xuaXMub2JqZWN0ID0gKHZhbHVlKSA9PiAhaXMubnVsbF8odmFsdWUpICYmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IGlzLmZ1bmN0aW9uXyh2YWx1ZSkpO1xuaXMuaXRlcmFibGUgPSAodmFsdWUpID0+IHsgdmFyIF9hOyByZXR1cm4gaXMuZnVuY3Rpb25fKChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbU3ltYm9sLml0ZXJhdG9yXSk7IH07XG5pcy5hc3luY0l0ZXJhYmxlID0gKHZhbHVlKSA9PiB7IHZhciBfYTsgcmV0dXJuIGlzLmZ1bmN0aW9uXygoX2EgPSB2YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7IH07XG5pcy5nZW5lcmF0b3IgPSAodmFsdWUpID0+IGlzLml0ZXJhYmxlKHZhbHVlKSAmJiBpcy5mdW5jdGlvbl8odmFsdWUubmV4dCkgJiYgaXMuZnVuY3Rpb25fKHZhbHVlLnRocm93KTtcbmlzLmFzeW5jR2VuZXJhdG9yID0gKHZhbHVlKSA9PiBpcy5hc3luY0l0ZXJhYmxlKHZhbHVlKSAmJiBpcy5mdW5jdGlvbl8odmFsdWUubmV4dCkgJiYgaXMuZnVuY3Rpb25fKHZhbHVlLnRocm93KTtcbmlzLm5hdGl2ZVByb21pc2UgPSAodmFsdWUpID0+IGlzT2JqZWN0T2ZUeXBlKCdQcm9taXNlJykodmFsdWUpO1xuY29uc3QgaGFzUHJvbWlzZUFQSSA9ICh2YWx1ZSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIGlzLmZ1bmN0aW9uXygoX2EgPSB2YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRoZW4pICYmXG4gICAgICAgIGlzLmZ1bmN0aW9uXygoX2IgPSB2YWx1ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhdGNoKTtcbn07XG5pcy5wcm9taXNlID0gKHZhbHVlKSA9PiBpcy5uYXRpdmVQcm9taXNlKHZhbHVlKSB8fCBoYXNQcm9taXNlQVBJKHZhbHVlKTtcbmlzLmdlbmVyYXRvckZ1bmN0aW9uID0gaXNPYmplY3RPZlR5cGUoJ0dlbmVyYXRvckZ1bmN0aW9uJyk7XG5pcy5hc3luY0dlbmVyYXRvckZ1bmN0aW9uID0gKHZhbHVlKSA9PiBnZXRPYmplY3RUeXBlKHZhbHVlKSA9PT0gJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nO1xuaXMuYXN5bmNGdW5jdGlvbiA9ICh2YWx1ZSkgPT4gZ2V0T2JqZWN0VHlwZSh2YWx1ZSkgPT09ICdBc3luY0Z1bmN0aW9uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMsIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmlzLmJvdW5kRnVuY3Rpb24gPSAodmFsdWUpID0+IGlzLmZ1bmN0aW9uXyh2YWx1ZSkgJiYgIXZhbHVlLmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbmlzLnJlZ0V4cCA9IGlzT2JqZWN0T2ZUeXBlKCdSZWdFeHAnKTtcbmlzLmRhdGUgPSBpc09iamVjdE9mVHlwZSgnRGF0ZScpO1xuaXMuZXJyb3IgPSBpc09iamVjdE9mVHlwZSgnRXJyb3InKTtcbmlzLm1hcCA9ICh2YWx1ZSkgPT4gaXNPYmplY3RPZlR5cGUoJ01hcCcpKHZhbHVlKTtcbmlzLnNldCA9ICh2YWx1ZSkgPT4gaXNPYmplY3RPZlR5cGUoJ1NldCcpKHZhbHVlKTtcbmlzLndlYWtNYXAgPSAodmFsdWUpID0+IGlzT2JqZWN0T2ZUeXBlKCdXZWFrTWFwJykodmFsdWUpO1xuaXMud2Vha1NldCA9ICh2YWx1ZSkgPT4gaXNPYmplY3RPZlR5cGUoJ1dlYWtTZXQnKSh2YWx1ZSk7XG5pcy5pbnQ4QXJyYXkgPSBpc09iamVjdE9mVHlwZSgnSW50OEFycmF5Jyk7XG5pcy51aW50OEFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ1VpbnQ4QXJyYXknKTtcbmlzLnVpbnQ4Q2xhbXBlZEFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ1VpbnQ4Q2xhbXBlZEFycmF5Jyk7XG5pcy5pbnQxNkFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ0ludDE2QXJyYXknKTtcbmlzLnVpbnQxNkFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ1VpbnQxNkFycmF5Jyk7XG5pcy5pbnQzMkFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ0ludDMyQXJyYXknKTtcbmlzLnVpbnQzMkFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ1VpbnQzMkFycmF5Jyk7XG5pcy5mbG9hdDMyQXJyYXkgPSBpc09iamVjdE9mVHlwZSgnRmxvYXQzMkFycmF5Jyk7XG5pcy5mbG9hdDY0QXJyYXkgPSBpc09iamVjdE9mVHlwZSgnRmxvYXQ2NEFycmF5Jyk7XG5pcy5iaWdJbnQ2NEFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ0JpZ0ludDY0QXJyYXknKTtcbmlzLmJpZ1VpbnQ2NEFycmF5ID0gaXNPYmplY3RPZlR5cGUoJ0JpZ1VpbnQ2NEFycmF5Jyk7XG5pcy5hcnJheUJ1ZmZlciA9IGlzT2JqZWN0T2ZUeXBlKCdBcnJheUJ1ZmZlcicpO1xuaXMuc2hhcmVkQXJyYXlCdWZmZXIgPSBpc09iamVjdE9mVHlwZSgnU2hhcmVkQXJyYXlCdWZmZXInKTtcbmlzLmRhdGFWaWV3ID0gaXNPYmplY3RPZlR5cGUoJ0RhdGFWaWV3Jyk7XG5pcy5kaXJlY3RJbnN0YW5jZU9mID0gKGluc3RhbmNlLCBjbGFzc18pID0+IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSkgPT09IGNsYXNzXy5wcm90b3R5cGU7XG5pcy51cmxJbnN0YW5jZSA9ICh2YWx1ZSkgPT4gaXNPYmplY3RPZlR5cGUoJ1VSTCcpKHZhbHVlKTtcbmlzLnVybFN0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICghaXMuc3RyaW5nKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIG5ldyBVUkwodmFsdWUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuLy8gVE9ETzogVXNlIHRoZSBgbm90YCBvcGVyYXRvciB3aXRoIGEgdHlwZSBndWFyZCBoZXJlIHdoZW4gaXQncyBhdmFpbGFibGUuXG4vLyBFeGFtcGxlOiBgaXMudHJ1dGh5ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgKG5vdCBmYWxzZSB8IG5vdCAwIHwgbm90ICcnIHwgbm90IHVuZGVmaW5lZCB8IG5vdCBudWxsKSA9PiBCb29sZWFuKHZhbHVlKTtgXG5pcy50cnV0aHkgPSAodmFsdWUpID0+IEJvb2xlYW4odmFsdWUpO1xuLy8gRXhhbXBsZTogYGlzLmZhbHN5ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgKG5vdCB0cnVlIHwgMCB8ICcnIHwgdW5kZWZpbmVkIHwgbnVsbCkgPT4gQm9vbGVhbih2YWx1ZSk7YFxuaXMuZmFsc3kgPSAodmFsdWUpID0+ICF2YWx1ZTtcbmlzLm5hbiA9ICh2YWx1ZSkgPT4gTnVtYmVyLmlzTmFOKHZhbHVlKTtcbmlzLnByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gaXMubnVsbF8odmFsdWUpIHx8IGlzUHJpbWl0aXZlVHlwZU5hbWUodHlwZW9mIHZhbHVlKTtcbmlzLmludGVnZXIgPSAodmFsdWUpID0+IE51bWJlci5pc0ludGVnZXIodmFsdWUpO1xuaXMuc2FmZUludGVnZXIgPSAodmFsdWUpID0+IE51bWJlci5pc1NhZmVJbnRlZ2VyKHZhbHVlKTtcbmlzLnBsYWluT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9pcy1wbGFpbi1vYmovYmxvYi9tYWluL2luZGV4LmpzXG4gICAgaWYgKHRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG59O1xuaXMudHlwZWRBcnJheSA9ICh2YWx1ZSkgPT4gaXNUeXBlZEFycmF5TmFtZShnZXRPYmplY3RUeXBlKHZhbHVlKSk7XG5jb25zdCBpc1ZhbGlkTGVuZ3RoID0gKHZhbHVlKSA9PiBpcy5zYWZlSW50ZWdlcih2YWx1ZSkgJiYgdmFsdWUgPj0gMDtcbmlzLmFycmF5TGlrZSA9ICh2YWx1ZSkgPT4gIWlzLm51bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiYgIWlzLmZ1bmN0aW9uXyh2YWx1ZSkgJiYgaXNWYWxpZExlbmd0aCh2YWx1ZS5sZW5ndGgpO1xuaXMuaW5SYW5nZSA9ICh2YWx1ZSwgcmFuZ2UpID0+IHtcbiAgICBpZiAoaXMubnVtYmVyKHJhbmdlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPj0gTWF0aC5taW4oMCwgcmFuZ2UpICYmIHZhbHVlIDw9IE1hdGgubWF4KHJhbmdlLCAwKTtcbiAgICB9XG4gICAgaWYgKGlzLmFycmF5KHJhbmdlKSAmJiByYW5nZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IE1hdGgubWluKC4uLnJhbmdlKSAmJiB2YWx1ZSA8PSBNYXRoLm1heCguLi5yYW5nZSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgcmFuZ2U6ICR7SlNPTi5zdHJpbmdpZnkocmFuZ2UpfWApO1xufTtcbmNvbnN0IE5PREVfVFlQRV9FTEVNRU5UID0gMTtcbmNvbnN0IERPTV9QUk9QRVJUSUVTX1RPX0NIRUNLID0gW1xuICAgICdpbm5lckhUTUwnLFxuICAgICdvd25lckRvY3VtZW50JyxcbiAgICAnc3R5bGUnLFxuICAgICdhdHRyaWJ1dGVzJyxcbiAgICAnbm9kZVZhbHVlJ1xuXTtcbmlzLmRvbUVsZW1lbnQgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gaXMub2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFX0VMRU1FTlQgJiZcbiAgICAgICAgaXMuc3RyaW5nKHZhbHVlLm5vZGVOYW1lKSAmJlxuICAgICAgICAhaXMucGxhaW5PYmplY3QodmFsdWUpICYmXG4gICAgICAgIERPTV9QUk9QRVJUSUVTX1RPX0NIRUNLLmV2ZXJ5KHByb3BlcnR5ID0+IHByb3BlcnR5IGluIHZhbHVlKTtcbn07XG5pcy5vYnNlcnZhYmxlID0gKHZhbHVlKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWV4dGVuZC1uYXRpdmUvbm8tdXNlLWV4dGVuZC1uYXRpdmVcbiAgICBpZiAodmFsdWUgPT09ICgoX2IgPSAoX2EgPSB2YWx1ZSlbU3ltYm9sLm9ic2VydmFibGVdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICgoX2QgPSAoX2MgPSB2YWx1ZSlbJ0BAb2JzZXJ2YWJsZSddKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChfYykpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuaXMubm9kZVN0cmVhbSA9ICh2YWx1ZSkgPT4gaXMub2JqZWN0KHZhbHVlKSAmJiBpcy5mdW5jdGlvbl8odmFsdWUucGlwZSkgJiYgIWlzLm9ic2VydmFibGUodmFsdWUpO1xuaXMuaW5maW5pdGUgPSAodmFsdWUpID0+IHZhbHVlID09PSBJbmZpbml0eSB8fCB2YWx1ZSA9PT0gLUluZmluaXR5O1xuY29uc3QgaXNBYnNvbHV0ZU1vZDIgPSAocmVtYWluZGVyKSA9PiAodmFsdWUpID0+IGlzLmludGVnZXIodmFsdWUpICYmIE1hdGguYWJzKHZhbHVlICUgMikgPT09IHJlbWFpbmRlcjtcbmlzLmV2ZW5JbnRlZ2VyID0gaXNBYnNvbHV0ZU1vZDIoMCk7XG5pcy5vZGRJbnRlZ2VyID0gaXNBYnNvbHV0ZU1vZDIoMSk7XG5pcy5lbXB0eUFycmF5ID0gKHZhbHVlKSA9PiBpcy5hcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xuaXMubm9uRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4gaXMuYXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XG5pcy5lbXB0eVN0cmluZyA9ICh2YWx1ZSkgPT4gaXMuc3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG4vLyBUT0RPOiBVc2UgYG5vdCAnJ2Agd2hlbiB0aGUgYG5vdGAgb3BlcmF0b3IgaXMgYXZhaWxhYmxlLlxuaXMubm9uRW1wdHlTdHJpbmcgPSAodmFsdWUpID0+IGlzLnN0cmluZyh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbmNvbnN0IGlzV2hpdGVTcGFjZVN0cmluZyA9ICh2YWx1ZSkgPT4gaXMuc3RyaW5nKHZhbHVlKSAmJiAhL1xcUy8udGVzdCh2YWx1ZSk7XG5pcy5lbXB0eVN0cmluZ09yV2hpdGVzcGFjZSA9ICh2YWx1ZSkgPT4gaXMuZW1wdHlTdHJpbmcodmFsdWUpIHx8IGlzV2hpdGVTcGFjZVN0cmluZyh2YWx1ZSk7XG5pcy5lbXB0eU9iamVjdCA9ICh2YWx1ZSkgPT4gaXMub2JqZWN0KHZhbHVlKSAmJiAhaXMubWFwKHZhbHVlKSAmJiAhaXMuc2V0KHZhbHVlKSAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuLy8gVE9ETzogVXNlIGBub3RgIG9wZXJhdG9yIGhlcmUgdG8gcmVtb3ZlIGBNYXBgIGFuZCBgU2V0YCBmcm9tIHR5cGUgZ3VhcmQ6XG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9wdWxsLzI5MzE3XG5pcy5ub25FbXB0eU9iamVjdCA9ICh2YWx1ZSkgPT4gaXMub2JqZWN0KHZhbHVlKSAmJiAhaXMubWFwKHZhbHVlKSAmJiAhaXMuc2V0KHZhbHVlKSAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMDtcbmlzLmVtcHR5U2V0ID0gKHZhbHVlKSA9PiBpcy5zZXQodmFsdWUpICYmIHZhbHVlLnNpemUgPT09IDA7XG5pcy5ub25FbXB0eVNldCA9ICh2YWx1ZSkgPT4gaXMuc2V0KHZhbHVlKSAmJiB2YWx1ZS5zaXplID4gMDtcbmlzLmVtcHR5TWFwID0gKHZhbHVlKSA9PiBpcy5tYXAodmFsdWUpICYmIHZhbHVlLnNpemUgPT09IDA7XG5pcy5ub25FbXB0eU1hcCA9ICh2YWx1ZSkgPT4gaXMubWFwKHZhbHVlKSAmJiB2YWx1ZS5zaXplID4gMDtcbmNvbnN0IHByZWRpY2F0ZU9uQXJyYXkgPSAobWV0aG9kLCBwcmVkaWNhdGUsIHZhbHVlcykgPT4ge1xuICAgIGlmICghaXMuZnVuY3Rpb25fKHByZWRpY2F0ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBwcmVkaWNhdGU6ICR7SlNPTi5zdHJpbmdpZnkocHJlZGljYXRlKX1gKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBudW1iZXIgb2YgdmFsdWVzJyk7XG4gICAgfVxuICAgIHJldHVybiBtZXRob2QuY2FsbCh2YWx1ZXMsIHByZWRpY2F0ZSk7XG59O1xuaXMuYW55ID0gKHByZWRpY2F0ZSwgLi4udmFsdWVzKSA9PiB7XG4gICAgY29uc3QgcHJlZGljYXRlcyA9IGlzLmFycmF5KHByZWRpY2F0ZSkgPyBwcmVkaWNhdGUgOiBbcHJlZGljYXRlXTtcbiAgICByZXR1cm4gcHJlZGljYXRlcy5zb21lKHNpbmdsZVByZWRpY2F0ZSA9PiBwcmVkaWNhdGVPbkFycmF5KEFycmF5LnByb3RvdHlwZS5zb21lLCBzaW5nbGVQcmVkaWNhdGUsIHZhbHVlcykpO1xufTtcbmlzLmFsbCA9IChwcmVkaWNhdGUsIC4uLnZhbHVlcykgPT4gcHJlZGljYXRlT25BcnJheShBcnJheS5wcm90b3R5cGUuZXZlcnksIHByZWRpY2F0ZSwgdmFsdWVzKTtcbmNvbnN0IGFzc2VydFR5cGUgPSAoY29uZGl0aW9uLCBkZXNjcmlwdGlvbiwgdmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgbXVsdGlwbGVWYWx1ZXMgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHZhbHVlc01lc3NhZ2UgPSBtdWx0aXBsZVZhbHVlcyA/XG4gICAgICAgICAgICBgcmVjZWl2ZWQgdmFsdWVzIG9mIHR5cGVzICR7W1xuICAgICAgICAgICAgICAgIC4uLm5ldyBTZXQodmFsdWUubWFwKHNpbmdsZVZhbHVlID0+IGBcXGAke2lzKHNpbmdsZVZhbHVlKX1cXGBgKSlcbiAgICAgICAgICAgIF0uam9pbignLCAnKX1gIDpcbiAgICAgICAgICAgIGByZWNlaXZlZCB2YWx1ZSBvZiB0eXBlIFxcYCR7aXModmFsdWUpfVxcYGA7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHZhbHVlIHdoaWNoIGlzIFxcYCR7ZGVzY3JpcHRpb259XFxgLCAke3ZhbHVlc01lc3NhZ2V9LmApO1xuICAgIH1cbn07XG5leHBvcnRzLmFzc2VydCA9IHtcbiAgICAvLyBVbmtub3ducy5cbiAgICB1bmRlZmluZWQ6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy51bmRlZmluZWQodmFsdWUpLCAndW5kZWZpbmVkJywgdmFsdWUpLFxuICAgIHN0cmluZzogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLnN0cmluZyh2YWx1ZSksICdzdHJpbmcnLCB2YWx1ZSksXG4gICAgbnVtYmVyOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMubnVtYmVyKHZhbHVlKSwgJ251bWJlcicsIHZhbHVlKSxcbiAgICBiaWdpbnQ6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5iaWdpbnQodmFsdWUpLCAnYmlnaW50JywgdmFsdWUpLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgZnVuY3Rpb25fOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuZnVuY3Rpb25fKHZhbHVlKSwgJ0Z1bmN0aW9uJywgdmFsdWUpLFxuICAgIG51bGxfOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMubnVsbF8odmFsdWUpLCAnbnVsbCcsIHZhbHVlKSxcbiAgICBjbGFzc186ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5jbGFzc18odmFsdWUpLCBcIkNsYXNzXCIgLyogY2xhc3NfICovLCB2YWx1ZSksXG4gICAgYm9vbGVhbjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmJvb2xlYW4odmFsdWUpLCAnYm9vbGVhbicsIHZhbHVlKSxcbiAgICBzeW1ib2w6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5zeW1ib2wodmFsdWUpLCAnc3ltYm9sJywgdmFsdWUpLFxuICAgIG51bWVyaWNTdHJpbmc6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5udW1lcmljU3RyaW5nKHZhbHVlKSwgXCJzdHJpbmcgd2l0aCBhIG51bWJlclwiIC8qIG51bWVyaWNTdHJpbmcgKi8sIHZhbHVlKSxcbiAgICBhcnJheTogKHZhbHVlLCBhc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzZXJ0ID0gYXNzZXJ0VHlwZTtcbiAgICAgICAgYXNzZXJ0KGlzLmFycmF5KHZhbHVlKSwgJ0FycmF5JywgdmFsdWUpO1xuICAgICAgICBpZiAoYXNzZXJ0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGFzc2VydGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1ZmZlcjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmJ1ZmZlcih2YWx1ZSksICdCdWZmZXInLCB2YWx1ZSksXG4gICAgbnVsbE9yVW5kZWZpbmVkOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMubnVsbE9yVW5kZWZpbmVkKHZhbHVlKSwgXCJudWxsIG9yIHVuZGVmaW5lZFwiIC8qIG51bGxPclVuZGVmaW5lZCAqLywgdmFsdWUpLFxuICAgIG9iamVjdDogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLm9iamVjdCh2YWx1ZSksICdPYmplY3QnLCB2YWx1ZSksXG4gICAgaXRlcmFibGU6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5pdGVyYWJsZSh2YWx1ZSksIFwiSXRlcmFibGVcIiAvKiBpdGVyYWJsZSAqLywgdmFsdWUpLFxuICAgIGFzeW5jSXRlcmFibGU6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5hc3luY0l0ZXJhYmxlKHZhbHVlKSwgXCJBc3luY0l0ZXJhYmxlXCIgLyogYXN5bmNJdGVyYWJsZSAqLywgdmFsdWUpLFxuICAgIGdlbmVyYXRvcjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmdlbmVyYXRvcih2YWx1ZSksICdHZW5lcmF0b3InLCB2YWx1ZSksXG4gICAgYXN5bmNHZW5lcmF0b3I6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5hc3luY0dlbmVyYXRvcih2YWx1ZSksICdBc3luY0dlbmVyYXRvcicsIHZhbHVlKSxcbiAgICBuYXRpdmVQcm9taXNlOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMubmF0aXZlUHJvbWlzZSh2YWx1ZSksIFwibmF0aXZlIFByb21pc2VcIiAvKiBuYXRpdmVQcm9taXNlICovLCB2YWx1ZSksXG4gICAgcHJvbWlzZTogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLnByb21pc2UodmFsdWUpLCAnUHJvbWlzZScsIHZhbHVlKSxcbiAgICBnZW5lcmF0b3JGdW5jdGlvbjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmdlbmVyYXRvckZ1bmN0aW9uKHZhbHVlKSwgJ0dlbmVyYXRvckZ1bmN0aW9uJywgdmFsdWUpLFxuICAgIGFzeW5jR2VuZXJhdG9yRnVuY3Rpb246ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5hc3luY0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlKSwgJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nLCB2YWx1ZSksXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICBhc3luY0Z1bmN0aW9uOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuYXN5bmNGdW5jdGlvbih2YWx1ZSksICdBc3luY0Z1bmN0aW9uJywgdmFsdWUpLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgYm91bmRGdW5jdGlvbjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmJvdW5kRnVuY3Rpb24odmFsdWUpLCAnRnVuY3Rpb24nLCB2YWx1ZSksXG4gICAgcmVnRXhwOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMucmVnRXhwKHZhbHVlKSwgJ1JlZ0V4cCcsIHZhbHVlKSxcbiAgICBkYXRlOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuZGF0ZSh2YWx1ZSksICdEYXRlJywgdmFsdWUpLFxuICAgIGVycm9yOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuZXJyb3IodmFsdWUpLCAnRXJyb3InLCB2YWx1ZSksXG4gICAgbWFwOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMubWFwKHZhbHVlKSwgJ01hcCcsIHZhbHVlKSxcbiAgICBzZXQ6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5zZXQodmFsdWUpLCAnU2V0JywgdmFsdWUpLFxuICAgIHdlYWtNYXA6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy53ZWFrTWFwKHZhbHVlKSwgJ1dlYWtNYXAnLCB2YWx1ZSksXG4gICAgd2Vha1NldDogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLndlYWtTZXQodmFsdWUpLCAnV2Vha1NldCcsIHZhbHVlKSxcbiAgICBpbnQ4QXJyYXk6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5pbnQ4QXJyYXkodmFsdWUpLCAnSW50OEFycmF5JywgdmFsdWUpLFxuICAgIHVpbnQ4QXJyYXk6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy51aW50OEFycmF5KHZhbHVlKSwgJ1VpbnQ4QXJyYXknLCB2YWx1ZSksXG4gICAgdWludDhDbGFtcGVkQXJyYXk6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy51aW50OENsYW1wZWRBcnJheSh2YWx1ZSksICdVaW50OENsYW1wZWRBcnJheScsIHZhbHVlKSxcbiAgICBpbnQxNkFycmF5OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuaW50MTZBcnJheSh2YWx1ZSksICdJbnQxNkFycmF5JywgdmFsdWUpLFxuICAgIHVpbnQxNkFycmF5OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMudWludDE2QXJyYXkodmFsdWUpLCAnVWludDE2QXJyYXknLCB2YWx1ZSksXG4gICAgaW50MzJBcnJheTogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmludDMyQXJyYXkodmFsdWUpLCAnSW50MzJBcnJheScsIHZhbHVlKSxcbiAgICB1aW50MzJBcnJheTogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLnVpbnQzMkFycmF5KHZhbHVlKSwgJ1VpbnQzMkFycmF5JywgdmFsdWUpLFxuICAgIGZsb2F0MzJBcnJheTogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmZsb2F0MzJBcnJheSh2YWx1ZSksICdGbG9hdDMyQXJyYXknLCB2YWx1ZSksXG4gICAgZmxvYXQ2NEFycmF5OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuZmxvYXQ2NEFycmF5KHZhbHVlKSwgJ0Zsb2F0NjRBcnJheScsIHZhbHVlKSxcbiAgICBiaWdJbnQ2NEFycmF5OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuYmlnSW50NjRBcnJheSh2YWx1ZSksICdCaWdJbnQ2NEFycmF5JywgdmFsdWUpLFxuICAgIGJpZ1VpbnQ2NEFycmF5OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuYmlnVWludDY0QXJyYXkodmFsdWUpLCAnQmlnVWludDY0QXJyYXknLCB2YWx1ZSksXG4gICAgYXJyYXlCdWZmZXI6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5hcnJheUJ1ZmZlcih2YWx1ZSksICdBcnJheUJ1ZmZlcicsIHZhbHVlKSxcbiAgICBzaGFyZWRBcnJheUJ1ZmZlcjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLnNoYXJlZEFycmF5QnVmZmVyKHZhbHVlKSwgJ1NoYXJlZEFycmF5QnVmZmVyJywgdmFsdWUpLFxuICAgIGRhdGFWaWV3OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuZGF0YVZpZXcodmFsdWUpLCAnRGF0YVZpZXcnLCB2YWx1ZSksXG4gICAgdXJsSW5zdGFuY2U6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy51cmxJbnN0YW5jZSh2YWx1ZSksICdVUkwnLCB2YWx1ZSksXG4gICAgdXJsU3RyaW5nOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMudXJsU3RyaW5nKHZhbHVlKSwgXCJzdHJpbmcgd2l0aCBhIFVSTFwiIC8qIHVybFN0cmluZyAqLywgdmFsdWUpLFxuICAgIHRydXRoeTogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLnRydXRoeSh2YWx1ZSksIFwidHJ1dGh5XCIgLyogdHJ1dGh5ICovLCB2YWx1ZSksXG4gICAgZmFsc3k6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5mYWxzeSh2YWx1ZSksIFwiZmFsc3lcIiAvKiBmYWxzeSAqLywgdmFsdWUpLFxuICAgIG5hbjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLm5hbih2YWx1ZSksIFwiTmFOXCIgLyogbmFuICovLCB2YWx1ZSksXG4gICAgcHJpbWl0aXZlOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMucHJpbWl0aXZlKHZhbHVlKSwgXCJwcmltaXRpdmVcIiAvKiBwcmltaXRpdmUgKi8sIHZhbHVlKSxcbiAgICBpbnRlZ2VyOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuaW50ZWdlcih2YWx1ZSksIFwiaW50ZWdlclwiIC8qIGludGVnZXIgKi8sIHZhbHVlKSxcbiAgICBzYWZlSW50ZWdlcjogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLnNhZmVJbnRlZ2VyKHZhbHVlKSwgXCJpbnRlZ2VyXCIgLyogc2FmZUludGVnZXIgKi8sIHZhbHVlKSxcbiAgICBwbGFpbk9iamVjdDogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLnBsYWluT2JqZWN0KHZhbHVlKSwgXCJwbGFpbiBvYmplY3RcIiAvKiBwbGFpbk9iamVjdCAqLywgdmFsdWUpLFxuICAgIHR5cGVkQXJyYXk6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy50eXBlZEFycmF5KHZhbHVlKSwgXCJUeXBlZEFycmF5XCIgLyogdHlwZWRBcnJheSAqLywgdmFsdWUpLFxuICAgIGFycmF5TGlrZTogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmFycmF5TGlrZSh2YWx1ZSksIFwiYXJyYXktbGlrZVwiIC8qIGFycmF5TGlrZSAqLywgdmFsdWUpLFxuICAgIGRvbUVsZW1lbnQ6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5kb21FbGVtZW50KHZhbHVlKSwgXCJIVE1MRWxlbWVudFwiIC8qIGRvbUVsZW1lbnQgKi8sIHZhbHVlKSxcbiAgICBvYnNlcnZhYmxlOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMub2JzZXJ2YWJsZSh2YWx1ZSksICdPYnNlcnZhYmxlJywgdmFsdWUpLFxuICAgIG5vZGVTdHJlYW06ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5ub2RlU3RyZWFtKHZhbHVlKSwgXCJOb2RlLmpzIFN0cmVhbVwiIC8qIG5vZGVTdHJlYW0gKi8sIHZhbHVlKSxcbiAgICBpbmZpbml0ZTogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmluZmluaXRlKHZhbHVlKSwgXCJpbmZpbml0ZSBudW1iZXJcIiAvKiBpbmZpbml0ZSAqLywgdmFsdWUpLFxuICAgIGVtcHR5QXJyYXk6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5lbXB0eUFycmF5KHZhbHVlKSwgXCJlbXB0eSBhcnJheVwiIC8qIGVtcHR5QXJyYXkgKi8sIHZhbHVlKSxcbiAgICBub25FbXB0eUFycmF5OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMubm9uRW1wdHlBcnJheSh2YWx1ZSksIFwibm9uLWVtcHR5IGFycmF5XCIgLyogbm9uRW1wdHlBcnJheSAqLywgdmFsdWUpLFxuICAgIGVtcHR5U3RyaW5nOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuZW1wdHlTdHJpbmcodmFsdWUpLCBcImVtcHR5IHN0cmluZ1wiIC8qIGVtcHR5U3RyaW5nICovLCB2YWx1ZSksXG4gICAgbm9uRW1wdHlTdHJpbmc6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5ub25FbXB0eVN0cmluZyh2YWx1ZSksIFwibm9uLWVtcHR5IHN0cmluZ1wiIC8qIG5vbkVtcHR5U3RyaW5nICovLCB2YWx1ZSksXG4gICAgZW1wdHlTdHJpbmdPcldoaXRlc3BhY2U6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5lbXB0eVN0cmluZ09yV2hpdGVzcGFjZSh2YWx1ZSksIFwiZW1wdHkgc3RyaW5nIG9yIHdoaXRlc3BhY2VcIiAvKiBlbXB0eVN0cmluZ09yV2hpdGVzcGFjZSAqLywgdmFsdWUpLFxuICAgIGVtcHR5T2JqZWN0OiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMuZW1wdHlPYmplY3QodmFsdWUpLCBcImVtcHR5IG9iamVjdFwiIC8qIGVtcHR5T2JqZWN0ICovLCB2YWx1ZSksXG4gICAgbm9uRW1wdHlPYmplY3Q6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5ub25FbXB0eU9iamVjdCh2YWx1ZSksIFwibm9uLWVtcHR5IG9iamVjdFwiIC8qIG5vbkVtcHR5T2JqZWN0ICovLCB2YWx1ZSksXG4gICAgZW1wdHlTZXQ6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5lbXB0eVNldCh2YWx1ZSksIFwiZW1wdHkgc2V0XCIgLyogZW1wdHlTZXQgKi8sIHZhbHVlKSxcbiAgICBub25FbXB0eVNldDogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLm5vbkVtcHR5U2V0KHZhbHVlKSwgXCJub24tZW1wdHkgc2V0XCIgLyogbm9uRW1wdHlTZXQgKi8sIHZhbHVlKSxcbiAgICBlbXB0eU1hcDogKHZhbHVlKSA9PiBhc3NlcnRUeXBlKGlzLmVtcHR5TWFwKHZhbHVlKSwgXCJlbXB0eSBtYXBcIiAvKiBlbXB0eU1hcCAqLywgdmFsdWUpLFxuICAgIG5vbkVtcHR5TWFwOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMubm9uRW1wdHlNYXAodmFsdWUpLCBcIm5vbi1lbXB0eSBtYXBcIiAvKiBub25FbXB0eU1hcCAqLywgdmFsdWUpLFxuICAgIC8vIE51bWJlcnMuXG4gICAgZXZlbkludGVnZXI6ICh2YWx1ZSkgPT4gYXNzZXJ0VHlwZShpcy5ldmVuSW50ZWdlcih2YWx1ZSksIFwiZXZlbiBpbnRlZ2VyXCIgLyogZXZlbkludGVnZXIgKi8sIHZhbHVlKSxcbiAgICBvZGRJbnRlZ2VyOiAodmFsdWUpID0+IGFzc2VydFR5cGUoaXMub2RkSW50ZWdlcih2YWx1ZSksIFwib2RkIGludGVnZXJcIiAvKiBvZGRJbnRlZ2VyICovLCB2YWx1ZSksXG4gICAgLy8gVHdvIGFyZ3VtZW50cy5cbiAgICBkaXJlY3RJbnN0YW5jZU9mOiAoaW5zdGFuY2UsIGNsYXNzXykgPT4gYXNzZXJ0VHlwZShpcy5kaXJlY3RJbnN0YW5jZU9mKGluc3RhbmNlLCBjbGFzc18pLCBcIlRcIiAvKiBkaXJlY3RJbnN0YW5jZU9mICovLCBpbnN0YW5jZSksXG4gICAgaW5SYW5nZTogKHZhbHVlLCByYW5nZSkgPT4gYXNzZXJ0VHlwZShpcy5pblJhbmdlKHZhbHVlLCByYW5nZSksIFwiaW4gcmFuZ2VcIiAvKiBpblJhbmdlICovLCB2YWx1ZSksXG4gICAgLy8gVmFyaWFkaWMgZnVuY3Rpb25zLlxuICAgIGFueTogKHByZWRpY2F0ZSwgLi4udmFsdWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NlcnRUeXBlKGlzLmFueShwcmVkaWNhdGUsIC4uLnZhbHVlcyksIFwicHJlZGljYXRlIHJldHVybnMgdHJ1dGh5IGZvciBhbnkgdmFsdWVcIiAvKiBhbnkgKi8sIHZhbHVlcywgeyBtdWx0aXBsZVZhbHVlczogdHJ1ZSB9KTtcbiAgICB9LFxuICAgIGFsbDogKHByZWRpY2F0ZSwgLi4udmFsdWVzKSA9PiBhc3NlcnRUeXBlKGlzLmFsbChwcmVkaWNhdGUsIC4uLnZhbHVlcyksIFwicHJlZGljYXRlIHJldHVybnMgdHJ1dGh5IGZvciBhbGwgdmFsdWVzXCIgLyogYWxsICovLCB2YWx1ZXMsIHsgbXVsdGlwbGVWYWx1ZXM6IHRydWUgfSlcbn07XG4vLyBTb21lIGZldyBrZXl3b3JkcyBhcmUgcmVzZXJ2ZWQsIGJ1dCB3ZSdsbCBwb3B1bGF0ZSB0aGVtIGZvciBOb2RlLmpzIHVzZXJzXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNTM2XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhpcywge1xuICAgIGNsYXNzOiB7XG4gICAgICAgIHZhbHVlOiBpcy5jbGFzc19cbiAgICB9LFxuICAgIGZ1bmN0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBpcy5mdW5jdGlvbl9cbiAgICB9LFxuICAgIG51bGw6IHtcbiAgICAgICAgdmFsdWU6IGlzLm51bGxfXG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLmFzc2VydCwge1xuICAgIGNsYXNzOiB7XG4gICAgICAgIHZhbHVlOiBleHBvcnRzLmFzc2VydC5jbGFzc19cbiAgICB9LFxuICAgIGZ1bmN0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBleHBvcnRzLmFzc2VydC5mdW5jdGlvbl9cbiAgICB9LFxuICAgIG51bGw6IHtcbiAgICAgICAgdmFsdWU6IGV4cG9ydHMuYXNzZXJ0Lm51bGxfXG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpcztcbi8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5tb2R1bGUuZXhwb3J0cyA9IGlzO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzO1xubW9kdWxlLmV4cG9ydHMuYXNzZXJ0ID0gZXhwb3J0cy5hc3NlcnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRlZmVyX3RvX2Nvbm5lY3RfMSA9IHJlcXVpcmUoXCJkZWZlci10by1jb25uZWN0XCIpO1xuY29uc3Qgbm9kZWpzTWFqb3JWZXJzaW9uID0gTnVtYmVyKHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpWzBdKTtcbmNvbnN0IHRpbWVyID0gKHJlcXVlc3QpID0+IHtcbiAgICBjb25zdCB0aW1pbmdzID0ge1xuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgICAgc29ja2V0OiB1bmRlZmluZWQsXG4gICAgICAgIGxvb2t1cDogdW5kZWZpbmVkLFxuICAgICAgICBjb25uZWN0OiB1bmRlZmluZWQsXG4gICAgICAgIHNlY3VyZUNvbm5lY3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgdXBsb2FkOiB1bmRlZmluZWQsXG4gICAgICAgIHJlc3BvbnNlOiB1bmRlZmluZWQsXG4gICAgICAgIGVuZDogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBhYm9ydDogdW5kZWZpbmVkLFxuICAgICAgICBwaGFzZXM6IHtcbiAgICAgICAgICAgIHdhaXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRuczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGNwOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0bHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlcXVlc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGZpcnN0Qnl0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZG93bmxvYWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRvdGFsOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC50aW1pbmdzID0gdGltaW5ncztcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChvcmlnaW4pID0+IHtcbiAgICAgICAgY29uc3QgZW1pdCA9IG9yaWdpbi5lbWl0LmJpbmQob3JpZ2luKTtcbiAgICAgICAgb3JpZ2luLmVtaXQgPSAoZXZlbnQsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vIENhdGNoZXMgdGhlIGBlcnJvcmAgZXZlbnRcbiAgICAgICAgICAgIGlmIChldmVudCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIHRpbWluZ3MuZXJyb3IgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRpbWluZ3MucGhhc2VzLnRvdGFsID0gdGltaW5ncy5lcnJvciAtIHRpbWluZ3Muc3RhcnQ7XG4gICAgICAgICAgICAgICAgb3JpZ2luLmVtaXQgPSBlbWl0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2F2ZXMgdGhlIG9yaWdpbmFsIGJlaGF2aW9yXG4gICAgICAgICAgICByZXR1cm4gZW1pdChldmVudCwgLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBoYW5kbGVFcnJvcihyZXF1ZXN0KTtcbiAgICByZXF1ZXN0LnByZXBlbmRPbmNlTGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgICB0aW1pbmdzLmFib3J0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gTGV0IHRoZSBgZW5kYCByZXNwb25zZSBldmVudCBiZSByZXNwb25zaWJsZSBmb3Igc2V0dGluZyB0aGUgdG90YWwgcGhhc2UsXG4gICAgICAgIC8vIHVubGVzcyB0aGUgTm9kZS5qcyBtYWpvciB2ZXJzaW9uIGlzID49IDEzLlxuICAgICAgICBpZiAoIXRpbWluZ3MucmVzcG9uc2UgfHwgbm9kZWpzTWFqb3JWZXJzaW9uID49IDEzKSB7XG4gICAgICAgICAgICB0aW1pbmdzLnBoYXNlcy50b3RhbCA9IERhdGUubm93KCkgLSB0aW1pbmdzLnN0YXJ0O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgb25Tb2NrZXQgPSAoc29ja2V0KSA9PiB7XG4gICAgICAgIHRpbWluZ3Muc29ja2V0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGltaW5ncy5waGFzZXMud2FpdCA9IHRpbWluZ3Muc29ja2V0IC0gdGltaW5ncy5zdGFydDtcbiAgICAgICAgY29uc3QgbG9va3VwTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1pbmdzLmxvb2t1cCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aW1pbmdzLnBoYXNlcy5kbnMgPSB0aW1pbmdzLmxvb2t1cCAtIHRpbWluZ3Muc29ja2V0O1xuICAgICAgICB9O1xuICAgICAgICBzb2NrZXQucHJlcGVuZE9uY2VMaXN0ZW5lcignbG9va3VwJywgbG9va3VwTGlzdGVuZXIpO1xuICAgICAgICBkZWZlcl90b19jb25uZWN0XzEuZGVmYXVsdChzb2NrZXQsIHtcbiAgICAgICAgICAgIGNvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aW1pbmdzLmNvbm5lY3QgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1pbmdzLmxvb2t1cCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignbG9va3VwJywgbG9va3VwTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aW1pbmdzLmxvb2t1cCA9IHRpbWluZ3MuY29ubmVjdDtcbiAgICAgICAgICAgICAgICAgICAgdGltaW5ncy5waGFzZXMuZG5zID0gdGltaW5ncy5sb29rdXAgLSB0aW1pbmdzLnNvY2tldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGltaW5ncy5waGFzZXMudGNwID0gdGltaW5ncy5jb25uZWN0IC0gdGltaW5ncy5sb29rdXA7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgYmVmb3JlIGZsdXNoaW5nIGFueSBkYXRhLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gc2V0IGB0aW1pbmdzLnBoYXNlcy5yZXF1ZXN0YCBoZXJlLlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY3VyZUNvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aW1pbmdzLnNlY3VyZUNvbm5lY3QgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRpbWluZ3MucGhhc2VzLnRscyA9IHRpbWluZ3Muc2VjdXJlQ29ubmVjdCAtIHRpbWluZ3MuY29ubmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAocmVxdWVzdC5zb2NrZXQpIHtcbiAgICAgICAgb25Tb2NrZXQocmVxdWVzdC5zb2NrZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5wcmVwZW5kT25jZUxpc3RlbmVyKCdzb2NrZXQnLCBvblNvY2tldCk7XG4gICAgfVxuICAgIGNvbnN0IG9uVXBsb2FkID0gKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRpbWluZ3MudXBsb2FkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGltaW5ncy5waGFzZXMucmVxdWVzdCA9IHRpbWluZ3MudXBsb2FkIC0gKF9hID0gdGltaW5ncy5zZWN1cmVDb25uZWN0LCAoX2EgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGltaW5ncy5jb25uZWN0KSk7XG4gICAgfTtcbiAgICBjb25zdCB3cml0YWJsZUZpbmlzaGVkID0gKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3Qud3JpdGFibGVGaW5pc2hlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdC53cml0YWJsZUZpbmlzaGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vZGUuanMgZG9lc24ndCBoYXZlIGByZXF1ZXN0LndyaXRhYmxlRmluaXNoZWRgIHByb3BlcnR5XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmZpbmlzaGVkICYmIHJlcXVlc3Qub3V0cHV0U2l6ZSA9PT0gMCAmJiAoIXJlcXVlc3Quc29ja2V0IHx8IHJlcXVlc3Quc29ja2V0LndyaXRhYmxlTGVuZ3RoID09PSAwKTtcbiAgICB9O1xuICAgIGlmICh3cml0YWJsZUZpbmlzaGVkKCkpIHtcbiAgICAgICAgb25VcGxvYWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlcXVlc3QucHJlcGVuZE9uY2VMaXN0ZW5lcignZmluaXNoJywgb25VcGxvYWQpO1xuICAgIH1cbiAgICByZXF1ZXN0LnByZXBlbmRPbmNlTGlzdGVuZXIoJ3Jlc3BvbnNlJywgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRpbWluZ3MucmVzcG9uc2UgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aW1pbmdzLnBoYXNlcy5maXJzdEJ5dGUgPSB0aW1pbmdzLnJlc3BvbnNlIC0gdGltaW5ncy51cGxvYWQ7XG4gICAgICAgIHJlc3BvbnNlLnRpbWluZ3MgPSB0aW1pbmdzO1xuICAgICAgICBoYW5kbGVFcnJvcihyZXNwb25zZSk7XG4gICAgICAgIHJlc3BvbnNlLnByZXBlbmRPbmNlTGlzdGVuZXIoJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRpbWluZ3MuZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRpbWluZ3MucGhhc2VzLmRvd25sb2FkID0gdGltaW5ncy5lbmQgLSB0aW1pbmdzLnJlc3BvbnNlO1xuICAgICAgICAgICAgdGltaW5ncy5waGFzZXMudG90YWwgPSB0aW1pbmdzLmVuZCAtIHRpbWluZ3Muc3RhcnQ7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aW1pbmdzO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRpbWVyO1xuLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcbm1vZHVsZS5leHBvcnRzID0gdGltZXI7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gdGltZXI7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG5cdFY0TUFQUEVELFxuXHRBRERSQ09ORklHLFxuXHRBTEwsXG5cdHByb21pc2VzOiB7XG5cdFx0UmVzb2x2ZXI6IEFzeW5jUmVzb2x2ZXJcblx0fSxcblx0bG9va3VwOiBkbnNMb29rdXBcbn0gPSByZXF1aXJlKCdkbnMnKTtcbmNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuXG5jb25zdCBrQ2FjaGVhYmxlTG9va3VwQ3JlYXRlQ29ubmVjdGlvbiA9IFN5bWJvbCgnY2FjaGVhYmxlTG9va3VwQ3JlYXRlQ29ubmVjdGlvbicpO1xuY29uc3Qga0NhY2hlYWJsZUxvb2t1cEluc3RhbmNlID0gU3ltYm9sKCdjYWNoZWFibGVMb29rdXBJbnN0YW5jZScpO1xuY29uc3Qga0V4cGlyZXMgPSBTeW1ib2woJ2V4cGlyZXMnKTtcblxuY29uc3Qgc3VwcG9ydHNBTEwgPSB0eXBlb2YgQUxMID09PSAnbnVtYmVyJztcblxuY29uc3QgdmVyaWZ5QWdlbnQgPSBhZ2VudCA9PiB7XG5cdGlmICghKGFnZW50ICYmIHR5cGVvZiBhZ2VudC5jcmVhdGVDb25uZWN0aW9uID09PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYW4gQWdlbnQgaW5zdGFuY2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50Jyk7XG5cdH1cbn07XG5cbmNvbnN0IG1hcDR0bzYgPSBlbnRyaWVzID0+IHtcblx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0aWYgKGVudHJ5LmZhbWlseSA9PT0gNikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZW50cnkuYWRkcmVzcyA9IGA6OmZmZmY6JHtlbnRyeS5hZGRyZXNzfWA7XG5cdFx0ZW50cnkuZmFtaWx5ID0gNjtcblx0fVxufTtcblxuY29uc3QgZ2V0SWZhY2VJbmZvID0gKCkgPT4ge1xuXHRsZXQgaGFzNCA9IGZhbHNlO1xuXHRsZXQgaGFzNiA9IGZhbHNlO1xuXG5cdGZvciAoY29uc3QgZGV2aWNlIG9mIE9iamVjdC52YWx1ZXMob3MubmV0d29ya0ludGVyZmFjZXMoKSkpIHtcblx0XHRmb3IgKGNvbnN0IGlmYWNlIG9mIGRldmljZSkge1xuXHRcdFx0aWYgKGlmYWNlLmludGVybmFsKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZhY2UuZmFtaWx5ID09PSAnSVB2NicpIHtcblx0XHRcdFx0aGFzNiA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYXM0ID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGhhczQgJiYgaGFzNikge1xuXHRcdFx0XHRyZXR1cm4ge2hhczQsIGhhczZ9O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7aGFzNCwgaGFzNn07XG59O1xuXG5jb25zdCBpc0l0ZXJhYmxlID0gbWFwID0+IHtcblx0cmV0dXJuIFN5bWJvbC5pdGVyYXRvciBpbiBtYXA7XG59O1xuXG5jb25zdCB0dGwgPSB7dHRsOiB0cnVlfTtcbmNvbnN0IGFsbCA9IHthbGw6IHRydWV9O1xuXG5jbGFzcyBDYWNoZWFibGVMb29rdXAge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0Y2FjaGUgPSBuZXcgTWFwKCksXG5cdFx0bWF4VHRsID0gSW5maW5pdHksXG5cdFx0ZmFsbGJhY2tEdXJhdGlvbiA9IDM2MDAsXG5cdFx0ZXJyb3JUdGwgPSAwLjE1LFxuXHRcdHJlc29sdmVyID0gbmV3IEFzeW5jUmVzb2x2ZXIoKSxcblx0XHRsb29rdXAgPSBkbnNMb29rdXBcblx0fSA9IHt9KSB7XG5cdFx0dGhpcy5tYXhUdGwgPSBtYXhUdGw7XG5cdFx0dGhpcy5lcnJvclR0bCA9IGVycm9yVHRsO1xuXG5cdFx0dGhpcy5fY2FjaGUgPSBjYWNoZTtcblx0XHR0aGlzLl9yZXNvbHZlciA9IHJlc29sdmVyO1xuXHRcdHRoaXMuX2Ruc0xvb2t1cCA9IHByb21pc2lmeShsb29rdXApO1xuXG5cdFx0aWYgKHRoaXMuX3Jlc29sdmVyIGluc3RhbmNlb2YgQXN5bmNSZXNvbHZlcikge1xuXHRcdFx0dGhpcy5fcmVzb2x2ZTQgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlNC5iaW5kKHRoaXMuX3Jlc29sdmVyKTtcblx0XHRcdHRoaXMuX3Jlc29sdmU2ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZTYuYmluZCh0aGlzLl9yZXNvbHZlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3Jlc29sdmU0ID0gcHJvbWlzaWZ5KHRoaXMuX3Jlc29sdmVyLnJlc29sdmU0LmJpbmQodGhpcy5fcmVzb2x2ZXIpKTtcblx0XHRcdHRoaXMuX3Jlc29sdmU2ID0gcHJvbWlzaWZ5KHRoaXMuX3Jlc29sdmVyLnJlc29sdmU2LmJpbmQodGhpcy5fcmVzb2x2ZXIpKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pZmFjZSA9IGdldElmYWNlSW5mbygpO1xuXG5cdFx0dGhpcy5fcGVuZGluZyA9IHt9O1xuXHRcdHRoaXMuX25leHRSZW1vdmFsVGltZSA9IGZhbHNlO1xuXHRcdHRoaXMuX2hvc3RuYW1lc1RvRmFsbGJhY2sgPSBuZXcgU2V0KCk7XG5cblx0XHRpZiAoZmFsbGJhY2tEdXJhdGlvbiA8IDEpIHtcblx0XHRcdHRoaXMuX2ZhbGxiYWNrID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2ZhbGxiYWNrID0gdHJ1ZTtcblxuXHRcdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2hvc3RuYW1lc1RvRmFsbGJhY2suY2xlYXIoKTtcblx0XHRcdH0sIGZhbGxiYWNrRHVyYXRpb24gKiAxMDAwKTtcblxuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFRoZXJlIGlzIG5vIGBpbnRlcnZhbC51bnJlZigpYCB3aGVuIHJ1bm5pbmcgaW5zaWRlIGFuIEVsZWN0cm9uIHJlbmRlcmVyICovXG5cdFx0XHRpZiAoaW50ZXJ2YWwudW5yZWYpIHtcblx0XHRcdFx0aW50ZXJ2YWwudW5yZWYoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmxvb2t1cCA9IHRoaXMubG9va3VwLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5sb29rdXBBc3luYyA9IHRoaXMubG9va3VwQXN5bmMuYmluZCh0aGlzKTtcblx0fVxuXG5cdHNldCBzZXJ2ZXJzKHNlcnZlcnMpIHtcblx0XHR0aGlzLmNsZWFyKCk7XG5cblx0XHR0aGlzLl9yZXNvbHZlci5zZXRTZXJ2ZXJzKHNlcnZlcnMpO1xuXHR9XG5cblx0Z2V0IHNlcnZlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Jlc29sdmVyLmdldFNlcnZlcnMoKTtcblx0fVxuXG5cdGxvb2t1cChob3N0bmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNhbGxiYWNrID0gb3B0aW9ucztcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJykge1xuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZmFtaWx5OiBvcHRpb25zXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmICghY2FsbGJhY2spIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL3ByZWZlci1hd2FpdC10by10aGVuXG5cdFx0dGhpcy5sb29rdXBBc3luYyhob3N0bmFtZSwgb3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0aWYgKG9wdGlvbnMuYWxsKSB7XG5cdFx0XHRcdGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYWxsYmFjayhudWxsLCByZXN1bHQuYWRkcmVzcywgcmVzdWx0LmZhbWlseSwgcmVzdWx0LmV4cGlyZXMsIHJlc3VsdC50dGwpO1xuXHRcdFx0fVxuXHRcdH0sIGNhbGxiYWNrKTtcblx0fVxuXG5cdGFzeW5jIGxvb2t1cEFzeW5jKGhvc3RuYW1lLCBvcHRpb25zID0ge30pIHtcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRvcHRpb25zID0ge1xuXHRcdFx0XHRmYW1pbHk6IG9wdGlvbnNcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0bGV0IGNhY2hlZCA9IGF3YWl0IHRoaXMucXVlcnkoaG9zdG5hbWUpO1xuXG5cdFx0aWYgKG9wdGlvbnMuZmFtaWx5ID09PSA2KSB7XG5cdFx0XHRjb25zdCBmaWx0ZXJlZCA9IGNhY2hlZC5maWx0ZXIoZW50cnkgPT4gZW50cnkuZmFtaWx5ID09PSA2KTtcblxuXHRcdFx0aWYgKG9wdGlvbnMuaGludHMgJiBWNE1BUFBFRCkge1xuXHRcdFx0XHRpZiAoKHN1cHBvcnRzQUxMICYmIG9wdGlvbnMuaGludHMgJiBBTEwpIHx8IGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdG1hcDR0bzYoY2FjaGVkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjYWNoZWQgPSBmaWx0ZXJlZDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FjaGVkID0gZmlsdGVyZWQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLmZhbWlseSA9PT0gNCkge1xuXHRcdFx0Y2FjaGVkID0gY2FjaGVkLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5mYW1pbHkgPT09IDQpO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLmhpbnRzICYgQUREUkNPTkZJRykge1xuXHRcdFx0Y29uc3Qge19pZmFjZX0gPSB0aGlzO1xuXHRcdFx0Y2FjaGVkID0gY2FjaGVkLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5mYW1pbHkgPT09IDYgPyBfaWZhY2UuaGFzNiA6IF9pZmFjZS5oYXM0KTtcblx0XHR9XG5cblx0XHRpZiAoY2FjaGVkLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGNhY2hlYWJsZUxvb2t1cCBFTk9URk9VTkQgJHtob3N0bmFtZX1gKTtcblx0XHRcdGVycm9yLmNvZGUgPSAnRU5PVEZPVU5EJztcblx0XHRcdGVycm9yLmhvc3RuYW1lID0gaG9zdG5hbWU7XG5cblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLmFsbCkge1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGVkWzBdO1xuXHR9XG5cblx0YXN5bmMgcXVlcnkoaG9zdG5hbWUpIHtcblx0XHRsZXQgY2FjaGVkID0gYXdhaXQgdGhpcy5fY2FjaGUuZ2V0KGhvc3RuYW1lKTtcblxuXHRcdGlmICghY2FjaGVkKSB7XG5cdFx0XHRjb25zdCBwZW5kaW5nID0gdGhpcy5fcGVuZGluZ1tob3N0bmFtZV07XG5cblx0XHRcdGlmIChwZW5kaW5nKSB7XG5cdFx0XHRcdGNhY2hlZCA9IGF3YWl0IHBlbmRpbmc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBuZXdQcm9taXNlID0gdGhpcy5xdWVyeUFuZENhY2hlKGhvc3RuYW1lKTtcblx0XHRcdFx0dGhpcy5fcGVuZGluZ1tob3N0bmFtZV0gPSBuZXdQcm9taXNlO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y2FjaGVkID0gYXdhaXQgbmV3UHJvbWlzZTtcblx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5fcGVuZGluZ1tob3N0bmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjYWNoZWQgPSBjYWNoZWQubWFwKGVudHJ5ID0+IHtcblx0XHRcdHJldHVybiB7Li4uZW50cnl9O1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXG5cdGFzeW5jIF9yZXNvbHZlKGhvc3RuYW1lKSB7XG5cdFx0Y29uc3Qgd3JhcCA9IGFzeW5jIHByb21pc2UgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIGF3YWl0IHByb21pc2U7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRpZiAoZXJyb3IuY29kZSA9PT0gJ0VOT0RBVEEnIHx8IGVycm9yLmNvZGUgPT09ICdFTk9URk9VTkQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIEFOWSBpcyB1bnNhZmUgYXMgaXQgZG9lc24ndCB0cmlnZ2VyIG5ldyBxdWVyaWVzIGluIHRoZSB1bmRlcmx5aW5nIHNlcnZlci5cblx0XHRjb25zdCBbQSwgQUFBQV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0XHR0aGlzLl9yZXNvbHZlNChob3N0bmFtZSwgdHRsKSxcblx0XHRcdHRoaXMuX3Jlc29sdmU2KGhvc3RuYW1lLCB0dGwpXG5cdFx0XS5tYXAocHJvbWlzZSA9PiB3cmFwKHByb21pc2UpKSk7XG5cblx0XHRsZXQgYVR0bCA9IDA7XG5cdFx0bGV0IGFhYWFUdGwgPSAwO1xuXHRcdGxldCBjYWNoZVR0bCA9IDA7XG5cblx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG5cdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBBKSB7XG5cdFx0XHRlbnRyeS5mYW1pbHkgPSA0O1xuXHRcdFx0ZW50cnkuZXhwaXJlcyA9IG5vdyArIChlbnRyeS50dGwgKiAxMDAwKTtcblxuXHRcdFx0YVR0bCA9IE1hdGgubWF4KGFUdGwsIGVudHJ5LnR0bCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBBQUFBKSB7XG5cdFx0XHRlbnRyeS5mYW1pbHkgPSA2O1xuXHRcdFx0ZW50cnkuZXhwaXJlcyA9IG5vdyArIChlbnRyeS50dGwgKiAxMDAwKTtcblxuXHRcdFx0YWFhYVR0bCA9IE1hdGgubWF4KGFhYWFUdGwsIGVudHJ5LnR0bCk7XG5cdFx0fVxuXG5cdFx0aWYgKEEubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKEFBQUEubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjYWNoZVR0bCA9IE1hdGgubWluKGFUdGwsIGFhYWFUdGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FjaGVUdGwgPSBhVHRsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYWNoZVR0bCA9IGFhYWFUdGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGVudHJpZXM6IFtcblx0XHRcdFx0Li4uQSxcblx0XHRcdFx0Li4uQUFBQVxuXHRcdFx0XSxcblx0XHRcdGNhY2hlVHRsXG5cdFx0fTtcblx0fVxuXG5cdGFzeW5jIF9sb29rdXAoaG9zdG5hbWUpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXMuX2Ruc0xvb2t1cChob3N0bmFtZSwge1xuXHRcdFx0XHRhbGw6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlbnRyaWVzLFxuXHRcdFx0XHRjYWNoZVR0bDogMFxuXHRcdFx0fTtcblx0XHR9IGNhdGNoIChfKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlbnRyaWVzOiBbXSxcblx0XHRcdFx0Y2FjaGVUdGw6IDBcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgX3NldChob3N0bmFtZSwgZGF0YSwgY2FjaGVUdGwpIHtcblx0XHRpZiAodGhpcy5tYXhUdGwgPiAwICYmIGNhY2hlVHRsID4gMCkge1xuXHRcdFx0Y2FjaGVUdGwgPSBNYXRoLm1pbihjYWNoZVR0bCwgdGhpcy5tYXhUdGwpICogMTAwMDtcblx0XHRcdGRhdGFba0V4cGlyZXNdID0gRGF0ZS5ub3coKSArIGNhY2hlVHRsO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCB0aGlzLl9jYWNoZS5zZXQoaG9zdG5hbWUsIGRhdGEsIGNhY2hlVHRsKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHRoaXMubG9va3VwQXN5bmMgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2FjaGVFcnJvciA9IG5ldyBFcnJvcignQ2FjaGUgRXJyb3IuIFBsZWFzZSByZWNyZWF0ZSB0aGUgQ2FjaGVhYmxlTG9va3VwIGluc3RhbmNlLicpO1xuXHRcdFx0XHRcdGNhY2hlRXJyb3IuY2F1c2UgPSBlcnJvcjtcblxuXHRcdFx0XHRcdHRocm93IGNhY2hlRXJyb3I7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0l0ZXJhYmxlKHRoaXMuX2NhY2hlKSkge1xuXHRcdFx0XHR0aGlzLl90aWNrKGNhY2hlVHRsKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRhc3luYyBxdWVyeUFuZENhY2hlKGhvc3RuYW1lKSB7XG5cdFx0aWYgKHRoaXMuX2hvc3RuYW1lc1RvRmFsbGJhY2suaGFzKGhvc3RuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2Ruc0xvb2t1cChob3N0bmFtZSwgYWxsKTtcblx0XHR9XG5cblx0XHRsZXQgcXVlcnkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlKGhvc3RuYW1lKTtcblxuXHRcdGlmIChxdWVyeS5lbnRyaWVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9mYWxsYmFjaykge1xuXHRcdFx0cXVlcnkgPSBhd2FpdCB0aGlzLl9sb29rdXAoaG9zdG5hbWUpO1xuXG5cdFx0XHRpZiAocXVlcnkuZW50cmllcy5sZW5ndGggIT09IDApIHtcblx0XHRcdFx0Ly8gVXNlIGBkbnMubG9va3VwKC4uLilgIGZvciB0aGF0IHBhcnRpY3VsYXIgaG9zdG5hbWVcblx0XHRcdFx0dGhpcy5faG9zdG5hbWVzVG9GYWxsYmFjay5hZGQoaG9zdG5hbWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGNhY2hlVHRsID0gcXVlcnkuZW50cmllcy5sZW5ndGggPT09IDAgPyB0aGlzLmVycm9yVHRsIDogcXVlcnkuY2FjaGVUdGw7XG5cdFx0YXdhaXQgdGhpcy5fc2V0KGhvc3RuYW1lLCBxdWVyeS5lbnRyaWVzLCBjYWNoZVR0bCk7XG5cblx0XHRyZXR1cm4gcXVlcnkuZW50cmllcztcblx0fVxuXG5cdF90aWNrKG1zKSB7XG5cdFx0Y29uc3QgbmV4dFJlbW92YWxUaW1lID0gdGhpcy5fbmV4dFJlbW92YWxUaW1lO1xuXG5cdFx0aWYgKCFuZXh0UmVtb3ZhbFRpbWUgfHwgbXMgPCBuZXh0UmVtb3ZhbFRpbWUpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9yZW1vdmFsVGltZW91dCk7XG5cblx0XHRcdHRoaXMuX25leHRSZW1vdmFsVGltZSA9IG1zO1xuXG5cdFx0XHR0aGlzLl9yZW1vdmFsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9uZXh0UmVtb3ZhbFRpbWUgPSBmYWxzZTtcblxuXHRcdFx0XHRsZXQgbmV4dEV4cGlyeSA9IEluZmluaXR5O1xuXG5cdFx0XHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBbaG9zdG5hbWUsIGVudHJpZXNdIG9mIHRoaXMuX2NhY2hlKSB7XG5cdFx0XHRcdFx0Y29uc3QgZXhwaXJlcyA9IGVudHJpZXNba0V4cGlyZXNdO1xuXG5cdFx0XHRcdFx0aWYgKG5vdyA+PSBleHBpcmVzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9jYWNoZS5kZWxldGUoaG9zdG5hbWUpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZXhwaXJlcyA8IG5leHRFeHBpcnkpIHtcblx0XHRcdFx0XHRcdG5leHRFeHBpcnkgPSBleHBpcmVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuZXh0RXhwaXJ5ICE9PSBJbmZpbml0eSkge1xuXHRcdFx0XHRcdHRoaXMuX3RpY2sobmV4dEV4cGlyeSAtIG5vdyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIG1zKTtcblxuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFRoZXJlIGlzIG5vIGB0aW1lb3V0LnVucmVmKClgIHdoZW4gcnVubmluZyBpbnNpZGUgYW4gRWxlY3Ryb24gcmVuZGVyZXIgKi9cblx0XHRcdGlmICh0aGlzLl9yZW1vdmFsVGltZW91dC51bnJlZikge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmFsVGltZW91dC51bnJlZigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGluc3RhbGwoYWdlbnQpIHtcblx0XHR2ZXJpZnlBZ2VudChhZ2VudCk7XG5cblx0XHRpZiAoa0NhY2hlYWJsZUxvb2t1cENyZWF0ZUNvbm5lY3Rpb24gaW4gYWdlbnQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ2FjaGVhYmxlTG9va3VwIGhhcyBiZWVuIGFscmVhZHkgaW5zdGFsbGVkJyk7XG5cdFx0fVxuXG5cdFx0YWdlbnRba0NhY2hlYWJsZUxvb2t1cENyZWF0ZUNvbm5lY3Rpb25dID0gYWdlbnQuY3JlYXRlQ29ubmVjdGlvbjtcblx0XHRhZ2VudFtrQ2FjaGVhYmxlTG9va3VwSW5zdGFuY2VdID0gdGhpcztcblxuXHRcdGFnZW50LmNyZWF0ZUNvbm5lY3Rpb24gPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcblx0XHRcdGlmICghKCdsb29rdXAnIGluIG9wdGlvbnMpKSB7XG5cdFx0XHRcdG9wdGlvbnMubG9va3VwID0gdGhpcy5sb29rdXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhZ2VudFtrQ2FjaGVhYmxlTG9va3VwQ3JlYXRlQ29ubmVjdGlvbl0ob3B0aW9ucywgY2FsbGJhY2spO1xuXHRcdH07XG5cdH1cblxuXHR1bmluc3RhbGwoYWdlbnQpIHtcblx0XHR2ZXJpZnlBZ2VudChhZ2VudCk7XG5cblx0XHRpZiAoYWdlbnRba0NhY2hlYWJsZUxvb2t1cENyZWF0ZUNvbm5lY3Rpb25dKSB7XG5cdFx0XHRpZiAoYWdlbnRba0NhY2hlYWJsZUxvb2t1cEluc3RhbmNlXSAhPT0gdGhpcykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhZ2VudCBpcyBub3Qgb3duZWQgYnkgdGhpcyBDYWNoZWFibGVMb29rdXAgaW5zdGFuY2UnKTtcblx0XHRcdH1cblxuXHRcdFx0YWdlbnQuY3JlYXRlQ29ubmVjdGlvbiA9IGFnZW50W2tDYWNoZWFibGVMb29rdXBDcmVhdGVDb25uZWN0aW9uXTtcblxuXHRcdFx0ZGVsZXRlIGFnZW50W2tDYWNoZWFibGVMb29rdXBDcmVhdGVDb25uZWN0aW9uXTtcblx0XHRcdGRlbGV0ZSBhZ2VudFtrQ2FjaGVhYmxlTG9va3VwSW5zdGFuY2VdO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUludGVyZmFjZUluZm8oKSB7XG5cdFx0Y29uc3Qge19pZmFjZX0gPSB0aGlzO1xuXG5cdFx0dGhpcy5faWZhY2UgPSBnZXRJZmFjZUluZm8oKTtcblxuXHRcdGlmICgoX2lmYWNlLmhhczQgJiYgIXRoaXMuX2lmYWNlLmhhczQpIHx8IChfaWZhY2UuaGFzNiAmJiAhdGhpcy5faWZhY2UuaGFzNikpIHtcblx0XHRcdHRoaXMuX2NhY2hlLmNsZWFyKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xlYXIoaG9zdG5hbWUpIHtcblx0XHRpZiAoaG9zdG5hbWUpIHtcblx0XHRcdHRoaXMuX2NhY2hlLmRlbGV0ZShob3N0bmFtZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2FjaGUuY2xlYXIoKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhY2hlYWJsZUxvb2t1cDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBDYWNoZWFibGVMb29rdXA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgdXJsTGliID0gcmVxdWlyZSgndXJsJyk7XG5jb25zdCBub3JtYWxpemVVcmwgPSByZXF1aXJlKCdub3JtYWxpemUtdXJsJyk7XG5jb25zdCBnZXRTdHJlYW0gPSByZXF1aXJlKCdnZXQtc3RyZWFtJyk7XG5jb25zdCBDYWNoZVBvbGljeSA9IHJlcXVpcmUoJ2h0dHAtY2FjaGUtc2VtYW50aWNzJyk7XG5jb25zdCBSZXNwb25zZSA9IHJlcXVpcmUoJ3Jlc3BvbnNlbGlrZScpO1xuY29uc3QgbG93ZXJjYXNlS2V5cyA9IHJlcXVpcmUoJ2xvd2VyY2FzZS1rZXlzJyk7XG5jb25zdCBjbG9uZVJlc3BvbnNlID0gcmVxdWlyZSgnY2xvbmUtcmVzcG9uc2UnKTtcbmNvbnN0IEtleXYgPSByZXF1aXJlKCdrZXl2Jyk7XG5cbmNsYXNzIENhY2hlYWJsZVJlcXVlc3Qge1xuXHRjb25zdHJ1Y3RvcihyZXF1ZXN0LCBjYWNoZUFkYXB0ZXIpIHtcblx0XHRpZiAodHlwZW9mIHJlcXVlc3QgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1BhcmFtZXRlciBgcmVxdWVzdGAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBLZXl2KHtcblx0XHRcdHVyaTogdHlwZW9mIGNhY2hlQWRhcHRlciA9PT0gJ3N0cmluZycgJiYgY2FjaGVBZGFwdGVyLFxuXHRcdFx0c3RvcmU6IHR5cGVvZiBjYWNoZUFkYXB0ZXIgIT09ICdzdHJpbmcnICYmIGNhY2hlQWRhcHRlcixcblx0XHRcdG5hbWVzcGFjZTogJ2NhY2hlYWJsZS1yZXF1ZXN0J1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ2FjaGVhYmxlUmVxdWVzdChyZXF1ZXN0KTtcblx0fVxuXG5cdGNyZWF0ZUNhY2hlYWJsZVJlcXVlc3QocmVxdWVzdCkge1xuXHRcdHJldHVybiAob3B0cywgY2IpID0+IHtcblx0XHRcdGxldCB1cmw7XG5cdFx0XHRpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHVybCA9IG5vcm1hbGl6ZVVybE9iamVjdCh1cmxMaWIucGFyc2Uob3B0cykpO1xuXHRcdFx0XHRvcHRzID0ge307XG5cdFx0XHR9IGVsc2UgaWYgKG9wdHMgaW5zdGFuY2VvZiB1cmxMaWIuVVJMKSB7XG5cdFx0XHRcdHVybCA9IG5vcm1hbGl6ZVVybE9iamVjdCh1cmxMaWIucGFyc2Uob3B0cy50b1N0cmluZygpKSk7XG5cdFx0XHRcdG9wdHMgPSB7fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IFtwYXRobmFtZSwgLi4uc2VhcmNoUGFydHNdID0gKG9wdHMucGF0aCB8fCAnJykuc3BsaXQoJz8nKTtcblx0XHRcdFx0Y29uc3Qgc2VhcmNoID0gc2VhcmNoUGFydHMubGVuZ3RoID4gMCA/XG5cdFx0XHRcdFx0YD8ke3NlYXJjaFBhcnRzLmpvaW4oJz8nKX1gIDpcblx0XHRcdFx0XHQnJztcblx0XHRcdFx0dXJsID0gbm9ybWFsaXplVXJsT2JqZWN0KHsgLi4ub3B0cywgcGF0aG5hbWUsIHNlYXJjaCB9KTtcblx0XHRcdH1cblxuXHRcdFx0b3B0cyA9IHtcblx0XHRcdFx0aGVhZGVyczoge30sXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdGNhY2hlOiB0cnVlLFxuXHRcdFx0XHRzdHJpY3RUdGw6IGZhbHNlLFxuXHRcdFx0XHRhdXRvbWF0aWNGYWlsb3ZlcjogZmFsc2UsXG5cdFx0XHRcdC4uLm9wdHMsXG5cdFx0XHRcdC4uLnVybE9iamVjdFRvUmVxdWVzdE9wdGlvbnModXJsKVxuXHRcdFx0fTtcblx0XHRcdG9wdHMuaGVhZGVycyA9IGxvd2VyY2FzZUtleXMob3B0cy5oZWFkZXJzKTtcblxuXHRcdFx0Y29uc3QgZWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdFx0XHRjb25zdCBub3JtYWxpemVkVXJsU3RyaW5nID0gbm9ybWFsaXplVXJsKFxuXHRcdFx0XHR1cmxMaWIuZm9ybWF0KHVybCksXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdHJpcFdXVzogZmFsc2UsXG5cdFx0XHRcdFx0cmVtb3ZlVHJhaWxpbmdTbGFzaDogZmFsc2UsXG5cdFx0XHRcdFx0c3RyaXBBdXRoZW50aWNhdGlvbjogZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGtleSA9IGAke29wdHMubWV0aG9kfToke25vcm1hbGl6ZWRVcmxTdHJpbmd9YDtcblx0XHRcdGxldCByZXZhbGlkYXRlID0gZmFsc2U7XG5cdFx0XHRsZXQgbWFkZVJlcXVlc3QgPSBmYWxzZTtcblxuXHRcdFx0Y29uc3QgbWFrZVJlcXVlc3QgPSBvcHRzID0+IHtcblx0XHRcdFx0bWFkZVJlcXVlc3QgPSB0cnVlO1xuXHRcdFx0XHRsZXQgcmVxdWVzdEVycm9yZWQgPSBmYWxzZTtcblx0XHRcdFx0bGV0IHJlcXVlc3RFcnJvckNhbGxiYWNrO1xuXG5cdFx0XHRcdGNvbnN0IHJlcXVlc3RFcnJvclByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdFx0XHRyZXF1ZXN0RXJyb3JDYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmICghcmVxdWVzdEVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdEVycm9yZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Y29uc3QgaGFuZGxlciA9IHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRpZiAocmV2YWxpZGF0ZSAmJiAhb3B0cy5mb3JjZVJlZnJlc2gpIHtcblx0XHRcdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1c0NvZGU7XG5cdFx0XHRcdFx0XHRjb25zdCByZXZhbGlkYXRlZFBvbGljeSA9IENhY2hlUG9saWN5LmZyb21PYmplY3QocmV2YWxpZGF0ZS5jYWNoZVBvbGljeSkucmV2YWxpZGF0ZWRQb2xpY3kob3B0cywgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYgKCFyZXZhbGlkYXRlZFBvbGljeS5tb2RpZmllZCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBoZWFkZXJzID0gcmV2YWxpZGF0ZWRQb2xpY3kucG9saWN5LnJlc3BvbnNlSGVhZGVycygpO1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShyZXZhbGlkYXRlLnN0YXR1c0NvZGUsIGhlYWRlcnMsIHJldmFsaWRhdGUuYm9keSwgcmV2YWxpZGF0ZS51cmwpO1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5jYWNoZVBvbGljeSA9IHJldmFsaWRhdGVkUG9saWN5LnBvbGljeTtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UuZnJvbUNhY2hlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmZyb21DYWNoZSkge1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UuY2FjaGVQb2xpY3kgPSBuZXcgQ2FjaGVQb2xpY3kob3B0cywgcmVzcG9uc2UsIG9wdHMpO1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UuZnJvbUNhY2hlID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGNsb25lZFJlc3BvbnNlO1xuXHRcdFx0XHRcdGlmIChvcHRzLmNhY2hlICYmIHJlc3BvbnNlLmNhY2hlUG9saWN5LnN0b3JhYmxlKCkpIHtcblx0XHRcdFx0XHRcdGNsb25lZFJlc3BvbnNlID0gY2xvbmVSZXNwb25zZShyZXNwb25zZSk7XG5cblx0XHRcdFx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgYm9keVByb21pc2UgPSBnZXRTdHJlYW0uYnVmZmVyKHJlc3BvbnNlKTtcblxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IFByb21pc2UucmFjZShbXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1ZXN0RXJyb3JQcm9taXNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0bmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNwb25zZS5vbmNlKCdlbmQnLCByZXNvbHZlKSlcblx0XHRcdFx0XHRcdFx0XHRdKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXF1ZXN0RXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGJvZHkgPSBhd2FpdCBib2R5UHJvbWlzZTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FjaGVQb2xpY3k6IHJlc3BvbnNlLmNhY2hlUG9saWN5LnRvT2JqZWN0KCksXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IHJlc3BvbnNlLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1c0NvZGU6IHJlc3BvbnNlLmZyb21DYWNoZSA/IHJldmFsaWRhdGUuc3RhdHVzQ29kZSA6IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRib2R5XG5cdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHRcdGxldCB0dGwgPSBvcHRzLnN0cmljdFR0bCA/IHJlc3BvbnNlLmNhY2hlUG9saWN5LnRpbWVUb0xpdmUoKSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0cy5tYXhUdGwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHR0bCA9IHR0bCA/IE1hdGgubWluKHR0bCwgb3B0cy5tYXhUdGwpIDogb3B0cy5tYXhUdGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSwgdHRsKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRlZS5lbWl0KCdlcnJvcicsIG5ldyBDYWNoZWFibGVSZXF1ZXN0LkNhY2hlRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSkoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG9wdHMuY2FjaGUgJiYgcmV2YWxpZGF0ZSkge1xuXHRcdFx0XHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmNhY2hlLmRlbGV0ZShrZXkpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGVlLmVtaXQoJ2Vycm9yJywgbmV3IENhY2hlYWJsZVJlcXVlc3QuQ2FjaGVFcnJvcihlcnJvcikpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGVlLmVtaXQoJ3Jlc3BvbnNlJywgY2xvbmVkUmVzcG9uc2UgfHwgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGNiKGNsb25lZFJlc3BvbnNlIHx8IHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXEgPSByZXF1ZXN0KG9wdHMsIGhhbmRsZXIpO1xuXHRcdFx0XHRcdHJlcS5vbmNlKCdlcnJvcicsIHJlcXVlc3RFcnJvckNhbGxiYWNrKTtcblx0XHRcdFx0XHRyZXEub25jZSgnYWJvcnQnLCByZXF1ZXN0RXJyb3JDYWxsYmFjayk7XG5cdFx0XHRcdFx0ZWUuZW1pdCgncmVxdWVzdCcsIHJlcSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0ZWUuZW1pdCgnZXJyb3InLCBuZXcgQ2FjaGVhYmxlUmVxdWVzdC5SZXF1ZXN0RXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgZ2V0ID0gYXN5bmMgb3B0cyA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHRcdFx0XHRjb25zdCBjYWNoZUVudHJ5ID0gb3B0cy5jYWNoZSA/IGF3YWl0IHRoaXMuY2FjaGUuZ2V0KGtleSkgOiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWNoZUVudHJ5ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1ha2VSZXF1ZXN0KG9wdHMpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHBvbGljeSA9IENhY2hlUG9saWN5LmZyb21PYmplY3QoY2FjaGVFbnRyeS5jYWNoZVBvbGljeSk7XG5cdFx0XHRcdFx0aWYgKHBvbGljeS5zYXRpc2ZpZXNXaXRob3V0UmV2YWxpZGF0aW9uKG9wdHMpICYmICFvcHRzLmZvcmNlUmVmcmVzaCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaGVhZGVycyA9IHBvbGljeS5yZXNwb25zZUhlYWRlcnMoKTtcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGNhY2hlRW50cnkuc3RhdHVzQ29kZSwgaGVhZGVycywgY2FjaGVFbnRyeS5ib2R5LCBjYWNoZUVudHJ5LnVybCk7XG5cdFx0XHRcdFx0XHRyZXNwb25zZS5jYWNoZVBvbGljeSA9IHBvbGljeTtcblx0XHRcdFx0XHRcdHJlc3BvbnNlLmZyb21DYWNoZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdGVlLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRjYihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldmFsaWRhdGUgPSBjYWNoZUVudHJ5O1xuXHRcdFx0XHRcdFx0b3B0cy5oZWFkZXJzID0gcG9saWN5LnJldmFsaWRhdGlvbkhlYWRlcnMob3B0cyk7XG5cdFx0XHRcdFx0XHRtYWtlUmVxdWVzdChvcHRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29uc3QgZXJyb3JIYW5kbGVyID0gZXJyb3IgPT4gZWUuZW1pdCgnZXJyb3InLCBuZXcgQ2FjaGVhYmxlUmVxdWVzdC5DYWNoZUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdHRoaXMuY2FjaGUub25jZSgnZXJyb3InLCBlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRlZS5vbigncmVzcG9uc2UnLCAoKSA9PiB0aGlzLmNhY2hlLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9ySGFuZGxlcikpO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgZ2V0KG9wdHMpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGlmIChvcHRzLmF1dG9tYXRpY0ZhaWxvdmVyICYmICFtYWRlUmVxdWVzdCkge1xuXHRcdFx0XHRcdFx0bWFrZVJlcXVlc3Qob3B0cyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWUuZW1pdCgnZXJyb3InLCBuZXcgQ2FjaGVhYmxlUmVxdWVzdC5DYWNoZUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cblx0XHRcdHJldHVybiBlZTtcblx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVybE9iamVjdFRvUmVxdWVzdE9wdGlvbnModXJsKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7IC4uLnVybCB9O1xuXHRvcHRpb25zLnBhdGggPSBgJHt1cmwucGF0aG5hbWUgfHwgJy8nfSR7dXJsLnNlYXJjaCB8fCAnJ31gO1xuXHRkZWxldGUgb3B0aW9ucy5wYXRobmFtZTtcblx0ZGVsZXRlIG9wdGlvbnMuc2VhcmNoO1xuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVXJsT2JqZWN0KHVybCkge1xuXHQvLyBJZiB1cmwgd2FzIHBhcnNlZCBieSB1cmwucGFyc2Ugb3IgbmV3IFVSTDpcblx0Ly8gLSBob3N0bmFtZSB3aWxsIGJlIHNldFxuXHQvLyAtIGhvc3Qgd2lsbCBiZSBob3N0bmFtZVs6cG9ydF1cblx0Ly8gLSBwb3J0IHdpbGwgYmUgc2V0IGlmIGl0IHdhcyBleHBsaWNpdCBpbiB0aGUgcGFyc2VkIHN0cmluZ1xuXHQvLyBPdGhlcndpc2UsIHVybCB3YXMgZnJvbSByZXF1ZXN0IG9wdGlvbnM6XG5cdC8vIC0gaG9zdG5hbWUgb3IgaG9zdCBtYXkgYmUgc2V0XG5cdC8vIC0gaG9zdCBzaGFsbCBub3QgaGF2ZSBwb3J0IGVuY29kZWRcblx0cmV0dXJuIHtcblx0XHRwcm90b2NvbDogdXJsLnByb3RvY29sLFxuXHRcdGF1dGg6IHVybC5hdXRoLFxuXHRcdGhvc3RuYW1lOiB1cmwuaG9zdG5hbWUgfHwgdXJsLmhvc3QgfHwgJ2xvY2FsaG9zdCcsXG5cdFx0cG9ydDogdXJsLnBvcnQsXG5cdFx0cGF0aG5hbWU6IHVybC5wYXRobmFtZSxcblx0XHRzZWFyY2g6IHVybC5zZWFyY2hcblx0fTtcbn1cblxuQ2FjaGVhYmxlUmVxdWVzdC5SZXF1ZXN0RXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IoZXJyb3IpIHtcblx0XHRzdXBlcihlcnJvci5tZXNzYWdlKTtcblx0XHR0aGlzLm5hbWUgPSAnUmVxdWVzdEVycm9yJztcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGVycm9yKTtcblx0fVxufTtcblxuQ2FjaGVhYmxlUmVxdWVzdC5DYWNoZUVycm9yID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKGVycm9yKSB7XG5cdFx0c3VwZXIoZXJyb3IubWVzc2FnZSk7XG5cdFx0dGhpcy5uYW1lID0gJ0NhY2hlRXJyb3InO1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZXJyb3IpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhY2hlYWJsZVJlcXVlc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhc3NUaHJvdWdoID0gcmVxdWlyZSgnc3RyZWFtJykuUGFzc1Rocm91Z2g7XG5jb25zdCBtaW1pY1Jlc3BvbnNlID0gcmVxdWlyZSgnbWltaWMtcmVzcG9uc2UnKTtcblxuY29uc3QgY2xvbmVSZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcblx0aWYgKCEocmVzcG9uc2UgJiYgcmVzcG9uc2UucGlwZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXJhbWV0ZXIgYHJlc3BvbnNlYCBtdXN0IGJlIGEgcmVzcG9uc2Ugc3RyZWFtLicpO1xuXHR9XG5cblx0Y29uc3QgY2xvbmUgPSBuZXcgUGFzc1Rocm91Z2goKTtcblx0bWltaWNSZXNwb25zZShyZXNwb25zZSwgY2xvbmUpO1xuXG5cdHJldHVybiByZXNwb25zZS5waXBlKGNsb25lKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZXNwb25zZTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtUcmFuc2Zvcm0sIFBhc3NUaHJvdWdofSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3QgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcbmNvbnN0IG1pbWljUmVzcG9uc2UgPSByZXF1aXJlKCdtaW1pYy1yZXNwb25zZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3BvbnNlID0+IHtcblx0Y29uc3QgY29udGVudEVuY29kaW5nID0gKHJlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXSB8fCAnJykudG9Mb3dlckNhc2UoKTtcblxuXHRpZiAoIVsnZ3ppcCcsICdkZWZsYXRlJywgJ2JyJ10uaW5jbHVkZXMoY29udGVudEVuY29kaW5nKSkge1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fVxuXG5cdC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMTIuXG5cdGNvbnN0IGlzQnJvdGxpID0gY29udGVudEVuY29kaW5nID09PSAnYnInO1xuXHRpZiAoaXNCcm90bGkgJiYgdHlwZW9mIHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcyAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJlc3BvbnNlLmRlc3Ryb3kobmV3IEVycm9yKCdCcm90bGkgaXMgbm90IHN1cHBvcnRlZCBvbiBOb2RlLmpzIDwgMTInKSk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9XG5cblx0bGV0IGlzRW1wdHkgPSB0cnVlO1xuXG5cdGNvbnN0IGNoZWNrZXIgPSBuZXcgVHJhbnNmb3JtKHtcblx0XHR0cmFuc2Zvcm0oZGF0YSwgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuXHRcdFx0aXNFbXB0eSA9IGZhbHNlO1xuXG5cdFx0XHRjYWxsYmFjayhudWxsLCBkYXRhKTtcblx0XHR9LFxuXG5cdFx0Zmx1c2goY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25zdCBmaW5hbFN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCh7XG5cdFx0YXV0b0Rlc3Ryb3k6IGZhbHNlLFxuXHRcdGRlc3Ryb3koZXJyb3IsIGNhbGxiYWNrKSB7XG5cdFx0XHRyZXNwb25zZS5kZXN0cm95KCk7XG5cblx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IGRlY29tcHJlc3NTdHJlYW0gPSBpc0Jyb3RsaSA/IHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcygpIDogemxpYi5jcmVhdGVVbnppcCgpO1xuXG5cdGRlY29tcHJlc3NTdHJlYW0ub25jZSgnZXJyb3InLCBlcnJvciA9PiB7XG5cdFx0aWYgKGlzRW1wdHkgJiYgIXJlc3BvbnNlLnJlYWRhYmxlKSB7XG5cdFx0XHRmaW5hbFN0cmVhbS5lbmQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmaW5hbFN0cmVhbS5kZXN0cm95KGVycm9yKTtcblx0fSk7XG5cblx0bWltaWNSZXNwb25zZShyZXNwb25zZSwgZmluYWxTdHJlYW0pO1xuXHRyZXNwb25zZS5waXBlKGNoZWNrZXIpLnBpcGUoZGVjb21wcmVzc1N0cmVhbSkucGlwZShmaW5hbFN0cmVhbSk7XG5cblx0cmV0dXJuIGZpbmFsU3RyZWFtO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gV2UgZGVmaW5lIHRoZXNlIG1hbnVhbGx5IHRvIGVuc3VyZSB0aGV5J3JlIGFsd2F5cyBjb3BpZWRcbi8vIGV2ZW4gaWYgdGhleSB3b3VsZCBtb3ZlIHVwIHRoZSBwcm90b3R5cGUgY2hhaW5cbi8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfY2xhc3NfaHR0cF9pbmNvbWluZ21lc3NhZ2VcbmNvbnN0IGtub3duUHJvcGVydGllcyA9IFtcblx0J2Fib3J0ZWQnLFxuXHQnY29tcGxldGUnLFxuXHQnaGVhZGVycycsXG5cdCdodHRwVmVyc2lvbicsXG5cdCdodHRwVmVyc2lvbk1pbm9yJyxcblx0J2h0dHBWZXJzaW9uTWFqb3InLFxuXHQnbWV0aG9kJyxcblx0J3Jhd0hlYWRlcnMnLFxuXHQncmF3VHJhaWxlcnMnLFxuXHQnc2V0VGltZW91dCcsXG5cdCdzb2NrZXQnLFxuXHQnc3RhdHVzQ29kZScsXG5cdCdzdGF0dXNNZXNzYWdlJyxcblx0J3RyYWlsZXJzJyxcblx0J3VybCdcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZyb21TdHJlYW0sIHRvU3RyZWFtKSA9PiB7XG5cdGlmICh0b1N0cmVhbS5fcmVhZGFibGVTdGF0ZS5hdXRvRGVzdHJveSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIHNlY29uZCBzdHJlYW0gbXVzdCBoYXZlIHRoZSBgYXV0b0Rlc3Ryb3lgIG9wdGlvbiBzZXQgdG8gYGZhbHNlYCcpO1xuXHR9XG5cblx0Y29uc3QgZnJvbVByb3BlcnRpZXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGZyb21TdHJlYW0pLmNvbmNhdChrbm93blByb3BlcnRpZXMpKTtcblxuXHRjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cblx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBmcm9tUHJvcGVydGllcykge1xuXHRcdC8vIERvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBwcm9wZXJ0aWVzLlxuXHRcdGlmIChwcm9wZXJ0eSBpbiB0b1N0cmVhbSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllc1twcm9wZXJ0eV0gPSB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZnJvbVN0cmVhbVtwcm9wZXJ0eV07XG5cdFx0XHRcdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cblx0XHRcdFx0cmV0dXJuIGlzRnVuY3Rpb24gPyB2YWx1ZS5iaW5kKGZyb21TdHJlYW0pIDogdmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdGZyb21TdHJlYW1bcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXModG9TdHJlYW0sIHByb3BlcnRpZXMpO1xuXG5cdGZyb21TdHJlYW0ub25jZSgnYWJvcnRlZCcsICgpID0+IHtcblx0XHR0b1N0cmVhbS5kZXN0cm95KCk7XG5cblx0XHR0b1N0cmVhbS5lbWl0KCdhYm9ydGVkJyk7XG5cdH0pO1xuXG5cdGZyb21TdHJlYW0ub25jZSgnY2xvc2UnLCAoKSA9PiB7XG5cdFx0aWYgKGZyb21TdHJlYW0uY29tcGxldGUpIHtcblx0XHRcdGlmICh0b1N0cmVhbS5yZWFkYWJsZSkge1xuXHRcdFx0XHR0b1N0cmVhbS5vbmNlKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0dG9TdHJlYW0uZW1pdCgnY2xvc2UnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b1N0cmVhbS5lbWl0KCdjbG9zZScpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b1N0cmVhbS5lbWl0KCdjbG9zZScpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHRvU3RyZWFtO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNUTFNTb2NrZXQoc29ja2V0KSB7XG4gICAgcmV0dXJuIHNvY2tldC5lbmNyeXB0ZWQ7XG59XG5jb25zdCBkZWZlclRvQ29ubmVjdCA9IChzb2NrZXQsIGZuKSA9PiB7XG4gICAgbGV0IGxpc3RlbmVycztcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3QgPSBmbjtcbiAgICAgICAgbGlzdGVuZXJzID0geyBjb25uZWN0IH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsaXN0ZW5lcnMgPSBmbjtcbiAgICB9XG4gICAgY29uc3QgaGFzQ29ubmVjdExpc3RlbmVyID0gdHlwZW9mIGxpc3RlbmVycy5jb25uZWN0ID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IGhhc1NlY3VyZUNvbm5lY3RMaXN0ZW5lciA9IHR5cGVvZiBsaXN0ZW5lcnMuc2VjdXJlQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBoYXNDbG9zZUxpc3RlbmVyID0gdHlwZW9mIGxpc3RlbmVycy5jbG9zZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBvbkNvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoYXNDb25uZWN0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVExTU29ja2V0KHNvY2tldCkgJiYgaGFzU2VjdXJlQ29ubmVjdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBpZiAoc29ja2V0LmF1dGhvcml6ZWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc2VjdXJlQ29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXNvY2tldC5hdXRob3JpemF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQub25jZSgnc2VjdXJlQ29ubmVjdCcsIGxpc3RlbmVycy5zZWN1cmVDb25uZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ2xvc2VMaXN0ZW5lcikge1xuICAgICAgICAgICAgc29ja2V0Lm9uY2UoJ2Nsb3NlJywgbGlzdGVuZXJzLmNsb3NlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHNvY2tldC53cml0YWJsZSAmJiAhc29ja2V0LmNvbm5lY3RpbmcpIHtcbiAgICAgICAgb25Db25uZWN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNvY2tldC5jb25uZWN0aW5nKSB7XG4gICAgICAgIHNvY2tldC5vbmNlKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc29ja2V0LmRlc3Ryb3llZCAmJiBoYXNDbG9zZUxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5jbG9zZShzb2NrZXQuX2hhZEVycm9yKTtcbiAgICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmZXJUb0Nvbm5lY3Q7XG4vLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxubW9kdWxlLmV4cG9ydHMgPSBkZWZlclRvQ29ubmVjdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBkZWZlclRvQ29ubmVjdDtcbiIsInZhciBvbmNlID0gcmVxdWlyZSgnb25jZScpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbnZhciBpc1JlcXVlc3QgPSBmdW5jdGlvbihzdHJlYW0pIHtcblx0cmV0dXJuIHN0cmVhbS5zZXRIZWFkZXIgJiYgdHlwZW9mIHN0cmVhbS5hYm9ydCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBpc0NoaWxkUHJvY2VzcyA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtLnN0ZGlvICYmIEFycmF5LmlzQXJyYXkoc3RyZWFtLnN0ZGlvKSAmJiBzdHJlYW0uc3RkaW8ubGVuZ3RoID09PSAzXG59O1xuXG52YXIgZW9zID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRzLCBjYWxsYmFjaykge1xuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHJldHVybiBlb3Moc3RyZWFtLCBudWxsLCBvcHRzKTtcblx0aWYgKCFvcHRzKSBvcHRzID0ge307XG5cblx0Y2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuXG5cdHZhciB3cyA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcblx0dmFyIHJzID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuXHR2YXIgcmVhZGFibGUgPSBvcHRzLnJlYWRhYmxlIHx8IChvcHRzLnJlYWRhYmxlICE9PSBmYWxzZSAmJiBzdHJlYW0ucmVhZGFibGUpO1xuXHR2YXIgd3JpdGFibGUgPSBvcHRzLndyaXRhYmxlIHx8IChvcHRzLndyaXRhYmxlICE9PSBmYWxzZSAmJiBzdHJlYW0ud3JpdGFibGUpO1xuXHR2YXIgY2FuY2VsbGVkID0gZmFsc2U7XG5cblx0dmFyIG9ubGVnYWN5ZmluaXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCFzdHJlYW0ud3JpdGFibGUpIG9uZmluaXNoKCk7XG5cdH07XG5cblx0dmFyIG9uZmluaXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0d3JpdGFibGUgPSBmYWxzZTtcblx0XHRpZiAoIXJlYWRhYmxlKSBjYWxsYmFjay5jYWxsKHN0cmVhbSk7XG5cdH07XG5cblx0dmFyIG9uZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0cmVhZGFibGUgPSBmYWxzZTtcblx0XHRpZiAoIXdyaXRhYmxlKSBjYWxsYmFjay5jYWxsKHN0cmVhbSk7XG5cdH07XG5cblx0dmFyIG9uZXhpdCA9IGZ1bmN0aW9uKGV4aXRDb2RlKSB7XG5cdFx0Y2FsbGJhY2suY2FsbChzdHJlYW0sIGV4aXRDb2RlID8gbmV3IEVycm9yKCdleGl0ZWQgd2l0aCBlcnJvciBjb2RlOiAnICsgZXhpdENvZGUpIDogbnVsbCk7XG5cdH07XG5cblx0dmFyIG9uZXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcblx0XHRjYWxsYmFjay5jYWxsKHN0cmVhbSwgZXJyKTtcblx0fTtcblxuXHR2YXIgb25jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHByb2Nlc3MubmV4dFRpY2sob25jbG9zZW5leHR0aWNrKTtcblx0fTtcblxuXHR2YXIgb25jbG9zZW5leHR0aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKGNhbmNlbGxlZCkgcmV0dXJuO1xuXHRcdGlmIChyZWFkYWJsZSAmJiAhKHJzICYmIChycy5lbmRlZCAmJiAhcnMuZGVzdHJveWVkKSkpIHJldHVybiBjYWxsYmFjay5jYWxsKHN0cmVhbSwgbmV3IEVycm9yKCdwcmVtYXR1cmUgY2xvc2UnKSk7XG5cdFx0aWYgKHdyaXRhYmxlICYmICEod3MgJiYgKHdzLmVuZGVkICYmICF3cy5kZXN0cm95ZWQpKSkgcmV0dXJuIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBuZXcgRXJyb3IoJ3ByZW1hdHVyZSBjbG9zZScpKTtcblx0fTtcblxuXHR2YXIgb25yZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0c3RyZWFtLnJlcS5vbignZmluaXNoJywgb25maW5pc2gpO1xuXHR9O1xuXG5cdGlmIChpc1JlcXVlc3Qoc3RyZWFtKSkge1xuXHRcdHN0cmVhbS5vbignY29tcGxldGUnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLm9uKCdhYm9ydCcsIG9uY2xvc2UpO1xuXHRcdGlmIChzdHJlYW0ucmVxKSBvbnJlcXVlc3QoKTtcblx0XHRlbHNlIHN0cmVhbS5vbigncmVxdWVzdCcsIG9ucmVxdWVzdCk7XG5cdH0gZWxzZSBpZiAod3JpdGFibGUgJiYgIXdzKSB7IC8vIGxlZ2FjeSBzdHJlYW1zXG5cdFx0c3RyZWFtLm9uKCdlbmQnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdFx0c3RyZWFtLm9uKCdjbG9zZScsIG9ubGVnYWN5ZmluaXNoKTtcblx0fVxuXG5cdGlmIChpc0NoaWxkUHJvY2VzcyhzdHJlYW0pKSBzdHJlYW0ub24oJ2V4aXQnLCBvbmV4aXQpO1xuXG5cdHN0cmVhbS5vbignZW5kJywgb25lbmQpO1xuXHRzdHJlYW0ub24oJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0aWYgKG9wdHMuZXJyb3IgIT09IGZhbHNlKSBzdHJlYW0ub24oJ2Vycm9yJywgb25lcnJvcik7XG5cdHN0cmVhbS5vbignY2xvc2UnLCBvbmNsb3NlKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0Y2FuY2VsbGVkID0gdHJ1ZTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2NvbXBsZXRlJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignYWJvcnQnLCBvbmNsb3NlKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ3JlcXVlc3QnLCBvbnJlcXVlc3QpO1xuXHRcdGlmIChzdHJlYW0ucmVxKSBzdHJlYW0ucmVxLnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2V4aXQnLCBvbmV4aXQpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG5cdH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVvcztcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtQYXNzVGhyb3VnaDogUGFzc1Rocm91Z2hTdHJlYW19ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucyA9PiB7XG5cdG9wdGlvbnMgPSB7Li4ub3B0aW9uc307XG5cblx0Y29uc3Qge2FycmF5fSA9IG9wdGlvbnM7XG5cdGxldCB7ZW5jb2Rpbmd9ID0gb3B0aW9ucztcblx0Y29uc3QgaXNCdWZmZXIgPSBlbmNvZGluZyA9PT0gJ2J1ZmZlcic7XG5cdGxldCBvYmplY3RNb2RlID0gZmFsc2U7XG5cblx0aWYgKGFycmF5KSB7XG5cdFx0b2JqZWN0TW9kZSA9ICEoZW5jb2RpbmcgfHwgaXNCdWZmZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGVuY29kaW5nID0gZW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXHR9XG5cblx0aWYgKGlzQnVmZmVyKSB7XG5cdFx0ZW5jb2RpbmcgPSBudWxsO1xuXHR9XG5cblx0Y29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoU3RyZWFtKHtvYmplY3RNb2RlfSk7XG5cblx0aWYgKGVuY29kaW5nKSB7XG5cdFx0c3RyZWFtLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblx0fVxuXG5cdGxldCBsZW5ndGggPSAwO1xuXHRjb25zdCBjaHVua3MgPSBbXTtcblxuXHRzdHJlYW0ub24oJ2RhdGEnLCBjaHVuayA9PiB7XG5cdFx0Y2h1bmtzLnB1c2goY2h1bmspO1xuXG5cdFx0aWYgKG9iamVjdE1vZGUpIHtcblx0XHRcdGxlbmd0aCA9IGNodW5rcy5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxlbmd0aCArPSBjaHVuay5sZW5ndGg7XG5cdFx0fVxuXHR9KTtcblxuXHRzdHJlYW0uZ2V0QnVmZmVyZWRWYWx1ZSA9ICgpID0+IHtcblx0XHRpZiAoYXJyYXkpIHtcblx0XHRcdHJldHVybiBjaHVua3M7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlzQnVmZmVyID8gQnVmZmVyLmNvbmNhdChjaHVua3MsIGxlbmd0aCkgOiBjaHVua3Muam9pbignJyk7XG5cdH07XG5cblx0c3RyZWFtLmdldEJ1ZmZlcmVkTGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG5cdHJldHVybiBzdHJlYW07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge2NvbnN0YW50czogQnVmZmVyQ29uc3RhbnRzfSA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuY29uc3QgcHVtcCA9IHJlcXVpcmUoJ3B1bXAnKTtcbmNvbnN0IGJ1ZmZlclN0cmVhbSA9IHJlcXVpcmUoJy4vYnVmZmVyLXN0cmVhbScpO1xuXG5jbGFzcyBNYXhCdWZmZXJFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ21heEJ1ZmZlciBleGNlZWRlZCcpO1xuXHRcdHRoaXMubmFtZSA9ICdNYXhCdWZmZXJFcnJvcic7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZWFtKGlucHV0U3RyZWFtLCBvcHRpb25zKSB7XG5cdGlmICghaW5wdXRTdHJlYW0pIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdFeHBlY3RlZCBhIHN0cmVhbScpKTtcblx0fVxuXG5cdG9wdGlvbnMgPSB7XG5cdFx0bWF4QnVmZmVyOiBJbmZpbml0eSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0Y29uc3Qge21heEJ1ZmZlcn0gPSBvcHRpb25zO1xuXG5cdGxldCBzdHJlYW07XG5cdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRjb25zdCByZWplY3RQcm9taXNlID0gZXJyb3IgPT4ge1xuXHRcdFx0Ly8gRG9uJ3QgcmV0cmlldmUgYW4gb3ZlcnNpemVkIGJ1ZmZlci5cblx0XHRcdGlmIChlcnJvciAmJiBzdHJlYW0uZ2V0QnVmZmVyZWRMZW5ndGgoKSA8PSBCdWZmZXJDb25zdGFudHMuTUFYX0xFTkdUSCkge1xuXHRcdFx0XHRlcnJvci5idWZmZXJlZERhdGEgPSBzdHJlYW0uZ2V0QnVmZmVyZWRWYWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdH07XG5cblx0XHRzdHJlYW0gPSBwdW1wKGlucHV0U3RyZWFtLCBidWZmZXJTdHJlYW0ob3B0aW9ucyksIGVycm9yID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRyZWplY3RQcm9taXNlKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSk7XG5cblx0XHRzdHJlYW0ub24oJ2RhdGEnLCAoKSA9PiB7XG5cdFx0XHRpZiAoc3RyZWFtLmdldEJ1ZmZlcmVkTGVuZ3RoKCkgPiBtYXhCdWZmZXIpIHtcblx0XHRcdFx0cmVqZWN0UHJvbWlzZShuZXcgTWF4QnVmZmVyRXJyb3IoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBzdHJlYW0uZ2V0QnVmZmVyZWRWYWx1ZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN0cmVhbTtcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0U3RyZWFtO1xubW9kdWxlLmV4cG9ydHMuYnVmZmVyID0gKHN0cmVhbSwgb3B0aW9ucykgPT4gZ2V0U3RyZWFtKHN0cmVhbSwgey4uLm9wdGlvbnMsIGVuY29kaW5nOiAnYnVmZmVyJ30pO1xubW9kdWxlLmV4cG9ydHMuYXJyYXkgPSAoc3RyZWFtLCBvcHRpb25zKSA9PiBnZXRTdHJlYW0oc3RyZWFtLCB7Li4ub3B0aW9ucywgYXJyYXk6IHRydWV9KTtcbm1vZHVsZS5leHBvcnRzLk1heEJ1ZmZlckVycm9yID0gTWF4QnVmZmVyRXJyb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmZ1bmN0aW9uIGNyZWF0ZVJlamVjdGlvbihlcnJvciwgLi4uYmVmb3JlRXJyb3JHcm91cHMpIHtcbiAgICBjb25zdCBwcm9taXNlID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgdHlwZXNfMS5SZXF1ZXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBob29rcyBvZiBiZWZvcmVFcnJvckdyb3Vwcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaG9vayBvZiBob29rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBhd2FpdCBob29rKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcl8pIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGVycm9yXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KSgpO1xuICAgIGNvbnN0IHJldHVyblByb21pc2UgPSAoKSA9PiBwcm9taXNlO1xuICAgIHByb21pc2UuanNvbiA9IHJldHVyblByb21pc2U7XG4gICAgcHJvbWlzZS50ZXh0ID0gcmV0dXJuUHJvbWlzZTtcbiAgICBwcm9taXNlLmJ1ZmZlciA9IHJldHVyblByb21pc2U7XG4gICAgcHJvbWlzZS5vbiA9IHJldHVyblByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWplY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuY29uc3QgaXNfMSA9IHJlcXVpcmUoXCJAc2luZHJlc29yaHVzL2lzXCIpO1xuY29uc3QgUENhbmNlbGFibGUgPSByZXF1aXJlKFwicC1jYW5jZWxhYmxlXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuY29uc3QgcGFyc2VfYm9keV8xID0gcmVxdWlyZShcIi4vcGFyc2UtYm9keVwiKTtcbmNvbnN0IGNvcmVfMSA9IHJlcXVpcmUoXCIuLi9jb3JlXCIpO1xuY29uc3QgcHJveHlfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi4vY29yZS91dGlscy9wcm94eS1ldmVudHNcIik7XG5jb25zdCBnZXRfYnVmZmVyXzEgPSByZXF1aXJlKFwiLi4vY29yZS91dGlscy9nZXQtYnVmZmVyXCIpO1xuY29uc3QgaXNfcmVzcG9uc2Vfb2tfMSA9IHJlcXVpcmUoXCIuLi9jb3JlL3V0aWxzL2lzLXJlc3BvbnNlLW9rXCIpO1xuY29uc3QgcHJveGllZFJlcXVlc3RFdmVudHMgPSBbXG4gICAgJ3JlcXVlc3QnLFxuICAgICdyZXNwb25zZScsXG4gICAgJ3JlZGlyZWN0JyxcbiAgICAndXBsb2FkUHJvZ3Jlc3MnLFxuICAgICdkb3dubG9hZFByb2dyZXNzJ1xuXTtcbmZ1bmN0aW9uIGFzUHJvbWlzZShub3JtYWxpemVkT3B0aW9ucykge1xuICAgIGxldCBnbG9iYWxSZXF1ZXN0O1xuICAgIGxldCBnbG9iYWxSZXNwb25zZTtcbiAgICBjb25zdCBlbWl0dGVyID0gbmV3IGV2ZW50c18xLkV2ZW50RW1pdHRlcigpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUENhbmNlbGFibGUoKHJlc29sdmUsIHJlamVjdCwgb25DYW5jZWwpID0+IHtcbiAgICAgICAgY29uc3QgbWFrZVJlcXVlc3QgPSAocmV0cnlDb3VudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBjb3JlXzEuZGVmYXVsdCh1bmRlZmluZWQsIG5vcm1hbGl6ZWRPcHRpb25zKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmV0cnlDb3VudCA9IHJldHJ5Q291bnQ7XG4gICAgICAgICAgICByZXF1ZXN0Ll9ub1BpcGUgPSB0cnVlO1xuICAgICAgICAgICAgb25DYW5jZWwoKCkgPT4gcmVxdWVzdC5kZXN0cm95KCkpO1xuICAgICAgICAgICAgb25DYW5jZWwuc2hvdWxkUmVqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICBvbkNhbmNlbCgoKSA9PiByZWplY3QobmV3IHR5cGVzXzEuQ2FuY2VsRXJyb3IocmVxdWVzdCkpKTtcbiAgICAgICAgICAgIGdsb2JhbFJlcXVlc3QgPSByZXF1ZXN0O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmNlKCdyZXNwb25zZScsIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5yZXRyeUNvdW50ID0gcmV0cnlDb3VudDtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVxdWVzdC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbGVkIHdoaWxlIGRvd25sb2FkaW5nIC0gd2lsbCB0aHJvdyBhIGBDYW5jZWxFcnJvcmAgb3IgYFRpbWVvdXRFcnJvcmAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEb3dubG9hZCBib2R5XG4gICAgICAgICAgICAgICAgbGV0IHJhd0JvZHk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmF3Qm9keSA9IGF3YWl0IGdldF9idWZmZXJfMS5kZWZhdWx0KHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yYXdCb2R5ID0gcmF3Qm9keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBzYW1lIGVycm9yIGlzIGNhdWdodCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIHJlcXVlc3Qub25jZSgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Ll9pc0Fib3V0VG9FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIGJvZHlcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RW5jb2RpbmcgPSAoKF9hID0gcmVzcG9uc2UuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvbXByZXNzZWQgPSBbJ2d6aXAnLCAnZGVmbGF0ZScsICdiciddLmluY2x1ZGVzKGNvbnRlbnRFbmNvZGluZyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSByZXF1ZXN0O1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXByZXNzZWQgJiYgIW9wdGlvbnMuZGVjb21wcmVzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5ib2R5ID0gcmF3Qm9keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5ib2R5ID0gcGFyc2VfYm9keV8xLmRlZmF1bHQocmVzcG9uc2UsIG9wdGlvbnMucmVzcG9uc2VUeXBlLCBvcHRpb25zLnBhcnNlSnNvbiwgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayB0byBgdXRmOGBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmJvZHkgPSByYXdCb2R5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNfcmVzcG9uc2Vfb2tfMS5pc1Jlc3BvbnNlT2socmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5fYmVmb3JlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgaG9va10gb2Ygb3B0aW9ucy5ob29rcy5hZnRlclJlc3BvbnNlLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUUyBkb2Vzbid0IG5vdGljZSB0aGF0IENhbmNlbGFibGVSZXF1ZXN0IGlzIGEgUHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgaG9vayhyZXNwb25zZSwgYXN5bmMgKHVwZGF0ZWRPcHRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZWRPcHRpb25zID0gY29yZV8xLmRlZmF1bHQubm9ybWFsaXplQXJndW1lbnRzKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi51cGRhdGVkT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZURlbGF5OiAoKSA9PiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93SHR0cEVycm9yczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVCb2R5T25seTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGZ1cnRoZXIgaG9va3MgZm9yIHRoYXQgcmVxdWVzdCwgYmVjYXVzZSB3ZSdsbCBjYWxsIHRoZW0gYW55d2F5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBsb29wIGNvbnRpbnVlcy4gV2UgZG9uJ3Qgd2FudCBkdXBsaWNhdGVzIChhc1Byb21pc2UgcmVjdXJzaW9uKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlZE9wdGlvbnMuaG9va3MuYWZ0ZXJSZXNwb25zZSA9IHR5cGVkT3B0aW9ucy5ob29rcy5hZnRlclJlc3BvbnNlLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvb2sgb2YgdHlwZWRPcHRpb25zLmhvb2tzLmJlZm9yZVJldHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGhvb2sodHlwZWRPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGFzUHJvbWlzZSh0eXBlZE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuX2JlZm9yZUVycm9yKG5ldyB0eXBlc18xLlJlcXVlc3RFcnJvcihlcnJvci5tZXNzYWdlLCBlcnJvciwgcmVxdWVzdCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaXNfcmVzcG9uc2Vfb2tfMS5pc1Jlc3BvbnNlT2socmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuX2JlZm9yZUVycm9yKG5ldyB0eXBlc18xLkhUVFBFcnJvcihyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdsb2JhbFJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0Lm9wdGlvbnMucmVzb2x2ZUJvZHlPbmx5ID8gcmVzcG9uc2UuYm9keSA6IHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlLmlzQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgdHlwZXNfMS5IVFRQRXJyb3IgJiYgIW9wdGlvbnMudGhyb3dIdHRwRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3Qub3B0aW9ucy5yZXNvbHZlQm9keU9ubHkgPyByZXNwb25zZS5ib2R5IDogcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmNlKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNCb2R5ID0gcmVxdWVzdC5vcHRpb25zLmJvZHk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uY2UoJ3JldHJ5JywgKG5ld1JldHJ5Q291bnQsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNCb2R5ID09PSAoKF9hID0gZXJyb3IucmVxdWVzdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9wdGlvbnMuYm9keSkgJiYgaXNfMS5kZWZhdWx0Lm5vZGVTdHJlYW0oKF9iID0gZXJyb3IucmVxdWVzdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9wdGlvbnMuYm9keSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFrZVJlcXVlc3QobmV3UmV0cnlDb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb3h5X2V2ZW50c18xLmRlZmF1bHQocmVxdWVzdCwgZW1pdHRlciwgcHJveGllZFJlcXVlc3RFdmVudHMpO1xuICAgICAgICB9O1xuICAgICAgICBtYWtlUmVxdWVzdCgwKTtcbiAgICB9KTtcbiAgICBwcm9taXNlLm9uID0gKGV2ZW50LCBmbikgPT4ge1xuICAgICAgICBlbWl0dGVyLm9uKGV2ZW50LCBmbik7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG4gICAgY29uc3Qgc2hvcnRjdXQgPSAocmVzcG9uc2VUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy8gV2FpdCB1bnRpbCBkb3dubG9hZGluZyBoYXMgZW5kZWRcbiAgICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IGdsb2JhbFJlc3BvbnNlLnJlcXVlc3Q7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfYm9keV8xLmRlZmF1bHQoZ2xvYmFsUmVzcG9uc2UsIHJlc3BvbnNlVHlwZSwgb3B0aW9ucy5wYXJzZUpzb24sIG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgICAgICB9KSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhuZXdQcm9taXNlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhwcm9taXNlKSk7XG4gICAgICAgIHJldHVybiBuZXdQcm9taXNlO1xuICAgIH07XG4gICAgcHJvbWlzZS5qc29uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGhlYWRlcnMgfSA9IGdsb2JhbFJlcXVlc3Qub3B0aW9ucztcbiAgICAgICAgaWYgKCFnbG9iYWxSZXF1ZXN0LndyaXRhYmxlRmluaXNoZWQgJiYgaGVhZGVycy5hY2NlcHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycy5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNob3J0Y3V0KCdqc29uJyk7XG4gICAgfTtcbiAgICBwcm9taXNlLmJ1ZmZlciA9ICgpID0+IHNob3J0Y3V0KCdidWZmZXInKTtcbiAgICBwcm9taXNlLnRleHQgPSAoKSA9PiBzaG9ydGN1dCgndGV4dCcpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYXNQcm9taXNlO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaXNfMSA9IHJlcXVpcmUoXCJAc2luZHJlc29yaHVzL2lzXCIpO1xuY29uc3Qgbm9ybWFsaXplQXJndW1lbnRzID0gKG9wdGlvbnMsIGRlZmF1bHRzKSA9PiB7XG4gICAgaWYgKGlzXzEuZGVmYXVsdC5udWxsXyhvcHRpb25zLmVuY29kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUbyBnZXQgYSBCdWZmZXIsIHNldCBgb3B0aW9ucy5yZXNwb25zZVR5cGVgIHRvIGBidWZmZXJgIGluc3RlYWQnKTtcbiAgICB9XG4gICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQuc3RyaW5nLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQuYm9vbGVhbiwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMucmVzb2x2ZUJvZHlPbmx5KTtcbiAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5ib29sZWFuLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5tZXRob2RSZXdyaXRpbmcpO1xuICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0LmJvb2xlYW4sIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLmlzU3RyZWFtKTtcbiAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5zdHJpbmcsIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLnJlc3BvbnNlVHlwZSk7XG4gICAgLy8gYG9wdGlvbnMucmVzcG9uc2VUeXBlYFxuICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgIH1cbiAgICAvLyBgb3B0aW9ucy5yZXRyeWBcbiAgICBjb25zdCB7IHJldHJ5IH0gPSBvcHRpb25zO1xuICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICBvcHRpb25zLnJldHJ5ID0geyAuLi5kZWZhdWx0cy5yZXRyeSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5yZXRyeSA9IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZURlbGF5OiByZXRyeU9iamVjdCA9PiByZXRyeU9iamVjdC5jb21wdXRlZFZhbHVlLFxuICAgICAgICAgICAgbGltaXQ6IDAsXG4gICAgICAgICAgICBtZXRob2RzOiBbXSxcbiAgICAgICAgICAgIHN0YXR1c0NvZGVzOiBbXSxcbiAgICAgICAgICAgIGVycm9yQ29kZXM6IFtdLFxuICAgICAgICAgICAgbWF4UmV0cnlBZnRlcjogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc18xLmRlZmF1bHQub2JqZWN0KHJldHJ5KSkge1xuICAgICAgICBvcHRpb25zLnJldHJ5ID0ge1xuICAgICAgICAgICAgLi4ub3B0aW9ucy5yZXRyeSxcbiAgICAgICAgICAgIC4uLnJldHJ5XG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMucmV0cnkubWV0aG9kcyA9IFsuLi5uZXcgU2V0KG9wdGlvbnMucmV0cnkubWV0aG9kcy5tYXAobWV0aG9kID0+IG1ldGhvZC50b1VwcGVyQ2FzZSgpKSldO1xuICAgICAgICBvcHRpb25zLnJldHJ5LnN0YXR1c0NvZGVzID0gWy4uLm5ldyBTZXQob3B0aW9ucy5yZXRyeS5zdGF0dXNDb2RlcyldO1xuICAgICAgICBvcHRpb25zLnJldHJ5LmVycm9yQ29kZXMgPSBbLi4ubmV3IFNldChvcHRpb25zLnJldHJ5LmVycm9yQ29kZXMpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNfMS5kZWZhdWx0Lm51bWJlcihyZXRyeSkpIHtcbiAgICAgICAgb3B0aW9ucy5yZXRyeS5saW1pdCA9IHJldHJ5O1xuICAgIH1cbiAgICBpZiAoaXNfMS5kZWZhdWx0LnVuZGVmaW5lZChvcHRpb25zLnJldHJ5Lm1heFJldHJ5QWZ0ZXIpKSB7XG4gICAgICAgIG9wdGlvbnMucmV0cnkubWF4UmV0cnlBZnRlciA9IE1hdGgubWluKFxuICAgICAgICAvLyBUeXBlU2NyaXB0IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gaGFuZGxlIGAuZmlsdGVyKHggPT4gaXMubnVtYmVyKHgpKWAuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWZuLXJlZmVyZW5jZS1pbi1pdGVyYXRvclxuICAgICAgICAuLi5bb3B0aW9ucy50aW1lb3V0LnJlcXVlc3QsIG9wdGlvbnMudGltZW91dC5jb25uZWN0XS5maWx0ZXIoaXNfMS5kZWZhdWx0Lm51bWJlcikpO1xuICAgIH1cbiAgICAvLyBgb3B0aW9ucy5wYWdpbmF0aW9uYFxuICAgIGlmIChpc18xLmRlZmF1bHQub2JqZWN0KG9wdGlvbnMucGFnaW5hdGlvbikpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhZ2luYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdHMucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnBhZ2luYXRpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBwYWdpbmF0aW9uIH0gPSBvcHRpb25zO1xuICAgICAgICBpZiAoIWlzXzEuZGVmYXVsdC5mdW5jdGlvbl8ocGFnaW5hdGlvbi50cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BvcHRpb25zLnBhZ2luYXRpb24udHJhbnNmb3JtYCBtdXN0IGJlIGltcGxlbWVudGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc18xLmRlZmF1bHQuZnVuY3Rpb25fKHBhZ2luYXRpb24uc2hvdWxkQ29udGludWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BvcHRpb25zLnBhZ2luYXRpb24uc2hvdWxkQ29udGludWVgIG11c3QgYmUgaW1wbGVtZW50ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzXzEuZGVmYXVsdC5mdW5jdGlvbl8ocGFnaW5hdGlvbi5maWx0ZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgb3B0aW9ucy5wYWdpbmF0aW9uLmZpbHRlcmAgbXVzdCBiZSBpbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNfMS5kZWZhdWx0LmZ1bmN0aW9uXyhwYWdpbmF0aW9uLnBhZ2luYXRlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgb3B0aW9ucy5wYWdpbmF0aW9uLnBhZ2luYXRlYCBtdXN0IGJlIGltcGxlbWVudGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSlNPTiBtb2RlXG4gICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAnanNvbicgJiYgb3B0aW9ucy5oZWFkZXJzLmFjY2VwdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycy5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG5vcm1hbGl6ZUFyZ3VtZW50cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuY29uc3QgcGFyc2VCb2R5ID0gKHJlc3BvbnNlLCByZXNwb25zZVR5cGUsIHBhcnNlSnNvbiwgZW5jb2RpbmcpID0+IHtcbiAgICBjb25zdCB7IHJhd0JvZHkgfSA9IHJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJhd0JvZHkudG9TdHJpbmcoZW5jb2RpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJhd0JvZHkubGVuZ3RoID09PSAwID8gJycgOiBwYXJzZUpzb24ocmF3Qm9keS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2VUeXBlID09PSAnYnVmZmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIHJhd0JvZHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IHR5cGVzXzEuUGFyc2VFcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiBgVW5rbm93biBib2R5IHR5cGUgJyR7cmVzcG9uc2VUeXBlfSdgLFxuICAgICAgICAgICAgbmFtZTogJ0Vycm9yJ1xuICAgICAgICB9LCByZXNwb25zZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgdHlwZXNfMS5QYXJzZUVycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlQm9keTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNhbmNlbEVycm9yID0gZXhwb3J0cy5QYXJzZUVycm9yID0gdm9pZCAwO1xuY29uc3QgY29yZV8xID0gcmVxdWlyZShcIi4uL2NvcmVcIik7XG4vKipcbkFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHNlcnZlciByZXNwb25zZSBjb2RlIGlzIDJ4eCwgYW5kIHBhcnNpbmcgYm9keSBmYWlscy5cbkluY2x1ZGVzIGEgYHJlc3BvbnNlYCBwcm9wZXJ0eS5cbiovXG5jbGFzcyBQYXJzZUVycm9yIGV4dGVuZHMgY29yZV8xLlJlcXVlc3RFcnJvciB7XG4gICAgY29uc3RydWN0b3IoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gcmVzcG9uc2UucmVxdWVzdDtcbiAgICAgICAgc3VwZXIoYCR7ZXJyb3IubWVzc2FnZX0gaW4gXCIke29wdGlvbnMudXJsLnRvU3RyaW5nKCl9XCJgLCBlcnJvciwgcmVzcG9uc2UucmVxdWVzdCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdQYXJzZUVycm9yJztcbiAgICB9XG59XG5leHBvcnRzLlBhcnNlRXJyb3IgPSBQYXJzZUVycm9yO1xuLyoqXG5BbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiB0aGUgcmVxdWVzdCBpcyBhYm9ydGVkIHdpdGggYC5jYW5jZWwoKWAuXG4qL1xuY2xhc3MgQ2FuY2VsRXJyb3IgZXh0ZW5kcyBjb3JlXzEuUmVxdWVzdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0KSB7XG4gICAgICAgIHN1cGVyKCdQcm9taXNlIHdhcyBjYW5jZWxlZCcsIHt9LCByZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0NhbmNlbEVycm9yJztcbiAgICB9XG4gICAgZ2V0IGlzQ2FuY2VsZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2FuY2VsRXJyb3IgPSBDYW5jZWxFcnJvcjtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi4vY29yZVwiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0cnlBZnRlclN0YXR1c0NvZGVzID0gdm9pZCAwO1xuZXhwb3J0cy5yZXRyeUFmdGVyU3RhdHVzQ29kZXMgPSBuZXcgU2V0KFs0MTMsIDQyOSwgNTAzXSk7XG5jb25zdCBjYWxjdWxhdGVSZXRyeURlbGF5ID0gKHsgYXR0ZW1wdENvdW50LCByZXRyeU9wdGlvbnMsIGVycm9yLCByZXRyeUFmdGVyIH0pID0+IHtcbiAgICBpZiAoYXR0ZW1wdENvdW50ID4gcmV0cnlPcHRpb25zLmxpbWl0KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBoYXNNZXRob2QgPSByZXRyeU9wdGlvbnMubWV0aG9kcy5pbmNsdWRlcyhlcnJvci5vcHRpb25zLm1ldGhvZCk7XG4gICAgY29uc3QgaGFzRXJyb3JDb2RlID0gcmV0cnlPcHRpb25zLmVycm9yQ29kZXMuaW5jbHVkZXMoZXJyb3IuY29kZSk7XG4gICAgY29uc3QgaGFzU3RhdHVzQ29kZSA9IGVycm9yLnJlc3BvbnNlICYmIHJldHJ5T3B0aW9ucy5zdGF0dXNDb2Rlcy5pbmNsdWRlcyhlcnJvci5yZXNwb25zZS5zdGF0dXNDb2RlKTtcbiAgICBpZiAoIWhhc01ldGhvZCB8fCAoIWhhc0Vycm9yQ29kZSAmJiAhaGFzU3RhdHVzQ29kZSkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICBpZiAocmV0cnlBZnRlcikge1xuICAgICAgICAgICAgaWYgKHJldHJ5T3B0aW9ucy5tYXhSZXRyeUFmdGVyID09PSB1bmRlZmluZWQgfHwgcmV0cnlBZnRlciA+IHJldHJ5T3B0aW9ucy5tYXhSZXRyeUFmdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0cnlBZnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDEzKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBub2lzZSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgcmV0dXJuICgoMiAqKiAoYXR0ZW1wdENvdW50IC0gMSkpICogMTAwMCkgKyBub2lzZTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjdWxhdGVSZXRyeURlbGF5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVuc3VwcG9ydGVkUHJvdG9jb2xFcnJvciA9IGV4cG9ydHMuUmVhZEVycm9yID0gZXhwb3J0cy5UaW1lb3V0RXJyb3IgPSBleHBvcnRzLlVwbG9hZEVycm9yID0gZXhwb3J0cy5DYWNoZUVycm9yID0gZXhwb3J0cy5IVFRQRXJyb3IgPSBleHBvcnRzLk1heFJlZGlyZWN0c0Vycm9yID0gZXhwb3J0cy5SZXF1ZXN0RXJyb3IgPSBleHBvcnRzLnNldE5vbkVudW1lcmFibGVQcm9wZXJ0aWVzID0gZXhwb3J0cy5rbm93bkhvb2tFdmVudHMgPSBleHBvcnRzLndpdGhvdXRCb2R5ID0gZXhwb3J0cy5rSXNOb3JtYWxpemVkQWxyZWFkeSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY29uc3QgZnNfMSA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbmNvbnN0IGh0dHBfMSA9IHJlcXVpcmUoXCJodHRwXCIpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG5jb25zdCBodHRwX3RpbWVyXzEgPSByZXF1aXJlKFwiQHN6bWFyY3phay9odHRwLXRpbWVyXCIpO1xuY29uc3QgY2FjaGVhYmxlX2xvb2t1cF8xID0gcmVxdWlyZShcImNhY2hlYWJsZS1sb29rdXBcIik7XG5jb25zdCBDYWNoZWFibGVSZXF1ZXN0ID0gcmVxdWlyZShcImNhY2hlYWJsZS1yZXF1ZXN0XCIpO1xuY29uc3QgZGVjb21wcmVzc1Jlc3BvbnNlID0gcmVxdWlyZShcImRlY29tcHJlc3MtcmVzcG9uc2VcIik7XG4vLyBAdHMtZXhwZWN0LWVycm9yIE1pc3NpbmcgdHlwZXNcbmNvbnN0IGh0dHAyd3JhcHBlciA9IHJlcXVpcmUoXCJodHRwMi13cmFwcGVyXCIpO1xuY29uc3QgbG93ZXJjYXNlS2V5cyA9IHJlcXVpcmUoXCJsb3dlcmNhc2Uta2V5c1wiKTtcbmNvbnN0IGlzXzEgPSByZXF1aXJlKFwiQHNpbmRyZXNvcmh1cy9pc1wiKTtcbmNvbnN0IGdldF9ib2R5X3NpemVfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2dldC1ib2R5LXNpemVcIik7XG5jb25zdCBpc19mb3JtX2RhdGFfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWZvcm0tZGF0YVwiKTtcbmNvbnN0IHByb3h5X2V2ZW50c18xID0gcmVxdWlyZShcIi4vdXRpbHMvcHJveHktZXZlbnRzXCIpO1xuY29uc3QgdGltZWRfb3V0XzEgPSByZXF1aXJlKFwiLi91dGlscy90aW1lZC1vdXRcIik7XG5jb25zdCB1cmxfdG9fb3B0aW9uc18xID0gcmVxdWlyZShcIi4vdXRpbHMvdXJsLXRvLW9wdGlvbnNcIik7XG5jb25zdCBvcHRpb25zX3RvX3VybF8xID0gcmVxdWlyZShcIi4vdXRpbHMvb3B0aW9ucy10by11cmxcIik7XG5jb25zdCB3ZWFrYWJsZV9tYXBfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3dlYWthYmxlLW1hcFwiKTtcbmNvbnN0IGdldF9idWZmZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2dldC1idWZmZXJcIik7XG5jb25zdCBkbnNfaXBfdmVyc2lvbl8xID0gcmVxdWlyZShcIi4vdXRpbHMvZG5zLWlwLXZlcnNpb25cIik7XG5jb25zdCBpc19yZXNwb25zZV9va18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtcmVzcG9uc2Utb2tcIik7XG5jb25zdCBkZXByZWNhdGlvbl93YXJuaW5nXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZGVwcmVjYXRpb24td2FybmluZ1wiKTtcbmNvbnN0IG5vcm1hbGl6ZV9hcmd1bWVudHNfMSA9IHJlcXVpcmUoXCIuLi9hcy1wcm9taXNlL25vcm1hbGl6ZS1hcmd1bWVudHNcIik7XG5jb25zdCBjYWxjdWxhdGVfcmV0cnlfZGVsYXlfMSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZS1yZXRyeS1kZWxheVwiKTtcbmxldCBnbG9iYWxEbnNDYWNoZTtcbmNvbnN0IGtSZXF1ZXN0ID0gU3ltYm9sKCdyZXF1ZXN0Jyk7XG5jb25zdCBrUmVzcG9uc2UgPSBTeW1ib2woJ3Jlc3BvbnNlJyk7XG5jb25zdCBrUmVzcG9uc2VTaXplID0gU3ltYm9sKCdyZXNwb25zZVNpemUnKTtcbmNvbnN0IGtEb3dubG9hZGVkU2l6ZSA9IFN5bWJvbCgnZG93bmxvYWRlZFNpemUnKTtcbmNvbnN0IGtCb2R5U2l6ZSA9IFN5bWJvbCgnYm9keVNpemUnKTtcbmNvbnN0IGtVcGxvYWRlZFNpemUgPSBTeW1ib2woJ3VwbG9hZGVkU2l6ZScpO1xuY29uc3Qga1NlcnZlclJlc3BvbnNlc1BpcGVkID0gU3ltYm9sKCdzZXJ2ZXJSZXNwb25zZXNQaXBlZCcpO1xuY29uc3Qga1VucHJveHlFdmVudHMgPSBTeW1ib2woJ3VucHJveHlFdmVudHMnKTtcbmNvbnN0IGtJc0Zyb21DYWNoZSA9IFN5bWJvbCgnaXNGcm9tQ2FjaGUnKTtcbmNvbnN0IGtDYW5jZWxUaW1lb3V0cyA9IFN5bWJvbCgnY2FuY2VsVGltZW91dHMnKTtcbmNvbnN0IGtTdGFydGVkUmVhZGluZyA9IFN5bWJvbCgnc3RhcnRlZFJlYWRpbmcnKTtcbmNvbnN0IGtTdG9wUmVhZGluZyA9IFN5bWJvbCgnc3RvcFJlYWRpbmcnKTtcbmNvbnN0IGtUcmlnZ2VyUmVhZCA9IFN5bWJvbCgndHJpZ2dlclJlYWQnKTtcbmNvbnN0IGtCb2R5ID0gU3ltYm9sKCdib2R5Jyk7XG5jb25zdCBrSm9icyA9IFN5bWJvbCgnam9icycpO1xuY29uc3Qga09yaWdpbmFsUmVzcG9uc2UgPSBTeW1ib2woJ29yaWdpbmFsUmVzcG9uc2UnKTtcbmNvbnN0IGtSZXRyeVRpbWVvdXQgPSBTeW1ib2woJ3JldHJ5VGltZW91dCcpO1xuZXhwb3J0cy5rSXNOb3JtYWxpemVkQWxyZWFkeSA9IFN5bWJvbCgnaXNOb3JtYWxpemVkQWxyZWFkeScpO1xuY29uc3Qgc3VwcG9ydHNCcm90bGkgPSBpc18xLmRlZmF1bHQuc3RyaW5nKHByb2Nlc3MudmVyc2lvbnMuYnJvdGxpKTtcbmV4cG9ydHMud2l0aG91dEJvZHkgPSBuZXcgU2V0KFsnR0VUJywgJ0hFQUQnXSk7XG5leHBvcnRzLmtub3duSG9va0V2ZW50cyA9IFtcbiAgICAnaW5pdCcsXG4gICAgJ2JlZm9yZVJlcXVlc3QnLFxuICAgICdiZWZvcmVSZWRpcmVjdCcsXG4gICAgJ2JlZm9yZUVycm9yJyxcbiAgICAnYmVmb3JlUmV0cnknLFxuICAgIC8vIFByb21pc2UtT25seVxuICAgICdhZnRlclJlc3BvbnNlJ1xuXTtcbmZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoUGFyYW1ldGVycyhzZWFyY2hQYXJhbWV0ZXJzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qga2V5IGluIHNlYXJjaFBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWFyY2hQYXJhbWV0ZXJzW2tleV07XG4gICAgICAgIGlmICghaXNfMS5kZWZhdWx0LnN0cmluZyh2YWx1ZSkgJiYgIWlzXzEuZGVmYXVsdC5udW1iZXIodmFsdWUpICYmICFpc18xLmRlZmF1bHQuYm9vbGVhbih2YWx1ZSkgJiYgIWlzXzEuZGVmYXVsdC5udWxsXyh2YWx1ZSkgJiYgIWlzXzEuZGVmYXVsdC51bmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgc2VhcmNoUGFyYW1zXFxgIHZhbHVlICcke1N0cmluZyh2YWx1ZSl9JyBtdXN0IGJlIGEgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4gb3IgbnVsbGApO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNDbGllbnRSZXF1ZXN0KGNsaWVudFJlcXVlc3QpIHtcbiAgICByZXR1cm4gaXNfMS5kZWZhdWx0Lm9iamVjdChjbGllbnRSZXF1ZXN0KSAmJiAhKCdzdGF0dXNDb2RlJyBpbiBjbGllbnRSZXF1ZXN0KTtcbn1cbmNvbnN0IGNhY2hlYWJsZVN0b3JlID0gbmV3IHdlYWthYmxlX21hcF8xLmRlZmF1bHQoKTtcbmNvbnN0IHdhaXRGb3JPcGVuRmlsZSA9IGFzeW5jIChmaWxlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgb25FcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgIH07XG4gICAgLy8gTm9kZS5qcyAxMiBoYXMgaW5jb21wbGV0ZSB0eXBlc1xuICAgIGlmICghZmlsZS5wZW5kaW5nKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gICAgZmlsZS5vbmNlKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgIGZpbGUub25jZSgncmVhZHknLCAoKSA9PiB7XG4gICAgICAgIGZpbGUub2ZmKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG59KTtcbmNvbnN0IHJlZGlyZWN0Q29kZXMgPSBuZXcgU2V0KFszMDAsIDMwMSwgMzAyLCAzMDMsIDMwNCwgMzA3LCAzMDhdKTtcbmNvbnN0IG5vbkVudW1lcmFibGVQcm9wZXJ0aWVzID0gW1xuICAgICdjb250ZXh0JyxcbiAgICAnYm9keScsXG4gICAgJ2pzb24nLFxuICAgICdmb3JtJ1xuXTtcbmV4cG9ydHMuc2V0Tm9uRW51bWVyYWJsZVByb3BlcnRpZXMgPSAoc291cmNlcywgdG8pID0+IHtcbiAgICAvLyBOb24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIHNoYWxsIG5vdCBiZSBtZXJnZWRcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG4gICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5vbkVudW1lcmFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAoIShuYW1lIGluIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BlcnRpZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVFMgZG9lc24ndCBzZWUgdGhlIGNoZWNrIGFib3ZlXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNvdXJjZVtuYW1lXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0bywgcHJvcGVydGllcyk7XG59O1xuLyoqXG5BbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiBhIHJlcXVlc3QgZmFpbHMuXG5Db250YWlucyBhIGBjb2RlYCBwcm9wZXJ0eSB3aXRoIGVycm9yIGNsYXNzIGNvZGUsIGxpa2UgYEVDT05OUkVGVVNFRGAuXG4qL1xuY2xhc3MgUmVxdWVzdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGVycm9yLCBzZWxmKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnUmVxdWVzdEVycm9yJztcbiAgICAgICAgdGhpcy5jb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgaWYgKHNlbGYgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JlcXVlc3QnLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNlbGZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZltrUmVzcG9uc2VdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnb3B0aW9ucycsIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZhaWxzIGJlY2F1c2Ugb2YgVFMgMy43LjIgdXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHNcbiAgICAgICAgICAgICAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzQ5NzJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5vcHRpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnb3B0aW9ucycsIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZhaWxzIGJlY2F1c2Ugb2YgVFMgMy43LjIgdXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHNcbiAgICAgICAgICAgICAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzQ5NzJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1pbmdzID0gKF9hID0gdGhpcy5yZXF1ZXN0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGltaW5ncztcbiAgICAgICAgLy8gUmVjb3ZlciB0aGUgb3JpZ2luYWwgc3RhY2t0cmFjZVxuICAgICAgICBpZiAoaXNfMS5kZWZhdWx0LnN0cmluZyhlcnJvci5zdGFjaykgJiYgaXNfMS5kZWZhdWx0LnN0cmluZyh0aGlzLnN0YWNrKSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhPZk1lc3NhZ2UgPSB0aGlzLnN0YWNrLmluZGV4T2YodGhpcy5tZXNzYWdlKSArIHRoaXMubWVzc2FnZS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB0aGlzU3RhY2tUcmFjZSA9IHRoaXMuc3RhY2suc2xpY2UoaW5kZXhPZk1lc3NhZ2UpLnNwbGl0KCdcXG4nKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICBjb25zdCBlcnJvclN0YWNrVHJhY2UgPSBlcnJvci5zdGFjay5zbGljZShlcnJvci5zdGFjay5pbmRleE9mKGVycm9yLm1lc3NhZ2UpICsgZXJyb3IubWVzc2FnZS5sZW5ndGgpLnNwbGl0KCdcXG4nKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlZCB0cmFjZXNcbiAgICAgICAgICAgIHdoaWxlIChlcnJvclN0YWNrVHJhY2UubGVuZ3RoICE9PSAwICYmIGVycm9yU3RhY2tUcmFjZVswXSA9PT0gdGhpc1N0YWNrVHJhY2VbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzU3RhY2tUcmFjZS5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGFjayA9IGAke3RoaXMuc3RhY2suc2xpY2UoMCwgaW5kZXhPZk1lc3NhZ2UpfSR7dGhpc1N0YWNrVHJhY2UucmV2ZXJzZSgpLmpvaW4oJ1xcbicpfSR7ZXJyb3JTdGFja1RyYWNlLnJldmVyc2UoKS5qb2luKCdcXG4nKX1gO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZXF1ZXN0RXJyb3IgPSBSZXF1ZXN0RXJyb3I7XG4vKipcbkFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHRoZSBzZXJ2ZXIgcmVkaXJlY3RzIHlvdSBtb3JlIHRoYW4gdGVuIHRpbWVzLlxuSW5jbHVkZXMgYSBgcmVzcG9uc2VgIHByb3BlcnR5LlxuKi9cbmNsYXNzIE1heFJlZGlyZWN0c0Vycm9yIGV4dGVuZHMgUmVxdWVzdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0KSB7XG4gICAgICAgIHN1cGVyKGBSZWRpcmVjdGVkICR7cmVxdWVzdC5vcHRpb25zLm1heFJlZGlyZWN0c30gdGltZXMuIEFib3J0aW5nLmAsIHt9LCByZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ01heFJlZGlyZWN0c0Vycm9yJztcbiAgICB9XG59XG5leHBvcnRzLk1heFJlZGlyZWN0c0Vycm9yID0gTWF4UmVkaXJlY3RzRXJyb3I7XG4vKipcbkFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgY29kZSBpcyBub3QgMnh4IG5vciAzeHggaWYgYG9wdGlvbnMuZm9sbG93UmVkaXJlY3RgIGlzIGB0cnVlYCwgYnV0IGFsd2F5cyBleGNlcHQgZm9yIDMwNC5cbkluY2x1ZGVzIGEgYHJlc3BvbnNlYCBwcm9wZXJ0eS5cbiovXG5jbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBSZXF1ZXN0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyKGBSZXNwb25zZSBjb2RlICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0gKCR7cmVzcG9uc2Uuc3RhdHVzTWVzc2FnZX0pYCwge30sIHJlc3BvbnNlLnJlcXVlc3QpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnSFRUUEVycm9yJztcbiAgICB9XG59XG5leHBvcnRzLkhUVFBFcnJvciA9IEhUVFBFcnJvcjtcbi8qKlxuQW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gYSBjYWNoZSBtZXRob2QgZmFpbHMuXG5Gb3IgZXhhbXBsZSwgaWYgdGhlIGRhdGFiYXNlIGdvZXMgZG93biBvciB0aGVyZSdzIGEgZmlsZXN5c3RlbSBlcnJvci5cbiovXG5jbGFzcyBDYWNoZUVycm9yIGV4dGVuZHMgUmVxdWVzdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvciwgcmVxdWVzdCkge1xuICAgICAgICBzdXBlcihlcnJvci5tZXNzYWdlLCBlcnJvciwgcmVxdWVzdCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdDYWNoZUVycm9yJztcbiAgICB9XG59XG5leHBvcnRzLkNhY2hlRXJyb3IgPSBDYWNoZUVycm9yO1xuLyoqXG5BbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiB0aGUgcmVxdWVzdCBib2R5IGlzIGEgc3RyZWFtIGFuZCBhbiBlcnJvciBvY2N1cnMgd2hpbGUgcmVhZGluZyBmcm9tIHRoYXQgc3RyZWFtLlxuKi9cbmNsYXNzIFVwbG9hZEVycm9yIGV4dGVuZHMgUmVxdWVzdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvciwgcmVxdWVzdCkge1xuICAgICAgICBzdXBlcihlcnJvci5tZXNzYWdlLCBlcnJvciwgcmVxdWVzdCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdVcGxvYWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0cy5VcGxvYWRFcnJvciA9IFVwbG9hZEVycm9yO1xuLyoqXG5BbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiB0aGUgcmVxdWVzdCBpcyBhYm9ydGVkIGR1ZSB0byBhIHRpbWVvdXQuXG5JbmNsdWRlcyBhbiBgZXZlbnRgIGFuZCBgdGltaW5nc2AgcHJvcGVydHkuXG4qL1xuY2xhc3MgVGltZW91dEVycm9yIGV4dGVuZHMgUmVxdWVzdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvciwgdGltaW5ncywgcmVxdWVzdCkge1xuICAgICAgICBzdXBlcihlcnJvci5tZXNzYWdlLCBlcnJvciwgcmVxdWVzdCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdUaW1lb3V0RXJyb3InO1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXJyb3IuZXZlbnQ7XG4gICAgICAgIHRoaXMudGltaW5ncyA9IHRpbWluZ3M7XG4gICAgfVxufVxuZXhwb3J0cy5UaW1lb3V0RXJyb3IgPSBUaW1lb3V0RXJyb3I7XG4vKipcbkFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHJlYWRpbmcgZnJvbSByZXNwb25zZSBzdHJlYW0gZmFpbHMuXG4qL1xuY2xhc3MgUmVhZEVycm9yIGV4dGVuZHMgUmVxdWVzdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvciwgcmVxdWVzdCkge1xuICAgICAgICBzdXBlcihlcnJvci5tZXNzYWdlLCBlcnJvciwgcmVxdWVzdCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdSZWFkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVhZEVycm9yID0gUmVhZEVycm9yO1xuLyoqXG5BbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiBnaXZlbiBhbiB1bnN1cHBvcnRlZCBwcm90b2NvbC5cbiovXG5jbGFzcyBVbnN1cHBvcnRlZFByb3RvY29sRXJyb3IgZXh0ZW5kcyBSZXF1ZXN0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoYFVuc3VwcG9ydGVkIHByb3RvY29sIFwiJHtvcHRpb25zLnVybC5wcm90b2NvbH1cImAsIHt9LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1Vuc3VwcG9ydGVkUHJvdG9jb2xFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0cy5VbnN1cHBvcnRlZFByb3RvY29sRXJyb3IgPSBVbnN1cHBvcnRlZFByb3RvY29sRXJyb3I7XG5jb25zdCBwcm94aWVkUmVxdWVzdEV2ZW50cyA9IFtcbiAgICAnc29ja2V0JyxcbiAgICAnY29ubmVjdCcsXG4gICAgJ2NvbnRpbnVlJyxcbiAgICAnaW5mb3JtYXRpb24nLFxuICAgICd1cGdyYWRlJyxcbiAgICAndGltZW91dCdcbl07XG5jbGFzcyBSZXF1ZXN0IGV4dGVuZHMgc3RyZWFtXzEuRHVwbGV4IHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIG9wdGlvbnMgPSB7fSwgZGVmYXVsdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgLy8gVGhpcyBtdXN0IGJlIGZhbHNlLCB0byBlbmFibGUgdGhyb3dpbmcgYWZ0ZXIgZGVzdHJveVxuICAgICAgICAgICAgLy8gSXQgaXMgdXNlZCBmb3IgcmV0cnkgbG9naWMgaW4gUHJvbWlzZSBBUElcbiAgICAgICAgICAgIGF1dG9EZXN0cm95OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEl0IG5lZWRzIHRvIGJlIHplcm8gYmVjYXVzZSB3ZSdyZSBqdXN0IHByb3h5aW5nIHRoZSBkYXRhIHRvIGFub3RoZXIgc3RyZWFtXG4gICAgICAgICAgICBoaWdoV2F0ZXJNYXJrOiAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzW2tEb3dubG9hZGVkU2l6ZV0gPSAwO1xuICAgICAgICB0aGlzW2tVcGxvYWRlZFNpemVdID0gMDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpc1trU2VydmVyUmVzcG9uc2VzUGlwZWRdID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0cyA9IFtdO1xuICAgICAgICB0aGlzW2tTdG9wUmVhZGluZ10gPSBmYWxzZTtcbiAgICAgICAgdGhpc1trVHJpZ2dlclJlYWRdID0gZmFsc2U7XG4gICAgICAgIHRoaXNba0pvYnNdID0gW107XG4gICAgICAgIHRoaXMucmV0cnlDb3VudCA9IDA7XG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgPj0gMTJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgY29uc3QgdW5sb2NrV3JpdGUgPSAoKSA9PiB0aGlzLl91bmxvY2tXcml0ZSgpO1xuICAgICAgICBjb25zdCBsb2NrV3JpdGUgPSAoKSA9PiB0aGlzLl9sb2NrV3JpdGUoKTtcbiAgICAgICAgdGhpcy5vbigncGlwZScsIChzb3VyY2UpID0+IHtcbiAgICAgICAgICAgIHNvdXJjZS5wcmVwZW5kTGlzdGVuZXIoJ2RhdGEnLCB1bmxvY2tXcml0ZSk7XG4gICAgICAgICAgICBzb3VyY2Uub24oJ2RhdGEnLCBsb2NrV3JpdGUpO1xuICAgICAgICAgICAgc291cmNlLnByZXBlbmRMaXN0ZW5lcignZW5kJywgdW5sb2NrV3JpdGUpO1xuICAgICAgICAgICAgc291cmNlLm9uKCdlbmQnLCBsb2NrV3JpdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbigndW5waXBlJywgKHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgc291cmNlLm9mZignZGF0YScsIHVubG9ja1dyaXRlKTtcbiAgICAgICAgICAgIHNvdXJjZS5vZmYoJ2RhdGEnLCBsb2NrV3JpdGUpO1xuICAgICAgICAgICAgc291cmNlLm9mZignZW5kJywgdW5sb2NrV3JpdGUpO1xuICAgICAgICAgICAgc291cmNlLm9mZignZW5kJywgbG9ja1dyaXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ3BpcGUnLCBzb3VyY2UgPT4ge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIGh0dHBfMS5JbmNvbWluZ01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc291cmNlLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMub3B0aW9ucy5oZWFkZXJzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHsganNvbiwgYm9keSwgZm9ybSB9ID0gb3B0aW9ucztcbiAgICAgICAgaWYgKGpzb24gfHwgYm9keSB8fCBmb3JtKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrV3JpdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhwb3J0cy5rSXNOb3JtYWxpemVkQWxyZWFkeSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIENvbW1vbiBUeXBlU2NyaXB0IGJ1ZyBzYXlpbmcgdGhhdCBgdGhpcy5jb25zdHJ1Y3RvcmAgaXMgbm90IGFjY2Vzc2libGVcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNvbnN0cnVjdG9yLm5vcm1hbGl6ZUFyZ3VtZW50cyh1cmwsIG9wdGlvbnMsIGRlZmF1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBgX2Rlc3Ryb3koKWBcbiAgICAgICAgICAgICAgICBpZiAoaXNfMS5kZWZhdWx0Lm5vZGVTdHJlYW0ob3B0aW9ucy5ib2R5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJvZHkgaW5zdGFuY2VvZiBmc18xLlJlYWRTdHJlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvck9wZW5GaWxlKHRoaXMub3B0aW9ucy5ib2R5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5vcm1hbGl6ZWRVUkwgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAoIW5vcm1hbGl6ZWRVUkwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWlzc2luZyBgdXJsYCBwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcmwgPSBub3JtYWxpemVkVVJMLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgZGVjb2RlVVJJKHRoaXMucmVxdWVzdFVybCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fZmluYWxpemVCb2R5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fbWFrZVJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpc1trUmVxdWVzdF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUXVldWVkIHdyaXRlcyBldGMuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBqb2Igb2YgdGhpc1trSm9ic10pIHtcbiAgICAgICAgICAgICAgICAgICAgam9iKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAgICAgICAgICAgICB0aGlzW2tKb2JzXS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlcXVlc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iZWZvcmVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMzMzMzVcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveShlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH1cbiAgICBzdGF0aWMgbm9ybWFsaXplQXJndW1lbnRzKHVybCwgb3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgY29uc3QgcmF3T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChpc18xLmRlZmF1bHQub2JqZWN0KHVybCkgJiYgIWlzXzEuZGVmYXVsdC51cmxJbnN0YW5jZSh1cmwpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0geyAuLi5kZWZhdWx0cywgLi4udXJsLCAuLi5vcHRpb25zIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodXJsICYmIG9wdGlvbnMgJiYgb3B0aW9ucy51cmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBgdXJsYCBvcHRpb24gaXMgbXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggdGhlIGBpbnB1dGAgYXJndW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG4gICAgICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc18xLmRlZmF1bHQudXJsSW5zdGFuY2Uob3B0aW9ucy51cmwpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSBuZXcgdXJsXzEuVVJMKG9wdGlvbnMudXJsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IERlcHJlY2F0ZSBVUkwgb3B0aW9ucyBpbiBHb3QgMTIuXG4gICAgICAgIC8vIFN1cHBvcnQgZXh0ZW5kLXNwZWNpZmljIG9wdGlvbnNcbiAgICAgICAgaWYgKG9wdGlvbnMuY2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNhY2hlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmRuc0NhY2hlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kbnNDYWNoZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBOaWNlIHR5cGUgYXNzZXJ0aW9uc1xuICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5zdHJpbmcsIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLm1ldGhvZCk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0Lm9iamVjdCwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0LnN0cmluZywgaXNfMS5kZWZhdWx0LnVybEluc3RhbmNlLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5wcmVmaXhVcmwpO1xuICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5vYmplY3QsIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLmNvb2tpZUphcik7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0Lm9iamVjdCwgaXNfMS5kZWZhdWx0LnN0cmluZywgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQub2JqZWN0LCBpc18xLmRlZmF1bHQuc3RyaW5nLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5jYWNoZSk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0Lm9iamVjdCwgaXNfMS5kZWZhdWx0Lm51bWJlciwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMudGltZW91dCk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0Lm9iamVjdCwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuY29udGV4dCk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0Lm9iamVjdCwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuaG9va3MpO1xuICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5ib29sZWFuLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5kZWNvbXByZXNzKTtcbiAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQuYm9vbGVhbiwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuaWdub3JlSW52YWxpZENvb2tpZXMpO1xuICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5ib29sZWFuLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5mb2xsb3dSZWRpcmVjdCk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0Lm51bWJlciwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMubWF4UmVkaXJlY3RzKTtcbiAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQuYm9vbGVhbiwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMudGhyb3dIdHRwRXJyb3JzKTtcbiAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQuYm9vbGVhbiwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuaHR0cDIpO1xuICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5ib29sZWFuLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5hbGxvd0dldEJvZHkpO1xuICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5zdHJpbmcsIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLmxvY2FsQWRkcmVzcyk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbZG5zX2lwX3ZlcnNpb25fMS5pc0Ruc0xvb2t1cElwVmVyc2lvbiwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuZG5zTG9va3VwSXBWZXJzaW9uKTtcbiAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQub2JqZWN0LCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5odHRwcyk7XG4gICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0LmJvb2xlYW4sIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCk7XG4gICAgICAgIGlmIChvcHRpb25zLmh0dHBzKSB7XG4gICAgICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5ib29sZWFuLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5odHRwcy5yZWplY3RVbmF1dGhvcml6ZWQpO1xuICAgICAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQuZnVuY3Rpb25fLCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5odHRwcy5jaGVja1NlcnZlcklkZW50aXR5KTtcbiAgICAgICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0LnN0cmluZywgaXNfMS5kZWZhdWx0Lm9iamVjdCwgaXNfMS5kZWZhdWx0LmFycmF5LCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5odHRwcy5jZXJ0aWZpY2F0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5zdHJpbmcsIGlzXzEuZGVmYXVsdC5vYmplY3QsIGlzXzEuZGVmYXVsdC5hcnJheSwgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZF0sIG9wdGlvbnMuaHR0cHMua2V5KTtcbiAgICAgICAgICAgIGlzXzEuYXNzZXJ0LmFueShbaXNfMS5kZWZhdWx0LnN0cmluZywgaXNfMS5kZWZhdWx0Lm9iamVjdCwgaXNfMS5kZWZhdWx0LmFycmF5LCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5odHRwcy5jZXJ0aWZpY2F0ZSk7XG4gICAgICAgICAgICBpc18xLmFzc2VydC5hbnkoW2lzXzEuZGVmYXVsdC5zdHJpbmcsIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLmh0dHBzLnBhc3NwaHJhc2UpO1xuICAgICAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQuc3RyaW5nLCBpc18xLmRlZmF1bHQuYnVmZmVyLCBpc18xLmRlZmF1bHQuYXJyYXksIGlzXzEuZGVmYXVsdC51bmRlZmluZWRdLCBvcHRpb25zLmh0dHBzLnBmeCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNfMS5hc3NlcnQuYW55KFtpc18xLmRlZmF1bHQub2JqZWN0LCBpc18xLmRlZmF1bHQudW5kZWZpbmVkXSwgb3B0aW9ucy5jYWNoZU9wdGlvbnMpO1xuICAgICAgICAvLyBgb3B0aW9ucy5tZXRob2RgXG4gICAgICAgIGlmIChpc18xLmRlZmF1bHQuc3RyaW5nKG9wdGlvbnMubWV0aG9kKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICAgICAgfVxuICAgICAgICAvLyBgb3B0aW9ucy5oZWFkZXJzYFxuICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXJzID09PSAoZGVmYXVsdHMgPT09IG51bGwgfHwgZGVmYXVsdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlZmF1bHRzLmhlYWRlcnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSB7IC4uLm9wdGlvbnMuaGVhZGVycyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gbG93ZXJjYXNlS2V5cyh7IC4uLihkZWZhdWx0cyA9PT0gbnVsbCB8fCBkZWZhdWx0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVmYXVsdHMuaGVhZGVycyksIC4uLm9wdGlvbnMuaGVhZGVycyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNhbGxvdyBsZWdhY3kgYHVybC5VcmxgXG4gICAgICAgIGlmICgnc2xhc2hlcycgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxlZ2FjeSBgdXJsLlVybGAgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIGBVUkxgIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYG9wdGlvbnMuYXV0aGBcbiAgICAgICAgaWYgKCdhdXRoJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXJhbWV0ZXIgYGF1dGhgIGlzIGRlcHJlY2F0ZWQuIFVzZSBgdXNlcm5hbWVgIC8gYHBhc3N3b3JkYCBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGBvcHRpb25zLnNlYXJjaFBhcmFtc2BcbiAgICAgICAgaWYgKCdzZWFyY2hQYXJhbXMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNlYXJjaFBhcmFtcyAmJiBvcHRpb25zLnNlYXJjaFBhcmFtcyAhPT0gKGRlZmF1bHRzID09PSBudWxsIHx8IGRlZmF1bHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWZhdWx0cy5zZWFyY2hQYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC5zdHJpbmcob3B0aW9ucy5zZWFyY2hQYXJhbXMpIHx8IChvcHRpb25zLnNlYXJjaFBhcmFtcyBpbnN0YW5jZW9mIHVybF8xLlVSTFNlYXJjaFBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1ldGVycyA9IG5ldyB1cmxfMS5VUkxTZWFyY2hQYXJhbXMob3B0aW9ucy5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTZWFyY2hQYXJhbWV0ZXJzKG9wdGlvbnMuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1ldGVycyA9IG5ldyB1cmxfMS5VUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zLnNlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zLnNlYXJjaFBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1ldGVycy5hcHBlbmQoa2V5LCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1ldGVycy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYG5vcm1hbGl6ZUFyZ3VtZW50cygpYCBpcyBhbHNvIHVzZWQgdG8gbWVyZ2Ugb3B0aW9uc1xuICAgICAgICAgICAgICAgIChfYSA9IGRlZmF1bHRzID09PSBudWxsIHx8IGRlZmF1bHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWZhdWx0cy5zZWFyY2hQYXJhbXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgdXNlIGRlZmF1bHQgaWYgb25lIGlzbid0IGFscmVhZHkgZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaFBhcmFtZXRlcnMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtZXRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zZWFyY2hQYXJhbXMgPSBzZWFyY2hQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGBvcHRpb25zLnVzZXJuYW1lYCAmIGBvcHRpb25zLnBhc3N3b3JkYFxuICAgICAgICBvcHRpb25zLnVzZXJuYW1lID0gKF9iID0gb3B0aW9ucy51c2VybmFtZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgICAgIG9wdGlvbnMucGFzc3dvcmQgPSAoX2MgPSBvcHRpb25zLnBhc3N3b3JkKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJztcbiAgICAgICAgLy8gYG9wdGlvbnMucHJlZml4VXJsYCAmIGBvcHRpb25zLnVybGBcbiAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC51bmRlZmluZWQob3B0aW9ucy5wcmVmaXhVcmwpKSB7XG4gICAgICAgICAgICBvcHRpb25zLnByZWZpeFVybCA9IChfZCA9IGRlZmF1bHRzID09PSBudWxsIHx8IGRlZmF1bHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWZhdWx0cy5wcmVmaXhVcmwpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5wcmVmaXhVcmwgPSBvcHRpb25zLnByZWZpeFVybC50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJlZml4VXJsICE9PSAnJyAmJiAhb3B0aW9ucy5wcmVmaXhVcmwuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucHJlZml4VXJsICs9ICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNfMS5kZWZhdWx0LnN0cmluZyhvcHRpb25zLnVybCkpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVybC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BpbnB1dGAgbXVzdCBub3Qgc3RhcnQgd2l0aCBhIHNsYXNoIHdoZW4gdXNpbmcgYHByZWZpeFVybGAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMudXJsID0gb3B0aW9uc190b191cmxfMS5kZWZhdWx0KG9wdGlvbnMucHJlZml4VXJsICsgb3B0aW9ucy51cmwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChpc18xLmRlZmF1bHQudW5kZWZpbmVkKG9wdGlvbnMudXJsKSAmJiBvcHRpb25zLnByZWZpeFVybCAhPT0gJycpIHx8IG9wdGlvbnMucHJvdG9jb2wpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudXJsID0gb3B0aW9uc190b191cmxfMS5kZWZhdWx0KG9wdGlvbnMucHJlZml4VXJsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICAgICAgICAgIGlmICgncG9ydCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIGNoYW5nZSBgb3B0aW9ucy5wcmVmaXhVcmxgXG4gICAgICAgICAgICBsZXQgeyBwcmVmaXhVcmwgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0aW9ucywgJ3ByZWZpeFVybCcsIHtcbiAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwuaHJlZi5zdGFydHNXaXRoKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY2hhbmdlIFxcYHByZWZpeFVybFxcYCBmcm9tICR7cHJlZml4VXJsfSB0byAke3ZhbHVlfTogJHt1cmwuaHJlZn1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVybCA9IG5ldyB1cmxfMS5VUkwodmFsdWUgKyB1cmwuaHJlZi5zbGljZShwcmVmaXhVcmwubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeFVybCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiBwcmVmaXhVcmxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3VwcG9ydCBVTklYIHNvY2tldHNcbiAgICAgICAgICAgIGxldCB7IHByb3RvY29sIH0gPSBvcHRpb25zLnVybDtcbiAgICAgICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ3VuaXg6Jykge1xuICAgICAgICAgICAgICAgIHByb3RvY29sID0gJ2h0dHA6JztcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVybCA9IG5ldyB1cmxfMS5VUkwoYGh0dHA6Ly91bml4JHtvcHRpb25zLnVybC5wYXRobmFtZX0ke29wdGlvbnMudXJsLnNlYXJjaH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzZWFyY2ggcGFyYW1zXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWJhc2UtdG8tc3RyaW5nXG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmwuc2VhcmNoID0gb3B0aW9ucy5zZWFyY2hQYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByb3RvY29sIGNoZWNrXG4gICAgICAgICAgICBpZiAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3VwcG9ydGVkUHJvdG9jb2xFcnJvcihvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBgdXNlcm5hbWVgXG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VybmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVzZXJuYW1lID0gb3B0aW9ucy51cmwudXNlcm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVybC51c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgYHBhc3N3b3JkYFxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wYXNzd29yZCA9IG9wdGlvbnMudXJsLnBhc3N3b3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmwucGFzc3dvcmQgPSBvcHRpb25zLnBhc3N3b3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGBvcHRpb25zLmNvb2tpZUphcmBcbiAgICAgICAgY29uc3QgeyBjb29raWVKYXIgfSA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChjb29raWVKYXIpIHtcbiAgICAgICAgICAgIGxldCB7IHNldENvb2tpZSwgZ2V0Q29va2llU3RyaW5nIH0gPSBjb29raWVKYXI7XG4gICAgICAgICAgICBpc18xLmFzc2VydC5mdW5jdGlvbl8oc2V0Q29va2llKTtcbiAgICAgICAgICAgIGlzXzEuYXNzZXJ0LmZ1bmN0aW9uXyhnZXRDb29raWVTdHJpbmcpO1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IEhvcnJpYmxlIGB0b3VnaC1jb29raWVgIHYzIGNoZWNrICovXG4gICAgICAgICAgICBpZiAoc2V0Q29va2llLmxlbmd0aCA9PT0gNCAmJiBnZXRDb29raWVTdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29va2llID0gdXRpbF8xLnByb21pc2lmeShzZXRDb29raWUuYmluZChvcHRpb25zLmNvb2tpZUphcikpO1xuICAgICAgICAgICAgICAgIGdldENvb2tpZVN0cmluZyA9IHV0aWxfMS5wcm9taXNpZnkoZ2V0Q29va2llU3RyaW5nLmJpbmQob3B0aW9ucy5jb29raWVKYXIpKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvb2tpZUphciA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llLFxuICAgICAgICAgICAgICAgICAgICBnZXRDb29raWVTdHJpbmc6IGdldENvb2tpZVN0cmluZ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYG9wdGlvbnMuY2FjaGVgXG4gICAgICAgIGNvbnN0IHsgY2FjaGUgfSA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZWFibGVTdG9yZS5oYXMoY2FjaGUpKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVhYmxlU3RvcmUuc2V0KGNhY2hlLCBuZXcgQ2FjaGVhYmxlUmVxdWVzdCgoKHJlcXVlc3RPcHRpb25zLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcXVlc3RPcHRpb25zW2tSZXF1ZXN0XShyZXF1ZXN0T3B0aW9ucywgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHdoZW4gYGNhY2hlYWJsZS1yZXF1ZXN0YCBzdXBwb3J0cyBhc3luYyByZXF1ZXN0IGZ1bmN0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC5wcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byBpbXBsZW1lbnQgdGhlIGVycm9yIGhhbmRsZXIgaW4gb3JkZXIgdG8gc3VwcG9ydCBIVFRQMiBjYWNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlc3VsdCB3aWxsIGJlIGEgcHJvbWlzZSBhbnl3YXkuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQub25jZSA9IChldmVudCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2F0Y2goaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50ID09PSAnYWJvcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBlbXB0eSBjYXRjaCBpcyBuZWVkZWQgaGVyZSBpbiBjYXNlIHdoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgcmVqZWN0cyBiZWZvcmUgaXQncyBgYXdhaXRgZWQgaW4gYF9tYWtlUmVxdWVzdGAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSAoYXdhaXQgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uY2UoJ2Fib3J0JywgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNhZmV0eSBjaGVjayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gSFRUUDIgcHJvbWlzZSBldmVudDogJHtldmVudH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KSwgY2FjaGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBgb3B0aW9ucy5jYWNoZU9wdGlvbnNgXG4gICAgICAgIG9wdGlvbnMuY2FjaGVPcHRpb25zID0geyAuLi5vcHRpb25zLmNhY2hlT3B0aW9ucyB9O1xuICAgICAgICAvLyBgb3B0aW9ucy5kbnNDYWNoZWBcbiAgICAgICAgaWYgKG9wdGlvbnMuZG5zQ2FjaGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICghZ2xvYmFsRG5zQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxEbnNDYWNoZSA9IG5ldyBjYWNoZWFibGVfbG9va3VwXzEuZGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5kbnNDYWNoZSA9IGdsb2JhbERuc0NhY2hlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc18xLmRlZmF1bHQudW5kZWZpbmVkKG9wdGlvbnMuZG5zQ2FjaGUpICYmICFvcHRpb25zLmRuc0NhY2hlLmxvb2t1cCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgUGFyYW1ldGVyIFxcYGRuc0NhY2hlXFxgIG11c3QgYmUgYSBDYWNoZWFibGVMb29rdXAgaW5zdGFuY2Ugb3IgYSBib29sZWFuLCBnb3QgJHtpc18xLmRlZmF1bHQob3B0aW9ucy5kbnNDYWNoZSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYG9wdGlvbnMudGltZW91dGBcbiAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC5udW1iZXIob3B0aW9ucy50aW1lb3V0KSkge1xuICAgICAgICAgICAgb3B0aW9ucy50aW1lb3V0ID0geyByZXF1ZXN0OiBvcHRpb25zLnRpbWVvdXQgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWZhdWx0cyAmJiBvcHRpb25zLnRpbWVvdXQgIT09IGRlZmF1bHRzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudGltZW91dCA9IHtcbiAgICAgICAgICAgICAgICAuLi5kZWZhdWx0cy50aW1lb3V0LFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMudGltZW91dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMudGltZW91dCA9IHsgLi4ub3B0aW9ucy50aW1lb3V0IH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gYG9wdGlvbnMuY29udGV4dGBcbiAgICAgICAgaWYgKCFvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY29udGV4dCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIC8vIGBvcHRpb25zLmhvb2tzYFxuICAgICAgICBjb25zdCBhcmVIb29rc0RlZmF1bHQgPSBvcHRpb25zLmhvb2tzID09PSAoZGVmYXVsdHMgPT09IG51bGwgfHwgZGVmYXVsdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlZmF1bHRzLmhvb2tzKTtcbiAgICAgICAgb3B0aW9ucy5ob29rcyA9IHsgLi4ub3B0aW9ucy5ob29rcyB9O1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV4cG9ydHMua25vd25Ib29rRXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW4gb3B0aW9ucy5ob29rcykge1xuICAgICAgICAgICAgICAgIGlmIChpc18xLmRlZmF1bHQuYXJyYXkob3B0aW9ucy5ob29rc1tldmVudF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMxNDQ1I2lzc3VlY29tbWVudC01NzY5MjkwNDRcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ob29rc1tldmVudF0gPSBbLi4ub3B0aW9ucy5ob29rc1tldmVudF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgUGFyYW1ldGVyIFxcYCR7ZXZlbnR9XFxgIG11c3QgYmUgYW4gQXJyYXksIGdvdCAke2lzXzEuZGVmYXVsdChvcHRpb25zLmhvb2tzW2V2ZW50XSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5ob29rc1tldmVudF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmYXVsdHMgJiYgIWFyZUhvb2tzRGVmYXVsdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBleHBvcnRzLmtub3duSG9va0V2ZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRIb29rcyA9IGRlZmF1bHRzLmhvb2tzW2V2ZW50XTtcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdEhvb2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzE0NDUjaXNzdWVjb21tZW50LTU3NjkyOTA0NFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhvb2tzW2V2ZW50XSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRzLmhvb2tzW2V2ZW50XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuaG9va3NbZXZlbnRdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEROUyBvcHRpb25zXG4gICAgICAgIGlmICgnZmFtaWx5JyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkZXByZWNhdGlvbl93YXJuaW5nXzEuZGVmYXVsdCgnXCJvcHRpb25zLmZhbWlseVwiIHdhcyBuZXZlciBkb2N1bWVudGVkLCBwbGVhc2UgdXNlIFwib3B0aW9ucy5kbnNMb29rdXBJcFZlcnNpb25cIicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhUVFBTIG9wdGlvbnNcbiAgICAgICAgaWYgKGRlZmF1bHRzID09PSBudWxsIHx8IGRlZmF1bHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWZhdWx0cy5odHRwcykge1xuICAgICAgICAgICAgb3B0aW9ucy5odHRwcyA9IHsgLi4uZGVmYXVsdHMuaHR0cHMsIC4uLm9wdGlvbnMuaHR0cHMgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlamVjdFVuYXV0aG9yaXplZCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGVwcmVjYXRpb25fd2FybmluZ18xLmRlZmF1bHQoJ1wib3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWRcIiBpcyBub3cgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcIm9wdGlvbnMuaHR0cHMucmVqZWN0VW5hdXRob3JpemVkXCInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2NoZWNrU2VydmVySWRlbnRpdHknIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0aW9uX3dhcm5pbmdfMS5kZWZhdWx0KCdcIm9wdGlvbnMuY2hlY2tTZXJ2ZXJJZGVudGl0eVwiIHdhcyBuZXZlciBkb2N1bWVudGVkLCBwbGVhc2UgdXNlIFwib3B0aW9ucy5odHRwcy5jaGVja1NlcnZlcklkZW50aXR5XCInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2NhJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkZXByZWNhdGlvbl93YXJuaW5nXzEuZGVmYXVsdCgnXCJvcHRpb25zLmNhXCIgd2FzIG5ldmVyIGRvY3VtZW50ZWQsIHBsZWFzZSB1c2UgXCJvcHRpb25zLmh0dHBzLmNlcnRpZmljYXRlQXV0aG9yaXR5XCInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2tleScgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGVwcmVjYXRpb25fd2FybmluZ18xLmRlZmF1bHQoJ1wib3B0aW9ucy5rZXlcIiB3YXMgbmV2ZXIgZG9jdW1lbnRlZCwgcGxlYXNlIHVzZSBcIm9wdGlvbnMuaHR0cHMua2V5XCInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2NlcnQnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0aW9uX3dhcm5pbmdfMS5kZWZhdWx0KCdcIm9wdGlvbnMuY2VydFwiIHdhcyBuZXZlciBkb2N1bWVudGVkLCBwbGVhc2UgdXNlIFwib3B0aW9ucy5odHRwcy5jZXJ0aWZpY2F0ZVwiJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdwYXNzcGhyYXNlJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkZXByZWNhdGlvbl93YXJuaW5nXzEuZGVmYXVsdCgnXCJvcHRpb25zLnBhc3NwaHJhc2VcIiB3YXMgbmV2ZXIgZG9jdW1lbnRlZCwgcGxlYXNlIHVzZSBcIm9wdGlvbnMuaHR0cHMucGFzc3BocmFzZVwiJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdwZngnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0aW9uX3dhcm5pbmdfMS5kZWZhdWx0KCdcIm9wdGlvbnMucGZ4XCIgd2FzIG5ldmVyIGRvY3VtZW50ZWQsIHBsZWFzZSB1c2UgXCJvcHRpb25zLmh0dHBzLnBmeFwiJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXIgb3B0aW9uc1xuICAgICAgICBpZiAoJ2ZvbGxvd1JlZGlyZWN0cycgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGBmb2xsb3dSZWRpcmVjdHNgIG9wdGlvbiBkb2VzIG5vdCBleGlzdC4gVXNlIGBmb2xsb3dSZWRpcmVjdGAgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5hZ2VudCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucy5hZ2VudCkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdodHRwJyAmJiBrZXkgIT09ICdodHRwcycgJiYga2V5ICE9PSAnaHR0cDInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHRoZSBcXGBvcHRpb25zLmFnZW50XFxgIHByb3BlcnRpZXMgdG8gYmUgXFxgaHR0cFxcYCwgXFxgaHR0cHNcXGAgb3IgXFxgaHR0cDJcXGAsIGdvdCBcXGAke2tleX1cXGBgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5tYXhSZWRpcmVjdHMgPSAoX2UgPSBvcHRpb25zLm1heFJlZGlyZWN0cykgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogMDtcbiAgICAgICAgLy8gU2V0IG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgZXhwb3J0cy5zZXROb25FbnVtZXJhYmxlUHJvcGVydGllcyhbZGVmYXVsdHMsIHJhd09wdGlvbnNdLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZV9hcmd1bWVudHNfMS5kZWZhdWx0KG9wdGlvbnMsIGRlZmF1bHRzKTtcbiAgICB9XG4gICAgX2xvY2tXcml0ZSgpIHtcbiAgICAgICAgY29uc3Qgb25Mb2NrZWRXcml0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBwYXlsb2FkIGhhcyBiZWVuIGFscmVhZHkgcHJvdmlkZWQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy53cml0ZSA9IG9uTG9ja2VkV3JpdGU7XG4gICAgICAgIHRoaXMuZW5kID0gb25Mb2NrZWRXcml0ZTtcbiAgICB9XG4gICAgX3VubG9ja1dyaXRlKCkge1xuICAgICAgICB0aGlzLndyaXRlID0gc3VwZXIud3JpdGU7XG4gICAgICAgIHRoaXMuZW5kID0gc3VwZXIuZW5kO1xuICAgIH1cbiAgICBhc3luYyBfZmluYWxpemVCb2R5KCkge1xuICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgaGVhZGVycyB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3QgaXNGb3JtID0gIWlzXzEuZGVmYXVsdC51bmRlZmluZWQob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgY29uc3QgaXNKU09OID0gIWlzXzEuZGVmYXVsdC51bmRlZmluZWQob3B0aW9ucy5qc29uKTtcbiAgICAgICAgY29uc3QgaXNCb2R5ID0gIWlzXzEuZGVmYXVsdC51bmRlZmluZWQob3B0aW9ucy5ib2R5KTtcbiAgICAgICAgY29uc3QgaGFzUGF5bG9hZCA9IGlzRm9ybSB8fCBpc0pTT04gfHwgaXNCb2R5O1xuICAgICAgICBjb25zdCBjYW5ub3RIYXZlQm9keSA9IGV4cG9ydHMud2l0aG91dEJvZHkuaGFzKG9wdGlvbnMubWV0aG9kKSAmJiAhKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJyAmJiBvcHRpb25zLmFsbG93R2V0Qm9keSk7XG4gICAgICAgIHRoaXMuX2Nhbm5vdEhhdmVCb2R5ID0gY2Fubm90SGF2ZUJvZHk7XG4gICAgICAgIGlmIChoYXNQYXlsb2FkKSB7XG4gICAgICAgICAgICBpZiAoY2Fubm90SGF2ZUJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25zLm1ldGhvZH1cXGAgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIHdpdGggYSBib2R5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoW2lzQm9keSwgaXNGb3JtLCBpc0pTT05dLmZpbHRlcihpc1RydWUgPT4gaXNUcnVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGBib2R5YCwgYGpzb25gIGFuZCBgZm9ybWAgb3B0aW9ucyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNCb2R5ICYmXG4gICAgICAgICAgICAgICAgIShvcHRpb25zLmJvZHkgaW5zdGFuY2VvZiBzdHJlYW1fMS5SZWFkYWJsZSkgJiZcbiAgICAgICAgICAgICAgICAhaXNfMS5kZWZhdWx0LnN0cmluZyhvcHRpb25zLmJvZHkpICYmXG4gICAgICAgICAgICAgICAgIWlzXzEuZGVmYXVsdC5idWZmZXIob3B0aW9ucy5ib2R5KSAmJlxuICAgICAgICAgICAgICAgICFpc19mb3JtX2RhdGFfMS5kZWZhdWx0KG9wdGlvbnMuYm9keSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgYGJvZHlgIG9wdGlvbiBtdXN0IGJlIGEgc3RyZWFtLlJlYWRhYmxlLCBzdHJpbmcgb3IgQnVmZmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNGb3JtICYmICFpc18xLmRlZmF1bHQub2JqZWN0KG9wdGlvbnMuZm9ybSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgYGZvcm1gIG9wdGlvbiBtdXN0IGJlIGFuIE9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBib2R5XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9Db250ZW50VHlwZSA9ICFpc18xLmRlZmF1bHQuc3RyaW5nKGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCb2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2Zvcm0tZGF0YS9mb3JtLWRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzX2Zvcm1fZGF0YV8xLmRlZmF1bHQob3B0aW9ucy5ib2R5KSAmJiBub0NvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydjb250ZW50LXR5cGUnXSA9IGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke29wdGlvbnMuYm9keS5nZXRCb3VuZGFyeSgpfWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpc1trQm9keV0gPSBvcHRpb25zLmJvZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzRm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9Db250ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tCb2R5XSA9IChuZXcgdXJsXzEuVVJMU2VhcmNoUGFyYW1zKG9wdGlvbnMuZm9ybSkpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9Db250ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpc1trQm9keV0gPSBvcHRpb25zLnN0cmluZ2lmeUpzb24ob3B0aW9ucy5qc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkQm9keVNpemUgPSBhd2FpdCBnZXRfYm9keV9zaXplXzEuZGVmYXVsdCh0aGlzW2tCb2R5XSwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjMuMlxuICAgICAgICAgICAgICAgIC8vIEEgdXNlciBhZ2VudCBTSE9VTEQgc2VuZCBhIENvbnRlbnQtTGVuZ3RoIGluIGEgcmVxdWVzdCBtZXNzYWdlIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBubyBUcmFuc2Zlci1FbmNvZGluZyBpcyBzZW50IGFuZCB0aGUgcmVxdWVzdCBtZXRob2QgZGVmaW5lcyBhIG1lYW5pbmdcbiAgICAgICAgICAgICAgICAvLyBmb3IgYW4gZW5jbG9zZWQgcGF5bG9hZCBib2R5LiAgRm9yIGV4YW1wbGUsIGEgQ29udGVudC1MZW5ndGggaGVhZGVyXG4gICAgICAgICAgICAgICAgLy8gZmllbGQgaXMgbm9ybWFsbHkgc2VudCBpbiBhIFBPU1QgcmVxdWVzdCBldmVuIHdoZW4gdGhlIHZhbHVlIGlzIDBcbiAgICAgICAgICAgICAgICAvLyAoaW5kaWNhdGluZyBhbiBlbXB0eSBwYXlsb2FkIGJvZHkpLiAgQSB1c2VyIGFnZW50IFNIT1VMRCBOT1Qgc2VuZCBhXG4gICAgICAgICAgICAgICAgLy8gQ29udGVudC1MZW5ndGggaGVhZGVyIGZpZWxkIHdoZW4gdGhlIHJlcXVlc3QgbWVzc2FnZSBkb2VzIG5vdCBjb250YWluXG4gICAgICAgICAgICAgICAgLy8gYSBwYXlsb2FkIGJvZHkgYW5kIHRoZSBtZXRob2Qgc2VtYW50aWNzIGRvIG5vdCBhbnRpY2lwYXRlIHN1Y2ggYVxuICAgICAgICAgICAgICAgIC8vIGJvZHkuXG4gICAgICAgICAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC51bmRlZmluZWQoaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSkgJiYgaXNfMS5kZWZhdWx0LnVuZGVmaW5lZChoZWFkZXJzWyd0cmFuc2Zlci1lbmNvZGluZyddKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbm5vdEhhdmVCb2R5ICYmICFpc18xLmRlZmF1bHQudW5kZWZpbmVkKHVwbG9hZEJvZHlTaXplKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSA9IFN0cmluZyh1cGxvYWRCb2R5U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2Fubm90SGF2ZUJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2tXcml0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdW5sb2NrV3JpdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2tCb2R5U2l6ZV0gPSBOdW1iZXIoaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSkgfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyBfb25SZXNwb25zZUJhc2UocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7IHVybCB9ID0gb3B0aW9ucztcbiAgICAgICAgdGhpc1trT3JpZ2luYWxSZXNwb25zZV0gPSByZXNwb25zZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZGVjb21wcmVzcykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBkZWNvbXByZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgICAgICBjb25zdCB0eXBlZFJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHR5cGVkUmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSA9IHR5cGVkUmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSA/IHR5cGVkUmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSA6IGh0dHAuU1RBVFVTX0NPREVTW3N0YXR1c0NvZGVdO1xuICAgICAgICB0eXBlZFJlc3BvbnNlLnVybCA9IG9wdGlvbnMudXJsLnRvU3RyaW5nKCk7XG4gICAgICAgIHR5cGVkUmVzcG9uc2UucmVxdWVzdFVybCA9IHRoaXMucmVxdWVzdFVybDtcbiAgICAgICAgdHlwZWRSZXNwb25zZS5yZWRpcmVjdFVybHMgPSB0aGlzLnJlZGlyZWN0cztcbiAgICAgICAgdHlwZWRSZXNwb25zZS5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgdHlwZWRSZXNwb25zZS5pc0Zyb21DYWNoZSA9IHJlc3BvbnNlLmZyb21DYWNoZSB8fCBmYWxzZTtcbiAgICAgICAgdHlwZWRSZXNwb25zZS5pcCA9IHRoaXMuaXA7XG4gICAgICAgIHR5cGVkUmVzcG9uc2UucmV0cnlDb3VudCA9IHRoaXMucmV0cnlDb3VudDtcbiAgICAgICAgdGhpc1trSXNGcm9tQ2FjaGVdID0gdHlwZWRSZXNwb25zZS5pc0Zyb21DYWNoZTtcbiAgICAgICAgdGhpc1trUmVzcG9uc2VTaXplXSA9IE51bWJlcihyZXNwb25zZS5oZWFkZXJzWydjb250ZW50LWxlbmd0aCddKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXNba1Jlc3BvbnNlXSA9IHJlc3BvbnNlO1xuICAgICAgICByZXNwb25zZS5vbmNlKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzW2tSZXNwb25zZVNpemVdID0gdGhpc1trRG93bmxvYWRlZFNpemVdO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdkb3dubG9hZFByb2dyZXNzJywgdGhpcy5kb3dubG9hZFByb2dyZXNzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3BvbnNlLm9uY2UoJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAvLyBGb3JjZSBjbGVhbi11cCwgYmVjYXVzZSBzb21lIHBhY2thZ2VzIGRvbid0IGRvIHRoaXMuXG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggZGVjb21wcmVzcy1yZXNwb25zZVxuICAgICAgICAgICAgcmVzcG9uc2UuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fYmVmb3JlRXJyb3IobmV3IFJlYWRFcnJvcihlcnJvciwgdGhpcykpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzcG9uc2Uub25jZSgnYWJvcnRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZUVycm9yKG5ldyBSZWFkRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBzZXJ2ZXIgYWJvcnRlZCBwZW5kaW5nIHJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFQ09OTlJFU0VUJ1xuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KCdkb3dubG9hZFByb2dyZXNzJywgdGhpcy5kb3dubG9hZFByb2dyZXNzKTtcbiAgICAgICAgY29uc3QgcmF3Q29va2llcyA9IHJlc3BvbnNlLmhlYWRlcnNbJ3NldC1jb29raWUnXTtcbiAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC5vYmplY3Qob3B0aW9ucy5jb29raWVKYXIpICYmIHJhd0Nvb2tpZXMpIHtcbiAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IHJhd0Nvb2tpZXMubWFwKGFzeW5jIChyYXdDb29raWUpID0+IG9wdGlvbnMuY29va2llSmFyLnNldENvb2tpZShyYXdDb29raWUsIHVybC50b1N0cmluZygpKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pZ25vcmVJbnZhbGlkQ29va2llcykge1xuICAgICAgICAgICAgICAgIHByb21pc2VzID0gcHJvbWlzZXMubWFwKGFzeW5jIChwKSA9PiBwLmNhdGNoKCgpID0+IHsgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iZWZvcmVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZvbGxvd1JlZGlyZWN0ICYmIHJlc3BvbnNlLmhlYWRlcnMubG9jYXRpb24gJiYgcmVkaXJlY3RDb2Rlcy5oYXMoc3RhdHVzQ29kZSkpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGJlaW5nIHJlZGlyZWN0ZWQsIHdlIGRvbid0IGNhcmUgYWJvdXQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgLy8gSXQnZCBiZSBiZXN0IHRvIGFib3J0IHRoZSByZXF1ZXN0LCBidXQgd2UgY2FuJ3QgYmVjYXVzZVxuICAgICAgICAgICAgLy8gd2Ugd291bGQgaGF2ZSB0byBzYWNyaWZpY2UgdGhlIFRDUCBjb25uZWN0aW9uLiBXZSBkb24ndCB3YW50IHRoYXQuXG4gICAgICAgICAgICByZXNwb25zZS5yZXN1bWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzW2tSZXF1ZXN0XSkge1xuICAgICAgICAgICAgICAgIHRoaXNba0NhbmNlbFRpbWVvdXRzXSgpO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZHluYW1pYy1kZWxldGVcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1trUmVxdWVzdF07XG4gICAgICAgICAgICAgICAgdGhpc1trVW5wcm94eUV2ZW50c10oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJlR2V0ID0gc3RhdHVzQ29kZSA9PT0gMzAzICYmIG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiBvcHRpb25zLm1ldGhvZCAhPT0gJ0hFQUQnO1xuICAgICAgICAgICAgaWYgKHNob3VsZEJlR2V0IHx8ICFvcHRpb25zLm1ldGhvZFJld3JpdGluZykge1xuICAgICAgICAgICAgICAgIC8vIFNlcnZlciByZXNwb25kZWQgd2l0aCBcInNlZSBvdGhlclwiLCBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlc291cmNlIGV4aXN0cyBhdCBhbm90aGVyIGxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGUgY2xpZW50IHNob3VsZCByZXF1ZXN0IGl0IGZyb20gdGhhdCBsb2NhdGlvbiB2aWEgR0VUIG9yIEhFQUQuXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICAgICAgICAgICAgICBpZiAoJ2JvZHknIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuYm9keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCdqc29uJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmpzb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgnZm9ybScgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5mb3JtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzW2tCb2R5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LWxlbmd0aCddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVkaXJlY3RzLmxlbmd0aCA+PSBvcHRpb25zLm1heFJlZGlyZWN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JlZm9yZUVycm9yKG5ldyBNYXhSZWRpcmVjdHNFcnJvcih0aGlzKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgcmVtb3ZlLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nb3QvcHVsbC8yMTRcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdEJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmhlYWRlcnMubG9jYXRpb24sICdiaW5hcnknKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZXMgaW52YWxpZCBVUkxzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nb3QvaXNzdWVzLzYwNFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID0gbmV3IHVybF8xLlVSTChyZWRpcmVjdEJ1ZmZlciwgdXJsKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdFN0cmluZyA9IHJlZGlyZWN0VXJsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgZGVjb2RlVVJJKHJlZGlyZWN0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdGluZyB0byBhIGRpZmZlcmVudCBzaXRlLCBjbGVhciBzZW5zaXRpdmUgZGF0YS5cbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RVcmwuaG9zdG5hbWUgIT09IHVybC5ob3N0bmFtZSB8fCByZWRpcmVjdFVybC5wb3J0ICE9PSB1cmwucG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ2hvc3QnIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuaGVhZGVycy5ob3N0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgnY29va2llJyBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnMuY29va2llO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgnYXV0aG9yaXphdGlvbicgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlcm5hbWUgfHwgb3B0aW9ucy5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51c2VybmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFVybC51c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsLnBhc3N3b3JkID0gb3B0aW9ucy5wYXNzd29yZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdHMucHVzaChyZWRpcmVjdFN0cmluZyk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSByZWRpcmVjdFVybDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvb2sgb2Ygb3B0aW9ucy5ob29rcy5iZWZvcmVSZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBob29rKG9wdGlvbnMsIHR5cGVkUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlZGlyZWN0JywgdHlwZWRSZXNwb25zZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fbWFrZVJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JlZm9yZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaXNTdHJlYW0gJiYgb3B0aW9ucy50aHJvd0h0dHBFcnJvcnMgJiYgIWlzX3Jlc3BvbnNlX29rXzEuaXNSZXNwb25zZU9rKHR5cGVkUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVFcnJvcihuZXcgSFRUUEVycm9yKHR5cGVkUmVzcG9uc2UpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXNwb25zZS5vbigncmVhZGFibGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpc1trVHJpZ2dlclJlYWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbigncmVzdW1lJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UucmVzdW1lKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdwYXVzZScsICgpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLnBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZS5vbmNlKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnB1c2gobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICBmb3IgKGNvbnN0IGRlc3RpbmF0aW9uIG9mIHRoaXNba1NlcnZlclJlc3BvbnNlc1BpcGVkXSkge1xuICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmhlYWRlcnNTZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXNwb25zZS5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBbGxvd2VkID0gb3B0aW9ucy5kZWNvbXByZXNzID8ga2V5ICE9PSAnY29udGVudC1lbmNvZGluZycgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzcG9uc2UuaGVhZGVyc1trZXldO1xuICAgICAgICAgICAgICAgIGlmIChpc0FsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uc2V0SGVhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIF9vblJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9vblJlc3BvbnNlQmFzZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogYmV0dGVyIHNhZmUgdGhhbiBzb3JyeSAqL1xuICAgICAgICAgICAgdGhpcy5fYmVmb3JlRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9vblJlcXVlc3QocmVxdWVzdCkge1xuICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgdGltZW91dCwgdXJsIH0gPSBvcHRpb25zO1xuICAgICAgICBodHRwX3RpbWVyXzEuZGVmYXVsdChyZXF1ZXN0KTtcbiAgICAgICAgdGhpc1trQ2FuY2VsVGltZW91dHNdID0gdGltZWRfb3V0XzEuZGVmYXVsdChyZXF1ZXN0LCB0aW1lb3V0LCB1cmwpO1xuICAgICAgICBjb25zdCByZXNwb25zZUV2ZW50TmFtZSA9IG9wdGlvbnMuY2FjaGUgPyAnY2FjaGVhYmxlUmVzcG9uc2UnIDogJ3Jlc3BvbnNlJztcbiAgICAgICAgcmVxdWVzdC5vbmNlKHJlc3BvbnNlRXZlbnROYW1lLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHZvaWQgdGhpcy5fb25SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0Lm9uY2UoJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAvLyBGb3JjZSBjbGVhbi11cCwgYmVjYXVzZSBzb21lIHBhY2thZ2VzIChlLmcuIG5vY2spIGRvbid0IGRvIHRoaXMuXG4gICAgICAgICAgICByZXF1ZXN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIE5vZGUuanMgPD0gMTIuMTguMiBtaXN0YWtlbmx5IGVtaXRzIHRoZSByZXNwb25zZSBgZW5kYCBmaXJzdC5cbiAgICAgICAgICAgIChfYSA9IHJlcXVlc3QucmVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQWxsTGlzdGVuZXJzKCdlbmQnKTtcbiAgICAgICAgICAgIGVycm9yID0gZXJyb3IgaW5zdGFuY2VvZiB0aW1lZF9vdXRfMS5UaW1lb3V0RXJyb3IgPyBuZXcgVGltZW91dEVycm9yKGVycm9yLCB0aGlzLnRpbWluZ3MsIHRoaXMpIDogbmV3IFJlcXVlc3RFcnJvcihlcnJvci5tZXNzYWdlLCBlcnJvciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzW2tVbnByb3h5RXZlbnRzXSA9IHByb3h5X2V2ZW50c18xLmRlZmF1bHQocmVxdWVzdCwgdGhpcywgcHJveGllZFJlcXVlc3RFdmVudHMpO1xuICAgICAgICB0aGlzW2tSZXF1ZXN0XSA9IHJlcXVlc3Q7XG4gICAgICAgIHRoaXMuZW1pdCgndXBsb2FkUHJvZ3Jlc3MnLCB0aGlzLnVwbG9hZFByb2dyZXNzKTtcbiAgICAgICAgLy8gU2VuZCBib2R5XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzW2tCb2R5XTtcbiAgICAgICAgY29uc3QgY3VycmVudFJlcXVlc3QgPSB0aGlzLnJlZGlyZWN0cy5sZW5ndGggPT09IDAgPyB0aGlzIDogcmVxdWVzdDtcbiAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC5ub2RlU3RyZWFtKGJvZHkpKSB7XG4gICAgICAgICAgICBib2R5LnBpcGUoY3VycmVudFJlcXVlc3QpO1xuICAgICAgICAgICAgYm9keS5vbmNlKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JlZm9yZUVycm9yKG5ldyBVcGxvYWRFcnJvcihlcnJvciwgdGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91bmxvY2tXcml0ZSgpO1xuICAgICAgICAgICAgaWYgKCFpc18xLmRlZmF1bHQudW5kZWZpbmVkKGJvZHkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdGVSZXF1ZXN0KGJvZHksIHVuZGVmaW5lZCwgKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVxdWVzdC5lbmQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NrV3JpdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2Nhbm5vdEhhdmVCb2R5IHx8IHRoaXMuX25vUGlwZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXF1ZXN0LmVuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tXcml0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHJlcXVlc3QpO1xuICAgIH1cbiAgICBhc3luYyBfY3JlYXRlQ2FjaGVhYmxlUmVxdWVzdCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSBgdXRpbHMvdXJsLXRvLW9wdGlvbnMudHNgIHdoZW4gYGNhY2hlYWJsZS1yZXF1ZXN0YCBpcyBmaXhlZFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB1cmxfdG9fb3B0aW9uc18xLmRlZmF1bHQodXJsKSk7XG4gICAgICAgICAgICAvLyBgaHR0cC1jYWNoZS1zZW1hbnRpY3NgIGNoZWNrcyB0aGlzXG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggdGhpcyBpZ25vcmUuXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy51cmw7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdDtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdWdseVxuICAgICAgICAgICAgY29uc3QgY2FjaGVSZXF1ZXN0ID0gY2FjaGVhYmxlU3RvcmUuZ2V0KG9wdGlvbnMuY2FjaGUpKG9wdGlvbnMsIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEZpeCBgY2FjaGVhYmxlLXJlc3BvbnNlYFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLl9yZWFkYWJsZVN0YXRlLmF1dG9EZXN0cm95ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgKGF3YWl0IHJlcXVlc3QpLmVtaXQoJ2NhY2hlYWJsZVJlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcHRpb25zXG4gICAgICAgICAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICAgICAgICAgIGNhY2hlUmVxdWVzdC5vbmNlKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgICAgICBjYWNoZVJlcXVlc3Qub25jZSgncmVxdWVzdCcsIGFzeW5jIChyZXF1ZXN0T3JQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3RPclByb21pc2U7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgX21ha2VSZXF1ZXN0KCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgaGVhZGVycyB9ID0gb3B0aW9ucztcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC51bmRlZmluZWQoaGVhZGVyc1trZXldKSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZHluYW1pYy1kZWxldGVcbiAgICAgICAgICAgICAgICBkZWxldGUgaGVhZGVyc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNfMS5kZWZhdWx0Lm51bGxfKGhlYWRlcnNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVc2UgXFxgdW5kZWZpbmVkXFxgIGluc3RlYWQgb2YgXFxgbnVsbFxcYCB0byBkZWxldGUgdGhlIFxcYCR7a2V5fVxcYCBoZWFkZXJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5kZWNvbXByZXNzICYmIGlzXzEuZGVmYXVsdC51bmRlZmluZWQoaGVhZGVyc1snYWNjZXB0LWVuY29kaW5nJ10pKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydhY2NlcHQtZW5jb2RpbmcnXSA9IHN1cHBvcnRzQnJvdGxpID8gJ2d6aXAsIGRlZmxhdGUsIGJyJyA6ICdnemlwLCBkZWZsYXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgY29va2llc1xuICAgICAgICBpZiAob3B0aW9ucy5jb29raWVKYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGF3YWl0IG9wdGlvbnMuY29va2llSmFyLmdldENvb2tpZVN0cmluZyhvcHRpb25zLnVybC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlmIChpc18xLmRlZmF1bHQubm9uRW1wdHlTdHJpbmcoY29va2llU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycy5jb29raWUgPSBjb29raWVTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBob29rIG9mIG9wdGlvbnMuaG9va3MuYmVmb3JlUmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhvb2sob3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoIWlzXzEuZGVmYXVsdC51bmRlZmluZWQocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgU2tpcCB0aGUgdHlwZSBtaXNtYXRjaCB0byBzdXBwb3J0IGFic3RyYWN0IHJlc3BvbnNlc1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVxdWVzdCA9ICgpID0+IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5ib2R5ICYmIHRoaXNba0JvZHldICE9PSBvcHRpb25zLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXNba0JvZHldID0gb3B0aW9ucy5ib2R5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgYWdlbnQsIHJlcXVlc3QsIHRpbWVvdXQsIHVybCB9ID0gb3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMuZG5zQ2FjaGUgJiYgISgnbG9va3VwJyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5sb29rdXAgPSBvcHRpb25zLmRuc0NhY2hlLmxvb2t1cDtcbiAgICAgICAgfVxuICAgICAgICAvLyBVTklYIHNvY2tldHNcbiAgICAgICAgaWYgKHVybC5ob3N0bmFtZSA9PT0gJ3VuaXgnKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gLyg/PHNvY2tldFBhdGg+Lis/KTooPzxwYXRoPi4rKS8uZXhlYyhgJHt1cmwucGF0aG5hbWV9JHt1cmwuc2VhcmNofWApO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwgfHwgbWF0Y2hlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF0Y2hlcy5ncm91cHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNvY2tldFBhdGgsIHBhdGggfSA9IG1hdGNoZXMuZ3JvdXBzO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXRQYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBob3N0OiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzSHR0cHMgPSB1cmwucHJvdG9jb2wgPT09ICdodHRwczonO1xuICAgICAgICAvLyBGYWxsYmFjayBmdW5jdGlvblxuICAgICAgICBsZXQgZmFsbGJhY2tGbjtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHR0cDIpIHtcbiAgICAgICAgICAgIGZhbGxiYWNrRm4gPSBodHRwMndyYXBwZXIuYXV0bztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZhbGxiYWNrRm4gPSBpc0h0dHBzID8gaHR0cHMucmVxdWVzdCA6IGh0dHAucmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFsRm4gPSAoX2EgPSBvcHRpb25zLnJlcXVlc3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbGxiYWNrRm47XG4gICAgICAgIC8vIENhY2hlIHN1cHBvcnRcbiAgICAgICAgY29uc3QgZm4gPSBvcHRpb25zLmNhY2hlID8gdGhpcy5fY3JlYXRlQ2FjaGVhYmxlUmVxdWVzdCA6IHJlYWxGbjtcbiAgICAgICAgLy8gUGFzcyBhbiBhZ2VudCBkaXJlY3RseSB3aGVuIEhUVFAyIGlzIGRpc2FibGVkXG4gICAgICAgIGlmIChhZ2VudCAmJiAhb3B0aW9ucy5odHRwMikge1xuICAgICAgICAgICAgb3B0aW9ucy5hZ2VudCA9IGFnZW50W2lzSHR0cHMgPyAnaHR0cHMnIDogJ2h0dHAnXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmVwYXJlIHBsYWluIEhUVFAgcmVxdWVzdCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnNba1JlcXVlc3RdID0gcmVhbEZuO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5yZXF1ZXN0O1xuICAgICAgICAvLyBUT0RPOiBGaXggdGhpcyBpZ25vcmUuXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudGltZW91dDtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICByZXF1ZXN0T3B0aW9ucy5zaGFyZWQgPSAoX2IgPSBvcHRpb25zLmNhY2hlT3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNoYXJlZDtcbiAgICAgICAgcmVxdWVzdE9wdGlvbnMuY2FjaGVIZXVyaXN0aWMgPSAoX2MgPSBvcHRpb25zLmNhY2hlT3B0aW9ucykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhY2hlSGV1cmlzdGljO1xuICAgICAgICByZXF1ZXN0T3B0aW9ucy5pbW11dGFibGVNaW5UaW1lVG9MaXZlID0gKF9kID0gb3B0aW9ucy5jYWNoZU9wdGlvbnMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5pbW11dGFibGVNaW5UaW1lVG9MaXZlO1xuICAgICAgICByZXF1ZXN0T3B0aW9ucy5pZ25vcmVDYXJnb0N1bHQgPSAoX2UgPSBvcHRpb25zLmNhY2hlT3B0aW9ucykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmlnbm9yZUNhcmdvQ3VsdDtcbiAgICAgICAgLy8gSWYgYGRuc0xvb2t1cElwVmVyc2lvbmAgaXMgbm90IHByZXNlbnQgZG8gbm90IG92ZXJyaWRlIGBmYW1pbHlgXG4gICAgICAgIGlmIChvcHRpb25zLmRuc0xvb2t1cElwVmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmZhbWlseSA9IGRuc19pcF92ZXJzaW9uXzEuZG5zTG9va3VwSXBWZXJzaW9uVG9GYW1pbHkob3B0aW9ucy5kbnNMb29rdXBJcFZlcnNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9mKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGBkbnNMb29rdXBJcFZlcnNpb25gIG9wdGlvbiB2YWx1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhUVFBTIG9wdGlvbnMgcmVtYXBwaW5nXG4gICAgICAgIGlmIChvcHRpb25zLmh0dHBzKSB7XG4gICAgICAgICAgICBpZiAoJ3JlamVjdFVuYXV0aG9yaXplZCcgaW4gb3B0aW9ucy5odHRwcykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdGlvbnMuaHR0cHMucmVqZWN0VW5hdXRob3JpemVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaHR0cHMuY2hlY2tTZXJ2ZXJJZGVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmNoZWNrU2VydmVySWRlbnRpdHkgPSBvcHRpb25zLmh0dHBzLmNoZWNrU2VydmVySWRlbnRpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5odHRwcy5jZXJ0aWZpY2F0ZUF1dGhvcml0eSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmNhID0gb3B0aW9ucy5odHRwcy5jZXJ0aWZpY2F0ZUF1dGhvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmh0dHBzLmNlcnRpZmljYXRlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMuY2VydCA9IG9wdGlvbnMuaHR0cHMuY2VydGlmaWNhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5odHRwcy5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5rZXkgPSBvcHRpb25zLmh0dHBzLmtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmh0dHBzLnBhc3NwaHJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5wYXNzcGhyYXNlID0gb3B0aW9ucy5odHRwcy5wYXNzcGhyYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaHR0cHMucGZ4KSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMucGZ4ID0gb3B0aW9ucy5odHRwcy5wZng7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0T3JSZXNwb25zZSA9IGF3YWl0IGZuKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGlzXzEuZGVmYXVsdC51bmRlZmluZWQocmVxdWVzdE9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdE9yUmVzcG9uc2UgPSBmYWxsYmFja0ZuKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcHRpb25zXG4gICAgICAgICAgICBvcHRpb25zLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgICAgICAgICAgb3B0aW9ucy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgICAgIG9wdGlvbnMuYWdlbnQgPSBhZ2VudDtcbiAgICAgICAgICAgIC8vIEhUVFBTIG9wdGlvbnMgcmVzdG9yZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaHR0cHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3JlamVjdFVuYXV0aG9yaXplZCcgaW4gb3B0aW9ucy5odHRwcykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdE9wdGlvbnMucmVqZWN0VW5hdXRob3JpemVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5odHRwcy5jaGVja1NlcnZlcklkZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUaGlzIG9uZSB3aWxsIGJlIHJlbW92ZWQgd2hlbiB3ZSByZW1vdmUgdGhlIGFsaWFzLlxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdE9wdGlvbnMuY2hlY2tTZXJ2ZXJJZGVudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaHR0cHMuY2VydGlmaWNhdGVBdXRob3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcXVlc3RPcHRpb25zLmNhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5odHRwcy5jZXJ0aWZpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdE9wdGlvbnMuY2VydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaHR0cHMua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmh0dHBzLnBhc3NwaHJhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcXVlc3RPcHRpb25zLnBhc3NwaHJhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmh0dHBzLnBmeCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdE9wdGlvbnMucGZ4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NsaWVudFJlcXVlc3QocmVxdWVzdE9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25SZXF1ZXN0KHJlcXVlc3RPclJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAvLyBFbWl0IHRoZSByZXNwb25zZSBhZnRlciB0aGUgc3RyZWFtIGhhcyBiZWVuIGVuZGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmNlKCdmaW5pc2gnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5fb25SZXNwb25zZShyZXF1ZXN0T3JSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5sb2NrV3JpdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tXcml0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdm9pZCB0aGlzLl9vblJlc3BvbnNlKHJlcXVlc3RPclJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIENhY2hlYWJsZVJlcXVlc3QuQ2FjaGVFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDYWNoZUVycm9yKGVycm9yLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSwgZXJyb3IsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIF9lcnJvcihlcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBob29rIG9mIHRoaXMub3B0aW9ucy5ob29rcy5iZWZvcmVFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBhd2FpdCBob29rKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3JfKSB7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBSZXF1ZXN0RXJyb3IoZXJyb3JfLm1lc3NhZ2UsIGVycm9yXywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0cm95KGVycm9yKTtcbiAgICB9XG4gICAgX2JlZm9yZUVycm9yKGVycm9yKSB7XG4gICAgICAgIGlmICh0aGlzW2tTdG9wUmVhZGluZ10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHJldHJ5Q291bnQgPSB0aGlzLnJldHJ5Q291bnQgKyAxO1xuICAgICAgICB0aGlzW2tTdG9wUmVhZGluZ10gPSB0cnVlO1xuICAgICAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIFJlcXVlc3RFcnJvcikpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IFJlcXVlc3RFcnJvcihlcnJvci5tZXNzYWdlLCBlcnJvciwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZWRFcnJvciA9IGVycm9yO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSB0eXBlZEVycm9yO1xuICAgICAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRFbmNvZGluZyh0aGlzLl9yZWFkYWJsZVN0YXRlLmVuY29kaW5nKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yYXdCb2R5ID0gYXdhaXQgZ2V0X2J1ZmZlcl8xLmRlZmF1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5ib2R5ID0gcmVzcG9uc2UucmF3Qm9keS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJDb3VudCgncmV0cnknKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBiYWNrb2ZmO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXRyeUFmdGVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgJ3JldHJ5LWFmdGVyJyBpbiByZXNwb25zZS5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeUFmdGVyID0gTnVtYmVyKHJlc3BvbnNlLmhlYWRlcnNbJ3JldHJ5LWFmdGVyJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihyZXRyeUFmdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5QWZ0ZXIgPSBEYXRlLnBhcnNlKHJlc3BvbnNlLmhlYWRlcnNbJ3JldHJ5LWFmdGVyJ10pIC0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cnlBZnRlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5QWZ0ZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5QWZ0ZXIgKj0gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiYWNrb2ZmID0gYXdhaXQgb3B0aW9ucy5yZXRyeS5jYWxjdWxhdGVEZWxheSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0Q291bnQ6IHJldHJ5Q291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeU9wdGlvbnM6IG9wdGlvbnMucmV0cnksXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHlwZWRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5QWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlZFZhbHVlOiBjYWxjdWxhdGVfcmV0cnlfZGVsYXlfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0Q291bnQ6IHJldHJ5Q291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnlPcHRpb25zOiBvcHRpb25zLnJldHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB0eXBlZEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5QWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWRWYWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcl8pIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCB0aGlzLl9lcnJvcihuZXcgUmVxdWVzdEVycm9yKGVycm9yXy5tZXNzYWdlLCBlcnJvcl8sIHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmFja29mZikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRyeSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBob29rIG9mIHRoaXMub3B0aW9ucy5ob29rcy5iZWZvcmVSZXRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBob29rKHRoaXMub3B0aW9ucywgdHlwZWRFcnJvciwgcmV0cnlDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5fZXJyb3IobmV3IFJlcXVlc3RFcnJvcihlcnJvcl8ubWVzc2FnZSwgZXJyb3IsIHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgZm9yY2VkIHVzIHRvIGFib3J0IHRoZSByZXRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JldHJ5JywgcmV0cnlDb3VudCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tSZXRyeVRpbWVvdXRdID0gc2V0VGltZW91dChyZXRyeSwgYmFja29mZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIHRoaXMuX2Vycm9yKHR5cGVkRXJyb3IpO1xuICAgICAgICB9KSgpO1xuICAgIH1cbiAgICBfcmVhZCgpIHtcbiAgICAgICAgdGhpc1trVHJpZ2dlclJlYWRdID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzW2tSZXNwb25zZV07XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiAhdGhpc1trU3RvcFJlYWRpbmddKSB7XG4gICAgICAgICAgICAvLyBXZSBjYW5ub3QgcHV0IHRoaXMgaW4gdGhlIGBpZmAgYWJvdmVcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgYC5yZWFkKClgIGFsc28gdHJpZ2dlcnMgdGhlIGBlbmRgIGV2ZW50XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVhZGFibGVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tUcmlnZ2VyUmVhZF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgd2hpbGUgKChkYXRhID0gcmVzcG9uc2UucmVhZCgpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXNba0Rvd25sb2FkZWRTaXplXSArPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzW2tTdGFydGVkUmVhZGluZ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5kb3dubG9hZFByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcy5wZXJjZW50IDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Rvd25sb2FkUHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBOb2RlLmpzIDEyIGhhcyBpbmNvcnJlY3QgdHlwZXMsIHNvIHRoZSBlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nXG4gICAgX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgd3JpdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl93cml0ZVJlcXVlc3QoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgd3JpdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba0pvYnNdLnB1c2god3JpdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF93cml0ZVJlcXVlc3QoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpc1trUmVxdWVzdF0uZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAvLyBQcm9iYWJseSB0aGUgYENsaWVudFJlcXVlc3RgIGluc3RhbmNlIHdpbGwgdGhyb3dcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrcy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXNba1VwbG9hZGVkU2l6ZV0gKz0gQnVmZmVyLmJ5dGVMZW5ndGgoY2h1bmssIGVuY29kaW5nKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy51cGxvYWRQcm9ncmVzcztcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcy5wZXJjZW50IDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBsb2FkUHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUT0RPOiBXaGF0IGhhcHBlbnMgaWYgaXQncyBmcm9tIGNhY2hlPyBUaGVuIHRoaXNba1JlcXVlc3RdIHdvbid0IGJlIGRlZmluZWQuXG4gICAgICAgIHRoaXNba1JlcXVlc3RdLndyaXRlKGNodW5rLCBlbmNvZGluZywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycm9yICYmIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrcy5zaGlmdCgpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZmluYWwoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgZW5kUmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIEZJWDogTm9kZS5qcyAxMCBjYWxscyB0aGUgd3JpdGUgY2FsbGJhY2sgQUZURVIgdGhlIGVuZCBjYWxsYmFjayFcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wcm9ncmVzc0NhbGxiYWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrcy5zaGlmdCgpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGlmIGB0aGlzW2tSZXF1ZXN0XWAgaXMgcHJlc2VudCxcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgaXQgaXNuJ3Qgd2hlbiB3ZSB1c2UgY2FjaGUuXG4gICAgICAgICAgICBpZiAoIShrUmVxdWVzdCBpbiB0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNba1JlcXVlc3RdLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1trUmVxdWVzdF0uZW5kKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trQm9keVNpemVdID0gdGhpc1trVXBsb2FkZWRTaXplXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGxvYWRQcm9ncmVzcycsIHRoaXMudXBsb2FkUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tSZXF1ZXN0XS5lbWl0KCd1cGxvYWQtY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgZW5kUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpc1trSm9ic10ucHVzaChlbmRSZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZGVzdHJveShlcnJvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzW2tTdG9wUmVhZGluZ10gPSB0cnVlO1xuICAgICAgICAvLyBQcmV2ZW50IGZ1cnRoZXIgcmV0cmllc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpc1trUmV0cnlUaW1lb3V0XSk7XG4gICAgICAgIGlmIChrUmVxdWVzdCBpbiB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzW2tDYW5jZWxUaW1lb3V0c10oKTtcbiAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGUgbmV4dCBgaWZgIHdoZW4gdGhlc2UgZ2V0IGZpeGVkOlxuICAgICAgICAgICAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzMyODUxXG4gICAgICAgICAgICBpZiAoISgoX2EgPSB0aGlzW2tSZXNwb25zZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb21wbGV0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tSZXF1ZXN0XS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICE9PSBudWxsICYmICFpc18xLmRlZmF1bHQudW5kZWZpbmVkKGVycm9yKSAmJiAhKGVycm9yIGluc3RhbmNlb2YgUmVxdWVzdEVycm9yKSkge1xuICAgICAgICAgICAgZXJyb3IgPSBuZXcgUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UsIGVycm9yLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfVxuICAgIGdldCBfaXNBYm91dFRvRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2tTdG9wUmVhZGluZ107XG4gICAgfVxuICAgIC8qKlxuICAgIFRoZSByZW1vdGUgSVAgYWRkcmVzcy5cbiAgICAqL1xuICAgIGdldCBpcCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5zb2NrZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdGVBZGRyZXNzO1xuICAgIH1cbiAgICAvKipcbiAgICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcmVxdWVzdCBoYXMgYmVlbiBhYm9ydGVkIG9yIG5vdC5cbiAgICAqL1xuICAgIGdldCBhYm9ydGVkKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuICgoX2IgPSAoX2EgPSB0aGlzW2tSZXF1ZXN0XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlc3Ryb3llZCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5kZXN0cm95ZWQpICYmICEoKF9jID0gdGhpc1trT3JpZ2luYWxSZXNwb25zZV0pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb21wbGV0ZSk7XG4gICAgfVxuICAgIGdldCBzb2NrZXQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzW2tSZXF1ZXN0XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNvY2tldCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICBQcm9ncmVzcyBldmVudCBmb3IgZG93bmxvYWRpbmcgKHJlY2VpdmluZyBhIHJlc3BvbnNlKS5cbiAgICAqL1xuICAgIGdldCBkb3dubG9hZFByb2dyZXNzKCkge1xuICAgICAgICBsZXQgcGVyY2VudDtcbiAgICAgICAgaWYgKHRoaXNba1Jlc3BvbnNlU2l6ZV0pIHtcbiAgICAgICAgICAgIHBlcmNlbnQgPSB0aGlzW2tEb3dubG9hZGVkU2l6ZV0gLyB0aGlzW2tSZXNwb25zZVNpemVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXNba1Jlc3BvbnNlU2l6ZV0gPT09IHRoaXNba0Rvd25sb2FkZWRTaXplXSkge1xuICAgICAgICAgICAgcGVyY2VudCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGVyY2VudCxcbiAgICAgICAgICAgIHRyYW5zZmVycmVkOiB0aGlzW2tEb3dubG9hZGVkU2l6ZV0sXG4gICAgICAgICAgICB0b3RhbDogdGhpc1trUmVzcG9uc2VTaXplXVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICBQcm9ncmVzcyBldmVudCBmb3IgdXBsb2FkaW5nIChzZW5kaW5nIGEgcmVxdWVzdCkuXG4gICAgKi9cbiAgICBnZXQgdXBsb2FkUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGxldCBwZXJjZW50O1xuICAgICAgICBpZiAodGhpc1trQm9keVNpemVdKSB7XG4gICAgICAgICAgICBwZXJjZW50ID0gdGhpc1trVXBsb2FkZWRTaXplXSAvIHRoaXNba0JvZHlTaXplXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzW2tCb2R5U2l6ZV0gPT09IHRoaXNba1VwbG9hZGVkU2l6ZV0pIHtcbiAgICAgICAgICAgIHBlcmNlbnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBlcmNlbnQsXG4gICAgICAgICAgICB0cmFuc2ZlcnJlZDogdGhpc1trVXBsb2FkZWRTaXplXSxcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzW2tCb2R5U2l6ZV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgVGhlIG9iamVjdCBjb250YWlucyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cbiAgICAtIGBzdGFydGAgLSBUaW1lIHdoZW4gdGhlIHJlcXVlc3Qgc3RhcnRlZC5cbiAgICAtIGBzb2NrZXRgIC0gVGltZSB3aGVuIGEgc29ja2V0IHdhcyBhc3NpZ25lZCB0byB0aGUgcmVxdWVzdC5cbiAgICAtIGBsb29rdXBgIC0gVGltZSB3aGVuIHRoZSBETlMgbG9va3VwIGZpbmlzaGVkLlxuICAgIC0gYGNvbm5lY3RgIC0gVGltZSB3aGVuIHRoZSBzb2NrZXQgc3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZC5cbiAgICAtIGBzZWN1cmVDb25uZWN0YCAtIFRpbWUgd2hlbiB0aGUgc29ja2V0IHNlY3VyZWx5IGNvbm5lY3RlZC5cbiAgICAtIGB1cGxvYWRgIC0gVGltZSB3aGVuIHRoZSByZXF1ZXN0IGZpbmlzaGVkIHVwbG9hZGluZy5cbiAgICAtIGByZXNwb25zZWAgLSBUaW1lIHdoZW4gdGhlIHJlcXVlc3QgZmlyZWQgYHJlc3BvbnNlYCBldmVudC5cbiAgICAtIGBlbmRgIC0gVGltZSB3aGVuIHRoZSByZXNwb25zZSBmaXJlZCBgZW5kYCBldmVudC5cbiAgICAtIGBlcnJvcmAgLSBUaW1lIHdoZW4gdGhlIHJlcXVlc3QgZmlyZWQgYGVycm9yYCBldmVudC5cbiAgICAtIGBhYm9ydGAgLSBUaW1lIHdoZW4gdGhlIHJlcXVlc3QgZmlyZWQgYGFib3J0YCBldmVudC5cbiAgICAtIGBwaGFzZXNgXG4gICAgICAgIC0gYHdhaXRgIC0gYHRpbWluZ3Muc29ja2V0IC0gdGltaW5ncy5zdGFydGBcbiAgICAgICAgLSBgZG5zYCAtIGB0aW1pbmdzLmxvb2t1cCAtIHRpbWluZ3Muc29ja2V0YFxuICAgICAgICAtIGB0Y3BgIC0gYHRpbWluZ3MuY29ubmVjdCAtIHRpbWluZ3MubG9va3VwYFxuICAgICAgICAtIGB0bHNgIC0gYHRpbWluZ3Muc2VjdXJlQ29ubmVjdCAtIHRpbWluZ3MuY29ubmVjdGBcbiAgICAgICAgLSBgcmVxdWVzdGAgLSBgdGltaW5ncy51cGxvYWQgLSAodGltaW5ncy5zZWN1cmVDb25uZWN0IHx8IHRpbWluZ3MuY29ubmVjdClgXG4gICAgICAgIC0gYGZpcnN0Qnl0ZWAgLSBgdGltaW5ncy5yZXNwb25zZSAtIHRpbWluZ3MudXBsb2FkYFxuICAgICAgICAtIGBkb3dubG9hZGAgLSBgdGltaW5ncy5lbmQgLSB0aW1pbmdzLnJlc3BvbnNlYFxuICAgICAgICAtIGB0b3RhbGAgLSBgKHRpbWluZ3MuZW5kIHx8IHRpbWluZ3MuZXJyb3IgfHwgdGltaW5ncy5hYm9ydCkgLSB0aW1pbmdzLnN0YXJ0YFxuXG4gICAgSWYgc29tZXRoaW5nIGhhcyBub3QgYmVlbiBtZWFzdXJlZCB5ZXQsIGl0IHdpbGwgYmUgYHVuZGVmaW5lZGAuXG5cbiAgICBfX05vdGVfXzogVGhlIHRpbWUgaXMgYSBgbnVtYmVyYCByZXByZXNlbnRpbmcgdGhlIG1pbGxpc2Vjb25kcyBlbGFwc2VkIHNpbmNlIHRoZSBVTklYIGVwb2NoLlxuICAgICovXG4gICAgZ2V0IHRpbWluZ3MoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXNba1JlcXVlc3RdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGltaW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgV2hldGhlciB0aGUgcmVzcG9uc2Ugd2FzIHJldHJpZXZlZCBmcm9tIHRoZSBjYWNoZS5cbiAgICAqL1xuICAgIGdldCBpc0Zyb21DYWNoZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNba0lzRnJvbUNhY2hlXTtcbiAgICB9XG4gICAgcGlwZShkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICAgICAgICBpZiAodGhpc1trU3RhcnRlZFJlYWRpbmddKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBwaXBlLiBUaGUgcmVzcG9uc2UgaGFzIGJlZW4gZW1pdHRlZCBhbHJlYWR5LicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiBpbnN0YW5jZW9mIGh0dHBfMS5TZXJ2ZXJSZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpc1trU2VydmVyUmVzcG9uc2VzUGlwZWRdLmFkZChkZXN0aW5hdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLnBpcGUoZGVzdGluYXRpb24sIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bnBpcGUoZGVzdGluYXRpb24pIHtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uIGluc3RhbmNlb2YgaHR0cF8xLlNlcnZlclJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzW2tTZXJ2ZXJSZXNwb25zZXNQaXBlZF0uZGVsZXRlKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci51bnBpcGUoZGVzdGluYXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZXF1ZXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRuc0xvb2t1cElwVmVyc2lvblRvRmFtaWx5ID0gZXhwb3J0cy5pc0Ruc0xvb2t1cElwVmVyc2lvbiA9IHZvaWQgMDtcbmNvbnN0IGNvbnZlcnNpb25UYWJsZSA9IHtcbiAgICBhdXRvOiAwLFxuICAgIGlwdjQ6IDQsXG4gICAgaXB2NjogNlxufTtcbmV4cG9ydHMuaXNEbnNMb29rdXBJcFZlcnNpb24gPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdmFsdWUgaW4gY29udmVyc2lvblRhYmxlO1xufTtcbmV4cG9ydHMuZG5zTG9va3VwSXBWZXJzaW9uVG9GYW1pbHkgPSAoZG5zTG9va3VwSXBWZXJzaW9uKSA9PiB7XG4gICAgaWYgKGV4cG9ydHMuaXNEbnNMb29rdXBJcFZlcnNpb24oZG5zTG9va3VwSXBWZXJzaW9uKSkge1xuICAgICAgICByZXR1cm4gY29udmVyc2lvblRhYmxlW2Ruc0xvb2t1cElwVmVyc2lvbl07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBETlMgbG9va3VwIElQIHZlcnNpb24nKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZzXzEgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IGlzXzEgPSByZXF1aXJlKFwiQHNpbmRyZXNvcmh1cy9pc1wiKTtcbmNvbnN0IGlzX2Zvcm1fZGF0YV8xID0gcmVxdWlyZShcIi4vaXMtZm9ybS1kYXRhXCIpO1xuY29uc3Qgc3RhdEFzeW5jID0gdXRpbF8xLnByb21pc2lmeShmc18xLnN0YXQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXN5bmMgKGJvZHksIGhlYWRlcnMpID0+IHtcbiAgICBpZiAoaGVhZGVycyAmJiAnY29udGVudC1sZW5ndGgnIGluIGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihoZWFkZXJzWydjb250ZW50LWxlbmd0aCddKTtcbiAgICB9XG4gICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoaXNfMS5kZWZhdWx0LnN0cmluZyhib2R5KSkge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmJ5dGVMZW5ndGgoYm9keSk7XG4gICAgfVxuICAgIGlmIChpc18xLmRlZmF1bHQuYnVmZmVyKGJvZHkpKSB7XG4gICAgICAgIHJldHVybiBib2R5Lmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKGlzX2Zvcm1fZGF0YV8xLmRlZmF1bHQoYm9keSkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5wcm9taXNpZnkoYm9keS5nZXRMZW5ndGguYmluZChib2R5KSkoKTtcbiAgICB9XG4gICAgaWYgKGJvZHkgaW5zdGFuY2VvZiBmc18xLlJlYWRTdHJlYW0pIHtcbiAgICAgICAgY29uc3QgeyBzaXplIH0gPSBhd2FpdCBzdGF0QXN5bmMoYm9keS5wYXRoKTtcbiAgICAgICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBUT0RPOiBVcGRhdGUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nZXQtc3RyZWFtXG5jb25zdCBnZXRCdWZmZXIgPSBhc3luYyAoc3RyZWFtKSA9PiB7XG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBzdHJlYW0pIHtcbiAgICAgICAgY2h1bmtzLnB1c2goY2h1bmspO1xuICAgICAgICBsZW5ndGggKz0gQnVmZmVyLmJ5dGVMZW5ndGgoY2h1bmspO1xuICAgIH1cbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGNodW5rc1swXSkpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoY2h1bmtzLCBsZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gQnVmZmVyLmZyb20oY2h1bmtzLmpvaW4oJycpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRCdWZmZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGlzXzEgPSByZXF1aXJlKFwiQHNpbmRyZXNvcmh1cy9pc1wiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IChib2R5KSA9PiBpc18xLmRlZmF1bHQubm9kZVN0cmVhbShib2R5KSAmJiBpc18xLmRlZmF1bHQuZnVuY3Rpb25fKGJvZHkuZ2V0Qm91bmRhcnkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzUmVzcG9uc2VPayA9IHZvaWQgMDtcbmV4cG9ydHMuaXNSZXNwb25zZU9rID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBsaW1pdFN0YXR1c0NvZGUgPSByZXNwb25zZS5yZXF1ZXN0Lm9wdGlvbnMuZm9sbG93UmVkaXJlY3QgPyAyOTkgOiAzOTk7XG4gICAgcmV0dXJuIChzdGF0dXNDb2RlID49IDIwMCAmJiBzdGF0dXNDb2RlIDw9IGxpbWl0U3RhdHVzQ29kZSkgfHwgc3RhdHVzQ29kZSA9PT0gMzA0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyogaXN0YW5idWwgaWdub3JlIGZpbGU6IGRlcHJlY2F0ZWQgKi9cbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IGtleXMgPSBbXG4gICAgJ3Byb3RvY29sJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAnc2VhcmNoJ1xuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IChvcmlnaW4sIG9wdGlvbnMpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmIChvcHRpb25zLnBhdGgpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BhcmFtZXRlcnMgYHBhdGhgIGFuZCBgcGF0aG5hbWVgIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc2VhcmNoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXJhbWV0ZXJzIGBwYXRoYCBhbmQgYHNlYXJjaGAgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BhcmFtZXRlcnMgYHBhdGhgIGFuZCBgc2VhcmNoUGFyYW1zYCBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnNlYXJjaCAmJiBvcHRpb25zLnNlYXJjaFBhcmFtcykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXJhbWV0ZXJzIGBzZWFyY2hgIGFuZCBgc2VhcmNoUGFyYW1zYCBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLicpO1xuICAgIH1cbiAgICBpZiAoIW9yaWdpbikge1xuICAgICAgICBpZiAoIW9wdGlvbnMucHJvdG9jb2wpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIFVSTCBwcm90b2NvbCBzcGVjaWZpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW4gPSBgJHtvcHRpb25zLnByb3RvY29sfS8vJHsoX2IgPSAoX2EgPSBvcHRpb25zLmhvc3RuYW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBvcHRpb25zLmhvc3QpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnfWA7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IG5ldyB1cmxfMS5VUkwob3JpZ2luKTtcbiAgICBpZiAob3B0aW9ucy5wYXRoKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEluZGV4ID0gb3B0aW9ucy5wYXRoLmluZGV4T2YoJz8nKTtcbiAgICAgICAgaWYgKHNlYXJjaEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wYXRobmFtZSA9IG9wdGlvbnMucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGguc2xpY2UoMCwgc2VhcmNoSW5kZXgpO1xuICAgICAgICAgICAgb3B0aW9ucy5zZWFyY2ggPSBvcHRpb25zLnBhdGguc2xpY2Uoc2VhcmNoSW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5wYXRoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAgIHVybFtrZXldID0gb3B0aW9uc1trZXldLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShmcm9tLCB0bywgZXZlbnRzKSB7XG4gICAgY29uc3QgZm5zID0ge307XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgICAgZm5zW2V2ZW50XSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICB0by5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnJvbS5vbihldmVudCwgZm5zW2V2ZW50XSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICAgICAgICBmcm9tLm9mZihldmVudCwgZm5zW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRpbWVvdXRFcnJvciA9IHZvaWQgMDtcbmNvbnN0IG5ldCA9IHJlcXVpcmUoXCJuZXRcIik7XG5jb25zdCB1bmhhbmRsZV8xID0gcmVxdWlyZShcIi4vdW5oYW5kbGVcIik7XG5jb25zdCByZWVudHJ5ID0gU3ltYm9sKCdyZWVudHJ5Jyk7XG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuY2xhc3MgVGltZW91dEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRocmVzaG9sZCwgZXZlbnQpIHtcbiAgICAgICAgc3VwZXIoYFRpbWVvdXQgYXdhaXRpbmcgJyR7ZXZlbnR9JyBmb3IgJHt0aHJlc2hvbGR9bXNgKTtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSAnVGltZW91dEVycm9yJztcbiAgICAgICAgdGhpcy5jb2RlID0gJ0VUSU1FRE9VVCc7XG4gICAgfVxufVxuZXhwb3J0cy5UaW1lb3V0RXJyb3IgPSBUaW1lb3V0RXJyb3I7XG5leHBvcnRzLmRlZmF1bHQgPSAocmVxdWVzdCwgZGVsYXlzLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKHJlZW50cnkgaW4gcmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9XG4gICAgcmVxdWVzdFtyZWVudHJ5XSA9IHRydWU7XG4gICAgY29uc3QgY2FuY2VsZXJzID0gW107XG4gICAgY29uc3QgeyBvbmNlLCB1bmhhbmRsZUFsbCB9ID0gdW5oYW5kbGVfMS5kZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkVGltZW91dCA9IChkZWxheSwgY2FsbGJhY2ssIGV2ZW50KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5LCBkZWxheSwgZXZlbnQpO1xuICAgICAgICAoX2EgPSB0aW1lb3V0LnVucmVmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aW1lb3V0KTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9O1xuICAgICAgICBjYW5jZWxlcnMucHVzaChjYW5jZWwpO1xuICAgICAgICByZXR1cm4gY2FuY2VsO1xuICAgIH07XG4gICAgY29uc3QgeyBob3N0LCBob3N0bmFtZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB0aW1lb3V0SGFuZGxlciA9IChkZWxheSwgZXZlbnQpID0+IHtcbiAgICAgICAgcmVxdWVzdC5kZXN0cm95KG5ldyBUaW1lb3V0RXJyb3IoZGVsYXksIGV2ZW50KSk7XG4gICAgfTtcbiAgICBjb25zdCBjYW5jZWxUaW1lb3V0cyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjYW5jZWwgb2YgY2FuY2VsZXJzKSB7XG4gICAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICB1bmhhbmRsZUFsbCgpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbmNlKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgICAgY2FuY2VsVGltZW91dHMoKTtcbiAgICAgICAgLy8gU2F2ZSBvcmlnaW5hbCBiZWhhdmlvclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAocmVxdWVzdC5saXN0ZW5lckNvdW50KCdlcnJvcicpID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJlcXVlc3Qub25jZSgnY2xvc2UnLCBjYW5jZWxUaW1lb3V0cyk7XG4gICAgb25jZShyZXF1ZXN0LCAncmVzcG9uc2UnLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgb25jZShyZXNwb25zZSwgJ2VuZCcsIGNhbmNlbFRpbWVvdXRzKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGRlbGF5cy5yZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhZGRUaW1lb3V0KGRlbGF5cy5yZXF1ZXN0LCB0aW1lb3V0SGFuZGxlciwgJ3JlcXVlc3QnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkZWxheXMuc29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBzb2NrZXRUaW1lb3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRpbWVvdXRIYW5kbGVyKGRlbGF5cy5zb2NrZXQsICdzb2NrZXQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zZXRUaW1lb3V0KGRlbGF5cy5zb2NrZXQsIHNvY2tldFRpbWVvdXRIYW5kbGVyKTtcbiAgICAgICAgLy8gYHJlcXVlc3Quc2V0VGltZW91dCgwKWAgY2F1c2VzIGEgbWVtb3J5IGxlYWsuXG4gICAgICAgIC8vIFdlIGNhbiBqdXN0IHJlbW92ZSB0aGUgbGlzdGVuZXIgYW5kIGZvcmdldCBhYm91dCB0aGUgdGltZXIgLSBpdCdzIHVucmVmZmVkLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nb3QvaXNzdWVzLzY5MFxuICAgICAgICBjYW5jZWxlcnMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKCd0aW1lb3V0Jywgc29ja2V0VGltZW91dEhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25jZShyZXF1ZXN0LCAnc29ja2V0JywgKHNvY2tldCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgc29ja2V0UGF0aCB9ID0gcmVxdWVzdDtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IGhhcmQgdG8gdGVzdCAqL1xuICAgICAgICBpZiAoc29ja2V0LmNvbm5lY3RpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1BhdGggPSBCb29sZWFuKHNvY2tldFBhdGggIT09IG51bGwgJiYgc29ja2V0UGF0aCAhPT0gdm9pZCAwID8gc29ja2V0UGF0aCA6IG5ldC5pc0lQKChfYSA9IGhvc3RuYW1lICE9PSBudWxsICYmIGhvc3RuYW1lICE9PSB2b2lkIDAgPyBob3N0bmFtZSA6IGhvc3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSAhPT0gMCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlbGF5cy5sb29rdXAgIT09ICd1bmRlZmluZWQnICYmICFoYXNQYXRoICYmIHR5cGVvZiBzb2NrZXQuYWRkcmVzcygpLmFkZHJlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsVGltZW91dCA9IGFkZFRpbWVvdXQoZGVsYXlzLmxvb2t1cCwgdGltZW91dEhhbmRsZXIsICdsb29rdXAnKTtcbiAgICAgICAgICAgICAgICBvbmNlKHNvY2tldCwgJ2xvb2t1cCcsIGNhbmNlbFRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWxheXMuY29ubmVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lQ29ubmVjdCA9ICgpID0+IGFkZFRpbWVvdXQoZGVsYXlzLmNvbm5lY3QsIHRpbWVvdXRIYW5kbGVyLCAnY29ubmVjdCcpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2Uoc29ja2V0LCAnY29ubmVjdCcsIHRpbWVDb25uZWN0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25jZShzb2NrZXQsICdsb29rdXAnLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2Uoc29ja2V0LCAnY29ubmVjdCcsIHRpbWVDb25uZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlbGF5cy5zZWN1cmVDb25uZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xuICAgICAgICAgICAgICAgIG9uY2Uoc29ja2V0LCAnY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsVGltZW91dCA9IGFkZFRpbWVvdXQoZGVsYXlzLnNlY3VyZUNvbm5lY3QsIHRpbWVvdXRIYW5kbGVyLCAnc2VjdXJlQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICBvbmNlKHNvY2tldCwgJ3NlY3VyZUNvbm5lY3QnLCBjYW5jZWxUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRlbGF5cy5zZW5kICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgdGltZVJlcXVlc3QgPSAoKSA9PiBhZGRUaW1lb3V0KGRlbGF5cy5zZW5kLCB0aW1lb3V0SGFuZGxlciwgJ3NlbmQnKTtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBoYXJkIHRvIHRlc3QgKi9cbiAgICAgICAgICAgIGlmIChzb2NrZXQuY29ubmVjdGluZykge1xuICAgICAgICAgICAgICAgIG9uY2Uoc29ja2V0LCAnY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25jZShyZXF1ZXN0LCAndXBsb2FkLWNvbXBsZXRlJywgdGltZVJlcXVlc3QoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbmNlKHJlcXVlc3QsICd1cGxvYWQtY29tcGxldGUnLCB0aW1lUmVxdWVzdCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgZGVsYXlzLnJlc3BvbnNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvbmNlKHJlcXVlc3QsICd1cGxvYWQtY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxUaW1lb3V0ID0gYWRkVGltZW91dChkZWxheXMucmVzcG9uc2UsIHRpbWVvdXRIYW5kbGVyLCAncmVzcG9uc2UnKTtcbiAgICAgICAgICAgIG9uY2UocmVxdWVzdCwgJ3Jlc3BvbnNlJywgY2FuY2VsVGltZW91dCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2FuY2VsVGltZW91dHM7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBXaGVuIGF0dGFjaGluZyBsaXN0ZW5lcnMsIGl0J3MgdmVyeSBlYXN5IHRvIGZvcmdldCBhYm91dCB0aGVtLlxuLy8gRXNwZWNpYWxseSBpZiB5b3UgZG8gZXJyb3IgaGFuZGxpbmcgYW5kIHNldCB0aW1lb3V0cy5cbi8vIFNvIGluc3RlYWQgb2YgY2hlY2tpbmcgaWYgaXQncyBwcm9wZXIgdG8gdGhyb3cgYW4gZXJyb3Igb24gZXZlcnkgdGltZW91dCBldmVyLFxuLy8gdXNlIHRoaXMgc2ltcGxlIHRvb2wgd2hpY2ggd2lsbCByZW1vdmUgYWxsIGxpc3RlbmVycyB5b3UgaGF2ZSBhdHRhY2hlZC5cbmV4cG9ydHMuZGVmYXVsdCA9ICgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uY2Uob3JpZ2luLCBldmVudCwgZm4pIHtcbiAgICAgICAgICAgIG9yaWdpbi5vbmNlKGV2ZW50LCBmbik7XG4gICAgICAgICAgICBoYW5kbGVycy5wdXNoKHsgb3JpZ2luLCBldmVudCwgZm4gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVuaGFuZGxlQWxsKCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIGhhbmRsZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBvcmlnaW4sIGV2ZW50LCBmbiB9ID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICBvcmlnaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaXNfMSA9IHJlcXVpcmUoXCJAc2luZHJlc29yaHVzL2lzXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKHVybCkgPT4ge1xuICAgIC8vIENhc3QgdG8gVVJMXG4gICAgdXJsID0gdXJsO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHByb3RvY29sOiB1cmwucHJvdG9jb2wsXG4gICAgICAgIGhvc3RuYW1lOiBpc18xLmRlZmF1bHQuc3RyaW5nKHVybC5ob3N0bmFtZSkgJiYgdXJsLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ1snKSA/IHVybC5ob3N0bmFtZS5zbGljZSgxLCAtMSkgOiB1cmwuaG9zdG5hbWUsXG4gICAgICAgIGhvc3Q6IHVybC5ob3N0LFxuICAgICAgICBoYXNoOiB1cmwuaGFzaCxcbiAgICAgICAgc2VhcmNoOiB1cmwuc2VhcmNoLFxuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBocmVmOiB1cmwuaHJlZixcbiAgICAgICAgcGF0aDogYCR7dXJsLnBhdGhuYW1lIHx8ICcnfSR7dXJsLnNlYXJjaCB8fCAnJ31gXG4gICAgfTtcbiAgICBpZiAoaXNfMS5kZWZhdWx0LnN0cmluZyh1cmwucG9ydCkgJiYgdXJsLnBvcnQubGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLnBvcnQgPSBOdW1iZXIodXJsLnBvcnQpO1xuICAgIH1cbiAgICBpZiAodXJsLnVzZXJuYW1lIHx8IHVybC5wYXNzd29yZCkge1xuICAgICAgICBvcHRpb25zLmF1dGggPSBgJHt1cmwudXNlcm5hbWUgfHwgJyd9OiR7dXJsLnBhc3N3b3JkIHx8ICcnfWA7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgV2Vha2FibGVNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLndlYWtNYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53ZWFrTWFwLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KTtcbiAgICB9XG4gICAgaGFzKGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndlYWtNYXAuaGFzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFdlYWthYmxlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdEhhbmRsZXIgPSB2b2lkIDA7XG5jb25zdCBpc18xID0gcmVxdWlyZShcIkBzaW5kcmVzb3JodXMvaXNcIik7XG5jb25zdCBhc19wcm9taXNlXzEgPSByZXF1aXJlKFwiLi9hcy1wcm9taXNlXCIpO1xuY29uc3QgY3JlYXRlX3JlamVjdGlvbl8xID0gcmVxdWlyZShcIi4vYXMtcHJvbWlzZS9jcmVhdGUtcmVqZWN0aW9uXCIpO1xuY29uc3QgY29yZV8xID0gcmVxdWlyZShcIi4vY29yZVwiKTtcbmNvbnN0IGRlZXBfZnJlZXplXzEgPSByZXF1aXJlKFwiLi91dGlscy9kZWVwLWZyZWV6ZVwiKTtcbmNvbnN0IGVycm9ycyA9IHtcbiAgICBSZXF1ZXN0RXJyb3I6IGFzX3Byb21pc2VfMS5SZXF1ZXN0RXJyb3IsXG4gICAgQ2FjaGVFcnJvcjogYXNfcHJvbWlzZV8xLkNhY2hlRXJyb3IsXG4gICAgUmVhZEVycm9yOiBhc19wcm9taXNlXzEuUmVhZEVycm9yLFxuICAgIEhUVFBFcnJvcjogYXNfcHJvbWlzZV8xLkhUVFBFcnJvcixcbiAgICBNYXhSZWRpcmVjdHNFcnJvcjogYXNfcHJvbWlzZV8xLk1heFJlZGlyZWN0c0Vycm9yLFxuICAgIFRpbWVvdXRFcnJvcjogYXNfcHJvbWlzZV8xLlRpbWVvdXRFcnJvcixcbiAgICBQYXJzZUVycm9yOiBhc19wcm9taXNlXzEuUGFyc2VFcnJvcixcbiAgICBDYW5jZWxFcnJvcjogYXNfcHJvbWlzZV8xLkNhbmNlbEVycm9yLFxuICAgIFVuc3VwcG9ydGVkUHJvdG9jb2xFcnJvcjogYXNfcHJvbWlzZV8xLlVuc3VwcG9ydGVkUHJvdG9jb2xFcnJvcixcbiAgICBVcGxvYWRFcnJvcjogYXNfcHJvbWlzZV8xLlVwbG9hZEVycm9yXG59O1xuLy8gVGhlIGBkZWxheWAgcGFja2FnZSB3ZWlnaHMgMTBLQiAoISlcbmNvbnN0IGRlbGF5ID0gYXN5bmMgKG1zKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbn0pO1xuY29uc3QgeyBub3JtYWxpemVBcmd1bWVudHMgfSA9IGNvcmVfMS5kZWZhdWx0O1xuY29uc3QgbWVyZ2VPcHRpb25zID0gKC4uLnNvdXJjZXMpID0+IHtcbiAgICBsZXQgbWVyZ2VkT3B0aW9ucztcbiAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgIG1lcmdlZE9wdGlvbnMgPSBub3JtYWxpemVBcmd1bWVudHModW5kZWZpbmVkLCBzb3VyY2UsIG1lcmdlZE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkT3B0aW9ucztcbn07XG5jb25zdCBnZXRQcm9taXNlT3JTdHJlYW0gPSAob3B0aW9ucykgPT4gb3B0aW9ucy5pc1N0cmVhbSA/IG5ldyBjb3JlXzEuZGVmYXVsdCh1bmRlZmluZWQsIG9wdGlvbnMpIDogYXNfcHJvbWlzZV8xLmRlZmF1bHQob3B0aW9ucyk7XG5jb25zdCBpc0dvdEluc3RhbmNlID0gKHZhbHVlKSA9PiAoJ2RlZmF1bHRzJyBpbiB2YWx1ZSAmJiAnb3B0aW9ucycgaW4gdmFsdWUuZGVmYXVsdHMpO1xuY29uc3QgYWxpYXNlcyA9IFtcbiAgICAnZ2V0JyxcbiAgICAncG9zdCcsXG4gICAgJ3B1dCcsXG4gICAgJ3BhdGNoJyxcbiAgICAnaGVhZCcsXG4gICAgJ2RlbGV0ZSdcbl07XG5leHBvcnRzLmRlZmF1bHRIYW5kbGVyID0gKG9wdGlvbnMsIG5leHQpID0+IG5leHQob3B0aW9ucyk7XG5jb25zdCBjYWxsSW5pdEhvb2tzID0gKGhvb2tzLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKGhvb2tzKSB7XG4gICAgICAgIGZvciAoY29uc3QgaG9vayBvZiBob29rcykge1xuICAgICAgICAgICAgaG9vayhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBjcmVhdGUgPSAoZGVmYXVsdHMpID0+IHtcbiAgICAvLyBQcm94eSBwcm9wZXJ0aWVzIGZyb20gbmV4dCBoYW5kbGVyc1xuICAgIGRlZmF1bHRzLl9yYXdIYW5kbGVycyA9IGRlZmF1bHRzLmhhbmRsZXJzO1xuICAgIGRlZmF1bHRzLmhhbmRsZXJzID0gZGVmYXVsdHMuaGFuZGxlcnMubWFwKGZuID0+ICgob3B0aW9ucywgbmV4dCkgPT4ge1xuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgYXNzaWduZWQgYnkgYXNzaWduaW5nIHJlc3VsdFxuICAgICAgICBsZXQgcm9vdDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4ob3B0aW9ucywgbmV3T3B0aW9ucyA9PiB7XG4gICAgICAgICAgICByb290ID0gbmV4dChuZXdPcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gcm9vdCAmJiAhb3B0aW9ucy5pc1N0cmVhbSAmJiByb290KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlZFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnN0IHsgdGhlbjogcHJvbWlzZVRoZW4sIGNhdGNoOiBwcm9taXNlQ2F0Y2gsIGZpbmFsbHk6IHByb21pc2VGaWFubGx5IH0gPSB0eXBlZFJlc3VsdDtcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0eXBlZFJlc3VsdCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHJvb3QpKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHR5cGVkUmVzdWx0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyb290KSk7XG4gICAgICAgICAgICAvLyBUaGVzZSBzaG91bGQgcG9pbnQgdG8gdGhlIG5ldyBwcm9taXNlXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tdGhlblxuICAgICAgICAgICAgdHlwZWRSZXN1bHQudGhlbiA9IHByb21pc2VUaGVuO1xuICAgICAgICAgICAgdHlwZWRSZXN1bHQuY2F0Y2ggPSBwcm9taXNlQ2F0Y2g7XG4gICAgICAgICAgICB0eXBlZFJlc3VsdC5maW5hbGx5ID0gcHJvbWlzZUZpYW5sbHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KSk7XG4gICAgLy8gR290IGludGVyZmFjZVxuICAgIGNvbnN0IGdvdCA9ICgodXJsLCBvcHRpb25zID0ge30sIF9kZWZhdWx0cykgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgaXRlcmF0aW9uID0gMDtcbiAgICAgICAgY29uc3QgaXRlcmF0ZUhhbmRsZXJzID0gKG5ld09wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0cy5oYW5kbGVyc1tpdGVyYXRpb24rK10obmV3T3B0aW9ucywgaXRlcmF0aW9uID09PSBkZWZhdWx0cy5oYW5kbGVycy5sZW5ndGggPyBnZXRQcm9taXNlT3JTdHJlYW0gOiBpdGVyYXRlSGFuZGxlcnMpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBpbiBHb3QgMTIuXG4gICAgICAgIGlmIChpc18xLmRlZmF1bHQucGxhaW5PYmplY3QodXJsKSkge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAuLi51cmwsXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvcmVfMS5zZXROb25FbnVtZXJhYmxlUHJvcGVydGllcyhbdXJsLCBvcHRpb25zXSwgbWVyZ2VkT3B0aW9ucyk7XG4gICAgICAgICAgICBvcHRpb25zID0gbWVyZ2VkT3B0aW9ucztcbiAgICAgICAgICAgIHVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ2FsbCBgaW5pdGAgaG9va3NcbiAgICAgICAgICAgIGxldCBpbml0SG9va0Vycm9yO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYWxsSW5pdEhvb2tzKGRlZmF1bHRzLm9wdGlvbnMuaG9va3MuaW5pdCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbEluaXRIb29rcygoX2EgPSBvcHRpb25zLmhvb2tzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5pdCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpbml0SG9va0Vycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgb3B0aW9ucyAmIGNhbGwgaGFuZGxlcnNcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplQXJndW1lbnRzKHVybCwgb3B0aW9ucywgX2RlZmF1bHRzICE9PSBudWxsICYmIF9kZWZhdWx0cyAhPT0gdm9pZCAwID8gX2RlZmF1bHRzIDogZGVmYXVsdHMub3B0aW9ucyk7XG4gICAgICAgICAgICBub3JtYWxpemVkT3B0aW9uc1tjb3JlXzEua0lzTm9ybWFsaXplZEFscmVhZHldID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpbml0SG9va0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFzX3Byb21pc2VfMS5SZXF1ZXN0RXJyb3IoaW5pdEhvb2tFcnJvci5tZXNzYWdlLCBpbml0SG9va0Vycm9yLCBub3JtYWxpemVkT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0ZUhhbmRsZXJzKG5vcm1hbGl6ZWRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmlzU3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlX3JlamVjdGlvbl8xLmRlZmF1bHQoZXJyb3IsIGRlZmF1bHRzLm9wdGlvbnMuaG9va3MuYmVmb3JlRXJyb3IsIChfYiA9IG9wdGlvbnMuaG9va3MpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5iZWZvcmVFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBnb3QuZXh0ZW5kID0gKC4uLmluc3RhbmNlc09yT3B0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBbZGVmYXVsdHMub3B0aW9uc107XG4gICAgICAgIGxldCBoYW5kbGVycyA9IFsuLi5kZWZhdWx0cy5fcmF3SGFuZGxlcnNdO1xuICAgICAgICBsZXQgaXNNdXRhYmxlRGVmYXVsdHM7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaW5zdGFuY2VzT3JPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoaXNHb3RJbnN0YW5jZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zQXJyYXkucHVzaCh2YWx1ZS5kZWZhdWx0cy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5wdXNoKC4uLnZhbHVlLmRlZmF1bHRzLl9yYXdIYW5kbGVycyk7XG4gICAgICAgICAgICAgICAgaXNNdXRhYmxlRGVmYXVsdHMgPSB2YWx1ZS5kZWZhdWx0cy5tdXRhYmxlRGVmYXVsdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zQXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCdoYW5kbGVycycgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMucHVzaCguLi52YWx1ZS5oYW5kbGVycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlzTXV0YWJsZURlZmF1bHRzID0gdmFsdWUubXV0YWJsZURlZmF1bHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhhbmRsZXJzID0gaGFuZGxlcnMuZmlsdGVyKGhhbmRsZXIgPT4gaGFuZGxlciAhPT0gZXhwb3J0cy5kZWZhdWx0SGFuZGxlcik7XG4gICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGhhbmRsZXJzLnB1c2goZXhwb3J0cy5kZWZhdWx0SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZSh7XG4gICAgICAgICAgICBvcHRpb25zOiBtZXJnZU9wdGlvbnMoLi4ub3B0aW9uc0FycmF5KSxcbiAgICAgICAgICAgIGhhbmRsZXJzLFxuICAgICAgICAgICAgbXV0YWJsZURlZmF1bHRzOiBCb29sZWFuKGlzTXV0YWJsZURlZmF1bHRzKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIFBhZ2luYXRpb25cbiAgICBjb25zdCBwYWdpbmF0ZUVhY2ggPSAoYXN5bmMgZnVuY3Rpb24qICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgYEB0cy1leHBlY3QtZXJyb3JgIHdoZW4gdXBncmFkaW5nIHRvIFR5cGVTY3JpcHQgNC5cbiAgICAgICAgLy8gRXJyb3I6IEFyZ3VtZW50IG9mIHR5cGUgJ01lcmdlPE9wdGlvbnMsIFBhZ2luYXRpb25PcHRpb25zPFQsIFI+PiB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ09wdGlvbnMgfCB1bmRlZmluZWQnLlxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGxldCBub3JtYWxpemVkT3B0aW9ucyA9IG5vcm1hbGl6ZUFyZ3VtZW50cyh1cmwsIG9wdGlvbnMsIGRlZmF1bHRzLm9wdGlvbnMpO1xuICAgICAgICBub3JtYWxpemVkT3B0aW9ucy5yZXNvbHZlQm9keU9ubHkgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG5vcm1hbGl6ZWRPcHRpb25zLnBhZ2luYXRpb247XG4gICAgICAgIGlmICghaXNfMS5kZWZhdWx0Lm9iamVjdChwYWdpbmF0aW9uKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYG9wdGlvbnMucGFnaW5hdGlvbmAgbXVzdCBiZSBpbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbCA9IFtdO1xuICAgICAgICBsZXQgeyBjb3VudExpbWl0IH0gPSBwYWdpbmF0aW9uO1xuICAgICAgICBsZXQgbnVtYmVyT2ZSZXF1ZXN0cyA9IDA7XG4gICAgICAgIHdoaWxlIChudW1iZXJPZlJlcXVlc3RzIDwgcGFnaW5hdGlvbi5yZXF1ZXN0TGltaXQpIHtcbiAgICAgICAgICAgIGlmIChudW1iZXJPZlJlcXVlc3RzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShwYWdpbmF0aW9uLmJhY2tvZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBGSVhNRSFcbiAgICAgICAgICAgIC8vIFRPRE86IFRocm93IHdoZW4gcmVzdWx0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBSZXNwb25zZVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCBnb3QodW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vcm1hbGl6ZWRPcHRpb25zKSk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gYXdhaXQgcGFnaW5hdGlvbi50cmFuc2Zvcm0ocmVzdWx0KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBwYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFnaW5hdGlvbi5maWx0ZXIoaXRlbSwgYWxsLCBjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2luYXRpb24uc2hvdWxkQ29udGludWUoaXRlbSwgYWxsLCBjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdpbmF0aW9uLnN0YWNrQWxsSXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC0tY291bnRMaW1pdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zVG9NZXJnZSA9IHBhZ2luYXRpb24ucGFnaW5hdGUocmVzdWx0LCBhbGwsIGN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnNUb01lcmdlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zVG9NZXJnZSA9PT0gcmVzdWx0LnJlcXVlc3Qub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRPcHRpb25zID0gcmVzdWx0LnJlcXVlc3Qub3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnNUb01lcmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkT3B0aW9ucyA9IG5vcm1hbGl6ZUFyZ3VtZW50cyh1bmRlZmluZWQsIG9wdGlvbnNUb01lcmdlLCBub3JtYWxpemVkT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudW1iZXJPZlJlcXVlc3RzKys7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBnb3QucGFnaW5hdGUgPSBwYWdpbmF0ZUVhY2g7XG4gICAgZ290LnBhZ2luYXRlLmFsbCA9IChhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBpdGVtIG9mIHBhZ2luYXRlRWFjaCh1cmwsIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gICAgLy8gRm9yIHRob3NlIHdobyBsaWtlIHZlcnkgZGVzY3JpcHRpdmUgbmFtZXNcbiAgICBnb3QucGFnaW5hdGUuZWFjaCA9IHBhZ2luYXRlRWFjaDtcbiAgICAvLyBTdHJlYW0gQVBJXG4gICAgZ290LnN0cmVhbSA9ICgodXJsLCBvcHRpb25zKSA9PiBnb3QodXJsLCB7IC4uLm9wdGlvbnMsIGlzU3RyZWFtOiB0cnVlIH0pKTtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBhbGlhc2VzKSB7XG4gICAgICAgIGdvdFttZXRob2RdID0gKCh1cmwsIG9wdGlvbnMpID0+IGdvdCh1cmwsIHsgLi4ub3B0aW9ucywgbWV0aG9kIH0pKTtcbiAgICAgICAgZ290LnN0cmVhbVttZXRob2RdID0gKCh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnb3QodXJsLCB7IC4uLm9wdGlvbnMsIG1ldGhvZCwgaXNTdHJlYW06IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKGdvdCwgZXJyb3JzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ290LCAnZGVmYXVsdHMnLCB7XG4gICAgICAgIHZhbHVlOiBkZWZhdWx0cy5tdXRhYmxlRGVmYXVsdHMgPyBkZWZhdWx0cyA6IGRlZXBfZnJlZXplXzEuZGVmYXVsdChkZWZhdWx0cyksXG4gICAgICAgIHdyaXRhYmxlOiBkZWZhdWx0cy5tdXRhYmxlRGVmYXVsdHMsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZGVmYXVsdHMubXV0YWJsZURlZmF1bHRzLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgZ290Lm1lcmdlT3B0aW9ucyA9IG1lcmdlT3B0aW9ucztcbiAgICByZXR1cm4gZ290O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgY3JlYXRlXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVcIik7XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHJldHJ5OiB7XG4gICAgICAgICAgICBsaW1pdDogMixcbiAgICAgICAgICAgIG1ldGhvZHM6IFtcbiAgICAgICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICAgICAnUFVUJyxcbiAgICAgICAgICAgICAgICAnSEVBRCcsXG4gICAgICAgICAgICAgICAgJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgJ09QVElPTlMnLFxuICAgICAgICAgICAgICAgICdUUkFDRSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0dXNDb2RlczogW1xuICAgICAgICAgICAgICAgIDQwOCxcbiAgICAgICAgICAgICAgICA0MTMsXG4gICAgICAgICAgICAgICAgNDI5LFxuICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICA1MDIsXG4gICAgICAgICAgICAgICAgNTAzLFxuICAgICAgICAgICAgICAgIDUwNCxcbiAgICAgICAgICAgICAgICA1MjEsXG4gICAgICAgICAgICAgICAgNTIyLFxuICAgICAgICAgICAgICAgIDUyNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGVycm9yQ29kZXM6IFtcbiAgICAgICAgICAgICAgICAnRVRJTUVET1VUJyxcbiAgICAgICAgICAgICAgICAnRUNPTk5SRVNFVCcsXG4gICAgICAgICAgICAgICAgJ0VBRERSSU5VU0UnLFxuICAgICAgICAgICAgICAgICdFQ09OTlJFRlVTRUQnLFxuICAgICAgICAgICAgICAgICdFUElQRScsXG4gICAgICAgICAgICAgICAgJ0VOT1RGT1VORCcsXG4gICAgICAgICAgICAgICAgJ0VORVRVTlJFQUNIJyxcbiAgICAgICAgICAgICAgICAnRUFJX0FHQUlOJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1heFJldHJ5QWZ0ZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNhbGN1bGF0ZURlbGF5OiAoeyBjb21wdXRlZFZhbHVlIH0pID0+IGNvbXB1dGVkVmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgdGltZW91dDoge30sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICd1c2VyLWFnZW50JzogJ2dvdCAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nb3QpJ1xuICAgICAgICB9LFxuICAgICAgICBob29rczoge1xuICAgICAgICAgICAgaW5pdDogW10sXG4gICAgICAgICAgICBiZWZvcmVSZXF1ZXN0OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZVJlZGlyZWN0OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZVJldHJ5OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZUVycm9yOiBbXSxcbiAgICAgICAgICAgIGFmdGVyUmVzcG9uc2U6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGNhY2hlOiB1bmRlZmluZWQsXG4gICAgICAgIGRuc0NhY2hlOiB1bmRlZmluZWQsXG4gICAgICAgIGRlY29tcHJlc3M6IHRydWUsXG4gICAgICAgIHRocm93SHR0cEVycm9yczogdHJ1ZSxcbiAgICAgICAgZm9sbG93UmVkaXJlY3Q6IHRydWUsXG4gICAgICAgIGlzU3RyZWFtOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgICAgIHJlc29sdmVCb2R5T25seTogZmFsc2UsXG4gICAgICAgIG1heFJlZGlyZWN0czogMTAsXG4gICAgICAgIHByZWZpeFVybDogJycsXG4gICAgICAgIG1ldGhvZFJld3JpdGluZzogdHJ1ZSxcbiAgICAgICAgaWdub3JlSW52YWxpZENvb2tpZXM6IGZhbHNlLFxuICAgICAgICBjb250ZXh0OiB7fSxcbiAgICAgICAgLy8gVE9ETzogU2V0IHRoaXMgdG8gYHRydWVgIHdoZW4gR290IDEyIGdldHMgcmVsZWFzZWRcbiAgICAgICAgaHR0cDI6IGZhbHNlLFxuICAgICAgICBhbGxvd0dldEJvZHk6IGZhbHNlLFxuICAgICAgICBodHRwczogdW5kZWZpbmVkLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXF1ZXN0Lm9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAnanNvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJvZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2luYXRlOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFSZWZsZWN0LmhhcyhyZXNwb25zZS5oZWFkZXJzLCAnbGluaycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSByZXNwb25zZS5oZWFkZXJzLmxpbmsuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gaXRlbS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkWzFdLmluY2x1ZGVzKCduZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBwYXJzZWRbMF0udHJpbVN0YXJ0KCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbmV3IHVybF8xLlVSTChuZXh0KVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcjogKCkgPT4gdHJ1ZSxcbiAgICAgICAgICAgIHNob3VsZENvbnRpbnVlOiAoKSA9PiB0cnVlLFxuICAgICAgICAgICAgY291bnRMaW1pdDogSW5maW5pdHksXG4gICAgICAgICAgICBiYWNrb2ZmOiAwLFxuICAgICAgICAgICAgcmVxdWVzdExpbWl0OiAxMDAwMCxcbiAgICAgICAgICAgIHN0YWNrQWxsSXRlbXM6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFyc2VKc29uOiAodGV4dCkgPT4gSlNPTi5wYXJzZSh0ZXh0KSxcbiAgICAgICAgc3RyaW5naWZ5SnNvbjogKG9iamVjdCkgPT4gSlNPTi5zdHJpbmdpZnkob2JqZWN0KSxcbiAgICAgICAgY2FjaGVPcHRpb25zOiB7fVxuICAgIH0sXG4gICAgaGFuZGxlcnM6IFtjcmVhdGVfMS5kZWZhdWx0SGFuZGxlcl0sXG4gICAgbXV0YWJsZURlZmF1bHRzOiBmYWxzZVxufTtcbmNvbnN0IGdvdCA9IGNyZWF0ZV8xLmRlZmF1bHQoZGVmYXVsdHMpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ290O1xuLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcbm1vZHVsZS5leHBvcnRzID0gZ290O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGdvdDtcbm1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyAvLyBXb3JrYXJvdW5kIGZvciBUUyBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nb3QvcHVsbC8xMjY3XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY3JlYXRlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hcy1wcm9taXNlXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpc18xID0gcmVxdWlyZShcIkBzaW5kcmVzb3JodXMvaXNcIik7XG5mdW5jdGlvbiBkZWVwRnJlZXplKG9iamVjdCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhvYmplY3QpKSB7XG4gICAgICAgIGlmIChpc18xLmRlZmF1bHQucGxhaW5PYmplY3QodmFsdWUpIHx8IGlzXzEuZGVmYXVsdC5hcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRlZXBGcmVlemUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG9iamVjdCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWVwRnJlZXplO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbHJlYWR5V2FybmVkID0gbmV3IFNldCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoYWxyZWFkeVdhcm5lZC5oYXMobWVzc2FnZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbHJlYWR5V2FybmVkLmFkZChtZXNzYWdlKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIE1pc3NpbmcgdHlwZXMuXG4gICAgcHJvY2Vzcy5lbWl0V2FybmluZyhgR290OiAke21lc3NhZ2V9YCwge1xuICAgICAgICB0eXBlOiAnRGVwcmVjYXRpb25XYXJuaW5nJ1xuICAgIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIHJmYzcyMzEgNi4xXG5jb25zdCBzdGF0dXNDb2RlQ2FjaGVhYmxlQnlEZWZhdWx0ID0gbmV3IFNldChbXG4gICAgMjAwLFxuICAgIDIwMyxcbiAgICAyMDQsXG4gICAgMjA2LFxuICAgIDMwMCxcbiAgICAzMDEsXG4gICAgNDA0LFxuICAgIDQwNSxcbiAgICA0MTAsXG4gICAgNDE0LFxuICAgIDUwMSxcbl0pO1xuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGRvZXMgbm90IHVuZGVyc3RhbmQgcGFydGlhbCByZXNwb25zZXMgKDIwNilcbmNvbnN0IHVuZGVyc3Rvb2RTdGF0dXNlcyA9IG5ldyBTZXQoW1xuICAgIDIwMCxcbiAgICAyMDMsXG4gICAgMjA0LFxuICAgIDMwMCxcbiAgICAzMDEsXG4gICAgMzAyLFxuICAgIDMwMyxcbiAgICAzMDcsXG4gICAgMzA4LFxuICAgIDQwNCxcbiAgICA0MDUsXG4gICAgNDEwLFxuICAgIDQxNCxcbiAgICA1MDEsXG5dKTtcblxuY29uc3QgZXJyb3JTdGF0dXNDb2RlcyA9IG5ldyBTZXQoW1xuICAgIDUwMCxcbiAgICA1MDIsXG4gICAgNTAzLCBcbiAgICA1MDQsXG5dKTtcblxuY29uc3QgaG9wQnlIb3BIZWFkZXJzID0ge1xuICAgIGRhdGU6IHRydWUsIC8vIGluY2x1ZGVkLCBiZWNhdXNlIHdlIGFkZCBBZ2UgdXBkYXRlIERhdGVcbiAgICBjb25uZWN0aW9uOiB0cnVlLFxuICAgICdrZWVwLWFsaXZlJzogdHJ1ZSxcbiAgICAncHJveHktYXV0aGVudGljYXRlJzogdHJ1ZSxcbiAgICAncHJveHktYXV0aG9yaXphdGlvbic6IHRydWUsXG4gICAgdGU6IHRydWUsXG4gICAgdHJhaWxlcjogdHJ1ZSxcbiAgICAndHJhbnNmZXItZW5jb2RpbmcnOiB0cnVlLFxuICAgIHVwZ3JhZGU6IHRydWUsXG59O1xuXG5jb25zdCBleGNsdWRlZEZyb21SZXZhbGlkYXRpb25VcGRhdGUgPSB7XG4gICAgLy8gU2luY2UgdGhlIG9sZCBib2R5IGlzIHJldXNlZCwgaXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIGNoYW5nZSBwcm9wZXJ0aWVzIG9mIHRoZSBib2R5XG4gICAgJ2NvbnRlbnQtbGVuZ3RoJzogdHJ1ZSxcbiAgICAnY29udGVudC1lbmNvZGluZyc6IHRydWUsXG4gICAgJ3RyYW5zZmVyLWVuY29kaW5nJzogdHJ1ZSxcbiAgICAnY29udGVudC1yYW5nZSc6IHRydWUsXG59O1xuXG5mdW5jdGlvbiB0b051bWJlck9yWmVybyhzKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KHMsIDEwKTtcbiAgICByZXR1cm4gaXNGaW5pdGUobikgPyBuIDogMDtcbn1cblxuLy8gUkZDIDU4NjFcbmZ1bmN0aW9uIGlzRXJyb3JSZXNwb25zZShyZXNwb25zZSkge1xuICAgIC8vIGNvbnNpZGVyIHVuZGVmaW5lZCByZXNwb25zZSBhcyBmYXVsdHlcbiAgICBpZighcmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yU3RhdHVzQ29kZXMuaGFzKHJlc3BvbnNlLnN0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ2FjaGVDb250cm9sKGhlYWRlcikge1xuICAgIGNvbnN0IGNjID0ge307XG4gICAgaWYgKCFoZWFkZXIpIHJldHVybiBjYztcblxuICAgIC8vIFRPRE86IFdoZW4gdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB2YWx1ZSBwcmVzZW50IGZvciBhIGdpdmVuIGRpcmVjdGl2ZSAoZS5nLiwgdHdvIEV4cGlyZXMgaGVhZGVyIGZpZWxkcywgbXVsdGlwbGUgQ2FjaGUtQ29udHJvbDogbWF4LWFnZSBkaXJlY3RpdmVzKSxcbiAgICAvLyB0aGUgZGlyZWN0aXZlJ3MgdmFsdWUgaXMgY29uc2lkZXJlZCBpbnZhbGlkLiBDYWNoZXMgYXJlIGVuY291cmFnZWQgdG8gY29uc2lkZXIgcmVzcG9uc2VzIHRoYXQgaGF2ZSBpbnZhbGlkIGZyZXNobmVzcyBpbmZvcm1hdGlvbiB0byBiZSBzdGFsZVxuICAgIGNvbnN0IHBhcnRzID0gaGVhZGVyLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqLyk7IC8vIFRPRE86IGxhbWUgcGFyc2luZ1xuICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgICAgICBjb25zdCBbaywgdl0gPSBwYXJ0LnNwbGl0KC9cXHMqPVxccyovLCAyKTtcbiAgICAgICAgY2Nba10gPSB2ID09PSB1bmRlZmluZWQgPyB0cnVlIDogdi5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKTsgLy8gVE9ETzogbGFtZSB1bnF1b3RpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gY2M7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdENhY2hlQ29udHJvbChjYykge1xuICAgIGxldCBwYXJ0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgayBpbiBjYykge1xuICAgICAgICBjb25zdCB2ID0gY2Nba107XG4gICAgICAgIHBhcnRzLnB1c2godiA9PT0gdHJ1ZSA/IGsgOiBrICsgJz0nICsgdik7XG4gICAgfVxuICAgIGlmICghcGFydHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cy5qb2luKCcsICcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENhY2hlUG9saWN5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoYXJlZCxcbiAgICAgICAgICAgIGNhY2hlSGV1cmlzdGljLFxuICAgICAgICAgICAgaW1tdXRhYmxlTWluVGltZVRvTGl2ZSxcbiAgICAgICAgICAgIGlnbm9yZUNhcmdvQ3VsdCxcbiAgICAgICAgICAgIF9mcm9tT2JqZWN0LFxuICAgICAgICB9ID0ge31cbiAgICApIHtcbiAgICAgICAgaWYgKF9mcm9tT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9mcm9tT2JqZWN0KF9mcm9tT2JqZWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXMuaGVhZGVycykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Jlc3BvbnNlIGhlYWRlcnMgbWlzc2luZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Fzc2VydFJlcXVlc3RIYXNIZWFkZXJzKHJlcSk7XG5cbiAgICAgICAgdGhpcy5fcmVzcG9uc2VUaW1lID0gdGhpcy5ub3coKTtcbiAgICAgICAgdGhpcy5faXNTaGFyZWQgPSBzaGFyZWQgIT09IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYWNoZUhldXJpc3RpYyA9XG4gICAgICAgICAgICB1bmRlZmluZWQgIT09IGNhY2hlSGV1cmlzdGljID8gY2FjaGVIZXVyaXN0aWMgOiAwLjE7IC8vIDEwJSBtYXRjaGVzIElFXG4gICAgICAgIHRoaXMuX2ltbXV0YWJsZU1pblR0bCA9XG4gICAgICAgICAgICB1bmRlZmluZWQgIT09IGltbXV0YWJsZU1pblRpbWVUb0xpdmVcbiAgICAgICAgICAgICAgICA/IGltbXV0YWJsZU1pblRpbWVUb0xpdmVcbiAgICAgICAgICAgICAgICA6IDI0ICogMzYwMCAqIDEwMDA7XG5cbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJ3N0YXR1cycgaW4gcmVzID8gcmVzLnN0YXR1cyA6IDIwMDtcbiAgICAgICAgdGhpcy5fcmVzSGVhZGVycyA9IHJlcy5oZWFkZXJzO1xuICAgICAgICB0aGlzLl9yZXNjYyA9IHBhcnNlQ2FjaGVDb250cm9sKHJlcy5oZWFkZXJzWydjYWNoZS1jb250cm9sJ10pO1xuICAgICAgICB0aGlzLl9tZXRob2QgPSAnbWV0aG9kJyBpbiByZXEgPyByZXEubWV0aG9kIDogJ0dFVCc7XG4gICAgICAgIHRoaXMuX3VybCA9IHJlcS51cmw7XG4gICAgICAgIHRoaXMuX2hvc3QgPSByZXEuaGVhZGVycy5ob3N0O1xuICAgICAgICB0aGlzLl9ub0F1dGhvcml6YXRpb24gPSAhcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgICAgICAgdGhpcy5fcmVxSGVhZGVycyA9IHJlcy5oZWFkZXJzLnZhcnkgPyByZXEuaGVhZGVycyA6IG51bGw7IC8vIERvbid0IGtlZXAgYWxsIHJlcXVlc3QgaGVhZGVycyBpZiB0aGV5IHdvbid0IGJlIHVzZWRcbiAgICAgICAgdGhpcy5fcmVxY2MgPSBwYXJzZUNhY2hlQ29udHJvbChyZXEuaGVhZGVyc1snY2FjaGUtY29udHJvbCddKTtcblxuICAgICAgICAvLyBBc3N1bWUgdGhhdCBpZiBzb21lb25lIHVzZXMgbGVnYWN5LCBub24tc3RhbmRhcmQgdW5jZWNlc3Nhcnkgb3B0aW9ucyB0aGV5IGRvbid0IHVuZGVyc3RhbmQgY2FjaGluZyxcbiAgICAgICAgLy8gc28gdGhlcmUncyBubyBwb2ludCBzdHJpY2x5IGFkaGVyaW5nIHRvIHRoZSBibGluZGx5IGNvcHkmcGFzdGVkIGRpcmVjdGl2ZXMuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGlnbm9yZUNhcmdvQ3VsdCAmJlxuICAgICAgICAgICAgJ3ByZS1jaGVjaycgaW4gdGhpcy5fcmVzY2MgJiZcbiAgICAgICAgICAgICdwb3N0LWNoZWNrJyBpbiB0aGlzLl9yZXNjY1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9yZXNjY1sncHJlLWNoZWNrJ107XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcmVzY2NbJ3Bvc3QtY2hlY2snXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9yZXNjY1snbm8tY2FjaGUnXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9yZXNjY1snbm8tc3RvcmUnXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9yZXNjY1snbXVzdC1yZXZhbGlkYXRlJ107XG4gICAgICAgICAgICB0aGlzLl9yZXNIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVzSGVhZGVycywge1xuICAgICAgICAgICAgICAgICdjYWNoZS1jb250cm9sJzogZm9ybWF0Q2FjaGVDb250cm9sKHRoaXMuX3Jlc2NjKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3Jlc0hlYWRlcnMuZXhwaXJlcztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9yZXNIZWFkZXJzLnByYWdtYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGhlIENhY2hlLUNvbnRyb2wgaGVhZGVyIGZpZWxkIGlzIG5vdCBwcmVzZW50IGluIGEgcmVxdWVzdCwgY2FjaGVzIE1VU1QgY29uc2lkZXIgdGhlIG5vLWNhY2hlIHJlcXVlc3QgcHJhZ21hLWRpcmVjdGl2ZVxuICAgICAgICAvLyBhcyBoYXZpbmcgdGhlIHNhbWUgZWZmZWN0IGFzIGlmIFwiQ2FjaGUtQ29udHJvbDogbm8tY2FjaGVcIiB3ZXJlIHByZXNlbnQgKHNlZSBTZWN0aW9uIDUuMi4xKS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzLmhlYWRlcnNbJ2NhY2hlLWNvbnRyb2wnXSA9PSBudWxsICYmXG4gICAgICAgICAgICAvbm8tY2FjaGUvLnRlc3QocmVzLmhlYWRlcnMucHJhZ21hKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2NjWyduby1jYWNoZSddID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdygpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgc3RvcmFibGUoKSB7XG4gICAgICAgIC8vIFRoZSBcIm5vLXN0b3JlXCIgcmVxdWVzdCBkaXJlY3RpdmUgaW5kaWNhdGVzIHRoYXQgYSBjYWNoZSBNVVNUIE5PVCBzdG9yZSBhbnkgcGFydCBvZiBlaXRoZXIgdGhpcyByZXF1ZXN0IG9yIGFueSByZXNwb25zZSB0byBpdC5cbiAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgIXRoaXMuX3JlcWNjWyduby1zdG9yZSddICYmXG4gICAgICAgICAgICAvLyBBIGNhY2hlIE1VU1QgTk9UIHN0b3JlIGEgcmVzcG9uc2UgdG8gYW55IHJlcXVlc3QsIHVubGVzczpcbiAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyB1bmRlcnN0b29kIGJ5IHRoZSBjYWNoZSBhbmQgZGVmaW5lZCBhcyBiZWluZyBjYWNoZWFibGUsIGFuZFxuICAgICAgICAgICAgKCdHRVQnID09PSB0aGlzLl9tZXRob2QgfHxcbiAgICAgICAgICAgICAgICAnSEVBRCcgPT09IHRoaXMuX21ldGhvZCB8fFxuICAgICAgICAgICAgICAgICgnUE9TVCcgPT09IHRoaXMuX21ldGhvZCAmJiB0aGlzLl9oYXNFeHBsaWNpdEV4cGlyYXRpb24oKSkpICYmXG4gICAgICAgICAgICAvLyB0aGUgcmVzcG9uc2Ugc3RhdHVzIGNvZGUgaXMgdW5kZXJzdG9vZCBieSB0aGUgY2FjaGUsIGFuZFxuICAgICAgICAgICAgdW5kZXJzdG9vZFN0YXR1c2VzLmhhcyh0aGlzLl9zdGF0dXMpICYmXG4gICAgICAgICAgICAvLyB0aGUgXCJuby1zdG9yZVwiIGNhY2hlIGRpcmVjdGl2ZSBkb2VzIG5vdCBhcHBlYXIgaW4gcmVxdWVzdCBvciByZXNwb25zZSBoZWFkZXIgZmllbGRzLCBhbmRcbiAgICAgICAgICAgICF0aGlzLl9yZXNjY1snbm8tc3RvcmUnXSAmJlxuICAgICAgICAgICAgLy8gdGhlIFwicHJpdmF0ZVwiIHJlc3BvbnNlIGRpcmVjdGl2ZSBkb2VzIG5vdCBhcHBlYXIgaW4gdGhlIHJlc3BvbnNlLCBpZiB0aGUgY2FjaGUgaXMgc2hhcmVkLCBhbmRcbiAgICAgICAgICAgICghdGhpcy5faXNTaGFyZWQgfHwgIXRoaXMuX3Jlc2NjLnByaXZhdGUpICYmXG4gICAgICAgICAgICAvLyB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXIgZmllbGQgZG9lcyBub3QgYXBwZWFyIGluIHRoZSByZXF1ZXN0LCBpZiB0aGUgY2FjaGUgaXMgc2hhcmVkLFxuICAgICAgICAgICAgKCF0aGlzLl9pc1NoYXJlZCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX25vQXV0aG9yaXphdGlvbiB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2FsbG93c1N0b3JpbmdBdXRoZW50aWNhdGVkKCkpICYmXG4gICAgICAgICAgICAvLyB0aGUgcmVzcG9uc2UgZWl0aGVyOlxuICAgICAgICAgICAgLy8gY29udGFpbnMgYW4gRXhwaXJlcyBoZWFkZXIgZmllbGQsIG9yXG4gICAgICAgICAgICAodGhpcy5fcmVzSGVhZGVycy5leHBpcmVzIHx8XG4gICAgICAgICAgICAgICAgLy8gY29udGFpbnMgYSBtYXgtYWdlIHJlc3BvbnNlIGRpcmVjdGl2ZSwgb3JcbiAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhIHMtbWF4YWdlIHJlc3BvbnNlIGRpcmVjdGl2ZSBhbmQgdGhlIGNhY2hlIGlzIHNoYXJlZCwgb3JcbiAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhIHB1YmxpYyByZXNwb25zZSBkaXJlY3RpdmUuXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzY2NbJ21heC1hZ2UnXSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLl9pc1NoYXJlZCAmJiB0aGlzLl9yZXNjY1sncy1tYXhhZ2UnXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNjYy5wdWJsaWMgfHxcbiAgICAgICAgICAgICAgICAvLyBoYXMgYSBzdGF0dXMgY29kZSB0aGF0IGlzIGRlZmluZWQgYXMgY2FjaGVhYmxlIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlQ2FjaGVhYmxlQnlEZWZhdWx0Lmhhcyh0aGlzLl9zdGF0dXMpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9oYXNFeHBsaWNpdEV4cGlyYXRpb24oKSB7XG4gICAgICAgIC8vIDQuMi4xIENhbGN1bGF0aW5nIEZyZXNobmVzcyBMaWZldGltZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHRoaXMuX2lzU2hhcmVkICYmIHRoaXMuX3Jlc2NjWydzLW1heGFnZSddKSB8fFxuICAgICAgICAgICAgdGhpcy5fcmVzY2NbJ21heC1hZ2UnXSB8fFxuICAgICAgICAgICAgdGhpcy5fcmVzSGVhZGVycy5leHBpcmVzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2Fzc2VydFJlcXVlc3RIYXNIZWFkZXJzKHJlcSkge1xuICAgICAgICBpZiAoIXJlcSB8fCAhcmVxLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdSZXF1ZXN0IGhlYWRlcnMgbWlzc2luZycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F0aXNmaWVzV2l0aG91dFJldmFsaWRhdGlvbihyZXEpIHtcbiAgICAgICAgdGhpcy5fYXNzZXJ0UmVxdWVzdEhhc0hlYWRlcnMocmVxKTtcblxuICAgICAgICAvLyBXaGVuIHByZXNlbnRlZCB3aXRoIGEgcmVxdWVzdCwgYSBjYWNoZSBNVVNUIE5PVCByZXVzZSBhIHN0b3JlZCByZXNwb25zZSwgdW5sZXNzOlxuICAgICAgICAvLyB0aGUgcHJlc2VudGVkIHJlcXVlc3QgZG9lcyBub3QgY29udGFpbiB0aGUgbm8tY2FjaGUgcHJhZ21hIChTZWN0aW9uIDUuNCksIG5vciB0aGUgbm8tY2FjaGUgY2FjaGUgZGlyZWN0aXZlLFxuICAgICAgICAvLyB1bmxlc3MgdGhlIHN0b3JlZCByZXNwb25zZSBpcyBzdWNjZXNzZnVsbHkgdmFsaWRhdGVkIChTZWN0aW9uIDQuMyksIGFuZFxuICAgICAgICBjb25zdCByZXF1ZXN0Q0MgPSBwYXJzZUNhY2hlQ29udHJvbChyZXEuaGVhZGVyc1snY2FjaGUtY29udHJvbCddKTtcbiAgICAgICAgaWYgKHJlcXVlc3RDQ1snbm8tY2FjaGUnXSB8fCAvbm8tY2FjaGUvLnRlc3QocmVxLmhlYWRlcnMucHJhZ21hKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3RDQ1snbWF4LWFnZSddICYmIHRoaXMuYWdlKCkgPiByZXF1ZXN0Q0NbJ21heC1hZ2UnXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVxdWVzdENDWydtaW4tZnJlc2gnXSAmJlxuICAgICAgICAgICAgdGhpcy50aW1lVG9MaXZlKCkgPCAxMDAwICogcmVxdWVzdENDWydtaW4tZnJlc2gnXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZSBzdG9yZWQgcmVzcG9uc2UgaXMgZWl0aGVyOlxuICAgICAgICAvLyBmcmVzaCwgb3IgYWxsb3dlZCB0byBiZSBzZXJ2ZWQgc3RhbGVcbiAgICAgICAgaWYgKHRoaXMuc3RhbGUoKSkge1xuICAgICAgICAgICAgY29uc3QgYWxsb3dzU3RhbGUgPVxuICAgICAgICAgICAgICAgIHJlcXVlc3RDQ1snbWF4LXN0YWxlJ10gJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5fcmVzY2NbJ211c3QtcmV2YWxpZGF0ZSddICYmXG4gICAgICAgICAgICAgICAgKHRydWUgPT09IHJlcXVlc3RDQ1snbWF4LXN0YWxlJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdENDWydtYXgtc3RhbGUnXSA+IHRoaXMuYWdlKCkgLSB0aGlzLm1heEFnZSgpKTtcbiAgICAgICAgICAgIGlmICghYWxsb3dzU3RhbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdE1hdGNoZXMocmVxLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgX3JlcXVlc3RNYXRjaGVzKHJlcSwgYWxsb3dIZWFkTWV0aG9kKSB7XG4gICAgICAgIC8vIFRoZSBwcmVzZW50ZWQgZWZmZWN0aXZlIHJlcXVlc3QgVVJJIGFuZCB0aGF0IG9mIHRoZSBzdG9yZWQgcmVzcG9uc2UgbWF0Y2gsIGFuZFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKCF0aGlzLl91cmwgfHwgdGhpcy5fdXJsID09PSByZXEudXJsKSAmJlxuICAgICAgICAgICAgdGhpcy5faG9zdCA9PT0gcmVxLmhlYWRlcnMuaG9zdCAmJlxuICAgICAgICAgICAgLy8gdGhlIHJlcXVlc3QgbWV0aG9kIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3RvcmVkIHJlc3BvbnNlIGFsbG93cyBpdCB0byBiZSB1c2VkIGZvciB0aGUgcHJlc2VudGVkIHJlcXVlc3QsIGFuZFxuICAgICAgICAgICAgKCFyZXEubWV0aG9kIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0aG9kID09PSByZXEubWV0aG9kIHx8XG4gICAgICAgICAgICAgICAgKGFsbG93SGVhZE1ldGhvZCAmJiAnSEVBRCcgPT09IHJlcS5tZXRob2QpKSAmJlxuICAgICAgICAgICAgLy8gc2VsZWN0aW5nIGhlYWRlciBmaWVsZHMgbm9taW5hdGVkIGJ5IHRoZSBzdG9yZWQgcmVzcG9uc2UgKGlmIGFueSkgbWF0Y2ggdGhvc2UgcHJlc2VudGVkLCBhbmRcbiAgICAgICAgICAgIHRoaXMuX3ZhcnlNYXRjaGVzKHJlcSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfYWxsb3dzU3RvcmluZ0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIC8vICBmb2xsb3dpbmcgQ2FjaGUtQ29udHJvbCByZXNwb25zZSBkaXJlY3RpdmVzIChTZWN0aW9uIDUuMi4yKSBoYXZlIHN1Y2ggYW4gZWZmZWN0OiBtdXN0LXJldmFsaWRhdGUsIHB1YmxpYywgYW5kIHMtbWF4YWdlLlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5fcmVzY2NbJ211c3QtcmV2YWxpZGF0ZSddIHx8XG4gICAgICAgICAgICB0aGlzLl9yZXNjYy5wdWJsaWMgfHxcbiAgICAgICAgICAgIHRoaXMuX3Jlc2NjWydzLW1heGFnZSddXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3ZhcnlNYXRjaGVzKHJlcSkge1xuICAgICAgICBpZiAoIXRoaXMuX3Jlc0hlYWRlcnMudmFyeSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIFZhcnkgaGVhZGVyIGZpZWxkLXZhbHVlIG9mIFwiKlwiIGFsd2F5cyBmYWlscyB0byBtYXRjaFxuICAgICAgICBpZiAodGhpcy5fcmVzSGVhZGVycy52YXJ5ID09PSAnKicpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuX3Jlc0hlYWRlcnMudmFyeVxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5zcGxpdCgvXFxzKixcXHMqLyk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBmaWVsZHMpIHtcbiAgICAgICAgICAgIGlmIChyZXEuaGVhZGVyc1tuYW1lXSAhPT0gdGhpcy5fcmVxSGVhZGVyc1tuYW1lXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9jb3B5V2l0aG91dEhvcEJ5SG9wSGVhZGVycyhpbkhlYWRlcnMpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gaW5IZWFkZXJzKSB7XG4gICAgICAgICAgICBpZiAoaG9wQnlIb3BIZWFkZXJzW25hbWVdKSBjb250aW51ZTtcbiAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSBpbkhlYWRlcnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gOS4xLiAgQ29ubmVjdGlvblxuICAgICAgICBpZiAoaW5IZWFkZXJzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IGluSGVhZGVycy5jb25uZWN0aW9uLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqLyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlcnMud2FybmluZykge1xuICAgICAgICAgICAgY29uc3Qgd2FybmluZ3MgPSBoZWFkZXJzLndhcm5pbmcuc3BsaXQoLywvKS5maWx0ZXIod2FybmluZyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEvXlxccyoxWzAtOV1bMC05XS8udGVzdCh3YXJuaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF3YXJuaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgaGVhZGVycy53YXJuaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLndhcm5pbmcgPSB3YXJuaW5ncy5qb2luKCcsJykudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSGVhZGVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuX2NvcHlXaXRob3V0SG9wQnlIb3BIZWFkZXJzKHRoaXMuX3Jlc0hlYWRlcnMpO1xuICAgICAgICBjb25zdCBhZ2UgPSB0aGlzLmFnZSgpO1xuXG4gICAgICAgIC8vIEEgY2FjaGUgU0hPVUxEIGdlbmVyYXRlIDExMyB3YXJuaW5nIGlmIGl0IGhldXJpc3RpY2FsbHkgY2hvc2UgYSBmcmVzaG5lc3NcbiAgICAgICAgLy8gbGlmZXRpbWUgZ3JlYXRlciB0aGFuIDI0IGhvdXJzIGFuZCB0aGUgcmVzcG9uc2UncyBhZ2UgaXMgZ3JlYXRlciB0aGFuIDI0IGhvdXJzLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBhZ2UgPiAzNjAwICogMjQgJiZcbiAgICAgICAgICAgICF0aGlzLl9oYXNFeHBsaWNpdEV4cGlyYXRpb24oKSAmJlxuICAgICAgICAgICAgdGhpcy5tYXhBZ2UoKSA+IDM2MDAgKiAyNFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGhlYWRlcnMud2FybmluZyA9XG4gICAgICAgICAgICAgICAgKGhlYWRlcnMud2FybmluZyA/IGAke2hlYWRlcnMud2FybmluZ30sIGAgOiAnJykgK1xuICAgICAgICAgICAgICAgICcxMTMgLSBcInJmYzcyMzQgNS41LjRcIic7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVycy5hZ2UgPSBgJHtNYXRoLnJvdW5kKGFnZSl9YDtcbiAgICAgICAgaGVhZGVycy5kYXRlID0gbmV3IERhdGUodGhpcy5ub3coKSkudG9VVENTdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgdGhlIERhdGUgcmVzcG9uc2UgaGVhZGVyIG9yIGN1cnJlbnQgdGltZSBpZiBEYXRlIHdhcyBpbnZhbGlkXG4gICAgICogQHJldHVybiB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBkYXRlKCkge1xuICAgICAgICBjb25zdCBzZXJ2ZXJEYXRlID0gRGF0ZS5wYXJzZSh0aGlzLl9yZXNIZWFkZXJzLmRhdGUpO1xuICAgICAgICBpZiAoaXNGaW5pdGUoc2VydmVyRGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJ2ZXJEYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRpbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgdGhlIEFnZSBoZWFkZXIsIGluIHNlY29uZHMsIHVwZGF0ZWQgZm9yIHRoZSBjdXJyZW50IHRpbWUuXG4gICAgICogTWF5IGJlIGZyYWN0aW9uYWwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIE51bWJlclxuICAgICAqL1xuICAgIGFnZSgpIHtcbiAgICAgICAgbGV0IGFnZSA9IHRoaXMuX2FnZVZhbHVlKCk7XG5cbiAgICAgICAgY29uc3QgcmVzaWRlbnRUaW1lID0gKHRoaXMubm93KCkgLSB0aGlzLl9yZXNwb25zZVRpbWUpIC8gMTAwMDtcbiAgICAgICAgcmV0dXJuIGFnZSArIHJlc2lkZW50VGltZTtcbiAgICB9XG5cbiAgICBfYWdlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0b051bWJlck9yWmVybyh0aGlzLl9yZXNIZWFkZXJzLmFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgYXBwbGljYWJsZSBtYXgtYWdlIChvciBoZXVyaXN0aWMgZXF1aXZhbGVudCkgaW4gc2Vjb25kcy4gVGhpcyBjb3VudHMgc2luY2UgcmVzcG9uc2UncyBgRGF0ZWAuXG4gICAgICpcbiAgICAgKiBGb3IgYW4gdXAtdG8tZGF0ZSB2YWx1ZSwgc2VlIGB0aW1lVG9MaXZlKClgLlxuICAgICAqXG4gICAgICogQHJldHVybiBOdW1iZXJcbiAgICAgKi9cbiAgICBtYXhBZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdG9yYWJsZSgpIHx8IHRoaXMuX3Jlc2NjWyduby1jYWNoZSddKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNoYXJlZCByZXNwb25zZXMgd2l0aCBjb29raWVzIGFyZSBjYWNoZWFibGUgYWNjb3JkaW5nIHRvIHRoZSBSRkMsIGJ1dCBJTUhPIGl0J2QgYmUgdW53aXNlIHRvIGRvIHNvIGJ5IGRlZmF1bHRcbiAgICAgICAgLy8gc28gdGhpcyBpbXBsZW1lbnRhdGlvbiByZXF1aXJlcyBleHBsaWNpdCBvcHQtaW4gdmlhIHB1YmxpYyBoZWFkZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5faXNTaGFyZWQgJiZcbiAgICAgICAgICAgICh0aGlzLl9yZXNIZWFkZXJzWydzZXQtY29va2llJ10gJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5fcmVzY2MucHVibGljICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuX3Jlc2NjLmltbXV0YWJsZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZXNIZWFkZXJzLnZhcnkgPT09ICcqJykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNTaGFyZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNjY1sncHJveHktcmV2YWxpZGF0ZSddKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBhIHJlc3BvbnNlIGluY2x1ZGVzIHRoZSBzLW1heGFnZSBkaXJlY3RpdmUsIGEgc2hhcmVkIGNhY2hlIHJlY2lwaWVudCBNVVNUIGlnbm9yZSB0aGUgRXhwaXJlcyBmaWVsZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNjY1sncy1tYXhhZ2UnXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b051bWJlck9yWmVybyh0aGlzLl9yZXNjY1sncy1tYXhhZ2UnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhIHJlc3BvbnNlIGluY2x1ZGVzIGEgQ2FjaGUtQ29udHJvbCBmaWVsZCB3aXRoIHRoZSBtYXgtYWdlIGRpcmVjdGl2ZSwgYSByZWNpcGllbnQgTVVTVCBpZ25vcmUgdGhlIEV4cGlyZXMgZmllbGQuXG4gICAgICAgIGlmICh0aGlzLl9yZXNjY1snbWF4LWFnZSddKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9OdW1iZXJPclplcm8odGhpcy5fcmVzY2NbJ21heC1hZ2UnXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWZhdWx0TWluVHRsID0gdGhpcy5fcmVzY2MuaW1tdXRhYmxlID8gdGhpcy5faW1tdXRhYmxlTWluVHRsIDogMDtcblxuICAgICAgICBjb25zdCBzZXJ2ZXJEYXRlID0gdGhpcy5kYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLl9yZXNIZWFkZXJzLmV4cGlyZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZXMgPSBEYXRlLnBhcnNlKHRoaXMuX3Jlc0hlYWRlcnMuZXhwaXJlcyk7XG4gICAgICAgICAgICAvLyBBIGNhY2hlIHJlY2lwaWVudCBNVVNUIGludGVycHJldCBpbnZhbGlkIGRhdGUgZm9ybWF0cywgZXNwZWNpYWxseSB0aGUgdmFsdWUgXCIwXCIsIGFzIHJlcHJlc2VudGluZyBhIHRpbWUgaW4gdGhlIHBhc3QgKGkuZS4sIFwiYWxyZWFkeSBleHBpcmVkXCIpLlxuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihleHBpcmVzKSB8fCBleHBpcmVzIDwgc2VydmVyRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGRlZmF1bHRNaW5UdGwsIChleHBpcmVzIC0gc2VydmVyRGF0ZSkgLyAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZXNIZWFkZXJzWydsYXN0LW1vZGlmaWVkJ10pIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RNb2RpZmllZCA9IERhdGUucGFyc2UodGhpcy5fcmVzSGVhZGVyc1snbGFzdC1tb2RpZmllZCddKTtcbiAgICAgICAgICAgIGlmIChpc0Zpbml0ZShsYXN0TW9kaWZpZWQpICYmIHNlcnZlckRhdGUgPiBsYXN0TW9kaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNaW5UdGwsXG4gICAgICAgICAgICAgICAgICAgICgoc2VydmVyRGF0ZSAtIGxhc3RNb2RpZmllZCkgLyAxMDAwKSAqIHRoaXMuX2NhY2hlSGV1cmlzdGljXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0TWluVHRsO1xuICAgIH1cblxuICAgIHRpbWVUb0xpdmUoKSB7XG4gICAgICAgIGNvbnN0IGFnZSA9IHRoaXMubWF4QWdlKCkgLSB0aGlzLmFnZSgpO1xuICAgICAgICBjb25zdCBzdGFsZUlmRXJyb3JBZ2UgPSBhZ2UgKyB0b051bWJlck9yWmVybyh0aGlzLl9yZXNjY1snc3RhbGUtaWYtZXJyb3InXSk7XG4gICAgICAgIGNvbnN0IHN0YWxlV2hpbGVSZXZhbGlkYXRlQWdlID0gYWdlICsgdG9OdW1iZXJPclplcm8odGhpcy5fcmVzY2NbJ3N0YWxlLXdoaWxlLXJldmFsaWRhdGUnXSk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBhZ2UsIHN0YWxlSWZFcnJvckFnZSwgc3RhbGVXaGlsZVJldmFsaWRhdGVBZ2UpICogMTAwMDtcbiAgICB9XG5cbiAgICBzdGFsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4QWdlKCkgPD0gdGhpcy5hZ2UoKTtcbiAgICB9XG5cbiAgICBfdXNlU3RhbGVJZkVycm9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhBZ2UoKSArIHRvTnVtYmVyT3JaZXJvKHRoaXMuX3Jlc2NjWydzdGFsZS1pZi1lcnJvciddKSA+IHRoaXMuYWdlKCk7XG4gICAgfVxuXG4gICAgdXNlU3RhbGVXaGlsZVJldmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heEFnZSgpICsgdG9OdW1iZXJPclplcm8odGhpcy5fcmVzY2NbJ3N0YWxlLXdoaWxlLXJldmFsaWRhdGUnXSkgPiB0aGlzLmFnZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iaikge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXModW5kZWZpbmVkLCB1bmRlZmluZWQsIHsgX2Zyb21PYmplY3Q6IG9iaiB9KTtcbiAgICB9XG5cbiAgICBfZnJvbU9iamVjdChvYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc3BvbnNlVGltZSkgdGhyb3cgRXJyb3IoJ1JlaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgaWYgKCFvYmogfHwgb2JqLnYgIT09IDEpIHRocm93IEVycm9yKCdJbnZhbGlkIHNlcmlhbGl6YXRpb24nKTtcblxuICAgICAgICB0aGlzLl9yZXNwb25zZVRpbWUgPSBvYmoudDtcbiAgICAgICAgdGhpcy5faXNTaGFyZWQgPSBvYmouc2g7XG4gICAgICAgIHRoaXMuX2NhY2hlSGV1cmlzdGljID0gb2JqLmNoO1xuICAgICAgICB0aGlzLl9pbW11dGFibGVNaW5UdGwgPVxuICAgICAgICAgICAgb2JqLmltbSAhPT0gdW5kZWZpbmVkID8gb2JqLmltbSA6IDI0ICogMzYwMCAqIDEwMDA7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IG9iai5zdDtcbiAgICAgICAgdGhpcy5fcmVzSGVhZGVycyA9IG9iai5yZXNoO1xuICAgICAgICB0aGlzLl9yZXNjYyA9IG9iai5yZXNjYztcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gb2JqLm07XG4gICAgICAgIHRoaXMuX3VybCA9IG9iai51O1xuICAgICAgICB0aGlzLl9ob3N0ID0gb2JqLmg7XG4gICAgICAgIHRoaXMuX25vQXV0aG9yaXphdGlvbiA9IG9iai5hO1xuICAgICAgICB0aGlzLl9yZXFIZWFkZXJzID0gb2JqLnJlcWg7XG4gICAgICAgIHRoaXMuX3JlcWNjID0gb2JqLnJlcWNjO1xuICAgIH1cblxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdjogMSxcbiAgICAgICAgICAgIHQ6IHRoaXMuX3Jlc3BvbnNlVGltZSxcbiAgICAgICAgICAgIHNoOiB0aGlzLl9pc1NoYXJlZCxcbiAgICAgICAgICAgIGNoOiB0aGlzLl9jYWNoZUhldXJpc3RpYyxcbiAgICAgICAgICAgIGltbTogdGhpcy5faW1tdXRhYmxlTWluVHRsLFxuICAgICAgICAgICAgc3Q6IHRoaXMuX3N0YXR1cyxcbiAgICAgICAgICAgIHJlc2g6IHRoaXMuX3Jlc0hlYWRlcnMsXG4gICAgICAgICAgICByZXNjYzogdGhpcy5fcmVzY2MsXG4gICAgICAgICAgICBtOiB0aGlzLl9tZXRob2QsXG4gICAgICAgICAgICB1OiB0aGlzLl91cmwsXG4gICAgICAgICAgICBoOiB0aGlzLl9ob3N0LFxuICAgICAgICAgICAgYTogdGhpcy5fbm9BdXRob3JpemF0aW9uLFxuICAgICAgICAgICAgcmVxaDogdGhpcy5fcmVxSGVhZGVycyxcbiAgICAgICAgICAgIHJlcWNjOiB0aGlzLl9yZXFjYyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWFkZXJzIGZvciBzZW5kaW5nIHRvIHRoZSBvcmlnaW4gc2VydmVyIHRvIHJldmFsaWRhdGUgc3RhbGUgcmVzcG9uc2UuXG4gICAgICogQWxsb3dzIHNlcnZlciB0byByZXR1cm4gMzA0IHRvIGFsbG93IHJldXNlIG9mIHRoZSBwcmV2aW91cyByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEhvcCBieSBob3AgaGVhZGVycyBhcmUgYWx3YXlzIHN0cmlwcGVkLlxuICAgICAqIFJldmFsaWRhdGlvbiBoZWFkZXJzIG1heSBiZSBhZGRlZCBvciByZW1vdmVkLCBkZXBlbmRpbmcgb24gcmVxdWVzdC5cbiAgICAgKi9cbiAgICByZXZhbGlkYXRpb25IZWFkZXJzKGluY29taW5nUmVxKSB7XG4gICAgICAgIHRoaXMuX2Fzc2VydFJlcXVlc3RIYXNIZWFkZXJzKGluY29taW5nUmVxKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuX2NvcHlXaXRob3V0SG9wQnlIb3BIZWFkZXJzKGluY29taW5nUmVxLmhlYWRlcnMpO1xuXG4gICAgICAgIC8vIFRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgdW5kZXJzdGFuZCByYW5nZSByZXF1ZXN0c1xuICAgICAgICBkZWxldGUgaGVhZGVyc1snaWYtcmFuZ2UnXTtcblxuICAgICAgICBpZiAoIXRoaXMuX3JlcXVlc3RNYXRjaGVzKGluY29taW5nUmVxLCB0cnVlKSB8fCAhdGhpcy5zdG9yYWJsZSgpKSB7XG4gICAgICAgICAgICAvLyByZXZhbGlkYXRpb24gYWxsb3dlZCB2aWEgSEVBRFxuICAgICAgICAgICAgLy8gbm90IGZvciB0aGUgc2FtZSByZXNvdXJjZSwgb3Igd2Fzbid0IGFsbG93ZWQgdG8gYmUgY2FjaGVkIGFueXdheVxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ2lmLW5vbmUtbWF0Y2gnXTtcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydpZi1tb2RpZmllZC1zaW5jZSddO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNVVNUIHNlbmQgdGhhdCBlbnRpdHktdGFnIGluIGFueSBjYWNoZSB2YWxpZGF0aW9uIHJlcXVlc3QgKHVzaW5nIElmLU1hdGNoIG9yIElmLU5vbmUtTWF0Y2gpIGlmIGFuIGVudGl0eS10YWcgaGFzIGJlZW4gcHJvdmlkZWQgYnkgdGhlIG9yaWdpbiBzZXJ2ZXIuICovXG4gICAgICAgIGlmICh0aGlzLl9yZXNIZWFkZXJzLmV0YWcpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbJ2lmLW5vbmUtbWF0Y2gnXSA9IGhlYWRlcnNbJ2lmLW5vbmUtbWF0Y2gnXVxuICAgICAgICAgICAgICAgID8gYCR7aGVhZGVyc1snaWYtbm9uZS1tYXRjaCddfSwgJHt0aGlzLl9yZXNIZWFkZXJzLmV0YWd9YFxuICAgICAgICAgICAgICAgIDogdGhpcy5fcmVzSGVhZGVycy5ldGFnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xpZW50cyBNQVkgaXNzdWUgc2ltcGxlIChub24tc3VicmFuZ2UpIEdFVCByZXF1ZXN0cyB3aXRoIGVpdGhlciB3ZWFrIHZhbGlkYXRvcnMgb3Igc3Ryb25nIHZhbGlkYXRvcnMuIENsaWVudHMgTVVTVCBOT1QgdXNlIHdlYWsgdmFsaWRhdG9ycyBpbiBvdGhlciBmb3JtcyBvZiByZXF1ZXN0LlxuICAgICAgICBjb25zdCBmb3JiaWRzV2Vha1ZhbGlkYXRvcnMgPVxuICAgICAgICAgICAgaGVhZGVyc1snYWNjZXB0LXJhbmdlcyddIHx8XG4gICAgICAgICAgICBoZWFkZXJzWydpZi1tYXRjaCddIHx8XG4gICAgICAgICAgICBoZWFkZXJzWydpZi11bm1vZGlmaWVkLXNpbmNlJ10gfHxcbiAgICAgICAgICAgICh0aGlzLl9tZXRob2QgJiYgdGhpcy5fbWV0aG9kICE9ICdHRVQnKTtcblxuICAgICAgICAvKiBTSE9VTEQgc2VuZCB0aGUgTGFzdC1Nb2RpZmllZCB2YWx1ZSBpbiBub24tc3VicmFuZ2UgY2FjaGUgdmFsaWRhdGlvbiByZXF1ZXN0cyAodXNpbmcgSWYtTW9kaWZpZWQtU2luY2UpIGlmIG9ubHkgYSBMYXN0LU1vZGlmaWVkIHZhbHVlIGhhcyBiZWVuIHByb3ZpZGVkIGJ5IHRoZSBvcmlnaW4gc2VydmVyLlxuICAgICAgICBOb3RlOiBUaGlzIGltcGxlbWVudGF0aW9uIGRvZXMgbm90IHVuZGVyc3RhbmQgcGFydGlhbCByZXNwb25zZXMgKDIwNikgKi9cbiAgICAgICAgaWYgKGZvcmJpZHNXZWFrVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ2lmLW1vZGlmaWVkLXNpbmNlJ107XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXJzWydpZi1ub25lLW1hdGNoJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldGFncyA9IGhlYWRlcnNbJ2lmLW5vbmUtbWF0Y2gnXVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoLywvKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGV0YWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEvXlxccypXXFwvLy50ZXN0KGV0YWcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV0YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgaGVhZGVyc1snaWYtbm9uZS1tYXRjaCddO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ2lmLW5vbmUtbWF0Y2gnXSA9IGV0YWdzLmpvaW4oJywnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdGhpcy5fcmVzSGVhZGVyc1snbGFzdC1tb2RpZmllZCddICYmXG4gICAgICAgICAgICAhaGVhZGVyc1snaWYtbW9kaWZpZWQtc2luY2UnXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGhlYWRlcnNbJ2lmLW1vZGlmaWVkLXNpbmNlJ10gPSB0aGlzLl9yZXNIZWFkZXJzWydsYXN0LW1vZGlmaWVkJ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIG5ldyBDYWNoZVBvbGljeSB3aXRoIGluZm9ybWF0aW9uIGNvbWJpbmVkIGZyb20gdGhlIHByZXZpZXdzIHJlc3BvbnNlLFxuICAgICAqIGFuZCB0aGUgbmV3IHJldmFsaWRhdGlvbiByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIFJldHVybnMge3BvbGljeSwgbW9kaWZpZWR9IHdoZXJlIG1vZGlmaWVkIGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nXG4gICAgICogd2hldGhlciB0aGUgcmVzcG9uc2UgYm9keSBoYXMgYmVlbiBtb2RpZmllZCwgYW5kIG9sZCBjYWNoZWQgYm9keSBjYW4ndCBiZSB1c2VkLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSB7cG9saWN5OiBDYWNoZVBvbGljeSwgbW9kaWZpZWQ6IEJvb2xlYW59XG4gICAgICovXG4gICAgcmV2YWxpZGF0ZWRQb2xpY3kocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5fYXNzZXJ0UmVxdWVzdEhhc0hlYWRlcnMocmVxdWVzdCk7XG4gICAgICAgIGlmKHRoaXMuX3VzZVN0YWxlSWZFcnJvcigpICYmIGlzRXJyb3JSZXNwb25zZShyZXNwb25zZSkpIHsgIC8vIEkgY29uc2lkZXIgdGhlIHJldmFsaWRhdGlvbiByZXF1ZXN0IHVuc3VjY2Vzc2Z1bFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RpZmllZDogZmFsc2UsXG4gICAgICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHBvbGljeTogdGhpcyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdSZXNwb25zZSBoZWFkZXJzIG1pc3NpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZXNlIGFyZW4ndCBnb2luZyB0byBiZSBzdXBwb3J0ZWQgZXhhY3RseSwgc2luY2Ugb25lIENhY2hlUG9saWN5IG9iamVjdFxuICAgICAgICAvLyBkb2Vzbid0IGtub3cgYWJvdXQgYWxsIHRoZSBvdGhlciBjYWNoZWQgb2JqZWN0cy5cbiAgICAgICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlLnN0YXR1cyAhPSAzMDQpIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZXRhZyAmJlxuICAgICAgICAgICAgIS9eXFxzKldcXC8vLnRlc3QocmVzcG9uc2UuaGVhZGVycy5ldGFnKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFwiQWxsIG9mIHRoZSBzdG9yZWQgcmVzcG9uc2VzIHdpdGggdGhlIHNhbWUgc3Ryb25nIHZhbGlkYXRvciBhcmUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBzdG9yZWQgcmVzcG9uc2VzIGNvbnRhaW4gdGhlIHNhbWUgc3Ryb25nIHZhbGlkYXRvcixcbiAgICAgICAgICAgIC8vIHRoZW4gdGhlIGNhY2hlIE1VU1QgTk9UIHVzZSB0aGUgbmV3IHJlc3BvbnNlIHRvIHVwZGF0ZSBhbnkgc3RvcmVkIHJlc3BvbnNlcy5cIlxuICAgICAgICAgICAgbWF0Y2hlcyA9XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzSGVhZGVycy5ldGFnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzSGVhZGVycy5ldGFnLnJlcGxhY2UoL15cXHMqV1xcLy8sICcnKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5ldGFnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3Jlc0hlYWRlcnMuZXRhZyAmJiByZXNwb25zZS5oZWFkZXJzLmV0YWcpIHtcbiAgICAgICAgICAgIC8vIFwiSWYgdGhlIG5ldyByZXNwb25zZSBjb250YWlucyBhIHdlYWsgdmFsaWRhdG9yIGFuZCB0aGF0IHZhbGlkYXRvciBjb3JyZXNwb25kc1xuICAgICAgICAgICAgLy8gdG8gb25lIG9mIHRoZSBjYWNoZSdzIHN0b3JlZCByZXNwb25zZXMsXG4gICAgICAgICAgICAvLyB0aGVuIHRoZSBtb3N0IHJlY2VudCBvZiB0aG9zZSBtYXRjaGluZyBzdG9yZWQgcmVzcG9uc2VzIGlzIHNlbGVjdGVkIGZvciB1cGRhdGUuXCJcbiAgICAgICAgICAgIG1hdGNoZXMgPVxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc0hlYWRlcnMuZXRhZy5yZXBsYWNlKC9eXFxzKldcXC8vLCAnJykgPT09XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5ldGFnLnJlcGxhY2UoL15cXHMqV1xcLy8sICcnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9yZXNIZWFkZXJzWydsYXN0LW1vZGlmaWVkJ10pIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPVxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc0hlYWRlcnNbJ2xhc3QtbW9kaWZpZWQnXSA9PT1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzWydsYXN0LW1vZGlmaWVkJ107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV3IHJlc3BvbnNlIGRvZXMgbm90IGluY2x1ZGUgYW55IGZvcm0gb2YgdmFsaWRhdG9yIChzdWNoIGFzIGluIHRoZSBjYXNlIHdoZXJlXG4gICAgICAgICAgICAvLyBhIGNsaWVudCBnZW5lcmF0ZXMgYW4gSWYtTW9kaWZpZWQtU2luY2UgcmVxdWVzdCBmcm9tIGEgc291cmNlIG90aGVyIHRoYW4gdGhlIExhc3QtTW9kaWZpZWRcbiAgICAgICAgICAgIC8vIHJlc3BvbnNlIGhlYWRlciBmaWVsZCksIGFuZCB0aGVyZSBpcyBvbmx5IG9uZSBzdG9yZWQgcmVzcG9uc2UsIGFuZCB0aGF0IHN0b3JlZCByZXNwb25zZSBhbHNvXG4gICAgICAgICAgICAvLyBsYWNrcyBhIHZhbGlkYXRvciwgdGhlbiB0aGF0IHN0b3JlZCByZXNwb25zZSBpcyBzZWxlY3RlZCBmb3IgdXBkYXRlLlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICF0aGlzLl9yZXNIZWFkZXJzLmV0YWcgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5fcmVzSGVhZGVyc1snbGFzdC1tb2RpZmllZCddICYmXG4gICAgICAgICAgICAgICAgIXJlc3BvbnNlLmhlYWRlcnMuZXRhZyAmJlxuICAgICAgICAgICAgICAgICFyZXNwb25zZS5oZWFkZXJzWydsYXN0LW1vZGlmaWVkJ11cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBvbGljeTogbmV3IHRoaXMuY29uc3RydWN0b3IocmVxdWVzdCwgcmVzcG9uc2UpLFxuICAgICAgICAgICAgICAgIC8vIENsaWVudCByZWNlaXZpbmcgMzA0IHdpdGhvdXQgYm9keSwgZXZlbiBpZiBpdCdzIGludmFsaWQvbWlzbWF0Y2hlZCBoYXMgbm8gb3B0aW9uXG4gICAgICAgICAgICAgICAgLy8gYnV0IHRvIHJldXNlIGEgY2FjaGVkIGJvZHkuIFdlIGRvbid0IGhhdmUgYSBnb29kIHdheSB0byB0ZWxsIGNsaWVudHMgdG8gZG9cbiAgICAgICAgICAgICAgICAvLyBlcnJvciByZWNvdmVyeSBpbiBzdWNoIGNhc2UuXG4gICAgICAgICAgICAgICAgbW9kaWZpZWQ6IHJlc3BvbnNlLnN0YXR1cyAhPSAzMDQsXG4gICAgICAgICAgICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXNlIG90aGVyIGhlYWRlciBmaWVsZHMgcHJvdmlkZWQgaW4gdGhlIDMwNCAoTm90IE1vZGlmaWVkKSByZXNwb25zZSB0byByZXBsYWNlIGFsbCBpbnN0YW5jZXNcbiAgICAgICAgLy8gb2YgdGhlIGNvcnJlc3BvbmRpbmcgaGVhZGVyIGZpZWxkcyBpbiB0aGUgc3RvcmVkIHJlc3BvbnNlLlxuICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBpbiB0aGlzLl9yZXNIZWFkZXJzKSB7XG4gICAgICAgICAgICBoZWFkZXJzW2tdID1cbiAgICAgICAgICAgICAgICBrIGluIHJlc3BvbnNlLmhlYWRlcnMgJiYgIWV4Y2x1ZGVkRnJvbVJldmFsaWRhdGlvblVwZGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICA/IHJlc3BvbnNlLmhlYWRlcnNba11cbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9yZXNIZWFkZXJzW2tdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3UmVzcG9uc2UgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZSwge1xuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLl9zdGF0dXMsXG4gICAgICAgICAgICBtZXRob2Q6IHRoaXMuX21ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9saWN5OiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihyZXF1ZXN0LCBuZXdSZXNwb25zZSwge1xuICAgICAgICAgICAgICAgIHNoYXJlZDogdGhpcy5faXNTaGFyZWQsXG4gICAgICAgICAgICAgICAgY2FjaGVIZXVyaXN0aWM6IHRoaXMuX2NhY2hlSGV1cmlzdGljLFxuICAgICAgICAgICAgICAgIGltbXV0YWJsZU1pblRpbWVUb0xpdmU6IHRoaXMuX2ltbXV0YWJsZU1pblR0bCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbW9kaWZpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWF0Y2hlczogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCB0bHMgPSByZXF1aXJlKCd0bHMnKTtcbmNvbnN0IGh0dHAyID0gcmVxdWlyZSgnaHR0cDInKTtcbmNvbnN0IFF1aWNrTFJVID0gcmVxdWlyZSgncXVpY2stbHJ1Jyk7XG5cbmNvbnN0IGtDdXJyZW50U3RyZWFtc0NvdW50ID0gU3ltYm9sKCdjdXJyZW50U3RyZWFtc0NvdW50Jyk7XG5jb25zdCBrUmVxdWVzdCA9IFN5bWJvbCgncmVxdWVzdCcpO1xuY29uc3Qga09yaWdpblNldCA9IFN5bWJvbCgnY2FjaGVkT3JpZ2luU2V0Jyk7XG5jb25zdCBrR3JhY2VmdWxseUNsb3NpbmcgPSBTeW1ib2woJ2dyYWNlZnVsbHlDbG9zaW5nJyk7XG5cbmNvbnN0IG5hbWVLZXlzID0gW1xuXHQvLyBgaHR0cDIuY29ubmVjdCgpYCBvcHRpb25zXG5cdCdtYXhEZWZsYXRlRHluYW1pY1RhYmxlU2l6ZScsXG5cdCdtYXhTZXNzaW9uTWVtb3J5Jyxcblx0J21heEhlYWRlckxpc3RQYWlycycsXG5cdCdtYXhPdXRzdGFuZGluZ1BpbmdzJyxcblx0J21heFJlc2VydmVkUmVtb3RlU3RyZWFtcycsXG5cdCdtYXhTZW5kSGVhZGVyQmxvY2tMZW5ndGgnLFxuXHQncGFkZGluZ1N0cmF0ZWd5JyxcblxuXHQvLyBgdGxzLmNvbm5lY3QoKWAgb3B0aW9uc1xuXHQnbG9jYWxBZGRyZXNzJyxcblx0J3BhdGgnLFxuXHQncmVqZWN0VW5hdXRob3JpemVkJyxcblx0J21pbkRIU2l6ZScsXG5cblx0Ly8gYHRscy5jcmVhdGVTZWN1cmVDb250ZXh0KClgIG9wdGlvbnNcblx0J2NhJyxcblx0J2NlcnQnLFxuXHQnY2xpZW50Q2VydEVuZ2luZScsXG5cdCdjaXBoZXJzJyxcblx0J2tleScsXG5cdCdwZngnLFxuXHQnc2VydmVybmFtZScsXG5cdCdtaW5WZXJzaW9uJyxcblx0J21heFZlcnNpb24nLFxuXHQnc2VjdXJlUHJvdG9jb2wnLFxuXHQnY3JsJyxcblx0J2hvbm9yQ2lwaGVyT3JkZXInLFxuXHQnZWNkaEN1cnZlJyxcblx0J2RocGFyYW0nLFxuXHQnc2VjdXJlT3B0aW9ucycsXG5cdCdzZXNzaW9uSWRDb250ZXh0J1xuXTtcblxuY29uc3QgZ2V0U29ydGVkSW5kZXggPSAoYXJyYXksIHZhbHVlLCBjb21wYXJlKSA9PiB7XG5cdGxldCBsb3cgPSAwO1xuXHRsZXQgaGlnaCA9IGFycmF5Lmxlbmd0aDtcblxuXHR3aGlsZSAobG93IDwgaGlnaCkge1xuXHRcdGNvbnN0IG1pZCA9IChsb3cgKyBoaWdoKSA+Pj4gMTtcblxuXHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdFx0aWYgKGNvbXBhcmUoYXJyYXlbbWlkXSwgdmFsdWUpKSB7XG5cdFx0XHQvLyBUaGlzIG5ldmVyIGdldHMgY2FsbGVkIGJlY2F1c2Ugd2UgdXNlIGRlc2NlbmRpbmcgc29ydC4gQmV0dGVyIHRvIGhhdmUgdGhpcyBhbnl3YXkuXG5cdFx0XHRsb3cgPSBtaWQgKyAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoaWdoID0gbWlkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBsb3c7XG59O1xuXG5jb25zdCBjb21wYXJlU2Vzc2lvbnMgPSAoYSwgYikgPT4ge1xuXHRyZXR1cm4gYS5yZW1vdGVTZXR0aW5ncy5tYXhDb25jdXJyZW50U3RyZWFtcyA+IGIucmVtb3RlU2V0dGluZ3MubWF4Q29uY3VycmVudFN0cmVhbXM7XG59O1xuXG4vLyBTZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzgzMzZcbmNvbnN0IGNsb3NlQ292ZXJlZFNlc3Npb25zID0gKHdoZXJlLCBzZXNzaW9uKSA9PiB7XG5cdC8vIENsaWVudHMgU0hPVUxEIE5PVCBlbWl0IG5ldyByZXF1ZXN0cyBvbiBhbnkgY29ubmVjdGlvbiB3aG9zZSBPcmlnaW5cblx0Ly8gU2V0IGlzIGEgcHJvcGVyIHN1YnNldCBvZiBhbm90aGVyIGNvbm5lY3Rpb24ncyBPcmlnaW4gU2V0LCBhbmQgdGhleVxuXHQvLyBTSE9VTEQgY2xvc2UgaXQgb25jZSBhbGwgb3V0c3RhbmRpbmcgcmVxdWVzdHMgYXJlIHNhdGlzZmllZC5cblx0Zm9yIChjb25zdCBjb3ZlcmVkU2Vzc2lvbiBvZiB3aGVyZSkge1xuXHRcdGlmIChcblx0XHRcdC8vIFRoZSBzZXQgaXMgYSBwcm9wZXIgc3Vic2V0IHdoZW4gaXRzIGxlbmd0aCBpcyBsZXNzIHRoYW4gdGhlIG90aGVyIHNldC5cblx0XHRcdGNvdmVyZWRTZXNzaW9uW2tPcmlnaW5TZXRdLmxlbmd0aCA8IHNlc3Npb25ba09yaWdpblNldF0ubGVuZ3RoICYmXG5cblx0XHRcdC8vIEFuZCB0aGUgb3RoZXIgc2V0IGluY2x1ZGVzIGFsbCBlbGVtZW50cyBvZiB0aGUgc3Vic2V0LlxuXHRcdFx0Y292ZXJlZFNlc3Npb25ba09yaWdpblNldF0uZXZlcnkob3JpZ2luID0+IHNlc3Npb25ba09yaWdpblNldF0uaW5jbHVkZXMob3JpZ2luKSkgJiZcblxuXHRcdFx0Ly8gTWFrZXMgc3VyZSB0aGF0IHRoZSBzZXNzaW9uIGNhbiBoYW5kbGUgYWxsIHJlcXVlc3RzIGZyb20gdGhlIGNvdmVyZWQgc2Vzc2lvbi5cblx0XHRcdGNvdmVyZWRTZXNzaW9uW2tDdXJyZW50U3RyZWFtc0NvdW50XSArIHNlc3Npb25ba0N1cnJlbnRTdHJlYW1zQ291bnRdIDw9IHNlc3Npb24ucmVtb3RlU2V0dGluZ3MubWF4Q29uY3VycmVudFN0cmVhbXNcblx0XHQpIHtcblx0XHRcdC8vIFRoaXMgYWxsb3dzIHBlbmRpbmcgcmVxdWVzdHMgdG8gZmluaXNoIGFuZCBwcmV2ZW50cyBtYWtpbmcgbmV3IHJlcXVlc3RzLlxuXHRcdFx0Z3JhY2VmdWxseUNsb3NlKGNvdmVyZWRTZXNzaW9uKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIFRoaXMgaXMgYmFzaWNhbGx5IGludmVydGVkIGBjbG9zZUNvdmVyZWRTZXNzaW9ucyguLi4pYC5cbmNvbnN0IGNsb3NlU2Vzc2lvbklmQ292ZXJlZCA9ICh3aGVyZSwgY292ZXJlZFNlc3Npb24pID0+IHtcblx0Zm9yIChjb25zdCBzZXNzaW9uIG9mIHdoZXJlKSB7XG5cdFx0aWYgKFxuXHRcdFx0Y292ZXJlZFNlc3Npb25ba09yaWdpblNldF0ubGVuZ3RoIDwgc2Vzc2lvbltrT3JpZ2luU2V0XS5sZW5ndGggJiZcblx0XHRcdGNvdmVyZWRTZXNzaW9uW2tPcmlnaW5TZXRdLmV2ZXJ5KG9yaWdpbiA9PiBzZXNzaW9uW2tPcmlnaW5TZXRdLmluY2x1ZGVzKG9yaWdpbikpICYmXG5cdFx0XHRjb3ZlcmVkU2Vzc2lvbltrQ3VycmVudFN0cmVhbXNDb3VudF0gKyBzZXNzaW9uW2tDdXJyZW50U3RyZWFtc0NvdW50XSA8PSBzZXNzaW9uLnJlbW90ZVNldHRpbmdzLm1heENvbmN1cnJlbnRTdHJlYW1zXG5cdFx0KSB7XG5cdFx0XHRncmFjZWZ1bGx5Q2xvc2UoY292ZXJlZFNlc3Npb24pO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgZ2V0U2Vzc2lvbnMgPSAoe2FnZW50LCBpc0ZyZWV9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cblx0Zm9yIChjb25zdCBub3JtYWxpemVkT3B0aW9ucyBpbiBhZ2VudC5zZXNzaW9ucykge1xuXHRcdGNvbnN0IHNlc3Npb25zID0gYWdlbnQuc2Vzc2lvbnNbbm9ybWFsaXplZE9wdGlvbnNdO1xuXG5cdFx0Y29uc3QgZmlsdGVyZWQgPSBzZXNzaW9ucy5maWx0ZXIoc2Vzc2lvbiA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBzZXNzaW9uW0FnZW50LmtDdXJyZW50U3RyZWFtc0NvdW50XSA8IHNlc3Npb24ucmVtb3RlU2V0dGluZ3MubWF4Q29uY3VycmVudFN0cmVhbXM7XG5cblx0XHRcdHJldHVybiBpc0ZyZWUgPyByZXN1bHQgOiAhcmVzdWx0O1xuXHRcdH0pO1xuXG5cdFx0aWYgKGZpbHRlcmVkLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0cmVzdWx0W25vcm1hbGl6ZWRPcHRpb25zXSA9IGZpbHRlcmVkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBncmFjZWZ1bGx5Q2xvc2UgPSBzZXNzaW9uID0+IHtcblx0c2Vzc2lvbltrR3JhY2VmdWxseUNsb3NpbmddID0gdHJ1ZTtcblxuXHRpZiAoc2Vzc2lvbltrQ3VycmVudFN0cmVhbXNDb3VudF0gPT09IDApIHtcblx0XHRzZXNzaW9uLmNsb3NlKCk7XG5cdH1cbn07XG5cbmNsYXNzIEFnZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Y29uc3RydWN0b3Ioe3RpbWVvdXQgPSA2MDAwMCwgbWF4U2Vzc2lvbnMgPSBJbmZpbml0eSwgbWF4RnJlZVNlc3Npb25zID0gMTAsIG1heENhY2hlZFRsc1Nlc3Npb25zID0gMTAwfSA9IHt9KSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdC8vIEEgc2Vzc2lvbiBpcyBjb25zaWRlcmVkIGJ1c3kgd2hlbiBpdHMgY3VycmVudCBzdHJlYW1zIGNvdW50XG5cdFx0Ly8gaXMgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoZSBgbWF4Q29uY3VycmVudFN0cmVhbXNgIHZhbHVlLlxuXG5cdFx0Ly8gQSBzZXNzaW9uIGlzIGNvbnNpZGVyZWQgZnJlZSB3aGVuIGl0cyBjdXJyZW50IHN0cmVhbXMgY291bnRcblx0XHQvLyBpcyBsZXNzIHRoYW4gdGhlIGBtYXhDb25jdXJyZW50U3RyZWFtc2AgdmFsdWUuXG5cblx0XHQvLyBTRVNTSU9OU1tOT1JNQUxJWkVEX09QVElPTlNdID0gW107XG5cdFx0dGhpcy5zZXNzaW9ucyA9IHt9O1xuXG5cdFx0Ly8gVGhlIHF1ZXVlIGZvciBjcmVhdGluZyBuZXcgc2Vzc2lvbnMuIEl0IGxvb2tzIGxpa2UgdGhpczpcblx0XHQvLyBRVUVVRVtOT1JNQUxJWkVEX09QVElPTlNdW05PUk1BTElaRURfT1JJR0lOXSA9IEVOVFJZX0ZVTkNUSU9OXG5cdFx0Ly9cblx0XHQvLyBUaGUgZW50cnkgZnVuY3Rpb24gaGFzIGBsaXN0ZW5lcnNgLCBgY29tcGxldGVkYCBhbmQgYGRlc3Ryb3llZGAgcHJvcGVydGllcy5cblx0XHQvLyBgbGlzdGVuZXJzYCBpcyBhbiBhcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgYHJlc29sdmVgIGFuZCBgcmVqZWN0YCBmdW5jdGlvbnMuXG5cdFx0Ly8gYGNvbXBsZXRlZGAgaXMgYSBib29sZWFuLiBJdCdzIHNldCB0byB0cnVlIGFmdGVyIEVOVFJZX0ZVTkNUSU9OIGlzIGV4ZWN1dGVkLlxuXHRcdC8vIGBkZXN0cm95ZWRgIGlzIGEgYm9vbGVhbi4gSWYgaXQncyBzZXQgdG8gdHJ1ZSwgdGhlIHNlc3Npb24gd2lsbCBiZSBkZXN0cm95ZWQgaWYgaGFzbid0IGNvbm5lY3RlZCB5ZXQuXG5cdFx0dGhpcy5xdWV1ZSA9IHt9O1xuXG5cdFx0Ly8gRWFjaCBzZXNzaW9uIHdpbGwgdXNlIHRoaXMgdGltZW91dCB2YWx1ZS5cblx0XHR0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuXG5cdFx0Ly8gTWF4IHNlc3Npb25zIGluIHRvdGFsXG5cdFx0dGhpcy5tYXhTZXNzaW9ucyA9IG1heFNlc3Npb25zO1xuXG5cdFx0Ly8gTWF4IGZyZWUgc2Vzc2lvbnMgaW4gdG90YWxcblx0XHQvLyBUT0RPOiBkZWNyZWFzaW5nIGBtYXhGcmVlU2Vzc2lvbnNgIHNob3VsZCBjbG9zZSBzb21lIHNlc3Npb25zXG5cdFx0dGhpcy5tYXhGcmVlU2Vzc2lvbnMgPSBtYXhGcmVlU2Vzc2lvbnM7XG5cblx0XHR0aGlzLl9mcmVlU2Vzc2lvbnNDb3VudCA9IDA7XG5cdFx0dGhpcy5fc2Vzc2lvbnNDb3VudCA9IDA7XG5cblx0XHQvLyBXZSBkb24ndCBzdXBwb3J0IHB1c2ggc3RyZWFtcyBieSBkZWZhdWx0LlxuXHRcdHRoaXMuc2V0dGluZ3MgPSB7XG5cdFx0XHRlbmFibGVQdXNoOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBSZXVzaW5nIFRMUyBzZXNzaW9ucyBpbmNyZWFzZXMgcGVyZm9ybWFuY2UuXG5cdFx0dGhpcy50bHNTZXNzaW9uQ2FjaGUgPSBuZXcgUXVpY2tMUlUoe21heFNpemU6IG1heENhY2hlZFRsc1Nlc3Npb25zfSk7XG5cdH1cblxuXHRzdGF0aWMgbm9ybWFsaXplT3JpZ2luKHVybCwgc2VydmVybmFtZSkge1xuXHRcdGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xuXHRcdFx0dXJsID0gbmV3IFVSTCh1cmwpO1xuXHRcdH1cblxuXHRcdGlmIChzZXJ2ZXJuYW1lICYmIHVybC5ob3N0bmFtZSAhPT0gc2VydmVybmFtZSkge1xuXHRcdFx0dXJsLmhvc3RuYW1lID0gc2VydmVybmFtZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXJsLm9yaWdpbjtcblx0fVxuXG5cdG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucykge1xuXHRcdGxldCBub3JtYWxpemVkID0gJyc7XG5cblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgbmFtZUtleXMpIHtcblx0XHRcdFx0aWYgKG9wdGlvbnNba2V5XSkge1xuXHRcdFx0XHRcdG5vcm1hbGl6ZWQgKz0gYDoke29wdGlvbnNba2V5XX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdH1cblxuXHRfdHJ5VG9DcmVhdGVOZXdTZXNzaW9uKG5vcm1hbGl6ZWRPcHRpb25zLCBub3JtYWxpemVkT3JpZ2luKSB7XG5cdFx0aWYgKCEobm9ybWFsaXplZE9wdGlvbnMgaW4gdGhpcy5xdWV1ZSkgfHwgIShub3JtYWxpemVkT3JpZ2luIGluIHRoaXMucXVldWVbbm9ybWFsaXplZE9wdGlvbnNdKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZW0gPSB0aGlzLnF1ZXVlW25vcm1hbGl6ZWRPcHRpb25zXVtub3JtYWxpemVkT3JpZ2luXTtcblxuXHRcdC8vIFRoZSBlbnRyeSBmdW5jdGlvbiBjYW4gYmUgcnVuIG9ubHkgb25jZS5cblx0XHQvLyBCVUc6IFRoZSBzZXNzaW9uIG1heSBiZSBuZXZlciBjcmVhdGVkIHdoZW46XG5cdFx0Ly8gLSB0aGUgZmlyc3QgY29uZGl0aW9uIGlzIGZhbHNlIEFORFxuXHRcdC8vIC0gdGhpcyBmdW5jdGlvbiBpcyBuZXZlciBjYWxsZWQgd2l0aCB0aGUgc2FtZSBhcmd1bWVudHMgaW4gdGhlIGZ1dHVyZS5cblx0XHRpZiAodGhpcy5fc2Vzc2lvbnNDb3VudCA8IHRoaXMubWF4U2Vzc2lvbnMgJiYgIWl0ZW0uY29tcGxldGVkKSB7XG5cdFx0XHRpdGVtLmNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdGl0ZW0oKTtcblx0XHR9XG5cdH1cblxuXHRnZXRTZXNzaW9uKG9yaWdpbiwgb3B0aW9ucywgbGlzdGVuZXJzKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVycykpIHtcblx0XHRcdFx0bGlzdGVuZXJzID0gWy4uLmxpc3RlbmVyc107XG5cblx0XHRcdFx0Ly8gUmVzb2x2ZSB0aGUgY3VycmVudCBwcm9taXNlIEFTQVAsIHdlJ3JlIGp1c3QgbW92aW5nIHRoZSBsaXN0ZW5lcnMuXG5cdFx0XHRcdC8vIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBhdCBhIGRpZmZlcmVudCB0aW1lLlxuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0ZW5lcnMgPSBbe3Jlc29sdmUsIHJlamVjdH1dO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IHRoaXMubm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcblx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRPcmlnaW4gPSBBZ2VudC5ub3JtYWxpemVPcmlnaW4ob3JpZ2luLCBvcHRpb25zICYmIG9wdGlvbnMuc2VydmVybmFtZSk7XG5cblx0XHRcdGlmIChub3JtYWxpemVkT3JpZ2luID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCB7cmVqZWN0fSBvZiBsaXN0ZW5lcnMpIHtcblx0XHRcdFx0XHRyZWplY3QobmV3IFR5cGVFcnJvcignVGhlIGBvcmlnaW5gIGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgc3RyaW5nIG9yIGFuIFVSTCBvYmplY3QnKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChub3JtYWxpemVkT3B0aW9ucyBpbiB0aGlzLnNlc3Npb25zKSB7XG5cdFx0XHRcdGNvbnN0IHNlc3Npb25zID0gdGhpcy5zZXNzaW9uc1tub3JtYWxpemVkT3B0aW9uc107XG5cblx0XHRcdFx0bGV0IG1heENvbmN1cnJlbnRTdHJlYW1zID0gLTE7XG5cdFx0XHRcdGxldCBjdXJyZW50U3RyZWFtc0NvdW50ID0gLTE7XG5cdFx0XHRcdGxldCBvcHRpbWFsU2Vzc2lvbjtcblxuXHRcdFx0XHQvLyBXZSBjb3VsZCBqdXN0IGRvIHRoaXMuc2Vzc2lvbnNbbm9ybWFsaXplZE9wdGlvbnNdLmZpbmQoLi4uKSBidXQgdGhhdCBpc24ndCBvcHRpbWFsLlxuXHRcdFx0XHQvLyBBZGRpdGlvbmFsbHksIHdlIGFyZSBsb29raW5nIGZvciBzZXNzaW9uIHdoaWNoIGhhcyBiaWdnZXN0IGN1cnJlbnQgcGVuZGluZyBzdHJlYW1zIGNvdW50LlxuXHRcdFx0XHRmb3IgKGNvbnN0IHNlc3Npb24gb2Ygc2Vzc2lvbnMpIHtcblx0XHRcdFx0XHRjb25zdCBzZXNzaW9uTWF4Q29uY3VycmVudFN0cmVhbXMgPSBzZXNzaW9uLnJlbW90ZVNldHRpbmdzLm1heENvbmN1cnJlbnRTdHJlYW1zO1xuXG5cdFx0XHRcdFx0aWYgKHNlc3Npb25NYXhDb25jdXJyZW50U3RyZWFtcyA8IG1heENvbmN1cnJlbnRTdHJlYW1zKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc2Vzc2lvbltrT3JpZ2luU2V0XS5pbmNsdWRlcyhub3JtYWxpemVkT3JpZ2luKSkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc2Vzc2lvbkN1cnJlbnRTdHJlYW1zQ291bnQgPSBzZXNzaW9uW2tDdXJyZW50U3RyZWFtc0NvdW50XTtcblxuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRzZXNzaW9uQ3VycmVudFN0cmVhbXNDb3VudCA+PSBzZXNzaW9uTWF4Q29uY3VycmVudFN0cmVhbXMgfHxcblx0XHRcdFx0XHRcdFx0c2Vzc2lvbltrR3JhY2VmdWxseUNsb3NpbmddIHx8XG5cdFx0XHRcdFx0XHRcdC8vIFVuZm9ydHVuYXRlbHkgdGhlIGBjbG9zZWAgZXZlbnQgaXNuJ3QgY2FsbGVkIGltbWVkaWF0ZWx5LFxuXHRcdFx0XHRcdFx0XHQvLyBzbyBgc2Vzc2lvbi5kZXN0cm95ZWRgIGlzIGB0cnVlYCwgYnV0IGBzZXNzaW9uLmNsb3NlZGAgaXMgYGZhbHNlYC5cblx0XHRcdFx0XHRcdFx0c2Vzc2lvbi5kZXN0cm95ZWRcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gV2Ugb25seSBuZWVkIHNldCB0aGlzIG9uY2UuXG5cdFx0XHRcdFx0XHRpZiAoIW9wdGltYWxTZXNzaW9uKSB7XG5cdFx0XHRcdFx0XHRcdG1heENvbmN1cnJlbnRTdHJlYW1zID0gc2Vzc2lvbk1heENvbmN1cnJlbnRTdHJlYW1zO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBXZSdyZSBsb29raW5nIGZvciB0aGUgc2Vzc2lvbiB3aGljaCBoYXMgYmlnZ2VzdCBjdXJyZW50IHBlbmRpbmcgc3RyZWFtIGNvdW50LFxuXHRcdFx0XHRcdFx0Ly8gaW4gb3JkZXIgdG8gbWluaW1hbGl6ZSB0aGUgYW1vdW50IG9mIGFjdGl2ZSBzZXNzaW9ucy5cblx0XHRcdFx0XHRcdGlmIChzZXNzaW9uQ3VycmVudFN0cmVhbXNDb3VudCA+IGN1cnJlbnRTdHJlYW1zQ291bnQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW1hbFNlc3Npb24gPSBzZXNzaW9uO1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U3RyZWFtc0NvdW50ID0gc2Vzc2lvbkN1cnJlbnRTdHJlYW1zQ291bnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG9wdGltYWxTZXNzaW9uKSB7XG5cdFx0XHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNhZmV0eSBjaGVjayAqL1xuXHRcdFx0XHRcdGlmIChsaXN0ZW5lcnMubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHtyZWplY3R9IG9mIGxpc3RlbmVycykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XHRgRXhwZWN0ZWQgdGhlIGxlbmd0aCBvZiBsaXN0ZW5lcnMgdG8gYmUgMSwgZ290ICR7bGlzdGVuZXJzLmxlbmd0aH0uXFxuYCArXG5cdFx0XHRcdFx0XHRcdFx0J1BsZWFzZSByZXBvcnQgdGhpcyB0byBodHRwczovL2dpdGh1Yi5jb20vc3ptYXJjemFrL2h0dHAyLXdyYXBwZXIvJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsaXN0ZW5lcnNbMF0ucmVzb2x2ZShvcHRpbWFsU2Vzc2lvbik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChub3JtYWxpemVkT3B0aW9ucyBpbiB0aGlzLnF1ZXVlKSB7XG5cdFx0XHRcdGlmIChub3JtYWxpemVkT3JpZ2luIGluIHRoaXMucXVldWVbbm9ybWFsaXplZE9wdGlvbnNdKSB7XG5cdFx0XHRcdFx0Ly8gVGhlcmUncyBhbHJlYWR5IGFuIGl0ZW0gaW4gdGhlIHF1ZXVlLCBqdXN0IGF0dGFjaCBvdXJzZWx2ZXMgdG8gaXQuXG5cdFx0XHRcdFx0dGhpcy5xdWV1ZVtub3JtYWxpemVkT3B0aW9uc11bbm9ybWFsaXplZE9yaWdpbl0ubGlzdGVuZXJzLnB1c2goLi4ubGlzdGVuZXJzKTtcblxuXHRcdFx0XHRcdC8vIFRoaXMgc2hvdWxkbid0IGJlIGV4ZWN1dGVkIGhlcmUuXG5cdFx0XHRcdFx0Ly8gU2VlIHRoZSBjb21tZW50IGluc2lkZSBfdHJ5VG9DcmVhdGVOZXdTZXNzaW9uLlxuXHRcdFx0XHRcdHRoaXMuX3RyeVRvQ3JlYXRlTmV3U2Vzc2lvbihub3JtYWxpemVkT3B0aW9ucywgbm9ybWFsaXplZE9yaWdpbik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnF1ZXVlW25vcm1hbGl6ZWRPcHRpb25zXSA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGUgZW50cnkgbXVzdCBiZSByZW1vdmVkIGZyb20gdGhlIHF1ZXVlIElNTUVESUFURUxZIHdoZW46XG5cdFx0XHQvLyAxLiB0aGUgc2Vzc2lvbiBjb25uZWN0cyBzdWNjZXNzZnVsbHksXG5cdFx0XHQvLyAyLiBhbiBlcnJvciBvY2N1cnMuXG5cdFx0XHRjb25zdCByZW1vdmVGcm9tUXVldWUgPSAoKSA9PiB7XG5cdFx0XHRcdC8vIE91ciBlbnRyeSBjYW4gYmUgcmVwbGFjZWQuIFdlIGNhbm5vdCByZW1vdmUgdGhlIG5ldyBvbmUuXG5cdFx0XHRcdGlmIChub3JtYWxpemVkT3B0aW9ucyBpbiB0aGlzLnF1ZXVlICYmIHRoaXMucXVldWVbbm9ybWFsaXplZE9wdGlvbnNdW25vcm1hbGl6ZWRPcmlnaW5dID09PSBlbnRyeSkge1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLnF1ZXVlW25vcm1hbGl6ZWRPcHRpb25zXVtub3JtYWxpemVkT3JpZ2luXTtcblxuXHRcdFx0XHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnF1ZXVlW25vcm1hbGl6ZWRPcHRpb25zXSkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5xdWV1ZVtub3JtYWxpemVkT3B0aW9uc107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBUaGUgbWFpbiBsb2dpYyBpcyBoZXJlXG5cdFx0XHRjb25zdCBlbnRyeSA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgbmFtZSA9IGAke25vcm1hbGl6ZWRPcmlnaW59OiR7bm9ybWFsaXplZE9wdGlvbnN9YDtcblx0XHRcdFx0bGV0IHJlY2VpdmVkU2V0dGluZ3MgPSBmYWxzZTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNlc3Npb24gPSBodHRwMi5jb25uZWN0KG9yaWdpbiwge1xuXHRcdFx0XHRcdFx0Y3JlYXRlQ29ubmVjdGlvbjogdGhpcy5jcmVhdGVDb25uZWN0aW9uLFxuXHRcdFx0XHRcdFx0c2V0dGluZ3M6IHRoaXMuc2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRzZXNzaW9uOiB0aGlzLnRsc1Nlc3Npb25DYWNoZS5nZXQobmFtZSksXG5cdFx0XHRcdFx0XHQuLi5vcHRpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2Vzc2lvbltrQ3VycmVudFN0cmVhbXNDb3VudF0gPSAwO1xuXHRcdFx0XHRcdHNlc3Npb25ba0dyYWNlZnVsbHlDbG9zaW5nXSA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0Y29uc3QgaXNGcmVlID0gKCkgPT4gc2Vzc2lvbltrQ3VycmVudFN0cmVhbXNDb3VudF0gPCBzZXNzaW9uLnJlbW90ZVNldHRpbmdzLm1heENvbmN1cnJlbnRTdHJlYW1zO1xuXHRcdFx0XHRcdGxldCB3YXNGcmVlID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHNlc3Npb24uc29ja2V0Lm9uY2UoJ3Nlc3Npb24nLCB0bHNTZXNzaW9uID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudGxzU2Vzc2lvbkNhY2hlLnNldChuYW1lLCB0bHNTZXNzaW9uKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHNlc3Npb24ub25jZSgnZXJyb3InLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHQvLyBMaXN0ZW5lcnMgYXJlIGVtcHR5IHdoZW4gdGhlIHNlc3Npb24gc3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZC5cblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3JlamVjdH0gb2YgbGlzdGVuZXJzKSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIFRoZSBjb25uZWN0aW9uIGdvdCBicm9rZW4sIHB1cmdlIHRoZSBjYWNoZS5cblx0XHRcdFx0XHRcdHRoaXMudGxzU2Vzc2lvbkNhY2hlLmRlbGV0ZShuYW1lKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHNlc3Npb24uc2V0VGltZW91dCh0aGlzLnRpbWVvdXQsICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIFRlcm1pbmF0ZXMgYWxsIHN0cmVhbXMgb3duZWQgYnkgdGhpcyBzZXNzaW9uLlxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogTWF5YmUgdGhlIHN0cmVhbXMgc2hvdWxkIGhhdmUgYSBcIlNlc3Npb24gdGltZWQgb3V0XCIgZXJyb3I/XG5cdFx0XHRcdFx0XHRzZXNzaW9uLmRlc3Ryb3koKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHNlc3Npb24ub25jZSgnY2xvc2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVjZWl2ZWRTZXR0aW5ncykge1xuXHRcdFx0XHRcdFx0XHQvLyAxLiBJZiBpdCB3YXNuJ3QgZnJlZSB0aGVuIG5vIG5lZWQgdG8gZGVjcmVhc2UgYmVjYXVzZVxuXHRcdFx0XHRcdFx0XHQvLyAgICBpdCBoYXMgYmVlbiBkZWNyZWFzZWQgYWxyZWFkeSBpbiBzZXNzaW9uLnJlcXVlc3QoKS5cblx0XHRcdFx0XHRcdFx0Ly8gMi4gYHN0cmVhbS5vbmNlKCdjbG9zZScpYCB3b24ndCBpbmNyZW1lbnQgdGhlIGNvdW50XG5cdFx0XHRcdFx0XHRcdC8vICAgIGJlY2F1c2UgdGhlIHNlc3Npb24gaXMgYWxyZWFkeSBjbG9zZWQuXG5cdFx0XHRcdFx0XHRcdGlmICh3YXNGcmVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fZnJlZVNlc3Npb25zQ291bnQtLTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX3Nlc3Npb25zQ291bnQtLTtcblxuXHRcdFx0XHRcdFx0XHQvLyBUaGlzIGNhbm5vdCBiZSBtb3ZlZCB0byB0aGUgc3RyZWFtIGxvZ2ljLFxuXHRcdFx0XHRcdFx0XHQvLyBiZWNhdXNlIHRoZXJlIG1heSBiZSBhIHNlc3Npb24gdGhhdCBoYWRuJ3QgbWFkZSBhIHNpbmdsZSByZXF1ZXN0LlxuXHRcdFx0XHRcdFx0XHRjb25zdCB3aGVyZSA9IHRoaXMuc2Vzc2lvbnNbbm9ybWFsaXplZE9wdGlvbnNdO1xuXHRcdFx0XHRcdFx0XHR3aGVyZS5zcGxpY2Uod2hlcmUuaW5kZXhPZihzZXNzaW9uKSwgMSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHdoZXJlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLnNlc3Npb25zW25vcm1hbGl6ZWRPcHRpb25zXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gQnJva2VuIGNvbm5lY3Rpb25cblx0XHRcdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ1Nlc3Npb24gY2xvc2VkIHdpdGhvdXQgcmVjZWl2aW5nIGEgU0VUVElOR1MgZnJhbWUnKTtcblx0XHRcdFx0XHRcdFx0ZXJyb3IuY29kZSA9ICdIVFRQMldSQVBQRVJfTk9TRVRUSU5HUyc7XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7cmVqZWN0fSBvZiBsaXN0ZW5lcnMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmVtb3ZlRnJvbVF1ZXVlKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIFRoZXJlIG1heSBiZSBhbm90aGVyIHNlc3Npb24gYXdhaXRpbmcuXG5cdFx0XHRcdFx0XHR0aGlzLl90cnlUb0NyZWF0ZU5ld1Nlc3Npb24obm9ybWFsaXplZE9wdGlvbnMsIG5vcm1hbGl6ZWRPcmlnaW4pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gSXRlcmF0ZXMgb3ZlciB0aGUgcXVldWUgYW5kIHByb2Nlc3NlcyBsaXN0ZW5lcnMuXG5cdFx0XHRcdFx0Y29uc3QgcHJvY2Vzc0xpc3RlbmVycyA9ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmICghKG5vcm1hbGl6ZWRPcHRpb25zIGluIHRoaXMucXVldWUpIHx8ICFpc0ZyZWUoKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGZvciAoY29uc3Qgb3JpZ2luIG9mIHNlc3Npb25ba09yaWdpblNldF0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9yaWdpbiBpbiB0aGlzLnF1ZXVlW25vcm1hbGl6ZWRPcHRpb25zXSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtsaXN0ZW5lcnN9ID0gdGhpcy5xdWV1ZVtub3JtYWxpemVkT3B0aW9uc11bb3JpZ2luXTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFByZXZlbnRzIHNlc3Npb24gb3ZlcmxvYWRpbmcuXG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKGxpc3RlbmVycy5sZW5ndGggIT09IDAgJiYgaXNGcmVlKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFdlIGFzc3VtZSBgcmVzb2x2ZSguLi4pYCBjYWxscyBgcmVxdWVzdCguLi4pYCAqZGlyZWN0bHkqLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHRoZSBzZXNzaW9uIHdpbGwgZ2V0IG92ZXJsb2FkZWQuXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcnMuc2hpZnQoKS5yZXNvbHZlKHNlc3Npb24pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHdoZXJlID0gdGhpcy5xdWV1ZVtub3JtYWxpemVkT3B0aW9uc107XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHdoZXJlW29yaWdpbl0ubGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIHdoZXJlW29yaWdpbl07XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChPYmplY3Qua2V5cyh3aGVyZSkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLnF1ZXVlW25vcm1hbGl6ZWRPcHRpb25zXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gV2UncmUgbm8gbG9uZ2VyIGZyZWUsIG5vIHBvaW50IGluIGNvbnRpbnVpbmcuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFpc0ZyZWUoKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdC8vIFRoZSBPcmlnaW4gU2V0IGNhbm5vdCBzaHJpbmsuIE5vIG5lZWQgdG8gY2hlY2sgaWYgaXQgc3VkZGVubHkgYmVjYW1lIGNvdmVyZWQgYnkgYW5vdGhlciBvbmUuXG5cdFx0XHRcdFx0c2Vzc2lvbi5vbignb3JpZ2luJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2Vzc2lvbltrT3JpZ2luU2V0XSA9IHNlc3Npb24ub3JpZ2luU2V0O1xuXG5cdFx0XHRcdFx0XHRpZiAoIWlzRnJlZSgpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFRoZSBzZXNzaW9uIGlzIGZ1bGwuXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cHJvY2Vzc0xpc3RlbmVycygpO1xuXG5cdFx0XHRcdFx0XHQvLyBDbG9zZSBjb3ZlcmVkIHNlc3Npb25zIChpZiBwb3NzaWJsZSkuXG5cdFx0XHRcdFx0XHRjbG9zZUNvdmVyZWRTZXNzaW9ucyh0aGlzLnNlc3Npb25zW25vcm1hbGl6ZWRPcHRpb25zXSwgc2Vzc2lvbik7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRzZXNzaW9uLm9uY2UoJ3JlbW90ZVNldHRpbmdzJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gRml4IE5vZGUuanMgYnVnIHByZXZlbnRpbmcgdGhlIHByb2Nlc3MgZnJvbSBleGl0aW5nXG5cdFx0XHRcdFx0XHRzZXNzaW9uLnJlZigpO1xuXHRcdFx0XHRcdFx0c2Vzc2lvbi51bnJlZigpO1xuXG5cdFx0XHRcdFx0XHR0aGlzLl9zZXNzaW9uc0NvdW50Kys7XG5cblx0XHRcdFx0XHRcdC8vIFRoZSBBZ2VudCBjb3VsZCBoYXZlIGJlZW4gZGVzdHJveWVkIGFscmVhZHkuXG5cdFx0XHRcdFx0XHRpZiAoZW50cnkuZGVzdHJveWVkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdBZ2VudCBoYXMgYmVlbiBkZXN0cm95ZWQnKTtcblxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuXHRcdFx0XHRcdFx0XHRcdGxpc3RlbmVyLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRzZXNzaW9uLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzZXNzaW9uW2tPcmlnaW5TZXRdID0gc2Vzc2lvbi5vcmlnaW5TZXQ7XG5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgd2hlcmUgPSB0aGlzLnNlc3Npb25zO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChub3JtYWxpemVkT3B0aW9ucyBpbiB3aGVyZSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlc3Npb25zID0gd2hlcmVbbm9ybWFsaXplZE9wdGlvbnNdO1xuXHRcdFx0XHRcdFx0XHRcdHNlc3Npb25zLnNwbGljZShnZXRTb3J0ZWRJbmRleChzZXNzaW9ucywgc2Vzc2lvbiwgY29tcGFyZVNlc3Npb25zKSwgMCwgc2Vzc2lvbik7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2hlcmVbbm9ybWFsaXplZE9wdGlvbnNdID0gW3Nlc3Npb25dO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuX2ZyZWVTZXNzaW9uc0NvdW50ICs9IDE7XG5cdFx0XHRcdFx0XHRyZWNlaXZlZFNldHRpbmdzID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0dGhpcy5lbWl0KCdzZXNzaW9uJywgc2Vzc2lvbik7XG5cblx0XHRcdFx0XHRcdHByb2Nlc3NMaXN0ZW5lcnMoKTtcblx0XHRcdFx0XHRcdHJlbW92ZUZyb21RdWV1ZSgpO1xuXG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBDbG9zZSBsYXN0IHJlY2VudGx5IHVzZWQgKG9yIGxlYXN0IHVzZWQ/KSBzZXNzaW9uXG5cdFx0XHRcdFx0XHRpZiAoc2Vzc2lvbltrQ3VycmVudFN0cmVhbXNDb3VudF0gPT09IDAgJiYgdGhpcy5fZnJlZVNlc3Npb25zQ291bnQgPiB0aGlzLm1heEZyZWVTZXNzaW9ucykge1xuXHRcdFx0XHRcdFx0XHRzZXNzaW9uLmNsb3NlKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENoZWNrIGlmIHdlIGhhdmVuJ3QgbWFuYWdlZCB0byBleGVjdXRlIGFsbCBsaXN0ZW5lcnMuXG5cdFx0XHRcdFx0XHRpZiAobGlzdGVuZXJzLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXF1ZXN0IGZvciBhIG5ldyBzZXNzaW9uIHdpdGggcHJlZGVmaW5lZCBsaXN0ZW5lcnMuXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0U2Vzc2lvbihub3JtYWxpemVkT3JpZ2luLCBvcHRpb25zLCBsaXN0ZW5lcnMpO1xuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lcnMubGVuZ3RoID0gMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gYHNlc3Npb24ucmVtb3RlU2V0dGluZ3MubWF4Q29uY3VycmVudFN0cmVhbXNgIG1pZ2h0IGdldCBpbmNyZWFzZWRcblx0XHRcdFx0XHRcdHNlc3Npb24ub24oJ3JlbW90ZVNldHRpbmdzJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwcm9jZXNzTGlzdGVuZXJzKCk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSB0aGUgT3JpZ2luIFNldCBjaGFuZ2VzXG5cdFx0XHRcdFx0XHRcdGNsb3NlQ292ZXJlZFNlc3Npb25zKHRoaXMuc2Vzc2lvbnNbbm9ybWFsaXplZE9wdGlvbnNdLCBzZXNzaW9uKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gU2hpbSBgc2Vzc2lvbi5yZXF1ZXN0KClgIGluIG9yZGVyIHRvIGNhdGNoIGFsbCBzdHJlYW1zXG5cdFx0XHRcdFx0c2Vzc2lvbltrUmVxdWVzdF0gPSBzZXNzaW9uLnJlcXVlc3Q7XG5cdFx0XHRcdFx0c2Vzc2lvbi5yZXF1ZXN0ID0gKGhlYWRlcnMsIHN0cmVhbU9wdGlvbnMpID0+IHtcblx0XHRcdFx0XHRcdGlmIChzZXNzaW9uW2tHcmFjZWZ1bGx5Q2xvc2luZ10pIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgc2Vzc2lvbiBpcyBncmFjZWZ1bGx5IGNsb3NpbmcuIE5vIG5ldyBzdHJlYW1zIGFyZSBhbGxvd2VkLicpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb25zdCBzdHJlYW0gPSBzZXNzaW9uW2tSZXF1ZXN0XShoZWFkZXJzLCBzdHJlYW1PcHRpb25zKTtcblxuXHRcdFx0XHRcdFx0Ly8gVGhlIHByb2Nlc3Mgd29uJ3QgZXhpdCB1bnRpbCB0aGUgc2Vzc2lvbiBpcyBjbG9zZWQgb3IgYWxsIHJlcXVlc3RzIGFyZSBnb25lLlxuXHRcdFx0XHRcdFx0c2Vzc2lvbi5yZWYoKTtcblxuXHRcdFx0XHRcdFx0KytzZXNzaW9uW2tDdXJyZW50U3RyZWFtc0NvdW50XTtcblxuXHRcdFx0XHRcdFx0aWYgKHNlc3Npb25ba0N1cnJlbnRTdHJlYW1zQ291bnRdID09PSBzZXNzaW9uLnJlbW90ZVNldHRpbmdzLm1heENvbmN1cnJlbnRTdHJlYW1zKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2ZyZWVTZXNzaW9uc0NvdW50LS07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHN0cmVhbS5vbmNlKCdjbG9zZScsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0d2FzRnJlZSA9IGlzRnJlZSgpO1xuXG5cdFx0XHRcdFx0XHRcdC0tc2Vzc2lvbltrQ3VycmVudFN0cmVhbXNDb3VudF07XG5cblx0XHRcdFx0XHRcdFx0aWYgKCFzZXNzaW9uLmRlc3Ryb3llZCAmJiAhc2Vzc2lvbi5jbG9zZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRjbG9zZVNlc3Npb25JZkNvdmVyZWQodGhpcy5zZXNzaW9uc1tub3JtYWxpemVkT3B0aW9uc10sIHNlc3Npb24pO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzRnJlZSgpICYmICFzZXNzaW9uLmNsb3NlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCF3YXNGcmVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2ZyZWVTZXNzaW9uc0NvdW50Kys7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0d2FzRnJlZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzRW1wdHkgPSBzZXNzaW9uW2tDdXJyZW50U3RyZWFtc0NvdW50XSA9PT0gMDtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlzRW1wdHkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2Vzc2lvbi51bnJlZigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzRW1wdHkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2ZyZWVTZXNzaW9uc0NvdW50ID4gdGhpcy5tYXhGcmVlU2Vzc2lvbnMgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXNzaW9uW2tHcmFjZWZ1bGx5Q2xvc2luZ11cblx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlc3Npb24uY2xvc2UoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsb3NlQ292ZXJlZFNlc3Npb25zKHRoaXMuc2Vzc2lvbnNbbm9ybWFsaXplZE9wdGlvbnNdLCBzZXNzaW9uKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzc0xpc3RlbmVycygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJldHVybiBzdHJlYW07XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuXHRcdFx0XHRcdFx0bGlzdGVuZXIucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZW1vdmVGcm9tUXVldWUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0ZW50cnkubGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuXHRcdFx0ZW50cnkuY29tcGxldGVkID0gZmFsc2U7XG5cdFx0XHRlbnRyeS5kZXN0cm95ZWQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5xdWV1ZVtub3JtYWxpemVkT3B0aW9uc11bbm9ybWFsaXplZE9yaWdpbl0gPSBlbnRyeTtcblx0XHRcdHRoaXMuX3RyeVRvQ3JlYXRlTmV3U2Vzc2lvbihub3JtYWxpemVkT3B0aW9ucywgbm9ybWFsaXplZE9yaWdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXF1ZXN0KG9yaWdpbiwgb3B0aW9ucywgaGVhZGVycywgc3RyZWFtT3B0aW9ucykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmdldFNlc3Npb24ob3JpZ2luLCBvcHRpb25zLCBbe1xuXHRcdFx0XHRyZWplY3QsXG5cdFx0XHRcdHJlc29sdmU6IHNlc3Npb24gPT4ge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHNlc3Npb24ucmVxdWVzdChoZWFkZXJzLCBzdHJlYW1PcHRpb25zKSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XSk7XG5cdFx0fSk7XG5cdH1cblxuXHRjcmVhdGVDb25uZWN0aW9uKG9yaWdpbiwgb3B0aW9ucykge1xuXHRcdHJldHVybiBBZ2VudC5jb25uZWN0KG9yaWdpbiwgb3B0aW9ucyk7XG5cdH1cblxuXHRzdGF0aWMgY29ubmVjdChvcmlnaW4sIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zLkFMUE5Qcm90b2NvbHMgPSBbJ2gyJ107XG5cblx0XHRjb25zdCBwb3J0ID0gb3JpZ2luLnBvcnQgfHwgNDQzO1xuXHRcdGNvbnN0IGhvc3QgPSBvcmlnaW4uaG9zdG5hbWUgfHwgb3JpZ2luLmhvc3Q7XG5cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMuc2VydmVybmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdG9wdGlvbnMuc2VydmVybmFtZSA9IGhvc3Q7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRscy5jb25uZWN0KHBvcnQsIGhvc3QsIG9wdGlvbnMpO1xuXHR9XG5cblx0Y2xvc2VGcmVlU2Vzc2lvbnMoKSB7XG5cdFx0Zm9yIChjb25zdCBzZXNzaW9ucyBvZiBPYmplY3QudmFsdWVzKHRoaXMuc2Vzc2lvbnMpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHNlc3Npb24gb2Ygc2Vzc2lvbnMpIHtcblx0XHRcdFx0aWYgKHNlc3Npb25ba0N1cnJlbnRTdHJlYW1zQ291bnRdID09PSAwKSB7XG5cdFx0XHRcdFx0c2Vzc2lvbi5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveShyZWFzb24pIHtcblx0XHRmb3IgKGNvbnN0IHNlc3Npb25zIG9mIE9iamVjdC52YWx1ZXModGhpcy5zZXNzaW9ucykpIHtcblx0XHRcdGZvciAoY29uc3Qgc2Vzc2lvbiBvZiBzZXNzaW9ucykge1xuXHRcdFx0XHRzZXNzaW9uLmRlc3Ryb3kocmVhc29uKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGVudHJpZXNPZkF1dGhvcml0eSBvZiBPYmplY3QudmFsdWVzKHRoaXMucXVldWUpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIE9iamVjdC52YWx1ZXMoZW50cmllc09mQXV0aG9yaXR5KSkge1xuXHRcdFx0XHRlbnRyeS5kZXN0cm95ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE5ldyByZXF1ZXN0cyBzaG91bGQgTk9UIGF0dGFjaCB0byBkZXN0cm95ZWQgc2Vzc2lvbnNcblx0XHR0aGlzLnF1ZXVlID0ge307XG5cdH1cblxuXHRnZXQgZnJlZVNlc3Npb25zKCkge1xuXHRcdHJldHVybiBnZXRTZXNzaW9ucyh7YWdlbnQ6IHRoaXMsIGlzRnJlZTogdHJ1ZX0pO1xuXHR9XG5cblx0Z2V0IGJ1c3lTZXNzaW9ucygpIHtcblx0XHRyZXR1cm4gZ2V0U2Vzc2lvbnMoe2FnZW50OiB0aGlzLCBpc0ZyZWU6IGZhbHNlfSk7XG5cdH1cbn1cblxuQWdlbnQua0N1cnJlbnRTdHJlYW1zQ291bnQgPSBrQ3VycmVudFN0cmVhbXNDb3VudDtcbkFnZW50LmtHcmFjZWZ1bGx5Q2xvc2luZyA9IGtHcmFjZWZ1bGx5Q2xvc2luZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFnZW50LFxuXHRnbG9iYWxBZ2VudDogbmV3IEFnZW50KClcbn07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3QgcmVzb2x2ZUFMUE4gPSByZXF1aXJlKCdyZXNvbHZlLWFscG4nKTtcbmNvbnN0IFF1aWNrTFJVID0gcmVxdWlyZSgncXVpY2stbHJ1Jyk7XG5jb25zdCBIdHRwMkNsaWVudFJlcXVlc3QgPSByZXF1aXJlKCcuL2NsaWVudC1yZXF1ZXN0Jyk7XG5jb25zdCBjYWxjdWxhdGVTZXJ2ZXJOYW1lID0gcmVxdWlyZSgnLi91dGlscy9jYWxjdWxhdGUtc2VydmVyLW5hbWUnKTtcbmNvbnN0IHVybFRvT3B0aW9ucyA9IHJlcXVpcmUoJy4vdXRpbHMvdXJsLXRvLW9wdGlvbnMnKTtcblxuY29uc3QgY2FjaGUgPSBuZXcgUXVpY2tMUlUoe21heFNpemU6IDEwMH0pO1xuY29uc3QgcXVldWUgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IGluc3RhbGxTb2NrZXQgPSAoYWdlbnQsIHNvY2tldCwgb3B0aW9ucykgPT4ge1xuXHRzb2NrZXQuX2h0dHBNZXNzYWdlID0ge3Nob3VsZEtlZXBBbGl2ZTogdHJ1ZX07XG5cblx0Y29uc3Qgb25GcmVlID0gKCkgPT4ge1xuXHRcdGFnZW50LmVtaXQoJ2ZyZWUnLCBzb2NrZXQsIG9wdGlvbnMpO1xuXHR9O1xuXG5cdHNvY2tldC5vbignZnJlZScsIG9uRnJlZSk7XG5cblx0Y29uc3Qgb25DbG9zZSA9ICgpID0+IHtcblx0XHRhZ2VudC5yZW1vdmVTb2NrZXQoc29ja2V0LCBvcHRpb25zKTtcblx0fTtcblxuXHRzb2NrZXQub24oJ2Nsb3NlJywgb25DbG9zZSk7XG5cblx0Y29uc3Qgb25SZW1vdmUgPSAoKSA9PiB7XG5cdFx0YWdlbnQucmVtb3ZlU29ja2V0KHNvY2tldCwgb3B0aW9ucyk7XG5cdFx0c29ja2V0Lm9mZignY2xvc2UnLCBvbkNsb3NlKTtcblx0XHRzb2NrZXQub2ZmKCdmcmVlJywgb25GcmVlKTtcblx0XHRzb2NrZXQub2ZmKCdhZ2VudFJlbW92ZScsIG9uUmVtb3ZlKTtcblx0fTtcblxuXHRzb2NrZXQub24oJ2FnZW50UmVtb3ZlJywgb25SZW1vdmUpO1xuXG5cdGFnZW50LmVtaXQoJ2ZyZWUnLCBzb2NrZXQsIG9wdGlvbnMpO1xufTtcblxuY29uc3QgcmVzb2x2ZVByb3RvY29sID0gYXN5bmMgb3B0aW9ucyA9PiB7XG5cdGNvbnN0IG5hbWUgPSBgJHtvcHRpb25zLmhvc3R9OiR7b3B0aW9ucy5wb3J0fToke29wdGlvbnMuQUxQTlByb3RvY29scy5zb3J0KCl9YDtcblxuXHRpZiAoIWNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdGlmIChxdWV1ZS5oYXMobmFtZSkpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXVlLmdldChuYW1lKTtcblx0XHRcdHJldHVybiByZXN1bHQuYWxwblByb3RvY29sO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtwYXRoLCBhZ2VudH0gPSBvcHRpb25zO1xuXHRcdG9wdGlvbnMucGF0aCA9IG9wdGlvbnMuc29ja2V0UGF0aDtcblxuXHRcdGNvbnN0IHJlc3VsdFByb21pc2UgPSByZXNvbHZlQUxQTihvcHRpb25zKTtcblx0XHRxdWV1ZS5zZXQobmFtZSwgcmVzdWx0UHJvbWlzZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qge3NvY2tldCwgYWxwblByb3RvY29sfSA9IGF3YWl0IHJlc3VsdFByb21pc2U7XG5cdFx0XHRjYWNoZS5zZXQobmFtZSwgYWxwblByb3RvY29sKTtcblxuXHRcdFx0b3B0aW9ucy5wYXRoID0gcGF0aDtcblxuXHRcdFx0aWYgKGFscG5Qcm90b2NvbCA9PT0gJ2gyJykge1xuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzMzMzQzXG5cdFx0XHRcdHNvY2tldC5kZXN0cm95KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCB7Z2xvYmFsQWdlbnR9ID0gaHR0cHM7XG5cdFx0XHRcdGNvbnN0IGRlZmF1bHRDcmVhdGVDb25uZWN0aW9uID0gaHR0cHMuQWdlbnQucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb247XG5cblx0XHRcdFx0aWYgKGFnZW50KSB7XG5cdFx0XHRcdFx0aWYgKGFnZW50LmNyZWF0ZUNvbm5lY3Rpb24gPT09IGRlZmF1bHRDcmVhdGVDb25uZWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRpbnN0YWxsU29ja2V0KGFnZW50LCBzb2NrZXQsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzb2NrZXQuZGVzdHJveSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChnbG9iYWxBZ2VudC5jcmVhdGVDb25uZWN0aW9uID09PSBkZWZhdWx0Q3JlYXRlQ29ubmVjdGlvbikge1xuXHRcdFx0XHRcdGluc3RhbGxTb2NrZXQoZ2xvYmFsQWdlbnQsIHNvY2tldCwgb3B0aW9ucyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRxdWV1ZS5kZWxldGUobmFtZSk7XG5cblx0XHRcdHJldHVybiBhbHBuUHJvdG9jb2w7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHF1ZXVlLmRlbGV0ZShuYW1lKTtcblxuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNhY2hlLmdldChuYW1lKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgKGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFVSTCkge1xuXHRcdGlucHV0ID0gdXJsVG9PcHRpb25zKG5ldyBVUkwoaW5wdXQpKTtcblx0fVxuXG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNhbGxiYWNrID0gb3B0aW9ucztcblx0XHRvcHRpb25zID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0b3B0aW9ucyA9IHtcblx0XHRBTFBOUHJvdG9jb2xzOiBbJ2gyJywgJ2h0dHAvMS4xJ10sXG5cdFx0Li4uaW5wdXQsXG5cdFx0Li4ub3B0aW9ucyxcblx0XHRyZXNvbHZlU29ja2V0OiB0cnVlXG5cdH07XG5cblx0aWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMuQUxQTlByb3RvY29scykgfHwgb3B0aW9ucy5BTFBOUHJvdG9jb2xzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBBTFBOUHJvdG9jb2xzYCBvcHRpb24gbXVzdCBiZSBhbiBBcnJheSB3aXRoIGF0IGxlYXN0IG9uZSBlbnRyeScpO1xuXHR9XG5cblx0b3B0aW9ucy5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2wgfHwgJ2h0dHBzOic7XG5cdGNvbnN0IGlzSHR0cHMgPSBvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JztcblxuXHRvcHRpb25zLmhvc3QgPSBvcHRpb25zLmhvc3RuYW1lIHx8IG9wdGlvbnMuaG9zdCB8fCAnbG9jYWxob3N0Jztcblx0b3B0aW9ucy5zZXNzaW9uID0gb3B0aW9ucy50bHNTZXNzaW9uO1xuXHRvcHRpb25zLnNlcnZlcm5hbWUgPSBvcHRpb25zLnNlcnZlcm5hbWUgfHwgY2FsY3VsYXRlU2VydmVyTmFtZShvcHRpb25zKTtcblx0b3B0aW9ucy5wb3J0ID0gb3B0aW9ucy5wb3J0IHx8IChpc0h0dHBzID8gNDQzIDogODApO1xuXHRvcHRpb25zLl9kZWZhdWx0QWdlbnQgPSBpc0h0dHBzID8gaHR0cHMuZ2xvYmFsQWdlbnQgOiBodHRwLmdsb2JhbEFnZW50O1xuXG5cdGNvbnN0IGFnZW50cyA9IG9wdGlvbnMuYWdlbnQ7XG5cblx0aWYgKGFnZW50cykge1xuXHRcdGlmIChhZ2VudHMuYWRkUmVxdWVzdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYG9wdGlvbnMuYWdlbnRgIG9iamVjdCBjYW4gY29udGFpbiBvbmx5IGBodHRwYCwgYGh0dHBzYCBvciBgaHR0cDJgIHByb3BlcnRpZXMnKTtcblx0XHR9XG5cblx0XHRvcHRpb25zLmFnZW50ID0gYWdlbnRzW2lzSHR0cHMgPyAnaHR0cHMnIDogJ2h0dHAnXTtcblx0fVxuXG5cdGlmIChpc0h0dHBzKSB7XG5cdFx0Y29uc3QgcHJvdG9jb2wgPSBhd2FpdCByZXNvbHZlUHJvdG9jb2wob3B0aW9ucyk7XG5cblx0XHRpZiAocHJvdG9jb2wgPT09ICdoMicpIHtcblx0XHRcdGlmIChhZ2VudHMpIHtcblx0XHRcdFx0b3B0aW9ucy5hZ2VudCA9IGFnZW50cy5odHRwMjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBIdHRwMkNsaWVudFJlcXVlc3Qob3B0aW9ucywgY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBodHRwLnJlcXVlc3Qob3B0aW9ucywgY2FsbGJhY2spO1xufTtcblxubW9kdWxlLmV4cG9ydHMucHJvdG9jb2xDYWNoZSA9IGNhY2hlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgaHR0cDIgPSByZXF1aXJlKCdodHRwMicpO1xuY29uc3Qge1dyaXRhYmxlfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3Qge0FnZW50LCBnbG9iYWxBZ2VudH0gPSByZXF1aXJlKCcuL2FnZW50Jyk7XG5jb25zdCBJbmNvbWluZ01lc3NhZ2UgPSByZXF1aXJlKCcuL2luY29taW5nLW1lc3NhZ2UnKTtcbmNvbnN0IHVybFRvT3B0aW9ucyA9IHJlcXVpcmUoJy4vdXRpbHMvdXJsLXRvLW9wdGlvbnMnKTtcbmNvbnN0IHByb3h5RXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9wcm94eS1ldmVudHMnKTtcbmNvbnN0IGlzUmVxdWVzdFBzZXVkb0hlYWRlciA9IHJlcXVpcmUoJy4vdXRpbHMvaXMtcmVxdWVzdC1wc2V1ZG8taGVhZGVyJyk7XG5jb25zdCB7XG5cdEVSUl9JTlZBTElEX0FSR19UWVBFLFxuXHRFUlJfSU5WQUxJRF9QUk9UT0NPTCxcblx0RVJSX0hUVFBfSEVBREVSU19TRU5ULFxuXHRFUlJfSU5WQUxJRF9IVFRQX1RPS0VOLFxuXHRFUlJfSFRUUF9JTlZBTElEX0hFQURFUl9WQUxVRSxcblx0RVJSX0lOVkFMSURfQ0hBUlxufSA9IHJlcXVpcmUoJy4vdXRpbHMvZXJyb3JzJyk7XG5cbmNvbnN0IHtcblx0SFRUUDJfSEVBREVSX1NUQVRVUyxcblx0SFRUUDJfSEVBREVSX01FVEhPRCxcblx0SFRUUDJfSEVBREVSX1BBVEgsXG5cdEhUVFAyX01FVEhPRF9DT05ORUNUXG59ID0gaHR0cDIuY29uc3RhbnRzO1xuXG5jb25zdCBrSGVhZGVycyA9IFN5bWJvbCgnaGVhZGVycycpO1xuY29uc3Qga09yaWdpbiA9IFN5bWJvbCgnb3JpZ2luJyk7XG5jb25zdCBrU2Vzc2lvbiA9IFN5bWJvbCgnc2Vzc2lvbicpO1xuY29uc3Qga09wdGlvbnMgPSBTeW1ib2woJ29wdGlvbnMnKTtcbmNvbnN0IGtGbHVzaGVkSGVhZGVycyA9IFN5bWJvbCgnZmx1c2hlZEhlYWRlcnMnKTtcbmNvbnN0IGtKb2JzID0gU3ltYm9sKCdqb2JzJyk7XG5cbmNvbnN0IGlzVmFsaWRIdHRwVG9rZW4gPSAvXltcXF5gXFwtXFx3ISMkJSYqKy58fl0rJC87XG5jb25zdCBpc0ludmFsaWRIZWFkZXJWYWx1ZSA9IC9bXlxcdFxcdTAwMjAtXFx1MDA3RVxcdTAwODAtXFx1MDBGRl0vO1xuXG5jbGFzcyBDbGllbnRSZXF1ZXN0IGV4dGVuZHMgV3JpdGFibGUge1xuXHRjb25zdHJ1Y3RvcihpbnB1dCwgb3B0aW9ucywgY2FsbGJhY2spIHtcblx0XHRzdXBlcih7XG5cdFx0XHRhdXRvRGVzdHJveTogZmFsc2Vcblx0XHR9KTtcblxuXHRcdGNvbnN0IGhhc0lucHV0ID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFVSTDtcblx0XHRpZiAoaGFzSW5wdXQpIHtcblx0XHRcdGlucHV0ID0gdXJsVG9PcHRpb25zKGlucHV0IGluc3RhbmNlb2YgVVJMID8gaW5wdXQgOiBuZXcgVVJMKGlucHV0KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nIHx8IG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gKG9wdGlvbnMsIGNhbGxiYWNrKVxuXHRcdFx0Y2FsbGJhY2sgPSBvcHRpb25zO1xuXHRcdFx0b3B0aW9ucyA9IGhhc0lucHV0ID8gaW5wdXQgOiB7Li4uaW5wdXR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyAoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKVxuXHRcdFx0b3B0aW9ucyA9IHsuLi5pbnB1dCwgLi4ub3B0aW9uc307XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMuaDJzZXNzaW9uKSB7XG5cdFx0XHR0aGlzW2tTZXNzaW9uXSA9IG9wdGlvbnMuaDJzZXNzaW9uO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5hZ2VudCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuYWdlbnQgPSBuZXcgQWdlbnQoe21heEZyZWVTZXNzaW9uczogMH0pO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuYWdlbnQgPT09ICd1bmRlZmluZWQnIHx8IG9wdGlvbnMuYWdlbnQgPT09IG51bGwpIHtcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5jcmVhdGVDb25uZWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIC0gd2UgZG9uJ3QgaGF2ZSB0byBjcmVhdGUgdGhlIHNlc3Npb24gb24gb3VyIG93bi5cblx0XHRcdFx0dGhpcy5hZ2VudCA9IG5ldyBBZ2VudCh7bWF4RnJlZVNlc3Npb25zOiAwfSk7XG5cdFx0XHRcdHRoaXMuYWdlbnQuY3JlYXRlQ29ubmVjdGlvbiA9IG9wdGlvbnMuY3JlYXRlQ29ubmVjdGlvbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWdlbnQgPSBnbG9iYWxBZ2VudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmFnZW50LnJlcXVlc3QgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuYWdlbnQgPSBvcHRpb25zLmFnZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ29wdGlvbnMuYWdlbnQnLCBbJ0FnZW50LWxpa2UgT2JqZWN0JywgJ3VuZGVmaW5lZCcsICdmYWxzZSddLCBvcHRpb25zLmFnZW50KTtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9ucy5wcm90b2NvbCAmJiBvcHRpb25zLnByb3RvY29sICE9PSAnaHR0cHM6Jykge1xuXHRcdFx0dGhyb3cgbmV3IEVSUl9JTlZBTElEX1BST1RPQ09MKG9wdGlvbnMucHJvdG9jb2wsICdodHRwczonKTtcblx0XHR9XG5cblx0XHRjb25zdCBwb3J0ID0gb3B0aW9ucy5wb3J0IHx8IG9wdGlvbnMuZGVmYXVsdFBvcnQgfHwgKHRoaXMuYWdlbnQgJiYgdGhpcy5hZ2VudC5kZWZhdWx0UG9ydCkgfHwgNDQzO1xuXHRcdGNvbnN0IGhvc3QgPSBvcHRpb25zLmhvc3RuYW1lIHx8IG9wdGlvbnMuaG9zdCB8fCAnbG9jYWxob3N0JztcblxuXHRcdC8vIERvbid0IGVuZm9yY2UgdGhlIG9yaWdpbiB2aWEgb3B0aW9ucy4gSXQgbWF5IGJlIGNoYW5nZWQgaW4gYW4gQWdlbnQuXG5cdFx0ZGVsZXRlIG9wdGlvbnMuaG9zdG5hbWU7XG5cdFx0ZGVsZXRlIG9wdGlvbnMuaG9zdDtcblx0XHRkZWxldGUgb3B0aW9ucy5wb3J0O1xuXG5cdFx0Y29uc3Qge3RpbWVvdXR9ID0gb3B0aW9ucztcblx0XHRvcHRpb25zLnRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzW2tIZWFkZXJzXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0dGhpc1trSm9ic10gPSBbXTtcblxuXHRcdHRoaXMuc29ja2V0ID0gbnVsbDtcblx0XHR0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuXG5cdFx0dGhpcy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcblx0XHR0aGlzLnBhdGggPSBvcHRpb25zLnBhdGg7XG5cblx0XHR0aGlzLnJlcyA9IG51bGw7XG5cdFx0dGhpcy5hYm9ydGVkID0gZmFsc2U7XG5cdFx0dGhpcy5yZXVzZWRTb2NrZXQgPSBmYWxzZTtcblxuXHRcdGlmIChvcHRpb25zLmhlYWRlcnMpIHtcblx0XHRcdGZvciAoY29uc3QgW2hlYWRlciwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMuaGVhZGVycykpIHtcblx0XHRcdFx0dGhpcy5zZXRIZWFkZXIoaGVhZGVyLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMuYXV0aCAmJiAhKCdhdXRob3JpemF0aW9uJyBpbiB0aGlzW2tIZWFkZXJzXSkpIHtcblx0XHRcdHRoaXNba0hlYWRlcnNdLmF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIEJ1ZmZlci5mcm9tKG9wdGlvbnMuYXV0aCkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMuc2Vzc2lvbiA9IG9wdGlvbnMudGxzU2Vzc2lvbjtcblx0XHRvcHRpb25zLnBhdGggPSBvcHRpb25zLnNvY2tldFBhdGg7XG5cblx0XHR0aGlzW2tPcHRpb25zXSA9IG9wdGlvbnM7XG5cblx0XHQvLyBDbGllbnRzIHRoYXQgZ2VuZXJhdGUgSFRUUC8yIHJlcXVlc3RzIGRpcmVjdGx5IFNIT1VMRCB1c2UgdGhlIDphdXRob3JpdHkgcHNldWRvLWhlYWRlciBmaWVsZCBpbnN0ZWFkIG9mIHRoZSBIb3N0IGhlYWRlciBmaWVsZC5cblx0XHRpZiAocG9ydCA9PT0gNDQzKSB7XG5cdFx0XHR0aGlzW2tPcmlnaW5dID0gYGh0dHBzOi8vJHtob3N0fWA7XG5cblx0XHRcdGlmICghKCc6YXV0aG9yaXR5JyBpbiB0aGlzW2tIZWFkZXJzXSkpIHtcblx0XHRcdFx0dGhpc1trSGVhZGVyc11bJzphdXRob3JpdHknXSA9IGhvc3Q7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXNba09yaWdpbl0gPSBgaHR0cHM6Ly8ke2hvc3R9OiR7cG9ydH1gO1xuXG5cdFx0XHRpZiAoISgnOmF1dGhvcml0eScgaW4gdGhpc1trSGVhZGVyc10pKSB7XG5cdFx0XHRcdHRoaXNba0hlYWRlcnNdWyc6YXV0aG9yaXR5J10gPSBgJHtob3N0fToke3BvcnR9YDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGltZW91dCkge1xuXHRcdFx0dGhpcy5zZXRUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5vbmNlKCdyZXNwb25zZScsIGNhbGxiYWNrKTtcblx0XHR9XG5cblx0XHR0aGlzW2tGbHVzaGVkSGVhZGVyc10gPSBmYWxzZTtcblx0fVxuXG5cdGdldCBtZXRob2QoKSB7XG5cdFx0cmV0dXJuIHRoaXNba0hlYWRlcnNdW0hUVFAyX0hFQURFUl9NRVRIT0RdO1xuXHR9XG5cblx0c2V0IG1ldGhvZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpc1trSGVhZGVyc11bSFRUUDJfSEVBREVSX01FVEhPRF0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwYXRoKCkge1xuXHRcdHJldHVybiB0aGlzW2tIZWFkZXJzXVtIVFRQMl9IRUFERVJfUEFUSF07XG5cdH1cblxuXHRzZXQgcGF0aCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpc1trSGVhZGVyc11bSFRUUDJfSEVBREVSX1BBVEhdID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IF9tdXN0Tm90SGF2ZUFCb2R5KCkge1xuXHRcdHJldHVybiB0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0RFTEVURSc7XG5cdH1cblxuXHRfd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzY1NGRmMDlhZTBjNWUxN2QxYjUyYTkwMGE1NDVmMDY2NGQ4Yzc2MjcvbGliL2ludGVybmFsL2h0dHAyL3V0aWwuanMjTDE0OC1MMTU2XG5cdFx0aWYgKHRoaXMuX211c3ROb3RIYXZlQUJvZHkpIHtcblx0XHRcdGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIEdFVCwgSEVBRCBhbmQgREVMRVRFIG1ldGhvZHMgbXVzdCBOT1QgaGF2ZSBhIGJvZHknKSk7XG5cdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogTm9kZS5qcyAxMiB0aHJvd3MgZGlyZWN0bHkgKi9cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZsdXNoSGVhZGVycygpO1xuXG5cdFx0Y29uc3QgY2FsbFdyaXRlID0gKCkgPT4gdGhpcy5fcmVxdWVzdC53cml0ZShjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblx0XHRpZiAodGhpcy5fcmVxdWVzdCkge1xuXHRcdFx0Y2FsbFdyaXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXNba0pvYnNdLnB1c2goY2FsbFdyaXRlKTtcblx0XHR9XG5cdH1cblxuXHRfZmluYWwoY2FsbGJhY2spIHtcblx0XHRpZiAodGhpcy5kZXN0cm95ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZsdXNoSGVhZGVycygpO1xuXG5cdFx0Y29uc3QgY2FsbEVuZCA9ICgpID0+IHtcblx0XHRcdC8vIEZvciBHRVQsIEhFQUQgYW5kIERFTEVURVxuXHRcdFx0aWYgKHRoaXMuX211c3ROb3RIYXZlQUJvZHkpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9yZXF1ZXN0LmVuZChjYWxsYmFjayk7XG5cdFx0fTtcblxuXHRcdGlmICh0aGlzLl9yZXF1ZXN0KSB7XG5cdFx0XHRjYWxsRW5kKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXNba0pvYnNdLnB1c2goY2FsbEVuZCk7XG5cdFx0fVxuXHR9XG5cblx0YWJvcnQoKSB7XG5cdFx0aWYgKHRoaXMucmVzICYmIHRoaXMucmVzLmNvbXBsZXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmFib3J0ZWQpIHtcblx0XHRcdHByb2Nlc3MubmV4dFRpY2soKCkgPT4gdGhpcy5lbWl0KCdhYm9ydCcpKTtcblx0XHR9XG5cblx0XHR0aGlzLmFib3J0ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5kZXN0cm95KCk7XG5cdH1cblxuXHRfZGVzdHJveShlcnJvciwgY2FsbGJhY2spIHtcblx0XHRpZiAodGhpcy5yZXMpIHtcblx0XHRcdHRoaXMucmVzLl9kdW1wKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX3JlcXVlc3QpIHtcblx0XHRcdHRoaXMuX3JlcXVlc3QuZGVzdHJveSgpO1xuXHRcdH1cblxuXHRcdGNhbGxiYWNrKGVycm9yKTtcblx0fVxuXG5cdGFzeW5jIGZsdXNoSGVhZGVycygpIHtcblx0XHRpZiAodGhpc1trRmx1c2hlZEhlYWRlcnNdIHx8IHRoaXMuZGVzdHJveWVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpc1trRmx1c2hlZEhlYWRlcnNdID0gdHJ1ZTtcblxuXHRcdGNvbnN0IGlzQ29ubmVjdE1ldGhvZCA9IHRoaXMubWV0aG9kID09PSBIVFRQMl9NRVRIT0RfQ09OTkVDVDtcblxuXHRcdC8vIFRoZSByZWFsIG1hZ2ljIGlzIGhlcmVcblx0XHRjb25zdCBvblN0cmVhbSA9IHN0cmVhbSA9PiB7XG5cdFx0XHR0aGlzLl9yZXF1ZXN0ID0gc3RyZWFtO1xuXG5cdFx0XHRpZiAodGhpcy5kZXN0cm95ZWQpIHtcblx0XHRcdFx0c3RyZWFtLmRlc3Ryb3koKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3J3YXJkcyBgdGltZW91dGAsIGBjb250aW51ZWAsIGBjbG9zZWAgYW5kIGBlcnJvcmAgZXZlbnRzIHRvIHRoaXMgaW5zdGFuY2UuXG5cdFx0XHRpZiAoIWlzQ29ubmVjdE1ldGhvZCkge1xuXHRcdFx0XHRwcm94eUV2ZW50cyhzdHJlYW0sIHRoaXMsIFsndGltZW91dCcsICdjb250aW51ZScsICdjbG9zZScsICdlcnJvciddKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2FpdCBmb3IgdGhlIGBmaW5pc2hgIGV2ZW50LiBXZSBkb24ndCB3YW50IHRvIGVtaXQgdGhlIGByZXNwb25zZWAgZXZlbnRcblx0XHRcdC8vIGJlZm9yZSBgcmVxdWVzdC5lbmQoKWAgaXMgY2FsbGVkLlxuXHRcdFx0Y29uc3Qgd2FpdEZvckVuZCA9IGZuID0+IHtcblx0XHRcdFx0cmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLndyaXRhYmxlICYmICF0aGlzLmRlc3Ryb3llZCkge1xuXHRcdFx0XHRcdFx0Zm4oLi4uYXJncyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMub25jZSgnZmluaXNoJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRmbiguLi5hcmdzKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgZXZlbnQgdGVsbHMgd2UgYXJlIHJlYWR5IHRvIGxpc3RlbiBmb3IgdGhlIGRhdGEuXG5cdFx0XHRzdHJlYW0ub25jZSgncmVzcG9uc2UnLCB3YWl0Rm9yRW5kKChoZWFkZXJzLCBmbGFncywgcmF3SGVhZGVycykgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSB3ZXJlIHRvIGVtaXQgcmF3IHJlcXVlc3Qgc3RyZWFtLCBpdCB3b3VsZCBiZSBhcyBmYXN0IGFzIHRoZSBuYXRpdmUgYXBwcm9hY2guXG5cdFx0XHRcdC8vIE5vdGUgdGhhdCB3cmFwcGluZyB0aGUgcmF3IHN0cmVhbSBpbiBhIFByb3h5IGluc3RhbmNlIHdvbid0IGltcHJvdmUgdGhlIHBlcmZvcm1hbmNlIChhbHJlYWR5IHRlc3RlZCBpdCkuXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbmV3IEluY29taW5nTWVzc2FnZSh0aGlzLnNvY2tldCwgc3RyZWFtLnJlYWRhYmxlSGlnaFdhdGVyTWFyayk7XG5cdFx0XHRcdHRoaXMucmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdFx0cmVzcG9uc2UucmVxID0gdGhpcztcblx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzQ29kZSA9IGhlYWRlcnNbSFRUUDJfSEVBREVSX1NUQVRVU107XG5cdFx0XHRcdHJlc3BvbnNlLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHRcdFx0XHRyZXNwb25zZS5yYXdIZWFkZXJzID0gcmF3SGVhZGVycztcblxuXHRcdFx0XHRyZXNwb25zZS5vbmNlKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYWJvcnRlZCkge1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXNwb25zZS5lbWl0KCdhYm9ydGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3BvbnNlLmNvbXBsZXRlID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0Ly8gSGFzIG5vIGVmZmVjdCwganVzdCBiZSBjb25zaXN0ZW50IHdpdGggdGhlIE5vZGUuanMgYmVoYXZpb3Jcblx0XHRcdFx0XHRcdHJlc3BvbnNlLnNvY2tldCA9IG51bGw7XG5cdFx0XHRcdFx0XHRyZXNwb25zZS5jb25uZWN0aW9uID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChpc0Nvbm5lY3RNZXRob2QpIHtcblx0XHRcdFx0XHRyZXNwb25zZS51cGdyYWRlID0gdHJ1ZTtcblxuXHRcdFx0XHRcdC8vIFRoZSBIVFRQMSBBUEkgc2F5cyB0aGUgc29ja2V0IGlzIGRldGFjaGVkIGhlcmUsXG5cdFx0XHRcdFx0Ly8gYnV0IHdlIGNhbid0IGRvIHRoYXQgc28gd2UgcGFzcyB0aGUgb3JpZ2luYWwgSFRUUDIgcmVxdWVzdC5cblx0XHRcdFx0XHRpZiAodGhpcy5lbWl0KCdjb25uZWN0JywgcmVzcG9uc2UsIHN0cmVhbSwgQnVmZmVyLmFsbG9jKDApKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5lbWl0KCdjbG9zZScpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBObyBsaXN0ZW5lcnMgYXR0YWNoZWQsIGRlc3Ryb3kgdGhlIG9yaWdpbmFsIHJlcXVlc3QuXG5cdFx0XHRcdFx0XHRzdHJlYW0uZGVzdHJveSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBGb3J3YXJkcyBkYXRhXG5cdFx0XHRcdFx0c3RyZWFtLm9uKCdkYXRhJywgY2h1bmsgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5fZHVtcGVkICYmICFyZXNwb25zZS5wdXNoKGNodW5rKSkge1xuXHRcdFx0XHRcdFx0XHRzdHJlYW0ucGF1c2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHN0cmVhbS5vbmNlKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZS5wdXNoKG51bGwpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0XHQvLyBObyBsaXN0ZW5lcnMgYXR0YWNoZWQsIGR1bXAgdGhlIHJlc3BvbnNlLlxuXHRcdFx0XHRcdFx0cmVzcG9uc2UuX2R1bXAoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblxuXHRcdFx0Ly8gRW1pdHMgYGluZm9ybWF0aW9uYCBldmVudFxuXHRcdFx0c3RyZWFtLm9uY2UoJ2hlYWRlcnMnLCB3YWl0Rm9yRW5kKFxuXHRcdFx0XHRoZWFkZXJzID0+IHRoaXMuZW1pdCgnaW5mb3JtYXRpb24nLCB7c3RhdHVzQ29kZTogaGVhZGVyc1tIVFRQMl9IRUFERVJfU1RBVFVTXX0pXG5cdFx0XHQpKTtcblxuXHRcdFx0c3RyZWFtLm9uY2UoJ3RyYWlsZXJzJywgd2FpdEZvckVuZCgodHJhaWxlcnMsIGZsYWdzLCByYXdUcmFpbGVycykgPT4ge1xuXHRcdFx0XHRjb25zdCB7cmVzfSA9IHRoaXM7XG5cblx0XHRcdFx0Ly8gQXNzaWducyB0cmFpbGVycyB0byB0aGUgcmVzcG9uc2Ugb2JqZWN0LlxuXHRcdFx0XHRyZXMudHJhaWxlcnMgPSB0cmFpbGVycztcblx0XHRcdFx0cmVzLnJhd1RyYWlsZXJzID0gcmF3VHJhaWxlcnM7XG5cdFx0XHR9KSk7XG5cblx0XHRcdGNvbnN0IHtzb2NrZXR9ID0gc3RyZWFtLnNlc3Npb247XG5cdFx0XHR0aGlzLnNvY2tldCA9IHNvY2tldDtcblx0XHRcdHRoaXMuY29ubmVjdGlvbiA9IHNvY2tldDtcblxuXHRcdFx0Zm9yIChjb25zdCBqb2Igb2YgdGhpc1trSm9ic10pIHtcblx0XHRcdFx0am9iKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdCgnc29ja2V0JywgdGhpcy5zb2NrZXQpO1xuXHRcdH07XG5cblx0XHQvLyBNYWtlcyBhIEhUVFAyIHJlcXVlc3Rcblx0XHRpZiAodGhpc1trU2Vzc2lvbl0pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3RyZWFtKHRoaXNba1Nlc3Npb25dLnJlcXVlc3QodGhpc1trSGVhZGVyc10pKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmV1c2VkU29ja2V0ID0gdHJ1ZTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0b25TdHJlYW0oYXdhaXQgdGhpcy5hZ2VudC5yZXF1ZXN0KHRoaXNba09yaWdpbl0sIHRoaXNba09wdGlvbnNdLCB0aGlzW2tIZWFkZXJzXSkpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXRIZWFkZXIobmFtZSkge1xuXHRcdGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBFUlJfSU5WQUxJRF9BUkdfVFlQRSgnbmFtZScsICdzdHJpbmcnLCBuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1trSGVhZGVyc11bbmFtZS50b0xvd2VyQ2FzZSgpXTtcblx0fVxuXG5cdGdldCBoZWFkZXJzU2VudCgpIHtcblx0XHRyZXR1cm4gdGhpc1trRmx1c2hlZEhlYWRlcnNdO1xuXHR9XG5cblx0cmVtb3ZlSGVhZGVyKG5hbWUpIHtcblx0XHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ25hbWUnLCAnc3RyaW5nJywgbmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaGVhZGVyc1NlbnQpIHtcblx0XHRcdHRocm93IG5ldyBFUlJfSFRUUF9IRUFERVJTX1NFTlQoJ3JlbW92ZScpO1xuXHRcdH1cblxuXHRcdGRlbGV0ZSB0aGlzW2tIZWFkZXJzXVtuYW1lLnRvTG93ZXJDYXNlKCldO1xuXHR9XG5cblx0c2V0SGVhZGVyKG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuaGVhZGVyc1NlbnQpIHtcblx0XHRcdHRocm93IG5ldyBFUlJfSFRUUF9IRUFERVJTX1NFTlQoJ3NldCcpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgKCFpc1ZhbGlkSHR0cFRva2VuLnRlc3QobmFtZSkgJiYgIWlzUmVxdWVzdFBzZXVkb0hlYWRlcihuYW1lKSkpIHtcblx0XHRcdHRocm93IG5ldyBFUlJfSU5WQUxJRF9IVFRQX1RPS0VOKCdIZWFkZXIgbmFtZScsIG5hbWUpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRVJSX0hUVFBfSU5WQUxJRF9IRUFERVJfVkFMVUUodmFsdWUsIG5hbWUpO1xuXHRcdH1cblxuXHRcdGlmIChpc0ludmFsaWRIZWFkZXJWYWx1ZS50ZXN0KHZhbHVlKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVSUl9JTlZBTElEX0NIQVIoJ2hlYWRlciBjb250ZW50JywgbmFtZSk7XG5cdFx0fVxuXG5cdFx0dGhpc1trSGVhZGVyc11bbmFtZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuXHR9XG5cblx0c2V0Tm9EZWxheSgpIHtcblx0XHQvLyBIVFRQMiBzb2NrZXRzIGNhbm5vdCBiZSBtYWxmb3JtZWQsIGRvIG5vdGhpbmcuXG5cdH1cblxuXHRzZXRTb2NrZXRLZWVwQWxpdmUoKSB7XG5cdFx0Ly8gSFRUUDIgc29ja2V0cyBjYW5ub3QgYmUgbWFsZm9ybWVkLCBkbyBub3RoaW5nLlxuXHR9XG5cblx0c2V0VGltZW91dChtcywgY2FsbGJhY2spIHtcblx0XHRjb25zdCBhcHBseVRpbWVvdXQgPSAoKSA9PiB0aGlzLl9yZXF1ZXN0LnNldFRpbWVvdXQobXMsIGNhbGxiYWNrKTtcblxuXHRcdGlmICh0aGlzLl9yZXF1ZXN0KSB7XG5cdFx0XHRhcHBseVRpbWVvdXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpc1trSm9ic10ucHVzaChhcHBseVRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IG1heEhlYWRlcnNDb3VudCgpIHtcblx0XHRpZiAoIXRoaXMuZGVzdHJveWVkICYmIHRoaXMuX3JlcXVlc3QpIHtcblx0XHRcdHJldHVybiB0aGlzLl9yZXF1ZXN0LnNlc3Npb24ubG9jYWxTZXR0aW5ncy5tYXhIZWFkZXJMaXN0U2l6ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0c2V0IG1heEhlYWRlcnNDb3VudChfdmFsdWUpIHtcblx0XHQvLyBVcGRhdGluZyBIVFRQMiBzZXR0aW5ncyB3b3VsZCBhZmZlY3QgYWxsIHJlcXVlc3RzLCBkbyBub3RoaW5nLlxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpZW50UmVxdWVzdDtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtSZWFkYWJsZX0gPSByZXF1aXJlKCdzdHJlYW0nKTtcblxuY2xhc3MgSW5jb21pbmdNZXNzYWdlIGV4dGVuZHMgUmVhZGFibGUge1xuXHRjb25zdHJ1Y3Rvcihzb2NrZXQsIGhpZ2hXYXRlck1hcmspIHtcblx0XHRzdXBlcih7XG5cdFx0XHRoaWdoV2F0ZXJNYXJrLFxuXHRcdFx0YXV0b0Rlc3Ryb3k6IGZhbHNlXG5cdFx0fSk7XG5cblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBudWxsO1xuXHRcdHRoaXMuc3RhdHVzTWVzc2FnZSA9ICcnO1xuXHRcdHRoaXMuaHR0cFZlcnNpb24gPSAnMi4wJztcblx0XHR0aGlzLmh0dHBWZXJzaW9uTWFqb3IgPSAyO1xuXHRcdHRoaXMuaHR0cFZlcnNpb25NaW5vciA9IDA7XG5cdFx0dGhpcy5oZWFkZXJzID0ge307XG5cdFx0dGhpcy50cmFpbGVycyA9IHt9O1xuXHRcdHRoaXMucmVxID0gbnVsbDtcblxuXHRcdHRoaXMuYWJvcnRlZCA9IGZhbHNlO1xuXHRcdHRoaXMuY29tcGxldGUgPSBmYWxzZTtcblx0XHR0aGlzLnVwZ3JhZGUgPSBudWxsO1xuXG5cdFx0dGhpcy5yYXdIZWFkZXJzID0gW107XG5cdFx0dGhpcy5yYXdUcmFpbGVycyA9IFtdO1xuXG5cdFx0dGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG5cdFx0dGhpcy5jb25uZWN0aW9uID0gc29ja2V0O1xuXG5cdFx0dGhpcy5fZHVtcGVkID0gZmFsc2U7XG5cdH1cblxuXHRfZGVzdHJveShlcnJvcikge1xuXHRcdHRoaXMucmVxLl9yZXF1ZXN0LmRlc3Ryb3koZXJyb3IpO1xuXHR9XG5cblx0c2V0VGltZW91dChtcywgY2FsbGJhY2spIHtcblx0XHR0aGlzLnJlcS5zZXRUaW1lb3V0KG1zLCBjYWxsYmFjayk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRfZHVtcCgpIHtcblx0XHRpZiAoIXRoaXMuX2R1bXBlZCkge1xuXHRcdFx0dGhpcy5fZHVtcGVkID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ2RhdGEnKTtcblx0XHRcdHRoaXMucmVzdW1lKCk7XG5cdFx0fVxuXHR9XG5cblx0X3JlYWQoKSB7XG5cdFx0aWYgKHRoaXMucmVxKSB7XG5cdFx0XHR0aGlzLnJlcS5fcmVxdWVzdC5yZXN1bWUoKTtcblx0XHR9XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbmNvbWluZ01lc3NhZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBodHRwMiA9IHJlcXVpcmUoJ2h0dHAyJyk7XG5jb25zdCBhZ2VudCA9IHJlcXVpcmUoJy4vYWdlbnQnKTtcbmNvbnN0IENsaWVudFJlcXVlc3QgPSByZXF1aXJlKCcuL2NsaWVudC1yZXF1ZXN0Jyk7XG5jb25zdCBJbmNvbWluZ01lc3NhZ2UgPSByZXF1aXJlKCcuL2luY29taW5nLW1lc3NhZ2UnKTtcbmNvbnN0IGF1dG8gPSByZXF1aXJlKCcuL2F1dG8nKTtcblxuY29uc3QgcmVxdWVzdCA9ICh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG5cdHJldHVybiBuZXcgQ2xpZW50UmVxdWVzdCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IGdldCA9ICh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZXZlbnQtYWJicmV2aWF0aW9uc1xuXHRjb25zdCByZXEgPSBuZXcgQ2xpZW50UmVxdWVzdCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKTtcblx0cmVxLmVuZCgpO1xuXG5cdHJldHVybiByZXE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Li4uaHR0cDIsXG5cdENsaWVudFJlcXVlc3QsXG5cdEluY29taW5nTWVzc2FnZSxcblx0Li4uYWdlbnQsXG5cdHJlcXVlc3QsXG5cdGdldCxcblx0YXV0b1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xuLyogaXN0YW5idWwgaWdub3JlIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL3YxMy4wLjEvbGliL19odHRwX2FnZW50LmpzICovXG5cbm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucyA9PiB7XG5cdGxldCBzZXJ2ZXJuYW1lID0gb3B0aW9ucy5ob3N0O1xuXHRjb25zdCBob3N0SGVhZGVyID0gb3B0aW9ucy5oZWFkZXJzICYmIG9wdGlvbnMuaGVhZGVycy5ob3N0O1xuXG5cdGlmIChob3N0SGVhZGVyKSB7XG5cdFx0aWYgKGhvc3RIZWFkZXIuc3RhcnRzV2l0aCgnWycpKSB7XG5cdFx0XHRjb25zdCBpbmRleCA9IGhvc3RIZWFkZXIuaW5kZXhPZignXScpO1xuXHRcdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRzZXJ2ZXJuYW1lID0gaG9zdEhlYWRlcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlcnZlcm5hbWUgPSBob3N0SGVhZGVyLnNsaWNlKDEsIC0xKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VydmVybmFtZSA9IGhvc3RIZWFkZXIuc3BsaXQoJzonLCAxKVswXTtcblx0XHR9XG5cdH1cblxuXHRpZiAobmV0LmlzSVAoc2VydmVybmFtZSkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gc2VydmVybmFtZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvbWFzdGVyL2xpYi9pbnRlcm5hbC9lcnJvcnMuanMgKi9cblxuY29uc3QgbWFrZUVycm9yID0gKEJhc2UsIGtleSwgZ2V0TWVzc2FnZSkgPT4ge1xuXHRtb2R1bGUuZXhwb3J0c1trZXldID0gY2xhc3MgTm9kZUVycm9yIGV4dGVuZHMgQmFzZSB7XG5cdFx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdFx0c3VwZXIodHlwZW9mIGdldE1lc3NhZ2UgPT09ICdzdHJpbmcnID8gZ2V0TWVzc2FnZSA6IGdldE1lc3NhZ2UoYXJncykpO1xuXHRcdFx0dGhpcy5uYW1lID0gYCR7c3VwZXIubmFtZX0gWyR7a2V5fV1gO1xuXHRcdFx0dGhpcy5jb2RlID0ga2V5O1xuXHRcdH1cblx0fTtcbn07XG5cbm1ha2VFcnJvcihUeXBlRXJyb3IsICdFUlJfSU5WQUxJRF9BUkdfVFlQRScsIGFyZ3MgPT4ge1xuXHRjb25zdCB0eXBlID0gYXJnc1swXS5pbmNsdWRlcygnLicpID8gJ3Byb3BlcnR5JyA6ICdhcmd1bWVudCc7XG5cblx0bGV0IHZhbGlkID0gYXJnc1sxXTtcblx0Y29uc3QgaXNNYW55VHlwZXMgPSBBcnJheS5pc0FycmF5KHZhbGlkKTtcblxuXHRpZiAoaXNNYW55VHlwZXMpIHtcblx0XHR2YWxpZCA9IGAke3ZhbGlkLnNsaWNlKDAsIC0xKS5qb2luKCcsICcpfSBvciAke3ZhbGlkLnNsaWNlKC0xKX1gO1xuXHR9XG5cblx0cmV0dXJuIGBUaGUgXCIke2FyZ3NbMF19XCIgJHt0eXBlfSBtdXN0IGJlICR7aXNNYW55VHlwZXMgPyAnb25lIG9mJyA6ICdvZid9IHR5cGUgJHt2YWxpZH0uIFJlY2VpdmVkICR7dHlwZW9mIGFyZ3NbMl19YDtcbn0pO1xuXG5tYWtlRXJyb3IoVHlwZUVycm9yLCAnRVJSX0lOVkFMSURfUFJPVE9DT0wnLCBhcmdzID0+IHtcblx0cmV0dXJuIGBQcm90b2NvbCBcIiR7YXJnc1swXX1cIiBub3Qgc3VwcG9ydGVkLiBFeHBlY3RlZCBcIiR7YXJnc1sxXX1cImA7XG59KTtcblxubWFrZUVycm9yKEVycm9yLCAnRVJSX0hUVFBfSEVBREVSU19TRU5UJywgYXJncyA9PiB7XG5cdHJldHVybiBgQ2Fubm90ICR7YXJnc1swXX0gaGVhZGVycyBhZnRlciB0aGV5IGFyZSBzZW50IHRvIHRoZSBjbGllbnRgO1xufSk7XG5cbm1ha2VFcnJvcihUeXBlRXJyb3IsICdFUlJfSU5WQUxJRF9IVFRQX1RPS0VOJywgYXJncyA9PiB7XG5cdHJldHVybiBgJHthcmdzWzBdfSBtdXN0IGJlIGEgdmFsaWQgSFRUUCB0b2tlbiBbJHthcmdzWzFdfV1gO1xufSk7XG5cbm1ha2VFcnJvcihUeXBlRXJyb3IsICdFUlJfSFRUUF9JTlZBTElEX0hFQURFUl9WQUxVRScsIGFyZ3MgPT4ge1xuXHRyZXR1cm4gYEludmFsaWQgdmFsdWUgXCIke2FyZ3NbMF19IGZvciBoZWFkZXIgXCIke2FyZ3NbMV19XCJgO1xufSk7XG5cbm1ha2VFcnJvcihUeXBlRXJyb3IsICdFUlJfSU5WQUxJRF9DSEFSJywgYXJncyA9PiB7XG5cdHJldHVybiBgSW52YWxpZCBjaGFyYWN0ZXIgaW4gJHthcmdzWzBdfSBbJHthcmdzWzFdfV1gO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaGVhZGVyID0+IHtcblx0c3dpdGNoIChoZWFkZXIpIHtcblx0XHRjYXNlICc6bWV0aG9kJzpcblx0XHRjYXNlICc6c2NoZW1lJzpcblx0XHRjYXNlICc6YXV0aG9yaXR5Jzpcblx0XHRjYXNlICc6cGF0aCc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmcm9tLCB0bywgZXZlbnRzKSA9PiB7XG5cdGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG5cdFx0ZnJvbS5vbihldmVudCwgKC4uLmFyZ3MpID0+IHRvLmVtaXQoZXZlbnQsIC4uLmFyZ3MpKTtcblx0fVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9hOTEyOTNkNGQ5YWI0MDMwNDZhYjVlYjAyMjMzMmU0ZTNkMjQ5YmQzL2xpYi9pbnRlcm5hbC91cmwuanMjTDEyNTcgKi9cblxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdHByb3RvY29sOiB1cmwucHJvdG9jb2wsXG5cdFx0aG9zdG5hbWU6IHR5cGVvZiB1cmwuaG9zdG5hbWUgPT09ICdzdHJpbmcnICYmIHVybC5ob3N0bmFtZS5zdGFydHNXaXRoKCdbJykgPyB1cmwuaG9zdG5hbWUuc2xpY2UoMSwgLTEpIDogdXJsLmhvc3RuYW1lLFxuXHRcdGhvc3Q6IHVybC5ob3N0LFxuXHRcdGhhc2g6IHVybC5oYXNoLFxuXHRcdHNlYXJjaDogdXJsLnNlYXJjaCxcblx0XHRwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuXHRcdGhyZWY6IHVybC5ocmVmLFxuXHRcdHBhdGg6IGAke3VybC5wYXRobmFtZSB8fCAnJ30ke3VybC5zZWFyY2ggfHwgJyd9YFxuXHR9O1xuXG5cdGlmICh0eXBlb2YgdXJsLnBvcnQgPT09ICdzdHJpbmcnICYmIHVybC5wb3J0Lmxlbmd0aCAhPT0gMCkge1xuXHRcdG9wdGlvbnMucG9ydCA9IE51bWJlcih1cmwucG9ydCk7XG5cdH1cblxuXHRpZiAodXJsLnVzZXJuYW1lIHx8IHVybC5wYXNzd29yZCkge1xuXHRcdG9wdGlvbnMuYXV0aCA9IGAke3VybC51c2VybmFtZSB8fCAnJ306JHt1cmwucGFzc3dvcmQgfHwgJyd9YDtcblx0fVxuXG5cdHJldHVybiBvcHRpb25zO1xufTtcbiIsIi8vVE9ETzogaGFuZGxlIHJldml2ZXIvZGVoeWRyYXRlIGZ1bmN0aW9uIGxpa2Ugbm9ybWFsXG4vL2FuZCBoYW5kbGUgaW5kZW50YXRpb24sIGxpa2Ugbm9ybWFsLlxuLy9pZiBhbnlvbmUgbmVlZHMgdGhpcy4uLiBwbGVhc2Ugc2VuZCBwdWxsIHJlcXVlc3QuXG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5IChvKSB7XG4gIGlmKCd1bmRlZmluZWQnID09IHR5cGVvZiBvKSByZXR1cm4gb1xuXG4gIGlmKG8gJiYgQnVmZmVyLmlzQnVmZmVyKG8pKVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSgnOmJhc2U2NDonICsgby50b1N0cmluZygnYmFzZTY0JykpXG5cbiAgaWYobyAmJiBvLnRvSlNPTilcbiAgICBvID0gIG8udG9KU09OKClcblxuICBpZihvICYmICdvYmplY3QnID09PSB0eXBlb2Ygbykge1xuICAgIHZhciBzID0gJydcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KG8pXG4gICAgcyA9IGFycmF5ID8gJ1snIDogJ3snXG4gICAgdmFyIGZpcnN0ID0gdHJ1ZVxuXG4gICAgZm9yKHZhciBrIGluIG8pIHtcbiAgICAgIHZhciBpZ25vcmUgPSAnZnVuY3Rpb24nID09IHR5cGVvZiBvW2tdIHx8ICghYXJyYXkgJiYgJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBvW2tdKVxuICAgICAgaWYoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobywgaykgJiYgIWlnbm9yZSkge1xuICAgICAgICBpZighZmlyc3QpXG4gICAgICAgICAgcyArPSAnLCdcbiAgICAgICAgZmlyc3QgPSBmYWxzZVxuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBpZihvW2tdID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHMgKz0gJ251bGwnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcyArPSBzdHJpbmdpZnkob1trXSlcbiAgICAgICAgfSBlbHNlIGlmIChvW2tdICE9PSB2b2lkKDApKSB7XG4gICAgICAgICAgcyArPSBzdHJpbmdpZnkoaykgKyAnOicgKyBzdHJpbmdpZnkob1trXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHMgKz0gYXJyYXkgPyAnXScgOiAnfSdcblxuICAgIHJldHVybiBzXG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBvKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KC9eOi8udGVzdChvKSA/ICc6JyArIG8gOiBvKVxuICB9IGVsc2UgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2Ygbykge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvKVxufVxuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHMpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UocywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mIHZhbHVlKSB7XG4gICAgICBpZigvXjpiYXNlNjQ6Ly50ZXN0KHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlLnN1YnN0cmluZyg4KSwgJ2Jhc2U2NCcpXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAvXjovLnRlc3QodmFsdWUpID8gdmFsdWUuc3Vic3RyaW5nKDEpIDogdmFsdWUgXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IEpTT05CID0gcmVxdWlyZSgnanNvbi1idWZmZXInKTtcblxuY29uc3QgbG9hZFN0b3JlID0gb3B0cyA9PiB7XG5cdGNvbnN0IGFkYXB0ZXJzID0ge1xuXHRcdHJlZGlzOiAnQGtleXYvcmVkaXMnLFxuXHRcdG1vbmdvZGI6ICdAa2V5di9tb25nbycsXG5cdFx0bW9uZ286ICdAa2V5di9tb25nbycsXG5cdFx0c3FsaXRlOiAnQGtleXYvc3FsaXRlJyxcblx0XHRwb3N0Z3Jlc3FsOiAnQGtleXYvcG9zdGdyZXMnLFxuXHRcdHBvc3RncmVzOiAnQGtleXYvcG9zdGdyZXMnLFxuXHRcdG15c3FsOiAnQGtleXYvbXlzcWwnXG5cdH07XG5cdGlmIChvcHRzLmFkYXB0ZXIgfHwgb3B0cy51cmkpIHtcblx0XHRjb25zdCBhZGFwdGVyID0gb3B0cy5hZGFwdGVyIHx8IC9eW146XSovLmV4ZWMob3B0cy51cmkpWzBdO1xuXHRcdHJldHVybiBuZXcgKHJlcXVpcmUoYWRhcHRlcnNbYWRhcHRlcl0pKShvcHRzKTtcblx0fVxuXG5cdHJldHVybiBuZXcgTWFwKCk7XG59O1xuXG5jbGFzcyBLZXl2IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Y29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lc3BhY2U6ICdrZXl2Jyxcblx0XHRcdFx0c2VyaWFsaXplOiBKU09OQi5zdHJpbmdpZnksXG5cdFx0XHRcdGRlc2VyaWFsaXplOiBKU09OQi5wYXJzZVxuXHRcdFx0fSxcblx0XHRcdCh0eXBlb2YgdXJpID09PSAnc3RyaW5nJykgPyB7IHVyaSB9IDogdXJpLFxuXHRcdFx0b3B0c1xuXHRcdCk7XG5cblx0XHRpZiAoIXRoaXMub3B0cy5zdG9yZSkge1xuXHRcdFx0Y29uc3QgYWRhcHRlck9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMpO1xuXHRcdFx0dGhpcy5vcHRzLnN0b3JlID0gbG9hZFN0b3JlKGFkYXB0ZXJPcHRzKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0cy5zdG9yZS5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5vcHRzLnN0b3JlLm9uKCdlcnJvcicsIGVyciA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcHRzLnN0b3JlLm5hbWVzcGFjZSA9IHRoaXMub3B0cy5uYW1lc3BhY2U7XG5cdH1cblxuXHRfZ2V0S2V5UHJlZml4KGtleSkge1xuXHRcdHJldHVybiBgJHt0aGlzLm9wdHMubmFtZXNwYWNlfToke2tleX1gO1xuXHR9XG5cblx0Z2V0KGtleSwgb3B0cykge1xuXHRcdGNvbnN0IGtleVByZWZpeGVkID0gdGhpcy5fZ2V0S2V5UHJlZml4KGtleSk7XG5cdFx0Y29uc3QgeyBzdG9yZSB9ID0gdGhpcy5vcHRzO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4gc3RvcmUuZ2V0KGtleVByZWZpeGVkKSlcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgPyB0aGlzLm9wdHMuZGVzZXJpYWxpemUoZGF0YSkgOiBkYXRhO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2YgZGF0YS5leHBpcmVzID09PSAnbnVtYmVyJyAmJiBEYXRlLm5vdygpID4gZGF0YS5leHBpcmVzKSB7XG5cdFx0XHRcdFx0dGhpcy5kZWxldGUoa2V5KTtcblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIChvcHRzICYmIG9wdHMucmF3KSA/IGRhdGEgOiBkYXRhLnZhbHVlO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRzZXQoa2V5LCB2YWx1ZSwgdHRsKSB7XG5cdFx0Y29uc3Qga2V5UHJlZml4ZWQgPSB0aGlzLl9nZXRLZXlQcmVmaXgoa2V5KTtcblx0XHRpZiAodHlwZW9mIHR0bCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHR0bCA9IHRoaXMub3B0cy50dGw7XG5cdFx0fVxuXG5cdFx0aWYgKHR0bCA9PT0gMCkge1xuXHRcdFx0dHRsID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMub3B0cztcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBleHBpcmVzID0gKHR5cGVvZiB0dGwgPT09ICdudW1iZXInKSA/IChEYXRlLm5vdygpICsgdHRsKSA6IG51bGw7XG5cdFx0XHRcdHZhbHVlID0geyB2YWx1ZSwgZXhwaXJlcyB9O1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRzLnNlcmlhbGl6ZSh2YWx1ZSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4odmFsdWUgPT4gc3RvcmUuc2V0KGtleVByZWZpeGVkLCB2YWx1ZSwgdHRsKSlcblx0XHRcdC50aGVuKCgpID0+IHRydWUpO1xuXHR9XG5cblx0ZGVsZXRlKGtleSkge1xuXHRcdGNvbnN0IGtleVByZWZpeGVkID0gdGhpcy5fZ2V0S2V5UHJlZml4KGtleSk7XG5cdFx0Y29uc3QgeyBzdG9yZSB9ID0gdGhpcy5vcHRzO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4gc3RvcmUuZGVsZXRlKGtleVByZWZpeGVkKSk7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHRjb25zdCB7IHN0b3JlIH0gPSB0aGlzLm9wdHM7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG5cdFx0XHQudGhlbigoKSA9PiBzdG9yZS5jbGVhcigpKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtleXY7XG4iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMva2V5di9zcmMgc3luYyByZWN1cnNpdmVcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdCA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xuXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRyZXN1bHRba2V5LnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gV2UgZGVmaW5lIHRoZXNlIG1hbnVhbGx5IHRvIGVuc3VyZSB0aGV5J3JlIGFsd2F5cyBjb3BpZWRcbi8vIGV2ZW4gaWYgdGhleSB3b3VsZCBtb3ZlIHVwIHRoZSBwcm90b3R5cGUgY2hhaW5cbi8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfY2xhc3NfaHR0cF9pbmNvbWluZ21lc3NhZ2VcbmNvbnN0IGtub3duUHJvcHMgPSBbXG5cdCdkZXN0cm95Jyxcblx0J3NldFRpbWVvdXQnLFxuXHQnc29ja2V0Jyxcblx0J2hlYWRlcnMnLFxuXHQndHJhaWxlcnMnLFxuXHQncmF3SGVhZGVycycsXG5cdCdzdGF0dXNDb2RlJyxcblx0J2h0dHBWZXJzaW9uJyxcblx0J2h0dHBWZXJzaW9uTWlub3InLFxuXHQnaHR0cFZlcnNpb25NYWpvcicsXG5cdCdyYXdUcmFpbGVycycsXG5cdCdzdGF0dXNNZXNzYWdlJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnJvbVN0cmVhbSwgdG9TdHJlYW0pID0+IHtcblx0Y29uc3QgZnJvbVByb3BzID0gbmV3IFNldChPYmplY3Qua2V5cyhmcm9tU3RyZWFtKS5jb25jYXQoa25vd25Qcm9wcykpO1xuXG5cdGZvciAoY29uc3QgcHJvcCBvZiBmcm9tUHJvcHMpIHtcblx0XHQvLyBEb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgcHJvcGVydGllc1xuXHRcdGlmIChwcm9wIGluIHRvU3RyZWFtKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0b1N0cmVhbVtwcm9wXSA9IHR5cGVvZiBmcm9tU3RyZWFtW3Byb3BdID09PSAnZnVuY3Rpb24nID8gZnJvbVN0cmVhbVtwcm9wXS5iaW5kKGZyb21TdHJlYW0pIDogZnJvbVN0cmVhbVtwcm9wXTtcblx0fVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFVzZSB0aGUgYFVSTGAgZ2xvYmFsIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMTBcbmNvbnN0IFVSTFBhcnNlciA9IHR5cGVvZiBVUkwgPT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgndXJsJykuVVJMIDogVVJMO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuY29uc3QgREFUQV9VUkxfREVGQVVMVF9NSU1FX1RZUEUgPSAndGV4dC9wbGFpbic7XG5jb25zdCBEQVRBX1VSTF9ERUZBVUxUX0NIQVJTRVQgPSAndXMtYXNjaWknO1xuXG5jb25zdCB0ZXN0UGFyYW1ldGVyID0gKG5hbWUsIGZpbHRlcnMpID0+IHtcblx0cmV0dXJuIGZpbHRlcnMuc29tZShmaWx0ZXIgPT4gZmlsdGVyIGluc3RhbmNlb2YgUmVnRXhwID8gZmlsdGVyLnRlc3QobmFtZSkgOiBmaWx0ZXIgPT09IG5hbWUpO1xufTtcblxuY29uc3Qgbm9ybWFsaXplRGF0YVVSTCA9ICh1cmxTdHJpbmcsIHtzdHJpcEhhc2h9KSA9PiB7XG5cdGNvbnN0IHBhcnRzID0gdXJsU3RyaW5nLm1hdGNoKC9eZGF0YTooW14sXSo/KSwoW14jXSo/KSg/OiMoLiopKT8kLyk7XG5cblx0aWYgKCFwYXJ0cykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsU3RyaW5nfWApO1xuXHR9XG5cblx0Y29uc3QgbWVkaWFUeXBlID0gcGFydHNbMV0uc3BsaXQoJzsnKTtcblx0Y29uc3QgYm9keSA9IHBhcnRzWzJdO1xuXHRjb25zdCBoYXNoID0gc3RyaXBIYXNoID8gJycgOiBwYXJ0c1szXTtcblxuXHRsZXQgYmFzZTY0ID0gZmFsc2U7XG5cblx0aWYgKG1lZGlhVHlwZVttZWRpYVR5cGUubGVuZ3RoIC0gMV0gPT09ICdiYXNlNjQnKSB7XG5cdFx0bWVkaWFUeXBlLnBvcCgpO1xuXHRcdGJhc2U2NCA9IHRydWU7XG5cdH1cblxuXHQvLyBMb3dlcmNhc2UgTUlNRSB0eXBlXG5cdGNvbnN0IG1pbWVUeXBlID0gKG1lZGlhVHlwZS5zaGlmdCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gbWVkaWFUeXBlXG5cdFx0Lm1hcChhdHRyaWJ1dGUgPT4ge1xuXHRcdFx0bGV0IFtrZXksIHZhbHVlID0gJyddID0gYXR0cmlidXRlLnNwbGl0KCc9JykubWFwKHN0cmluZyA9PiBzdHJpbmcudHJpbSgpKTtcblxuXHRcdFx0Ly8gTG93ZXJjYXNlIGBjaGFyc2V0YFxuXHRcdFx0aWYgKGtleSA9PT0gJ2NoYXJzZXQnKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IERBVEFfVVJMX0RFRkFVTFRfQ0hBUlNFVCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYCR7a2V5fSR7dmFsdWUgPyBgPSR7dmFsdWV9YCA6ICcnfWA7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRNZWRpYVR5cGUgPSBbXG5cdFx0Li4uYXR0cmlidXRlc1xuXHRdO1xuXG5cdGlmIChiYXNlNjQpIHtcblx0XHRub3JtYWxpemVkTWVkaWFUeXBlLnB1c2goJ2Jhc2U2NCcpO1xuXHR9XG5cblx0aWYgKG5vcm1hbGl6ZWRNZWRpYVR5cGUubGVuZ3RoICE9PSAwIHx8IChtaW1lVHlwZSAmJiBtaW1lVHlwZSAhPT0gREFUQV9VUkxfREVGQVVMVF9NSU1FX1RZUEUpKSB7XG5cdFx0bm9ybWFsaXplZE1lZGlhVHlwZS51bnNoaWZ0KG1pbWVUeXBlKTtcblx0fVxuXG5cdHJldHVybiBgZGF0YToke25vcm1hbGl6ZWRNZWRpYVR5cGUuam9pbignOycpfSwke2Jhc2U2NCA/IGJvZHkudHJpbSgpIDogYm9keX0ke2hhc2ggPyBgIyR7aGFzaH1gIDogJyd9YDtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVVybCA9ICh1cmxTdHJpbmcsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHRkZWZhdWx0UHJvdG9jb2w6ICdodHRwOicsXG5cdFx0bm9ybWFsaXplUHJvdG9jb2w6IHRydWUsXG5cdFx0Zm9yY2VIdHRwOiBmYWxzZSxcblx0XHRmb3JjZUh0dHBzOiBmYWxzZSxcblx0XHRzdHJpcEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxuXHRcdHN0cmlwSGFzaDogZmFsc2UsXG5cdFx0c3RyaXBXV1c6IHRydWUsXG5cdFx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJzOiBbL151dG1fXFx3Ky9pXSxcblx0XHRyZW1vdmVUcmFpbGluZ1NsYXNoOiB0cnVlLFxuXHRcdHJlbW92ZURpcmVjdG9yeUluZGV4OiBmYWxzZSxcblx0XHRzb3J0UXVlcnlQYXJhbWV0ZXJzOiB0cnVlLFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblxuXHQvLyBUT0RPOiBSZW1vdmUgdGhpcyBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmVcblx0aWYgKFJlZmxlY3QuaGFzKG9wdGlvbnMsICdub3JtYWxpemVIdHRwcycpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdvcHRpb25zLm5vcm1hbGl6ZUh0dHBzIGlzIHJlbmFtZWQgdG8gb3B0aW9ucy5mb3JjZUh0dHAnKTtcblx0fVxuXG5cdGlmIChSZWZsZWN0LmhhcyhvcHRpb25zLCAnbm9ybWFsaXplSHR0cCcpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdvcHRpb25zLm5vcm1hbGl6ZUh0dHAgaXMgcmVuYW1lZCB0byBvcHRpb25zLmZvcmNlSHR0cHMnKTtcblx0fVxuXG5cdGlmIChSZWZsZWN0LmhhcyhvcHRpb25zLCAnc3RyaXBGcmFnbWVudCcpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdvcHRpb25zLnN0cmlwRnJhZ21lbnQgaXMgcmVuYW1lZCB0byBvcHRpb25zLnN0cmlwSGFzaCcpO1xuXHR9XG5cblx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuXHQvLyBEYXRhIFVSTFxuXHRpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuXHRcdHJldHVybiBub3JtYWxpemVEYXRhVVJMKHVybFN0cmluZywgb3B0aW9ucyk7XG5cdH1cblxuXHRjb25zdCBoYXNSZWxhdGl2ZVByb3RvY29sID0gdXJsU3RyaW5nLnN0YXJ0c1dpdGgoJy8vJyk7XG5cdGNvbnN0IGlzUmVsYXRpdmVVcmwgPSAhaGFzUmVsYXRpdmVQcm90b2NvbCAmJiAvXlxcLipcXC8vLnRlc3QodXJsU3RyaW5nKTtcblxuXHQvLyBQcmVwZW5kIHByb3RvY29sXG5cdGlmICghaXNSZWxhdGl2ZVVybCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9eKD8hKD86XFx3KzopP1xcL1xcLyl8XlxcL1xcLy8sIG9wdGlvbnMuZGVmYXVsdFByb3RvY29sKTtcblx0fVxuXG5cdGNvbnN0IHVybE9iaiA9IG5ldyBVUkxQYXJzZXIodXJsU3RyaW5nKTtcblxuXHRpZiAob3B0aW9ucy5mb3JjZUh0dHAgJiYgb3B0aW9ucy5mb3JjZUh0dHBzKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGZvcmNlSHR0cGAgYW5kIGBmb3JjZUh0dHBzYCBvcHRpb25zIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyJyk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5mb3JjZUh0dHAgJiYgdXJsT2JqLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xuXHRcdHVybE9iai5wcm90b2NvbCA9ICdodHRwOic7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5mb3JjZUh0dHBzICYmIHVybE9iai5wcm90b2NvbCA9PT0gJ2h0dHA6Jykge1xuXHRcdHVybE9iai5wcm90b2NvbCA9ICdodHRwczonO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGF1dGhcblx0aWYgKG9wdGlvbnMuc3RyaXBBdXRoZW50aWNhdGlvbikge1xuXHRcdHVybE9iai51c2VybmFtZSA9ICcnO1xuXHRcdHVybE9iai5wYXNzd29yZCA9ICcnO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGhhc2hcblx0aWYgKG9wdGlvbnMuc3RyaXBIYXNoKSB7XG5cdFx0dXJsT2JqLmhhc2ggPSAnJztcblx0fVxuXG5cdC8vIFJlbW92ZSBkdXBsaWNhdGUgc2xhc2hlcyBpZiBub3QgcHJlY2VkZWQgYnkgYSBwcm90b2NvbFxuXHRpZiAodXJsT2JqLnBhdGhuYW1lKSB7XG5cdFx0Ly8gVE9ETzogVXNlIHRoZSBmb2xsb3dpbmcgaW5zdGVhZCB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDEwXG5cdFx0Ly8gYHVybE9iai5wYXRobmFtZSA9IHVybE9iai5wYXRobmFtZS5yZXBsYWNlKC8oPzwhaHR0cHM/OilcXC97Mix9L2csICcvJyk7YFxuXHRcdHVybE9iai5wYXRobmFtZSA9IHVybE9iai5wYXRobmFtZS5yZXBsYWNlKC8oKD8hOikufF4pXFwvezIsfS9nLCAoXywgcDEpID0+IHtcblx0XHRcdGlmICgvXig/IVxcLykvZy50ZXN0KHAxKSkge1xuXHRcdFx0XHRyZXR1cm4gYCR7cDF9L2A7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAnLyc7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBEZWNvZGUgVVJJIG9jdGV0c1xuXHRpZiAodXJsT2JqLnBhdGhuYW1lKSB7XG5cdFx0dXJsT2JqLnBhdGhuYW1lID0gZGVjb2RlVVJJKHVybE9iai5wYXRobmFtZSk7XG5cdH1cblxuXHQvLyBSZW1vdmUgZGlyZWN0b3J5IGluZGV4XG5cdGlmIChvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4ID09PSB0cnVlKSB7XG5cdFx0b3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCA9IFsvXmluZGV4XFwuW2Etel0rJC9dO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCkgJiYgb3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleC5sZW5ndGggPiAwKSB7XG5cdFx0bGV0IHBhdGhDb21wb25lbnRzID0gdXJsT2JqLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5cdFx0Y29uc3QgbGFzdENvbXBvbmVudCA9IHBhdGhDb21wb25lbnRzW3BhdGhDb21wb25lbnRzLmxlbmd0aCAtIDFdO1xuXG5cdFx0aWYgKHRlc3RQYXJhbWV0ZXIobGFzdENvbXBvbmVudCwgb3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCkpIHtcblx0XHRcdHBhdGhDb21wb25lbnRzID0gcGF0aENvbXBvbmVudHMuc2xpY2UoMCwgcGF0aENvbXBvbmVudHMubGVuZ3RoIC0gMSk7XG5cdFx0XHR1cmxPYmoucGF0aG5hbWUgPSBwYXRoQ29tcG9uZW50cy5zbGljZSgxKS5qb2luKCcvJykgKyAnLyc7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHVybE9iai5ob3N0bmFtZSkge1xuXHRcdC8vIFJlbW92ZSB0cmFpbGluZyBkb3Rcblx0XHR1cmxPYmouaG9zdG5hbWUgPSB1cmxPYmouaG9zdG5hbWUucmVwbGFjZSgvXFwuJC8sICcnKTtcblxuXHRcdC8vIFJlbW92ZSBgd3d3LmBcblx0XHRpZiAob3B0aW9ucy5zdHJpcFdXVyAmJiAvXnd3d1xcLihbYS16XFwtXFxkXXsyLDYzfSlcXC4oW2Etei5dezIsNX0pJC8udGVzdCh1cmxPYmouaG9zdG5hbWUpKSB7XG5cdFx0XHQvLyBFYWNoIGxhYmVsIHNob3VsZCBiZSBtYXggNjMgYXQgbGVuZ3RoIChtaW46IDIpLlxuXHRcdFx0Ly8gVGhlIGV4dGVuc2lvbiBzaG91bGQgYmUgbWF4IDUgYXQgbGVuZ3RoIChtaW46IDIpLlxuXHRcdFx0Ly8gU291cmNlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib3N0bmFtZSNSZXN0cmljdGlvbnNfb25fdmFsaWRfaG9zdF9uYW1lc1xuXHRcdFx0dXJsT2JqLmhvc3RuYW1lID0gdXJsT2JqLmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIHF1ZXJ5IHVud2FudGVkIHBhcmFtZXRlcnNcblx0aWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5yZW1vdmVRdWVyeVBhcmFtZXRlcnMpKSB7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgWy4uLnVybE9iai5zZWFyY2hQYXJhbXMua2V5cygpXSkge1xuXHRcdFx0aWYgKHRlc3RQYXJhbWV0ZXIoa2V5LCBvcHRpb25zLnJlbW92ZVF1ZXJ5UGFyYW1ldGVycykpIHtcblx0XHRcdFx0dXJsT2JqLnNlYXJjaFBhcmFtcy5kZWxldGUoa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTb3J0IHF1ZXJ5IHBhcmFtZXRlcnNcblx0aWYgKG9wdGlvbnMuc29ydFF1ZXJ5UGFyYW1ldGVycykge1xuXHRcdHVybE9iai5zZWFyY2hQYXJhbXMuc29ydCgpO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCkge1xuXHRcdHVybE9iai5wYXRobmFtZSA9IHVybE9iai5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpO1xuXHR9XG5cblx0Ly8gVGFrZSBhZHZhbnRhZ2Ugb2YgbWFueSBvZiB0aGUgTm9kZSBgdXJsYCBub3JtYWxpemF0aW9uc1xuXHR1cmxTdHJpbmcgPSB1cmxPYmoudG9TdHJpbmcoKTtcblxuXHQvLyBSZW1vdmUgZW5kaW5nIGAvYFxuXHRpZiAoKG9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCB8fCB1cmxPYmoucGF0aG5hbWUgPT09ICcvJykgJiYgdXJsT2JqLmhhc2ggPT09ICcnKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cdH1cblxuXHQvLyBSZXN0b3JlIHJlbGF0aXZlIHByb3RvY29sLCBpZiBhcHBsaWNhYmxlXG5cdGlmIChoYXNSZWxhdGl2ZVByb3RvY29sICYmICFvcHRpb25zLm5vcm1hbGl6ZVByb3RvY29sKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL15odHRwOlxcL1xcLy8sICcvLycpO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGh0dHAvaHR0cHNcblx0aWYgKG9wdGlvbnMuc3RyaXBQcm90b2NvbCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9eKD86aHR0cHM/Oik/XFwvXFwvLywgJycpO1xuXHR9XG5cblx0cmV0dXJuIHVybFN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplVXJsO1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBub3JtYWxpemVVcmw7XG4iLCJ2YXIgd3JhcHB5ID0gcmVxdWlyZSgnd3JhcHB5Jylcbm1vZHVsZS5leHBvcnRzID0gd3JhcHB5KG9uY2UpXG5tb2R1bGUuZXhwb3J0cy5zdHJpY3QgPSB3cmFwcHkob25jZVN0cmljdClcblxub25jZS5wcm90byA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZScsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2UodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICdvbmNlU3RyaWN0Jywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25jZVN0cmljdCh0aGlzKVxuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZi5jYWxsZWQpIHJldHVybiBmLnZhbHVlXG4gICAgZi5jYWxsZWQgPSB0cnVlXG4gICAgcmV0dXJuIGYudmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgZi5jYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZlxufVxuXG5mdW5jdGlvbiBvbmNlU3RyaWN0IChmbikge1xuICB2YXIgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZi5jYWxsZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZi5vbmNlRXJyb3IpXG4gICAgZi5jYWxsZWQgPSB0cnVlXG4gICAgcmV0dXJuIGYudmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgdmFyIG5hbWUgPSBmbi5uYW1lIHx8ICdGdW5jdGlvbiB3cmFwcGVkIHdpdGggYG9uY2VgJ1xuICBmLm9uY2VFcnJvciA9IG5hbWUgKyBcIiBzaG91bGRuJ3QgYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlXCJcbiAgZi5jYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZlxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDYW5jZWxFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IocmVhc29uKSB7XG5cdFx0c3VwZXIocmVhc29uIHx8ICdQcm9taXNlIHdhcyBjYW5jZWxlZCcpO1xuXHRcdHRoaXMubmFtZSA9ICdDYW5jZWxFcnJvcic7XG5cdH1cblxuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5jbGFzcyBQQ2FuY2VsYWJsZSB7XG5cdHN0YXRpYyBmbih1c2VyRm4pIHtcblx0XHRyZXR1cm4gKC4uLmFyZ3VtZW50c18pID0+IHtcblx0XHRcdHJldHVybiBuZXcgUENhbmNlbGFibGUoKHJlc29sdmUsIHJlamVjdCwgb25DYW5jZWwpID0+IHtcblx0XHRcdFx0YXJndW1lbnRzXy5wdXNoKG9uQ2FuY2VsKTtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvcHJlZmVyLWF3YWl0LXRvLXRoZW5cblx0XHRcdFx0dXNlckZuKC4uLmFyZ3VtZW50c18pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuXHRcdHRoaXMuX2NhbmNlbEhhbmRsZXJzID0gW107XG5cdFx0dGhpcy5faXNQZW5kaW5nID0gdHJ1ZTtcblx0XHR0aGlzLl9pc0NhbmNlbGVkID0gZmFsc2U7XG5cdFx0dGhpcy5fcmVqZWN0T25DYW5jZWwgPSB0cnVlO1xuXG5cdFx0dGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuX3JlamVjdCA9IHJlamVjdDtcblxuXHRcdFx0Y29uc3Qgb25SZXNvbHZlID0gdmFsdWUgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuX2lzQ2FuY2VsZWQgfHwgIW9uQ2FuY2VsLnNob3VsZFJlamVjdCkge1xuXHRcdFx0XHRcdHRoaXMuX2lzUGVuZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBvblJlamVjdCA9IGVycm9yID0+IHtcblx0XHRcdFx0dGhpcy5faXNQZW5kaW5nID0gZmFsc2U7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBvbkNhbmNlbCA9IGhhbmRsZXIgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuX2lzUGVuZGluZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBvbkNhbmNlbGAgaGFuZGxlciB3YXMgYXR0YWNoZWQgYWZ0ZXIgdGhlIHByb21pc2Ugc2V0dGxlZC4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2NhbmNlbEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHR9O1xuXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvbkNhbmNlbCwge1xuXHRcdFx0XHRzaG91bGRSZWplY3Q6IHtcblx0XHRcdFx0XHRnZXQ6ICgpID0+IHRoaXMuX3JlamVjdE9uQ2FuY2VsLFxuXHRcdFx0XHRcdHNldDogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZWplY3RPbkNhbmNlbCA9IGJvb2xlYW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGV4ZWN1dG9yKG9uUmVzb2x2ZSwgb25SZWplY3QsIG9uQ2FuY2VsKTtcblx0XHR9KTtcblx0fVxuXG5cdHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tdGhlblxuXHRcdHJldHVybiB0aGlzLl9wcm9taXNlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuXHR9XG5cblx0Y2F0Y2gob25SZWplY3RlZCkge1xuXHRcdHJldHVybiB0aGlzLl9wcm9taXNlLmNhdGNoKG9uUmVqZWN0ZWQpO1xuXHR9XG5cblx0ZmluYWxseShvbkZpbmFsbHkpIHtcblx0XHRyZXR1cm4gdGhpcy5fcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSk7XG5cdH1cblxuXHRjYW5jZWwocmVhc29uKSB7XG5cdFx0aWYgKCF0aGlzLl9pc1BlbmRpbmcgfHwgdGhpcy5faXNDYW5jZWxlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2lzQ2FuY2VsZWQgPSB0cnVlO1xuXG5cdFx0aWYgKHRoaXMuX2NhbmNlbEhhbmRsZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9jYW5jZWxIYW5kbGVycykge1xuXHRcdFx0XHRcdGhhbmRsZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhpcy5fcmVqZWN0KGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9yZWplY3RPbkNhbmNlbCkge1xuXHRcdFx0dGhpcy5fcmVqZWN0KG5ldyBDYW5jZWxFcnJvcihyZWFzb24pKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNDYW5jZWxlZDtcblx0fVxufVxuXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoUENhbmNlbGFibGUucHJvdG90eXBlLCBQcm9taXNlLnByb3RvdHlwZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUENhbmNlbGFibGU7XG5tb2R1bGUuZXhwb3J0cy5DYW5jZWxFcnJvciA9IENhbmNlbEVycm9yO1xuIiwiY29uc3QgZ290ID0gcmVxdWlyZSgnZ290JylcblxuY29uc3QgUG9ja2V0QVBJID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciAoY29uc3VtZXJfa2V5KSB7XG5cdFx0dGhpcy5jb25zdW1lcl9rZXkgPSBjb25zdW1lcl9rZXlcblx0XHR0aGlzLmNvbmZpZyA9IHtcblx0XHRcdHBvY2tldFVybDoge1xuXHRcdFx0XHRyZXF1ZXN0OiAnaHR0cHM6Ly9nZXRwb2NrZXQuY29tL3YzL29hdXRoL3JlcXVlc3QnLFxuXHRcdFx0XHRhdXRob3JpemU6ICdodHRwczovL2dldHBvY2tldC5jb20vdjMvb2F1dGgvYXV0aG9yaXplJyxcblx0XHRcdFx0Z2V0OiAnaHR0cHM6Ly9nZXRwb2NrZXQuY29tL3YzL2dldCcsXG5cdFx0XHRcdGFkZDogJ2h0dHBzOi8vZ2V0cG9ja2V0LmNvbS92My9hZGQnLFxuXHRcdFx0XHRtb2RpZnk6ICdodHRwczovL2dldHBvY2tldC5jb20vdjMvc2VuZCdcblx0XHRcdH0sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdYLUFjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNldFJlcXVlc3RUb2tlbiAocmVxdWVzdFRva2VuKSB7XG5cdFx0dGhpcy5yZXF1ZXN0X3Rva2VuID0gcmVxdWVzdFRva2VuXG5cdH1cblxuXHRzZXRBY2Nlc3NUb2tlbiAoYWNjZXNzVG9rZW4pIHtcblx0XHR0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc1Rva2VuXG5cdH1cblxuXHRzZXRPcHRpb25zICh2YWx1ZXMsIGVuZHBvaW50LCBtZXRob2QgPSAncG9zdCcpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyczogdGhpcy5jb25maWcuaGVhZGVycyxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXG5cdFx0XHR1cmw6IGVuZHBvaW50LFxuXHRcdFx0bWV0aG9kOiBtZXRob2QsXG5cdFx0XHRyZXBvbnNlVHlwZTogJ2pzb24nXG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZ2V0UmVxdWVzdFRva2VuIChjYWxsYmFjaykge1xuXHRcdGlmICh0aGlzLnJlcXVlc3RfdG9rZW4pIHtcblx0XHRcdHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RfdG9rZW5cblx0XHR9XG5cblx0XHRsZXQgcmVzcG9uc2Vcblx0XHRsZXQgdG9rZW5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRjb25zdW1lcl9rZXk6IHRoaXMuY29uc3VtZXJfa2V5LFxuXHRcdFx0cmVkaXJlY3RfdXJpOiAncG9ja2V0YXBwMTIzNDphdXRob3JpemF0aW9uRmluaXNoZWQnXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuc2V0T3B0aW9ucyh2YWx1ZXMsIHRoaXMuY29uZmlnLnBvY2tldFVybC5yZXF1ZXN0KVxuXG5cdFx0dHJ5IHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgZ290KG9wdGlvbnMpXG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlLm5hbWUgKyAnOiAnICsgZS5tZXNzYWdlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGUpXG5cdFx0fVxuXG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0b2tlbiA9IEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSlcblx0XHRcdHJldHVybiBjYWxsYmFjayh0b2tlbi5jb2RlKVxuXHRcdH1cblxuXHRcdHRva2VuID0gSlNPTi5wYXJzZShyZXNwb25zZS5ib2R5KVxuXHRcdHJldHVybiB0b2tlbi5jb2RlXG5cdH1cblxuXHRhc3luYyBnZXRBY2Nlc3NUb2tlbiAoY2FsbGJhY2spIHtcblx0XHRpZiAodGhpcy5hY2Nlc3NfdG9rZW4pIHtcblx0XHRcdHJldHVybiBhd2FpdCB0aGlzLmFjY2Vzc190b2tlblxuXHRcdH1cblxuXHRcdGxldCB0b2tlblxuXHRcdGxldCByZXNwb25zZVxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdGNvbnN1bWVyX2tleTogdGhpcy5jb25zdW1lcl9rZXksXG5cdFx0XHRjb2RlOiB0aGlzLnJlcXVlc3RfdG9rZW5cblx0XHR9XG5cblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5zZXRPcHRpb25zKHZhbHVlcywgdGhpcy5jb25maWcucG9ja2V0VXJsLmF1dGhvcml6ZSlcblxuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IGdvdChvcHRpb25zKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZS5uYW1lICsgJzogJyArIGUubWVzc2FnZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihlKVxuXHRcdH1cblxuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0dG9rZW4gPSBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpXG5cdFx0XHR0aGlzLmFjY2Vzc190b2tlbiA9IHRva2VuLmNvZGVcblx0XHRcdHJldHVybiBjYWxsYmFjayh0b2tlbilcblx0XHR9XG5cblx0XHR0b2tlbiA9IEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSlcblx0XHR0aGlzLmFjY2Vzc190b2tlbiA9IHRva2VuLmNvZGVcblx0XHRyZXR1cm4gdG9rZW5cblx0fVxuXG5cdGFzeW5jIGdldEFydGljbGVzIChwYXJhbXMsIGNhbGxiYWNrKSB7XG5cdFx0bGV0IHJlc3BvbnNlXG5cdFx0Y29uc3QgYWNjZXNzID0ge1xuXHRcdFx0Y29uc3VtZXJfa2V5OiB0aGlzLmNvbnN1bWVyX2tleSxcblx0XHRcdGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NfdG9rZW4sXG5cdFx0XHRyZWRpcmVjdF91cmk6ICdodHRwOi8vbG9jYWxob3N0OjgwODEvJ1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlcyA9IHsgLi4uYWNjZXNzLCAuLi5wYXJhbXMgfVxuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuc2V0T3B0aW9ucyh2YWx1ZXMsIHRoaXMuY29uZmlnLnBvY2tldFVybC5nZXQpXG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3B0aW9ucywgbnVsbCwgMikpO1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCBnb3Qob3B0aW9ucylcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUubmFtZSArICc6ICcgKyBlLm1lc3NhZ2UpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZSlcblx0XHR9XG5cblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpKVxuXHRcdH1cblxuXHRcdHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpXG5cdH1cblxuXHRhc3luYyBhZGRBcnRpY2xlcyAocGFyYW1zLCBjYWxsYmFjaykge1xuXHRcdGxldCByZXNwb25zZVxuXHRcdGNvbnN0IGFjY2VzcyA9IHtcblx0XHRcdGNvbnN1bWVyX2tleTogdGhpcy5jb25zdW1lcl9rZXksXG5cdFx0XHRhY2Nlc3NfdG9rZW46IHRoaXMuYWNjZXNzX3Rva2VuXG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWVzID0geyAuLi5hY2Nlc3MsIC4uLnBhcmFtcyB9XG5cblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5zZXRPcHRpb25zKHZhbHVlcywgdGhpcy5jb25maWcucG9ja2V0VXJsLmFkZClcblx0XHR0cnkge1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCBnb3Qob3B0aW9ucylcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUubmFtZSArICc6ICcgKyBlLm1lc3NhZ2UpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZSlcblx0XHR9XG5cblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpKVxuXHRcdH1cblxuXHRcdHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpXG5cdH1cblxuXHRhc3luYyBtb2RpZnlBcnRpY2xlcyAoYWN0aW9ucywgY2FsbGJhY2spIHtcblx0XHRsZXQgcmVzcG9uc2Vcblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRhY3Rpb25zOiBhY3Rpb25zLFxuXHRcdFx0Y29uc3VtZXJfa2V5OiB0aGlzLmNvbnN1bWVyX2tleSxcblx0XHRcdGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NfdG9rZW5cblx0XHR9XG5cblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5zZXRPcHRpb25zKHZhbHVlcywgdGhpcy5jb25maWcucG9ja2V0VXJsLm1vZGlmeSlcblxuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IGdvdChvcHRpb25zKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZS5uYW1lICsgJzogJyArIGUubWVzc2FnZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihlKVxuXHRcdH1cblxuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSkpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSlcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvY2tldEFQSVxuIiwidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJylcbnZhciBlb3MgPSByZXF1aXJlKCdlbmQtb2Ytc3RyZWFtJylcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJykgLy8gd2Ugb25seSBuZWVkIGZzIHRvIGdldCB0aGUgUmVhZFN0cmVhbSBhbmQgV3JpdGVTdHJlYW0gcHJvdG90eXBlc1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgYW5jaWVudCA9IC9edj9cXC4wLy50ZXN0KHByb2Nlc3MudmVyc2lvbilcblxudmFyIGlzRm4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG52YXIgaXNGUyA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgaWYgKCFhbmNpZW50KSByZXR1cm4gZmFsc2UgLy8gbmV3ZXIgbm9kZSB2ZXJzaW9uIGRvIG5vdCBuZWVkIHRvIGNhcmUgYWJvdXQgZnMgaXMgYSBzcGVjaWFsIHdheVxuICBpZiAoIWZzKSByZXR1cm4gZmFsc2UgLy8gYnJvd3NlclxuICByZXR1cm4gKHN0cmVhbSBpbnN0YW5jZW9mIChmcy5SZWFkU3RyZWFtIHx8IG5vb3ApIHx8IHN0cmVhbSBpbnN0YW5jZW9mIChmcy5Xcml0ZVN0cmVhbSB8fCBub29wKSkgJiYgaXNGbihzdHJlYW0uY2xvc2UpXG59XG5cbnZhciBpc1JlcXVlc3QgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIGlzRm4oc3RyZWFtLmFib3J0KVxufVxuXG52YXIgZGVzdHJveWVyID0gZnVuY3Rpb24gKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrKVxuXG4gIHZhciBjbG9zZWQgPSBmYWxzZVxuICBzdHJlYW0ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlZCA9IHRydWVcbiAgfSlcblxuICBlb3Moc3RyZWFtLCB7cmVhZGFibGU6IHJlYWRpbmcsIHdyaXRhYmxlOiB3cml0aW5nfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgY2xvc2VkID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgfSlcblxuICB2YXIgZGVzdHJveWVkID0gZmFsc2VcbiAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoY2xvc2VkKSByZXR1cm5cbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm5cbiAgICBkZXN0cm95ZWQgPSB0cnVlXG5cbiAgICBpZiAoaXNGUyhzdHJlYW0pKSByZXR1cm4gc3RyZWFtLmNsb3NlKG5vb3ApIC8vIHVzZSBjbG9zZSBmb3IgZnMgc3RyZWFtcyB0byBhdm9pZCBmZCBsZWFrc1xuICAgIGlmIChpc1JlcXVlc3Qoc3RyZWFtKSkgcmV0dXJuIHN0cmVhbS5hYm9ydCgpIC8vIHJlcXVlc3QuZGVzdHJveSBqdXN0IGRvIC5lbmQgLSAuYWJvcnQgaXMgd2hhdCB3ZSB3YW50XG5cbiAgICBpZiAoaXNGbihzdHJlYW0uZGVzdHJveSkpIHJldHVybiBzdHJlYW0uZGVzdHJveSgpXG5cbiAgICBjYWxsYmFjayhlcnIgfHwgbmV3IEVycm9yKCdzdHJlYW0gd2FzIGRlc3Ryb3llZCcpKVxuICB9XG59XG5cbnZhciBjYWxsID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuKClcbn1cblxudmFyIHBpcGUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGZyb20ucGlwZSh0bylcbn1cblxudmFyIHB1bXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHJlYW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICB2YXIgY2FsbGJhY2sgPSBpc0ZuKHN0cmVhbXNbc3RyZWFtcy5sZW5ndGggLSAxXSB8fCBub29wKSAmJiBzdHJlYW1zLnBvcCgpIHx8IG5vb3BcblxuICBpZiAoQXJyYXkuaXNBcnJheShzdHJlYW1zWzBdKSkgc3RyZWFtcyA9IHN0cmVhbXNbMF1cbiAgaWYgKHN0cmVhbXMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdwdW1wIHJlcXVpcmVzIHR3byBzdHJlYW1zIHBlciBtaW5pbXVtJylcblxuICB2YXIgZXJyb3JcbiAgdmFyIGRlc3Ryb3lzID0gc3RyZWFtcy5tYXAoZnVuY3Rpb24gKHN0cmVhbSwgaSkge1xuICAgIHZhciByZWFkaW5nID0gaSA8IHN0cmVhbXMubGVuZ3RoIC0gMVxuICAgIHZhciB3cml0aW5nID0gaSA+IDBcbiAgICByZXR1cm4gZGVzdHJveWVyKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKCFlcnJvcikgZXJyb3IgPSBlcnJcbiAgICAgIGlmIChlcnIpIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGlmIChyZWFkaW5nKSByZXR1cm5cbiAgICAgIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGNhbGxiYWNrKGVycm9yKVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIHN0cmVhbXMucmVkdWNlKHBpcGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHVtcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBRdWlja0xSVSB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuXHRcdGlmICghKG9wdGlvbnMubWF4U2l6ZSAmJiBvcHRpb25zLm1heFNpemUgPiAwKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYG1heFNpemVgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDAnKTtcblx0XHR9XG5cblx0XHR0aGlzLm1heFNpemUgPSBvcHRpb25zLm1heFNpemU7XG5cdFx0dGhpcy5vbkV2aWN0aW9uID0gb3B0aW9ucy5vbkV2aWN0aW9uO1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0dGhpcy5vbGRDYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLl9zaXplID0gMDtcblx0fVxuXG5cdF9zZXQoa2V5LCB2YWx1ZSkge1xuXHRcdHRoaXMuY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuXHRcdHRoaXMuX3NpemUrKztcblxuXHRcdGlmICh0aGlzLl9zaXplID49IHRoaXMubWF4U2l6ZSkge1xuXHRcdFx0dGhpcy5fc2l6ZSA9IDA7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5vbkV2aWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMub2xkQ2FjaGUuZW50cmllcygpKSB7XG5cdFx0XHRcdFx0dGhpcy5vbkV2aWN0aW9uKGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub2xkQ2FjaGUgPSB0aGlzLmNhY2hlO1xuXHRcdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR9XG5cdH1cblxuXHRnZXQoa2V5KSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlLmdldChrZXkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9sZENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMub2xkQ2FjaGUuZ2V0KGtleSk7XG5cdFx0XHR0aGlzLm9sZENhY2hlLmRlbGV0ZShrZXkpO1xuXHRcdFx0dGhpcy5fc2V0KGtleSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHNldChrZXksIHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHRoaXMuY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXMoa2V5KSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuaGFzKGtleSkgfHwgdGhpcy5vbGRDYWNoZS5oYXMoa2V5KTtcblx0fVxuXG5cdHBlZWsoa2V5KSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlLmdldChrZXkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9sZENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vbGRDYWNoZS5nZXQoa2V5KTtcblx0XHR9XG5cdH1cblxuXHRkZWxldGUoa2V5KSB7XG5cdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XG5cdFx0aWYgKGRlbGV0ZWQpIHtcblx0XHRcdHRoaXMuX3NpemUtLTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5vbGRDYWNoZS5kZWxldGUoa2V5KSB8fCBkZWxldGVkO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5jYWNoZS5jbGVhcigpO1xuXHRcdHRoaXMub2xkQ2FjaGUuY2xlYXIoKTtcblx0XHR0aGlzLl9zaXplID0gMDtcblx0fVxuXG5cdCoga2V5cygpIHtcblx0XHRmb3IgKGNvbnN0IFtrZXldIG9mIHRoaXMpIHtcblx0XHRcdHlpZWxkIGtleTtcblx0XHR9XG5cdH1cblxuXHQqIHZhbHVlcygpIHtcblx0XHRmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiB0aGlzKSB7XG5cdFx0XHR5aWVsZCB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHQqIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmNhY2hlKSB7XG5cdFx0XHR5aWVsZCBpdGVtO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm9sZENhY2hlKSB7XG5cdFx0XHRjb25zdCBba2V5XSA9IGl0ZW07XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0eWllbGQgaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRsZXQgb2xkQ2FjaGVTaXplID0gMDtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiB0aGlzLm9sZENhY2hlLmtleXMoKSkge1xuXHRcdFx0aWYgKCF0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdG9sZENhY2hlU2l6ZSsrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1pbih0aGlzLl9zaXplICsgb2xkQ2FjaGVTaXplLCB0aGlzLm1heFNpemUpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVpY2tMUlU7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCB0bHMgPSByZXF1aXJlKCd0bHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAob3B0aW9ucyA9IHt9KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGxldCB0aW1lb3V0ID0gZmFsc2U7XG5cblx0Y29uc3QgY2FsbGJhY2sgPSBhc3luYyAoKSA9PiB7XG5cdFx0c29ja2V0Lm9mZigndGltZW91dCcsIG9uVGltZW91dCk7XG5cdFx0c29ja2V0Lm9mZignZXJyb3InLCByZWplY3QpO1xuXG5cdFx0aWYgKG9wdGlvbnMucmVzb2x2ZVNvY2tldCkge1xuXHRcdFx0cmVzb2x2ZSh7YWxwblByb3RvY29sOiBzb2NrZXQuYWxwblByb3RvY29sLCBzb2NrZXQsIHRpbWVvdXR9KTtcblxuXHRcdFx0aWYgKHRpbWVvdXQpIHtcblx0XHRcdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRcdHNvY2tldC5lbWl0KCd0aW1lb3V0Jyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNvY2tldC5kZXN0cm95KCk7XG5cdFx0XHRyZXNvbHZlKHthbHBuUHJvdG9jb2w6IHNvY2tldC5hbHBuUHJvdG9jb2wsIHRpbWVvdXR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgb25UaW1lb3V0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRpbWVvdXQgPSB0cnVlO1xuXHRcdGNhbGxiYWNrKCk7XG5cdH07XG5cblx0Y29uc3Qgc29ja2V0ID0gdGxzLmNvbm5lY3Qob3B0aW9ucywgY2FsbGJhY2spO1xuXG5cdHNvY2tldC5vbignZXJyb3InLCByZWplY3QpO1xuXHRzb2NrZXQub25jZSgndGltZW91dCcsIG9uVGltZW91dCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhZGFibGUgPSByZXF1aXJlKCdzdHJlYW0nKS5SZWFkYWJsZTtcbmNvbnN0IGxvd2VyY2FzZUtleXMgPSByZXF1aXJlKCdsb3dlcmNhc2Uta2V5cycpO1xuXG5jbGFzcyBSZXNwb25zZSBleHRlbmRzIFJlYWRhYmxlIHtcblx0Y29uc3RydWN0b3Ioc3RhdHVzQ29kZSwgaGVhZGVycywgYm9keSwgdXJsKSB7XG5cdFx0aWYgKHR5cGVvZiBzdGF0dXNDb2RlICE9PSAnbnVtYmVyJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYHN0YXR1c0NvZGVgIHNob3VsZCBiZSBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGhlYWRlcnMgIT09ICdvYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBgaGVhZGVyc2Agc2hvdWxkIGJlIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIShib2R5IGluc3RhbmNlb2YgQnVmZmVyKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYGJvZHlgIHNob3VsZCBiZSBhIGJ1ZmZlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IGB1cmxgIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblxuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBsb3dlcmNhc2VLZXlzKGhlYWRlcnMpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdH1cblxuXHRfcmVhZCgpIHtcblx0XHR0aGlzLnB1c2godGhpcy5ib2R5KTtcblx0XHR0aGlzLnB1c2gobnVsbCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZTtcbiIsImltcG9ydCBQb2NrZXQgZnJvbSAncG9ja2V0LWFwaSdcblxuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmNvbnN0IHsgUE9DS0VUX0NPTlNVTUVSX0tFWSwgUE9DS0VUX0FDQ0VTU19UT0tFTiB9ID0gcHJvY2Vzcy5lbnZcblxuaW50ZXJmYWNlIEFubm90YXRpb24ge1xuICBhbm5vdGF0aW9uX2lkOiBzdHJpbmdcbiAgaXRlbV9pZDogc3RyaW5nXG4gIHF1b3RlOiBzdHJpbmdcbiAgdmVyc2lvbjogc3RyaW5nXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZyAvLyAnMjAyMS0wMy0xOCAwMzoyODozOSdcbn1cblxuaW50ZXJmYWNlIEFydGljbGUge1xuICBpdGVtX2lkOiBzdHJpbmdcbiAgcmVzb2x2ZWRfaWQ6IHN0cmluZ1xuICByZXNvbHZlZF90aXRsZTogc3RyaW5nXG4gIGRvbWFpbl9tZXRhZGF0YT86IHsgbmFtZTogc3RyaW5nIH1cbiAgYW5ub3RhdGlvbnM/OiBBbm5vdGF0aW9uW11cbiAgcmVzb2x2ZWRfdXJsPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQb2NrZXRSZXNwb25zZSB7XG4gIHRvdGFsOiBudW1iZXJcbiAgbGlzdDogUmVjb3JkPHN0cmluZywgQXJ0aWNsZT5cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoSGlnaGxpZ2h0cyA9IGFzeW5jICgpOiBQcm9taXNlPEhpZ2hsaWdodFtdPiA9PiB7XG4gIGNvbnN0IHBvY2tldENsaWVudCA9IG5ldyBQb2NrZXQoUE9DS0VUX0NPTlNVTUVSX0tFWSlcbiAgcG9ja2V0Q2xpZW50LnNldEFjY2Vzc1Rva2VuKFBPQ0tFVF9BQ0NFU1NfVE9LRU4pXG5cbiAgY29uc3QgYXJ0aWNsZXM6IFBvY2tldFJlc3BvbnNlID0gYXdhaXQgcG9ja2V0Q2xpZW50LmdldEFydGljbGVzKHtcbiAgICBpbWFnZXM6IDEsXG4gICAgdmlkZW9zOiAxLFxuICAgIHRhZ3M6IDEsXG4gICAgcmVkaXNjb3Zlcnk6IDEsXG4gICAgYW5ub3RhdGlvbnM6IDEsXG4gICAgYXV0aG9yczogMSxcbiAgICBpdGVtT3B0aWNzOiAxLFxuICAgIG1ldGE6IDEsXG4gICAgcG9zdHM6IDEsXG4gICAgdG90YWw6IDEsXG4gICAgZm9yY2VhY2NvdW50OiAxLFxuICAgIHN0YXRlOiAnYWxsJyxcbiAgICBzb3J0OiAnbmV3ZXN0JyxcbiAgICBkZXRhaWxUeXBlOiAnY29tcGxldGUnLFxuICB9KVxuXG4gIGNvbnN0IGFubm90YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhcnRpY2xlcy5saXN0KVxuICAgIC5tYXAoXG4gICAgICAoYXJ0aWNsZSkgPT5cbiAgICAgICAgYXJ0aWNsZS5hbm5vdGF0aW9ucz8ubWFwKChhbm5vdGF0aW9uKSA9PiAoe1xuICAgICAgICAgIC4uLmFubm90YXRpb24sXG4gICAgICAgICAgYXJ0aWNsZSxcbiAgICAgICAgfSkpID8/IFtdXG4gICAgKVxuICAgIC5mbGF0KClcblxuICByZXR1cm4gYW5ub3RhdGlvbnMubWFwKChhbm5vdGF0aW9uKSA9PiAoe1xuICAgIGlkOiBhbm5vdGF0aW9uLmFubm90YXRpb25faWQsXG4gICAgdGV4dDogYW5ub3RhdGlvbi5xdW90ZSxcbiAgICBhdXRob3I6XG4gICAgICBhbm5vdGF0aW9uLmFydGljbGUuZG9tYWluX21ldGFkYXRhPy5uYW1lID8/XG4gICAgICBhbm5vdGF0aW9uLmFydGljbGUucmVzb2x2ZWRfdXJsID8/XG4gICAgICAnVW5rbm93bicsXG4gIH0pKVxufVxuIiwiaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJ1xuaW1wb3J0IHsgRG9jdW1lbnRDbGllbnQgfSBmcm9tICdhd3Mtc2RrL2NsaWVudHMvZHluYW1vZGInXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuLy4uL3R5cGVzJ1xuXG5jb25zdCB7IEhJR0hMSUdIVFNfVEFCTEVfQVJOIH0gPSBwcm9jZXNzLmVudlxuXG5pZiAoIUhJR0hMSUdIVFNfVEFCTEVfQVJOKSB7XG4gIHRocm93IG5ldyBFcnJvcignSElHSExJR0hUU19UQUJMRV9BUk4gRW52aXJvbm1lbnQgVmFyaWFibGUgbm90IGRlZmluZWQnKVxufVxuXG5jb25zdCB0YWJsZU5hbWUgPSBISUdITElHSFRTX1RBQkxFX0FSTi5zdWJzdHJpbmcoXG4gIEhJR0hMSUdIVFNfVEFCTEVfQVJOLmxhc3RJbmRleE9mKCcvJykgKyAxXG4pXG5cbmNvbnN0IGRiQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpXG5cbmV4cG9ydCBjb25zdCBzdG9yZUhpZ2hsaWdodHMgPSBhc3luYyAoaGlnaGxpZ2h0czogSGlnaGxpZ2h0W10pID0+IHtcbiAgY29uc3QgYmF0Y2hTaXplcyA9IDI1XG4gIGNvbnN0IGhpZ2hsaWdodFF1ZXVlID0gWy4uLmhpZ2hsaWdodHNdXG4gIHdoaWxlIChoaWdobGlnaHRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0c1RvV3JpdGUgPSBoaWdobGlnaHRRdWV1ZS5zcGxpY2UoMCwgYmF0Y2hTaXplcylcbiAgICBjb25zdCBwYXJhbXM6IERvY3VtZW50Q2xpZW50LkJhdGNoV3JpdGVJdGVtSW5wdXQgPSB7XG4gICAgICBSZXF1ZXN0SXRlbXM6IHtcbiAgICAgICAgW3RhYmxlTmFtZV06IGhpZ2hsaWdodHNUb1dyaXRlLm1hcCgoaGlnaGxpZ2h0KSA9PiAoe1xuICAgICAgICAgIFB1dFJlcXVlc3Q6IHtcbiAgICAgICAgICAgIEl0ZW06IGhpZ2hsaWdodCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSksXG4gICAgICB9LFxuICAgIH1cblxuICAgIGF3YWl0IGRiQ2xpZW50LmJhdGNoV3JpdGUocGFyYW1zKS5wcm9taXNlKClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmVkSGlnaGxpZ2h0cyA9IGFzeW5jICgpOiBQcm9taXNlPEhpZ2hsaWdodFtdPiA9PiB7XG4gIGNvbnN0IGhpZ2hsaWdodHMgPSBbXVxuICBsZXQgcmVzdWx0ID0gYXdhaXQgZGJDbGllbnQuc2Nhbih7IFRhYmxlTmFtZTogdGFibGVOYW1lIH0pLnByb21pc2UoKVxuICBoaWdobGlnaHRzLnB1c2goLi4uKHJlc3VsdC5JdGVtcyA/PyBbXSkpXG4gIHdoaWxlIChyZXN1bHQuTGFzdEV2YWx1YXRlZEtleSkge1xuICAgIHJlc3VsdCA9IGF3YWl0IGRiQ2xpZW50XG4gICAgICAuc2Nhbih7XG4gICAgICAgIFRhYmxlTmFtZTogdGFibGVOYW1lLFxuICAgICAgICBFeGNsdXNpdmVTdGFydEtleTogcmVzdWx0Lkxhc3RFdmFsdWF0ZWRLZXksXG4gICAgICB9KVxuICAgICAgLnByb21pc2UoKVxuICAgIGhpZ2hsaWdodHMucHVzaCguLi4ocmVzdWx0Lkl0ZW1zID8/IFtdKSlcbiAgfVxuICByZXR1cm4gaGlnaGxpZ2h0cyBhcyBIaWdobGlnaHRbXVxufVxuIiwiLy8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgd3JhcHBlZCBjYWxsYmFja1xuLy8gVGhlIHdyYXBwZXIgZnVuY3Rpb24gc2hvdWxkIGRvIHNvbWUgc3R1ZmYsIGFuZCByZXR1cm4gYVxuLy8gcHJlc3VtYWJseSBkaWZmZXJlbnQgY2FsbGJhY2sgZnVuY3Rpb24uXG4vLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBvd24gcHJvcGVydGllcyBhcmUgcmV0YWluZWQsIHNvIHRoYXRcbi8vIGRlY29yYXRpb25zIGFuZCBzdWNoIGFyZSBub3QgbG9zdCBhbG9uZyB0aGUgd2F5LlxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHlcbmZ1bmN0aW9uIHdyYXBweSAoZm4sIGNiKSB7XG4gIGlmIChmbiAmJiBjYikgcmV0dXJuIHdyYXBweShmbikoY2IpXG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduZWVkIHdyYXBwZXIgZnVuY3Rpb24nKVxuXG4gIE9iamVjdC5rZXlzKGZuKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgd3JhcHBlcltrXSA9IGZuW2tdXG4gIH0pXG5cbiAgcmV0dXJuIHdyYXBwZXJcblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIHZhciByZXQgPSBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgIHZhciBjYiA9IGFyZ3NbYXJncy5sZW5ndGgtMV1cbiAgICBpZiAodHlwZW9mIHJldCA9PT0gJ2Z1bmN0aW9uJyAmJiByZXQgIT09IGNiKSB7XG4gICAgICBPYmplY3Qua2V5cyhjYikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXRba10gPSBjYltrXVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd3Mtc2RrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRuc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cDJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRsc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IHN0b3JlSGlnaGxpZ2h0cyB9IGZyb20gJy4vLi4vcmVwb3NpdG9yaWVzL2hpZ2hsaWdodFJlcG9zaXRvcnknXG5pbXBvcnQgeyBmZXRjaEhpZ2hsaWdodHMgfSBmcm9tICcuLy4uL2NsaWVudHMvcG9ja2V0Q2lsZW50J1xuaW1wb3J0IHsgU2NoZWR1bGVkRXZlbnQgfSBmcm9tICdhd3MtbGFtYmRhJ1xuXG5leHBvcnQgY29uc3QgaW1wb3J0SGlnaGxpZ2h0cyA9IGFzeW5jIChfZXZlbnQ6IFNjaGVkdWxlZEV2ZW50KSA9PiB7XG4gIGNvbnN0IGhpZ2hsaWdodHMgPSBhd2FpdCBmZXRjaEhpZ2hsaWdodHMoKVxuICBhd2FpdCBzdG9yZUhpZ2hsaWdodHMoaGlnaGxpZ2h0cylcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNuYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ3JiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUM1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNwOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNscUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUMvcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDOWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQzlOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBSUE7QUF3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2xDQTtBQUNBO0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==