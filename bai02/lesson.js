/* Bài 2 — Nhập, xuất và toán tử: input(), đổi kiểu, + - * / // % **, thứ tự tính, += -= *=, f-string, round()
   Nhiệm vụ studio: Cửa hàng vật phẩm. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai02", number: 2,
  title: "Nhập, xuất và toán tử",
  story: "Cửa hàng vật phẩm",
  skills: ["input()", "int() · float() · str()", "+ − * /", "// và %", "** và thứ tự tính", "+= −= *=", "f-string", "round()"],

  errorTable: [
    ["Kết quả là 53 thay vì 8", "Cộng hai chuỗi lấy từ <code>input()</code> — dấu + nối chuỗi", "Đổi sang số: <code>int(input(...))</code>"],
    ["TypeError: can only concatenate str (not \"int\") to str", "Nối chuỗi với số bằng dấu +", "Dùng dấu phẩy trong print, hoặc f-string: <code>f\"Tong: {tong}\"</code>"],
    ["TypeError: unsupported operand type(s) for -: 'str' and 'int'", "Tính toán với dữ liệu từ input() chưa đổi kiểu", "<code>so = int(input(...))</code>"],
    ["ValueError: invalid literal for int() with base 10: '7.5'", "Nhập số thực (hoặc chữ) vào chỗ cần số nguyên", "Nhập số nguyên, hoặc dùng <code>float(...)</code>"],
    ["ZeroDivisionError: division by zero", "Chia (/, //, %) cho 0", "Kiểm tra số chia khác 0"],
    ["Kết quả có .0 (ví dụ 4.0)", "Phép <code>/</code> luôn cho float", "Cần số nguyên thì dùng <code>//</code>"],
    ["f-string in nguyên chữ {diem}", "Quên chữ <code>f</code> trước dấu ngoặc kép", "<code>f\"Diem: {diem}\"</code>"],
    ["Terminal thiếu dữ liệu nhập", "Chương trình gọi input() nhiều lần hơn số dòng ở ô DỮ LIỆU NHẬP", "Mỗi dòng trong ô nhập là một lần input()"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "Lệnh input()",
      kicker: "CHẶNG 1 · NHẬP DỮ LIỆU",
      title: "input(): hỏi người chơi",
      nova: "Cửa hàng vật phẩm của Planet Py sắp mở! Muốn bán hàng thì phải <b>hỏi người chơi</b> — tên, số lượng, số xu. Lệnh <b>input()</b> làm việc đó.",
      objectives: ["Dùng input() có câu dẫn", "Lưu dữ liệu nhập vào biến", "Biết input() luôn trả về chuỗi"],
      lesson: `
        ${khai("Chương trình biết lắng nghe", `<p>Lệnh <code>input("câu dẫn")</code> in câu dẫn ra terminal rồi <b>chờ người dùng gõ</b> và nhấn Enter.
          Những gì người dùng gõ được trả về dưới dạng <b>chuỗi</b> — thường ta gán ngay cho một biến.</p>
          <p>Trên web này, bạn gõ dữ liệu vào ô <b>DỮ LIỆU NHẬP</b> (mỗi dòng là một lần <code>input()</code>); terminal sẽ hiện lại giá trị bạn nhập giống hệt VS Code.</p>`, "blue")}
        ${codeVaManHinh(`ten = input("Ten nguoi choi: ")
print("Chao mung", ten, "den cua hang!")`, "Ten nguoi choi: Lan\nChao mung Lan den cua hang!", "chao.py", "Lan")}
        ${giaiMa("Giải mã lệnh input", [
          { code: 'ten = input("Ten: ")', y: "In câu dẫn <code>Ten: </code>, chờ người dùng gõ, rồi gán chuỗi vừa gõ cho biến <code>ten</code>." },
          { code: 'input("Ten: ")', y: "Câu dẫn nên kết thúc bằng <b>dấu hai chấm và một dấu cách</b> để chữ gõ vào không dính vào câu dẫn." },
          { code: "x = input()", y: "Không có câu dẫn — vẫn chạy, nhưng người dùng không biết cần nhập gì. <b>Nên tránh.</b>" },
          { code: 'so = input("So luong: ")', y: "Người dùng gõ <code>3</code> thì <code>so</code> là chuỗi <code>\"3\"</code>, <b>không phải số 3</b>.", nhan: true }
        ])}
        ${cuPhap({ ten: "LỆNH input",
          mau: "‹biến› = input(‹câu dẫn›)",
          phan: [["‹câu dẫn›", "chuỗi in ra để hướng dẫn người dùng, ví dụ <code>\"So xu: \"</code>"], ["kết quả", "luôn là <b>chuỗi</b> (<code>str</code>)"]],
          quyTac: ["Luôn có câu dẫn rõ ràng, kết thúc bằng <code>: </code>", "Mỗi lần gọi <code>input()</code> đọc <b>một dòng</b>",
                   "Muốn tính toán thì phải <b>đổi kiểu</b> (Chặng 2)"],
          viDu: 'nghe = input("Nghe: ")\nprint("Ban chon:", nghe)', man: "Nghe: Cung thu\nBan chon: Cung thu", nhap: "Cung thu" })}
        ${doan("Người dùng gõ <code>12</code>. Lệnh <code>so = input()</code> rồi <code>print(type(so))</code> in ra gì?", "<code>&lt;class 'str'&gt;</code> — mọi thứ đọc từ <code>input()</code> đều là chuỗi.")}
        ${docThem([[W3("python_user_input"), "W3Schools: User Input"], [DOCS("library/functions.html#input"), "Python docs: input()"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Terminal khi có input()",
          prompt: "Người chơi gõ <code>Kai</code> rồi nhấn Enter. Terminal hiện gì?",
          code: 'ten = input("Ten: ")\nprint("Chao", ten)', input: "Kai",
          options: [
            { text: "Chao Kai", why: "Câu dẫn và chữ người dùng gõ cũng xuất hiện trên terminal." },
            { text: "Ten: Kai\nChao Kai" },
            { text: "Ten: Kai\nChao ten", why: "ten không có ngoặc kép nên in giá trị Kai." },
            { text: "Ten:\nKai\nChao Kai", why: "Chữ người dùng gõ nằm ngay sau câu dẫn, trên cùng một dòng." }
          ],
          answer: "Ten: Kai\nChao Kai",
          why: "Chuẩn! Câu dẫn + chữ người dùng gõ nằm trên một dòng, rồi mới tới dòng print."
        },
        {
          id: "s1-code", type: "code",
          title: "Đăng ký nhân vật",
          prompt: "Bạn viết chương trình hỏi <b>tên</b> và <b>nghề</b> của nhân vật, rồi in lại đúng như mẫu. Câu dẫn phải giống hệt mẫu (kể cả dấu cách sau dấu hai chấm).",
          requirements: ['Hai lệnh <code>input</code> với câu dẫn <code>"Ten nhan vat: "</code> và <code>"Nghe: "</code>.', "Dòng cuối in tên, chữ <code>la mot</code>, rồi nghề — cách nhau bởi dấu cách."],
          starter: '# Hoi ten va nghe\nten = input("Ten nhan vat: ")\n\n',
          tests: [{ input: "Mira\nPhap su", expected: "Ten nhan vat: Mira\nNghe: Phap su\nMira la mot Phap su" },
                  { input: "Zed\nKiem si", expected: "Ten nhan vat: Zed\nNghe: Kiem si\nZed la mot Kiem si" }],
          rules: [{ test: c => dem(c, "\\binput\\s*\\(") === 2, msg: "Cần đúng 2 lệnh input: một cho tên, một cho nghề." }],
          why: "Nhân vật đã đăng ký! Lưu dữ liệu nhập vào biến rồi dùng lại — đó là cách mọi game hỏi người chơi.",
          hints: ['nghe = input("Nghe: ")', 'print(ten, "la mot", nghe)']
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Đổi kiểu",
      kicker: "CHẶNG 2 · ĐỔI KIỂU DỮ LIỆU",
      title: "int(), float(), str(): đổi kiểu để tính toán",
      nova: "Có một con bọ kinh điển: người chơi mua 5 + 3 món mà máy tính tiền ra <b>53</b>! Lý do là input() trả về chuỗi. Cùng sửa nhé.",
      objectives: ["Đổi chuỗi sang số bằng int(), float()", "Đổi số sang chuỗi bằng str()", "Nhận ra lỗi ValueError khi nhập sai"],
      lesson: `
        <div class="pair-view">${demo('a = input("a = ")\nb = input("b = ")\nprint("Tong:", a + b)', "bo_53.py", "nhập: 5 ⏎ 3")}
          ${terminal("a = 5\nb = 3\nTong: 53", "5\n3")}</div>
        ${khai("Vì sao ra 53?", `<p><code>a</code> và <code>b</code> là chuỗi <code>"5"</code> và <code>"3"</code>. Với chuỗi, dấu <code>+</code> là <b>nối</b>: <code>"5" + "3"</code> → <code>"53"</code>.
          Muốn cộng số, phải <b>đổi kiểu</b> sang số trước.</p>`, "yellow")}
        ${codeVaManHinh(`a = int(input("a = "))
b = int(input("b = "))
print("Tong:", a + b)`, "a = 5\nb = 3\nTong: 8", "sua_bo.py", "5\n3")}
        ${giaiMa("Ba hàm đổi kiểu", [
          { code: 'int("12")', y: "Chuỗi → số nguyên <code>12</code>. Chuỗi phải là số nguyên: <code>int(\"7.5\")</code> hay <code>int(\"abc\")</code> báo <b>ValueError</b>." },
          { code: 'float("7.5")', y: "Chuỗi → số thực <code>7.5</code>. Viết bằng <b>dấu chấm</b>." },
          { code: "str(100)", y: "Số → chuỗi <code>\"100\"</code> (để nối với chuỗi khác)." },
          { code: 'x = int(input("So: "))', y: "Cách viết gọn hay dùng nhất: đọc rồi đổi sang số ngay trên một dòng.", nhan: true }
        ])}
        ${cuPhap({ ten: "ĐỔI KIỂU",
          mau: ["int(‹giá trị›)   float(‹giá trị›)   str(‹giá trị›)", "‹biến› = int(input(‹câu dẫn›))"],
          quyTac: ["Dữ liệu từ <code>input()</code> cần tính toán thì <b>đổi kiểu ngay</b> khi đọc", "Số nguyên dùng <code>int</code>, số có phần thập phân dùng <code>float</code>",
                   "Đổi không được (gõ chữ vào chỗ cần số) → <code>ValueError</code>"],
          viDu: 'can_nang = float(input("Can nang: "))\nprint(can_nang * 2)', man: "Can nang: 2.5\n5.0", nhap: "2.5" })}
        ${luuY("<code>int(7.9)</code> (đổi từ số thực) cho <code>7</code> — Python <b>bỏ phần thập phân</b>, không làm tròn.")}
        ${docThem([[W3("python_casting"), "W3Schools: Casting"], [DOCS("library/functions.html#int"), "Python docs: int()"]])}
      `,
      challenges: [
        {
          id: "s2-predict", type: "choice", bet: true, mono: true,
          title: "Nối hay cộng?",
          prompt: "Người dùng nhập <code>4</code> rồi <code>6</code>. Dòng print in ra gì?",
          code: 'a = input("a = ")\nb = int(input("b = "))\nprint(int(a) + b, a + str(b))', input: "4\n6",
          options: [
            { text: "a = 4\nb = 6\n10 10", why: "a + str(b) là chuỗi + chuỗi → nối." },
            { text: "a = 4\nb = 6\n46 46", why: "int(a) + b là số + số → cộng." },
            { text: "a = 4\nb = 6\n10 46" },
            { text: "a = 4\nb = 6\nTypeError", why: "Hai vế của mỗi dấu + đều cùng kiểu nên không có lỗi." }
          ],
          answer: "a = 4\nb = 6\n10 46",
          why: "Đúng! Cùng là số thì cộng, cùng là chuỗi thì nối."
        },
        {
          id: "s2-code", type: "code",
          title: "Máy tính tuổi",
          prompt: "Người chơi nhập năm sinh, chương trình in ra tuổi của họ vào năm 2026. Code hiện tại ra lỗi — bạn sửa giúp nhé.",
          requirements: ["Câu dẫn <code>\"Nam sinh: \"</code> giữ nguyên.", "Đổi năm sinh sang số nguyên bằng <code>int()</code>.", "Tuổi = 2026 − năm sinh."],
          starter: 'nam_sinh = input("Nam sinh: ")\ntuoi = 2026 - nam_sinh\nprint("Nam 2026 ban", tuoi, "tuoi")\n',
          tests: [{ input: "2009", expected: "Nam sinh: 2009\nNam 2026 ban 17 tuoi" }, { input: "2011", expected: "Nam sinh: 2011\nNam 2026 ban 15 tuoi" }],
          rules: [{ test: c => co(c, "\\bint\\s*\\("), msg: "Dùng int(...) để đổi năm sinh sang số." }],
          why: "Hết lỗi! Bạn vừa sửa con bọ phổ biến nhất của người mới học Python.",
          hints: ["Lỗi TypeError: lấy số trừ chuỗi.", 'nam_sinh = int(input("Nam sinh: "))']
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "7B990924",
      todo: ["Nghe thầy <b>chốt</b>: <code>input()</code> luôn trả về chuỗi, đổi kiểu bằng <code>int()</code>, <code>float()</code>, <code>str()</code>.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code (đề trên slide), chụp ảnh nộp ClassPoint.",
             "Nhập <b>mã đồng bộ</b> thầy hiện trên slide để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Tổng xu của hai người chơi",
          prompt: "Trong lúc chờ: nhập số xu của hai người chơi, in tổng.",
          requirements: ['Câu dẫn <code>"Xu nguoi 1: "</code> và <code>"Xu nguoi 2: "</code>.', "In <code>Tong xu:</code> và tổng."],
          starter: "",
          tests: [{ input: "120\n85", expected: "Xu nguoi 1: 120\nXu nguoi 2: 85\nTong xu: 205" }, { input: "0\n7", expected: "Xu nguoi 1: 0\nXu nguoi 2: 7\nTong xu: 7" }],
          why: "Gọn gàng! int(input(...)) là cặp bài trùng.",
          hints: ['x1 = int(input("Xu nguoi 1: "))']
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "Toán tử số học",
      kicker: "CHẶNG 3 · TOÁN TỬ SỐ HỌC",
      title: "Bảy phép toán của Python",
      nova: "Cửa hàng cần tính tiền, đổi xu ra vé, chia đồ cho cả đội. Python có <b>7 toán tử số học</b> — hai cái lạ nhất là <b>//</b> và <b>%</b>.",
      objectives: ["Dùng + − * / // % **", "Hiểu chia lấy phần nguyên và chia lấy dư", "Tính đúng thứ tự thực hiện"],
      lesson: `
        ${giaiMa("Toán tử số học (với a = 17, b = 5)", [
          { code: "a + b   a - b   a * b", y: "Cộng, trừ, nhân → <code>22</code>, <code>12</code>, <code>85</code>." },
          { code: "a / b", y: "<b>Chia</b> → <code>3.4</code>. Kết quả <b>luôn là float</b>, kể cả <code>10 / 2</code> → <code>5.0</code>." },
          { code: "a // b", y: "<b>Chia lấy phần nguyên</b> → <code>3</code> (17 chia 5 được 3 lần).", nhan: true },
          { code: "a % b", y: "<b>Chia lấy dư</b> → <code>2</code> (17 = 5 × 3 + 2).", nho: "Số chẵn chia 2 dư 0, số lẻ chia 2 dư 1.", nhan: true },
          { code: "a ** 2", y: "<b>Luỹ thừa</b>: 17² → <code>289</code>." }
        ])}
        ${codeVaManHinh(`xu = int(input("So xu: "))
gia_ve = 7
print("So ve mua duoc:", xu // gia_ve)
print("Xu con du:", xu % gia_ve)`, "So xu: 50\nSo ve mua duoc: 7\nXu con du: 1", "doi_xu.py", "50")}
        ${khai("Thứ tự thực hiện", `<ol><li>Trong ngoặc tròn <code>( )</code> trước</li><li>Luỹ thừa <code>**</code></li>
          <li>Nhân, chia: <code>* / // %</code></li><li>Cộng, trừ: <code>+ -</code></li></ol><p>Cùng mức thì tính từ trái sang phải. Ví dụ <code>2 + 3 * 4</code> → <code>14</code>, còn <code>(2 + 3) * 4</code> → <code>20</code>.</p>`, "green")}
        ${cuPhap({ ten: "TOÁN TỬ SỐ HỌC",
          mau: ["‹a› + ‹b›   ‹a› - ‹b›   ‹a› * ‹b›   ‹a› / ‹b›", "‹a› // ‹b›   ‹a› % ‹b›   ‹a› ** ‹b›"],
          phan: [["/", "chia, luôn ra float"], ["//", "chia lấy phần nguyên"], ["%", "chia lấy dư"], ["**", "luỹ thừa"]],
          quyTac: ["Thứ tự: <code>( )</code> → <code>**</code> → <code>* / // %</code> → <code>+ -</code>", "Không chia cho 0 (<code>ZeroDivisionError</code>)",
                   "Viết dấu cách hai bên toán tử cho dễ đọc"],
          viDu: "print(17 // 5, 17 % 5)\nprint(2 ** 10)\nprint((2 + 3) * 4)", man: "3 2\n1024\n20" })}
        ${doan("Làm sao biết một số <code>n</code> là chẵn hay lẻ?", "Xét <code>n % 2</code>: bằng <code>0</code> là chẵn, bằng <code>1</code> là lẻ. Bài 3 sẽ dùng cách này với <code>if</code>.")}
        ${docThem([[W3("python_operators"), "W3Schools: Operators"], [DOCS("tutorial/introduction.html#numbers"), "Python Tutorial — Numbers"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "// % **",
          prompt: "Một dòng print, ba phép toán. Terminal hiện gì?",
          code: "print(17 // 5, 17 % 5, 2 ** 3)",
          options: [
            { text: "3.4 2 6", why: "// lấy phần nguyên (3), và 2 ** 3 là 2 mũ 3 = 8." },
            { text: "3 2 8" },
            { text: "3 3 8", why: "17 % 5 là phần dư: 17 = 5 × 3 + 2 → dư 2." },
            { text: "3 2 6", why: "** là luỹ thừa: 2 ** 3 = 2 × 2 × 2 = 8." }
          ],
          answer: "3 2 8",
          why: "Chính xác! // phần nguyên, % phần dư, ** luỹ thừa."
        },
        {
          id: "s3-order", type: "choice", mono: true,
          title: "Thứ tự tính",
          prompt: "Hai dòng chỉ khác nhau cặp ngoặc tròn. Terminal hiện gì?",
          code: "print(10 - 2 * 3)\nprint((10 - 2) * 3)",
          options: [
            { text: "24\n24", why: "Dòng 1 không có ngoặc: nhân trước, trừ sau → 10 − 6 = 4." },
            { text: "4\n4", why: "Dòng 2 có ngoặc: tính 10 − 2 = 8 trước, rồi nhân 3." },
            { text: "4\n24" },
            { text: "24\n4", why: "Ngược rồi: dòng 1 nhân trước nên ra 4." }
          ],
          answer: "4\n24",
          why: "Đúng! Nhân chia trước, cộng trừ sau; có ngoặc thì tính trong ngoặc trước."
        },
        {
          id: "s3-code", type: "code",
          title: "Đổi xu ra vé",
          prompt: "Một vé vào màn chơi giá <b>7 xu</b>. Nhập số xu người chơi có, in số vé mua được tối đa và số xu còn dư.",
          requirements: ['Câu dẫn <code>"So xu: "</code>.', "Dùng <code>//</code> để tính số vé, <code>%</code> để tính xu dư.", "Thử cả ca đặc biệt: xu ít hơn 7."],
          starter: '# Doi xu ra ve (1 ve = 7 xu)\nxu = int(input("So xu: "))\n',
          tests: [{ input: "50", expected: "So xu: 50\nVe: 7\nXu du: 1" }, { input: "21", expected: "So xu: 21\nVe: 3\nXu du: 0" }, { input: "6", expected: "So xu: 6\nVe: 0\nXu du: 6" }],
          rules: [{ test: c => co(c, "//") && co(c, "%"), msg: "Dùng // cho số vé và % cho số xu dư." }],
          why: "Chuẩn! // và % luôn đi cặp với nhau trong các bài đổi đơn vị.",
          hints: ['print("Ve:", xu // 7)', 'print("Xu du:", xu % 7)']
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "Gán gọn & f-string",
      kicker: "CHẶNG 4 · GÁN VIẾT GỌN · F-STRING",
      title: "+=, f-string và round()",
      nova: "Trong game, máu và điểm thay đổi liên tục: <code>mau = mau - 15</code>. Python có cách viết gọn hơn — và có <b>f-string</b> để in thông báo đẹp như game thật.",
      objectives: ["Dùng += −= *= /=", "In bằng f-string", "Làm tròn bằng round()"],
      lesson: `
        ${giaiMa("Toán tử gán viết gọn", [
          { code: "mau -= 15", y: "Giống <code>mau = mau - 15</code>." },
          { code: "diem += 10", y: "Giống <code>diem = diem + 10</code>." },
          { code: "xu *= 2", y: "Giống <code>xu = xu * 2</code> (nhân đôi)." },
          { code: "toc_do /= 2", y: "Giống <code>toc_do = toc_do / 2</code> — kết quả là float." }
        ])}
        ${khai("f-string: chèn biến vào chuỗi", `<p>Đặt chữ <code>f</code> ngay trước dấu ngoặc kép; bên trong chuỗi, viết biến hoặc phép tính trong cặp ngoặc nhọn <code>{ }</code> — Python thay bằng giá trị.</p>`, "blue")}
        ${codeVaManHinh(`ten = "Kai"
mau = 100
mau -= 35
print(f"{ten} con {mau}/100 mau")
print(f"Ti le: {mau / 100 * 100}%")`, "Kai con 65/100 mau\nTi le: 65.0%", "fstring.py")}
        ${cuPhap({ ten: "GÁN VIẾT GỌN · F-STRING · round",
          mau: ["‹biến› += ‹giá trị›    (cũng có -=  *=  /=  //=  %=)", 'f"… {‹biến hoặc biểu thức›} …"', "round(‹số›, ‹số chữ số thập phân›)"],
          quyTac: ["Viết liền: <code>+=</code>, không có dấu cách ở giữa", "f-string: chữ <code>f</code> đứng ngay trước dấu ngoặc kép",
                   "<code>round(3.14159, 2)</code> → <code>3.14</code>; <code>round(2.5)</code> → <code>2</code> (làm tròn về số chẵn gần nhất)"],
          viDu: 'tb = (8 + 9 + 7.5) / 3\nprint(f"Trung binh: {round(tb, 2)}")', man: "Trung binh: 8.17" })}
        ${doan("Quên chữ <code>f</code>: <code>print(\"Mau: {mau}\")</code> in ra gì?", "In nguyên văn <code>Mau: {mau}</code> — không có <code>f</code> thì <code>{mau}</code> chỉ là chữ bình thường.")}
        ${moRong("định dạng số trong f-string", `<p>Sau dấu hai chấm trong <code>{ }</code> có thể định dạng: <code>:.2f</code> (2 chữ số thập phân), <code>:,</code> (dấu phẩy ngăn nghìn).</p>
          ${codeVaManHinh('gia = 1250000\ntb = 8.16666\nprint(f"Gia: {gia:,} dong")\nprint(f"TB: {tb:.2f}")', "Gia: 1,250,000 dong\nTB: 8.17", "dinh_dang.py")}`)}
        ${docThem([[W3("python_string_formatting"), "W3Schools: String Formatting"], [DOCS("tutorial/inputoutput.html#formatted-string-literals"), "Python Tutorial — f-strings"]])}
      `,
      challenges: [
        {
          id: "s4-predict", type: "choice", bet: true, mono: true,
          title: "Gán gọn liên tiếp",
          prompt: "Biến <code>xu</code> thay đổi ba lần. Terminal hiện gì?",
          code: 'xu = 10\nxu += 5\nxu *= 2\nxu -= 4\nprint(f"Xu: {xu}")',
          options: [
            { text: "Xu: 26" },
            { text: "Xu: 11", why: "Tính lần lượt từng dòng: 10 + 5 = 15, rồi × 2 = 30, rồi − 4." },
            { text: "Xu: {xu}", why: "Có chữ f trước ngoặc kép nên {xu} được thay bằng giá trị." },
            { text: "Xu: 16", why: "Dòng 3 nhân đôi giá trị lúc đó (15), không phải giá trị ban đầu." }
          ],
          answer: "Xu: 26",
          why: "Đúng: 10 → 15 → 30 → 26."
        },
        {
          id: "s4-code", type: "code",
          title: "Trúng đòn",
          prompt: "Nhập máu ban đầu và số đòn trúng; mỗi đòn mất 15 máu. In máu còn lại bằng f-string theo đúng mẫu.",
          requirements: ['Câu dẫn <code>"Mau ban dau: "</code> và <code>"So don trung: "</code>.', "Dùng <code>-=</code> để trừ máu.", "Dòng cuối in bằng f-string."],
          starter: 'mau = int(input("Mau ban dau: "))\n',
          tests: [{ input: "100\n3", expected: "Mau ban dau: 100\nSo don trung: 3\nCon lai 55 mau" }, { input: "60\n4", expected: "Mau ban dau: 60\nSo don trung: 4\nCon lai 0 mau" }],
          rules: [{ test: c => co(c, "-="), msg: "Dùng toán tử -= để trừ máu." }, { test: c => /\bf["']/.test(c), msg: "In dòng cuối bằng f-string: f\"Con lai {mau} mau\"." }],
          why: "Máu đã cập nhật đúng! Đây chính là dòng code bạn sẽ gặp lại trong game pygame.",
          hints: ['so_don = int(input("So don trung: "))', "mau -= so_don * 15", 'print(f"Con lai {mau} mau")']
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "CC7C842F",
      todo: ["Nghe thầy <b>chốt</b>: 7 toán tử số học, thứ tự tính, gán viết gọn, f-string.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Điểm trung bình 3 màn",
          prompt: "Trong lúc chờ: nhập điểm 3 màn chơi (có thể là số thực), in trung bình làm tròn 2 chữ số.",
          requirements: ['Câu dẫn <code>"Man 1: "</code>, <code>"Man 2: "</code>, <code>"Man 3: "</code>.', 'In bằng f-string: <code>Trung binh: …</code>, dùng <code>round(…, 2)</code>.'],
          starter: "",
          tests: [{ input: "8\n9.5\n7", expected: "Man 1: 8\nMan 2: 9.5\nMan 3: 7\nTrung binh: 8.17" }, { input: "10\n10\n9", expected: "Man 1: 10\nMan 2: 10\nMan 3: 9\nTrung binh: 9.67" }],
          why: "Chính xác! Nhớ: điểm có thể lẻ nên dùng float().",
          hints: ['m1 = float(input("Man 1: "))', 'print(f"Trung binh: {round((m1 + m2 + m3) / 3, 2)}")']
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Máy Tính Hỏng", kicker: "BOSS · BÀI 2",
      title: "Boss: Máy Tính Hỏng",
      bossName: "Máy Tính Hỏng",
      bossLine: "5 cộng 3 bằng 53! Ha ha, cửa hàng của các ngươi sẽ phá sản!",
      nova: "Boss này chuyên làm sai phép tính. <b>Tự làm một mình</b>, chạy thử nhiều ca để chắc chắn nhé.",
      objectives: ["Đọc code có đổi kiểu", "Săn bọ tính tiền", "Đổi giây ra phút bằng // và %"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Chuỗi nhân 2",
          prompt: "Dấu <code>*</code> với chuỗi và với số. Terminal hiện gì?",
          code: 'x = "7"\ny = int(x) * 2\nprint(x * 2, y)',
          options: [
            { text: "14 14", why: "x là chuỗi \"7\": chuỗi nhân 2 là lặp lại chuỗi hai lần." },
            { text: "77 77", why: "y = int(x) * 2 là số 7 nhân 2." },
            { text: "77 14" },
            { text: "TypeError", why: "Chuỗi nhân với số nguyên là hợp lệ — lặp lại chuỗi." }
          ],
          answer: "77 14",
          why: "Đòn chí mạng! Chuỗi × số = lặp chuỗi; số × số = nhân."
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Máy tính tiền vé",
          prompt: "Máy Tính Hỏng đã phá chương trình tính tiền vé. Bạn sửa cho đúng (3 con bọ).",
          requirements: ["Giữ nguyên hai câu dẫn.", "Dòng cuối in <code>Tong tien:</code> rồi số tiền (cách nhau một dấu cách)."],
          starter: 'gia = input("Gia ve: ")\nso_ve = input("So ve: ")\ntong = gia * so_ve\nprint("Tong tien: " + tong)\n',
          tests: [{ input: "20000\n3", expected: "Gia ve: 20000\nSo ve: 3\nTong tien: 60000" }, { input: "15000\n1", expected: "Gia ve: 15000\nSo ve: 1\nTong tien: 15000" }],
          bugs: [
            { label: "Giá vé chưa là số", fixed: c => /gia\s*=\s*(int|float)\(\s*input/.test(c) },
            { label: "Số vé chưa là số", fixed: c => /so_ve\s*=\s*int\(\s*input/.test(c) },
            { label: "Nối chuỗi với số", fixed: c => !/"Tong tien: "\s*\+\s*tong\b/.test(c) }
          ],
          why: "Cửa hàng đã tính đúng tiền! Boss mất nửa máu.",
          hints: ["Bọ 1, 2: bọc input(...) trong int(...).", 'Bọ 3: print("Tong tien:", tong) hoặc f-string.']
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Đồng hồ màn chơi",
          prompt: "Nhập tổng số giây đã chơi; in ra dạng <b>phút và giây</b>. Dùng <code>//</code> và <code>%</code>.",
          requirements: ['Câu dẫn <code>"Tong so giay: "</code>.', "Dòng kết quả theo mẫu: <code>2 phut 5 giay</code>.", "Có ít nhất 1 comment."],
          starter: "",
          tests: [{ input: "125", expected: "Tong so giay: 125\n2 phut 5 giay" }, { input: "60", expected: "Tong so giay: 60\n1 phut 0 giay" }, { input: "59", expected: "Tong so giay: 59\n0 phut 59 giay" }],
          rules: [{ test: c => co(c, "//") && co(c, "%"), msg: "Dùng // để tính phút và % để tính số giây còn lại." },
                  { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment (# ...) để giải thích code." }],
          why: "Máy Tính Hỏng đã bị sửa vĩnh viễn!",
          hints: ["phut = giay // 60", 'print(phut, "phut", giay % 60, "giay")']
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Chia đội",
          prompt: "Mỗi đội có 4 người. Nhập số người chơi; in số đội đủ người, số người lẻ, và <b>số đội cần lập</b> để ai cũng có đội (đội cuối có thể thiếu người).",
          requirements: ['Câu dẫn <code>"So nguoi choi: "</code>.', "Chỉ dùng toán tử số học (chưa dùng if)."],
          starter: "",
          tests: [{ input: "10", expected: "So nguoi choi: 10\nDoi du: 2\nNguoi le: 2\nCan lap: 3 doi" },
                  { input: "12", expected: "So nguoi choi: 12\nDoi du: 3\nNguoi le: 0\nCan lap: 3 doi" },
                  { input: "1", expected: "So nguoi choi: 1\nDoi du: 0\nNguoi le: 1\nCan lap: 1 doi" }],
          rules: [{ test: c => !/\bif\b/.test(window.PY.codeOnly(c)) && !/import/.test(c), msg: "Bài này chỉ dùng toán tử số học — chưa dùng if hay import." }],
          why: "Mẹo (n + 3) // 4 là cách làm tròn lên rất hay gặp khi chia trang, chia nhóm.",
          hints: ["Số đội cần lập = làm tròn LÊN của n / 4.", "Làm tròn lên bằng //: (n + 3) // 4"]
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: XP tăng dần",
          prompt: "Mỗi lần lên level, XP thưởng tăng thêm 10%. Nhập XP ban đầu; in XP sau 3 lần lên level, làm tròn 2 chữ số.",
          requirements: ['Câu dẫn <code>"XP ban dau: "</code>; nhận số thực.', "Dùng toán tử <code>**</code>.", 'In bằng f-string: <code>Sau 3 level: …</code>'],
          starter: "",
          tests: [{ input: "100", expected: "XP ban dau: 100\nSau 3 level: 133.1" }, { input: "250", expected: "XP ban dau: 250\nSau 3 level: 332.75" }],
          rules: [{ test: c => coChuoi(c, "\\*\\*"), msg: "Dùng luỹ thừa: xp * 1.1 ** 3." }],
          why: "Tăng theo phần trăm lặp lại chính là luỹ thừa — công thức lãi kép quen thuộc.",
          hints: ["Tăng 10% = nhân 1.1; ba lần = nhân 1.1 ** 3.", 'print(f"Sau 3 level: {round(xp * 1.1 ** 3, 2)}")']
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: bốn bài toán cửa hàng",
      nova: "Bốn bài khó dần cho bạn nào muốn luyện thêm // và %. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("Bài ★★★ cần định dạng 2 chữ số: <code>f\"{gio:02d}\"</code> in 7 thành <code>07</code>.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Bản đồ hình chữ nhật",
          prompt: "Nhập chiều dài và chiều rộng bản đồ (số nguyên); in chu vi và diện tích.",
          requirements: ['Câu dẫn <code>"Dai: "</code>, <code>"Rong: "</code>.'],
          starter: "",
          tests: [{ input: "12\n5", expected: "Dai: 12\nRong: 5\nChu vi: 34\nDien tich: 60" }, { input: "1\n1", expected: "Dai: 1\nRong: 1\nChu vi: 4\nDien tich: 1" }],
          why: "Nhập → Xử lý → Xuất, gọn gàng!",
          hints: ["Chu vi = (dai + rong) * 2"]
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Đổi xu ra rương, túi",
          prompt: "1 rương vàng = 100 xu, 1 túi bạc = 10 xu. Nhập số xu; đổi ra nhiều rương nhất có thể, rồi nhiều túi nhất, còn lại là xu lẻ.",
          requirements: ['Câu dẫn <code>"So xu: "</code>.', "Chỉ dùng <code>//</code> và <code>%</code> (chưa dùng if)."],
          starter: "",
          tests: [{ input: "1234", expected: "So xu: 1234\nRuong: 12\nTui: 3\nXu le: 4" }, { input: "99", expected: "So xu: 99\nRuong: 0\nTui: 9\nXu le: 9" },
                  { input: "500", expected: "So xu: 500\nRuong: 5\nTui: 0\nXu le: 0" }],
          rules: [{ test: c => !/\bif\b/.test(window.PY.codeOnly(c)), msg: "Bài này chỉ dùng // và %, chưa dùng if." }],
          why: "Chuỗi // rồi % — cách máy ATM đổi tiền.",
          hints: ["ruong = xu // 100; con = xu % 100", "tui = con // 10; le = con % 10"]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Tổng chữ số mã vật phẩm",
          prompt: "Mã vật phẩm là số có đúng 3 chữ số. Nhập mã; in tổng ba chữ số của nó.",
          requirements: ['Câu dẫn <code>"Ma: "</code>.', "Tách chữ số bằng <code>//</code> và <code>%</code> (không đổi sang chuỗi)."],
          starter: "",
          tests: [{ input: "472", expected: "Ma: 472\nTong chu so: 13" }, { input: "100", expected: "Ma: 100\nTong chu so: 1" }, { input: "999", expected: "Ma: 999\nTong chu so: 27" }],
          rules: [{ test: c => window.KIT.co(c, "%\\s*10") && window.KIT.co(c, "//"), msg: "Dùng % 10 để lấy chữ số hàng đơn vị và // để bỏ bớt chữ số." }],
          why: "% 10 lấy chữ số cuối, // 10 bỏ chữ số cuối — mẹo dùng rất nhiều.",
          hints: ["tram = ma // 100; chuc = ma // 10 % 10; dv = ma % 10"]
        },
        {
          id: "x4", type: "code", level: 3,
          title: "Giờ kết thúc buổi chơi",
          prompt: "Nhập giờ bắt đầu (0–23), phút bắt đầu (0–59) và số phút chơi. In giờ kết thúc dạng <code>HH:MM</code> theo đồng hồ 24 giờ (có thể sang ngày hôm sau).",
          requirements: ['Câu dẫn <code>"Gio: "</code>, <code>"Phut: "</code>, <code>"So phut choi: "</code>.', 'Dùng <code>f"{…:02d}"</code> để in đủ 2 chữ số.'],
          starter: "",
          tests: [{ input: "7\n45\n50", expected: "Gio: 7\nPhut: 45\nSo phut choi: 50\nKet thuc: 08:35" },
                  { input: "23\n30\n90", expected: "Gio: 23\nPhut: 30\nSo phut choi: 90\nKet thuc: 01:00" },
                  { input: "0\n0\n5", expected: "Gio: 0\nPhut: 0\nSo phut choi: 5\nKet thuc: 00:05" }],
          why: "Đổi hết ra phút, cộng, rồi // 60 và % 60, cuối cùng % 24 — bài toán đồng hồ kinh điển.",
          hints: ["tong = gio * 60 + phut + choi", "gio_kt = tong // 60 % 24; phut_kt = tong % 60", 'print(f"Ket thuc: {gio_kt:02d}:{phut_kt:02d}")']
        }
      ]
    }
  ]
};
})();
