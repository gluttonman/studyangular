/**
 * Created by Administrator on 2015/11/9.
 */
function a(num){
    if(num==1){
        console.info(num);
    }else{
        var total=1 ;
        for(var i=num;i>=1;i--){
            total =total*i;
        }
        console.info(total);
        a(num-1)
    }
}

console.info(a(10));