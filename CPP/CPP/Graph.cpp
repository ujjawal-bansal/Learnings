#include<iostream>
#include<vector>

using namespace std;

int main(){
    int v, e;
    cout << "Enter the number of vertices and edges: ";
    cin >> v >> e;

    vector<int> adj[v];

    for (int i = 0; i < e; i++) {
        int a, b;
        cout << "Enter the endpoints of edge " << i+1 << ": ";
        cin >> a >> b;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }

    cout << "\nAdjacency List:\n";
    for (int i = 0; i < v; i++) {
        cout << i << ": ";
        for (int j = 0; j < adj[i].size(); j++) {
            cout << adj[i][j]<<",";
        }
        cout << endl;
    }

    return 0;
}