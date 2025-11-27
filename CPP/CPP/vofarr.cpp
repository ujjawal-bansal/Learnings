#include <iostream>
#include <vector>  

using namespace std;

int main()
{
    vector <int> av[5];
    av[0].push_back(1);
    av[0].push_back(1);
    av[0].push_back(1);
    av[0].push_back(1);
    av[0].push_back(1);

    av[1].push_back(1);
    av[1].push_back(1);
    av[1].push_back(1);
    av[1].push_back(1);

    for (int i = 0; i < 5; i++) {
        for (int j=0; j<av[i].size(); j++){
            cout << av[i][j]<<" ";
        }
        cout<< endl;
    }


    return 0;
}