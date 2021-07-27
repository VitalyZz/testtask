<template>
  <section class="personal_assistant">
    <div class="container">
      <div class="title">Персональный помощник</div>
      <div class="personal_assistant__subtitle">Бесплатно для владельцев <span class="personal_assistant__subtitle-card-plus">CARD PLUS</span></div>
      <div class="personal_assistant__wrapper">
        <div class="personal_assistant__left-block">
          <img class="personal_assistant__img" :src="image" alt="img">
        </div>
        <div class="personal_assistant__right-block" v-scroll>
          <div class="personal_assistant__item" v-for="item in items" :key="item.title">
            <img class="item-img" :src="item.img" alt="img">
            <div class="personal_assistant__item-title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image from "@/assets/img/personal-assistant/image.png"
import icon_1 from "@/assets/img/personal-assistant/1.svg"
import icon_2 from "@/assets/img/personal-assistant/2.svg"
import icon_3 from "@/assets/img/personal-assistant/3.svg"
import icon_4 from "@/assets/img/personal-assistant/4.svg"

export default {
  data() {
    return {
      image: image,
      items: [
        { img: icon_1, title: 'Организует встречи, найдет гидов и переводчиков' },
        { img: icon_2, title: 'Спланирует поездку по самым интересным местам вашего отдыха' },
        { img: icon_3, title: 'Достанет билеты на мероприятия, даже если их уже нет в продаже' },
        { img: icon_4, title: 'Закажет столик в ресторане, клубе или кафе' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.personal_assistant {
  padding-bottom: 188px;
  background-image: url("~@/assets/img/premium-card/lines.svg");
  background-repeat: no-repeat;
  background-position: 100% 135px;

  &__subtitle {
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 12px;
    margin-bottom: 60px;
    text-align: center;

    &-card-plus {
      color: #C0965C;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__left-block {
    margin-right: 155px;
  }
  &__right-block {
    max-width: 260px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(last-child) {
      margin-bottom: 55px;
    }
  }
  &__item-title {
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    margin-left: 18px;
  }
}

@media only screen and (max-width: 768px) {
  .personal_assistant {
    padding-bottom: 70px;

    &__subtitle {
      margin-bottom: 40px;
    }
    &__left-block {
      margin-right: 20px;
    }
    &__item {
      &:not(last-child) {
        margin-bottom: 30px;
      }
    }

    &__img {
      width: 200px;
    }
  }
}

@media only screen and (max-width: 480px) {
  .personal_assistant {
    &__wrapper {
      flex-direction: column;
    }
    &__right-block {
      margin-top: 15px;
    }
  }
}
</style>