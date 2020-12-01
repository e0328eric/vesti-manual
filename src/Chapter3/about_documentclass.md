# Documentclass
LaTeX에서는 `\documentclass`라는 것을 사용하여 지정을 한다. Vesti에서는 이와 비슷한 키워드를 이용하여 클래스를 지정한다. 문법은 아래와 같다.
```
docclass 클래스 (옵션, 옵션, 옵션)
```
모든 클래스가 옵션이 있는 것은 아니다. 이 경우에는 괄호부분을 통채로 없애주면 된다.
따라서 article 클래스로 시작하고 싶으면
```
docclass article
```
을 입력하면 된다. 만일 coprime[^1] 클래스를 아래와 같이
```
\documentclass[item, korean, tikz]{coprime}
```
로 이용하고 싶으면 단순히
```
docclass coprime (item, korean, tikz)
```
라고 쓰면 된다.


[^1]: 필자가 따로 만들어둔 클래스로 github에 가면 볼 수 있다.