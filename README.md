# 🦁 멋쟁이사자처럼 FE 6th - Final 7조 (-7ㅏ-7ㅏ오7ㅏ즈아) 프로젝트 



# 📜 목차
- [🦁 멋쟁이사자처럼 FE 6th - Final 7조 (-7ㅏ-7ㅏ오7ㅏ즈아) 프로젝트](#-멋쟁이사자처럼-fe-6th---final-7조--7ㅏ-7ㅏ오7ㅏ즈아-프로젝트)
- [📜 목차](#-목차)
  - [프로젝트 소개 🚀](#프로젝트-소개-)
  - [배포 주소 🏠](#배포-주소-)
  - [팀원 소개 👨‍👩‍👧‍👦](#팀원-소개-)
  - [역할 분담 🤙](#역할-분담-)
  - [기술 스택 🛠️](#기술-스택-️)
  - [스케폴딩 📑](#스케폴딩-)
  - [기능 설명(시연영상 포함) 📢 🎥](#기능-설명시연영상-포함--)
  - [접근성 🚇](#접근성-)
  - [성능  🏎️](#성능--️)
    - [이미지 압축 라이브러리](#이미지-압축-라이브러리)
  - [프로젝트 회고 👀](#프로젝트-회고-)
  - [실행 방법 ⚙️](#실행-방법-️)
    - [패키지 설치](#패키지-설치)
    - [프로젝트 실행](#프로젝트-실행)

## 프로젝트 소개 🚀

> **제목**: 타잉 클론 프로젝트
> **일정**: 9/4 ~ 9/25
>   ( 9/4 ~ 9/7 :  컨벤션 확립 및 프로젝트 기획(기존 시안에서 추가하는 부분)
> 9/8 ~ 9/21 : 개발
> 9/22 ~ 9/24 : 리팩토링 및 보완 )
> **목표**: 주어진 기한 내에, 각자 할 수 있는 최선을 다하자

## [배포 주소](https://frontendschool6.github.io/react-project-7/) 🏠
⬆





## 팀원 소개 👨‍👩‍👧‍👦

|[김경아](https://github.com/201810902)|[노치현(Lead/Scrum)](https://github.com/JuniorTunarr)|[양시연](https://github.com/Sirori)|[이예나](https://github.com/o0orang)|
|:----:|:----:|:----:|:----:|
|<img src="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/17d2c78a-28c1-4838-809c-80e029569568" width="200">|<img src="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/1a2ff567-f683-4133-86dc-8dc553679cbd" width="200">|<img src="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/47759e1a-556a-4a0b-a0e4-7efcadbbf909" width="200">|<img src="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/88832233-87b0-46ec-b5ba-ba7ddce6a3ad" width="200">|

## 역할 분담 🤙
| 이름   | 페이지(담당기능)                                                    |
| ------ | ------------------------------------------------------------ |
| **김경아** | 로그인(유효성 검증 / 카카오 로그인), 회원가입 페이지, ID찾기 페이지     |
| **노치현** | 검색 페이지(데이터 필터링, 스와이퍼, 전역상태관리), 프로필 관련 페이지(전역상태관리), 멤버십 페이지       |
| **양시연** | 온보딩 페이지, 메인 페이지, 카테고리별 리스트 페이지 |
| **이예나** | 상세 페이지, 내가 찜한 콘텐츠 페이지 |


## 기술 스택 🛠️

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/rome-27272A?style=for-the-badge&logo=rome&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white"> <img src="https://img.shields.io/badge/zustand-593D88?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/pocketbase-FFCA28?style=for-the-badge&logo=pocketbase&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

## 스케폴딩 📑
```
src 📂
├── App.jsx
├── api
│   └── pocketbase.js
├── assets
│   └── react.svg
├── components
│   ├── category
│   │   ├── Category.module.css
│   │   ├── MovieContent.jsx
│   │   ├── MovieNav.jsx
│   │   ├── NavButton.jsx
│   │   ├── ProgramContent.jsx
│   │   └── ProgramNav.jsx
│   ├── common
│   │   ├── Button
│   │   │   ├── Button.module.css
│   │   │   └── Buttons.jsx
│   │   ├── PendingPage.jsx
│   │   ├── Spinner.jsx
│   │   └── SwiperButton.jsx
│   ├── detail
│   │   ├── Contents.module.css
│   │   ├── DetailData.jsx
│   │   ├── EditReview.jsx
│   │   ├── EpisodeToggle.jsx
│   │   ├── RelatedVideo.jsx
│   │   ├── Review.jsx
│   │   ├── ShareLink.jsx
│   │   └── SimilarVideo.jsx
│   ├── editProfile
│   │   ├── ButtonSection.jsx
│   │   ├── EditProfile.module.css
│   │   ├── EditProfileSection.jsx
│   │   └── TitleSection.jsx
│   ├── editProfiles
│   │   ├── ButtonSection.jsx
│   │   ├── EditProfiles.module.css
│   │   ├── ProfileItem.jsx
│   │   ├── ProfileList.jsx
│   │   ├── ProfileListSection.jsx
│   │   └── TitleSection.jsx
│   ├── findid
│   │   ├── ConfirmButton.jsx
│   │   ├── ConfirmButton.module.css
│   │   ├── InputForm.jsx
│   │   ├── InputForm.module.css
│   │   ├── LoginButton.jsx
│   │   └── LoginButton.module.css
│   ├── footer
│   │   └── footerContents.jsx
│   ├── header
│   │   ├── Header.module.css
│   │   ├── HoverBox.jsx
│   │   ├── LogoutPopUp.jsx
│   │   ├── ProfileModal.jsx
│   │   └── headerContents.jsx
│   ├── home
│   │   ├── EventBanner.jsx
│   │   ├── Home.module.css
│   │   ├── MainBanner.jsx
│   │   ├── MainList.jsx
│   │   └── PopularList.jsx
│   ├── membership
│   │   ├── Membership.module.css
│   │   ├── MembershipTable.jsx
│   │   ├── MembershipTitle.jsx
│   │   ├── MembershipType.jsx
│   │   ├── MembershipTypes.jsx
│   │   └── MembershipWarning.jsx
│   ├── onBoarding
│   │   ├── Find.jsx
│   │   ├── JoinMain.jsx
│   │   ├── LoopSlide.jsx
│   │   ├── OnBoarding.module.css
│   │   ├── OnlyTaing.jsx
│   │   ├── QnA.jsx
│   │   ├── Smart.jsx
│   │   ├── StartButton.jsx
│   │   ├── StartNow.jsx
│   │   ├── Together.jsx
│   │   └── Youtube.jsx
│   ├── profile
│   │   ├── Profile.module.css
│   │   ├── ProfileEditButton.jsx
│   │   ├── ProfileItem.jsx
│   │   ├── ProfileList.jsx
│   │   └── ProfileTitle.jsx
│   ├── search
│   │   ├── Search.module.css
│   │   ├── contents
│   │   │   ├── ListSection.jsx
│   │   │   ├── RealtimeSearch.jsx
│   │   │   ├── RecentView.jsx
│   │   │   ├── SearchResult.jsx
│   │   │   ├── SearchSection.jsx
│   │   │   ├── SearchedResultSwiper.jsx
│   │   │   ├── SearchingResultList.jsx
│   │   │   └── SearchingResultSwiper.jsx
│   │   └── util
│   │       ├── CurrentTime.jsx
│   │       └── HighlightedText.jsx
│   ├── signin
│   │   ├── SubmitButton.jsx
│   │   └── SubmitButton.module.css
│   └── snslogin
│       ├── SnsLogin.jsx
│       └── SnsLogin.module.css
├── hooks
│   └── useStorage.js
├── layout
│   ├── Footer.jsx
│   ├── Footer.module.css
│   ├── Header.jsx
│   ├── RootLayout.jsx
│   └── SimpleHeader.jsx
├── main.jsx
├── pages
│   ├── Contents.jsx
│   ├── EditProfile.jsx
│   ├── EditProfiles.jsx
│   ├── FailedFindId.jsx
│   ├── Favorite.jsx
│   ├── FindId.jsx
│   ├── FindPassword.jsx
│   ├── Home.jsx
│   ├── Membership.jsx
│   ├── Movie.jsx
│   ├── NotFound.jsx
│   ├── OnBoarding.jsx
│   ├── Profile.jsx
│   ├── Program.jsx
│   ├── Search.jsx
│   ├── SignIn.jsx
│   ├── SignInList.jsx
│   ├── SignUp.jsx
│   └── SuccessFindId.jsx
├── routes
│   ├── ProtectRoute.jsx
│   └── route.jsx
├── store
│   ├── buttonStore.js
│   ├── idStore.js
│   ├── useAuthStore.js
│   ├── useContentsStore.js
│   ├── useMovieStore.js
│   ├── useProfileStore.js
│   ├── useProgramStore.js
│   └── useSearchStore.js
├── styles
│   └── index.css
└── utils
    ├── debounce.js
    ├── getPbImageURL.js
    ├── keyDown.js
    ├── removeQuotes.js
    └── separateComma.js
```
## 기능 설명(시연영상 포함) 📢 🎥

<table>
  <tr>
    <th> 페이지</th>
    <td>기능 </td>
  </tr>
</table>

**결과물 gif**

<br>

<table>
    <th>검색 페이지</th>
     <td>최근 검색어 / 검색 전,중,후(다른 UI) / 스와이퍼 / 전역상태관리 </td>
      </tr>
</table>

![검색 페이지](https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/2f018d92-d33a-40b0-8686-2fff8d94b9e8)


- 검색 전 / 중 / 후에 따라 조건부 렌더링으로 UI를 달리 하였습니다.
- 검색버튼을 누른 데이터 들은 상태로서 최근 검색어에 유지됩니다. 
-  전역상태관리로서 zustand를 활용했습니다.

<br>
<table>
    <th>프로필 관련 페이지</th>
     <td>전역상태관리</td>
      </tr>
</table>

![프로필 관련 페이지](https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/b02c8109-0026-4908-bd00-bc526517400a)

- 프로필 편집(useranme, avatr) 기능을 구현하였습니다.

## 접근성 🚇


## 성능  🏎️ 
추후 작성(Lighthouse / Performance 탭 등)
### 이미지 압축 라이브러리


![이미지 압축](https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/78a45a4e-f93a-4099-bdf0-7d9de22355d2)

## 프로젝트 회고 👀
<table>
  <tr>
    <th>김경아</th>
    <td> </td>
  </tr>
  <tr>
    <th>노치현</th>
    <td> 좋은 조원 분들을 만나, 무사히 프로젝트를 마칠 수 있었습니다. 개인적인 욕심으로 새로 배운 기술들을 잘 접목시켰던 것 같지 않아서 아쉬움이 들지만, 추후에 리팩토링할 때 도움이 많이 될 것 같습니다. 지난 4개월 간 멋사 프론트엔드 스쿨을 통해 어떤 방향으로 공부해야할 지, 전 어떤 것을 더 배우고 싶은지 알게된 것만 같아, 앞으로가 더욱 기대됩니다.</td>
    </tr>
      <tr>
    <th>양시연</th>
     <td></td>
      </tr>
   <tr>
    <th>이예나</th>
     <td></td>
      </tr>
  </table>
<br>


## 실행 방법 ⚙️
프로젝트 클론 or 압축파일을 다운로드 한 이후
### 패키지 설치
```js
pnpm i
```
### 프로젝트 실행
```js
pnpm dev
```