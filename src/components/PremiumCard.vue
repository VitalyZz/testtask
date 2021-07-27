<template>
  <section class="premium-card" :style="{ backgroundPositionX: isShowPanel ? 'calc(100% + 117px)' : '100%' }">
    <div class="container">
      <div class="premium-card__box">
        <div class="premium-card__title">Твоя премиум карта</div>
        <div class="premium-card__subtitle">Лучшая карта для любителей путешествий</div>
      </div>
      <div class="premium-card__items">
        <div class="premium-card__item" v-for="item in items" :key="item.value">
          <div class="item-value">{{ item.value }}</div>
          <div class="item-text premium-card__text">{{ item.text }}</div>
        </div>
      </div>
      <CustomButton class="premium-card__button" @click="$emit('openPopup', true)">Заказать сейчас</CustomButton>
    </div>
  </section>
</template>

<script>
import CustomButton from "@/components/app/CustomButton";
import CreditCard from "@/assets/img/premium-card/credit-card-main.png";

export default {
  name: 'premium-card',
  emits: ['openPopup'],
  props: {
    isShowPanel: {
      type: Boolean
    }
  },
  data() {
    return {
      creditCard: CreditCard,
      items: [
        { text: 'Вернем за покупки милями', value: '11%' },
        { text: 'Бесплатное снятие наличных по всему миру', value: '0%' },
        { text: 'До 7% на остаток по счету', value: '7%' },
        { text: 'Бесплатное годовое обслуживание', value: '0р' },
      ]
    }
  },
  components: {
    CustomButton,
  }
}
</script>

<style scoped lang="scss">
.premium-card {
  padding-top: 100px;
  padding-bottom: 278px;
  background-image: url("~@/assets/img/premium-card/credit-card-main.png");
  background-repeat: no-repeat;
  background-position: 100% 135px;
  transition: .3s;

  &__box {
    max-width: 735px;
    position: relative;
  }
  &__title {
    font-size: 96px;
    line-height: 109px;
    color: #FFFFFF;
  }
  &__subtitle {
    max-width: 303px;
    font-size: 24px;
    line-height: 30px;
    color: #6C6C6C;
    position: absolute;
    bottom: 15px;
    right: 102px;

  }
  &__items {
    margin-top: 65px;
    display: flex;
    max-width: 280px;
    flex-wrap: wrap;
  }
  &__item {
    font-size: 14px;
    line-height: 20px;
    color: #6C6C6C;
    max-width: 110px;

    &:nth-last-child(-n+2) {
      margin-top: 36px;
    }

    &:nth-child(odd) {
      margin-right: 42px;
    }
  }

  &__button {
    margin-top: 70px;
  }

  &__img {
    position: absolute;
    top: 240px;
    right: 0;
  }
}

@media only screen and (max-width: 768px) {
  .premium-card {
    padding-bottom: 100px;
    background-size: 120%;
    &__title {
      font-size: 28px;
      text-align: center;
      line-height: 30px;
    }
    &__subtitle {
      max-width: none;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      position: initial;
      margin-top: 15px;
    }
    &__items {
      margin: 65px auto 0;
      justify-content: center;
    }

    &__button {
      display: flex;
      justify-content: center;
    }

    &__text {
      color: #c1c1c1;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      padding: 5px;
    }
  }
}

@media only screen and (max-width: 480px) {
  .premium-card {
    padding-bottom: 80px;
  }
}
</style>