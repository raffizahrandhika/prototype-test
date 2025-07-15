// Sample math questions data with explanations
const mathQuestions = [
    // Soal Pilihan Ganda Tunggal
    {
        number: 1,
        type: "single",
        text: "Hasil dari 12 × 9 - 48 ÷ 6 + 5 adalah...",
        options: [
            "A. 103",
            "B. 105",
            "C. 107",
            "D. 109",
            "E. 111"
        ],
        correctAnswer: [1], // B
        explanation: "Menggunakan urutan operasi hitung: 12 × 9 - 48 ÷ 6 + 5 = 108 - 8 + 5 = 100 + 5 = <strong>105</strong>."
    },
    {
        number: 2,
        type: "single",
        text: "Pecahan 7/12 jika diubah ke bentuk desimal adalah...",
        options: [
            "A. 0.583",
            "B. 0.583...",
            "C. 0.584",
            "D. 0.585",
            "E. 0.586"
        ],
        correctAnswer: [1], // B
        explanation: "7 ÷ 12 = 0.583333... Karena hasil pembagian menghasilkan sisa yang berulang, maka hasilnya adalah <strong>0.583...</strong> (desimal berulang)."
    },
    {
        number: 3,
        type: "single",
        text: "Hasil dari 2,5 × 4 + 1,5 ÷ 0,5 adalah...",
        options: [
            "A. 12",
            "B. 13",
            "C. 14",
            "D. 15",
            "E. 16"
        ],
        correctAnswer: [1], // B
        explanation: "2,5 × 4 + 1,5 ÷ 0,5 = 10 + 3 = <strong>13</strong>."
    },
    {
        number: 4,
        type: "single",
        text: "Jika a = 3 dan b = -2, maka nilai dari 2a² - 3b + 4 adalah...",
        options: [
            "A. 26",
            "B. 28",
            "C. 30",
            "D. 32",
            "E. 34"
        ],
        correctAnswer: [1], // B
        explanation: "2a² - 3b + 4 = 2(3)² - 3(-2) + 4 = 2(9) + 6 + 4 = 18 + 6 + 4 = <strong>28</strong>."
    },
    {
        number: 5,
        type: "single",
        text: "Nilai dari 3¼ + 2⅗ - 1½ adalah...",
        options: [
            "A. 4 7/20",
            "B. 4 9/20",
            "C. 4 11/20",
            "D. 4 13/20",
            "E. 4 15/20"
        ],
        correctAnswer: [0], // A
        explanation: "3¼ + 2⅗ - 1½ = 3¼ + 2 12/20 - 1 10/20 = 65/20 + 52/20 - 30/20 = 87/20 = 4 7/20."
    },
    {
        number: 6,
        type: "single",
        text: "Hasil dari (3/4 + 2/3) × 12 adalah...",
        options: [
            "A. 15",
            "B. 16",
            "C. 17",
            "D. 18",
            "E. 19"
        ],
        correctAnswer: [2], // C
        explanation: "3/4 + 2/3 = 9/12 + 8/12 = 17/12. Kemudian (17/12) × 12 = <strong>17</strong>."
    },
    {
        number: 7,
        type: "single",
        text: "Hasil dari (-8) + 12 - (-5) × 2 adalah...",
        options: [
            "A. 12",
            "B. 14",
            "C. 16",
            "D. 18",
            "E. 20"
        ],
        correctAnswer: [1], // B
        explanation: "(-8) + 12 - (-5) × 2 = -8 + 12 - (-10) = -8 + 12 + 10 = 4 + 10 = <strong>14</strong>."
    },
    {
        number: 8,
        type: "single",
        text: "Bentuk persen dari 3/8 adalah...",
        options: [
            "A. 35%",
            "B. 37.5%",
            "C. 40%",
            "D. 42.5%",
            "E. 45%"
        ],
        correctAnswer: [1], // B
        explanation: "3/8 = 3 ÷ 8 = 0.375 = 0.375 × 100% = <strong>37.5%</strong>."
    },
    {
        number: 9,
        type: "single",
        text: "Nilai dari |3 - 7| + |-5 + 2| - |4 - 1| adalah...",
        options: [
            "A. 4",
            "B. 5",
            "C. 6",
            "D. 7",
            "E. 8"
        ],
        correctAnswer: [0], // A
        explanation: "|3 - 7| = |-4| = 4, |-5 + 2| = |-3| = 3, |4 - 1| = |3| = 3. Maka: 4 + 3 - 3 = <strong>4</strong>."
    },
    {
        number: 10,
        type: "single",
        text: "Berdasarkan sifat distributif, hasil dari 8 × (15 + 7) sama dengan...",
        options: [
            "A. 8 × 15 + 7",
            "B. 8 + 15 × 7",
            "C. 8 × 15 + 8 × 7",
            "D. 8 × 15 × 8 × 7",
            "E. (8 × 15) + (8 + 7)"
        ],
        correctAnswer: [2], // C
        explanation: "Berdasarkan sifat distributif: a × (b + c) = (a × b) + (a × c). Jadi 8 × (15 + 7) = <strong>8 × 15 + 8 × 7</strong>."
    },
    {
        number: 11,
        type: "single",
        text: "[HOTS] Sebuah toko memberikan diskon 25% untuk semua barang. Jika Ana membeli barang seharga Rp120.000 dan membayar dengan uang Rp100.000, maka uang kembalian yang diterima Ana adalah...",
        options: [
            "A. Rp5.000",
            "B. Rp10.000",
            "C. Rp15.000",
            "D. Rp20.000",
            "E. Rp25.000"
        ],
        correctAnswer: [1], // B
        explanation: "Harga setelah diskon = 120.000 - (25% × 120.000) = 120.000 - 30.000 = Rp90.000. Uang kembalian = 100.000 - 90.000 = <strong>Rp10.000</strong>."
    },
    {
        number: 12,
        type: "single",
        text: "[HOTS] Pak Budi memiliki uang Rp500.000. Dia menggunakan 2/5 dari uangnya untuk membeli beras, 1/4 dari sisanya untuk membeli sayuran, dan sisanya ditabung. Jumlah uang yang ditabung adalah...",
        options: [
            "A. Rp200.000",
            "B. Rp225.000",
            "C. Rp250.000",
            "D. Rp275.000",
            "E. Rp300.000"
        ],
        correctAnswer: [1], // B
        explanation: "Uang untuk beras = 2/5 × 500.000 = 200.000. Sisa = 500.000 - 200.000 = 300.000. Uang untuk sayuran = 1/4 × 300.000 = 75.000. Uang ditabung = 300.000 - 75.000 = <strong>Rp225.000</strong>."
    },
    {
        number: 13,
        type: "single",
        text: "[HOTS] Sebuah pabrik memproduksi 1.200 unit barang per hari. Jika 3/8 dari produksi tersebut adalah barang kualitas A, 2/5 dari sisanya adalah barang kualitas B, dan sisanya adalah barang kualitas C. Berapa banyak barang kualitas C yang diproduksi?",
        options: [
            "A. 280 unit",
            "B. 300 unit",
            "C. 320 unit",
            "D. 340 unit",
            "E. 360 unit"
        ],
        correctAnswer: [1], // B
        explanation: "Barang kualitas A = 3/8 × 1.200 = 450 unit. Sisa = 1.200 - 450 = 750 unit. Barang kualitas B = 2/5 × 750 = 300 unit. Barang kualitas C = 750 - 300 = <strong>300 unit</strong>."
    },
    {
        number: 14,
        type: "single",
        text: "[HOTS] Sebuah tangki air berbentuk silinder memiliki volume 1.000 liter. Jika air mengalir masuk dengan kecepatan 50 liter/menit dan keluar dengan kecepatan 30 liter/menit, maka waktu yang diperlukan untuk mengisi tangki kosong hingga penuh adalah...",
        options: [
            "A. 40 menit",
            "B. 45 menit",
            "C. 50 menit",
            "D. 55 menit",
            "E. 60 menit"
        ],
        correctAnswer: [2], // C
        explanation: "Kecepatan bersih pengisian = 50 - 30 = 20 liter/menit. Waktu = Volume ÷ Kecepatan bersih = 1.000 ÷ 20 = <strong>50 menit</strong>."
    },
    {
        number: 15,
        type: "single",
        text: "[HOTS] Sebuah pabrik memproduksi barang dengan biaya tetap Rp2.000.000 per bulan dan biaya variabel Rp15.000 per unit. Jika harga jual per unit adalah Rp25.000, maka jumlah unit minimum yang harus dijual agar pabrik tidak rugi adalah...",
        options: [
            "A. 180 unit",
            "B. 200 unit",
            "C. 220 unit",
            "D. 240 unit",
            "E. 250 unit"
        ],
        correctAnswer: [1], // B
        explanation: "Untuk tidak rugi: Total Pendapatan ≥ Total Biaya. Misalkan jumlah unit = x. 25.000x ≥ 2.000.000 + 15.000x → 10.000x ≥ 2.000.000 → x ≥ 200. Jadi minimum <strong>200 unit</strong>."
    },
    // Soal Pilihan Ganda Multi Jawaban (5 soal)
    {
        number: 16,
        type: "multiple",
        text: "Manakah yang termasuk bilangan cacah? <strong>(Pilih lebih dari satu jawaban)</strong>",
        options: [
            "A. 0",
            "B. 1",
            "C. -1",
            "D. 0.5",
            "E. 100"
        ],
        correctAnswer: [0, 1, 4],
        explanation: "Bilangan cacah adalah 0,1,2,3,... Jadi <strong>0, 1, dan 100</strong> adalah bilangan cacah."
    },
    {
        number: 17,
        type: "multiple",
        text: "Operasi hitung yang hasilnya 24 adalah... <strong>(Pilih lebih dari satu jawaban)</strong>",
        options: [
            "A. 6 × 4",
            "B. 30 - 4",
            "C. 8 × 3",
            "D. 48 ÷ 2",
            "E. 5 × 5"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "A: 6×4=24; B: 30-4=26; C: 8×3=24; D: 48÷2=24; E: 5×5=25. Jadi <strong>A, C, D</strong> benar."
    },
    {
        number: 18,
        type: "multiple",
        text: "Pernyataan yang benar tentang sifat operasi hitung adalah... <strong>(Pilih lebih dari satu jawaban)</strong>",
        options: [
            "A. a + b = b + a (komutatif penjumlahan)",
            "B. a × (b + c) = (a × b) + c (distributif salah)",
            "C. (a × b) × c = a × (b × c) (asosiatif perkalian)",
            "D. a - b = b - a (komutatif pengurangan)",
            "E. a ÷ b = b ÷ a (komutatif pembagian)"
        ],
        correctAnswer: [0, 2],
        explanation: "<strong>A dan C</strong> benar. B salah (harusnya a×(b+c)=a×b+a×c). D dan E salah karena pengurangan dan pembagian tidak komutatif."
    },
    {
        number: 19,
        type: "multiple",
        text: "Bilangan yang habis dibagi 3 adalah... <strong>(Pilih lebih dari satu jawaban)</strong>",
        options: [
            "A. 123",
            "B. 235",
            "C. 333",
            "D. 448",
            "E. 501"
        ],
        correctAnswer: [0, 2, 4],
        explanation: "Ciri bilangan habis dibagi 3: jumlah digitnya habis dibagi 3. A:1+2+3=6; C:3+3+3=9; E:5+0+1=6. Jadi <strong>A, C, E</strong> benar."
    },
    {
        number: 20,
        type: "multiple",
        text: "Pecahan yang senilai dengan 2/3 adalah... <strong>(Pilih lebih dari satu jawaban)</strong>",
        options: [
            "A. 4/6",
            "B. 6/9",
            "C. 8/12",
            "D. 10/15",
            "E. 9/12"
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: "2/3 = 4/6 = 6/9 = 8/12 = 10/15. <strong>A, B, C, D</strong> benar. E salah (9/12=3/4)."
    },
    // Soal Menjodohkan (5 soal)
    {
        number: 21,
        type: "matching",
        text: "Pasangkan operasi hitung dengan hasil yang benar:",
        leftItems: ["15 × 4", "144 ÷ 12", "5 + 3 × 6", "2³ + 3²", "0.8 × 25"],
        rightItems: ["A. 20", "B. 12", "C. 60", "D. 17", "E. 23"],
        correctPairs: {
            0: 2,  // 15×4=60 (C)
            1: 1,  // 144÷12=12 (B)
            2: 4,  // 5+(3×6)=23 (E)
            3: 3,  // 8+9=17 (D)
            4: 0   // 0.8×25=20 (A)
        },
        explanation: "<br>1. 15 × 4 = 60 (C)<br>2. 144 ÷ 12 = 12 (B)<br>3. 5 + (3 × 6) = 5 + 18 = 23 (E) - perkalian dikerjakan terlebih dahulu<br>4. 2³ + 3² = 8 + 9 = 17 (D)<br>5. 0.8 × 25 = 20 (A)"
    },
    {
        number: 22,
        type: "matching",
        text: "Pasangkan bentuk pecahan dengan bentuk desimal yang setara:",
        leftItems: ["3/4", "2/5", "7/8", "1/3", "5/6"],
        rightItems: ["A. 0.75", "B. 0.333...", "C. 0.875", "D. 0.4", "E. 0.833..."],
        correctPairs: {
            0: 0,  // 3/4=0.75 (A)
            1: 3,  // 2/5=0.4 (D)
            2: 2,  // 7/8=0.875 (C)
            3: 1,  // 1/3=0.333... (B)
            4: 4   // 5/6=0.833... (E)
        },
        explanation: "<br>1. 3/4 = 3 ÷ 4 = 0.75 (A)<br>2. 2/5 = 2 ÷ 5 = 0.4 (D)<br>3. 7/8 = 7 ÷ 8 = 0.875 (C)<br>4. 1/3 = 1 ÷ 3 = 0.333... (B) - desimal berulang<br>5. 5/6 = 5 ÷ 6 = 0.833... (E) - desimal berulang"
    },
    {
        number: 23,
        type: "matching",
        text: "Pasangkan operasi dengan sifat-sifat bilangan yang berlaku:",
        leftItems: [
            "a + b = b + a",
            "(a + b) + c = a + (b + c)",
            "a × (b + c) = (a × b) + (a × c)",
            "a + 0 = a",
            "a × 1 = a"
        ],
        rightItems: [
            "A. Sifat distributif",
            "B. Sifat komutatif",
            "C. Sifat identitas perkalian",
            "D. Sifat asosiatif",
            "E. Sifat identitas penjumlahan"
        ],
        correctPairs: {
            0: 1,  // komutatif (B)
            1: 3,  // asosiatif (D)
            2: 0,  // distributif (A)
            3: 4,  // identitas penjumlahan (E)
            4: 2   // identitas perkalian (C)
        },
        explanation: "<br>1. a + b = b + a adalah sifat komutatif penjumlahan (B)<br>2. (a + b) + c = a + (b + c) adalah sifat asosiatif penjumlahan (D)<br>3. a × (b + c) = (a × b) + (a × c) adalah sifat distributif perkalian terhadap penjumlahan (A)<br>4. a + 0 = a adalah sifat identitas penjumlahan, 0 sebagai elemen identitas (E)<br>5. a × 1 = a adalah sifat identitas perkalian, 1 sebagai elemen identitas (C)"
    },
    {
        number: 24,
        type: "matching",
        text: "Pasangkan bentuk akar dengan bentuk sederhana yang tepat:",
        leftItems: ["√18", "√32", "√50", "√72", "√98"],
        rightItems: ["A. 4√2", "B. 5√2", "C. 3√2", "D. 6√2", "E. 7√2"],
        correctPairs: {
            0: 2,  // √18=3√2 (C)
            1: 0,  // √32=4√2 (A)
            2: 1,  // √50=5√2 (B)
            3: 3,  // √72=6√2 (D)
            4: 4   // √98=7√2 (E)
        },
        explanation: "<br>1. √18 = √(9×2) = √9 × √2 = 3√2 (C)<br>2. √32 = √(16×2) = √16 × √2 = 4√2 (A)<br>3. √50 = √(25×2) = √25 × √2 = 5√2 (B)<br>4. √72 = √(36×2) = √36 × √2 = 6√2 (D)<br>5. √98 = √(49×2) = √49 × √2 = 7√2 (E)<br><br>Cara menyederhanakan: cari faktor kuadrat sempurna terbesar dari bilangan di dalam akar"
    },
    {
        number: 25,
        type: "matching",
        text: "Sebuah toko memberikan diskon bertingkat: diskon 20% untuk pembelian di atas Rp100.000, dan diskon tambahan 10% dari harga setelah diskon pertama jika pembayaran tunai. Pasangkan total pembelian dengan harga yang harus dibayar jika pembayaran tunai:",
        leftItems: ["Rp150.000", "Rp200.000", "Rp250.000", "Rp300.000", "Rp400.000"],
        rightItems: ["A. Rp216.000", "B. Rp144.000", "C. Rp180.000", "D. Rp108.000", "E. Rp288.000"],
        correctPairs: {
            0: 3,  // Rp150.000 → Rp108.000 (D)
            1: 1,  // Rp200.000 → Rp144.000 (B)
            2: 2,  // Rp250.000 → Rp180.000 (C)
            3: 0,  // Rp300.000 → Rp216.000 (A)
            4: 4   // Rp400.000 → Rp288.000 (E)
        },
        explanation: "<br>Perhitungan diskon bertingkat :<br><br>1. Rp150.000: Diskon 20% → 150.000 - 30.000 = Rp120.000. Diskon tambahan 10% → 120.000 - 12.000 = Rp108.000 (D)<br><br>2. Rp200.000: Diskon 20% → 200.000 - 40.000 = Rp160.000. Diskon tambahan 10% → 160.000 - 16.000 = Rp144.000 (B)<br><br>3. Rp250.000: Diskon 20% → 250.000 - 50.000 = Rp200.000. Diskon tambahan 10% → 200.000 - 20.000 = Rp180.000 (C)<br><br>4. Rp300.000: Diskon 20% → 300.000 - 60.000 = Rp240.000. Diskon tambahan 10% → 240.000 - 24.000 = Rp216.000 (A)<br><br>5. Rp400.000: Diskon 20% → 400.000 - 80.000 = Rp320.000. Diskon tambahan 10% → 320.000 - 32.000 = Rp288.000 (E)<br><br>Formula umum: Harga akhir = Harga awal × 0.8 × 0.9 = Harga awal × 0.72"
    },
    // Soal Isian Singkat (5 soal)
    {
        number: 26,
        type: "short",
        text: "Hasil dari 128 ÷ (4 + 4) adalah... <strong>(Jawab dalam angka)</strong>",
        correctAnswer: ["16"],
        explanation: "Kerjakan dalam kurung dulu: 4 + 4 = 8, lalu 128 ÷ 8 = <strong>16</strong>."
    },
    {
        number: 27,
        type: "short",
        text: "Jika 3/8 = x/24, maka nilai x adalah... <strong>(Jawab dalam angka)</strong>",
        correctAnswer: ["9"],
        explanation: "3/8 = x/24 → x = (3×24)/8 = 72/8 = <strong>9</strong>."
    },
    {
        number: 28,
        type: "short",
        text: "Bentuk desimal dari 5% adalah... <strong>(Jawab dalam bentuk desimal)</strong>",
        correctAnswer: ["0.05"],
        explanation: "5% = 5/100 = <strong>0.05</strong>."
    },
    {
        number: 29,
        type: "short",
        text: "Hasil dari (-15) + 20 - (-5) adalah... <strong>(Jawab dalam angka)</strong>",
        correctAnswer: ["10"],
        explanation: "(-15) + 20 = 5, lalu 5 - (-5) = 5 + 5 = <strong>10</strong>."
    },
    {
        number: 30,
        type: "short",
        text: "Jumlah semua bilangan asli antara 10 dan 15 adalah... <strong>(Jawab dalam angka)</strong>",
        correctAnswer: ["50"],
        explanation: "Bilangan asli antara 10 dan 15: 11,12,13,14. Jumlahnya: 11+12+13+14 = <strong>50</strong>."
    }
];

// Initialize variables
let mathCurrentQuestion = 0;
let mathAnswers = Array(mathQuestions.length).fill(null);
let mathMarkedQuestions = Array(mathQuestions.length).fill(false);
let mathAnsweredCount = 0;
let mathTimerInterval;
let mathIsSubmitted = false;
let mathTestCompleted = false;
let mathCompletionTime = null;

// DOM elements
const mathStartScreen = document.getElementById('mathStartScreen');
const mathQuizElements = document.getElementById('mathQuizElements');
const mathBtnStart = document.getElementById('mathBtnStart');
const mathQuestionNav = document.getElementById('mathQuestionNav');
const mathQuestionNavBtn = document.getElementById('mathQuestionNavBtn');
const mathQuestionNavContainer = document.getElementById('mathQuestionNavContainer');
const mathProgressText = document.getElementById('mathProgressText');
const mathTotalQuestionsSpan = document.getElementById('mathTotalQuestions');
const mathQuestionNumber = document.getElementById('mathQuestionNumber');
const mathQuestionType = document.getElementById('mathQuestionType');
const mathQuestionText = document.getElementById('mathQuestionText');
const mathOptionsContainer = document.getElementById('mathOptions');
const mathShortAnswerContainer = document.getElementById('mathShortAnswerContainer');
const mathShortAnswerInput = document.getElementById('mathShortAnswerInput');
const mathBtnMark = document.getElementById('mathBtnMark');
const mathBtnPrev = document.getElementById('mathBtnPrev');
const mathBtnNext = document.getElementById('mathBtnNext');
const mathBtnSubmit = document.getElementById('mathBtnSubmit');
const mathTimerText = document.getElementById('mathTimerText');
const mathScoreDisplay = document.getElementById('mathScoreDisplay');
const mathScorePercentage = document.getElementById('mathScorePercentage');
const mathScoreDetail = document.getElementById('mathScoreDetail');
const mathScoreMessage = document.getElementById('mathScoreMessage');
const mathDropdownToggle = document.getElementById('mathDropdownToggle');
const mathDropdownContent = document.getElementById('mathDropdownContent');
const mathSubmitConfirm = document.getElementById('mathSubmitConfirm');
const mathBtnCancel = document.getElementById('mathBtnCancel');
const mathBtnConfirm = document.getElementById('mathBtnConfirm');
const mathTestStatus = document.getElementById('mathTestStatus');
const mathStatusText = document.getElementById('mathStatusText');
const mathCompletedTime = document.getElementById('mathCompletedTime');
const mathBtnReset = document.getElementById('mathBtnReset');

function isAnswerFilled(answer, questionType, question) {
    if (!answer || answer.length === 0) return false;
    if (questionType === "short") {
        return answer[0] && answer[0].toString().trim() !== "";
    } else if (questionType === "matching") {
        if (!question) return false;
        return answer.length === question.leftItems.length && 
               answer.every(item => item !== undefined && item !== "");
    } else {
        return answer.length > 0;
    }
}

function checkTestStatus() {
    const savedData = localStorage.getItem('bilangan-easy-data');
    if (savedData) {
        const testData = JSON.parse(savedData);
        if (testData.isSubmitted) {
            mathAnswers = testData.answers || Array(mathQuestions.length).fill(null);
            mathMarkedQuestions = testData.markedQuestions || Array(mathQuestions.length).fill(false);
            mathIsSubmitted = true;
            mathTestCompleted = true;
            mathCompletionTime = testData.completionTime;
            mathCurrentQuestion = testData.currentQuestion || 0;
            mathStartScreen.style.display = 'none';
            mathQuizElements.style.display = 'block';
            mathGenerateQuestionNav();
            mathScoreDisplay.style.display = 'block';
            mathScorePercentage.textContent = testData.score;
            mathScoreDetail.textContent = `${testData.correctAnswers} benar dari ${mathQuestions.length} soal`;
            let colorClass, message;
            const percentage = parseInt(testData.score);
            if (percentage >= 80) {
                colorClass = 'math-score-excellent';
                message = "Luar biasa! Hasil yang sangat baik!";
            } else if (percentage >= 60) {
                colorClass = 'math-score-good';
                message = "Bagus! Tetap semangat belajar!";
            } else if (percentage >= 40) {
                colorClass = 'math-score-fair';
                message = "Cukup baik. Tingkatkan lagi!";
            } else {
                colorClass = 'math-score-poor';
                message = "Perlu belajar lebih giat lagi!";
            }
            mathScoreDisplay.className = 'math-score-display ' + colorClass;
            mathScoreMessage.textContent = message;
            mathBtnSubmit.style.display = 'none';
            mathBtnStart.style.display = 'none';
            mathBtnMark.style.display = 'none';
            mathStatusText.textContent = 'Selesai';
            mathTestStatus.classList.add('completed');
            if (mathCompletionTime) {
                mathCompletedTime.textContent = 'Selesai pada: ' + new Date(mathCompletionTime).toLocaleString();
            }
            mathTimerText.textContent = "00:00";
            mathTimerText.classList.add('math-time-up');
            mathUpdateAnsweredCount();
            mathLoadQuestion();
            return true;
        }
    }
    return false;
}

function mathStartTimer() {
    let mathTimeLeft = 30 * 60;
    function mathUpdateTimerDisplay() {
        const minutes = Math.floor(mathTimeLeft / 60);
        const seconds = mathTimeLeft % 60;
        mathTimerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (mathTimeLeft <= 0) {
            clearInterval(mathTimerInterval);
            mathTimerText.textContent = "00:00";
            mathTimerText.classList.add('math-time-up');
            alert("Waktu telah habis! Jawaban akan disubmit secara otomatis.");
            mathSubmitAnswers();
        }
    }
    mathUpdateTimerDisplay();
    mathTimerInterval = setInterval(() => {
        mathTimeLeft--;
        mathUpdateTimerDisplay();
        if (mathTimeLeft <= 0) {
            clearInterval(mathTimerInterval);
        }
    }, 1000);
}

function mathGenerateQuestionNav() {
    mathQuestionNav.innerHTML = '';
    mathTotalQuestionsSpan.textContent = mathQuestions.length;
    mathQuestions.forEach((_, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.addEventListener('click', () => {
            mathCurrentQuestion = index;
            mathLoadQuestion();
        });
        mathQuestionNav.appendChild(button);
    });
}

function mathShowExplanation(explanation) {
    const oldExplanation = document.querySelector('.math-explanation-box');
    if (oldExplanation) {
        oldExplanation.remove();
    }
    const explanationElement = document.createElement('div');
    explanationElement.className = 'math-explanation-box';
    explanationElement.innerHTML = `<strong>Pembahasan:</strong> ${explanation}`;
    const questionContainer = document.querySelector('.math-question-container');
    questionContainer.appendChild(explanationElement);
}

function saveCurrentShortAnswer() {
    if (mathQuestions[mathCurrentQuestion].type === "short") {
        const trimmedValue = mathShortAnswerInput.value.trim();
        if (trimmedValue !== "") {
            mathAnswers[mathCurrentQuestion] = [trimmedValue];
        } else {
            mathAnswers[mathCurrentQuestion] = null;
        }
        mathUpdateAnsweredCount();
        mathUpdateQuestionNav();
    }
}

function mathLoadQuestion() {
    const question = mathQuestions[mathCurrentQuestion];
    mathQuestionNumber.innerHTML = `Soal ${question.number} <span class="math-question-type math-type-${question.type}" id="mathQuestionType">${
        question.type === "single" ? "Pilihan Ganda" : 
        question.type === "multiple" ? "Multi Jawaban" : 
        question.type === "matching" ? "Menjodohkan" : "Uraian Singkat"
    }</span>`;
    mathQuestionType.textContent = question.type === "single" ? "Pilihan Ganda" : 
                              question.type === "multiple" ? "Multi Jawaban" : 
                              question.type === "matching" ? "Menjodohkan" : "Uraian Singkat";
    mathQuestionType.className = "math-question-type " + 
                           (question.type === "single" ? "math-type-single" : 
                            question.type === "multiple" ? "math-type-multiple" : 
                            question.type === "matching" ? "math-type-matching" : "math-type-short");
    mathQuestionText.innerHTML = question.text;
    const oldExplanation = document.querySelector('.math-explanation-box');
    if (oldExplanation) {
        oldExplanation.remove();
    }
    const oldMatchingContainer = document.querySelector('.math-matching-container');
    if (oldMatchingContainer) {
        oldMatchingContainer.remove();
    }
    if (question.type === "short") {
        mathOptionsContainer.style.display = "none";
        mathShortAnswerContainer.style.display = "block";
        const savedAnswer = mathAnswers[mathCurrentQuestion];
        mathShortAnswerInput.value = (savedAnswer && savedAnswer[0]) ? savedAnswer[0] : "";
        mathShortAnswerInput.disabled = mathIsSubmitted;
    } else if (question.type === "matching") {
        mathOptionsContainer.style.display = "none";
        mathShortAnswerContainer.style.display = "none";
        const matchingContainer = document.createElement('div');
        matchingContainer.className = 'math-matching-container';
        mathQuestionText.parentNode.insertBefore(matchingContainer, mathOptionsContainer);
        question.leftItems.forEach((leftItem, index) => {
            const row = document.createElement('div');
            row.className = 'math-matching-row';
            const left = document.createElement('div');
            left.className = 'math-matching-left';
            left.innerHTML = leftItem;
            row.appendChild(left);
            const select = document.createElement('select');
            select.className = 'math-matching-select';
            select.disabled = mathIsSubmitted;
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '-- Pilih Jawaban --';
            select.appendChild(defaultOption);
            question.rightItems.forEach((rightItem, rightIndex) => {
                const option = document.createElement('option');
                option.value = rightIndex;
                option.innerHTML = rightItem;
                select.appendChild(option);
            });
            if (mathAnswers[mathCurrentQuestion] && mathAnswers[mathCurrentQuestion][index] !== undefined) {
                select.value = mathAnswers[mathCurrentQuestion][index];
                if (mathIsSubmitted) {
                    if (question.correctPairs[index] === parseInt(mathAnswers[mathCurrentQuestion][index])) {
                        select.classList.add('correct');
                        row.classList.add('correct');
                    } else {
                        select.classList.add('wrong');
                        row.classList.add('wrong');
                    }
                }
            }
            select.addEventListener('change', () => {
                if (!mathAnswers[mathCurrentQuestion]) {
                    mathAnswers[mathCurrentQuestion] = Array(question.leftItems.length).fill('');
                }
                mathAnswers[mathCurrentQuestion][index] = select.value;
                const allAnswered = mathAnswers[mathCurrentQuestion].every(item => item !== '');
                if (allAnswered) {
                    mathUpdateAnsweredCount();
                    mathUpdateQuestionNav();
                } else {
                    mathUpdateQuestionNav();
                }
            });
            row.appendChild(select);
            matchingContainer.appendChild(row);
        });
    } else {
        mathOptionsContainer.style.display = "flex";
        mathShortAnswerContainer.style.display = "none";
        mathOptionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'math-option';
            const letterBox = document.createElement('div');
            letterBox.className = 'math-option-letter';
            letterBox.textContent = option.substring(0, 1);
            const optionText = document.createElement('div');
            optionText.className = 'math-option-text';
            optionText.innerHTML = option.substring(3);
            optionElement.appendChild(letterBox);
            optionElement.appendChild(optionText);
            const isSelected = mathAnswers[mathCurrentQuestion] && mathAnswers[mathCurrentQuestion].includes(index);
            if (isSelected) {
                optionElement.classList.add('selected');
            }
            if (mathIsSubmitted) {
                const isCorrectOption = question.correctAnswer.includes(index);
                if (isSelected) {
                    if (isCorrectOption) {
                        optionElement.classList.add('correct');
                    } else {
                        optionElement.classList.add('wrong');
                    }
                } else if (isCorrectOption) {
                    optionElement.classList.add('correct');
                }
            }
            optionElement.addEventListener('click', () => {
                if (!mathIsSubmitted) {
                    if (question.type === "single") {
                        document.querySelectorAll('.math-option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        optionElement.classList.add('selected');
                        mathAnswers[mathCurrentQuestion] = [index];
                    } else {
                        if (!mathAnswers[mathCurrentQuestion]) {
                            mathAnswers[mathCurrentQuestion] = [];
                        }
                        const selectedIndex = mathAnswers[mathCurrentQuestion].indexOf(index);
                        if (selectedIndex === -1) {
                            mathAnswers[mathCurrentQuestion].push(index);
                            optionElement.classList.add('selected');
                        } else {
                            mathAnswers[mathCurrentQuestion].splice(selectedIndex, 1);
                            optionElement.classList.remove('selected');
                            if (mathAnswers[mathCurrentQuestion].length === 0) {
                                mathAnswers[mathCurrentQuestion] = null;
                            }
                        }
                    }
                    mathUpdateAnsweredCount();
                    mathUpdateQuestionNav();
                }
            });
            mathOptionsContainer.appendChild(optionElement);
        });
    }
    if (mathIsSubmitted) {
        mathShowExplanation(question.explanation);
    }
    mathBtnMark.classList.toggle('marked', mathMarkedQuestions[mathCurrentQuestion]);
    mathUpdateQuestionNav();
    mathBtnPrev.disabled = mathCurrentQuestion === 0;
    mathBtnNext.disabled = mathCurrentQuestion === mathQuestions.length - 1;
    mathBtnMark.style.display = mathIsSubmitted ? 'none' : 'block';
}

function mathUpdateQuestionNav() {
    const buttons = mathQuestionNav.querySelectorAll('button');
    buttons.forEach((button, index) => {
        button.className = '';
        button.style.border = '2px solid #ddd';
        button.style.boxShadow = 'none';
        if (index === mathCurrentQuestion) {
            button.style.border = '2px solid #1976D2';
            button.style.boxShadow = '0 0 0 2px rgba(25, 118, 210, 0.3)';
        }
        if (mathIsSubmitted) {
            if (mathAnswers[index] !== null) {
                const question = mathQuestions[index];
                let isCorrect = false;
                if (question.type === "short") {
                    const userAnswer = mathAnswers[index] ? mathAnswers[index][0].toLowerCase().trim() : "";
                    isCorrect = question.correctAnswer.some(correct => 
                        correct.toLowerCase().trim() === userAnswer
                    );
                } else if (question.type === "matching") {
                    isCorrect = true;
                    for (let i = 0; i < question.leftItems.length; i++) {
                        if (!mathAnswers[index] || 
                            mathAnswers[index][i] === undefined || 
                            parseInt(mathAnswers[index][i]) !== question.correctPairs[i]) {
                            isCorrect = false;
                            break;
                        }
                    }
                } else {
                    const userAnswers = mathAnswers[index] || [];
                    const correctAnswers = question.correctAnswer;
                    if (question.type === "single") {
                        isCorrect = userAnswers.length === 1 && 
                                    correctAnswers.length === 1 && 
                                    userAnswers[0] === correctAnswers[0];
                    } else {
                        const allCorrectSelected = correctAnswers.every(ca => userAnswers.includes(ca));
                        const noIncorrectSelected = userAnswers.every(ua => correctAnswers.includes(ua));
                        isCorrect = allCorrectSelected && noIncorrectSelected;
                    }
                }
                button.classList.add(isCorrect ? 'correct' : 'wrong');
            }
        } else {
            if (mathMarkedQuestions[index]) {
                button.classList.add('marked');
            } else if (isAnswerFilled(mathAnswers[index], mathQuestions[index].type, mathQuestions[index])) {
                button.classList.add('answered');
            }
        }
    });
}

function mathUpdateAnsweredCount() {
    mathAnsweredCount = 0;
    mathQuestions.forEach((question, index) => {
        if (isAnswerFilled(mathAnswers[index], question.type, question)) {
            mathAnsweredCount++;
        }
    });
    mathProgressText.textContent = `${mathAnsweredCount} dari ${mathQuestions.length} Soal dikerjakan`;
}

function mathCalculateScore() {
    let score = 0;
    mathQuestions.forEach((question, index) => {
        if (isAnswerFilled(mathAnswers[index], question.type, question)) {
            if (question.type === "short") {
                const userAnswer = mathAnswers[index][0].toLowerCase().trim();
                if (question.correctAnswer.some(correct => correct.toLowerCase().trim() === userAnswer)) {
                    score++;
                }
            } else if (question.type === "matching") {
                let allCorrect = true;
                for (let i = 0; i < question.leftItems.length; i++) {
                    if (!mathAnswers[index] || 
                        mathAnswers[index][i] === undefined || 
                        parseInt(mathAnswers[index][i]) !== question.correctPairs[i]) {
                        allCorrect = false;
                        break;
                    }
                }
                if (allCorrect) score++;
            } else {
                const userAnswers = mathAnswers[index] || [];
                const correctAnswers = question.correctAnswer;
                if (question.type === "single") {
                    if (userAnswers.length === 1 && correctAnswers.length === 1 && userAnswers[0] === correctAnswers[0]) {
                        score++;
                    }
                } else {
                    const allCorrectSelected = correctAnswers.every(ca => userAnswers.includes(ca));
                    const noIncorrectSelected = userAnswers.every(ua => correctAnswers.includes(ua));
                    if (allCorrectSelected && noIncorrectSelected) {
                        score++;
                    }
                }
            }
        }
    });
    return score;
}

function saveScoreForDashboard(percentage, correctAnswers) {
    localStorage.setItem('bilangan-easy-score', percentage + '%');
    localStorage.setItem('bilangan-easy-status', 'completed');
    localStorage.setItem('bilangan-easy-correct-answers', correctAnswers);
}

function mathSubmitAnswers() {
    mathIsSubmitted = true;
    clearInterval(mathTimerInterval);
    saveCurrentShortAnswer();
    const correctAnswers = mathCalculateScore();
    const percentage = Math.round((correctAnswers / mathQuestions.length) * 100);
    saveScoreForDashboard(percentage, correctAnswers);
    localStorage.setItem('bilangan-easy-data', JSON.stringify({
        answers: mathAnswers,
        markedQuestions: mathMarkedQuestions,
        isSubmitted: true,
        score: percentage + '%',
        correctAnswers: correctAnswers,
        completionTime: new Date().toISOString(),
        currentQuestion: mathCurrentQuestion
    }));
    mathBtnSubmit.style.display = 'none';
    mathBtnMark.style.display = 'none';
    mathScoreDisplay.style.display = 'block';
    mathScorePercentage.textContent = percentage + '%';
    mathScoreDetail.textContent = `${correctAnswers} benar dari ${mathQuestions.length} soal`;
    let colorClass, message;
    if (percentage >= 80) {
        colorClass = 'math-score-excellent';
        message = "Luar biasa! Hasil yang sangat baik!";
    } else if (percentage >= 60) {
        colorClass = 'math-score-good';
        message = "Bagus! Tetap semangat belajar!";
    } else if (percentage >= 40) {
        colorClass = 'math-score-fair';
        message = "Cukup baik. Tingkatkan lagi!";
    } else {
        colorClass = 'math-score-poor';
        message = "Perlu belajar lebih giat lagi!";
    }
    mathScoreDisplay.className = 'math-score-display ' + colorClass;
    mathScoreMessage.textContent = message;
    mathStatusText.textContent = 'Selesai';
    mathTestStatus.classList.add('completed');
    mathCompletionTime = new Date();
    mathCompletedTime.textContent = 'Selesai pada: ' + mathCompletionTime.toLocaleString();
    mathTimerText.textContent = "00:00";
    mathTimerText.classList.add('math-time-up');
    mathLoadQuestion();
    mathUpdateQuestionNav();
}

function resetTest() {
    if (confirm('Apakah Anda yakin ingin mengulang tes ini? Semua jawaban dan skor sebelumnya akan dihapus.')) {
        localStorage.removeItem('bilangan-easy-data');
        localStorage.removeItem('bilangan-easy-score');
        localStorage.removeItem('bilangan-easy-status');
        localStorage.removeItem('bilangan-easy-correct-answers');
        mathCurrentQuestion = 0;
        mathAnswers = Array(mathQuestions.length).fill(null);
        mathMarkedQuestions = Array(mathQuestions.length).fill(false);
        mathAnsweredCount = 0;
        mathIsSubmitted = false;
        mathTestCompleted = false;
        mathCompletionTime = null;
        mathStartScreen.style.display = 'block';
        mathQuizElements.style.display = 'none';
        mathScoreDisplay.style.display = 'none';
        mathBtnStart.style.display = 'block';
        mathBtnSubmit.style.display = 'block';
        mathBtnMark.style.display = 'block';
        mathStatusText.textContent = 'Belum Dimulai';
        mathTestStatus.classList.remove('completed');
        mathCompletedTime.textContent = '';
        clearInterval(mathTimerInterval);
        mathTimerText.textContent = "15:00";
        mathTimerText.classList.remove('math-time-up');
        location.reload();
    }
}

function mathUpdateTimerDisplay() {
    const minutes = Math.floor(mathTimeLeft / 60);
    const seconds = mathTimeLeft % 60;
    mathTimerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (mathTimeLeft <= 0) {
        clearInterval(mathTimerInterval);
        mathTimerText.textContent = "00:00";
        mathTimerText.classList.add('math-time-up');
        alert("Waktu telah habis! Jawaban akan disubmit secara otomatis.");
        mathSubmitAnswers();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const testWasCompleted = checkTestStatus();
    if (!testWasCompleted) {
        mathQuizElements.style.display = 'none';
        mathStartScreen.style.display = 'block';
        mathScoreDisplay.style.display = 'none';
        mathStatusText.textContent = 'Belum Dimulai';
    }
    mathBtnStart.addEventListener('click', () => {
        mathStartScreen.style.display = 'none';
        mathQuizElements.style.display = 'block';
        mathStartTimer();
        mathGenerateQuestionNav();
        mathLoadQuestion();
        mathScoreDisplay.style.display = 'none';
        mathStatusText.textContent = 'Sedang Berlangsung';
    });
    mathQuestionNavBtn.addEventListener('click', () => {
        mathQuestionNavBtn.classList.toggle('active');
        mathQuestionNavContainer.classList.toggle('show');
    });
    mathBtnMark.addEventListener('click', () => {
        if (!mathIsSubmitted) {
            mathMarkedQuestions[mathCurrentQuestion] = !mathMarkedQuestions[mathCurrentQuestion];
            mathBtnMark.classList.toggle('marked', mathMarkedQuestions[mathCurrentQuestion]);
            mathUpdateQuestionNav();
        }
    });
    mathBtnPrev.addEventListener('click', () => {
        if (mathCurrentQuestion > 0) {
            saveCurrentShortAnswer();
            mathCurrentQuestion--;
            mathLoadQuestion();
        }
    });
    mathBtnNext.addEventListener('click', () => {
        if (mathCurrentQuestion < mathQuestions.length - 1) {
            saveCurrentShortAnswer();
            mathCurrentQuestion++;
            mathLoadQuestion();
        }
    });
    mathBtnSubmit.addEventListener('click', () => {
        mathSubmitConfirm.style.display = 'flex';
    });
    mathBtnCancel.addEventListener('click', () => {
        mathSubmitConfirm.style.display = 'none';
    });
    mathBtnConfirm.addEventListener('click', () => {
        mathSubmitConfirm.style.display = 'none';
        mathSubmitAnswers();
    });
    mathBtnReset.addEventListener('click', resetTest);
    mathDropdownToggle.addEventListener('click', () => {
        mathDropdownToggle.classList.toggle('active');
        mathDropdownContent.classList.toggle('show');
    });
    document.addEventListener('click', (e) => {
        if (!mathDropdownToggle.contains(e.target) && !mathDropdownContent.contains(e.target)) {
            mathDropdownToggle.classList.remove('active');
            mathDropdownContent.classList.remove('show');
        }
    });
    mathShortAnswerInput.addEventListener('input', () => {
        if (!mathIsSubmitted) {
            saveCurrentShortAnswer();
        }
    });
});
