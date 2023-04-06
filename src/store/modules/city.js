import { getCityAll } from "@/servese"
import { defineStore } from "pinia"

export const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: { cityName: "杭州" },
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore
