<template>
  <div class="product-container">
    <div class="product-list">
      <Product v-for="item in filterproduct" :key="item.id" :product="item" />
    </div>
    <div class="pagination">
      <button 
        v-if="currentpage > 1" 
        @click="changepage(currentpage - 1)" 
        class="pagination-btn prev-btn">
        Prev
      </button>
      <p class="page-numbers">
        <button 
          v-for="i in totalpage" 
          :key="i" 
          @click="changepage(i)" 
          :class="{'active': currentpage === i}" 
          class="pagination-btn">
          {{ i }}
        </button>
      </p>
      <button 
        v-if="currentpage < totalpage" 
        @click="changepage(currentpage + 1)" 
        class="pagination-btn next-btn">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import Product from './ComProduct.vue'
import items from '@/data/items'
export default {
  name: 'ComHome',
  components: {
    Product
  },
  data() {
    return {
      products: items,
      currentpage: 1,
      limit: 10
    }
  },
  computed: {
    totalpage() {
      return Math.ceil(this.products.length / this.limit);
    },
    filterproduct() {
      const start = (this.currentpage - 1) * this.limit;
      const end = start + this.limit;
      return this.products.slice(start, end);
    }
  },
  methods: {
    changepage(page) {
      if (page >= 1 && page <= this.totalpage) {
        this.currentpage = page;
        console.log(this.currentpage);
      }
    }
  }
}
</script>

<style scoped>
/* Đặt kiểu dáng cho container của các sản phẩm */
.product-container {
  padding: 20px;
  max-width: 1500px;
  margin: 0 auto;
}

/* Giao diện hiển thị sản phẩm */
.product-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 100px;
  margin-bottom: 20px;
}


.product-list .product {
  width: 100%;
  height: auto;
  max-width: 300px;  /* Đặt kích thước sản phẩm (tăng giá trị nếu cần) */
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

/* Kiểu dáng của các nút phân trang */
.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.pagination-btn:hover {
  background-color: #0056b3;
}

/* Kiểu dáng cho các nút "active" */
.pagination-btn.active {
  background-color: #28a745;
  border-color: #28a745;
}

.pagination-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Nút Prev và Next */
.prev-btn, .next-btn {
  font-weight: bold;
}

.page-numbers {
  display: inline-block;
  margin: 0;
  padding: 0;
}

</style>
