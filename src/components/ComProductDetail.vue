<template>
    <main>
        <div class="product-detail">
            <div class="product-image">
                <img :src="product.image" alt="Product Image">
            </div>
            <div class="product-info">
                <h2>{{ product.name }}</h2>
                <p class="description">{{ product.description }}</p>
                <p class="price">Giá: {{ product.price }}₫</p>
                <p class="quality" v-if="product.quality > 0">Còn lại: {{ product.quality }} sản phẩm</p>
                <p class="quality out-of-stock" v-else>Hết hàng</p>
                <div class="actions">
                    
                    <button v-if="product.quality > 0" @click="addToCart(product)" class="add-to-cart">Đặt Hàng</button>
                    <button v-else disabled class="disabled">Hết Hàng</button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>

import items from '@/data/items';

export default {
    data() {
        return {
            product: {}, 
            cart: [],    
        };
    },
    mounted() {
        
        const id = this.$route.params.id;
        this.product = items.find((item) => item.id == id);
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    methods: {
        
        addToCart(product) {
            const existingCartItem = this.cart.find((item) => item.id === product.id);

            if (existingCartItem) {
                
                if (existingCartItem.quantity <= (product.quality) ) {
                    existingCartItem.quantity++;
                    product.quality--; 
                }
            } else {
                
                if (product.quality >0) {
                    this.cart.push({ ...product, quantity: 1 });
                    product.quality--; 
                }
            }

            
            this.updateLocalStorage();
        },
        
        updateLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
    },
};
</script>
<style>
.product-detail {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 20px;
    background-color: #f9f9f9;
    gap: 40px;
}

.product-image img {
    max-width: 400px;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.product-image img:hover {
    transform: scale(1.05);
}

.product-info {
    max-width: 500px;
    text-align: left;
}

.product-info h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.product-info .description {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
}

.product-info .price {
    font-size: 20px;
    color: #e74c3c;
    margin-bottom: 10px;
}

.product-info .quality {
    font-size: 16px;
    margin-bottom: 20px;
    color: #27ae60;
}

.product-info .quality.out-of-stock {
    color: #e74c3c;
}

.actions {
    display: flex;
    gap: 10px;
}

.actions .add-to-cart {
    padding: 10px 20px;
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.actions .add-to-cart:hover {
    background-color: #2ecc71;
}

.actions .disabled {
    padding: 10px 20px;
    background-color: #bdc3c7;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: not-allowed;
}
</style>
