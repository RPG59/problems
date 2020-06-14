const root = {
    val: 1,
    edges: [{
        val: 2,
        edges: []
    },
    {
        val: 3,
        edges: [{
            val: 99,
            edges: []
        }]
    },
    {
        val: 4,
        edges: []
    }]
}

function dfs(v) {
    v.disc = true;
    console.log(v.val);
    
    for(let i = 0; i < v.edges.length; ++i) {
        const w = v.edges[i];
        if(!w.disc) {
            dfs(w);
        }
    }
}
dfs(root, root.edges[0]);

const res = [];

function mydfs(cnd, target, curr, start) {
    if(target < 0)
        return;
    if(target === 0) {       
        res.push(Object.assign([], curr));
        return;
    }

    for(let i = start; i < cnd.length; ++i){
        curr.push(cnd[i]);
        
        mydfs(cnd, target - cnd[i], curr, i);
        curr.pop();
    }
}

mydfs([1, 2, 7], 7, [], 0);

console.log(res);
