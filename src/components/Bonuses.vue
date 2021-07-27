<template>
  <section class="bonuses">
    <div class="container">
      <div class="title">Мы позаботились, чтобы вы получили</div>
      <div class="bonuses__items" v-scroll>
        <div class="bonuses__item" v-for="item in items" :key="item.title">
          <img class="bonuses__item-img" :src="item.img" alt="img">
          <div class="bonuses__item-title item-title">{{ item.title }}</div>
          <div class="bonuses__item-text item-text">{{ item.text }}</div>
          <div class="bonuses__item-icons">
            <img class="bonuses__item-icon" v-for="icon in item.icons" :key="icon.img" :src="icon.img" alt="img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img_1 from "@/assets/img/bonuses/1.png";
import img_2 from "@/assets/img/bonuses/2.png";
import img_3 from "@/assets/img/bonuses/3.png";
import img_4 from "@/assets/img/bonuses/4.png";
import img_5 from "@/assets/img/bonuses/5.png";
import img_6 from "@/assets/img/bonuses/6.png";

import beeline from "@/assets/icons/bonuses/beeline.png";
import gett from "@/assets/icons/bonuses/gett.png";
import megafon from "@/assets/icons/bonuses/megafon.png";
import mtc from "@/assets/icons/bonuses/mtc.png";
import tele2 from "@/assets/icons/bonuses/tele2.png";
import wheely from "@/assets/icons/bonuses/wheely.png";

export default {
  name: 'bonuses',
  data() {
    return {
      items: [
        {
          img: img_1,
          title: 'Бесплатный безлимитный интернет в роуминге',
          icons: [
              { img: megafon },
              { img: tele2 },
              { img: mtc },
              { img: beeline },
          ]
        },
        {
          img: img_2,
          title: 'Бесплатная упаковка багажа',
          text: 'Держатели карт Visa Signature могут упаковать багаж в крупных аэропортах России',
        },
        {
          img: img_3,
          title: 'Бесплатный доступ в приложении App In The Air',
          text: 'Бесплатная премиум подписка при покупке авиабилетов на travel.alfabank.ru',
        },
        {
          img: img_4,
          title: 'Такси бизнес-класса со скидкой 20%',
          icons: [
            { img: wheely },
            { img: gett },
          ]
        },
        {
          img: img_5,
          title: 'Скидка в ресторанах Novikov Group в аэропорту Шереметьево',
        },
        {
          img: img_6,
          title: 'Доступ в бизнес-залы Priority Pass по всему миру',
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.bonuses {
  padding-bottom: 147px;

  &__items {
    margin-top: 75px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__item {
    width: 30%;
    &:nth-last-of-type(-n+3) {
      margin-top: 38px;
    }

    &-img {
      margin-bottom: 35px;
    }
    &-text {
      margin-top: 7px;
    }
    &-icons {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
    }

    &-icon {
      margin-top: 20px;

      &:nth-child(odd) {
        margin-right: 28px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .bonuses {
    padding-bottom: 70px;

    &__items {
      align-items: baseline;
    }

    &__item {
      width: 48%;

      &-img {
        width: 100%;
        margin-bottom: 5px;
      }
      &-title {
        font-size: 14px;
      }
    }
  }
}
</style>