/* Bài 3 — Rẽ nhánh: True/False, 6 phép so sánh, if, if-else, if-elif-else, and/or/not
   Nhiệm vụ studio: Cổng thắng/thua. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, soDo, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai03", number: 3,
  title: "Rẽ nhánh",
  story: "Cổng thắng/thua",
  skills: ["True / False", "6 phép so sánh", "if", "if-else", "if-elif-else", "Thụt lề khối lệnh", "and · or · not"],

  errorTable: [
    ["SyntaxError: expected ':'", "Thiếu dấu <code>:</code> cuối dòng <code>if</code>, <code>elif</code>, <code>else</code>", "<code>if diem &gt;= 50:</code>"],
    ["IndentationError: expected an indented block", "Lệnh bên trong if không được thụt vào", "Thụt vào 4 dấu cách (phím Tab)"],
    ["SyntaxError: invalid syntax (dòng if có dấu =)", "Dùng <code>=</code> (gán) thay cho <code>==</code> (so sánh)", "<code>if ma == 2026:</code>"],
    ["IndentationError: unindent does not match", "Các dòng cùng khối thụt lề không bằng nhau", "Thụt lề đều 4 dấu cách cho mọi dòng trong khối"],
    ["Luôn ra cùng một nhánh dù nhập khác", "Thứ tự <code>elif</code> sai: điều kiện rộng đặt trước", "Xếp điều kiện chặt (khó đạt) lên trước"],
    ["TypeError: '>' not supported between 'str' and 'int'", "So sánh chuỗi từ input() với số", "<code>int(input(...))</code>"],
    ["SyntaxError ở dòng else", "Viết điều kiện sau else, hoặc else không thẳng hàng với if", "<code>else:</code> không có điều kiện, thẳng hàng với <code>if</code>"],
    ["NameError: name 'true' is not defined", "Viết thường <code>true</code>/<code>false</code>", "Viết hoa chữ đầu: <code>True</code>, <code>False</code>"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "So sánh",
      kicker: "CHẶNG 1 · ĐÚNG HAY SAI",
      title: "Phép so sánh và kiểu bool",
      nova: "Game nào cũng phải trả lời những câu hỏi đúng/sai: đủ điểm qua màn chưa? còn máu không? Python trả lời bằng <b>True</b> hoặc <b>False</b>.",
      objectives: ["Dùng 6 phép so sánh", "Biết kết quả so sánh là True/False", "Phân biệt = và =="],
      lesson: `
        ${giaiMa("Sáu phép so sánh (a = 7, b = 5)", [
          { code: "a > b", y: "lớn hơn → <code>True</code>" },
          { code: "a < b", y: "nhỏ hơn → <code>False</code>" },
          { code: "a >= 7", y: "lớn hơn <b>hoặc bằng</b> → <code>True</code> (có tính bằng)", nhan: true },
          { code: "a <= 6", y: "nhỏ hơn hoặc bằng → <code>False</code>" },
          { code: "a == 7", y: "<b>bằng</b> (hai dấu =) → <code>True</code>", nhan: true },
          { code: "a != b", y: "<b>khác</b> → <code>True</code>" }
        ])}
        ${codeVaManHinh(`diem = int(input("Diem man choi: "))
print("Qua man:", diem >= 50)
print("Diem tuyet doi:", diem == 100)`, "Diem man choi: 73\nQua man: True\nDiem tuyet doi: False", "so_sanh.py", "73")}
        ${khai("Kiểu bool", `<p>Kết quả của phép so sánh là kiểu <code>bool</code>, chỉ có hai giá trị <code>True</code> và <code>False</code> (viết hoa chữ cái đầu). Có thể gán cho biến: <code>con_song = mau &gt; 0</code>.</p>`, "blue")}
        ${luuY("<code>=</code> là <b>gán</b> (đưa giá trị vào biến); <code>==</code> là <b>so sánh bằng</b> (hỏi “có bằng không?”). Viết <code>if x = 5:</code> là lỗi cú pháp.")}
        ${moRong("so sánh chuỗi", `<p>Chuỗi cũng so sánh được: <code>==</code> phân biệt hoa/thường; <code>&lt;</code>, <code>&gt;</code> so theo thứ tự bảng chữ cái (mã Unicode).</p>
          ${codeVaManHinh('print("Kai" == "kai")\nprint("an" < "binh")', "False\nTrue", "chuoi.py")}`)}
        ${docThem([[W3("python_booleans"), "W3Schools: Booleans"], [W3("python_operators_comparison"), "W3Schools: Comparison Operators"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Bốn phép so sánh",
          prompt: "Bốn phép so sánh trên một dòng. Terminal hiện gì?",
          code: 'print(5 > 5, 5 >= 5, 3 == 3.0, "a" != "A")',
          options: [
            { text: "True True True True", why: "5 > 5 là sai: 5 không lớn hơn chính nó." },
            { text: "False True False True", why: "3 == 3.0 là đúng: Python so sánh giá trị số, int và float bằng nhau vẫn là bằng." },
            { text: "False True True True" },
            { text: "False True True False", why: "Python phân biệt hoa/thường nên \"a\" khác \"A\" → True." }
          ],
          answer: "False True True True",
          why: "Chuẩn! > không tính bằng, >= có tính bằng; 3 và 3.0 bằng nhau; \"a\" khác \"A\"."
        },
        {
          id: "s1-code", type: "code",
          title: "Đủ điểm qua màn?",
          prompt: "Nhập điểm màn chơi; in kết quả so sánh <b>điểm từ 50 trở lên</b> (True/False). Chưa cần if — chỉ in thẳng kết quả phép so sánh.",
          requirements: ['Câu dẫn <code>"Diem: "</code>.', "Dòng hai in <code>Qua man:</code> và kết quả phép so sánh."],
          starter: 'diem = int(input("Diem: "))\n',
          tests: [{ input: "73", expected: "Diem: 73\nQua man: True" }, { input: "50", expected: "Diem: 50\nQua man: True" }, { input: "49", expected: "Diem: 49\nQua man: False" }],
          rules: [{ test: c => co(c, ">=\\s*50"), msg: "Dùng phép so sánh diem >= 50 (có tính bằng 50)." }],
          why: "Đúng cả ca biên 50! Điều kiện \"từ 50 trở lên\" luôn là >=.",
          hints: ['print("Qua man:", diem >= 50)']
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Lệnh if",
      kicker: "CHẶNG 2 · CÂU LỆNH IF",
      title: "if: chỉ làm khi điều kiện đúng",
      nova: "Có True/False rồi, giờ cho game <b>ra quyết định</b>: nếu máu thấp thì cảnh báo. Với Python, <b>thụt lề</b> quyết định lệnh nào nằm trong if — rất quan trọng!",
      objectives: ["Viết câu lệnh if", "Thụt lề đúng khối lệnh", "Đọc sơ đồ khối của if"],
      lesson: `
        <div class="duo">${soDo("if", "mau < 30", 'print("Mau yeu!")', "", "Sơ đồ khối của if (thiếu)")}
          <div>${codeVaManHinh(`mau = int(input("Mau: "))
if mau < 30:
    print("Mau yeu!")
    print("Hay uong binh mau")
print("Tiep tuc chien dau")`, "Mau: 20\nMau yeu!\nHay uong binh mau\nTiep tuc chien dau", "canh_bao.py", "20")}</div></div>
        ${giaiMa("Giải mã câu lệnh if", [
          { code: "if mau < 30:", y: "Từ khoá <code>if</code>, điều kiện, rồi <b>dấu hai chấm</b> <code>:</code>.", nhan: true },
          { code: '    print("Mau yeu!")', y: "Các lệnh <b>thụt vào 4 dấu cách</b> là <b>khối lệnh</b> của if — chỉ chạy khi điều kiện <code>True</code>.", nhan: true },
          { code: 'print("Tiep tuc ...")', y: "Lệnh <b>sát lề</b> nằm ngoài if — <b>luôn chạy</b>, dù điều kiện đúng hay sai." }
        ])}
        ${cuPhap({ ten: "CÂU LỆNH if",
          mau: "if ‹điều kiện›:\n    ‹khối lệnh khi đúng›",
          phan: [["‹điều kiện›", "biểu thức cho True/False, ví dụ <code>mau &lt; 30</code>"], ["‹khối lệnh›", "một hoặc nhiều lệnh, thụt vào cùng 4 dấu cách"]],
          quyTac: ["Cuối dòng if có dấu <code>:</code>", "Khối lệnh thụt vào <b>4 dấu cách</b> (VS Code: phím Tab) — các dòng trong khối thụt bằng nhau",
                   "Hết thụt lề là hết khối if", "Không cần ngoặc tròn quanh điều kiện (khác C++)"],
          viDu: 'xu = 120\nif xu >= 100:\n    print("Mua duoc kiem!")\nprint("Het")', man: "Mua duoc kiem!\nHet" })}
        ${meo("Trên web và trong VS Code, gõ <code>:</code> rồi Enter là dòng mới <b>tự thụt vào</b>. Muốn ra khỏi khối, bấm Backspace một lần.")}
        ${docThem([[W3("python_conditions"), "W3Schools: If … Else"], [DOCS("tutorial/controlflow.html#if-statements"), "Python Tutorial — if Statements"]])}
      `,
      challenges: [
        {
          id: "s2-predict", type: "choice", bet: true, mono: true,
          title: "Thụt lề quyết định",
          prompt: "Lần này máu là 80. Terminal hiện gì?",
          code: 'mau = 80\nif mau < 30:\n    print("Mau yeu!")\n    print("Uong binh mau")\nprint("Tiep tuc")',
          options: [
            { text: "Mau yeu!\nUong binh mau\nTiep tuc", why: "80 < 30 là False nên cả khối thụt lề bị bỏ qua." },
            { text: "Uong binh mau\nTiep tuc", why: "Dòng Uong binh mau thụt lề nên thuộc khối if — cũng bị bỏ qua." },
            { text: "Tiep tuc" },
            { text: "(không in gì)", why: "Dòng cuối sát lề, nằm ngoài if nên luôn chạy." }
          ],
          answer: "Tiep tuc",
          why: "Đúng! Cả khối thụt lề bị bỏ qua; dòng sát lề luôn chạy."
        },
        {
          id: "s2-bugs", type: "code",
          title: "Săn bọ thụt lề",
          prompt: "Chương trình khen người chơi đạt từ 90 điểm, nhưng có 2 con bọ. Bạn chạy, đọc lỗi, sửa nhé.",
          requirements: ["Từ 90 điểm: in <code>Xuat sac!</code>.", "Dòng <code>Ket thuc</code> luôn được in."],
          starter: 'diem = int(input("Diem: "))\nif diem >= 90\nprint("Xuat sac!")\nprint("Ket thuc")\n',
          tests: [{ input: "95", expected: "Diem: 95\nXuat sac!\nKet thuc" }, { input: "70", expected: "Diem: 70\nKet thuc" }],
          bugs: [
            { label: "Thiếu dấu :", fixed: c => /if diem >= 90\s*:/.test(c) },
            { label: "Thiếu thụt lề", fixed: c => /^ {2,}print\("Xuat sac!"\)/m.test(c) }
          ],
          why: "Hai con bọ hay gặp nhất của if đã bị diệt!",
          hints: ["Dòng if cần dấu : ở cuối.", "print(\"Xuat sac!\") phải thụt vào 4 dấu cách; print(\"Ket thuc\") giữ sát lề."]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "44D37EA3",
      todo: ["Nghe thầy <b>chốt</b>: 6 phép so sánh, True/False, câu lệnh <code>if</code> và thụt lề.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Chẵn hay lẻ (chỉ dùng if)",
          prompt: "Trong lúc chờ: nhập một số nguyên, in <code>So chan</code> hoặc <code>So le</code>. Chỉ dùng hai lệnh if (chưa cần else).",
          requirements: ['Câu dẫn <code>"So: "</code>.', "Dùng <code>% 2</code>."],
          starter: "",
          tests: [{ input: "8", expected: "So: 8\nSo chan" }, { input: "13", expected: "So: 13\nSo le" }, { input: "0", expected: "So: 0\nSo chan" }],
          why: "n % 2 == 0 là dấu hiệu số chẵn — rất hay dùng.",
          hints: ["if n % 2 == 0:", "if n % 2 == 1:"]
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "if-else · elif",
      kicker: "CHẶNG 3 · NHIỀU NHÁNH",
      title: "if-else và if-elif-else",
      nova: "Cổng game có hai lối: <b>thắng</b> hoặc <b>thua</b>. Bảng xếp hạng còn nhiều lối hơn: Kim cương, Vàng, Bạc, Đồng. Đó là việc của <b>else</b> và <b>elif</b>.",
      objectives: ["Viết if-else", "Viết if-elif-else nhiều nhánh", "Sắp xếp điều kiện đúng thứ tự"],
      lesson: `
        <div class="duo">${soDo("ifelse", "diem >= 50", 'print("Thang")', 'print("Thua")', "Sơ đồ khối của if-else")}
          <div>${codeVaManHinh(`diem = int(input("Diem: "))
if diem >= 50:
    print("Thang!")
else:
    print("Thua, thu lai nhe")`, "Diem: 42\nThua, thu lai nhe", "thang_thua.py", "42")}</div></div>
        ${codeVaManHinh(`diem = int(input("Diem: "))
if diem >= 90:
    hang = "Kim cuong"
elif diem >= 75:
    hang = "Vang"
elif diem >= 50:
    hang = "Bac"
else:
    hang = "Dong"
print("Hang:", hang)`, "Diem: 80\nHang: Vang", "xep_hang.py", "80")}
        ${giaiMa("Giải mã if-elif-else", [
          { code: "else:", y: "Không có điều kiện; chạy khi <b>mọi điều kiện phía trên đều sai</b>." },
          { code: "elif diem >= 75:", y: "“else if”: chỉ được xét khi các điều kiện <b>phía trên đều sai</b>." },
          { code: "luôn chạy đúng MỘT nhánh", y: "Python xét từ trên xuống, gặp điều kiện đúng <b>đầu tiên</b> thì chạy nhánh đó và <b>bỏ qua phần còn lại</b>.", nhan: true },
          { code: "thứ tự điều kiện", y: "Đặt điều kiện <b>khó đạt nhất</b> lên trước (<code>&gt;= 90</code> trước <code>&gt;= 75</code>). Đảo ngược thì mọi điểm cao đều rơi vào nhánh đầu.", nhan: true }
        ])}
        ${cuPhap({ ten: "if-else · if-elif-else",
          mau: ["if ‹điều kiện›:\n    ‹khối khi đúng›\nelse:\n    ‹khối khi sai›", "if ‹đk 1›:\n    ‹khối 1›\nelif ‹đk 2›:\n    ‹khối 2›\nelse:\n    ‹khối còn lại›"],
          quyTac: ["<code>if</code>, <code>elif</code>, <code>else</code> thẳng hàng nhau, mỗi dòng có dấu <code>:</code>", "<code>else</code> không có điều kiện, luôn đứng cuối",
                   "Có thể có nhiều <code>elif</code>; <code>else</code> có thể bỏ", "Luôn chạy <b>tối đa một</b> nhánh"],
          viDu: 'mau = 0\nif mau > 50:\n    print("Khoe")\nelif mau > 0:\n    print("Yeu")\nelse:\n    print("Game over")', man: "Game over" })}
        ${docThem([[W3("python_conditions"), "W3Schools: If … Elif … Else"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "Bẫy thứ tự elif",
          prompt: "Người chơi được 95 điểm — đáng ra phải là hạng Vàng. Nhưng code này in gì?",
          code: 'diem = 95\nif diem >= 50:\n    print("Dong")\nelif diem >= 80:\n    print("Vang")\nelse:\n    print("Truot")',
          options: [
            { text: "Vang", why: "95 >= 50 đã đúng ngay nhánh đầu — elif phía sau không được xét nữa." },
            { text: "Dong" },
            { text: "Dong\nVang", why: "if-elif chỉ chạy tối đa một nhánh." },
            { text: "Truot", why: "else chỉ chạy khi mọi điều kiện trên đều sai." }
          ],
          answer: "Dong",
          why: "Đúng — và đây là con bọ! Phải đặt diem >= 80 lên trước diem >= 50."
        },
        {
          id: "s3-code", type: "code",
          title: "Bảng xếp hạng",
          prompt: "Nhập điểm (0–100); xếp hạng: <b>từ 90</b> Kim cuong, <b>từ 75</b> Vang, <b>từ 50</b> Bac, còn lại Dong.",
          requirements: ['Câu dẫn <code>"Diem: "</code>.', "Dùng if-elif-else.", "Thử kỹ các ca biên 90, 75, 50."],
          starter: 'diem = int(input("Diem: "))\n# Xep hang\n\n',
          tests: [{ input: "90", expected: "Diem: 90\nHang: Kim cuong" }, { input: "89", expected: "Diem: 89\nHang: Vang" },
                  { input: "75", expected: "Diem: 75\nHang: Vang" }, { input: "50", expected: "Diem: 50\nHang: Bac" }, { input: "49", expected: "Diem: 49\nHang: Dong" }],
          rules: [{ test: c => co(c, "\\belif\\b") && co(c, "\\belse\\s*:"), msg: "Dùng if-elif-else (có elif và else)." }],
          why: "Đạt cả 5 ca, kể cả 3 ca biên! Bảng xếp hạng chạy chuẩn.",
          hints: ["Xét từ hạng cao xuống: if diem >= 90 → elif diem >= 75 → elif diem >= 50 → else.", 'Có thể gán hang = "..." trong từng nhánh rồi print("Hang:", hang) ở cuối.']
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "and · or · not",
      kicker: "CHẶNG 4 · TOÁN TỬ LOGIC",
      title: "Kết hợp điều kiện: and, or, not",
      nova: "Cổng VIP chỉ mở khi người chơi <b>đủ tuổi VÀ có vé</b>. Muốn ghép nhiều điều kiện, ta dùng <b>and</b>, <b>or</b>, <b>not</b>.",
      objectives: ["Dùng and, or, not", "Viết điều kiện khoảng 0 <= x <= 100", "Kiểm tra dữ liệu nhập hợp lệ"],
      lesson: `
        <table class="plain"><thead><tr><th>Toán tử</th><th>Đúng khi</th><th>Ví dụ (tuoi = 15, co_ve = False)</th></tr></thead><tbody>
          <tr><td><code>A and B</code></td><td><b>cả hai</b> đều đúng</td><td><code>tuoi &gt;= 12 and co_ve</code> → <code>False</code></td></tr>
          <tr><td><code>A or B</code></td><td><b>ít nhất một</b> đúng</td><td><code>tuoi &gt;= 12 or co_ve</code> → <code>True</code></td></tr>
          <tr><td><code>not A</code></td><td>A <b>sai</b></td><td><code>not co_ve</code> → <code>True</code></td></tr></tbody></table>
        ${codeVaManHinh(`tuoi = int(input("Tuoi: "))
co_ve = input("Co ve? (c/k): ") == "c"
if tuoi >= 12 and co_ve:
    print("Moi vao cong VIP")
else:
    print("Chua vao duoc")`, "Tuoi: 15\nCo ve? (c/k): c\nMoi vao cong VIP", "cong_vip.py", "15\nc")}
        ${giaiMa("Mẹo viết điều kiện", [
          { code: "0 <= diem <= 100", y: "Python cho viết <b>so sánh nối tiếp</b>: giống <code>diem &gt;= 0 and diem &lt;= 100</code>.", nhan: true },
          { code: "if not (0 <= diem <= 100):", y: "Dữ liệu <b>ngoài khoảng</b> → báo không hợp lệ." },
          { code: 'nghe == "a" or nghe == "b"', y: "Mỗi vế của <code>or</code> phải là một phép so sánh đầy đủ — không viết <code>nghe == \"a\" or \"b\"</code>." }
        ])}
        ${cuPhap({ ten: "TOÁN TỬ LOGIC",
          mau: ["‹đk 1› and ‹đk 2›", "‹đk 1› or ‹đk 2›", "not ‹đk›"],
          quyTac: ["Thứ tự ưu tiên: <code>not</code> → <code>and</code> → <code>or</code>; không chắc thì thêm ngoặc tròn", "Viết thường: <code>and</code>, <code>or</code>, <code>not</code> (không dùng && || ! như C++)"],
          viDu: 'nam = 2024\nnhuan = (nam % 4 == 0 and nam % 100 != 0) or nam % 400 == 0\nprint(nhuan)', man: "True" })}
        ${docThem([[W3("python_operators_logical"), "W3Schools: Logical Operators"]])}
      `,
      challenges: [
        {
          id: "s4-predict", type: "choice", bet: true, mono: true,
          title: "and, or, not",
          prompt: "Một người chơi 15 tuổi, chưa có vé. Terminal hiện gì?",
          code: "tuoi = 15\nco_ve = False\nprint(tuoi >= 12 and co_ve, tuoi >= 12 or co_ve, not co_ve)",
          options: [
            { text: "True True True", why: "and cần CẢ HAI đúng — co_ve là False nên vế đầu là False." },
            { text: "False False True", why: "or chỉ cần MỘT vế đúng — tuoi >= 12 đúng nên là True." },
            { text: "False True False", why: "not False là True." },
            { text: "False True True" }
          ],
          answer: "False True True",
          why: "Chuẩn: and cần cả hai, or cần một, not đảo ngược."
        },
        {
          id: "s4-code", type: "code",
          title: "Cổng mật mã",
          prompt: "Cổng chỉ mở khi người chơi <b>từ 12 tuổi trở lên</b> <b>và</b> nhập đúng mật mã <b>2026</b>.",
          requirements: ['Câu dẫn <code>"Tuoi: "</code> và <code>"Mat ma: "</code> (cả hai là số nguyên).', "Một câu lệnh if-else, điều kiện dùng <code>and</code>."],
          starter: 'tuoi = int(input("Tuoi: "))\nma = int(input("Mat ma: "))\n',
          tests: [{ input: "15\n2026", expected: "Tuoi: 15\nMat ma: 2026\nMoi vao!" }, { input: "15\n1111", expected: "Tuoi: 15\nMat ma: 1111\nKhong vao duoc" },
                  { input: "10\n2026", expected: "Tuoi: 10\nMat ma: 2026\nKhong vao duoc" }, { input: "12\n2026", expected: "Tuoi: 12\nMat ma: 2026\nMoi vao!" }],
          rules: [{ test: c => co(c, "\\band\\b"), msg: "Ghép hai điều kiện bằng and." }],
          why: "Cổng mật mã hoạt động! Hai điều kiện ghép bằng and.",
          hints: ["if tuoi >= 12 and ma == 2026:", 'else:\n    print("Khong vao duoc")']
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "8427D020",
      todo: ["Nghe thầy <b>chốt</b>: if-else, if-elif-else, thứ tự điều kiện, and/or/not.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Năm nhuận",
          prompt: "Trong lúc chờ: năm nhuận là năm chia hết cho 4 nhưng không chia hết cho 100, <b>hoặc</b> chia hết cho 400. Nhập năm, in kết luận.",
          requirements: ['Câu dẫn <code>"Nam: "</code>.', "In <code>… la nam nhuan</code> hoặc <code>… khong phai nam nhuan</code>."],
          starter: "",
          tests: [{ input: "2024", expected: "Nam: 2024\n2024 la nam nhuan" }, { input: "1900", expected: "Nam: 1900\n1900 khong phai nam nhuan" },
                  { input: "2000", expected: "Nam: 2000\n2000 la nam nhuan" }, { input: "2026", expected: "Nam: 2026\n2026 khong phai nam nhuan" }],
          why: "Một điều kiện kết hợp cả and và or — có ngoặc cho rõ.",
          hints: ["(nam % 4 == 0 and nam % 100 != 0) or nam % 400 == 0"]
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Người Gác Cổng", kicker: "BOSS · BÀI 3",
      title: "Boss: Người Gác Cổng",
      bossName: "Người Gác Cổng",
      bossLine: "Muốn qua cổng này, mọi nhánh rẽ của ngươi phải đúng — kể cả những ca biên!",
      nova: "Người Gác Cổng soi từng ca biên. <b>Tự làm một mình</b>, và nhớ thử nhiều giá trị nhập khác nhau.",
      objectives: ["Đọc if-elif-else với dữ liệu nhập", "Săn 3 bọ cú pháp của if", "Viết chương trình nhiều nhánh"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Dò nhánh",
          prompt: "Người dùng gõ <code>-3</code> (không có câu dẫn). Terminal hiện gì?",
          code: 'x = int(input())\nif x > 0:\n    print("Duong")\nelif x < 0:\n    print("Am")\nelse:\n    print("Bang 0")', input: "-3",
          options: [
            { text: "Am", why: "input() không có câu dẫn nhưng terminal vẫn hiện lại số người dùng gõ." },
            { text: "-3\nAm" },
            { text: "-3\nDuong\nAm", why: "if-elif-else chỉ chạy một nhánh." },
            { text: "-3\nBang 0", why: "−3 < 0 đúng nên chạy nhánh elif." }
          ],
          answer: "-3\nAm",
          why: "Đòn trúng đích!"
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Ba con bọ ở cổng",
          prompt: "Người Gác Cổng cài 3 con bọ. Sửa để chương trình chạy đúng cả 3 ca.",
          requirements: ["Giữ nguyên câu dẫn và các dòng chữ in ra.", "Giữ cấu trúc if-elif-else."],
          starter: 'tuoi = int(input("Tuoi: "))\nif tuoi = 18:\n    print("Vua du 18!")\nelif tuoi > 18\n    print("Tren 18")\nelse:\nprint("Duoi 18")\n',
          tests: [{ input: "18", expected: "Tuoi: 18\nVua du 18!" }, { input: "20", expected: "Tuoi: 20\nTren 18" }, { input: "16", expected: "Tuoi: 16\nDuoi 18" }],
          bugs: [
            { label: "= thay cho ==", fixed: c => /if tuoi == 18\s*:/.test(c) },
            { label: "Thiếu dấu :", fixed: c => /elif tuoi > 18\s*:/.test(c) },
            { label: "else thiếu thụt lề", fixed: c => /else:\s*\n {2,}print\("Duoi 18"\)/.test(c) }
          ],
          why: "Ba con bọ của if đã bị hạ — Người Gác Cổng lảo đảo!",
          hints: ["Đọc thông báo lỗi: mỗi lần Python báo một lỗi đầu tiên.", "== để so sánh · dấu : cuối elif · thụt lề dòng sau else:"]
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Tính sát thương",
          prompt: "Nhập sức công (số nguyên) và loại đòn: <code>thuong</code> (sát thương = công), <code>chi mang</code> (gấp đôi), <code>phep</code> (công + 30). Loại khác: báo không hợp lệ.",
          requirements: ['Câu dẫn <code>"Suc cong: "</code> và <code>"Loai don: "</code>.', "In <code>Sat thuong: …</code> hoặc <code>Don khong hop le</code>.", "Có ít nhất 1 comment."],
          starter: "",
          tests: [{ input: "40\nthuong", expected: "Suc cong: 40\nLoai don: thuong\nSat thuong: 40" },
                  { input: "40\nchi mang", expected: "Suc cong: 40\nLoai don: chi mang\nSat thuong: 80" },
                  { input: "25\nphep", expected: "Suc cong: 25\nLoai don: phep\nSat thuong: 55" },
                  { input: "40\nne", expected: "Suc cong: 40\nLoai don: ne\nDon khong hop le" }],
          rules: [{ test: c => co(c, "\\belif\\b"), msg: "Dùng if-elif-else cho các loại đòn." }, { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment." }],
          why: "Người Gác Cổng đã gục! Bạn vừa viết hệ thống chiến đấu thu nhỏ.",
          hints: ['loai = input("Loai don: ")', 'if loai == "thuong": … elif loai == "chi mang": … elif loai == "phep": … else: …']
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Ba cạnh tam giác",
          prompt: "Nhập 3 cạnh (số nguyên dương). Nếu không tạo được tam giác thì báo; nếu được thì in loại: đều, cân, hoặc thường.",
          requirements: ['Câu dẫn <code>"a = "</code>, <code>"b = "</code>, <code>"c = "</code>.', "Tam giác khi tổng hai cạnh bất kỳ lớn hơn cạnh còn lại."],
          starter: "",
          tests: [{ input: "3\n3\n3", expected: "a = 3\nb = 3\nc = 3\nTam giac deu" }, { input: "5\n5\n8", expected: "a = 5\nb = 5\nc = 8\nTam giac can" },
                  { input: "3\n4\n5", expected: "a = 3\nb = 4\nc = 5\nTam giac thuong" }, { input: "1\n2\n3", expected: "a = 1\nb = 2\nc = 3\nKhong phai tam giac" },
                  { input: "4\n9\n4", expected: "a = 4\nb = 9\nc = 4\nKhong phai tam giac" }],
          why: "Kiểm tra hợp lệ trước, phân loại sau — thứ tự điều kiện rất quan trọng.",
          hints: ["if a + b > c and a + c > b and b + c > a: …", "Đều trước (a == b == c), rồi cân (a == b or b == c or a == c)."]
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: Phương trình ax + b = 0",
          prompt: "Nhập a, b (số thực). Giải phương trình <code>ax + b = 0</code>: một nghiệm, vô nghiệm, hoặc vô số nghiệm.",
          requirements: ['Câu dẫn <code>"a = "</code> và <code>"b = "</code>; đọc bằng <code>float()</code>.', "Một nghiệm: in <code>x = …</code> (kết quả -b / a)."],
          starter: "",
          tests: [{ input: "2\n-4", expected: "a = 2\nb = -4\nx = 2.0" }, { input: "0\n5", expected: "a = 0\nb = 5\nVo nghiem" },
                  { input: "0\n0", expected: "a = 0\nb = 0\nVo so nghiem" }, { input: "4\n1", expected: "a = 4\nb = 1\nx = -0.25" }],
          why: "Bài toán kinh điển trong SGK — bạn đã xử lý đủ 3 trường hợp.",
          hints: ["Trường hợp a == 0 phải xét riêng (không chia cho 0).", 'if a == 0 and b == 0: … elif a == 0: … else: print("x =", -b / a)']
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: bốn bài rẽ nhánh",
      nova: "Bốn bài rẽ nhánh khó dần — bài cuối là một câu hỏi phỏng vấn lập trình viên thật đấy. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("Trước khi code, liệt kê các ca kiểm thử (bình thường, biên, bẫy) — rồi mới viết if.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Lớn nhất trong ba",
          prompt: "Nhập điểm 3 người chơi; in điểm cao nhất. Không dùng hàm max.",
          requirements: ['Câu dẫn <code>"a = "</code>, <code>"b = "</code>, <code>"c = "</code>.', "Chỉ dùng if/elif/else."],
          starter: "",
          tests: [{ input: "5\n9\n2", expected: "a = 5\nb = 9\nc = 2\nCao nhat: 9" }, { input: "7\n7\n3", expected: "a = 7\nb = 7\nc = 3\nCao nhat: 7" },
                  { input: "1\n2\n8", expected: "a = 1\nb = 2\nc = 8\nCao nhat: 8" }],
          rules: [{ test: c => !/\bmax\s*\(/.test(window.PY.codeOnly(c)), msg: "Không dùng hàm max — tự so sánh bằng if." }],
          why: "Đúng cả ca hai số bằng nhau!",
          hints: ["lon = a; if b > lon: lon = b; if c > lon: lon = c"]
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Tiền điện bậc thang",
          prompt: "Giá điện (giản lược): 50 kWh đầu giá 1800 đ/kWh; từ kWh 51 đến 100 giá 2000; từ kWh 101 trở đi giá 2500. Nhập số kWh, in tiền điện.",
          requirements: ['Câu dẫn <code>"So kWh: "</code>.', "In <code>Tien dien: … dong</code>."],
          starter: "",
          tests: [{ input: "40", expected: "So kWh: 40\nTien dien: 72000 dong" }, { input: "50", expected: "So kWh: 50\nTien dien: 90000 dong" },
                  { input: "80", expected: "So kWh: 80\nTien dien: 150000 dong" }, { input: "130", expected: "So kWh: 130\nTien dien: 265000 dong" }],
          why: "Bài tiền điện là ví dụ quen thuộc trong SGK — mỗi bậc chỉ tính phần vượt.",
          hints: ["kWh ≤ 50: kwh * 1800", "51–100: 50 * 1800 + (kwh - 50) * 2000", "> 100: 50 * 1800 + 50 * 2000 + (kwh - 100) * 2500"]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Kéo – búa – bao",
          prompt: "Hai người chơi nhập lựa chọn (<code>keo</code>, <code>bua</code>, <code>bao</code>). Búa thắng kéo, kéo thắng bao, bao thắng búa.",
          requirements: ['Câu dẫn <code>"Nguoi 1: "</code>, <code>"Nguoi 2: "</code>.', "In <code>Hoa</code>, <code>Nguoi 1 thang</code> hoặc <code>Nguoi 2 thang</code>."],
          starter: "",
          tests: [{ input: "bua\nkeo", expected: "Nguoi 1: bua\nNguoi 2: keo\nNguoi 1 thang" }, { input: "keo\nbua", expected: "Nguoi 1: keo\nNguoi 2: bua\nNguoi 2 thang" },
                  { input: "bao\nbao", expected: "Nguoi 1: bao\nNguoi 2: bao\nHoa" }, { input: "keo\nbao", expected: "Nguoi 1: keo\nNguoi 2: bao\nNguoi 1 thang" }],
          rules: [{ test: c => window.KIT.co(c, "\\bor\\b|\\band\\b"), msg: "Dùng and/or để gom các trường hợp thắng." }],
          why: "Gom 3 cặp thắng bằng or — code ngắn hơn nhiều so với 9 nhánh if.",
          hints: ['if p1 == p2: Hoa', '(p1 == "bua" and p2 == "keo") or (p1 == "keo" and p2 == "bao") or (p1 == "bao" and p2 == "bua")']
        },
        {
          id: "x4", type: "code", level: 3,
          title: "FizzBuzz một số",
          prompt: "Bài phỏng vấn kinh điển: nhập n. Chia hết cho cả 3 và 5 in <code>FizzBuzz</code>; chỉ chia hết cho 3 in <code>Fizz</code>; chỉ chia hết cho 5 in <code>Buzz</code>; còn lại in chính số đó.",
          requirements: ['Câu dẫn <code>"n = "</code>.', "Chú ý thứ tự điều kiện!"],
          starter: "",
          tests: [{ input: "15", expected: "n = 15\nFizzBuzz" }, { input: "9", expected: "n = 9\nFizz" }, { input: "20", expected: "n = 20\nBuzz" },
                  { input: "7", expected: "n = 7\n7" }, { input: "0", expected: "n = 0\nFizzBuzz" }],
          why: "Điều kiện chặt nhất (chia hết cho 15) phải đặt đầu tiên — đúng bài học về thứ tự elif.",
          hints: ["if n % 15 == 0 (hoặc n % 3 == 0 and n % 5 == 0) đặt trước."]
        }
      ]
    }
  ]
};
})();
