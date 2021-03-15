# Vesti 언어에 대하여

보통 문서를 만든다고 한다면 적어도 필자는 LaTeX을 필수적으로 사용한다.
또한 적어도 필자는 LaTeX를 엄청 잘 치지는 않지만 그렇다고 엄청 못치는 편은 아니라고 생각한다. 하지만 LaTeX을 쓰면서 느낀점은 문법이 많이 인체공학적이지 않다는 것이다.
다음 코드를 먼저 한번 보도록 해보자.

```latex
\documentclass[twocolumn]{article}
\usepackage{amsmath}
\usepackage{amsthm}
\usepackage{amssymb}
\usepackage{array}
\usepackage{tikz}

\title{Test Document}
\article{John Doe}
\date{\today}

\begin{document}
This is a plain \LaTeX\ document.
\begin{center}
    \begin{minipage}{0.4\textwidth}
        This is a plain \LaTeX\ document.
    \end{minipage}
    \hspace{1pc}
    \begin{minipage}{0.4\textwidth}
        This is a plain \LaTeX\ document.
    \end{minipage}
\end{center}

\end{document}
```

아주 전형적인 코드이다. 평소 LaTeX만 쓴 사람이라면 그냥 자연스럽게 칠 것인데 스니펫(snippet)없이는 환경을 일일히 쓰는 것이 여간 귀찮은 일이 아니다.

`vesti`는 이를 조금 더 쉽게 쓰기 위하여 고안한 문법이다. 대체적으로 LaTeX 문법을 가져왔지만 몇몇 경우를 조금 더 쓰기 쉽게 만들었다. 아래는 `vesti` 코드로 위의 LaTeX 코드와 같은 코드를 적은 것이다.

```
docclass article (twocolumn)
import { amsmath amsthm amssymb array tikz }

\title{Test Document}
\article{John Doe}
\date{\today}

document
This is a plain \LaTeX\ document.
begenv center
    begenv minipage {0.4\textwidth}
        This is a plain \LaTeX\ document.
    endenv
    \hspace{1pc}
    begenv minipage {0.4\textwidth}
        This is a plain \LaTeX\ document.
    endenv
endenv
```

Vesti의 첫 번째 목적은 기존 LaTeX에서의 몇몇 문법을 개량하여 보다 쓰기 쉽게 만들고자 하는 것이며, 두 번째 목적은 macro라는 개념을 넣어 보다 쉽게 문서를 만들 수 있게 하는 것이다.

현재의 vesti는 아직 알파버전에 머물러있다. 기본적인 번역은 되지만 예상치 못한 버그들이 있을 수 있으므로 착오 없길 바란다. 또한 아직은 macro가 존재하지 않는다.
