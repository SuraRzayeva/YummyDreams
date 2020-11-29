<template>
  <div class="container">
    <div class="wrapper-box">
      <div class="row1">
        <h1>Delicious</h1>
      </div>
      <div class="row2">
        <div class="column1">
          <h1>EASY</h1>
        </div>
        <div class="column2">
          <form v-on:submit.prevent="sendInput">
            <p :style="errorStyle" class="error">Please, write something in the input field.</p>
            <input type="text" v-model="input" />
          </form>
          <div class="text">
            <p class="hide-mobile">
              There are three possible parts to a date, of which at least two must be offered: entertainment, food, and affection. It is customary to begin a series of dates with a great deal of entertainment, a moderate amount of food, and the merest suggestion of affection. As the amount of affection increases, the
              entertainment can be reduced proportionately.
            </p>
          </div>
        </div>
        <div class="column3">
          <h1>healthy</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'SearchHero',
  data() {
    return {
      input: '',
      error: false,
    }
  },
  computed: {
    errorStyle() {
      return {
        color: this.error ? 'tomato' : 'transparent',
      }
    },
  },
  methods: {
    startAnimation() {
      gsap.to('.container', { opacity: 1, ease: 'expo', duration: 3 })
      gsap.to('.column1', { duration: 1, ease: 'expo', x: 0 })
      gsap.to('.column3', { duration: 1, ease: 'expo', x: 0 })
      gsap.to('.row1 h1', { duration: 1, ease: 'expo', y: 0 })
    },
    sendInput() {
      if (this.input.trim() === '') {
        this.error = true
      } else {
        this.$emit('fetch-recipes', this.input)
      }
    },
  },
  watch: {
    error() {
      setTimeout(() => {
        this.error = false
      }, 1300)
    },
  },
  mounted() {
    this.startAnimation()
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0 150px;
  margin-bottom: 120px;
  color: #222;
  opacity: 0;
}

.wrapper-box {
  width: 950px;
  display: flex;
  flex-direction: column;
}

.row1 h1 {
  font-size: 180px;
  text-transform: uppercase;
  font-weight: 800;
  padding: 0;
  margin: 0;
  line-height: 160px;
  transform: translateY(-150%);
}

.row2 {
  display: flex;
  width: 100%;
  height: 200px;
}

.row2 .column1 {
  width: 10%;
  display: flex;
  flex-direction: column-reverse;
  transform: translateX(-150%);
}

.row2 .column1 h1 {
  font-size: 80px;
  transform: rotate(-90deg);
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 800;
  color: #eaea00;
}

.row2 .column2 {
  width: 53%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.row2 .column2 form {
  width: 95%;
}

.row2 .column2 input {
  width: 95%;
  height: 50px;
  border-style: none;
  border: #3baa00 solid 2px;
  padding: 7px;
}

.row2 .column2 input:focus {
  outline: none;
}

.row2 .column2 .text {
  width: 95%;
  margin-top: 10px;
}

.row2 .column2 .text p {
  font-size: 14px;
  line-height: 20px;
  color: #222;
  margin-top: 5px;
}

.row2 .column3 {
  width: 38%;
  display: flex;
  transform: translateX(100%);
}

.row2 .column3 h1 {
  font-size: 80px;
  text-transform: uppercase;
  font-weight: 800;
  margin: 0;
  padding: 0;
  color: #3baa00;
}

.error {
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 4px;
}

@media screen and (max-width: 1050px) {
  .container {
    padding: 0 7%;
  }
  .wrapper-box {
    width: 100%;
  }

  .row1 h1 {
    font-size: 125px;
    line-height: 100px;
  }

  .row2 .column1 {
    justify-content: flex-end;
    padding: 0;
  }
  .row2 .column1 h1 {
    font-size: 50px;
    transform: translatey(130%) rotate(-90deg);
  }

  .row2 .column2 {
    padding: 0 30px;
    justify-content: self-start;
    align-items: flex-start;
    display: block;
    padding: 0;
  }

  .row2 .column2 input {
    margin-top: 10px;
  }

  .row2 .column2 .text {
    width: 150%;
  }

  .row2 .column3 h1 {
    font-size: 50px;
  }
}

@media screen and (max-width: 750px) {
  .row1 h1 {
    font-size: 50px;
    line-height: unset;
  }

  .row2 {
    flex-direction: column;
  }

  .row2 .column2 {
    display: none;
  }

  .row2 .column1 h1 {
    transform: unset;
  }
}

@media screen and (max-width: 290px) {
  .row1 h1 {
    font-size: 30px;
  }
  .row2 .column1 h1 {
    font-size: 30px;
  }

  .row2 .column3 h1 {
    font-size: 30px;
  }
}
</style>
