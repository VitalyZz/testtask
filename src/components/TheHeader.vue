<template>
  <header class="header">
    <div class="container header__content">
      <div class="header__wrapper" @click="clickBurger">
        <div class="burger" :class="{ close: isShowPanel }" :style="{ background: isShowPanel ? 'transparent' : '' }"></div>
      </div>
      <Logo class="header__logo"/>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/app/Logo";

export default {
  name: 'the-header',
  emits: ['click-burger'],
  props: {
    isShowPanel: {
      type: Boolean
    }
  },
  methods: {
    clickBurger() {
      this.$emit('click-burger', !this.isShowPanel)
    }
  },
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
.header {
  padding-top: 86px;

  &__content {
    display: flex;
  }

  &__wrapper {
    position: absolute;
    bottom: 6px;
    left: -73px;
    background-color: transparent;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
}

.burger {
  background: #C0965C;
  position: relative;
  width: 20px;
  height: 3px;
  bottom: -11px;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 25px;
    height: 3px;
    background-color: #C0965C;
    transition: .3s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 25px;
    height: 3px;
    background-color: #C0965C;
    transition: .3s;
  }
}

.close {
  &:before {
    transform: rotate(45deg);
    top: 0;
  }

  &:after {
    top: 0;
    transform: rotate(-45deg);
  }
}

@media only screen and (max-width: 768px) {
  .header {
    padding-top: 15px;
    &__content {
      justify-content: center;
    }

    &__wrapper {
      left: 40px;
      bottom: 3px;
    }

    &__logo {
      width: 250px;
      margin-right: 25px;
    }
  }
}

@media only screen and (max-width: 480px) {
  .header {
    &__content {
      justify-content: flex-end;
    }

    &__wrapper {
      left: 25px;
      bottom: 3px;
    }

    &__logo {
      width: 250px;
      margin-right: -10px;
    }
  }
}
</style>