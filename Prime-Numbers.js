let numbers=prompt("Hãy nhập vào số lượng số nguyên tố cần in ra");
let count=0;
let N=2;
while(count<numbers)
{
    if(test_prime(N)===true)
    {
        document.write(+N+ " ");
        count++;
    }
    N++;

}
function test_prime(n)
{

    if (n===1)
    {
        return false;
    }
    else if(n === 2)
    {
        return true;
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}
