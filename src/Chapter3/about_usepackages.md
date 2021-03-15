# Usepackages
LaTeX은 `\usepackage`라는 것으로 패키지들을 넣는다. 하지만 이것으로는 옵션이 있는 패키지들을 한번에 묶을 수 없다.
Vesti에서는 `import`라는 키워드로 패키지를 넣는다. 여기서, 패키지를 넣을 때, 다음 세 가지 문법 모두 허용한다.
```
# 조만간 언급을 하겠다만 vesti에서의 주석은 #으로 시작한다.
# 첫 번째 방법 (패키지의 옵션이 없는 경우)
import amsmath

# 두 번째 방법 (패키지의 옵션이 있는 경우)
import geometry (a4paper, margin = 0.4\textwidth)

# 마지막 방법 (일반인 경우: 패키지들이 많을 때)
import {
    amsmath amsthm amssymb
    tikz
    geometry (a4paper, margin = 0.4\textwidth)
    array
}
```

첫 번째 방법과 두 번째 방법은 예시만 보면 바로 알 수 있을 것 같아 설명을 생략하도록 하겠다.
마지막 방법의 경우, `{`와  `}` 안에다가 패키지 이름들을 적으면 된다.
이름들은 줄바꿈 또는 한칸 띄어쓰기로 구분한다. 예를 들어
```
import { foo bar }
```
의 경우는 아래와 같이 컴파일된다.
```latex
\usepackage{foo}
\usepackage{bar}
```
이는 역시 vesti 코드로는 아래와 같이 입력해도 무방하다.
```
import foo
import bar
```