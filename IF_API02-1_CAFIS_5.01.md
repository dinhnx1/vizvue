# IF_API02-1_CAFIS API Specification

**Version:** 5.01
**Date:** July 9, 2025
**Company:** NTT DATA Corporation

---

## Page 1

会社名：株式会社ＮＴＴデータ
情報所有者：コンサルティング事業本部
Tài liệu đặc tả giao diện
(API trực tuyến)
第5.01版
2025年7月9日
株式会社 NTTデータ
Copyright ©NTT DATA CORPORATION

---

## Page 2

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
1.0 Toàn bộ Tạo bản đầu tiên
2017/11/15 2.0 P10. Tra cứu điểm Sửa các hạng mục sau:
・Thêm vào 3. Tham số phản hồi: “Cờ cộng điểm khi đến cửa hàng”
“Thông tin điểm thưởng (bonus point)” “Tên cửa hàng”
2017/11/15 P40. Cập nhật điểm Sửa các hạng mục sau:
・Thêm: “Ngày kinh doanh”, “Mục dự phòng 1–10”, “Thông tin báo biểu”
・Trong 3. Tham số phản hồi, bổ sung vào phần mô tả của “Trạng thái xử lý”:
“37: Đã cộng điểm khi đến cửa hàng”
2017/11/15 C20. Tra cứu thông tin khách hàng Sửa các hạng mục sau:
Thêm “Loại thẻ”
2017/11/15 P10. Tra cứu điểm Sửa các lỗi ghi nhầm, sai sót, v.v.
P40. Cập nhật điểm
C20. Tra cứu thông tin khách hàng
2017/11/20 P40. Cập nhật điểm Sửa các hạng mục sau:
・Thay đổi cấu trúc thẻ của “Thông tin giao dịch theo nhóm dịch vụ”
・Xóa “Ngày kinh doanh của giao dịch gốc”
2017/11/20 P10. Tra cứu điểm Sửa các hạng mục sau:
・Thêm “Số tiền cần thiết để đạt điểm thưởng cấp cao trong tháng hiện tại”
2017/11/28 3.0 C22. Xác thực đăng nhập Thêm API mới
Xác thực đăng nhập (tự động đăng nhập)
C24. Xác thực mã tài khoản
C25. Yêu cầu phát hành số hội viên WEB
C26. Yêu cầu xác nhận thông tin đăng nhập
2017/11/28 C15. Yêu cầu URL Đổi tên sheet từ “WEB入会URL” thành “Yêu cầu URL”
Sửa các hạng mục sau:
・Thêm “Thông tin My Page”
2017/11/28 C20. Tra cứu thông tin khách hàng Sửa các hạng mục sau:
・Thêm “Login ID”, “Login PW”
・Trong 3. Tham số phản hồi, thêm “Cờ hội viên WEB”
2017/11/28 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Thêm “Khóa My Page”, “Login ID”, “Login PW”, “Phân loại gửi thông báo thay đổi email”
“Địa chỉ email”
・Trong 3. Tham số phản hồi, bổ sung các mã 34, 41, 49 vào “Trạng thái xử lý”
2/129 Copyright ©NTT DATA CORPORATION

---

## Page 3

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2017/11/28 C32. Tích hợp Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, thêm 39 vào “Trạng thái xử lý”
2017/11/22 P10. Tra cứu điểm Sửa các hạng mục sau:
C10. Kiểm tra hội viên (thuộc tính khách hàng) ・Trong 3. Tham số phản hồi, cập nhật “Mã lý do trạng thái hội viên” lên phiên bản mới nhất như sau
C11. Kiểm tra hội viên (mã bảo mật) 2000: Chưa sử dụng
C20. Tra cứu thông tin khách hàng 2001: Có thể sử dụng
C21. Cập nhật thông tin khách hàng 3001: Hạn chế (trộm cắp / mất)
C30. Tái phát hành 3002: Hạn chế (bẩn / hư hỏng)
C32. Tích hợp 3003: Hạn chế (khác)
C50. Thay đổi trạng thái hội viên 8001: Không thể sử dụng (tái phát hành: trộm cắp / mất)
C51. Hủy tư cách hội viên 8002: Không thể sử dụng (tái phát hành: bẩn / hư hỏng)
8003: Không thể sử dụng (tái phát hành: khác)
8004: Không thể sử dụng (ngừng sử dụng / tái phát hành)
8101: Không thể sử dụng (tích hợp)
8102: Không thể sử dụng (ngừng sử dụng / tích hợp)
8201: Không thể sử dụng (chuyển đổi)
8202: Không thể sử dụng (ngừng sử dụng / chuyển đổi)
8901: Không thể sử dụng (ngừng sử dụng / khác)
9001: Không th ể sử dụng (hủy hội viên: theo yêu cầu khách hàng)
9002: Không thể sử dụng (hủy hội viên: khác)
9003: Không thể sử dụng (hủy hội viên: tự động theo quy định)
2017/12/5 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Chuyển “Khóa tổ chức đăng ký 1–3” thành trường bắt buộc
2017/12/7 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, chuyển “Khóa mã hóa” thành trường thiết lập tùy chọn
2017/12/12 C30. Tái phát hành Sửa các hạng mục sau:
C50. Thay đổi trạng thái hội viên ・Chỉnh sửa bảng tổng hợp các mã “Lý do trạng thái hội viên” có thể thực
thi từng sự kiện trong 1.Tổng quan xử lý
2017/12/22 Xác thực đăng nhập (tự động đăng nhập) Sửa các hạng mục sau:
・Xóa API (※ do chức năng tự động đăng nhập bị loại bỏ)
2017/12/22 C22. Xác thực đăng nhập Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, xóa “Cờ phát hành mã tự động đăng nhập”
・Trong 3. Tham số phản hồi, xóa “Mã tự động đăng nhập”
và “Thời hạn hiệu lực của mã tự động đăng nhập”
3/129 Copyright ©NTT DATA CORPORATION

---

## Page 4

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2017/12/27 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
C27. Thay đổi mật khẩu đăng nhập ・Trong 3. Tham số phản hồi, bổ sung vào phần mô tả của “Trạng thái xử lý” và “Thông báo lỗi”:
44: Lỗi định dạng mật khẩu đăng nhập
2018/1/9 Tất cả các sheet Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, sửa số ký tự tối đa (byte) của “Khóa mã hóa” từ 8 → 16 byte
2018/1/11 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
C22. Xác thực đăng nhập ・Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, sửa số ký tự tối đa (byte)
Thay đổi mật khẩu đăng nhập của “Login PW” thành 20 byte
2018/1/12 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, bổ sung vào phần mô tả của “Trạng thái xử lý”:
48: Chưa đăng ký khóa My Page
2018/1/12 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, dưới “Thông tin kiểm tra My Page”,
tách “Họ tên” thành “Họ” và “Tên”
2018/1/16 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, xóa các trường “Login ID”, “Login PW”
nằm dưới “Thông tin My Page”
・3Trong 3. Tham số phản hồi, xóa khỏi phần mô tả của “Trạng thái xử lý”:
41: Lỗi trùng Login ID
44: Lỗi định dạng mật khẩu đăng nhập
2018/1/16 C25. Yêu cầu phát hành số hội viên WEB Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, thêm “Login PW”
・Trong 3. Tham số phản hồi, bổ sung vào phần mô tả của “Trạng thái xử lý”:
44: Lỗi định dạng mật khẩu đăng nhập
2018/1/18 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, thêm vào “Phân loại xử lý”:
4: Thay đổi địa chỉ email
2018/1/23 C27. Thay đổi mật khẩu đăng nhập Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, thêm “Số hội viên (hội viên WEB)” và “Cờ kiểm tra xác thực người dùng”
・Trong 3. Tham số phản hồi, sửa điều kiện của “42: Mật khẩu đăng nhập không khớp”
4/129 Copyright ©NTT DATA CORPORATION

---

## Page 5

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/1/23 C15. Yêu cầu URL Sửa các hạng mục sau:
C24. Xác thực mã tài khoản ・Trong 3. Tham số phản hồi, sửa kiểu dữ liệu logic của “Mã tài khoản”
từ số sang chữ số nửa chiều (half-width digits)
2018/1/24 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, điều chỉnh cấp bậc thẻ (tag)
của “Thông tin điểm thưởng” lên cao hơn một cấp
2018/1/24 C27. Thay đổi thông tin My Page Sửa tên sheet như sau:
Đổi tên sheet từ “Thay đổi mật khẩu đăng nhập” sang “Thay đổi thông tin My Page”
2018/1/24 C14. Tra cứu danh sách thẻ đang giữ Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, thêm “Thông tin giao dịch”
2018/1/24 C22. Xác thực đăng nhập Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, xóa các trường “Trạng thái hội viên”
và “Mã lý do trạng thái hội viên”
2018/1/24 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, dưới “Thông tin kiểm tra My Page”,
xóa các trường “Họ”, “Tên” và thêm “Họ tên”
2018/1/25 Tất cả API Sửa các hạng mục sau:
Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, điều chỉnh kiểu dữ liệu logic từ “ký tự nửa chiều”
sang một trong các loại sau cho phù hợp:
“chữ và số nửa chiều”
“chữ số nửa chiều”
“chữ và số + ký hiệu nửa chiều”
2018/1/25 2. Đặc tả chung Sửa các hạng mục sau:
・Bổ sung sheet “2. Đặc tả chung” để tổng hợp các nội dung dùng chung cho từng
hạng mục trong tài liệu này
2018/1/26 2. Đặc tả chung Sửa các hạng mục sau:
・Tại 2.3 Kiểm tra độ phức tạp mật khẩu đăng nhập, bổ sung
các ký tự có thể sử dụng cho mật khẩu
2018/2/2 3.01 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, sửa “Số hội viên” thành đối tượng không mã hóa
2018/2/2 C14. Tra cứu danh sách thẻ đang giữ Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, chỉnh sửa phần mô tả của “Nhận diện số hội viên”
và “Số hội viên” nằm dưới “Thông tin hội viên”
5/129 Copyright ©NTT DATA CORPORATION

---

## Page 6

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/2/2 P10. Tra cứu điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, sửa trạng thái có/không phản hồi (A)
của “Cờ cộng điểm khi đến cửa hàng” thành “条” (bắt buộc có điều kiện)
2018/2/2 P10. Tra cứu điểm Sửa các hạng mục sau:
P40. Cập nhật điểm ・Trong 3. Tham số phản hồi, bổ sung mô tả cho các trường
“Số tiền đủ điều kiện điểm thưởng lần trước” và “Điểm thưởng lần trước”
2018/2/2 C14. Tra cứu danh sách thẻ đang giữ Sửa các hạng mục sau:
C20. Tra cứu thông tin khách hàng ・Trong 3. Tham số phản hồi, sửa trạng thái có/không phản hồi (A)
của “Thuộc tính thẻ tự do 1–10” thành “条” (bắt buộc có điều kiện)
2018/2/27 P10. Tra cứu điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, dưới “Thông tin nhóm dịch vụ”,
sửa độ dài tối đa (byte) của “Mã nhóm dịch vụ” từ 20 → 3 byte
2018/3/5 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 1. Tổng quan xử lý, bổ sung mô tả về đặc tả thiết lập “URL phản hồi” với nội dung sau:
“Để gây khó khăn cho việc suy đoán ý nghĩa của tham số từ tên biến,
‘value1’ và ‘value2’ sẽ được sử dụng làm chuỗi cố định.”
2018/3/6 P10. Tra cứu điểm Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, đổi tên hạng mục
từ “Phân loại xử lý cập nhật điểm” sang “Phân loại xử lý tra cứu điểm”
2018/3/6 C14. Tra cứu danh sách thẻ đang giữ Sửa các hạng mục sau:
C20. Tra cứu thông tin khách hàng ・Trong 3. Tham số phản hồi, với “Thuộc tính thẻ tự do 6–10”,
sửa phần số trong tên tag từ dạng toàn chiều sang nửa chiều (6–10)
・Sửa tất cả các chữ số trong tên tag sang dạng nửa chiều
2018/3/6 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, sửa giá trị thiết lập khi xóa thông tin trong phần mô tả của các trường sau:
“Họ”, “Tên”, “Họ (Kana)”, “Tên (Kana)”, “Địa chỉ 1–3”, “Số điện thoại 1–2”, “Địa chỉ email 1–2”,
“Thuộc tính tự do 1–5 (dạng văn bản)”
2018/3/6 C27. Thay đổi thông tin My Page Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, chỉnh sửa phần mô tả của
“Nhận diện số hội viên (WEB)” và “Số hội viên (WEB)”
6/129 Copyright ©NTT DATA CORPORATION

---

## Page 7

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/3/6 C50. Thay đổi trạng thái hội viên Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, bổ sung vào phần mô tả
của “Yêu cầu thay đổi trạng thái hội viên” trường hợp đăng ký tạm dừng đối với hội viên WEB
2018/3/13 P10. Tra cứu điểm Sửa các hạng mục sau:
Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, sửa độ dài tối đa (byte)
của “Phân loại xử lý tra cứu điểm” thành 1 byte
2018/3/20 P10. Tra cứu điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, với “Thông tin xếp hạng năm thường”
và “Thông tin xếp hạng tháng thường”, chuyển thành các
hạng mục nằm dưới “Thông tin xếp hạng”
2018/4/4 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, thêm vào “Phân loại xử lý”: 4: Thay đổi địa chỉ email
Trong 3. Tham số phản hồi, sửa điều kiện xuất của “49: Lỗi trùng khóa
My Page” trong “Trạng thái xử lý”
2018/4/16 C25. Yêu cầu phát hành số hội viên WEB Sửa các hạng mục sau:
Yêu cầu xác nhận thông tin My Page ・Trong 4. Đặc tả kiểm tra tiêu chuẩn (không in), sửa nội dung kiểm tra thuộc tính của “Login PW” thành:
Có kiểm tra chữ số nửa chiều, chữ cái nửa chiều, ký hiệu nửa chiều
Độ dài tối đa: sửa từ “20” → “-”
2018/4/27 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
Trong 2. Tham số yêu cầu, sửa phần mô tả của “Họ tên” và “Họ tên (Kana)”;
đồng thời sửa độ dài từ 80 ký tự toàn chiều → 40 ký tự toàn chiều
・Trong 4. Đặc tả kiểm tra tiêu chuẩn (không in), sửa nội dung kiểm tra số byte tối đa của:
Họ tên: 80, Họ tên (Kana): 80, Địa chỉ email: 60
2018/4/27 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, đổi tên hạng mục từ
“Phân loại xử lý xác nhận đăng nhập” sang “Phân loại xử lý xác nhận thông tin đăng nhập”,
đồng thời sửa thành đối tượng không mã hóa
・Trong 3. Tham số phản hồi, đối với các trường “Kiểm tra họ tên”,
“Kiểm tra họ tên (Kana)”, “Kiểm tra số điện thoại”, “Kiểm tra Login ID”:
Do khi không khớp với giá trị hệ thống, các giá trị từ 2. Tham số yêu cầu
(đã là đối tượng mã hóa) sẽ được xuất 그대, 로nên chuyển các trường này thành
đối tượng mã hóa
7/129 Copyright ©NTT DATA CORPORATION

---

## Page 8

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/4/27 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, sửa “Địa chỉ email” thành trường bắt buộc có điều kiện;
trong phần mô tả, bổ sung quy định:
Trường hợp “1: Quên Login ID” thì bắt buộc phải thiết lập
2018/4/27 C27. Thay đổi thông tin My Page Sửa các hạng mục sau:
・Trong 4. Đặc tả kiểm tra tiêu chuẩn (không in), thêm “Khóa mã hóa”
2018/5/7 P10. Tra cứu điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, xóa dòng mô tả sau trong “Khóa tổ chức yêu cầu 1–3”:
“※ Nếu không được thiết lập trong yêu cầu thì mục này sẽ không được thiết lập.”
2018/5/10 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Trong 4. Đặc tả kiểm tra tiêu chuẩn (không in), sửa nội dung kiểm tra
“Mã bưu chính” để số byte tối thiểu và tối đa đều là 8 ký tự
2018/5/11 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, xóa khỏi phần mô tả của “Thông báo lỗi” câu sau
(ứng với Trạng thái xử lý: 49): “Khóa My Page đã nhập bị trùng lặp.”
2018/5/16 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, sửa nội dung mô tả của “Mã tài khoản” như sau:
“Giá trị của yêu cầu sẽ được thiết lập 그대로.” →
“Mã tài khoản được CE tự động tạo sẽ được thiết lập.”
2018/5/16 P10. Tra cứu điểm Sửa các hạng mục sau:
P20. Tra cứu lịch sử biến động điểm ・Trong 3. Tham số phản hồi, sửa nội dung mô tả của “Thông báo lỗi”
P40. Cập nhật điểm đối với Trạng thái xử lý: 20 như sau:
C10. Kiểm tra hội viên (thuộc tính khách hàng) “Có lỗi mang tính hệ thống trong các hạng mục yêu cầu.” →
C11. Kiểm tra hội viên (mã bảo mật) “Nội dung đã nhập có thiếu sót / không hợp lệ.”
C14. Tra cứu danh sách thẻ đang giữ
C15. Yêu cầu URL
C20. Tra cứu thông tin khách hàng
C21. Cập nhật thông tin khách hàng
C30. Tái phát hành
C32. Tích hợp
C50. Thay đổi trạng thái hội viên
C51. Hủy tư cách hội viên
S10. Kiểm tra vận hành
8/129 Copyright ©NTT DATA CORPORATION

---

## Page 9

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/5/16 P20. Tra cứu lịch sử biến động điểm Sửa các hạng mục sau:
P21. Tra cứu chi tiết điểm ・Trong 3. Tham số phản hồi, tại phần mô tả của “Thông báo lỗi”
đối với Trạng thái xử lý: 27, sửa nội dung như sau:
“Số hội viên đã nhập không thể sử dụng trên thiết bị đang dùng.” →
“Số hội viên đã nhập không thể sử dụng dịch vụ trên thiết bị đang dùng.”
2018/5/16 P40. Cập nhật điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa phần mô tả của “Thông báo lỗi” đối với Trạng thái xử lý: 29
2018/5/16 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi:
・Xóa mô tả liên quan đến 31 trong phần “Trạng thái xử lý”
・Xóa mô tả liên quan đến Trạng thái xử lý: 31 trong phần “Thông báo lỗi”
2018/5/16 C32. Tích hợp Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, xóa mô tả liên quan đến Trạng thái xử lý: 31 trong phần “Thông báo lỗi”
2018/5/18 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, sửa lỗi thiếu tên tag của “Thông tin email”
2018/5/29 C32. Tích hợp Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu / 3. Tham số phản hồi, sửa tên tag của
“Nhận diện số hội viên (sau khi tích hợp)” như sau:
KAIIN_NO_SHUBETSU_NAME_AFTER → KAIIN_NO_SHIKIBETSU_AFTER
2018/5/29 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, sửa định dạng của “Thời hạn hiệu lực mã tài khoản” như sau:
YYYYMMDD→yyyyMMddHHmm
2018/5/29 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Trong 4. Đặc tả kiểm tra tiêu chuẩn (không in), xóa “Khóa My Page”
2018/5/29 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, bổ sung vào phần mô tả của “Trạng thái xử lý”:
50: Trạng thái bất thường khi thay đổi thuộc tính
9/129 Copyright ©NTT DATA CORPORATION

---

## Page 10

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/5/30 C22. Xác thực đăng nhập Trong 3. Tham số phản hồi, bảng ABC của “Trạng thái xử lý”,
C26. Yêu cầu xác nhận thông tin đăng nhập xóa và bổ sung các mã trạng thái không cần thiết / còn thiếu như sau:
C24. Xác thực mã tài khoản ・C22. Xác thực đăng nhập： xóa 15, 16
C32. Tích hợp ・C26. Yêu cầu xác nhận thông tin đăng nhập：xóa 13, 21
C50. Thay đổi trạng thái hội viên ・C24. Xác thực mã tài khoản： xóa 49、
thêm 90
・C32. Tích hợp： xóa 29, 59, 60, 61、
thêm 30, 73, 74, 75
・C50. Thay đổi trạng thái hội viên： thêm 56, 57, 58
2018/5/30 C30. Tái phát hành Trong 3. Tham số phản hồi, bảng ABC của “Trạng thái xử lý”,
C51. Hủy tư cách hội viên xóa và bổ sung các mã trạng thái như sau:
・C30. Tái phát hành：xóa 29, 56, 57, 58
thêm 70, 71, 72
・C51. Hủy tư cách hội viên： thêm 76
2018/5/31 C22. Xác thực đăng nhập Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, đổi số thứ tự mã Trạng thái xử lý
của “Bất thường khóa tài khoản” từ 43 → 11
2018/5/31 P40. Cập nhật điểm Trong 3. Tham số phản hồi, bảng ABC của “Trạng thái xử lý”,
chuyển 19 từ dòng A → dòng B
2018/6/1 Danh sách API Online Bổ sung mô tả tổng quan cho các API sau:
・P10_Tra cứu điểm API: thêm câu “Trả về kết quả xác định việc có thể sử dụng điểm hay không.”
・P40_Cập nhật điểm API: thêm chú thích:
※ Để xác định việc có thể sử dụng điểm hay không tại thiết bị đầu cuối, giả định rằng ‘P10_Tra cứu
điểm’ sẽ được gửi trước._
2018/6/8 C22. Xác thực đăng nhập Sửa các hạng mục sau:
C27. Thay đổi thông tin My Page ・Trong 3. Tham số phản hồi, đổi số thứ tự mã Trạng thái xử lý
của “Mật khẩu đăng nhập không khớp” từ 42 → 14
2018/6/14 P21. Tra cứu chi tiết điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, đổi tên tag của “Thông tin cơ bản lịch sử biến động” thành
HENDO_RIREKI_BASIC_INFO
10/129 Copyright ©NTT DATA CORPORATION

---

## Page 11

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/6/14 C20. Tra cứu thông tin khách hàng Sửa các hạng mục sau:
C21. Cập nhật thông tin khách hàng ・Sửa các hạng mục sau đối với “Thông tin cơ bản về thuộc tính” trong 3. Tham số phản hồi
Đối tượng áp dụng: “Họ”, “Tên”, “Họ (Kana)”, “Tên (Kana)”, “Mã bưu chính”,
“Địa chỉ 1”, “Địa chỉ 2”, “Địa chỉ 3”,
“Số điện thoại 1”, “Số điện thoại 2”, “Địa chỉ email 1”, “Địa chỉ email 2”
Nội dung sửa đổi:
・Sửa đối tượng mã hóa từ “●” sang “条” (bắt buộc có điều kiện)
・Sửa phần mô tả từ “Trường hợp mã hóa” sang
“Trường hợp tham số yêu cầu ‘Khóa mã hóa’ được thiết lập”
2018/6/14 P40. Cập nhật điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, đối với “Phân loại giao dịch”, xóa dấu “●” tương ứng với
phân loại xử lý cập nhật điểm = “1”, “2”
(điều chỉnh cho phù hợp với phân loại giao dịch ở tham số yêu cầu)
2018/6/14 P40. Cập nhật điểm Sửa tổng quan xử lý và các hạng mục sau:
Trong 1. Tổng quan xử lý, bổ sung chú thích:
“※ Việc trả về ‘Thông tin thông điệp biên lai (Receipt Message Information)’ dưới dạng văn bản,
được ngắt dòng theo số byte quy định, hiện chưa được triển khai.”
・Trong 3. Tham số phản hồi, tại phần mô tả của “Thông tin thông điệp biên lai”, bổ sung:
“Chưa được triển khai”
2018/6/14 P10. Tra cứu điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, đối với “Phân loại kiểm tra số hiệu thiết bị”:
Sửa có/không phản hồi từ “●” sang “条” (bắt buộc có điều kiện)
Bổ sung mô tả: “Trong trường hợp tham số yêu cầu
‘Phân loại kiểm tra số hiệu thiết bị’ được thiết lập”
2018/6/14 P21. Tra cứu chi tiết điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa nội dung sau khỏi phần mô tả của “Thông tin lịch sử điểm”:
“Lặp theo từng chi tiết đối tượng. Phản hồi theo thứ tự giảm dần của ngày giờ biến động điểm.”
2018/6/14 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, đối với “Thông tin số tiền giao dịch”,
do được phản hồi khi phân loại xử lý cập nhật điểm = 1, nên sửa trạng thái thành “●”
11/129 Copyright ©NTT DATA CORPORATION

---

## Page 12

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/6/14 P40. Cập nhật điểm Trong 3. Tham số phản hồi, bảng ABC của “Trạng thái xử lý”, sửa trạng thái xử lý sau:
19: Trùng lặp giao dịch → sửa từ dòng A sang dòng B
2018/6/19 P10. Tra cứu điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, tại phần mô tả của “Tên cửa hàng” và “Tên tenant”,
đối với nội dung liên quan đến mục khóa dùng để lấy thông tin đầu ra, sửa như sau:
“Khóa tổ chức yêu cầu” → “Khóa tổ chức yêu cầu hoặc mã tổ chức
được liên kết với thông tin thiết bị đầu cuối”
2018/6/29 3.1 C21. Cập nhật thông tin khách hàng ・Trong 1. Tổng quan xử lý, xóa phần kiểm tra liên quan đến trạng thái hội viên
・Trong 3. Tham số phản hồi, tại phần mô tả của “Thông báo lỗi”, xóa thông điệp sau:
“Trạng thái xử lý: 50 – ‘Không thể thay đổi thuộc tính trong trạng thái hiện tại.’”
・Trong 3. Tham số phản hồi, tại bảng ABC của “Trạng thái xử lý”, đối với dòng B,
chuyển sang trạng thái làm mờ (grey out)
(Trạng thái xử lý: 50, Ghi chú: Trạng thái hội viên không hợp lệ)
2018/6/29 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, khi phân loại xử lý cập nhật điểm = 5 (DC), bổ sung chú thích sau:
“Về mặt nội bộ vẫn tạo tham số phản hồi, tuy nhiên sẽ không trả về cho hệ thống đối tác.”
2018/6/29 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, đối với “Thông tin chi tiết điểm được cấp”,
do được phản hồi khi phân loại xử lý cập nhật điểm = 3 (cấp điểm dạng tính toán tại trung tâm),
nên sửa trạng thái thành “●”
2018/6/29 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, tại cột có/không phản hồi (A, B) của
“Số hiệu thiết bị giao dịch gốc” và “Số giao dịch gốc”,
sửa từ “●” sang “条” (bắt buộc có điều kiện)
2018/7/5 C25. Yêu cầu phát hành số hội viên WEB Sửa các hạng mục sau:
C27. Thay đổi thông tin My Page ・Trong 3. Tham số phản hồi, tại phần mô tả của “Trạng thái xử lý”, sửa nội dung sau:
“41: Lỗi trùng lặp ID đăng nhập” → “41: Trùng lặp ID đăng nhập”
2018/7/5 C15. Yêu cầu URL Sửa các hạng mục sau:
C25. Yêu cầu phát hành số hội viên WEB ・Trong 3. Tham số phản hồi, tại phần mô tả của “Trạng thái xử lý”, sửa nội dung sau:
C27. Thay đổi thông tin My Page “49: Lỗi trùng lặp khóa My Page” → “49: Trùng lặp khóa My Page”
12/129 Copyright ©NTT DATA CORPORATION

---

## Page 13

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/7/9 Toàn bộ Sửa các hạng mục sau:
・Thay đổi để thiết lập giá trị đã được hash bằng SHA-256
cho đơn vị kinh doanh (事業者) trong XML yêu cầu.
2018/7/10 3. Quy ước điện văn Sửa các hạng mục sau:
Đối với mục “Về các trường tùy chọn”, xóa mô tả về thẻ rỗng (empty tag)
và ghi rõ tại từng API.
2018/7/10 3. Quy ước điện văn Sửa các hạng mục sau:
Đối với mục “Về xử lý điện văn 0 bản ghi”, xóa mô tả về thẻ rỗng (empty tag)
và ghi rõ tại từng API.
2018/7/12 C22. Xác thực đăng nhập Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, tại dòng 139, Pattern B, sửa giá trị “Trạng thái xử lý” như sau:
42 → 14
43 → 11
2018/7/12 P10. Tra cứu điểm Sửa các hạng mục sau:
P20. Tra cứu lịch sử biến động điểm ・Trong 3. Tham số phản hồi, tại phần mô tả của “Thông báo lỗi”,
P21. Tra cứu chi tiết điểm khi trạng thái xử lý = 20, sửa nội dung thông báo lỗi như sau:
P40. Cập nhật điểm Trước sửa: “Nội dung bạn nhập có thiếu sót.”
C10. Kiểm tra hội viên (thuộc tính khách hàng) Sau sửa: “Nội dung bạn nhập có thiếu sót. (mục① mục② …)”
C11. Kiểm tra hội viên (mã bảo mật) Lưu ý: Dấu ngoặc là ký tự half-width; các mục lỗi được phân tách bằng dấu cách half-width.
C14. Tra cứu danh sách thẻ đang giữ
C15. Yêu cầu URL
C20. Tra cứu thông tin khách hàng
C21. Cập nhật thông tin khách hàng
C22. Xác thực đăng nhập
C24. Xác thực mã tài khoản
C25. Yêu cầu phát hành số hội viên WEB
C26. Yêu cầu xác nhận thông tin đăng nhập
C27. Thay đổi thông tin My Page
C30. Cấp lại
C32. Hợp nhất
C50. Thay đổi trạng thái hội viên
C51. Hủy tư cách hội viên
S10. Kiểm tra hoạt động
2018/7/19 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, tại phần mô tả của “Độ rộng byte của hóa đơn” và “Phân loại gửi email”, bổ sung nội dung sau:
“※ Hiện tại chưa được triển khai.”
13/129 Copyright ©NTT DATA CORPORATION

---

## Page 14

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/7/19 3. Quy ước điện văn Xóa nội dung sau: 「返送電文の値無しタグについて」
(Về thẻ không có giá trị trong điện văn phản hồi)
2018/7/19 3. Quy ước điện văn Xóa nội dung sau:
「返送電文でDB取得結果を格納する項目はゼロパディングせずに、テーブル定義そのままの値を設定するものとする。」
(Đối với các mục trong điện văn phản hồi lưu kết quả lấy từ DB, không thực hiện zero padding
mà thiết lập giá trị đúng theo định nghĩa bảng)
2018/7/19 Toàn bộ Rà soát và điều chỉnh lại cấu trúc tài liệu.
2018/7/19 C27. Thay đổi thông tin My Page Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, bổ sung Trạng thái xử lý sau:
21: Chưa đăng ký số hội viên
2018/7/19 C27. Thay đổi thông tin My Page Sửa các hạng mục sau:
・Sửa mã trạng thái xử lý 42 → 14.
2018/7/25 C32. Hợp nhất Sửa các hạng mục sau:
・Bổ sung mô tả về cách xác định/đánh giá thuộc tính khách hàng khi thực hiện hợp nhất.
2018/7/26 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, sửa “Khóa tổ chức gia nhập 1–3”
từ mục bắt buộc thành mục tùy chọn.
2018/7/26 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
・Bổ sung lưu ý liên quan đến “Thứ tự ưu tiên thuộc tính”.
2018/7/27 C15. Yêu cầu URL Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, sửa để bỏ yêu cầu bắt buộc đối với các mục:
Mã tài khoản (アカウントコード)
Thời hạn hiệu lực mã tài khoản (アカウントコード有効期限)
2018/7/27 2. Đặc tả chung Sửa các hạng mục sau:
・Đối với kiểm tra độ phức tạp mật khẩu đăng nhập (chuỗi ký tự kết hợp chữ và số),
sửa lỗi đầu ra như sau:
Trước: Lỗi bất thường của mục yêu cầu
Sau: Trạng thái xử lý 44 – Lỗi định dạng mật khẩu
14/129 Copyright ©NTT DATA CORPORATION

---

## Page 15

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/8/6 P40. Cập nhật điểm
・Bổ sung mô tả về phạm vi kiểm tra trùng lặp giao dịch.
2018/8/6 C15. Yêu cầu URL Điều chỉnh thứ tự các thẻ (tag) cho phù hợp với triển khai thực tế.
2018/8/6 C20. Tra cứu thông tin khách hàng Điều chỉnh thứ tự các thẻ (tag) cho phù hợp với triển khai thực tế.
2018/8/27 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
・Bổ sung chức năng kiểm tra ngày tháng đối với ngày giao dịch.
2018/8/29 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, xóa nội dung “未実装 (chưa triển khai)”
trong phần mô tả của “Thông tin thông điệp biên lai”.
2018/8/29 3.2 P10. Tra cứu điểm Bổ sung mục sau:
・Trong 3. Tham số phản hồi → Thông tin thông điệp biên lai, thêm “Thông điệp biên lai”.
2018/8/29 3.2 P40. Cập nhật điểm Bổ sung mục sau:
P10. Tra cứu điểm ・Trong 3. Tham số phản hồi → Thông tin thông điệp biên lai, thêm “Thông điệp quảng cáo”.
2018/8/29 3.2 P40. Cập nhật điểm Bổ sung mục sau:
・Trong 3. Tham số phản hồi → Phân loại hủy trả hàng, thêm mô tả:
11: Trả hàng không có biên lai
2018/8/29 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu → Ngày giao dịch gốc,
bổ sung điều kiện cho “11: Trả hàng không có biên lai”.
2018/8/29 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
・Trong 2. Tham số yêu cầu, thay đổi “Số tiền 5” thành bắt buộc có điều kiện
→ Bắt buộc khi phân loại là “11: Trả hàng không có biên lai”.
2018/8/29 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
P10. Tra cứu điểm ・Trong 3. Tham số phản hồi → Thông điệp biên lai, bổ sung giải thích rằng
ký tự xuống dòng \r có giá trị là 0x0d.
15/129 Copyright ©NTT DATA CORPORATION

---

## Page 16

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/8/29 3.2 C20. Tra cứu thông tin khách hàng Thêm các hạng mục sau:
Thêm “Thông tin liên kết email marketing (メルマガ連携情報)” vào 3. Tham số phản hồi
2018/8/29 3.2 C21. Cập nhật thông tin khách hàng Thêm các hạng mục sau:
Thêm “Thông tin liên kết email marketing (メルマガ連携情報)” vào 2. Tham số yêu cầu
/ 3. Tham số phản hồi
2018/8/29 3.2 P40. Cập nhật điểm Thêm các hạng mục sau:
Bổ sung nội dung dưới đây vào phần mô tả của “Điểm sử dụng” trong 3. Tham số phản hồi:
※ Trường hợp Phân loại hủy trả = 11 (không trả hàng bằng hóa đơn),
thì điểm sử dụng của giao dịch gốc sẽ được thiết lập
2018/8/30 3.2 P40. Cập nhật điểm Bổ sung giải thích:
・Thêm phần bổ sung về điều kiện phát hiện trùng lặp giao dịch
2018/9/13 3.2 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
Thêm nội dung dưới đây vào “Trạng thái xử lý” trong 3. Tham số phản hồi:
37: Lỗi chỉ định thông tin danh mục gửi email marketing
2018/9/13 3.2 C20. Tra cứu thông tin khách hàng Sửa các hạng mục sau:
C21. Cập nhật thông tin khách hàng Bổ sung nội dung sau vào phần mô tả của “Thông tin danh mục gửi” trong 3. Tham số phản hồi:
“Nếu không có danh mục gửi, các mục bên dưới sẽ được trả về dưới dạng thẻ rỗng.”
2018/9/20 3.2 C20. Tra cứu thông tin khách hàng Sửa các hạng mục sau:
C21. Cập nhật thông tin khách hàng Thay đổi “Số lựa chọn danh mục gửi” trong 2. Tham số yêu cầu / 3. Tham số phản hồi từ dạng dọc sang ngang
Tối đa 10 mục
2018/11/2 3.2 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
Thay đổi nội dung mô tả của “Thứ tự ưu tiên thuộc tính”, “Khóa tổ chức đăng ký 1”, “Khóa tổ chức đăng ký 2”,
“Khóa tổ chức đăng ký 3” trong 3. Tham số phản hồi thành:
→“Giá trị XXXX mới nhất sau khi xử lý (Thứ tự ưu tiên thuộc tính hoặc Khóa tổ chức đăng ký 1–3) sẽ được thiết
lập.”
2018/11/2 3.2 C51. Hủy tư cách thành viên Sửa các hạng mục sau:
Thay đổi ký hiệu B (có/không trả về) của “Trạng thái hội viên” và “Mã lý do trạng thái hội viên” trong 3. Tham số
phản hồi từ 「●」 sang 「条」
16/129 Copyright ©NTT DATA CORPORATION

---

## Page 17

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2018/11/16 3.2 C30. Tái phát hành Sửa các hạng mục sau:
Chỉnh sửa phần mô tả của “Lý do tái phát hành” trong 2. Tham số yêu cầu như sau:
1: Tái phát hành do trộm cắp / mất mát → 21: Tái phát hành do trộm cắp / mất mát
2: Tái phát hành do bẩn / hư hỏng → 22: Tái phát hành do bẩn / hư hỏng
3: Tái phát hành do lý do khác → 23: Tái phát hành do lý do khác
2018/11/26 3.2 P10. Tra cứu điểm Sửa các hạng mục sau:
P40. Cập nhật điểm Bổ sung vào phần mô tả của “Thông điệp trên hóa đơn (Receipt Message)” và “Thông điệp quảng cáo
(Commercial Message)” trong 3. Tham số phản hồi rằng:
Toàn bộ nội dung sẽ được bao bọc bằng CDATA section
2018/11/26 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
Đối với “Mã nhóm dịch vụ (Service Group Code)” trong 3. Tham số phản hồi, thay đổi trạng thái của các
phân loại xử lý cập nhật điểm “1”, “2”, “3” từ không trả về sang bắt buộc (●)
2018/12/3 3.2 C30. Tái phát hành Sửa các hạng mục sau:
Chỉnh sửa “Lý do tái phát hành” trong 2. Tham số yêu cầu dựa trên định nghĩa mã:
【Trước khi sửa】
21: Tái phát hành do trộm cắp / mất mát
22: Tái phát hành do bẩn / hư hỏng
【Sau khi sửa】
21: Tái phát hành do bẩn / hư hỏng
22: Tái phát hành do trộm cắp / mất mát
2018/12/4 3.2 P40. Cập nhật điểm Thêm các hạng mục sau:
Thêm “Mã nhóm dịch vụ (Service Group Code)” dưới “Thông tin điểm gắn trực tiếp” trong:
2. Tham số yêu cầu
3. Tham số phản hồi
4. Đặc tả kiểm tra tiêu chuẩn
2018/12/10 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
Thay đổi phần mô tả của “Cờ điện văn xác định (確定電文フラグ)”
2019/1/17 3.2 P40. Cập nhật điểm Bổ sung mô tả sau:
Bổ sung giải thích về nguồn hoàn trả của điểm được cộng và điểm đã sử dụng trong trường hợp giao
dịch trả hàng / giao dịch hủy
17/129 Copyright ©NTT DATA CORPORATION

---

## Page 18

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2019/4/16 3.2 P40. Cập nhật điểm Sửa các hạng mục sau:
Thêm ký hiệu ※1 vào phần mô tả của các mục sau trong 3. Tham số phản hồi: Điểm được cộng theo nhóm dịch vụ
Số lượng giao dịch theo từng hạn sử dụng Điểm được cộng theo từng hạn sử dụng Hạn sử dụng
Thêm phần giải thích cho ※1 ở chú thích ngoài bảng
2019/1/9 4.0 P11. Tra cứu điểm dự kiến được cộng Thêm API mới
2019/1/15 4.0 P40. Cập nhật điểm Thêm các hạng mục sau:
Thêm “Phân loại phân phối PLO (PLO配信区分)” dưới “Thông tin xử lý” trong:
2. Tham số yêu cầu 3. Tham số phản hồi
2019/1/24 4.0 C21. Cập nhật thông tin khách hàng Thêm các hạng mục sau:
Thêm “Thuộc tính Card-free 1–10” dưới “Thông tin hội viên” trong:
2. Tham số yêu cầu 3. Tham số phản hồi
2019/1/30 4.0 P40. Cập nhật điểm Sửa các hạng mục sau:
Thêm 12: Trả hàng không có ngày giao dịch vào “Phân loại hủy/trả (返品取消区分)”
Bổ sung điều kiện “12: Trả hàng không có ngày giao dịch” vào phần mô tả của “Số giao dịch gốc” trong 2. Tham số yêu cầu
Thêm điều kiện: “Số tiền 5” là bắt buộc trong trường hợp 12: Trả hàng không có ngày giao dịch
2019/5/15 4.1 P40. Cập nhật điểm Sửa các hạng mục sau:
Thay đổi phạm vi có thể chỉ định của “Ngày giao dịch” trong 2. Tham số yêu cầu:
Từ: 6 tháng → Còn: 3 tháng
2019/5/17 4.1 P40. Cập nhật điểm Sửa các hạng mục sau:
Bổ sung 11: Trả hàng không có hóa đơn vào phần mô tả của “Phân loại nhận diện tổ chức giao dịch gốc” trong 2.
Tham số yêu cầu
2019/5/27 4.1 C20. Tra cứu thông tin khách hàng Sửa các hạng mục sau:
C21. Cập nhật thông tin khách hàng Sửa lỗi mô tả trong “Số hội viên” tại 3. Tham số phản hồi:
P10. Tra cứu điểm Trước: Nhận diện cùng số hội viên
P40. Cập nhật điểm Sau: Loại số hội viên
2019/7/3 4.1 1. Giới thiệu Ghi rõ rằng không thực hiện mở (cung cấp) màn hình quản trị
2019/8/21 4.1 P10. Tra cứu điểm Sửa các hạng mục sau:
P11. Tra cứu điểm dự kiến được cộng Bổ sung lưu ý trong phần mô tả của “Số tiền cần thiết để lên hạng cao hơn vào năm sau”, “Tên hạng cao hơn của năm sau”, “Tỷ lệ nhân
P40. Cập nhật điểm hạng cao hơn của năm sau” trong 3. Tham số phản hồi liên quan đến:
Các lưu ý trong giai đoạn moratorium (thời gian ân hạn) của việc tính hạng
18/129 Copyright ©NTT DATA CORPORATION

---

## Page 19

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2019/8/29 4.1 P10. Tra cứu điểm Sửa các hạng mục sau:
Chỉnh sửa nội dung mô tả của “Hạn sử dụng” và “Điểm theo từng hạn sử dụng” dưới “Thông tin chi tiết
điểm thông thường” trong 3. Tham số phản hồi như sau:
Thay đổi số lượng tối đa thiết lập của số dư điểm theo tháng (số tháng):
Từ: 6 → Thành: 48
2019/10/2 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
Bổ sung phần mô tả cho “Khóa tổ chức đăng ký (入会組織キー)”
2019/10/17 4.1 2. Đặc tả chung Sửa các hạng mục sau:
Loại bỏ 3 ký tự cấm khỏi tập ký tự cho phép của địa chỉ email, do trước đó có bao gồm nhầm:
‘ , , , “
2019/10/17 4.1 2. Đặc tả chung Sửa các hạng mục sau:
Loại bỏ 3 ký tự cấm khỏi tập ký tự cho phép của mật khẩu đăng nhập, do trước đó có bao gồm nhầm:
‘ , , , “
2019/11/5 4.2 2. Đặc tả chung Sửa các hạng mục sau:
Bổ sung ghi chú vào nội dung kiểm tra của mục “Chuỗi ký tự phải là sự kết hợp chữ và số” trong kiểm
tra độ phức tạp mật khẩu đăng nhập:
Thêm: “(Không được là toàn bộ các ký tự giống nhau)”
(để thống nhất câu chữ với tài liệu đặc tả dịch vụ)
2019/11/5 4.2 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
Thêm kiểm tra phạm vi cho “Năm sinh” trong 4. Đặc tả kiểm tra tiêu chuẩn:
Cho phép từ 1900 đến 9999
2019/11/5 4.2 P40. Cập nhật điểm Sửa các hạng mục sau:
Bổ sung mô tả sau vào “Số tiền 1–5” và “Số tiền thanh toán 1, 2” trong 3. Tham số phản hồi:
※ Tuy nhiên, trong các trường hợp trả hàng hàng loạt do hệ thống trung tâm tính toán, hủy (sai lệch), trả
hàng không có hóa đơn, trả hàng không có ngày giao dịch, thì giá trị được thiết lập sẽ là giá trị được
trung tâm phân bổ từ giao dịch gốc.
2020/2/3 4.2 P20. Tra cứu lịch sử biến động điểm Thêm các hạng mục sau:
Thêm “Mã lý do biến động điểm” vào 3. Tham số phản hồi
2020/2/27 4.2 P40. Cập nhật điểm Thêm các hạng mục sau:
Trong 2. Tham số yêu cầu, dưới “Thông tin điểm gắn trực tiếp”, bổ sung vào phần mô tả của “Điểm gắn
trực tiếp” nội dung sau:
Khi cộng/trừ điểm gắn trực tiếp, bắt buộc phải thiết lập giá trị là số dương hoặc số âm
19/129 Copyright ©NTT DATA CORPORATION

---

## Page 20

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2020/4/10 4.3 P10. Tra cứu điểm Thêm các hạng mục sau:
P40. Cập nhật điểm Thêm “Số tiền tổng hợp hiện tại (現在集計金額)” vào 3. Tham số phản hồi
2020/5/27 4.4 C32. Tích hợp Sửa tổng quan xử lý như sau:
Chỉnh sửa mô tả về thứ tự ưu tiên khi tích hợp:
0: Bình thường
＞ 7: Thẻ không hợp lệ (có thể khôi phục)
＞ 8: Thẻ không hợp lệ (không thể khôi phục)
2020/5/27 4.4 Toàn bộ tài liệu Xóa ký tự tên công ty (社名)
2020/6/2 4.4 P10. Tra cứu điểm ～ S10. Xác nhận vận hành Điều chỉnh vị trí ngắt trang
2020/6/3 4.4 P10. Tra cứu điểm Sửa 1. Tổng quan xử lý:
Bổ sung mô tả về nội dung xử lý tra cứu điểm theo từng “Phân loại xử lý tra cứu điểm”
Sửa tên chức năng của P21
2020/6/3 4.4 P20. Tra cứu lịch sử biến động điểm Sửa 1. Tổng quan xử lý:
Bổ sung câu sau vào phần mô tả về việc lấy thông tin lịch sử biến động điểm:
※ Số lượng bản ghi tra cứu được khuyến nghị tối đa là 100.
2020/6/3 4.4 P21. Tra cứu chi tiết điểm Sửa 1. Tổng quan xử lý như sau:
Trước khi sửa Tra cứu thông tin chi tiết điểm của lịch sử đã chỉ định trong tra cứu lịch sử biến động điểm.
↓
Sau khi sửa
Sau khi thực hiện API tra cứu lịch sử biến động điểm, chỉ định một giao dịch, và tra cứu thông tin chi tiết của giao dịch
đó.
※ Thời gian tra cứu trong phạm vi từ ngày hiện tại trở về tối đa 3 tháng.
2020/6/3 4.4 C15. Yêu cầu URL Sửa 1. Tổng quan xử lý như sau:
Bổ sung mô tả sau:
“Có thể sử dụng chức năng này của CAFIS Explorer để thực hiện xác thực thiết bị.”
Chỉnh sửa nội dung tham chiếu tài liệu về phương thức mã hóa như sau:
Trước: (Tham chiếu tài liệu điều kiện sử dụng Online API về phương thức mã hóa)
Sau: (Tham chiếu tài liệu đặc tả dịch vụ “Phần chính – Online API”, mục 1.2.1 Mã hóa theo từng hạng
mục)
2020/6/3 4.4 C10. Kiểm tra hội viên (thuộc tính khách hàng) Sửa 1. Tổng quan xử lý như sau:
Chỉnh sửa nội dung tham chiếu tài liệu về phương thức mã hóa giống như C15.URL yêu cầu:
Trước: (Tham chiếu tài liệu điều kiện sử dụng Online API về phương thức mã hóa)
Sau: (Tham chiếu tài liệu đặc tả dịch vụ “Phần chính – Online API”, mục 1.2.1 Mã hóa theo từng hạng
mục)
20/129 Copyright ©NTT DATA CORPORATION

---

## Page 21

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2020/6/3 4.4 C20. Tra cứu thông tin khách hàng Sửa 1. Tổng quan xử lý như sau:
Chỉnh sửa nội dung tham chiếu tài liệu về phương thức mã hóa:
Trước: (Tham chiếu tài liệu điều kiện sử dụng Online API về phương thức mã hóa)
Sau: (Tham chiếu tài liệu đặc tả dịch vụ “Phần chính – Online API”, mục 1.2.1 Mã hóa theo từng hạng
mục)
2020/6/3 4.4 C21. Cập nhật thông tin khách hàng Sửa 1. Tổng quan xử lý như sau:
Chỉnh sửa nội dung tham chiếu tài liệu về phương thức mã hóa tương tự như C20:
Trước: (Tham chiếu tài liệu điều kiện sử dụng Online API về phương thức mã hóa)
Sau: (Tham chiếu tài liệu đặc tả dịch vụ “Phần chính – Online API”, mục 1.2.1 Mã hóa theo từng hạng
mục)
2020/6/3 4.4 2. Đặc tả chung Sửa các hạng mục sau:
Xóa các nội dung bị trùng lặp với tài liệu đặc tả dịch vụ “Phần chính – Online API”, từ:
2.1 Sơ đồ cấu hình hệ thống giữa hệ thống bên ngoài và CE
đến 2.8 Về việc kiểm tra tính duy nhất của giao dịch
2020/7/30 4.4 P10. Tra cứu điểm Thêm các hạng mục sau:
P40. Cập nhật điểm Thêm vào 3. Tham số phản hồi các mục:
「Tổng số tiền tổng hợp của năm trước」
「Tên hạng tổng hợp của năm trước」
「Hệ số hạng tổng hợp của năm trước」
「Tên hạng tổng hợp hiện tại」
「Hệ số hạng tổng hợp hiện tại」
2020/9/4 4.4 P10. Tra cứu điểm Thêm / sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa ký hiệu ※1 khỏi các mục:
「Số tiền cần thiết để lên hạng cao hơn vào năm sau」
「Tên hạng cao hơn của năm sau」
「Hệ số hạng cao hơn của năm sau」
Thêm vào 3. Tham số phản hồi các mục sau:
「Số tiền cần thiết để lên hạng cao hơn của tổng hợp hiện tại」
「Tên hạng cao hơn của tổng hợp hiện tại 」
「Hệ số hạng cao hơn của tổng hợp hiện tại」
Xóa chú thích sau:
※1: Trong các trường hợp đặc biệt (trường hợp có độ lệch giữa thời điểm xác định hạng và thời gian áp dụng),
thông tin hạng cao hơn của ‘năm kế tiếp’ sẽ không được trả về,
mà thay vào đó là thông tin hạng cao hơn của ‘năm sau nữa’.
21/129 Copyright ©NTT DATA CORPORATION

---

## Page 22

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2020/9/4 4.4 P40. Cập nhật điểm Thêm / sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa ký hiệu ※2 khỏi các mục:
「Số tiền cần thiết để lên hạng cao hơn vào năm sau」
「Tên hạng cao hơn của năm sau」
「Hệ số hạng cao hơn của năm sau」
Thêm vào 3. Tham số phản hồi các mục sau:
「Số tiền cần thiết để lên hạng cao hơn của tổng hợp hiện tại」
「Tên hạng cao hơn của tổng hợp hiện tại 」
「Hệ số hạng cao hơn của tổng hợp hiện tại」
Xóa chú thích sau:
※2: Trong các trường hợp đặc biệt (trường hợp có độ lệch giữa thời điểm
xác định hạng và thời gian áp dụng), thông tin hạng cao hơn
sẽ không phải là ‘năm sau’ mà là ‘năm sau nữa’
2020/10/30 4.4 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
Đối với bảng ABC của “Trạng thái xử lý” trong 3. Tham số phản hồi:
Do dòng B đang bị làm mờ (grey-out) nên xóa dòng B
Chuyển nội dung của dòng C lên dòng B
2020/10/30 4.4 C24. Xác thực mã tài khoản Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa nội dung ở cột C của mục có/không trả về
2020/10/30 4.4 C27. Thay đổi thông tin My Page Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa nội dung ở cột C của mục có/không trả về
2020/10/30 4.4 C27. Thay đổi thông tin My Page Sửa lỗi trong tổng quan xử lý:
Trong ma trận của 1. Tổng quan xử lý, chỉnh sửa nội dung sau:
Trước: 42: Mật khẩu đăng nhập không khớp
Sau: 14: Mật khẩu đăng nhập không khớp
2020/10/30 4.4 C51. Hủy tư cách thành viên Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa nội dung ở cột C của mục có/không trả về
2020/10/30 4.4 S10. Xác nhận vận hành Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, xóa nội dung ở cột C của mục có/không trả về
22/129 Copyright ©NTT DATA CORPORATION

---

## Page 23

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2020/12/11 4.41 C15. Yêu cầu URL Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, chỉnh sửa số chữ số tối đa (byte) của “Thời hạn hiệu lực mã tài khoản” cho phù hợp với định dạng
（AL183）
2020/12/11 4.41 C21. Cập nhật thông tin khách hàng Sửa các hạng mục sau:
Bổ sung mô tả Trạng thái xử lý = 37: Lỗi chỉ định thông tin danh mục gửi email marketing vào 3. Tham số phản hồi
（AW373）
2021/4/12 4.50 4. Danh sách Online API Thêm mới các API sau:
・「C16_ Tra cứu số hội viên」
2021/4/12 4.50 C16_ Tra cứu số hội viên Thêm mới API
2021/4/23 4.51 C16_ Tra cứu số hội viên Bổ sung / sửa các hạng mục sau:
Bổ sung nội dung mô tả cho 1. Tổng quan xử lý
Xa các mục sau khỏi
・2. Tham số yêu cầu / 3. Tham số phản hồi
「Họ」
「Tên」
「Họ (Kana)」
「Tên (Kana)」
「Năm sinh」
「Tháng sinh」
「Ngày sinh」
・Trong 3. Tham số phản hồi, xóa nội dung “7: Có nhiều khách hàng phù hợp” khỏi phần mô tả của:
Trạng thái xử lý Thông báo lỗi
・Trong 3. Tham số phản hồi, bổ sung đặc tả sắp xếp (sort) vào phần
mô tả của “Thông tin danh sách thẻ đang giữ”
2021/6/15 4.52 P21. Tra cứu chi tiết điểm Sửa các hạng mục sau:
・Trong 3. Tham số phản hồi, chỉnh sửa số chữ số tối đa (byte) của “Hạn sử dụng” như sau:
Dưới “Thông tin chi tiết điểm thông thường”: 1 → 8
Dưới “Thông tin chi tiết điểm có thời hạn”: 1 → 8
23/129 Copyright ©NTT DATA CORPORATION

---

## Page 24

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2021/8/6 4.53 C14. Tra cứu danh sách thẻ đang giữ Sửa các hạng mục sau:
C16. Tra cứu số hội viên Trong 3. Tham số phản hồi, chỉnh sửa kiểu dữ liệu logic của các mục sau từ số sang chuỗi ký tự toàn/ nửa chiều rộng:
「Thuộc tính Card-free 1 (text)
「Thuộc tính Card-free 2 (text)
「Thuộc tính Card-free 3 (text)
「Thuộc tính Card-free 4 (text)
「Thuộc tính Card-free 5 (text)
2021/9/2 4.54 P21. Tra cứu chi tiết điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, chỉnh sửa nội dung mô tả của “Hệ số điểm” như sau:
Trước: Hệ số của chiến dịch sẽ được thiết lập. ※ Ngoài chiến dịch hệ số thì sẽ là thẻ rỗng.
Sau: Hệ số của chiến dịch sẽ được thiết lập.
2021/9/2 4.55 P21. Tra cứu chi tiết điểm Sửa các hạng mục sau:
・Trong 1. Tổng quan xử lý, chỉnh sửa nội dung như sau:
Trước: Thời gian tra cứu trong phạm vi từ ngày hiện tại trở về 3 tháng.
Sau: Thời gian tra cứu được thiết lập bằng tham số theo từng doanh nghiệp, cho phép thiết lập trong phạm
vi từ tháng hiện tại trở về tối đa 12 tháng.
2021/10/4 4.56 P40. Cập nhật điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, dưới “Thông tin lỗi”, chỉnh sửa trạng thái trả về (A) của “Thông báo lỗi” thành 「条」
Lý do: được thiết lập khi Trạng thái xử lý = 18: Không đủ số dư
2021/10/14 4.57 P21. Tra cứu chi tiết điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, chỉnh sửa trạng thái trả về (A) và bổ sung mô tả như sau:
“Thông tin chi tiết biến động điểm”
Trạng thái trả về A → 「条」 Bổ sung mô tả: “Nếu không có điểm được cộng thì sẽ không được thiết lập.”
“Thông tin chi tiết điểm thông thường”
Trạng thái trả về A → 「条」 Bổ sung mô tả: “Nếu không có tăng/giảm đối với điểm thông thường thì sẽ không được thiết lập.”
Thông tin chi tiết điểm có thời hạn”
Bổ sung mô tả: “Nếu không có tăng/giảm đối với điểm có thời hạn thì sẽ không được thiết lập.”
2022/6/28 4.58 P21. Tra cứu chi tiết điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, chỉnh sửa tên thẻ (tag name) như sau:
“Lý do biến động điểm” → HENDO_RIYU
“Mô tả lý do biến động điểm” → HENDO_RIYU_SETSUMEI
24/129 Copyright ©NTT DATA CORPORATION

---

## Page 25

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2023/1/18 4.59 P20. Tra cứu lịch sử biến động điểm Sửa các hạng mục sau:
P21. Tra cứu chi tiết điểm Trong 3. Tham số phản hồi, thay đổi số byte tối đa của:
Cửa hàng giao dịch
Đơn vị thuê (tenant) giao dịch
Từ: 40 → Thành: 60 byte
2023/1/18 4.59 P10. Tra cứu điểm Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, thay đổi số byte tối đa của:
Tên cửa hàng
Tên đơn vị thuê (tenant)
Từ: 20 → Thành: 60 byte
2023/1/18 4.59 C20. Tra cứu thông tin khách hàng Sửa các hạng mục sau:
C21. Cập nhật thông tin khách hàng Trong 3. Tham số phản hồi, thay đổi số byte tối đa của:
Cửa hàng đăng ký
Đơn vị thuê (tenant) đăng ký
Từ: 40 → Thành: 60 byte
2023/1/18 4.59 3. Quy ước điện văn Sửa nội dung sau:
Do có mô tả về ký tự escape cho các ký tự ‘ và “ vốn là ký tự không được CE xử lý, nên xóa mô tả này
2023/1/18 4.59 C10. Kiểm tra hội viên (thuộc tính khách hàng) Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, chỉnh sửa số byte tối đa của các mục sau:
Kiểm tra họ tên / Kiểm tra họ tên Kana: 40※1 → 80※1 byte
Kiểm tra mã bưu điện: 7 → 8※1 byte
Kiểm tra địa chỉ email: 15※1 → 60※1 byte
2023/1/18 4.59 C15. Yêu cầu URL Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, chỉnh sửa số byte tối đa của “URL phản hồi”:
200 → 284 byte
2023/1/18 4.59 C26. Yêu cầu xác nhận thông tin đăng nhập Sửa các hạng mục sau:
Trong 3. Tham số phản hồi, chỉnh sửa số byte tối đa của:
Kiểm tra họ tên
Kiểm tra họ tên Kana
40※1 → 80※1 byte
25/129 Copyright ©NTT DATA CORPORATION

---

## Page 26

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2023/2/10 4.60 P40. Cập nhật điểm Do mở rộng chức năng, tiến hành chỉnh sửa các hạng mục sau:
Bổ sung mục mới “Chỉ định điểm thường” vào: 2. Tham số yêu cầu 3. Tham số phản hồi
Trong 2. Tham số yêu cầu, tại “Thông tin điểm sử dụng” → “Điểm sử dụng”, bổ sung nội dung mô tả.
Trong 2. Tham số yêu cầu, tại “Thông tin điểm sử dụng” → “Mã nhóm dịch vụ”,
bổ sung mô tả về chức năng giới hạn sử dụng điểm.
Trong 3. Tham số phản hồi, tại “Thông tin giao dịch theo nhóm dịch vụ” → “Mã nhóm dịch vụ”,
chi tiết hóa phần mô tả, bổ sung nội dung sau:
「【Trường hợp phân loại xử lý cập nhật điểm: 3】
Mã của tất cả các nhóm dịch vụ liên kết với số hội viên trong yêu cầu sẽ được thiết lập.
【Trường hợp phân loại xử lý cập nhật điểm: 4】」 を追記。
Trong 3. Tham số phản hồi, tại phần mô tả của “Trạng thái xử lý” – (18: Không đủ số dư),
bổ sung nội dung sau:
Khi Chỉ định điểm thường = 1 (chỉ sử dụng điểm thường):→ Chỉ điểm thường
Khi Chỉ định điểm thường ≠ 1:→ Điểm thường + điểm có thời hạn
2023/2/10 4.60 P40. Cập nhật điểm – Chi tiết hóa phần mô tả Tiến hành chi tiết hóa mô tả cho các hạng mục sau:
Trong 2. Tham số yêu cầu, tại “Điểm sử dụng”,bổ sung điều kiện của nhóm dịch vụ 대상 (đối tượng áp dụng).
Trong “Thông tin điểm sử dụng” → “Mã nhóm dịch vụ”,
chỉnh sửa lại ví dụ trong trường hợp chỉ định và sử dụng đồng thời 2 nhóm dịch vụ.
Trong 3. Tham số phản hồi, tại “Trạng thái xử lý” – 18: Không đủ số dư,
bổ sung điều kiện của nhóm dịch vụ là đối tượng áp dụng.
26/129 Copyright ©NTT DATA CORPORATION

---

## Page 27

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2023/2/10 4.60 P40. Cập nhật điểm – Chi tiết hóa phần mô tả Tiến hành chi tiết hóa / chỉnh sửa mô tả cho các hạng mục sau:
・2. Tham số yêu cầu
“Mã thiết bị (端末番号)”: Chi tiết hóa điều kiện thiết lập trong cột mô tả.
Trong “Thông tin giao dịch theo hạn sử dụng” → “Điểm được cấp theo từng hạn sử dụng”:
Bổ sung nội dung vào phần mô tả rằng không thể thiết lập số điểm được cấp là giá trị âm.
・3. Tham số phản hồi
Trong “Thông tin giao dịch theo nhóm dịch vụ” → “Tên viết tắt nhóm dịch vụ”:
Xóa mô tả liên quan đến đối tượng được cấp điểm.
Trong “Thông tin chi tiết cấp điểm”: “Điểm cấp thông thường”
“Số lượng giao dịch theo hạn sử dụng” → Sửa trạng thái phản hồi A thành “điều kiện (条)”.
Trong “Thông tin giao dịch theo nhóm dịch vụ” → “Thông tin chi tiết cấp điểm”, bổ sung mô tả sau:
「※ Trong trường hợp giao dịch không có cấp điểm, chỉ sử dụng điểm,
thì các thông tin thuộc mục này sẽ không được thiết lập.
Trong “Thông tin giao dịch theo từng chiến dịch”: “Số thứ tự hiển thị” “Tên viết tắt chiến dịch”
“Điểm cấp theo chiến dịch” → Sửa trạng thái phản hồi A thành “điều kiện (条)”.
Trong “Thông tin dịch vụ” → “Thông tin điểm” → “Thông tin chi tiết điểm thường”,
bổ sung mô tả sau:
「※ Thông tin chi tiết của các hạn sử dụng có điểm còn lại = 0 cũng sẽ được thiết lập.」
Trong “Thông tin dịch vụ” → “Thông tin điểm” → “Điểm có thời hạn theo nhóm dịch vụ”,
bổ sung mô tả sau:
「※ Ngay cả khi không vận hành điểm có thời hạn, mục này vẫn được thiết lập.」
Trong “Thông tin dịch vụ” → “Thông tin điểm” → “Thông tin chi tiết điểm có thời hạn”,
bổ sung mô tả sau:
「※ Nếu không vận hành điểm có thời hạn, các thông tin thuộc mục này sẽ không được thiết lập.」
Trong “Thông tin điểm” → “Thông tin chi tiết điểm có thời hạn” → “Hạn sử dụng”,
“Điểm theo từng hạn sử dụng”:
Sửa trạng thái phản hồi A thành “điều kiện (条)” Bổ sung mô tả:
Khi điểm còn lại của điểm có thời hạn = 0: → Cả hạn sử dụng và điểm theo hạn sử dụng đều được thiết lập là 0.
Khi điểm còn lại của điểm có thời hạn ≠ 0:→ Chỉ thiết lập phần điểm còn lại theo từng kỳ hạn.
Trong “Thông tin giao dịch theo nhóm dịch vụ”,
bổ sung mô tả về điều kiện lặp lại theo từng nhóm dịch vụ.
2023/12/12 4.70 P22. Tra cứu lịch sử biến động điểm toàn bộ SG Bổ sung API mới.
27/129 Copyright ©NTT DATA CORPORATION

---

## Page 28

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2023/12/12 4.70 P10. Tra cứu điểm – Chi tiết hóa phần mô tả Chi tiết hóa mô tả cho các hạng mục sau:
3. Tham số phản hồi
「Trong “Thông tin chi tiết điểm thường”, bổ sung mô tả sau:
「※ Thông tin chi tiết của các hạn sử dụng có điểm còn lại = 0 cũng sẽ được thiết lập.」
「Trong “Điểm có thời hạn theo nhóm dịch vụ”, bổ sung mô tả sau:
「※ Ngay cả khi không vận hành điểm có thời hạn, mục này vẫn được thiết lập.」
「Trong “Thông tin chi tiết điểm có thời hạn”, bổ sung mô tả sau:
「※ Nếu không vận hành điểm có thời hạn, các thông tin thuộc mục này sẽ không được thiết lập.」
Trong “Thông tin chi tiết điểm có thời hạn” → “Hạn sử dụng”,
“Điểm theo từng hạn sử dụng”:
→ Sửa trạng thái phản hồi A thành “điều kiện (条)”.
2023/12/12 4.70 P20. Tra cứu lịch sử biến động điểm Chi tiết hóa mô tả cho các hạng mục sau:
– Chi tiết hóa phần mô tả 3. Tham số phản hồi
“Mã giao dịch”:
Sửa trạng thái phản hồi A thành “điều kiện (条)”
「※Bổ sung mô tả: Nếu mã giao dịch của giao dịch tương ứng chưa được thiết lập, thẻ sẽ là thẻ rỗng.」
「“Mô tả lý do biến động điểm”:
Sửa trạng thái phản hồi A thành “điều kiện (条)”
「※Bổ sung mô tả: Nếu mô tả lý do biến động điểm của giao dịch tương ứng chưa được thiết lập, thẻ sẽ là thẻ
rỗng.」
2023/12/21 4.70 P20. Tra cứu lịch sử biến động điểm Chi tiết hóa mô tả xử lý
P22. Tra cứu lịch sử biến động điểm toàn bộ SG Trong 1. Tổng quan xử lý,
sửa mô tả thời gian tra cứu lịch sử biến động điểm thành:
Theo thiết lập tiêu chuẩn: từ tháng hiện tại và tối đa 12 tháng trước đó.
2024/6/12 4.71 C11. Kiểm tra hội viên (mã bảo mật) (Các trạng thái này không được trả về ở API 15, 16)
– Chỉnh sửa ・Xóa trạng thái xử lý 15:（Hoàn tất bình thường – Số hội viên không hợp lệ (bị hạn chế)
・Xóa trạng thái xử lý 16:（Hoàn tất bình thường – Số hội viên không hợp lệ (không cho phép)
2024/6/12 4.71 P40. Cập nhật điểm 返信パラメータ
– Chỉnh sửa mô tả tham số phản hồi Ngày giao dịch gốc:
Sửa lỗi câu chữ trong mô tả:
「元取引日付設定します。」⇒ 「元取引日付を設定します。」
Thời gian giao dịch gốc:
Sửa lỗi câu chữ trong mô tả:
「元取引時刻します。」⇒ 「元取引時刻を設定します。」
「“Trạng thái xử lý”」
Sửa mô tả của 19: Trùng lặp giao dịch
Xóa mô tả liên quan đến việc kiểm tra trùng lặp theo giá trị thiết lập của phân loại cập nhật điểm.
28/129 Copyright ©NTT DATA CORPORATION

---

## Page 29

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2025/5/7 5.00 C28. Phát hành số hội viên Thêm mới API
2025/5/7 5.00 P20. Tra cứu lịch sử biến động điểm Bổ sung “Số thứ tự xử lý điểm” vào điều kiện sắp xếp hiển thị.
P22. Tra cứu lịch sử biến động điểm toàn bộ SG
2025/5/7 5.00 C15. Yêu cầu URL Chi tiết hóa mô tả
Trong 1. Tổng quan xử lý và 3. Tham số phản hồi – “URL phản hồi”,bổ sung mô tả rằng:
Khi thiết lập khóa mã hóa, thì key My Page và phần mã tài khoản trong URL phản hồi sẽ được mã hóa.
Trong 3. Tham số phản hồi – “URL phản hồi”,
bổ sung chú thích tại mục đối tượng mã hóa.
2025/5/7 5.00 P40. Cập nhật điểm Bổ sung nội dung
・Trong 1. Tổng quan xử lý, bổ sung mô tả về xử lý bù trừ điểm:
「Khi trong giao dịch, điểm sử dụng có phát sinh cộng/trừ, và số dư trước xử lý tồn tại giá trị âm,
thì xử lý bù trừ điểm sẽ được thực hiện.
「（(Tham khảo chi tiết tại Tài liệu đặc tả dịch vụ – “Phần chính 03_Quản lý dịch vụ”,
2.3.5. Xử lý bù trừ khi sử dụng điểm)
・Trong 1. Tổng quan xử lý, bổ sung nội dung sau:
・Khi sử dụng Tài liệu đặc tả dịch vụ 2.4. Trả hàng / Hủy (có giao dịch gốc),
chỉ định Phân loại trả hàng/hủy tương ứng.
・Khi sử dụng Tài liệu đặc tả dịch vụ 2.5. Trả hàng / Hủy (không có giao dịch gốc),
Phân loại trả hàng/hủy được chỉ định là “99: Trường hợp khác”.
2025/7/9 5.01 Toàn bộ tài liệu Chỉnh sửa bố cục trang.
Sửa lỗi nội dung chữ bị cắt / tràn.
Đối với phần Header, xóa thông tin “Loại thông tin: Mật (Nội bộ ngoài dự án)”.
（Trước khi sửa:）
Loại thông tin: Mật (Nội bộ ngoài dự án)
会社名：株式会社ＮＴＴデータ
情報所有者：コンサルティング事業本部
（修正後）
会社名：株式会社ＮＴＴデータ
情報所有者：コンサルティング事業本部
29/129 Copyright ©NTT DATA CORPORATION

---

## Page 30

Lịch sử thay đổi
Ngày Ver Vị trí thay đổi Nội dung thay đổi
2025/7/9 5.01 P40. Cập nhật điểm Trong 1. Tổng quan xử lý, bổ sung mô tả về trả hàng / hủy:
(Đối với trả hàng / hủy (có giao dịch gốc), tham khảo Tài liệu đặc tả dịch vụ – “Phần chính 03_Quản lý
dịch vụ”, mục 2.4. Trả hàng / Hủy)
(Đối với trả hàng / hủy (không có giao dịch gốc), tham khảo Tài liệu đặc tả dịch vụ – “Phần chính
03_Quản lý dịch vụ”, mục 2.5. Trả hàng / Hủy (không có giao dịch gốc))
2025/7/9 5.01 C28. Phát hành số hội viên Chỉnh sửa tiêu đề (sửa lỗi ghi nhầm)
Trước khi sửa: I. Phát hành số hội viên
Sau khi sửa: C28. Phát hành số hội viên
2025/7/9 5.01 4. Danh sách Online API Thêm mới API sau:
C28. Phát hành số hội viên
Trong phần mô tả tổng quan của “P22. Tra cứu lịch sử biến động điểm toàn bộ SG”,
xóa nội dung sau (sửa lỗi ghi nhầm):
Bắt buộc phải thực hiện tra cứu điểm trước thì mới được phép sử dụng API.
30/129 Copyright ©NTT DATA CORPORATION

---

## Page 31

Tên hệ thống Phân loại Nội dung mô tả
Tài liệu đặc tả giao diện
CAFIS Explorer API trực tuyến Giới thiệu
1. Giới thiệu
・ Tài liệu này là tài liệu định nghĩa giao diện liên quan đến các Online API do CAFIS Explorer cung cấp.
Tài liệu đặc tả dịch vụ (Phần Online API) ・・・Là tài liệu mô tả các đặc tả dùng chung, điều kiện kết nối của Online API, cũng như các ví dụ sử dụng Online API phù hợp với nghiệp vụ.
Tài liệu định nghĩa giao diện (Online API) ・・・Là tài liệu đặc tả hệ thống mô tả đặc tả điện văn (message / payload) của từng Online API
→ Chính là tài liệu này.
・ Việc kết nối từ hệ thống bên ngoài chỉ áp dụng cho Online API; không cung cấp / không mở quyền truy cập vào màn hình quản trị (admin).
31/129 Copyright ©NTT DATA CORPORATION

---

## Page 32

Tên hệ thống Phân loại Nội dung mô tả
Tài liệu đặc tả giao diện
CAFIS Explorer API trực tuyến Giới thiệu
2. Quy định chung
・ Chương này mô tả các đặc tả của CE áp dụng chung cho tất cả các API.
2.1 Nội dung các hạng mục trong tài liệu định nghĩa
・ Kiểu dữ liệu logic ・ Bắt buộc thiết lập
・Kiểu dữ liệu có thể được thiết lập cho từng hạng mục được định nghĩa như sau:
Tên hiển thị Loại ký tự ※ Điều kiện được mô tả trong phần giải thích
Số (数値) Chữ số half-width ・Để trống = không bắt buộc
数値(条) Chữ số half-width (dạng chuỗi, ví dụ: số bắt đầu bằng 0)
Chữ và số half-width Chữ số half-width, chữ cái half-width
Số & ký hiệu half-widthChữ số half-width, ký hiệu half-width
Chữ, số & ký hiệu half-widthChữ số half-width, chữ cái half-width, ký hiệu half-width
Ký tự half-width Kana half-width, chữ số half-width, chữ cái half-width, ký hiệu half-width
Ký tự full-width Ký hiệu full-width, hiragana, katakana, chữ số full-width, chữ cái full-width, chữ Hán (kanji), v.v.
Ký tự full-width & half-widthTất cả các loại ký tự nêu trên
2.2 Kiểm tra địa chỉ email
・ Địa chỉ email sẽ được kiểm tra theo các điều kiện sau:
【Nội dung kiểm tra địa chỉ email】 Các ký tự được phép sử dụng trong địa chỉ email
例）aaaaa@bbbb.ccc Loại ký tự Phạm vi ký tự
aaaaa Phải là chuỗi gồm ít nhất 1 ký tự chữ cái hoặc chữ số half-width, hoặc ký hiệu Chữ số half-widtThrong phạm vi 0–9
bbbb Phải có ít nhất 1 ký tự, và ký tự đầu tiên là chữ cái hoặc chữ số half-width Chữ cái half-widTthrong phạm vi A–Z hoặc a–z
Từ ký tự thứ 2 trở đi phải là chữ cái hoặc chữ số half-width, hoặc các ký hiệu “-”, “.” Ký hiệu ! # $ % & ( ) * + . - / :
cccc Phải có từ 2 ký tự trở lên và chỉ gồm chữ cái hoặc chữ số half-width ; < = > ? @[ \ ] ^ _ ` { | } ~
Khác Sau ký tự @, bắt buộc phải chứa ít nhất 1 dấu “.”
・ Trong trường hợp không đáp ứng các nội dung kiểm tra nêu trên, hệ thống sẽ trả về
Trạng thái xử lý 34: Lỗi định dạng địa chỉ email.
2.3 Kiểm tra độ phức tạp của mật khẩu đăng nhập
・ Việc kiểm tra độ phức tạp của mật khẩu đăng nhập được thực hiện khi cập nhật mật khẩu đăng nhập.
Tùy theo từng đơn vị/đối tác (business operator) mà có thể cấu hình bật hoặc tắt việc kiểm tra này.
【Nội dung kiểm tra độ phức tạp của mật khẩu đăng nhập】 【Các ký tự được phép sử dụng trong địa chỉ email】
Nội dung kiểm tra Lỗi trả về Loại ký tự Phạm vi ký tự
Phải là chuỗi kết hợp chữ cái và chữ số Trạng thái xử lý 44: Lỗi định dạng mật khẩu Chữ số half-widTthrong phạm vi 0–9
（全桁同一文字ではないこと） Chữ cái ha lfA-～wiZdtまhたはa～zの範囲
Độ dài nằm trong khoảng từ 8 đến 20 ký tự (*1)Trạng thái xử lý 44: Lỗi định dạng mật khẩu Ký hiệu ! # $ % & ( ) * + . - / :
; < = > ? @[ \ ] ^ _ ` { | } ~
※1: Giới hạn trên và dưới của số ký tự có thể được cấu hình bằng tham số cho từng đơn vị/đối tác.
Đối với các ký tự bị cấm trong XML như “&” (dấu và), “<”, “>” (dấu ngoặc nhọn), cần sử dụng CDATA section để mô tả.
Tuy nhiên, chuỗi kết thúc CDATA là ]]> không được phép sử dụng làm ký tự trong mật khẩu.
32/129 Copyright ©NTT DATA CORPORATION

---

## Page 33

Tên hệ thống Phân loại Nội dung mô tả
Tài liệu đặc tả giao diện
CAFIS Explorer API trực tuyến Giới thiệu
3. Quy ước điện văn
3.1 Quy ước điện văn
【Yêu cầu】
Hạng mục Tên tag Quan hệ với tag cha Mô tả
Giao dịch kết nối bên ngoài EXTERNAL - Tag gốc
Thông tin bên gửi yêu cầu YOUKYUMOTO_INFO 1 Tag dùng để lưu trữ thông tin bên gửi yêu cầu. Tham khảo chương của từng chức năng
Tham khảo chương của từng chức năng Tham khảo chương của từng chức năng 1 Tham khảo chương của từng chức năng
Header kết nối bên ngoài EXTERNALHDR 1 Tag dùng để lưu trữ thông tin bên gửi yêu cầu. Tham khảo chương của từng chức năng
Tham khảo chương của từng chức năng Tham khảo chương của từng chức năng ・・・ Tham khảo chương của từng chức năng
【Hình ảnh minh họa điện văn yêu cầu】
<EXTERNAL>
<YOUKYUMOTO_INFO>
<CHANEL_SHIKIBETSU>XXX</CHANEL_SHIKIBETSU>
</YOUKYUMOTO_INFO>
<EXTERNALHDR>
※Tham khảo từng chương tương ứng
</EXTERNALHDR>
</EXTERNAL>
【Phản hồi】
Hạng mục Tên tag Quan hệ với tag cha Mô tả
Giao dịch kết nối bên ngoài EXTERNAL - Tag gốc
Thông tin bên gửi yêu cầu YOUKYUMOTO_INFO 1 Tag dùng để lưu trữ thông tin bên gửi yêu cầu. Tham khảo chương của từng chức năng
Tham khảo chương của từng chức năng Tham khảo chương của từng chức năng 1～ Tham khảo chương của từng chức năng
Header kết nối bên ngoài EXTERNALHDR 1 Tag dùng để lưu trữ thông tin nghiệp vụ. Tham khảo chương của từng chức năng
Tham khảo chương của từng chức năng Tham khảo chương của từng chức năng ・・・ Tham khảo chương của từng chức năng
【Hình ảnh minh họa điện văn phản hồi】
<EXTERNAL>
<YOUKYUMOTO_INFO>
<CHANEL_SHIKIBETSU>XXX</CHANEL_SHIKIBETSU>
</YOUKYUMOTO_INFO>
<EXTERNALHDR>
※Tham khảo từng chương tương ứng
</EXTERNALHDR>
</EXTERNAL>
33/129 Copyright ©NTT DATA CORPORATION

---

## Page 34

Tên hệ thống Phân loại Nội dung mô tả
Tài liệu đặc tả giao diện
CAFIS Explorer API trực tuyến Giới thiệu
3.2 Về các ký tự cấm
Đối với các ký tự cấm trong XML, không được thiết lập các ký tự “&” (ampersand), “<”, “>” (dấu ngoặc nhọn) trong nội dung của từng hạng mục.
・ Phương pháp escape
・ Khi cần sử dụng các ký tự cấm như là nội dung của hạng mục, hãy mô tả bằng CDATA section hoặc Entity reference (tham chiếu thực thể) được nêu dưới đây.
・ Tuy nhiên, chuỗi “]]>” thì không thể sử dụng ngay cả bên trong CDATA section.
Các hạng mục có thể sử dụng CDATA section sẽ được mô tả trong phần giải thích của từng API.
・ CDATA section
CDATA section là cách mô tả bắt đầu bằng chuỗi <![CDATA[ và kết thúc bằng ]]>. Chuỗi ký tự được ghi bên trong section sẽ được sử dụng nguyên văn.
Ví dụ:：
<KOKYAKU_INFO>
<KOKYAKU_NAME><![CDATA[あいう<えお]]></KOKYAKU_NAME>
</KOKYAKU_INFO>
・ Entity reference (escape)
Entity reference cho phép mô tả ký hiệu bằng cách sử dụng ký hiệu tham chiếu thay vì dùng trực tiếp ký tự đó.
Ký hiệu Tham chiếu thực thể
& &amp;
< &lt;
> &gt;
Ví dụ：
<KOKYAKU_INFO>
<KOKYAKU_NAME>あいう&lt;えお</KOKYAKU_NAME>
</KOKYAKU_INFO>
Ngoài ra, đối với các ký tự mà CE có thể xử lý, vui lòng tham khảo
“CAFIS Explorer – Tài liệu đặc tả dịch vụ [Phụ lục] Danh sách mã ký tự”.
34/129 Copyright ©NTT DATA CORPORATION

---

## Page 35

Tên hệ thống Phân loại Nội dung mô tả
Tài liệu đặc tả giao diện
CAFIS Explorer API trực tuyến Giới thiệu
4. Danh sách API Online
Mã chức năng Tên API Online Tổng quan Đối tượng mã hóa
Tra cứu trạng thái hội viên, số dư điểm, thông tin hạng (rank), thông tin điểm thưởng. Ngoài ra,
Tra cứu điểm nếu hệ thống kết nối hoặc thiết bị kết nối chưa được đăng ký trên phía CAFIS Explorer
P10 thì sẽ trả về lỗi. Trả về kết quả đánh giá xem có thể sử dụng điểm hay không. API ưu tiên tốc độ phản hồi.
Tra cứu chi tiết điểm
Ngoài thông tin phản hồi của API tra cứu điểm, còn trả về thông tin chi tiết của hạng
và thông tin chi tiết số dư điểm. API ưu tiên lượng thông tin.
P11 Tra cứu điểm dự kiến được cấp
Chỉ thực hiện phần tính toán điểm của API cập nhật điểm,
không cấp điểm, mà tính toán và phản hồi số điểm sẽ được cấp.
P20 Tra cứu lịch sử biến động điểm
Tra cứu lịch sử biến động điểm. Điều kiện sử dụng API là bắt buộc phải thực hiện
tra cứu điểm trước đó (sử dụng giá trị phản hồi của API làm hạng mục yêu cầu).
Tra cứu thông tin chi tiết nội dung điểm (chi tiết theo từng chiến dịch) đối với lịch sử điểm.
P21 Tra cứu chi tiết nội dung điểm Điều kiện sử dụng API là bắt buộc phải thực hiện tra cứu lịch sử biến động
điểm trước đó (sử dụng giá trị phản hồi của API làm hạng mục yêu cầu).
P22 Tra cứu lịch sử biến động điểm toàn bộ SG Lấy lịch sử biến động điểm của các service group còn hiệu lực theo số hội viên và tổ chức giao dịch.
Cấp điểm được tính toán bởi hệ thống bên ngoài. Do API này chỉ cập nhật thông tin tối thiểu
Cập nhật điểm (cấp điểm theo kiểu cần thiết cho việc cấp điểm nhằm đảm bảo phản hồi trong xử lý khối lượng lớn, nên bắt buộc
|tính toán bởi hệ thống bên ngoài) phải sử dụng kèm với API cập nhật điểm (DC) như một cặp giao diện. ※ Để thiết bị đầu cuối có thể đánh giá việc có thể sử dụng điểm hay không, cần giả định rằng API “P10 Tra cứu điểm” đã được gửi trước đó.
Sau khi xử lý cập nhật điểm (cấp điểm theo kiểu tính toán bởi hệ thống bên ngoài),
Cập nhật điểm (DC) đây là giao diện dùng để cập nhật thông tin chi tiết một cách bất đồng bộ với giao dịch.
Thực hiện cộng điểm trực tiếp, hủy cộng điểm trực tiếp (trừ điểm), và thay đổi các
Cập nhật điểm khoản tiền như số tiền xét hạng. ※ Để thiết bị đầu cuối có thể đánh giá việc có thể
P40 (cấp điểm / thay đổi số tiền) sử dụng điểm hay không, cần giả định rằng API “P10 Tra cứu điểm” đã được gửi trước đó.
Có thể thực hiện sử dụng điểm (trừ điểm) và hủy sử dụng điểm (cộng điểm).
※ Để thiết bị đầu cuối có thể đánh giá việc có thể sử dụng điểm hay không,
Cập nhật điểm (sử dụng điểm) cần giả định rằng API “P10 Tra cứu điểm” đã được gửi trước đó.
Trung tâm (CE) sẽ tính toán điểm từ số tiền và thực hiện cấp điểm. Trong cùng một transaction,
Cập nhật điểm (cấp điểm theo kiểu tính toán tại trung tâm) cũng có thể thực hiện sử dụng điểm và cộng điểm trực tiếp. ※ Để thiết bị đầu cuối có thể đánh giá việc có thể sử dụng điểm hay không, cần giả định rằng API “P10 Tra cứu điểm” đã được gửi trước đó.
Để kiểm tra giả mạo số hội viên, hệ thống sẽ so sánh thông tin khách hàng được nhập
C10 C10 Kiểm tra hội viên (có thể chọn tùy ý từ họ tên, họ tên kana, ngày sinh, số điện thoại, v.v.) ○
(thuộc tính khách hàng) với thông tin khách hàng đã được đăng ký ở phía trung tâm (hệ thống này).
C11 C11 Kiểm tra hội viên (mã bảo mật) Để kiểm tra giả mạo số hội viên, hệ thống sẽ so sánh mã PIN được nhập với thông tin ○
đã đăng ký ở phía trung tâm (hệ thống này).
CAFIS Explorer có thể quản lý nhiều số hội viên (thẻ) cho một khách hàng.
C14 C14 Tra cứu danh sách thẻ đang giữ Giao diện này cho phép, từ số hội viên được yêu cầu, tra cứu danh sách
tất cả các số hội viên (thẻ) được liên kết với khách hàng đó.
C15 Yêu cầu URL
API yêu cầu gửi email.
○
Gửi URL đăng ký (gia nhập) của ứng dụng hội viên được chỉ định qua email.
C16 Tìm kiếm số hội viên
Sử dụng thông tin khách hàng được yêu cầu (số điện thoại, địa chỉ email, ID đăng nhập)
○
để tìm kiếm khách hàng và tra cứu danh sách số hội viên khớp với điều kiện tìm kiếm.
C20 Tra cứu thông tin khách hàng T
ph
ra
â n
c ứ
lo
u
ạ i
t
t
h
ạ
ô
m
ng
d
t
ừ
in
n g
k
,
h
t
á
h
c
u
h
ộ c
h à
t
n
ín
g
h
(
t
h
ự
ọ
d
tê
o
n
,
,
v
g
.v
iớ
.)
i
v
t
à
ín h
t
,
h ô
ng
ng
à y
t in
s in
t
h
h
,
ẻ
đ
(
ị
t
a
r ạ
c
n
h
g
ỉ, s
th
ố
á
đ
i h
iệ
ộ
n
i v
th
iê
o
n
ạ
,
i,
l o
e
ạ
m
i
a
s
i
ố
l,
hội viên, loại thẻ, v.v.).
○
C21 Cập nhật thông tin khách hàng C
em
ập
a il
n
,
h
p
ậ
h
t
â n
th
l
ô
o
n
ạ
g
i t
t
ạ
in
m
k
d
h
ừ
ác
ng
h
,
h
t
à
h
n
u
g
ộ c
( h
t
ọ
ín h
tê
t
n
ự
, g
d
i
o
ớ
,
i
c
tí
ử
n
a
h ,
h
n
à
g
n
à
g
y
g
s
ia
in h
n
,
h
đ
ậ
ị
p
a
,
c
v
h
.v
ỉ,
. )
s
.
ố điện thoại, ○
C22 Xác thực đăng nhập Xác thực bằng ID đăng nhập / mật khẩu đăng nhập. ○
C24 Xác thực mã tài khoản Xác thực khóa My Page và mã tài khoản. ○
C25 Yêu cầu phát hành số hội viên WEB
Phát hành số hội viên WEB.
○
Nếu số hội viên WEB liên kết đang còn hiệu lực, sẽ thực hiện kiểm tra trùng lặp ID đăng nhập.
C26 Yêu cầu xác nhận thông tin đăng nhập
Khi quên ID đăng nhập / mật khẩu đăng nhập, sẽ thực hiện xác thực khóa My Page và thông tin thuộc
○
tính.
Khi quên ID đăng nhập, ID đăng nhập sẽ được thông báo qua email.
C27 Thay đổi thông tin My Page Chức năng My Page cho phép thay đổi mật khẩu đăng nhập mới từ mật khẩu đăng nhập hiện tại. ○
C28 Phát hành số hội viên Phát hành số hội viên trong CE theo số hội viên được thiết lập trong tham số yêu cầu. ○
※Tiếp tục ở trang sau
35/129 Copyright ©NTT DATA CORPORATION

---

## Page 36

Tên hệ thống Phân loại Nội dung mô tả
Tài liệu đặc tả giao diện
CAFIS Explorer API trực tuyến Danh sách API trực tuyến
Mã chức năng Tên API Online Tổng quan Đối tượng mã hóa
C30 Tái phát hành
Thực hiện xử lý tái phát hành sang thẻ mới.
Được sử dụng trong các trường hợp tái phát hành do thẻ bị bẩn/hư hỏng, bị trộm – thất lạc, hoặc chuyển đổi loại thẻ (ví dụ: từ thẻ tín dụng sang thẻ đơn lẻ).
C32 Hợp nhất
Hợp nhất hai hội viên.
Trong thông tin phản hồi sẽ trả về số dư điểm và thông tin hạng sau khi hợp nhất.
C50 Thay đổi trạng thái hội viên Thay đổi trạng thái hội viên sang trạng thái bị trộm/thất lạc hoặc trạng thái tạm dừng. Đồng thời thực hiện khôi phục lại các trạng thái này.
C51 Hủy tư cách hội viên Thực hiện việc hủy (thoát) tư cách hội viên.
S10 Kiểm tra trạng thái hoạt động
Kiểm tra xem dịch vụ CAFIS Explorer có đang hoạt động hay không.
Không sử dụng trực tiếp từ thiết bị đầu cuối, mà vui lòng sử dụng theo hình thức tổng hợp tại phía server.
36/129 Copyright ©NTT DATA CORPORATION

---

## Page 37

Tên hệ thống Phân loại Tên API
Tài liệu đặc tả giao diện CAFIS Explorer API trực tuyến Tra cứu điểm
P10. Tra cứu điểm
1. Tổng quan xử lý
・ Lấy thông tin điểm và thông tin hạng (rank) của các service group có thể tra cứu từ hệ thống bên ngoài.
Các service group có thể tra cứu từ hệ thống bên ngoài sẽ được quyết định trong giai đoạn định nghĩa yêu cầu.
・ Khi thực hiện cập nhật điểm, bắt buộc phải tra cứu điểm trước để kiểm tra trạng thái hội viên và số điểm có thể sử dụng, sau đó mới được thực hiện cập nhật điểm.
・ Tùy theo phân loại xử lý tra cứu điểm, nội dung xử lý sẽ khác nhau:
＊「“0: Tra cứu điểm”」 ・・・Trả về tổng số điểm có thể sử dụng, thông tin áp dụng chiến dịch, thông tin hạng, v.v.、Tốc độ xử lý nhanh hơn so với “1: Tra cứu điểm chi tiết”.
＊「1: Tra cứu điểm chi tiết・」・・「Ngoài các thông tin của “0: Tra cứu điểm”, còn trả về chi tiết số điểm theo từng service group, thông tin các hạng khác ngoài hạng đang áp dụng, v.v.
・ Trong trường hợp theo yêu cầu tính phí thiết bị đầu cuối cần kiểm tra số hiệu thiết bị, vui lòng sử dụng giao diện này.
・ Mối quan hệ giữa P10 Tra cứu điểm, P20 Tra cứu lịch sử biến động điểm, P21 Tra cứu chi tiết nội dung điểm được mô tả như sau.
Khi cần tra cứu thông tin chi tiết nội dung của lịch sử điểm của hội viên mục tiêu, hãy thực hiện theo quy trình dưới đây.
（Luồng nghiệp vụ）
Lấy số dư điểm. Lấy danh sách lịch sử điểm tương ứng với số dư điểm đó. Lấy chi tiết nội dung điểm đối với lịch sử điểm đã thu được.
（Luồng liên kết hệ thống）
① 「Từ “P10 Tra cứu điểm”, lấy mã service group điểm của hội viên mục tiêu.
② Từ “P20 Tra cứu lịch sử biến động điểm”, chỉ định mã service group lấy được ở bước ①, số hội viên, năm/tháng tra cứu, số thứ tự bắt đầu tra cứu, số lượng bản ghi tra cứu để lấy thông tin lịch sử của hội viên mục tiêu.
③ Từ “P21 Tra cứu chi tiết nội dung điểm”, chỉ định mã service group, ngày biến động điểm, số thứ tự xử lý điểm lấy được ở bước ② để lấy thông tin chi tiết nội dung điểm của hội viên mục tiêu.
★Phần được gạch chân: khóa yêu cầu của giao dịch
Thiết bị đầu cuối (Client) CAFIS Explorer
①
Số hội viên, mã tổ chức, số hiệu thiết bị, …
P10 Tra cứu điểm
★Mã service group số điểm có thể sử dụng, hạng (rank), …
②
Số hội viên、★Mã service group
Tháng/năm tra cứu Số thứ tự bắt đầu tra cứu Số lượng bản ghi tra cứu
P20 Tra cứu lịch sử biến động điểm
★Mã service group 、★Ngày biến động điểm、★Số thứ tự xử lý 、điểm
Ngày giao dịch, Số tiền giao dịch,
Số điểm được cấp Lý do biến động điểm,...
③
Số hội viên、★Ngày biến động điểm、★Số thứ tự xử lý điểm
P21 Tra cứu chi tiết nội dung điểm
Chi tiết nội dung điểm theo từng chiến dịch
Chi tiết nội dung điểm theo từng thời hạn hiệu lực,...
37/129 Copyright ©NTT DATA CORPORATION

---

## Page 38

Tên hệ thống Phân loại Tên API
Tài liệu đặc tả giao diện CAFIS Explorer API trực tuyến Tra cứu điểm
2. Tham số yêu cầu
Hạng mục Tên tag Kiể Ki u ểu d lo ữ gi c liệu Định dạng S （ ố b k y ý te t ） ự Đ m ối ã tư h ợ ó ng a G m i ặ á c t r đ ị ịnh B bu ắ ộ t c Mô tả
Thông tin phiên bản IF IF_VERSION_INFO
Thông tin phiên bản IF IF_VERSION Số 2,1 1.0 ● Thiết lập phiên bản của IF. Phiên bản IF sẽ được thông báo riêng. (Phần nguyên 1 chữ số, phần thập phân 1 chữ số. Ví dụ: 1.2 [ver])
Thông tin doanh nghiệp JIGYOSHA_INFO
Mã doanh nghiệp JIGYOSHA_CD half-width alphanumeric 64 - ● Thiết lập mã đã được mã hóa dùng để định danh doanh nghiệp. Giá trị này sẽ được CE thông báo riêng cho từng doanh nghiệp.
Thông tin bên gửi yêu cầu YOKYUMOTO_INFO
Định danh kênh bên gửi yêu cầu CHANEL_SHIKIBETSU Số 3 - ● Đ
Th
ịn
iế
h
t
d
lậ
an
p
h
g
k
iá
ê n
t
h
rị
b
d
ê
o
n
C
g
E
ử
t
i
h
y
ô
ê
n
u
g
c
b
ầ
á
u
o
l à
ri ê
m
n
ã
g
d
c
ù
h
n
o
g
t ừ
để
ng
x
d
á
o
c
a
đ
nh
ịn h
n g
h
h
ệ
iệ
t
p
h
.
ống bên ngoài.
Header kết nối bên ngoài EXTERNALHDR
Mã chức năng KINO_CD half-width alphanumeric 3 - ● Thông tin xử lý
Thông tin xử lý SHORI_INFO
Phân loại xử lý tra cứu điểm POINT_SHOKAI_SHORI_KUBUN
Phân loại xử lý tra cứu điểm
Số 1 - ● 1: Tra cứu điểm — phân loại xử lý ưu tiên tốc độ phản hồi
2: Tra cứu điểm chi tiết — phân loại xử lý ưu tiên lượng thông tin
Thông tin kiểm tra số hiệu thiết bị TERM_NO_CHECK_INFO
Phân loại kiểm tra số hiệu thiết bị TERM_NO_CHECK_KUBUN
Trong các trường hợp như tính phí theo thiết bị đầu cuối, ngoài việc phân bổ theo tổ chức, sẽ kiểm tra xem thiết bị đó có thực sự được đăng ký trong CE hay không.
Số 1 1 1：Không kiểm tra
2：Kiểm tra
Thông tin hội viên KAIIN_INFO
Phân loại nhận dạng số hội viên KAIIN_NO_SHIKIBETSU Số 2 1 ● Thiết lập mã số định danh hội viên là đối tượng cần tra cứu điểm.
Số hội viên KAIIN_NO Số (条) 20 - ● Thiết lập số hội viên là đối tượng cần tra cứu điểm.
Thông tin giao dịch TORIHIKI_INFO
Ngày giao dịch TORIHIKI_DATE Số YYYYMMDD 8 - ● Thiết lập ngày phát sinh giao dịch.
Thời gian giao dịch TORIHIKI_TIME Số HHMMSS 6 - ● Thiết lập thời gian phát sinh giao dịch.
Phân loại nhận dạng tổ chức SOSHIKI_SHIKIBETSU_KUBUN Thiết lập khóa phân bổ của tổ chức bên gửi yêu cầu.
Số 1 1 ● 1: Khóa tổ chức yêu cầu
2: Số hiệu thiết bị
※Nếu không thể thiết lập khóa tổ chức yêu cầu, hãy thiết lập “2: Số hiệu thiết bị”; trong trường hợp này, thiết bị phải được đăng ký trong CE.
Khóa tổ chức yêu cầu 1 SOSHIKI_KEY_1 half-width alphanumeric 20 - đơn vịKhi phân loại nhận dạng tổ chức = “1: Khóa tổ chức yêu cầu” → bắt buộc thiết lập Khóa tổ chức yêu cầu 1.
Khóa tổ chức yêu cầu 2 SOSHIKI_KEY_2 half-width alphanumeric 20 - đơn vịKhi phân loại nhận dạng tổ chức = “1: Khóa tổ chức yêu cầu” → có thể thiết lập Khóa tổ chức yêu cầu 2 và 3 (có thể lược bỏ).
Khóa tổ chức yêu cầu 3 SOSHIKI_KEY_3 half-width alphanumeric 20 - đơn vịKhi phân loại nhận dạng tổ chức = “1: Khóa tổ chức yêu cầu” → có thể thiết lập Khóa tổ chức yêu cầu 2 và 3 (có thể lược bỏ).
Số hiệu thiết bị TERM_NO half-width alphanumeric 20 0 ● Khi phân loại nhận dạng tổ chức = “2: Số hiệu thiết bị” → bắt buộc thiết lập Số hiệu thiết bị.
Trong các trường hợp khác, thiết lập giá trị mặc định “0”.
38/129 Copyright ©NTT DATA CORPORATION

---

## Page 39

Tên hệ thống Phân loại Tên API
Tài liệu đặc tả giao diện CAFIS Explorer API trực tuyến Tra cứu điểm
3. Tham số phản hồi ※Phân loại xử lý tra cứu điểm 1：Tra cứu điểm、2：Tra cứu điểm chi tiết
Hạng mục
1
※
2
Tên tag
Dữ
L o
li
g
ệ
i
u
c Định dạng S
（
ố
b
k
y
ý
te
t
）
ự Đ
m
ối
ã
tư
h
ợ
ó
ng
a A
Có/
B
không c
C
ó phản hồi Mô tả
Thông tin phiên bản IF ● ●IF_VERSION_INFO
Phiên bản IF ● ● IF_VERSION Số 2,1 ● ● Giá trị của yêu cầu sẽ được thiết lập
Thông tin doanh nghiệp ● ●JIGYOSHA_INFO
Mã doanh nghiệp ● ● JIGYOSHA_CD half-width alphanumeric 64 ● ● Giá trị của yêu cầu sẽ được thiết lập
Thông tin bên gửi yêu cầu ● ●YOKYUMOTO_INFO
Định danh kênh bên gửi yêu cầu ● ● CHANEL_SHIKIBETSU Số 3 ● ● Giá trị của yêu cầu sẽ được thiết lập
Header kết nối bên ngoài ● ●EXTERNALHDR
Mã chức năng ● ● KINO_CD half-width alphanumeric 3 ● ● Giá trị của yêu cầu sẽ được thiết lập
Thông tin xử lý ● ● SHORI_INFO
Phân loại xử lý tra cứu điểm ● ● POINT_SHOKAI_SHORI_KUBUN Số 1 ● ● Giá trị của yêu cầu sẽ được thiết lập
Thông tin kiểm tra số hiệu thiết bị ● ● TERM_NO_CHECK_INFO
Phân loại kiểm tra số hiệu thiết bị ● ● TERM_NO_CHECK_KUBUN Số 1 mục mục Nếu “Phân loại kiểm tra số hiệu thiết bị” trong tham số yêu cầu được thiết lập, thì giá trị yêu cầu sẽ được thiết lập
Thông tin trạng thái ● ● STATUS_INFO
Trạng thái xử lý SHORI_STATUS Thiết lập trạng thái thể hiện kết quả xử lý đối với yêu cầu.
・Trả về khi kết thúc bình thường
0: Kết thúc bình thường
・Trả về khi trạng thái hội viên mục tiêu là không hợp lệ (hạn chế)
15: Kết thúc bình thường – Số hội viên không hợp lệ (hạn chế)
・Trả về khi trạng thái hội viên mục tiêu là không hợp lệ (không được phép)
16: Kết thúc bình thường – Số hội viên không hợp lệ (không được phép)
・Trả về khi thiếu hạng mục bắt buộc trong yêu cầu hoặc giá trị thiết lập có lỗi hệ thống
20: Lỗi hạng mục yêu cầu
・Trả về khi số hội viên chưa được đăng ký
● ● Số 2 ● ● 2
・T
1
r
:
ả
S ố
v ề
h ộ
k
i
h
v
i
i
p
ê
h
n
â
c
n
h
l
ư
oạ
a
i
đ
n
ă
h
n
ậ
g
n
k
d
ý
ạng tổ chức = “1: Khóa tổ chức” và khóa tổ chức yêu cầu không tồn tại trong master
23: Tổ chức chưa đăng ký
・Trả về khi phân loại nhận dạng tổ chức = “2: Số hiệu thiết bị” và số hiệu thiết bị không tồn tại trong master
24: Thiết bị chưa đăng ký
・Trả về khi hội viên không thể sử dụng dịch vụ tại tổ chức yêu cầu
27: Dịch vụ không được xử lý
・Trả về khi kết quả kiểm tra số hiệu thiết bị cho thấy số hiệu thiết bị được thiết lập trong yêu cầu không tồn tại trong master
（(Chỉ được đánh giá khi phân loại kiểm tra số hiệu thiết bị = “2: Kiểm tra”)）
28: Lỗi kiểm tra số hiệu thiết bị
・Trả về khi xảy ra sự cố như lỗi DB
90: Lỗi nội bộ server
Thông tin hội viên ● ● KAIIN_INFO
Phân loại nhận dạng số hội viên ● ● KAIIN_NO_SHIKIBETSU Số 2 ● ● Giá trị của yêu cầu sẽ được thiết lập Tuy nhiên, nếu trạng thái hội viên không bình thường, thì phân loại nhận dạng số hội viên của số hội viên mới nhất sẽ được thiết lập.
Số hội viên KAIIN_NO Giá trị của yêu cầu sẽ được thiết lập
● ● 数値(条) 20 ● ● （Xử lý đặc biệt) Trong trường hợp trạng thái hội viên không bình thường, sẽ trả về thông tin số hội viên mới nhất được liên kết với khách hàng (cùng mã khách hàng hợp nhất, cùng loại số hội
viên, trạng thái hội viên = 0, ngày bắt đầu sử dụng mới nhất, ngày cập nhật cuối mới nhất).
Trạng thái hội viên ● ● KAIIN_STATUS Số 1 ● Thiết lập trạng thái hội viên được liên kết với số hội viên trong yêu cầu.
0: Bình thường 7: Không hợp lệ (hạn chế) 8: Không hợp lệ (không được phép)
Mã lý do trạng thái hội viên KAIIN_STATUS_RIYU_CD
Thiết lập mã lý do trạng thái hội viên được liên kết với số hội viên trong yêu cầu.
2000: Chưa sử dụng
2001: Có thể sử dụng
3001: Hạn chế (trộm cắp / thất lạc)
3002: Hạn chế (bẩn / hư hỏng)
3003: Hạn chế (khác)
8001: Không được phép (tái phát hành: trộm cắp / thất lạc)
8002: Không được phép (tái phát hành: bẩn / hư hỏng)
● ● Số 4 ● 8003: Không được phép (tái phát hành: khác)
8004: Không được phép (dừng sử dụng / tái phát hành)
8101: Không được phép (hợp nhất)
8102: Không được phép (dừng sử dụng / hợp nhất)
8201: Không được phép (chuyển đổi)
8202: Không được phép (dừng sử dụng / chuyển đổi)
8901: Không được phép (dừng sử dụng / khác)
9001: Không được phép (thoái hội: khách hàng yêu cầu)
9002: Không được phép (thoái hội: lý do khác)
9003: Không được phép (thoái hội: tự động theo quy định)
※次頁へ続く
39/129 Copyright ©NTT DATA CORPORATION

---

## Page 40

Tên hệ thống Phân loại Tên API
Tài liệu đặc tả giao diện CAFIS Explorer API trực tuyến Tra cứu điểm
※※ Phân loại xử lý tra cứu điểm 1：Tra cứu điểm、2：Tra cứu điểm chi tiết
Hạng mục
1
※
2
Tên tag
Kiể
Lo
u
g
d
ic
ữ liệu
Định dạng S
（
ố
b
k
y
ý
te
t
）
ự Đ
m
ối
ã
tư
h
ợ
ó
ng
a A
Có/
B
không c
C
ó phản hồi Mô tả
Thông tin chế độ khách hàng ● ● KOKYAKU_SEIDO_INFO
Mã loại số hội viên ● ● KAIIN_NO_SHUBETSU_CD Số 4 ● Thiết lập mã dùng để định danh duy nhất loại số hội viên, chẳng hạn như tên thẻ, v.v.
Tuổi ● ● AGE Số 3 ● Thiết lập tuổi của hội viênđ ược chỉ định trong yêu cầu.。 ※Nếu không thể tính được tuổi, tag sẽ để trống.
Năm sinh ● ● BIRTHDAY_YEAR Số YYYY 4 ● Thiết lập năm sinh của hội viên được chỉ định trong yêu cầu.
Tháng sinh ● ● BIRTHDAY_MONTH Số MM 2 ● Thiết lập năm sinh của hội viên được chỉ định trong yêu cầu.
Ngày sinh ● ● BIRTHDAY_DAY Số DD 2 ● Thiết lập năm sinh của hội viên được chỉ định trong yêu cầu.
Giới tính SEIBETSU
● ● Số 1 ● T
0:
h i
C
ế
h
t
ư
lậ
a
p
đ
g
ă
i
n
ớ
g
i t
k
í
ý
nh
1
c
:
ủ
N
a
a
h
m
ộ i
2
v
:
i
N
ên
ữ
đ
9
ư
:
ợ
K
c
h á
ch
c
ỉ định trong yêu cầu.
Thông tin dịch vụ sử dụng điểm ● ● POINT_RIYO_SERVICE_INFO
Số ngày còn lại có thể sử dụng điểm RIYO_KANO_ZANNISSU Trong trường hợp việc sử dụng điểm bị giới hạn theo trạng thái đăng ký thông tin khách hàng, sẽ thiết lập tham số cho phép đánh giá tình
trạng sử dụng điểm (giá trị ≥ 1 thì có thể sử dụng điểm). Nếu có thiết lập thời gian ân hạn, thì sẽ thiết lập số ngày còn lại.
● ● Số 2 ● 0: Không thể sử dụng điểm
1 – 30: Số ngày còn lại có thể sử dụng điểm (tối đa 30 ngày)
99: Có thể sử dụng điểm
Cờ đăng ký họ tên (chữ Hán) KOKYAKU_NAME_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký họ tên Kana KOKYAKU_KANA_NAME_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký năm sinh BIRTHDAY_YEAR_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký tháng sinh BIRTHDAY_MONTH_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký ngày sinh BIRTHDAY_DAY_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký số điện thoại TEL_NO_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký mã bưu chính POST_NO_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký địa chỉ ADDRESS_NO_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
Cờ đăng ký giới tính SEIBETSU_TOROKU_FLAG Giá trị cờ đăng ký:
1: Đã đăng ký, và không phải điều kiện sử dụng
● ● Số 1 ● 2: Đã đăng ký, và là điều kiện sử dụng
3: Chưa đăng ký, và không phải điều kiện sử dụng
4: Chưa đăng ký, và là điều kiện sử dụng
※次頁へ続く
40/129 Copyright ©NTT DATA CORPORATION

---

## Page 41

Tên hệ thống Phân loại Tên API
Tài liệu đặc tả giao diện CAFIS Explorer API trực tuyến Tra cứu điểm
※ポイント照会処理区分 1：ポイント照会、2：ポイント照会詳細
項目 ※ タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
1 2 データ型 （byte） 対象 A B C
サービス情報 ● ● SERVICE_INFO
取引利用可能ポイント TORIHIKI_RIYO_KANO_POINT
● ● 数値 8 ● 利用可能な総ポイントが設定されます。ポイント残高がマイナス残高の場合、マイナス値となります。
サービスグループ情報 ● ● SG_INFO （対象のサービスグループの数だけ繰り返し。）
サービスグループコード SG_CD サービスグループのコードが設定されます。
● ● 半角英数 3 ●
ポイント変動履歴を取得する際の要求キーとなります。
サービスグループ略称 ● ● SG_RYAKUSHO 全半角文字 20 ● サービスグループの表示名称が設定されます。
ポイント情報 ● POINT_INFO
サービスグループ別利用可能ポイント ● SG_RIYO_KANO_POINT 数値 8 ● サービスグループ別の利用可能なポイント数が設定されます。
サービスグループ別通常ポイント ● SG_TSUJO_POINT 数値 8 ● サービスグループ別の通常ポイントのポイント数が設定されます。
通常ポイント内訳情報 ● TSUJO_POINT_UCHIWAKE_INFO (利用可能なポイントの有効期限ごとに繰り返し。) ※残ポイント=0の有効期限の内訳情報も設定されます。
有効期限 該当の通常ポイントの有効期限が設定されます。
・延伸型：ポイント未発行の場合は0が設定されます。
● YUKO_KIGEN 数値 YYYYMMDD 8 ● ・月度型：最大48カ月分設定されます。
・年度型：最大4年分設定されます。
有効期限別ポイント 該当の通常ポイントの有効期限の利用可能ポイントが設定されます。
・延伸型：ポイント未発行の場合は0が設定されます。
● YUKO_KIGEN_POINT 数値 8 ● ・月度型：最大48カ月分設定されます。
・年度型：最大4年分設定されます。
サービスグループ別期間限定ポイント ● SG_KIGEN_POINT 数値 6 ● サービスグループ別の期間限定ポイントのポイント数が設定されます。 ※期間限定ポイントを運用していない場合でも設定されます。
期間限定ポイント内訳情報 ● KIGEN_POINT_UCHIWAKE_INFO (利用可能なポイントの有効期限ごとに繰り返し。) ※期間限定ポイントを運用していない場合、本項目下の情報は設定されません。
有効期限 該当の期間限定ポイントの有効期限が設定されます。
● YUKO_KIGEN 数値 YYYYMMDD 8 条 期間限定ポイントの残ポイント＝0の場合は、0が設定されます。
期間限定ポイントの残ポイント≠0の場合は、期間ごとの残ポイント分だけ設定されます。
有効期限別ポイント 該当の期間限定ポイントの有効期限の利用可能ポイントが設定されます。
● YUKO_KIGEN_POINT 数値 6 条 期間限定ポイントの残ポイント＝0の場合は、0が設定されます。
期間限定ポイントの残ポイント≠0の場合は、期間ごとの残ポイント分だけ設定されます。
会員の同一年月日内の来店ポイントの付与状況が設定されます。
来店ポイント付与フラグ ● RAITEN_POINT_FUYO_FLAG 数値 1 条※1 0：来店ポイント未付与
１：来店ポイント付与済
※1 来店ポイント制度を利用しない場合、当該タグは設定されません。
ランク情報 ● ● RANK_INFO ※ランク制度を運用していない場合、本項目下の情報は設定されません。
今回使用ランクコード ● ● SHIYO_RANK_CD 数値 2 条 照会時点における会員のランクのランクコードが設定されます。
今回使用ランク名称 ● ● SHIYO_RANK_NAME 全半角文字 40 条 照会時点における会員のランクのランク名称が設定されます。
今回使用ランク倍率 ● ● SHIYO_RANK_BAIRITSU 数値 3,1 条 照 （整 会 数 時 部 点 2 に 桁 お 、小 ける 数 会 部 員 1桁 のラ とす ンク る の 。例 ラン ：2 ク .0 倍 、 率 2.5 が ） 設定されます。
通常年ランク情報 ● RANK_YEAR_INFO ※通常年ランク制度を運用していない場合、本項目下の情報は設定されません。
当年ランク対象金額 ● RANK_TAISHO_KINGAKU_TONEN 数値 10 条 当年ランクの算出金額（＝前年の累計金額）が設定されます。
当年ランク名称 ● RANK_NAME_TONEN 全半角文字 40 条 当年ランクのランク名称が設定されます。
当年ランク倍率 ● RANK_BAIRITSU_TONEN 数値 3,1 条 当 （整 年 数 ラ 部 ン 2 ク 桁 の 、 ラ 小 ン 数 ク倍 部 率 1桁 が と 設 す 定 る さ 。 れ 例 ま ：2 す .0 。 、2.5）
翌年ランク対象金額 ● RANK_TAISHO_KINGAKU_YOKUNEN 数値 10 条 翌年ランクの算出金額（＝当年の累計金額）が設定されます。
翌年ランク名称 ● RANK_NAME_YOKUNEN 全半角文字 40 条 翌年ランクのランク名称が設定されます
翌年ランク倍率 ● RANK_BAIRITSU_YOKUNEN 数値 3,1 条 翌 （整 年 数 ラ 部 ン 2 ク 桁 の 、 ラ 小 ン 数 ク倍 部 率 1桁 が と 設 す 定 る さ 。 れ 例 ま ：2 す .0 。 、2.5）
翌年上位ランク必要金額 ● H O I K G U H N _R E A N NK_HITSUYO_KINGAKU_Y 数値 10 条 翌年の上位ランクへランクアップするために必要な金額が設定されます。
翌年上位ランク名称 ● HIGH_RANK_NAME_YOKUNEN 全半角文字 40 条 翌年の上位ランク名称が設定されます。
翌年上位ランク倍率 ● HIGH_RANK_BAIRITSU_YOKUNEN 数値 3,1 条 翌 （整 年 数 の 部 上 2 位 桁 ラ 、 ン 小 ク 数 倍 部 率 1 が 桁 設 とす 定 る さ 。 れ 例 ま ： す 2.0 。 、2.5）
前年集計金額 ● ZENNEN_SHUKEI_KINGAKU 数値 10 条 前年度に集計された金額が設定されます。
前年集計ランク名称 ● ZENNEN_SHUKEI_RANK_NAME 全半角文字 40 条 前年度に集計された金額に該当するランク名称が設定されます。
前年集計ランク倍率 ● ZENNEN_SHUKEI_RANK_BAIRITSU 数値 3,1 条 前年度に集計された金額に該当するランクの倍率が設定されます。
※次頁へ続く
41/129 Copyright ©NTT DATA CORPORATION

---

## Page 42

Tên hệ thống Phân loại Tên API
Tài liệu đặc tả giao diện CAFIS Explorer API trực tuyến Tra cứu điểm
※ポイント照会処理区分 1：ポイント照会、2：ポイント照会詳細
項目 ※ タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
1 2 データ型 （byte） 対象 A B C
現在集計金額 ● GENZAI_SHUKEI_KINGAKU 数値 10 条 照会時点における集計中の金額が設定されます。
現在集計ランク名称 ● GENZAI_SHUKEI_RANK_NAME 全半角文字 40 条 照会時点における集計中の金額に該当するランク名称が設定されます。
現在集計ランク倍率 ● GENZAI_SHUKEI_RANK_BAIRITSU 数値 3,1 条 照会時点における集計中の金額に該当するランクの倍率が設定されます。
現 金 在 額 集計上位ランク必要 ● H EN IG Z H A _R I ANK_HITSUYO_KINGAKU_G 数値 10 条 集計中の金額に該当するランクの上位ランクへランクアップするために必要な金額が設定されます。
現在集計上位ランク名称 ● HIGH_RANK_NAME_GENZAI 全半角文字 40 条 集計中の金額に該当するランクの上位ランク名称が設定されます。
現在集計上位ランク倍率 ● HIGH_RANK_BAIRITSU_GENZAI 数値 3,1 条 集 （整 計 数 中 部 の 2 金 桁 額 、小 に 数 該 部 当 1 す 桁 る と ラ す ン る ク 。 の 例 上 ： 位 2.0 ラ 、 ン 2 ク .5 倍 ） 率が設定されます。
通常月ランク情報 ● RANK_MONTH_INFO ※通常月ランク制度を運用していない場合、本項目下の情報は設定されません。
当月ランク対象金額 ● RANK_TAISHO_KINGAKU_TOGETSU 数値 10 条 当月ランクの算出金額（＝前月の累計金額、もしくは、スライド型の場合は期間累計）が設定されます。
当月ランク名称 ● RANK_NAME_TOGETSU 全半角文字 40 条 当月ランクのランク名称が設定されます。
当月ランク倍率 ● RANK_BAIRITSU_TOGETSU 数値 3,1 条 当 （整 月 数 ラ 部 ン 2 ク 桁 の 、 ラ 小 ン 数 ク倍 部 率 1桁 が と 設 す 定 る さ 。 れ 例 ま ：2 す .0 。 、2.5）
翌月ランク対象金額 ● R T A SU NK_TAISHO_KINGAKU_YOKUGE 数値 10 条 翌月ランクの算出金額（＝当月の累計金額、もしくは、スライド型の場合は期間累計）が設定されます。
翌月ランク名称 ● RANK_NAME_YOKUGETSU 全半角文字 40 条 翌月ランクのランク名称が設定されます
翌月ランク倍率 ● RANK_BAIRITSU_YOKUGETSU 数値 3,1 条 翌 （整 月 数 ラ 部 ン 2 ク 桁 の 、 ラ 小 ン 数 ク倍 部 率 1桁 が と 設 す 定 る さ 。 れ 例 ま ：2 す .0 。 、2.5）
翌月上位ランク必要金額 ● H O I K G U H G _R E A T N S K U _HITSUYO_KINGAKU_Y 数値 10 条 翌月の上位ランクへランクアップするために必要な金額が設定されます。
翌月上位ランク名称 ● HIGH_RANK_NAME_YOKUGETSU 全半角文字 40 条 翌月の上位ランク名称が設定されます。
翌月上位ランク倍率 ● HIGH_RANK_BAIRITSU_YOKUGETSU 数値 3,1 条 翌 （整 月 数 の 部 上 2 位 桁 ラ 、 ン 小 ク 数 倍 部 率 1 が 桁 設 とす 定 る さ 。 れ 例 ま ： す 2.0 。 、2.5）
ボーナスポイント情報 ● BONUS_POINT_INFO ※ボーナスポイント制度を運用していない場合、本項目下の情報は設定されません。複数運用している場合、運用しているパターン
分繰り返し設定されます。
ボーナスポイント名称 BONUS_POINT_NAME
● 全半角文字 40 条 ボーナスポイントのパターンの名称を設定します。
次回ボーナスポイント対象金 BONUS_TAISHO_KINGAKU_JIKAI 次回に付与される予定のボーナスポイント計算の対象となる金額を設定します。
額 例：
● 数値 10 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「10000」が設定されます。
次回ボーナスポイント BONUS_POINT_JIKAI
次回ボーナスポイント対象金額が設定されているときのみ次回の付与ボーナスポイント数を設定します。
例：
現在の買上額は\10,000です。
● 数値 8 条 次回付与予定のボーナスポイントは100Pです。
あと\5,000のお買上げで200Pになります。
→この「100」が設定されます。
次回上位ボーナスポイント必 HIGH_BONUS_POINT_HITSUYO_KINGAK 次回の上位ボーナスステージに必要な金額を設定します。
要金額 U_JIKAI 例：
現在の買上額は\10,000です。
● 数値 10 条 次回付与予定のボーナスポイントは100Pです。
あと\5,000のお買上げで200Pになります。
→この「5000」が設定されます。
上位ランクがない場合は0を設定します。
次回上位ボーナスポイント HIGH_BONUS_POINT_JIKAI 次回の上位ボーナスステージに必要なポイント数を設定します。
例：
● 数値 8 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「200」が設定されます。
※次頁へ続く
42/129 Copyright ©NTT DATA CORPORATION

---

## Page 43

システム名 分類 API名
Tài liệu đặc tả giao diện CAFIS Explorer オンラインAPI ポイント照会
※ポイント照会処理区分 1：ポイント照会、2：ポイント照会詳細
項目 ※ タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
1 2 データ型 （byte） 対象 A B C
前回ボーナスポイント対象金 BONUS_TAISHO_KINGAKU_ZENKAI 前回のボーナスポイント計算の対象とした金額を設定します。
額 例：
● 数値 10 条 前 → 回 この の 「 買 13 い 0 上 00 げ 」が 金 設 額 定 は さ \1 れ 3 ま ,0 す 00 。 で、付与ポイントは100Pでした。
ただし、半期の場合、前半期実績を返信できる期間は5ヵ月となります。※2
ボーナスポイント制度が「倍率」の場合は、当該タグは設定されません。
前回ボーナスポイント BONUS_POINT_ZENKAI 前回付与済のボーナスポイント数を設定します。
例：
● 数値 8 条 前 → 回 この の 「 買 10 い 0 上 」が げ 設 金 定 額 さ は れ \ ま 13 す ,0 。 00で、付与ポイントは100Pでした。
ただし、半期の場合、前半期実績を返信できる期間は5ヵ月となります。※2
ボーナスポイント制度が「倍率」の場合は、当該タグは設定されません。
店舗情報 ● TENPO_INFO
店舗名称 ● TENPO_NAME 全半角文字 60 ● 要求組織キーまたは、端末情報に紐づく組織コードに対応する店舗名称が設定されます。
テナント名称 ● TENANT_NAME 全半角文字 60 ● 要求組織キーまたは、端末情報に紐づく組織コードに対応するテナント名称が設定されます。
取引情報 ● ● TORIHIKI_INFO
取引日付 ● ● TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 ● ● TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 ● ● SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 ● ● SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 ● ● SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 ● ● SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 ● ● TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
ポイント付与対象組織区分 POINT_FUYO_TAISHO_SOSHIKI_KUBUN 要求元の組織がポイント付与の対象組織かどうかを示す区分を設定します。
0：ポイント付与対象
● ● 数値 1 ● ● 1：ポイント付与対象外
※「1：ポイント付与対外」の組織の場合でも金額の累計は行います。
レシートメッセージ情報 ● ● RECEIPT_MESSAGE_INFO
レシートメッセージ RECEIPT_MESSAGE レシート幅バイトのbyte数に応じたメッセージが設定されます。（CDATAセクションで全体を囲む）
改行コードは(\r(0x0d))で区切られます。
● ● 全半角文字 条 ※イメージ
<RECEIPT_MESSAGE><![CDATA[********************************\r会員番号・・・・・1000000000000000000\rポ
イント対象金額・・・・・・・・・・・・・\5,000 …etc]]></RECEIPT_MESSAGE>
レシート幅バイトのByte数に応じたコマーシャルメッセージが設定されます。（CDATAセクションで全体を囲む）
コマーシャルメッセージ ● ● COMMERCIAL_MESSAGE 全半角文字 条 改行コードは(\r(0x0d))で区切られます。
エラー情報 ● ● ERROR_INFO
エラーメッセージ ERROR_MESSAGE
・処理ステータス：15 「利用制限のある会員番号での処理となります。」
・処理ステータス：16 「利用不可な会員番号での処理となります。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
● ● 全半角文字 500 条 ● ・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：27 「入力頂いた会員番号はご利用の端末ではサービスを利用できません。」
・処理ステータス：28 「ご利用の端末はサービスを利用できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
空欄： 返信なし
処理ステータス 備考
A 0、15、16 正常 ※2 付与集計パターンが半期の場合
B 20、21、23、24、27、28、90 異常 集計期間：3～9月、10～2月
C
1 2 3 4 5 6 7 8 9 1011121 2 3
■
■
○ ○ ○ ○ ○ ×
↑
2月の時、3～8月の集計金額表示は不可
43/129 Copyright ©NTT DATA CORPORATION

---

## Page 44

システム名 分類 API名
Tài liệu đặc tả giao diện CAFIS Explorer オンラインAPI 付与予定ポイント照会
P11. 付与予定ポイント照会
1. 処理概要
・ 取引金額情報よりポイント計算を実施し、付与予定ポイントおよび金額加算後のサービス情報を照会します。
※例：EC取引では決済を確定する前に、付与予定ポイントをWEB画面に表示する
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 1.0 ● ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別とは外部システムを識別するコードです。
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "P11"を設定します。
処理情報 SHORI_INFO
付与予定ポイント照会処理区分 FUYO_YOTEI_POINT_SHOKAI_SHORI_KUBUN 照会したい内容のポイント処理区分を設定します。
数値 1 1 ● 1：メモリMAP参照 ・・・EC用途を想定したモード（デフォルト）
2：DB参照 ・・・キャンペーンシミュレーションの用途を想定したモード
※処理区分によるそれぞれの取引日付指定可能範囲が異なります。
会員情報 KAIIN_INFO 会員識別番号を設定します。
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員番号を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ●
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● ポイント計算時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● ポイント計算時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
数値 1 1 ● 1：要求組織キー
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1 半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2 半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3 半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 半角英数 20 0 ● 組織識別区分が「2：端末番号」の場合は設定してください。
それ以外場合は、デフォルト値「0」を設定します。
取引金額情報 TORIHIKI_KINGAKU_INFO
金額1 KINGAKU_1 数値 10 0 ●
金額2 KINGAKU_2 数値 10 0 ●
金額１には、「買上金額（支払金額）」を設定します。
金額3 KINGAKU_3 数値 10 0 ● タバコ類、酒類、調剤、ポイント利用金額などの要素によってポイント計算の対象となる金額やＮ倍の対象となる金額、ランクアップの対象とな
る金額の定義が異なる場合、金額2～金額5の項目を利用します。
金額4 KINGAKU_4 数値 10 0 ●
金額5 KINGAKU_5
数値 10 0 ●
決済手段1 支払方法と決済金額に伴うポイントを付与する場合に、決済手段を設定します。
決済手段1に相対する金額が決済金額1となります。
KESSAI_SHUDAN_1 数値 3 0 ● 0：未使用
1xx：クレジット系の決済手段
2xx：電子マネー系の決済手段
使用しない場合の既定値は「0：未使用」となります。
決済手段2 支払方法と決済金額に伴うポイントを付与する場合に、決済手段を設定します。
KESSAI_SHUDAN_2 数値 3 0 ● 決済手段2に相対する金額が決済金額2となります。
コード定義は「決済手段1」を参照ください。
決済金額1 KESSAI_KINGAKU_1 数値 10 0 ● 決済手段1に相対する決済金額を設定します。
決済金額2 KESSAI_KINGAKU_2 数値 10 0 ● 決済手段2に相対する決済金額を設定します。
44/129 Copyright ©NTT DATA CORPORATION

---

## Page 45

システム名 分類 API名
Tài liệu đặc tả giao diện CAFIS Explorer オンラインAPI 付与予定ポイント照会
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
処理情報 SHORI_INFO
付与予定ポイント照会処理区分 FUYO_YOTEI_POINT_SHOKAI_SHORI_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS 要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
数値 2 ● ● 23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員がサービスを利用できない場合に返します。
27：取扱い不可サービス
・システム障害の場合にサーバ内部エラーを返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
取引金額情報 TORIHIKI_KINGAKU_INFO
金額1 KINGAKU_1 数値 10 ● ● 要求の値がそのまま設定されます。
金額2 KINGAKU_2 数値 10 ● ● 要求の値がそのまま設定されます。
金額3 KINGAKU_3 数値 10 ● ● 要求の値がそのまま設定されます。
金額4 KINGAKU_4 数値 10 ● ● 要求の値がそのまま設定されます。
金額5 KINGAKU_5 数値 10 ● ● 要求の値がそのまま設定されます。
決済手段1 KESSAI_SHUDAN_1 数値 3 ● ● 要求の値がそのまま設定されます。
決済手段2 KESSAI_SHUDAN_2 数値 3 ● ● 要求の値がそのまま設定されます。
決済金額1 KESSAI_KINGAKU_1 数値 10 ● ● 要求の値がそのまま設定されます。
決済金額2 KESSAI_KINGAKU_2 数値 10 ● ● 要求の値がそのまま設定されます。
サービスグループ別取引情報 SG_TORIHIKI_INFO （サービスグループごと繰り返し）
サービスグループコード SG_CD 半角英数 3 ● ポイント付与対象のサービスグループのコードが設定されます。
サービスグループ略称 SG_RYAKUSHO 全半角文字 20 ● ポイント付与対象のサービスグループの略称（表示用名称）が設定されます。
サービスグループ別付与ポイント SG_FUYO_POINT 数値 8 ● その取引で総付与予定ポイント数が設定されます。
通常ポイント有効期限 TSUJO_POINT_YUKO_KIGEN 数値 8 ● 通常ポイントの有効期限が設定されます。
※次頁へ続く
45/129 Copyright ©NTT DATA CORPORATION

---

## Page 46

システム名 分類 API名
Tài liệu đặc tả giao diện CAFIS Explorer オンラインAPI 付与予定ポイント照会
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
付与明細情報 FUYO_MEISAI_INFO
キャンペーン別取引情報 CAMPAIGN_TORIHIKI_INFO （キャンペーンごと繰り返し）
表示連番 HYOJI_NO 数値 3 ● 付与ポイントの明細の表示順が設定されます。
キャンペーンコード CAMPAIGN_CD 半角文字 7 ● キャンペーンコードが設定されます。
キャンペーン略称 CAMPAIGN_RYAKUSHO 全半角文字 20 ● キャンペーン略称（表示用名称）が設定されます。
キャンペーン開始日 CAMPAIGN_KAISHI_DATE 数値 YYYYMMDD 8 ● キャンペーン開始日が設定されます。
キャンペーン開始時刻 CAMPAIGN_KAISHI_TIME 数値 HHMMSS 4 条 キャンペーン開始時刻が設定されます。
未設定の場合、タグのみ返却します。
キャンペーン終了日 CAMPAIGN_SHURYO_DATE 数値 YYYYMMDD 8 ● キャンペーン終了日が設定されます。
キャンペーン終了時刻 CAMPAIGN_SHURYO_TIME 数値 HHMMSS 4 条 キャンペーン終了時刻が設定されます。
未設定の場合、タグのみ返却します。
キャンペーン別付与ポイント CAMPAIGN_FUYO_POINT 数値 8 ● 明細毎のポイント数（キャンペーン別付与ポイント）が設定されます。
ポイント倍率 POINT_BAIRITSU
数値 3.1 条 明細毎の適用倍率が設定されます。
ポイント種別 POINT_SHUBETSU 数値 1 ● 明細毎のポイント種別（1：通常ポイント／2：期限付きポイント）が設定されます。
期間限定ポイント有効期限 KIGEN_POINT_YUKO_KIGEN 数値 8 条 ポイント種別=2：期限付きポイントの場合、明細毎の期限付きポイント有効期限が設定されます。
サービス情報 SERVICE_INFO
ランク情報 RANK_INFO ※ランク制度を運用していない場合は設定されません。
今回使用ランク名称 SHIYO_RANK_NAME 全半角文字 40 条 取引で適用したランクの名称が設定されます。
今回使用ランク倍率 SHIYO_RANK_BAIRITSU 数値 3,1 条 取 （整 引 数 で 部 適 2 用 桁 し 、 た 小 ラ 数 ン 部 ク 1 の 桁 倍 と 率 す が る 設 。例 定 ： さ 2 れ .0、 ま 2 す .5 。 ）
通常年ランク情報 RANK_YEAR_INFO ※通常年ランク制度を運用していない場合、本項目下の情報は設定されません。
翌年ランク対象金額 R EN ANK_TAISHO_KINGAKU_YOKUN 数値 10 条 要求で指定された条件で更新した場合、翌年ランクの算出金額（＝当年の累計金額）が設定されます。
翌年ランク名称 RANK_NAME_YOKUNEN 全半角文字 40 条 要求で指定された条件で更新した場合、翌年ランクのランク名称が設定されます
翌年ランク倍率 RANK_BAIRITSU_YOKUNEN 数値 3,1 条 要 （整 求 数 で 部 指 2 定 桁 さ 、 れ 小 た 数 条 部 件 1桁 で更 とす 新 る し 。 た 例 場 ： 合 2.0 、 、 翌 2. 年 5） ランクのランク倍率が設定されます。
翌年上位ランク必要金額 H O I K G U H N _R E A N NK_HITSUYO_KINGAKU_Y 数値 10 条 要求で指定された条件で更新した場合、翌年の上位ランクへランクアップするために必要な金額が設定されます。 ※1
翌年上位ランク名称 HIGH_RANK_NAME_YOKUNEN 全半角文字 40 条 要求で指定された条件で更新した場合、翌年の上位ランク名称が設定されます。 ※1
翌年上位ランク倍率 HIGH_RANK_BAIRITSU_YOKUNEN 数値 3,1 条 要 （整 求 数 で 部 指 2 定 桁 さ 、 れ 小 た 数 条 部 件 1桁 で更 とす 新 る し 。 た 例 場 ： 合 2.0 、 、 翌 2. 年 5） の上位ランク倍率が設定されます。 ※1
通常月ランク情報 RANK_MONTH_INFO ※通常月ランク制度を運用していない場合、本項目下の情報は設定されません。
翌月ランク対象金額 R ET A S N U K_TAISHO_KINGAKU_YOKUG 数値 10 条 要 ます 求 。 で指定された条件で更新した場合、当月ランクの算出金額（＝前月の累計金額、もしくは、スライド型の場合は期間累計）が設定され
翌月ランク名称 RANK_NAME_YOKUGETSU 全半角文字 40 条 要求で指定された条件で更新した場合、翌月ランクのランク名称が設定されます
翌月ランク倍率 RANK_BAIRITSU_YOKUGETSU 数値 3,1 条 要 （整 求 数 で 部 指 2 定 桁 さ 、 れ 小 た 数 条 部 件 1桁 で更 とす 新 る し 。 た 例 場 ： 合 2.0 、 、 翌 2. 月 5） ランクのランク倍率が設定されます。
翌月上位ランク必要金額 H O I K G U H G _R E A T N S K U _HITSUYO_KINGAKU_Y 数値 10 条 要求で指定された条件で更新した場合、翌月の上位ランクへランクアップするために必要な金額が設定されます。
翌月上位ランク名称 HIGH_RANK_NAME_YOKUGETSU 全半角文字 40 条 要求で指定された条件で更新した場合、翌月の上位ランク名称が設定されます
翌月上位ランク倍率 HIGH_RANK_BAIRITSU_YOKUGET 要求で指定された条件で更新した場合、翌月の上位ランク倍率が設定されます。
SU 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
ボーナスポイント情報 BONUS_POINT_INFO ※ボーナスポイント制度を運用していない場合、本項目下の情報は設定されません。複数運用している場合、運用しているパターン分繰り
返し設定されます。
ボーナスポイント名称 BONUS_POINT_NAME
全半角文字 40 条 ボーナスポイントのパターンの名称を設定します。
次回ボーナスポイント対象金 BONUS_TAISHO_KINGAKU_JIKAI 次回に付与される予定のボーナスポイント計算の対象となる金額を設定します。
額 例：
数値 10 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「10000」が設定されます。
※次頁へ続く ※1：特異なケース（ランクの確定時期と、適用期間に隔たりがあるケース）において、
"翌年"ではなく、"翌々年"の上位ランク情報を返送します。（詳細は、P10.ポイント照会の"翌年上位ランク"の説明を参照）
46/129 Copyright ©NTT DATA CORPORATION

---

## Page 47

システム名 分類 API名
Tài liệu đặc tả giao diện CAFIS Explorer オンラインAPI 付与予定ポイント照会
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
次回ボーナスポイント BONUS_POINT_JIKAI 次回の付与ボーナスポイント数を設定します。
例：
数値 8 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「100」が設定されます。
次回上位ボーナスポイント必 HIGH_BONUS_POINT_HITSUYO_KINGA 次回の上位ボーナスステージに必要な金額を設定します。
要金額 KU_JIKAI 例：
現在の買上額は\10,000です。
数値 10 条 次回付与予定のボーナスポイントは100Pです。
あと\5,000のお買上げで200Pになります。
→この「5000」が設定されます。
上位ランクがない場合は0を設定します。
次回上位ボーナスポイント HIGH_BONUS_POINT_JIKAI 次回の上位ボーナスステージに必要なポイント数を設定します。
例：
数値 8 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「200」が設定されます。
前回ボーナスポイント対象金 BONUS_TAISHO_KINGAKU_ZENKAI 前回のボーナスポイント計算の対象とした金額を設定します。
額 例：
数値 10 条 前回の買い上げ金額は\13,000で、付与ポイントは100Pでした。
→この「13000」が設定されます。
ただし、半期の場合、前半期実績を返信できる期間は5ヵ月となります。※2
前回ボーナスポイント BONUS_POINT_ZENKAI 前回付与済のボーナスポイント数を設定します。
例：
数値 8 条 前回の買い上げ金額は\13,000で、付与ポイントは100Pでした。
→この「100」が設定されます。
ただし、半期の場合、前半期実績を返信できる期間は5ヵ月となります。※2
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE 処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
全半角文字 500 ● ・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：27 「入力頂いた会員番号はご利用の端末ではサービスを利用できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、21、23、24、27、90 異常
C ※2 付与集計パターンが半期の場合
集計期間：3～9月、10～2月
1 2 3 4 5 6 7 8 9 1011121 2 3
■
■
○ ○ ○ ○ ○ ×
↑
2月の時、3～8月の集計金額表示は不可
47/129 Copyright ©NTT DATA CORPORATION

---

## Page 48

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI ポイント変動履歴照会
P20. ポイント変動履歴照会
1. 処理概要
・ ポイントの変動履歴情報を取得します。
ポイント照会で取得したサービスグループから照会年月を指定してポイント変動履歴を取得します。
ポイント変動履歴の照会期間は、ポイント変動履歴の保持期間に準じます。事業者様ごとにパラメータでの設定とします。（標準設定では当月＋過去12か月）
取得したポイント変動履歴は、①ポイント変動日時が新しい順②ポイント処理通番が大きい順で表示順が設定されます。
＊照会件数は上限100件を推奨値とします。
・ 設定例
【要求パラメータの設定例】
会員番号 照会年月 照会開始番号 照会件数
290000000000001 201806 6 5 ① ポイント変動日時で並び替えた後
② ポイント処理通番で並び替える
【ポイント明細登録情報と返信パラメータの返信例】
本システムで管理しているポイント変動履歴 （2018/6）
表示順 会員番号 ポイント変動日ポイント変動日時 ポイント処理通番 企業 店 端末番号 取引番号 ポイント変動理由 付与ポイント 利用ポイント 抽出対象
290000000000001 20180602 2018060209000010003147 1 100 1 2 お買上ポイント 10 0
290000000000001 20180602 2018060209000010003147 2 1 1 1 お買上ポイント 0 500
290000000000001 20180602 2018060212000010003159 1 100 1 1 お買上ポイント 23 0
290000000000001 20180602 2018060223000010003235 1 100 1 1 ポイント修正 12 0
290000000000001 20180603 2018060309000010003444 2 100 1 1 お買上ポイント 3 0
290000000000001 20180603 2018060309000010003444 1 100 1 1 来店ポイント 5 0
5 290000000000001 20180611 2018061109000010003452 1 100 1 1 お買上ポイント 16 0 ○
4 290000000000001 20180611 2018061109000010003453 1 100 1 1 特典ポイント 3 0 ○
3 290000000000001 20180612 2018061218000010003678 1 100 1 1 お買上ポイント 2 120 ○
2 290000000000001 20180613 2018061312000010003986 1 100 1 1 お買上ポイント 2 0 ○
1 290000000000001 20180614 2018061409000010004124 1 100 1 1 特典ポイント 50 0 ○
290000000000001 20180614 2018061409000010004125 1 100 1 1 お買上ポイント 12 250
290000000000001 20180614 2018061409000010004125 1 100 1 2 お買上ポイント 0 30
290000000000001 20180614 2018061409000010004125 1 100 1 3 お買上ポイント 11 0
290000000000001 20180618 2018061816000010004543 1 100 1 1 お買上ポイント 12 0
290000000000001 20180627 2018062709000010005876 1 100 1 1 お買上ポイント 10 0 はじめの履歴から数えて6番目から照会
48/129 Copyright ©NTT DATA CORPORATION

---

## Page 49

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI ポイント変動履歴照会
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "P20"を設定します。
会員情報 KAIIN_INFO - -
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員識別番号を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
履歴検索情報 RIREKI_SEARCH_INFO
サービスグループコード SG_CD 半角英数 3 - ● 照会するポイント変動履歴のサービスグループを設定します。対象のコードは「P10 ポイント照会」で取得した値を設定してください。
照会年月 SHOKAI_MONTH 数値 YYYYMM 6 - ● 照会するポイント変動履歴の対象年月を設定します。
照会開始番号 SHOKAI_NO_START 数値 3 1 ● ポイント変動履歴の開始番号を設定します。
照会件数 SHOKAI_COUNT 数値 3 100 ● ポイント変動履歴の件数を設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
49/129 Copyright ©NTT DATA CORPORATION

---

## Page 50

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI ポイント変動履歴照会
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定される。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求の期間にポイント変動履歴が0件の場合に返します。
12：正常終了・ポイント変動履歴なし
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
数値 2 ● ● ・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求のサービスグループがマスタに存在しない場合に返します。
26：サービスグループ未登録
・要求の組織で会員がサービスを利用できない場合に返します。
27：取扱い不可サービス
・DB障害、オンラインDBの管理対象外期間などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● 要求の値がそのまま設定されます。
履歴検索情報 RIREKI_SEARCH_INFO
サービスグループコード SG_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。ポイント内訳明細を取得する際の要求キーとなります。
照会年月 SHOKAI_MONTH 数値 YYYYMM 6 ● ● 要求の値がそのまま設定されます。
照会開始番号 SHOKAI_NO_START 数値 3 ● ● 要求の値がそのまま設定されます。
照会件数 SHOKAI_COUNT 数値 3 ● ● 要求の値がそのまま設定されます。
ポイント履歴情報 POINT_RIREKI_INFO
変動履歴基本情報 HENDO_RIREKI_BASIC_INFO (対象明細分繰り返し。)
表示順 HYOJI_JUN ポイント履歴一覧の表示順が設定されます。要求パラメータの「照会開始番号」で指定したソート番号の履歴を「１」とし、
数値 3 ●
取得件数分（最大で「取得最大件数」分）まで順に値が設定されます。
ポイント変動日 HENDO_DAY 数値 YYYYMMDD 8 ● ポイント変動日が設定されます。ポイント内訳明細を取得する際の要求キーとなります。
ポイント変動日時 HENDO_DATE 数値 YYYYMMDDHH24MISS 14 ● ポイント変動日時が設定されます。
ポイント処理通番 POINT_SHORI_NO 数値 10 ● ポイント処理通番が設定されます。ポイント内訳明細を取得する際の要求キーとなります。
会員識別 KAIIN_NO_SHIKIBETSU 数値 2 ● 使用したカードの会員識別番号が設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● 使用したカードの会員番号が設定されます。
会員番号種別名称 KAIIN_NO_SHUBETSU_NAME 全半角文字 20 ● 使用した会員の会員番号種別（カード名称、券種名など）が設定されます。
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● 取引日付が設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● 取引時刻が設定されます。
取引店舗 TORIHIKI_STORE 全半角文字 60 ● 取引店舗名称が設定されます。
取引テナント TORIHIKI_TENANT 全半角文字 60 ● 取引テナント名称が設定されます。
取引端末番号 TORIHIKI_TERM_NO 半角英数 20 ● 端末番号が設定されます。
取引番号 TORIHIKI_NO 半角英数 20 条 取引番号が設定されます。 ※当該取引の取引番号が未設定の場合、空タグとなります。
金額1 KINGAKU_1
数値 10 ● 該当取引の金額1が設定されます。
金額2 KINGAKU_2
数値 10 ● 該当取引の金額2が設定されます。
金額3 KINGAKU_3
数値 10 ● 該当取引の金額3が設定されます。
金額4 KINGAKU_4
数値 10 ● 該当取引の金額4が設定されます。
金額5 KINGAKU_5
数値 10 ● 該当取引の金額5が設定されます。
※次頁へ続く
50/129 Copyright ©NTT DATA CORPORATION

---

## Page 51

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI ポイント変動履歴照会
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
付与ポイント FUYO_POINT 数値 8 ● 該当取引の付与ポイントが設定されます。
利用ポイント RIYO_POINT 数値 8 ● 該当取引の利用ポイントが設定されます。
更新後利用可能ポイント RIYO_KANO_POINT 数値 8 ● 更新後利用可能ポイントが設定されます。
ポイント変動理由 HENDO_RIYU 全半角文字 80 ● ポイント変動理由の名称が設定されます。
ポイント変動理由説明 HENDO_RIYU_SETSUMEI 全半角文字 80 条 該当取引のポイント変動理由が設定されます。 ※当該取引のポイント変動理由説明が未設定の場合、空タグとなります。
ポイント変動理由コード HENDO_RIYU_CD 数値 4 ● ポイント変動理由コードが設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：12 「該当期間にはポイント変動履歴がありません。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
全半角文字 500 ● ・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：26 「サービスグループが存在しません。」
・処理ステータス：27 「入力頂いた会員番号はご利用の端末ではサービスを利用できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 12、20、21、23、24、26、27、90 正常（検索結果無し）、異常
C
51/129 Copyright ©NTT DATA CORPORATION

---

## Page 52

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI ポイント内訳照会
P21. ポイント内訳照会
1. 処理概要
・ ポイント変動履歴照会APIを行った後、1つの取引を指定し、その取引の内訳情報を照会します。
照会期間は事業者様ごとにパラメータでの設定とし、当月から過去12ヶ月までの設定が可能です。
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "P21"を設定します。
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員識別番号を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
明細履歴検索情報 MEISAI_RIREKI_SEARCH_INFO
サービスグループコード SG_CD 半角英数 3 - ● 照会するポイント内訳のサービスグループコードを設定します。「P20 ポイント変動履歴照会」で取得した値を設定してください。
ポイント変動日 HENDO_DAY 数値 YYYYMMDD 8 - ● 照会するポイント内訳のポイント変動日を設定します。「P20 ポイント変動履歴照会」で取得した値を設定してください。
ポイント処理通番 POINT_SHORI_NO 数値 10 - ● 照会するポイント内訳のポイント処理通番を設定します。「P20 ポイント変動履歴照会」で取得した値を設定してください。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
52/129 Copyright ©NTT DATA CORPORATION

---

## Page 53

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI ポイント内訳照会
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS 要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・ポイント内訳明細が存在しない場合に返します。
13：正常終了・ポイント内訳明細なし
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
数値 2 ● ● ・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求のサービスグループがマスタに存在しない場合に返します。
26：サービスグループ未登録
・要求の組織で会員がサービスを利用できない場合に返します。
27：取扱い不可サービス
・システム障害の場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● 要求の値がそのまま設定されます。
明細履歴検索情報 MEISAI_RIREKI_SEARCH_INFO
サービスグループコード SG_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ポイント変動日 HENDO_DAY 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
ポイント処理通番 POINT_SHORI_NO 数値 10 ● ● 要求の値がそのまま設定されます。
ポイント履歴情報 POINT_RIREKI_INFO
変動履歴基本情報 HENDO_RIREKI_BASIC_INFO
ポイント変動日時 HENDO_DATE 数値 YYYYMMDDHH24MISS 14 ● ポイント変動日時が設定されます。
会員識別 KAIIN_NO_SHIKIBETSU 数値 2 ● 該当取引に使用したカードの会員識別番号が設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● 該当取引に使用したカードの会員番号が設定されます。
会員番号種別名称 KAIIN_NO_SHUBETSU_NAME 全半角文字 20 ● 該当取引に使用した会員の会員番号種別（カード名称、券種名など）が設定されます。
取引日 TORIHIKI_DATE 数値 YYYYMMDD 8 ● 取引日付が設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● 取引時刻が設定されます。
取引店舗 TORIHIKI_STORE 全半角文字 60 ● 取引店舗名称が設定されます。
取引テナント TORIHIKI_TENANT 全半角文字 60 ● 取引テナント名称が設定されます。
取引端末番号 TORIHIKI_TERM_NO 半角英数 20 ● 端末番号が設定されます。
取引番号 TORIHIKI_NO 半角英数 20 ● 取引番号が設定されます。
金額1 KINGAKU_1 該当取引の金額1(買上金額)が設定されます。
数値 10 ●
「ポイント対象金額」や「ランク対象金額」など買上金額とは異なる金額がある場合は金額2～5に設定します。
金額2 KINGAKU_2
数値 10 ● 該当取引の金額2が設定されます。
金額3 KINGAKU_3
数値 10 ● 該当取引の金額3が設定されます。
金額4 KINGAKU_4
数値 10 ● 該当取引の金額4が設定されます。
金額5 KINGAKU_5
数値 10 ● 該当取引の金額5が設定されます。
付与ポイント FUYO_POINT 数値 8 ● 該当取引の付与ポイントが設定されます。
利用ポイント RIYO_POINT 数値 8 ● 該当取引の利用ポイントが設定されます。
更新後利用可能ポイント RIYO_KANO_POINT 数値 8 ● 更新後利用可能ポイントが設定されます。
ポイント変動理由 HENDO_RIYU 全半角文字 80 ● ポイント変動理由の名称が設定されます。
ポイント変動理由説明 HENDO_RIYU_SETSUMEI 全半角文字 80 ● 該当取引のポイント変動理由が設定されます。
※次頁へ続く
53/129 Copyright ©NTT DATA CORPORATION

---

## Page 54

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI ポイント内訳照会
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
ポイント内訳明細情報 POINT_UCHIWAKE_MESAI_INFO （キャンペーン毎に繰り返し、キャンペーンコードの昇順。）付与ポイントの内訳が設定されます。付与ポイントが無い場合は設定されません。
キャンペーンコード CAMPAIGN_CD 半角英数 7 条 キャンペーンコードが設定されます。
キャンペーン略称 CAMPAIGN_RYAKUSHO 全半角文字 20 条 キャンペーンコードの略称が設定されます。
キャンペーン別付与ポイント CAMPAIGN_FUYO_POINT 数値 8 条 該当キャンペーンでの付与ポイント数が設定されます。
ポイント倍率 POINT_BAIRITSU 数値 3,1 条 キャンペーンの倍率が設定されます。
有効期限別明細情報 YUKO_KIGEN_MEISAI_INFO
通常ポイント内訳情報 TSUJO_POINT_UCHIWAKE_INFO （有効期限ごとに繰り返し、有効期限の昇順。）通常ポイントの加算減算が有効期限毎に設定されます。
通常ポイントへの加算減算が無い場合は設定されません。
有効期限別付与ポイント YUKO_KIGEN_FUYO_POINT 数値 8 条 該当取引の通常ポイントの有効期限毎の付与ポイントが設定されます。
有効期限別利用ポイント YUKO_KIGEN_RIYO_POINT 数値 8 条 該当取引の通常ポイントの有効期限毎の利用ポイントが設定されます。
有効期限 YUKO_KIGEN 数値 8 条 該当取引の通常ポイントの有効期限が設定されます。
期間限定ポイント内訳情報 KIGEN_POINT_UCHIWAKE_INFO （有効期限毎に繰り返し、有効期限の昇順。）期間限定ポイントの場合、期間限定ポイントの加算減算が有効期限毎に設定されます。
期間限定ポイントへの加算減算が無い場合は設定されません。
有効期限別付与ポイント YUKO_KIGEN_FUYO_POINT 数値 8 条 該当取引の期間限定ポイントの付与の内訳が設定されます。
有効期限別利用ポイント YUKO_KIGEN_RIYO_POINT 数値 8 条 該当取引の期間限定ポイントの利用の内訳が設定されます。
有効期限 YUKO_KIGEN 数値 8 条 該当取引の期間限定ポイントの有効期限が設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：13 「該当取引のポイント内訳明細はありません。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
全半角文字 500 ● ・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：26 「サービスグループが存在しません。」
・処理ステータス：27 「入力頂いた会員番号はご利用の端末ではサービスを利用できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 13、20、21、23、24、26、27、90 正常（検索結果無し）、異常
C
54/129 Copyright ©NTT DATA CORPORATION

---

## Page 55

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI 全SGポイント変動履歴照会
P22. 全SGポイント変動履歴照会
1. 処理概要
・ ポイントの変動履歴情報を取得します。
照会年月を指定して会員番号と取引組織で有効なサービスグループのポイント変動履歴を取得します。
ポイント変動履歴の照会期間は、ポイント変動履歴の保持期間に準じます。事業者様ごとにパラメータでの設定とします。（標準設定では当月＋過去12か月）
取得したポイント変動履歴は、①ポイント変動日時が新しい順②ポイント処理通番が大きい順③SGの昇順で表示順が設定されます。
＊照会件数は上限100件を推奨値とします。
① ポイント変動日時で並び替えた後
・ 設定例 ② ポイント処理通番で並び替え、
【要求パラメータの設定例】
会員番号 照会年月 照会開始番号 照会件数 ③ サービスグループコードで並び替え
290000000000001 202209 6 5
【ポイント明細登録情報と返信パラメータの返信例】
本システムで管理しているポイント変動履歴 （2022/9）
表示順 会員番号 ポイント変動日ポイント変動日時 ポイント処理通番 サービスグループコード企業 店 端末番号 取引番号 ポイント変動理由 付与ポイント 利用ポイント 抽出対象
290000000000001 20220902 2022090209000010003147 SG3 1 100 1 2 お買上ポイント 10 0
290000000000001 20220902 2022090209000010003147 SG2 2 1 1 1 お買上ポイント 0 500
290000000000001 20220902 2022090212000010003159 SG2 1 100 1 1 お買上ポイント 23 0
290000000000001 20220902 2022090223000010003235 SG2 1 100 1 1 ポイント修正 12 0
290000000000001 20220903 2022090309000010003444 SG3 2 100 1 1 お買上ポイント 3 0
290000000000001 20220903 2022090309000010003444 SG1 1 100 1 1 来店ポイント 5 0
5 290000000000001 20220911 2022091109000010003452 SG2 1 100 1 1 お買上ポイント 16 0 ○
4 290000000000001 20220911 2022091109000010003453 SG2 1 100 1 1 特典ポイント 3 0 ○
3 290000000000001 20220912 2022091218000010003678 SG2 1 100 1 1 お買上ポイント 2 120 ○
2 290000000000001 20220913 2022091312000010003986 SG1 1 100 1 1 お買上ポイント 2 0 ○
1 290000000000001 20220914 2022091409000010004124 SG3 1 100 1 1 特典ポイント 50 0 ○
290000000000001 20220914 2022091409000010004125 SG3 1 100 1 1 お買上ポイント 12 250
290000000000001 20220914 2022091409000010004125 SG2 1 100 1 2 お買上ポイント 0 30
290000000000001 20220914 2022091409000010004125 SG1 1 100 1 3 お買上ポイント 11 0
290000000000001 20220918 2022091816000010004543 SG1 1 100 1 1 お買上ポイント 12 0
290000000000001 20220927 2022092709000010005876 SG2 1 100 1 1 お買上ポイント 10 0 はじめの履歴から数えて6番目から照会
・ 当APIでは取引履歴をサービスグループ単位で返信します。
1回の取引でSG1に付与利用がある場合、下記の取引履歴は右記のように返信します。
【取引履歴】 【返信パラメータ(一部抜粋)】
ポイント変動日時 サービスグループコード1付与ポイント1 利用ポイント1 <POINT_RIREKI_INFO>
20220902090000SG1 10 20 <HENDO_RIREKI_BASIC_INFO>
<HENDO_DATE>20220902090000</HENDO_DATE>
<SG_CD>SG1</SG_CD>
<FUYO_POINT>10</FUYO_POINT>
<RIYO_POINT>20</RIYO_POINT>
</HENDO_RIREKI_BASIC_INFO>
</POINT_RIREKI_INFO>
・ CEでは1回の取引で複数のサービスグループ(最大3SG)に付与または利用ができます。
上記の場合は、複数行で返信します。なお、取引単位の情報は共通の値で設定されます。
1回の取引でSG2に付与、SG3に利用がある場合、下記の取引履歴は右記のように返信します。
【取引履歴】 【返信パラメータ(一部抜粋)】
ポイント変動日時 サービスグループコード1付与ポイント1 利用ポイント1 サービスグループコード2付与ポイント2 利用ポイント2 <POINT_RIREKI_INFO>
20220903090000SG2 30 0 SG3 0 40 <HENDO_RIREKI_BASIC_INFO>
<HENDO_DATE>20220903090000</HENDO_DATE>
<SG_CD>SG2</SG_CD>
<FUYO_POINT>30</FUYO_POINT>
<RIYO_POINT>0</RIYO_POINT>
</HENDO_RIREKI_BASIC_INFO>
<HENDO_RIREKI_BASIC_INFO>
<HENDO_DATE>20220903090000</HENDO_DATE>
<SG_CD>SG3</SG_CD>
<FUYO_POINT>0</FUYO_POINT>
<RIYO_POINT>40</RIYO_POINT>
</HENDO_RIREKI_BASIC_INFO>
</POINT_RIREKI_INFO>
55/129 Copyright ©NTT DATA CORPORATION

---

## Page 56

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI 全SGポイント変動履歴照会
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "P22"を設定します。
会員情報 KAIIN_INFO - -
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員識別番号を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
履歴検索情報 RIREKI_SEARCH_INFO
照会年月 SHOKAI_MONTH 数値 YYYYMM 6 - ● 照会するポイント変動履歴の対象年月を設定します。
照会開始番号 SHOKAI_NO_START 数値 3 1 ● ポイント変動履歴の開始番号を設定します。
照会件数 SHOKAI_COUNT 数値 3 100 ● ポイント変動履歴の件数を設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
56/129 Copyright ©NTT DATA CORPORATION

---

## Page 57

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI 全SGポイント変動履歴照会
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定される。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求の期間にポイント変動履歴が0件の場合に返します。
12：正常終了・ポイント変動履歴なし
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
数値 2 ● ● 21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員がサービスを利用できない場合に返します。
27：取扱い不可サービス
・DB障害、オンラインDBの管理対象外期間などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● 要求の値がそのまま設定されます。
履歴検索情報 RIREKI_SEARCH_INFO
照会年月 SHOKAI_MONTH 数値 YYYYMM 6 ● ● 要求の値がそのまま設定されます。
照会開始番号 SHOKAI_NO_START 数値 3 ● ● 要求の値がそのまま設定されます。
照会件数 SHOKAI_COUNT 数値 3 ● ● 要求の値がそのまま設定されます。
ポイント履歴情報 POINT_RIREKI_INFO
変動履歴基本情報 HENDO_RIREKI_BASIC_INFO (対象明細分繰り返し。)
表示順 HYOJI_JUN ポイント履歴一覧の表示順が設定されます。要求パラメータの「照会開始番号」で指定したソート番号の履歴を「１」とし、
数値 3 ●
取得件数分（最大で「取得最大件数」分）まで順に値が設定されます。
ポイント変動日 HENDO_DAY 数値 YYYYMMDD 8 ● ポイント変動日が設定されます。ポイント内訳明細を取得する際の要求キーとなります。
ポイント変動日時 HENDO_DATE 数値 YYYYMMDDHH24MISS 14 ● ポイント変動日時が設定されます。
サービスグループコード SG_CD 半角英数 3 ● サービスグループのコードが設定されます。
サービスグループ略称 SG_RYAKUSHO 全半角文字 20 ● サービスグループの表示名称が設定されます。
ポイント処理通番 POINT_SHORI_NO 数値 10 ● ポイント処理通番が設定されます。ポイント内訳明細を取得する際の要求キーとなります。
会員識別 KAIIN_NO_SHIKIBETSU 数値 2 ● 使用したカードの会員識別番号が設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● 使用したカードの会員番号が設定されます。
会員番号種別名称 KAIIN_NO_SHUBETSU_NAME 全半角文字 20 ● 使用した会員の会員番号種別（カード名称、券種名など）が設定されます。
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● 取引日付が設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● 取引時刻が設定されます。
取引店舗コード TORIHIKI_STORE_CODE 半角英数 20 ● 取引店舗の組織コードが設定されます。
取引店舗 TORIHIKI_STORE 全半角文字 60 ● 取引店舗名称が設定されます。
取引テナントコード TORIHIKI_TENANT_CODE 半角英数 20 ● 取引テナントの組織コードが設定されます。
取引テナント TORIHIKI_TENANT 全半角文字 60 ● 取引テナント名称が設定されます。
取引端末番号 TORIHIKI_TERM_NO 半角英数 20 ● 端末番号が設定されます。
取引番号 TORIHIKI_NO 半角英数 20 ● 取引番号が設定されます。
金額1 KINGAKU_1
数値 10 ● 該当取引の金額1が設定されます。
金額2 KINGAKU_2
数値 10 ● 該当取引の金額2が設定されます。
金額3 KINGAKU_3
数値 10 ● 該当取引の金額3が設定されます。
金額4 KINGAKU_4
数値 10 ● 該当取引の金額4が設定されます。
※次頁へ続く
57/129 Copyright ©NTT DATA CORPORATION

---

## Page 58

システム名 分類 API名
Tài liệu đặc tả giao diện
CAFIS Explorer オンラインAPI 全SGポイント変動履歴照会
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
金額5 KINGAKU_5
数値 10 ● 該当取引の金額5が設定されます。
付与ポイント FUYO_POINT 数値 8 ● 該当取引の付与ポイントが設定されます。
利用ポイント RIYO_POINT 数値 8 ● 該当取引の利用ポイントが設定されます。
更新後利用可能ポイント RIYO_KANO_POINT 数値 8 ● 更新後利用可能ポイントが設定されます。
ポイント変動理由 HENDO_RIYU 全半角文字 80 ● ポイント変動理由の名称が設定されます。
ポイント変動理由説明 HENDO_RIYU_SETSUMEI 全半角文字 80 ● 該当取引のポイント変動理由が設定されます。
ポイント変動理由コード HENDO_RIYU_CD 数値 4 ● ポイント変動理由コードが設定されます。
予備項目1 YOBI_KOMOKU_1
全半角文字 20 ● ポイントの履歴情報として、予備項目1が設定されます。
予備項目2 YOBI_KOMOKU_2
全半角文字 20 ● ポイントの履歴情報として、予備項目2が設定されます。
予備項目3 YOBI_KOMOKU_3
全半角文字 20 ● ポイントの履歴情報として、予備項目3が設定されます。
予備項目4 YOBI_KOMOKU_4
全半角文字 20 ● ポイントの履歴情報として、予備項目4が設定されます。
予備項目5 YOBI_KOMOKU_5
全半角文字 20 ● ポイントの履歴情報として、予備項目5が設定されます。
予備項目6 YOBI_KOMOKU_6
全半角文字 20 ● ポイントの履歴情報として、予備項目6が設定されます。
予備項目7 YOBI_KOMOKU_7
全半角文字 20 ● ポイントの履歴情報として、予備項目7が設定されます。
予備項目8 YOBI_KOMOKU_8
全半角文字 20 ● ポイントの履歴情報として、予備項目8が設定されます。
予備項目9 YOBI_KOMOKU_9
全半角文字 20 ● ポイントの履歴情報として、予備項目9が設定されます。
予備項目10 YOBI_KOMOKU_10
全半角文字 20 ● ポイントの履歴情報として、予備項目10が設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：12 「該当期間にはポイント変動履歴がありません。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
全半角文字 500 ●
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：27 「入力頂いた会員番号はご利用の端末ではサービスを利用できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 12、20、21、23、24、27、90 正常（検索結果無し）、異常
C
58/129 Copyright ©NTT DATA CORPORATION

---

## Page 59

システム名 分類 API名
Tài liệu đặc tả giao diện CAFIS Explorer オンラインAPI ポイント更新
P40. ポイント更新
1. 処理概要
・ 会員のポイントやランクなどのサービス情報を更新します。
更新要求は異常や取引重複がない限り受け付けます。そのため、ポイント更新を行う場合は、必ずポイント照会を行って会員の状態や利用可能なポイントを照会し、ポイント更新を行って下さい。
なお、利用可能なポイントはマイナスとなることを許容しています。ポイントがマイナスとなった場合は、警告が記録されます。
・ 端末やテナント、店舗、アプリや会員サイトなどの外部システムが利用可能なサービスのみ更新する事が出来ます。
外部システムが利用可能なサービスは要件定義工程で決定した内容を事前パラメータ設定します。（決められたサービス以外は利用できません）
・ ポイント更新処理区分に応じて、ポイント更新の処理内容が分かれます。
①ポイント付与・金額変更 ・・・ポイントの直付け（加算）、ポイント直付けの取消（減算）、および、ランク対象金額などの金額の変更をすることが可能です。ポイント付与には精算（キャンペーンコード）が紐づきます。
②ポイント利用 ・・・ポイントの利用（減算）、ポイントの利用の取消（加算）を行うことが可能です。ポイント利用には精算（キャンペーンコード）は紐づきません。
③センター計算型付与 ・・・金額からセンター（CE）でポイント計算を行ってポイントを付与します。同一トランザクション上でポイント利用およびポイントの直付けを行うことも可能です。
・・・返品時は買上時の金額、付与、利用の情報にもとづいて金額とポイントの戻し処理を行います。
④外部システム計算型付与 ・・・外部システム計算したポイントを付与します。本APIでは大量処理時のレスポンスを考慮してポイント付与に必要な最低限の情報のみ更新しますので、必ず取引明細ファイルとセットで利用頂くインターフェースとなります。
⑤DC ・・・ポイント更新（外部システム計算型付与）を処理した後に、取引とは非同期で詳細情報を更新するインターフェースとなります。 ※本処理区分は、外部システムから利用いただくことはできません。
・ 返信値でレシート印字に必要な情報を返信します。規定されてたbyte数で折り返しながらテキスト形式で返す「レシートメッセージ情報」および各パラメータを返信します。
※規定されてたbyte数で折り返しながらテキスト形式で返す「レシートメッセージ情報」の返信は、未実装。
・ 連動された取引が既に処理されていないかどうかをキー項目でチェックします。
キー項目が重複している場合は、ポイント処理をしませんので、センターで処理されているかどうか不明な場合は再送できます。
・ 取引を特定するキー項目は、以下の中からパラメータで事業者ごとに選択できます。
・ 以下の項目それぞれに対して、トランザクション重複制御のキーに含めるかどうかをパラメータで設定する。
設定例
項番 キー項目 必須/任意
事業者A 事業者B 事業者C
1 会 会 員 員 番 番 号 号 識別 任意に選択できる条件 ○ × ○
2 取引日付 必須条件 ○ ○ ○
3 取引時刻 任意に選択できる条件 ○ ○ ×
4 要求組織キー1～3 必須条件 ○ ○ ○
5 端末番号 必須条件 ○ ○ ○
6 取引番号 必須条件 ○ ○ ○
7 ポイント理由コード 任意に選択できる条件 ○ × ×
・ トランザクション重複チェックの範囲は、取引日付の月とその翌月となります。
例：トランザクションの取引日付＝3/15の場合
3月に同じキーでポイント変動を行った履歴がないか？ →該当の履歴が存在する場合は、「19：トランザクション重複」となります。
4月に同じキーでポイント変動を行った履歴がないか？ →該当の履歴が存在する場合は、「19：トランザクション重複」となります。
・ 返品取引／取消取引の際に付与ポイントと利用ポイントの戻し元を下記として、ポイント残高を戻します。
ポイント更新処理l区分 取引区分 返品取消区分 付与P 利用P
3:センター計算 11:返品 1：一括返品 元取引の付与P 元取引の利用P
2：一部返品 要求電文から再計算 要求電文の利用P
１１：レシート無返品 元取引の付与P 元取引の利用P
12：取消 3：取消（違算） 元取引の付与P 元取引の利用P
4:外部システム計算 11:返品 1：一括返品 要求電文の付与P 元取引の利用P
5:DC 2：一部返品 要求電文の付与P 要求電文の利用P
12：取消 3：取消（違算） 元取引の付与P 元取引の利用P
・ 返品／取消（元取引あり）を利用する場合、以下の返品取消区分を指定します。
（返品／取消（元取引あり）については、サービス仕様書「本編 03_サービス管理編」2.4.返品／取消を参照）
元取引特定するキー項目は、返品取消区分により異なります。
返品取消区分 会員 会 番 員 号 番 識 号 別 元取引日付 元取引時刻 組 元 織 取 キ 引 ３ ー 要 1 求 ～ 要 端 求 末 組 番 織 号 キ に ー 紐 １ づ ～ く ３ 元取引 号 端末番 元取引番号 ポイ 由 ン コ ト変 ー 動 ド 理 金額５
1：一括返品
2：一部返品 △ ○ △ ○ ○ ○ △
3：取消（違算）
１１：レシート無返品 ○ ○ ○ ○ ○
１2：取引日付無返品 ○ ○ ○ ○ ○
※○：必須
※△：任意（パラメータ制御）
・ 返品／取消（元取引なし）を利用する場合、返品取消区分は「99：上記以外」を指定します。
（返品／取消（元取引なし）については、サービス仕様書「本編 03_サービス管理編」2.5.返品／取消（元取引なし）を参照）
・ 取引において利用ポイントが加算・減算される場合、かつ、処理前の残高にマイナス値が存在する場合はポイントの相殺処理が行われます。
（ポイントの相殺処理については、サービス仕様書「本編 03_サービス管理編」2.3.5.ポイント利用時の相殺処理を参照）
59/129 Copyright ©NTT DATA CORPORATION

---

## Page 60

システム名 分類 API名
Tài liệu đặc tả giao diện CAFIS Explorer オンラインAPI ポイント更新
2. 要求パラメータ ※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC
項目 1 2 ※ 3 4 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 既定値 設 必 定 須 説明
IFバージョン情報 ● ● ● ● ●IF_VERSION_INFO
IFバージョン ● ● ● ● ● IF_VERSION 数値 2,1 1.0 ● Ｉ （ Ｆ 整 の 数 バ 部 ー 1 ジ 桁 ョン 、小 を設 数 定 部 し 1桁 ます とす 。I る Fバ 。例 ージ ：1 ョ .2 ン [ は ve 別 r]） 途お伝えします。
事業者情報 ● ● ● ● ●JIGYOSHA_INFO
事業者コード ● ● ● ● ● JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 ● ● ● ● ●YOKYUMOTO_INFO
要求元チャネル識別 ● ● ● ● ● CHANEL_SHIKIBETSU 数値 3 - ● 要 CE 求 か 元 ら事 チ 業 ャネ 者 ル 毎 識 に 別 お と 伝 は え 外 す 部 る シ 値 ス を テ 設 ム 定 を し 識 ま 別 す。 するコードです。
外部接続ヘダー ● ● ● ● ●EXTERNALHDR
機能コード ● ● ● ● ● KINO_CD 半角英数 3 - ● "P40"を設定します。
処理情報 ● ● ● ● ● SHORI_INFO
ポイント更新処理区分 POINT_KOSHIN_SHORI_KUBUN 数値 ポイント更新処理区分を設定します。
1：ポイント付与・金額変更
● ● ● ● ● 2 - ● 2 3 ： ： ポ セン イン ター ト利 計 用 算型付与
4：外部システム計算型付与
5：DC
ポイント理由コード ● ● ● ● ● POINT_RIYU_CD 数値 4 - ● ポ ※ イ コ ン ー ト ド 理 値 由 は コ 事 ー 業 ド 者 を設 様 定 と要 しま 件 す 定 。 義時に取り決めた値を設定します。
ポイント理由説明 ● ● ● ● ● POINT_RIYU_SETSUMEI 全半角文字 80 - ポ ※ イ 外 ン 部 ト変 シス 動 テ 理 ム 由 側 の で 詳 文 細 字 説 列 明 で を 指 設 定 定 し し て ま 登 す 録 。 し （ポ ま イ す ン 。 ト交換10月分の「10月分」など）。
レシート幅バイト RECEIPT_WIDTH
● ● ● ● 数値 3 - 条 返 空 信 タグ パ も ラ し メ く ー タグ タの 省 「 略 レ の シー 場 ト 合 メ は ッセ 、返 ー 信 ジ」 パ タ ラ グ メ で ー 返 タ 信 の す 「レ る シ メ ー ッ ト セ メ ー ッ ジ セ の ー 幅 ジ」 （ を by 設 te 定 数 し ）を ま 指 せ 定 ん。 し ※ ます 現 。 時点では未実装
メール配信区分 MAIL_HAISHIN_KUBUN 今回の取引に対する会員へのメール配信区分を設定します。
1 1：送信しない
● ● ● ● ● 数値 - ● 2：送信する
「ポイント更新処理区分⑤」の場合、リアル処理時にメール送信済みであるならば再度送信はしません。※現時点では未実
装
PLO配信区分 PLO_HAISHIN_KUBUN 1 今回の取引に対する会員へのPLO配信区分を設定します。
● ● ● ● 数値 - 条 1：送信しない
2：送信する
会員情報 ● ● ● ● ● KAIIN_INFO
会員番号識別 ● ● ● ● ● KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員識別番号を設定します。
会員番号 ● ● ● ● ● KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
取引情報 ● ● ● ● ● TORIHIKI_INFO
取引区分 TORIHIKI_KUBUN 取引発生時の取引区分を設定します。
● ● ● 数値 2 99 ● 1 1 0 1 ： ： 買 返 上 品
12：取消（違算）
取引日付 TORIHIKI_DATE
トランザクション発生時の日付を設定します。POS端末、MP端末からの要求の場合はレシートに印字する日付となります。
● ● ● ● ● 数値 YYYYMMDD 8 - ● 同 ※ 一 取 取 引 引 日 の は 電 、未 文 来 を 日 再 お 送 よ す び る 過 場 去 合 4 、 ヶ 同 月 一 以 取 前 引 （シ の ス 電 テ 文 ム を 日 ＤＣ 付 で が 送 20 る 1 場 9/ 合 5 は /2 必 0の ず 場 同 合 じ値 、2 を 0 設 19 定 /1 し / て 3 く 1 だ 以 さ 前 い ） 。 を設定した場合は
要求項目異常でエラーとなります。
取引時刻 ● ● ● ● ● TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時刻を設定します。POS端末、MP端末からの要求の場合はレシートに印字する時刻となります。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
● ● ● ● ● 数値 1 1 ● 1 2 ： ： 要 端 求 末 組 番 織 号 キー
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 ● ● ● ● ● SOSHIKI_KEY_1 半角英数 20 - 条 組 同 織 一 識 取 別 引 区 の電 分 文 が を 「1 再 ：要 送 求 す 組 る場 織 合 キー 、同 」の 一 場 取 合 引 は の 必 電 須 文 で を 設 Ｄ 定 Ｃで し 送 てく る だ 場 さ 合 い は 。 必ず同じ値を設定してください。
要求組織キー2 ● ● ● ● ● SOSHIKI_KEY_2 半角英数 20 - 条 組 同 織 一 識 取 別 引 区 の電 分 文 が を 「1 再 ：要 送 求 す 組 る場 織 合 キー 、同 」の 一 場 取 合 引 は の 設 電 定 文 し を て Ｄ く Ｃ だ で さ 送 い る 。要 場 求 合 組 は必 織 ず キ 同 ー2 じ 以 値 降 を設 は省 定 略 して す く る だ こ さ と い も 。 可能です。
要求組織キー3 ● ● ● ● ● SOSHIKI_KEY_3 半角英数 20 - 条 組 同 織 一 識 取 別 引 区 の電 分 文 が を 「1 再 ：要 送 求 す 組 る場 織 合 キー 、同 」の 一 場 取 合 引 は の 設 電 定 文 し を て Ｄ く Ｃ だ で さ 送 い る 。要 場 求 合 組 は必 織 ず キ 同 ー2 じ 以 値 降 を設 は省 定 略 して す く る だ こ さ と い も 。 可能です。
※次頁へ続く
60/129 Copyright ©NTT DATA CORPORATION

---

## Page 61

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC
項目 1 2 ※ 3 4 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 既定値 設 必 定 須 説明
端末番号 TERM_NO 端末番号を設定します。
組織識別区分が「2：端末番号」の場合は端末番号から組織を特定するため必ず設定してください。
組織識別区分が「1：要求組織キー」の場合は端末番号が設定できない場合のみ0を設定してください。
● ● ● ● ● 半角英数 20 0 ● ※組織識別区分が「1：要求組織キー」の場合でも端末番号を設定する理由は次の事象を回避するためです。
POSなどの端末は端末毎に取引番号が附番されます。そうすると、別々の取引で組織と取引番号が同じになってしまう
可能性があります。結果、実態は未取引の取引が取引重複になる可能性が（低いながら）出てきてしまうためです。
同一取引の電文を再送する場合、同一取引の電文をＤＣで送る場合は必ず同じ値を設定してください。
取引番号 TORIHIKI_NO 該当トランザクションの取引番号を設定します。
● ● ● ● ● 半角英数 20 - ● 取引重複を制限するキー項目となるため、必ず一意になるように設定ください。
同一取引の電文を再送する場合、同一取引の電文をＤＣで送る場合は必ず同じ値を設定してください。
会員番号入力区分 KAIIN_NO_READ_KUBUN 会員番号を手入力したかを設定します。
● ● ● ● ● 数値 1 1 ● 1：システム入力
2：手入力
元取引情報 ● ● ● MOTO_TORIHIKI_INFO
返品取消区分 HENPIN_TORIKESHI_KUBUN 返品取引の取引種別を設定します。
1：一括返品
2：一部返品
● ● ● 数値 2 99 ● 3：取消（違算）
１１：レシート無返品
１2：取引日付無返品
99：上記以外
元取引日付 ● ● ● MOTO_TORIHIKI_DATE 数値 YYYYMMDD 8 - 条 返 定 品 しま 取 す 消 。 区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」、「11：レシート無返品」の場合に元取引日付を設
元取引時刻 ● ● ● MOTO_TORIHIKI_TIME 数値 HHMMSS 6 - 条 返品取消区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」の場合に元取引時刻を設定します。
元取引組織識別区分 MOTO_TORIHIKI_SOSHIKI_SHIKIBETSU_KUBUN 返品取消区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」、「11：レシート無返品」の場合に要求元の組織の引
当キーを設定します。
● ● ● 数値 1 - 条 1：要求組織キー
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定してください。
元取引要求組織キー1 ● ● ● MOTO_TORIHIKI_SOSHIKI_KEY_1 半角英数 20 - 条 返品取消区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」の場合に元取引要求組織キー1を設定します。
元取引要求組織キー2 ● ● ● MOTO_TORIHIKI_SOSHIKI_KEY_2 半角英数 20 - 条 返品取消区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」の場合に元取引要求組織キー2を設定します。
元取引要求組織キー3 ● ● ● MOTO_TORIHIKI_SOSHIKI_KEY_3 半角英数 20 - 条 返品取消区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」の場合に元取引要求組織キー3を設定します。
元取引端末番号 ● ● ● MOTO_TORIHIKI_TERM_NO 半角英数 20 - 条 返品取消区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」の場合に元取引端末番号を設定します。
元取引取引番号 ● ● ● MOTO_TORIHIKI_NO 半角英数 20 - 条 返 定 品 しま 取 す 消 。 区分が、「1：一括返品」、「2：一部返品」、「3：取消（違算）」、「12：取引日付無返品」の場合に元取引番号を設
取引金額情報 ● ● ● ● TORIHIKI_KINGAKU_INFO - -
金額1 ● ● ● ● KINGAKU_1 数値 10 0 ● 金額１には、「買上金額（支払金額）」を設定します。
金額2 ● ● ● ● KINGAKU_2 数値 10 0 ● タバコ類、酒類、調剤、ポイント利用金額などの要素によってポイント計算の対象となる金額やＮ倍の対象となる金額、ラン
金額3 ● ● ● ● KINGAKU_3 数値 10 0 ● クアップの対象となる金額の定義が異なる場合、金額2～金額5の項目を利用します。
金額4 ● ● ● ● KINGAKU_4 数値 10 0 ● 返品取消区分が「11：レシート無返品」、「12：取引日付無返品」の場合は、金額５が必須となります。
金額5 ● ● ● ● KINGAKU_5 数値 10 0 条 返品・取消する場合はマイナス値を設定します。
決済手段1 支払方法と決済金額に伴うポイントを付与する場合に、決済手段を設定します。
決済手段1に相対する金額が決済金額1となります。
● ● ● KESSAI_SHUDAN_1 数値 3 0 ● 1x x 0 ： ： ク 未 レ 使 ジ 用 ット系の決済手段
2xx：電子マネー系の決済手段
使用しない場合の既定値は「0：未使用」となります。
決済手段2 支払方法と決済金額に伴うポイントを付与する場合に、決済手段を設定します。
● ● ● KESSAI_SHUDAN_2 数値 3 0 ● 決済手段2に相対する金額が決済金額2となります。
コード定義は「決済手段1」を参照ください。
※次頁へ続く
61/129 Copyright ©NTT DATA CORPORATION

---

## Page 62

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC
項目 1 2 ※ 3 4 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 既定値 設 必 定 須 説明
決済金額1 ● ● ● KESSAI_KINGAKU_1 数値 10 0 ● 決 返 済 品 手 ・取 段 消 1 す に相 る場 対 合 す は る マ 決 イ 済 ナ 金 ス 額 値 を を 設 設 定 定 し し ま ま す す 。 。
決済金額2 ● ● ● KESSAI_KINGAKU_2 数値 10 0 ● 決 返 済 品 手 ・取 段 消 2 す に相 る場 対 合 す は る マ 決 イ 済 ナ 金 ス 額 値 を を 設 設 定 定 し し ま ま す す 。 。
利用ポイント情報 ● ● ● ● RIYO_POINT_INFO
利用ポイント RIYO_POINT 当取引で利用するポイント数を設定します。
利用ポイントを取消する場合はマイナス値を設定します。
「サービスグループコード」と「通常ポイント指定」と組み合わせて下記のパターンで利用が可能です。
SGCD：サービスグループコード、通Ｐ指：通常ポイント指定
SGCD 通Ｐ指処理内容
● ● ● ● 数値 8 0 ● なし なし 利用可能なSG※１の通常ポイント＋期限付きポイントから利用する。
なし あり 利用可能なSG※１の通常ポイントからのみ利用する。
あり あり 指定のSG※２の通常ポイントからのみ利用する。
あり なし 指定のSG※２の通常ポイント＋期限付きポイントから利用する。
※１：「利用可能なSG」は指定された会員番号識別と会員番号と取引が行われた組織の掛け合わせで
判定した利用可能なSG（1件から最大3件）
※２「指定のSG」は「利用可能なSG」の中から指定したSGとなります。
サービスグループコード SG_CD 指定のサービスグループからポイントを利用したい場合は、サービスグループを特定して指定ください。
サービスグループの指定がない場合は、利用可能なサービスグループから既定のルールに従ってポイントを利用します。
なお、２つのSGを指定して利用することも可能です（ただし、事前に「当機能を使う」パラメータ設定が必要です）。
その場合は事前に決めた２つのSGの組み合わせを意味する予約語「MNN」を指定します。
● ● ● ● 半角英数 3 - 予約語「MNN」のMは固定値です。NNは可変の数字です。N1桁で１つのSGを表します。
設定例 ※たとえば1=S01、2=S02、3=S03とします。
「M12」→S01とS02から利用します。
「M13」→S01とS03から利用します。
※なお、数字に対応するSGは事前にパラメータ設定をします。
通常ポイント指定 TUJYO_POINT_SHITEI 通常ポイントと期間限定ポイントを併用する場合に、通常ポイントからのみ利用します。
期限付きポイントへの利用は行いません。
● ● 数値 1 - 0 ： 全 ※ て タ の グ ポ な イ し ン 、も ト（ し 通 くは 常 、 ポ 空 イ タ ン グ ト＋ の場 期 合 間 も 限 同 定 様 ポ の イ 処 ント 理 ）か とな ら利 りま 用 す する
1：通常ポイントからのみ利用する
※当機能はオンラインからのみ使うことができます。取引明細取込からは使うことができません。
直付ポイント情報 ● ● JIKAZUKE_POINT_INFO
直付ポイント JIKAZUKE_POINT 当取引で付与するポイント数を設定します。
付与ポイントを取消する場合はマイナス値を設定します。
● ● 数値 8 - 直付けポイントを付与する場合は必ず正数か負数でポイント数を設定してください（0ポイントの直付けポイント付与はエラー
となります）。
「3：センター計算型付与」の場合は、金額での付与と直付けでの付与を両立することもできます。
サービスグループコード ● ● SG_CD 半角英数 3 - 条 直 直 付 付 ポ ポ イ イ ン ン ト ト の を加 サ 算 ービ 、減 スグ 算 ル す ー る プ 場 コ 合 ー は ド 必 を設 ず設 定 定 しま し す ます 。 。
キャンペーンコード ● ● CAMPAIGN_CD 半角英数 7 - 条 直 直 付 付 ポ ポ イ イ ン ン ト ト の を加 キャ 算 ン 、 ペ 減 ー 算 ン す コ る ー 場 ド 合 を設 は必 定 ず しま 設 す 定 。 します。
※次頁へ続く
62/129 Copyright ©NTT DATA CORPORATION

---

## Page 63

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC
項目 1 2 ※ 3 4 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 既定値 設 必 定 須 説明
サービスグループ別取引情報 ● ● SG_TORIHIKI_INFO (サービスグループ単位で繰り返し)
サービスグループコード ● ● SG_CD 半角英数 3 - ● ポ SG イ 別 ン 取 ト付 引 与 情 対 報 象 の の 以 サ 降 ー の ビ 項 ス 目 グ は ル 、 ー サ プ ー を ビ 設 ス 定 グ し ル ま ー す プ 。 単位での設定値となります。
サービスグループ別付与ポイント ● ● SG_FUYO_POINT 数値 8 - ● 外部システムで計算したポイントの合計値を設定します。
付与明細情報 ● ● FUYO_MEISAI_INFO ポイントの有効期限毎の内訳を設定します。
通常付与ポイント ● ● TUJYO_FUYO_POINT 数値 8 - ● 通常ポイントの付与ポイント数を設定します。
有効期限別取引件数 ● ● YUKO_KIGEN_TORIHIKI_COUNT 数値 3 - ● 有効期限別取引情報に設定される繰り返しタグの件数を設定します。
有効期限別取引情報 ● ● YUKO_KIGEN_TORIHIKI_INFO ( 期限付きポイントがある場合、有効期限ごとに繰り返し)
有効期限別付与ポイント ● ● YUKO_KIGEN_FUYO_POINT 数値 6 - 条 有 ※ 効 マイ 期 ナ 限 ス 単 の 位 付 の 与 付 ポ 与 イ ポ ント イ 数 ン は ト数 設 を 定 設 で 定 き し ま ま せ す ん 。 。
有効期限 ● ● YUKO_KIGEN 数値 8 - 条 期限付きポイントの有効期限を設定します。
キャンペーン別取引件数 ● CAMPAIGN_TORIHIKI_COUNT 数値 2 - ● キャンペーン別取引情報に設定される繰り返しタグの件数を設定します。
キャンペーン別取引情報 ● CAMPAIGN_TORIHIKI_INFO （キャンペーンごと繰り返し）
キャンペーン別付与ポイント ● CAMPAIGN_FUYO_POINT 数値 8 - ● キャンペーン単位の付与ポイント数を設定します。
キャンペーンコード ● CAMPAIGN_CD 半角英数 7 - ● キャンペーンコードを設定します。
ポイント倍率 ● POINT_BAIRITSU 数値 3.1 - キ ※ ャ 倍 ン 率 ペ で ー は ン な の く ポ 、固 イン 定 ト ポ 倍 イ 率 ン を トの 設 場 定 合 しま は す 空 。 タ （ グ 整 ま 数 た 部 は 2 タ 桁 グ 、 省 小 略 数 と 部 し 1 て 桁 くだ とし さ ま い す 。 。例：2.0、2.5）
予備情報 ● ● ● ● ● YOBI_INFO
予備項目1 ● ● ● ● ● YOBI_KOMOKU_1 全半角文字 20 - 予備項目として使用します。
予備項目2 ● ● ● ● ● YOBI_KOMOKU_2 全半角文字 20 - ポイントの履歴情報として、金額やコード値などを保持する場合に使用します。
予備項目3 ● ● ● ● ● YOBI_KOMOKU_3 全半角文字 20 -
予備項目4 ● ● ● ● ● YOBI_KOMOKU_4 全半角文字 20 -
予備項目5 ● ● ● ● ● YOBI_KOMOKU_5 全半角文字 20 -
予備項目6 ● ● ● ● ● YOBI_KOMOKU_6 全半角文字 20 -
予備項目7 ● ● ● ● ● YOBI_KOMOKU_7 全半角文字 20 -
予備項目8 ● ● ● ● ● YOBI_KOMOKU_8 全半角文字 20 -
予備項目9 ● ● ● ● ● YOBI_KOMOKU_9 全半角文字 20 -
予備項目10 ● ● ● ● ● YOBI_KOMOKU_10 全半角文字 20 -
操作者情報 ● ● ● ● ● SOSASHA_INFO
操作者コード ● ● ● ● ● SOSASHA_CD 半角英数 10 - 操作者の利用者コードを設定します。
処理結果情報 ● ● ● ● SHORI_KEKKA_INFO リアル処理の処理結果を設定します。
照会時処理ステータス ● SHOKAI_STATUS 数値 2 - P10 ポイント照会APIでの処理ステータスを設定します。
更新時処理ステータス ● KOSHIN_STATUS 数値 2 - P40 ポイント更新API（外部システム計算）での処理ステータスを設定します。
ポイント計算済みフラグ POINT_KEISAN_FLAG 外部システム側でポイント計算が済んでいるかどうか設定します。
● 数値 1 2 ● 1：未計算（オフラインのため付与ポイントが計算できていない）
2：計算済
確定電文フラグ KAKUTEI_MESSAGE_FLAG 確定電文であるかどうか識別のために設定します。
1：確定電文ではない
● ● ● ● 数値 1 1 ● 2：確定電文である
※処理区分＝4の場合は「1：確定電文ではない」を設定し、処理区分≠4の場合は「2：確定電文である」として設定しま
す。
63/129 Copyright ©NTT DATA CORPORATION

---

## Page 64

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
3. 返信パラメータ ※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC （ポイント更新処理区分が 5：DCの場合、内部的に返信パラメータは作成するが、対向先には返信しない）
項目 1 2 ※ 3 4 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 A 返信 B 有無 C 説明
IFバージョン情報 ● ● ● ● IF_VERSION_INFO
IFバージョン ● ● ● ● IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 ● ● ● ● JIGYOSHA_INFO
事業者コード ● ● ● ● JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 ● ● ● ● YOKYUMOTO_INFO
要求元チャネル識別 ● ● ● ● CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー ● ● ● ● EXTERNALHDR
機能コード ● ● ● ● KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
処理情報 ● ● ● ● SHORI_INFO
ポイント更新処理区分 ● ● ● ● POINT_KOSHIN_SHORI_KUBUN 数値 2 ● ● 要求の値がそのまま設定されます。
ポイント理由コード ● ● ● ● POINT_RIYU_CD 数値 4 ● ● 要求の値がそのまま設定されます。
ポイント理由説明 ● ● ● ● POINT_RIYU_SETSUMEI 全半角文字 80 条 条 要求の値がそのまま設定されます。
レシート幅バイト ● ● ● ● RECEIPT_WIDTH 数値 3 条 条 要求の値がそのまま設定されます。
メール配信区分 ● ● ● ● MAIL_HAISHIN_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
PLO配信区分 ● ● ● ● PLO_HAISHIN_KUBUN 数値 1 条 条 要求の値がそのまま設定されます。（要求電文にタグがある場合のみ返却）
ステータス情報 ● ● ● ● STATUS_INFO
処理ステータス SHORI_STATUS 要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・利用ポイントが利用可能ポイントを超えている場合に返します。利用可能ポイントは下記のパターンがあります。
SGCD：利用ポイント情報．サービスグループコード、通Ｐ指：利用ポイント情報．通常ポイント指定
SGCD 通Ｐ指残高不足とする判定条件
なし なし 利用ポイント ＞ 利用可能なSG※１の通常ポイント残高＋期限付きポイント残高
なし あり 利用ポイント ＞ 利用可能なSG※１の通常ポイント残高
あり あり 利用ポイント ＞ 指定のSG※２の通常ポイント残高
あり なし 利用ポイント ＞ 指定のSG※２の通常ポイント残高＋期限付きポイント残高
※１：「利用可能なSG」は指定された会員番号識別と会員番号と取引が行われた組織の掛け合わせで
判定した利用可能なSG（1件から最大3件）
※２：「指定のSG」は「利用可能なSG」の中から指定したSGとなります。
18：残高不足
取引の二重更新チェックを行い、すでに取り込まれている場合に返します。
19：トランザクション重複
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
● ● ● ● 数値 2 ● ● ・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求のサービスグループがマスタに存在しない場合に返します。
26：サービスグループ未登録
・要求の組織で会員がサービスを利用できない場合に返します。
27：取扱い不可サービス
・返品取消時に元取引が引き当てられない場合に返します。
35：元取引情報なし
・キャンペーンコードがマスタに存在しない場合に返します。
36：キャンペーンコード異常
・システム障害の場合にサーバ内部エラーを返します。
90：サーバ内部エラー 処理ステータス
0 1819202123242627353690
1.ポイント付与・金額変更 ● ● ● ● ● ● ● ● ●
処 理 区 2 3 . . ポ セン イン ター ト利 計 用 算 ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●
分4.端末計算 ● ● ● ● ● ● ● ● ● ● ● ●
5.DC
※次頁へ続く
64/129 Copyright ©NTT DATA CORPORATION

---

## Page 65

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC （ポイント更新処理区分が 5：DCの場合、内部的に返信パラメータは作成するが、対向先には返信しない）
項目 1 2 ※ 3 4 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 A 返信 B 有無 C 説明
会員情報 ● ● ● ● KAIIN_INFO
会員番号識別 ● ● ● ● KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要 ただ 求 し の 、 値 会 が 員 そ ス の テ ま ー ま タ 設 ス 定 が さ 正 れ 常 ま で す な 。 い場合、最新の会員番号の会員番号識別が設定されます。
会員番号 KAIIN_NO
要求の値がそのまま設定されます。
● ● ● ● 数値(条) 20 ● ● ただし、会員ステータスが正常でない場合、顧客に紐づく最新の会員番号の情報（同一統合顧客番号、同一会員番
号種別、会員ステータス＝0、利用開始日が最新、最終更新日が最新）を返却します。
取引情報 ● ● ● ● TORIHIKI_INFO
取引区分 ● ● TORIHIKI_KUBUN 数値 2 ● ● 要求の値がそのまま設定されます。
取引日付 ● ● ● ● TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 ● ● ● ● TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 ● ● ● ● SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 ● ● ● ● SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 ● ● ● ● SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 ● ● ● ● SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 ● ● ● ● TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
取引番号 ● ● ● ● TORIHIKI_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
会員番号入力区分 ● ● ● ● KAIIN_NO_READ_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
元取引情報 ● ● MOTO_TORIHIKI_INFO
返品取消区分 ● ● HENPIN_TORIKESHI_KUBUN 数値 2 ● ● 要求の値がそのまま設定されます。
元取引日付 ● ● MOTO_TORIHIKI_DATE 数値 YYYYMMDD 8 条 条 要求の値がそのまま設定されます。
元取引時刻 ● ● MOTO_TORIHIKI_TIME 数値 HHMMSS 6 条 条 要求の値がそのまま設定されます。
元取引組織識別区分 ● ● MOTO_TORIHIKI_SOSHIKI_SHIKIBETSU_KUBUN 数値 1 条 条 要求の値がそのまま設定されます。
元取引要求組織キー1 ● ● MOTO_TORIHIKI_SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
元取引要求組織キー2 ● ● MOTO_TORIHIKI_SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
元取引要求組織キー3 ● ● MOTO_TORIHIKI_SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
元取引端末番号 ● ● MOTO_TORIHIKI_TERM_NO 半角英数 20 条 条 要求の値がそのまま設定されます。
元取引取引番号 ● ● MOTO_TORIHIKI_NO 半角英数 20 条 条 要求の値がそのまま設定されます。
取引金額情報 ● ● ● TORIHIKI_KINGAKU_INFO
要求の値がそのまま設定されます。
金額1 ● ● ● KINGAKU_1 数値 10 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
要求の値がそのまま設定されます。
金額2 ● ● ● KINGAKU_2 数値 10 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
要求の値がそのまま設定されます。
金額3 ● ● ● KINGAKU_3 数値 10 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
要求の値がそのまま設定されます。
金額4 ● ● ● KINGAKU_4 数値 10 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
要求の値がそのまま設定されます。
金額5 ● ● ● KINGAKU_5 数値 10 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
※次頁へ続く
65/129 Copyright ©NTT DATA CORPORATION

---

## Page 66

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC （ポイント更新処理区分が 5：DCの場合、内部的に返信パラメータは作成するが、対向先には返信しない）
項目 ポ 1 イン 2 ト更新 3 処理 4 区分 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 A 返信 B 有無 C 説明
要求の値がそのまま設定されます。
決済手段1 ● ● KESSAI_SHUDAN_1 数値 3 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
要求の値がそのまま設定されます。
決済手段2 ● ● KESSAI_SHUDAN_2 数値 3 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
要求の値がそのまま設定されます。
決済金額1 ● ● KESSAI_KINGAKU_1 数値 10 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
要求の値がそのまま設定されます。
決済金額2 ● ● KESSAI_KINGAKU_2 数値 10 ● ● ※ただし、外部システム計算型の取消、センタ計算型の一括返品、取消（違算）、レシート無返品、取引日付無返品の
場合は、センタ側で元取引から引当てた設定値が設定されます。
利用ポイント情報 ● ● ● RIYO_POINT_INFO
利用ポイント ● ● ● RIYO_POINT 数値 8 ● ● 要 ※ 求 返 の 品 値 取 が 消 そ 区 の 分 ま = ま 11 設 （レ 定 シ さ ー れ ト ま 無 す 返 。 品）、12（取引日付無返品）の場合は、元取引の利用ポイントが設定されます。
サービスグループコード ● ● ● SG_CD 半角英数 3 条 条 要求の値がそのまま設定されます。
通常ポイント指定 ● ● ● TUJYO_POINT_SHITEI 数値 1 条 条 要 要 求 求 電 電 文 文 に に タ タ グ グ が が あ な る い 場 場 合 合 、 、 要 本 求 項 の 目 値 の が 情 そ 報 の は ま 設 ま 定 設 さ 定 れ さ ま れ せ ま ん す 。 。
直付ポイント情報 ● ● JIKAZUKE_POINT_INFO
直付ポイント ● ● JIKAZUKE_POINT 数値 8 条 条 要求の値がそのまま設定されます。
サービスグループコード ● ● SG_CD 半角英数 3 条 条 要求の値がそのまま設定されます。
キャンペーンコード ● ● CAMPAIGN_CD 半角英数 7 条 条 要求の値がそのまま設定されます。
サービスグループ別取引情報 SG_TORIHIKI_INFO （サービスグループごと繰り返し）
繰り返しするサービスグループはポイント更新処理区分によって異なります。
下記の場合はその取引で利用可能なサービスグループごとに繰り返します。
「1：ポイント付与・金額変更」
「2：ポイント利用（サービスグループ指定なし）」
「3：センター計算型付与」
● ● ● ● 下記の場合はその取引で利用可能なサービスグループから
要求で指定されたサービスグループで絞った結果ごとに繰り返します。
「2：ポイント利用（サービスグループ指定あり）」
「4：外部システム計算型付与」
なお、「その取引で利用可能なサービスグループ」とは、
要求の会員番号と要求組織で決定する利用可能なサービスグループとなります。
また、「5：DC」の場合は返信パラメータはありません。
サービスグループコード SG_CD 【ポイント更新処理区分：3の場合】
● ● ● ● 半角英数 3 ● 条 要 【ポ 求 イ の ン 会 ト更 員 新 番 処 号 理 に 区 紐 分 づ ： く 4 、 の す 場 べ 合 て 】 のサービスグループのコードが設定されます。
要求の値がそのまま設定されます。
サービスグループ略称 ● ● ● ● SG_RYAKUSHO 全半角文字 20 ● サービスグループの略称（表示用名称）が設定されます。
サービスグループ別付与ポイント SG_FUYO_POINT
【ポイント更新処理区分：3の場合】
● ● 数値 8 ● 条 ポ 【ポ イ イ ン ン ト計 ト更 算 新 を 処 行 理 っ 区 た結 分 果 ：4 と の 直 場 付 合 ポ 】 イントを加算した、その取引で付与した総付与ポイント数が設定されます。
要求の値がそのまま設定されます。※1
※次頁へ続く ※1：特異なケースの場合は要求の値と異なる場合があります。
例）取引で付与されたポイントの期限が切れた後に、その取引の返品処理を行う場合
66/129 Copyright ©NTT DATA CORPORATION

---

## Page 67

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC （ポイント更新処理区分が 5：DCの場合、内部的に返信パラメータは作成するが、対向先には返信しない）
項目 ポ 1 イン 2 ト更新 3 処理 4 区分 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 A 返信 B 有無 C 説明
付与明細情報 ● ● FUYO_MEISAI_INFO ※ポイント付与がなく、ポイント利用のみの取引の場合、本項目下の情報は設定されません。
通常付与ポイント ● TUJYO_FUYO_POINT 数値 8 条 ● 要求の値がそのまま設定されます。
有効期限別取引件数 ● YUKO_KIGEN_TORIHIKI_COUNT 数値 3 条 ● 要求の値がそのまま設定されます。※1
有効期限別取引情報 ● YUKO_KIGEN_TORIHIKI_INFO (期限付きポイントがある場合、有効期限ごとに繰り返し)
有効期限別付与ポイント ● YUKO_KIGEN_FUYO_POINT 数値 6 条 条 要求の値がそのまま設定されます。※1
有効期限 ● YUKO_KIGEN 数値 8 条 条 要求の値がそのまま設定されます。※1
キャンペーン別取引情報 ● CAMPAIGN_TORIHIKI_INFO （キャンペーンごと繰り返し）
表示連番 ● HYOJI_NO 数値 3 条 【ポイント更新処理区分：3の場合】付与ポイントの明細の表示順が設定されます。
キャンペーン略称 ● CAMPAIGN_RYAKUSHO 全半角文字 20 条 【ポイント更新処理区分：3の場合】キャンペーン略称（表示用名称）が設定されます。
キャンペーン別付与ポイント ● CAMPAIGN_FUYO_POINT 数値 8 条 【ポイント更新処理区分：3の場合】明細毎のポイント数（キャンペーン別付与ポイント）が設定されます。
ポイント倍率 ● POINT_BAIRITSU 数値 3.1 条 【ポイント更新処理区分：3の場合】明細毎の適用倍率が設定されます。
サービス情報 ● ● ● ● SERVICE_INFO
ポイント情報 ● ● ● ● POINT_INFO
サービスグループ別利用可能ポイント● ● ● ● SG_RIYO_KANO_POINT 数値 8 ● 利用可能ポイント（ポイント残高）が設定されます。
サービスグループ別通常ポイント ● ● ● ● SG_TSUJO_POINT 数値 8 ● 利用可能ポイント（ポイント残高）のうち、通常ポイントのポイント残高が設定されます。
通常ポイント内訳情報 ● ● ● ● TSUJO_POINT_UCHIWAKE_INFO ● (有効期限ごと繰り返し) ※残ポイント=0の有効期限の内訳情報も設定されます。
有効期限 ● ● ● ● YUKO_KIGEN 数値 YYYYMMDD 8 ● 通常ポイントの有効期限ごとのポイント内訳が設定されます。
有効期限別ポイント ● ● ● ● YUKO_KIGEN_POINT 数値 8 ●
サービスグループ別期間限定ポイント● ● ● ● SG_KIGEN_POINT 数値 6 ● 利 ※ 用 期 可 間 能 限 ポ 定 イ ポ ン イ ト ン （ ト ポ を イ 運 ン 用 ト残 し 高 てい ）の な う い ち 場 、期 合 間 でも 限 設 定 定 ポ さ イ れ ン ま トの す ポ 。 イント残高が設定されます。
期間限定ポイント内訳情報 ● ● ● ● KIGEN_POINT_UCHIWAKE_INFO (有効期限ごと繰り返し) ※期間限定ポイントを運用していない場合、本項目下の情報は設定されません。
有効期限 ● ● ● ● YUKO_KIGEN 数値 YYYYMMDD 8 条 期限付きポイントの有効期限ごとのポイント内訳が設定されます。
期間限定ポイントの残ポイント＝0の場合は、有効期限、有効期限別ポイント共に0が設定されます。
有効期限別ポイント ● ● ● ● YUKO_KIGEN_POINT 数値 6 条 期間限定ポイントの残ポイント≠0の場合は、期間ごとの残ポイント分だけ設定されます。
ランク情報 ● ● ● ● RANK_INFO ※ランク制度を運用していない場合は設定されません。
今回使用ランク名称 ● ● ● ● SHIYO_RANK_NAME 全半角文字 40 条 取引で適用したランクの名称が設定されます。
今回使用ランク倍率 ● ● ● ● SHIYO_RANK_BAIRITSU 数値 3,1 条 取 （整 引 数 で 部 適 2 用 桁 し 、 た 小 ラ 数 ン 部 ク 1 の 桁 倍 と 率 す が る 設 。例 定 ： さ 2 れ .0、 ま 2 す .5 。 ）
通常年ランク情報 ● ● ● ● RANK_YEAR_INFO ※通常年ランク制度を運用していない場合、本項目下の情報は設定されません。
翌年ランク対象金額 ● ● ● ● R N ANK_TAISHO_KINGAKU_YOKUNE 数値 10 条 処理後の翌年ランクの算出金額（＝当年の累計金額）が設定されます。
翌年ランク名称 ● ● ● ● RANK_NAME_YOKUNEN 全半角文字 40 条 処理後の翌年ランクのランク名称が設定されます
翌年ランク倍率 ● ● ● ● RANK_BAIRITSU_YOKUNEN 数値 3,1 条 処 （整 理 数 後 部 の 2 翌 桁 年 、小 ラン 数 ク 部 の 1 ラ 桁 ン と ク す 倍 る 率 。例 が設 ：2 定 .0、 さ 2 れ .5 ま ） す。
翌年上位ランク必要金額 ● ● ● ● H O I K G U H N _R E A N NK_HITSUYO_KINGAKU_Y 数値 10 条 処理後の翌年の上位ランクへランクアップするために必要な金額が設定されます。
翌年上位ランク名称 ● ● ● ● HIGH_RANK_NAME_YOKUNEN 全半角文字 40 条 処理後の翌年の上位ランク名称が設定されます。
翌年上位ランク倍率 ● ● ● ● HIGH_RANK_BAIRITSU_YOKUNEN 数値 3,1 条 処 （整 理 数 後 部 の 2 翌 桁 年 、小 の 数 上 部 位 1 ラ 桁 ン と ク す 倍 る 率 。 が 例 設 ：2 定 .0 さ 、 れ 2.5 ま ） す。
前年集計金額 ● ● ● ● ZENNEN_SHUKEI_KINGAKU 数値 10 条 前年度に集計された金額が設定されます。
前年集計ランク名称 ● ● ● ● ZENNEN_SHUKEI_RANK_NAME 全半角文字 40 条 前年度に集計された金額に該当するランク名称が設定されます。
前年集計ランク倍率 ● ● ● ● ZENNEN_SHUKEI_RANK_BAIRITSU 数値 3,1 条 前年度に集計された金額に該当するランクの倍率が設定されます。
現在集計金額 ● ● ● ● GENZAI_SHUKEI_KINGAKU 数値 10 条 処理後の集計した金額が設定されます。
現在集計ランク名称 ● ● ● ● GENZAI_SHUKEI_RANK_NAME 全半角文字 40 条 処理後の集計した金額に該当するランク名称が設定されます。
※次頁へ続く
67/129 Copyright ©NTT DATA CORPORATION

---

## Page 68

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC （ポイント更新処理区分が 5：DCの場合、内部的に返信パラメータは作成するが、対向先には返信しない）
項目 ポ 1 イン 2 ト更新 3 処理 4 区分 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 A 返信 B 有無 C 説明
現在集計ランク倍率 ● ● ● ● GENZAI_SHUKEI_RANK_BAIRITSU 数値 3,1 条 処理後の集計した金額に該当するランクの倍率が設定されます。
現 金 在 額 集計上位ランク必要 ● ● ● ● H EN IG Z H A _R I ANK_HITSUYO_KINGAKU_G 数値 10 条 :集計中の金額に該当するランクの上位ランクへランクアップするために必要な金額が設定されます。
現在集計上位ランク名称 ● ● ● ● HIGH_RANK_NAME_GENZAI 全半角文字 40 条 :集計中の金額に該当するランクの上位ランク名称が設定されます。
現在集計上位ランク倍率 ● ● ● ● HIGH_RANK_BAIRITSU_GENZAI 数値 3,1 条 : （ 集 整 計 数 中 部 の 2桁 金 、 額 小 に 数 該 部 当 1 す 桁 る と ラ す ン る ク 。 の 例 上 ：2 位 .0 ラ 、 ン 2. ク 5 倍 ） 率が設定されます。
通常月ランク情報 ● ● ● ● RANK_MONTH_INFO ※通常月ランク制度を運用していない場合、本項目下の情報は設定されません。
翌月ランク対象金額 ● ● ● ● R ET A S N U K_TAISHO_KINGAKU_YOKUG 数値 10 条 処理後の当月ランクの算出金額（＝前月の累計金額、もしくは、スライド型の場合は期間累計）が設定されます。
翌月ランク名称 ● ● ● ● RANK_NAME_YOKUGETSU 全半角文字 40 条 処理後の翌月ランクのランク名称が設定されます
翌月ランク倍率 ● ● ● ● RANK_BAIRITSU_YOKUGETSU 数値 3,1 条 処 （整 理 数 後 部 の 2 翌 桁 月 、小 ラン 数 ク 部 の 1 ラ 桁 ン と ク す 倍 る 率 。例 が設 ：2 定 .0、 さ 2 れ .5 ま ） す。
翌月上位ランク必要金額 ● ● ● ● H O I K G U H G _R E A T N S K U _HITSUYO_KINGAKU_Y 数値 10 条 処理後の翌月の上位ランクへランクアップするために必要な金額が設定されます。
翌月上位ランク名称 ● ● ● ● HIGH_RANK_NAME_YOKUGETSU 全半角文字 40 条 処理後の翌月の上位ランク名称が設定されます
翌月上位ランク倍率 ● ● ● ● H SU IGH_RANK_BAIRITSU_YOKUGET 数値 3,1 条 処 （整 理 数 後 部 の 2 翌 桁 月 、小 の 数 上 部 位 1 ラ 桁 ン と ク す 倍 る 率 。 が 例 設 ：2 定 .0 さ 、 れ 2.5 ま ） す。
ボーナスポイント情報 ● ● ● ● BONUS_POINT_INFO ※ てい ボ る ー パ ナ タ ス ー ポ ン イ 分 ン 繰 ト制 り返 度 し を 設 運 定 用 さ し れ て ま い す な 。 い場合、本項目下の情報は設定されません。複数運用している場合、運用し
ボーナスポイント名称 ● ● ● ● BONUS_POINT_NAME 全半角文字 40 条 ボーナスポイントのパターンの名称を設定します。
次回ボーナスポイント対象金 BONUS_TAISHO_KINGAKU_JIKAI 次回に付与される予定のボーナスポイント計算の対象となる金額を設定します。
額 例：
● ● ● ● 数値 10 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「10000」が設定されます。
次回ボーナスポイント BONUS_POINT_JIKAI 次回の付与ボーナスポイント数を設定します。
例：
● ● ● ● 数値 8 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「100」が設定されます。
次回上位ボーナスポイント必 HIGH_BONUS_POINT_HITSUYO_KINGA 次回の上位ボーナスステージに必要な金額を設定します。
要金額 KU_JIKAI 例：
現在の買上額は\10,000です。
● ● ● ● 数値 10 条 次回付与予定のボーナスポイントは100Pです。
あと\5,000のお買上げで200Pになります。
→この「5000」が設定されます。
上位ランクがない場合は0を設定します。
次回上位ボーナスポイント HIGH_BONUS_POINT_JIKAI 次回の上位ボーナスステージに必要なポイント数を設定します。
例：
● ● ● ● 数値 8 条 現 次 在 回 の 付 買 与 上 予 額 定 は の \ ボ 1 ー 0, ナ 00 ス 0で ポ す イン 。 トは100Pです。
あと\5,000のお買上げで200Pになります。
→この「200」が設定されます。
前回ボーナスポイント対象金 BONUS_TAISHO_KINGAKU_ZENKAI 前回のボーナスポイント計算の対象とした金額を設定します。
額 例：
● ● ● ● 数値 10 条 前回の買い上げ金額は\13,000で、付与ポイントは100Pでした。
→この「13000」が設定されます。
ただし、半期の場合、前半期実績を返信できる期間は5ヵ月となります。※2
※次頁へ続く
68/129 Copyright ©NTT DATA CORPORATION

---

## Page 69

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ポイント更新
※ポイント更新処理区分
1：ポイント付与・金額変更
2：ポイント利用
3：センター計算型付与
4：外部システム計算型付与
5：DC （ポイント更新処理区分が 5：DCの場合、内部的に返信パラメータは作成するが、対向先には返信しない）
項目 ポ 1 イン 2 ト更新 3 処理 4 区分 5 タグ名 デ 論 ー 理 タ型 書式 最 （ 大 by 桁 te） 数 暗 対 号 象 化 A 返信 B 有無 C 説明
前回ボーナスポイント BONUS_POINT_ZENKAI 前回付与済のボーナスポイント数を設定します。
例：
● ● ● ● 数値 8 条 前回の買い上げ金額は\13,000で、付与ポイントは100Pでした。
→この「100」が設定されます。
ただし、半期の場合、前半期実績を返信できる期間は5ヵ月となります。※2
予備情報 ● ● ● ● YOBI_INFO
予備項目1 ● ● ● ● YOBI_KOMOKU_1 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目2 ● ● ● ● YOBI_KOMOKU_2 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目3 ● ● ● ● YOBI_KOMOKU_3 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目4 ● ● ● ● YOBI_KOMOKU_4 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目5 ● ● ● ● YOBI_KOMOKU_5 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目6 ● ● ● ● YOBI_KOMOKU_6 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目7 ● ● ● ● YOBI_KOMOKU_7 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目8 ● ● ● ● YOBI_KOMOKU_8 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目9 ● ● ● ● YOBI_KOMOKU_9 全半角文字 20 条 要求の値がそのまま設定されます。
予備項目10 ● ● ● ● YOBI_KOMOKU_10 全半角文字 20 条 要求の値がそのまま設定されます。
レシートメッセージ情報 ● ● ● RECEIPT_MESSAGE_INFO
レシートメッセージ RECEIPT_MESSAGE レシート幅バイトのbyte数に応じたメッセージが設定されます。（CDATAセクションで全体を囲む）
改行コードは(\r(0x0d))で区切られます。
● ● ● 全半角文字 条 ※イメージ
<RECEIPT_MESSAGE><![CDATA[********************************\r会員番号・・・・・
1000000000000000000\rポイント対象金額・・・・・・・・・・・・・\5,000 …etc]]></RECEIPT_MESSAGE>
コマーシャルメッセージ ● ● ● COMMERCIAL_MESSAGE 全半角文字 条 レ 改 シ 行 ー コ ト ー 幅 ド バ は イ (\ ト r の (0 B x y 0 t d e ) 数 )で に 区 応 切 じ ら た れ コ ま マ す ー 。 シャルメッセージが設定されます。（CDATAセクションで全体を囲む）
操作者情報 ● ● ● ● SOSASHA_INFO
操作者コード ● ● ● ● SOSASHA_CD 半角英数 10 ● ● 要求の値がそのまま設定されます。
エラー情報 ● ● ● ● ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：18 「利用ポイントが利用可能ポイントを超過しています。」
・処理ステータス：19 「既に処理済みの取引です。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
● ● ● ● 全半角文字 500 条 ● ・ ・ 処 処 理 理 ス ス テ テ ー ー タ タ ス ス ： ： 2 2 3 4 「 「 ご ご 利 利 用 用 の の 組 端 織 末 情 情 報 報 は は 登 登 録 録 さ さ れ れ て て お お り り ま ま せ せ ん ん 。 。 」 」
・処理ステータス：26 「サービスグループが存在しません。」
・処理ステータス：27 「入力頂いた会員番号はご利用の端末ではサービスを利用できません。」
・処理ステータス：35 「元取引が存在しません。」
・処理ステータス：36 「キャンペーンコードが存在しません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0、18 正常
B 19、20、21、23、24、26、27、35、36、90 異常
C
69/129 Copyright ©NTT DATA CORPORATION

---

## Page 70

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員チェック（顧客属性）
C10. 会員チェック（顧客属性）
1. 処理概要
・ 入力情報と本システムで登録されている顧客属性情報が一致するかを判定します。
個人情報を扱うため、暗号化してやり取りします。（サービス仕様書「本編 オンラインAPI編」1.2.1項目別の暗号化を参照）
・ 生年月日に関して、誕生年の登録が行われていない場合は誕生年をスキップしてチェックします。
顧客情報 要求パラメータ
誕生年 誕生月 誕生日 生年月日
1972 6 8 一致 19720608
顧客情報 要求パラメータ
誕生年 誕生月 誕生日 生年月日
未登録 6 8 一致 19720608
2. 要求パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C10"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY
暗号化する場合は暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
属性基本情報 ZOKUSEI_KIHON_INFO
氏名 KOKYAKU_NAME 会員の漢字名称を設定します。空白は除外して設定します。暗号化する場合は暗号化した値を設定してください。
全角文字 80※1 ● - タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
※全角文字40桁以内で設定してください。
カナ氏名 KOKYAKU_KANA_NAME 会員のカナ氏名を設定します。空白は除外、濁点・半濁点は１文字にしないで設定します。暗号化する場合は暗号化した値を設定してくださ
い。
全角文字 80※1 ● -
タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
※全角文字40桁以内で設定してください。
生年月日 BIRTHDAY チェック対象会員の生年月日を設定します。
数値 YYYYMMDD 8 -
空タグ、もしくはタグ省略はチェックしません。
性別 SEIBETSU 会員の性別を設定します。1：男性、2：女性、9：その他で設定します。
数値 1 -
タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
郵便番号 POST_NO 会員の郵便番号を"-"ありで設定します。暗号化する場合は暗号化した値を設定してください。
半角数記 NNN-NNNN 8※1 ● -
タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
電話番号 TEL_NO 会員の電話番号を設定します。"-"は除外して設定します。暗号化する場合は暗号化した値を設定してください。
半角数記 15※1 ● - タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
本システムの電話番号1、電話番号2の両方との突合を行います。
メールアドレス MAIL_ADDRESS 会員のメールアドレスを設定します。暗号化する場合は暗号化した値を設定してください。
半角英数記 60※1 ● - タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
本システムのメールアドレス1、メールアドレス2の両方との突合を行います。
※次頁へ続く
70/129 Copyright ©NTT DATA CORPORATION

---

## Page 71

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員チェック（顧客属性）
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
71/129 Copyright ©NTT DATA CORPORATION

---

## Page 72

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員チェック（顧客属性）
3. 返信パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO -
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO -
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO -
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR -
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO -
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・対象の会員のステータスが無効（制限）の状態の場合に返します。
15：正常終了・無効な会員番号（制限）
・対象の会員のステータスが無効（不可）の状態の場合に返します。
16：正常終了・無効な会員番号（不可）
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
数値 2 ● ● ・会員番号が未登録の場合に返します。
21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO -
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● 要求の値がそのまま設定されます。
会員ステータス KAIIN_STATUS 最新の会員ステータスが設定されます。
数値 1 ● 0：正常、7：無効（制限）、8：無効（不可）
会員ステータス理由コード KAIIN_STATUS_RIYU_CD
最新の会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
属性チェック結果情報 ZOKUSEI_CHECK_RESULT_INFO -
一致件数 EQUAL_COUNT 数値 2 ● 一致した件数が設定されます。
氏名チェック KOKYAKU_NAME_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 80※1 条 合致しない場合、チェック対象外の場合は空タグとなります。
カナ氏名チェック KOKYAKU_KANA_NAME_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 80※1 条 合致しない場合、チェック対象外の場合は空タグとなります。
生年月日チェック BIRTHDAY_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 8 条 合致しない場合、チェック対象外の場合は空タグとなります。
性別チェック SEIBETSU_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 1 条 合致しない場合、チェック対象外の場合は空タグとなります。
※次頁へ続く
72/129 Copyright ©NTT DATA CORPORATION

---

## Page 73

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員チェック（顧客属性）
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
郵便番号チェック POST_NO_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 8※1 条 合致しない場合、チェック対象外の場合は空タグとなります。
電話番号チェック TEL_NO_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 15※1 条 合致しない場合、チェック対象外の場合は空タグとなります。
メールアドレスチェック MAIL_ADDRESS_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 60※1 条 合致しない場合、チェック対象外の場合は空タグとなります。
取引情報 TORIHIKI_INFO -
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO -
エラーメッセージ ERROR_MESSAGE 処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：15 「利用制限のある会員番号での処理となります。」
・処理ステータス：16 「利用不可な会員番号での処理となります。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
全半角文字 500 条 ● ・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0、15、16 正常
B 20、21、23、24、25、90 異常
C
73/129 Copyright ©NTT DATA CORPORATION

---

## Page 74

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員チェック（セキュリティコード）
C11. 会員チェック（セキュリティコード）
1. 処理概要
・ 入力情報（セキュリティコード）と本システムで登録されているセキュリティコードが一致するかを判定します。
2. 要求パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C11"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY
暗号化する場合は暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
セキュリティコード SECURITY_CD 半角英数 8※1 ● - ● セキュリティコードを設定します。暗号化する場合は暗号化した値を設定してください。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
74/129 Copyright ©NTT DATA CORPORATION

---

## Page 75

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員チェック（セキュリティコード）
3. 返信パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無※ 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・セキュリティコードが一致しなかった場合に返します。
17：セキュリティコード不一致
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
数値 2 ● ● 21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● 要求の値がそのまま設定されます。
会員ステータス KAIIN_STATUS 最新の会員ステータスが設定されます。
数値 1 ● 0：正常、7：無効（制限）、8：無効（不可）
会員ステータス理由コード KAIIN_STATUS_RIYU_CD 最新の会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 条 条 要求の値が設定されていれば設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 条 条 要求の値が設定されていれば設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
※次頁へ続く
75/129 Copyright ©NTT DATA CORPORATION

---

## Page 76

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員チェック（セキュリティコード）
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：17 「セキィリティコードが一致しませんでした。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
全半角文字 500 条 ● ・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0、17 正常
B 20、21、23、24、25、90 異常
C
76/129 Copyright ©NTT DATA CORPORATION

---

## Page 77

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 保持カード一覧
C14. 保持カード一覧
1. 処理概要
・ CAFIS Explorerは、顧客に対して複数の会員番号（カード）を管理することが出来ます。
このインターフェースでは、要求の会員番号から、その顧客紐づくすべての会員番号（カード）の一覧を照会します。
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 要否
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 1.0 ● ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 - ● 要求元チャネル識別とは外部システムを識別するコードです。
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C14"を設定します。
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● カード一覧を照会する対象の会員識別番号を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● カード一覧を照会する対象の会員番号を設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
数値 1 1 ● 1：要求組織キー
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1 半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2 半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3 半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 半角英数 20 0 ● 組織識別区分が「2：端末番号」の場合は設定してください。
それ以外場合は、デフォルト値「0」を設定します。
77/129 Copyright ©NTT DATA CORPORATION

---

## Page 78

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 保持カード一覧
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS ・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
数値 2 ● ● 21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO
数値(条) 20 ● ● 要求の値がそのまま設定されます。
保持カード一覧情報 CARD_ALL_INFO （対象の会員番号の数だけ繰り返し。）
会員番号識別（全カード） KAIIN_NO_SHIKIBETSU_ALL 数値 2 ● 会員番号種別が設定されます。
会員番号（全カード） KAIIN_NO_ALL
数値(条) 20 ● 会員番号が設定されます。
会員ステータス KAIIN_STATUS_ALL 数値 1 ● 会 0： 員 正 番 常 号 、7 に ：無 紐 効 づく （ 会 制 員 限 ス ）、 テ 8 ー ：無 タ 効 ス （ が 不 設 可 定 ） されます。
会員ステータス理由コード KAIIN_STATUS_RIYU_CD_ALL
会員番号に紐づ会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
数値 4 ● 8003：不可(再発行：その他)
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
会員有効期限 KAIIN_YUKO_KIGEN_ALL 数値 YYYYMMDD 8 ● カードの有効期限などがある場合はその有効期限が設定されます。ポイント失効の期限ではありません。
会員番号種別コード KAIIN_NO_SHUBETSU_CD 数値 4 ● カード名称など、会員番号種別を一意に識別するコードが設定されます。
会員番号種別名称 KAIIN_NO_SHUBETSU_NAME_ALL 全半角文字 20 ● カード名称など、会員番号種別名称が設定されます。
会員管理グループコード KG_CD 半角英数 3 ● 会員が所属する会員管理グループを一意に識別するコードが設定されます。
会員管理グループ名称 KG_NAME_ALL 全半角文字 40 ● 会員が所属する会員管理グループの名称が設定されます。
カードフリー属性１（テキスト） CARD_FREE_FIELD_1 全半角文字 20 条 登録されているカードフリー属性１が設定されます。
カードフリー属性２（テキスト） CARD_FREE_FIELD_2 全半角文字 20 条 登録されているカードフリー属性２が設定されます。
カードフリー属性３（テキスト） CARD_FREE_FIELD_3 全半角文字 20 条 登録されているカードフリー属性３が設定されます。
カードフリー属性４（テキスト） CARD_FREE_FIELD_4 全半角文字 20 条 登録されているカードフリー属性４が設定されます。
カードフリー属性５（テキスト） CARD_FREE_FIELD_5 全半角文字 20 条 登録されているカードフリー属性５が設定されます。
78/129 Copyright ©NTT DATA CORPORATION

---

## Page 79

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 保持カード一覧
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
カードフリー属性６（コード） CARD_FREE_FIELD_6 数値 2 条 登録されているカードフリー属性６が設定されます。
カードフリー属性７（コード） CARD_FREE_FIELD_7 数値 2 条 登録されているカードフリー属性７が設定されます。
カードフリー属性８（コード） CARD_FREE_FIELD_8 数値 2 条 登録されているカードフリー属性８が設定されます。
カードフリー属性９（コード） CARD_FREE_FIELD_9 数値 2 条 登録されているカードフリー属性９が設定されます。
カードフリー属性１０（コード） CARD_FREE_FIELD_10 数値 2 条 登録されているカードフリー属性１０が設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
全半角文字 500 ● ・ ・ 処 処 理 理 ス ス テ テ ー ー タ タ ス ス ： ： 2 2 1 3 「 「 入 ご利 力 用 頂 の い 組 た 織 会 情 員 報 番 は 号 登 は 録 存 さ 在 れ しま て せ おり ん ま 。 せ 」 ん。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、21、23、24、90 異常
C
79/129 Copyright ©NTT DATA CORPORATION

---

## Page 80

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI URL要求
C15. URL要求
1. 処理概要
・ CAFIS Explorerのこの機能を使用し、機体認証を行うことができます。
・ 要求パラメータで指定されたメールアドレスに対し、入会URL付きの空メールを送信します。
個人情報を扱うため、暗号化してやり取りします。（サービス仕様書「本編 オンラインAPI編」1.2.1項目別の暗号化を参照）
・ URLページの妥当性確認（ページの存在確認など）、メールの送達確認は実施しません。
・ マイページキーとは、マイページを登録する際に、機体認証のキーとなる情報を指します。
メール認証の際のマイページキーは「メールアドレス」とします。
・ マイページキーは、他の有効なアカウントで登録されているものと同じものを登録することはできないものとします。
また、管理画面での登録、変更、削除を不可とします。
・ ログインID/ログインPWの登録や変更、照会時にはCAFIS Explorerが発行する有効期限付きの「アカウントコード」での事前認証を必須とします。
なお、アカウントコードをURLに埋め込む際には、暗号化してやり取りを行います。
また、アカウントコードの認証は一度きりのみとし、認証後にもう一度同じアカウントコードを使用することはできないものとします。
・ アカウントコードは、半角数字、4桁（固定）とし、アカウントコードの有効期限は”分”単位で、最大999分までとします（１～999）
ただし、マイページキーが重複してないことを確認してから、マイページキーに対して有効期限付きアカウントコードが払い出されます。
・ 要求URLにマイページキーとアカウンコードを結合したものを返信URLとして設定します。
暗号キーを設定した場合、マイページキーとアカウンコード部分にはそれぞれ暗号化された値が設定されます。（※2）
マイページキーにメールアドレスを使用する場合、送信メール本文のURL部分にメールアドレスが平文で設定されるため、暗号化することを推奨します。
要求URL： https://xxxxx/xxxxx
返信URL： https://xxxxx/xxxxx?value1=[マイページキー]&value2=[アカウントコード]
（変数名からパラメータの意味を推測しづらくするため、"value1"、"value2"は固定文字列とする。）
※暗号キーを設定した場合、マイページキーとアカウンコード部分にはそれぞれ暗号化された値が設定されます。
（例） 要求URL： https://hoge.jp/Register.do
返信URL： https://hoge.jp/Register.do?value1=hUvyeLr8QhFYjosak/sj+A==&value2=T9Vm+QKN9GVnJM9kbRqmXg==
80/129 Copyright ©NTT DATA CORPORATION

---

## Page 81

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI URL要求
2. 要求パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C15"を設定します。
処理情報 SHORI_INFO -
暗号キー ENCRYPT_KEY
暗号化する場合は暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
メール情報 MAIL_INFO
メールアドレス MAIL_ADDRESS 半角英数記 60※1 ● - ● URLを送信する対象者のメールアドレスを設定します。
マイページ情報 MYPAGE_INFO
処理区分
処理区分を設定します。
1：マイページ入会
SYORI_KUBUN 数値 1 - ● 2：ログインID取得
3：ログインPW変更
4：メールアドレス変更
マイページキー MYPAGE_KEY 半角英数記 60 ● ● マイページキーを設定します。
要求URL YOUKYU_URL 半角英数記 200 - ● 要求URLを設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
81/129 Copyright ©NTT DATA CORPORATION

---

## Page 82

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI URL要求
3. 返信パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定される。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS 要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
数値 2 ● ● 24：端末未登録
・メールアドレスの書式チェックでエラーとなった場合に返します。
34：メールアドレスフォーマットエラー
・要求の処理区分が「2：ログインＩＤ取得」もしくは「3：ログインPW取得」の場合でマイページキーが未登録の場合に返します。
48:マイページキー未登録
・要求の処理区分が「1：マイページ入会」もしくは「4：メールアドレス変更」の場合でマイページキーが重複している場合に返します。
49：マイページキー重複
・DB障害などの場合に返します。
90：サーバ内部エラー
マイページ情報 MAYPAGE_INFO
処理区分 SYORI_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
マイページキー MYPAGE_KEY 半角英数記 60 ● ● ● 要求の値がそのまま設定されます。
要求URL YOUKYU_URL 半角英数記 200 ● ● 要求の値がそのまま設定されます。
返信URL HENSHIN_URL 半角英数記 284 ※2 ● 要求URLにマイページキーとアカウンコードを結合した返信URLを設定します。
暗号キーを設定した場合、マイページキーとアカウンコード部分にはそれぞれ暗号化された値が設定されます。※2
アカウントコード ACOUNT_CD 半角数字 4 ● ● CEにて自動生成したアカウントコードが設定されます。
アカウントコード有効期限 ACOUNT_CD_YUKOKIGEN 半角数字 yyyyMMddHHmm 12 ● アカウントコードの有効期限が設定されます。
メール情報 MAIL_INFO
メールアドレス MAIL_ADDRESS 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
全半角文字 500 ● ・処理ステータス：34 「入力頂いたメールアドレスに不備があります。」
・処理ステータス：48 「マイページキーが登録されておりません。」
・処理ステータス：49 「入力頂いたマイページキーが重複しております。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、23、24、34、48、49、90 メールアドレス不備、異常
C
82/129 Copyright ©NTT DATA CORPORATION

---

## Page 83

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員番号検索
C16. 会員番号検索
1. 処理概要
・ このインターフェースでは要求された顧客情報（電話番号、メールアドレス、ログインID）を使って顧客を検索し、検索条件に一致する顧客の会員番号の一覧を照会します。
・ 検索する顧客はアクティブな顧客を対象とします。退会した顧客は対象外とします。
・ 下記の場合、「会員管理グループコード」を指定することで指定の会員制度に限定して照会します。
・ 実態は同一顧客ですが、複数の会員制度に登録してシステム上は別顧客扱いで管理されているような場合に指定の会員制度の顧客に限定して照会します。
・ 当APIで照会してきた組織を複数ある会員制度から特定できない場合（特定できない場合はエラー）に指定の会員制度の組織で特定します。
・ 顧客情報による検索の仕方は下記の３通りとします。いずれかを選択して各顧客情報を設定してください。以下を組み合わせた検索はできません。
・ 電話番号による検索
・ メールアドレスによる検索
・ ログインIDによる検索
【設定例】
正しい設定例 誤った設定例 下記のような設定の場合は「3. 返信パラメータ」の処理ステータス「20：要求項目異常」で返信します。
電話番号による検索 ×：「電話番号による検索」と「メールアドレスによる検索」で組み合わせている。
<ZOKUSEI_KIHON_INFO> <ZOKUSEI_KIHON_INFO>
<TEL_NO>090-1234-5678</TEL_NO> <TEL_NO>090-1234-5678</TEL_NO>
</ZOKUSEI_KIHON_INFO> <MAIL_ADDRESS>example@example.co.jp</MAIL_ADDRESS>
</ZOKUSEI_KIHON_INFO>
メールアドレスによる検索
<ZOKUSEI_KIHON_INFO> ×：検索の仕方が未設定
<MAIL_ADDRESS>example@example.co.jp</MAIL_ADDRESS> <ZOKUSEI_KIHON_INFO>
</ZOKUSEI_KIHON_INFO> <TEL_NO></TEL_NO>
<MAIL_ADDRESS></MAIL_ADDRESS>
ログインIDによる検索 </ZOKUSEI_KIHON_INFO>
<MYPAGE_INFO> <MYPAGE_INFO>
<ROGUIN_ID>example@example.co.jp</ROGUIN_ID> <ROGUIN_ID></ROGUIN_ID>
</MYPAGE_INFO> </MYPAGE_INFO>
電話番号による検索（会員管理グループコード指定）
<ZOKUSEI_KIHON_INFO>
<TEL_NO>090-1234-5678</TEL_NO>
</ZOKUSEI_KIHON_INFO>
～
<KAIIN_KANRI_GROUP_INFO>
<KAIIN_KANRI_GROUP_CD>KG1</KAIIN_KANRI_GROUP_CD>
</KAIIN_KANRI_GROUP_INFO>
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C16"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY
暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
※次頁へ続く
83/129 Copyright ©NTT DATA CORPORATION

---

## Page 84

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員番号検索
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
属性基本情報 ZOKUSEI_KIHON_INFO - 「氏名～電話番号による検索」は氏名から電話番号までを設定してください。「メールアドレスによる検索」はメールアドレスを設定してください。
電話番号 TEL_NO 半角数記 15※1 登録されている電話番号を設定します。左記の電話番号による検索は電話番号1、または、電話番号2を条件とします。
● - 条
要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
メールアドレス MAIL_ADDRESS 半角英数記 60※1 登録されているメールアドレスを設定します。左記のメールアドレスによる検索はメールアドレス1、または、メールアドレス2を条件とします。
● - 条
要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
マイページ情報 MYPAGE_INFO 「ログインIDによる検索」はログインIDを設定してください。
ログインID ROGUIN_ID 半角英数記 60※1 ● - 条 登録されているログインIDを設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
会員管理グループ情報 KAIIN_KANRI_GROUP_INFO -
会員管理グループコード KAIIN_KANRI_GROUP_CD 下記の場合、「会員管理グループコード」を指定することで指定の会員制度に限定して照会します。
・実態は同一顧客ですが、複数の会員制度に登録してシステム上は別顧客扱いで管理されているような場合に指定の会員制度の顧客に限定
半角英数 3 -
して照会します。
・当APIで照会してきた組織を複数ある会員制度から特定できない場合（特定できない場合はエラー）に指定の会員制度の組織で特定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
84/129 Copyright ©NTT DATA CORPORATION

---

## Page 85

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員番号検索
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
・正常終了の場合に返します。
0：正常終了
・検索条件に該当する顧客が未登録の場合に返します。
6：該当顧客未登録
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
数値 2 ● ●
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・当APIで照会してきた組織の会員管理グループが一意に特定できない場合に返します。
29：照会組織会員管理グループ特定不可
・DB障害などの場合に返します。
90：サーバ内部エラー
属性基本情報 ZOKUSEI_KIHON_INFO
電話番号 TEL_NO 半角数記 15※1 ● ● ● 要求の値がそのまま設定されます。
メールアドレス MAIL_ADDRESS 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
マイページ情報 MYPAGE_INFO
ログインID ROGUIN_ID 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
会員管理グループ情報 KAIIN_KANRI_GROUP_INFO
会員管理グループコード KAIIN_KANRI_GROUP_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
保持カード一覧情報 CARD_ALL_INFO 対象の会員番号の数だけ繰り返します。また、下記のソートを行います。
第１キー：統合顧客番号（昇順）、第２キー：会員番号識別（昇順）、第３キー：会員番号（昇順）
会員番号識別（全カード） KAIIN_NO_SHIKIBETSU_ALL 数値 2 ● 会員番号識別が設定されます。
会員番号（全カード） KAIIN_NO_ALL
数値(条) 20 ● 会員番号が設定されます。
会員ステータス KAIIN_STATUS_ALL 会員番号に紐づく会員ステータスが設定されます。
数値 1 ● 0：正常、7：無効（制限）、8：無効（不可）
※次頁へ続く
85/129 Copyright ©NTT DATA CORPORATION

---

## Page 86

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員番号検索
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
会員ステータス理由コード KAIIN_STATUS_RIYU_CD_ALL
会員番号に紐づ会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
会員有効期限 KAIIN_YUKO_KIGEN_ALL 数値 YYYYMMDD 8 ● カードの有効期限などがある場合はその有効期限が設定されます。ポイント失効の期限ではありません。
会員番号種別コード KAIIN_NO_SHUBETSU_CD 数値 4 ● カード名称など、会員番号種別を一意に識別するコードが設定されます。
会員番号種別名称 KAIIN_NO_SHUBETSU_NAME_ALL 全半角文字 20 ● カード名称など、会員番号種別名称が設定されます。
会員管理グループコード KG_CD 半角英数 3 ● 会員が所属する会員管理グループを一意に識別するコードが設定されます。
会員管理グループ名称 KG_NAME_ALL 全半角文字 40 ● 会員が所属する会員管理グループの名称が設定されます。
カードフリー属性１（テキスト） CARD_FREE_FIELD_1 全半角文字 20 条 登録されているカードフリー属性１が設定されます。
カードフリー属性２（テキスト） CARD_FREE_FIELD_2 全半角文字 20 条 登録されているカードフリー属性２が設定されます。
カードフリー属性３（テキスト） CARD_FREE_FIELD_3 全半角文字 20 条 登録されているカードフリー属性３が設定されます。
カードフリー属性４（テキスト） CARD_FREE_FIELD_4 全半角文字 20 条 登録されているカードフリー属性４が設定されます。
カードフリー属性５（テキスト） CARD_FREE_FIELD_5 全半角文字 20 条 登録されているカードフリー属性５が設定されます。
カードフリー属性６（コード） CARD_FREE_FIELD_6 数値 2 条 登録されているカードフリー属性６が設定されます。
カードフリー属性７（コード） CARD_FREE_FIELD_7 数値 2 条 登録されているカードフリー属性７が設定されます。
カードフリー属性８（コード） CARD_FREE_FIELD_8 数値 2 条 登録されているカードフリー属性８が設定されます。
カードフリー属性９（コード） CARD_FREE_FIELD_9 数値 2 条 登録されているカードフリー属性９が設定されます。
カードフリー属性１０（コード） CARD_FREE_FIELD_10 数値 2 条 登録されているカードフリー属性１０が設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：6 「条件に該当する顧客は存在しません。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
全半角文字 500 ● ・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：29 「会員制度組織が特定できません。条件に会員管理グループを追加してください。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 6、20、21、23、24、29、90 異常
C
86/129 Copyright ©NTT DATA CORPORATION

---

## Page 87

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報照会
C20. 顧客情報照会
1. 処理概要
・ 会員の顧客属性情報を取得します。
個人情報を扱うため、暗号化してやり取りします。（サービス仕様書「本編 オンラインAPI編」1.2.1項目別の暗号化を参照）
・ 会員番号が無効（ステータス7もしくはステータス8）となっている場合、最新の会員番号が設定されます。
・ 顧客情報更新を行う場合は、必ず事前に顧客情報照会にて顧客属性情報を照会してから行って下さい。
2. 要求パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C20"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY
暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
87/129 Copyright ©NTT DATA CORPORATION

---

## Page 88

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報照会
3. 返信パラメータ ※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO -
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
数値 2 ● ● ・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。ただし、会員ステータスが正常でない場合、最新の会員番号の会員番号識別が設定されます。
会員番号 KAIIN_NO
要求の値がそのまま設定されます。
数値(条) 20 ● ● （特別処理）ただし、会員ステータスが正常でない場合、顧客に紐づく最新の会員番号の情報（同一統合顧客番号、同一会員番号種別、
会員ステータス＝0、利用開始日が最新、最終更新日が最新）を返却します。
会員ステータス KAIIN_STATUS 要求の会員番号に紐づく会員ステータスが設定されます。
数値 1 ● 0：正常、7：無効（制限）、8：無効（不可）
会員ステータス理由コード KAIIN_STATUS_RIYU_CD 要求の会員番号に紐づく会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
会員有効期限 KAIIN_YUKO_KIGEN 数値 YYYYMMDD 8 ● 要求の会員番号に紐づくカードの有効期限などがある場合はその有効期限が設定されます。ポイント失効の期限ではありません。
会員番号種別名称 KAIIN_NO_SHUBETSU_NAME 全半角文字 20 ● 要求の会員番号に紐づくカード名称など、会員番号種別名称が設定されます。
会員管理グループ名称 KG_NAME 全半角文字 40 ● 要求の会員番号に紐づく会員が所属する会員管理グループの名称が設定されます。
カードフリー属性１（テキスト） CARD_FREE_FIELD_1 全半角文字 20 条 要求の会員番号に紐づく登録されているカードフリー属性１が設定されます。
カードフリー属性２（テキスト） CARD_FREE_FIELD_2 全半角文字 20 条 要求の会員番号に紐づく登録されているカードフリー属性２が設定されます。
カードフリー属性３（テキスト） CARD_FREE_FIELD_3 全半角文字 20 条 要求の会員番号に紐づく登録されているカードフリー属性３が設定されます。
カードフリー属性４（テキスト） CARD_FREE_FIELD_4 全半角文字 20 条 要求の会員番号に紐づく登録されているカードフリー属性４が設定されます。
カードフリー属性５（テキスト） CARD_FREE_FIELD_5 全半角文字 20 条 要求の会員番号に紐づく登録されているカードフリー属性５が設定されます。
カードフリー属性６（コード） CARD_FREE_FIELD_6 数値 2 条 要求の会員番号に紐づく登録されているカードフリー属性６が設定されます。
カードフリー属性７（コード） CARD_FREE_FIELD_7 数値 2 条 要求の会員番号に紐づく登録されているカードフリー属性７が設定されます。
カードフリー属性８（コード） CARD_FREE_FIELD_8 数値 2 条 要求の会員番号に紐づく登録されているカードフリー属性８が設定されます。
カードフリー属性９（コード） CARD_FREE_FIELD_9 数値 2 条 要求の会員番号に紐づく登録されているカードフリー属性９が設定されます。
カードフリー属性１０（コード） CARD_FREE_FIELD_10 数値 2 条 要求の会員番号に紐づく登録されているカードフリー属性１０が設定されます。
※次頁へ続く
88/129 Copyright ©NTT DATA CORPORATION

---

## Page 89

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報照会
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
マイページ情報 MYPAGE_INFO
WEB会員フラグ WEB_KAIIN_FLAG
WEB会員フラグを設定する。
1：WEB会員未登録
数値 1 ●
2：WEB会員登録済
カード保持済のWEB会員登録時に、統合可能なWEB会員は、「1：WEB会員未登録」のみとします。
属性基本情報 ZOKUSEI_KIHON_INFO
名字 KOKYAKU_MYOJI 全角文字 40※1 条 ● 登録されている名字を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
名前 KOKYAKU_NAMAE 全角文字 40※1 条 ● 登録されている名前を設定します。要求パラメータの「暗号キー」が設定されている暗号化する場合は暗号化した値を設定します。
カナ名字 KOKYAKU_KANA_MYOJI 全角文字 40※1 条 ● 登録されているカナ名字を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
カナ名前 KOKYAKU_KANA_NAMAE 全角文字 40※1 条 ● 登録されているカナ名前を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
誕生年 BIRTHDAY_YEAR 数値 YYYY 4 ● 登録されている誕生年を設定します。
誕生月 BIRTHDAY_MONTH 数値 MM 2 ● 登録されている誕生月を設定します。
誕生日 BIRTHDAY_DAY 数値 DD 2 ● 登録されている誕生日を設定します。
性別 SEIBETSU 登録されている性別を設定します。
数値 1 ●
0：未登録、1：男性、2：女性、9：その他
郵便番号 POST_NO 半角数記 NNN-NNNN 8※1 条 ● 登録されている郵便番号をハイフンありで設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
住所1 ADDRESS_1 全角文字 10※1 条 ● 登録されている住所１（都道府県）を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
住所2 ADDRESS_2 全角文字 100※1 条 ● 登録されている住所２を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
住所3 ADDRESS_3 全角文字 100※1 条 ● 登録されている住所３を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
電話番号1 TEL_NO_1 半角数記 15※1 条 ● 登録されている電話番号１を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
電話番号2 TEL_NO_2 半角数記 15※1 条 ● 登録されている電話番号２を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
メールアドレス1 MAIL_ADDRESS_1 半角英数記 60※1 条 ● 登録されているメールアドレス１を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
メールアドレス2 MAIL_ADDRESS_2 半角英数記 60※1 条 ● 登録されているメールアドレス２を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
DM止め区分 TOME_KUBUN_DM 登録されているＤＭ止め区分を設定します。
数値 4 ● 3000：送信可
3099：送信不可
メール止め区分1 TOME_KUBUN_MAIL_1 登録されているメール止め区分１を設定します。
数値 4 ● 5000：送信可
5099：送信不可
メール止め区分2 TOME_KUBUN_MAIL_2 登録されているメール止め区分２を設定します。
数値 4 ● 5000：送信可
5099：送信不可
属性優先順位 ZOKUSEI_JUNI 数値 2 ● 登録されている顧客属性情報の属性優先順位が設定されます。（「1」が最高位となり昇順。）
属性補助情報 ZOKUSEI_HOJO_INFO
入会組織キー1 NYUKAI_SOSHIKI_KEY_1 半角英数 20 ● 登録されている入会組織キー1が設定されます。
入会組織キー2 NYUKAI_SOSHIKI_KEY_2 半角英数 20 ● 登録されている入会組織キー2が設定されます。
入会組織キー3 NYUKAI_SOSHIKI_KEY_3 半角英数 20 ● 登録されている入会組織キー3が設定されます。
入会店舗 NYUKAI_STORE 全半角文字 60 ● 登録されている入会店舗の名称が設定されます。
入会テナント NYUKAI_TENANT 全半角文字 60 ● 登録されている入会テナントの名称が設定されます。
入会日 NYUKAI_DATE 数値 YYYYMMDD 8 ● 登録されている入会日が設定されます。
退会日 TAIKAI_DATE 数値 YYYYMMDD 8 ● 退会している場合、退会日が設定されます。
フリー属性１（テキスト） FREE_FIELD_1 全半角文字 20 ● 登録されているフリー属性１が設定されます。
フリー属性２（テキスト） FREE_FIELD_2 全半角文字 20 ● 登録されているフリー属性２が設定されます。
フリー属性３（テキスト） FREE_FIELD_3 全半角文字 20 ● 登録されているフリー属性３が設定されます。
フリー属性４（テキスト） FREE_FIELD_4 全半角文字 20 ● 登録されているフリー属性４が設定されます。
フリー属性５（テキスト） FREE_FIELD_5 全半角文字 20 ● 登録されているフリー属性５が設定されます。
フリー属性６（コード） FREE_FIELD_6 数値 2 ● 登録されているフリー属性６が設定されます。
フリー属性７（コード） FREE_FIELD_7 数値 2 ● 登録されているフリー属性７が設定されます。
フリー属性８（コード） FREE_FIELD_8 数値 2 ● 登録されているフリー属性８が設定されます。
フリー属性９（コード） FREE_FIELD_9 数値 2 ● 登録されているフリー属性９が設定されます。
フリー属性１０（コード） FREE_FIELD_10 数値 2 ● 登録されているフリー属性１０が設定されます。
※次頁へ続く
89/129 Copyright ©NTT DATA CORPORATION

---

## Page 90

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報照会
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
メルマガ連携情報 MAIL_MAGAZINE_INFO
登録されているメルマガ配信有無フラグが設定されます。
配信有無フラグ DELIVERY_FLAG 数値 1 ● 0：配信希望しない
1：配信希望する
登録されているメルマガ配信タイプが設定されます。
0：未設定
配信タイプ DELIVERY_TYPE 数値 1 ● 1：テキスト形式
2：HTML形式
複数のメルマガ配信カテゴリが選択されている場合は、繰り返し。 ※最大５
配信カテゴリ情報 DELIVERY_CATEGORY_INFO 配信カテゴリが無い場合は本項目以下は空タグで返却されます。
配信カテゴリ番号 DELIVERY_CATEGORY_NO 数値 2 条 登録されているメルマガ配信カテゴリ番号が設定されます。
配信カテゴリ選択番号01 DELIVERY_CATEGORY_CHOICE_NO_01 数値 2 条
配信カテゴリ選択番号02 DELIVERY_CATEGORY_CHOICE_NO_02 数値 2 条
配信カテゴリ選択番号03 DELIVERY_CATEGORY_CHOICE_NO_03 数値 2 条
配信カテゴリ選択番号04 DELIVERY_CATEGORY_CHOICE_NO_04 数値 2 条
配信カテゴリ選択番号05 DELIVERY_CATEGORY_CHOICE_NO_05 数値 2 条 処理後の最新の配信カテゴリ選択番号が設定されます。
※選択されている選択番号が上詰めで設定されます。
配信カテゴリ選択番号06 DELIVERY_CATEGORY_CHOICE_NO_06 数値 2 条 例）選択番号が５この場合、01～05が返却され、06～10は空タグで返却されます。
配信カテゴリ選択番号07 DELIVERY_CATEGORY_CHOICE_NO_07 数値 2 条
配信カテゴリ選択番号08 DELIVERY_CATEGORY_CHOICE_NO_08 数値 2 条
配信カテゴリ選択番号09 DELIVERY_CATEGORY_CHOICE_NO_09 数値 2 条
配信カテゴリ選択番号10 DELIVERY_CATEGORY_CHOICE_NO_10 数値 2 条
ポイント利用サービス情報 POINT_RIYO_SERVICE_INFO
ポイント利用可能残日数 RIYO_KANO_ZANNISSU 顧客情報の登録状況によりポイント利用を制限する場合、ポイント利用の状況が判断できるパラメータ（1以上でポイント利用可能）が設定
されます。猶予期間を設けた場合は、その残日数が設定されます。
数値 2 ● 0：ポイント利用不可
1～30：ポイント利用可能な残日数（最大30日）
99：ポイント利用可
漢字氏名登録フラグ KOKYAKU_NAME_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
カナ氏名登録フラグ KOKYAKU_KANA_NAME_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
誕生年登録フラグ BIRTHDAY_YEAR_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
誕生月登録フラグ BIRTHDAY_MONTH_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
誕生日登録フラグ BIRTHDAY_DAY_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
電話番号登録フラグ TEL_NO_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
郵便番号登録フラグ POST_NO_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
※次頁へ続く
90/129 Copyright ©NTT DATA CORPORATION

---

## Page 91

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報照会
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
住所登録フラグ ADDRESS_NO_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
性別登録フラグ SEIBETSU_TOROKU_FLAG 登録状態が設定されます。
1：登録されている、かつ、利用条件でない
数値 1 ● 2：登録されている、かつ、利用条件である
3：登録されていない、かつ、利用条件でない
4：登録されていない、かつ、利用条件である
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE 処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
全半角文字 500 ● ・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、21、23、24、25、90 異常
C
91/129 Copyright ©NTT DATA CORPORATION

---

## Page 92

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報更新
C21. 顧客情報更新
1. 処理概要
・ 会員の顧客属性情報を更新します。 ・ 配信カテゴリ情報を更新する場合について、
個人情報を扱うため、暗号化してやり取りします。（サービス仕様書「本編 オンラインAPI編」1.2.1項目別の暗号化を参照） 配信カテゴリ情報は、「配信カテゴリ番号」単位に、更新を行います。
配信カテゴリ選択番号は、指定された「配信カテゴリ番号」配下の配信カテゴリ選択番号を全件入替します。
・ 項目を更新する場合、設定値で更新します。→「暗号化あり」の場合は、暗号化要 （要求パラメータで指定された「配信カテゴリ選択番号」が保存され、指定されてなかった「配信カテゴリ選択番号」は削除されます）
空タグやタグ省略の場合、項目を更新しません。 「配信カテゴリ番号」配下の配信カテゴリ番号を全件削除する場合は、「配信カテゴリ番号」タグに削除対象番号を指定し、「配信カテゴリ選択番号01～10」を空タグ or タ
項目を削除する場合、説明記載の内容を設定してください。→「暗号化あり」の場合は、暗号化要 グ省略してください。
●：更新対象項目、○：更新しない項目、□：削除項目 ＜配信カテゴリ情報 更新例＞
項目 顧客情報照会APIでの返信値 顧客情報更新の要求値 → 登録結果 更新前ＤＢ状態 →要求パラメータ → → → → → → →更新後ＤＢ状態
● 名字 田中 吉田 吉田 配信カテゴリ番号 配信カテゴリ選択番号 メルマガ連携情報 配信カテゴリ番号 配信カテゴリ選択番号
○ 名前 花子 （空タグ） 花子 1 1 配信カテゴリ情報 1 1
● カナ名字 タナカ ヨシダ ヨシダ 3 配信カテゴリ番号 1 2 追加
○ カナ名前 ハナコ （空タグ） ハナコ 5 配信カテゴリ選択番号01 1 配信カテゴリ選択 3 削除
○ 誕生年 1980 （タグなし） 1980 2 2 配信カテゴリ選択番号02 2 番号の入替 4 追加
○ 誕生月 10 （タグなし） 10 4 配信カテゴリ選択番号03 4 5 削除
○ 誕生日 1 （タグなし） 1 配信カテゴリ選択番号04 6 6 追加
● 性別 （値なし） 2（女性） 2（女性） 配信カテゴリ情報 配信カテゴリ番号 2 2 削除
□ 電話番号1 090-1234-5678 （初期値＝半角スペース） 配信カテゴリ番号 2 の全件削除 4 削除
□ 電話番号2 03-12345678 （初期値＝半角スペース） 配信カテゴリ情報 5 9 追加
配信カテゴリ番号 5 配信カテゴリ番号
配信カテゴリ選択番号01 9 の追加
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C21"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY 暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
強制更新フラグ KYOSEI_KOSHIN_FLAG 日付条件や優先度に関わらず、強制更新したい場合には、「2」を設定してください。
数値 1 1 1：強制更新しない
2：強制更新する
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 - ● 会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
カードフリー属性1（テキスト） CARD_FREE_FIELD_1 会員のカードフリー属性1を設定してください。
全半角文字 20 -
情報を削除する場合は、半角スペース1文字を設定してください。
カードフリー属性2（テキスト） CARD_FREE_FIELD_2 会員のカードフリー属性2を設定してください。
全半角文字 20 -
情報を削除する場合は、半角スペース1文字を設定してください。
カードフリー属性3（テキスト） CARD_FREE_FIELD_3 会員のカードフリー属性3を設定してください。
全半角文字 20 -
情報を削除する場合は、半角スペース1文字を設定してください。
カードフリー属性4（テキスト） CARD_FREE_FIELD_4 会員のカードフリー属性4を設定してください。
全半角文字 20 -
情報を削除する場合は、半角スペース1文字を設定してください。
カードフリー属性5（テキスト） CARD_FREE_FIELD_5 会員のカードフリー属性5を設定してください。
全半角文字 20 -
情報を削除する場合は、半角スペース1文字を設定してください。
カードフリー属性6（コード） CARD_FREE_FIELD_6 会員のカードフリー属性6を設定してください。
数値 2 -
情報を削除する場合は、0を設定してください。
カードフリー属性7（コード） CARD_FREE_FIELD_7 会員のカードフリー属性7を設定してください。
数値 2 -
情報を削除する場合は、0を設定してください。
カードフリー属性8（コード） CARD_FREE_FIELD_8 会員のカードフリー属性8を設定してください。
数値 2 -
情報を削除する場合は、0を設定してください。
※次頁へ続く
92/129 Copyright ©NTT DATA CORPORATION

---

## Page 93

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報更新
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
カードフリー属性9（コード） CARD_FREE_FIELD_9 会員のカードフリー属性9を設定してください。
数値 2 -
情報を削除する場合は、0を設定してください。
カードフリー属性10（コード） CARD_FREE_FIELD_10 会員のカードフリー属性10を設定してください。
数値 2 -
情報を削除する場合は、0を設定してください。
属性基本情報 ZOKUSEI_KIHON_INFO
名字 KOKYAKU_MYOJI 会員の名字を設定します。暗号化する場合は暗号化した値を設定してください。※全角文字20桁以内で設定してください。
全角文字 40※1 ● - 情報を削除する場合は、全角スペース1文字を設定してください。
名前 KOKYAKU_NAMAE 会員の名前を設定します。暗号化する場合は暗号化した値を設定してください。※全角文字20桁以内で設定してください。
全角文字 40※1 ● - 情報を削除する場合は、全角スペース1文字を設定してください。
カナ名字 KOKYAKU_KANA_MYOJI 会員のカナ氏名を設定します。暗号化する場合は暗号化した値を設定してください。※全角文字20桁以内で設定してください。
全角文字 40※1 ● - 情報を削除する場合は、全角スペース1文字を設定してください。
カナ名前 KOKYAKU_KANA_NAMAE 会員のカナ氏名を設定します。暗号化する場合は暗号化した値を設定してください。※全角文字20桁以内で設定してください。
全角文字 40※1 ● - 情報を削除する場合は、全角スペース1文字を設定してください。
誕生年 BIRTHDAY_YEAR 会員の誕生年を設定します。1900から9999の範囲内で設定してください。
数値 YYYY 4 -
情報を削除する場合は、0を設定してください。
誕生月 BIRTHDAY_MONTH 会員の誕生月を設定します。
数値 MM 2 -
情報を削除する場合は、0を設定してください。
誕生日 BIRTHDAY_DAY 会員の誕生日を設定します。
数値 DD 2 -
情報を削除する場合は、0を設定してください。
性別 SEIBETSU 会員の性別を設定します。
数値 1 - 0：未登録、1：男性、2：女性、9：その他
情報を削除する場合は、0を設定してください。
郵便番号 POST_NO 会員の郵便番号を設定します。暗号化する場合は暗号化した値を設定してください。
半角数記 nnn-nnnn 8※1 ● - 情報を削除する場合は、0を設定してください。
住所1 ADDRESS_1 会員の住所１（都道府県）を設定します。暗号化する場合は暗号化した値を設定してください。※全角文字5桁以内で設定してください。
全角文字 10※1 ● - 情報を削除する場合は、全角スペース1文字を設定してください。
住所2 ADDRESS_2 会員の住所２を設定します。暗号化する場合は暗号化した値を設定してください。※全角文字50桁以内で設定してください。
全角文字 100※1 ● - 情報を削除する場合は、全角スペース1文字を設定してください。
住所3 ADDRESS_3 会員の住所３を設定します。暗号化する場合は暗号化した値を設定してください。※全角文字50桁以内で設定してください。
全角文字 100※1 ● - 情報を削除する場合は、全角スペース1文字を設定してください。
電話番号1 TEL_NO_1 会員の電話番号１を設定します。暗号化する場合は暗号化した値を設定してください。
半角数記 15※1 ● - 情報を削除する場合は、半角スペース1文字を設定してください。
電話番号2 TEL_NO_2 会員の暗号化した電話番号２を設定します。暗号化する場合は暗号化した値を設定してください。
半角数記 15※1 ● - 情報を削除する場合は、半角スペース1文字を設定してください。
メールアドレス1 MAIL_ADDRESS_1 会員の暗号化したメールアドレス１を設定します。暗号化する場合は暗号化した値を設定してください。
半角英数記 60※1 ● - 情報を削除する場合は、半角スペース1文字を設定してください。
メールアドレス2 MAIL_ADDRESS_2 会員の暗号化したメールアドレス２を設定します。暗号化する場合は暗号化した値を設定してください。
半角英数記 60※1 ● - 情報を削除する場合は、半角スペース1文字を設定してください。
DM止め区分 TOME_KUBUN_DM 更新対象会員のＤＭ止め区分を設定します。
数値 4 - 3000：送付可
3099：送付不可
メール止め区分1 TOME_KUBUN_MAIL_1 更新対象会員のメール止め区分１を設定します。
数値 4 - 5000：送信可
5099：送信不可
メール止め区分2 TOME_KUBUN_MAIL_2 更新対象会員のメール止め区分２を設定します。
数値 4 - 5000：送信可
5099：送信不可
顧客情報照会で返信された更新対象会員の属性情報の取込を判断するための優先順位を設定します（「1」が最高位です）。
属性優先順位 ZOKUSEI_JUNI 数値 2 - ● ※一部機能未実装のため固定値「0」で設定下さい。
属性補助情報 ZOKUSEI_HOJO_INFO
入会組織キー1 NYUKAI_SOSHIKI_KEY_1 半角英数 20 -
会員の入会組織キー1～３を設定します。※既に設定されている場合は、更新されません。
入会組織キー2 NYUKAI_SOSHIKI_KEY_2 半角英数 20 - 入会組織を初めて設定したタイミングで、入会日を設定します。その入会日はTX上の取引日付（TORIHIKI_DATEタグ）の日付となります。
入会組織キー3 NYUKAI_SOSHIKI_KEY_3 半角英数 20 -
フリー属性1（テキスト） FREE_FIELD_1 全半角文字 20 - 会員のフリー属性１を設定します。情報を削除する場合は、半角スペース1文字を設定してください。
フリー属性2（テキスト） FREE_FIELD_2 全半角文字 20 - 会員のフリー属性２を設定します。情報を削除する場合は、半角スペース1文字を設定してください。
フリー属性3（テキスト） FREE_FIELD_3 全半角文字 20 - 会員のフリー属性３を設定します。情報を削除する場合は、半角スペース1文字を設定してください。
フリー属性4（テキスト） FREE_FIELD_4 全半角文字 20 - 会員のフリー属性４を設定します。情報を削除する場合は、半角スペース1文字を設定してください。
フリー属性5（テキスト） FREE_FIELD_5 全半角文字 20 - 会員のフリー属性５を設定します。情報を削除する場合は、半角スペース1文字を設定してください。
フリー属性6（コード） FREE_FIELD_6 数値 2 - 会員のフリー属性６を設定します。情報を削除する場合は、0を設定してください。
フリー属性7（コード） FREE_FIELD_7 数値 2 - 会員のフリー属性７を設定します。情報を削除する場合は、0を設定してください。
フリー属性8（コード） FREE_FIELD_8 数値 2 - 会員のフリー属性８を設定します。情報を削除する場合は、0を設定してください。
フリー属性9（コード） FREE_FIELD_9 数値 2 - 会員のフリー属性９を設定します。情報を削除する場合は、0を設定してください。
フリー属性10（コード） FREE_FIELD_10 数値 2 - 会員のフリー属性１０を設定します。情報を削除する場合は、0を設定してください。
※次頁へ続く
93/129 Copyright ©NTT DATA CORPORATION

---

## Page 94

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報更新
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
メルマガ連携情報 MAIL_MAGAZINE_INFO
メルマガ配信有無フラグを設定します。
配信有無フラグ DELIVERY_FLAG 数値 1 - 0：配信希望しない
1：配信希望する
メルマガ配信タイプを設定します。
0：未設定
配信タイプ DELIVERY_TYPE 数値 1 - 1：テキスト形式
2：HTML形式
配信カテゴリ情報 DELIVERY_CATEGORY_INFO 複数のメルマガ配信カテゴリを設定する場合は、繰り返し。 ※最大５
配信カテゴリ番号 DELIVERY_CATEGORY_NO 数値 2 - メルマガ配信カテゴリ番号を設定します。
配信カテゴリ選択番号01 DELIVERY_CATEGORY_CHOICE_NO_01 数値 2 -
配信カテゴリ選択番号02 DELIVERY_CATEGORY_CHOICE_NO_02 数値 2 -
配信カテゴリ選択番号03 DELIVERY_CATEGORY_CHOICE_NO_03 数値 2 -
配信カテゴリ選択番号04 DELIVERY_CATEGORY_CHOICE_NO_04 数値 2 -
配信カテゴリ選択番号05 DELIVERY_CATEGORY_CHOICE_NO_05 数値 2 - メルマガ配信カテゴリ選択番号を設定します。
※メルマガ配信カテゴリ番号単位で、指定された配信カテゴリ選択番号01～10で入替します。
配信カテゴリ選択番号06 DELIVERY_CATEGORY_CHOICE_NO_06 数値 2 - ※メルマガ配信カテゴリ番号単位で、削除する場合は、配信カテゴリ選択番号01～10全てのタグを省略します。
配信カテゴリ選択番号07 DELIVERY_CATEGORY_CHOICE_NO_07 数値 2 -
配信カテゴリ選択番号08 DELIVERY_CATEGORY_CHOICE_NO_08 数値 2 -
配信カテゴリ選択番号09 DELIVERY_CATEGORY_CHOICE_NO_09 数値 2 -
配信カテゴリ選択番号10 DELIVERY_CATEGORY_CHOICE_NO_10 数値 2 -
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 半角英数 20 0 ● 組織識別区分が「2：端末番号」の場合は設定してください。それ以外場合は、デフォルト値「0」を設定します。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 - 操作者の利用者コードを設定します。
94/129 Copyright ©NTT DATA CORPORATION

---

## Page 95

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報更新
3. 返信パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
処理情報 SHORI_INFO
強制更新フラグ KYOSEI_KOSHIN_FLAG 数値 1 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
数値 2 ● ● 23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・メルマガ連携情報の配信カテゴリ番号と配信カテゴリ選択番号がマスタに存在しない場合に返します。
37：メルマガ配信カテゴリ情報指定異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。ただし、会員ステータスが正常でない場合、最新の会員番号の会員番号識別が設定されます。
会員番号 KAIIN_NO 要求の値がそのまま設定されます。
ただし、会員ステータスが正常でない場合、
数値(条) 20 ● ●
顧客に紐づく最新の会員番号の情報（同一統合顧客番号、同一会員番号種別、会員ステータス＝0、利用開始日が最新、最終更新日
が最新）を返却します。
会員ステータス KAIIN_STATUS 要求の会員番号に紐づく会員ステータスが設定されます。
数値 1 ● 0：正常、7：無効（制限）、8：無効（不可）
会員ステータス理由コード KAIIN_STATUS_RIYU_CD
要求の会員番号に紐づく会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
※次頁へ続く
95/129 Copyright ©NTT DATA CORPORATION

---

## Page 96

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報更新
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
カードフリー属性1（テキスト） CARD_FREE_FIELD_1 要求の会員番号に紐づく登録されているカードフリー属性1が設定されます。
全半角文字 20 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性2（テキスト） CARD_FREE_FIELD_2 要求の会員番号に紐づく登録されているカードフリー属性2が設定されます。
全半角文字 20 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性3（テキスト） CARD_FREE_FIELD_3 要求の会員番号に紐づく登録されているカードフリー属性3が設定されます。
全半角文字 20 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性4（テキスト） CARD_FREE_FIELD_4 要求の会員番号に紐づく登録されているカードフリー属性4が設定されます。
全半角文字 20 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性5（テキスト） CARD_FREE_FIELD_5 要求の会員番号に紐づく登録されているカードフリー属性5が設定されます。
全半角文字 20 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性6（コード） CARD_FREE_FIELD_6 要求の会員番号に紐づく登録されているカードフリー属性6が設定されます。
数値 2 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性7（コード） CARD_FREE_FIELD_7 要求の会員番号に紐づく登録されているカードフリー属性7が設定されます。
数値 2 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性8（コード） CARD_FREE_FIELD_8 要求の会員番号に紐づく登録されているカードフリー属性8が設定されます。
数値 2 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性9（コード） CARD_FREE_FIELD_9 要求の会員番号に紐づく登録されているカードフリー属性9が設定されます。
数値 2 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
カードフリー属性10（コード） CARD_FREE_FIELD_10 要求の会員番号に紐づく登録されているカードフリー属性10が設定されます。
数値 2 条
カードフリー属性運用する かつ 要求のカードフリー属性1～10いずれか存在する場合のみ、該当タグを返却します。
属性基本情報 ZOKUSEI_KIHON_INFO
名字 KOKYAKU_MYOJI 全角文字 40※1 条 ● 処理後の最新の名字を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
名前 KOKYAKU_NAMAE 全角文字 40※1 条 ● 処理後の最新の名前を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
カナ名字 KOKYAKU_KANA_MYOJI 全角文字 40※1 条 ● 処理後の最新のカナ名字の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
カナ名前 KOKYAKU_KANA_NAMAE 全角文字 40※1 条 ● 処理後の最新のカナ名前を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
誕生年 BIRTHDAY_YEAR 数値 YYYY 4 ● 処理後の最新の誕生年の値を設定します。
誕生月 BIRTHDAY_MONTH 数値 MM 2 ● 処理後の最新の誕生月の値を設定します。
誕生日 BIRTHDAY_DAY 数値 DD 2 ● 処理後の最新の誕生日の値を設定します。
性別 SEIBETSU 処理後の最新の性別の値を設定します。
数値 1 ●
0：未登録、1：男性、2：女性、9：その他
郵便番号 POST_NO 半角数記 NNN-NNNN 8※1 条 ● 処理後の最新の郵便番号の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
住所1 ADDRESS_1 全角文字 10※1 条 ● 処理後の最新の住所１（都道府県）の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
住所2 ADDRESS_2 全角文字 100※1 条 ● 処理後の最新の住所２の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
住所3 ADDRESS_3 全角文字 100※1 条 ● 処理後の最新の住所３の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
電話番号1 TEL_NO_1 半角数記 15※1 条 ● 処理後の最新の電話番号１の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
電話番号2 TEL_NO_2 半角数記 15※1 条 ● 処理後の最新の電話番号２の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
メールアドレス1 MAIL_ADDRESS_1 半角英数記 60※1 条 ● 処理後の最新のメールアドレス１の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
メールアドレス2 MAIL_ADDRESS_2 半角英数記 60※1 条 ● 処理後の最新のメールアドレス２の値を設定します。要求パラメータの「暗号キー」が設定されている場合は暗号化した値を設定します。
DM止め区分 TOME_KUBUN_DM 処理後の最新のＤＭ止め区分の値を設定します。
数値 4 ● 3000：送信可
3099：送信不可
メール止め区分1 TOME_KUBUN_MAIL_1 処理後の最新のメール止め区分１の値を設定します。
数値 4 ● 5000：送信可
5099：送信不可
メール止め区分2 TOME_KUBUN_MAIL_2 処理後の最新のメール止め区分２の値を設定します。
数値 4 ● 5000：送信可
5099：送信不可
属性優先順位 ZOKUSEI_JUNI 数値 2 ● ● 処理後の最新のXXXX（属性優先順位 or 入会組織キー1-3）が設定されます。
属性補助情報 ZOKUSEI_HOJO_INFO
入会組織キー1 NYUKAI_SOSHIKI_KEY_1 半角英数 20 ● ● 処理後の最新のXXXX（属性優先順位 or 入会組織キー1-3）が設定されます。
入会組織キー2 NYUKAI_SOSHIKI_KEY_2 半角英数 20 ● ● 処理後の最新のXXXX（属性優先順位 or 入会組織キー1-3）が設定されます。
入会組織キー3 NYUKAI_SOSHIKI_KEY_3 半角英数 20 ● ● 処理後の最新のXXXX（属性優先順位 or 入会組織キー1-3）が設定されます。
入会店舗 NYUKAI_STORE 全半角文字 60 ● 処理後の最新の入会店舗の名称が設定されます。
入会テナント NYUKAI_TENANT 全半角文字 60 ● 処理後の最新の入会テナントの名称が設定されます。
入会日 NYUKAI_DATE 数値 YYYYMMDD 8 ● 処理後の最新の入会日が設定されます。
退会日 TAIKAI_DATE 数値 YYYYMMDD 8 ● 退会している場合、処理後の最新の退会日が設定されます。
※次頁へ続く
96/129 Copyright ©NTT DATA CORPORATION

---

## Page 97

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 顧客情報更新
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
フリー属性1（テキスト） FREE_FIELD_1 全半角文字 20 ● 処理後の最新のフリー属性１が設定されます。
フリー属性2（テキスト） FREE_FIELD_2 全半角文字 20 ● 処理後の最新のフリー属性２が設定されます。
フリー属性3（テキスト） FREE_FIELD_3 全半角文字 20 ● 処理後の最新のフリー属性３が設定されます。
フリー属性4（テキスト） FREE_FIELD_4 全半角文字 20 ● 処理後の最新のフリー属性４が設定されます。
フリー属性5（テキスト） FREE_FIELD_5 全半角文字 20 ● 処理後の最新のフリー属性５が設定されます。
フリー属性6（コード） FREE_FIELD_6 数値 2 ● 処理後の最新のフリー属性６が設定されます。
フリー属性7（コード） FREE_FIELD_7 数値 2 ● 処理後の最新のフリー属性７が設定されます。
フリー属性8（コード） FREE_FIELD_8 数値 2 ● 処理後の最新のフリー属性８が設定されます。
フリー属性9（コード） FREE_FIELD_9 数値 2 ● 処理後の最新のフリー属性９が設定されます。
フリー属性10（コード） FREE_FIELD_10 数値 2 ● 処理後の最新のフリー属性１０が設定されます。
メルマガ連携情報 MAIL_MAGAZINE_INFO
配信有無フラグ DELIVERY_FLAG 数値 1 ● 処理後の最新の配信有無フラグが設定されます。
配信タイプ DELIVERY_TYPE 数値 1 ● 処理後の最新の配信タイプが設定されます。
配信カテゴリ情報 DELIVERY_CATEGORY_INFO 配信カテゴリが無い場合は本項目以下は空タグで返却されます。
配信カテゴリ番号 DELIVERY_CATEGORY_NO 数値 2 条 処理後の最新の配信カテゴリ番号が設定されます。
配信カテゴリ選択番号01 DELIVERY_CATEGORY_CHOICE_NO_01 数値 2 条
配信カテゴリ選択番号02 DELIVERY_CATEGORY_CHOICE_NO_02 数値 2 条
配信カテゴリ選択番号03 DELIVERY_CATEGORY_CHOICE_NO_03 数値 2 条
配信カテゴリ選択番号04 DELIVERY_CATEGORY_CHOICE_NO_04 数値 2 条
配信カテゴリ選択番号05 DELIVERY_CATEGORY_CHOICE_NO_05 数値 2 条 処理後の最新の配信カテゴリ選択番号が設定されます。
※選択されている選択番号が上詰めで設定されます。
配信カテゴリ選択番号06 DELIVERY_CATEGORY_CHOICE_NO_06 数値 2 条 例）選択番号が５この場合、01～05が返却され、06～10は空タグで返却されます。
配信カテゴリ選択番号07 DELIVERY_CATEGORY_CHOICE_NO_07 数値 2 条
配信カテゴリ選択番号08 DELIVERY_CATEGORY_CHOICE_NO_08 数値 2 条
配信カテゴリ選択番号09 DELIVERY_CATEGORY_CHOICE_NO_09 数値 2 条
配信カテゴリ選択番号10 DELIVERY_CATEGORY_CHOICE_NO_10 数値 2 条
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
全半角文字 500 ●
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：37 「メルマガ配信カテゴリ情報が存在しません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、21、23、24、25、31、90 異常
C
97/129 Copyright ©NTT DATA CORPORATION

---

## Page 98

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ログイン認証
C22. ログイン認証
1. 処理概要
・ ログイン認証とは、ユーザが入力したログインID/PWを認証する機能です。
・ ログインID/ログインPWはCAFIS Explorerで保持し、都度CAFIS Explorerに問合せを行い認証します。
・ ログインIDは、メールアドレスや会員番号など任意の文字列とします。（最大60桁まで）
・ ロック状態初期化のパターンは以下の３つがあります。
① ロック状態から一定期間後、認証OK/NGに関わらず、ロック状態（回数、ロック時間）を初期化します。
② ログイン認証がOKとなったら、ロック状態（回数）を初期化します。
③ ログインPW変更処理（顧客更新API）が行われたら、ロック状態（回数）を初期化します。
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C22"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY 暗号化する場合は暗号キーを設定してください。
半角英数 16 - なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
マイページ情報 MYPAGE_INFO
ログインID ROGUIN_ID 半角英数記 60※1 ● - ● ログインIDを設定します。ログインIDには任意の文字列を設定してください。
ログインPW ROGUIN_PW 半角英数記 20※1 ● - ● ログインPWを設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
98/129 Copyright ©NTT DATA CORPORATION

---

## Page 99

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ログイン認証
3. 返信パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS 要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・アカウントがロック状態の場合に返します。
11：アカウントロック異常
・ログインパスワードが誤っている場合に返します。
14：ログインパスワード不一致
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
数値 2 ● ● 20：要求項目異常
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・ログインIDが未登録の場合に返します。
40：ログインID未登録
・ＤＢ障害などの場合に返します。
90：サーバ内部エラー
マイページ情報 MYPAGE_INFO
会員番号識別（WEB会員） WEB_KAIIN_NO_SHIKIBETSU
数値 2 ● ログインIDに紐づけされた有効なWEB会員番号の会員番号識別を設定します。
会員番号（WEB会員） WEB_KAIIN_NO
数値(条) 20 ● ログインIDに紐づけされた有効なWEB会員番号を設定します。WEB会員番号以外は返りません。
ログインID ROGUIN_ID 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
ログインPW ROGUIN_PW 半角英数記 20※1 ● ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：11 「ご利用のアカウントがロックされております。」
・処理ステータス：14 「入力頂いたログインパスワードに不備があります。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
全半角文字 500 ●
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：40 「入力頂いたログインIDが登録されておりません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 11、14、20、23、24、40、90 異常
C
99/129 Copyright ©NTT DATA CORPORATION

---

## Page 100

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI アカウントコード認証
C24. アカウントコード認証
1. 処理概要
・ アカウントコード認証とは、メールアカウントの保持を確認するための機能で、マイページキーとアカウントコード（有効期限付き）を照合して認証します。
・ アカウントコード認証に用いるマイページキーとアカウントコードはURLに含まれるものとします。
・ 必ずアカウントコードが生成された状態（URL要求（API）のあと）で利用するAPIとなります。
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C24"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY
暗号化する場合は暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
マイページ情報 MYPAGE_INFO
マイページキー MYPAGE_KEY 半角英数記 60※1 ● - ● URLに含まれるマイページキーを設定します。
アカウントコード ACOUNT_CD 半角数字 4※1 ● - ● URLに含まれるアカウントコードを設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
100/129 Copyright ©NTT DATA CORPORATION

---

## Page 101

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI アカウントコード認証
3. 返信パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
数値 2 ● ● 24：端末未登録
・アカウントコードが一致しない場合に返します。
46：アカウントコード不一致
・アカウントコードの有効期限が切れている場合に返します。
47：アカウントコード有効期限切れ
・マイページキーが未登録の場合に返します。
48:マイページキー未登録
・ＤＢ障害などの場合に返します。
90：サーバ内部エラー
マイページ情報 MYPAGE_INFO
マイページキー MYPAGE_KEY 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
アカウントコード ACOUNT_CD 半角数字 4※1 ● ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
全半角文字 500 ●
・処理ステータス：46 「アカウントコードに不備があります。」
・処理ステータス：47 「アカウントコードの有効期限が切れています。」
・処理ステータス：48 「マイページキーが登録されておりません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、23、24、46、47、48、90 異常
C
101/129 Copyright ©NTT DATA CORPORATION

---

## Page 102

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI WEB会員番号発行要求
C25. WEB会員番号発行要求
1. 処理概要
・ WEB会員番号発行要求とは、マイページキーとログインIDからWEB会員番号の発番を行う機能です。
・ マイページキーはユニーク制約のためマイページキーの重複はできないものとし、重複した場合にWEB会員番号の発番を行うことはできません。
・ ログインIDもマイページキーと同様に、ユニーク制約のためログインIDの重複はできないものとし、重複した場合にWEB会員番号の発番を行うことはできません。
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C25"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY 暗号化する場合は暗号キーを設定してください。
半角英数 16 - なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
マイページ情報 MYPAGE_INFO
マイページキー MYPAGE_KEY 半角英数記 60※1 ● - ● マイページキーを設定します。
ログインID ROGUIN_ID 半角英数記 60※1 ● - ● ログインIDを設定します。
ログインPW ROGUIN_PW 半角英数記 20※1 ● - ● ログインPWを設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
102/129 Copyright ©NTT DATA CORPORATION

---

## Page 103

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI WEB会員番号発行要求
3. 返信パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
数値 2 ● ● 24：端末未登録
・ログインIDが重複している場合に返します。
41：ログインID重複
・ログインパスワード複雑性チェックエラーとなった場合に返します。
44：ログインパスワードフォーマットエラー
・マイページキーが重複している場合に返します。
49：マイページキー重複
・ＤＢ障害などの場合に返します。
90：サーバ内部エラー
マイページ情報 MYPAGE_INFO
会員番号識別（WEB会員） WEB_KAIIN_NO_SHIKIBETSU
数値 2 ● 発番したWEB会員番号に紐付く会員番号識別が設定されます。
会員番号（WEB会員） WEB_KAIIN_NO 数値(条) 20 ● 発番したWEB会員番号が設定されます。
マイページキー MYPAGE_KEY 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
ログインID ROGUIN_ID 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
ログインPW ROGUIN_PW 半角英数記 20※1 ● ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
全半角文字 500 ●
・処理ステータス：41 「入力頂いたログインIDが重複しております。」
・処理ステータス：44 「入力頂いたログインパスワードのフォーマットに不備があります。」
・処理ステータス：49 「入力頂いたマイページキーが重複しております。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、23、24、41、44、49、90 異常
C
103/129 Copyright ©NTT DATA CORPORATION

---

## Page 104

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ログイン情報確認要求
C26. ログイン情報確認要求
1. 処理概要
・ ログイン情報確認要求とは、ログインID/ログインPW失念時に、マイページキーと属性情報もしくは会員番号、ログインIDで本人確認を行う機能です。
照合条件
・会員番号
① マイページキー×会員番号
マイページキーから特定した顧客に紐付くカードの中に要求の会員番号があるかどうか。 カード
顧客情報 ・会員番号
② マイページキー×ログインID カード
マイページキーに紐付くログインIDが正しいかどうか。
・マイページキー
・ログインID
アプリ
・ ログインID失念時にはメールでログインIDの通知を行うこともできます（任意）。
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C26"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY
暗号化する場合は暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
マイページ情報 MYPAGE_INFO
マイページキー MYPAGE_KEY 半角英数記 60 ● - ● マイページキーを設定します。
ログイン情報確認処理区分 ROGUIN_KAKUNIN_SYORI_KUBUN ログイン確認処理区分を設定します。
数値 1 - ● 1：ログインID失念
2：ログインPW失念
マイページチェック情報 MYPAGE_CHECK_INFO
会員番号 KAIIN_NO
会員番号を設定します。NULLの場合は、本システムで取得した値と突合しません。
数値 20 -
顧客に紐付くすべての会員番号との突合を行います。
氏名 KOKYAKU_NAME 会員の漢字名称を設定します。空白は除外して設定します。暗号化する場合は暗号化した値を設定してください。
全角文字 80※1 ● - タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
※全角文字40桁以内で設定してください。
カナ氏名 KOKYAKU_KANA_NAME 会員のカナ氏名を設定します。空白は除外、濁点・半濁点は１文字にしないで設定します。暗号化する場合は暗号化した値を設定してくださ
い。
全角文字 80※1 ● -
タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
※全角文字40桁以内で設定してください。
生年月日 BIRTHDAY チェック対象会員の生年月日を設定します。
数値 YYYYMMDD 8 -
空タグ、もしくはタグ省略はチェックしません。
電話番号 TEL_NO 会員の電話番号を設定します。"-"は除外して設定します。暗号化する場合は暗号化した値を設定してください。
半角数記 15※1 ● - タグ省略、および、値を設定していない、NULLの場合は、本システムで取得した値と突合しません。
顧客の電話番号1、電話番号2の両方との突合を行います。
ログインID ROGUIN_ID
会員のログインIDを設定します。暗号化する場合は暗号化した値を設定してください。
半角英数記 60 ● - NULLの場合は、本システムで取得した値と突合しません。
メール情報 MAIL_INFO
メールアドレス MAIL_ADDRESS
半角英数記 60 ● 条 ログイン情報確認処理区分が「１：ログインID失念」の場合、ID失念時にログインIDを通知する配信用メールアドレスを必ず設定します。
※次頁へ続く
104/129 Copyright ©NTT DATA CORPORATION

---

## Page 105

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ログイン情報確認要求
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
105/129 Copyright ©NTT DATA CORPORATION

---

## Page 106

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ログイン情報確認要求
3. 返信パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
数値 2 ● ●
24：端末未登録
・ログイン情報確認処理区分が「１：ログインID失念」の場合、メールアドレスの書式チェックでエラーとなった場合に返します。
34：メールアドレスフォーマットエラー
・マイページキーが未登録の場合に返します。
48：マイページキー未登録
・ＤＢ障害などの場合に返します。
90：サーバ内部エラー
マイページ情報 MYPAGE_INFO
会員番号識別（WEB会員） WEB_KAIIN_NO_SHIKIBETSU
数値 2 ● ● マイページキーに紐づけされた有効なWEB会員番号の会員番号識別を設定します。
会員番号（WEB会員） WEB_KAIIN_NO
数値(条) 20 ● ログインIDに紐づけされた有効なWEB会員番号を設定します。WEB会員番号以外は返りません。
会員ステータス（WEB会員） WEB_KAIIN_STATUS WEB会員番号の会員ステータスが設定されます。
数値 1 ●
0：正常、8：無効（不可）
会員ステータス理由コード（WEB会員） WEB_KAIIN_STATUS_RIYU_CD WEB会員番号の会員ステータス理由コードが設定されます。
2000：未使用
数値 4 ● 2001：利用可
8901：不可(利用停止・その他)
マイページキー MYPAGE_KEY 半角英数記 60 ● ● ● 要求の値がそのまま設定されます。
ログイン情報確認処理区分 ROGUIN_KAKUNIN_SYORI_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
会員チェック結果情報 KAIIN_CHECK_RESULT_INFO -
一致件数 EQUAL_COUNT 数値 2 ● 一致した件数が設定されます。
会員番号チェック KAIIN_NO_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 20 条 合致しない場合、チェック対象外の場合は空タグとなります。
氏名チェック KOKYAKU_NAME_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 80※1 ● 条 合致しない場合、チェック対象外の場合は空タグとなります。
カナ氏名チェック KOKYAKU_KANA_NAME_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 80※1 ● 条 合致しない場合、チェック対象外の場合は空タグとなります。
生年月日チェック BIRTHDAY_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 8 条 合致しない場合、チェック対象外の場合は空タグとなります。
電話番号チェック TEL_NO_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
数値 15※1 ● 条 合致しない場合、チェック対象外の場合は空タグとなります。
ログインIDチェック ROGUIN_ID_CHECK 要求の値と本システムから取得した値が合致した場合、要求の値がそのまま設定されます。
半角英数記 60 ● 条 合致しない場合、チェック対象外の場合は空タグとなります。
メール情報 MAIL_INFO
メールアドレス MAIL_ADDRESS 半角英数記 60 ● ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
※次頁へ続く
106/129 Copyright ©NTT DATA CORPORATION

---

## Page 107

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI ログイン情報確認要求
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B Ｃ
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
全半角文字 500 ● ・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：34 「入力頂いたメールアドレスに不備があります。」
・処理ステータス：48 「マイページキーが登録されておりません。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、23、24、34、48、90 異常
C
107/129 Copyright ©NTT DATA CORPORATION

---

## Page 108

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI マイページ情報変更
C27. マイページ情報変更
1. 処理概要
・ マイページ情報(マイページキー、ログインID、ログインPW)の変更を行う
・ 各処理区分における要求項目の設定条件は下記とします(●：必須)
要求項目 出力エラー
W マ 新
ロ ロ
E イ ロ
グ グ
B ペ グ
イ イ
会 ー イ
ン ン
員 ジ ン
I P
番 キ P
D W
号 ー W
1：マイページキー変更 49：マイページキー重複
● ● - - -
2：ログインID変更 41：ログインID重複
● - ● - -
3：ログインPW変更 14：ログインパスワード不一致
● - - ● ●
44：ログインパスワードフォーマットエラー
4：ログインPW失念時 44：ログインパスワードフォーマットエラー
● - - - ●
108/129 Copyright ©NTT DATA CORPORATION

---

## Page 109

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI マイページ情報変更
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 要否
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C27"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY
暗号化する場合は暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
マイページ情報 MYPAGE_INFO マイページキーを設定します。
処理区分 SYORI_KUBUN
処理区分を設定します。
1：マイページキー変更
数値 1 - ● 2：ログインID変更
3：ログインPW変更
4：ログインPW失念時
会員番号識別（WEB会員） WEB_KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員番号識別を設定します。
会員番号（WEB会員） WEB_KAIIN_NO 数値(条) 20 - ● WEB会員番号を設定します。
マイページキー MYPAGE_KEY 半角英数記 60※1 ● - 条 処理区分「1：マイページキー変更」の場合、マイページキーを設定します。※必須条件は上記に記載
ログインID ROGUIN_ID 半角英数記 60※1 ● - 条 処理区分「2：ログインID変更」の場合、ログインIDを設定します。ログインIDには任意の文字列を設定してください。※必須条件は上記に記載
ログインPW ROGUIN_PW 処理区分「3：ログインPW変更」の場合、現在のパスワードを設定します。
半角英数記 20※1 ● - 条
本システムのログインパスワードと突合します。※必須条件は上記に記載
新ログインPW NEW_ROGUIN_PW 半角英数記 20※1 ● - 条 処理区分「3：ログインPW変更」、「4：ログインPW失念時」の場合、新しく変更するパスワードを設定します。※必須条件は上記に記載
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
109/129 Copyright ©NTT DATA CORPORATION

---

## Page 110

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI マイページ情報変更
3. 返信パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS 要求に対する処理結果を表すステータスが設定されます。
・正常終了（サーバと応答できた）の場合に返します。
0：正常終了
・要求の処理区分が「3：ログインPW変更」の場合でログインパスワードが誤っている場合に返します。
14：ログインパスワード不一致
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
会員番号が未登録の場合に返します。
21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
数値 2 ● ●
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の処理区分が「2：ログインID変更」の場合でログインIDが重複している場合に返します。
41：ログインID重複
・要求の処理区分が「3：ログインPW変更」、「4：ログインPW失念時」の場合でログインパスワード複雑性チェックエラーとなった場合に返しま
す。
44：ログインパスワードフォーマットエラー
・要求の処理区分が「1：マイページキー変更」の場合でマイページキーが重複している場合に返します。
49：マイページキー重複
・DB障害などの場合に返します。
90：サーバ内部エラー
マイページ情報 MYPAGE_INFO
処理区分 SYORI_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
会員番号識別（WEB会員） WEB_KAIIN_NO_SHIKIBETSU 数値 2 ● 要求の値がそのまま設定されます。
会員番号（WEB会員） WEB_KAIIN_NO 数値(条) 20 ● 要求の値がそのまま設定されます。
マイページキー MYPAGE_KEY 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
ログインID ROGUIN_ID 半角英数記 60※1 ● ● ● 要求の値がそのまま設定されます。
ログインPW ROGUIN_PW 半角英数記 20※1 ● ● ● 要求の値がそのまま設定されます。
新ログインPW NEW_ROGUIN_PW 半角英数記 20※1 ● ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE 処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：14 「入力頂いたログインパスワードに不備があります。」
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
全半角文字 500 ●
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：41 「入力頂いたログインIDが重複しております。」
・処理ステータス：44 「入力頂いたログインパスワードのフォーマットに不備があります。」
・処理ステータス：49 「入力頂いたマイページキーが重複しております。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
処理ステータス 備考 ●： 必須
A 0 正常 条： 条件付き必須 （説明に条件を記載）
B 14、20、21、23、24、41、44、49、90 異常 空欄： 返信なし
C
110/129 Copyright ©NTT DATA CORPORATION

---

## Page 111

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員番号発番
C28. 会員番号発番
1. 処理概要
・ 要求パラメータに設定した会員番号をCE内で発番します。
・ 1回のトランザクションで1つの会員番号が設定可能です。
・ CE内で既に発番されている会員番号は発番できません。
・ CE内で設定されている会員番号のマスタ範囲外の会員番号は発番できません。
・ 一定数の会員番号を取り纏めて一括発行するような仕組みで連携する場合は、通常業務のTPS負荷にならないよう、1取引ごとに200ミリ秒間隔を空けて連携いただくよう流量制御を実施してください。
2. 要求パラメータ
※1 暗号化項目の最大桁数（byte）はrawデータの桁数とする
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C28"を設定します。
処理情報 SHORI_INFO
暗号キー ENCRYPT_KEY 暗号キーを設定してください。
半角英数 16 -
なお、暗号キーに関して、トランザクションごとに可変か固定かは外部システム毎に決定ください。
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 - ● 会員番号識別を設定します。
会員番号 KAIIN_NO 数値 前0埋め 20 - ● 会員番号を設定します。マスタで設定された会員番号の桁数に合わせて前0埋めしてください。
セキュリティコード SECURITY_CD 半角英数 8※1 ● - セキュリティコードを設定します。暗号化する場合は暗号化した値を設定してください。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 - ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2 組織識別区分が「1：要求組織キー」の場合は設定してください。
半角英数 20 - 条
要求組織キー１のみ定義されている場合は、要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3 組織識別区分が「1：要求組織キー」の場合は設定してください。
半角英数 20 - 条
要求組織キー１と2のみ定義されている場合は、要求組織キー3は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 - ●
それ以外の場合は、デフォルト値「0」を設定してください。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD
半角英数 10 - 操作者の利用者コードを設定します。
111/129 Copyright ©NTT DATA CORPORATION

---

## Page 112

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員番号発番
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO -
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO -
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO -
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR -
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO -
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号がマスタ設定値の範囲外の場合に返します。
21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
数値 2 ● ● 23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・要求の会員番号が発番済みの場合に返します。
64：会員番号発番済エラー
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO -
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値 前0埋め 20 ● ● 要求の値がそのまま設定されます。
取引情報 TORIHIKI_INFO -
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2 半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3 半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 条 条 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO -
エラーメッセージ ERROR_MESSAGE 処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
全半角文字 500 ● ・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：64 「入力頂いた会員番号はすでに発番済みです。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、21、23、24、25、64、90 異常
C
112/129 Copyright ©NTT DATA CORPORATION

---

## Page 113

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 再発行
C30. 再発行
1. 処理概要
・ 現在使用している会員番号を、新しい会員番号として再発行します。
・ 再発行元の会員番号と再発行先の会員番号の定義は下記の通り。
再発行元 再発行先
利用中の会員番号 → 未使用（発行状態）の会員番号
・ 再発行するための会員ステータスの条件があり、以下の通りとなります。
変更要求前の会員ステータス 2000 2001 3001 3002 3003 8001 8002 8003 8004 8101 8102 8201 8202 8901 9001 9002 9003
会員ステータス変更のイベント 会員番号 未使用 利用可 (盗難 制 ・ 限 紛失) (汚損 制 ・ 限 破損) (そ 制 の 限 他) (再発行： 不 盗 可 難・紛失) (再発行： 不 汚 可 損・破損) (再発行 不 ： 可 その他) (利用停 不 止 可 ・再発行) (統 不 合 可 ) (利用停 不 止 可 ・統合) (切 不 替 可 ) (利用停 不 止 可 ・切替) (利用停 不 止 可 ・その他) (退会：お 不 客 可 様申請) (退会 不 ：そ 可 の他) (退会：制 不 度 可 により自動)
再発行元 ○ ○ ○ × × × × × × × × × × × × × ×
盗難・紛失による再発行
再発行先 ○ × × × × × × × × × × × × × × × ×
再発行元 ○ ○ × × × × × × × × × × × × × × ×
汚損・破損による再発行
再発行先 ○ × × × × × × × × × × × × × × × ×
再発行元 ○ ○ × × × × × × × × × × × × × × ×
その他理由による再発行
再発行先 ○ × × × × × × × × × × × × × × × ×
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C30"を設定します。
処理情報 SHORI_INFO
再発行理由 SAIHAKKO_RIYU 再発行時の理由コードを設定します。
21:汚損・破損による再発行
数値 2 2 ●
22:盗難・紛失による再発行
23:その他理由による再発行
再発行元停止区分 SAIHAKKOMOTO_TEISHI_KUBUN 再発行元の会員番号の停止状態を設定します。
数値 1 1 ● 1：利用制限（会員ステータスを「制限」に更新します。）
2：利用不可（会員ステータスを「不可」に更新します。）
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 再発行元の会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 再発行元の会員番号を設定します。
会員番号識別（再発行先） KAIIN_NO_SHIKIBETSU_AFTER 数値 2 1 ● 再発行先の会員番号識別を設定します。
会員番号（再発行先） KAIIN_NO_AFTER 数値(条) 20 - ● 再発行先の会員番号を設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 - 操作者の利用者コードを設定します。
※次頁へ続く
113/129 Copyright ©NTT DATA CORPORATION

---

## Page 114

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 再発行
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● ● 要求の値がそのまま設定されます。
処理情報 SHORI_INFO
再発行理由 SAIHAKKO_RIYU 数値 2 ● ● ● 要求の値がそのまま設定されます。
再発行元停止区分 SAIHAKKOMOTO_TEISHI_KUBUN 数値 1 ● ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・下記のエラーが発生しなかった場合に正常終了を返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号（再発行元）が未登録の場合に返します。
21：会員番号未登録（再発行元、要求項目の会員番号）
・会員番号（再発行先）が未登録の場合に返します。
22：会員番号未登録（再発行先、要求項目の会員番号（再発行先））
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
数値 2 ● ● ● ・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・会員番号（再発行元）が再発行処理できない状態の場合に返します。
70：再発行元の会員番号の状態異常
・会員番号（再発行先）が再発行処理できない状態の場合に返します。
71：再発行先の会員番号の状態異常
・会員番号（再発行元）と会員番号（再発行先）が再発行処理できない状態の場合に返します。
72：再発行元の会員番号および再発行先の会員番号の状態異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU
数値 2 ● ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO
数値(条) 20 ● ● ● 要求の値がそのまま設定されます。
会員ステータス KAIIN_STATUS 再発行元に設定した会員番号の最新の会員ステータスが設定されます。
数値 1 ● ● 0：正常、7：無効（制限）、8：無効（不可）
会員ステータス理由コード KAIIN_STATUS_RIYU_CD
切替元に設定した会員番号の最新の会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ● ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
KAIIN_NO_SHUBETSU_NAME
会員番号種別名称 全半角文字 20 ● ● 再発行元の会員の会員番号種別名称（カード名称など）を設定します。
※次頁へ続く
114/129 Copyright ©NTT DATA CORPORATION

---

## Page 115

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 再発行
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
会員番号識別（再発行先） KAIIN_NO_SHIKIBETSU_AFTER
数値 2 ● ● ● 要求の値がそのまま設定されます。
会員番号（再発行先） KAIIN_NO_AFTER
数値(条) 20 ● ● ● 要求の値がそのまま設定されます。
会員ステータス（再発行先） KAIIN_STATUS_AFTER 再発行先に設定した会員番号の最新の会員ステータスが設定されます。
数値 1 ● ● 0：正常、7：無効（制限）、8：無効（不可）
会員ステータス理由コード（再発行先） KAIIN_STATUS_RIYU_CD_AFTER
切替先に設定した会員番号の最新の会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ● ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
会員番号種別名称（再発行先） KAIIN_NO_SHUBETSU_NAME_AFTER 全半角文字 20 ● ● 再発行先の会員の会員番号種別名称（カード名称など）を設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● ● 要求の値がそのまま設定されます。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 ● ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：22 「入力頂いた処理先の会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
全半角文字 500 ● ● ・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：70 「再発行元の会員番号は処理できない状態です。」
・処理ステータス：71 「再発行先の会員番号は処理できない状態です。」
・処理ステータス：72 「再発行元の会員番号および再発行先の会員番号は処理できない状態です。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 70、71、72 会員ステータス不備、再発行条件不備
C 20、21、22、23、24、25、90 異常
115/129 Copyright ©NTT DATA CORPORATION

---

## Page 116

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 統合
C32. 統合
1. 処理概要
・ 2つの会員を統合します。
・ 統合時に2つの会員番号の属性チェックを行うことも可能です。
・ 統合元の会員番号と統合先の会員番号の定義は下記の通り。
統合元 統合先
統合の軸となる会員番号 → 統合する会員番号
・ 統合するための会員ステータスの条件があり、以下の通りとなります。
変更要求前の会員ステータス 2000 2001 3001 3002 3003 8001 8002 8003 8004 8101 8102 8201 8202 8901 9001 9002 9003
会員ステータス変更のイベント 会員番号 未使用 利用中 (盗難 制 ・ 限 紛失) (汚損 制 ・ 限 破損) (そ 制 の 限 他) (再発行： 不 盗 可 難・紛失) (再発行： 不 汚 可 損・破損) (再発行 不 ： 可 その他) (利用停 不 止 可 ・再発行) (統 不 合 可 ) (利用停 不 止 可 ・統合) (切 不 替 可 ) (利用停 不 止 可 ・切替) (利用停 不 止 可 ・その他) (退会：お 不 客 可 様申請) (退会 不 ：そ 可 の他) (退会：制 不 度 可 により自動)
統合元 ○ ○ △ △ △ × × × × × × × × × × × ×
統合要求
統合先 ○ ○ △ △ △ × × × × × × × × × × × ×
△：統合先、統合元がどちらも「制限」状態の場合は、統合不可
・ 統合時に「統合元の会員番号の顧客属性」と「統合先の会員番号の顧客属性」のいずれを優先するかの判定は下記の通り行います。
1．属性（基本）情報に紐づく会員情報の会員ステータスで引き継ぎ先を決める。
→0：正常 ＞ 7：無効カード（復旧可）＞ 8：無効カード（復旧不可）
2．顧客属性の登録状態によって引き継ぎ先を決める。
→ 属性完全登録＞属性一部登録＞属性未登録
3．統合先の情報をそのまま引き継ぐ。
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C32"を設定します。
処理情報 SHORI_INFO
統合処理区分 TOGO_SHORI_KUBUN 統合処理区分を設定します。
1：属性統合及びサービス統合
数値 1 - ●
2：属性統合
3：サービス統合
統合元停止区分 TOGOMOTO_TEISHI_KUBUN 統合元の会員番号を継続利用するか、利用停止にするか設定します。
数値 1 1 ● 1：継続利用（会員ステータスは更新しません。）
2：利用不可（会員ステータスを「不可」に更新します。）
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 統合元の会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 統合元の会員番号を設定します。
会員番号識別（統合先） KAIIN_NO_SHIKIBETSU_AFTER 数値 2 1 ● 統合先の会員番号識別を設定します。
会員番号（統合先） KAIIN_NO_AFTER 数値(条) 20 - ● 統合先の会員番号を設定します。
属性チェックフラグ情報 ZOKUSEI_CHECK_FLAG_INFO
氏名チェックフラグ KOKYAKU_NAME_CHECK_FLAG 統合元と統合先の氏名をチェックするかどうかを設定します。
数値 1 - ● 1：チェックする
2：チェックしない
カナ氏名チェックフラグ KOKYAKU_KANA_NAME_CHECK_FLAG 統合元と統合先のカナ氏名をチェックするかどうかを設定します。
数値 1 - ● 1：チェックする
2：チェックしない
※次頁へ続く
116/129 Copyright ©NTT DATA CORPORATION

---

## Page 117

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 統合
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
生年月日チェックフラグ BIRTHDAY_CHECK_FLAG 統合元と統合先の生年月日をチェックするかどうかを設定します。
数値 1 - ● 1：チェックする
2：チェックしない
性別チェックフラグ SEIBETSU_CHECK_FLAG 統合元と統合先の性別をチェックするかどうかを設定します。
数値 1 - ● 1：チェックする
2：チェックしない
郵便番号チェックフラグ POST_NO_CHECK_FLAG 統合元と統合先の郵便番号をチェックするかどうかを設定します。
数値 1 - ● 1：チェックする
2：チェックしない
電話番号チェックフラグ TEL_NO_CHECK_FLAG 統合元と統合先の電話番号をチェックするかどうかを設定します。
数値 1 - ● 1：チェックする
2：チェックしない
メールアドレスチェックフラグ MAIL_ADDRESS_CHECK_FLAG 統合元と統合先のメールアドレスをチェックするかどうかを設定します。
数値 1 - ● 1：チェックする
2：チェックしない
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 - 操作者の利用者コードを設定します。
117/129 Copyright ©NTT DATA CORPORATION

---

## Page 118

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 統合
3. 返信パラメータ
※統合処理区分 1：属性統合及びサービス統合、2：属性統合、3：サービス統合
項目 ※ タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
1 2 3 データ型 （byte） 対象 A B C
IFバージョン情報 ● ● ●IF_VERSION_INFO
IFバージョン ● ● ● IF_VERSION 数値 2,1 ● ● ● 要求の値がそのまま設定されます。
事業者情報 ● ● ●JIGYOSHA_INFO
事業者コード ● ● ● JIGYOSHA_CD 半角英数 64 ● ● ● 要求の値がそのまま設定されます。
要求元情報 ● ● ●YOKYUMOTO_INFO
要求元チャネル識別 ● ● ● CHANEL_SHIKIBETSU 数値 3 ● ● ● 要求の値がそのまま設定されます。
外部接続ヘダー ● ● ●EXTERNALHDR
機能コード ● ● ● KINO_CD 半角英数 3 ● ● ● 要求の値がそのまま設定されます。
処理情報 ● ● ● SHORI_INFO
統合処理区分 ● ● ● TOGO_SHORI_KUBUN 数値 1 ● ● ● 要求の値がそのまま設定されます。
統合元停止区分 ● ● ● TOGOMOTO_TEISHI_KUBUN 数値 1 ● ● ● 要求の値がそのまま設定されます。
ステータス情報 ● ● ● STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号（統合元）が未登録の場合に返します。
21：会員番号未登録（統合元、要求項目の会員番号）
・会員番号（統合先）が未登録の場合に返します。
22：会員番号未登録（統合先、要求項目の会員番号（統合先））
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・統合処理区分が「3:サービス統合」の場合に、統合先と統合元のサービスが一致しない場合に返します。
● ● ● 数値 2 ● ● ●
30：サービスグループ不整合
・統合先と統合元の属性が不一致の場合に返します。
32：会員属性不一致
・統合先と統合元が既に統合済みの場合（同一統合顧客番号に紐づいている場合）に返します。
33：統合済み
・統合処理区分が「1：属性統合およびサービス統合」もしくは「2：属性統合」の場合で、統合後に有効なWEB会員が複数存在してしま
う状態の場合に返します。
39：WEB会員統合時の状態異常
・会員番号（統合元）が統合処理できない状態の場合に返します。
73：統合元の会員番号の状態異常
・会員番号（統合先）が統合処理できない状態の場合に返します。
74：統合先の会員番号の状態異常
・会員番号（統合元）と会員番号（統合先）が統合処理できない状態の場合に返します。
75：統合元の会員番号および統合先の会員番号の状態異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 ● ● ● KAIIN_INFO
会員番号識別 ● ● ● KAIIN_NO_SHIKIBETSU 数値 2 ● ● ● 要求の値がそのまま設定されます。
会員番号 ● ● ● KAIIN_NO 数値(条) 20 ● ● ● 要求の値がそのまま設定されます。
会員ステータス KAIIN_STATUS 統合元に設定した会員番号の最新の会員ステータスが設定されます。
● ● ● 数値 1 ● ● 0：正常、7：無効カード（復旧可）、8：無効カード（復旧不可）
※次頁へ続く
118/129 Copyright ©NTT DATA CORPORATION

---

## Page 119

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 統合
※統合処理区分 1：属性統合及びサービス統合、2：属性統合、3：サービス統合
項目 ※ タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
1 2 3 データ型 （byte） 対象 A B C
会員ステータス理由コード KAIIN_STATUS_RIYU_CD 統合元に設定した会員番号の最新の会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
● ● ● 数値 4 ● ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
会員番号種別名称 ● ● ● KAIIN_NO_SHUBETSU_NAME 全半角文字 20 ● ● 統合元の会員の会員番号種別名称（カード名称など）を設定します。
会員番号識別（統合先） ● ● ● KAIIN_NO_SHIKIBETSU_AFTER 数値 2 ● ● ● 要求の値がそのまま設定されます。
会員番号（統合先） ● ● ● KAIIN_NO_AFTER 数値(条) 20 ● ● ● 要求の値がそのまま設定されます。
会員ステータス（統合先） KAIIN_STATUS_AFTER 統合先に設定した会員番号の最新の会員ステータスが設定されます。
● ● ● 数値 1 ● ● 0：正常、7：無効カード（復旧可）、8：無効カード（復旧不可）
会員ステータス理由コード（統合先） KAIIN_STATUS_RIYU_CD_AFTER 統合先に設定した会員番号の最新の会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
● ● ● 数値 4 ● ●
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
会員番号種別名称（統合先） ● ● ● KAIIN_NO_SHUBETSU_NAME_AFTER 全半角文字 20 ● ● 統合先の会員の会員番号種別名称（カード名称など）を設定します。
属性チェック結果情報 ● ● ● ZOKUSEI_CHECK_RESULT_INFO
氏名一致フラグ KOKYAKU_NAME_EQUAL_FLAG 属性のチェック結果が設定されます。
1 ：一致
● ● ● 数値 1 ● ●
2 ：不一致
9 ：チェックなし
カナ氏名一致フラグ KOKYAKU_KANA_NAME_EQUAL_FLAG 属性のチェック結果が設定されます。
1 ：一致
● ● ● 数値 1 ● ●
2 ：不一致
9 ：チェックなし
生年月日一致フラグ BIRTHDAY_EQUAL_FLAG 属性のチェック結果が設定されます。
1 ：一致
● ● ● 数値 1 ● ●
2 ：不一致
9 ：チェックなし
性別一致フラグ SEIBETSU_EQUAL_FLAG 属性のチェック結果が設定されます。
1 ：一致
● ● ● 数値 1 ● ●
2 ：不一致
9 ：チェックなし
郵便番号一致フラグ POST_NO_EQUAL_FLAG 属性のチェック結果が設定されます。
1 ：一致
● ● ● 数値 1 ● ●
2 ：不一致
9 ：チェックなし
※次頁へ続く
119/129 Copyright ©NTT DATA CORPORATION

---

## Page 120

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 統合
※統合処理区分 1：属性統合及びサービス統合、2：属性統合、3：サービス統合
項目 ※ タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
1 2 3 データ型 （byte） 対象 A B C
電話番号一致フラグ TEL_NO_EQUAL_FLAG 属性のチェック結果が設定されます。
1 ：一致
● ● ● 数値 1 ● ●
2 ：不一致
9 ：チェックなし
メールアドレス一致フラグ MAIL_ADDRESS_EQUAL_FLAG 属性のチェック結果が設定されます。
1 ：一致
● ● ● 数値 1 ● ●
2 ：不一致
9 ：チェックなし
サービス情報 ● ● SERVICE_INFO 8
取引利用可能ポイント ● ● TORIHIKI_RIYO_KANO_POINT 数値 - ● 利用可能な総ポイントが設定されます。ポイント残高がマイナス残高の場合、マイナス値となります。
サービスグループ情報 ● ● SG_INFO （対象のサービスグループの数だけ繰り返し。）
サービスグループコード ● ● SG_CD 半角英数 3 ● サービスグループのコードが設定されます。
サービスグループ略称 ● ● SG_RYAKUSHO 全半角文字 20 ● サービスグループの表示名称が設定されます。
ポイント情報 ● ● POINT_INFO
サービスグループ別利用可能ポイント● ● SG_RIYO_KANO_POINT 数値 8 ● サービスグループ別の利用可能なポイント数が設定されます。
サービスグループ別通常ポイント ● ● SG_TSUJO_POINT 数値 8 ● サービスグループ別の通常ポイントのポイント数が設定されます。
通常ポイント内訳情報 ● ● TSUJO_POINT_UCHIWAKE_INFO (利用可能なポイントの有効期限ごとに繰り返し。)
有効期限 ● ● YUKO_KIGEN 数値 YYYYMMDD 8 ● 該当の通常ポイントの有効期限が設定されます。
有効期限別ポイント ● ● YUKO_KIGEN_POINT 数値 8 ● 該当の通常ポイントの有効期限の利用可能ポイントが設定されます。
サービスグループ別期間限定ポイント● ● SG_KIGEN_POINT 数値 6 ● サービスグループ別の期間限定ポイントのポイント数が設定されます。
期間限定ポイント内訳情報 ● ● KIGEN_POINT_UCHIWAKE_INFO (利用可能なポイントの有効期限ごとに繰り返し。)
有効期限 ● ● YUKO_KIGEN 数値 YYYYMMDD 8 ● 該当の期間限定ポイントの有効期限が設定されます。
有効期限別ポイント ● ● YUKO_KIGEN_POINT 数値 6 ● 該当の期間限定ポイントの有効期限の利用可能ポイントが設定されます。
ランク情報 ● ● RANK_INFO ※ランク制度を運用していない場合、本項目下の情報は設定されません。
今回使用ランクコード SHIYO_RANK_CD
● ● 数値 2 条 統合時点における会員のランクのランクコードが設定されます。
今回使用ランク名称 SHIYO_RANK_NAME
● ● 全半角文字 40 条 統合時点における会員のランクのランク名称が設定されます。
今回使用ランク倍率 SHIYO_RANK_BAIRITSU 統合時点における会員のランクのランク倍率が設定されます。
● ● 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
通常年ランク情報 ● ● RANK_YEAR_INFO ※通常年ランク制度を運用していない場合、本項目下の情報は設定されません。
当年ランク対象金額 RANK_TAISHO_KINGAKU_TONEN
● ● 数値 10 条 当年ランクの算出金額（＝前年の累計金額）が設定されます。
当年ランク名称 RANK_NAME_TONEN
● ● 全半角文字 40 条 当年ランクのランク名称が設定されます。
当年ランク倍率 RANK_BAIRITSU_TONEN 当年ランクのランク倍率が設定されます。
● ● 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
翌年ランク対象金額 RANK_TAISHO_KINGAKU_YOKUNE
● ● N 数値 10 条 翌年ランクの算出金額（＝当年の累計金額）が設定されます。
翌年ランク名称 RANK_NAME_YOKUNEN
● ● 全半角文字 40 条 翌年ランクのランク名称が設定されます
翌年ランク倍率 RANK_BAIRITSU_YOKUNEN 翌年ランクのランク倍率が設定されます。
● ● 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
翌年上位ランク必要金額 HIGH_RANK_HITSUYO_KINGAKU_Y
● ● OKUNEN 数値 10 条 翌年の上位ランクへランクアップするために必要な金額が設定されます。※1
翌年上位ランク名称 HIGH_RANK_NAME_YOKUNEN
● ● 全半角文字 40 条 翌年の上位ランク名称が設定されます。※1
翌年上位ランク倍率 HIGH_RANK_BAIRITSU_YOKUNEN 翌年の上位ランク倍率が設定されます。 ※1
● ● 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
通常月ランク情報 ● ● RANK_MONTH_INFO ※通常月ランク制度を運用していない場合、本項目下の情報は設定されません。
当月ランク対象金額 RANK_TAISHO_KINGAKU_TOGETSU
● ● 数値 10 条 当月ランクの算出金額（＝前月の累計金額、もしくは、スライド型の場合は期間累計）が設定されます。
当月ランク名称 RANK_NAME_TOGETSU
● ● 全半角文字 40 条 当月ランクのランク名称が設定されます。
当月ランク倍率 RANK_BAIRITSU_TOGETSU 当月ランクのランク倍率が設定されます。
● ● 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
翌月ランク対象金額 RANK_TAISHO_KINGAKU_YOKUGE
● ● TSU 数値 10 条 翌月ランクの算出金額（＝当月の累計金額、もしくは、スライド型の場合は期間累計）が設定されます。
翌月ランク名称 RANK_NAME_YOKUGETSU
● ● 全半角文字 40 条 翌月ランクのランク名称が設定されます
翌月ランク倍率 RANK_BAIRITSU_YOKUGETSU 翌月ランクのランク倍率が設定されます。
● ● 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
※次頁へ続く ※1：特異なケース（ランクの確定時期と、適用期間に隔たりがあるケース）において、
翌年ではなく、"翌々年"の上位ランク情報を返送します。（詳細は、P10.ポイント照会の"翌年上位ランク"の説明を参照）
120/129 Copyright ©NTT DATA CORPORATION

---

## Page 121

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 統合
※処理区分 1：属性統合及びサービス統合、2：属性統合、3：サービス統合
項目 ※ タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
1 2 3 データ型 （byte） 対象 A B C
翌月上位ランク必要金額 HIGH_RANK_HITSUYO_KINGAKU_Y
● ● OKUGETSU 数値 10 条 翌月の上位ランクへランクアップするために必要な金額が設定されます。
翌月上位ランク名称 HIGH_RANK_NAME_YOKUGETSU
● ● 全半角文字 40 条 翌月の上位ランク名称が設定されます
翌月上位ランク倍率 HIGH_RANK_BAIRITSU_YOKUGETSU 翌月の上位ランク倍率が設定されます。
● ● 数値 3,1 条 （整数部2桁、小数部1桁とする。例：2.0、2.5）
取引情報 ● ● ● TORIHIKI_INFO
取引日付 ● ● ● TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● ● 要求の値がそのまま設定されます。
取引時刻 ● ● ● TORIHIKI_TIME 数値 HHMMSS 6 ● ● ● 要求の値がそのまま設定されます。
組織識別区分 ● ● ● SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
● ● ● 半角英数 20 条 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
● ● ● 半角英数 20 条 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
● ● ● 半角英数 20 条 条 条 要求の値がそのまま設定されます。
端末番号 ● ● ● TERM_NO 半角英数 20 ● ● ● 要求の値がそのまま設定されます。
操作者情報 ● ● ● SOSASHA_INFO
操作者コード ● ● ● SOSASHA_CD 半角英数 10 ● ● ● 要求の値がそのまま設定されます。
エラー情報 ● ● ● ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：22 「入力頂いた処理先の会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
● ● ● 全半角文字 500 ● ● ・処理ステータス：30 「入力頂いた2つの会員番号のサービスが一致しないため処理できません。」
・処理ステータス：32 「属性不一致のため統合できません。」
・処理ステータス：33 「既に統合済みの会員番号同士のため統合できません。」
・処理ステータス：39 「複数の有効なWEB会員の統合はできません。」
・処理ステータス：７3 「統合元の会員番号は処理できない状態です。」
・処理ステータス：74 「統合先の会員番号は処理できない状態です。」
・処理ステータス：75 「統合元の会員番号および統合先の会員番号は処理できない状態です。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 30、32、33、39、73、74、75 会員ステータス不備、統合条件不備
C 20、21、22、23、24、25、90 異常
121/129 Copyright ©NTT DATA CORPORATION

---

## Page 122

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員ステータス変更
C50. 会員ステータス変更
1. 処理概要
・ 盗難紛失時や汚破損時に停止したい場合など、会員の会員ステータスを変更します。
・ 会員ステータス変更のイベント毎に会員ステータスを変更するための条件があり、以下の通りとなります。
変更要求前の会員ステータス 2000 2001 3001 3002 3003 8001 8002 8003 8004 8101 8102 8201 8202 8901 9001 9002 9003
会員ステータス変更のイベント 未使用 利用可 (盗難 制 ・ 限 紛失) (汚損 制 ・ 限 破損) (そ 制 の 限 他) (再発行： 不 盗 可 難・紛失) (再発行： 不 汚 可 損・破損) (再発行 不 ： 可 その他) (利用停 不 止 可 ・再発行) (統 不 合 可 ) (利用停 不 止 可 ・統合) (切 不 替 可 ) (利用停 不 止 可 ・切替) (利用停 不 止 可 ・その他) (退会：お 不 客 可 様申請) (退会 不 ：そ 可 の他) (退会：制 不 度 可 により自動)
盗難・紛失による制限登録 ○ ○ × ○ ○ × × × × × × × × × × × ×
盗難・紛失による制限登録解除 × × ○ × × × × × × × × × × × × × ×
その他理由による制限登録 ○ ○ × × × × × × × × × × × × × × ×
その他理由による制限登録解除 × × × × ○ × × × × × × × × × × × ×
再発行による不可登録 ○ ○ ○ ○ ○ × × × × × × × × × × × ×
統合による不可登録 ○ ○ ○ ○ ○ × × × × × × × × × × × ×
切替による不可登録 ○ ○ ○ ○ ○ × × × × × × × × × × × ×
その他理由による不可登録 ○ ○ ○ ○ ○ × × × × × × × × × × × ×
・ 会員ステータス変更処理による変更後の会員ステータスは以下の通りとなります。
会員ステータス変更のイベント 更新後の会員ステータスのイベント
盗難・紛失による制限登録 3001：制限(盗難・紛失)へ更新
盗難・紛失による制限登録解除 2001：利用可へ更新
その他理由による制限登録 3003：制限(その他)へ更新
その他理由による制限登録解除 2001：利用可へ更新
再発行による不可登録 8004：不可(利用停止・再発行)
統合による不可登録 8102：不可(利用停止・統合)
切替による不可登録 8202：不可(利用停止・切替)
その他理由による不可登録 8901：不可(利用停止・その他)
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C50 "を設定します。
処理情報 SHORI_INFO
会員ステータス変更要求 KAIIN_STATUS_HENKO_YOKYU
変更する会員ステータスを設定します。
1：盗難・紛失による制限登録
2：盗難・紛失による制限解除
3：その他理由による制限登録
数値 2 - ● 4：その他理由による制限解除
5：再発行による不可登録
6：統合による不可登録
7：切替による不可登録
8：その他理由による不可登録、WEB会員の停止登録
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
※次頁へ続く
122/129 Copyright ©NTT DATA CORPORATION

---

## Page 123

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員ステータス変更
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN
要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
操作者情報 SOSASHA_INFO - -
操作者コード SOSASHA_CD 半角英数 10 - 操作者の利用者コードを設定します。
123/129 Copyright ©NTT DATA CORPORATION

---

## Page 124

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員ステータス変更
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● ● 要求の値がそのまま設定されます。
処理情報 SHORI_INFO
会員ステータス変更要求 KAIIN_STATUS_HENKO_YOKYU 数値 2 ● ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・会員ステータス変更要求が「1：盗難・紛失による制限登録」で変更できない状態の場合に返します。
51：盗難・紛失による制限登録への状態異常
数値 2 ● ● ● ・会員ステータス変更要求が「2：盗難・紛失による制限解除」で変更できない状態の場合に返します。
52：盗難・紛失による制限解除への状態異常
・会員ステータス変更要求が「3：その他理由による制限登録」で変更できない状態の場合に返します。
53：その他理由による制限登録への状態異常
・会員ステータス変更要求が「4：その他理由による制限解除」で変更できない状態の場合に返します。
54：その他理由による制限解除への状態異常
・会員ステータス変更要求が「5：再発行による不可登録」で変更できない状態の場合に返します。
55：再発行による不可登録への状態異常
・会員ステータス変更要求が「6：統合による不可登録」で変更できない状態の場合に返します。
56：統合による不可登録への状態異常
・会員ステータス変更要求が「7：切替による不可登録」で変更できない状態の場合に返します。
57：切替による不可登録への状態異常
・会員ステータス変更要求が「8：その他理由による不可登録」で変更できない状態の場合に返します。
58：その他理由による不可登録への状態異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● ● 要求の値がそのまま設定されます。
会員ステータス KAIIN_STATUS 要求の会員番号に紐づく会員ステータスが設定されます。
数値 1 ● ● 0：正常、7：無効カード（復旧可）、8：無効カード（復旧不可）
※次頁へ続く
124/129 Copyright ©NTT DATA CORPORATION

---

## Page 125

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 会員ステータス変更
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
会員ステータス理由コード KAIIN_STATUS_RIYU_CD
要求の会員番号に紐づく会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ● ● 8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● ● 要求の値がそのまま設定されます。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 ● ● ● 要求の値がそのまま設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：51 「盗難・紛失による制限登録ができない状態です。」
全半角文字 500 ● ● ・処理ステータス：52 「盗難・紛失による制限解除ができない状態です。」
・処理ステータス：53 「その他理由による制限登録ができない状態です。」
・処理ステータス：54 「その他理由による制限解除ができない状態です。」
・処理ステータス：55 「再発行による不可登録ができない状態です。」
・処理ステータス：56 「統合による不可登録ができない状態です。」
・処理ステータス：57 「切替による不可登録ができない状態です。」
・処理ステータス：58 「その他理由による不可登録ができない状態です。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 51、52、53、54、55、56、57、58 会員ステータス不備
C 20、21、23、24、25、90 異常
125/129 Copyright ©NTT DATA CORPORATION

---

## Page 126

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 退会
C51. 退会
1. 処理概要
・ 会員の退会を行います。
・ 退会するための会員ステータスの条件があり、以下の通りとなります。
変更要求前の会員ステータス 2000 2001 3001 3002 3003 8001 8002 8003 8004 8101 8102 8201 8202 8901 9001 9002 9003
会員ステータス変更のイベント 未使用 利用可 (盗難 制 ・ 限 紛失) (汚損 制 ・ 限 破損) (そ 制 の 限 他) (再発行： 不 盗 可 難・紛失) (再発行： 不 汚 可 損・破損) (再発行 不 ： 可 その他) (利用停 不 止 可 ・再発行) (統 不 合 可 ) (利用停 不 止 可 ・統合) (切 不 替 可 ) (利用停 不 止 可 ・切替) (利用停 不 止 可 ・その他) (退会：お 不 客 可 様申請) (退会 不 ：そ 可 の他) (退会：制 不 度 可 により自動)
更新要求 ○ ○ ○ ○ ○ × × × × × × × × × × × ×
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 必須
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "C51"を設定します。
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 1 ● 会員番号識別を設定します。
会員番号 KAIIN_NO 数値(条) 20 - ● 会員番号を設定します。
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 - ● トランザクション発生時の日付を設定します。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 - ● トランザクション発生時の時間を設定します。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 要求元の組織の引当キーを設定します。
1：要求組織キー
数値 1 1 ●
2：端末番号
※要求組織キーを設定できない場合は、「2：端末番号」を設定して頂きますが、CEに端末登録が必要となります。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は必須で設定してください。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 - 条 組織識別区分が「1：要求組織キー」の場合は設定してください。要求組織キー2以降は省略することも可能です。
端末番号 TERM_NO 組織識別区分が「2：端末番号」の場合は設定してください。
半角英数 20 0 ●
それ以外場合は、デフォルト値「0」を設定します。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 - 操作者の利用者コードを設定します。
126/129 Copyright ©NTT DATA CORPORATION

---

## Page 127

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 退会
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無※ 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了の場合に返します。
0：正常終了
・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・会員番号が未登録の場合に返します。
21：会員番号未登録
・要求の組織識別区分が「1:組織キー」の場合で要求組織キーがマスタに存在しない場合に返します。
数値 2 ● ● 23：組織未登録
・要求の組織識別区分が「2:端末番号」の場合で端末番号がマスタに存在しない場合に返します。
24：端末未登録
・要求の組織で会員が会員情報を操作できない場合に返します。
25：会員管理グループ異常
・会員番号が退会処理できない状態の場合に返します。
76：退会への状態異常
・DB障害などの場合に返します。
90：サーバ内部エラー
会員情報 KAIIN_INFO
会員番号識別 KAIIN_NO_SHIKIBETSU 数値 2 ● ● 要求の値がそのまま設定されます。
会員番号 KAIIN_NO 数値(条) 20 ● ● 要求の値がそのまま設定されます。
会員ステータス KAIIN_STATUS 要求の会員番号に紐づく会員ステータスが設定されます。
数値 1 ● 条 0：正常、7：無効カード（復旧可）、8：無効カード（復旧不可）
会員ステータス理由コード KAIIN_STATUS_RIYU_CD
要求の会員番号に紐づく会員ステータス理由コードが設定されます。
2000：未使用
2001：利用可
3001：制限(盗難・紛失)
3002：制限(汚損・破損)
3003：制限(その他)
8001：不可(再発行：盗難・紛失)
8002：不可(再発行：汚損・破損)
8003：不可(再発行：その他)
数値 4 ● 条
8004：不可(利用停止・再発行)
8101：不可(統合)
8102：不可(利用停止・統合)
8201：不可(切替)
8202：不可(利用停止・切替)
8901：不可(利用停止・その他)
9001：不可(退会：お客様申請)
9002：不可(退会：その他)
9003：不可(退会：制度により自動)
取引情報 TORIHIKI_INFO
取引日付 TORIHIKI_DATE 数値 YYYYMMDD 8 ● ● 要求の値がそのまま設定されます。
取引時刻 TORIHIKI_TIME 数値 HHMMSS 6 ● ● 要求の値がそのまま設定されます。
組織識別区分 SOSHIKI_SHIKIBETSU_KUBUN 数値 1 ● ● 要求の値がそのまま設定されます。
要求組織キー1 SOSHIKI_KEY_1
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー2 SOSHIKI_KEY_2
半角英数 20 条 条 要求の値がそのまま設定されます。
要求組織キー3 SOSHIKI_KEY_3
半角英数 20 条 条 要求の値がそのまま設定されます。
端末番号 TERM_NO 半角英数 20 ● ● 要求の値がそのまま設定されます。
操作者情報 SOSASHA_INFO
操作者コード SOSASHA_CD 半角英数 10 ● ● 要求の値がそのまま設定されます。
※次頁へ続く
127/129 Copyright ©NTT DATA CORPORATION

---

## Page 128

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 退会
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無※ 説明
データ型 （byte） 対象 A B C
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：21 「入力頂いた会員番号は存在しません。」
・処理ステータス：23 「ご利用の組織情報は登録されておりません。」
全半角文字 500 ● ・処理ステータス：24 「ご利用の端末情報は登録されておりません。」
・処理ステータス：25 「入力頂いた会員番号はご利用の端末では顧客情報を操作できません。」
・処理ステータス：76 「退会できない状態です。」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、21、23、24、25、76、90 異常
C
128/129 Copyright ©NTT DATA CORPORATION

---

## Page 129

システム名 分類 API名
インターフェース仕様書
CAFIS Explorer オンラインAPI 稼働確認
S10. 稼働確認
1. 処理概要
・ 「CAFIS Explorer」が応答可能かどうか、稼働状況を取得します。
・ 端末から要求するとトランザクション数が多くなるため、出来るだけPOSサーバなど、集約サーバから要求してください。
2. 要求パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 既定値 設定 説明
データ型 （byte） 対象 要否
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION ＩＦのバージョンを設定します。IFバージョンは別途お伝えします。
数値 2,1 1.0 ●
（整数部1桁、小数部1桁とする。例：1.2[ver]）
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 - ● 事業者を識別する暗号化されたコードを設定します。CEから事業者毎にお伝えします。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 要求元チャネル識別とは外部システムを識別するコードです。
数値 3 - ●
CEから事業者毎にお伝えする値を設定します。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 - ● "Ｓ10"を設定します。
3. 返信パラメータ
項目 タグ名 論理 書式 最大桁数 暗号化 返信有無 説明
データ型 （byte） 対象 A B C
IFバージョン情報 IF_VERSION_INFO
IFバージョン IF_VERSION 数値 2,1 ● ● 要求の値がそのまま設定されます。
事業者情報 JIGYOSHA_INFO
事業者コード JIGYOSHA_CD 半角英数 64 ● ● 要求の値がそのまま設定されます。
要求元情報 YOKYUMOTO_INFO
要求元チャネル識別 CHANEL_SHIKIBETSU 数値 3 ● ● 要求の値がそのまま設定されます。
外部接続ヘダー EXTERNALHDR
機能コード KINO_CD 半角英数 3 ● ● 要求の値がそのまま設定されます。
ステータス情報 STATUS_INFO
処理ステータス SHORI_STATUS
要求に対する処理結果を表すステータスが設定されます。
・正常終了（サーバと応答できた）の場合に返します。
0：正常終了
数値 2 ● ● ・要求項目の必須項目が無い場合や設定値にシステム的な異常がある場合に返します。
20：要求項目異常
・DB障害などの場合に返します。
90：サーバ内部エラー
稼働サーバ情報 KADO_SERVER_INFO
稼働確認サーバ SERVER_NO
数値 1 ● 稼動確認を処理したサーバ番号が設定されます。
エラー情報 ERROR_INFO
エラーメッセージ ERROR_MESSAGE
処理ステータス≠0の場合、エラーメッセージを設定します。
全半角文字 500 ● ・処理ステータス：20 「入力頂いた内容に不備があります。(項目① 項目②・・・)」
・処理ステータス：90 「現在、お取扱できません。ポイントセンタでの受付を休止しています。」
●： 必須
条： 条件付き必須 （説明に条件を記載）
処理ステータス 備考 空欄： 返信なし
A 0 正常
B 20、90 異常
C
129/129 Copyright ©NTT DATA CORPORATION

---
