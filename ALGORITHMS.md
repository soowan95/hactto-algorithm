# hactto-algorithm 로또 번호 생성 알고리즘 정리

`@hactto/algorithm` 패키지에서 제공하는 로또 번호 분석 및 추천 알고리즘의 한글 이름, 상세 설명, 복잡도 및 소스 코드 경로를 정리한 문서입니다.

알고리즘은 크게 세 가지 카테고리(**가중치 기반**, **출현 빈도 기반**, **균형/합계 기반**)로 분류됩니다.

---

## 1. 가중치 기반 알고리즘 (Weights-based Algorithms)

가중치 기반 알고리즘은 사용자가 제공한 각 번호 위치별(1번째 ~ 6번째 자리) 가중치를 기반으로 번호를 선정하거나 전체 가중치를 합산하여 판단합니다.

| 식별자 (Enum Value) | 한글 이름 | 설명 | 복잡도 | 소스 코드 파일 |
| :--- | :--- | :--- | :---: | :--- |
| `MIN_COUNT_WEIGHTS` | 위치별 최소 출현 빈도 가중치 | 역대 당첨 번호의 각 자리(1~6번째)별 출현 빈도를 분석하여, 가중치가 높은 자리부터 해당 위치에서 **가장 적게 출현하고 가장 오랫동안 나오지 않은** 번호를 순차적으로 선택합니다. (중복 방지 로직 포함) | `1` | [min-count-weights.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/weights/min-count-weights.ts) |
| `TOTAL_MIN_COUNT_WEIGHTS` | 전체 최소 출현 빈도 가중치 | 역대 전체 당첨 데이터에서 각 번호의 출현 빈도에 위치별 가중치를 부여한 점수(Score)를 누적 계산한 뒤, 점수가 **가장 낮은(가장 적게 출현한) 상위 6개** 번호를 선택합니다. | `1` | [total-min-count-weights.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/weights/total-min-count-weights.ts) |
| `RECENT_MIN_COUNT_WEIGHTS` | 최근 위치별 최소 출현 빈도 가중치 | `MIN_COUNT_WEIGHTS`와 동일한 방식으로 동작하되, 전체 회차가 아닌 **최근 50회차**의 당첨 데이터만을 분석하여 최소 출현 번호를 찾아냅니다. | `1` | [recent-min-count-weights.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/weights/recent-min-count-weights.ts) |
| `MAX_COUNT_WEIGHTS` | 위치별 최대 출현 빈도 가중치 | 역대 당첨 번호의 각 자리별 출현 빈도를 분석하여, 가중치가 높은 자리부터 해당 위치에서 **가장 많이 출현하고 가장 최근에 출현한** 번호를 순차적으로 선택합니다. | `1` | [max-count-weights.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/weights/max-count-weights.ts) |
| `TOTAL_MAX_COUNT_WEIGHTS` | 전체 최대 출현 빈도 가중치 | 역대 전체 당첨 데이터에서 각 번호의 출현 빈도에 위치별 가중치를 고려한 점수(Score)를 누적 계산한 뒤, 점수가 **가장 높은(가장 많이 출현한) 상위 6개** 번호를 선택합니다. | `1` | [total-max-count-weights.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/weights/total-max-count-weights.ts) |
| `RECENT_MAX_COUNT_WEIGHTS` | 최근 위치별 최대 출현 빈도 가중치 | `MAX_COUNT_WEIGHTS`와 동일한 방식으로 동작하되, 전체 회차가 아닌 **최근 50회차**의 당첨 데이터만을 분석하여 최대 출현 번호를 찾아냅니다. | `1` | [recent-max-count-weights.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/weights/recent-max-count-weights.ts) |

---

## 2. 출현 빈도 기반 알고리즘 (Frequency-based Algorithms)

출현 빈도 기반 알고리즘은 당첨 이력에서 동시에 등장한 번호들의 조합(2개 쌍 또는 3개 조합) 빈도를 계산하여, 동반 출현 가능성이 높은 번호 그룹을 추천합니다.

