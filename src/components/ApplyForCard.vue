<template>
  <section class="apply-for-card">
    <div class="container">
      <div class="title">Оформите свою новую карту для путешествий</div>

      <div class="apply-for-card__items" v-scroll>
        <div class="apply-for-card__item" v-for="item in items" :key="item.text">
          <div class="apply-for-card__item-value item-value">
            <sub class="apply-for-card__item-sub">{{ item.prefix }}</sub>
            {{ item.value }}
          </div>
          <div class="item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="apply-for-card__container">
      <div class="apply-for-card__left-block">
        <img class="apply-for-card__img" :src="card" alt="img">
      </div>
      <div class="apply-for-card__right-block">
        <div class="apply-for-card__wrapper">
          <div class="apply-for-card__elements">
            <div class="apply-for-card__title_active">Кредитная карта</div>
            <div class="apply-for-card__title">Дебетовая карта</div>
          </div>
          <CustomButton class="apply-for-card__send-button" @click="$emit('openPopup', true)">Отправить заявку</CustomButton>
        </div>

        <div class="apply-for-card__wrapper-items">
          <div class="apply-for-card__left-side">
            <div class="apply-for-card__left-side-text" v-for="item in firstList" :key="item">{{ item }}</div>
          </div>

          <div class="apply-for-card__right-side">
            <div class="apply-for-card__right-side-text" v-for="item in secondList" :key="item">{{ item }}</div>
          </div>
        </div>

        <div class="apply-for-card__more-details">Все подробности</div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/assets/img/apply-for-card/credit-card.png";
import CustomButton from "@/components/app/CustomButton";

export default {
  emits: ['openPopup'],
  data() {
    return {
      card: Card,
      items: [
        { text: 'Милями за услуги, оплаченные на travel.ru', value: '11%', prefix: 'до' + '\u00A0' },
        { text: 'Милями за любые покупки по карте', value: '11%', prefix: 'до' + '\u00A0' },
        { text: 'Оплата милями билетов любых авиакомпаний по курсу 1 миля = 1 Р', value: '1 = 1' }
      ],
      firstList: ['Стоимость карты в год (руб.)', '\u00A0', 'Приветственные мили (шт.)', 'Мили за покупки'],
      secondList: ['6 490 (без пакета услуг)', '4 990 (с пакетом услуг)', '1000', '5%',],
    }
  },
  components: {
    CustomButton
  }
}
</script>

<style scoped lang="scss">
.apply-for-card {
  padding-bottom: 240px;
  &__items {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 85px;
  }

  &__item {
    margin-top: 8px;

    &:not(:last-child) {
      margin-right: 108px;
    }
    &-value {
      display: flex;
      align-items: baseline;
    }
    &-sub {
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
    }
  }

  &__container {
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  &__left-block {
    margin-right: 115px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-right: 50px;
  }

  &__title {
    font-size: 18px;
    line-height: 23px;
    color: #6C6C6C;
    margin-left: 42px;

    &_active {
      font-size: 18px;
      line-height: 23px;
      color: #C0965C;
    }
  }

  &__elements {
    display: flex;
    margin-bottom: 50px;
  }

  &__send-button {
    width: 100%;
    align-self: flex-start;
  }

  &__wrapper-items {
    margin-top: 67px;
    display: flex;
  }

  &__left-side {
    margin-right: 25px;

    &-text {
      font-size: 14px;
      line-height: 26px;
      color: #6C6C6C;
    }
  }
  &__right-side {
    &-text {
      font-size: 14px;
      line-height: 26px;
      color: #BBBBBB;
    }
  }

  &__more-details {
    margin-top: 25px;
    display: inline-block;
    font-size: 14px;
    line-height: 26px;
    color: #C0965C;
    border-bottom: 1px dashed #C0965C;
  }
}

@media only screen and (max-width: 768px) {
  .apply-for-card {
    padding-bottom: 70px;
    &__items {
      justify-content: space-between;
    }

    &__item {
      &:not(:last-child) {
        margin-right: auto;
      }
    }

    &__img {
      width: 100%;
    }

    &__container {
      flex-direction: column;
      padding: 0 20px;
    }

    &__left-block {
      margin: auto;
    }

    &__wrapper {
      margin-right: auto;
      margin-bottom: 30px;
    }

    &__elements {
      margin-top: 10px;
      justify-content: space-between;
    }

    &__send-button {
      display: flex;
      justify-content: center;
    }

    &__wrapper-items {
      margin-top: auto;
    }
  }
}

@media only screen and (max-width: 480px) {
  .apply-for-card {
    &__items {
      flex-direction: column;
    }

    &__item {
      &:not(:last-child) {
        margin-right: auto;
      }
    }
  }
}
</style>