/*
 * @Description: 整体应用状态参数
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-12-10 10:04:55
 * @LastEditors: zhoucheng
 */

const state = {
  device: 'desktop',
  theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
}

const mutations = {
  SWITCHTHEME: (state, theme) => {
    state.theme = theme
    localStorage.setItem('theme', theme)
    window.document.documentElement.setAttribute("data-theme", state.theme);
  },
}

const actions = {
  switchTheme ({ commit }, { theme }) {
    commit('SWITCHTHEME', theme)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
