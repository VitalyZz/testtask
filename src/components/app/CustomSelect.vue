<template>
  <div class="select-wrapper">
    <div class="select" @click="clickSelect">
      <div class="select__text" :style="{ backgroundColor: isShowDropDown ? '#333333' : '' }">{{ current.title }}</div>
      <span class="select__placeholder"><slot/></span>
      <img class="select__arrow" :src="arrow" alt="img" :style="{ transform: isShowDropDown ? 'rotate(180deg)' : '' }">
    </div>

    <div class="dropdown" v-if="isShowDropDown">
      <ul class="dropdown__list">
        <li class="dropdown__item" v-for="item in getList" :key="item.value" @click="updateSelect(item)">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Arrow from "@/assets/img/form/arrow.svg";

export default {
  name: 'custom-select',
  emits: ['updateCitizenship'],
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      arrow: Arrow,
      isShowDropDown: false,
      current: {}
    }
  },
  computed: {
    getList() {
      return this.list.filter(el => el.value !== this.current.value)
    }
  },
  mounted() {
    this.current = this.list.find(el => el.selected === true)
    this.$emit('updateCitizenship', this.current.title)
  },
  methods: {
    clickSelect() {
      this.isShowDropDown = !this.isShowDropDown
    },
    updateSelect(item) {
      this.current = item;

      this.$emit('updateCitizenship', item.title)
    }
  }
}
</script>

<style scoped lang="scss">
.select-wrapper {
  position: relative;
  height: 95px;
}

.select {
  position: relative;

  &__text {
    background-color: #191919;
    font-size: 20px;
    color: #FFFFFF;
    padding: 44px 30px 20px;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: .3s;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: #333333;
    }
  }

  &__placeholder {
    left: 30px;
    transform: translateY(-50%);
    position: absolute;
    color: #6C6C6C;
    transition: .3s;
    top: 20px;
    font-size: 14px;
  }

  &__arrow {
    position: absolute;
    right: 30px;
    top: 50%;
    transition: .3s;
    transform: translateY(-50%);
  }
}

.dropdown {
  margin-top: 5px;
  background: #333333;
  border-radius: 10px;
  position: absolute;
  left: 0;
  width: 100%;

  &__list {
    padding: 30px;
  }

  &__item {
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .select {
    &__text {
      font-size: 15px;
      padding: 35px 30px 10px;
    }
  }
}
</style>