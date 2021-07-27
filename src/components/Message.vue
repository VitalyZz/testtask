<template>
  <transition name="fade">
    <div class="message" v-if="isShowMessage" @click="$emit('closeMessage')">
      <img class="message__success-img" :src="success" alt="">
      <div class="title">Ваша заявка принята</div>
      <div class="message__subtitle">В ближайшее время с вами свяжется наш менеджер</div>
    </div>
  </transition>
</template>

<script>
import Success from "@/assets/img/form/success.svg";

export default {
  name: 'message',
  emits: ['closeMessage'],
  props: {
    isShowMessage: {
      type: Boolean
    }
  },
  data() {
    return {
      success: Success
    }
  },
}
</script>

<style scoped lang="scss">
.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;

  &__success-img {
    margin-bottom: 15px;
    width: 40px;
  }

  &__subtitle {
    margin-top: 10px;
    font-size: 14px;
    color: #6C6C6C;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: 1s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 480px) {
  .message {
    &__subtitle {
      text-align: center;
      padding: 0 10px;
    }
  }
}
</style>