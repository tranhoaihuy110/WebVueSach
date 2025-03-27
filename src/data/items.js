const items=[
    {
        id: 1,
        name: "Chú bé có tài mở khóa",
        image: require("@/assets/book/chubecotaimokhoa.jpg"),
        description: "Chú Bé Có Tài Mở Khóa là một truyện phiêu lưu, kể về chú bé Hùng bị ném ra ngoài xã hội, phải đối mặt với cái xấu, cái ác, phải vật lộn nhọc nhằn, gặp đủ loại người tốt có, xấu có, có khi được cưu mang, có lúc bị vùi dập... Truyện  hấp dẫn ở những tình huống bất ngờ, nhiều chi tiết gay cấn, hồi hộp và nhiều chi tiết gây xúc động với bạn đọc",
        price: 20,
        quality:2
      },
      {
        id: 2,
        name: "Đất rừng phương Nam",
        image: require("@/assets/book/datrungpn.jpg"),
        description: "Cậu bé An sống cùng với cha mẹ tại thành phố, sau ngày độc lập 2-9-1945. Thực dân Pháp quay trở lại xâm lược Việt Nam, đổ quân vào Nam Bộ. Pháp mở những trận đánh khiến cho những người dân sống tại các thành thị phải di tản. An và ba má cũng phải bỏ nhà bỏ cửa để chạy giặc. Cậu nhớ đến một anh bạn đi tàu đã tặng cậu chiếc la bàn mà không kịp mang theo. Theo cha mẹ chạy hết từ vùng này tới vùng khác của miền Tây Nam Bộ",
        price: 25,
        quality:2
      },
      {
        id: 3,
        name: "Mắt biếc",
        image: require("@/assets/book/matbiec.jpg"),
        description: "Mắt biếc kể về cuộc đời của nhân vật chính tên Ngạn. Ngạn sinh ra và lớn lên ở một ngôi làng tên là làng Đo Đo (thuộc xã Bình Quế, huyện Thăng Bình, tỉnh Quảng Nam – cũng là nguyên quán của tác giả). Lớn lên cùng với Ngạn là cô bạn hàng xóm có đôi mắt tuyệt đẹp tên là Hà Lan. Tuổi thơ của Ngạn và Hà Lan gắn bó với bao nhiêu kỉ niệm cùng đồi sim, đánh trống trường... Tình bạn trẻ thơ dần dần biến thành tình yêu thầm lặng của Ngạn dành cho Hà Lan",
        price: 40,
        quality:1
      },
      {
        id: 4,
        name: "Miếng ngon Hà Nội",
        image: require("@/assets/book/MiengngonHaNoi.jpg"),
        description: "Miếng ngon Hà Nội là một tác phẩm bút ký của nhà văn Vũ Bằng, một nhà văn người Hà Nội gốc và rất sành về các món ăn Hà Nội. Tác phẩm được viết tại Hà Nội vào mùa thu 1952, sửa chữa và viết thêm tại Sài Gòn năm 1956, 1958, 1959. Cuốn truyện tập trung giới thiệu mười lăm món ăn đặc sản của Hà Nội cũng như cảm nhận, tâm tình và kỷ niệm của tác giả với Hà Nội thông qua các món ăn.",
        price: 30,
        quality:1
      },
      {
        id: 5,
        name: "Những ngày thơ ấu",
        image: require("@/assets/book/nhungngaythoau1.jpg"),
        description: "Tác phẩm mở đầu bằng hình ảnh một gia đình giả dối. Cha mẹ cậu bé Hồng lấy nhau do “bài tính” của hai gia đình. Giữa họ, trước và sau khi kết hôn miễn cưỡng, không hề có tình yêu. Một gia đình như vậy là nấm mồ chôn sống hai con người mà tội tình nhất là người phụ nữ. Đứa con (Hồng) chỉ là “kết quả” của một đêm nằm chung miễn cưỡng nhằm thực hiện mục đích “nối dõi tông đường” mà dòng họ yêu cầu.",
        price: 20,
        quality:1
      },
      {
        id: 6,
        name: "Số đỏ",
        image: require("@/assets/book/sodo.jpg"),
        description: "Tác phẩm xoay quanh nhân vật chính là Xuân - biệt danh là Xuân Tóc đỏ - từ chỗ là một kẻ bị coi là hạ lưu, bỗng chốc đã bước lên tầng lớp danh giá của xã hội nhờ trào lưu Âu hóa của giới tiểu tư sản Hà Nội khi đó.",
        price: 25,
        quality:1
      },
      {
        id: 7,
        name: "Tiêu sơn tráng sĩ",
        image: require("@/assets/book/tieuson.png"),
        description: "Đây cũng là một trong những tác phẩm thành công nhất của Khái Hưng, nó đã diễn lại bằng những hình ảnh hào hùng về tổ chức và hoạt động của đảng Tiêu Sơn phò Lê, chống lại triều đình Tây Sơn với những tráng sĩ gan dạ, anh hùng như Phạm Thái, Nhị Nương. Tác phẩm ra đời trong lúc tình hình quốc tế đang có bíến chuyển, nước Pháp bại trận đầu hàng.",
        price: 25,
        quality:1
      },
      {
        id: 8,
        name: "Tuổi thơ dữ dội",
        image: require("@/assets/book/tuoithodudoi.jpg"),
        description: "Mừng là nhân vật xuất hiện sớm nhất, nhà nghèo, mẹ bị mắc bệnh hen suyễn nặng và bị người cha dượng lợi dụng bóc lột. Mừng tham gia vào Vệ quốc đoàn (Đội thiếu niên trinh sát) chỉ vì trong sân huấn luyện có lá tầm gửi để chữa hen suyễn cho mẹ. Sau khi gia nhập Mừng lập chiến công dẫn đường cho các chiến sĩ đi đánh ngôi lầu kiên cố của thằng thực dân cáo già Lơ-bơ-rít",
        price: 25,
        quality:1
      },
      {
        id: 9,
        name: "Ngày xưa có một chuyện tình",
        image: require("@/assets/book/ngayxua.jpg"),
        description: "Ngày xưa có một chuyện tình xoay quanh câu chuyện tình yêu trong trẻo nhưng đầy phức tạp của những người trẻ. Bối cảnh chính là một vùng quê yên bình, nơi ba nhân vật chính là Vinh, Miền và Phúc lớn lên bên nhau",
        price: 25,
        quality:1
      },
      {
        id: 10,
        name: "Hà Nội 36 phố phường",
        image: require("@/assets/book/hanoi36.jpg"),
        description: "Cuốn sách tập hợp hai mươi mốt bài kí nhỏ như hai mươi mốt bức họa đầy hoài niệm, dựng nên hình bóng Hà Nội xưa với những cảnh đời khác nhau. Đó có thể là những phụ nữ tần tảo, sống một cuộc đời lầm lũi, vất vả với gánh nặng cơm áo gạo tiền. Nhưng thấp thoáng giữa các số phận éo le đó lại ẩn hiện tình yêu đôi lứa trong sáng và thuần khiết. Tất cả đều là những câu chuyện về những con người Hà Nôi, nép mình dưới những khu phố khác nhau với những mảnh ghép cuộc đời khác nhau, hiện lên đơn sơ bằng ngòi bút chân thực của tác giả.",
        price: 25,
        quality:1
      },
      {
        id: 11,
        name: "Bố Già",
        image: require("@/assets/book/bogia.jpg"),
        description: "Bố Già kể về cuộc đời của Don Vito Corleone, ông trùm Mafia nổi tiếng, người đã xây dựng và điều hành một đế chế tội phạm từ những ngày đầu tiên của thế kỷ XX. Cuốn tiểu thuyết nổi tiếng của Mario Puzo này không chỉ là câu chuyện về mafia mà còn về gia đình, lòng trung thành và sự phản bội.",
        price: 45,
        quality: 1
      },
      {
        id: 12,
        name: "Forrest Gump",
        image: require("@/assets/book/fg.jpg"),
        description: "Winston Groom là một cựu binh thời chiến tranh ở Việt Nam, sau khi trở về, ông làm phóng viên và chuyển sang viết tiểu thuyết năm 32 tuổi và đã gặt hái được nhiều thành công. Cuốn sách Conversations with the Enemy (1982) [Trò chuyện với kẻ thù] với chủ đề cựu chiến binh Chiến tranh Việt Nam đã lọt vào chung kết giải Pulitzer năm 1984. Năm 1985, Groom quay về Mobile và bắt đầu viết Forrest Gump. Cuốn sách đã trở thành dấu mốc cho sự nghiệp sáng tác của ông.",
        price: 30,
        quality: 1
      },
      {
        id: 13,
        name: "Sói già Phố Wall",
        image: require("@/assets/book/soi.jpg"),
        description: "Sói già Phố Wall là cuốn tự truyện của Jordan Belfort - một huyền thoại trong ngành môi giới chứng khoán trên sàn phố Wall. Tác phẩm kể về quá trình phất lên của Jordan nói riêng, cũng như nội tình cuộc đại khủng hoảng tín dụng thứ cấp ở Mỹ nói chung.",
        price: 35,
        quality: 1
      },
      {
        id: 14,
        name: "Người Bán Hạnh Phúc",
        image: require("@/assets/book/nguoibanhphuc.jpg"),
        description: "Cuốn sách kể về câu chuyện của một người phụ nữ làm nghề bán hạnh phúc, mang đến cho những người khác niềm vui và hi vọng, nhưng bản thân lại phải đối mặt với những đau khổ và khủng hoảng tâm lý. Một tác phẩm khiến người đọc phải suy nghĩ về giá trị của cuộc sống và tình yêu.",
        price: 28,
        quality: 1
      },
      {
        id: 15,
        name: "Cô Gái Đến Từ Hôm Qua",
        image: require("@/assets/book/cogaidentuhomqua.jpg"),
        description: "Một câu chuyện tình yêu lãng mạn nhưng cũng đầy đau thương, về những tình cảm trong sáng nhưng phức tạp giữa một chàng trai và cô gái, cùng với những mối quan hệ xã hội đan xen.",
        price: 25,
        quality: 1
      },
      {
        id: 16,
        name: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        image: require("@/assets/book/thoihoahoa.jpg"),
        description: "Cuốn sách là một câu chuyện về tuổi thơ, về những kỷ niệm đẹp và đau buồn, về tình yêu thương gia đình và những trải nghiệm cuộc sống đầy hồn nhiên và ngây thơ.",
        price: 20,
        quality: 1
      },
      {
        id: 17,
        name: "Dế Mèn Phiêu Lưu Ký",
        image: require("@/assets/book/demenphieuluuky.jpg"),
        description: "Một câu chuyện cổ tích nổi tiếng của Việt Nam về hành trình phiêu lưu của Dế Mèn. Qua đó, cuốn sách không chỉ dạy trẻ em về tình bạn, tình yêu thương mà còn về sự trưởng thành và những bài học trong cuộc sống.",
        price: 15,
        quality: 1
      },
      {
        id: 18,
        name: "Chuyện Con Mèo Và Cái Cái Chảo",
        image: require("@/assets/book/chuyenconmeo.jpg"),
        description: "Cuốn sách là câu chuyện nhẹ nhàng, vui nhộn và sâu sắc về những cuộc phiêu lưu của chú mèo và những bài học về lòng kiên nhẫn, tình yêu thương và sự chia sẻ.",
        price: 18,
        quality: 1
      },
      {
        id: 19,
        name: "Nhật Ký Anne Frank",
        image: require("@/assets/book/nhatkiannefrank.jpg"),
        description: "Nhật Ký Anne Frank là những ghi chép đầy cảm xúc và chân thực của một cô gái người Do Thái trong suốt những năm tháng bị ẩn náu trong chiến tranh thế giới thứ hai. Cuốn sách là một tác phẩm bất hủ về sự kiên cường, hy vọng và tình yêu thương trong hoàn cảnh khắc nghiệt.",
        price: 40,
        quality: 1
      },
      {
        id: 20,
        name: "Dấu Chân Trên Cát",
        image: require("@/assets/book/dauchandoncat.jpg"),
        description: "Dấu Chân Trên Cát là cuốn sách về cuộc hành trình tự khám phá bản thân, nơi mỗi dấu chân là một bài học quý giá về sự trưởng thành, đau thương và niềm vui trong cuộc sống.",
        price: 22,
        quality: 1
      },
]
export default items