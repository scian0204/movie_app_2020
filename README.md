# 남궁찬 201930107
## Movie_App_2020

React Js fundmentals Course 2020

## 11월 20일
>1. Link props
>2. history redirect

## 11월 13일
>1. `Router`란 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러주는 역할을 한다.
>2. `Router`를 사용하려면 터미널에 `npm install react-router-dom`을 입력하고 `import {HashRouter, Route} from 'react-router-dom'`으로 `import`를 하여 `<HashRouter> <Route path="URL" component={컴포넌트 명} /> </HashRouter>`의 형식으로 사용한다.
>3. `Link`는 페이지 전체 새로고침이 아닌 특정부분만 새로고침을 해주는 역할을 한다. 
>4. `Link`를 사용하려면 `import {Link} from 'react-router-dom'`으로 `import`를 하여 `<Link to="URL" ></Link>`의 형태로 사용한다.

## 11월 6일
>1. 키워드가 겹치기 때문에 `JSX` `html`태그 속성중 `class`를 `className`로 바꿔서 쓴다.
>2. `for`속성도 `htmlFor`로 바꿔서 쓴다.
>3. `PropTypes`에서 배열을 지정하기 위해서는 `PropTypes.ArrayOf(PropTypes.자료형)`을 쓴다.

## 10월 30일
>1. 
>2. 
>3. 
>4. 
>5. 
>6. 

## 10월 16일
>1. `react`의 `lifeCycle`은 `constructor` -> `render` -> `componentDidMount`순으로 호출된다.
>2. `componentDidUpdate`는 업데이트 처리가 되면 호출된다.
>3. `componentWillUnmount`는 컴포넌트가 제거되면 호출된다.
>4. `axios`는 api 연동을 위한 라이브러리다.
>5. `axios.get(URL)` 메서드를 통해 api를 가져온다.

## 10월 7월
>1. `proptypes`란 타입 정의를 위한 라이브러리다.
>2. `proptypes`를 사용하려면 설치 및 `import`를 해줘야 한다.
>3. `proptypes`는 `컴포넌트이름.propTypes = {이름 : PropTypes.타입}`형태로 사용한다.
>4. 컴포넌트를 클래스형태로 사용하려면 `React.Component`를 상속받아야 한다.
>5. `render()` 메서드를 만들어 `JSX`를 `return`해줘야 한다.
>6. 컴포넌트 내에서 관리하는 변수를 만드려면 `state = {변수명 : 값}`형태로 객체를 생성한다.
>6. `state`의 사용방법은 `this.state.변수명`이며 값을 바꾸는 방법은 `this.setState({변수명: 바꿀값})`이다.

## 09월 25일
>1. 배열의 map함수를 이용하여 데이터 전달.
>2. 객체에 id값 추가하여 오류 수정
>3. img태그에 alt속성 추가하여 오류 수정
>4. 이미지 경로는 src안에만 넣어야 된다.
>5. 로컬 경로에 있는 이미지를 사용하려면 require()함수를 쓰거나, import를 해줘야 된다.

## 09월 18일
>1. 컴포넌트가 무엇인지 알아보고 JSX를 학습.
>2. JSX는 단지 HTML과 JS를 조합한 문법이다.
>3. JSX를 이용해서 컴포넌트를 작성했다.
>4. 컴포넌트의 이름은 대문자로 시작해야 한다.
>5. 컴포넌트에 데이터를 전달할 때는 props를 사용한다.
>6. .연산자를 대신해서 ES6의 구조 분해 할당을 사용할 수 있다.
>7. React는 다수의 컴포넌트로 이루어지나, 최종적으로는 하나의 컴포넌트만 사용한다.
* 언제까지? 9월 23일까지

## 09월 11일
>1. Dothome에 index File 수정하기
>2. readme.md 수정 후 Github에 push 하기
* 언제까지? 9월 16일까지
