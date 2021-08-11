export default {
    mounted(el, binding) {
        el.clickOutsideEvent = event => {
            if (!(el === event.target || el.contains(event.target)) && ['header__wrapper', 'burger'].indexOf(event.target.classList[0]) === -1) {
                binding.value();
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
    },
    beforeUnmount(el) {
        document.removeEventListener("click", el.clickOutsideEvent);
    }
}