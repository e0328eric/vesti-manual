# Vesti 설치
## 참고
현재 `vesti`는 github에 저장되어 있다. 따라서 아직은 설치하는 방법이 github에서 직접 가져오는 것 밖에는 없다.
또한 아직 베타버전이므로 따로 실행파일을 만들어 두지는 않았다. 따라서 수동으로 컴파일을 해 주어야 한다.
이 때, `cargo`라는 프로그램을 이용해야 하는데 아직 이 프로그램이 설치되지 않았다면 각 OS에 맞게 설치를 하면 될 것이다.


## Unix 기반 OS (Mac OS or Linux)
### 1. `cargo` 설치
터미널을 열고, 아래와 같이 입력을 하면 된다.
```bash
curl https://sh.rustup.rs -sSf | sh
```
### 2. `vesti` 설치
터미널에 아래의 코드를 입력하면 된다.
```bash
git clone https://github.com/e0328eric/vesti.git
cd vesti
cargo install --path .
```

## Windows
### 1. `cargo` 설치
[여기](https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe)를 눌러서 파일을 받고, 이를 설치하면 된다.
### 2. `vesti` 다운로드
cmd나 powershell에서 다음 코드를 입력하면 된다.
```bash
git clone https://github.com/e0328eric/vesti.git
cd vesti
cargo install --path .
```