<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# umask

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Get/set the process mask.

<section class="intro">

A **mask** is a set of bits, each of which restricts how its corresponding permission is set for newly created files. On POSIX platforms, each file has a set of attributes that control who can read, write, or execute that file. Upon creating a file, file permissions must be set to an initial setting. The process mask restricts those permission settings.

If the mask contains a bit set to `1`, the corresponding initial file permission is disabled. If the mask contains a bit set to `0`, the corresponding permission is left to be determined by the requesting process and the system. The process mask is thus a filter that **removes** permissions as a file is created; i.e., each bit set to a `1` removes its corresponding permission.

In octal representation, a mask is a four digit number comprised as follows (using `0077` as an example):

-   `0`: special permissions (setuid, setgid, sticky bit)
-   `0`: (u)ser/owner permissions
-   `7`: (g)roup permissions
-   `7`: (o)thers/non-group permissions

Octal codes correspond to the following permissions:

-   `0`: read, write, execute
-   `1`: read, write
-   `2`: read, execute
-   `3`: read
-   `4`: write, execute
-   `5`: write
-   `6`: execute
-   `7`: no permissions

If provided fewer than four digits, the mask is left-padded with zeros. Note, however, that **only** the last three digits (i.e., the file permissions digits) of the mask are actually used when the mask is applied (i.e., `mask & 0777`).

Permissions can be represented using the following symbolic form:

```text
u=rwx,g=rwx,o=rwx
```

where

-   **u**: user permissions
-   **g**: group permissions
-   **o**: other/non-group permissions
-   **r**: read
-   **w**: write
-   **x**: execute

When setting permissions using symbolic notation, one may use a _mask expression_ of the form:

```text
[<classes>]<operator><symbols>
```

where `<classes>` may be a combination of

-   **u**: user
-   **g**: group
-   **o**: other/non-group
-   **a**: all

`<symbols>` may be a combination of

-   **r**: read
-   **w**: write
-   **x**: execute
-   **X**: special execute
-   **s**: setuid/gid on execution
-   **t**: sticky

and `<operator>` may be one of

-   **+**: enable
-   **-**: disable
-   **=**: enable specified and disable unspecified permissions

For example,

-   `u-w`: disable user write permissions
-   `u+w`: enable user write permissions
-   `u=w`: enable user write permissions and disable user read and execute

To specify multiple changes, one can specify a comma-separated list of mask expressions. For example,

```text
u+rwx,g-x,o=r
```

would enable user read, write, and execute permissions, disable group execute permissions, enable other read permissions, and disable other write and execute permissions.

The `a` class indicates "all", which is the same as specifying `ugo`. This is the default class if a class is omitted when specifying permissions. For example, `+x` is equivalent to `a+x` which is equivalent to `ugo+x` which is equivalent to `u+x,g+x,o+x` and enables execution for all classes.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
umask = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/process-umask@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var umask = require( 'path/to/vendor/umd/process-umask/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/process-umask@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.umask;
})();
</script>
```

#### umask( \[mask,] \[options] )

Returns the process mask.

```javascript
var mask = umask();
// returns <number>
```

To set the process mask, provide a `mask` argument. When provided a `mask`, the function returns the previous mask value.

```javascript
var mask = umask();
// returns <number>

var prev = umask( 0 );
// returns <number>

var bool = ( prev === mask );
// returns true
```

The `mask` argument may be either an integer value or a `string` representing the mask using symbolic notation.

```javascript
var mask = umask( 'u=rwx,g=rw,o=rw' );
```

The function accepts the following `options`:

-   **symbolic**: `boolean` indicating whether to return the mask in symbolic notation. Default: `false`.

To return the process mask in symbolic notation, set the `symbolic` option to `true`.

```javascript
var opts = {
    'symbolic': true
};

// Get the mask:
var mask = umask( opts );
// e.g., returns 'u=rwx,g=rw,o=rw'

// Set the mask:
mask = umask( 0, opts );
// e.g., returns 'u=rwx,g=rw,o=rw'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   To set the process mask using an octal `string` (e.g., `0777`), use `parseInt` to convert the `string` to an integer value.

    ```javascript
    umask( parseInt( '0777', 8 ) );
    ```

-   See [umask(2)][umask].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/process-umask@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Print the process mask as an integer:
var mask = umask();
console.log( mask.toString() );

// Print the process mask as an octal string:
console.log( lpad( mask.toString(), 4, '0' ) );

// Print the process mask using symbolic notation:
var opts = {
    'symbolic': true
};
console.log( umask( opts ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/process-umask.svg
[npm-url]: https://npmjs.org/package/@stdlib/process-umask

[test-image]: https://github.com/stdlib-js/process-umask/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/process-umask/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/process-umask/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/process-umask?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/process-umask.svg
[dependencies-url]: https://david-dm.org/stdlib-js/process-umask/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/process-umask#cli
[cli-url]: https://github.com/stdlib-js/process-umask/tree/cli
[@stdlib/process-umask]: https://github.com/stdlib-js/process-umask/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/process-umask/tree/deno
[deno-readme]: https://github.com/stdlib-js/process-umask/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/process-umask/tree/umd
[umd-readme]: https://github.com/stdlib-js/process-umask/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/process-umask/tree/esm
[esm-readme]: https://github.com/stdlib-js/process-umask/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/process-umask/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/process-umask/main/LICENSE

[umask]: http://man7.org/linux/man-pages/man2/umask.2.html

</section>

<!-- /.links -->
