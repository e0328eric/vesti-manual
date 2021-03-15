# Raw LaTeX 문법을 입력하기

아무리 vesti가 레이텍 문법을 개선시켰다 하더라도 몇몇 특수한 상황이나
vesti가 아직 그렇게 똑똑하게 파싱을 하지 못해서 잘못된 결과가 나올 수 있다.
지금 이 문서를 쓰고 있는 시점 (2021/03/14)에서는 아직 LaTeX3문법을 호환하지 않아
다음과 같이 써버리면 바로 파싱 에러가 난다.
```latex
\ExplSyntaxOn
\cs_undefine:N \lemma
\cs_undefine:N \proof
\ExplSyntaxOff
```
그 이유는 뒷장에서 다시 이야기를 할 것이지만 vesti에서 레이텍 함수를 입력할 때에 쓸 수 있는 문자에는 `_`는 들어있지 않기 때문이다.

이를 해결하기 위해서 vesti는 `#-`, `-#`, `##-`, `-##`의 네 개의 토큰을 지원한다.
이를 이용하여 문법을 고쳐보면 다음과 같은 두 가지 방법이 존재한다.

- `#-`와 `-#`을 이용하는 방법 (띄어쓰기 여부는 상관이 없다)
```
\ExplSyntaxOn
#- \cs_undefine:N \lemma -#
#-\cs_undefine:N \proof-#
\ExplSyntaxOff
```
- `##-`와 `-##`을 이용하는 방법
```
\ExplSyntaxOn
##-
\cs_undefine:N \lemma
\cs_undefine:N \proof
-##
\ExplSyntaxOff
```

위의 예시에서 볼 수 있듯이 `#-`와 `-#`가 하나의 짝이고, `##-`와 `-##`가 다른 짝이다.
각각의 차이점은 한줄으로만 쓸 수 있다는 것과 여려줄을 통채로 묶을 수 있다는 차이가 있다.

각각으로 둘러쌓여있으면 vesti는 그 안에 있는 토큰들을 **글자 그대로** 출력해준다.
따라서 위의 결과는 아래와 같이 된다.
```
\ExplSyntaxOn
\cs_undefine:N \lemma
\cs_undefine:N \proof
\ExplSyntaxOff
```

이는 다른 방법으로도 쓸 수 있다.
만일 패키지 이름이 `import`인 경우에는 어떻게 하는가?
당연히 아래와 같이 쓰면 안된다.
```
docclass article
import import

document
Hello World!
```
왜냐하면 `import`는 vesti에서는 `document`키워드 앞에서는 키워드이기 때문이다.
따라서 다음과 같이 입력해야 한다.
```
docclass article
import #-import-#

document
Hello World!
```