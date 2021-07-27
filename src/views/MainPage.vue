<template>
  <teleport to="body">
    <Panel :isShowPanel="isShowPanel" @openPopup="openPopup" @closePanel="isShowPanel = false" v-if="!isShowPopup && !isShowMessage"/>
    <Popup :isShowPopup="isShowPopup" @closePopup="isShowPopup = false" @openMessage="isShowMessage = true" v-if="!isShowMessage"/>
    <Message :isShowMessage="isShowMessage" @closeMessage="isShowMessage = false"/>
  </teleport>

  <div v-if="!isShowPopup && !isShowMessage" class="panel-container" :style="{ paddingLeft: isShowPanel ? '210px' : '' }">
    <TheHeader :isShowPanel="isShowPanel" @clickBurger="openPanel"/>
    <PremiumCard :isShowPanel="isShowPanel" @openPopup="openPopup"/>
    <PrivilegePackage/>
    <Bonuses/>
    <PersonalAssistant/>
    <ApplyForCard @openPopup="openPopup"/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import PremiumCard from '@/components/PremiumCard';
import PrivilegePackage from '@/components/PrivilegePackage';
import Bonuses from '@/components/Bonuses';
import PersonalAssistant from '@/components/PersonalAssistant';
import ApplyForCard from '@/components/ApplyForCard';
import TheFooter from '@/components/TheFooter';
import Panel from '@/components/Panel';
import Popup from '@/components/Popup'
import Message from '@/components/Message'

export default {
  name: 'main-page',
  data() {
    return {
      isShowPanel: false,
      isShowPopup: false,
      isShowMessage: false,
    }
  },
  methods: {
    openPanel(value) {
      this.isShowPanel = value
    },
    openPopup(value) {
      this.isShowPopup = value
    }
  },
  watch: {
    isShowPanel() {
      console.log('isSHwo', this.isShowPanel)
      if (this.isShowPanel) {
        document.querySelector('body').style.overflowX = 'hidden';
        document.querySelector('html').style.overflowX = 'hidden';
      } else {
        document.querySelector('body').style.overflowX = '';
        document.querySelector('html').style.overflowX = '';
      }
    }
  },
  components: {
    TheHeader,
    PremiumCard,
    PrivilegePackage,
    Bonuses,
    PersonalAssistant,
    ApplyForCard,
    TheFooter,
    Panel,
    Popup,
    Message
  }
}
</script>

<style scoped>
.panel-container {
  transition: .3s;
}

@media only screen and (max-width: 768px) {
  body, html {
    overflow-x: hidden;
  }

  .panel-container {
    padding-left: 0;
  }
}
</style>