/* Bài 6 — List và tuple: tạo list, chỉ số (âm), len, sửa, append/insert/remove/pop/clear, in, duyệt, sum/max/min, tuple
   Nhiệm vụ studio: Túi đồ của nhân vật. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai06", number: 6,
  title: "List và tuple",
  story: "Túi đồ của nhân vật",
  skills: ["Tạo list", "Chỉ số, chỉ số âm", "len()", "append · insert · remove · pop", "Toán tử in", "Duyệt list", "sum · max · min", "Tuple (x, y)"],

  errorTable: [
    ["IndexError: list index out of range", "Chỉ số vượt quá phạm vi — list có n phần tử thì chỉ số từ 0 đến n − 1", "Phần tử cuối: <code>ds[-1]</code> hoặc <code>ds[len(ds) - 1]</code>"],
    ["ValueError: list.remove(x): x not in list", "Xoá phần tử không có trong list", "Kiểm tra trước: <code>if x in ds: ds.remove(x)</code>"],
    ["AttributeError: 'list' object has no attribute 'add'", "list không có phương thức add", "Thêm cuối list: <code>ds.append(x)</code>"],
    ["TypeError: 'tuple' object does not support item assignment", "Sửa phần tử của tuple", "Tuple không sửa được — tạo tuple mới: <code>vi_tri = (x, y)</code>"],
    ["IndexError: pop from empty list", "pop() khi list rỗng", "Kiểm tra <code>if len(ds) &gt; 0:</code> trước khi pop"],
    ["In ra None", "Gán kết quả của <code>ds.append(x)</code> cho biến (append trả về None)", "Chỉ gọi <code>ds.append(x)</code>, không gán"],
    ["TypeError: unsupported operand type(s) for +: 'int' and 'str'", "sum() trên list có chuỗi (chưa đổi int)", "Đổi kiểu khi thêm: <code>ds.append(int(input()))</code>"],
    ["Lặp thiếu phần tử cuối", "<code>range(len(ds) - 1)</code>", "Duyệt đủ: <code>for i in range(len(ds))</code>"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "List & chỉ số",
      kicker: "CHẶNG 1 · KIỂU DANH SÁCH",
      title: "List: một biến chứa nhiều giá trị",
      nova: "Túi đồ của nhân vật có kiếm, khiên, bình máu… Tạo 20 biến <code>mon1</code>, <code>mon2</code>… thì quá cực. Python có <b>list</b> — một biến chứa cả danh sách.",
      objectives: ["Tạo list", "Truy cập phần tử bằng chỉ số (kể cả chỉ số âm)", "Dùng len()"],
      lesson: `
        ${codeVaManHinh(`tui = ["kiem", "khien", "binh mau", "cung"]
print(tui)
print(tui[0])
print(tui[-1])
print("So mon:", len(tui))`, "['kiem', 'khien', 'binh mau', 'cung']\nkiem\ncung\nSo mon: 4", "tui_do.py")}
        <table class="plain"><thead><tr><th>Phần tử</th><th>"kiem"</th><th>"khien"</th><th>"binh mau"</th><th>"cung"</th></tr></thead><tbody>
          <tr><td>Chỉ số</td><td><code>0</code></td><td><code>1</code></td><td><code>2</code></td><td><code>3</code></td></tr>
          <tr><td>Chỉ số âm</td><td><code>-4</code></td><td><code>-3</code></td><td><code>-2</code></td><td><code>-1</code></td></tr></tbody></table>
        ${giaiMa("Giải mã list", [
          { code: 'tui = ["kiem", "khien"]', y: "List viết trong ngoặc vuông <code>[ ]</code>, các phần tử cách nhau dấu phẩy. Có thể chứa số, chuỗi, cả hai." },
          { code: "tui[0]", y: "Chỉ số <b>bắt đầu từ 0</b> — phần tử đầu là <code>tui[0]</code>.", nhan: true },
          { code: "tui[-1]", y: "Chỉ số âm đếm từ cuối: <code>-1</code> là phần tử cuối." },
          { code: "len(tui)", y: "Số phần tử của list." },
          { code: "tui[4]", y: "List có 4 phần tử thì chỉ số lớn nhất là 3 → <b>IndexError</b>.", nhan: true }
        ])}
        ${cuPhap({ ten: "LIST",
          mau: ["‹tên› = [‹phần tử 1›, ‹phần tử 2›, …]", "‹tên›[‹chỉ số›]      len(‹tên›)"],
          quyTac: ["Chỉ số từ <code>0</code> đến <code>len − 1</code>", "Chỉ số âm: <code>-1</code> là phần tử cuối", "List rỗng: <code>[]</code>"],
          viDu: "diem = [7, 9, 10]\nprint(diem[1] + diem[-1])\nprint(len(diem))", man: "19\n3" })}
        ${docThem([[W3("python_lists"), "W3Schools: Lists"], [DOCS("tutorial/introduction.html#lists"), "Python Tutorial — Lists"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Chỉ số dương, chỉ số âm",
          prompt: "Túi đồ có 4 món. Terminal hiện gì?",
          code: 'tui = ["kiem", "khien", "binh mau", "cung"]\nprint(tui[1], tui[-2], len(tui))',
          options: [
            { text: "kiem cung 4", why: "Chỉ số bắt đầu từ 0: tui[1] là phần tử thứ hai." },
            { text: "khien binh mau 4" },
            { text: "khien cung 4", why: "tui[-2] là phần tử kế cuối, không phải cuối." },
            { text: "khien binh mau 3", why: "len đếm số phần tử: 4." }
          ],
          answer: "khien binh mau 4",
          why: "Chuẩn! [1] là món thứ hai, [-2] là món kế cuối."
        },
        {
          id: "s1-code", type: "code",
          title: "Kiểm kê túi đồ",
          prompt: "Túi đồ đã có sẵn. In món đầu, món cuối và số món — dùng chỉ số và <code>len</code>, không gõ thẳng tên món.",
          requirements: ["Dùng <code>tui[0]</code>, <code>tui[-1]</code>, <code>len(tui)</code>.", "Không sửa dòng tạo list."],
          starter: 'tui = ["kiem go", "giap da", "binh mau", "ban do", "chia khoa"]\n',
          expected: "Mon dau: kiem go\nMon cuoi: chia khoa\nSo mon: 5",
          rules: [{ test: c => co(c, "tui\\[\\s*0\\s*\\]") && co(c, "tui\\[\\s*-1\\s*\\]") && co(c, "len\\(\\s*tui\\s*\\)"), msg: "Dùng tui[0], tui[-1] và len(tui)." },
                  { test: c => (window.PY.stripComments(c).match(/"kiem go"/g) || []).length === 1, msg: "Không gõ thẳng tên món vào print — lấy từ list." }],
          why: "Code này vẫn đúng dù túi đồ thay đổi — sức mạnh của chỉ số âm và len().",
          hints: ['print("Mon dau:", tui[0])', 'print("So mon:", len(tui))']
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Thêm, xoá, sửa",
      kicker: "CHẶNG 2 · THAY ĐỔI LIST",
      title: "Thêm, xoá, sửa phần tử",
      nova: "Nhặt được đồ mới thì thêm vào túi, dùng xong bình máu thì bỏ ra. List thay đổi được — đó là điểm mạnh nhất của nó.",
      objectives: ["Sửa phần tử theo chỉ số", "Dùng append, insert, remove, pop, clear", "Kiểm tra phần tử bằng in"],
      lesson: `
        ${codeVaManHinh(`tui = ["kiem", "khien"]
tui.append("cung")
tui.insert(0, "mu")
tui.remove("khien")
cuoi = tui.pop()
tui[0] = "mu sat"
print(tui, cuoi)
print("kiem" in tui, "giap" in tui)`, "['mu sat', 'kiem'] cung\nTrue False", "thay_doi.py")}
        ${giaiMa("Các thao tác với list", [
          { code: "ds[i] = x", y: "Sửa phần tử ở chỉ số <code>i</code>." },
          { code: "ds.append(x)", y: "Thêm <code>x</code> vào <b>cuối</b> list.", nhan: true },
          { code: "ds.insert(i, x)", y: "Chèn <code>x</code> vào vị trí <code>i</code>, các phần tử sau lùi lại." },
          { code: "ds.remove(x)", y: "Xoá phần tử <b>có giá trị</b> <code>x</code> (lần xuất hiện đầu tiên)." },
          { code: "ds.pop() / ds.pop(i)", y: "Lấy ra và xoá phần tử cuối / phần tử ở chỉ số <code>i</code>." },
          { code: "ds.clear()", y: "Xoá hết, list thành <code>[]</code>." },
          { code: "x in ds", y: "<code>True</code> nếu <code>x</code> có trong list.", nhan: true }
        ])}
        ${cuPhap({ ten: "THAO TÁC VỚI LIST",
          mau: ["‹list›.append(‹x›)   ‹list›.insert(‹i›, ‹x›)", "‹list›.remove(‹x›)   ‹list›.pop(‹i›)   ‹list›.clear()", "‹x› in ‹list›"],
          quyTac: ["Phương thức gọi bằng dấu chấm: <code>tui.append(…)</code>", "remove xoá theo <b>giá trị</b>, pop xoá theo <b>chỉ số</b>", "Xoá phần tử không có → <code>ValueError</code>; kiểm tra bằng <code>in</code> trước"],
          viDu: 'ds = [3, 7, 9]\nds.append(5)\nds.insert(0, 1)\nds.remove(7)\nprint(ds)', man: "[1, 3, 9, 5]" })}
        ${meo("Tạo list rỗng rồi thêm dần trong vòng lặp là mẫu cực kỳ phổ biến: <code>ds = []</code> → <code>ds.append(x)</code>.")}
        ${docThem([[W3("python_lists_add"), "W3Schools: Add List Items"], [W3("python_lists_remove"), "W3Schools: Remove List Items"]])}
      `,
      challenges: [
        {
          id: "s2-predict", type: "choice", bet: true, mono: true,
          title: "Bốn thao tác liên tiếp",
          prompt: "List thay đổi qua 4 lệnh. Terminal hiện gì?",
          code: "ds = [10, 20, 30]\nds.append(40)\nds.insert(1, 15)\nds.pop(0)\nds.remove(30)\nprint(ds)",
          options: [
            { text: "[15, 20, 40]" },
            { text: "[10, 15, 20, 40]", why: "pop(0) lấy ra và xoá phần tử ở chỉ số 0 (là 10)." },
            { text: "[15, 20, 30, 40]", why: "remove(30) xoá giá trị 30." },
            { text: "[20, 40]", why: "insert(1, 15) chèn 15 vào vị trí 1 — nó vẫn còn trong list." }
          ],
          answer: "[15, 20, 40]",
          why: "Đúng: [10,20,30] → +40 → chèn 15 → bỏ 10 → bỏ 30."
        },
        {
          id: "s2-code", type: "code",
          title: "Cập nhật túi đồ",
          prompt: "Nhập tên một món mới, thêm vào cuối túi; rồi bỏ <code>khien</code> ra khỏi túi. In túi và số món.",
          requirements: ['Câu dẫn <code>"Mon moi: "</code>.', "Dùng <code>append</code> và <code>remove</code>."],
          starter: 'tui = ["kiem", "khien", "binh mau"]\n',
          tests: [{ input: "cung", expected: "Mon moi: cung\n['kiem', 'binh mau', 'cung']\nSo mon: 3" },
                  { input: "giap", expected: "Mon moi: giap\n['kiem', 'binh mau', 'giap']\nSo mon: 3" }],
          rules: [{ test: c => co(c, "\\.append\\(") && co(c, "\\.remove\\("), msg: "Dùng tui.append(...) và tui.remove(...)." }],
          why: "Túi đồ cập nhật chuẩn!",
          hints: ['moi = input("Mon moi: ")\ntui.append(moi)', 'tui.remove("khien")\nprint(tui)']
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "571A5864",
      todo: ["Nghe thầy <b>chốt</b>: tạo list, chỉ số từ 0, chỉ số âm, append/insert/remove/pop, toán tử <code>in</code>.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Có trong túi không?",
          prompt: "Trong lúc chờ: nhập tên món cần tìm, in <code>Co trong tui</code> hoặc <code>Khong co</code>.",
          requirements: ['Câu dẫn <code>"Tim: "</code>.', "Dùng toán tử <code>in</code>."],
          starter: 'tui = ["kiem", "khien", "binh mau", "cung"]\n',
          tests: [{ input: "cung", expected: "Tim: cung\nCo trong tui" }, { input: "giap", expected: "Tim: giap\nKhong co" }],
          rules: [{ test: c => co(c, "\\bin\\s+tui\\b"), msg: "Dùng toán tử in: if mon in tui:" }],
          why: "Một dòng in thay cho cả vòng lặp tìm kiếm.",
          hints: ['if mon in tui:\n    print("Co trong tui")']
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "Duyệt list",
      kicker: "CHẶNG 3 · DUYỆT LIST",
      title: "Duyệt list và sum, max, min",
      nova: "Cuối màn chơi, mình cần tính tổng điểm, điểm cao nhất của cả đội. Kết hợp <b>for</b> với list là xong — Python còn có sẵn <b>sum, max, min</b>.",
      objectives: ["Duyệt list bằng for … in", "Duyệt theo chỉ số bằng range(len(…))", "Dùng sum, max, min"],
      lesson: `
        ${codeVaManHinh(`diem = [8, 5, 10, 7]
for d in diem:
    print("Diem:", d)
print("Tong:", sum(diem), "| Cao nhat:", max(diem), "| Thap nhat:", min(diem))`, "Diem: 8\nDiem: 5\nDiem: 10\nDiem: 7\nTong: 30 | Cao nhat: 10 | Thap nhat: 5", "duyet.py")}
        ${codeVaManHinh(`ten = ["An", "Binh", "Chi"]
for i in range(len(ten)):
    print(i + 1, ten[i])`, "1 An\n2 Binh\n3 Chi", "theo_chi_so.py")}
        ${giaiMa("Hai cách duyệt list", [
          { code: "for x in ds:", y: "Lấy lần lượt <b>từng giá trị</b>. Dùng khi chỉ cần giá trị.", nhan: true },
          { code: "for i in range(len(ds)):", y: "Lấy lần lượt <b>từng chỉ số</b> <code>i</code>; giá trị là <code>ds[i]</code>. Dùng khi cần biết vị trí." },
          { code: "sum(ds)  max(ds)  min(ds)", y: "Tổng, lớn nhất, nhỏ nhất của list số." }
        ])}
        ${cuPhap({ ten: "DUYỆT LIST",
          mau: ["for ‹x› in ‹list›:\n    ‹dùng x›", "for ‹i› in range(len(‹list›)):\n    ‹dùng list[i]›"],
          quyTac: ["Mẫu nhập list: <code>ds = []</code>, rồi trong vòng lặp <code>ds.append(...)</code>", "Trung bình: <code>sum(ds) / len(ds)</code> (list không rỗng)"],
          viDu: "ds = []\nfor i in range(3):\n    ds.append(i * 10)\nprint(ds, sum(ds) / len(ds))", man: "[0, 10, 20] 10.0" })}
        ${moRong("list comprehension", `<p>Python có cách tạo list “một dòng”: <code>[biểu thức for x in …]</code>.</p>
          ${codeVaManHinh("binh_phuong = [x * x for x in range(1, 6)]\nchan = [x for x in binh_phuong if x % 2 == 0]\nprint(binh_phuong, chan)", "[1, 4, 9, 16, 25] [4, 16]", "comprehension.py")}`)}
        ${docThem([[W3("python_lists_loop"), "W3Schools: Loop Lists"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "Cộng có điều kiện",
          prompt: "Chỉ cộng các điểm từ 7 trở lên. Terminal hiện gì?",
          code: "diem = [8, 5, 10, 7, 6]\ntong = 0\nfor d in diem:\n    if d >= 7:\n        tong += d\nprint(tong)",
          options: [{ text: "36", why: "Chỉ cộng điểm >= 7: bỏ 5 và 6." }, { text: "25" }, { text: "18", why: "7 >= 7 là True — điểm 7 cũng được cộng." }, { text: "3", why: "tong cộng giá trị, không đếm số lượng." }],
          answer: "25",
          why: "Đúng: 8 + 10 + 7 = 25."
        },
        {
          id: "s3-code", type: "code",
          title: "Bảng điểm đội",
          prompt: "Nhập số thành viên n và điểm từng người (câu dẫn <code>Diem 1: </code>…) vào một list. In list, điểm cao nhất, thấp nhất, trung bình (round 2).",
          requirements: ['Câu dẫn <code>"So thanh vien: "</code>.', "Dùng list + <code>append</code>, rồi <code>max</code>, <code>min</code>, <code>sum</code>, <code>len</code>."],
          starter: 'n = int(input("So thanh vien: "))\nds = []\n',
          tests: [{ input: "3\n8\n10\n7", expected: "So thanh vien: 3\nDiem 1: 8\nDiem 2: 10\nDiem 3: 7\n[8, 10, 7]\nCao nhat: 10\nThap nhat: 7\nTrung binh: 8.33" },
                  { input: "1\n5", expected: "So thanh vien: 1\nDiem 1: 5\n[5]\nCao nhat: 5\nThap nhat: 5\nTrung binh: 5.0" }],
          rules: [{ test: c => co(c, "\\.append\\(") && co(c, "\\bmax\\(") && co(c, "\\bsum\\("), msg: "Dùng append để tạo list, rồi max, min, sum." }],
          why: "Nhập → lưu vào list → xử lý: mẫu cho mọi bài thống kê.",
          hints: ['for i in range(1, n + 1):\n    ds.append(int(input(f"Diem {i}: ")))', 'print("Trung binh:", round(sum(ds) / len(ds), 2))']
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "Tuple",
      kicker: "CHẶNG 4 · KIỂU TUPLE",
      title: "Tuple: bộ giá trị không đổi",
      nova: "Vị trí nhân vật trên bản đồ là một cặp <b>(x, y)</b>. Python có <b>tuple</b> — giống list nhưng <b>không sửa được</b>, rất hợp để lưu toạ độ. Pygame dùng tuple khắp nơi!",
      objectives: ["Tạo tuple, truy cập phần tử", "Gán tách x, y = vi_tri", "Biết tuple không sửa được"],
      lesson: `
        ${codeVaManHinh(`vi_tri = (3, 5)
mau_do = (255, 0, 0)
print(vi_tri[0], vi_tri[1])
x, y = vi_tri
vi_tri = (x + 2, y - 1)
print("Vi tri moi:", vi_tri)
print("Mau:", mau_do)`, "3 5\nVi tri moi: (5, 4)\nMau: (255, 0, 0)", "toa_do.py")}
        ${giaiMa("Giải mã tuple", [
          { code: "vi_tri = (3, 5)", y: "Tuple viết trong <b>ngoặc tròn</b>. Truy cập bằng chỉ số như list." },
          { code: "x, y = vi_tri", y: "<b>Gán tách</b>: x nhận 3, y nhận 5.", nhan: true },
          { code: "vi_tri[0] = 7", y: "<b>TypeError</b> — tuple không sửa được. Muốn đổi thì tạo tuple mới.", nhan: true },
          { code: "(255, 0, 0)", y: "Màu RGB trong pygame cũng là một tuple 3 số." }
        ])}
        ${cuPhap({ ten: "TUPLE",
          mau: ["‹tên› = (‹giá trị 1›, ‹giá trị 2›, …)", "‹a›, ‹b› = ‹tuple›"],
          quyTac: ["Truy cập bằng chỉ số: <code>t[0]</code>; có <code>len(t)</code>, <code>x in t</code>", "Không có append/remove; không gán <code>t[i] = …</code>",
                   "Dùng tuple cho dữ liệu cố định: toạ độ, màu, kích thước cửa sổ"],
          viDu: "kich_thuoc = (800, 600)\nrong, cao = kich_thuoc\nprint(rong * cao)", man: "480000" })}
        ${luuY("Tuple một phần tử phải có dấu phẩy: <code>(5,)</code>. Viết <code>(5)</code> chỉ là số 5 trong ngoặc.")}
        ${docThem([[W3("python_tuples"), "W3Schools: Tuples"]])}
      `,
      challenges: [
        {
          id: "s4-predict", type: "choice", bet: true, mono: true,
          title: "Gán tách",
          prompt: "Gán tách rồi đổi x. Tuple <code>vi_tri</code> có đổi theo không? Terminal hiện gì?",
          code: "vi_tri = (3, 5)\nx, y = vi_tri\nx += 2\nprint(x, y, vi_tri)",
          options: [{ text: "5 5 (5, 5)", why: "x là biến riêng; đổi x không làm đổi tuple." }, { text: "5 5 (3, 5)" },
                    { text: "3 5 (3, 5)", why: "x += 2 đổi x thành 5." }, { text: "TypeError", why: "Đổi biến x là hợp lệ — chỉ gán vào phần tử tuple mới lỗi." }],
          answer: "5 5 (3, 5)",
          why: "Đúng: x là bản sao giá trị, tuple vẫn nguyên."
        },
        {
          id: "s4-code", type: "code",
          title: "Di chuyển nhân vật",
          prompt: "Nhân vật đang ở <code>(10, 20)</code>. Nhập dx, dy; tạo tuple vị trí mới và in ra.",
          requirements: ['Câu dẫn <code>"dx = "</code>, <code>"dy = "</code>.', "Gán tách x, y từ tuple; tạo tuple mới."],
          starter: "vi_tri = (10, 20)\n",
          tests: [{ input: "3\n-2", expected: "dx = 3\ndy = -2\nVi tri moi: (13, 18)" }, { input: "0\n0", expected: "dx = 0\ndy = 0\nVi tri moi: (10, 20)" }],
          rules: [{ test: c => co(c, "\\w+\\s*,\\s*\\w+\\s*=\\s*vi_tri"), msg: "Gán tách: x, y = vi_tri" }],
          why: "Đây chính là cách pygame cập nhật vị trí nhân vật mỗi khung hình!",
          hints: ["x, y = vi_tri", "vi_tri = (x + dx, y + dy)"]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "1D829A1A",
      todo: ["Nghe thầy <b>chốt</b>: duyệt list, sum/max/min, tuple và gán tách.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Đảo ngược đội hình",
          prompt: "Trong lúc chờ: in các thành viên theo thứ tự ngược lại, mỗi người một dòng — dùng range với bước âm (chưa dùng reverse).",
          requirements: ["Duyệt chỉ số từ cuối về đầu."],
          starter: 'doi = ["An", "Binh", "Chi", "Dung"]\n',
          expected: "Dung\nChi\nBinh\nAn",
          rules: [{ test: c => co(c, "range\\(") && !/reverse|\[::-1\]/.test(c), msg: "Dùng range(len(doi) - 1, -1, -1), không dùng reverse." }],
          why: "range(len - 1, -1, -1) — đi từ chỉ số cuối về 0.",
          hints: ["for i in range(len(doi) - 1, -1, -1):\n    print(doi[i])"]
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Kẻ Trộm Túi Đồ", kicker: "BOSS · BÀI 6",
      title: "Boss: Kẻ Trộm Túi Đồ",
      bossName: "Kẻ Trộm Túi Đồ",
      bossLine: "Ta sẽ lấy món đầu, món cuối… xem ngươi còn đếm nổi chỉ số không!",
      nova: "Kẻ Trộm thích làm rối chỉ số. <b>Tự làm một mình</b> — nhớ: chỉ số bắt đầu từ 0.",
      objectives: ["Dò pop", "Sửa bọ chỉ số", "Lọc vật phẩm hiếm"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Bị trộm hai món",
          prompt: "Kẻ Trộm lấy đi hai món. Terminal hiện gì?",
          code: 'tui = ["a", "b", "c", "d"]\ntui.pop()\ntui.pop(0)\nprint(tui, len(tui))',
          options: [{ text: "['a', 'b'] 2", why: "pop(0) lấy phần tử ĐẦU, không phải phần tử thứ hai từ cuối." }, { text: "['b', 'c'] 2" },
                    { text: "['b', 'c', 'd'] 3", why: "pop() không có chỉ số thì lấy phần tử CUỐI." }, { text: "['c', 'd'] 2", why: "Lần pop đầu tiên lấy 'd' (cuối)." }],
          answer: "['b', 'c'] 2",
          why: "Đòn chuẩn!"
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Ba bọ chỉ số",
          prompt: "Chương trình kiểm kê bị 3 con bọ. Sửa cho đúng mẫu.",
          requirements: ["Giữ nguyên list ban đầu.", "In món đầu, món cuối, rồi thêm giáp vào cuối túi."],
          starter: 'tui = ["kiem", "khien", "cung"]\nprint("Mon dau:", tui[1])\nprint("Mon cuoi:", tui[3])\ntui.add("giap")\nprint(tui)\n',
          expected: "Mon dau: kiem\nMon cuoi: cung\n['kiem', 'khien', 'cung', 'giap']",
          bugs: [
            { label: "Chỉ số đầu là 0", fixed: c => /"Mon dau:",\s*tui\[0\]/.test(c) },
            { label: "Chỉ số vượt phạm vi", fixed: c => /"Mon cuoi:",\s*tui\[(-1|2|len\(tui\)\s*-\s*1)\]/.test(c) },
            { label: "list không có add", fixed: c => /tui\.append\("giap"\)/.test(c) }
          ],
          why: "Ba con bọ hay gặp nhất của list đã bị diệt!",
          hints: ["Chỉ số đầu: 0. Chỉ số cuối: -1.", "Thêm cuối list: append."]
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Lọc vật phẩm hiếm",
          prompt: "Nhập n và giá n vật phẩm. Tạo list mới chỉ gồm vật phẩm có giá từ 100 trở lên; in list đó và số lượng.",
          requirements: ['Câu dẫn <code>"So vat pham: "</code>, rồi <code>"Gia 1: "</code>…', 'In list hiếm, rồi <code>So vat pham hiem: …</code>.', "Có ít nhất 1 comment."],
          starter: "",
          tests: [{ input: "4\n50\n120\n100\n99", expected: "So vat pham: 4\nGia 1: 50\nGia 2: 120\nGia 3: 100\nGia 4: 99\n[120, 100]\nSo vat pham hiem: 2" },
                  { input: "2\n1\n2", expected: "So vat pham: 2\nGia 1: 1\nGia 2: 2\n[]\nSo vat pham hiem: 0" }],
          rules: [{ test: c => co(c, "\\.append\\("), msg: "Tạo list mới bằng append." }, { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment." }],
          why: "Kẻ Trộm Túi Đồ đã bị bắt!",
          hints: ["hiem = []; trong vòng lặp: if gia >= 100: hiem.append(gia)"]
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Vị trí cao nhất",
          prompt: "Nhập n và n điểm. In điểm cao nhất, số lần nó xuất hiện, và <b>lượt chơi đầu tiên</b> đạt điểm đó (đếm từ 1).",
          requirements: ['Câu dẫn <code>"n = "</code>, rồi <code>"Luot 1: "</code>…'],
          starter: "",
          tests: [{ input: "5\n7\n9\n3\n9\n1", expected: "n = 5\nLuot 1: 7\nLuot 2: 9\nLuot 3: 3\nLuot 4: 9\nLuot 5: 1\nCao nhat: 9 (2 lan), dau tien o luot 2" },
                  { input: "1\n4", expected: "n = 1\nLuot 1: 4\nCao nhat: 4 (1 lan), dau tien o luot 1" }],
          why: "count() và index() — hai phương thức list rất tiện.",
          hints: ["ds.count(x) đếm số lần xuất hiện; ds.index(x) cho chỉ số đầu tiên.", 'print(f"Cao nhat: {m} ({ds.count(m)} lan), dau tien o luot {ds.index(m) + 1}")']
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: Xoay vòng đội hình",
          prompt: "Nhập k; xoay list sang phải k bước (phần tử cuối chuyển lên đầu, lặp k lần). k có thể lớn hơn số phần tử.",
          requirements: ['Câu dẫn <code>"k = "</code>.', "In list sau khi xoay."],
          starter: "doi = [1, 2, 3, 4, 5]\n",
          tests: [{ input: "2", expected: "k = 2\n[4, 5, 1, 2, 3]" }, { input: "0", expected: "k = 0\n[1, 2, 3, 4, 5]" }, { input: "7", expected: "k = 7\n[4, 5, 1, 2, 3]" }],
          why: "pop() rồi insert(0, …) — hoặc gọn hơn với k % len(doi).",
          hints: ["for _ in range(k % len(doi)): doi.insert(0, doi.pop())"]
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: bốn bài với list",
      nova: "Bốn bài list khó dần. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("Nhập dữ liệu cho list: dòng đầu là n, n dòng sau là các phần tử.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Tổng số chẵn",
          prompt: "Cho list có sẵn; in tổng các số chẵn trong list.",
          requirements: ["Duyệt list, cộng có điều kiện."],
          starter: "ds = [3, 8, 12, 7, 6, 5]\n",
          expected: "Tong so chan: 26",
          why: "for + if + cộng dồn trên list.",
          hints: ["if x % 2 == 0: tong += x"]
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Bỏ phần tử trùng",
          prompt: "Nhập n và n tên vật phẩm; in list các tên <b>không trùng</b>, giữ thứ tự xuất hiện đầu tiên.",
          requirements: ['Câu dẫn <code>"n = "</code>, các tên nhập không có câu dẫn (<code>input()</code>).'],
          starter: "",
          tests: [{ input: "5\nkiem\nkhien\nkiem\ncung\nkhien", expected: "n = 5\nkiem\nkhien\nkiem\ncung\nkhien\n['kiem', 'khien', 'cung']" },
                  { input: "1\nmu", expected: "n = 1\nmu\n['mu']" }],
          why: "if x not in ket_qua: ket_qua.append(x) — giữ được thứ tự.",
          hints: ["ket_qua = []", "if ten not in ket_qua: ket_qua.append(ten)"]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Cặp vật phẩm vừa túi tiền",
          prompt: "Nhập số xu k. Tìm cặp vật phẩm <b>đầu tiên</b> (theo thứ tự i < j) có tổng giá đúng bằng k; in hai giá. Không có thì in <code>Khong co</code>.",
          requirements: ['Câu dẫn <code>"k = "</code>.', "Hai vòng for lồng nhau."],
          starter: "gia = [30, 70, 20, 50, 80]\n",
          tests: [{ input: "100", expected: "k = 100\n30 70" }, { input: "70", expected: "k = 70\n20 50" }, { input: "1000", expected: "k = 1000\nKhong co" }],
          why: "Bài “two sum” — câu phỏng vấn kinh điển.",
          hints: ["for i in range(len(gia)): for j in range(i + 1, len(gia)): …", "Tìm thấy thì in rồi đặt cờ tim_thay = True; dùng break để thoát."]
        },
        {
          id: "x4", type: "code", level: 3,
          title: "Kho báu gần nhất",
          prompt: "Nhân vật ở (0, 0). Cho list toạ độ kho báu (tuple). Khoảng cách Manhattan = |x| + |y|. In kho báu gần nhất và khoảng cách (nếu bằng nhau lấy cái xuất hiện trước).",
          requirements: ["Dùng <code>abs()</code> và gán tách x, y."],
          starter: "kho_bau = [(3, 4), (-2, 1), (5, -5), (0, -3)]\n",
          expected: "Gan nhat: (-2, 1) cach 3 buoc",
          why: "Khoảng cách Manhattan dùng nhiều trong game dạng lưới ô vuông.",
          hints: ["for (x, y) in kho_bau: d = abs(x) + abs(y)", 'print(f"Gan nhat: {tot} cach {ngan} buoc")']
        }
      ]
    }
  ]
};
})();
