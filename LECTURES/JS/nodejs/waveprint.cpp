void wavePrint(int arr[][10], int m, int n) {
 for (int i = 0; i < m; i++) {
 if (i % 2 == 0) {

 for (int j = 0; j < n; j++) {
 cout << arr[i][j];
 if (i != m - 1 || j != n - 1) {
 cout << ", ";
 }
 }
 } else {

 for (int j = n - 1; j >= 0; j--) {
 cout << arr[i][j];
 if (i != m - 1 || j != 0) { 
 cout << ", ";
 }
 }
 }
 } 
 cout << ", END" << endl;
}