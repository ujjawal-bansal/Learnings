#include <stdio.h>

int fib(int N) {
    static int dat[101] = {0};
    if (N < 2) {
        return N;
    }
    if (dat[N] == 0) {
        dat[N] = fib(N - 1) + fib(N - 2);
    }
    return dat[N];
}

int main() {
    int i, x;
    for (i = 0; i < 100; i++) {
        x = fib(i);
        printf("%d-%d", i, x);
    }
    return 0;
}