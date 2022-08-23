# Alcoholic-frontend
Alcoholic 프론트엔드 레포짓토리입니다.

## Getting Started
run the development server:

```bash
npm run dev
```

run the normal server:

```bash
npm run start
```

## Directory Structure
```
├── api // mockup 서버와 데이터와 관련된 내용들이 포함됩니다.
| ├── mock
| ├── model
| ├── index.ts
| ├── alcHistory.ts
| ├── alcType.ts
| └── alcRecipes.ts
|
├── components // 사용범위에 따라 공통과 각 도메인별 사용되는 컴포넌트
| ├── common
| | ├── ComponentA
| | | ├── ComponentA.module.scss // 해당 컴포넌트의 스타일
| | | ├── ComponentA.tsx // 해당 컴포넌트의 로직
| | | └── index.tsx // import할때 오류 및 변경의 불편함을 줄여줌.
| | ...
| ├── User
| ├── AlcHistory
| ├── AlcType
| └── AlcRecipe
|
├── layouts // 페이지의 layout(화면 비율에 따른 width변화 등)을 지정
|
├── pages // next.js프레임워크를 이용해 보여줄 각 페이지
| ├── User
| ├── AlcHistory
| ├── AlcType
| └── AlcRecipe
|
├── public // 페이지 구성을 위해 사용할 자원들(svg, png, gif, logo 등)
|
├── styles // 각 도메인의 컴포넌트 밖에서 사용되는 style들을 지정
| ├── User
| ├── AlcHistory
| ├── AlcType
| └── AlcRecipe
|
├── types // API 통신과 타입스크립트을 위한 type 및 interface들을 페이지에 종속되지 않도록 분리
| ├── entity.ts
| ├── AlcHistory
| ├── AlcType
| └── AlcRecipe
|
| ...
├──  package.json / package-lock.json / yarn.lock / yarn-error.log // 패키지 설치 관련 설정 파일
├── tsconfig.json // 타입스크립트 관련 설정 파일
├── next.config.js / next-env.d.ts // next.js 관련 설정 파일
├── .prettierrc / .eslintrc.json // lint와 prettier 관련 설정 파일
├── .gitignore // git에 커밋하지 않을 파일 유형 정의
└── README.md // readme
```