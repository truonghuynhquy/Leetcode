// Định nghĩa của một node trong danh sách liên kết.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * Hàm để cộng hai số được đại diện bởi các danh sách liên kết.
 * @param {ListNode} l1 - Danh sách liên kết thứ nhất.
 * @param {ListNode} l2 - Danh sách liên kết thứ hai.
 * @return {ListNode} - Danh sách liên kết đại diện cho tổng của hai số.
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0); // Sử dụng node giả để bắt đầu danh sách kết quả
    let current = dummyHead; // Con trỏ hiện tại để xây dựng danh sách kết quả
    let carry = 0; // Biến để lưu trữ giá trị dư

    while (l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.val : 0; // Lấy giá trị của node hiện tại ở l1, nếu l1 là null thì lấy 0
        let y = l2 !== null ? l2.val : 0; // Tương tự cho l2
        let sum = carry + x + y; // Tổng của hai giá trị và giá trị dư
        carry = Math.floor(sum / 10); // Cập nhật giá trị dư cho bước tiếp theo
        current.next = new ListNode(sum % 10); // Tạo node mới với chữ số đơn vị của tổng và gắn vào danh sách kết quả
        current = current.next; // Di chuyển con trỏ hiện tại

        // Di chuyển đến node tiếp theo của l1 và l2 nếu có
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // Nếu còn giá trị dư, thêm node mới với giá trị đó
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // Trả về danh sách kết quả (bỏ qua node giả đầu tiên)
};

// Hàm để tạo danh sách liên kết từ một mảng các số.
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Hàm để chuyển danh sách liên kết thành một mảng các số.
function linkedListToArray(node) {
    let arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

// Hàm kiểm tra
function testAddTwoNumbers() {
    let l1 = createLinkedList([2, 4, 3]); // số 342
    let l2 = createLinkedList([5, 6, 4]); // số 465
    let result = addTwoNumbers(l1, l2); // kết quả là 807
    console.log(linkedListToArray(result)); // In ra [7, 0, 8]
}

testAddTwoNumbers();
