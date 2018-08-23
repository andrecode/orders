import Vuex from 'vuex'
import Axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            orders: []
        },
        mutations: {
            GET_ORDERS(state, data) {
                data.forEach(function (item) {
                    state.orders.push(
                        {
                            id: item.value.id,
                            source: item.value.source,
                            destination: item.value.destination,
                            create_date: item.value.create_date,
                            rev: item.value.rev,
                            techId: item.value.techId
                        }
                    );
                });
            },
            ADD_ORDER(state, order) {
                let ids = state.orders.map((ord) => ord.id);
                ids.push(0);
                order.id = Math.max(...ids) + 1;
                let promise = sendData(Axios.post, '/',{
                        id: order.id,
                        source: order.source,
                        destination: order.destination,
                        create_date: order.create_date
                });

                return promise.then(() => {
                    return state.orders.push({
                        id: order.id,
                        source: order.source,
                        destination: order.destination,
                        create_date: order.create_date
                    });

                }).catch(error => {
                    console.warn(error);
                    return []
                });
            },

            UPDATE_ORDER(state, order) {
                let found = state.orders.find(p => p.id === order.id);
                const action =  '/' + order.techId;

                found.source = order.source;
                found.destination = order.destination;
                found.create_date = order.create_date;

                let promise = sendData(Axios.put, action, {
                    id: order.id,
                    source: order.source,
                    destination: order.destination,
                    create_date: order.create_date,
                    _rev: order.rev
                });

                return promise.then(() => {
                   return true;

                }).catch(error => {
                    console.warn(error);
                    return []
                });
            },

            DELETE_ORDER(state, order) {
                const action = '/' + order.techId + '/?rev=' + order.rev;
                let promise = sendData(Axios.delete, action, {});

                return promise.then((result) => {
                    console.log(result);
                    let found = state.orders.findIndex(p => p.id === order.id);
                    state.orders.splice(found, 1);
                }).catch(error => {
                    console.warn(error);
                    return []
                });
            },
        },
        actions: {
            async nuxtServerInit({commit}) {
                const action = '/_design/docs/_view/_all';
                let promise = sendData(Axios.get, action, {});
                return promise.then((result) => {
                    commit('GET_ORDERS', result.data.rows);
                }).catch(error => {
                    console.warn(error);
                    return []
                });
            },
        },
    })
};
function sendData(method, action, data = {}) {
    var connect = process.env.dbConnection;

    return method(connect.url + '/' + connect.database + action, data, {
        auth: {
            username: connect.login,
            password: connect.password
        }
    });
}

export default createStore
