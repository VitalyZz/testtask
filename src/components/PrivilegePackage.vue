<template>
  <section class="privilege-package">
    <div class="container">
      <div class="title">Путешествие мечты начинается с CARD PLUS</div>
      <div class="privilege-package__subtitle">Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый пакет привилегий, необходимый для любого путешествия</div>
      <div class="privilege-package__items" v-scroll>
        <div class="privilege-package__item" v-for="item in items" :key="item.title">
          <img class="privilege-package__item-img" :src="item.img" alt="img">
          <div class="privilege-package__item-title item-title">{{ item.title }}</div>
          <div class="item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img_1 from "@/assets/img/privilege-package/1.svg"
import img_2 from "@/assets/img/privilege-package/2.svg"
import img_3 from "@/assets/img/privilege-package/3.svg"
import img_4 from "@/assets/img/privilege-package/4.svg"

export default {
  data() {
    return {
      items: [
        {
          img: img_1,
          title: 'Билеты любых авиакомпаний',
          text: 'Предложения от 300+ авиакомпаний, 185+ lowcost перевозчиков, чартеры от 60 крупных российских туроператоров'
        },
        {
          img: img_2,
          title: 'Мили больше не сгорают',
          text: 'Мили, накопленные при оплате картой AlfaTravel, не сгорают и остаются на вашем счете, пока вы не решите их потратить'
        },
        {
          img: img_3,
          title: 'Продвинутая страховка – бесплатно',
          text: 'Расширенная страховка для всей семьи с учетом экстремальных видов спорта и алкоголя'
        },
        {
          img: img_4,
          title: 'Доступ к счетам в разных валютах',
          text: 'Текущие счета в рублях, долларах США, евро, английских фунтах стерлингов и швейцарских франках открываются в любой момент'
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.privilege-package {
  padding-bottom: 170px;

  &__subtitle {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #6C6C6C;
    max-width: 530px;
    margin: 8px auto 80px;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    width: 20%;

    &-img {
      margin-bottom: 23px;
    }
    &-title {
      margin-bottom: 18px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .privilege-package {
    padding-bottom: 70px;

    &__subtitle {
      padding: 0 30px;
      margin: 8px auto 50px;
    }
    &__items {
      padding: 0 20px;
    }
    &__item {
      width: 45%;

      &:nth-last-of-type(-n+2) {
        margin-top: 10px;
      }

      &-title {
        font-size: 13px;
        line-height: 17px;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .privilege-package {
    padding-bottom: 50px;

    &__subtitle {
      margin: 8px auto 30px;
    }
  }
}
</style>