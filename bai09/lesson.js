/* Bài 9 — Lỗi và kiểm thử, ôn tập + KTTX: 3 loại lỗi, đọc traceback, ca kiểm thử, assert, try-except
   Nhiệm vụ studio: Phiêu lưu hang động. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai09", number: 9,
  title: "Lỗi, kiểm thử và ôn tập",
  story: "Phiêu lưu hang động",
  skills: ["Lỗi cú pháp", "Lỗi khi chạy", "Lỗi logic", "Đọc traceback", "Ca kiểm thử biên", "assert", "try – except"],

  errorTable: [
    ["SyntaxError / IndentationError", "Lỗi cú pháp: viết sai quy tắc (thiếu :, ngoặc, nháy, thụt lề)", "Python báo trước khi chạy — xem số dòng và dòng ngay trên"],
    ["NameError", "Dùng tên chưa có (gõ sai, chưa gán, quên import)", "Kiểm tra chính tả, hoa thường, thứ tự định nghĩa"],
    ["TypeError", "Phép toán sai kiểu (chuỗi + số, gọi hàm sai số đối số…)", "Đổi kiểu bằng int()/str(); kiểm tra đối số"],
    ["ValueError", "Giá trị không đổi được (int(\"abc\"))", "Kiểm tra dữ liệu nhập; dùng try – except"],
    ["ZeroDivisionError", "Chia cho 0", "Kiểm tra số chia trước khi chia"],
    ["IndexError / KeyError", "Chỉ số vượt phạm vi / khoá không có", "Dùng len(), in, get()"],
    ["Chạy được nhưng sai kết quả", "Lỗi logic: sai công thức, sai thứ tự điều kiện, lệch 1…", "Kiểm thử nhiều ca (thường, biên, bẫy); in giá trị trung gian"],
    ["AssertionError", "Một lệnh assert sai — chương trình chưa đúng với ca kiểm thử đó", "Xem điều kiện assert nào sai rồi sửa code"]
  ],

  steps: [
    /* ================= TRẠM 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "Trạm lỗi",
      kicker: "TRẠM 1 · NHẬN BIẾT LỖI",
      title: "Ba loại lỗi và cách đọc traceback",
      nova: "Cửa hang đầy bọ! Trước khi vào, bạn cần phân biệt <b>ba loại lỗi</b> và đọc được thông báo lỗi của Python như đọc bản đồ.",
      objectives: ["Phân biệt lỗi cú pháp, lỗi khi chạy, lỗi logic", "Đọc dòng cuối và số dòng của traceback", "Sửa lỗi theo thông báo"],
      lesson: `
        <table class="plain"><thead><tr><th>Loại lỗi</th><th>Khi nào lộ ra</th><th>Ví dụ</th></tr></thead><tbody>
          <tr><td><b>Lỗi cú pháp</b></td><td>Trước khi chạy — không dòng nào chạy</td><td><code>SyntaxError</code>, <code>IndentationError</code></td></tr>
          <tr><td><b>Lỗi khi chạy</b></td><td>Khi chạy tới dòng lỗi — các dòng trước vẫn chạy</td><td><code>NameError</code>, <code>TypeError</code>, <code>ValueError</code>, <code>ZeroDivisionError</code>, <code>IndexError</code>, <code>KeyError</code></td></tr>
          <tr><td><b>Lỗi logic</b></td><td>Không báo lỗi — chạy xong nhưng <b>kết quả sai</b></td><td>Sai công thức, lệch 1, elif sai thứ tự</td></tr></tbody></table>
        <div class="pair-view">${demo('diem = [8, 9, 10]\ntong = sum(diem)\nprint("Tong:", tong)\nprint("TB:", tong / len(diem) - 0)\nprint("Diem thu 4:", diem[3])', "main.py")}
          ${terminal('Tong: 27\nTB: 9.0\nTraceback (most recent call last):\n  File "main.py", line 5, in <module>\n    print("Diem thu 4:", diem[3])\n                         ~~~~^^^\nIndexError: list index out of range')}</div>
        ${giaiMa("Đọc traceback — 3 bước", [
          { code: 'IndexError: list index out of range', y: "<b>Dòng cuối</b>: loại lỗi + mô tả — đọc đầu tiên.", nhan: true },
          { code: 'File "main.py", line 5', y: "<b>Số dòng</b> gây lỗi (lỗi cú pháp: xem cả dòng ngay trên)." },
          { code: 'print("Diem thu 4:", diem[3])', y: "Dòng code bị lỗi, có dấu <code>^</code> chỉ chỗ sai." }
        ])}
        ${luuY("Lỗi logic nguy hiểm nhất vì Python <b>không báo gì</b>. Cách bắt: so kết quả với tính tay, và thử nhiều ca kiểm thử (Trạm 2).")}
        ${docThem([[DOCS("tutorial/errors.html"), "Python Tutorial — Errors and Exceptions"], [W3("python_try_except"), "W3Schools: Try Except"]])}
      `,
      challenges: [
        {
          id: "s1-loai", type: "choice", bet: true,
          title: "Đây là loại lỗi gì?",
          prompt: "Chương trình sau chạy xong, không báo lỗi, nhưng tính trung bình 8 và 10 lại ra 13. Đây là loại lỗi nào?",
          code: "a = 8\nb = 10\nprint(a + b / 2)", noRun: true,
          options: [{ text: "Lỗi cú pháp", why: "Không có thông báo lỗi nào — code đúng cú pháp." }, { text: "Lỗi khi chạy (TypeError)", why: "Chạy hết, không dừng giữa chừng." },
                    { text: "Lỗi logic" }, { text: "Không có lỗi", why: "Trung bình của 8 và 10 là 9, chứ không phải 13." }],
          answer: "Lỗi logic",
          why: "Đúng: thiếu ngoặc → chia trước, cộng sau. Phải viết (a + b) / 2."
        },
        {
          id: "s1-dong", type: "choice", mono: true,
          title: "Terminal in gì trước khi lỗi?",
          prompt: "Dòng 3 có lỗi khi chạy. Terminal hiện gì <b>trước</b> phần Traceback?",
          code: 'print("Vao hang")\nmau = 100\nprint("Mau:", Mau)\nprint("Ra hang")', noRun: true,
          options: [{ text: "(không in gì)", why: "NameError là lỗi khi chạy — dòng 1 đã chạy trước đó." }, { text: "Vao hang" },
                    { text: "Vao hang\nMau: 100", why: "Dòng 3 dùng Mau (viết hoa) — chưa có, nên lỗi ngay dòng 3." }, { text: "Vao hang\nRa hang", why: "Gặp lỗi khi chạy thì chương trình dừng — dòng 4 không chạy." }],
          answer: "Vao hang",
          why: "Chuẩn: lỗi khi chạy dừng chương trình ở đúng dòng lỗi."
        },
        {
          id: "s1-bugs", type: "code",
          title: "Dọn bọ cửa hang",
          prompt: "Chương trình tính tổng xu nhặt được trong 3 phòng có <b>4 con bọ</b> thuộc cả 3 loại lỗi. Chạy, đọc lỗi, sửa; nhớ kiểm tra kết quả với tính tay.",
          requirements: ["Tổng xu = 5 + 12 + 8 = 25; trung bình mỗi phòng làm tròn 1 chữ số.", "Giữ nguyên list xu."],
          starter: 'xu = [5, 12, 8]\ntong = 0\nfor x in xu\n    tong += x\nprint("Tong xu: " + tong)\nprint("TB moi phong:", round(tong / len(xu) + 1, 1))\nprint("Phong giau nhat:", Max(xu))\n',
          expected: "Tong xu: 25\nTB moi phong: 8.3\nPhong giau nhat: 12",
          bugs: [
            { label: "Thiếu dấu :", fixed: c => /for x in xu\s*:/.test(c) },
            { label: "Nối chuỗi với số", fixed: c => !/"Tong xu: "\s*\+\s*tong/.test(c) },
            { label: "Lỗi logic +1", fixed: c => !/len\(xu\)\s*\+\s*1/.test(c) },
            { label: "Max viết hoa", fixed: c => !/\bMax\(/.test(c) }
          ],
          why: "Bốn con bọ, ba loại lỗi — bạn đã dọn sạch cửa hang!",
          hints: ["Lỗi cú pháp được báo đầu tiên.", 'print("Tong xu:", tong) · bỏ "+ 1" (lỗi logic) · max viết thường.']
        }
      ]
    },

    /* ================= TRẠM 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Trạm kiểm thử",
      kicker: "TRẠM 2 · KIỂM THỬ",
      title: "Kiểm thử: ca thường, ca biên, ca bẫy",
      nova: "Code chạy được chưa chắc đã đúng. Lập trình viên giỏi tự <b>kiểm thử</b> nhiều ca trước khi nộp — và viết code <b>không sập</b> khi người dùng nhập bậy.",
      objectives: ["Chọn ca kiểm thử thường, biên, bẫy", "Dùng assert để tự kiểm tra", "Dùng try – except bắt lỗi nhập"],
      lesson: `
        ${khai("Ba loại ca kiểm thử (ví dụ: xếp loại điểm 0–100, từ 50 là Đạt)", `<ul>
          <li><b>Ca thường</b>: giá trị điển hình — 75, 20.</li>
          <li><b>Ca biên</b>: đúng ngay mốc và sát mốc — 50, 49, 0, 100. Bọ hay trốn ở đây!</li>
          <li><b>Ca bẫy</b>: dữ liệu sai — 101, −5, chữ “abc”.</li></ul>`, "green")}
        ${codeVaManHinh(`def xep_loai(diem):
    if diem >= 50:
        return "Dat"
    return "Chua dat"

assert xep_loai(75) == "Dat"
assert xep_loai(50) == "Dat"
assert xep_loai(49) == "Chua dat"
print("Qua het cac ca kiem thu!")`, "Qua het cac ca kiem thu!", "assert.py")}
        ${codeVaManHinh(`while True:
    try:
        tuoi = int(input("Tuoi: "))
        break
    except ValueError:
        print("Hay nhap mot so nguyen!")
print("Tuoi cua ban:", tuoi)`, "Tuoi: muoi lam\nHay nhap mot so nguyen!\nTuoi: 15\nTuoi cua ban: 15", "try_except.py", "muoi lam\n15")}
        ${cuPhap({ ten: "assert · try – except",
          mau: ["assert ‹điều kiện phải đúng›", "try:\n    ‹code có thể lỗi›\nexcept ‹LoạiLỗi›:\n    ‹xử lý khi lỗi›"],
          quyTac: ["assert sai → <code>AssertionError</code>; đúng thì không in gì", "Chỉ bắt đúng loại lỗi cần bắt (ValueError, ZeroDivisionError…)", "Không dùng try để giấu lỗi của chính mình"],
          viDu: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("Khong chia duoc cho 0")', man: "Khong chia duoc cho 0" })}
        ${docThem([[W3("python_try_except"), "W3Schools: Try Except"], [DOCS("reference/simple_stmts.html#assert"), "Python docs: assert"]])}
      `,
      challenges: [
        {
          id: "s2-ca", type: "choice", bet: true,
          title: "Bộ ca kiểm thử tốt nhất",
          prompt: "Chương trình: từ 18 tuổi trở lên là “Người lớn”. Bộ ca kiểm thử nào bắt được nhiều bọ nhất?",
          options: [{ text: "5, 10, 15", why: "Chỉ toàn ca nhỏ hơn 18 — không thử nhánh “Người lớn”." },
                    { text: "30, 40, 50", why: "Chỉ toàn ca lớn — không thử mốc." },
                    { text: "17, 18, 30, -1" }, { text: "18, 18, 18", why: "Lặp lại một ca không thêm thông tin." }],
          answer: "17, 18, 30, -1",
          why: "Có ca biên (17, 18), ca thường (30) và ca bẫy (−1)."
        },
        {
          id: "s2-assert", type: "code",
          title: "Viết hàm qua được assert",
          prompt: "Viết hàm <code>phi_vao_hang(tuoi)</code>: dưới 6 tuổi miễn phí (0), từ 6 đến dưới 18 trả 20, từ 18 trả 50. Các assert có sẵn phải qua hết.",
          requirements: ["Không sửa các dòng assert và dòng print cuối."],
          starter: "# Viet ham phi_vao_hang o day\n\nassert phi_vao_hang(5) == 0\nassert phi_vao_hang(6) == 20\nassert phi_vao_hang(17) == 20\nassert phi_vao_hang(18) == 50\nprint(\"OK het cac ca!\")\n",
          expected: "OK het cac ca!",
          rules: [{ test: c => (c.match(/assert phi_vao_hang/g) || []).length === 4, msg: "Giữ nguyên 4 dòng assert." }],
          why: "Các ca biên 6 và 18 đều qua — bạn vừa làm kiểm thử tự động!",
          hints: ["if tuoi < 6: return 0", "elif tuoi < 18: return 20", "else: return 50"]
        },
        {
          id: "s2-try", type: "code",
          title: "Nhập không sập",
          prompt: "Hỏi số rương muốn mở; nếu gõ không phải số nguyên thì báo và hỏi lại (dùng try – except). Cuối cùng in số xu = số rương × 15.",
          requirements: ['Câu dẫn <code>"So ruong: "</code>; báo lỗi <code>Nhap so nguyen nhe!</code>.', "Dùng <code>try</code> / <code>except ValueError</code>."],
          starter: "",
          tests: [{ input: "ba\n2.5\n3", expected: "So ruong: ba\nNhap so nguyen nhe!\nSo ruong: 2.5\nNhap so nguyen nhe!\nSo ruong: 3\nXu: 45" },
                  { input: "4", expected: "So ruong: 4\nXu: 60" }],
          rules: [{ test: c => co(c, "\\btry\\s*:") && co(c, "except\\s+ValueError"), msg: "Dùng try: … except ValueError:" }],
          why: "Chương trình không sập dù người dùng gõ bậy — đó là chất lượng phần mềm.",
          hints: ["while True:\n    try:\n        n = int(input(\"So ruong: \"))\n        break\n    except ValueError:\n        print(\"Nhap so nguyen nhe!\")"]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng · KTTX", kicker: "ĐIỂM DỪNG · KIỂM TRA THƯỜNG XUYÊN",
      codeHash: "914D6670",
      todo: ["Nghe thầy <b>chốt</b>: 3 loại lỗi, đọc traceback, ca kiểm thử, try – except.", "Trả lời <b>ClassPoint</b> và chơi <b>Kahoot ôn tập</b>.",
             "<b>Đóng web này</b>, làm <b>KTTX trên Canvas</b> (20 câu, 25 phút, một mình).",
             "Nộp KTTX xong, thầy cho <b>mã đồng bộ</b> để mở Boss ôn tập (có thể làm ở nhà)."],
      challenges: []
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Hang Động Cuối", kicker: "BOSS · ÔN TẬP BÀI 1–8",
      title: "Boss: Hang Động Cuối Cùng",
      bossName: "Hang Động Cuối Cùng",
      bossLine: "Mọi thứ ngươi học — biến, if, vòng lặp, list, dict, hàm — đều ở trong hang này!",
      nova: "Boss ôn tập tổng hợp Bài 1–8. <b>Tự làm một mình</b> — làm được Boss này là bạn sẵn sàng cho phần class và pygame!",
      objectives: ["Đọc code tổng hợp", "Sửa lỗi nhiều loại", "Viết chương trình có hàm, list, vòng lặp"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Bản đồ hang",
          prompt: "Code tổng hợp list, dict và hàm. Terminal hiện gì?",
          code: 'def dem(ds, x):\n    n = 0\n    for v in ds:\n        if v == x:\n            n += 1\n    return n\n\nhang = ["xu", "bom", "xu", "kho bau", "xu"]\nkq = {"xu": dem(hang, "xu"), "bom": dem(hang, "bom")}\nprint(kq, len(hang) - sum(kq.values()))',
          options: [{ text: "{'xu': 3, 'bom': 1} 1" }, { text: "{'xu': 3, 'bom': 1} 4", why: "len(hang) = 5, trừ tổng 3 + 1." },
                    { text: "{'xu': 2, 'bom': 1} 2", why: "Đếm lại: xu xuất hiện 3 lần." }, { text: "{'xu', 'bom'} 1", why: "kq là dict khoá: giá trị." }],
          answer: "{'xu': 3, 'bom': 1} 1",
          why: "Đòn chính xác!"
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Bẫy trong hang",
          prompt: "Chương trình tính điểm thám hiểm có 3 con bọ (cú pháp, khi chạy, logic). Sửa cho đúng mẫu.",
          requirements: ["Mỗi phòng: kho bau +50, xu +10, bom −30; điểm không âm.", "Giữ nguyên list phong và hàm diem_phong."],
          starter: 'def diem_phong(p):\n    if p == "kho bau":\n        return 50\n    elif p == "xu":\n        return 10\n    elif p == "bom"\n        return -30\n    return 0\n\nphong = ["xu", "bom", "kho bau", "xu"]\ntong = 0\nfor i in range(len(phong) - 1):\n    tong += diem_phong(phong[i])\nprint("Diem:", max(tong, 0))\nprint("Phong cuoi:", phong[4])\n',
          expected: "Diem: 40\nPhong cuoi: xu",
          bugs: [
            { label: "Thiếu dấu :", fixed: c => /elif p == "bom"\s*:/.test(c) },
            { label: "Lệch 1 (bỏ sót phòng)", fixed: c => !/range\(len\(phong\)\s*-\s*1\)/.test(c) },
            { label: "Chỉ số vượt phạm vi", fixed: c => !/phong\[4\]/.test(c) }
          ],
          why: "Ba loại lỗi trong một chương trình — Boss lảo đảo!",
          hints: ["Lỗi cú pháp: dòng elif bom.", "Duyệt đủ: range(len(phong)) hoặc for p in phong.", "Phòng cuối: phong[-1]."]
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Nhật ký thám hiểm",
          prompt: "Nhập n và n phòng (mỗi dòng một tên: xu, bom, kho bau, trong). Viết hàm <code>diem_phong(p)</code>; in tổng điểm (không âm), số phòng có bom, và tên phòng xuất hiện nhiều nhất (bằng nhau lấy phòng xuất hiện trước).",
          requirements: ['Câu dẫn <code>"So phong: "</code>; tên phòng nhập bằng <code>input()</code> không câu dẫn.', "Dùng hàm, list và dict.", "Có ít nhất 1 comment."],
          starter: "",
          tests: [{ input: "5\nxu\nbom\nxu\nkho bau\ntrong", expected: "So phong: 5\nxu\nbom\nxu\nkho bau\ntrong\nDiem: 40\nSo bom: 1\nNhieu nhat: xu" },
                  { input: "2\nbom\nbom", expected: "So phong: 2\nbom\nbom\nDiem: 0\nSo bom: 2\nNhieu nhat: bom" }],
          rules: [{ test: c => co(c, "def\\s+diem_phong") && co(c, "\\{"), msg: "Viết hàm diem_phong và dùng dict để đếm." }, { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment." }],
          why: "Hang Động Cuối Cùng đã bị chinh phục! Bạn sẵn sàng cho class và pygame.",
          hints: ["Lưu phòng vào list; tong += diem_phong(p).", "Đếm: d[p] = d.get(p, 0) + 1; tìm khoá có giá trị lớn nhất (dùng >)."]
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Chia an toàn",
          prompt: "Nhập a, b; in a / b làm tròn 2 chữ số. Bắt cả hai lỗi: nhập không phải số (in <code>Nhap so!</code>) và chia cho 0 (in <code>Khong chia cho 0</code>) — không hỏi lại.",
          requirements: ['Câu dẫn <code>"a = "</code>, <code>"b = "</code>.', "Hai khối except khác nhau."],
          starter: "",
          tests: [{ input: "7\n2", expected: "a = 7\nb = 2\n3.5" }, { input: "7\n0", expected: "a = 7\nb = 0\nKhong chia cho 0" }, { input: "x\n2", expected: "a = x\nNhap so!" }],
          rules: [{ test: c => co(c, "except\\s+ValueError") && co(c, "except\\s+ZeroDivisionError"), msg: "Dùng except ValueError và except ZeroDivisionError." }],
          why: "Một try, nhiều except — xử lý đúng từng loại lỗi.",
          hints: ["try:\n    a = float(input(\"a = \"))\n    b = float(input(\"b = \"))\n    print(round(a / b, 2))\nexcept ValueError: …\nexcept ZeroDivisionError: …"]
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: Tự viết bộ kiểm thử",
          prompt: "Hàm <code>la_nam_nhuan</code> có sẵn nhưng sai ở một ca biên. Thêm ít nhất 4 dòng assert (gồm 1900 và 2000) để phát hiện, rồi sửa hàm cho qua hết.",
          requirements: ["Ít nhất 4 assert, trong đó có 1900 và 2000.", "Dòng cuối in <code>Ham dung!</code>."],
          starter: "def la_nam_nhuan(n):\n    return n % 4 == 0\n\n# Viet assert o day\n\nprint(\"Ham dung!\")\n",
          expected: "Ham dung!",
          rules: [{ test: c => dem(c, "\\bassert\\b") >= 4 && /assert[^\n]*1900/.test(c) && /assert[^\n]*2000/.test(c), msg: "Viết ít nhất 4 assert, có ca 1900 và 2000." }],
          why: "Viết ca kiểm thử trước rồi sửa code — đó là cách làm của lập trình viên chuyên nghiệp (TDD).",
          hints: ["assert la_nam_nhuan(1900) == False", "return (n % 4 == 0 and n % 100 != 0) or n % 400 == 0"]
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: ôn tổng hợp Bài 1–8",
      nova: "Bốn bài tổng hợp để chắc tay trước khi sang phần class và pygame. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("Trước khi code: viết ra giấy dữ liệu nhập, xử lý, dữ liệu xuất, và 3 ca kiểm thử.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Máy tính bỏ túi",
          prompt: "Nhập hai số thực và một phép toán (+ − * /). In kết quả (round 2); phép toán lạ hoặc chia cho 0 thì in <code>Loi</code>.",
          requirements: ['Câu dẫn <code>"a = "</code>, <code>"b = "</code>, <code>"Phep: "</code>.'],
          starter: "",
          tests: [{ input: "3\n4\n*", expected: "a = 3\nb = 4\nPhep: *\n12.0" }, { input: "1\n3\n/", expected: "a = 1\nb = 3\nPhep: /\n0.33" },
                  { input: "1\n0\n/", expected: "a = 1\nb = 0\nPhep: /\nLoi" }, { input: "1\n2\n%", expected: "a = 1\nb = 2\nPhep: %\nLoi" }],
          why: "if-elif kết hợp xử lý ca bẫy.",
          hints: ['if phep == "+": … elif phep == "/" and b != 0: … else: print("Loi")']
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Thống kê điểm lớp",
          prompt: "Nhập n điểm (số thực). In số bạn Đạt (≥ 5), điểm trung bình (round 2) và các điểm cao hơn trung bình (list).",
          requirements: ['Câu dẫn <code>"n = "</code>; điểm nhập bằng <code>input()</code> không câu dẫn.'],
          starter: "",
          tests: [{ input: "4\n8\n4.5\n6\n9.5", expected: "n = 4\n8\n4.5\n6\n9.5\nDat: 3\nTB: 7.0\nTren TB: [8.0, 9.5]" }],
          why: "List + vòng lặp + điều kiện — ba công cụ chính.",
          hints: ["ds = [float(input()) for _ in range(n)] hoặc vòng for + append"]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Mã hoá tên đăng nhập",
          prompt: "Viết hàm <code>tao_ten_dang_nhap(ho_ten, nam)</code>: tên viết thường + chữ cái đầu của họ và tên đệm + 2 số cuối năm sinh. Ví dụ Nguyen Van An, 2010 → <code>annv10</code>.",
          requirements: ["Không sửa các dòng print gọi hàm."],
          starter: '# Viet ham tao_ten_dang_nhap\n\nprint(tao_ten_dang_nhap("Nguyen Van An", 2010))\nprint(tao_ten_dang_nhap("le thi mai anh", 2009))\n',
          expected: "annv10\nanhltm09",
          why: "Hàm + xâu + cắt xâu — bài toán thật ở nhiều hệ thống trường học.",
          hints: ["tu = ho_ten.lower().split()", 'ten = tu[-1]; dau = "".join(t[0] for t in tu[:-1])', "str(nam)[-2:]"]
        },
        {
          id: "x4", type: "code", level: 3,
          title: "Mê cung lưới",
          prompt: "Bản đồ là list các xâu, <code>#</code> là tường. Nhân vật bắt đầu ở (hàng 0, cột 0), nhập chuỗi lệnh R/L/U/D. Đi vào tường hoặc ra ngoài thì đứng yên. In vị trí cuối dạng (hàng, cột).",
          requirements: ['Câu dẫn <code>"Lenh: "</code>.'],
          starter: 'ban_do = ["..#.",\n          ".#..",\n          "...."]\n',
          tests: [{ input: "DDRRUR", expected: "Lenh: DDRRUR\n(1, 3)" }, { input: "RR", expected: "Lenh: RR\n(0, 1)" }, { input: "UL", expected: "Lenh: UL\n(0, 0)" }],
          why: "Lưới + toạ độ + kiểm tra biên — chính là logic di chuyển trong game ô vuông!",
          hints: ["dx, dy cho từng lệnh; tính (h2, c2) mới", "Chỉ di chuyển khi 0 <= h2 < len(ban_do), 0 <= c2 < len(ban_do[0]) và ban_do[h2][c2] != '#'"]
        }
      ]
    }
  ]
};
})();