| 식별자 (Enum Value) | 한글 이름 | 설명 | 복잡도 | 소스 코드 파일 |
| :--- | :--- | :--- | :---: | :--- |
| `PAIR_FREQUENCY` | 2개 번호 쌍 조합 빈도 | 역대 당첨 번호 데이터에서 동시에 출현한 모든 2개 번호 쌍(Pair)의 빈도를 집계합니다. 가장 많이 출현한 쌍 조합부터 순차적으로 채택하여 6개의 유니크한 번호 조합을 완성합니다. (동일 빈도 발생 시 랜덤 정렬) | `2` | [pair-frequency.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/frequency/pair-frequency.ts) |
| `RECENT_PAIR_FREQUENCY` | 최근 2개 번호 쌍 조합 빈도 | `PAIR_FREQUENCY`와 동일한 메커니즘이나, 분석 대상 데이터를 **최근 50회차** 당첨 이력으로 제한하여 트렌디한 번호 쌍 조합을 찾습니다. | `2` | [recent-pair-frequency.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/frequency/recent-pair-frequency.ts) |
| `TRIPLET_FREQUENCY` | 3개 번호 쌍 조합 빈도 | 역대 당첨 번호 데이터에서 동시에 출현한 모든 3개 번호 조합(Triplet)의 빈도를 집계합니다. 가장 출현 빈도가 높은 조합부터 순서대로 번호를 수집하여 6개의 번호 세트를 만듭니다. | `3` | [triplet-frequency.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/frequency/triplet-frequency.ts) |
| `RECENT_TRIPLET_FREQUENCY` | 최근 3개 번호 쌍 조합 빈도 | `TRIPLET_FREQUENCY`와 동일한 메커니즘이나, 분석 대상 데이터를 **최근 50회차** 당첨 이력으로 제한하여 최근 유행하는 3개 번호 조합을 찾습니다. | `3` | [recent-triplet-frequency.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/frequency/recent-triplet-frequency.ts) |

---

## 3. 균형/합계 기반 알고리즘 (Balance-based Algorithms)

균형 및 합계 기반 알고리즘은 역사적인 당첨 번호들의 평균적인 총합 분포와 홀짝 비율을 고려하여 평균 범위에 안착하는 균형 잡힌 무작위 조합을 필터링 및 추천합니다.

| 식별자 (Enum Value) | 한글 이름 | 설명 | 복잡도 | 소스 코드 파일 |
| :--- | :--- | :--- | :---: | :--- |
| `SUM_BALANCE` | 총합 균형 | 역대 모든 당첨 번호의 합계 평균값을 구한 뒤, 무작위로 6개 숫자를 추출하여 그 합이 **평균값 대비 ±25 범위 내**에 속할 때까지 재시도(최대 1,000회)하여 검증된 합계의 조합을 생성합니다. | `2` | [sum-balance.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/balance/sum-balance.ts) |
| `RECENT_SUM_BALANCE` | 최근 총합 균형 | `SUM_BALANCE`와 동일하나, **최근 50회차**의 당첨 번호 합계 평균을 기준으로 삼아 ±25 범위 내에 들어오는 번호 조합을 추출합니다. | `2` | [recent-sum-balance.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/balance/recent-sum-balance.ts) |
| `SUM_ODD_EVEN_BALANCE` | 홀짝 비율 총합 균형 | `SUM_BALANCE` 알고리즘을 사용하되, 번호의 총합 조건뿐만 아니라 조합 내의 **홀수와 짝수의 비율(기본값 3:3)**도 만족할 때까지 반복 시도(최대 10,000회)하여 최종 조합을 구합니다. | `3` | [sum-odd-even-balance.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/balance/sum-odd-even-balance.ts) |
| `RECENT_SUM_ODD_EVEN_BALANCE` | 최근 홀짝 비율 총합 균형 | `SUM_ODD_EVEN_BALANCE`와 동일하나, **최근 50회차**의 당첨 번호 데이터의 합계 평균과 홀짝 비율 조건을 기준으로 만족하는 조합을 찾아냅니다. | `3` | [recent-sum-odd-even-balance.ts](file:///Users/soowan95/Documents/hactto/hactto-algorithm/src/algorithms/balance/recent-sum-odd-even-balance.ts) |
