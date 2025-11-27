#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cout <<"Enter size: ";
    cin >> n;
    vector<vector<int>> matrix(n, vector<int>(n,100)); 
    cout <<"The matrix is:"<< endl;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) { 
            cout << matrix[i][j]<< " ";
        }
        cout<<endl;
    }
return 0;
}