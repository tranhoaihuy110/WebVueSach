<template>
    <footer>
         <div class="footer-container">
             <div class="footer-column">
                 <h3>Liên lạc với tôi qua email</h3>
                 <p>tranhoaihuy110@gmail.com</p>
             </div>
             <div class="footer-column">
                 <h3>Danh sách thể loại</h3>
                 <ul>
                     <li><a href="#">Tiểu thuyết</a></li>
                     <li><a href="#">Lịch sử</a></li>
                     <li><a href="#">Phiêu lưu</a></li>
                     <li><a href="#">Hài hước</a></li>
                     <li><a href="#">Cổ trang</a></li>
                 </ul>
             </div>
             <div class="footer-column">
                 <h3>Liên hệ</h3>
                 <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
                 <p>Điện thoại: 0866-758-752</p>
             </div>
         </div>
     </footer>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style>
 footer {
     background-color: #d2cece;
     color: #393737;
     padding: 20px;
 }
 
 .footer-container {
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     max-width: 1200px;
     margin: 0 auto;
 }
 
 .footer-column {
     flex: 1;
     padding: 10px;
     min-width: 200px;
     box-sizing: border-box;
 }
 
 .footer-column h3 {
     margin-top: 0;
 }
 
 /* Định dạng các liên kết trong footer */
 .footer-column a {
     color: #fe9d00;
     text-decoration: none;
 }
 
 .footer-column a:hover {
     text-decoration: underline;
 }
 </style>