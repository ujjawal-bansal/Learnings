#include <iostream>
#include <vector>  

using namespace std;

int main()
{
    vector <int> v;
    v.push_back(2);
    v.push_back(5);

    for (int i = 0; i < v.size(); i++) {
        cout << v[i]<<" ";
    }
    for (auto it: v){
        cout<<it<<" ";
    }


    return 0;
}