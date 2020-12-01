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
    amsmath, amsthm, amssymb,
    tikz,
    geometry (a4paper, margin = 0.4\textwidth),
    array
}
```
물론 여러 패키지들을 불러올 때 어느 것을 쓰더라도 상관이 없다. 다만 마지막 방법을 이용하여 모든 패키지들을 한번에 관리하는 것을 추천한다.