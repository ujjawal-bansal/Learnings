#include <iostream>
#include <vector>
using namespace std;

void dfs_recursive(i,vector< vector< int > > &adj,vector<int>&visited){
    visited[i]=1;
    for(int j=0;j<=adj[i].size(); j++){
        int x= adj[i][j];
        if(visited[x]==0){
            dsf_recusrive(x,vector< vector< int > > &adj,vector<int>&visited);}
    }
}
void dfs(int i,vector< vector< int > > &adj, vector< bool >&visited){

    for(int i=0;i<v;i++){
        if(visited[i] == 0){
            dfs_recursive(i,vector< vector< int > >adj,vector<int>visited)
    }

}

int main( ){
    int v,e;
    cout <<"Enter number of vertices and edges:";
    cin>> v>>e ;

    vector< vector< int > >adj(v);

    cout<<"Enter "<<e<<" directed edges (from to):"<<endl;
    for(int i=0;i<e;++i){
        int u ,v;
        cin>>u>>v ;
        adj[ u ].push_back( v );
    }

    int start ;
    cout<< "Enter starting node for DFS: ";
    cin >>start;

    vector<bool > visited( v ,false );
    cout <<"DFS Traversal: ";
    dfs( start , adj , visited );
    cout<<endl;

    return 0;
}