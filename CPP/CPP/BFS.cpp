#include<iostream>
#include<vector>
#include<queue>
using namespace std;
int main(){
    int v,e;
    cout<<"enter number of vertices and edges:";
    cin>>v>>e;
    vector<int>adjlist[v];
    for(int i=1;i<=e;i++){
        int a,b;
        cout<<"enter the endpoints of edge"<<i;
        cin>>a>>b;
        adjlist[a].push_back(b);
        adjlist[b].push_back(a);
    }
    for (int i=0;i<v;i++){
        cout<<i<<":";
        for(int j=0;j<adjlist[i].size();j++){
            cout<<adjlist[i][j]<<" ";
        }
        cout<<endl;
    }

    vector<int>status(v,0);
    queue<int>Q;
    Q.push(0);
    status[0]=1;
    while(!Q.empty()){
        int x=Q.front();
        cout<<x<<" ";
        Q.pop();
        for(int j=0;j<adjlist[x].size();j++){
            int y=adjlist[x][j];
            if (status[y]==0){
                status[y]=1;
                Q.push(y);
            }
        }
    }
    return 0;
}

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> bfsOfGraph(int V, vector<int> adj[]) {
    vector<int> visited(V, 0);
    vector<int> bfs;
    queue<int> q;

    q.push(0);
    visited[0] = 1;

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        bfs.push_back(node);

        for (int y : adj[node]) {
            if (visited[y] == 0) {
                visited[y] = 1;
                q.push(y);
            }
        }
    }

    return bfs;
}