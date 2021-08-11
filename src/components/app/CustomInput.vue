<template>
  <div class="input-wrapper" @mouseover="makeFocus" @mouseout="removeFocus">
    <input class="input" type="text" :value="modelValue" @input="updateInput" :style="{ borderColor: highlight && error ? '#CC301B' : 'transparent' }">
    <span class="input-text" :style="[ modelValue ? { top: '20px', fontSize: '14px' } : { } ]"><slot/></span>
    <span class="input-error-text" v-if="highlight && error">Некорректно введены данные</span>
    <img class="input-img" v-if="error && modelValue !== ''" :src="errorImg" alt="error">
    <img class="input-img" v-if="success && modelValue !== ''" :src="SuccessImg" alt="success">
  </div>
</template>

<script>
import Error from '@/assets/img/form/error.svg'
import Success from '@/assets/img/form/success.svg'

export default {
  name: 'custom-input',
  props: {
    modelValue: {
      type: String,
    },
    error: {
      type: Boolean,
    },
    success: {
      type: Boolean,
    },
    highlight: {
      type: Boolean,
    }
  },
  data() {
    return {
      errorImg: Error,
      SuccessImg: Success
    }
  },
  methods: {
    makeFocus(event) {
      this.$nextTick(() => {
        event.target.focus()
      });
    },
    removeFocus(event) {
      this.$nextTick(() => {
        event.target.blur()
      });
    },
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input-wrapper {
  position: relative;

  &:hover > .input-text {
    transition: .3s;
    top: 20px;
    font-size: 14px;
  }
}

.input {
  background-color: #191919;
  font-size: 20px;
  color: #FFFFFF;
  padding: 40px 30px 20px;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  transition: .3s;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #333333;
  }

  &-text {
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    position: absolute;
    color: #6C6C6C;
    font-size: 20px;
    transition: .3s;
  }

  &-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -45px;
  }

  &-error-text {
    position: absolute;
    font-size: 12px;
    color: #CC301B;
    bottom: -20px;
    left: 30px;
  }
}

@media only screen and (max-width: 768px) {
  .input {
    font-size: 14px;
    padding: 30px 30px 5px;

    &-text {
      font-size: 15px;
    }

    &-img {
      top: 20px;
      right: 10px;
    }
  }
}

@media only screen and (max-width: 480px) {
  .input {
    &-img {
      width: 15px;
    }
  }
}
</style>