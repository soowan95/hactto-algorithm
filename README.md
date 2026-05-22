# @hactto/algorithm

`@hactto/algorithm`은 hactto 프로젝트에서 로또 번호 분석, 통계 데이터 추출 및 추천 알고리즘 로직 수행을 전담하는 핵심 패키지입니다.

---

## 주요 기능

* **번호 빈도수 분석**: 역대 당첨 번호 데이터를 기반으로 한 숫자별, 보너스 번호별 출현 빈도 계산
* **패턴 분석**: 홀짝 비율, 총합 구간, 연속 번호(연번) 쌍, 동끝수 분석
* **미출현 번호 추적**: 최근 n회차 동안 출현하지 않은 번호 필터링 및 가중치 계산
* **필터링 알고리즘**: 사용자 정의 조건(제외수, 고정수, 특정 패턴 제한)에 따른 조합 생성 및 필터링

---

## 설치 방법

pnpm, yarn 또는 npm을 통해 패키지를 설치할 수 있습니다.

```bash
# pnpm 사용 시
pnpm add @hactto/algorithm

# yarn 사용 시
yarn add @hactto/algorithm

# npm 사용 시
npm install @hactto/algorithm