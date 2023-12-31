# How to install?
## Prerequisite
The local machine where `vesti` is installed should have a `latex` to compile
`vesti` into pdf. I explained the reason why `latex` is needed at the previous page.
However, if you want to install with `tectonic` backend, you don't need to
install `latex` in the local machine.

## General Installation

You can install vesti using `cargo`: a rust package manager.
```console
$ cargo install vesti
```

## Using `tectonic` backend
Since `tectonic` itself requires several dependencies, you must check that all
of the dependencies are installed. This link has a full list of
[dependencies](https://tectonic-typesetting.github.io/book/latest/howto/build-tectonic/external-dep-install.html).

After installing all dependencies, then run this command to install `vesti` with
`tectonic` backend.
```console
$ cargo install --features=tectonic-backend vesti
```
