

## Svelte is a radical new approach to building user interfaces

- 스벨트는 사용자 인터페이스를 구축하는 근본적인 새로운 접근방식
- React 및 Vue 같은 JavaScript 프레임워크와 유사
- 왜 유사한가? 스벨트는 컴파일러라고 자기를 소개한다. <br>
```(컴파일러는 번역기다. 스벨트는 이런 컴파일 역할을 하여 효율적인 javascript 코드로 변환)``` 
- 스벨트는 빌드시, 모든 코드를 효율적인 javascript 로 변환
```(가상돔을 사용하지 않는다. + react, vue 처럼 npm 의존성(vue, react, react-dom)이 존재하지 않는다)```
- 가상돔과 npm 의존성(코어 라이브러리)을 없애고 런타임(실행환경)에 코드를 해석하지 않는다.


```
"dependencies": {
    "sirv-cli": "^0.4.4"
},
  "devDependencies": {
    "@rollup/plugin-commonjs": "^11.0.0",
    "@rollup/plugin-node-resolve": "^7.0.0",
    "rollup": "^1.20.0",
    "rollup-plugin-livereload": "^1.0.0",
    "rollup-plugin-svelte": "^5.0.3",
    "rollup-plugin-terser": "^5.1.2",
    "svelte": "^3.0.0"
}

- svelte는 기본적으로 컴파일러이기 때문에, 런타임에 svelte 관련 라이브러리를 불러오거나 의존성이 존재하지 않음.

```


## svelte app setting
```
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
npm i
npm run dev
```

- **main.js** 는 Svelte의 시작점
- **.svelte** 확장자가 붙은 파일이 컴포넌트
- **/public** 에는 Svelte가 수행한 컴파일 결과
- **/src** 는 모든 사용자 정의 Svelte 코드를 저장
- **rollup.config.js** rollup 모듈번들러 설정파일


### component format(*.svelte)

```
<script>
	// logic goes here
</script>

<style>
	/* styles go here */
</style>

<!-- markup (zero or more items) goes here -->


export 키워드를 사용하여 변수 선언을 특성 또는 prop 로 표시

on : DOM 이벤트를 수신한다.
on:eventname={handler}
on:eventname|modifiers={handler}

bind : 양방향 바인딩(업데이트된 값을 변경 및 입력된 값도 업데이트)
bind:property={variable}

```

--- 

❤ [생명주기 정리](https://velog.io/@katanazero86/svelte-life-cycle-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0) 
❤ [스토어 정리](https://velog.io/@katanazero86/svelte-store#%EC%9D%B4%EC%A0%9C-%EC%8A%A4%ED%86%A0%EC%96%B4-%EC%83%81%ED%83%9C%EA%B0%9D%EC%B2%B4-%EA%B0%92%EC%9D%84-%EC%B0%B8%EC%A1%B0%ED%95%B4%EB%B3%B4%EC%9E%90)

--- 

*공유 가능한 컴포넌트 템플릿을 찾고 있나요? 여기 참조! --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

[Svelte](https://svelte.dev) 앱을 위한 템플릿 프로젝트 입니다. 템플릿은 https://github.com/sveltejs/template 에 있습니다.
[degit](https://github.com/Rich-Harris/degit) 을 사용하여 템플릿 기반으로 새프로젝트를 만듭니다.

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*[Node.js](https://nodejs.org) Node.js 가 설치되어 있어야합니다.


## Get started

dependencies 를 설치해주세요.

```bash
cd svelte-app
npm install
```

...그리고 앱을 실행시킵니다. [Rollup](https://rollupjs.org):

```bash
npm run dev
```

[localhost:5000](http://localhost:5000) 으로 브라우저에서 접속하세요. 앱이 실행중인 것을 볼 수 있습니다. `src` 경로에서 컴포넌트 파일을 편집하고 저장 한 다음 페이지를 다시 로드하여 변경사항을 확인하세요.

기본적으로 서버는 localhost의 요청에만 응답합니다. 다른 컴퓨터에서 연결을 허용하려면 package.json에서`sirv` 명령을 편집하여`--host 0.0.0.0` 옵션을 포함하십시오.


## Building and running in production mode

앱의 최적화 된 버전을 만들려면

```bash
npm run build
```


`npm run start`로 새로 빌드 된 앱을 실행할 수 있습니다. 이것은 package.json의 '종속성'에 포함 된 [sirv] (https://github.com/lukeed/sirv)를 사용하므로 [Heroku] (https : //와 같은 플랫폼에 배포 할 때 앱이 작동합니다. heroku.com).


## Single-page app mode

기본적으로 sirv는`public`의 파일과 일치하는 요청에만 응답합니다. 이는 정적 파일 서버와의 호환성을 최대화하여 어디서나 앱을 배포 할 수 있도록하기위한 것입니다.

여러 경로로 단일 페이지 앱 (SPA)을 구축하는 경우 sirv는 *any* 경로 요청에 응답 할 수 있어야합니다. package.json에서` "start"`명령을 편집하면됩니다

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

`now` 를 설치하지 않았다면 설치하세요

```bash
npm install -g now
```

그리고, 당신의 프로젝트 폴더내에서 배포하세요

```bash
cd public
now deploy --name my-project
```

다른 방법으로 [Now desktop client] (https://zeit.co/download)를 사용하여 압축이 풀린 프로젝트 폴더를 작업 표시줄 아이콘으로 드래그하십시오.

### With [surge](https://surge.sh/)

`surge` 를 설치하지 않았다면 설치하세요

```bash
npm install -g surge
```

그리고, 당신의 프로젝트 폴더내에서 배포하세요

```bash
npm run build
surge public my-project.surge.sh
```
