<template>
  <transition name="fade">
    <section class="popup" v-if="isShowPopup">
      <div class="popup__container">
        <div class="title">Заявка на карту</div>
        <div class="popup__close close" @click="closePopup"></div>
        <form class="popup__form" @submit.prevent="submitHandler">
          <CustomInput class="popup__form-input" :highlight="isHighlight" :success="checkFio" :error="!checkFio" v-model="fio">ФИО</CustomInput>
          <CustomInput class="popup__form-input" :highlight="isHighlight" :success="checkEmail" :error="!checkEmail" v-model="email">Электронный адрес</CustomInput>
          <CustomInput class="popup__form-input" :highlight="isHighlight" :success="checkPhoneNumber" :error="!checkPhoneNumber" v-model="phoneNumber" @keypress="isNumber">Номер телефона</CustomInput>
          <CustomSelect @updateCitizenship="updateCitizenship" :list="list">Гражданство</CustomSelect>
          <CustomCheckbox class="popup__form-checkbox" @checkboxChecked="checkboxChecked">
            Я соглашаюсь на <span class="popup__form-label">обработку</span> моих персональных данных
          </CustomCheckbox>
          <CustomButton class="popup__form-button" :disabled="isDisabled" :bg-color="isDisabled ? '#191919' : '#C0965C'">Заказать сейчас</CustomButton>
        </form>
      </div>
    </section>
  </transition>
</template>

<script>
import CustomInput from "@/components/app/CustomInput";
import CustomSelect from "@/components/app/CustomSelect";
import CustomCheckbox from "@/components/app/CustomCheckbox";
import CustomButton from "@/components/app/CustomButton";

export default {
  name: 'popup',
  emits: ['closePopup', 'openMessage'],
  props: {
    isShowPopup: {
      type: Boolean
    }
  },
  data() {
    return {
      fio: '',
      email: 'garshin.1999@inbox.ru',
      phoneNumber: '',
      citizenship: '',
      consent: '',
      isDisabled: true,
      isHighlight: false,
      list: [
        { title: 'Российская федерация', value: 'ru', selected: true },
        { title: 'Беларусь', value: 'by' },
        { title: 'Украина', value: 'ua' },
        { title: 'Казахстан', value: 'kz' }
      ]
    }
  },
  computed: {
    fields() {
      const { fio, email, phoneNumber, consent } = this
      return { fio, email, phoneNumber, consent }
    },
    checkFio() {
      const regex = /[^a-zа-я-\s]+/gi;

      return !regex.test(this.fio) && this.fio.split(' ').filter(el => el.length >= 1).length > 1;
    },
    checkEmail() {
      const regex = /.+@.+\..+/i;
      const regex2 = /[а-я]+/i;

      return regex.test(this.email) && !regex2.test(this.email);
    },
    checkPhoneNumber() {
      const regex = /[^0-9\s+]+/i;

      return !regex.test(this.phoneNumber)
          && this.checkPhoneNumberLength(this.phoneNumber)
          && this.phoneNumber.split('+').length === 2;
    },
  },
  watch: {
    fields() {
      this.isDisabled = !this.consent;
    },
    phoneNumber() {
      if (this.phoneNumber[0] !== '+' && this.phoneNumber.length > 0) {
        this.phoneNumber = '+' + this.phoneNumber;
      }

      const regex = /[^0-9+]+/i;

      if (regex.test(this.phoneNumber)) {

      }

      const indexes = [2, 6, 10, 13];

      indexes.forEach(index => {
        if (this.phoneNumber.length > index && this.phoneNumber[index] !== ' ') {
          this.phoneNumber = this.insertInto(this.phoneNumber, index - 1, ' ')
        }
      });

      this.phoneNumber = this.phoneNumber.replace(/\s+/gi, ' ');
    }
  },
  methods: {
    isNumber(event) {
      if(/^[0-9+]+$/.test(event.key)) return true;
      else event.preventDefault();
    },
    updateCitizenship(citizenship) {
      this.citizenship = citizenship
    },
    checkboxChecked(value) {
      this.consent = value
    },
    submitHandler() {
      if (this.validate()) {
        const formData = {
          fio: this.fio,
          email: this.email,
          phoneNumber: this.phoneNumber,
          citizenship: this.citizenship
        }

        console.log(formData);

        this.closePopup()
        this.openMessage()
      } else {
        this.isHighlight = true
      }
    },
    validate() {
      return (this.checkFio && this.checkEmail && this.checkPhoneNumber && this.consent);
    },
    checkPhoneNumberLength(phoneNumber) {
      if (phoneNumber !== '') {
        const regex = /\d+/gi;
        const numbers = phoneNumber.match(regex);

        if (numbers) {
          const length = numbers.join('').length;
          return length >= 11 && length <= 12;
        }
      }
    },
    closePopup() {
      this.$emit('closePopup')
    },
    openMessage() {
      this.$emit('openMessage')
    },
    insertInto(str, index, inserted) {
      return str.substr(0, index + 1) + inserted + str.substr(index + inserted.length);
    }
  },
  components: {
    CustomInput,
    CustomSelect,
    CustomCheckbox,
    CustomButton,
  }
}
</script>

<style scoped lang="scss">
.popup {
  height: 100%;
  background-color: #000;
  padding-top: 64px;
  padding-bottom: 20px;
  position: fixed;
  overflow-y: overlay;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;

  &__container {
    max-width: 680px;
    margin: 0 auto;
    position: relative;
  }

  &__close {
    top: 7px;
    right: 0;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    &-input {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }

    &-checkbox {
      margin-top: 20px;
    }

    &-label {
      color: #fff;
    }

    &-button {
      margin-top: 30px;
      align-self: flex-start;
      &:disabled {
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: 1s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .popup {
    height: 100%;
    padding-top: 15px;

    &__container {
      padding: 0 20px;
    }

    &__close {
      right: 20px;
    }

    &__form {
      &-checkbox {
        margin-top: auto;
        font-size: 14px;
      }

      &-button {
        margin-top: 15px;
      }
    }
  }
}
</style>