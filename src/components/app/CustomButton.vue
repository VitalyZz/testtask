<template>
  <div>
    <button class="button" :disabled="disabled" :style="{ backgroundColor: bgColor }">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    bgColor: {
      type: String,
      default: '#C0965C'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  padding: 28px 47px;
  font-weight: bold;
  font-size: 24px;
  border-radius: 10px;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}

@media only screen and (max-width: 768px) {
  .button {
    padding: 20px 40px;
    font-size: 22px;
  }
}

@media only screen and (max-width: 480px) {
  .button {
    padding: 15px 30px;
    font-size: 20px;
  }
}
</style>