Object.assign(window.search, {"doc_urls":["chapter_1.html#vesti-언어에-대하여","chapter_2.html#vesti-설치","chapter_2.html#참고","chapter_2.html#unix-기반-os-mac-os-or-linux","chapter_2.html#1-cargo-설치","chapter_2.html#2-vesti-설치","chapter_2.html#windows","chapter_2.html#1-cargo-설치","chapter_2.html#2-vesti-다운로드","Chapter3/chapter_3.html#vesti-문법","Chapter3/about_documentclass.html#documentclass","Chapter3/about_usepackages.html#usepackages","Chapter3/about_comment.html#코맨트에-대하여","Chapter3/document_keyword.html#document-키워드"],"index":{"documentStore":{"docInfo":{"0":{"body":82,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":1,"title":1},"10":{"body":18,"breadcrumbs":2,"title":1},"11":{"body":22,"breadcrumbs":2,"title":1},"12":{"body":4,"breadcrumbs":1,"title":0},"13":{"body":44,"breadcrumbs":2,"title":1},"2":{"body":5,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":5,"title":5},"4":{"body":4,"breadcrumbs":2,"title":2},"5":{"body":8,"breadcrumbs":2,"title":2},"6":{"body":0,"breadcrumbs":1,"title":1},"7":{"body":0,"breadcrumbs":2,"title":2},"8":{"body":10,"breadcrumbs":2,"title":2},"9":{"body":2,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"보통 문서를 만든다고 한다면 적어도 필자는 LaTeX을 필수적으로 사용한다. 또한 적어도 필자는 LaTeX를 엄청 잘 치지는 않지만 그렇다고 엄청 못치는 편은 아니라고 생각한다. 하지만 LaTeX을 쓰면서 느낀점은 문법이 많이 인체공학적이지 않다는 것이다. 다음 코드를 먼저 한번 보도록 해보자. \\documentclass[twocolumn]{article}\n\\usepackage{amsmath, amsthm, amssymb}\n\\usepackage{array}\n\\usepackage{tikz} \\title{Test document}\n\\article{John Doe}\n\\date{\\today} \\begin{document}\nThis is a plain \\LaTeX\\ document.\n\\begin{center} \\begin{minipage}{0.4\\textwidth} This is a plain \\LaTeX\\ document. \\end{minipage} \\hspace{1pc} \\begin{minipage}{0.4\\textwidth} This is a plain \\LaTeX\\ document. \\end{minipage}\n\\end{center}\n\\end{document} 아주 전형적인 코드이다. 평소 LaTeX만 쓴 사람이라면 그냥 자연스럽게 칠 것인데 스니펫(snippet)없이는 환경을 일일히 쓰는 것이 여간 귀찮은 일이 아니다. vesti는 이를 조금 더 쉽게 쓰기 위하여 고안한 문법이다. 대체적으로 LaTeX 문법을 가져왔지만 몇몇 경우를 조금 더 쓰기 쉽게 만들었다. 아래는 vesti 코드로 위의 LaTeX 코드와 같은 코드를 적은 것이다. docclass article (twocolumn)\nimport { amsmath, amsthm, amssymb, array, tikz } #+#\n\\title{Test Document}\n\\article{John Doe}\n\\date{\\today}\n#+# document\nThis is a plain \\LaTeX\\ document.\nbegenv center begenv minipage {0.4\\textwidth} This is a plain \\LaTeX\\ document. endenv \\hspace{1pc} begenv minipage {0.4\\textwidth} This is a plain \\LaTeX\\ document. endenv\nendenv Vesti의 첫 번째 목적은 기존 LaTeX에서의 몇몇 문법을 개량하여 보다 쓰기 쉽게 만들고자 하는 것이며, 두 번째 목적은 macro라는 개념을 넣어 보다 쉽게 문서를 만들 수 있게 하는 것이다. 현재의 vesti는 아직 베타버전에 머물러있다. 기본적인 번역은 되지만 예상치 못한 버그들이 있을 수 있으므로 착오 없길 바란다. 또한 아직은 macro가 없다. 따라서 LaTeX command나 environment를 만들고자 한다면 여기 를 보길 바란다.","breadcrumbs":"Vesti 언어에 대하여","id":"0","title":"Vesti 언어에 대하여"},"1":{"body":"","breadcrumbs":"Vesti 설치","id":"1","title":"Vesti 설치"},"10":{"body":"LaTeX에서는 \\documentclass라는 것을 사용하여 지정을 한다. Vesti에서는 이와 비슷한 키워드를 이용하여 클래스를 지정한다. 문법은 아래와 같다. docclass 클래스 (옵션, 옵션, 옵션) 모든 클래스가 옵션이 있는 것은 아니다. 이 경우에는 괄호부분을 통채로 없애주면 된다. 따라서 article 클래스로 시작하고 싶으면 docclass article 을 입력하면 된다. 만일 coprime [1] 클래스를 아래와 같이 \\documentclass[item, korean, tikz]{coprime} 로 이용하고 싶으면 단순히 docclass coprime (item, korean, tikz) 라고 쓰면 된다. 필자가 따로 만들어둔 클래스로 github에 가면 볼 수 있다.","breadcrumbs":"Vesti 문법 » Documentclass","id":"10","title":"Documentclass"},"11":{"body":"LaTeX은 \\usepackage라는 것으로 패키지들을 넣는다. 하지만 이것으로는 옵션이 있는 패키지들을 한번에 묶을 수 없다. Vesti에서는 import라는 키워드로 패키지를 넣는다. 여기서, 패키지를 넣을 때, 다음 세 가지 문법 모두 허용한다. # 조만간 언급을 하겠다만 vesti에서의 주석은 #으로 시작한다.\n# 첫 번째 방법 (패키지의 옵션이 없는 경우)\nimport amsmath # 두 번째 방법 (패키지의 옵션이 있는 경우)\nimport geometry (a4paper, margin = 0.4\\textwidth) # 마지막 방법 (일반인 경우: 패키지들이 많을 때)\nimport { amsmath, amsthm, amssymb, tikz, geometry (a4paper, margin = 0.4\\textwidth), array\n} 물론 여러 패키지들을 불러올 때 어느 것을 쓰더라도 상관이 없다. 다만 마지막 방법을 이용하여 모든 패키지들을 한번에 관리하는 것을 추천한다.","breadcrumbs":"Vesti 문법 » Usepackages","id":"11","title":"Usepackages"},"12":{"body":"Vesti언어에는 크게 두 종류의 코맨트가 있다. 보통 코맨트는 #을 이용한다. 다음과 같이 말이다. # 이 다음부터는 실제 LaTeX 코드에는 들어가지 않는다.\n하지만 이 부분은 실제로 LaTeX 코드에 들어간다.\n# 다시 이 부분은 들어가지 않는다. 만일 여러줄을 코맨트하고 싶을 때에는 물론 일일히 앞에 #을 붙여도 되지만, 아래와 같이 입력을 해도 된다. #*\n위처럼 넣게 되면 이 다음부터는 쭉\n실제 LaTeX 코드에\n반영이 되지\n않는다.\n*#\n이제 이 부분은 실제 코드에 들어간다. 만일 실제 #을 출력하고 싶다면 \\#을 넣으면 된다.","breadcrumbs":"Vesti 문법 » 코맨트에 대하여","id":"12","title":"코맨트에 대하여"},"13":{"body":"Vesti에 있는 키워드 중 우리는 앞에서 docclass와 import키워드를 보았다. 이제 가장 중요한 키워드인 document 키워드에 대하여 알아보도록 하자. LaTeX에서 \\begin{document}는 문서의 시작을 알리는 부분이다. 저 명령어를 기준으로 윗부분은 보통 문서의 설정들을 넣고, 아래 부분은 실제 문서 내용을 넣는다. 아래 예시로 더 쉽게 알 수 있다. \\documentclass{article} % 가장 중요한 부분으로 이 키워드가 없으면 LaTeX은 에러를 뱉는다.\n% 거의 대부분 (그 몇몇 예외는 신경쓰지 않아도 된다.)\n\\begin{document}\nThis is a \\LaTeX.\n\\end{document} Vesti에서 document가 바로 LaTeX에서의 \\begin{document}와 동일하다. Vesti의 경우에는 document키워드 윗쪽으로는 문서의 설정들을 넣고, 아래로는 실제 문서 내용을 집어 넣도록 되어있다. 이 때, docclass, import, document키워드를 document키워드 아래에 적게 될 경우, 키워드로 작동하지 않고, 단순히 그 단어들이 된다. 예를 들어 아래의 vesti 코드 docclass article\ndocument\ndocclass article\nimport { amsmath, tikz\n} 는 LaTeX 코드 \\documentclass{article}\n\\begin{doccument}\ndocclass article\nimport { amsmath, tikz\n} \\end{document} 와 같다. 여기서 알 수 있는 한가지 더는 바로 vesti는 따로 \\end{document}가 없다는 점이다. 하지만 컴파일된 LaTeX 코드에는 올바르게 \\end{document}가 들어있다는 것이다. 이러한 문법 덕분에 코드를 써내려갈 적에 맨 밑에 있던 걸리적거리는 \\end{document}를 보지 않아도 된다는 것이다.","breadcrumbs":"Vesti 문법 » Document 키워드","id":"13","title":"Document 키워드"},"2":{"body":"현재 vesti는 github에 저장되어 있다. 따라서 아직은 설치하는 방법이 github에서 직접 가져오는 것 밖에는 없다. 또한 아직 베타버전이므로 따로 실행파일을 만들어 두지는 않았다. 따라서 수동으로 컴파일을 해 주어야 한다. 이 때, cargo라는 프로그램을 이용해야 하는데 아직 이 프로그램이 설치되지 않았다면 각 OS에 맞게 설치를 하면 될 것이다.","breadcrumbs":"참고","id":"2","title":"참고"},"3":{"body":"","breadcrumbs":"Unix 기반 OS (Mac OS or Linux)","id":"3","title":"Unix 기반 OS (Mac OS or Linux)"},"4":{"body":"터미널을 열고, 아래와 같이 입력을 하면 된다. curl https://sh.rustup.rs -sSf | sh","breadcrumbs":"1. cargo 설치","id":"4","title":"1. cargo 설치"},"5":{"body":"터미널에 아래의 코드를 입력하면 된다. git clone https://github.com/e0328eric/vesti.git\ncd vesti\ncargo install --path .","breadcrumbs":"2. vesti 설치","id":"5","title":"2. vesti 설치"},"6":{"body":"","breadcrumbs":"Windows","id":"6","title":"Windows"},"7":{"body":"여기 를 눌러서 파일을 받고, 이를 설치하면 된다.","breadcrumbs":"1. cargo 설치","id":"7","title":"1. cargo 설치"},"8":{"body":"cmd나 powershell에서 다음 코드를 입력하면 된다. git clone https://github.com/e0328eric/vesti.git\ncd vesti\ncargo install --path .","breadcrumbs":"2. vesti 다운로드","id":"8","title":"2. vesti 다운로드"},"9":{"body":"이번 장에서는 vesti 언어의 문법들을 모두 볼 것이다. 기본적으로는 LaTeX의 문법과 매우 유사하기 때문에 어렵지 않게 습득을 할 수 있을 것이다.","breadcrumbs":"Vesti 문법","id":"9","title":"Vesti 문법"}},"length":14,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"4":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"df":3,"docs":{"10":{"tf":1.0},"4":{"tf":1.0},"7":{"tf":1.0}}},"2":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}},"a":{"4":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":3,"docs":{"0":{"tf":1.0},"11":{"tf":1.4142135623730951},"13":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"b":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"11":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"10":{"tf":1.4142135623730951},"13":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"{":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}},"df":0,"docs":{}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"{":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{},"u":{"df":2,"docs":{"0":{"tf":1.0},"13":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"}":{"df":0,"docs":{},"{":{"0":{".":{"4":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":5,"docs":{"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}}}},"d":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}}}},"m":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"c":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":3,"docs":{"0":{"tf":1.0},"10":{"tf":1.7320508075688772},"13":{"tf":2.23606797749979}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"]":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":1,"docs":{"10":{"tf":1.4142135623730951}},"{":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":2,"docs":{"0":{"tf":3.0},"13":{"tf":2.6457513110645907}}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"{":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"u":{"df":2,"docs":{"0":{"tf":1.0},"13":{"tf":2.23606797749979}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}},"h":{"df":0,"docs":{},"u":{"b":{"df":2,"docs":{"10":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"{":{"1":{"df":0,"docs":{},"p":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"e":{"0":{"3":{"2":{"8":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"/":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"h":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.0},"11":{"tf":2.0},"13":{"tf":2.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":6,"docs":{"0":{"tf":3.7416573867739413},"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.7320508075688772},"13":{"tf":2.449489742783178},"9":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"m":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":2.449489742783178}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"z":{"]":{"df":0,"docs":{},"{":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":4,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"13":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"{":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}}},"w":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"11":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":10,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.4142135623730951},"12":{"tf":1.0},"13":{"tf":2.23606797749979},"2":{"tf":1.0},"5":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"breadcrumbs":{"root":{"0":{".":{"4":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"df":3,"docs":{"10":{"tf":1.0},"4":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}},"2":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}}},"a":{"4":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":3,"docs":{"0":{"tf":1.0},"11":{"tf":1.4142135623730951},"13":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"b":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"11":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"10":{"tf":1.4142135623730951},"13":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"{":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}},"df":0,"docs":{}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"{":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{},"u":{"df":2,"docs":{"0":{"tf":1.0},"13":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"}":{"df":0,"docs":{},"{":{"0":{".":{"4":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":5,"docs":{"2":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}},"d":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}}}},"m":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"c":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":3,"docs":{"0":{"tf":1.0},"10":{"tf":1.7320508075688772},"13":{"tf":2.23606797749979}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"]":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":1,"docs":{"10":{"tf":1.7320508075688772}},"{":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":2,"docs":{"0":{"tf":3.0},"13":{"tf":2.8284271247461903}}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"{":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"u":{"df":2,"docs":{"0":{"tf":1.0},"13":{"tf":2.23606797749979}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}},"h":{"df":0,"docs":{},"u":{"b":{"df":2,"docs":{"10":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"{":{"1":{"df":0,"docs":{},"p":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"e":{"0":{"3":{"2":{"8":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"/":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"h":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.0},"11":{"tf":2.0},"13":{"tf":2.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":6,"docs":{"0":{"tf":3.7416573867739413},"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.7320508075688772},"13":{"tf":2.449489742783178},"9":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"m":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":2.0}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":2.449489742783178}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"z":{"]":{"df":0,"docs":{},"{":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":4,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"13":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"{":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}}},"w":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"11":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":10,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":1.4142135623730951},"10":{"tf":1.4142135623730951},"11":{"tf":1.7320508075688772},"12":{"tf":1.4142135623730951},"13":{"tf":2.449489742783178},"2":{"tf":1.0},"5":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}},"title":{"root":{"1":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.0}}},"2":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"13":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"m":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":5,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"5":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});