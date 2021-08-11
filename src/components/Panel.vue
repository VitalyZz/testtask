<template>
  <section class="panel" :class="{ 'panel_active' : isShowPanel }">
    <div class="panel__wrapper">
      <ul>
        <li class="panel__item"><a class="panel__item-link" href="#">Какие преимущества</a></li>
        <li class="panel__item"><a class="panel__item-link" href="#">Что вы получаете</a></li>
        <li class="panel__item"><a class="panel__item-link" href="#">Еще сюрпризы</a></li>
        <li class="panel__item"><a class="panel__item-link" href="#" @click="applyForCard">Оформить карту</a></li>
      </ul>

      <div class="phones panel__phones">
        <div class="phones_top">
          <div class="country">По России</div>
          <a class="panel__phone-number phone-number" href="#">8 800 950 6570</a>
        </div>
        <div class="phones_bottom">
          <div class="country">По Миру</div>
          <a class="panel__phone-number phone-number" href="#">8 800 950 6570</a>
        </div>
      </div>

    </div>
    <div class="panel__close close" @click="closePanel"></div>
  </section>
</template>

<script>
export default {
  name: 'panel',
  emits: ['openPopup', 'closePanel'],
  props: {
    isShowPanel: {
      type: Boolean,
    }
  },
  methods: {
    applyForCard() {
      this.closePanel()
      this.$emit('openPopup', true)
    },
    closePanel() {
      this.$emit('closePanel')
    }
  }
}
</script>

<style scoped lang="scss">
.panel {
  transition: .5s;
  position: fixed;
  top: 0;
  left: -393px;
  height: 100%;
  background-color: #1C1C1B;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 93px 100px 10px;
  display: flex;

  &__close {
    display: none;
  }

  &_active {
    left: 0;
  }

  &__wrapper {
    position: relative;
    height: 100vh;
  }

  &__phones {
    position: absolute;
    bottom: 105px;
    left: 0;
  }

  &__item {
    font-size: 18px;
    line-height: 30px;

    &:not(:last-child) {
      margin-bottom: 25px;
    }

    &-link {
      color: #FFFFFF;
    }
  }
}

@media only screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }

  .panel {
    padding: 40px 20px 10px;
    &_active {
      width: 100%;
    }
    &__phone-number {
      font-size: 16px;
    }

    &__close {
      display: block;
      top: 10px;
      right: 10px;
    }
    &__item {
      font-size: 16px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>