/* Bài 7 — Xâu và dictionary: chỉ số, cắt xâu, phương thức xâu, dict, duyệt items()
   Nhiệm vụ studio: Bảng xếp hạng. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai07", number: 7,
  title: "Xâu và dictionary",
  story: "Bảng xếp hạng",
  skills: ["Chỉ số xâu", "Cắt xâu s[a:b]", "upper · lower · strip", "split · join", "find · replace · count", "dict khoá – giá trị", "Duyệt items()"],

  errorTable: [
    ["TypeError: 'str' object does not support item assignment", "Sửa một ký tự của xâu — xâu không sửa được", "Tạo xâu mới: <code>s = s.replace(...)</code> hoặc ghép <code>s[:i] + x + s[i+1:]</code>"],
    ["IndexError: string index out of range", "Chỉ số vượt quá độ dài xâu", "Chỉ số từ 0 đến <code>len(s) - 1</code>; ký tự cuối là <code>s[-1]</code>"],
    ["KeyError: 'Mau'", "Khoá không có trong dict (phân biệt hoa thường)", "Kiểm tra <code>if khoa in d:</code> hoặc dùng <code>d.get(khoa)</code>"],
    ["NameError: name 'ten' is not defined (khi viết nv[ten])", "Quên ngoặc kép quanh khoá chuỗi", "<code>nv[\"ten\"]</code>"],
    ["Phương thức không làm đổi xâu", "Gọi <code>s.upper()</code> mà không gán lại", "<code>s = s.upper()</code>"],
    ["ValueError: not enough values to unpack", "<code>ten, diem = input().split()</code> nhưng dòng nhập chỉ có một từ", "Nhập đúng hai giá trị cách nhau dấu cách"],
    ["find trả về -1", "Không tìm thấy chuỗi con", "Kiểm tra <code>if s.find(x) != -1</code> hoặc dùng <code>x in s</code>"],
    ["TypeError: can only concatenate str (not \"int\") to str", "Nối xâu với số", "<code>str(so)</code> hoặc f-string"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "Chỉ số & cắt xâu",
      kicker: "CHẶNG 1 · XÂU KÝ TỰ",
      title: "Xâu là một dãy ký tự",
      nova: "Tên người chơi, mã quà tặng, câu chat… đều là <b>xâu</b>. Xâu giống list ở chỗ có chỉ số — và có phép <b>cắt</b> rất mạnh.",
      objectives: ["Truy cập ký tự bằng chỉ số", "Cắt xâu s[a:b]", "Duyệt từng ký tự; biết xâu không sửa được"],
      lesson: `
        ${codeVaManHinh(`s = "PlanetPy"
print(s[0], s[-1], len(s))
print(s[0:6])
print(s[6:])
print(s[::-1])
for ky_tu in "Py":
    print(ky_tu)`, "P y 8\nPlanet\nPy\nyPtenalP\nP\ny", "xau.py")}
        <table class="plain"><thead><tr><th>Ký tự</th><th>P</th><th>l</th><th>a</th><th>n</th><th>e</th><th>t</th><th>P</th><th>y</th></tr></thead><tbody>
          <tr><td>Chỉ số</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr></tbody></table>
        ${giaiMa("Cắt xâu (slicing)", [
          { code: "s[a:b]", y: "Từ chỉ số <code>a</code> đến <b>trước</b> <code>b</code> (giống range).", nhan: true },
          { code: "s[:3]   s[3:]", y: "Bỏ a: từ đầu · bỏ b: đến hết." },
          { code: "s[-2:]", y: "Hai ký tự cuối." },
          { code: "s[::-1]", y: "Bước −1: <b>đảo ngược</b> xâu." },
          { code: 's[0] = "p"', y: "<b>TypeError</b>: xâu không sửa được — phải tạo xâu mới.", nhan: true }
        ])}
        ${cuPhap({ ten: "XÂU · CẮT XÂU",
          mau: ["‹xâu›[‹chỉ số›]      len(‹xâu›)", "‹xâu›[‹bắt đầu›:‹kết thúc›:‹bước›]"],
          quyTac: ["Chỉ số từ 0; chỉ số âm từ cuối", "Cắt xâu dừng <b>trước</b> chỉ số kết thúc; cắt quá độ dài không báo lỗi", "Xâu không sửa được từng ký tự"],
          viDu: 'ma = "PY10-2026"\nprint(ma[:4], ma[5:], ma[-1])', man: "PY10 2026 6" })}
        ${docThem([[W3("python_strings"), "W3Schools: Strings"], [W3("python_strings_slicing"), "W3Schools: Slicing Strings"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Cắt xâu",
          prompt: "Bốn thao tác trên một xâu. Terminal hiện gì?",
          code: 's = "PlanetPy"\nprint(s[2], s[-2:], s[2:6], len(s))',
          options: [{ text: "l Py lane 8", why: "Chỉ số bắt đầu từ 0: s[2] là ký tự thứ ba." }, { text: "a Py anet 8" },
                    { text: "a Py anetP 8", why: "s[2:6] dừng TRƯỚC chỉ số 6." }, { text: "a y anet 8", why: "s[-2:] là hai ký tự cuối." }],
          answer: "a Py anet 8",
          why: "Chuẩn! Cắt xâu dừng trước chỉ số kết thúc — giống range."
        },
        {
          id: "s1-code", type: "code",
          title: "Mã người chơi",
          prompt: "Nhập tên người chơi; in chữ cái đầu, chữ cái cuối, độ dài, và 3 ký tự đầu (dùng cắt xâu).",
          requirements: ['Câu dẫn <code>"Ten: "</code>.', "Một dòng: <code>Dau: … | Cuoi: … | Dai: … | Ma: …</code>"],
          starter: 'ten = input("Ten: ")\n',
          tests: [{ input: "Minh", expected: "Ten: Minh\nDau: M | Cuoi: h | Dai: 4 | Ma: Min" }, { input: "Zed", expected: "Ten: Zed\nDau: Z | Cuoi: d | Dai: 3 | Ma: Zed" }],
          rules: [{ test: c => coChuoi(c, "ten\\[\\s*:\\s*3\\s*\\]|ten\\[\\s*0\\s*:\\s*3\\s*\\]"), msg: "Dùng cắt xâu ten[:3] cho 3 ký tự đầu." }],
          why: "Cắt xâu ngắn hơn xâu vẫn chạy (Zed[:3] là Zed) — không lỗi như chỉ số.",
          hints: ['print(f"Dau: {ten[0]} | Cuoi: {ten[-1]} | Dai: {len(ten)} | Ma: {ten[:3]}")']
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Phương thức xâu",
      kicker: "CHẶNG 2 · PHƯƠNG THỨC XÂU",
      title: "Xử lý xâu bằng phương thức",
      nova: "Người chơi gõ tên lộn xộn: thừa dấu cách, hoa thường lung tung. Python có cả bộ <b>phương thức xâu</b> để làm sạch dữ liệu.",
      objectives: ["Dùng upper, lower, title, strip", "Dùng split và join", "Dùng find, replace, count, in"],
      lesson: `
        ${codeVaManHinh(`ten = "  nGUYEN van AN  "
sach = ten.strip().title()
print(sach)
tu = sach.split()
print(tu)
print("-".join(tu))
print(sach.find("Van"), sach.count("n"), sach.replace("An", "Binh"))`, "Nguyen Van An\n['Nguyen', 'Van', 'An']\nNguyen-Van-An\n7 3 Nguyen Van Binh", "lam_sach.py")}
        ${giaiMa("Phương thức xâu hay dùng", [
          { code: "s.upper()  s.lower()  s.title()", y: "Viết hoa hết · thường hết · hoa chữ đầu mỗi từ." },
          { code: "s.strip()", y: "Bỏ dấu cách thừa ở <b>hai đầu</b>." },
          { code: "s.split()  s.split(\",\")", y: "Tách thành <b>list</b> các từ (theo dấu cách, hoặc theo ký tự chỉ định).", nhan: true },
          { code: '" ".join(ds)', y: "Ghép list các xâu thành một xâu, xen giữa là xâu đứng trước <code>.join</code>.", nhan: true },
          { code: "s.find(x)  s.count(x)  s.replace(a, b)", y: "Vị trí đầu tiên (−1 nếu không có) · số lần xuất hiện · thay thế." },
          { code: "x in s", y: "<code>True</code> nếu x là chuỗi con của s." }
        ])}
        ${luuY("Phương thức xâu <b>trả về xâu mới</b>, không sửa xâu gốc. Viết <code>s.upper()</code> một mình là vô ích — phải <code>s = s.upper()</code>.")}
        ${cuPhap({ ten: "PHƯƠNG THỨC XÂU",
          mau: ["‹xâu›.‹phương thức›(‹tham số›)", "‹list› = ‹xâu›.split(‹dấu tách›)", "‹xâu mới› = ‹dấu nối›.join(‹list xâu›)"],
          quyTac: ["Gán kết quả cho biến để giữ lại", "split() không tham số: tách theo mọi khoảng trắng", "Có thể nối nhiều phương thức: <code>s.strip().lower()</code>"],
          viDu: 'dong = "Kai 95"\nten, diem = dong.split()\nprint(ten.upper(), int(diem) + 5)', man: "KAI 100" })}
        ${docThem([[W3("python_strings_methods"), "W3Schools: String Methods"], [DOCS("library/stdtypes.html#string-methods"), "Python docs: String Methods"]])}
      `,
      challenges: [
        {
          id: "s2-predict", type: "choice", bet: true, mono: true,
          title: "Tách và ghép",
          prompt: "Kết hợp split, upper và join. Terminal hiện gì?",
          code: 's = "an binh chi"\nds = s.split()\nprint(len(ds), "+".join(ds).upper())',
          options: [{ text: "11 AN+BINH+CHI", why: "len(ds) là số từ trong list (3), không phải số ký tự." }, { text: "3 AN+BINH+CHI" },
                    { text: "3 an+binh+chi", why: ".upper() áp dụng lên xâu đã ghép." }, { text: "3 +AN+BINH+CHI+", why: "join chỉ đặt dấu nối GIỮA các phần tử." }],
          answer: "3 AN+BINH+CHI",
          why: "Đúng: split ra 3 từ, join bằng +, rồi viết hoa."
        },
        {
          id: "s2-code", type: "code",
          title: "Chuẩn hoá tên",
          prompt: "Nhập họ tên gõ lộn xộn; in tên chuẩn (bỏ cách thừa, hoa chữ đầu mỗi từ) và tên viết tắt (chữ đầu mỗi từ, viết hoa).",
          requirements: ['Câu dẫn <code>"Ho ten: "</code>.', "Dùng strip/split/title (hoặc tương đương) và join."],
          starter: 'ho_ten = input("Ho ten: ")\n',
          tests: [{ input: "  nGUYEN  van an ", expected: "Ho ten:   nGUYEN  van an \nTen chuan: Nguyen Van An\nViet tat: NVA" },
                  { input: "le thi mai anh", expected: "Ho ten: le thi mai anh\nTen chuan: Le Thi Mai Anh\nViet tat: LTMA" }],
          rules: [{ test: c => co(c, "\\.split\\(") && co(c, "\\.join\\("), msg: "Dùng split để tách từ và join để ghép." }],
          why: "Làm sạch dữ liệu nhập — việc lập trình viên làm hằng ngày.",
          hints: ["tu = ho_ten.split()  (split không tham số tự bỏ cách thừa)", 'chuan = " ".join(t.capitalize() for t in tu) hoặc ho_ten.strip().title() rồi split', "Viết tắt: duyệt từng từ lấy t[0].upper()"]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "A97CB1D2",
      todo: ["Nghe thầy <b>chốt</b>: chỉ số xâu, cắt xâu, các phương thức xâu, split/join.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Đếm nguyên âm",
          prompt: "Trong lúc chờ: nhập một câu; đếm số nguyên âm a, e, i, o, u (không phân biệt hoa thường).",
          requirements: ['Câu dẫn <code>"Cau: "</code>.', 'In <code>So nguyen am: …</code>.'],
          starter: "",
          tests: [{ input: "Planet Py", expected: "Cau: Planet Py\nSo nguyen am: 2" }, { input: "AEIOU xyz", expected: "Cau: AEIOU xyz\nSo nguyen am: 5" }],
          why: "Duyệt xâu + toán tử in — gọn gàng.",
          hints: ['for c in cau.lower():\n    if c in "aeiou":\n        dem += 1']
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "Dictionary",
      kicker: "CHẶNG 3 · DICTIONARY",
      title: "Dictionary: tra cứu theo khoá",
      nova: "Thông số nhân vật gồm tên, máu, công, thủ… Dùng list thì phải nhớ “máu ở chỉ số 1”. <b>Dictionary</b> cho phép tra bằng <b>tên</b>: <code>nv[\"mau\"]</code>.",
      objectives: ["Tạo dict khoá – giá trị", "Truy cập, thêm, sửa theo khoá", "Kiểm tra khoá bằng in, dùng get"],
      lesson: `
        ${codeVaManHinh(`nv = {"ten": "Kai", "mau": 100, "cong": 25}
print(nv["ten"], nv["mau"])
nv["mau"] -= 30
nv["level"] = 2
print(nv)
print("thu" in nv, nv.get("thu", 0))`, "Kai 100\n{'ten': 'Kai', 'mau': 70, 'cong': 25, 'level': 2}\nFalse 0", "nhan_vat.py")}
        ${giaiMa("Giải mã dictionary", [
          { code: '{"ten": "Kai", "mau": 100}', y: "Dict viết trong ngoặc nhọn; mỗi mục là <b>khoá: giá trị</b>." },
          { code: 'nv["mau"]', y: "Lấy giá trị theo <b>khoá</b> (không phải chỉ số).", nhan: true },
          { code: 'nv["level"] = 2', y: "Khoá chưa có → <b>thêm mới</b>; đã có → <b>sửa</b>." },
          { code: '"thu" in nv', y: "Kiểm tra <b>khoá</b> có trong dict." },
          { code: 'nv.get("thu", 0)', y: "Lấy giá trị; không có khoá thì trả về giá trị mặc định (0) thay vì báo <b>KeyError</b>.", nhan: true }
        ])}
        ${cuPhap({ ten: "DICTIONARY",
          mau: ["‹tên› = {‹khoá 1›: ‹giá trị 1›, ‹khoá 2›: ‹giá trị 2›}", "‹tên›[‹khoá›]      ‹tên›[‹khoá›] = ‹giá trị›", "‹khoá› in ‹tên›     ‹tên›.get(‹khoá›, ‹mặc định›)"],
          quyTac: ["Khoá không trùng nhau, thường là xâu hoặc số", "Khoá phân biệt hoa thường: <code>\"mau\"</code> ≠ <code>\"Mau\"</code>", "Khoá không có → <code>KeyError</code>; xoá mục: <code>del d[khoá]</code>"],
          viDu: 'gia = {"kiem": 150, "khien": 90}\ngia["cung"] = 120\nprint(len(gia), gia["cung"])', man: "3 120" })}
        ${docThem([[W3("python_dictionaries"), "W3Schools: Dictionaries"], [DOCS("tutorial/datastructures.html#dictionaries"), "Python Tutorial — Dictionaries"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "Thêm và sửa",
          prompt: "Dict thay đổi qua 3 lệnh. Terminal hiện gì?",
          code: 'nv = {"ten": "Lia", "mau": 80}\nnv["mau"] += 20\nnv["ten"] = "Lia Pro"\nnv["xu"] = 5\nprint(nv)',
          options: [{ text: "{'ten': 'Lia Pro', 'mau': 100, 'xu': 5}" }, { text: "{'ten': 'Lia', 'mau': 100, 'xu': 5}", why: "Gán vào khoá đã có thì SỬA giá trị." },
                    { text: "{'ten': 'Lia Pro', 'mau': 80, 'xu': 5}", why: "nv['mau'] += 20 làm máu thành 100." }, { text: "KeyError", why: "Gán vào khoá chưa có thì THÊM mới, không lỗi." }],
          answer: "{'ten': 'Lia Pro', 'mau': 100, 'xu': 5}",
          why: "Chuẩn! Khoá có rồi thì sửa, chưa có thì thêm."
        },
        {
          id: "s3-code", type: "code",
          title: "Tra cứu thông số",
          prompt: "Nhập tên một chỉ số; nếu có trong dict thì in giá trị, không có thì in <code>Khong co chi so nay</code>.",
          requirements: ['Câu dẫn <code>"Chi so: "</code>.', "Dùng <code>in</code> (hoặc get) để tránh KeyError."],
          starter: 'nv = {"mau": 120, "cong": 35, "thu": 20, "toc_do": 8}\n',
          tests: [{ input: "cong", expected: "Chi so: cong\ncong = 35" }, { input: "phep", expected: "Chi so: phep\nKhong co chi so nay" }],
          why: "Luôn kiểm tra khoá trước khi tra — game không bị sập vì KeyError.",
          hints: ['k = input("Chi so: ")\nif k in nv:\n    print(k, "=", nv[k])']
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "Duyệt dict",
      kicker: "CHẶNG 4 · DUYỆT DICTIONARY",
      title: "Duyệt dict: bảng xếp hạng",
      nova: "Bảng xếp hạng là một dict <b>tên → điểm</b>. Duyệt dict bằng <b>items()</b> để lấy cả tên lẫn điểm.",
      objectives: ["Duyệt bằng for k in d và for k, v in d.items()", "Dùng keys(), values()", "Xây dict từ dữ liệu nhập"],
      lesson: `
        ${codeVaManHinh(`bxh = {"An": 95, "Binh": 80, "Chi": 99}
for ten, diem in bxh.items():
    print(f"{ten}: {diem}")
print("Tong:", sum(bxh.values()))
print("Nguoi choi:", list(bxh.keys()))`, "An: 95\nBinh: 80\nChi: 99\nTong: 274\nNguoi choi: ['An', 'Binh', 'Chi']", "bang_xep_hang.py")}
        ${giaiMa("Ba cách duyệt dict", [
          { code: "for k in d:", y: "Lấy lần lượt các <b>khoá</b>." },
          { code: "for k, v in d.items():", y: "Lấy cả khoá và giá trị — <b>hay dùng nhất</b>.", nhan: true },
          { code: "d.values()  d.keys()", y: "Các giá trị / các khoá; dùng được với <code>sum</code>, <code>max</code>, <code>list(...)</code>." }
        ])}
        ${codeVaManHinh(`bxh = {}
for i in range(3):
    ten, diem = input().split()
    bxh[ten] = int(diem)
print(bxh)`, "An 95\nBinh 80\nChi 99\n{'An': 95, 'Binh': 80, 'Chi': 99}", "nhap_dict.py", "An 95\nBinh 80\nChi 99")}
        ${cuPhap({ ten: "DUYỆT DICT",
          mau: ["for ‹khoá›, ‹giá trị› in ‹dict›.items():\n    ‹…›", "‹dict› = {}  →  ‹dict›[‹khoá›] = ‹giá trị›"],
          quyTac: ["Dict giữ thứ tự thêm vào", "Tìm khoá có giá trị lớn nhất: duyệt items và giữ “kỷ lục”", "<code>ten, diem = dong.split()</code> tách dòng “tên điểm”"],
          viDu: 'dem = {}\nfor c in "banana":\n    dem[c] = dem.get(c, 0) + 1\nprint(dem)', man: "{'b': 1, 'a': 3, 'n': 2}" })}
        ${docThem([[W3("python_dictionaries_loop"), "W3Schools: Loop Dictionaries"]])}
      `,
      challenges: [
        {
          id: "s4-predict", type: "choice", bet: true, mono: true,
          title: "Duyệt items",
          prompt: "Xâu nhân với số trong vòng lặp dict. Terminal hiện gì?",
          code: 'd = {"a": 1, "b": 2, "c": 3}\nfor k, v in d.items():\n    if v >= 2:\n        print(k * v)',
          options: [{ text: "a\nbb\nccc", why: "Chỉ in khi v >= 2 — bỏ 'a'." }, { text: "bb\nccc" }, { text: "2\n3", why: "k * v là xâu khoá lặp v lần." }, { text: "b\nc", why: "Xâu nhân số là lặp lại xâu." }],
          answer: "bb\nccc",
          why: "Đúng!"
        },
        {
          id: "s4-code", type: "code",
          title: "Bảng xếp hạng",
          prompt: "Nhập n, rồi n dòng dạng <code>ten diem</code>. Lưu vào dict; in từng người theo thứ tự nhập, rồi in người điểm cao nhất (bằng nhau lấy người nhập trước).",
          requirements: ['Câu dẫn <code>"n = "</code>; các dòng sau nhập không có câu dẫn.', "Mỗi người một dòng <code>ten: diem</code>; dòng cuối <code>Dung dau: …</code>."],
          starter: 'n = int(input("n = "))\nbxh = {}\n',
          tests: [{ input: "3\nAn 95\nBinh 80\nChi 99", expected: "n = 3\nAn 95\nBinh 80\nChi 99\nAn: 95\nBinh: 80\nChi: 99\nDung dau: Chi" },
                  { input: "2\nKai 50\nLia 50", expected: "n = 2\nKai 50\nLia 50\nKai: 50\nLia: 50\nDung dau: Kai" }],
          rules: [{ test: c => co(c, "\\.items\\(\\)") || co(c, "for\\s+\\w+\\s+in\\s+bxh"), msg: "Duyệt dict bxh để in và tìm người dẫn đầu." }],
          why: "Bảng xếp hạng hoàn chỉnh!",
          hints: ["ten, diem = input().split(); bxh[ten] = int(diem)", "Duyệt items, giữ ten_max và diem_max; chỉ cập nhật khi diem > diem_max."]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "253981D7",
      todo: ["Nghe thầy <b>chốt</b>: dictionary, khoá – giá trị, get, duyệt items().",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Đếm tần suất chữ",
          prompt: "Trong lúc chờ: nhập một từ; đếm số lần xuất hiện của mỗi chữ bằng dict và in dict.",
          requirements: ['Câu dẫn <code>"Tu: "</code>.', "Dùng <code>dict.get(c, 0) + 1</code> hoặc kiểm tra in."],
          starter: "",
          tests: [{ input: "banana", expected: "Tu: banana\n{'b': 1, 'a': 3, 'n': 2}" }, { input: "py", expected: "Tu: py\n{'p': 1, 'y': 1}" }],
          why: "Mẫu đếm tần suất bằng dict — dùng trong rất nhiều bài toán.",
          hints: ["dem = {}\nfor c in tu:\n    dem[c] = dem.get(c, 0) + 1"]
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Kẻ Xáo Chữ", kicker: "BOSS · BÀI 7",
      title: "Boss: Kẻ Xáo Chữ",
      bossName: "Kẻ Xáo Chữ",
      bossLine: "Ta đảo chữ, đổi hoa thường, giấu khoá… ngươi còn đọc nổi dữ liệu không?",
      nova: "Kẻ Xáo Chữ chơi trò hoa thường và chỉ số. <b>Tự làm một mình</b>!",
      objectives: ["Dò cắt xâu", "Sửa bọ xâu và dict", "Đếm từ trong câu"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Xâu bị xáo",
          prompt: "Terminal hiện gì?",
          code: 's = "python"\nprint(s[::-1], s.upper()[1:3])',
          options: [{ text: "nohtyp YT" }, { text: "nohtyp YTH", why: "[1:3] lấy chỉ số 1 và 2 — 2 ký tự." },
                    { text: "python YT", why: "[::-1] đảo ngược xâu." }, { text: "nohtyp yt", why: ".upper() viết hoa trước khi cắt." }],
          answer: "nohtyp YT",
          why: "Đòn trúng!"
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Ba con bọ chữ",
          prompt: "Kẻ Xáo Chữ cài 3 bọ. Sửa để terminal đúng mẫu.",
          requirements: ["Giữ dict và các dòng print.", "Tên viết hoa chữ đầu phải tạo bằng phương thức xâu."],
          starter: 'nv = {"ten": "lia", "mau": 80}\nprint("Ten:", nv[ten])\nnv["mau"] = nv["mau"] - 20\nprint("Mau:", nv["Mau"])\nten_dep = nv["ten"]\nten_dep[0] = "L"\nprint("Ten dep:", ten_dep)\n',
          expected: "Ten: lia\nMau: 60\nTen dep: Lia",
          bugs: [
            { label: "Khoá thiếu ngoặc kép", fixed: c => /nv\[["']ten["']\]\)/.test(c) },
            { label: "Khoá sai hoa thường", fixed: c => !/nv\["Mau"\]/.test(c) },
            { label: "Sửa ký tự của xâu", fixed: c => !/ten_dep\[0\]\s*=/.test(c) }
          ],
          why: "Kẻ Xáo Chữ lảo đảo!",
          hints: ['nv["ten"] có ngoặc kép; khoá "mau" viết thường.', 'ten_dep = nv["ten"].capitalize() (hoặc .title())']
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Từ dài nhất",
          prompt: "Nhập một câu; in số từ và từ dài nhất (bằng nhau lấy từ xuất hiện trước).",
          requirements: ['Câu dẫn <code>"Cau: "</code>.', 'In <code>So tu: …</code> và <code>Dai nhat: …</code>.', "Có ít nhất 1 comment."],
          starter: "",
          tests: [{ input: "hom nay hoc python vui", expected: "Cau: hom nay hoc python vui\nSo tu: 5\nDai nhat: python" },
                  { input: "  an   binh  ", expected: "Cau:   an   binh  \nSo tu: 2\nDai nhat: binh" }],
          rules: [{ test: c => co(c, "\\.split\\("), msg: "Tách câu thành từ bằng split()." }, { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment." }],
          why: "Kẻ Xáo Chữ đã bị hạ!",
          hints: ["tu = cau.split()", "Duyệt tu, giữ từ có len lớn nhất (dùng >, không dùng >=)."]
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Mật mã Caesar",
          prompt: "Nhập một từ chữ thường và k; dịch mỗi chữ đi k vị trí trong bảng chữ cái (z quay về a).",
          requirements: ['Câu dẫn <code>"Tu: "</code>, <code>"k = "</code>.', "Gợi ý: <code>ord()</code> đổi chữ ra số, <code>chr()</code> đổi số ra chữ."],
          starter: "",
          tests: [{ input: "python\n3", expected: "Tu: python\nk = 3\nMa hoa: sbwkrq" }, { input: "xyz\n2", expected: "Tu: xyz\nk = 2\nMa hoa: zab" }],
          why: "Mật mã Caesar — bước đầu của mật mã học.",
          hints: ["chr((ord(c) - ord('a') + k) % 26 + ord('a'))"]
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: Đọc xuôi đọc ngược",
          prompt: "Nhập một câu; bỏ dấu cách, không phân biệt hoa thường. In <code>Palindrome</code> nếu đọc xuôi giống đọc ngược, ngược lại in <code>Khong phai</code>.",
          requirements: ['Câu dẫn <code>"Cau: "</code>.'],
          starter: "",
          tests: [{ input: "Race car", expected: "Cau: Race car\nPalindrome" }, { input: "Planet Py", expected: "Cau: Planet Py\nKhong phai" }, { input: "A", expected: "Cau: A\nPalindrome" }],
          why: "replace + lower + [::-1] — ba công cụ xâu trong một bài.",
          hints: ['s = cau.replace(" ", "").lower()', "if s == s[::-1]:"]
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: xâu và dictionary",
      nova: "Bốn bài xử lý chữ và dữ liệu khó dần. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("<code>c.isdigit()</code> kiểm tra ký tự là chữ số; <code>c.isalpha()</code> kiểm tra là chữ cái.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Đếm chữ số trong mã",
          prompt: "Nhập một mã quà tặng; đếm số ký tự là chữ số và số ký tự là chữ cái.",
          requirements: ['Câu dẫn <code>"Ma: "</code>.'],
          starter: "",
          tests: [{ input: "PY10-2026x", expected: "Ma: PY10-2026x\nChu so: 6 | Chu cai: 3" }, { input: "----", expected: "Ma: ----\nChu so: 0 | Chu cai: 0" }],
          why: "isdigit / isalpha giúp kiểm tra dữ liệu nhập.",
          hints: ["for c in ma: if c.isdigit(): … elif c.isalpha(): …"]
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Đảo thứ tự từ",
          prompt: "Nhập một câu; in câu với thứ tự các từ bị đảo ngược (mỗi từ giữ nguyên).",
          requirements: ['Câu dẫn <code>"Cau: "</code>.'],
          starter: "",
          tests: [{ input: "toi hoc python", expected: "Cau: toi hoc python\npython hoc toi" }, { input: "mot", expected: "Cau: mot\nmot" }],
          why: '" ".join(cau.split()[::-1]) — một dòng là đủ.',
          hints: ["tu = cau.split(); tu đảo ngược bằng [::-1]; ghép bằng join."]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Gộp hai kho đồ",
          prompt: "Hai người chơi gộp kho đồ: món trùng thì cộng số lượng. In kho gộp (món của kho 1 trước, rồi món mới của kho 2).",
          requirements: ["Không sửa hai dict ban đầu theo cách thủ công — dùng vòng lặp."],
          starter: 'kho1 = {"kiem": 1, "binh mau": 3}\nkho2 = {"binh mau": 2, "cung": 1}\n',
          expected: "{'kiem': 1, 'binh mau': 5, 'cung': 1}",
          why: "dict.get(k, 0) + v — mẫu gộp dữ liệu.",
          hints: ["gop = dict(kho1)", "for k, v in kho2.items(): gop[k] = gop.get(k, 0) + v"]
        },
        {
          id: "x4", type: "code", level: 3,
          title: "Nhóm từ theo chữ cái đầu",
          prompt: "Nhập một câu; tạo dict: khoá là chữ cái đầu (viết thường), giá trị là list các từ bắt đầu bằng chữ đó (theo thứ tự xuất hiện). In dict.",
          requirements: ['Câu dẫn <code>"Cau: "</code>.'],
          starter: "",
          tests: [{ input: "an banh bao an cam", expected: "Cau: an banh bao an cam\n{'a': ['an', 'an'], 'b': ['banh', 'bao'], 'c': ['cam']}" }],
          why: "Dict chứa list — cấu trúc dữ liệu lồng nhau đầu tiên của bạn.",
          hints: ["k = tu[0].lower()", "if k not in nhom: nhom[k] = []", "nhom[k].append(tu)"]
        }
      ]
    }
  ]
};
})();
