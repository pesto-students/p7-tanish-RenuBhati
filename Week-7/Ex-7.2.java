if (head == null)
		return head;
	
	ListNode copyHead = head;
	
	int len = 1;
	while (copyHead.next != null) {
		copyHead = copyHead.next;
		len++;
	}
	
	copyHead.next = head;
	
	for (int i = len - k % len; i > 1; i--)
		head = head.next;

	copyHead = head.next;
	head.next = null;

	return copyHead;
}