export default {
  async loadReports({ commit }) {
    await fetch('https://run.mocky.io/v3/ea0aca4b-66c7-43ad-8e30-6b856f29a945', {
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
