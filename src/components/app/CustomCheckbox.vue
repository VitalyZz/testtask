<template>
  <div class="checkbox-wrapper">
    <div class="checkbox" @click="changeChecked">
      <img class="checkbox__img" :src="checkBox" alt="img" v-if="checked">
    </div>
    <div class="checkbox-label"><slot/></div>
  </div>
</template>

<script>
import CheckBox from "@/assets/img/form/checkbox.svg";

export default {
  name: 'custom-checkbox',
  emits: ['checkboxChecked'],
  data() {
    return {
      checkBox: CheckBox,
      checked: false
    }
  },
  methods: {
    changeChecked() {
      this.checked = !this.checked
      this.$emit('checkboxChecked', this.checked)
    }
  }
}
</script>

<style scoped lang="scss">
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.checkbox {
  min-width: 40px;
  height: 40px;
  background: #333333;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &-label {
    color: #6C6C6C;
    margin-left: 20px;
  }
}
</style>