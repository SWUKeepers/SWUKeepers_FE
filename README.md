# 사이버 언어폭력 탐지 및 증거 수집 시스템

<center>

<!-- [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSWUKeepers%2FSWUKeepers_FE&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com) -->
</center>

---

### 사이버 언어폭력 탐지 및 증거 수집 시스템 1.0

> 서울여자대학교 정보보호학과 2024년 PBL SWUKeepers 기획 및 개발 기획 및 개발
> 기간 24.3 ~ 24.11

### SWUKeepers

|프로필|이름|역할|담당|
|:---:|:---:|:---:|---|
| <img src="https://avatars.githubusercontent.com/u/119282388?v=4" width="48px" height="48px" /> | [김민지](https://github.com/bobopudding) | 팀장 | 인공지능 학습 및 사이버불링 판단 알고리즘, 백엔드 개발 |
| <img src="https://avatars.githubusercontent.com/u/91731260?v=4" width="48px" height="48px" /> | [나현](https://github.com/SaltySalt77) | 팀원 | 인공지능 학습 및 초기 백엔드, 프론트엔드 전반 개발     |
| <img src="https://avatars.githubusercontent.com/u/119282225?v=4" width="48px" height="48px" /> |[이도은](https://github.com/doeunll)| 팀원 | 인공지능 학습 및 백엔드 개발          |
| <img src="https://avatars.githubusercontent.com/u/109707358?v=4" width="48px" height="48px" /> |[임예진](https://github.com/yejiiiin)| 팀원 | 인공지능 학습 및 백엔드 개발          |
| <img src="https://avatars.githubusercontent.com/u/183968238?v=4" width="48px" height="48px" /> |[한도아](https://github.com/DDOAAA)| 팀원 | 인공지능 학습 및 백엔드 개발          |

## 프로젝트 소개

### 배경 및 필요성

디지털 소통의 확산과 모바일 메신저 사용의 일상화로 인해 온라인 대화가 급증하면서, 사이버 언어폭력 발생 빈도가 높아지고 있습니다. 특히 청소년을 포함한 사용자들 사이에서 사이버 언어폭력은 피해자의 심리적, 정신적 건강에 심각한악영향을 미칠 수 있으며, 이는 우울증, 불안, 심지어 자살 시도와 같은 심각한결과로 이어질 수 있습니다.  이러한 문제를 해결하기 위해, 사이버 불링을 효과적으로 탐지하고 피해자가 증거를간편하게 확보할 수 있는 시스템의 필요성이 강조되고 있습니다.

---

### 프로젝트 개요

본 프로젝트는 사이버 불링 문제를 해결하고 피해자 보호와 가해자 검거를 지원하는 실질적인 솔루션을 제공하기 위해 기획되었습니다.   이를 위해 Django 기반 웹 어플리케이션으로 구현되었으며, 인공지능 모델과의 원활한 통합을 목표로 설계되었습니다. 

---

### 주요 기능

#### 1. **카카오톡 대화 분석**

- 사용자는 카카오톡 대화 내보내기 기능을 통해 생성된 `txt` 파일을 업로드할 수 있습니다.
- 업로드된 파일은 **BERT 기반 인공지능 모델**이 분석하여, 해당 대화가 사이버불링에 해당하는지 여부를 판별합니다.

#### 2. **판별 결과 제공**

- 분석 결과는 웹 어플리케이션의 프론트엔드에 표시됩니다.
- 사이버 불링이 탐지된 경우:
  - 대화 파일의 고유 해시값을 포함한 **PDF 파일**을 제공하여, 피해자가 증거로 활용할 수 있도록 지원합니다.
- 사이버 불링이 아닌 경우에는 PDF 파일이 제공되지 않습니다.

#### 3. **정밀한 대화 분석**

- 단순 욕설 탐지에 그치지 않고, **문맥과 대화 흐름을 종합적으로 분석**하여 악의적 의도의 언어를 판별합니다.
- 이를 통해 친근한 대화 속 욕설과 악의적 사이버 불링을 구별할 수 있습니다.

#### 4. **데이터 무결성 보장**

- 제공된 채팅 파일의 **고유 해시값**을 통해 데이터의 무결성과 신뢰성을 보장합니다.

---

### 프로젝트 차별성

#### **문맥 기반 분석**

- 기존의 단순 욕설 탐지 시스템과 달리, 대화의 문맥과 흐름을 종합적으로 분석하여 더 정밀한 탐지가 가능합니다.

#### **사용자 편의성 강화**

- 카카오톡 내보내기 기능과 연동하여 손쉽게 증거를 확보할 수 있도록 지원합니다.
#### **실질적 기여**

- 사이버 불링 피해자가 보다 효과적으로 상황에 대응할 수 있도록 돕고, 사회적 문제 해결에 기여하고자 합니다.

---

### 프로젝트 목표

본 프로젝트는 사용자와 사회 모두에 실질적인 가치를 제공하는 데 초점을 맞추고 있으며, 앞으로도 기능 개선과 확장을 통해 더 나은 솔루션을 제공할 계획입니다.

### 시작 가이드

#### 요구 사항

웹 앱 빌드를 위해서는 다음을 필요로 합니다.

- Node.js >= 22.0.0
- Npm >= 10.6.0
- python = 3.8.\*
- Django >= 4.2.16
- djangorestframework >= 3.15.2
- django-cors-headers >= 4.4.0
- tensorflow >= 2.17.1
- tensorflow-addons >= 0.17.0
- torch >= 1.11.0
- transformers >= 4.8.2
- sentencepiece >= 0.1.96
- pandas >= 1.2.4
- requests >= 2.32.3
- numpy >= 1.19.5
- python-decouple >= 3.8

#### 설치 및 실행 방법

##### 프론트엔드

```shell
$ git clone git@github.com:SWUKeepers/SWUKeepers_FE.git
$ cd SWUKeepers_FE
$ npm install
$ npm run dev
```

##### 백엔드

```shell
$ git clone git@github.com:SWUKeepers/SWUKeepers_BE.git
$ cd SWUKeepers_BE
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver
```

#### 빌드 방법

```shell
$ npm run build
```

### 기술 스택

#### 환경

<div>
<img display=inline-block src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img display=inline-block src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

#### 프론트엔드

<div>
<img display=inline-block src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img display=inline-block src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img display=inline-block src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img display=inline-block src="https://img.shields.io/badge/typescript-2D79C7?style=for-the-badge&logo=typescript&logoColor=white"> 
<img display=inline-block src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white"> 
<img display=inline-block src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"> 
</div>

#### 백엔드

<div>
<img display=inline-block src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> 
<img display=inline-block src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"> 
<img display=inline-block src="https://img.shields.io/badge/huggingface-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black">

</div>

#### 소통

<div>
<img display=inline-block src="https://img.shields.io/badge/notion-F6F5F4?style=for-the-badge&logo=notion&logoColor=black">
<img display=inline-block src="https://img.shields.io/badge/discord-5462EB?style=for-the-badge&logo=discord&logoColor=white">

</div>
