export default {
    template: `<main>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Корзина {{ message }}</h1>
        </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col" v-for="product in cart" :key="product">
            <div class="card mb-4 rounded-3 shadow-sm" >
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">{{ product.name }}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{{ product.price }}р.<small class="text-muted fw-light"> &times; 
                    {{count}} шт.</small></h1>
                    <button type="button" class="btn btn-lg btn-outline-danger mb-3" @click.prevent="deleteCart(product.id)">Удалить из корзины</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="message != 'пуста'" class="row justify-content-center gap-1">
        <h2 class="mb-5">Итоговая стоимость: {{ summ }}р.</h2>
        <button class="col-6 btn btn-lg btn-outline-info mb-3" type="button" @click="$router.go(-1)">Назад</button>
        <button type="button" class="col-6 btn btn-lg btn-primary mb-3" @click.prevent="createOrder()">Оформить заказ</button>
    </div>
</main>`
}