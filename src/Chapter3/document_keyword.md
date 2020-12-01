# Document 키워드
Vesti에 있는 키워드 중 우리는 앞에서 `docclass`와 `import`키워드를 보았다.
이제 가장 중요한 키워드인 `document` 키워드에 대하여 알아보도록 하자.

LaTeX에서 `\begin{document}`는 문서의 시작을 알리는 부분이다. 저 명령어를 기준으로 윗부분은 보통 문서의 설정들을 넣고, 아래 부분은 실제 문서 내용을 넣는다. 아래 예시로 더 쉽게 알 수 있다.
```latex
\documentclass{article}

% 가장 중요한 부분으로 이 키워드가 없으면 LaTeX은 에러를 뱉는다.
% 거의 대부분 (그 몇몇 예외는 신경쓰지 않아도 된다.)
\begin{document}
This is a \LaTeX.
\end{document}
```
Vesti에서 `document`가 바로 LaTeX에서의 `\begin{document}`와 동일하다. Vesti의 경우에는 `document`키워드 윗쪽으로는 문서의 설정들을 넣고, 아래로는 실제 문서 내용을 집어 넣도록 되어있다. 이 때, `docclass`, `import`, `document`키워드를 `document`키워드 아래에 적게 될 경우, 키워드로 작동하지 않고, 단순히 그 단어들이 된다.

예를 들어 아래의 vesti 코드
```
docclass article
document
docclass article
import {
    amsmath,
    tikz
}
```
는 LaTeX 코드
```
\documentclass{article}
\begin{doccument}
docclass article
import {
    amsmath,
    tikz
}

\end{document}
```
와 같다.