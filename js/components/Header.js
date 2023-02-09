export default{
    template: `<header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <router-link to="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">«Самоход»</span>
        </router-link>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <router-link class="me-3 py-2 text-dark text-decoration-none" to="/registr.html" >Регистрация</router-link>
            <router-link class="me-3 py-2 text-dark text-decoration-none" to="/login.html" >Авторизация</router-link>
            <router-link class="me-3 py-2 text-dark text-decoration-none" to="/order.html">Мои заказы</router-link>
            <router-link class="me-3 py-2 text-dark text-decoration-none" to="/cart.html">Корзина</router-link>
        </nav>
    </div>
</header>`
}