<template>
  <div
    class="duration-300 fixed inset-5 z-[1000]"
    :class="{
      'translate-y-0 visible': isOpen,
      '-translate-y-[100%] invisible': !isOpen,
    }"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50"
      @click="closeModal"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] px-5"
    >
      <div class="flex flex-wrap bg-secondary h-[480px]">
        <div class="w-1/2">
          <div class="flex flex-wrap self-start">
            <div
              class="w-1/3"
              v-for="(puzzle, index) in puzzleStart"
              :key="puzzle.url"
              @click="handPuzzle(puzzle, index)"
            >
              <img :src="puzzle.url" alt="拼圖塊" />
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div
            class="h-full"
            style="
              background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648289491156.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H4ChFkCDnTEHdngmjN0bTbqmL59EdY0YbXylNRcsXmMC%2BwpSvsvA%2BMDGsXTNidnbnK9q6IS9YOHwSV5ueHR%2B%2B04hMb2X5xClljGEo8WMMh6Tc8SW52KgL21%2BPugEOoynUHsCWjWEpvblK3pt8pomTJu8TZ2fI1LCIFciIJUe4%2FHHk5WgkDrsD09cAq16XsI4p%2F%2FxsTQnxCatO%2F%2B9hU7eywGracAt3lzfHrgf%2Ffm8z6RNGxrN5dMlcB2UuTUHiBUOSWqSXMMCzeAGbjTQHp1CIjM85Tagh8pc36k%2FPwE4CiwlQX0%2FUunpzdMPQcsl9%2FijrkDPWMBiJPxSxVzc%2F4T2AA%3D%3D');
            "
          >
            <div class="flex flex-wrap">
              <div
                class="w-1/3"
                v-for="(puzzle, index) in puzzleEnd"
                :key="puzzle.url"
                @click="resetPuzzle(puzzle, index)"
              >
                <img :src="puzzle.url" alt="拼圖塊" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      puzzleStart: [
        {
          idx: 0,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288428981.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fVlQR%2BJtBu61KX2qy8D0lv2E9xAw49zCyrSunTkLRlp4MdWllcTLabw1p0zFG3amUfSLgciUcA8tH2YOt%2BZDMUR4k0v7W7crDL4qu%2FREumtUlHG7b93QXtmXTvidd1Jjm%2FfMclXEADv4pZGTrHLZJjnr7R8TUR5AnWzbkrzcgGGaHf94KihKqM5wgmhzTfV9CB9h%2BSTH1PbxzhYWImMlWfDOv3YSyz8m2wBXuhtZZ%2Fc9%2FN60qTSwBDbUcpDGctkAXOzCLNWAEjROnkMqb6KGF7E6g0VO9PtElp0YGMFBIRWlD3u6hKvccGFhhBBXfxFkMRp51GgfETWuuHy2l4xuhQ%3D%3D',
        },
        {
          idx: 1,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288455492.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXxOgpn6X2SlVUutv5YvK1dvAyRTzwM3izpe8rStYtZzZF%2FUCDMQIMfjMo%2BidvuuqnMo8DDKg6yvieR4YE8wSKXL6ltgy94s7fVq%2FsHFfUQKL0wVVB1fjxC8a1u0M3x4hR%2B%2BZqC9HO2t6C0jdSL8KidGaMmOfZochUUf8BCNDnxMqbGyf5OZVtj2p31DMVuVn0lHdUq%2BYe4HZDGdFFppDahD9HdErfaJ9FlN8xJ5uADkeKOU%2BEJ2to9RRiAK4078rSeNvGZTaW%2BwxNZla2kz7KXwJIhIokKe2EU9usZ02Zo704Bxmn8Mf9GMpzWN31nVvqWzEegXA%2BAr6CFYM6a3Dw%3D%3D',
        },
        {
          idx: 2,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288465718.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JFn541zKLawgs0U%2BqBG%2BCr69%2BkseW4%2B%2BnPf%2Fq5wk3JenR8gDQiL9RRsMCeAVTWVTl6LXni472a8Ki%2F3%2F1re4OKscJFSuJvR2sK6jFwEaQIEoduC9Gmvn5F4ZKMoA4nzXvk75cxn11rvAKhJj5W3mDlVs%2FDS0N4dVA6ixEqL%2BZ5PbJsSKodV7qT0gAu3pV6GHYF215fVgHoIoStf3te7sC2YDEH7oOHtw5%2BLS1cNYKsUmTuZTDt4reqebxvqU6HqN%2Bhk%2F1ga8clKT%2BgLQ8Tzc8c2GG5k1oSuggh1iHNMeCXIZ%2BjTdDNk%2F%2F6UBFEtausetOn0Mty0JZIAruPf8QPGsLw%3D%3D',
        },
        {
          idx: 3,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288479402.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PgHHRiwfuCbkV9xH%2FEa4NCSbJtVGA3MASMjCY663Ts9jBTIPx9q17ctvzD%2FiEw%2B3UKszVSJwFt%2Fzb4E6UD3a169REZh2Z1CIp%2Bu84iAVqRHlFJ21ayy4%2BHaQO6Xxav65d8fCWx7ON1ywFkk44au92G%2FOTv7lZ0wbw53C4yalTvRwNDiYQpIWXzvmvPMJFaVGFLbT1qNn6APJZ1zSJAoJxT4T2DCXmUOvcdrfIAd3abioCpaMlgx5rvr2SoUI1uvEcEVF%2BpPKpd8hKlf2k0jHgYl%2FqBydCK0znfKr0XI4oT%2FP7Ss8aToXOW4KFFdTnsm38T4eZvZnCnZOZe8azateaQ%3D%3D',
        },
        {
          idx: 4,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288910173.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jw44ma9QUkLi7%2B5HGWgCPpJs8HqlTcw3oPzeY073XdyREqnjSSLqRJYsvke00sKPQFKTsosgI5IidEE9WM0LHcklXaI60MElpnzS6Os0X5OF0Zp2TZw%2FtiT%2FA4YKtCjDdo%2BqRmRuhMzBVZtNmVQcp2VAuVZ1nZRL%2FzyPbOwswXeR1zTr0I9aVzthLRxDgdwHuzgmwo9UV3czK45ohHxCC%2BlhPdjjTC3iLsaELVuHZOlDWPuxRqPOOyYdnErndKq5IcNOWXw7OS9WyNW%2BGVX0m9kmHstyzsQ7b%2BeK2eJO8nPVJ%2FoLXZM9Wb1%2F8hMHBpIi4lmaCokSY0R6T6G0XutWAg%3D%3D',
        },
        {
          idx: 5,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288923671.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=o4VuAGe1u1ncTA3o%2F3xp5L1EQC6Mr07GUm5%2BpSxliiCVGS59ZL7sLZGTm0dh%2Fc93dYEQzY9nMDF5Zkrgc2nKHrt2X1i4YuQjoOFmXafh7WhKon6sR0mkEceUCyKC1saZAKlgj6LQlRvgr8TleN9BzHyTR%2BlAp88VaaaoevdZC45rWynxDAvA8%2B9THSPEIl4UL7uNgUNg5CIu40yk5PNEgQcDHuB23bKTIQu9HJwxCi7uG0evAQdRoHAjTe1oqN5H0DvzjJiemgXtY9HkxLMfRlImcCgHZYXoeQfAf106U07ZS0mIhNd0cOtsCdLsZL1O70KSVuGcfHZRFr3Y73B7IQ%3D%3D',
        },
        {
          idx: 6,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288515793.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gtYdXfSTEGapci%2BNh21E03R7GUmqA5JRLxxb2ojXb4fOWzFv6O9kxX8cHmZ5Xn15Vq%2FQg3GqXWfH8YLcIxOxCnZCdacL4zsiTVMEYqTkBWpGu8AG%2BJ9Gx9P2E3SuK6AyzIJqS9dtFGS8XfkfI00FVqKpjY5dt%2FmgO8%2FWjeJJYNDaTf7mNYvJxR%2Faq6inpOCShBNIq8Y8ktcR%2FJpw712ror3V9%2BQ7a5oTMhtSqYk8PZ9dIEVM1LYQFwhcexjVqkz%2FustUGgWfuGW1dLBye8p82CqoKYxSbP62ejNEe3le7G48U%2B6gSoMQ7jlhA%2F2IYMPrJMhvopzXzi0v%2FCdex8%2FL8Q%3D%3D',
        },
        {
          idx: 7,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288524332.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SxYQ2Ng3l3vE5bpxt4OAvPs5tXGomXauhdbc1AgwAF09OhS5Z88GsGovUOBdNN5tL0NNYUwcV4IOo4cOFABbY%2B3nisbJjlVDiqN4Hpbazlf6AovWcMaKD90oOtOAsweusBllqm40qq3bL8GIjPrTXaa1PUPHmOHFHTmG7681%2BshZM1EZLheoU3RRLmrFFsExRudgagii7oJEqka%2BtGYkdNAa90se%2FyXhtloq9%2BGzWpcv87uTIFG9gKGR5dec8G%2BghwU7LmgOBTwXUv1Zobk%2BZhoGmxfXkc5RxMhEhca0xix62UqWgl6g5KNzuuwdR%2FLefrNuSKXtbn5NebLBZDkuJw%3D%3D',
        },
        {
          idx: 8,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288531291.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oblhN8xUvNbAn9F893Z2xGTw%2BJDdtxlRV1Zbm1t%2B5KbuCnRKZ48ie9fOPJ1VdBlVj0thV9QJ6H8Tgg0fFZq63keMj4%2Bl19GztEd7B4aiOqJXI3gcSJzdRZAU2GjXyfnoVQ09CVUTRhBotn2%2F1evRHl3gOfSc%2FR8sE2fqEsu2wYKUOxIKbK%2BCWRuGW9mrm6Uk4uRbTa%2BnTXqfKT377X6yEdtUHbT%2FbstUQ3NUYJzGquONF3xB2P0WWH4hcBXc5%2F%2Be2OvS75BC07ORh%2BH273Kfio6xTkHMHF8CYU64p%2BEJXv4ct9446%2B0ttGPSuhe2dwxVWq4QVCYXjIwcVbvtjc7VMQ%3D%3D',
        },
      ],
      puzzleEnd: [],
      winIdx: 0,
      isWin: false,
      isOpen: false,
    };
  },
  watch: {
    puzzleEnd: {
      handler(newArr) {
        this.winIdx = 0;
        newArr.forEach((item, index) => {
          if (item.idx === index) {
            this.winIdx += 1;
          }
        });
      },
      deep: true,
    },
    winIdx: {
      handler(newVal) {
        if (newVal === 9) {
          this.isWin = true;
          this.$emit('get-coupon');
          this.isOpen = false;
        }
      },
    },
  },
  methods: {
    // 拼圖隨機
    randomPuzzle() {
      this.puzzleStart.sort(() => (Math.random() > 0.5 ? -1 : 1));
    },
    handPuzzle(item, index) {
      this.puzzleEnd.push(item);
      this.puzzleStart.splice(index, 1);
    },
    resetPuzzle(item, index) {
      this.puzzleStart.push(item);
      this.puzzleEnd.splice(index, 1);
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  mounted() {
    this.randomPuzzle();
  },
};
</script>
