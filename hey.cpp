#include<iostream>
using namespace std;
int main()
{
       
    int a = 5 ;
    int b = 2;
    
    int x = a+b;
    a = x-a;
    b = x-b;

    cout<<"reverse of a numbet is : "<<a<<" "<<b;
       
       
    return 0;
}