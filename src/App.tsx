import { defineComponent } from 'vue';
// import FindreamUI from "./entry";

import FButton from './button/Button';
// import SFCButton from "./SFCButton.vue";
// import JSXButton from "./JSXButton";

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <FButton color="blue" round plain icon="search"></FButton>
        <FButton color="green" round plain icon="edit"></FButton>
        <FButton color="gray" round plain icon="check"></FButton>
        <FButton color="yellow" round plain icon="message"></FButton>
        <FButton color="red" round plain icon="delete"></FButton>
      </div>
    );
  },
});
