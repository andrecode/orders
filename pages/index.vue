<template>
    <section>
        <div class="actions">
            <nuxt-link class="btn btn-default"
                       :to="{path: '/add-order'}">
                <span class="glyphicon glyphicon-plus"></span>
                Новый заказ
            </nuxt-link>
        </div>
        <div class="filters row">
            <div class="form-group col-sm-3">
                <label for="search-element">Фильтр по месту отправления</label>
                <input v-model="searchKey"
                       id="search-element"
                       class="form-control"
                       requred/>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>Код</th>
                <th>Место отправления</th>
                <th>Место назначения</th>
                <th>Дата заказа</th>
                <th class="col-sm-2">Действия</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="order in filteredOrders">
                <td>
                    <nuxt-link :to="{name: 'order-id-edit', params: {id: order.id}}">{{ order.id }}</nuxt-link>
                </td>
                <td>
                    {{ order.source}}
                </td>
                <td>
                    {{ order.destination }}
                </td>
                <td>
                    {{ order.create_date }}
                </td>
                <td>
                    <nuxt-link :to="{name: 'order-id-edit', params: {id: order.id}}"
                               class="btn btn-warning btn-xs"
                               title='Изменить заказ'>
                        <span class="glyphicon glyphicon-pencil"></span>
                    </nuxt-link>
                    <nuxt-link :to="{name: 'order-id-delete', params: {id: order.id}}"
                               class="btn btn-danger btn-xs"
                               title='Удалить заказ'>
                        <span class="glyphicon glyphicon-trash"></span>
                    </nuxt-link>
                </td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>

    export default {
        layout: 'vue-crud',
        data() {
            return {searchKey: '', orders: this.$store.state.orders}
        },
        computed: {
            filteredOrders() {
                return this.orders.filter(order => order.source.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1)
            }
        }
    }
</script>

<style>
    .form-group {
        max-width: 500px;
    }

    .actions {
        padding: 10px 0;
    }

    .glyphicon {
        font-size: 12px;
        margin: 5px;
    }

</style>
