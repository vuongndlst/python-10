/* Bài 1 — Python đầu tiên: print, comment, lỗi cú pháp, biến, lệnh gán, int/float/str, type()
   Nhiệm vụ studio: Thẻ nhân vật đầu tiên. Mã đồng bộ: chỉ ghi trong README của bài (không ghi trong web công khai). */
"use strict";
(function () {
const { codeVaManHinh, demo, terminal, giaiMa, cuPhap, tenBien, moRong, doan, meo, luuY, khai, docThem, co, coChuoi, khongCo, dem, W3, DOCS } = window.KIT;

window.LESSON = {
  id: "bai01", number: 1,
  title: "Python đầu tiên",
  story: "Thẻ nhân vật đầu tiên",
  skills: ["print()", "Comment #", "Đọc thông báo lỗi", "Biến và lệnh gán", "Tên snake_case", "int · float · str", "type()"],

  errorTable: [
    ["SyntaxError: unterminated string literal", "Chuỗi mở bằng <code>\"</code> mà chưa đóng", "Thêm <code>\"</code> ở cuối chuỗi: <code>print(\"Xin chao\")</code>"],
    ["SyntaxError: '(' was never closed", "Thiếu ngoặc tròn đóng <code>)</code>", "Đếm ngoặc: mỗi <code>(</code> phải có một <code>)</code>"],
    ["NameError: name 'Print' is not defined", "Viết hoa <code>Print</code>; Python phân biệt hoa/thường", "Viết đúng chữ thường: <code>print</code>"],
    ["NameError: name 'diem' is not defined", "Dùng biến chưa gán giá trị, hoặc gõ sai tên biến", "Gán trước khi dùng: <code>diem = 0</code>; gõ tên giống hệt"],
    ["IndentationError: unexpected indent", "Đầu dòng có dấu cách thừa", "Lệnh không nằm trong khối nào thì viết sát lề trái"],
    ["SyntaxError: invalid syntax (tên biến có dấu cách)", "Tên biến có dấu cách: <code>toc do = 7</code>", "Nối bằng dấu gạch dưới: <code>toc_do = 7</code>"],
    ["Terminal in ra <em>chữ</em> tên biến", "Đặt tên biến trong ngoặc kép: <code>print(\"mau\")</code>", "Bỏ ngoặc kép: <code>print(mau)</code>"],
    ["SyntaxError: invalid syntax. Perhaps you forgot a comma?", "Thiếu dấu phẩy giữa các giá trị trong <code>print</code>", "<code>print(\"Mau:\", mau)</code>"]
  ],

  steps: [
    /* ================= CHẶNG 1 ================= */
    {
      kind: "stage", id: "stage-1", number: 1, nav: "Lệnh print()",
      kicker: "CHẶNG 1 · IN RA MÀN HÌNH",
      title: "Câu lệnh đầu tiên: print()",
      nova: "Chào mừng bạn đến <b>LSTS Py Studio</b>! Studio đang làm game <b>Planet Py</b> và cần bạn tạo thẻ nhân vật. Việc đầu tiên: dạy máy <b>in chữ ra màn hình</b>.",
      objectives: ["Dùng print() in chuỗi và số", "In nhiều giá trị trong một lệnh", "Biết Python chạy từ trên xuống"],
      lesson: `
        ${khai("Chương trình Python chạy thế nào?", `<p>Một chương trình Python là các <b>câu lệnh</b> viết trên nhiều dòng. Python chạy <b>lần lượt từ dòng trên xuống dòng dưới</b>.
          Lệnh <code>print()</code> in giá trị nằm trong cặp ngoặc tròn ra <b>terminal</b> (màn hình kết quả), mỗi lệnh in xong thì tự xuống dòng.</p>`, "blue")}
        ${codeVaManHinh(`print("Chao mung den LSTS Py Studio!")
print("Game: Planet Py")
print(2026)`, "Chao mung den LSTS Py Studio!\nGame: Planet Py\n2026", "chao_mung.py")}
        ${giaiMa("Giải mã lệnh print", [
          { code: 'print("Xin chao")', y: "In <b>chuỗi</b> (chữ) — chuỗi đặt trong ngoặc kép <code>\"…\"</code> hoặc nháy đơn <code>'…'</code>." },
          { code: "print(15)", y: "In <b>số</b> — số không cần ngoặc kép." },
          { code: "print(7 + 3)", y: "Python <b>tính trước</b> rồi in kết quả → <code>10</code>.", nhan: true },
          { code: 'print("7 + 3")', y: "Có ngoặc kép là chuỗi → in <b>nguyên văn</b> <code>7 + 3</code>.", nhan: true },
          { code: 'print("Mau:", 100)', y: "Nhiều giá trị cách nhau bởi <b>dấu phẩy</b> → in trên một dòng, cách nhau <b>một dấu cách</b>: <code>Mau: 100</code>." },
          { code: "print()", y: "Không có gì trong ngoặc → in một <b>dòng trống</b>." }
        ])}
        ${cuPhap({ ten: "LỆNH print",
          mau: ["print(‹giá trị›)", "print(‹giá trị 1›, ‹giá trị 2›, …)"],
          phan: [["‹giá trị›", "chuỗi trong ngoặc kép, số, phép tính hoặc biến"], [",", "ngăn cách các giá trị; khi in, Python chèn một dấu cách"]],
          quyTac: ["Viết <code>print</code> bằng <b>chữ thường</b>, theo sau là cặp ngoặc tròn <code>( )</code>",
                   "Chuỗi phải mở và đóng bằng cùng một loại ngoặc: <code>\"…\"</code> hoặc <code>'…'</code>",
                   "Mỗi lệnh <code>print</code> in xong thì tự xuống dòng",
                   "Không có dấu chấm phẩy ở cuối dòng (khác C++)"],
          viDu: 'print("Mau:", 100)\nprint("Toc do:", 7.5)\nprint()\nprint("San sang!")', man: "Mau: 100\nToc do: 7.5\n\nSan sang!" })}
        ${doan("<code>print(\"2 + 3\")</code> và <code>print(2 + 3)</code> in ra gì?", "Dòng đầu in <code>2 + 3</code> (chuỗi, in nguyên văn). Dòng sau in <code>5</code> (phép tính, Python tính rồi mới in).")}
        ${meo("Trong chuỗi bạn có thể gõ tiếng Việt có dấu — Python 3 hiểu được. Ở các bài tập trên web, studio dùng <b>chữ không dấu</b> để bạn khỏi phải bật/tắt bộ gõ liên tục.")}
        ${moRong("tham số sep và end của print()", `
          <p><code>sep</code> đổi ký tự ngăn cách giữa các giá trị (mặc định là một dấu cách); <code>end</code> đổi ký tự in ở cuối (mặc định là xuống dòng).</p>
          ${codeVaManHinh(`print("10", "10", "2026", sep="/")
print("Dang tai", end="...")
print("xong!")`, "10/10/2026\nDang tai...xong!", "sep_end.py")}`)}
        ${docThem([[DOCS("tutorial/introduction.html"), "Python Tutorial — An Informal Introduction"], [W3("python_syntax"), "W3Schools: Python Syntax"], [W3("python_output"), "W3Schools: Output"]])}
      `,
      challenges: [
        {
          id: "s1-predict", type: "choice", bet: true, mono: true,
          title: "Đọc code, đoán terminal",
          prompt: "Bạn đọc ba dòng code rồi đoán xem terminal hiện gì. Chắc tay thì bật <b>Ngôi sao hi vọng</b>.",
          code: 'print("Planet Py")\nprint(3 + 4)\nprint("3 + 4")',
          options: [
            { text: "Planet Py\n3 + 4\n7", why: "Thứ tự in theo thứ tự dòng: dòng 2 là phép tính nên in 7 trước." },
            { text: "Planet Py\n7\n3 + 4" },
            { text: "Planet Py\n7\n7", why: "Dòng 3 có ngoặc kép — đó là chuỗi, in nguyên văn chứ không tính." },
            { text: "Planet Py\n3 + 4\n3 + 4", why: "Dòng 2 không có ngoặc kép — Python tính 3 + 4 rồi mới in." }
          ],
          answer: "Planet Py\n7\n3 + 4",
          why: "Chuẩn! Không ngoặc kép thì Python tính; có ngoặc kép thì in nguyên văn."
        },
        {
          id: "s1-code", type: "code",
          title: "Bảng tên game",
          prompt: "Màn hình mở đầu của Planet Py cần 3 dòng. Dòng đầu đã có sẵn — bạn viết thêm 2 lệnh <code>print</code> cho đúng mẫu nhé.",
          requirements: ["Giữ dòng <code>=== PLANET PY ===</code>.", "Dòng 2 và dòng 3: mỗi dòng một lệnh <code>print</code> có <b>hai giá trị</b> cách nhau bởi dấu phẩy (chuỗi, rồi số).", "Chữ, dấu cách, dấu hai chấm phải giống hệt mẫu."],
          starter: '# In man hinh mo dau cua game\nprint("=== PLANET PY ===")\n',
          expected: "=== PLANET PY ===\nPhien ban: 1\nSo nguoi choi: 4",
          rules: [
            { test: c => dem(c, "\\bprint\\s*\\(") >= 3, msg: "Cần 3 lệnh print — mỗi dòng của màn hình là một lệnh." },
            { test: c => coChuoi(c, 'print\\(\\s*"Phien ban:"\\s*,\\s*1\\s*\\)') && coChuoi(c, 'print\\(\\s*"So nguoi choi:"\\s*,\\s*4\\s*\\)'), msg: "Terminal đúng rồi, nhưng hãy viết mỗi dòng bằng hai giá trị: chuỗi, dấu phẩy, rồi số — ví dụ print(\"Phien ban:\", 1)." }
          ],
          why: "Màn hình mở đầu đã sẵn sàng! Dấu phẩy trong print tự chèn một dấu cách giữa chuỗi và số.",
          hints: ['Dòng 2: print("Phien ban:", 1)', "Chuỗi kết thúc ngay sau dấu hai chấm; dấu cách giữa “:” và số là do dấu phẩy tạo ra."]
        }
      ]
    },

    /* ================= CHẶNG 2 ================= */
    {
      kind: "stage", id: "stage-2", number: 2, nav: "Comment & lỗi",
      kicker: "CHẶNG 2 · COMMENT · ĐỌC LỖI",
      title: "Comment và đọc thông báo lỗi",
      nova: "Code thật thì ai cũng gõ sai. Lập trình viên giỏi là người <b>đọc được thông báo lỗi</b> và sửa nhanh. Mình chỉ bạn cách đọc nhé.",
      objectives: ["Viết comment bằng dấu #", "Đọc thông báo lỗi: số dòng và loại lỗi", "Sửa các lỗi cú pháp thường gặp"],
      lesson: `
        ${khai("Comment — ghi chú cho người đọc", `<p>Mọi thứ đứng sau dấu <code>#</code> trên một dòng là <b>comment</b>: Python <b>bỏ qua</b>, không chạy. Dùng comment để giải thích code, ghi tên tác giả, hoặc tạm tắt một dòng khi thử nghiệm.</p>`, "blue")}
        ${codeVaManHinh(`# Tac gia: nhom 3 - lop 10A1
print("Level 1")   # in level hien tai
# print("Level 2")`, "Level 1", "comment.py")}
        ${cuPhap({ ten: "COMMENT",
          mau: ["# ‹ghi chú›", "‹câu lệnh›   # ‹ghi chú›"],
          quyTac: ["Từ dấu <code>#</code> đến hết dòng là comment", "Dấu <code>#</code> nằm <b>trong ngoặc kép</b> thì là chữ bình thường, không phải comment",
                   "Trong VS Code: chọn dòng rồi bấm <b>Ctrl + /</b> để bật/tắt comment"] })}
        ${khai("Đọc thông báo lỗi (traceback)", `<p>Khi code sai, Python dừng lại và in <b>thông báo lỗi</b>. Đọc theo 2 bước:</p>
          <ol><li><b>Dòng cuối</b>: loại lỗi + mô tả, ví dụ <code>NameError</code>, <code>SyntaxError</code>.</li>
          <li><b>line …</b>: số dòng Python phát hiện lỗi — lỗi nằm ở dòng đó hoặc ngay dòng trên.</li></ol>`, "yellow")}
        <div class="pair-view">${demo('print("Xin chao")\nPrint("Planet Py")', "loi.py")}
          ${terminal('Xin chao\nTraceback (most recent call last):\n  File "main.py", line 2, in <module>\n    Print("Planet Py")\nNameError: name \'Print\' is not defined')}</div>
        ${giaiMa("Bốn lỗi gặp nhiều nhất ở bài đầu", [
          { code: 'print("Xin chao)', y: "<b>SyntaxError</b>: chuỗi chưa đóng ngoặc kép.", nho: "Sửa: print(\"Xin chao\")" },
          { code: 'print("Xin chao"', y: "<b>SyntaxError</b>: thiếu ngoặc tròn đóng <code>)</code>.", nho: "Sửa: thêm ) ở cuối" },
          { code: 'Print("Xin chao")', y: "<b>NameError</b>: Python phân biệt hoa/thường, không có lệnh <code>Print</code>.", nho: "Sửa: print chữ thường", nhan: true },
          { code: '    print("Xin chao")', y: "<b>IndentationError</b>: đầu dòng có dấu cách thừa — với Python, <b>thụt lề có ý nghĩa</b>.", nho: "Sửa: xoá dấu cách đầu dòng", nhan: true }
        ])}
        ${luuY("Lỗi <b>SyntaxError</b> được phát hiện <b>trước khi chạy</b>, nên terminal không in được dòng nào. Lỗi như <b>NameError</b> chỉ xảy ra <b>khi chạy tới</b> dòng đó, nên các dòng phía trên vẫn in ra bình thường (như ví dụ ở trên).")}
        ${docThem([[W3("python_comments"), "W3Schools: Comments"], [DOCS("tutorial/errors.html"), "Python Tutorial — Errors and Exceptions"]])}
      `,
      challenges: [
        {
          id: "s2-predict", type: "choice", bet: true, mono: true,
          title: "Comment chạy hay không?",
          prompt: "Đoạn code có 3 lệnh print nhưng có comment xen giữa. Terminal hiện gì?",
          code: '# print("Level 1")\nprint("Level 2")   # level hien tai\n#print("Level 3")\nprint("# Level 4")',
          options: [
            { text: "Level 2\n# Level 4" },
            { text: "Level 1\nLevel 2\nLevel 3\n# Level 4", why: "Dòng bắt đầu bằng # là comment — Python bỏ qua, kể cả khi không có dấu cách sau #." },
            { text: "Level 2", why: "Dòng cuối: dấu # nằm TRONG ngoặc kép nên là chữ bình thường, vẫn được in." },
            { text: "Level 2   # level hien tai\n# Level 4", why: "Phần sau # ở dòng 2 nằm ngoài ngoặc kép nên là comment, không được in." }
          ],
          answer: "Level 2\n# Level 4",
          why: "Đúng! # ngoài chuỗi là comment; # trong ngoặc kép chỉ là một ký tự."
        },
        {
          id: "s2-bugs", type: "code",
          title: "Săn 4 con bọ",
          prompt: "Bạn của bạn gửi đoạn code này nhưng nó không chạy. Bạn bấm <b>Chạy</b>, đọc thông báo lỗi, sửa từng con bọ cho tới khi terminal ra đúng mẫu nhé.",
          requirements: ["Sửa lần lượt: chạy → đọc dòng cuối và số dòng của lỗi → sửa → chạy lại.", "Không thêm, không bớt lệnh print."],
          starter: 'print("Nhan vat: Nova)\nPrint("Mau: 100")\n    print("Toc do: 7")\nprint("San sang!"\n',
          expected: "Nhan vat: Nova\nMau: 100\nToc do: 7\nSan sang!",
          bugs: [
            { label: "Thiếu ngoặc kép", fixed: c => /print\("Nhan vat: Nova"\)/.test(c) },
            { label: "Print viết hoa", fixed: c => !/\bPrint\s*\(/.test(c) },
            { label: "Thụt lề thừa", fixed: c => !/^[ \t]+print\("Toc do/m.test(c) },
            { label: "Thiếu ngoặc đóng", fixed: c => /print\("San sang!"\)/.test(c) }
          ],
          rules: [{ test: c => dem(c, "\\bprint\\s*\\(") === 4, msg: "Giữ đúng 4 lệnh print như ban đầu nhé." }],
          why: "Hạ cả 4 con bọ! Bạn vừa luyện kỹ năng quan trọng nhất của lập trình viên: đọc lỗi.",
          hints: ["Mỗi lần chạy, Python chỉ báo MỘT lỗi. Sửa xong lỗi đó rồi chạy lại.", "Dòng 1 thiếu \" · dòng 2 viết hoa · dòng 3 thừa dấu cách đầu dòng · dòng 4 thiếu )."]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 1 ================= */
    {
      kind: "gate", id: "gate-1", nav: "Điểm dừng 1", kicker: "ĐIỂM DỪNG 1",
      codeHash: "8E7B29E7",
      todo: ["Nghe thầy <b>chốt</b>: lệnh <code>print</code>, comment, cách đọc thông báo lỗi.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 1</b> trên VS Code: tạo file <code>.py</code>, in biển chào game theo đề trên slide, chụp ảnh nộp ClassPoint.",
             "Nhập <b>mã đồng bộ</b> thầy hiện trên slide để mở Chặng 3."],
      challenges: [
        {
          id: "g1-bonus", type: "code", bonus: true,
          title: "Khung tên ASCII",
          prompt: "Trong lúc chờ: in khung tên game bằng ký tự, đúng từng dấu cách.",
          requirements: ["Dùng 3 lệnh print.", "Dòng giữa có 2 dấu cách ở mỗi bên chữ PLANET PY."],
          starter: "# Ve khung ten game\n",
          expected: "+-------------+\n|  PLANET PY  |\n+-------------+",
          why: "Đẹp! Rất nhiều game cổ điển vẽ giao diện bằng chính các ký tự như thế này.",
          hints: ['print("+-------------+")', "Đếm: + rồi 13 dấu -, rồi +."]
        }
      ]
    },

    /* ================= CHẶNG 3 ================= */
    {
      kind: "stage", id: "stage-3", number: 3, nav: "Biến & lệnh gán",
      kicker: "CHẶNG 3 · BIẾN · LỆNH GÁN",
      title: "Biến: đặt tên cho dữ liệu",
      nova: "Nhân vật trong game có tên, máu, tốc độ — và chúng <b>thay đổi</b> liên tục. Để nhớ những giá trị đó, ta dùng <b>biến</b>.",
      objectives: ["Tạo biến bằng lệnh gán", "Gán lại giá trị mới cho biến", "Đặt tên biến đúng quy tắc"],
      lesson: `
        ${khai("Biến là gì?", `<p><b>Biến</b> là một <b>tên</b> gắn với một <b>giá trị</b> trong bộ nhớ. Lệnh <code>mau = 100</code> tạo biến <code>mau</code> và gán giá trị <code>100</code> cho nó.
          Từ đó, ở đâu viết <code>mau</code> thì Python dùng giá trị <code>100</code>.</p>`, "blue")}
        ${codeVaManHinh(`ten = "Nova"
mau = 100
print("Nhan vat:", ten)
print("Mau:", mau)
mau = mau - 30
print("Mau sau khi trung don:", mau)`, "Nhan vat: Nova\nMau: 100\nMau sau khi trung don: 70", "nhan_vat.py")}
        ${giaiMa("Giải mã lệnh gán", [
          { code: 'ten = "Nova"', y: "Tạo biến <code>ten</code>, gán chuỗi <code>\"Nova\"</code>." },
          { code: "mau = 100", y: "Tạo biến <code>mau</code>, gán số <code>100</code>." },
          { code: 'print("Mau:", mau)', y: "<code>mau</code> không có ngoặc kép → in <b>giá trị</b> của biến: <code>Mau: 100</code>." },
          { code: "mau = mau - 30", y: "Python tính <b>vế phải</b> trước (100 − 30 = 70), rồi gán kết quả cho biến ở <b>vế trái</b>. Giá trị cũ mất.", nhan: true },
          { code: 'print("mau")', y: "Có ngoặc kép → in <b>chữ</b> <code>mau</code>, không phải giá trị!", nhan: true }
        ])}
        ${cuPhap({ ten: "LỆNH GÁN",
          mau: "‹tên biến› = ‹giá trị hoặc biểu thức›",
          phan: [["=", "phép <b>gán</b>: đưa giá trị bên phải vào biến bên trái — không phải dấu “bằng” trong Toán"], ["‹biểu thức›", "một giá trị, một biến hoặc phép tính, ví dụ <code>mau - 30</code>"]],
          quyTac: ["Biến được tạo ở <b>lần gán đầu tiên</b> — không cần khai báo kiểu như C++", "Phải gán rồi mới dùng; dùng biến chưa gán → <code>NameError</code>",
                   "Gán lại thì biến giữ <b>giá trị mới</b>", "Vế trái luôn là <b>một tên biến</b>"],
          viDu: "xu = 50\nxu = xu + 20\nprint(xu)", man: "70" })}
        ${tenBien()}
        ${doan("<code>diem = 5</code> rồi <code>diem = 8</code> rồi <code>print(diem)</code> in ra gì?", "<code>8</code> — lần gán sau thay giá trị cũ, biến chỉ giữ một giá trị tại một thời điểm.")}
        ${moRong("gán nhiều biến cùng lúc", `<p>Python cho phép gán nhiều biến trên một dòng, các giá trị tương ứng theo thứ tự.</p>
          ${codeVaManHinh("x, y = 3, 5\nprint(x, y)\nx, y = y, x\nprint(x, y)", "3 5\n5 3", "gan_nhieu.py")}
          <p>Dòng 3 là cách hoán đổi giá trị hai biến rất “Python”.</p>`)}
        ${docThem([[W3("python_variables"), "W3Schools: Variables"], [W3("python_variables_names"), "W3Schools: Variable Names"], [DOCS("tutorial/introduction.html#numbers"), "Python Tutorial — Numbers"]])}
      `,
      challenges: [
        {
          id: "s3-predict", type: "choice", bet: true, mono: true,
          title: "Biến giữ giá trị nào?",
          prompt: "Biến <code>xu</code> được gán 3 lần. Dòng cuối in ra gì?",
          code: "xu = 50\nxu = xu + 20\nxu = 10\nprint(xu)",
          options: [
            { text: "80", why: "Lệnh gán không cộng dồn: xu = 10 thay hẳn giá trị cũ." },
            { text: "70", why: "Đó là giá trị sau dòng 2 — nhưng dòng 3 gán lại xu = 10." },
            { text: "10" },
            { text: "xu", why: "print(xu) không có ngoặc kép nên in giá trị, không in chữ." }
          ],
          answer: "10",
          why: "Đúng! Biến chỉ giữ giá trị được gán gần nhất."
        },
        {
          id: "s3-name", type: "choice", mono: true,
          title: "Tên biến hợp lệ",
          prompt: "Studio cần biến lưu <b>tốc độ tối đa</b> của nhân vật. Tên nào vừa hợp lệ vừa đúng quy ước Python?",
          options: [
            { text: "toc do toi da", why: "Có dấu cách — Python hiểu thành nhiều tên rời nhau, báo SyntaxError." },
            { text: "toc-do-toi-da", why: "Dấu - là phép trừ, không dùng trong tên biến." },
            { text: "2toc_do", why: "Tên biến không được bắt đầu bằng chữ số." },
            { text: "toc_do_toi_da" }
          ],
          answer: "toc_do_toi_da",
          why: "Chuẩn snake_case: chữ thường, các từ nối bằng dấu gạch dưới."
        },
        {
          id: "s3-code", type: "code",
          title: "Thẻ nhân vật bằng biến",
          prompt: "Bạn tạo biến <code>ten</code> lưu chuỗi <code>\"Kai\"</code> và biến <code>mau</code> lưu số <code>120</code>, rồi sửa hai lệnh print để in ra <b>giá trị của biến</b> (không viết thẳng chữ Kai hay số 120 vào print).",
          requirements: ['Gán <code>ten = "Kai"</code> và <code>mau = 120</code>.', "Hai lệnh print in giá trị của biến <code>ten</code> và <code>mau</code>."],
          starter: '# Tao bien ten va mau o day\n\nprint("Ten:", "???")\nprint("Mau:", 0)\n',
          expected: "Ten: Kai\nMau: 120",
          rules: [
            { test: c => co(c, '\\bten\\s*=\\s*["\']') && /ten\s*=\s*["']Kai["']/.test(c) && co(c, "\\bmau\\s*=\\s*120\\b"), msg: 'Cần hai lệnh gán: ten = "Kai" và mau = 120.' },
            { test: c => co(c, 'print\\([^)\\n]*,\\s*ten\\s*\\)') && co(c, 'print\\([^)\\n]*,\\s*mau\\s*\\)'), msg: "Terminal đúng rồi, nhưng print phải in biến ten và mau — thay \"???\" và 0 bằng tên biến." }
          ],
          why: "Tuyệt! Giờ chỉ cần đổi giá trị biến là cả thẻ nhân vật đổi theo.",
          hints: ['Dòng 2: ten = "Kai" — dòng 3: mau = 120', 'print("Ten:", ten) — tên biến không có ngoặc kép.']
        }
      ]
    },

    /* ================= CHẶNG 4 ================= */
    {
      kind: "stage", id: "stage-4", number: 4, nav: "Kiểu dữ liệu",
      kicker: "CHẶNG 4 · KIỂU DỮ LIỆU",
      title: "int, float, str và hàm type()",
      nova: "Máu là số nguyên, tốc độ có thể là 7.5, còn tên là chữ. Python phân biệt các <b>kiểu dữ liệu</b> này — và hành xử rất khác nhau với từng kiểu.",
      objectives: ["Phân biệt int, float, str", "Dùng type() xem kiểu của giá trị", "Hiểu vì sao \"5\" khác 5"],
      lesson: `
        ${khai("Ba kiểu dữ liệu cơ bản", `<table class="plain"><thead><tr><th>Kiểu</th><th>Ý nghĩa</th><th>Ví dụ</th></tr></thead><tbody>
          <tr><td><code>int</code></td><td>số nguyên</td><td><code>100</code>, <code>-5</code>, <code>0</code></td></tr>
          <tr><td><code>float</code></td><td>số thực — viết bằng <b>dấu chấm</b></td><td><code>7.5</code>, <code>0.25</code>, <code>3.0</code></td></tr>
          <tr><td><code>str</code></td><td>chuỗi ký tự — trong ngoặc kép hoặc nháy đơn</td><td><code>"Kai"</code>, <code>'10A1'</code>, <code>"100"</code></td></tr>
          </tbody></table><p>Python <b>tự nhận kiểu</b> theo giá trị được gán — bạn không cần khai báo kiểu như C++.</p>`, "blue")}
        ${codeVaManHinh(`mau = 100
toc_do = 7.5
ten = "Kai"
print(type(mau))
print(type(toc_do))
print(type(ten))`, "<class 'int'>\n<class 'float'>\n<class 'str'>", "kieu.py")}
        ${giaiMa("Cùng là 5 mà khác nhau", [
          { code: "print(5 + 5)", y: "Hai số <code>int</code> → phép <b>cộng</b>: <code>10</code>." },
          { code: 'print("5" + "5")', y: "Hai chuỗi → phép <b>nối chuỗi</b>: <code>55</code>.", nhan: true },
          { code: "print(7 / 2)", y: "Phép chia <code>/</code> luôn cho <code>float</code>: <code>3.5</code>." },
          { code: 'print(type("100"))', y: "Có ngoặc kép thì là <code>str</code>, dù bên trong là chữ số: <code>&lt;class 'str'&gt;</code>.", nhan: true },
          { code: 'print("5" + 5)', y: "<b>TypeError</b>: không cộng được chuỗi với số. (Bài 2 sẽ học cách đổi kiểu.)" }
        ])}
        ${cuPhap({ ten: "HÀM type",
          mau: "type(‹giá trị hoặc biến›)",
          phan: [["kết quả", "kiểu của giá trị, in ra dạng <code>&lt;class 'int'&gt;</code>"]],
          quyTac: ["Dùng <code>print(type(…))</code> để xem kiểu", "Số có dấu chấm là <code>float</code>, kể cả <code>3.0</code>", "Mọi thứ trong ngoặc kép là <code>str</code>"],
          viDu: 'print(type(3.0))\nprint(type("3"))', man: "<class 'float'>\n<class 'str'>" })}
        ${doan("<code>print(\"7\" + \"3\")</code> in ra gì?", "<code>73</code> — hai chuỗi được nối với nhau, không phải phép cộng số.")}
        ${moRong("kiểu bool: True và False", `<p>Ngoài 3 kiểu trên, Python còn kiểu <code>bool</code> chỉ có hai giá trị <code>True</code> và <code>False</code> (viết hoa chữ cái đầu). Bài 3 sẽ dùng nhiều.</p>
          ${codeVaManHinh("con_song = True\nprint(con_song)\nprint(type(con_song))", "True\n<class 'bool'>", "bool.py")}`)}
        ${docThem([[W3("python_datatypes"), "W3Schools: Data Types"], [W3("python_numbers"), "W3Schools: Numbers"], [W3("python_strings"), "W3Schools: Strings"]])}
      `,
      challenges: [
        {
          id: "s4-type", type: "choice", bet: true, mono: true,
          title: "Đây là kiểu gì?",
          prompt: "Đoạn code in kiểu của hai giá trị. Terminal hiện gì?",
          code: 'print(type("100"))\nprint(type(100.0))',
          options: [
            { text: "<class 'int'>\n<class 'int'>", why: "\"100\" có ngoặc kép nên là str; 100.0 có dấu chấm nên là float." },
            { text: "<class 'str'>\n<class 'float'>" },
            { text: "<class 'str'>\n<class 'int'>", why: "100.0 có dấu chấm — Python xem là float dù phần lẻ bằng 0." },
            { text: "100\n100.0", why: "type() trả về kiểu của giá trị, không phải giá trị." }
          ],
          answer: "<class 'str'>\n<class 'float'>",
          why: "Đúng! Ngoặc kép → str; có dấu chấm → float."
        },
        {
          id: "s4-predict", type: "choice", mono: true,
          title: "Cộng hay nối?",
          prompt: "Cùng dấu <code>+</code> nhưng hai dòng in ra hai kiểu kết quả khác nhau. Terminal hiện gì?",
          code: 'print("7" + "3")\nprint(7 + 3)',
          options: [
            { text: "10\n10", why: "Dòng 1 là hai chuỗi — dấu + nối chuỗi chứ không cộng số." },
            { text: "73\n73", why: "Dòng 2 là hai số int — dấu + là phép cộng." },
            { text: "73\n10" },
            { text: "7 + 3\n10", why: "Ngoặc kép bao từng số riêng (\"7\" và \"3\"), dấu + nằm ngoài nên Python nối hai chuỗi." }
          ],
          answer: "73\n10",
          why: "Chuẩn! Với chuỗi, + là nối; với số, + là cộng."
        },
        {
          id: "s4-code", type: "code",
          title: "Kiểm tra kiểu dữ liệu",
          prompt: "Bạn tạo 3 biến cho nhân vật rồi dùng <code>type()</code> in kiểu của từng biến theo đúng thứ tự trong mẫu.",
          requirements: ['<code>ten = "Kai"</code>, <code>level = 3</code>, <code>toc_do = 7.5</code>.', "Ba lệnh <code>print(type(…))</code> in kiểu của <code>ten</code>, <code>level</code>, <code>toc_do</code>."],
          starter: "# Tao 3 bien\n\n# In kieu cua tung bien\n",
          expected: "<class 'str'>\n<class 'int'>\n<class 'float'>",
          rules: [
            { test: c => /ten\s*=\s*["']Kai["']/.test(c) && co(c, "\\blevel\\s*=\\s*3\\b") && co(c, "\\btoc_do\\s*=\\s*7\\.5\\b"), msg: 'Cần 3 lệnh gán: ten = "Kai", level = 3, toc_do = 7.5.' },
            { test: c => co(c, "type\\(\\s*ten\\s*\\)") && co(c, "type\\(\\s*level\\s*\\)") && co(c, "type\\(\\s*toc_do\\s*\\)"), msg: "Dùng type(ten), type(level), type(toc_do) — truyền tên biến vào type()." }
          ],
          why: "Chính xác! Python tự nhận kiểu từ giá trị bạn gán.",
          hints: ["print(type(ten))", "Thứ tự in: ten, level, toc_do."]
        }
      ]
    },

    /* ================= ĐIỂM DỪNG 2 ================= */
    {
      kind: "gate", id: "gate-2", nav: "Điểm dừng 2", kicker: "ĐIỂM DỪNG 2",
      codeHash: "402EE82F",
      todo: ["Nghe thầy <b>chốt</b>: biến, lệnh gán, quy tắc đặt tên, ba kiểu dữ liệu.",
             "<b>Ghi bài</b> vào vở theo slide.", "Trả lời <b>2 câu ClassPoint</b>.",
             "<b>Luyện tập nhóm 2</b> trên VS Code: thẻ nhân vật của nhóm, chụp ảnh nộp ClassPoint.",
             "Nhập <b>mã đồng bộ</b> để mở Boss."],
      challenges: [
        {
          id: "g2-bonus", type: "code", bonus: true,
          title: "Đổi giá trị, giữ nguyên code in",
          prompt: "Trong lúc chờ: chỉ sửa <b>2 lệnh gán</b> ở đầu (không sửa các lệnh print) để terminal ra đúng mẫu.",
          requirements: ["Không sửa 2 lệnh print.", "Chỉ đổi giá trị của <code>ten</code> và <code>level</code>."],
          starter: 'ten = "Nova"\nlevel = 1\nprint("Nguoi choi", ten, "dat level", level)\nprint("Kieu cua level:", type(level))\n',
          expected: "Nguoi choi Lia dat level 7\nKieu cua level: <class 'int'>",
          rules: [{ test: c => /print\("Nguoi choi", ten, "dat level", level\)/.test(c) && /print\("Kieu cua level:", type\(level\)\)/.test(c), msg: "Giữ nguyên 2 lệnh print — chỉ sửa giá trị ở 2 lệnh gán." }],
          why: "Đúng tinh thần biến: đổi dữ liệu ở một chỗ, mọi chỗ dùng biến đều đổi theo.",
          hints: ['ten = "Lia"', "level = 7 (không có ngoặc kép, để vẫn là int)"]
        }
      ]
    },

    /* ================= BOSS ================= */
    {
      kind: "boss", id: "boss", nav: "Bọ Chính Tả", kicker: "BOSS · BÀI 1",
      title: "Boss: Bọ Chính Tả",
      bossName: "Bọ Chính Tả",
      bossLine: "Một chữ hoa sai chỗ, một dấu phẩy thiếu… code của ngươi sẽ không bao giờ chạy!",
      nova: "Boss đầu tiên! Bạn <b>tự làm một mình</b> nhé — 3 đòn là hạ được nó. Đọc kỹ đề, chạy thử nhiều lần.",
      objectives: ["Đoán terminal", "Săn bọ cú pháp", "Viết thẻ nhân vật hoàn chỉnh"],
      challenges: [
        {
          id: "boss-1", type: "choice", mono: true,
          title: "Đòn 1: Đọc code",
          prompt: "Đoạn code dưới đây in ra gì?",
          code: 'diem = 10\ndiem = diem * 2\nprint("Diem:", diem)\nprint("diem")',
          options: [
            { text: "Diem: 20\n20", why: "Dòng 4 có ngoặc kép — in chữ diem chứ không in giá trị." },
            { text: "Diem: 10\ndiem", why: "Dòng 2 gán lại: diem = 10 * 2 = 20." },
            { text: "Diem: 20\ndiem" },
            { text: "Diem:20\ndiem", why: "Dấu phẩy trong print chèn một dấu cách giữa các giá trị." }
          ],
          answer: "Diem: 20\ndiem",
          why: "Đòn chí mạng! Bạn nắm chắc gán lại và sự khác nhau giữa biến và chuỗi."
        },
        {
          id: "boss-2", type: "code",
          title: "Đòn 2: Diệt bọ chính tả",
          prompt: "Bọ Chính Tả đã cài 3 lỗi vào thẻ nhân vật. Bạn chạy, đọc lỗi và sửa cho tới khi terminal đúng mẫu.",
          requirements: ["Tên biến lưu tên nhân vật phải là <code>ten_nhan_vat</code>.", "Giữ nguyên 3 lệnh print (chỉ sửa lỗi)."],
          starter: 'ten nhan vat = "Lia"\nmau = 90\nprint("Ten:", ten_nhan_vat)\nprint("Mau:" mau)\nprint(Type(mau))\n',
          expected: "Ten: Lia\nMau: 90\n<class 'int'>",
          bugs: [
            { label: "Tên biến có dấu cách", fixed: c => /^ten_nhan_vat\s*=/m.test(c) },
            { label: "Thiếu dấu phẩy", fixed: c => /print\("Mau:"\s*,\s*mau\)/.test(c) },
            { label: "Type viết hoa", fixed: c => !/\bType\s*\(/.test(c) }
          ],
          why: "Ba con bọ đã bị diệt — Boss mất một nửa máu!",
          hints: ["Mỗi lần chạy Python chỉ báo một lỗi đầu tiên.", "Dòng 1: ten_nhan_vat · dòng 4: thêm dấu phẩy · dòng 5: type viết thường."]
        },
        {
          id: "boss-3", type: "code",
          title: "Đòn 3: Thẻ nhân vật hoàn chỉnh",
          prompt: "Đòn kết liễu: tự viết thẻ nhân vật cho <b>Zed</b>. Mọi thông tin phải in ra <b>từ biến</b>.",
          requirements: ['Ba biến: <code>ten = "Zed"</code>, <code>level = 5</code>, <code>toc_do = 8.5</code>.',
                         "In đúng 5 dòng như mẫu; dòng 2–4 in giá trị từ biến, dòng 5 dùng <code>type(toc_do)</code>.", "Có ít nhất 1 comment."],
          starter: "",
          expected: "=== THE NHAN VAT ===\nTen: Zed\nLevel: 5\nToc do: 8.5\nKieu toc do: <class 'float'>",
          rules: [
            { test: c => /ten\s*=\s*["']Zed["']/.test(c) && co(c, "\\blevel\\s*=\\s*5\\b") && co(c, "\\btoc_do\\s*=\\s*8\\.5\\b"), msg: 'Cần 3 lệnh gán: ten = "Zed", level = 5, toc_do = 8.5.' },
            { test: c => co(c, "print\\([^\\n]*\\bten\\s*\\)") && co(c, "print\\([^\\n]*\\blevel\\s*\\)") && co(c, "print\\([^\\n]*,\\s*toc_do\\s*\\)") && co(c, "type\\(\\s*toc_do\\s*\\)"), msg: "Các dòng Ten, Level, Toc do phải in giá trị từ biến; dòng cuối dùng type(toc_do)." },
            { test: c => window.KIT.coComment(c), msg: "Thêm ít nhất 1 comment (# ...) để giải thích code." }
          ],
          why: "Bọ Chính Tả đã gục! Thẻ nhân vật của Zed đã sẵn sàng vào game.",
          hints: ["Viết 3 lệnh gán trước, rồi 5 lệnh print.", 'print("Kieu toc do:", type(toc_do))']
        },
        {
          id: "adv-1", type: "code", advanced: true,
          title: "Nâng cao: Nhật ký máu",
          prompt: "Nhân vật bắt đầu với 100 máu, trúng 2 đòn (mỗi đòn mất 25), rồi uống bình hồi 10 máu. In máu sau mỗi bước.",
          requirements: ["Chỉ có <b>một</b> lệnh gán số trực tiếp: <code>mau = 100</code>; các bước sau dùng <code>mau = mau - 25</code>, <code>mau = mau + 10</code>.", "Các lệnh print không chứa chữ số (in từ biến)."],
          starter: "mau = 100\n",
          expected: "Mau: 100\nMau: 75\nMau: 50\nMau: 60",
          rules: [
            { test: c => dem(c, "\\bmau\\s*=\\s*\\d") === 1, msg: "Chỉ gán số trực tiếp một lần (mau = 100); các lần sau phải tính từ giá trị cũ: mau = mau - 25." },
            { test: c => !/print\([^)\n]*\d/.test(window.PY.stripComments(c)), msg: "Các lệnh print phải in từ biến mau, không viết thẳng số." }
          ],
          why: "Xuất sắc! Đây chính là cách game cập nhật máu liên tục trong vòng lặp game.",
          hints: ['print("Mau:", mau) sau mỗi bước', "mau = mau - 25 (hai lần), rồi mau = mau + 10"]
        },
        {
          id: "adv-2", type: "code", advanced: true,
          title: "Nâng cao: Đổi tay vũ khí",
          prompt: "Nhân vật cầm Kiem ở tay trái và Khien ở tay phải. Hãy <b>hoán đổi giá trị</b> hai biến rồi in ra — không gõ lại chữ Kiem, Khien lần thứ hai.",
          requirements: ["Giữ 2 lệnh gán đầu và 2 lệnh print cuối.", "Chữ <code>\"Kiem\"</code> và <code>\"Khien\"</code> mỗi chữ chỉ xuất hiện một lần trong code."],
          starter: 'tay_trai = "Kiem"\ntay_phai = "Khien"\n# Hoan doi o day\n\nprint("Trai:", tay_trai)\nprint("Phai:", tay_phai)\n',
          expected: "Trai: Khien\nPhai: Kiem",
          rules: [{ test: c => (window.PY.stripComments(c).match(/["']Kiem["']/g) || []).length === 1 && (window.PY.stripComments(c).match(/["']Khien["']/g) || []).length === 1,
                    msg: "Không gõ lại chữ Kiem/Khien — hãy hoán đổi bằng biến (dùng biến tạm, hoặc gán nhiều biến cùng lúc)." }],
          why: "Hoán đổi gọn gàng! Mẹo biến tạm (hoặc a, b = b, a) dùng rất nhiều khi sắp xếp dữ liệu.",
          hints: ["Dùng biến tạm: tam = tay_trai, rồi tay_trai = tay_phai, rồi tay_phai = tam.", "Hoặc cách Python: tay_trai, tay_phai = tay_phai, tay_trai"]
        }
      ]
    },

    /* ================= LUYỆN THÊM (không bắt buộc) ================= */
    {
      kind: "extra", id: "extra", nav: "Luyện thêm", kicker: "LUYỆN THÊM · KHÔNG BẮT BUỘC",
      title: "Luyện thêm: thử sức với 4 bài khó dần",
      nova: "Xong Boss rồi mà còn sức? Đây là 4 bài luyện thêm từ <b>★</b> đến <b>★★★</b>. Không bắt buộc, không ảnh hưởng chứng chỉ — nhưng rất đáng thử!",
      lesson: `${window.KIT.meo("Mỗi bài có ca kiểm thử tự chấm như nhiệm vụ chính. Làm được bài nào hay bài đó; kẹt thì mở gợi ý.")}`,
      challenges: [
        {
          id: "x1", type: "code", level: 1,
          title: "Thanh thông số",
          prompt: "Cho sẵn 3 biến. In một dòng thông số đúng như mẫu — mọi số phải lấy từ biến.",
          requirements: ["Không gõ thẳng số 120, 45, 7 trong print.", "Một lệnh print."],
          starter: "hp = 120\nmp = 45\nlevel = 7\n",
          expected: "HP: 120 | MP: 45 | LV: 7",
          rules: [{ test: c => !/print\([^\n]*\d/.test(window.PY.stripComments(c)), msg: "In từ biến, không gõ thẳng số vào print." },
                  { test: c => window.KIT.dem(c, "\\bprint\\s*\\(") === 1, msg: "Dùng đúng một lệnh print." }],
          why: "Gọn! Dấu phẩy trong print tự chèn dấu cách quanh dấu |.",
          hints: ['print("HP:", hp, "| MP:", mp, "| LV:", level)']
        },
        {
          id: "x2", type: "code", level: 2,
          title: "Tổng sức mạnh",
          prompt: "Sức mạnh = công + 2 × thủ + tốc độ ÷ 2. Tạo 3 biến rồi tính và in theo mẫu (kết quả là số thực vì có phép chia).",
          requirements: ["<code>cong = 45</code>, <code>thu = 30</code>, <code>toc_do = 9</code>.", "Biến <code>suc_manh</code> lưu kết quả."],
          starter: "",
          expected: "Suc manh: 109.5\n<class 'float'>",
          rules: [{ test: c => window.KIT.co(c, "\\bsuc_manh\\s*="), msg: "Lưu kết quả vào biến suc_manh." }],
          why: "Đúng thứ tự tính: nhân, chia trước; cộng sau.",
          hints: ["suc_manh = cong + 2 * thu + toc_do / 2", "print(type(suc_manh))"]
        },
        {
          id: "x3", type: "code", level: 2,
          title: "Chân dung ASCII",
          prompt: "Vẽ nhân vật bằng ký tự, đúng từng dấu cách. Lưu ý: muốn in dấu gạch chéo ngược <code>\\</code> thì trong chuỗi phải viết <code>\\\\</code>.",
          requirements: ["4 lệnh print.", "Dòng 3 và dòng 4 có dấu <code>\\</code>."],
          starter: "",
          expected: "  ___\n (o o)\n /|_|\\\n  / \\",
          why: "Ký tự thoát \\\\ — bạn vừa học thêm một mẹo về chuỗi!",
          hints: ['Dòng 3: print(" /|_|\\\\")', 'Dòng 4: print("  / \\\\")']
        },
        {
          id: "x4", type: "code", level: 3,
          title: "Xoay vòng ba vị trí",
          prompt: "Ba người chơi đứng ở 3 ô. Xoay vòng: ai ở ô 2 sang ô 1, ô 3 sang ô 2, ô 1 sang ô 3. Không gõ lại tên người chơi.",
          requirements: ["Giữ 3 lệnh gán đầu và lệnh print cuối.", "Mỗi tên chỉ xuất hiện một lần trong code."],
          starter: 'o1 = "An"\no2 = "Binh"\no3 = "Chi"\n# Xoay vong o day\n\nprint(o1, o2, o3)\n',
          expected: "Binh Chi An",
          rules: [{ test: c => ["An", "Binh", "Chi"].every(t => (window.PY.stripComments(c).match(new RegExp(`["']${t}["']`, "g")) || []).length === 1), msg: "Không gõ lại tên — dùng biến tạm hoặc gán nhiều biến cùng lúc." }],
          why: "Gán nhiều biến cùng lúc: o1, o2, o3 = o2, o3, o1 — gọn nhất!",
          hints: ["Biến tạm: tam = o1, rồi o1 = o2, o2 = o3, o3 = tam.", "Hoặc: o1, o2, o3 = o2, o3, o1"]
        }
      ]
    }
  ]
};
})();
