#include <iostream>
#include <vector>
#include<queue>
#include <algorithm>
using namespace std;

int main()
{
    int v, e;
    cout << "Enter value of v and then e: ";
    cin >> v >> e;
    vector<vector<int>> adjList(v);
    for (int i = 1; i <= e; i++)
    {
        int a, b;
        cout << "Enter the end points of edge " << i << ": ";
        cin >> a >> b;
        adjList[a].push_back(b);
        adjList[b].push_back(a);
    }


    for (int i = 0; i < v; i++)
    {
        cout << "Adjacent Elements of i : ";
        for (int j = 0; j < adjList[i].size(); j++)
        {
            cout << adjList[i][j] << " ";
        }
        cout << endl;
    }
    vector<int> status(v,-1);
    queue<int> Q;
    Q.push(0);
    status[0]=0;
    while(!Q.empty()){
        int x=Q.front();
        Q.pop();
        for(int j=0;j<adjList[x].size();j++){
            int y=adjList[x][j];
            if(status[y]==-1){
                Q.push(y);
                status[y]=status[x]+1;
            }
        }
        cout<<x<<" ";
    }
    cout<<endl;
    for(int i=0;i<status.size();i++){
        cout<<status[i]<<" ";
    }
    return 0;
}