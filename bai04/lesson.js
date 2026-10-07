/* Bài 4 — Lặp for: for … in range(), range(start, stop, step), biến đếm, biến tổng, for + if
   Nhiệm vụ studio: Sinh từng đợt quái. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai04", number: 4,
  title: "Lặp for",
  story: "Sinh từng đợt quái",
  skills: ["for … in range()", "range(start, stop, step)", "Bảng vết biến lặp", "Biến đếm", "Biến tổng", "for kết hợp if"],

  errorTable: [
    ["SyntaxError: expected ':'", "Thiếu dấu <code>:</code> cuối dòng for", "<code>for i in range(5):</code>"],
    ["IndentationError: expected an indented block", "Thân vòng lặp không thụt lề", "Thụt vào 4 dấu cách"],
    ["Lặp thiếu một lần (lệch 1)", "<code>range(1, 10)</code> dừng ở 9 — <code>stop</code> không được tính", "Muốn tới 10: <code>range(1, 11)</code>"],
    ["Tổng chỉ bằng phần tử cuối", "Đặt <code>tong = 0</code> bên trong vòng lặp", "Khởi tạo biến tổng <b>trước</b> vòng lặp"],
    ["In kết quả nhiều lần", "Lệnh print tổng bị thụt vào trong vòng lặp", "Đưa print ra sát lề, sau vòng lặp"],
    ["Vòng lặp không chạy lần nào", "<code>range(10, 1)</code> đếm lên mà start &gt; stop", "Đếm ngược phải có bước âm: <code>range(10, 0, -1)</code>"],
    ["TypeError: 'float' object cannot be interpreted as an integer", "Truyền số thực vào range", "range chỉ nhận số nguyên: <code>int(...)</code>"],
    ["NameError: name 'i' is not defined", "Gõ sai tên biến lặp", "Dùng đúng tên đã viết sau <code>for</code>"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "Vì sao cần lặp",
      kicker: "CHẶNG 1 · LẶP VỚI SỐ LẦN BIẾT TRƯỚC",
      title: "for i in range(n): làm đi làm lại",
      nova: "Planet Py cần sinh <b>100 con quái</b>. Gõ 100 lệnh print thì quá mệt! Vòng lặp <b>for</b> giúp máy làm đi làm lại cho mình.",
      objectives: ["Viết for i in range(n)", "Lập bảng vết biến lặp", "Đếm số lần lặp"],
      lesson: `
        ${demo(`print("Sinh quai")
print("Sinh quai")
print("Sinh quai")
# ... con 97 dong nua?!`, "met_moi.py", "cách làm thủ công")}
        ${codeVaManHinh(`for i in range(3):
    print("Sinh quai so", i)`, "Sinh quai so 0\nSinh quai so 1\nSinh quai so 2", "vong_for.py")}
        ${giaiMa("Giải mã vòng for", [
          { code: "for i in range(3):", y: "Lặp <b>3 lần</b>; mỗi lần biến <code>i</code> nhận một giá trị: <code>0</code>, <code>1</code>, <code>2</code>.", nhan: true },
          { code: '    print("Sinh quai so", i)', y: "<b>Thân vòng lặp</b> — thụt vào 4 dấu cách, chạy ở mỗi lần lặp." },
          { code: "range(3)", y: "Dãy số <b>bắt đầu từ 0</b>, <b>dừng trước</b> 3 → 0, 1, 2 (3 số).", nhan: true }
        ])}
        <table class="plain"><thead><tr><th>Lần lặp</th><th>i</th><th>Terminal in thêm</th></tr></thead><tbody>
          <tr><td>1</td><td><code>0</code></td><td><code>Sinh quai so 0</code></td></tr><tr><td>2</td><td><code>1</code></td><td><code>Sinh quai so 1</code></td></tr>
          <tr><td>3</td><td><code>2</code></td><td><code>Sinh quai so 2</code></td></tr><tr><td colspan="3">Hết dãy → thoát vòng lặp, chạy lệnh sát lề tiếp theo.</td></tr></tbody></table>
        ${cuPhap({ ten: "VÒNG LẶP for",
          mau: "for ‹biến lặp› in range(‹n›):\n    ‹thân vòng lặp›",
          phan: [["‹biến lặp›", "thường đặt <code>i</code>; lần lượt nhận 0, 1, …, n − 1"], ["‹n›", "số lần lặp (số nguyên)"]],
          quyTac: ["Cuối dòng for có dấu <code>:</code>", "Thân vòng lặp thụt vào 4 dấu cách", "<code>range(n)</code> chạy <b>n lần</b>, i từ 0 đến n − 1"],
          viDu: 'for i in range(4):\n    print(f"Dot {i + 1}")', man: "Dot 1\nDot 2\nDot 3\nDot 4" })}
        ${doan("<code>for i in range(5):</code> chạy bao nhiêu lần? Lần cuối <code>i</code> bằng mấy?", "5 lần; lần cuối <code>i = 4</code> (vì bắt đầu từ 0).")}
        ${docThem([[W3("python_for_loops"), "W3Schools: For Loops"], [DOCS("tutorial/controlflow.html#for-statements"), "Python Tutorial — for Statements"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Bảng vết",
          prompt: "Vòng lặp chạy mấy lần, in gì? Terminal hiện gì?",
          code: 'for i in range(3):\n    print("Quai", i * 10)\nprint("Xong")',
          options: [
            { text: "Quai 10\nQuai 20\nQuai 30\nXong", why: "range(3) bắt đầu từ 0: i = 0, 1, 2." },
            { text: "Quai 0\nQuai 10\nQuai 20\nXong" },
            { text: "Quai 0\nXong\nQuai 10\nXong\nQuai 20\nXong", why: "print(\"Xong\") sát lề — nằm ngoài vòng lặp, chỉ chạy một lần." },
            { text: "Quai 0\nQuai 10\nQuai 20\nQuai 30\nXong", why: "range(3) có 3 giá trị — không có i = 3." }
          ],
          answer: "Quai 0\nQuai 10\nQuai 20\nXong",
          why: "Chuẩn! i = 0, 1, 2; lệnh sát lề chạy sau khi vòng lặp kết thúc."
        },
        {
          id: "s1-code", type: "code",
          title: "Sinh 5 đợt quái",
          prompt: "Dùng <b>một</b> vòng for và <b>một</b> lệnh print để in 5 dòng thông báo như mẫu.",
          requirements: ["Chỉ có 1 lệnh print, đặt trong thân vòng for.", "Số đợt chạy từ 1 đến 5."],
          starter: "# In 5 dot quai bang vong lap\n",
          expected: "Dot quai thu 1 xuat hien!\nDot quai thu 2 xuat hien!\nDot quai thu 3 xuat hien!\nDot quai thu 4 xuat hien!\nDot quai thu 5 xuat hien!",
          rules: [{ test: c => co(c, "\\bfor\\b") && dem(c, "\\bprint\\s*\\(") === 1, msg: "Dùng một vòng for và đúng một lệnh print trong thân vòng lặp." }],
          why: "Một dòng print, năm dòng kết quả — sức mạnh của vòng lặp!",
          hints: ["for i in range(5):", 'print(f"Dot quai thu {i + 1} xuat hien!")']
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "range()",
      kicker: "CHẶNG 2 · HÀM RANGE",
      title: "range(start, stop, step): bắt đầu, dừng, bước nhảy",
      nova: "Đôi khi mình cần đếm từ 1, đếm cách 2, hay <b>đếm ngược</b> trước khi màn chơi bắt đầu. Hàm range có thêm 2 tham số làm việc đó.",
      objectives: ["Dùng range(start, stop)", "Dùng bước nhảy, kể cả bước âm", "Tránh lỗi lệch 1"],
      lesson: `
        ${giaiMa("Ba dạng của range", [
          { code: "range(5)", y: "0, 1, 2, 3, 4 — bắt đầu từ 0." },
          { code: "range(1, 6)", y: "1, 2, 3, 4, 5 — <b>stop không được tính</b>: muốn tới 5 thì viết 6.", nhan: true },
          { code: "range(2, 11, 2)", y: "2, 4, 6, 8, 10 — bước nhảy 2." },
          { code: "range(5, 0, -1)", y: "5, 4, 3, 2, 1 — <b>bước âm</b> để đếm ngược (dừng trước 0).", nhan: true }
        ])}
        ${codeVaManHinh(`for giay in range(3, 0, -1):
    print(giay, "...")
print("Bat dau!")`, "3 ...\n2 ...\n1 ...\nBat dau!", "dem_nguoc.py")}
        ${cuPhap({ ten: "range",
          mau: ["range(‹stop›)", "range(‹start›, ‹stop›)", "range(‹start›, ‹stop›, ‹step›)"],
          phan: [["‹start›", "giá trị đầu (mặc định 0)"], ["‹stop›", "dừng <b>trước</b> giá trị này"], ["‹step›", "bước nhảy (mặc định 1), có thể âm"]],
          quyTac: ["Số lần lặp của <code>range(a, b)</code> là <code>b − a</code>", "start, stop, step là số nguyên", "Đếm ngược: start lớn hơn stop và step âm"],
          viDu: "for i in range(10, 0, -3):\n    print(i)", man: "10\n7\n4\n1" })}
        ${luuY("Lỗi <b>lệch 1</b> (off-by-one) là lỗi kinh điển: <code>range(1, 10)</code> chỉ đi tới 9. Luôn tự hỏi: “giá trị cuối cùng là bao nhiêu?”")}
        ${moRong("in trên một dòng với end", `<p>Dùng <code>end=" "</code> để các lần print nằm trên cùng một dòng.</p>
          ${codeVaManHinh('for i in range(1, 6):\n    print(i, end=" ")\nprint()\nprint("Het")', "1 2 3 4 5 \nHet", "end.py")}`)}
        ${docThem([[W3("ref_func_range"), "W3Schools: range() Function"]])}
      `,
      challenges: [
        {
          id: "s2-predict", type: "choice", bet: true, mono: true,
          title: "Đếm ngược bước 3",
          prompt: "Vòng lặp đếm ngược với bước −3. Terminal hiện gì?",
          code: "for i in range(10, 0, -3):\n    print(i)",
          options: [
            { text: "10\n7\n4\n1" },
            { text: "10\n7\n4\n1\n0", why: "stop = 0 không được tính, và 1 − 3 = −2 đã vượt qua 0." },
            { text: "10\n7\n4", why: "4 − 3 = 1 vẫn lớn hơn 0 nên còn in 1." },
            { text: "1\n4\n7\n10", why: "Bước âm nên đếm từ 10 đi xuống." }
          ],
          answer: "10\n7\n4\n1",
          why: "Đúng! Bắt đầu 10, mỗi lần trừ 3, dừng trước khi tới 0."
        },
        {
          id: "s2-code", type: "code",
          title: "Đếm ngược vào màn",
          prompt: "Nhập số giây n; đếm ngược từ n về 1 (mỗi số một dòng), rồi in <code>Bat dau!</code>.",
          requirements: ['Câu dẫn <code>"So giay: "</code>.', "Dùng <code>range</code> có bước âm."],
          starter: 'n = int(input("So giay: "))\n',
          tests: [{ input: "3", expected: "So giay: 3\n3\n2\n1\nBat dau!" }, { input: "5", expected: "So giay: 5\n5\n4\n3\n2\n1\nBat dau!" }, { input: "1", expected: "So giay: 1\n1\nBat dau!" }],
          rules: [{ test: c => co(c, "range\\([^)]*-\\s*1\\s*\\)"), msg: "Dùng range(n, 0, -1) để đếm ngược." }],
          why: "Đếm ngược chuẩn! Nhớ: stop = 0 để dừng ở 1.",
          hints: ["for i in range(n, 0, -1):", 'print("Bat dau!") đặt sát lề, sau vòng lặp.']
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "AFA11765",
      todo: ["Nghe thầy <b>chốt</b>: vòng <code>for</code>, <code>range</code> 3 dạng, bảng vết, lỗi lệch 1.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Số chẵn tới n",
          prompt: "Trong lúc chờ: nhập n, in các số chẵn từ 2 đến n (có tính n nếu n chẵn), mỗi số một dòng.",
          requirements: ['Câu dẫn <code>"n = "</code>.', "Dùng range có bước 2."],
          starter: "",
          tests: [{ input: "8", expected: "n = 8\n2\n4\n6\n8" }, { input: "7", expected: "n = 7\n2\n4\n6" }],
          why: "range(2, n + 1, 2) — nhớ +1 để tính cả n.",
          hints: ["for i in range(2, n + 1, 2):"]
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "Đếm & tổng",
      kicker: "CHẶNG 3 · BIẾN ĐẾM · BIẾN TỔNG",
      title: "Cộng dồn qua từng vòng lặp",
      nova: "Cuối mỗi màn, game phải cộng dồn <b>tổng điểm</b> và đếm <b>số quái đã hạ</b>. Mẹo: tạo biến tổng <b>trước</b> vòng lặp, cộng dồn <b>trong</b> vòng lặp, in <b>sau</b> vòng lặp.",
      objectives: ["Khởi tạo biến tổng trước vòng lặp", "Cộng dồn bằng +=", "Nhập dữ liệu trong vòng lặp"],
      lesson: `
        ${codeVaManHinh(`tong = 0
for i in range(1, 5):
    tong += i
    print("i =", i, "-> tong =", tong)
print("Tong cuoi:", tong)`, "i = 1 -> tong = 1\ni = 2 -> tong = 3\ni = 3 -> tong = 6\ni = 4 -> tong = 10\nTong cuoi: 10", "cong_don.py")}
        ${khai("Khuôn mẫu cộng dồn — 3 bước", `<ol><li><b>Trước</b> vòng lặp: <code>tong = 0</code> (đếm thì <code>dem = 0</code>).</li>
          <li><b>Trong</b> vòng lặp: <code>tong += …</code> (đếm thì <code>dem += 1</code>).</li><li><b>Sau</b> vòng lặp (sát lề): in kết quả.</li></ol>`, "green")}
        ${codeVaManHinh(`tong = 0
for i in range(1, 4):
    diem = int(input(f"Man {i}: "))
    tong += diem
print("Tong diem:", tong)
print("Trung binh:", round(tong / 3, 2))`, "Man 1: 8\nMan 2: 10\nMan 3: 7\nTong diem: 25\nTrung binh: 8.33", "tong_diem.py", "8\n10\n7")}
        ${cuPhap({ ten: "MẪU CỘNG DỒN",
          mau: "‹tổng› = 0\nfor ‹i› in range(‹…›):\n    ‹tổng› += ‹giá trị›\nprint(‹tổng›)",
          quyTac: ["Khởi tạo <b>ngoài</b> và <b>trước</b> vòng lặp", "Cộng dồn <b>bên trong</b> vòng lặp", "In kết quả <b>sau</b> vòng lặp (sát lề)",
                   "Tích (nhân dồn) thì khởi tạo bằng 1, không phải 0"],
          viDu: "tich = 1\nfor i in range(1, 5):\n    tich *= i\nprint(tich)", man: "24" })}
        ${doan("Đặt <code>tong = 0</code> vào <b>trong</b> vòng lặp thì sao?", "Mỗi vòng <code>tong</code> bị đặt lại về 0, cuối cùng chỉ còn giá trị của lần lặp cuối.")}
        ${docThem([[DOCS("library/functions.html#sum"), "Python docs: sum() (Bài 6)"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "Bọ trong vòng lặp",
          prompt: "Bạn Nam muốn tính 1 + 2 + 3 + 4, nhưng đặt <code>tong = 0</code> nhầm chỗ. Terminal hiện gì?",
          code: "for i in range(1, 5):\n    tong = 0\n    tong += i\nprint(tong)",
          options: [
            { text: "10", why: "tong bị đặt lại về 0 ở MỖI vòng lặp." },
            { text: "0", why: "Sau tong = 0 còn có tong += i ở cùng vòng." },
            { text: "4" },
            { text: "1\n2\n3\n4", why: "print nằm sát lề — chạy một lần sau vòng lặp." }
          ],
          answer: "4",
          why: "Đúng — và đó là con bọ! Biến tổng phải khởi tạo trước vòng lặp."
        },
        {
          id: "s3-code", type: "code",
          title: "Tổng điểm n màn",
          prompt: "Nhập số màn n, rồi nhập điểm từng màn (câu dẫn <code>Man 1: </code>, <code>Man 2: </code>…). In tổng điểm.",
          requirements: ['Câu dẫn <code>"So man: "</code>; câu dẫn từng màn dùng f-string.', "Dùng mẫu cộng dồn 3 bước."],
          starter: 'n = int(input("So man: "))\n',
          tests: [{ input: "3\n8\n10\n7", expected: "So man: 3\nMan 1: 8\nMan 2: 10\nMan 3: 7\nTong diem: 25" },
                  { input: "1\n9", expected: "So man: 1\nMan 1: 9\nTong diem: 9" }],
          rules: [{ test: c => co(c, "\\bfor\\b") && co(c, "\\+="), msg: "Dùng vòng for và cộng dồn bằng +=." }],
          why: "Cộng dồn chuẩn khuôn: khởi tạo → cộng trong vòng → in sau vòng.",
          hints: ["tong = 0 trước vòng lặp; for i in range(1, n + 1):", 'diem = int(input(f"Man {i}: "))']
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "for + if",
      kicker: "CHẶNG 4 · LẶP KẾT HỢP RẼ NHÁNH",
      title: "for + if: lọc, đếm và tìm lớn nhất",
      nova: "Kết hợp hai kỹ năng: lặp qua từng màn, và <b>if</b> để chọn ra màn đạt yêu cầu, hay tìm <b>màn điểm cao nhất</b>.",
      objectives: ["Đếm theo điều kiện", "Tìm giá trị lớn nhất bằng biến tạm", "Đặt if đúng chỗ trong vòng lặp"],
      lesson: `
        ${codeVaManHinh(`dem = 0
for i in range(1, 21):
    if i % 3 == 0:
        dem += 1
print("So boi cua 3 tu 1 den 20:", dem)`, "So boi cua 3 tu 1 den 20: 6", "dem_dieu_kien.py")}
        ${codeVaManHinh(`cao_nhat = -1
for i in range(1, 4):
    diem = int(input(f"Man {i}: "))
    if diem > cao_nhat:
        cao_nhat = diem
print("Cao nhat:", cao_nhat)`, "Man 1: 7\nMan 2: 12\nMan 3: 9\nCao nhat: 12", "lon_nhat.py", "7\n12\n9")}
        ${giaiMa("Hai mẫu hay dùng", [
          { code: "if dieu_kien:\n    dem += 1", y: "<b>Đếm có điều kiện</b>: if nằm <b>trong</b> vòng lặp (thụt 4), lệnh đếm thụt 8." },
          { code: "if x > cao_nhat:\n    cao_nhat = x", y: "<b>Tìm lớn nhất</b>: giữ “kỷ lục” trong một biến, gặp số lớn hơn thì cập nhật.", nhan: true },
          { code: "cao_nhat = -1", y: "Giá trị khởi đầu phải <b>nhỏ hơn mọi giá trị có thể</b> (điểm không âm nên −1 là đủ)." }
        ])}
        ${cuPhap({ ten: "for KẾT HỢP if",
          mau: "for ‹i› in range(‹…›):\n    if ‹điều kiện›:\n        ‹lệnh khi đúng›",
          quyTac: ["Mỗi cấp lồng nhau thụt thêm 4 dấu cách", "if trong vòng lặp được xét lại ở <b>mỗi</b> lần lặp", "Kết quả cuối cùng in sau vòng lặp"],
          viDu: 'for i in range(1, 8):\n    if i % 2 == 0:\n        print(i, "chan")', man: "2 chan\n4 chan\n6 chan" })}
        ${moRong("vòng lặp lồng nhau", `<p>Vòng lặp có thể nằm trong vòng lặp khác — vòng trong chạy hết mỗi lần vòng ngoài lặp một lần.</p>
          ${codeVaManHinh('for hang in range(1, 4):\n    for cot in range(1, 4):\n        print(hang * cot, end=" ")\n    print()', "1 2 3 \n2 4 6 \n3 6 9 ", "long_nhau.py")}`)}
        ${docThem([[W3("python_for_loops"), "W3Schools: For Loops (nested)"]])}
      `,
      challenges: [
        {
          id: "s4-predict", type: "choice", bet: true, mono: true,
          title: "Đếm có điều kiện",
          prompt: "Đếm các số từ 1 đến 30 chia hết cho 4. Terminal hiện gì?",
          code: "dem = 0\nfor i in range(1, 31):\n    if i % 4 == 0:\n        dem += 1\nprint(dem)",
          options: [
            { text: "7" },
            { text: "8", why: "Các số chia hết cho 4 từ 1 đến 30: 4, 8, …, 28 — không có 32." },
            { text: "30", why: "dem chỉ tăng khi i % 4 == 0." },
            { text: "28", why: "dem đếm SỐ LƯỢNG, không phải giá trị lớn nhất." }
          ],
          answer: "7",
          why: "Đúng: 4, 8, 12, 16, 20, 24, 28 — 7 số."
        },
        {
          id: "s4-code", type: "code",
          title: "Đếm màn qua được",
          prompt: "Nhập số màn n và điểm từng màn. Đếm số màn đạt <b>từ 50 điểm trở lên</b>.",
          requirements: ['Câu dẫn <code>"So man: "</code>, rồi <code>"Man 1: "</code>, <code>"Man 2: "</code>…', 'Dòng cuối: <code>So man qua: …</code>.'],
          starter: 'n = int(input("So man: "))\n',
          tests: [{ input: "4\n70\n45\n50\n90", expected: "So man: 4\nMan 1: 70\nMan 2: 45\nMan 3: 50\nMan 4: 90\nSo man qua: 3" },
                  { input: "2\n10\n49", expected: "So man: 2\nMan 1: 10\nMan 2: 49\nSo man qua: 0" }],
          rules: [{ test: c => co(c, "\\bfor\\b") && co(c, "\\bif\\b"), msg: "Dùng vòng for và câu lệnh if bên trong." }],
          why: "Đếm có điều kiện chính xác, kể cả ca biên 50!",
          hints: ["dem = 0 trước vòng lặp.", "Trong vòng: nhập diem; if diem >= 50: dem += 1"]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "5D7F4F41",
      todo: ["Nghe thầy <b>chốt</b>: mẫu cộng dồn 3 bước, đếm có điều kiện, tìm lớn nhất.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Tam giác sao",
          prompt: "Trong lúc chờ: nhập n, in tam giác sao n dòng (dòng i có i dấu *). Gợi ý: chuỗi nhân số.",
          requirements: ['Câu dẫn <code>"n = "</code>.', 'Dùng <code>"*" * i</code>.'],
          starter: "",
          tests: [{ input: "4", expected: "n = 4\n*\n**\n***\n****" }, { input: "1", expected: "n = 1\n*" }],
          why: "Chuỗi × số = lặp chuỗi — cách vẽ hình bằng ký tự gọn nhất.",
          hints: ['for i in range(1, n + 1):\n    print("*" * i)']
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Đàn Quái Vô Tận", kicker: "BOSS · BÀI 4",
      title: "Boss: Đàn Quái Vô Tận",
      bossName: "Đàn Quái Vô Tận",
      bossLine: "Bọn ta kéo đến từng đợt, từng đợt… ngươi đếm nổi không?",
      nova: "Boss này thích làm bạn đếm sai một đơn vị. <b>Tự làm một mình</b>, và luôn hỏi: giá trị cuối cùng là bao nhiêu?",
      objectives: ["Đếm số lần lặp", "Sửa bọ lệch 1 và thụt lề", "In bảng cửu chương"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Đếm đợt quái", noRun: true,
          prompt: "Dòng <code>Quai!</code> được in bao nhiêu lần?",
          code: 'for i in range(2, 20, 4):\n    print("Quai!")',
          options: ["4 lần", "5 lần", "18 lần", "20 lần"].map(t => ({ text: t, why: t === "4 lần" ? "Đếm lại: i = 2, 6, 10, 14, 18 — 18 vẫn nhỏ hơn 20." : "Liệt kê các giá trị của i: bắt đầu 2, mỗi lần cộng 4, dừng trước 20." })),
          answer: "5 lần",
          why: "Đúng: i = 2, 6, 10, 14, 18 → 5 lần."
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Ba con bọ trong vòng lặp",
          prompt: "Chương trình phải tính tổng 1 + 2 + … + 10 = 55 và in <b>một</b> dòng kết quả. Sửa 3 con bọ.",
          requirements: ["Giữ biến <code>tong</code> và câu chữ in ra.", "Kết quả in đúng một lần."],
          starter: 'tong = 0\nfor i in range(1, 10)\ntong += i\n    print("Tong 1..10:", tong)\n',
          expected: "Tong 1..10: 55",
          bugs: [
            { label: "Thiếu dấu :", fixed: c => /for i in range\([^)]*\)\s*:/.test(c) },
            { label: "Lệch 1", fixed: c => /range\(\s*1\s*,\s*11\s*\)/.test(c) },
            { label: "Thụt lề sai", fixed: c => /\n {2,}tong \+= i/.test(c) && /\nprint\("Tong 1\.\.10:", tong\)/.test(c) }
          ],
          why: "Ba con bọ kinh điển của vòng lặp đã bị diệt!",
          hints: ["Dòng for thiếu dấu :", "range(1, 10) dừng ở 9; thân vòng lặp thụt vào; print sát lề."]
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Bảng cửu chương",
          prompt: "Nhập n; in bảng nhân của n từ 1 đến 10 theo mẫu <code>7 x 1 = 7</code>.",
          requirements: ['Câu dẫn <code>"Bang nhan cua: "</code>.', "Một vòng for, mỗi dòng một phép nhân.", "Có ít nhất 1 comment."],
          starter: "",
          tests: [{ input: "7", expected: "Bang nhan cua: 7\n" + Array.from({ length: 10 }, (_, i) => `7 x ${i + 1} = ${7 * (i + 1)}`).join("\n") },
                  { input: "3", expected: "Bang nhan cua: 3\n" + Array.from({ length: 10 }, (_, i) => `3 x ${i + 1} = ${3 * (i + 1)}`).join("\n") }],
          rules: [{ test: c => co(c, "\\bfor\\b"), msg: "Dùng vòng for." }, { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment." }],
          why: "Đàn Quái Vô Tận đã tan tác!",
          hints: ["for i in range(1, 11):", 'print(n, "x", i, "=", n * i)']
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Giai thừa",
          prompt: "Nhập n (0 ≤ n ≤ 20); in n! = 1 × 2 × … × n. Quy ước 0! = 1.",
          requirements: ['Câu dẫn <code>"n = "</code>.', "Dùng biến tích khởi tạo bằng 1."],
          starter: "",
          tests: [{ input: "5", expected: "n = 5\n5! = 120" }, { input: "0", expected: "n = 0\n0! = 1" }, { input: "10", expected: "n = 10\n10! = 3628800" }],
          why: "Nhân dồn khởi tạo bằng 1 — và range(1, 1) rỗng nên 0! tự ra 1.",
          hints: ["tich = 1; for i in range(1, n + 1): tich *= i", 'print(f"{n}! = {tich}")']
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: Tam giác số",
          prompt: "Nhập n; dòng i in các số từ 1 đến i, cách nhau một dấu cách (không có dấu cách thừa ở cuối dòng cũng được).",
          requirements: ['Câu dẫn <code>"n = "</code>.', "Dùng hai vòng for lồng nhau (xem phần Tìm hiểu thêm ở Chặng 4)."],
          starter: "",
          tests: [{ input: "4", expected: "n = 4\n1\n1 2\n1 2 3\n1 2 3 4" }, { input: "2", expected: "n = 2\n1\n1 2" }],
          rules: [{ test: c => dem(c, "\\bfor\\b") >= 2, msg: "Dùng hai vòng for lồng nhau." }],
          why: "Vòng lặp lồng nhau — nền tảng để vẽ lưới bản đồ trong game.",
          hints: ['for i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(j, end=" ")\n    print()']
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: bốn bài vòng lặp",
      nova: "Bốn bài vòng lặp khó dần, có cả dãy Fibonacci nổi tiếng. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("Lập bảng vết 2–3 vòng đầu trên giấy trước khi gõ code — tìm bọ nhanh hơn hẳn.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Tổng bội của 3 hoặc 5",
          prompt: "Nhập n; tính tổng các số từ 1 đến n chia hết cho 3 <b>hoặc</b> cho 5.",
          requirements: ['Câu dẫn <code>"n = "</code>.', 'In <code>Tong: …</code>.'],
          starter: "",
          tests: [{ input: "10", expected: "n = 10\nTong: 33" }, { input: "15", expected: "n = 15\nTong: 60" }, { input: "2", expected: "n = 2\nTong: 0" }],
          why: "Bài này là “Problem 1” của Project Euler — trang luyện toán lập trình nổi tiếng.",
          hints: ["for i in range(1, n + 1): if i % 3 == 0 or i % 5 == 0: tong += i"]
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Liệt kê ước số",
          prompt: "Nhập n (n ≥ 1); in các ước của n trên một dòng (cách nhau dấu cách), rồi in số lượng ước.",
          requirements: ['Câu dẫn <code>"n = "</code>.', 'Dòng 1: <code>Uoc: …</code>; dòng 2: <code>So uoc: …</code>.'],
          starter: "",
          tests: [{ input: "12", expected: "n = 12\nUoc: 1 2 3 4 6 12\nSo uoc: 6" }, { input: "7", expected: "n = 7\nUoc: 1 7\nSo uoc: 2" }, { input: "1", expected: "n = 1\nUoc: 1\nSo uoc: 1" }],
          why: "In trên một dòng bằng end=\" \" và đếm cùng lúc — hai việc trong một vòng lặp.",
          hints: ['print("Uoc:", end="")', 'Trong vòng: if n % i == 0: print("", i, end=""); dem += 1', "Sau vòng: print() để xuống dòng."]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Dãy Fibonacci",
          prompt: "Dãy Fibonacci: 1, 1, 2, 3, 5, 8… (mỗi số bằng tổng hai số trước). Nhập n ≥ 2, in n số đầu tiên, mỗi số một dòng.",
          requirements: ['Câu dẫn <code>"n = "</code>.', "Dùng hai biến lưu hai số gần nhất."],
          starter: "",
          tests: [{ input: "6", expected: "n = 6\n1\n1\n2\n3\n5\n8" }, { input: "2", expected: "n = 2\n1\n1" }],
          why: "a, b = b, a + b — dòng code nổi tiếng nhất của Python.",
          hints: ["a, b = 1, 1", "for i in range(n): print(a); a, b = b, a + b"]
        },
        {
          id: "x4", type: "code", level: 3,
          title: "Khung bản đồ rỗng",
          prompt: "Nhập n ≥ 2; vẽ hình vuông n × n bằng dấu <code>#</code>, chỉ có viền, bên trong là dấu cách.",
          requirements: ['Câu dẫn <code>"n = "</code>.'],
          starter: "",
          tests: [{ input: "4", expected: "n = 4\n####\n#  #\n#  #\n####" }, { input: "2", expected: "n = 2\n##\n##" }],
          why: "Dòng đầu, dòng cuối khác các dòng giữa — kết hợp for với if (hoặc phép nhân chuỗi).",
          hints: ['Dòng đầu/cuối: "#" * n', 'Dòng giữa: "#" + " " * (n - 2) + "#"']
        }
      ]
    }
  ]
};
})();
