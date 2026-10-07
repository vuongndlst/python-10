/* Bài 8 — Hàm: def, gọi hàm, tham số, giá trị mặc định, return, None, phạm vi biến, import
   Nhiệm vụ studio: Kỹ năng của nhân vật. Mã đồng bộ: chỉ ghi trong README của bài. */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, moRong, doan, meo, luuY, khai, docThem, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai08", number: 8,
  title: "Hàm",
  story: "Kỹ năng của nhân vật",
  skills: ["def", "Gọi hàm", "Tham số · đối số", "Giá trị mặc định", "return", "Biến cục bộ · toàn cục", "import math, random"],

  errorTable: [
    ["NameError: name 'tan_cong' is not defined", "Gọi hàm trước khi định nghĩa, hoặc gõ sai tên hàm", "Đặt <code>def</code> phía trên chỗ gọi; gõ đúng tên (phân biệt hoa thường)"],
    ["TypeError: … missing 1 required positional argument", "Gọi hàm thiếu đối số", "Truyền đủ đối số như số tham số trong def"],
    ["TypeError: … takes 1 positional argument but 2 were given", "Gọi hàm thừa đối số", "Kiểm tra lại số tham số"],
    ["In ra None", "Hàm dùng print thay vì return, rồi in kết quả của hàm", "Muốn dùng kết quả thì hàm phải <code>return</code>"],
    ["TypeError: unsupported operand type(s) … 'NoneType'", "Tính toán với kết quả của hàm không có return", "Thêm <code>return</code> trong hàm"],
    ["SyntaxError: expected ':'", "Thiếu dấu : cuối dòng def", "<code>def ten_ham(tham_so):</code>"],
    ["Biến toàn cục không đổi sau khi gọi hàm", "Gán biến trong hàm tạo biến cục bộ mới", "Trả về giá trị mới bằng return rồi gán lại bên ngoài"],
    ["NameError: name 'math' is not defined", "Quên <code>import math</code>", "Thêm <code>import math</code> ở đầu file"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "Định nghĩa hàm",
      kicker: "CHẶNG 1 · ĐỊNH NGHĨA VÀ GỌI HÀM",
      title: "def: đóng gói một kỹ năng",
      nova: "Nhân vật cần kỹ năng <b>tấn công</b>, <b>hồi máu</b>… dùng đi dùng lại nhiều lần. Viết code một lần trong <b>hàm</b>, gọi bao nhiêu lần cũng được.",
      objectives: ["Định nghĩa hàm bằng def", "Gọi hàm", "Hiểu hàm phải được định nghĩa trước khi gọi"],
      lesson: `
        ${khai("Hàm là gì?", `<p>Bạn đã dùng nhiều <b>hàm có sẵn</b>: <code>print()</code>, <code>input()</code>, <code>len()</code>. Hàm là một đoạn code <b>có tên</b>; gọi tên là đoạn code đó chạy. Hôm nay ta tự viết hàm.</p>`, "blue")}
        ${codeVaManHinh(`def in_vach():
    print("=" * 14)

in_vach()
print("LSTS PY STUDIO")
in_vach()`, "==============\nLSTS PY STUDIO\n==============", "ham_dau_tien.py")}
        ${giaiMa("Giải mã hàm", [
          { code: "def in_vach():", y: "<b>Định nghĩa</b> hàm tên <code>in_vach</code>: từ khoá <code>def</code>, tên, cặp ngoặc, dấu <code>:</code>.", nhan: true },
          { code: '    print("=" * 14)', y: "<b>Thân hàm</b> — thụt lề. Định nghĩa xong thì <b>chưa chạy</b> gì cả." },
          { code: "in_vach()", y: "<b>Gọi</b> hàm: lúc này thân hàm mới chạy. Nhớ cặp ngoặc <code>()</code>.", nhan: true },
          { code: "đặt tên hàm", y: "Như tên biến: snake_case, nên là <b>động từ</b> mô tả việc hàm làm." }
        ])}
        ${cuPhap({ ten: "ĐỊNH NGHĨA VÀ GỌI HÀM",
          mau: ["def ‹tên hàm›():\n    ‹thân hàm›", "‹tên hàm›()"],
          quyTac: ["Định nghĩa hàm <b>trước</b> chỗ gọi (thường đặt ở đầu file)", "Thân hàm thụt 4 dấu cách", "Gọi hàm phải có ngoặc tròn, kể cả khi không có đối số"],
          viDu: 'def chao():\n    print("Xin chao!")\n\nchao()\nchao()', man: "Xin chao!\nXin chao!" })}
        ${docThem([[W3("python_functions"), "W3Schools: Functions"], [DOCS("tutorial/controlflow.html#defining-functions"), "Python Tutorial — Defining Functions"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Định nghĩa chưa phải là chạy",
          prompt: "Hàm được định nghĩa ở trên nhưng gọi ở dưới. Terminal hiện gì?",
          code: 'def chao():\n    print("Xin chao!")\n\nprint("Bat dau")\nchao()\nchao()',
          options: [{ text: "Xin chao!\nBat dau\nXin chao!\nXin chao!", why: "Dòng def chỉ ĐỊNH NGHĨA — chưa chạy thân hàm." }, { text: "Bat dau\nXin chao!\nXin chao!" },
                    { text: "Bat dau\nXin chao!", why: "Hàm được gọi hai lần." }, { text: "Bat dau", why: "chao() là lời gọi — thân hàm sẽ chạy." }],
          answer: "Bat dau\nXin chao!\nXin chao!",
          why: "Đúng! Định nghĩa thì chưa chạy; mỗi lần gọi chạy một lần."
        },
        {
          id: "s1-code", type: "code",
          title: "Hàm in vạch",
          prompt: "Viết hàm <code>in_vach()</code> in một dòng gồm 14 dấu <code>=</code>; gọi hàm trước và sau dòng tiêu đề như mẫu.",
          requirements: ["Định nghĩa đúng một hàm <code>in_vach</code>.", "Chỉ một lệnh <code>print(\"=\" * 14)</code> nằm trong hàm."],
          starter: '# Viet ham in_vach o day\n\nprint("BANG XEP HANG")\n',
          expected: "==============\nBANG XEP HANG\n==============",
          rules: [{ test: c => co(c, "def\\s+in_vach\\s*\\(\\s*\\)\\s*:") && dem(c, "\\bin_vach\\s*\\(\\s*\\)") >= 3, msg: "Định nghĩa def in_vach(): và gọi in_vach() hai lần." },
                  { test: c => (window.PY.stripComments(c).match(/"="\s*\*\s*14/g) || []).length === 1, msg: "Chỉ viết print(\"=\" * 14) một lần — trong hàm." }],
          why: "Viết một lần, dùng nhiều lần — đó là lý do có hàm.",
          hints: ['def in_vach():\n    print("=" * 14)', "Gọi in_vach() trước và sau dòng print tiêu đề."]
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Tham số",
      kicker: "CHẶNG 2 · THAM SỐ VÀ ĐỐI SỐ",
      title: "Tham số: truyền dữ liệu vào hàm",
      nova: "Kỹ năng tấn công phải biết <b>ai</b> tấn công và <b>gây bao nhiêu</b> sát thương. Truyền dữ liệu vào hàm qua <b>tham số</b>.",
      objectives: ["Định nghĩa hàm có tham số", "Truyền đối số khi gọi", "Dùng giá trị mặc định"],
      lesson: `
        ${codeVaManHinh(`def tan_cong(ten, sat_thuong=10):
    print(f"{ten} tan cong, gay {sat_thuong} sat thuong!")

tan_cong("Kai")
tan_cong("Lia", 25)
tan_cong(sat_thuong=5, ten="Zed")`, "Kai tan cong, gay 10 sat thuong!\nLia tan cong, gay 25 sat thuong!\nZed tan cong, gay 5 sat thuong!", "tham_so.py")}
        ${giaiMa("Tham số và đối số", [
          { code: "def tan_cong(ten, sat_thuong=10):", y: "<code>ten</code>, <code>sat_thuong</code> là <b>tham số</b> — biến nhận dữ liệu khi hàm được gọi.", nhan: true },
          { code: 'tan_cong("Lia", 25)', y: "<code>\"Lia\"</code>, <code>25</code> là <b>đối số</b> — giá trị truyền vào, theo đúng thứ tự." },
          { code: "sat_thuong=10", y: "<b>Giá trị mặc định</b>: không truyền thì dùng 10. Tham số có mặc định đặt sau cùng." },
          { code: "tan_cong(sat_thuong=5, ten=\"Zed\")", y: "Truyền theo <b>tên</b> tham số thì không cần đúng thứ tự." }
        ])}
        ${cuPhap({ ten: "HÀM CÓ THAM SỐ",
          mau: ["def ‹tên hàm›(‹tham số 1›, ‹tham số 2›=‹mặc định›):\n    ‹thân hàm›", "‹tên hàm›(‹đối số 1›, ‹đối số 2›)"],
          quyTac: ["Số đối số phải khớp số tham số (trừ tham số có mặc định)", "Thiếu đối số → <code>TypeError … missing … argument</code>", "Tham số chỉ tồn tại bên trong hàm"],
          viDu: 'def in_khung(chu, ky_tu="*"):\n    print(ky_tu * (len(chu) + 4))\n    print(ky_tu, chu, ky_tu)\n    print(ky_tu * (len(chu) + 4))\n\nin_khung("Win")', man: "*******\n* Win *\n*******" })}
        ${docThem([[W3("python_functions"), "W3Schools: Function Arguments"]])}
      `,
      challenges: [
        {
          id: "s2-predict", type: "choice", bet: true, mono: true,
          title: "Giá trị mặc định",
          prompt: "Hàm có tham số mặc định. Terminal hiện gì?",
          code: 'def hoi_mau(mau, luong=20):\n    print(mau + luong)\n\nhoi_mau(50)\nhoi_mau(50, 5)',
          options: [{ text: "70\n55" }, { text: "70\n70", why: "Lần gọi thứ hai truyền 5 — thay cho giá trị mặc định." },
                    { text: "50\n55", why: "Không truyền luong thì dùng mặc định 20." }, { text: "TypeError", why: "luong có giá trị mặc định nên được phép bỏ qua." }],
          answer: "70\n55",
          why: "Chuẩn: không truyền thì dùng mặc định, có truyền thì dùng đối số."
        },
        {
          id: "s2-code", type: "code",
          title: "Hàm in khung thông báo",
          prompt: "Viết hàm <code>in_khung(thong_bao)</code> in thông báo trong khung dấu <code>*</code> (rộng hơn thông báo 4 ký tự). Hai lời gọi đã có sẵn.",
          requirements: ["Dòng giữa: <code>* thong_bao *</code>.", "Không sửa hai dòng gọi hàm."],
          starter: '# Viet ham in_khung o day\n\nin_khung("Level up!")\nin_khung("Win")\n',
          expected: "*************\n* Level up! *\n*************\n*******\n* Win *\n*******",
          rules: [{ test: c => co(c, "def\\s+in_khung\\s*\\(\\s*\\w+\\s*\\)\\s*:"), msg: "Định nghĩa def in_khung(thong_bao):" },
                  { test: c => co(c, "len\\("), msg: "Độ rộng khung tính theo len(thong_bao) + 4." }],
          why: "Một hàm, mọi độ dài thông báo — khung tự co giãn.",
          hints: ['print("*" * (len(thong_bao) + 4))', 'print("*", thong_bao, "*")']
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "B7C65882",
      todo: ["Nghe thầy <b>chốt</b>: định nghĩa – gọi hàm, tham số, đối số, giá trị mặc định.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Hàm đếm ngược",
          prompt: "Trong lúc chờ: viết hàm <code>dem_nguoc(n)</code> in n, n−1, …, 1 rồi <code>Go!</code>; chương trình nhập n và gọi hàm.",
          requirements: ['Câu dẫn <code>"n = "</code>.'],
          starter: "",
          tests: [{ input: "3", expected: "n = 3\n3\n2\n1\nGo!" }, { input: "1", expected: "n = 1\n1\nGo!" }],
          rules: [{ test: c => co(c, "def\\s+dem_nguoc\\s*\\("), msg: "Định nghĩa hàm dem_nguoc(n)." }],
          why: "Vòng lặp nằm gọn trong hàm.",
          hints: ['def dem_nguoc(n):\n    for i in range(n, 0, -1):\n        print(i)\n    print("Go!")']
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "return",
      kicker: "CHẶNG 3 · GIÁ TRỊ TRẢ VỀ",
      title: "return: hàm trả kết quả",
      nova: "Kỹ năng tấn công không chỉ <b>in</b> sát thương — game cần <b>dùng</b> con số đó để trừ máu. Hàm trả kết quả về bằng <b>return</b>.",
      objectives: ["Dùng return trả về giá trị", "Phân biệt return và print", "Biết hàm không return thì trả về None"],
      lesson: `
        ${codeVaManHinh(`def tinh_sat_thuong(cong, thu):
    return max(cong - thu, 1)

mau = 100
mau -= tinh_sat_thuong(30, 10)
mau -= tinh_sat_thuong(5, 9)
print("Mau con lai:", mau)`, "Mau con lai: 79", "return.py")}
        ${giaiMa("return khác print", [
          { code: "return gia_tri", y: "Trả giá trị về <b>chỗ gọi hàm</b> để dùng tiếp (gán, tính toán) — và <b>kết thúc</b> hàm ngay.", nhan: true },
          { code: "print(gia_tri)", y: "Chỉ <b>hiện</b> lên terminal; chỗ gọi hàm không nhận được gì." },
          { code: "x = ham_khong_return()", y: "Hàm không có return trả về <code>None</code> — <code>x</code> là <code>None</code>.", nhan: true }
        ])}
        <div class="pair-view">${demo("def gap_doi(x):\n    return x * 2\n\ndef in_gap_doi(x):\n    print(x * 2)\n\na = gap_doi(3)\nb = in_gap_doi(4)\nprint(a, b)", "return_vs_print.py")}
          ${terminal("8\n6 None")}</div>
        ${cuPhap({ ten: "return",
          mau: ["def ‹tên hàm›(‹tham số›):\n    ‹…›\n    return ‹giá trị›", "‹biến› = ‹tên hàm›(‹đối số›)"],
          quyTac: ["Gặp return thì hàm kết thúc ngay", "Có thể trả về nhiều giá trị: <code>return a, b</code> (thành tuple)", "Hàm “tính toán” nên return; hàm “hiển thị” mới print"],
          viDu: "def chia(a, b):\n    return a // b, a % b\n\nthuong, du = chia(17, 5)\nprint(thuong, du)", man: "3 2" })}
        ${docThem([[W3("python_functions"), "W3Schools: Return Values"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "return hay print?",
          prompt: "Một hàm return, một hàm print. Terminal hiện gì?",
          code: "def gap_doi(x):\n    return x * 2\n\ndef in_gap_doi(x):\n    print(x * 2)\n\na = gap_doi(3)\nb = in_gap_doi(4)\nprint(a, b)",
          options: [{ text: "6 8", why: "in_gap_doi in 8 ngay khi được gọi, và trả về None." }, { text: "8\n6 None" },
                    { text: "6\n8\n6 8", why: "gap_doi không in gì — nó return." }, { text: "8\n6 8", why: "in_gap_doi không có return nên b là None." }],
          answer: "8\n6 None",
          why: "Đúng! Hàm chỉ print thì trả về None."
        },
        {
          id: "s3-code", type: "code",
          title: "Hàm tính sát thương",
          prompt: "Viết hàm <code>tinh_sat_thuong(cong, thu)</code> <b>trả về</b> cong − thu, nhưng ít nhất là 1. Chương trình nhập công, thủ rồi in kết quả.",
          requirements: ['Câu dẫn <code>"Cong: "</code>, <code>"Thu: "</code>.', "Hàm dùng <code>return</code>, không print trong hàm."],
          starter: "# Viet ham tinh_sat_thuong o day\n\n",
          tests: [{ input: "30\n10", expected: "Cong: 30\nThu: 10\nSat thuong: 20" }, { input: "5\n9", expected: "Cong: 5\nThu: 9\nSat thuong: 1" },
                  { input: "7\n6", expected: "Cong: 7\nThu: 6\nSat thuong: 1" }],
          rules: [{ test: c => co(c, "def\\s+tinh_sat_thuong\\s*\\(") && co(c, "\\breturn\\b"), msg: "Định nghĩa tinh_sat_thuong và dùng return." }],
          why: "Hàm tính toán trả về kết quả — chương trình chính quyết định in hay dùng tiếp.",
          hints: ["def tinh_sat_thuong(cong, thu):\n    return max(cong - thu, 1)", 'print("Sat thuong:", tinh_sat_thuong(cong, thu))']
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "Phạm vi & import",
      kicker: "CHẶNG 4 · PHẠM VI BIẾN · THƯ VIỆN",
      title: "Phạm vi biến và thư viện",
      nova: "Biến tạo trong hàm sống ở đâu? Và Python có sẵn hàng nghìn hàm trong <b>thư viện</b> — chỉ cần <b>import</b>.",
      objectives: ["Phân biệt biến cục bộ và toàn cục", "Dùng import math, random", "Dùng from … import …"],
      lesson: `
        ${codeVaManHinh(`diem = 10

def them_diem():
    diem = 99
    print("Trong ham:", diem)

them_diem()
print("Ngoai ham:", diem)`, "Trong ham: 99\nNgoai ham: 10", "pham_vi.py")}
        ${giaiMa("Phạm vi biến", [
          { code: "biến cục bộ", y: "Tạo (gán) <b>bên trong</b> hàm — chỉ dùng được trong hàm, mất khi hàm kết thúc.", nhan: true },
          { code: "biến toàn cục", y: "Tạo ở <b>ngoài</b> mọi hàm — hàm đọc được, nhưng gán trong hàm sẽ tạo biến cục bộ cùng tên." },
          { code: "cách đúng", y: "Muốn hàm đổi một giá trị: truyền vào qua tham số, <b>return</b> giá trị mới, gán lại ở ngoài." }
        ])}
        ${codeVaManHinh(`import math
from random import randint

print(math.sqrt(16), math.pi)
print(math.floor(7.8), math.ceil(7.2))
x = randint(1, 6)
print(1 <= x <= 6)`, "4.0 3.141592653589793\n7 8\nTrue", "thu_vien.py")}
        ${cuPhap({ ten: "THƯ VIỆN",
          mau: ["import ‹thư viện›\n‹thư viện›.‹hàm›(…)", "from ‹thư viện› import ‹hàm›\n‹hàm›(…)"],
          quyTac: ["import đặt ở đầu file", "<code>math</code>: sqrt, floor, ceil, pi · <code>random</code>: randint, choice", "Đừng đặt tên file là <code>random.py</code> hay <code>math.py</code> — sẽ che thư viện thật"],
          viDu: "import math\ndef khoang_cach(x1, y1, x2, y2):\n    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)\n\nprint(khoang_cach(0, 0, 3, 4))", man: "5.0" })}
        ${moRong("global (không khuyến khích)", `<p>Từ khoá <code>global diem</code> trong hàm cho phép gán vào biến toàn cục. Code lớn dùng global dễ rối — nên ưu tiên tham số + return. Pygame đôi khi dùng global cho điểm số.</p>`)}
        ${docThem([[W3("python_scope"), "W3Schools: Scope"], [DOCS("library/math.html"), "Python docs: math"]])}
      `,
      challenges: [
        {
          id: "s4-predict", type: "choice", bet: true, mono: true,
          title: "Hai biến cùng tên",
          prompt: "Biến cục bộ và toàn cục cùng tên. Terminal hiện gì?",
          code: "mau = 100\n\ndef trung_don(mau):\n    mau = mau - 30\n    return mau\n\nmoi = trung_don(mau)\nprint(moi, mau)",
          options: [{ text: "70 70", why: "Tham số mau trong hàm là biến cục bộ — gán lại không đổi biến toàn cục." }, { text: "70 100" },
                    { text: "100 70", why: "moi nhận giá trị return là 70." }, { text: "100 100", why: "Hàm trả về 100 − 30." }],
          answer: "70 100",
          why: "Đúng! Muốn đổi máu thì gán lại: mau = trung_don(mau)."
        },
        {
          id: "s4-code", type: "code",
          title: "Khoảng cách tới quái",
          prompt: "Viết hàm <code>khoang_cach(x1, y1, x2, y2)</code> trả về khoảng cách giữa hai điểm (làm tròn 2 chữ số) dùng <code>math.sqrt</code>. Nhập toạ độ nhân vật và quái.",
          requirements: ['Câu dẫn <code>"x1 = "</code>, <code>"y1 = "</code>, <code>"x2 = "</code>, <code>"y2 = "</code> (số thực).', "<code>import math</code>; hàm dùng return."],
          starter: "",
          tests: [{ input: "0\n0\n3\n4", expected: "x1 = 0\ny1 = 0\nx2 = 3\ny2 = 4\nKhoang cach: 5.0" },
                  { input: "1\n2\n4\n6", expected: "x1 = 1\ny1 = 2\nx2 = 4\ny2 = 6\nKhoang cach: 5.0" },
                  { input: "0\n0\n1\n1", expected: "x1 = 0\ny1 = 0\nx2 = 1\ny2 = 1\nKhoang cach: 1.41" }],
          rules: [{ test: c => co(c, "import\\s+math|from\\s+math") && co(c, "def\\s+khoang_cach") && co(c, "\\breturn\\b"), msg: "import math; định nghĩa khoang_cach có return." }],
          why: "Hàm khoảng cách — pygame dùng để biết quái đã tới gần nhân vật chưa.",
          hints: ["return round(math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2), 2)"]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "90E61DD3",
      todo: ["Nghe thầy <b>chốt</b>: return khác print, None, biến cục bộ/toàn cục, import.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code, chụp ảnh nộp ClassPoint.", "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Hàm số nguyên tố",
          prompt: "Trong lúc chờ: viết hàm <code>la_nguyen_to(n)</code> trả về True/False; in các số nguyên tố từ 2 đến n trên một dòng.",
          requirements: ['Câu dẫn <code>"n = "</code>.', "Các số cách nhau một dấu cách."],
          starter: "",
          tests: [{ input: "20", expected: "n = 20\n2 3 5 7 11 13 17 19" }, { input: "2", expected: "n = 2\n2" }],
          rules: [{ test: c => co(c, "def\\s+la_nguyen_to") && co(c, "\\breturn\\b"), msg: "Viết hàm la_nguyen_to có return." }],
          why: "Hàm trả về True/False dùng thẳng trong if — code đọc như câu tiếng Anh.",
          hints: ["Trong hàm: for d in range(2, n): if n % d == 0: return False; cuối hàm return True (n >= 2)", 'Dùng list rồi " ".join(map(str, ds)) hoặc print(..., end=" ")']
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Hiệp Sĩ Trùng Lặp", kicker: "BOSS · BÀI 8",
      title: "Boss: Hiệp Sĩ Trùng Lặp",
      bossName: "Hiệp Sĩ Trùng Lặp",
      bossLine: "Ta lặp lại code ở khắp nơi! Sửa một chỗ, ngươi phải sửa cả trăm chỗ!",
      nova: "Vũ khí chống trùng lặp là <b>hàm</b>. <b>Tự làm một mình</b> nhé!",
      objectives: ["Dò hàm gọi hàm", "Sửa bọ def/return/tên hàm", "Viết hàm xếp hạng"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Hàm gọi hàm",
          prompt: "Hàm g gọi hàm f. Terminal hiện gì?",
          code: "def f(x):\n    return x + 1\n\ndef g(x):\n    return f(x) * 2\n\nprint(g(3), f(g(1)))",
          options: [{ text: "8 5" }, { text: "7 5", why: "g(3) = f(3) * 2 = 4 * 2." }, { text: "8 4", why: "f(g(1)) = f(4) = 5." }, { text: "8 3", why: "g(1) = f(1) * 2 = 4, rồi f(4) = 5." }],
          answer: "8 5",
          why: "Đòn chính xác!"
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Ba con bọ hàm",
          prompt: "Hiệp Sĩ cài 3 bọ vào hàm hồi máu. Sửa để terminal đúng mẫu (không in thừa dòng nào).",
          requirements: ["Giữ tên hàm <code>hoi_mau</code> và 2 lời gọi.", "Hàm trả về máu mới."],
          starter: 'def hoi_mau(mau, luong)\n    mau = mau + luong\n    print(mau)\n\nmau = hoi_mau(50, 30)\nprint("Mau moi:", mau)\nprint(Hoi_mau(10, 5))\n',
          expected: "Mau moi: 80\n15",
          bugs: [
            { label: "Thiếu dấu :", fixed: c => /def hoi_mau\(mau, luong\)\s*:/.test(c) },
            { label: "print thay return", fixed: c => /\n\s+return\s+mau/.test(c) && !/\n\s+print\(mau\)/.test(c) },
            { label: "Sai tên hàm", fixed: c => !/\bHoi_mau\b/.test(c) }
          ],
          why: "Hiệp Sĩ mất nửa máu!",
          hints: ["Dòng def thiếu dấu :", "Thay print(mau) bằng return mau.", "Python phân biệt hoa thường: hoi_mau."]
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Hàm xếp hạng",
          prompt: "Viết hàm <code>xep_hang(diem)</code> trả về <code>Kim cuong</code> (≥ 90), <code>Vang</code> (≥ 75), <code>Bac</code> (≥ 50), <code>Dong</code>. Nhập 3 điểm, in hạng từng người — không lặp lại if-elif ba lần.",
          requirements: ['Câu dẫn <code>"Diem 1: "</code>, <code>"Diem 2: "</code>, <code>"Diem 3: "</code>.', "In <code>Nguoi 1: …</code> … sau khi nhập xong.", "Có ít nhất 1 comment."],
          starter: "",
          tests: [{ input: "95\n75\n10", expected: "Diem 1: 95\nDiem 2: 75\nDiem 3: 10\nNguoi 1: Kim cuong\nNguoi 2: Vang\nNguoi 3: Dong" },
                  { input: "50\n89\n90", expected: "Diem 1: 50\nDiem 2: 89\nDiem 3: 90\nNguoi 1: Bac\nNguoi 2: Vang\nNguoi 3: Kim cuong" }],
          rules: [{ test: c => co(c, "def\\s+xep_hang") && dem(c, "\\belif\\b") <= 3 && co(c, "\\breturn\\b"), msg: "Viết if-elif một lần trong hàm xep_hang (dùng return), rồi gọi hàm 3 lần." },
                  { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment." }],
          why: "Hiệp Sĩ Trùng Lặp đã gục — code không còn lặp lại!",
          hints: ["def xep_hang(diem):\n    if diem >= 90:\n        return \"Kim cuong\"\n    ...", "Lưu 3 điểm vào list, rồi duyệt list gọi xep_hang."]
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: UCLN và BCNN bằng hàm",
          prompt: "Viết hàm <code>ucln(a, b)</code> (thuật toán Euclid) và hàm <code>bcnn(a, b)</code> <b>gọi lại</b> ucln. Nhập a, b; in cả hai.",
          requirements: ['Câu dẫn <code>"a = "</code>, <code>"b = "</code>.', "bcnn phải gọi ucln; không dùng math.gcd."],
          starter: "",
          tests: [{ input: "12\n18", expected: "a = 12\nb = 18\nUCLN = 6, BCNN = 36" }, { input: "7\n5", expected: "a = 7\nb = 5\nUCLN = 1, BCNN = 35" }],
          rules: [{ test: c => co(c, "def\\s+ucln") && co(c, "def\\s+bcnn") && !/gcd/.test(c), msg: "Viết ucln và bcnn (bcnn gọi ucln), không dùng gcd có sẵn." }],
          why: "Hàm dùng lại hàm — xây chương trình như xếp lego.",
          hints: ["def ucln(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a", "def bcnn(a, b):\n    return a * b // ucln(a, b)"]
        },
        {
          id: "adv-2", type: "code", advanced: true, seed: 7,
          title: "Nâng cao: Xúc xắc nhiều mặt",
          prompt: "Viết hàm <code>tung(so_mat=6)</code> trả về số ngẫu nhiên từ 1 đến so_mat. Gọi <code>tung()</code> 3 lần rồi <code>tung(20)</code> 1 lần, in theo mẫu (web cố định seed).",
          requirements: ["<code>from random import randint</code> (hoặc import random).", "Không gọi random.seed."],
          starter: "",
          expected: "Xuc xac 6 mat: 3 2 4\nXuc xac 20 mat: 2",
          rules: [{ test: c => co(c, "def\\s+tung\\s*\\(\\s*so_mat\\s*=\\s*6\\s*\\)") && khongCo(c, "seed"), msg: "def tung(so_mat=6): … và không gọi seed." }],
          why: "Tham số mặc định giúp một hàm phục vụ nhiều loại xúc xắc.",
          hints: ["def tung(so_mat=6):\n    return randint(1, so_mat)", 'print("Xuc xac 6 mat:", tung(), tung(), tung())']
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: viết hàm như lập trình viên",
      nova: "Bốn bài viết hàm, bài cuối là thuật toán sắp xếp nổi tiếng. Không bắt buộc, không ảnh hưởng chứng chỉ.",
      lesson: `${window.KIT.meo("Viết hàm trước, thử từng hàm với vài giá trị, rồi mới ghép vào chương trình chính.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Hàm trung bình",
          prompt: "Viết hàm <code>trung_binh(ds)</code> trả về trung bình của list (round 2); list rỗng trả về 0. Các lời gọi đã có sẵn.",
          requirements: ["Không sửa 2 dòng print."],
          starter: "# Viet ham trung_binh\n\nprint(trung_binh([8, 9, 10, 7]))\nprint(trung_binh([]))\n",
          expected: "8.5\n0",
          rules: [{ test: c => co(c, "def\\s+trung_binh\\s*\\(") && co(c, "\\breturn\\b"), msg: "Viết hàm trung_binh có return." }],
          why: "Xử lý trường hợp đặc biệt (list rỗng) ngay trong hàm.",
          hints: ["if len(ds) == 0: return 0", "return round(sum(ds) / len(ds), 2)"]
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Hàm trả về dict",
          prompt: "Viết hàm <code>dem_tu(cau)</code> trả về dict đếm số lần mỗi từ xuất hiện (không phân biệt hoa thường).",
          requirements: ["Không sửa dòng print."],
          starter: '# Viet ham dem_tu\n\nprint(dem_tu("Py la Py va py rat vui"))\n',
          expected: "{'py': 3, 'la': 1, 'va': 1, 'rat': 1, 'vui': 1}",
          rules: [{ test: c => co(c, "def\\s+dem_tu\\s*\\(") && co(c, "\\breturn\\b"), msg: "Viết hàm dem_tu có return." }],
          why: "Hàm có thể trả về bất kỳ kiểu dữ liệu nào — kể cả dict.",
          hints: ["for tu in cau.lower().split(): d[tu] = d.get(tu, 0) + 1"]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Số ngày trong tháng",
          prompt: "Viết hàm <code>nam_nhuan(nam)</code> và hàm <code>so_ngay(thang, nam)</code> (gọi nam_nhuan cho tháng 2). Nhập tháng, năm; in số ngày.",
          requirements: ['Câu dẫn <code>"Thang: "</code>, <code>"Nam: "</code>.'],
          starter: "",
          tests: [{ input: "2\n2024", expected: "Thang: 2\nNam: 2024\n29 ngay" }, { input: "2\n2026", expected: "Thang: 2\nNam: 2026\n28 ngay" },
                  { input: "4\n2026", expected: "Thang: 4\nNam: 2026\n30 ngay" }, { input: "12\n2026", expected: "Thang: 12\nNam: 2026\n31 ngay" }],
          rules: [{ test: c => co(c, "def\\s+nam_nhuan") && co(c, "def\\s+so_ngay"), msg: "Viết hai hàm nam_nhuan và so_ngay." }],
          why: "Chia bài toán thành các hàm nhỏ — mỗi hàm một việc.",
          hints: ["if thang == 2: return 29 if nam_nhuan(nam) else 28", "if thang in [4, 6, 9, 11]: return 30"]
        },
        {
          id: "x4", type: "code", level: 3,
          title: "Sắp xếp nổi bọt",
          prompt: "Viết hàm <code>sap_xep(ds)</code> trả về list mới đã sắp xếp tăng dần bằng thuật toán <b>nổi bọt</b> (đổi chỗ hai phần tử kề nhau nếu sai thứ tự) — không dùng sort/sorted.",
          requirements: ["Không sửa dòng tạo list và dòng print.", "Không dùng <code>sort</code>, <code>sorted</code>."],
          starter: "# Viet ham sap_xep\n\nds = [5, 2, 9, 1, 7]\nprint(sap_xep(ds), ds)\n",
          expected: "[1, 2, 5, 7, 9] [5, 2, 9, 1, 7]",
          rules: [{ test: c => !/\bsort(ed)?\b/.test(window.PY.codeOnly(c)), msg: "Không dùng sort hay sorted — tự cài thuật toán nổi bọt." }],
          why: "Nổi bọt là thuật toán sắp xếp kinh điển — SGK Tin học 11 sẽ học kỹ.",
          hints: ["kq = list(ds) để không sửa list gốc", "for i in range(len(kq)): for j in range(len(kq) - 1 - i): if kq[j] > kq[j + 1]: đổi chỗ"]
        }
      ]
    }
  ]
};
})();
