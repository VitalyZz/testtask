<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <Logo class="footer__logo"/>
        <span class="footer__subtitle">АО «Кредит Европа Банк»</span>
      </div>

      <div class="footer__items">
        <ul class="footer__list">
          <li v-for="item in firstList" :key="item"><a class="footer_item" href="">{{ item }}</a></li>
        </ul>

        <ul class="footer__list">
          <li v-for="item in secondList" :key="item"><a class="footer_item" href="">{{ item }}</a></li>
        </ul>
      </div>

      <div class="footer__phones phones">
        <div class="phones_top">
          <div class="country">По России</div>
          <a class="phone-number" href="#">8 800 950 6570</a>
        </div>
        <div class="phones_bottom">
          <div class="country">По Миру</div>
          <a class="phone-number" href="#">8 800 950 6570</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/app/Logo";

export default {
  name: 'the-header',
  data() {
    return {
      firstList: ['О банке', 'Офисы и банкоматы', 'Новости', 'Вакансии', 'Реализуемое имущество'],
      secondList: ['Раскрытие информации', 'Ставки по вкладам', 'Условия и тарифы', 'Корпоративное управление', 'Карта сайта'],
    }
  },
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
.footer {
  padding-bottom: 55px;

  &__container {
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__items {
    display: flex;
  }

  &__list {
    &:not(:last-child) {
      margin-right: 80px;
    }
  }

  &__subtitle {
    font-size: 14px;
    line-height: 26px;
    color: #BBBBBB;
    margin-top: 15px;
  }

  &__item {
    font-size: 14px;
    line-height: 30px;
    color: #6C6C6C;
  }

  &_item {
    font-size: 14px;
    line-height: 30px;
    color: #6C6C6C;
  }
}

@media only screen and (max-width: 768px) {
  .footer {
    padding-bottom: 20px;
    &__container {
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 0 20px;
    }

    &__wrapper {
      margin-bottom: 15px;
    }

    &__list {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }

    &__phones {
      margin-top: 15px;
    }
  }
}
</style>