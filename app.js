/* ==========================================
   ALGOTRACK — DSA PROGRESS TRACKER
   Built with Vanilla JavaScript
   ========================================== */

const PROBLEMS = [
    [1, "Two Sum", "Arrays & Hashing", "Easy", "leetcode", "two-sum"],
    [2, "Contains Duplicate", "Arrays & Hashing", "Easy", "leetcode", "contains-duplicate"],
    [3, "Valid Anagram", "Arrays & Hashing", "Easy", "leetcode", "valid-anagram"],
    [4, "Group Anagrams", "Arrays & Hashing", "Medium", "leetcode", "group-anagrams"],
    [5, "Top K Frequent Elements", "Arrays & Hashing", "Medium", "leetcode", "top-k-frequent-elements"],
    [6, "Product of Array Except Self", "Arrays & Hashing", "Medium", "leetcode", "product-of-array-except-self"],
    [7, "Longest Consecutive Sequence", "Arrays & Hashing", "Medium", "leetcode", "longest-consecutive-sequence"],
    [8, "Encode and Decode Strings", "Arrays & Hashing", "Medium", "leetcode", "encode-and-decode-strings"],
    [9, "Valid Sudoku", "Arrays & Hashing", "Medium", "leetcode", "valid-sudoku"],
    [10, "First Unique Character in a String", "Arrays & Hashing", "Easy", "leetcode", "first-unique-character-in-a-string"],
    [11, "Majority Element", "Arrays & Hashing", "Easy", "leetcode", "majority-element"],
    [12, "Majority Element II", "Arrays & Hashing", "Medium", "leetcode", "majority-element-ii"],
    [13, "Rotate Array", "Arrays & Hashing", "Medium", "leetcode", "rotate-array"],
    [14, "Next Permutation", "Arrays & Hashing", "Medium", "leetcode", "next-permutation"],
    [15, "Sort Colors", "Arrays & Hashing", "Medium", "leetcode", "sort-colors"],
    [16, "Set Matrix Zeroes", "Arrays & Hashing", "Medium", "leetcode", "set-matrix-zeroes"],
    [17, "Spiral Matrix", "Arrays & Hashing", "Medium", "leetcode", "spiral-matrix"],
    [18, "Rotate Image", "Arrays & Hashing", "Medium", "leetcode", "rotate-image"],
    [19, "Pascal's Triangle", "Arrays & Hashing", "Easy", "leetcode", "pascals-triangle"],
    [20, "Find All Duplicates in an Array", "Arrays & Hashing", "Medium", "leetcode", "find-all-duplicates-in-an-array"],
    [21, "First Missing Positive", "Arrays & Hashing", "Hard", "leetcode", "first-missing-positive"],
    [22, "Missing Number", "Arrays & Hashing", "Easy", "leetcode", "missing-number"],
    [23, "Find the Duplicate Number", "Arrays & Hashing", "Medium", "leetcode", "find-the-duplicate-number"],
    [24, "Merge Sorted Array", "Arrays & Hashing", "Easy", "leetcode", "merge-sorted-array"],
    [25, "Remove Duplicates from Sorted Array", "Arrays & Hashing", "Easy", "leetcode", "remove-duplicates-from-sorted-array"],
    [26, "Move Zeroes", "Arrays & Hashing", "Easy", "leetcode", "move-zeroes"],
    [27, "Best Time to Buy and Sell Stock", "Arrays & Hashing", "Easy", "leetcode", "best-time-to-buy-and-sell-stock"],
    [28, "Best Time to Buy and Sell Stock II", "Arrays & Hashing", "Medium", "leetcode", "best-time-to-buy-and-sell-stock-ii"],
    [29, "Longest Common Prefix", "Arrays & Hashing", "Easy", "leetcode", "longest-common-prefix"],
    [30, "Sort an array of 0s, 1s and 2s", "Arrays & Hashing", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Sort+an+array+of+0s%2C+1s+and+2s"],
    [31, "Leaders in an array", "Arrays & Hashing", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Leaders+in+an+array"],
    [32, "Union of two sorted arrays", "Arrays & Hashing", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Union+of+two+sorted+arrays"],

    [33, "Valid Palindrome", "Two Pointers", "Easy", "leetcode", "valid-palindrome"],
    [34, "Two Sum II - Input Array Is Sorted", "Two Pointers", "Medium", "leetcode", "two-sum-ii-input-array-is-sorted"],
    [35, "3Sum", "Two Pointers", "Medium", "leetcode", "3sum"],
    [36, "3Sum Closest", "Two Pointers", "Medium", "leetcode", "3sum-closest"],
    [37, "4Sum", "Two Pointers", "Medium", "leetcode", "4sum"],
    [38, "Container With Most Water", "Two Pointers", "Medium", "leetcode", "container-with-most-water"],
    [39, "Trapping Rain Water", "Two Pointers", "Hard", "leetcode", "trapping-rain-water"],
    [40, "Remove Element", "Two Pointers", "Easy", "leetcode", "remove-element"],
    [41, "Squares of a Sorted Array", "Two Pointers", "Easy", "leetcode", "squares-of-a-sorted-array"],
    [42, "Valid Palindrome II", "Two Pointers", "Easy", "leetcode", "valid-palindrome-ii"],
    [43, "Reverse Words in a String", "Two Pointers", "Medium", "leetcode", "reverse-words-in-a-string"],
    [44, "Is Subsequence", "Two Pointers", "Easy", "leetcode", "is-subsequence"],
    [45, "Boats to Save People", "Two Pointers", "Medium", "leetcode", "boats-to-save-people"],
    [46, "Backspace String Compare", "Two Pointers", "Easy", "leetcode", "backspace-string-compare"],
    [47, "Sort Array By Parity", "Two Pointers", "Easy", "leetcode", "sort-array-by-parity"],
    [48, "Count triplets with sum smaller than X", "Two Pointers", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Count+triplets+with+sum+smaller+than+X"],

    [49, "Longest Substring Without Repeating Characters", "Sliding Window", "Medium", "leetcode", "longest-substring-without-repeating-characters"],
    [50, "Longest Repeating Character Replacement", "Sliding Window", "Medium", "leetcode", "longest-repeating-character-replacement"],
    [51, "Permutation in String", "Sliding Window", "Medium", "leetcode", "permutation-in-string"],
    [52, "Minimum Window Substring", "Sliding Window", "Hard", "leetcode", "minimum-window-substring"],
    [53, "Sliding Window Maximum", "Sliding Window", "Hard", "leetcode", "sliding-window-maximum"],
    [54, "Minimum Size Subarray Sum", "Sliding Window", "Medium", "leetcode", "minimum-size-subarray-sum"],
    [55, "Find All Anagrams in a String", "Sliding Window", "Medium", "leetcode", "find-all-anagrams-in-a-string"],
    [56, "Max Consecutive Ones III", "Sliding Window", "Medium", "leetcode", "max-consecutive-ones-iii"],
    [57, "Fruit Into Baskets", "Sliding Window", "Medium", "leetcode", "fruit-into-baskets"],
    [58, "Maximum Average Subarray I", "Sliding Window", "Easy", "leetcode", "maximum-average-subarray-i"],
    [59, "Longest Substring with At Most K Distinct Characters", "Sliding Window", "Medium", "leetcode", "longest-substring-with-at-most-k-distinct-characters"],
    [60, "Subarrays with K Different Integers", "Sliding Window", "Hard", "leetcode", "subarrays-with-k-different-integers"],
    [61, "Count Number of Nice Subarrays", "Sliding Window", "Medium", "leetcode", "count-number-of-nice-subarrays"],
    [62, "Binary Subarrays With Sum", "Sliding Window", "Medium", "leetcode", "binary-subarrays-with-sum"],
    [63, "Maximum Points You Can Obtain from Cards", "Sliding Window", "Medium", "leetcode", "maximum-points-you-can-obtain-from-cards"],
    [64, "Contains Duplicate II", "Sliding Window", "Easy", "leetcode", "contains-duplicate-ii"],
    [65, "Longest Subarray of 1's After Deleting One Element", "Sliding Window", "Medium", "leetcode", "longest-subarray-of-1s-after-deleting-one-element"],
    [66, "First negative integer in every window of size k", "Sliding Window", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+First+negative+integer+in+every+window+of+size+k"],

    [67, "Valid Parentheses", "Stack & Monotonic Stack", "Easy", "leetcode", "valid-parentheses"],
    [68, "Min Stack", "Stack & Monotonic Stack", "Medium", "leetcode", "min-stack"],
    [69, "Evaluate Reverse Polish Notation", "Stack & Monotonic Stack", "Medium", "leetcode", "evaluate-reverse-polish-notation"],
    [70, "Daily Temperatures", "Stack & Monotonic Stack", "Medium", "leetcode", "daily-temperatures"],
    [71, "Next Greater Element I", "Stack & Monotonic Stack", "Easy", "leetcode", "next-greater-element-i"],
    [72, "Next Greater Element II", "Stack & Monotonic Stack", "Medium", "leetcode", "next-greater-element-ii"],
    [73, "Largest Rectangle in Histogram", "Stack & Monotonic Stack", "Hard", "leetcode", "largest-rectangle-in-histogram"],
    [74, "Maximal Rectangle", "Stack & Monotonic Stack", "Hard", "leetcode", "maximal-rectangle"],
    [75, "Online Stock Span", "Stack & Monotonic Stack", "Medium", "leetcode", "online-stock-span"],
    [76, "Asteroid Collision", "Stack & Monotonic Stack", "Medium", "leetcode", "asteroid-collision"],
    [77, "Decode String", "Stack & Monotonic Stack", "Medium", "leetcode", "decode-string"],
    [78, "Simplify Path", "Stack & Monotonic Stack", "Medium", "leetcode", "simplify-path"],
    [79, "Basic Calculator", "Stack & Monotonic Stack", "Hard", "leetcode", "basic-calculator"],
    [80, "Basic Calculator II", "Stack & Monotonic Stack", "Medium", "leetcode", "basic-calculator-ii"],
    [81, "Remove K Digits", "Stack & Monotonic Stack", "Medium", "leetcode", "remove-k-digits"],
    [82, "Remove All Adjacent Duplicates In String", "Stack & Monotonic Stack", "Easy", "leetcode", "remove-all-adjacent-duplicates-in-string"],
    [83, "Implement Queue using Stacks", "Stack & Monotonic Stack", "Easy", "leetcode", "implement-queue-using-stacks"],
    [84, "Implement Stack using Queues", "Stack & Monotonic Stack", "Easy", "leetcode", "implement-stack-using-queues"],
    [85, "Sum of Subarray Minimums", "Stack & Monotonic Stack", "Medium", "leetcode", "sum-of-subarray-minimums"],
    [86, "Longest Valid Parentheses", "Stack & Monotonic Stack", "Hard", "leetcode", "longest-valid-parentheses"],
    [87, "Next Smaller Element", "Stack & Monotonic Stack", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Next+Smaller+Element"],

    [88, "Reverse Linked List", "Linked List", "Easy", "leetcode", "reverse-linked-list"],
    [89, "Reverse Linked List II", "Linked List", "Medium", "leetcode", "reverse-linked-list-ii"],
    [90, "Merge Two Sorted Lists", "Linked List", "Easy", "leetcode", "merge-two-sorted-lists"],
    [91, "Linked List Cycle", "Linked List", "Easy", "leetcode", "linked-list-cycle"],
    [92, "Linked List Cycle II", "Linked List", "Medium", "leetcode", "linked-list-cycle-ii"],
    [93, "Middle of the Linked List", "Linked List", "Easy", "leetcode", "middle-of-the-linked-list"],
    [94, "Remove Nth Node From End of List", "Linked List", "Medium", "leetcode", "remove-nth-node-from-end-of-list"],
    [95, "Reorder List", "Linked List", "Medium", "leetcode", "reorder-list"],
    [96, "Palindrome Linked List", "Linked List", "Easy", "leetcode", "palindrome-linked-list"],
    [97, "Intersection of Two Linked Lists", "Linked List", "Easy", "leetcode", "intersection-of-two-linked-lists"],
    [98, "Add Two Numbers", "Linked List", "Medium", "leetcode", "add-two-numbers"],
    [99, "Copy List with Random Pointer", "Linked List", "Medium", "leetcode", "copy-list-with-random-pointer"],
    [100, "Reverse Nodes in k-Group", "Linked List", "Hard", "leetcode", "reverse-nodes-in-k-group"],
    [101, "Rotate List", "Linked List", "Medium", "leetcode", "rotate-list"],
    [102, "Odd Even Linked List", "Linked List", "Medium", "leetcode", "odd-even-linked-list"],
    [103, "Sort List", "Linked List", "Medium", "leetcode", "sort-list"],
    [104, "Swap Nodes in Pairs", "Linked List", "Medium", "leetcode", "swap-nodes-in-pairs"],
    [105, "Remove Duplicates from Sorted List", "Linked List", "Easy", "leetcode", "remove-duplicates-from-sorted-list"],
    [106, "Remove Duplicates from Sorted List II", "Linked List", "Medium", "leetcode", "remove-duplicates-from-sorted-list-ii"],
    [107, "Partition List", "Linked List", "Medium", "leetcode", "partition-list"],
    [108, "Flatten a Multilevel Doubly Linked List", "Linked List", "Medium", "leetcode", "flatten-a-multilevel-doubly-linked-list"],
    [109, "Remove Linked List Elements", "Linked List", "Easy", "leetcode", "remove-linked-list-elements"],
    [110, "Design Linked List", "Linked List", "Medium", "leetcode", "design-linked-list"],
    [111, "Flattening a Linked List", "Linked List", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Flattening+a+Linked+List"],
    [112, "Add 1 to a number represented as linked list", "Linked List", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Add+1+to+a+number+represented+as+linked+list"],

    [113, "Maximum Depth of Binary Tree", "Binary Trees", "Easy", "leetcode", "maximum-depth-of-binary-tree"],
    [114, "Same Tree", "Binary Trees", "Easy", "leetcode", "same-tree"],
    [115, "Invert Binary Tree", "Binary Trees", "Easy", "leetcode", "invert-binary-tree"],
    [116, "Symmetric Tree", "Binary Trees", "Easy", "leetcode", "symmetric-tree"],
    [117, "Diameter of Binary Tree", "Binary Trees", "Easy", "leetcode", "diameter-of-binary-tree"],
    [118, "Balanced Binary Tree", "Binary Trees", "Easy", "leetcode", "balanced-binary-tree"],
    [119, "Subtree of Another Tree", "Binary Trees", "Easy", "leetcode", "subtree-of-another-tree"],
    [120, "Binary Tree Level Order Traversal", "Binary Trees", "Medium", "leetcode", "binary-tree-level-order-traversal"],
    [121, "Binary Tree Zigzag Level Order Traversal", "Binary Trees", "Medium", "leetcode", "binary-tree-zigzag-level-order-traversal"],
    [122, "Binary Tree Right Side View", "Binary Trees", "Medium", "leetcode", "binary-tree-right-side-view"],
    [123, "Binary Tree Inorder Traversal", "Binary Trees", "Easy", "leetcode", "binary-tree-inorder-traversal"],
    [124, "Binary Tree Preorder Traversal", "Binary Trees", "Easy", "leetcode", "binary-tree-preorder-traversal"],
    [125, "Binary Tree Postorder Traversal", "Binary Trees", "Easy", "leetcode", "binary-tree-postorder-traversal"],
    [126, "Count Good Nodes in Binary Tree", "Binary Trees", "Medium", "leetcode", "count-good-nodes-in-binary-tree"],
    [127, "Lowest Common Ancestor of a Binary Tree", "Binary Trees", "Medium", "leetcode", "lowest-common-ancestor-of-a-binary-tree"],
    [128, "Construct Binary Tree from Preorder and Inorder Traversal", "Binary Trees", "Medium", "leetcode", "construct-binary-tree-from-preorder-and-inorder-traversal"],
    [129, "Path Sum", "Binary Trees", "Easy", "leetcode", "path-sum"],
    [130, "Path Sum II", "Binary Trees", "Medium", "leetcode", "path-sum-ii"],
    [131, "Path Sum III", "Binary Trees", "Medium", "leetcode", "path-sum-iii"],
    [132, "Binary Tree Maximum Path Sum", "Binary Trees", "Hard", "leetcode", "binary-tree-maximum-path-sum"],
    [133, "Serialize and Deserialize Binary Tree", "Binary Trees", "Hard", "leetcode", "serialize-and-deserialize-binary-tree"],
    [134, "Flatten Binary Tree to Linked List", "Binary Trees", "Medium", "leetcode", "flatten-binary-tree-to-linked-list"],
    [135, "Populating Next Right Pointers in Each Node", "Binary Trees", "Medium", "leetcode", "populating-next-right-pointers-in-each-node"],
    [136, "Vertical Order Traversal of a Binary Tree", "Binary Trees", "Hard", "leetcode", "vertical-order-traversal-of-a-binary-tree"],
    [137, "All Nodes Distance K in Binary Tree", "Binary Trees", "Medium", "leetcode", "all-nodes-distance-k-in-binary-tree"],
    [138, "Maximum Width of Binary Tree", "Binary Trees", "Medium", "leetcode", "maximum-width-of-binary-tree"],
    [139, "Sum Root to Leaf Numbers", "Binary Trees", "Medium", "leetcode", "sum-root-to-leaf-numbers"],
    [140, "Minimum Depth of Binary Tree", "Binary Trees", "Easy", "leetcode", "minimum-depth-of-binary-tree"],
    [141, "Amount of Time for Binary Tree to Be Infected", "Binary Trees", "Medium", "leetcode", "amount-of-time-for-binary-tree-to-be-infected"],
    [142, "Boundary Traversal of binary tree", "Binary Trees", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Boundary+Traversal+of+binary+tree"],
    [143, "Top View of Binary Tree", "Binary Trees", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Top+View+of+Binary+Tree"],
    [144, "Bottom View of Binary Tree", "Binary Trees", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Bottom+View+of+Binary+Tree"],
    [145, "Left View of Binary Tree", "Binary Trees", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Left+View+of+Binary+Tree"],

    [146, "Validate Binary Search Tree", "Binary Search Trees", "Medium", "leetcode", "validate-binary-search-tree"],
    [147, "Kth Smallest Element in a BST", "Binary Search Trees", "Medium", "leetcode", "kth-smallest-element-in-a-bst"],
    [148, "Lowest Common Ancestor of a Binary Search Tree", "Binary Search Trees", "Medium", "leetcode", "lowest-common-ancestor-of-a-binary-search-tree"],
    [149, "Delete Node in a BST", "Binary Search Trees", "Medium", "leetcode", "delete-node-in-a-bst"],
    [150, "Insert into a Binary Search Tree", "Binary Search Trees", "Medium", "leetcode", "insert-into-a-binary-search-tree"],
    [151, "Search in a Binary Search Tree", "Binary Search Trees", "Easy", "leetcode", "search-in-a-binary-search-tree"],
    [152, "Convert Sorted Array to Binary Search Tree", "Binary Search Trees", "Easy", "leetcode", "convert-sorted-array-to-binary-search-tree"],
    [153, "Binary Search Tree Iterator", "Binary Search Trees", "Medium", "leetcode", "binary-search-tree-iterator"],
    [154, "Two Sum IV - Input is a BST", "Binary Search Trees", "Easy", "leetcode", "two-sum-iv-input-is-a-bst"],
    [155, "Recover Binary Search Tree", "Binary Search Trees", "Medium", "leetcode", "recover-binary-search-tree"],
    [156, "Trim a Binary Search Tree", "Binary Search Trees", "Medium", "leetcode", "trim-a-binary-search-tree"],
    [157, "Construct Binary Search Tree from Preorder Traversal", "Binary Search Trees", "Medium", "leetcode", "construct-binary-search-tree-from-preorder-traversal"],
    [158, "Inorder Successor in BST", "Binary Search Trees", "Medium", "leetcode", "inorder-successor-in-bst"],
    [159, "Floor in BST", "Binary Search Trees", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Floor+in+BST"],

    [160, "Kth Largest Element in an Array", "Heap & Top-K", "Medium", "leetcode", "kth-largest-element-in-an-array"],
    [161, "Kth Largest Element in a Stream", "Heap & Top-K", "Easy", "leetcode", "kth-largest-element-in-a-stream"],
    [162, "Last Stone Weight", "Heap & Top-K", "Easy", "leetcode", "last-stone-weight"],
    [163, "K Closest Points to Origin", "Heap & Top-K", "Medium", "leetcode", "k-closest-points-to-origin"],
    [164, "Top K Frequent Words", "Heap & Top-K", "Medium", "leetcode", "top-k-frequent-words"],
    [165, "Merge k Sorted Lists", "Heap & Top-K", "Hard", "leetcode", "merge-k-sorted-lists"],
    [166, "Find Median from Data Stream", "Heap & Top-K", "Hard", "leetcode", "find-median-from-data-stream"],
    [167, "Task Scheduler", "Heap & Top-K", "Medium", "leetcode", "task-scheduler"],
    [168, "Reorganize String", "Heap & Top-K", "Medium", "leetcode", "reorganize-string"],
    [169, "Sort Characters By Frequency", "Heap & Top-K", "Medium", "leetcode", "sort-characters-by-frequency"],
    [170, "Ugly Number II", "Heap & Top-K", "Medium", "leetcode", "ugly-number-ii"],
    [171, "Find K Pairs with Smallest Sums", "Heap & Top-K", "Medium", "leetcode", "find-k-pairs-with-smallest-sums"],
    [172, "IPO", "Heap & Top-K", "Hard", "leetcode", "ipo"],
    [173, "Smallest Range Covering Elements from K Lists", "Heap & Top-K", "Hard", "leetcode", "smallest-range-covering-elements-from-k-lists"],
    [174, "Single-Threaded CPU", "Heap & Top-K", "Medium", "leetcode", "single-threaded-cpu"],
    [175, "Design Twitter", "Heap & Top-K", "Medium", "leetcode", "design-twitter"],
    [176, "Merge k Sorted Arrays", "Heap & Top-K", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Merge+k+Sorted+Arrays"],
    [177, "Kth smallest element", "Heap & Top-K", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Kth+smallest+element"],

    [178, "Binary Search", "Binary Search", "Easy", "leetcode", "binary-search"],
    [179, "Search Insert Position", "Binary Search", "Easy", "leetcode", "search-insert-position"],
    [180, "First Bad Version", "Binary Search", "Easy", "leetcode", "first-bad-version"],
    [181, "Find First and Last Position of Element in Sorted Array", "Binary Search", "Medium", "leetcode", "find-first-and-last-position-of-element-in-sorted-array"],
    [182, "Search in Rotated Sorted Array", "Binary Search", "Medium", "leetcode", "search-in-rotated-sorted-array"],
    [183, "Search in Rotated Sorted Array II", "Binary Search", "Medium", "leetcode", "search-in-rotated-sorted-array-ii"],
    [184, "Find Minimum in Rotated Sorted Array", "Binary Search", "Medium", "leetcode", "find-minimum-in-rotated-sorted-array"],
    [185, "Search a 2D Matrix", "Binary Search", "Medium", "leetcode", "search-a-2d-matrix"],
    [186, "Search a 2D Matrix II", "Binary Search", "Medium", "leetcode", "search-a-2d-matrix-ii"],
    [187, "Find Peak Element", "Binary Search", "Medium", "leetcode", "find-peak-element"],
    [188, "Sqrt(x)", "Binary Search", "Easy", "leetcode", "sqrtx"],
    [189, "Koko Eating Bananas", "Binary Search", "Medium", "leetcode", "koko-eating-bananas"],
    [190, "Capacity To Ship Packages Within D Days", "Binary Search", "Medium", "leetcode", "capacity-to-ship-packages-within-d-days"],
    [191, "Split Array Largest Sum", "Binary Search", "Hard", "leetcode", "split-array-largest-sum"],
    [192, "Median of Two Sorted Arrays", "Binary Search", "Hard", "leetcode", "median-of-two-sorted-arrays"],
    [193, "Single Element in a Sorted Array", "Binary Search", "Medium", "leetcode", "single-element-in-a-sorted-array"],
    [194, "Kth Smallest Element in a Sorted Matrix", "Binary Search", "Medium", "leetcode", "kth-smallest-element-in-a-sorted-matrix"],
    [195, "Find K Closest Elements", "Binary Search", "Medium", "leetcode", "find-k-closest-elements"],
    [196, "Minimum Number of Days to Make m Bouquets", "Binary Search", "Medium", "leetcode", "minimum-number-of-days-to-make-m-bouquets"],
    [197, "Magnetic Force Between Two Balls", "Binary Search", "Medium", "leetcode", "magnetic-force-between-two-balls"],
    [198, "Allocate minimum number of pages", "Binary Search", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Allocate+minimum+number+of+pages"],
    [199, "Aggressive Cows", "Binary Search", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Aggressive+Cows"],

    [200, "Merge Intervals", "Intervals & Sorting", "Medium", "leetcode", "merge-intervals"],
    [201, "Insert Interval", "Intervals & Sorting", "Medium", "leetcode", "insert-interval"],
    [202, "Non-overlapping Intervals", "Intervals & Sorting", "Medium", "leetcode", "non-overlapping-intervals"],
    [203, "Meeting Rooms", "Intervals & Sorting", "Easy", "leetcode", "meeting-rooms"],
    [204, "Meeting Rooms II", "Intervals & Sorting", "Medium", "leetcode", "meeting-rooms-ii"],
    [205, "Minimum Number of Arrows to Burst Balloons", "Intervals & Sorting", "Medium", "leetcode", "minimum-number-of-arrows-to-burst-balloons"],
    [206, "Interval List Intersections", "Intervals & Sorting", "Medium", "leetcode", "interval-list-intersections"],
    [207, "Employee Free Time", "Intervals & Sorting", "Hard", "leetcode", "employee-free-time"],
    [208, "Car Fleet", "Intervals & Sorting", "Medium", "leetcode", "car-fleet"],
    [209, "Sort an Array", "Intervals & Sorting", "Medium", "leetcode", "sort-an-array"],
    [210, "Largest Number", "Intervals & Sorting", "Medium", "leetcode", "largest-number"],
    [211, "Count of Smaller Numbers After Self", "Intervals & Sorting", "Hard", "leetcode", "count-of-smaller-numbers-after-self"],
    [212, "Reverse Pairs", "Intervals & Sorting", "Hard", "leetcode", "reverse-pairs"],
    [213, "Count Inversions", "Intervals & Sorting", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Count+Inversions"],
    [214, "Minimum Platforms", "Intervals & Sorting", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Minimum+Platforms"],
    [215, "N meetings in one room", "Intervals & Sorting", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+N+meetings+in+one+room"],

    [216, "Maximum Subarray", "Prefix Sum & Kadane", "Medium", "leetcode", "maximum-subarray"],
    [217, "Maximum Product Subarray", "Prefix Sum & Kadane", "Medium", "leetcode", "maximum-product-subarray"],
    [218, "Subarray Sum Equals K", "Prefix Sum & Kadane", "Medium", "leetcode", "subarray-sum-equals-k"],
    [219, "Continuous Subarray Sum", "Prefix Sum & Kadane", "Medium", "leetcode", "continuous-subarray-sum"],
    [220, "Range Sum Query - Immutable", "Prefix Sum & Kadane", "Easy", "leetcode", "range-sum-query-immutable"],
    [221, "Range Sum Query 2D - Immutable", "Prefix Sum & Kadane", "Medium", "leetcode", "range-sum-query-2d-immutable"],
    [222, "Find Pivot Index", "Prefix Sum & Kadane", "Easy", "leetcode", "find-pivot-index"],
    [223, "Subarray Sums Divisible by K", "Prefix Sum & Kadane", "Medium", "leetcode", "subarray-sums-divisible-by-k"],
    [224, "Contiguous Array", "Prefix Sum & Kadane", "Medium", "leetcode", "contiguous-array"],
    [225, "Maximum Sum Circular Subarray", "Prefix Sum & Kadane", "Medium", "leetcode", "maximum-sum-circular-subarray"],
    [226, "Longest Sub-Array with Sum K", "Prefix Sum & Kadane", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Longest+Sub-Array+with+Sum+K"],
    [227, "Equilibrium Point", "Prefix Sum & Kadane", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Equilibrium+Point"],

    [228, "Number of Islands", "Graphs: BFS / DFS", "Medium", "leetcode", "number-of-islands"],
    [229, "Max Area of Island", "Graphs: BFS / DFS", "Medium", "leetcode", "max-area-of-island"],
    [230, "Clone Graph", "Graphs: BFS / DFS", "Medium", "leetcode", "clone-graph"],
    [231, "Flood Fill", "Graphs: BFS / DFS", "Easy", "leetcode", "flood-fill"],
    [232, "Rotting Oranges", "Graphs: BFS / DFS", "Medium", "leetcode", "rotting-oranges"],
    [233, "Walls and Gates", "Graphs: BFS / DFS", "Medium", "leetcode", "walls-and-gates"],
    [234, "Pacific Atlantic Water Flow", "Graphs: BFS / DFS", "Medium", "leetcode", "pacific-atlantic-water-flow"],
    [235, "Surrounded Regions", "Graphs: BFS / DFS", "Medium", "leetcode", "surrounded-regions"],
    [236, "Number of Provinces", "Graphs: BFS / DFS", "Medium", "leetcode", "number-of-provinces"],
    [237, "Word Ladder", "Graphs: BFS / DFS", "Hard", "leetcode", "word-ladder"],
    [238, "Open the Lock", "Graphs: BFS / DFS", "Medium", "leetcode", "open-the-lock"],
    [239, "Shortest Path in Binary Matrix", "Graphs: BFS / DFS", "Medium", "leetcode", "shortest-path-in-binary-matrix"],
    [240, "01 Matrix", "Graphs: BFS / DFS", "Medium", "leetcode", "01-matrix"],
    [241, "Is Graph Bipartite?", "Graphs: BFS / DFS", "Medium", "leetcode", "is-graph-bipartite"],
    [242, "Keys and Rooms", "Graphs: BFS / DFS", "Medium", "leetcode", "keys-and-rooms"],
    [243, "Find if Path Exists in Graph", "Graphs: BFS / DFS", "Easy", "leetcode", "find-if-path-exists-in-graph"],
    [244, "Number of Enclaves", "Graphs: BFS / DFS", "Medium", "leetcode", "number-of-enclaves"],
    [245, "As Far from Land as Possible", "Graphs: BFS / DFS", "Medium", "leetcode", "as-far-from-land-as-possible"],
    [246, "Number of Connected Components in an Undirected Graph", "Graphs: BFS / DFS", "Medium", "leetcode", "number-of-connected-components-in-an-undirected-graph"],
    [247, "Graph Valid Tree", "Graphs: BFS / DFS", "Medium", "leetcode", "graph-valid-tree"],
    [248, "Detonate the Maximum Bombs", "Graphs: BFS / DFS", "Medium", "leetcode", "detonate-the-maximum-bombs"],
    [249, "Shortest Bridge", "Graphs: BFS / DFS", "Medium", "leetcode", "shortest-bridge"],
    [250, "Making A Large Island", "Graphs: BFS / DFS", "Hard", "leetcode", "making-a-large-island"],
    [251, "Detect cycle in an undirected graph", "Graphs: BFS / DFS", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Detect+cycle+in+an+undirected+graph"],
    [252, "Detect cycle in a directed graph", "Graphs: BFS / DFS", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Detect+cycle+in+a+directed+graph"],

    [253, "Course Schedule", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "course-schedule"],
    [254, "Course Schedule II", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "course-schedule-ii"],
    [255, "Alien Dictionary", "Topo Sort, Union-Find & Shortest Path", "Hard", "leetcode", "alien-dictionary"],
    [256, "Find Eventual Safe States", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "find-eventual-safe-states"],
    [257, "Parallel Courses", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "parallel-courses"],
    [258, "Minimum Height Trees", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "minimum-height-trees"],
    [259, "Redundant Connection", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "redundant-connection"],
    [260, "Accounts Merge", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "accounts-merge"],
    [261, "Number of Operations to Make Network Connected", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "number-of-operations-to-make-network-connected"],
    [262, "Most Stones Removed with Same Row or Column", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "most-stones-removed-with-same-row-or-column"],
    [263, "Satisfiability of Equality Equations", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "satisfiability-of-equality-equations"],
    [264, "Network Delay Time", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "network-delay-time"],
    [265, "Cheapest Flights Within K Stops", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "cheapest-flights-within-k-stops"],
    [266, "Path With Minimum Effort", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "path-with-minimum-effort"],
    [267, "Swim in Rising Water", "Topo Sort, Union-Find & Shortest Path", "Hard", "leetcode", "swim-in-rising-water"],
    [268, "Min Cost to Connect All Points", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "min-cost-to-connect-all-points"],
    [269, "Find the City With the Smallest Number of Neighbors at a Threshold Distance", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance"],
    [270, "Evaluate Division", "Topo Sort, Union-Find & Shortest Path", "Medium", "leetcode", "evaluate-division"],
    [271, "Reconstruct Itinerary", "Topo Sort, Union-Find & Shortest Path", "Hard", "leetcode", "reconstruct-itinerary"],
    [272, "Topological sort", "Topo Sort, Union-Find & Shortest Path", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Topological+sort"],
    [273, "Implementing Dijkstra Algorithm", "Topo Sort, Union-Find & Shortest Path", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Implementing+Dijkstra+Algorithm"],
    [274, "Minimum Spanning Tree", "Topo Sort, Union-Find & Shortest Path", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Minimum+Spanning+Tree"],

    [275, "Climbing Stairs", "DP: 1D", "Easy", "leetcode", "climbing-stairs"],
    [276, "Min Cost Climbing Stairs", "DP: 1D", "Easy", "leetcode", "min-cost-climbing-stairs"],
    [277, "House Robber", "DP: 1D", "Medium", "leetcode", "house-robber"],
    [278, "House Robber II", "DP: 1D", "Medium", "leetcode", "house-robber-ii"],
    [279, "Coin Change", "DP: 1D", "Medium", "leetcode", "coin-change"],
    [280, "Coin Change II", "DP: 1D", "Medium", "leetcode", "coin-change-ii"],
    [281, "Longest Increasing Subsequence", "DP: 1D", "Medium", "leetcode", "longest-increasing-subsequence"],
    [282, "Word Break", "DP: 1D", "Medium", "leetcode", "word-break"],
    [283, "Decode Ways", "DP: 1D", "Medium", "leetcode", "decode-ways"],
    [284, "Partition Equal Subset Sum", "DP: 1D", "Medium", "leetcode", "partition-equal-subset-sum"],
    [285, "Target Sum", "DP: 1D", "Medium", "leetcode", "target-sum"],
    [286, "Perfect Squares", "DP: 1D", "Medium", "leetcode", "perfect-squares"],
    [287, "Jump Game", "DP: 1D", "Medium", "leetcode", "jump-game"],
    [288, "Jump Game II", "DP: 1D", "Medium", "leetcode", "jump-game-ii"],
    [289, "Combination Sum IV", "DP: 1D", "Medium", "leetcode", "combination-sum-iv"],
    [290, "Best Time to Buy and Sell Stock with Cooldown", "DP: 1D", "Medium", "leetcode", "best-time-to-buy-and-sell-stock-with-cooldown"],
    [291, "Delete and Earn", "DP: 1D", "Medium", "leetcode", "delete-and-earn"],
    [292, "Russian Doll Envelopes", "DP: 1D", "Hard", "leetcode", "russian-doll-envelopes"],
    [293, "Maximum Length of Pair Chain", "DP: 1D", "Medium", "leetcode", "maximum-length-of-pair-chain"],
    [294, "0 - 1 Knapsack Problem", "DP: 1D", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+0+-+1+Knapsack+Problem"],
    [295, "Subset Sum Problem", "DP: 1D", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Subset+Sum+Problem"],
    [296, "Rod Cutting", "DP: 1D", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Rod+Cutting"],

    [297, "Unique Paths", "DP: 2D & Strings", "Medium", "leetcode", "unique-paths"],
    [298, "Unique Paths II", "DP: 2D & Strings", "Medium", "leetcode", "unique-paths-ii"],
    [299, "Minimum Path Sum", "DP: 2D & Strings", "Medium", "leetcode", "minimum-path-sum"],
    [300, "Longest Common Subsequence", "DP: 2D & Strings", "Medium", "leetcode", "longest-common-subsequence"],
    [301, "Edit Distance", "DP: 2D & Strings", "Medium", "leetcode", "edit-distance"],
    [302, "Longest Palindromic Substring", "DP: 2D & Strings", "Medium", "leetcode", "longest-palindromic-substring"],
    [303, "Palindromic Substrings", "DP: 2D & Strings", "Medium", "leetcode", "palindromic-substrings"],
    [304, "Longest Palindromic Subsequence", "DP: 2D & Strings", "Medium", "leetcode", "longest-palindromic-subsequence"],
    [305, "Interleaving String", "DP: 2D & Strings", "Medium", "leetcode", "interleaving-string"],
    [306, "Distinct Subsequences", "DP: 2D & Strings", "Hard", "leetcode", "distinct-subsequences"],
    [307, "Regular Expression Matching", "DP: 2D & Strings", "Hard", "leetcode", "regular-expression-matching"],
    [308, "Wildcard Matching", "DP: 2D & Strings", "Hard", "leetcode", "wildcard-matching"],
    [309, "Maximal Square", "DP: 2D & Strings", "Medium", "leetcode", "maximal-square"],
    [310, "Triangle", "DP: 2D & Strings", "Medium", "leetcode", "triangle"],
    [311, "Burst Balloons", "DP: 2D & Strings", "Hard", "leetcode", "burst-balloons"],
    [312, "Best Time to Buy and Sell Stock III", "DP: 2D & Strings", "Hard", "leetcode", "best-time-to-buy-and-sell-stock-iii"],
    [313, "Best Time to Buy and Sell Stock IV", "DP: 2D & Strings", "Hard", "leetcode", "best-time-to-buy-and-sell-stock-iv"],
    [314, "Dungeon Game", "DP: 2D & Strings", "Hard", "leetcode", "dungeon-game"],
    [315, "Minimum Falling Path Sum", "DP: 2D & Strings", "Medium", "leetcode", "minimum-falling-path-sum"],
    [316, "Longest String Chain", "DP: 2D & Strings", "Medium", "leetcode", "longest-string-chain"],
    [317, "Number of Longest Increasing Subsequence", "DP: 2D & Strings", "Medium", "leetcode", "number-of-longest-increasing-subsequence"],
    [318, "Matrix Chain Multiplication", "DP: 2D & Strings", "Hard", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Matrix+Chain+Multiplication"],
    [319, "Longest Common Substring", "DP: 2D & Strings", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Longest+Common+Substring"],

    [320, "Subsets", "Backtracking", "Medium", "leetcode", "subsets"],
    [321, "Subsets II", "Backtracking", "Medium", "leetcode", "subsets-ii"],
    [322, "Permutations", "Backtracking", "Medium", "leetcode", "permutations"],
    [323, "Permutations II", "Backtracking", "Medium", "leetcode", "permutations-ii"],
    [324, "Combination Sum", "Backtracking", "Medium", "leetcode", "combination-sum"],
    [325, "Combination Sum II", "Backtracking", "Medium", "leetcode", "combination-sum-ii"],
    [326, "Combination Sum III", "Backtracking", "Medium", "leetcode", "combination-sum-iii"],
    [327, "Combinations", "Backtracking", "Medium", "leetcode", "combinations"],
    [328, "Letter Combinations of a Phone Number", "Backtracking", "Medium", "leetcode", "letter-combinations-of-a-phone-number"],
    [329, "Generate Parentheses", "Backtracking", "Medium", "leetcode", "generate-parentheses"],
    [330, "Word Search", "Backtracking", "Medium", "leetcode", "word-search"],
    [331, "Palindrome Partitioning", "Backtracking", "Medium", "leetcode", "palindrome-partitioning"],
    [332, "N-Queens", "Backtracking", "Hard", "leetcode", "n-queens"],
    [333, "Sudoku Solver", "Backtracking", "Hard", "leetcode", "sudoku-solver"],
    [334, "Restore IP Addresses", "Backtracking", "Medium", "leetcode", "restore-ip-addresses"],
    [335, "Word Search II", "Backtracking", "Hard", "leetcode", "word-search-ii"],
    [336, "Rat in a Maze Problem - I", "Backtracking", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Rat+in+a+Maze+Problem+-+I"],

    [337, "Gas Station", "Greedy", "Medium", "leetcode", "gas-station"],
    [338, "Hand of Straights", "Greedy", "Medium", "leetcode", "hand-of-straights"],
    [339, "Merge Triplets to Form Target Triplet", "Greedy", "Medium", "leetcode", "merge-triplets-to-form-target-triplet"],
    [340, "Partition Labels", "Greedy", "Medium", "leetcode", "partition-labels"],
    [341, "Valid Parenthesis String", "Greedy", "Medium", "leetcode", "valid-parenthesis-string"],
    [342, "Candy", "Greedy", "Hard", "leetcode", "candy"],
    [343, "Assign Cookies", "Greedy", "Easy", "leetcode", "assign-cookies"],
    [344, "Lemonade Change", "Greedy", "Easy", "leetcode", "lemonade-change"],
    [345, "Queue Reconstruction by Height", "Greedy", "Medium", "leetcode", "queue-reconstruction-by-height"],
    [346, "Maximum Units on a Truck", "Greedy", "Easy", "leetcode", "maximum-units-on-a-truck"],
    [347, "Two City Scheduling", "Greedy", "Medium", "leetcode", "two-city-scheduling"],
    [348, "Fractional Knapsack", "Greedy", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Fractional+Knapsack"],
    [349, "Job Sequencing Problem", "Greedy", "Medium", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Job+Sequencing+Problem"],
    [350, "Activity Selection", "Greedy", "Easy", "gfg", "https://www.google.com/search?q=geeksforgeeks+practice+Activity+Selection"],

    [351, "LRU Cache", "Design", "Medium", "leetcode", "lru-cache"],
    [352, "LFU Cache", "Design", "Hard", "leetcode", "lfu-cache"],
    [353, "Insert Delete GetRandom O(1)", "Design", "Medium", "leetcode", "insert-delete-getrandom-o1"],
    [354, "Insert Delete GetRandom O(1) - Duplicates allowed", "Design", "Hard", "leetcode", "insert-delete-getrandom-o1-duplicates-allowed"],
    [355, "Design Hit Counter", "Design", "Medium", "leetcode", "design-hit-counter"],
    [356, "Logger Rate Limiter", "Design", "Easy", "leetcode", "logger-rate-limiter"],
    [357, "Time Based Key-Value Store", "Design", "Medium", "leetcode", "time-based-key-value-store"],
    [358, "Design HashMap", "Design", "Easy", "leetcode", "design-hashmap"],
    [359, "Design HashSet", "Design", "Easy", "leetcode", "design-hashset"],
    [360, "Design Circular Queue", "Design", "Medium", "leetcode", "design-circular-queue"],
    [361, "Snapshot Array", "Design", "Medium", "leetcode", "snapshot-array"],
    [362, "Design Browser History", "Design", "Medium", "leetcode", "design-browser-history"],
    [363, "Design Underground System", "Design", "Medium", "leetcode", "design-underground-system"],
    [364, "Max Stack", "Design", "Hard", "leetcode", "max-stack"],
    [365, "Moving Average from Data Stream", "Design", "Easy", "leetcode", "moving-average-from-data-stream"],
    [366, "All O`one Data Structure", "Design", "Hard", "leetcode", "all-oone-data-structure"],

    [367, "Implement Trie (Prefix Tree)", "Trie & Strings", "Medium", "leetcode", "implement-trie-prefix-tree"],
    [368, "Design Add and Search Words Data Structure", "Trie & Strings", "Medium", "leetcode", "design-add-and-search-words-data-structure"],
    [369, "Longest Word in Dictionary", "Trie & Strings", "Medium", "leetcode", "longest-word-in-dictionary"],
    [370, "Replace Words", "Trie & Strings", "Medium", "leetcode", "replace-words"],
    [371, "Search Suggestions System", "Trie & Strings", "Medium", "leetcode", "search-suggestions-system"],
    [372, "Maximum XOR of Two Numbers in an Array", "Trie & Strings", "Medium", "leetcode", "maximum-xor-of-two-numbers-in-an-array"],
    [373, "String to Integer (atoi)", "Trie & Strings", "Medium", "leetcode", "string-to-integer-atoi"],
    [374, "Find the Index of the First Occurrence in a String", "Trie & Strings", "Easy", "leetcode", "find-the-index-of-the-first-occurrence-in-a-string"],
    [375, "Longest Happy Prefix", "Trie & Strings", "Hard", "leetcode", "longest-happy-prefix"],
    [376, "Zigzag Conversion", "Trie & Strings", "Medium", "leetcode", "zigzag-conversion"],
    [377, "Compare Version Numbers", "Trie & Strings", "Medium", "leetcode", "compare-version-numbers"],
    [378, "Multiply Strings", "Trie & Strings", "Medium", "leetcode", "multiply-strings"],

    [379, "Single Number", "Bit Manipulation & Math", "Easy", "leetcode", "single-number"],
    [380, "Single Number II", "Bit Manipulation & Math", "Medium", "leetcode", "single-number-ii"],
    [381, "Number of 1 Bits", "Bit Manipulation & Math", "Easy", "leetcode", "number-of-1-bits"],
    [382, "Reverse Bits", "Bit Manipulation & Math", "Easy", "leetcode", "reverse-bits"],
    [383, "Counting Bits", "Bit Manipulation & Math", "Easy", "leetcode", "counting-bits"],
    [384, "Sum of Two Integers", "Bit Manipulation & Math", "Medium", "leetcode", "sum-of-two-integers"],
    [385, "Power of Two", "Bit Manipulation & Math", "Easy", "leetcode", "power-of-two"],
    [386, "Pow(x, n)", "Bit Manipulation & Math", "Medium", "leetcode", "powx-n"],
    [387, "Reverse Integer", "Bit Manipulation & Math", "Medium", "leetcode", "reverse-integer"],
    [388, "Happy Number", "Bit Manipulation & Math", "Easy", "leetcode", "happy-number"],

    [389, "Second Highest Salary", "SQL", "Medium", "leetcode", "second-highest-salary"],
    [390, "Nth Highest Salary", "SQL", "Medium", "leetcode", "nth-highest-salary"],
    [391, "Department Highest Salary", "SQL", "Medium", "leetcode", "department-highest-salary"],
    [392, "Department Top Three Salaries", "SQL", "Hard", "leetcode", "department-top-three-salaries"],
    [393, "Rank Scores", "SQL", "Medium", "leetcode", "rank-scores"],
    [394, "Consecutive Numbers", "SQL", "Medium", "leetcode", "consecutive-numbers"],
    [395, "Customers Who Never Order", "SQL", "Easy", "leetcode", "customers-who-never-order"],
    [396, "Duplicate Emails", "SQL", "Easy", "leetcode", "duplicate-emails"],
    [397, "Delete Duplicate Emails", "SQL", "Easy", "leetcode", "delete-duplicate-emails"],
    [398, "Employees Earning More Than Their Managers", "SQL", "Easy", "leetcode", "employees-earning-more-than-their-managers"],
    [399, "Game Play Analysis IV", "SQL", "Medium", "leetcode", "game-play-analysis-iv"],
    [400, "Trips and Users", "SQL", "Hard", "leetcode", "trips-and-users"]
].map(([id, title, topic, difficulty, platform, ref]) => ({
    id,
    title,
    topic,
    difficulty,
    platform,
    slug: platform === "leetcode" ? ref : null,
    url: platform === "leetcode"
        ? `https://leetcode.com/problems/${ref}/`
        : ref
}));

const STORAGE_KEY = "algotrack-progress-v1";
const PENDING_PRACTICE_KEY = "algotrack-pending-practice";

// Deploy worker/leetcode-sync.js and paste its URL here for reliable syncing.
// The public instance below works out of the box but is shared and rate-limited.
const LEETCODE_SYNC_URL = "https://alfa-leetcode-api.onrender.com";

const MIN_PRACTICE_MS = 15 * 1000;
const MAX_PRACTICE_MS = 12 * 60 * 60 * 1000;
const AUTO_SYNC_INTERVAL_MS = 2 * 60 * 1000;
const SYNC_TIMEOUT_MS = 60 * 1000;

const PROBLEMS_BY_URL = new Map(
    PROBLEMS.map(problem => [problem.url, problem])
);

const PROBLEMS_BY_SLUG = new Map(
    PROBLEMS
        .filter(problem => problem.slug)
        .map(problem => [problem.slug, problem])
);

const defaultState = () => ({
    items: {},
    notes: {},
    leetcode: {
        username: "",
        lastSyncAt: null,
        error: null
    },
    updatedAt: null
});

let state = loadState();
let activeView = "overview";
let notesProblemId = null;
let toastTimer;
let syncInFlight = false;


/* ==========================================
   STORAGE AND PROGRESS
   ========================================== */

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        const base = defaultState();

        return {
            ...base,
            ...(saved || {}),
            leetcode: {
                ...base.leetcode,
                ...(saved?.leetcode || {})
            }
        };
    } catch (error) {
        return defaultState();
    }
}

function saveState() {
    state.updatedAt = new Date().toISOString();

    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );
    } catch (error) {
        showToast("Unable to save progress. Export a backup.");
    }

    updateDashboard();
}

function getItem(id) {
    return state.items[id] || {
        status: "todo",
        revision: false,
        solvedAt: null,
        updatedAt: null
    };
}

function updateItem(id, patch) {
    const oldItem = getItem(id);

    state.items[id] = {
        ...oldItem,
        ...patch,
        updatedAt: new Date().toISOString()
    };

    if (patch.status === "solved" && !oldItem.solvedAt) {
        state.items[id].solvedAt = new Date().toISOString();
    }

    if (
        patch.status !== undefined &&
        patch.status !== "solved"
    ) {
        state.items[id].solvedAt = null;
    }

    saveState();
}

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function getCounts(list = PROBLEMS) {
    const counts = {
        total: list.length,
        solved: 0,
        attempted: 0,
        todo: 0,
        revision: 0
    };

    list.forEach(problem => {
        const item = getItem(problem.id);

        counts[item.status] =
            (counts[item.status] || 0) + 1;

        if (item.revision) {
            counts.revision++;
        }
    });

    return counts;
}

function percent(value, total) {
    return total ? Math.round((value / total) * 100) : 0;
}

function statusLabel(status) {
    if (status === "solved") return "Solved";
    if (status === "attempted") return "Attempted";

    return "Not started";
}

function statusClass(status) {
    if (status === "solved") return "solved";
    if (status === "attempted") return "attempted";

    return "todo";
}

function difficultyClass(difficulty) {
    return difficulty.toLowerCase();
}

// Keeps the roadmap order of the problem sheet
function uniqueTopics() {
    return [
        ...new Set(PROBLEMS.map(problem => problem.topic))
    ];
}

function platformLabel(problem) {
    return problem.platform === "leetcode" ? "LeetCode" : "GFG";
}

function problemNumber(problem) {
    return String(problem.id).padStart(3, "0");
}


/* ==========================================
   NOTIFICATIONS
   ========================================== */

function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}


/* ==========================================
   NAVIGATION
   ========================================== */

function switchView(view) {
    activeView = view;

    document.querySelectorAll(".view").forEach(element => {
        element.classList.remove("active-view");
    });

    const targetView = document.getElementById(`${view}View`);

    if (targetView) {
        targetView.classList.add("active-view");
    }

    document.querySelectorAll(".nav-item[data-view]").forEach(element => {
        element.classList.toggle(
            "active",
            element.dataset.view === view
        );
    });

    const names = {
        overview: "Overview",
        problems: "Problem list",
        topics: "Topic progress",
        revision: "Revision queue"
    };

    document.getElementById("breadcrumb").textContent =
        names[view] || "Overview";

    document.getElementById("sidebar").classList.remove("open");

    if (view === "problems") renderProblems();
    if (view === "topics") renderTopics();
    if (view === "revision") renderRevision();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   DASHBOARD
   ========================================== */

function updateDashboard() {
    const counts = getCounts();

    const completion = percent(
        counts.solved,
        counts.total
    );

    document.getElementById("totalStat").textContent =
        counts.total;

    document.getElementById("solvedStat").textContent =
        counts.solved;

    document.getElementById("attemptedStat").textContent =
        counts.attempted;

    document.getElementById("todoStat").textContent =
        counts.todo;

    document.getElementById("solvedPercent").textContent =
        `${completion}%`;

    document.getElementById("completionNumber").textContent =
        `${completion}%`;

    document.getElementById("progressRing")
        .style.setProperty("--progress", `${completion}%`);

    document.getElementById("legendSolved").textContent =
        counts.solved;

    document.getElementById("legendAttempted").textContent =
        counts.attempted;

    document.getElementById("legendTodo").textContent =
        counts.todo;

    document.getElementById("navTotal").textContent =
        counts.total;

    let message;

    if (completion === 100) {
        message =
            "Incredible! Every problem in this sheet is solved. Keep revising to retain the patterns.";
    } else if (counts.solved === 0) {
        message =
            "Start with one easy problem. Your progress will show up here.";
    } else {
        message =
            `You've solved ${counts.solved} of ${counts.total} problems. Keep going, one focused session at a time.`;
    }

    document.getElementById("completionMessage").textContent =
        message;

    renderTopicPreview();
    renderRecent();
    renderSyncCard();

    if (activeView === "problems") renderProblems();
    if (activeView === "topics") renderTopics();
    if (activeView === "revision") renderRevision();
}


/* ==========================================
   TOPIC PREVIEW
   ========================================== */

function renderTopicPreview() {
    const target = document.getElementById("topicPreview");

    const topics = uniqueTopics()
        .map(topic => {
            const problems = PROBLEMS.filter(
                problem => problem.topic === topic
            );

            const counts = getCounts(problems);

            return {
                topic,
                ...counts,
                pct: percent(counts.solved, counts.total)
            };
        })
        .sort((a, b) => a.pct - b.pct)
        .slice(0, 5);

    target.innerHTML = topics.map(topic => `
    <div class="topic-row">
      <span class="topic-name">
        ${escapeHtml(topic.topic)}
      </span>

      <div class="topic-track">
        <div
          class="topic-fill"
          style="width:${topic.pct}%"
        ></div>
      </div>

      <span class="topic-percent">
        ${topic.pct}%
      </span>
    </div>
  `).join("");
}


/* ==========================================
   RECENTLY UPDATED PROBLEMS
   ========================================== */

function renderRecent() {
    const target = document.getElementById("recentProblems");

    const recentProblems = PROBLEMS
        .filter(problem => getItem(problem.id).updatedAt)
        .sort((a, b) => {
            return new Date(getItem(b.id).updatedAt) -
                new Date(getItem(a.id).updatedAt);
        })
        .slice(0, 4);

    if (recentProblems.length === 0) {
        target.innerHTML = `
      <div class="empty-recent">
        No activity yet. Mark a problem as attempted or solved
        and it will appear here.
      </div>
    `;

        return;
    }

    target.innerHTML = recentProblems.map(problem => {
        const item = getItem(problem.id);

        return `
      <div class="recent-item">
        <div class="problem-number">
          ${problem.id}
        </div>

        <div>
          <a
            class="recent-title"
            href="${problem.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${escapeHtml(problem.title)}
          </a>

          <div class="recent-meta">
            ${escapeHtml(problem.topic)}
          </div>
        </div>

        <span class="status-pill ${statusClass(item.status)}">
          ${statusLabel(item.status)}
        </span>

        <span class="difficulty ${difficultyClass(problem.difficulty)}">
          ${problem.difficulty}
        </span>
      </div>
    `;
    }).join("");
}


/* ==========================================
   PROBLEM FILTERS
   ========================================== */

function fillTopicFilter() {
    const select = document.getElementById("topicFilter");

    select.innerHTML = `
    <option value="all">All topics</option>
    ${uniqueTopics().map(topic => `
      <option value="${escapeHtml(topic)}">
        ${escapeHtml(topic)}
      </option>
    `).join("")}
  `;
}

function filteredProblems() {
    const query = document
        .getElementById("searchInput")
        .value.trim()
        .toLowerCase();

    const topic =
        document.getElementById("topicFilter").value;

    const difficulty =
        document.getElementById("difficultyFilter").value;

    const status =
        document.getElementById("statusFilter").value;

    return PROBLEMS.filter(problem => {
        const item = getItem(problem.id);

        const searchText = `
      ${problem.title}
      ${problem.topic}
      ${problem.difficulty}
    `.toLowerCase();

        const matchesSearch =
            !query || searchText.includes(query);

        const matchesTopic =
            topic === "all" || problem.topic === topic;

        const matchesDifficulty =
            difficulty === "all" ||
            problem.difficulty === difficulty;

        const matchesStatus =
            status === "all" ||
            (
                status === "revision"
                    ? item.revision
                    : item.status === status
            );

        return (
            matchesSearch &&
            matchesTopic &&
            matchesDifficulty &&
            matchesStatus
        );
    });
}


/* ==========================================
   PROBLEM TABLE
   ========================================== */

function renderProblems() {
    const problems = filteredProblems();

    const tableBody =
        document.getElementById("problemTableBody");

    document.getElementById("problemSummary").innerHTML = `
    Showing <strong>${problems.length}</strong>
    of <strong>${PROBLEMS.length}</strong> problems
  `;

    document.getElementById("tableCount").textContent =
        `Showing ${problems.length} problem${problems.length === 1 ? "" : "s"}`;

    document.getElementById("emptyState").hidden =
        problems.length > 0;

    document.querySelector(
        "#problemsView .table-card"
    ).style.display = problems.length ? "block" : "none";

    tableBody.innerHTML = problems.map(problem => {
        const item = getItem(problem.id);

        let statusSymbol = "○";

        if (item.status === "attempted") {
            statusSymbol = "◷";
        }

        if (item.status === "solved") {
            statusSymbol = "✓";
        }

        return `
      <tr>
        <td>
          <button
            class="status-toggle ${item.status}"
            data-status-id="${problem.id}"
            title="Cycle status: Not started, Attempted, Solved"
            aria-label="Change status for ${escapeHtml(problem.title)}"
          >
            ${statusSymbol}
          </button>
        </td>

        <td class="problem-cell">
          <a
            class="problem-title"
            href="${problem.url}"
            target="_blank"
            rel="noopener noreferrer"
            title="Open on ${platformLabel(problem)}"
          >
            ${escapeHtml(problem.title)}
          </a>

          <div class="problem-sub">
            #${problemNumber(problem)}
            · ${statusLabel(item.status)}
          </div>
        </td>

        <td>
          <span class="topic-tag">
            ${escapeHtml(problem.topic)}
          </span>
        </td>

        <td>
          <span class="difficulty ${difficultyClass(problem.difficulty)}">
            ${problem.difficulty}
          </span>
        </td>

        <td>
          <div class="row-actions">
            <button
              class="revision-toggle ${item.revision ? "active" : ""}"
              data-revision-id="${problem.id}"
              title="${item.revision ? "Remove from" : "Add to"} revision queue"
              aria-label="Toggle revision for ${escapeHtml(problem.title)}"
            >
              ↻
            </button>

            <button
              class="notes-button"
              data-notes-id="${problem.id}"
              title="Add or edit notes"
              aria-label="Edit notes for ${escapeHtml(problem.title)}"
            >
              ▤
            </button>
          </div>
        </td>

        <td>
          <a
            class="practice-link"
            href="${problem.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solve on ${platformLabel(problem)} ↗
          </a>
        </td>
      </tr>
    `;
    }).join("");
}


/* ==========================================
   TOPIC PROGRESS PAGE
   ========================================== */

function renderTopics() {
    const topics = uniqueTopics().map(topic => {
        const problems = PROBLEMS.filter(
            problem => problem.topic === topic
        );

        const counts = getCounts(problems);

        return {
            topic,
            ...counts,
            pct: percent(counts.solved, counts.total),
            easy: problems.filter(p => p.difficulty === "Easy").length,
            medium: problems.filter(p => p.difficulty === "Medium").length,
            hard: problems.filter(p => p.difficulty === "Hard").length
        };
    });

    const overallCounts = getCounts();

    document.getElementById("topicStats").innerHTML = `
    <div class="topic-overview-stat">
      <span>Total topics</span>
      <strong>${topics.length}</strong>
    </div>

    <div class="topic-overview-stat">
      <span>Problems solved</span>
      <strong>
        ${overallCounts.solved}
        <small style="font:500 11px 'DM Sans';color:var(--muted)">
          / ${overallCounts.total}
        </small>
      </strong>
    </div>

    <div class="topic-overview-stat">
      <span>Topics fully completed</span>
      <strong>
        ${topics.filter(topic => topic.pct === 100).length}
      </strong>
    </div>
  `;

    document.getElementById("topicGrid").innerHTML =
        topics.map(topic => `
      <article class="topic-detail-card">

        <div class="topic-detail-top">
          <div>
            <h3>${escapeHtml(topic.topic)}</h3>
            <p>${topic.total} practice problems</p>
          </div>

          <span class="topic-detail-count">
            ${topic.solved}/${topic.total} solved
          </span>
        </div>

        <div class="topic-detail-progress">
          <span>Completion</span>
          <strong>${topic.pct}%</strong>
        </div>

        <div class="mini-track">
          <div
            class="mini-fill"
            style="width:${topic.pct}%"
          ></div>
        </div>

        <div class="topic-difficulty">
          <span>Easy <b>${topic.easy}</b></span>
          <span>Medium <b>${topic.medium}</b></span>
          <span>Hard <b>${topic.hard}</b></span>
        </div>

        <button
          class="topic-open"
          data-topic-open="${escapeHtml(topic.topic)}"
        >
          Practice this topic →
        </button>

      </article>
    `).join("");
}


/* ==========================================
   REVISION QUEUE
   ========================================== */

function renderRevision() {
    const problems = PROBLEMS.filter(
        problem => getItem(problem.id).revision
    );

    const tableBody =
        document.getElementById("revisionTableBody");

    tableBody.innerHTML = problems.map(problem => {
        const notes = state.notes[problem.id] || "";

        const shortNotes = notes.length > 60
            ? `${notes.slice(0, 60)}…`
            : notes;

        return `
      <tr>
        <td>
          <a
            class="problem-title"
            href="${problem.url}"
            target="_blank"
            rel="noopener noreferrer"
            title="Open on ${platformLabel(problem)}"
          >
            ${escapeHtml(problem.title)}
          </a>

          <div class="problem-sub">
            #${problemNumber(problem)}
          </div>
        </td>

        <td>
          <span class="topic-tag">
            ${escapeHtml(problem.topic)}
          </span>
        </td>

        <td>
          <span class="difficulty ${difficultyClass(problem.difficulty)}">
            ${problem.difficulty}
          </span>
        </td>

        <td>
          ${shortNotes
                ? escapeHtml(shortNotes)
                : '<span style="color:var(--subtle)">No notes yet</span>'
            }
        </td>

        <td>
          <div class="row-actions">
            <a
              class="practice-link"
              href="${problem.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Practice ↗
            </a>

            <button
              class="notes-button"
              data-notes-id="${problem.id}"
              title="Edit notes"
            >
              ▤
            </button>

            <button
              class="revision-toggle active"
              data-revision-id="${problem.id}"
              title="Remove from revision queue"
            >
              ↻
            </button>
          </div>
        </td>
      </tr>
    `;
    }).join("");

    document.getElementById("revisionEmpty").style.display =
        problems.length ? "none" : "block";

    document.querySelector(
        "#revisionView .table-card"
    ).style.display = problems.length ? "block" : "none";
}


/* ==========================================
   PROBLEM NOTES
   ========================================== */

function openNotes(id) {
    const problem = PROBLEMS.find(
        item => item.id === id
    );

    if (!problem) return;

    notesProblemId = id;

    document.getElementById("notesTitle").textContent =
        problem.title;

    document.getElementById("notesText").value =
        state.notes[id] || "";

    document.getElementById("notesDialog").showModal();
}


/* ==========================================
   "DID YOU SOLVE IT?" PROMPT
   Remembers the problem the user opened and asks
   about it when they come back to this tab.
   ========================================== */

function rememberPractice(problem) {
    try {
        localStorage.setItem(
            PENDING_PRACTICE_KEY,
            JSON.stringify({ id: problem.id, openedAt: Date.now() })
        );
    } catch (error) {
        // Prompt is a convenience; ignore storage failures
    }
}

function takePendingPractice() {
    try {
        const pending = JSON.parse(
            localStorage.getItem(PENDING_PRACTICE_KEY)
        );

        if (!pending) return null;

        const elapsed = Date.now() - pending.openedAt;

        // Came straight back: probably didn't solve it yet, ask next time
        if (elapsed < MIN_PRACTICE_MS) return null;

        localStorage.removeItem(PENDING_PRACTICE_KEY);

        return elapsed > MAX_PRACTICE_MS ? null : pending;
    } catch (error) {
        return null;
    }
}

function checkPendingPractice() {
    const dialog = document.getElementById("practiceDialog");

    if (dialog.open) return;

    const pending = takePendingPractice();

    if (!pending) return;

    const problem = PROBLEMS.find(item => item.id === pending.id);

    if (!problem || getItem(problem.id).status === "solved") return;

    dialog.dataset.problemId = problem.id;
    dialog.returnValue = "";

    document.getElementById("practiceProblem").textContent =
        problem.title;

    dialog.showModal();
}


/* ==========================================
   LEETCODE SYNC
   Reads the user's recent accepted submissions
   (LeetCode exposes the last 20 publicly) and marks
   matching problems as solved.
   ========================================== */

function relativeTime(isoDate) {
    const minutes = Math.round(
        (Date.now() - new Date(isoDate)) / 60000
    );

    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (minutes < 1440) return `${Math.round(minutes / 60)}h ago`;

    return `${Math.round(minutes / 1440)}d ago`;
}

function renderSyncCard() {
    const { username, lastSyncAt, error } = state.leetcode;

    const status = document.getElementById("syncStatus");
    const syncButton = document.getElementById("syncNowBtn");

    document.getElementById("syncSettingsBtn").hidden = !username;
    syncButton.disabled = syncInFlight;

    if (!username) {
        status.textContent = "Auto-mark problems you solve";
        syncButton.textContent = "Connect LeetCode";
        return;
    }

    syncButton.textContent = syncInFlight ? "Syncing…" : "Sync now";

    if (syncInFlight) {
        status.textContent = `@${username} · syncing…`;
    } else if (error) {
        status.textContent = `@${username} · last sync failed`;
    } else if (lastSyncAt) {
        status.textContent = `@${username} · synced ${relativeTime(lastSyncAt)}`;
    } else {
        status.textContent = `@${username} · not synced yet`;
    }
}

async function fetchAcceptedSubmissions(username) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), SYNC_TIMEOUT_MS);

    try {
        const response = await fetch(
            `${LEETCODE_SYNC_URL}/${encodeURIComponent(username)}/acSubmission?limit=20`,
            { signal: controller.signal }
        );

        if (response.status === 404) {
            throw new Error(`LeetCode user "${username}" not found.`);
        }

        if (!response.ok) {
            throw new Error("Sync service is busy. Try again in a few minutes.");
        }

        const data = await response.json();

        if (!Array.isArray(data.submission)) {
            throw new Error("Couldn't read submissions. Is the profile public?");
        }

        return data.submission;
    } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("Sync timed out. Try again in a minute.");
        }

        if (error instanceof TypeError) {
            throw new Error("Couldn't reach the sync service.");
        }

        throw error;
    } finally {
        clearTimeout(timer);
    }
}

function applyAcceptedSubmissions(submissions) {
    const newlySolved = [];

    submissions.forEach(submission => {
        const problem = PROBLEMS_BY_SLUG.get(submission.titleSlug);

        if (!problem) return;

        const item = getItem(problem.id);
        const solvedAt = new Date(
            Number(submission.timestamp) * 1000
        ).toISOString();

        if (item.status === "solved") return;

        // The user changed this problem by hand after that submission
        if (item.updatedAt && item.updatedAt > solvedAt) return;

        state.items[problem.id] = {
            ...item,
            status: "solved",
            solvedAt,
            updatedAt: new Date().toISOString()
        };

        newlySolved.push(problem);
    });

    return newlySolved;
}

async function syncLeetCode({ quiet = false } = {}) {
    const username = state.leetcode.username;

    if (!username || syncInFlight) return;

    syncInFlight = true;
    renderSyncCard();

    if (!quiet) showToast(`Syncing @${username}…`);

    try {
        const submissions = await fetchAcceptedSubmissions(username);

        // The user may have disconnected while the request was running
        if (state.leetcode.username !== username) return;

        const newlySolved = applyAcceptedSubmissions(submissions);

        state.leetcode.lastSyncAt = new Date().toISOString();
        state.leetcode.error = null;

        if (newlySolved.length === 1) {
            showToast(`Synced: ${newlySolved[0].title} marked solved.`);
        } else if (newlySolved.length > 1) {
            showToast(`Synced: ${newlySolved.length} problems marked solved.`);
        } else if (!quiet) {
            showToast("Synced. No new solves from this problem list.");
        }
    } catch (error) {
        state.leetcode.error = error.message;

        if (!quiet) showToast(error.message);
    } finally {
        syncInFlight = false;
        saveState();
    }
}

function autoSync() {
    const { username, lastSyncAt } = state.leetcode;

    if (!username) return;

    if (
        !lastSyncAt ||
        Date.now() - new Date(lastSyncAt) > AUTO_SYNC_INTERVAL_MS
    ) {
        syncLeetCode({ quiet: true });
    }
}

function openSyncSettings() {
    const dialog = document.getElementById("syncDialog");

    document.getElementById("leetcodeUsername").value =
        state.leetcode.username;

    document.getElementById("disconnectBtn").hidden =
        !state.leetcode.username;

    dialog.returnValue = "";
    dialog.showModal();
}

function saveSyncSettings() {
    const username = document
        .getElementById("leetcodeUsername")
        .value.trim()
        .replace(/^@/, "");

    if (!/^[\w.-]{1,40}$/.test(username)) {
        showToast("Enter a valid LeetCode username.");
        return;
    }

    state.leetcode = {
        username,
        lastSyncAt: null,
        error: null
    };

    saveState();
    syncLeetCode();
}


/* ==========================================
   EXPORT AND IMPORT
   ========================================== */

function exportProgress() {
    const backup = {
        app: "AlgoTrack",
        version: 1,
        exportedAt: new Date().toISOString(),
        state
    };

    const blob = new Blob(
        [JSON.stringify(backup, null, 2)],
        { type: "application/json" }
    );

    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "algotrack-progress.json";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(downloadUrl);

    showToast("Progress backup exported.");
}

function importProgress(file) {
    const reader = new FileReader();

    reader.onload = () => {
        try {
            const data = JSON.parse(reader.result);
            const imported = data.state || data;

            if (
                !imported.items ||
                typeof imported.items !== "object"
            ) {
                throw new Error("Invalid backup format");
            }

            state = {
                ...defaultState(),
                ...imported
            };

            saveState();
            renderProblems();

            showToast("Progress imported successfully.");
        } catch (error) {
            showToast(
                "Invalid backup file. Please select an AlgoTrack JSON backup."
            );
        }
    };

    reader.onerror = () => {
        showToast("Could not read the selected file.");
    };

    reader.readAsText(file);
}


/* ==========================================
   RESET PROGRESS
   ========================================== */

function resetProgress() {
    const confirmed = confirm(
        "Reset all statuses, notes, and revision flags? " +
        "Export a backup first if you want to keep your progress."
    );

    if (!confirmed) return;

    // Keep the LeetCode connection; only progress is reset
    state = {
        ...defaultState(),
        leetcode: state.leetcode
    };

    saveState();
    renderProblems();

    showToast("Progress reset.");
}


/* ==========================================
   EVENT LISTENERS
   ========================================== */

document.addEventListener("click", event => {

    // Opening a problem: ask about it when the user returns
    const problemLink = event.target.closest("a[href]");
    const practicedProblem = problemLink &&
        PROBLEMS_BY_URL.get(problemLink.getAttribute("href"));

    if (practicedProblem) {
        rememberPractice(practicedProblem);
        return;
    }

    // Main navigation
    const viewButton = event.target.closest("[data-view]");

    if (viewButton) {
        switchView(viewButton.dataset.view);
        return;
    }

    // Buttons that navigate to a view
    const gotoButton = event.target.closest("[data-goto]");

    if (gotoButton) {
        switchView(gotoButton.dataset.goto);
        return;
    }

    // Cycle problem status
    const statusButton = event.target.closest("[data-status-id]");

    if (statusButton) {
        const id = Number(statusButton.dataset.statusId);
        const currentStatus = getItem(id).status;

        const nextStatus = {
            todo: "attempted",
            attempted: "solved",
            solved: "todo"
        }[currentStatus];

        updateItem(id, {
            status: nextStatus
        });

        showToast(
            `Marked as ${statusLabel(nextStatus).toLowerCase()}.`
        );

        return;
    }

    // Add or remove a problem from revision
    const revisionButton = event.target.closest(
        "[data-revision-id]"
    );

    if (revisionButton) {
        const id = Number(revisionButton.dataset.revisionId);
        const nextRevision = !getItem(id).revision;

        updateItem(id, {
            revision: nextRevision
        });

        showToast(
            nextRevision
                ? "Added to revision queue."
                : "Removed from revision queue."
        );

        return;
    }

    // Open problem notes
    const notesButton = event.target.closest("[data-notes-id]");

    if (notesButton) {
        openNotes(Number(notesButton.dataset.notesId));
        return;
    }

    // Open a selected topic in the problem list
    const topicButton = event.target.closest("[data-topic-open]");

    if (topicButton) {
        switchView("problems");

        document.getElementById("topicFilter").value =
            topicButton.dataset.topicOpen;

        renderProblems();
    }
});


/* ==========================================
   SEARCH AND FILTER EVENTS
   ========================================== */

document.getElementById("searchInput")
    .addEventListener("input", renderProblems);

document.getElementById("topicFilter")
    .addEventListener("change", renderProblems);

document.getElementById("difficultyFilter")
    .addEventListener("change", renderProblems);

document.getElementById("statusFilter")
    .addEventListener("change", renderProblems);


document.getElementById("clearFiltersBtn")
    .addEventListener("click", () => {

        document.getElementById("searchInput").value = "";
        document.getElementById("topicFilter").value = "all";
        document.getElementById("difficultyFilter").value = "all";
        document.getElementById("statusFilter").value = "all";

        renderProblems();
    });


/* ==========================================
   CONTINUE PRACTICE
   ========================================== */

document.getElementById("continueBtn")
    .addEventListener("click", () => {

        switchView("problems");

        const nextProblem = PROBLEMS.find(
            problem => getItem(problem.id).status !== "solved"
        );

        if (nextProblem) {
            document.getElementById("searchInput").value = "";
            document.getElementById("topicFilter").value = "all";
            document.getElementById("difficultyFilter").value = "all";
            document.getElementById("statusFilter").value = "all";

            renderProblems();

            showToast(`Next up: ${nextProblem.title}`);
        } else {
            showToast("Congratulations! All problems are solved.");
        }
    });


/* ==========================================
   BACKUP BUTTONS
   ========================================== */

document.getElementById("exportBtn")
    .addEventListener("click", exportProgress);

document.getElementById("importFile")
    .addEventListener("change", event => {

        const file = event.target.files[0];

        if (file) {
            importProgress(file);
        }

        event.target.value = "";
    });


/* ==========================================
   RESET BUTTON
   ========================================== */

document.getElementById("resetBtn")
    .addEventListener("click", resetProgress);


/* ==========================================
   MOBILE MENU
   ========================================== */

document.getElementById("menuBtn")
    .addEventListener("click", () => {

        document.getElementById("sidebar")
            .classList.toggle("open");
    });


/* ==========================================
   SAVE NOTES
   ========================================== */

document.getElementById("saveNotesBtn")
    .addEventListener("click", () => {

        if (notesProblemId === null) return;

        const text = document
            .getElementById("notesText")
            .value.trim();

        if (text) {
            state.notes[notesProblemId] = text;
        } else {
            delete state.notes[notesProblemId];
        }

        updateItem(notesProblemId, {});

        saveState();

        showToast("Notes saved.");
    });


/* ==========================================
   SOLVE PROMPT AND LEETCODE SYNC EVENTS
   ========================================== */

// Middle-click also opens problems in a new tab
document.addEventListener("auxclick", event => {
    if (event.button !== 1) return;

    const link = event.target.closest("a[href]");
    const problem = link && PROBLEMS_BY_URL.get(link.getAttribute("href"));

    if (problem) rememberPractice(problem);
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;

    checkPendingPractice();
    autoSync();
});

document.getElementById("practiceDialog")
    .addEventListener("close", event => {

        const dialog = event.target;
        const status = dialog.returnValue;

        if (status !== "solved" && status !== "attempted") return;

        updateItem(Number(dialog.dataset.problemId), { status });

        showToast(`Marked as ${statusLabel(status).toLowerCase()}.`);
    });

document.getElementById("syncNowBtn")
    .addEventListener("click", () => {

        if (state.leetcode.username) {
            syncLeetCode();
        } else {
            openSyncSettings();
        }
    });

document.getElementById("syncSettingsBtn")
    .addEventListener("click", openSyncSettings);

// Enter should save, not trigger the dialog's first (close) button
document.getElementById("leetcodeUsername")
    .addEventListener("keydown", event => {

        if (event.key !== "Enter") return;

        event.preventDefault();
        document.getElementById("syncDialog").close("save");
    });

document.getElementById("syncDialog")
    .addEventListener("close", event => {

        const action = event.target.returnValue;

        if (action === "save") {
            saveSyncSettings();
        }

        if (action === "disconnect") {
            state.leetcode = defaultState().leetcode;
            saveState();
            showToast("LeetCode disconnected.");
        }
    });

setInterval(renderSyncCard, 60 * 1000);


/* ==========================================
   INITIALIZE APPLICATION
   ========================================== */

document.getElementById("todayLabel").textContent =
    new Intl.DateTimeFormat(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric"
    }).format(new Date());

fillTopicFilter();
updateDashboard();
checkPendingPractice();
autoSync();
