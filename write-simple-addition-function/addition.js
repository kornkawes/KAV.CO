/**
 * ฟังก์ชันสำหรับบวกเลขสองจำนวนเข้าด้วยกัน
 * @param {number} a - ตัวเลขตัวแรก
 * @param {number} b - ตัวเลขตัวที่สอง
 * @returns {number} ผลรวมของ a และ b
 */
function add(a, b) {
    // ตรวจสอบข้อมูลนำเข้าเพื่อให้มั่นใจว่าเป็นตัวเลขจริง ๆ เพื่อป้องกันข้อผิดพลาดเชิง Runtime
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('พารามิเตอร์ทั้งสองตัวต้องเป็นตัวเลขครับ');
    }
    return a + b;
}

// ตัวอย่างการเรียกใช้งานทั่วไป
try {
    const result = add(15, 27);
    console.log(`ผลลัพธ์การบวก: ${result}`); // ผลลัพธ์: 42
} catch (error) {
    console.error(`เกิดข้อผิดพลาด: ${error.message}`);
}