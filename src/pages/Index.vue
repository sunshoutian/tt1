<template>
  <q-page class="flex flex-center">
    <div class="row q-gutter-md">
      <div class="col-12">
        <div class="swiper-container-draggable" style="height: 300px">
          <div class="swiper-wrapper" ref="myList">
            <q-intersection
              once
              v-for="item in 8"
              :key="item"
              class="swiper-slide"
              :root="listEl"
            >
              <router-link to="" class="">
                <img
                  src="https://www.rioroses.com/wp-content/uploads/2017/04/GRAY.sunflower.jpg"
                />

                <div class="swiper-slide__title">title</div>
              </router-link>
            </q-intersection>
            <!-- <router-link
              to=""
              class="overflow-hidden text-center"
            >
              <q-intersection once>
                <q-img
                  src="https://www.rioroses.com/wp-content/uploads/2017/04/GRAY.sunflower.jpg"
                  :ratio="1"
                  :root="listEl"
                >
                </q-img>
              </q-intersection>
              
            </router-link> -->
          </div>
        </div>
      </div>
      <div class="col-12">
        <q-btn color="primary" label="Persistent Menu">
          <q-menu persistent auto-close>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>History</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Downloads</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
          <q-toggle v-model="toggleDark" />
        </q-btn>
        <div class="col-12 row justify-center">
          <p class="caption">Quasar Component Samples</p>
        </div>
        <div class="col-12 row justify-center">
          <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
        </div>
      </div>
    </div>
    <inline-template-test inline-template>
      <div>
        <div>{{ message }}</div>
        <q-btn :label="message" />
      </div>
    </inline-template-test>

    <!-- <div v-if="false" ref="myList" class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 60"
        :key="index"
        :root="listEl"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div> -->

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass">
.example-item
  height: 290px
  width: 290px

.swiper-container-draggable
  width: 100%
  height: 100%

.swiper-slide
  text-align: center
  font-size: 18px
  background: #fff
  display: -webkit-box
  display: -ms-flexbox
  display: -webkit-flex
  display: flex
  -webkit-box-pack: center
  -ms-flex-pack: center
  -webkit-justify-content: center
  justify-content: center
  -webkit-box-align: center
  -ms-flex-align: center
  -webkit-align-items: center
  align-items: center
</style>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.scss'
export default {
  name: 'PageIndex',
  data: () => ({
    mySwiper: ''
  }),
  computed: {
    toggleDark: {
      get() {
        return this.$q.dark.isActive
      },
      set(val) {
        this.$q.dark.set(val)
      }
    },
    listEl() {
      return this.$refs.myList ? this.$refs.myList.$el : null
    }
  },
  mounted() {
    this.mySwiper = new Swiper('.swiper-container-draggable', {
      updateOnWindowResize: true,
      freeMode: true,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      breakpoints: {
        200: {
          slidesPerView: 2.2,
          spaceBetween: 5
        },
        300: {
          slidesPerView: 2.5,
          spaceBetween: 10
        },
        400: {
          slidesPerView: 2.8,
          spaceBetween: 10
        },
        700: {
          slidesPerView: 3.2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3.6,
          spaceBetween: 40
        }
      }
    })

    console.log('swipe', this.mySwiper)
  }
}
</script>
