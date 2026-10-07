/* Bài 5 — Lặp while: while, điều kiện dừng, lặp vô hạn, nhập lại tới khi hợp lệ, break/continue, random
   Nhiệm vụ studio: Trò đoán số. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, soDo, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai05", number: 5,
  title: "Lặp while",
  story: "Trò đoán số",
  skills: ["while", "Điều kiện dừng", "Tránh lặp vô hạn", "Nhập lại tới khi hợp lệ", "break · continue", "random.randint()"],

  errorTable: [
    ["Chạy quá 3 giây / máy treo", "Lặp vô hạn: điều kiện luôn True vì biến không được cập nhật", "Trong thân while phải có lệnh làm điều kiện dần thành False"],
    ["Lặp vô hạn dù có lệnh cập nhật", "Lệnh cập nhật không thụt lề — nằm ngoài vòng lặp", "Thụt lệnh cập nhật vào trong thân while"],
    ["Vòng lặp không chạy lần nào", "Điều kiện sai ngay từ đầu", "Kiểm tra giá trị khởi tạo của biến"],
    ["Lặp vô hạn với điều kiện != ", "<code>while x != 0</code> nhưng x nhảy qua 0 (ví dụ 10, -10…)", "Dùng <code>&gt;</code> hoặc <code>&lt;</code> thay cho <code>!=</code>"],
    ["NameError: name 'random' is not defined", "Quên <code>import random</code>", "Thêm <code>import random</code> ở đầu file"],
    ["SyntaxError: 'break' outside loop", "<code>break</code> không nằm trong vòng lặp", "Đặt break bên trong thân while/for"],
    ["Thiếu dữ liệu nhập", "Vòng lặp gọi input() nhiều lần hơn số dòng ở ô nhập", "Thêm dòng nhập, hoặc kiểm tra điều kiện dừng"],
    ["SyntaxError: expected ':'", "Thiếu <code>:</code> cuối dòng while", "<code>while mau &gt; 0:</code>"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "Lệnh while",
      kicker: "CHẶNG 1 · LẶP KHI ĐIỀU KIỆN CÒN ĐÚNG",
      title: "while: lặp khi chưa biết trước số lần",
      nova: "Trò chơi cứ chạy <b>cho đến khi</b> người chơi đoán đúng — ai biết trước là mấy lượt? Khi không biết trước số lần lặp, ta dùng <b>while</b>.",
      objectives: ["Viết vòng lặp while", "Đọc sơ đồ khối của while", "Phân biệt khi nào dùng for, khi nào dùng while"],
      lesson: `
        <div class="duo">${soDo("while", "xu < 100", "xu = xu * 2", "", "Sơ đồ khối của while")}
          <div>${codeVaManHinh(`xu = 10
ngay = 0
while xu < 100:
    xu = xu * 2
    ngay += 1
print("Sau", ngay, "ngay co", xu, "xu")`, "Sau 4 ngay co 160 xu", "nhan_doi.py")}</div></div>
        ${giaiMa("Giải mã vòng while", [
          { code: "while xu < 100:", y: "Kiểm tra điều kiện; <b>còn True</b> thì chạy thân vòng lặp, rồi <b>quay lại kiểm tra</b>.", nhan: true },
          { code: "    xu = xu * 2", y: "Lệnh <b>cập nhật</b> làm điều kiện thay đổi — thiếu nó, vòng lặp chạy mãi." },
          { code: "điều kiện False", y: "Thoát vòng lặp, chạy lệnh sát lề phía sau." }
        ])}
        <table class="plain"><thead><tr><th>Vòng</th><th>Kiểm tra xu &lt; 100</th><th>xu sau vòng</th><th>ngay</th></tr></thead><tbody>
          <tr><td>1</td><td>10 &lt; 100 → True</td><td>20</td><td>1</td></tr><tr><td>2</td><td>20 &lt; 100 → True</td><td>40</td><td>2</td></tr>
          <tr><td>3</td><td>40 &lt; 100 → True</td><td>80</td><td>3</td></tr><tr><td>4</td><td>80 &lt; 100 → True</td><td>160</td><td>4</td></tr>
          <tr><td>—</td><td>160 &lt; 100 → <b>False</b></td><td colspan="2">thoát vòng lặp</td></tr></tbody></table>
        ${cuPhap({ ten: "VÒNG LẶP while",
          mau: "while ‹điều kiện›:\n    ‹thân vòng lặp›",
          quyTac: ["Điều kiện được kiểm tra <b>trước mỗi vòng</b>", "Thân vòng lặp phải có lệnh làm điều kiện <b>dần thành False</b>",
                   "Biết trước số lần lặp → dùng <code>for</code>; lặp <b>cho đến khi</b> điều gì đó xảy ra → dùng <code>while</code>"],
          viDu: "n = 1\nwhile n < 50:\n    n = n * 3\nprint(n)", man: "81" })}
        ${docThem([[W3("python_while_loops"), "W3Schools: While Loops"], [DOCS("reference/compound_stmts.html#while"), "Python docs: while"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Nhân ba đến khi vượt 20",
          prompt: "Lập bảng vết trong đầu nhé. Terminal hiện gì?",
          code: "n = 1\nwhile n < 20:\n    n = n * 3\nprint(n)",
          options: [
            { text: "9", why: "Sau khi n = 9, điều kiện 9 < 20 vẫn True nên lặp thêm một vòng." },
            { text: "20", why: "n luôn là luỹ thừa của 3: 1, 3, 9, 27…" },
            { text: "27" },
            { text: "3\n9\n27", why: "print nằm sát lề — chỉ chạy một lần sau vòng lặp." }
          ],
          answer: "27",
          why: "Đúng: 1 → 3 → 9 → 27; 27 < 20 là False nên dừng."
        },
        {
          id: "s1-code", type: "code",
          title: "Hồi máu đến khi đầy",
          prompt: "Nhập máu hiện tại; mỗi lượt hồi 15 máu cho tới khi máu <b>từ 100 trở lên</b>. In máu sau mỗi lượt và tổng số lượt.",
          requirements: ['Câu dẫn <code>"Mau hien tai: "</code>.', "Mỗi lượt in <code>Hoi mau -> …</code>.", "Dòng cuối: <code>Day mau sau … luot</code>."],
          starter: 'mau = int(input("Mau hien tai: "))\nluot = 0\n',
          tests: [{ input: "40", expected: "Mau hien tai: 40\nHoi mau -> 55\nHoi mau -> 70\nHoi mau -> 85\nHoi mau -> 100\nDay mau sau 4 luot" },
                  { input: "95", expected: "Mau hien tai: 95\nHoi mau -> 110\nDay mau sau 1 luot" },
                  { input: "100", expected: "Mau hien tai: 100\nDay mau sau 0 luot" }],
          rules: [{ test: c => co(c, "\\bwhile\\b"), msg: "Bài này dùng vòng lặp while." }],
          why: "Chuẩn cả ca máu đã đầy — while không chạy vòng nào.",
          hints: ["while mau < 100:", "Trong thân: mau += 15; luot += 1; in Hoi mau."]
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Dừng & vô hạn",
      kicker: "CHẶNG 2 · ĐIỀU KIỆN DỪNG",
      title: "Lặp vô hạn và nhập lại tới khi hợp lệ",
      nova: "Lỗi đáng sợ nhất của while là <b>lặp vô hạn</b>: game đứng hình. Web này tự dừng sau 3 giây để bảo vệ bạn — còn trong VS Code, bấm <b>Ctrl + C</b> ở terminal.",
      objectives: ["Nhận ra vòng lặp vô hạn", "Dùng while để bắt nhập lại", "Đặt lệnh cập nhật đúng chỗ"],
      lesson: `
        <div class="pair-view">${demo('mau = 50\nwhile mau > 0:\n    print("Mau:", mau)\nmau -= 20   # khong thut le!', "vo_han.py")}
          ${terminal("Mau: 50\nMau: 50\nMau: 50\nMau: 50\n... (không bao giờ dừng)")}</div>
        ${giaiMa("Ba nguyên nhân gây lặp vô hạn", [
          { code: "quên lệnh cập nhật", y: "Biến trong điều kiện không bao giờ thay đổi." },
          { code: "cập nhật nằm ngoài vòng", y: "Lệnh cập nhật <b>không thụt lề</b> nên chỉ chạy sau vòng lặp — mà vòng lặp không bao giờ kết thúc.", nhan: true },
          { code: "while x != 0:", y: "x nhảy qua 0 (ví dụ 50, 30, 10, −10…) nên không bao giờ <b>đúng bằng</b> 0. An toàn hơn: <code>while x &gt; 0:</code>", nhan: true }
        ])}
        ${khai("Nhập lại tới khi hợp lệ", `<p>Mẫu rất hay dùng: đọc dữ liệu, rồi <b>lặp chừng nào dữ liệu còn sai</b>.</p>`, "green")}
        ${codeVaManHinh(`level = int(input("Chon level (1-5): "))
while level < 1 or level > 5:
    print("Khong hop le, nhap lai!")
    level = int(input("Chon level (1-5): "))
print("Bat dau level", level)`, "Chon level (1-5): 9\nKhong hop le, nhap lai!\nChon level (1-5): 0\nKhong hop le, nhap lai!\nChon level (1-5): 3\nBat dau level 3", "nhap_lai.py", "9\n0\n3")}
        ${cuPhap({ ten: "MẪU NHẬP LẠI",
          mau: "‹biến› = ‹đọc dữ liệu›\nwhile ‹dữ liệu sai›:\n    ‹báo lỗi›\n    ‹biến› = ‹đọc lại›",
          quyTac: ["Điều kiện của while là điều kiện <b>sai</b> (còn sai thì còn hỏi)", "Bên trong vòng phải đọc lại dữ liệu — đó chính là lệnh cập nhật"] })}
        ${docThem([[W3("python_while_loops"), "W3Schools: While Loops"]])}
      `,
      challenges: [
        {
          id: "s2-loop", type: "choice", bet: true, mono: true,
          title: "Vòng nào chạy mãi?",
          prompt: "Trong 4 đoạn dưới đây, đoạn nào <b>lặp vô hạn</b>?",
          options: [
            { text: "x = 10\nwhile x > 0:\n    x -= 3", why: "x: 10, 7, 4, 1, −2 → dừng." },
            { text: "x = 10\nwhile x != 0:\n    x -= 3" },
            { text: "x = 1\nwhile x < 100:\n    x *= 2", why: "x: 1, 2, 4, … 128 → dừng." },
            { text: "x = 0\nwhile x < 0:\n    x -= 1", why: "Điều kiện sai ngay từ đầu — không chạy vòng nào." }
          ],
          answer: "x = 10\nwhile x != 0:\n    x -= 3",
          why: "Đúng: 10, 7, 4, 1, −2, −5… không bao giờ bằng 0. Dùng > thay cho != để an toàn."
        },
        {
          id: "s2-code", type: "code",
          title: "Chọn level hợp lệ",
          prompt: "Người chơi chọn level từ 1 đến 10. Nhập sai thì báo và hỏi lại cho tới khi đúng.",
          requirements: ['Câu dẫn <code>"Level (1-10): "</code> (cả lần đầu và các lần hỏi lại).', 'Sai: in <code>Khong hop le!</code>.', 'Cuối cùng in <code>Da chon level …</code>.'],
          starter: 'level = int(input("Level (1-10): "))\n',
          tests: [{ input: "0\n15\n7", expected: "Level (1-10): 0\nKhong hop le!\nLevel (1-10): 15\nKhong hop le!\nLevel (1-10): 7\nDa chon level 7" },
                  { input: "10", expected: "Level (1-10): 10\nDa chon level 10" }],
          rules: [{ test: c => co(c, "\\bwhile\\b"), msg: "Dùng while để hỏi lại." }],
          why: "Mẫu nhập lại chuẩn — game nào cũng cần để chống nhập bậy.",
          hints: ["while level < 1 or level > 10:", "Trong vòng: in Khong hop le! rồi đọc lại level."]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "8ECD5ED7",
      todo: ["Nghe thầy <b>chốt</b>: <code>while</code>, điều kiện dừng, lặp vô hạn, mẫu nhập lại.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Đếm chữ số",
          prompt: "Trong lúc chờ: nhập số nguyên dương n, đếm số chữ số của n bằng cách chia nguyên cho 10 tới khi n bằng 0.",
          requirements: ['Câu dẫn <code>"n = "</code>.', "Dùng while và <code>//= 10</code>."],
          starter: "",
          tests: [{ input: "2026", expected: "n = 2026\nSo chu so: 4" }, { input: "7", expected: "n = 7\nSo chu so: 1" }, { input: "1000000", expected: "n = 1000000\nSo chu so: 7" }],
          why: "Mỗi lần // 10 là bỏ đi chữ số cuối — mẹo xử lý số rất hay gặp.",
          hints: ["while n > 0:\n    n //= 10\n    dem += 1"]
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "break · continue",
      kicker: "CHẶNG 3 · BREAK · CONTINUE",
      title: "while True, break và continue",
      nova: "Vòng lặp game thật thường viết <b>while True</b> — chạy mãi cho tới khi có sự kiện “thoát”. Lệnh <b>break</b> là nút thoát, <b>continue</b> là nút “bỏ qua lượt này”.",
      objectives: ["Dùng while True + break", "Dùng continue bỏ qua một lượt", "Giới hạn số lần thử"],
      lesson: `
        ${giaiMa("Hai lệnh điều khiển vòng lặp", [
          { code: "break", y: "<b>Thoát ngay</b> khỏi vòng lặp gần nhất, chạy lệnh sau vòng lặp.", nhan: true },
          { code: "continue", y: "<b>Bỏ qua phần còn lại</b> của lượt này, quay lên kiểm tra/lặp lượt tiếp theo." },
          { code: "while True:", y: "Vòng lặp “vô hạn có chủ đích” — <b>bắt buộc</b> phải có <code>break</code> bên trong." }
        ])}
        ${codeVaManHinh(`while True:
    lenh = input("Lenh (q de thoat): ")
    if lenh == "q":
        break
    if lenh == "":
        continue
    print("Thuc hien:", lenh)
print("Tam biet!")`, "Lenh (q de thoat): nhay\nThuc hien: nhay\nLenh (q de thoat): \nLenh (q de thoat): ban\nThuc hien: ban\nLenh (q de thoat): q\nTam biet!", "vong_game.py", "nhay\n\nban\nq")}
        ${cuPhap({ ten: "while True · break · continue",
          mau: ["while True:\n    ‹…›\n    if ‹điều kiện thoát›:\n        break\n    ‹…›", "if ‹điều kiện bỏ qua›:\n    continue"],
          quyTac: ["break/continue chỉ dùng <b>bên trong</b> vòng lặp", "Cũng dùng được trong <code>for</code>", "Lạm dụng break làm code khó đọc — chỉ dùng khi có điều kiện thoát rõ ràng"],
          viDu: "for i in range(1, 10):\n    if i % 2 == 0:\n        continue\n    if i > 6:\n        break\n    print(i)", man: "1\n3\n5" })}
        ${docThem([[W3("python_while_loops"), "W3Schools: break / continue"], [DOCS("tutorial/controlflow.html#break-and-continue-statements"), "Python Tutorial — break and continue"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "break và continue",
          prompt: "Một vòng for có cả continue và break. Terminal hiện gì?",
          code: "for i in range(1, 8):\n    if i == 3:\n        continue\n    if i == 6:\n        break\n    print(i)",
          options: [
            { text: "1\n2\n4\n5" },
            { text: "1\n2\n4\n5\n7", why: "break ở i = 6 thoát hẳn vòng lặp — không có lượt i = 7." },
            { text: "1\n2", why: "continue chỉ bỏ qua lượt i = 3, không thoát vòng lặp." },
            { text: "1\n2\n3\n4\n5", why: "Lượt i = 3 gặp continue nên không tới lệnh print." }
          ],
          answer: "1\n2\n4\n5",
          why: "Chuẩn: continue bỏ qua 3, break dừng ở 6."
        },
        {
          id: "s3-code", type: "code",
          title: "Mật khẩu 3 lần",
          prompt: "Người chơi có tối đa <b>3 lần</b> nhập mật khẩu <code>py10</code>. Đúng: đăng nhập thành công. Sai đủ 3 lần: khoá tài khoản.",
          requirements: ['Câu dẫn <code>"Mat khau: "</code>; mỗi lần sai in <code>Sai mat khau!</code>.',
                         'Đúng: <code>Dang nhap thanh cong</code>; sai 3 lần: <code>Khoa tai khoan</code>.', "Dùng <code>break</code> khi đúng."],
          starter: "lan = 0\n",
          tests: [{ input: "abc\npy10", expected: "Mat khau: abc\nSai mat khau!\nMat khau: py10\nDang nhap thanh cong" },
                  { input: "a\nb\nc", expected: "Mat khau: a\nSai mat khau!\nMat khau: b\nSai mat khau!\nMat khau: c\nSai mat khau!\nKhoa tai khoan" },
                  { input: "py10", expected: "Mat khau: py10\nDang nhap thanh cong" }],
          rules: [{ test: c => co(c, "\\bbreak\\b"), msg: "Dùng break để thoát khi nhập đúng." }],
          why: "Chính xác cả 3 ca! Giới hạn số lần thử là kỹ thuật bảo mật cơ bản.",
          hints: ["while lan < 3: … nhập; nếu đúng thì in rồi break; nếu sai thì in và lan += 1",
                  "Sau vòng lặp: if lan == 3: in Khoa tai khoan"]
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "Số ngẫu nhiên",
      kicker: "CHẶNG 4 · THƯ VIỆN RANDOM",
      title: "random.randint(): may rủi trong game",
      nova: "Game không bất ngờ thì chán lắm! Thư viện <b>random</b> cho máy tung xúc xắc, chọn quái ngẫu nhiên, sinh số bí mật cho trò đoán số.",
      objectives: ["import random", "Dùng random.randint(a, b)", "Kết hợp while với số ngẫu nhiên"],
      lesson: `
        ${khai("Thư viện random", `<p>Dòng <code>import random</code> (đặt ở đầu file) nạp thư viện số ngẫu nhiên. Hàm <code>random.randint(a, b)</code> trả về một số nguyên ngẫu nhiên từ <code>a</code> đến <code>b</code> — <b>có tính cả a và b</b> (khác <code>range</code>).</p>`, "blue")}
        ${demo('import random\n\nxuc_xac = random.randint(1, 6)\nprint("Ban tung duoc", xuc_xac)', "xuc_xac.py", "mỗi lần chạy một kết quả")}
        ${khai("Vì sao kết quả trên web lặp lại?", `<p>Để chấm bài được, web cố định “hạt giống” (seed) của bộ sinh số ngẫu nhiên ở các bài tập có <code>random</code>: mỗi lần bấm Chạy, dãy số ngẫu nhiên giống hệt nhau. Trong VS Code, mỗi lần chạy sẽ ra kết quả khác.</p>`, "yellow")}
        ${cuPhap({ ten: "random.randint",
          mau: ["import random", "‹biến› = random.randint(‹a›, ‹b›)"],
          phan: [["‹a›, ‹b›", "số nguyên nhỏ nhất và lớn nhất có thể ra — <b>tính cả hai đầu</b>"]],
          quyTac: ["<code>import random</code> đặt ở đầu chương trình, một lần", "Gọi hàm bằng <code>random.</code> + tên hàm", "<code>randint(1, 6)</code> có thể ra 1, 2, 3, 4, 5 hoặc 6"] })}
        ${moRong("các hàm khác của random", `<p><code>random.choice(["kiem", "khien", "cung"])</code> chọn ngẫu nhiên một phần tử (Bài 6); <code>random.random()</code> cho số thực trong [0, 1) — dùng làm tỉ lệ rơi đồ: <code>if random.random() &lt; 0.1:</code> (10%).</p>`)}
        ${docThem([[W3("python_random_module"), "W3Schools: Random Module"], [DOCS("library/random.html"), "Python docs: random"]])}
      `,
      challenges: [
        {
          id: "s4-range", type: "choice", bet: true,
          title: "randint gồm những số nào?",
          prompt: "Lệnh <code>random.randint(1, 6)</code> có thể trả về những giá trị nào?",
          options: [
            { text: "Các số nguyên từ 1 đến 5", why: "randint tính cả hai đầu — khác range." },
            { text: "Các số nguyên từ 1 đến 6" },
            { text: "Các số nguyên từ 0 đến 6", why: "Số nhỏ nhất là a = 1." },
            { text: "Mọi số thực từ 1 đến 6", why: "randint chỉ trả về số nguyên." }
          ],
          answer: "Các số nguyên từ 1 đến 6",
          why: "Đúng! randint(a, b) gồm cả a và b."
        },
        {
          id: "s4-code", type: "code", seed: 2026,
          title: "Tung tới khi ra 6",
          prompt: "Tung xúc xắc (1–6) liên tục cho tới khi ra 6; in mỗi lần tung và tổng số lần. Web cố định seed nên kết quả lặp lại — miễn là bạn gọi <code>random.randint(1, 6)</code> đúng một lần mỗi lượt.",
          requirements: ["<code>import random</code>; không tự gọi <code>random.seed</code>.", "Mỗi lượt in <code>Tung: …</code>.", "Cuối cùng in <code>Ra 6 sau … lan</code>."],
          starter: "import random\n\n",
          expected: "Tung: 1\nTung: 3\nTung: 5\nTung: 5\nTung: 6\nRa 6 sau 5 lan",
          rules: [{ test: c => co(c, "random\\.randint\\(\\s*1\\s*,\\s*6\\s*\\)") && khongCo(c, "seed"), msg: "Dùng random.randint(1, 6) và không gọi random.seed." },
                  { test: c => co(c, "\\bwhile\\b"), msg: "Dùng vòng lặp while." }],
          why: "Vòng lặp “cho đến khi” kết hợp số ngẫu nhiên — nền tảng của mọi trò chơi may rủi.",
          hints: ["lan = 0\nwhile True:\n    x = random.randint(1, 6)\n    lan += 1\n    print(\"Tung:\", x)\n    if x == 6:\n        break"]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "8ABCD058",
      todo: ["Nghe thầy <b>chốt</b>: while True, break, continue, random.randint.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Cộng đến khi gặp 0",
          prompt: "Trong lúc chờ: nhập lần lượt các số (câu dẫn <code>So: </code>), dừng khi gặp 0; in tổng các số đã nhập.",
          requirements: ['Câu dẫn <code>"So: "</code>.', 'In <code>Tong: …</code>.'],
          starter: "",
          tests: [{ input: "5\n12\n3\n0", expected: "So: 5\nSo: 12\nSo: 3\nSo: 0\nTong: 20" }, { input: "0", expected: "So: 0\nTong: 0" }],
          why: "Số 0 ở đây là “lính canh” (sentinel) báo hiệu dừng.",
          hints: ["while True: x = int(input(\"So: \")); if x == 0: break; tong += x"]
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Vòng Lặp Vô Tận", kicker: "BOSS · BÀI 5",
      title: "Boss: Vòng Lặp Không Lối Thoát",
      bossName: "Vòng Lặp Không Lối Thoát",
      bossLine: "Vào đây rồi thì đừng mong thoát ra… trừ khi ngươi tìm được điều kiện dừng!",
      nova: "Boss này nhốt chương trình trong vòng lặp vô hạn. <b>Tự làm một mình</b> — nhớ: mọi vòng while cần một lối thoát.",
      objectives: ["Đếm số vòng của while", "Phá vòng lặp vô hạn", "Viết trò đoán số"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Chia đôi",
          prompt: "Biến <code>x</code> bị chia nguyên cho 2 đến khi còn 1. Terminal in ra số nào?",
          code: "x = 100\ndem = 0\nwhile x > 1:\n    x //= 2\n    dem += 1\nprint(dem)",
          options: [{ text: "5", why: "100 → 50 → 25 → 12 → 6 → 3 → 1: đếm số mũi tên." }, { text: "6" },
                    { text: "50", why: "dem đếm số vòng, không phải giá trị x." }, { text: "7", why: "Vòng lặp dừng khi x = 1 — không chia thêm." }],
          answer: "6",
          why: "Đòn chuẩn: 6 lần chia đôi."
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Phá vòng lặp vô hạn",
          prompt: "Chương trình trừ máu mỗi lượt 20 cho tới khi hết, nhưng nó bị kẹt. Sửa 3 con bọ.",
          requirements: ["Giữ giá trị ban đầu 50 và mỗi lượt trừ 20.", "Kết quả đúng như mẫu."],
          starter: 'mau = 50\nwhile mau != 0\n    print("Mau:", mau)\nmau -= 20\nprint("Game over")\n',
          expected: "Mau: 50\nMau: 30\nMau: 10\nGame over",
          bugs: [
            { label: "Thiếu dấu :", fixed: c => /while[^\n]*:\s*\n/.test(c) },
            { label: "!= không bao giờ sai", fixed: c => /while\s+mau\s*>\s*0/.test(c) },
            { label: "Cập nhật ngoài vòng", fixed: c => /\n {2,}mau -= 20/.test(c) }
          ],
          why: "Boss đã mất lối nhốt — nửa máu!",
          hints: ["Dấu : cuối while; đổi != 0 thành > 0.", "mau -= 20 phải thụt vào trong vòng lặp."]
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Đoán số bí mật",
          prompt: "Số bí mật là <b>37</b> (gán sẵn). Người chơi đoán đến khi đúng; mỗi lần gợi ý <code>Lon hon</code> hoặc <code>Nho hon</code>. Cuối cùng in số lần đoán.",
          requirements: ['<code>BI_MAT = 37</code>; câu dẫn <code>"Doan: "</code>.', "Đoán nhỏ hơn số bí mật: in <code>Lon hon</code>; lớn hơn: <code>Nho hon</code>.",
                         'Đúng: <code>Dung roi sau … lan doan!</code>', "Có ít nhất 1 comment."],
          starter: "BI_MAT = 37\n",
          tests: [{ input: "50\n25\n37", expected: "Doan: 50\nNho hon\nDoan: 25\nLon hon\nDoan: 37\nDung roi sau 3 lan doan!" },
                  { input: "37", expected: "Doan: 37\nDung roi sau 1 lan doan!" },
                  { input: "1\n99\n36\n38\n37", expected: "Doan: 1\nLon hon\nDoan: 99\nNho hon\nDoan: 36\nLon hon\nDoan: 38\nNho hon\nDoan: 37\nDung roi sau 5 lan doan!" }],
          rules: [{ test: c => co(c, "\\bwhile\\b"), msg: "Dùng vòng lặp while." }, { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment." }],
          why: "Vòng Lặp Không Lối Thoát đã bị phá! Thay 37 bằng random.randint(1, 100) là thành trò đoán số thật.",
          hints: ["lan = 0; while True: doan = int(input(\"Doan: \")); lan += 1", "if doan < BI_MAT: … elif doan > BI_MAT: … else: in rồi break"]
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Gửi xu lấy lãi",
          prompt: "Gửi xu vào ngân hàng game, mỗi năm lãi r%. Sau bao nhiêu năm số xu <b>ít nhất gấp đôi</b>?",
          requirements: ['Câu dẫn <code>"So xu: "</code> và <code>"Lai (%): "</code> (số thực).', 'In <code>Sau … nam</code>.'],
          starter: "",
          tests: [{ input: "1000\n7", expected: "So xu: 1000\nLai (%): 7\nSau 11 nam" }, { input: "500\n10", expected: "So xu: 500\nLai (%): 10\nSau 8 nam" },
                  { input: "200\n100", expected: "So xu: 200\nLai (%): 100\nSau 1 nam" }],
          why: "Quy tắc 72: 72 / 7 ≈ 10.3 năm — khớp với kết quả lặp của bạn.",
          hints: ["muc_tieu = xu * 2; while xu < muc_tieu: xu = xu * (1 + lai / 100); nam += 1"]
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: Số nguyên tố",
          prompt: "Nhập n ≥ 2; kiểm tra n có phải số nguyên tố (chỉ chia hết cho 1 và chính nó) bằng while và break.",
          requirements: ['Câu dẫn <code>"n = "</code>.', 'In <code>… la so nguyen to</code> hoặc <code>… khong phai so nguyen to</code>.'],
          starter: "",
          tests: [{ input: "17", expected: "n = 17\n17 la so nguyen to" }, { input: "21", expected: "n = 21\n21 khong phai so nguyen to" },
                  { input: "2", expected: "n = 2\n2 la so nguyen to" }, { input: "49", expected: "n = 49\n49 khong phai so nguyen to" }],
          rules: [{ test: c => co(c, "\\bwhile\\b") && co(c, "\\bbreak\\b"), msg: "Dùng while và break." }],
          why: "Chỉ cần thử ước tới căn bậc hai của n — mẹo tối ưu kinh điển.",
          hints: ["d = 2; nguyen_to = True; while d * d <= n: if n % d == 0: nguyen_to = False; break; d += 1"]
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: bốn thuật toán với while",
      nova: "Bốn thuật toán kinh điển dùng while — có cả thuật toán Euclid hơn 2000 năm tuổi. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("Mẹo xử lý chữ số: <code>n % 10</code> lấy chữ số cuối, <code>n // 10</code> bỏ chữ số cuối.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Số đảo ngược",
          prompt: "Nhập số nguyên dương n; in số đảo ngược các chữ số (dùng while, không đổi sang chuỗi).",
          requirements: ['Câu dẫn <code>"n = "</code>.', 'In <code>Dao nguoc: …</code>.'],
          starter: "",
          tests: [{ input: "1234", expected: "n = 1234\nDao nguoc: 4321" }, { input: "7", expected: "n = 7\nDao nguoc: 7" }, { input: "120", expected: "n = 120\nDao nguoc: 21" }],
          rules: [{ test: c => window.KIT.co(c, "\\bwhile\\b") && !/\bstr\s*\(|\[::-1\]/.test(window.PY.codeOnly(c)), msg: "Dùng while với % và //, không đổi sang chuỗi." }],
          why: "dao = dao * 10 + n % 10 — đẩy chữ số cuối sang số mới.",
          hints: ["dao = 0; while n > 0: dao = dao * 10 + n % 10; n //= 10"]
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Gốc số",
          prompt: "Cộng các chữ số của n; nếu kết quả còn nhiều hơn một chữ số thì cộng tiếp, đến khi còn một chữ số.",
          requirements: ['Câu dẫn <code>"n = "</code>.', 'In <code>Goc so: …</code>.'],
          starter: "",
          tests: [{ input: "9875", expected: "n = 9875\nGoc so: 2" }, { input: "5", expected: "n = 5\nGoc so: 5" }, { input: "99", expected: "n = 99\nGoc so: 9" }],
          why: "Hai vòng while lồng nhau: ngoài lặp đến khi còn 1 chữ số, trong cộng các chữ số.",
          hints: ["while n >= 10: … tính tổng chữ số của n vào s … n = s"]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Dãy Collatz",
          prompt: "Với n: chẵn thì chia 2, lẻ thì nhân 3 cộng 1; lặp đến khi n = 1. Nhập n, đếm số bước.",
          requirements: ['Câu dẫn <code>"n = "</code>.', 'In <code>So buoc: …</code>.'],
          starter: "",
          tests: [{ input: "6", expected: "n = 6\nSo buoc: 8" }, { input: "1", expected: "n = 1\nSo buoc: 0" }, { input: "27", expected: "n = 27\nSo buoc: 111" }],
          why: "Chưa ai chứng minh được dãy Collatz luôn về 1 — một bài toán mở nổi tiếng!",
          hints: ["while n != 1: if n % 2 == 0: n //= 2 else: n = 3 * n + 1; buoc += 1"]
        },
        {
          id: "x4", type: "code", level: 3,
          title: "UCLN và BCNN",
          prompt: "Nhập a, b nguyên dương. Tìm ước chung lớn nhất bằng thuật toán Euclid (thay (a, b) bằng (b, a % b) đến khi b = 0), rồi tính bội chung nhỏ nhất.",
          requirements: ['Câu dẫn <code>"a = "</code>, <code>"b = "</code>.', "Không dùng thư viện math."],
          starter: "",
          tests: [{ input: "12\n18", expected: "a = 12\nb = 18\nUCLN: 6\nBCNN: 36" }, { input: "7\n5", expected: "a = 7\nb = 5\nUCLN: 1\nBCNN: 35" },
                  { input: "20\n20", expected: "a = 20\nb = 20\nUCLN: 20\nBCNN: 20" }],
          rules: [{ test: c => !/import\s+math|gcd/.test(c), msg: "Tự cài thuật toán Euclid, không dùng math.gcd." }],
          why: "Thuật toán Euclid — một trong những thuật toán cổ nhất còn được dùng hằng ngày.",
          hints: ["Lưu tích a * b trước khi biến đổi.", "while b != 0: a, b = b, a % b", "BCNN = tích // UCLN"]
        }
      ]
    }
  ]
};
})();
