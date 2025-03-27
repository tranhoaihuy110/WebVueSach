<template>
        <div>
        <div v-if="cart.length === 0" class="empty-cart">
            <p>Giỏ hàng của bạn đang trống, hãy mua hàng đi nhé -.-</p>
        </div>
        <div v-else class="cart-container">
            <h2 class="cart-title">Giỏ Hàng</h2>
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Hình</th>
                        <th>Sản Phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Tiền</th>
                        <th>Chức năng </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart" :key="item.id">
                        <td><img :src="item.image" class="product-image" alt="Product Image"></td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}₫</td>
                        <td>
                            <button @click="decreaseQuantity(item)" class="quantity-btn">-</button>
                            {{ item.quantity }}
                            <button @click="increaseQuantity(item)" class="quantity-btn">+</button>
                        </td>
                        <td>{{ item.price * item.quantity }}₫</td>
                        <td>
                            <button class="btn-remove" @click="del(item)">Xóa</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2"></td>
                        <td><strong>Tổng tiền:</strong></td>
                        <td><strong>{{ tongsoluong }}</strong></td>
                        <td><strong>{{ tongtien }}₫</strong></td>
                        <td>
                            <button class="btn-clear" @click="xoahet">Xóa hết</button>
                            <button class="btn-checkout" @click="thanhtoan">Thanh toán</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

    <script>

    import items from '@/data/items';

    export default {
        data() {
            return {
                cart: JSON.parse(localStorage.getItem('cart')) || [],
            };
        },
        computed: {
            tongtien() {
                return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
            },
            tongsoluong() {
                return this.cart.reduce((total, item) => total + item.quantity, 0);
            },
        },
        methods: {
            updateLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
            del(item) {
                const productold = items.find((x) => x.id === item.id);
        if (productold) {
            productold.quality += item.quantity; 
        }
                this.cart = this.cart.filter((x) => x.id !== item.id);
                this.updateLocalStorage();
            },
            xoahet() {
                this.cart.forEach((item) => {
            const productold = items.find((x) => x.id === item.id);
            if (productold) {
                productold.quality += item.quantity; 
            }
        });
                this.cart = [];
                this.updateLocalStorage();
            },
            increaseQuantity(item) {
                const productold = items.find((x) => x.id === item.id);
                if (productold && productold.quality > 0) {
                    item.quantity++;
                    productold.quality--;
                    this.updateLocalStorage();
                }
            },
            decreaseQuantity(item) {
                const productold = items.find((x) => x.id === item.id);
                if (item.quantity > 1) {
                    item.quantity--;
                    productold.quality++;
                 
                }
                else{
                    
                    this.del(item);
                }
            },
            thanhtoan() {
    const user = JSON.parse(localStorage.getItem('currentUser')); 
    if (!user) {
        
        alert('Bạn cần đăng nhập để thực hiện thanh toán!');
        this.$router.push('/login'); 
    } else {
        const fullName = user.fullName || 'Chưa có thông tin'; 
        const phoneNumber = user.phone || 'Chưa có thông tin'; 
        const address = user.address || 'Chưa có thông tin'; 
        const productList = this.cart
            .map(item => `- ${item.name} x${item.quantity} (${item.price * item.quantity}₫)`)
            .join('\n');
        const invoiceMessage = `
    Hóa đơn thanh toán:
    Họ và tên: ${fullName}
    Số điện thoại: ${phoneNumber}
    Địa chỉ: ${address}
    Danh sách sản phẩm:
    ${productList}
    Tổng số lượng: ${this.tongsoluong}
    Tổng tiền: ${this.tongtien}₫
        `;
        if (confirm(invoiceMessage + "\n\nBạn có chắc chắn muốn thanh toán?")) {
            alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
            this.cart = [];
            this.updateLocalStorage();
        } else {
            alert("Thanh toán đã bị hủy.");
        }
    }
}
        },
    };
    </script>

    <style>
    .cart-container {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .cart-title {
        text-align: center;
        font-size: 24px;
        color: #333;
        margin-bottom: 20px;
    }

    .cart-table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
    }

    .cart-table th, .cart-table td {
        padding: 10px;
        border: 1px solid #ddd;
    }

    .cart-table th {
        background-color: #f4f4f4;
        font-weight: bold;
        color: #555;
    }

    .product-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
    }

    .quantity-btn {
        padding: 5px 10px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        margin: 0 5px;
    }

    .quantity-btn:hover {
        background-color: #0056b3;
    }

    .btn-remove {
        background-color: #e74c3c;
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    .btn-remove:hover {
        background-color: #c0392b;
    }

    .btn-clear, .btn-checkout {
        padding: 8px 15px;
        border: none;
        color: white;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn-clear {
        background-color: #f39c12;
    }

    .btn-clear:hover {
        background-color: #e67e22;
    }

    .btn-checkout {
        background-color: #27ae60;
    }

    .btn-checkout:hover {
        background-color: #2ecc71;
    }

    .empty-cart {
        text-align: center;
        padding: 50px 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-size: 18px;
        color: #555;
    }
    </style>
