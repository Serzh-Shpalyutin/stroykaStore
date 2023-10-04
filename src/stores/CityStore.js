import { defineStore } from 'pinia';

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    city: null,
  }),
  actions: {
    async fetchUserCity() {
      try {
        const response = await fetch('https://ipinfo.io/51.159.220.57?token=9c5865b3b3081f'); 
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          const city = data.city;
          this.city = city;
        } else {
          throw new Error('Неверный формат данных');
        }
      } catch (error) {
        console.error('Ошибка при получении города:', error);
      }
    },
  },
});