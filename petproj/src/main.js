import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optionally, import Bootstrap JS for components like modals and dropdowns
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
.use(router)
.mount('#app')
