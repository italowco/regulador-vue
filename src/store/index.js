import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: [
      {title: 'Report 1', desease: 'Duis congue orci vel imperdiet varius. Nulla ligula odio, ultrices id elit eget, consequat venenatis elit. Duis non sapien ligula. Integer ut erat at ex fermentum ultrices nec sit amet arcu.'},
      {title: 'Report 2', desease: 'Duis congue orci vel imperdiet varius. Nulla ligula odio, ultrices id elit eget, consequat venenatis elit. Duis non sapien ligula. Integer ut erat at ex fermentum ultrices nec sit amet arcu.'},
      {title: 'Report 3', desease: 'Duis congue orci vel imperdiet varius. Nulla ligula odio, ultrices id elit eget, consequat venenatis elit. Duis non sapien ligula. Integer ut erat at ex fermentum ultrices nec sit amet arcu.'},
      {title: 'Report 4', desease: 'Duis congue orci vel imperdiet varius. Nulla ligula odio, ultrices id elit eget, consequat venenatis elit. Duis non sapien ligula. Integer ut erat at ex fermentum ultrices nec sit amet arcu.'}
    ],
    doctors: [
      {name: 'Ana', service: 'Cardiologista', hospital: 'HGE'},
      {name: 'Joao', service: 'Ortopedista',  hospital: 'Santa Casa'},
      {name: 'Roberto', service: 'Neurologista', hospital: 'Unimed Farol'},
      {name: 'André', service: 'Ortopedista', hospital: 'Hospital do Açúcar'}
      ,{
        "name": "Agnes",
        "service": "Oncologista",
        "hospital": "Zoomcast"
      }, {
        "name": "Salomi",
        "service": "Oncologista",
        "hospital": "Mudo"
      }, {
        "name": "Ada",
        "service": "Ortopedista",
        "hospital": "Pixope"
      }, {
        "name": "Caterina",
        "service": "Ortopedista",
        "hospital": "Fadeo"
      }, {
        "name": "Townsend",
        "service": "Ortopedista",
        "hospital": "Katz"
      }, {
        "name": "Aldus",
        "service": "Oncologista",
        "hospital": "Rhyzio"
      }, {
        "name": "Mellicent",
        "service": "Oncologista",
        "hospital": "Kwinu"
      }, {
        "name": "Cathi",
        "service": "Endocrinologista",
        "hospital": "DabZ"
      }, {
        "name": "Joellyn",
        "service": "Endocrinologista",
        "hospital": "Flashpoint"
      }, {
        "name": "Laurena",
        "service": "Endocrinologista",
        "hospital": "Trilia"
      }, {
        "name": "Lydia",
        "service": "Gastro",
        "hospital": "Digitube"
      }, {
        "name": "Noemi",
        "service": "Gastro",
        "hospital": "Roombo"
      }, {
        "name": "Darrin",
        "service": "Gastro",
        "hospital": "Tavu"
      }, {
        "name": "Steffie",
        "service": "Cardiologista",
        "hospital": "Devify"
      }, {
        "name": "Nydia",
        "service": "Cardiologista",
        "hospital": "Skaboo"
      }
    ]
  },
  mutations: {
    addReport (state, report) {
      state.reports.push(report)
    },
    removeReport (state, report) {
      state.reports.splice(state.reports.indexOf(report), 1)
    }
  },
  actions: {
    addReport ({commit}, report) {
      commit('addReport', report)
    },
    removeReport ({commit}, report) {
      commit('removeReport', report)
    }
  }
})
