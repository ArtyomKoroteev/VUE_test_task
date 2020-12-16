export default {
  async loadReports({ commit }) {
    await fetch('https://run.mocky.io/v3/338deb38-7bcd-43c1-8b32-bbf60851af5d', {
      method: 'GET',
    })
      .then((response) => {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
      })
      .then((response) => response.json())
      .then((payload) => {
        commit('setReports', payload.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
