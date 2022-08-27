<template>
  <swiper
      :slides-per-view="1"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :loop="true"
      :centeredSlides="true"
      :pagination="{
      clickable: true,
    }"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="item in imgList" :key="item.id">
      <img :src=item.src alt=item.alt>
    </swiper-slide>
    <!--    <swiper-slide><img src="src/assets/images/2.jpg" alt=""></swiper-slide>-->
    <!--    <swiper-slide><img src="src/assets/images/3.jpg" alt=""></swiper-slide>-->
  </swiper>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
// import { reactive } from "vue";
import 'swiper/css';
import {Autoplay, Navigation, Pagination, A11y} from "swiper";
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {reactive} from "vue";

const modules = [Autoplay, Pagination, Navigation, A11y];

const imgList = reactive([
  // {
  //   src: "src/assets/images/1.jpg",
  //   id: 1,
  //   alt: "1.jpg",
  // },
  // {
  //   src: "src/assets/images/2.jpg",
  //   id: 2,
  //   alt: "2.jpg",
  // },
  // {
  //   src: "src/assets/images/3.jpg",
  //   id: 3,
  //   alt: "3.jpg",
  // },
  {
    src: "src/assets/images/4.png",
    id: 4,
    alt: "4.jpg",
  },
  {
    src: "src/assets/images/5.png",
    id: 5,
    alt: "5.jpg",
  },
  {
    src: "src/assets/images/6.png",
    id: 6,
    alt: "6.jpg",
  }
]);


const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = () => {
  // console.log('slide change');
};

</script>

<style scoped>
.swiper {
  margin: 0;
  padding: 0;
  /*width: 100%;*/
  /*margin-top: 70px;*/
  /*background: rgba(64, 158, 255, 0.5);*/
  /*height: 70%;*/
}

.swiper-slide {
  margin: 0;
  padding: 0;
}

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  img {
    /*padding: 0 10%;*/
    /*transform: translateX(-50%);*/
    /*height: 65vh;*/
    width: 100vw;
    display: block;
    margin: 0 auto;
  }
}

/*默认*/
@media (min-width: 980px) {
  img {
    width: 100%;
    /*padding: 2px 0 0 0;*/
  }
}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {
  img {
    width: 100%;
    /*padding: 2px 0 0 0;*/
  }
}

/* 横向放置的手机和竖向放置的平板之间的分辨率 */
@media (max-width: 767px) {
  /*img {*/
  /*  width: 100%;*/
  /*  padding: 2px 0 0 0;*/
  /*}*/
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
  img {
    width: 100%;
    /*padding: 2px 0 0 0;*/
  }
}

.swiper-slide {
  /*position: relative;*/
}

img{
  display: block;
  margin: 0 auto;
  width: 98%;
}


/*img{*/
/*  display: block;*/
/*  padding: 0 10%;*/
/*  width: 100%;*/
/*  height: auto;*/
/*  max-width:100%;*/
/*  max-height:100%;*/
/*}*/
</style>
