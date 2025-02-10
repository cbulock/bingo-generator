import '@fontsource-variable/comfortaa';
import '@fontsource-variable/cinzel';
import '@fontsource-variable/dancing-script';
import '@fontsource-variable/dm-sans';
import '@fontsource/indie-flower';
import '@fontsource/kalam';
import '@fontsource/merriweather';
import '@fontsource/neucha';
import '@fontsource/oswald';
import '@fontsource/permanent-marker';
import '@fontsource/roboto';
import '@fontsource/schoolbell';
import '@fontsource/twinkle-star';

import './assets/main.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia();

pinia.use(piniaPluginPersistedState)

app.use(pinia)

app.mount('#app')
